(ns collab-draw.core
    (:require [reagent.core :as reagent :refer [atom]]
              [jaki.couch :as couch]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]))

(defonce starting_state (atom {:row0 
                                  {:col0 "white" :col1 "white" :col2 "white" :col3 "white"} 
                               :row1 
                                  {:col0 "white" :col1 "white" :col2 "white" :col3 "white"} 
                               :row2
                                  {:col0 "white" :col1 "white" :col2 "white" :col3 "white"} 
                               :row3 
                                  {:col0 "white" :col1 "white" :col2 "white" :col3 "white"}}))


(defonce state starting_state)
(def couch_host "http://172.20.0.2:5984")
(def grid_size 4)

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

(defn index_tag [board row_tag col_tag]
  (let [row (keyword row_tag)
        col (keyword col_tag)
       ]
    (-> board 
        (get row)
        (get col))
  ) 
)

;element for a single pixel in the display
(defn pixel [color]
  [:span.pixel {:style {:background-color color
                        :border-color "grey"}}])

(defn create_grid [board so_far]
  (if (empty? board) 
    so_far 
    (let [current_row (first (keys board))]
      (if (empty? (current_row board))
        (create_grid (dissoc board current_row) (conj so_far [:br]))
        (let [current_col (first (keys (current_row board)))]
          (create_grid 
            (update-in board [current_row] dissoc current_col) 
            (conj so_far [pixel (current_col (current_row board))]))
        )  
      )
    )
  )
)

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
    (reset! state (-> resp 
                      :rows
                      first
                      :doc
                      :board))
  )
)

; Initialize couchdb connection and set up rendering of components
(defn mount-root []
  (couch/set-host! couch_host)
  (couch/set-default-db "drawing_board")
  (couch/get-docs (fn [resp] (update_state resp))) 
  (reagent/render [board] (.getElementById js/document "app")))

; Entry point to the program
(defn init! [] (mount-root))
