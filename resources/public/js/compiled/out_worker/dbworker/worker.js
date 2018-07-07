// Compiled by ClojureScript 1.10.339 {}
goog.provide('dbworker.worker');
goog.require('cljs.core');
dbworker.worker.test_worker = (function dbworker$worker$test_worker(){
return self.postMessage("hello from worker");
});
self.onmessage = dbworker.worker.test_worker;

//# sourceMappingURL=worker.js.map?rel=1530951123263
