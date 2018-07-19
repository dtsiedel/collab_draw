(ns collab-draw.core
    (:require [reagent.core :as reagent :refer [atom]]
              [jaki.couch :as couch]
              [jaki.req :as req]
              [clojure.walk :as walk]
              [secretary.core :as secretary :include-macros true]
              [clojure.string :as string]
              [accountant.core :as accountant]))

(defonce starting_state (atom {}))
(defonce state starting_state)
(defonce rev (atom 0)) ;the current revision of our board's document
(defonce draw_color (atom "#000000"))
(defonce light_state (atom false))

(defonce color_red (atom 0))
(defonce color_green (atom 0))
(defonce color_blue (atom 0))

(defonce db_worker (js/Worker. "js/bootstrap_worker.js"))

(def couch_host "http://10.16.200.54:5984")
(def db_name "drawing_board")

(declare pull_docs) ;getting annoyed trying to order these things

(defn get_color [r g b]
  (str "rgb(" r "," g "," b")")
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

(defn recompute_draw_color []
  (let [r @color_red
        g @color_green
        b @color_blue]
    (reset! draw_color (get_color r g b))
  )
)

(defn slider [color value_atom]
  [:div
    [:input.rgb_slider {:type "range" :value @value_atom :min 0 :max 255
                        :class (str "rgb_color " color)
                        :on-change (fn [e] (do (reset! value_atom (.. e -target -value)) (recompute_draw_color)))}] 
  ]
)

(defn slider_container []
  [:span.slider_container
    [slider "red" color_red]
    [slider "green" color_green]
    [slider "blue" color_blue]
  ]
)

; push change to database with new color
(defn update_color [x y color]
  (let [row_name (get_tag_from_index "row" x) 
        col_name (get_tag_from_index "col" y)
        current @state
        updated_board (assoc-in current [row_name col_name] @color)
        new_doc (assoc {"_id" "board" } :board updated_board)       
        url (str couch_host "/" db_name "/board")
        new_doc (merge {:_rev @rev} new_doc)
        new_doc (clj->js (walk/stringify-keys new_doc))
       ]
    (req/put url nil new_doc)
  )
)

; element for a single pixel in the display
(defn pixel [color x y]
  [:span.pixel {:on-click (fn [a] (update_color x y draw_color))
                :style {:background-color color}}])

; recursive function to make the grid out of [pixel] and [:br] tags
(defn create_grid [board so_far]
  (if (empty? board) 
    so_far 
    (let [current_row (first (keys board))
          row_index (get_index_from_tag current_row)] 
      (if (empty? (current_row board))
        (create_grid (dissoc board current_row) (conj so_far [:br]))
        (let [current_col (first (keys (current_row board)))
              col_index (get_index_from_tag current_col)]
          (create_grid 
            (update-in board [current_row] dissoc current_col) 
            (conj so_far [pixel (current_col (current_row board)) row_index col_index]))
        )  
      )
    )
  )
)

; mostly just calls create_grid
(defn generate_divs [board]
  (if (empty? board)
    [:div.loading "loading board..."]
    (let [rows (keys board)
          root [:div {:id "board"}]
          board (create_grid board root)]
        board
    )
  )
)

(defn one_random_hex []
    (rand-nth [0 1 2 3 4 5 6 7 8 9 "a" "b" "c" "d" "e" "f"])
)

(defn hex_helper [so_far n]
    (if (<= n 0)
        so_far
        (hex_helper (conj so_far (one_random_hex)) (dec n))
    )
)

; return a vector of n random hex digits
(defn n_random_hex [n]
  (hex_helper [] n)
)

(defn random_color []
  (str "#" (apply str (n_random_hex 6)))
)

(defn update_draw_color! 
  ([] (update_draw_color! (random_color)))
  ([color] (reset! draw_color color))
)


(defn color_rep [text]
  [:div {:id "color-rep" 
         :style {:background-color @draw_color}}
          text]
)

(defn color_node [color]
  [:div.color-node {:style {:background-color color}
                    :on-click #(update_draw_color! color)}]
)

(defn color_picker []
  [:div {:id "color-picker"}
      [:div.row
        [color_node "red"]
        [color_node "orange"]
        [color_node "yellow"]
      ]
      [:div.row
        [color_node "green"]
        [color_node "blue"]
        [color_node "purple"]
      ]
      [:div.row
        [color_node "black"]
        [color_node "white"]
        [color_node "grey"]
      ]
  ]
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

(defn container []
  [:div.container {:style {:background-color (if @light_state "black" "white")}}
    [:div.color-bar 
      [color_rep "Current Color"] [space] [slider_container]
    ]
    [:br]
    (generate_divs @state)
    [:br]
    [light_switch @light_state]
  ]
)

; Update our state atom when we receive the document
(defn update_state [resp]
  (if (not (contains? resp :rows))
    (reset! state starting_state)  
    (do 
      (reset! state (-> resp 
                        :rows
                        first
                        :doc
                        :board))
      (reset! rev (-> resp 
                      :rows
                      first
                      :doc
                      :_rev))
    )
  )
)

; fetch the document, use it to update our state atom 
(defn pull_docs []
  (couch/get-docs (fn [resp] (update_state resp))) 
)

(defn receive_docs [msg]
  (update_state (walk/keywordize-keys (js->clj (.-data msg))))
)

; Initialize couchdb connection and set up rendering of components
(defn mount-root []
    (couch/set-host! couch_host)
    (couch/set-default-db db_name)

    (set! (.-onmessage db_worker) receive_docs)
    (.postMessage db_worker "start_pull")

    (reagent/render [container] (.getElementById js/document "app"))
)

; Entry point to the program
(defn init! [] 
  (mount-root)
)
