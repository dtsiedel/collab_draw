(ns collab-draw.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [collab-draw.core-test]))

(doo-tests 'collab-draw.core-test)
