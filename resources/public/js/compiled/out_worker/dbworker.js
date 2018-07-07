// Compiled by ClojureScript 1.10.339 {}
goog.provide('dbworker');
goog.require('cljs.core');
dbworker.test_worker = (function dbworker$test_worker(){
return self.postMessage("hello from worker");
});
self.onmessage = dbworker.test_worker;

//# sourceMappingURL=dbworker.js.map?rel=1530950328967
