// Compiled by ClojureScript 1.10.339 {}
goog.provide('collab_draw.worker');
goog.require('cljs.core');
goog.require('jaki.couch');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
collab_draw.worker.couch_host = "http://172.20.0.2:5984";
collab_draw.worker.db_name = "drawing_board";
collab_draw.worker.pull_docs = (function collab_draw$worker$pull_docs(){
return setInterval((function (){
return jaki.couch.get_docs.call(null,(function (resp){
return self.postMessage(cljs.core.clj__GT_js.call(null,resp));
}));
}),(100));
});
jaki.couch.set_host_BANG_.call(null,collab_draw.worker.couch_host);
jaki.couch.set_default_db.call(null,collab_draw.worker.db_name);
self.onmessage = collab_draw.worker.pull_docs;

//# sourceMappingURL=worker.js.map?rel=1531421479330
