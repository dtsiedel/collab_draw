(ns collab_draw.worker)

(defn test_worker []
  (.postMessage js/self "hello from worker"))

(set! (.-onmessage js/self) test_worker)