(ns collab-draw.core
    (:require [reagent.core :as reagent :refer [atom]]
              [clojure.walk :as walk]
              [cljs.reader :as edn]
              [secretary.core :as secretary :include-macros true]
              [clojure.string :as string]
              [accountant.core :as accountant]
    )
)

(defonce starting_state (atom {}))
(defonce state starting_state)
(defonce draw_color (atom "rgb(0,0,0)"))
(defonce user_count_atom (atom 1))
(defonce light_state (atom false))
(defonce dropping (atom false))

(defonce color_red (atom 0))
(defonce color_green (atom 0))
(defonce color_blue (atom 0))

(defonce ws (js/WebSocket. "ws://10.16.200.54:3449/message"))

(defn get_color [r g b]
  (str "rgb(" r "," g "," b")")
)

(defn recompute_draw_color []
  (let [r @color_red
        g @color_green
        b @color_blue]
    (reset! draw_color (get_color r g b))
    (println @color_red)
  )
)

(defn update_draw_color! [color] 
  (println color)
  (let [
        colors (clojure.string/split color #",")
        r (-> colors first (subs 4))
        g (second colors)
        b (last colors)
        b (subs b 0 (dec (count b)))
       ]

    (println r)
    (println g)
    (println b)

    (reset! color_red r)
    (reset! color_green g)
    (reset! color_blue b)
    (recompute_draw_color)
  )
)

; Helper to index into our state map for (row, col) pairs
(defn index [board row_num col_num]
  (let [row (keyword (str "row" row_num))
        col (keyword (str "col" col_num))
       ]
    (-> board 
        (get row)
        (get col))
  ) 
)

; takes a rowname or column name and gives a numeric index
(defn get_index_from_tag [tag]
  (let [strn (str tag)
        index (subs strn 4 (count strn)) ;strip off "row" or "col"
       ]
      index
  )
)

; takes a numeric index and row/col and makes a tag from it 
(defn get_tag_from_index[kind index]
  (keyword (str kind index))
)

(defn slider [color value_atom]
  [:div
    [:input.rgb_slider {:type "range" :value @value_atom :min 0 :max 255
                        :class (str "rgb_color " color)
                        :on-change (fn [e] (do (println "Update" color) (reset! value_atom (.. e -target -value)) (recompute_draw_color)))}] 
  ]
)

(defn slider_container []
  [:span.slider_container
    [slider "red" color_red]
    [slider "green" color_green]
    [slider "blue" color_blue]
  ]
)

;tell the server about the board update through our websocket
(defn notify_server [x y]
  (.send ws (str {"color" @draw_color "x" x "y" y}))
)

; push change to database with new color
(defn update_pixel_color [x y]
  (notify_server x y)
  (let [
        row_name (get_tag_from_index "row" x) 
        col_name (get_tag_from_index "col" y)
       ]

    (swap! state assoc-in [row_name col_name] @draw_color) ;pre-update so it shows before the database change
  )
)

;build the table that represents our board
(defn generate_table [state_atom]
  (let [state @state_atom]
    (if (empty? state)
      [:div.loading "Loading board..."]
      [:table#board {:style {:cursor (if @dropping "crosshair" "default")}} [:tbody
        (for [row (keys state)]
          ^{:key row}
          [:tr
            (for [col (keys (row state))]
              (let [color (get-in state [(keyword row) (keyword col)])]
                ^{:key (str row col)}
                [:td.pixel {
                            :style {:background-color color}
                            :on-click #(if @dropping (do (update_draw_color! (str color)) (swap! dropping not)) (update_pixel_color (get_index_from_tag row) (get_index_from_tag col)))
                           }
                ]
              )
            )
          ]
        )
      ]]
    )
  )
)

(defn color_rep [text]
  [:div {:id "color-rep" 
         :style {:background-color @draw_color}}
          text]
)

(defn space []
   [:span {:dangerouslySetInnerHTML {:__html "&nbsp;"}}]
)

(defn light_switch [state]
  [:div.switch-container
    [space]
    [:label.switch
      [:input {:type "checkbox"
               :on-click #(swap! light_state not)
               :defaultChecked @light_state}]
      [:span {:class "slider round"}]
    ]
    [space] 
    [:span.vert-center {:style {:user-select "none"
                                :color (if @light_state "white" "black")}} "Toggle Dark Theme"]
    [space]
  ]
)

(defn dropper []
  [:div.dropper_container {:style {:background-color @draw_color
                                   :border-style "solid"
                                   :border-color "white"
                                   :border-width :thin}}
    [:img.dropper {:src "/images/dropper.png" :style {:width "48px" :height "48px"}
                   :on-click #(swap! dropping not)}
    ]
  ]
)

(defn user_count []
  [:span#user_count 
    (str "Online Users: " @user_count_atom)
  ]
)

(defn container []
  [:div.container {:style {:background-color (if @light_state "black" "white")}}
    [:div.color-bar 
      [color_rep "Current Color"] [space] [slider_container] [space] [space] [dropper] [space] [user_count]
    ]
    [:br]
    (generate_table state)
    [:br]
    [light_switch @light_state]
  ]
)

; Update our state atom when we receive the document
(defn update_state [board]
  (reset! state board)
)

(defn update_user_count [n]
  (reset! user_count_atom n)
)

(defn receive_board [strn]
  (if (clojure.string/starts-with? strn "pong") 
    (do) ;pass on pong from server
    (let [
          data (edn/read-string strn)
          board (:board (:doc data))
          user_count (:user_count data)
         ]
      (update_state board)
      (update_user_count user_count)
    )
  )
)

; Initialize websocket connection and set up rendering of components
(defn mount-root []
  (set! (.-onmessage ws) (fn [x] (receive_board (.-data x)))) ;handle data from websocket
  (set! (.-onopen ws) (fn [] (do 
                                (.send ws "board")
                                (.setInterval js/window (fn [] (.send ws "ping")) 10000))))

  (reagent/render [container] (.getElementById js/document "app")) 
)

; Entry point to the program
(defn init! [] 
  (mount-root)
)
