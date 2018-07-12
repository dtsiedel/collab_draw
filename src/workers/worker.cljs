(ns collab_draw.worker
  (:require [jaki.couch :as couch]))

(def couch_host "http://172.20.0.2:5984")
(def db_name "drawing_board")

(defn test_worker []
  (js/setInterval 
    #(couch/get-docs (fn [resp]  
      (.postMessage js/self (clj->js resp))
    ))
    100
  )
)

(couch/set-host! couch_host)
(couch/set-default-db db_name)

(set! (.-onmessage js/self) test_worker)
