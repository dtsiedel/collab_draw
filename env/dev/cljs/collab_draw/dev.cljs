(ns ^:figwheel-no-load collab-draw.dev
  (:require
    [collab-draw.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
