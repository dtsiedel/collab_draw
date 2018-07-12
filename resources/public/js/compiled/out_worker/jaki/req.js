// Compiled by ClojureScript 1.10.339 {}
goog.provide('jaki.req');
goog.require('cljs.core');
goog.require('jaki.util');
goog.require('goog.net.XhrIo');
goog.require('goog.json');
jaki.req.parse_json = (function jaki$req$parse_json(s){
if(cljs.core.truth_(JSON)){
return JSON.parse(s);
} else {
return goog.json.parse(s);
}
});
/**
 * Carries out an HTTP request, converting any payload from Clojure map to JSON string,
 *   and passes JSON string response to callback as a Clojure map.
 */
jaki.req.request = (function jaki$req$request(var_args){
var G__32983 = arguments.length;
switch (G__32983) {
case 1:
return jaki.req.request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jaki.req.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jaki.req.request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jaki.req.request.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return jaki.req.request.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jaki.req.request.cljs$core$IFn$_invoke$arity$1 = (function (url){
return jaki.req.request.call(null,url,null,"GET",null,null);
});

jaki.req.request.cljs$core$IFn$_invoke$arity$2 = (function (url,callback){
return jaki.req.request.call(null,url,callback,"GET",null,null);
});

jaki.req.request.cljs$core$IFn$_invoke$arity$3 = (function (url,callback,method){
return jaki.req.request.call(null,url,callback,method,null,null);
});

jaki.req.request.cljs$core$IFn$_invoke$arity$4 = (function (url,callback,method,payload){
return jaki.req.request.call(null,url,callback,method,payload,null);
});

jaki.req.request.cljs$core$IFn$_invoke$arity$5 = (function (url,callback,method,payload,headers){
var do_callback = ((cljs.core.fn_QMARK_.call(null,callback))?(function (e){
return callback.call(null,cljs.core.js__GT_clj.call(null,jaki.req.parse_json.call(null,e.target.getResponseText()),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}):null);
var payload__$1 = ((((typeof payload === 'string') || (typeof payload === 'number') || ((payload == null))))?payload:goog.json.serialize(((((cljs.core.map_QMARK_.call(null,payload)) || (cljs.core.coll_QMARK_.call(null,payload))))?jaki.util.clj__GT_js.call(null,payload):payload)));
var headers__$1 = ((cljs.core.map_QMARK_.call(null,headers))?jaki.util.clj__GT_js.call(null,headers):headers);
return goog.net.XhrIo.send(url,do_callback,method,payload__$1,headers__$1);
});

jaki.req.request.cljs$lang$maxFixedArity = 5;

jaki.req.get = (function jaki$req$get(url,callback){
return jaki.req.request.call(null,url,callback);
});
jaki.req.post = (function jaki$req$post(var_args){
var G__32986 = arguments.length;
switch (G__32986) {
case 1:
return jaki.req.post.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jaki.req.post.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jaki.req.post.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jaki.req.post.cljs$core$IFn$_invoke$arity$1 = (function (url){
return jaki.req.post.call(null,url,null,null);
});

jaki.req.post.cljs$core$IFn$_invoke$arity$2 = (function (url,callback){
return jaki.req.post.call(null,url,callback,null);
});

jaki.req.post.cljs$core$IFn$_invoke$arity$3 = (function (url,callback,payload){
return jaki.req.request.call(null,url,callback,"POST",payload,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Content-Type","Content-Type",-692731875),"application/json"], null));
});

jaki.req.post.cljs$lang$maxFixedArity = 3;

jaki.req.put = (function jaki$req$put(var_args){
var G__32989 = arguments.length;
switch (G__32989) {
case 1:
return jaki.req.put.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jaki.req.put.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jaki.req.put.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jaki.req.put.cljs$core$IFn$_invoke$arity$1 = (function (url){
return jaki.req.put.call(null,url,null,null);
});

jaki.req.put.cljs$core$IFn$_invoke$arity$2 = (function (url,callback){
return jaki.req.put.call(null,url,callback,null);
});

jaki.req.put.cljs$core$IFn$_invoke$arity$3 = (function (url,callback,payload){
return jaki.req.request.call(null,url,callback,"PUT",payload,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Content-Type","Content-Type",-692731875),"application/json"], null));
});

jaki.req.put.cljs$lang$maxFixedArity = 3;

jaki.req.delete$ = (function jaki$req$delete(var_args){
var G__32992 = arguments.length;
switch (G__32992) {
case 1:
return jaki.req.delete$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jaki.req.delete$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jaki.req.delete$.cljs$core$IFn$_invoke$arity$1 = (function (url){
return jaki.req.delete$.call(null,url,null);
});

jaki.req.delete$.cljs$core$IFn$_invoke$arity$2 = (function (url,callback){
return jaki.req.request.call(null,url,callback,"DELETE");
});

jaki.req.delete$.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=req.js.map?rel=1530952925526
