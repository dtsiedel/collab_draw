// Compiled by ClojureScript 1.10.339 {}
goog.provide('jaki.util');
goog.require('cljs.core');
/**
 * Recursively transforms ClojureScript maps into Javascript objects,
 * other ClojureScript colls into JavaScript arrays, and ClojureScript
 * keywords into JavaScript strings.
 */
jaki.util.clj__GT_js = (function jaki$util$clj__GT_js(x){
if(typeof x === 'string'){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce.call(null,(function (m,p__32976){
var vec__32977 = p__32976;
var k = cljs.core.nth.call(null,vec__32977,(0),null);
var v = cljs.core.nth.call(null,vec__32977,(1),null);
return cljs.core.assoc.call(null,m,jaki.util.clj__GT_js.call(null,k),jaki.util.clj__GT_js.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,x).strobj;
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,jaki.util.clj__GT_js,x));
} else {
return x;

}
}
}
}
});

//# sourceMappingURL=util.js.map?rel=1530952925360
