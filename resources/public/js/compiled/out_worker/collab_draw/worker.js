// Compiled by ClojureScript 1.10.339 {}
goog.provide('collab_draw.worker');
goog.require('cljs.core');
goog.require('jaki.couch');
goog.require('cljs_http.client');
goog.require('clojure.string');
goog.require('cljs.core.async');
collab_draw.worker.couch_host = "http://172.20.0.2:5984";
collab_draw.worker.db_name = "drawing_board";
collab_draw.worker.do_push = (function collab_draw$worker$do_push(msg){
return null;
});
collab_draw.worker.pull_docs = (function collab_draw$worker$pull_docs(){
return setInterval((function (){
return jaki.couch.get_docs.call(null,(function (resp){
return self.postMessage(cljs.core.clj__GT_js.call(null,resp));
}));
}),(100));
});
collab_draw.worker.parse_request = (function collab_draw$worker$parse_request(evt){
var msg = evt.data;
if(cljs.core._EQ_.call(null,msg,"start_pull")){
return collab_draw.worker.pull_docs.call(null);
} else {
return false;

}
});
jaki.couch.set_host_BANG_.call(null,collab_draw.worker.couch_host);
jaki.couch.set_default_db.call(null,collab_draw.worker.db_name);
self.onmessage = collab_draw.worker.parse_request;

//# sourceMappingURL=worker.js.map?rel=1531748725501
