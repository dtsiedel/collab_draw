(ns collab-draw.prod
  (:require [collab-draw.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
