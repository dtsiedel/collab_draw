(ns collab_draw.put_worker
  (:require [jaki.couch :as couch]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
  )
)

(def couch_host "http://172.20.0.2:5984")
(def db_name "drawing_board")

(defn pull_docs []
;  (js/setInterval 
;    #(couch/get-docs (fn [resp]  
;      (.postMessage js/self (clj->js resp))
;    ))
;    100
;  )
  (.postMessage "hello")
)

;(couch/set-host! couch_host)
;(couch/set-default-db db_name)

(set! (.-onmessage js/self) pull_docs)
