(ns collab-draw.handler
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [collab_draw.middleware :refer [wrap-middleware]]
            [com.ashafa.clutch :as clutch]
            [org.httpkit.server :refer [with-channel on-close on-receive send!]]
            [config.core :refer [env]]))

(def clients (atom {}))

(defn to_keyword [idx key_type]
  (keyword (str key_type idx))
)

(defn handle_update [strn]
  (println strn)
  (let [
        db_path "http://10.16.200.54:5984/drawing_board"
        current (clutch/with-db db_path (clutch/get-document "board"))
        json (eval (read-string strn))
        row_key (to_keyword (get json "x") "row")
        col_key (to_keyword (get json "y") "col")
        color (get json "color")
        new_doc (assoc-in current [:board row_key col_key] color)
       ]
    (clutch/put-document db_path new_doc)
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

(def app (wrap-middleware #'routes))
