(ns collab-draw.core
    (:require [reagent.core :as reagent :refer [atom]]
              [jaki.couch :as couch]
              [jaki.req :as req]
              [clojure.walk :as walk]
;              [goog.object :as gobject]
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
(defonce rev (atom 0)) ;the current revision of our board

(def couch_host "http://172.20.0.2:5984")
(def db_name "drawing_board")

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

; get a single color from our board map
(defn index_tag [board row_tag col_tag]
  (let [row (keyword row_tag)
        col (keyword col_tag)
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
        updated_board (assoc-in current [row_name col_name] color)
        new_doc (assoc {"_id" "board" } :board updated_board)       
        url (str couch_host "/" db_name "/board")
        new_doc (merge {:_rev @rev} new_doc)
        new_doc (clj->js (walk/stringify-keys new_doc))
       ]

    (println rev)
    (println new_doc)

    (req/put url nil new_doc)
  )
)

; element for a single pixel in the display
(defn pixel [color x y]
  [:span.pixel {:on-click #(update_color x y "cyan") 
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

(defn board []
  (generate_divs @state)
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

; Initialize couchdb connection and set up rendering of components
(defn mount-root []
  (couch/set-host! couch_host)
  (couch/set-default-db db_name)
  (pull_docs)
  (js/setInterval #(pull_docs) 1500)
  (reagent/render [board] (.getElementById js/document "app")))

; Entry point to the program
(defn init! [] (mount-root))
