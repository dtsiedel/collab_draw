(ns collab-draw.handler
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [collab_draw.middleware :refer [wrap-middleware]]
            [org.httpkit.server :refer [with-channel on-close send!]]
            [config.core :refer [env]]))

(def clients (atom {}))

(defn ws [req]
  (with-channel req con
    (swap! clients assoc con true)
    (println con " connected")
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
