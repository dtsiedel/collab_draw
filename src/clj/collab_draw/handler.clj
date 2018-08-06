(ns collab-draw.handler
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [collab_draw.middleware :refer [wrap-middleware]]
            [clojure.walk :as walk]
            [com.ashafa.clutch :as clutch]
            [org.httpkit.server :refer [with-channel on-close on-receive send!]]
            [config.core :refer [env]]))

;TODO: allow server to reestablish watcher if it times out

(def clients (atom {}))
(def board (atom {}))
(def board_watcher (atom nil))
(def max_retries 4)

(defn to_keyword [idx key_type]
  (keyword (str key_type idx))
)

(defn notify_clients [incoming]
  (println incoming)
  
  (let [
          doc (:doc incoming)
          row (keyword (:row doc))
          col (keyword (:col doc))
          msg {:doc doc}
          msg (assoc msg :user_count (count (keys @clients)))
       ]
    (swap! board assoc-in [row col] (:color doc))
    (doseq [client @clients]
      (send! (key client) (str (assoc msg :update true)))
    )
  )
  
)

(defn update_board [docs]
  (if (empty? docs)
    (do 
      (println "done")
      (println @board)
    )
    (do 
      (let [
            d (first docs)
            row (:row d)
            col (:col d)
            color (:color d)
           ]
          (swap! board assoc-in [(keyword row) (keyword col)] color)
          (update_board (rest docs))
      )
    )
  )
)

(defn get_full_board []
  (let [
          all_docs (clutch/all-documents "http://10.16.200.54:5984/drawing_board" {:include_docs true})
          docs (map :doc all_docs)
       ]
      (update_board docs)
  )
)

;create a change agent to listen to the database and pass changes back to clients
(defn create_watcher []
  (reset! board_watcher 1) ;just a flag to indicate the watcher is already started
  (get_full_board)
  (clutch/watch-changes "http://10.16.200.54:5984/drawing_board" :getchanges (fn [x] (notify_clients x)) :include_docs true :timeout 35000)
)

;triggered on each message from client over websocket
(defn handle_message [strn con]
  (println strn)
  
  (when (nil? @board_watcher) 
    (create_watcher)
  )

  (cond 
    (clojure.string/starts-with? strn "board")
      (let [
            b @board
            msg {:board b}
            msg (assoc msg :user_count (count (keys @clients)))
           ]
        (println b)
        (send! con (str msg) false) ;send back to only the one requesting
      )

    (clojure.string/starts-with? strn "ping")
      (send! con "pong" false)

    :else
      (let [
            json (clojure.edn/read-string strn)
            row_key (to_keyword (get json "x") "row")
            col_key (to_keyword (get json "y") "col")
            id (str (name row_key) "." (name col_key))
            current (clutch/with-db "http://10.16.200.54:5984/drawing_board" (clutch/get-document id))
            color (get json "color")
            new_doc (assoc current :color color)
           ]
          (clutch/with-db "http://10.16.200.54:5984/drawing_board" (clutch/put-document new_doc))
      )
  )
)

(defn ws [req]
  (with-channel req con
    (swap! clients assoc con true)
    (println con " connected")
    (on-receive con #(handle_message % con))
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

(defroutes routes
  (GET "/" [] (loading-page))
  (GET "/about" [] (loading-page))

  (GET "/message" [] ws)
  
  (resources "/")
  (not-found "Not Found"))


;start the server
(def app (wrap-middleware #'routes))
