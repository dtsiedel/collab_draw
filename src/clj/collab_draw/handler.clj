(ns collab-draw.handler
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [collab_draw.middleware :refer [wrap-middleware]]
            [clojure.walk :as walk]
            [com.ashafa.clutch :as clutch]
            [org.httpkit.server :refer [with-channel on-close on-receive send!]]
            [config.core :refer [env]]))

(def clients (atom {}))
(def board_watcher (atom nil))
(def max_retries 4)

(defn to_keyword [idx key_type]
  (keyword (str key_type idx))
)

(defn notify_clients [document]
  (doseq [client @clients]
    (send! (key client) (str document) false)
  )
)

;create a change agent to listen to the database and pass changes back to clients
(defn create_watcher []
  (reset! board_watcher 1) ;just a flag to indicate the watcher is already started
  (clutch/watch-changes "http://10.16.200.54:5984/drawing_board" :getchanges (fn [x] (notify_clients x)) :include_docs true)
)

(defn trusty_put [path doc idx]
  (try
    (clutch/put-document path doc)
    (catch Exception e (if (< idx max_retries) (trusty_put path doc (inc idx))))
  )
)

;easier to just send a pong to all instead of singling out the client that pinged us
;obviously bad at scale
(defn pong_all []
  (doseq [client @clients]
    (send! (key client) "pong" false)
  )
)

;triggered on each message from client over websocket
(defn handle_update [strn]
  (println strn)
  
  (when (nil? @board_watcher) 
    (create_watcher)
  )

  (cond 
    (clojure.string/starts-with? strn "board")
      (let [db_path "http://10.16.200.54:5984/drawing_board"
            current (clutch/with-db db_path (clutch/get-document "board"))]
        (trusty_put db_path current 0) ;put to update board and trigger change
      )

    (clojure.string/starts-with? strn "ping")
      (pong_all)

    :else
      (let [
            db_path "http://10.16.200.54:5984/drawing_board"
            current (clutch/with-db db_path (clutch/get-document "board"))
            json (eval (read-string strn)) ;clojure can turn the string it receives into a native map with this (although it's kind sketch)
            row_key (to_keyword (get json "x") "row")
            col_key (to_keyword (get json "y") "col")
            color (get json "color")
            new_doc (assoc-in current [:board row_key col_key] color)
           ]
        (trusty_put db_path new_doc 0)
      )
  )
)

(defn ws [req]
  (with-channel req con
    (swap! clients assoc con true)
    (println con " connected")
    (on-receive con #(handle_update %))
    (on-close con (fn [status]
                    (swap! clients dissoc con)
                    (println con " disconnected. status: " status)
                  )
    )
  )
)

(def mount-target
  [:div#app]
)

(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))])

(defn loading-page []
  (html5
    (head)
    [:body {:class "body-container"}
     mount-target
     (include-js "/js/app.js")]))

(defn write-message [message]
  (doseq [client @clients]
    (send! (key client) message false)
  )
)

(defroutes routes
  (GET "/" [] (loading-page))
  (GET "/about" [] (loading-page))

  (GET "/message" [] ws)
  
  (resources "/")
  (not-found "Not Found"))


;start the server
(def app (wrap-middleware #'routes))
