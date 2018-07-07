(ns collab-draw.core
    (:require [reagent.core :as reagent :refer [atom]]
              [jaki.couch :as couch]
              [jaki.req :as req]
              [butler.core :as butler] 
              [clojure.walk :as walk]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]))

(defonce starting_state (atom {:row0 
                                  {:col0 "white" :col1 "white" :col2 "white" :col3 "white" :col4 "white"} 
                               :row1 
                                  {:col0 "white" :col1 "white" :col2 "white" :col3 "white" :col4 "white"} 
                               :row2
                                  {:col0 "white" :col1 "white" :col2 "white" :col3 "white" :col4 "white"} 
                               :row3 
                                  {:col0 "white" :col1 "white" :col2 "white" :col3 "white" :col4 "white"} 
                               :row4
                                  {:col0 "white" :col1 "white" :col2 "white" :col3 "white" :col4 "white"}}
                        ))


(defonce state starting_state)
(defonce rev (atom 0)) ;the current revision of our board's document
(defonce draw_color (atom "#FFFFF"))
(defonce question_color (atom "purple"))

(def couch_host "http://172.20.0.2:5984")
(def db_name "drawing_board")

(declare pull_docs) ;getting annoyed trying to order these things

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
  (let [string (str tag)]
    (subs string (dec (count string)) (count string))
  )
)

; takes a numeric index and row/col and makes a tag from it 
(defn get_tag_from_index[kind index]
  (keyword (str kind index))
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
    (pull_docs)
  )
)

; element for a single pixel in the display
(defn pixel [color x y]
  [:span.pixel {:on-click (fn [a] (update_color x y draw_color))
                :style {:background-color color :border-color "grey"}}])


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
  (let [rows (keys board)
        root [:div {:id "board"}]
        board (create_grid board root)]
      board
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

(defn random_button []
  [:div.random_button {:style {:background-color @question_color}
                       :on-click #(update_draw_color!)} "?"]
)

(defn board []
  [:div.container
    [:div.color-bar 
      [color_rep "Current Color"] [space] [color_picker] [space] [random_button]
    ]
    [:br]
    (generate_divs @state)
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

(defn new_random_color []
  (reset! question_color (random_color))
)

; Initialize couchdb connection and set up rendering of components
(defn mount-root []
  (couch/set-host! couch_host)
  (couch/set-default-db db_name)
  (pull_docs)
  (js/setInterval #(new_random_color) 250)
  (js/setInterval #(pull_docs) 1000) ;TODO: replace with a web worker listening on _changes
  (reagent/render [board] (.getElementById js/document "app"))
)

; Entry point to the program
(defn init! [] (mount-root))
