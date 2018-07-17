(ns collab_draw.worker
  (:require [jaki.couch :as couch]
            [cljs-http.client :as http]
            [clojure.string :as str]
            [cljs.core.async :refer [<!]]
  )
)

;(def couch_host "http://172.20.0.2:5984")
(def couch_host "http://10.16.200.54:5984")
(def db_name "drawing_board")


(defn do_push [msg]
  
)

(defn pull_docs []
  (js/setInterval 
    #(couch/get-docs (fn [resp]  
      (.postMessage js/self (clj->js resp))
    ))
    100
  )
)

(defn parse_request [evt]
  (let [msg (.-data evt)]
    (cond 
      (= msg "start_pull") (pull_docs)
      :else false
    )
  )
)

(couch/set-host! couch_host)
(couch/set-default-db db_name)

(set! (.-onmessage js/self) parse_request)
