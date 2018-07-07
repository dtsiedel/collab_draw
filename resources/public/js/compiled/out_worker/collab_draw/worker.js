// Compiled by ClojureScript 1.10.339 {}
goog.provide('collab_draw.worker');
goog.require('cljs.core');
collab_draw.worker.test_worker = (function collab_draw$worker$test_worker(){
return self.postMessage("hello from worker");
});
self.onmessage = collab_draw.worker.test_worker;

//# sourceMappingURL=worker.js.map?rel=1530951133826
