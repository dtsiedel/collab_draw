(ns collab-draw.server
    (:require [collab-draw.handler :refer [app]]
              [config.core :refer [env]]
              [org.httpkit.server :refer [run-server]]
              [ring.adapter.jetty :refer [run-jetty]])
    (:gen-class))

(defn -main [& args]
  (let [port (or (env :port) 3000)]
    (run-server app {:port port :join? false})))
