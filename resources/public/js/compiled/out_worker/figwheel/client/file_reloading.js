// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32500_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32500_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__32501 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32502 = null;
var count__32503 = (0);
var i__32504 = (0);
while(true){
if((i__32504 < count__32503)){
var n = cljs.core._nth.call(null,chunk__32502,i__32504);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32505 = seq__32501;
var G__32506 = chunk__32502;
var G__32507 = count__32503;
var G__32508 = (i__32504 + (1));
seq__32501 = G__32505;
chunk__32502 = G__32506;
count__32503 = G__32507;
i__32504 = G__32508;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32501);
if(temp__5457__auto__){
var seq__32501__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32501__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__32501__$1);
var G__32509 = cljs.core.chunk_rest.call(null,seq__32501__$1);
var G__32510 = c__4351__auto__;
var G__32511 = cljs.core.count.call(null,c__4351__auto__);
var G__32512 = (0);
seq__32501 = G__32509;
chunk__32502 = G__32510;
count__32503 = G__32511;
i__32504 = G__32512;
continue;
} else {
var n = cljs.core.first.call(null,seq__32501__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32513 = cljs.core.next.call(null,seq__32501__$1);
var G__32514 = null;
var G__32515 = (0);
var G__32516 = (0);
seq__32501 = G__32513;
chunk__32502 = G__32514;
count__32503 = G__32515;
i__32504 = G__32516;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__32517){
var vec__32518 = p__32517;
var _ = cljs.core.nth.call(null,vec__32518,(0),null);
var v = cljs.core.nth.call(null,vec__32518,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__32521){
var vec__32522 = p__32521;
var k = cljs.core.nth.call(null,vec__32522,(0),null);
var v = cljs.core.nth.call(null,vec__32522,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32534_32542 = cljs.core.seq.call(null,deps);
var chunk__32535_32543 = null;
var count__32536_32544 = (0);
var i__32537_32545 = (0);
while(true){
if((i__32537_32545 < count__32536_32544)){
var dep_32546 = cljs.core._nth.call(null,chunk__32535_32543,i__32537_32545);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_32546;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32546));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32546,(depth + (1)),state);
} else {
}


var G__32547 = seq__32534_32542;
var G__32548 = chunk__32535_32543;
var G__32549 = count__32536_32544;
var G__32550 = (i__32537_32545 + (1));
seq__32534_32542 = G__32547;
chunk__32535_32543 = G__32548;
count__32536_32544 = G__32549;
i__32537_32545 = G__32550;
continue;
} else {
var temp__5457__auto___32551 = cljs.core.seq.call(null,seq__32534_32542);
if(temp__5457__auto___32551){
var seq__32534_32552__$1 = temp__5457__auto___32551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32534_32552__$1)){
var c__4351__auto___32553 = cljs.core.chunk_first.call(null,seq__32534_32552__$1);
var G__32554 = cljs.core.chunk_rest.call(null,seq__32534_32552__$1);
var G__32555 = c__4351__auto___32553;
var G__32556 = cljs.core.count.call(null,c__4351__auto___32553);
var G__32557 = (0);
seq__32534_32542 = G__32554;
chunk__32535_32543 = G__32555;
count__32536_32544 = G__32556;
i__32537_32545 = G__32557;
continue;
} else {
var dep_32558 = cljs.core.first.call(null,seq__32534_32552__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_32558;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32558));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32558,(depth + (1)),state);
} else {
}


var G__32559 = cljs.core.next.call(null,seq__32534_32552__$1);
var G__32560 = null;
var G__32561 = (0);
var G__32562 = (0);
seq__32534_32542 = G__32559;
chunk__32535_32543 = G__32560;
count__32536_32544 = G__32561;
i__32537_32545 = G__32562;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32538){
var vec__32539 = p__32538;
var seq__32540 = cljs.core.seq.call(null,vec__32539);
var first__32541 = cljs.core.first.call(null,seq__32540);
var seq__32540__$1 = cljs.core.next.call(null,seq__32540);
var x = first__32541;
var xs = seq__32540__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32539,seq__32540,first__32541,seq__32540__$1,x,xs,get_deps__$1){
return (function (p1__32525_SHARP_){
return clojure.set.difference.call(null,p1__32525_SHARP_,x);
});})(vec__32539,seq__32540,first__32541,seq__32540__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32563 = cljs.core.seq.call(null,provides);
var chunk__32564 = null;
var count__32565 = (0);
var i__32566 = (0);
while(true){
if((i__32566 < count__32565)){
var prov = cljs.core._nth.call(null,chunk__32564,i__32566);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32567_32575 = cljs.core.seq.call(null,requires);
var chunk__32568_32576 = null;
var count__32569_32577 = (0);
var i__32570_32578 = (0);
while(true){
if((i__32570_32578 < count__32569_32577)){
var req_32579 = cljs.core._nth.call(null,chunk__32568_32576,i__32570_32578);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32579,prov);


var G__32580 = seq__32567_32575;
var G__32581 = chunk__32568_32576;
var G__32582 = count__32569_32577;
var G__32583 = (i__32570_32578 + (1));
seq__32567_32575 = G__32580;
chunk__32568_32576 = G__32581;
count__32569_32577 = G__32582;
i__32570_32578 = G__32583;
continue;
} else {
var temp__5457__auto___32584 = cljs.core.seq.call(null,seq__32567_32575);
if(temp__5457__auto___32584){
var seq__32567_32585__$1 = temp__5457__auto___32584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32567_32585__$1)){
var c__4351__auto___32586 = cljs.core.chunk_first.call(null,seq__32567_32585__$1);
var G__32587 = cljs.core.chunk_rest.call(null,seq__32567_32585__$1);
var G__32588 = c__4351__auto___32586;
var G__32589 = cljs.core.count.call(null,c__4351__auto___32586);
var G__32590 = (0);
seq__32567_32575 = G__32587;
chunk__32568_32576 = G__32588;
count__32569_32577 = G__32589;
i__32570_32578 = G__32590;
continue;
} else {
var req_32591 = cljs.core.first.call(null,seq__32567_32585__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32591,prov);


var G__32592 = cljs.core.next.call(null,seq__32567_32585__$1);
var G__32593 = null;
var G__32594 = (0);
var G__32595 = (0);
seq__32567_32575 = G__32592;
chunk__32568_32576 = G__32593;
count__32569_32577 = G__32594;
i__32570_32578 = G__32595;
continue;
}
} else {
}
}
break;
}


var G__32596 = seq__32563;
var G__32597 = chunk__32564;
var G__32598 = count__32565;
var G__32599 = (i__32566 + (1));
seq__32563 = G__32596;
chunk__32564 = G__32597;
count__32565 = G__32598;
i__32566 = G__32599;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32563);
if(temp__5457__auto__){
var seq__32563__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32563__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__32563__$1);
var G__32600 = cljs.core.chunk_rest.call(null,seq__32563__$1);
var G__32601 = c__4351__auto__;
var G__32602 = cljs.core.count.call(null,c__4351__auto__);
var G__32603 = (0);
seq__32563 = G__32600;
chunk__32564 = G__32601;
count__32565 = G__32602;
i__32566 = G__32603;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32563__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32571_32604 = cljs.core.seq.call(null,requires);
var chunk__32572_32605 = null;
var count__32573_32606 = (0);
var i__32574_32607 = (0);
while(true){
if((i__32574_32607 < count__32573_32606)){
var req_32608 = cljs.core._nth.call(null,chunk__32572_32605,i__32574_32607);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32608,prov);


var G__32609 = seq__32571_32604;
var G__32610 = chunk__32572_32605;
var G__32611 = count__32573_32606;
var G__32612 = (i__32574_32607 + (1));
seq__32571_32604 = G__32609;
chunk__32572_32605 = G__32610;
count__32573_32606 = G__32611;
i__32574_32607 = G__32612;
continue;
} else {
var temp__5457__auto___32613__$1 = cljs.core.seq.call(null,seq__32571_32604);
if(temp__5457__auto___32613__$1){
var seq__32571_32614__$1 = temp__5457__auto___32613__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32571_32614__$1)){
var c__4351__auto___32615 = cljs.core.chunk_first.call(null,seq__32571_32614__$1);
var G__32616 = cljs.core.chunk_rest.call(null,seq__32571_32614__$1);
var G__32617 = c__4351__auto___32615;
var G__32618 = cljs.core.count.call(null,c__4351__auto___32615);
var G__32619 = (0);
seq__32571_32604 = G__32616;
chunk__32572_32605 = G__32617;
count__32573_32606 = G__32618;
i__32574_32607 = G__32619;
continue;
} else {
var req_32620 = cljs.core.first.call(null,seq__32571_32614__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32620,prov);


var G__32621 = cljs.core.next.call(null,seq__32571_32614__$1);
var G__32622 = null;
var G__32623 = (0);
var G__32624 = (0);
seq__32571_32604 = G__32621;
chunk__32572_32605 = G__32622;
count__32573_32606 = G__32623;
i__32574_32607 = G__32624;
continue;
}
} else {
}
}
break;
}


var G__32625 = cljs.core.next.call(null,seq__32563__$1);
var G__32626 = null;
var G__32627 = (0);
var G__32628 = (0);
seq__32563 = G__32625;
chunk__32564 = G__32626;
count__32565 = G__32627;
i__32566 = G__32628;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32629_32633 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32630_32634 = null;
var count__32631_32635 = (0);
var i__32632_32636 = (0);
while(true){
if((i__32632_32636 < count__32631_32635)){
var ns_32637 = cljs.core._nth.call(null,chunk__32630_32634,i__32632_32636);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32637);


var G__32638 = seq__32629_32633;
var G__32639 = chunk__32630_32634;
var G__32640 = count__32631_32635;
var G__32641 = (i__32632_32636 + (1));
seq__32629_32633 = G__32638;
chunk__32630_32634 = G__32639;
count__32631_32635 = G__32640;
i__32632_32636 = G__32641;
continue;
} else {
var temp__5457__auto___32642 = cljs.core.seq.call(null,seq__32629_32633);
if(temp__5457__auto___32642){
var seq__32629_32643__$1 = temp__5457__auto___32642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32629_32643__$1)){
var c__4351__auto___32644 = cljs.core.chunk_first.call(null,seq__32629_32643__$1);
var G__32645 = cljs.core.chunk_rest.call(null,seq__32629_32643__$1);
var G__32646 = c__4351__auto___32644;
var G__32647 = cljs.core.count.call(null,c__4351__auto___32644);
var G__32648 = (0);
seq__32629_32633 = G__32645;
chunk__32630_32634 = G__32646;
count__32631_32635 = G__32647;
i__32632_32636 = G__32648;
continue;
} else {
var ns_32649 = cljs.core.first.call(null,seq__32629_32643__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32649);


var G__32650 = cljs.core.next.call(null,seq__32629_32643__$1);
var G__32651 = null;
var G__32652 = (0);
var G__32653 = (0);
seq__32629_32633 = G__32650;
chunk__32630_32634 = G__32651;
count__32631_32635 = G__32652;
i__32632_32636 = G__32653;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32654__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32655__i = 0, G__32655__a = new Array(arguments.length -  0);
while (G__32655__i < G__32655__a.length) {G__32655__a[G__32655__i] = arguments[G__32655__i + 0]; ++G__32655__i;}
  args = new cljs.core.IndexedSeq(G__32655__a,0,null);
} 
return G__32654__delegate.call(this,args);};
G__32654.cljs$lang$maxFixedArity = 0;
G__32654.cljs$lang$applyTo = (function (arglist__32656){
var args = cljs.core.seq(arglist__32656);
return G__32654__delegate(args);
});
G__32654.cljs$core$IFn$_invoke$arity$variadic = G__32654__delegate;
return G__32654;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32657_SHARP_,p2__32658_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32657_SHARP_)].join('')),p2__32658_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32659_SHARP_,p2__32660_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32659_SHARP_)].join(''),p2__32660_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32661 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32661.addCallback(((function (G__32661){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__32661))
);

G__32661.addErrback(((function (G__32661){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__32661))
);

return G__32661;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32662){if((e32662 instanceof Error)){
var e = e32662;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32662;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32663){if((e32663 instanceof Error)){
var e = e32663;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32663;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32664 = cljs.core._EQ_;
var expr__32665 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32664.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32665))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32664.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32665))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32664.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32665))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__32664,expr__32665){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32664,expr__32665))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32667,callback){
var map__32668 = p__32667;
var map__32668__$1 = ((((!((map__32668 == null)))?(((((map__32668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32668):map__32668);
var file_msg = map__32668__$1;
var request_url = cljs.core.get.call(null,map__32668__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__32668,map__32668__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32668,map__32668__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto__){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto__){
return (function (state_32706){
var state_val_32707 = (state_32706[(1)]);
if((state_val_32707 === (7))){
var inst_32702 = (state_32706[(2)]);
var state_32706__$1 = state_32706;
var statearr_32708_32734 = state_32706__$1;
(statearr_32708_32734[(2)] = inst_32702);

(statearr_32708_32734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (1))){
var state_32706__$1 = state_32706;
var statearr_32709_32735 = state_32706__$1;
(statearr_32709_32735[(2)] = null);

(statearr_32709_32735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (4))){
var inst_32672 = (state_32706[(7)]);
var inst_32672__$1 = (state_32706[(2)]);
var state_32706__$1 = (function (){var statearr_32710 = state_32706;
(statearr_32710[(7)] = inst_32672__$1);

return statearr_32710;
})();
if(cljs.core.truth_(inst_32672__$1)){
var statearr_32711_32736 = state_32706__$1;
(statearr_32711_32736[(1)] = (5));

} else {
var statearr_32712_32737 = state_32706__$1;
(statearr_32712_32737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (15))){
var inst_32687 = (state_32706[(8)]);
var inst_32685 = (state_32706[(9)]);
var inst_32689 = inst_32687.call(null,inst_32685);
var state_32706__$1 = state_32706;
var statearr_32713_32738 = state_32706__$1;
(statearr_32713_32738[(2)] = inst_32689);

(statearr_32713_32738[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (13))){
var inst_32696 = (state_32706[(2)]);
var state_32706__$1 = state_32706;
var statearr_32714_32739 = state_32706__$1;
(statearr_32714_32739[(2)] = inst_32696);

(statearr_32714_32739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (6))){
var state_32706__$1 = state_32706;
var statearr_32715_32740 = state_32706__$1;
(statearr_32715_32740[(2)] = null);

(statearr_32715_32740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (17))){
var inst_32693 = (state_32706[(2)]);
var state_32706__$1 = state_32706;
var statearr_32716_32741 = state_32706__$1;
(statearr_32716_32741[(2)] = inst_32693);

(statearr_32716_32741[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (3))){
var inst_32704 = (state_32706[(2)]);
var state_32706__$1 = state_32706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32706__$1,inst_32704);
} else {
if((state_val_32707 === (12))){
var state_32706__$1 = state_32706;
var statearr_32717_32742 = state_32706__$1;
(statearr_32717_32742[(2)] = null);

(statearr_32717_32742[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (2))){
var state_32706__$1 = state_32706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32706__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32707 === (11))){
var inst_32677 = (state_32706[(10)]);
var inst_32683 = figwheel.client.file_reloading.blocking_load.call(null,inst_32677);
var state_32706__$1 = state_32706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32706__$1,(14),inst_32683);
} else {
if((state_val_32707 === (9))){
var inst_32677 = (state_32706[(10)]);
var state_32706__$1 = state_32706;
if(cljs.core.truth_(inst_32677)){
var statearr_32718_32743 = state_32706__$1;
(statearr_32718_32743[(1)] = (11));

} else {
var statearr_32719_32744 = state_32706__$1;
(statearr_32719_32744[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (5))){
var inst_32678 = (state_32706[(11)]);
var inst_32672 = (state_32706[(7)]);
var inst_32677 = cljs.core.nth.call(null,inst_32672,(0),null);
var inst_32678__$1 = cljs.core.nth.call(null,inst_32672,(1),null);
var state_32706__$1 = (function (){var statearr_32720 = state_32706;
(statearr_32720[(11)] = inst_32678__$1);

(statearr_32720[(10)] = inst_32677);

return statearr_32720;
})();
if(cljs.core.truth_(inst_32678__$1)){
var statearr_32721_32745 = state_32706__$1;
(statearr_32721_32745[(1)] = (8));

} else {
var statearr_32722_32746 = state_32706__$1;
(statearr_32722_32746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (14))){
var inst_32687 = (state_32706[(8)]);
var inst_32677 = (state_32706[(10)]);
var inst_32685 = (state_32706[(2)]);
var inst_32686 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32687__$1 = cljs.core.get.call(null,inst_32686,inst_32677);
var state_32706__$1 = (function (){var statearr_32723 = state_32706;
(statearr_32723[(8)] = inst_32687__$1);

(statearr_32723[(9)] = inst_32685);

return statearr_32723;
})();
if(cljs.core.truth_(inst_32687__$1)){
var statearr_32724_32747 = state_32706__$1;
(statearr_32724_32747[(1)] = (15));

} else {
var statearr_32725_32748 = state_32706__$1;
(statearr_32725_32748[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (16))){
var inst_32685 = (state_32706[(9)]);
var inst_32691 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32685);
var state_32706__$1 = state_32706;
var statearr_32726_32749 = state_32706__$1;
(statearr_32726_32749[(2)] = inst_32691);

(statearr_32726_32749[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (10))){
var inst_32698 = (state_32706[(2)]);
var state_32706__$1 = (function (){var statearr_32727 = state_32706;
(statearr_32727[(12)] = inst_32698);

return statearr_32727;
})();
var statearr_32728_32750 = state_32706__$1;
(statearr_32728_32750[(2)] = null);

(statearr_32728_32750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (8))){
var inst_32678 = (state_32706[(11)]);
var inst_32680 = eval(inst_32678);
var state_32706__$1 = state_32706;
var statearr_32729_32751 = state_32706__$1;
(statearr_32729_32751[(2)] = inst_32680);

(statearr_32729_32751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28680__auto__))
;
return ((function (switch__28589__auto__,c__28680__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28590__auto__ = null;
var figwheel$client$file_reloading$state_machine__28590__auto____0 = (function (){
var statearr_32730 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32730[(0)] = figwheel$client$file_reloading$state_machine__28590__auto__);

(statearr_32730[(1)] = (1));

return statearr_32730;
});
var figwheel$client$file_reloading$state_machine__28590__auto____1 = (function (state_32706){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_32706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e32731){if((e32731 instanceof Object)){
var ex__28593__auto__ = e32731;
var statearr_32732_32752 = state_32706;
(statearr_32732_32752[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32753 = state_32706;
state_32706 = G__32753;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28590__auto__ = function(state_32706){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28590__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28590__auto____1.call(this,state_32706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28590__auto____0;
figwheel$client$file_reloading$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28590__auto____1;
return figwheel$client$file_reloading$state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto__))
})();
var state__28682__auto__ = (function (){var statearr_32733 = f__28681__auto__.call(null);
(statearr_32733[(6)] = c__28680__auto__);

return statearr_32733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto__))
);

return c__28680__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32755 = arguments.length;
switch (G__32755) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32757,callback){
var map__32758 = p__32757;
var map__32758__$1 = ((((!((map__32758 == null)))?(((((map__32758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32758):map__32758);
var file_msg = map__32758__$1;
var namespace = cljs.core.get.call(null,map__32758__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32758,map__32758__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32758,map__32758__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32760){
var map__32761 = p__32760;
var map__32761__$1 = ((((!((map__32761 == null)))?(((((map__32761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32761):map__32761);
var file_msg = map__32761__$1;
var namespace = cljs.core.get.call(null,map__32761__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32763){
var map__32764 = p__32763;
var map__32764__$1 = ((((!((map__32764 == null)))?(((((map__32764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32764):map__32764);
var file_msg = map__32764__$1;
var namespace = cljs.core.get.call(null,map__32764__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32766,callback){
var map__32767 = p__32766;
var map__32767__$1 = ((((!((map__32767 == null)))?(((((map__32767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32767):map__32767);
var file_msg = map__32767__$1;
var request_url = cljs.core.get.call(null,map__32767__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32767__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28680__auto___32817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___32817,out){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___32817,out){
return (function (state_32802){
var state_val_32803 = (state_32802[(1)]);
if((state_val_32803 === (1))){
var inst_32776 = cljs.core.seq.call(null,files);
var inst_32777 = cljs.core.first.call(null,inst_32776);
var inst_32778 = cljs.core.next.call(null,inst_32776);
var inst_32779 = files;
var state_32802__$1 = (function (){var statearr_32804 = state_32802;
(statearr_32804[(7)] = inst_32777);

(statearr_32804[(8)] = inst_32778);

(statearr_32804[(9)] = inst_32779);

return statearr_32804;
})();
var statearr_32805_32818 = state_32802__$1;
(statearr_32805_32818[(2)] = null);

(statearr_32805_32818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (2))){
var inst_32785 = (state_32802[(10)]);
var inst_32779 = (state_32802[(9)]);
var inst_32784 = cljs.core.seq.call(null,inst_32779);
var inst_32785__$1 = cljs.core.first.call(null,inst_32784);
var inst_32786 = cljs.core.next.call(null,inst_32784);
var inst_32787 = (inst_32785__$1 == null);
var inst_32788 = cljs.core.not.call(null,inst_32787);
var state_32802__$1 = (function (){var statearr_32806 = state_32802;
(statearr_32806[(10)] = inst_32785__$1);

(statearr_32806[(11)] = inst_32786);

return statearr_32806;
})();
if(inst_32788){
var statearr_32807_32819 = state_32802__$1;
(statearr_32807_32819[(1)] = (4));

} else {
var statearr_32808_32820 = state_32802__$1;
(statearr_32808_32820[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (3))){
var inst_32800 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32802__$1,inst_32800);
} else {
if((state_val_32803 === (4))){
var inst_32785 = (state_32802[(10)]);
var inst_32790 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32785);
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32802__$1,(7),inst_32790);
} else {
if((state_val_32803 === (5))){
var inst_32796 = cljs.core.async.close_BANG_.call(null,out);
var state_32802__$1 = state_32802;
var statearr_32809_32821 = state_32802__$1;
(statearr_32809_32821[(2)] = inst_32796);

(statearr_32809_32821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (6))){
var inst_32798 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
var statearr_32810_32822 = state_32802__$1;
(statearr_32810_32822[(2)] = inst_32798);

(statearr_32810_32822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (7))){
var inst_32786 = (state_32802[(11)]);
var inst_32792 = (state_32802[(2)]);
var inst_32793 = cljs.core.async.put_BANG_.call(null,out,inst_32792);
var inst_32779 = inst_32786;
var state_32802__$1 = (function (){var statearr_32811 = state_32802;
(statearr_32811[(12)] = inst_32793);

(statearr_32811[(9)] = inst_32779);

return statearr_32811;
})();
var statearr_32812_32823 = state_32802__$1;
(statearr_32812_32823[(2)] = null);

(statearr_32812_32823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28680__auto___32817,out))
;
return ((function (switch__28589__auto__,c__28680__auto___32817,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28590__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28590__auto____0 = (function (){
var statearr_32813 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32813[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28590__auto__);

(statearr_32813[(1)] = (1));

return statearr_32813;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28590__auto____1 = (function (state_32802){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_32802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e32814){if((e32814 instanceof Object)){
var ex__28593__auto__ = e32814;
var statearr_32815_32824 = state_32802;
(statearr_32815_32824[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32825 = state_32802;
state_32802 = G__32825;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28590__auto__ = function(state_32802){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28590__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28590__auto____1.call(this,state_32802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28590__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28590__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___32817,out))
})();
var state__28682__auto__ = (function (){var statearr_32816 = f__28681__auto__.call(null);
(statearr_32816[(6)] = c__28680__auto___32817);

return statearr_32816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___32817,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32826,opts){
var map__32827 = p__32826;
var map__32827__$1 = ((((!((map__32827 == null)))?(((((map__32827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32827):map__32827);
var eval_body = cljs.core.get.call(null,map__32827__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32827__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32829){var e = e32829;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32830_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32830_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32831){
var vec__32832 = p__32831;
var k = cljs.core.nth.call(null,vec__32832,(0),null);
var v = cljs.core.nth.call(null,vec__32832,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32835){
var vec__32836 = p__32835;
var k = cljs.core.nth.call(null,vec__32836,(0),null);
var v = cljs.core.nth.call(null,vec__32836,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32842,p__32843){
var map__32844 = p__32842;
var map__32844__$1 = ((((!((map__32844 == null)))?(((((map__32844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32844):map__32844);
var opts = map__32844__$1;
var before_jsload = cljs.core.get.call(null,map__32844__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32844__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32844__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32845 = p__32843;
var map__32845__$1 = ((((!((map__32845 == null)))?(((((map__32845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32845):map__32845);
var msg = map__32845__$1;
var files = cljs.core.get.call(null,map__32845__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32845__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32845__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32999){
var state_val_33000 = (state_32999[(1)]);
if((state_val_33000 === (7))){
var inst_32859 = (state_32999[(7)]);
var inst_32861 = (state_32999[(8)]);
var inst_32860 = (state_32999[(9)]);
var inst_32862 = (state_32999[(10)]);
var inst_32867 = cljs.core._nth.call(null,inst_32860,inst_32862);
var inst_32868 = figwheel.client.file_reloading.eval_body.call(null,inst_32867,opts);
var inst_32869 = (inst_32862 + (1));
var tmp33001 = inst_32859;
var tmp33002 = inst_32861;
var tmp33003 = inst_32860;
var inst_32859__$1 = tmp33001;
var inst_32860__$1 = tmp33003;
var inst_32861__$1 = tmp33002;
var inst_32862__$1 = inst_32869;
var state_32999__$1 = (function (){var statearr_33004 = state_32999;
(statearr_33004[(7)] = inst_32859__$1);

(statearr_33004[(11)] = inst_32868);

(statearr_33004[(8)] = inst_32861__$1);

(statearr_33004[(9)] = inst_32860__$1);

(statearr_33004[(10)] = inst_32862__$1);

return statearr_33004;
})();
var statearr_33005_33088 = state_32999__$1;
(statearr_33005_33088[(2)] = null);

(statearr_33005_33088[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (20))){
var inst_32902 = (state_32999[(12)]);
var inst_32910 = figwheel.client.file_reloading.sort_files.call(null,inst_32902);
var state_32999__$1 = state_32999;
var statearr_33006_33089 = state_32999__$1;
(statearr_33006_33089[(2)] = inst_32910);

(statearr_33006_33089[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (27))){
var state_32999__$1 = state_32999;
var statearr_33007_33090 = state_32999__$1;
(statearr_33007_33090[(2)] = null);

(statearr_33007_33090[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (1))){
var inst_32851 = (state_32999[(13)]);
var inst_32848 = before_jsload.call(null,files);
var inst_32849 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32850 = (function (){return ((function (inst_32851,inst_32848,inst_32849,state_val_33000,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32839_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32839_SHARP_);
});
;})(inst_32851,inst_32848,inst_32849,state_val_33000,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32851__$1 = cljs.core.filter.call(null,inst_32850,files);
var inst_32852 = cljs.core.not_empty.call(null,inst_32851__$1);
var state_32999__$1 = (function (){var statearr_33008 = state_32999;
(statearr_33008[(14)] = inst_32849);

(statearr_33008[(15)] = inst_32848);

(statearr_33008[(13)] = inst_32851__$1);

return statearr_33008;
})();
if(cljs.core.truth_(inst_32852)){
var statearr_33009_33091 = state_32999__$1;
(statearr_33009_33091[(1)] = (2));

} else {
var statearr_33010_33092 = state_32999__$1;
(statearr_33010_33092[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (24))){
var state_32999__$1 = state_32999;
var statearr_33011_33093 = state_32999__$1;
(statearr_33011_33093[(2)] = null);

(statearr_33011_33093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (39))){
var inst_32952 = (state_32999[(16)]);
var state_32999__$1 = state_32999;
var statearr_33012_33094 = state_32999__$1;
(statearr_33012_33094[(2)] = inst_32952);

(statearr_33012_33094[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (46))){
var inst_32994 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
var statearr_33013_33095 = state_32999__$1;
(statearr_33013_33095[(2)] = inst_32994);

(statearr_33013_33095[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (4))){
var inst_32896 = (state_32999[(2)]);
var inst_32897 = cljs.core.List.EMPTY;
var inst_32898 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32897);
var inst_32899 = (function (){return ((function (inst_32896,inst_32897,inst_32898,state_val_33000,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32840_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32840_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32840_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32840_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_32896,inst_32897,inst_32898,state_val_33000,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32900 = cljs.core.filter.call(null,inst_32899,files);
var inst_32901 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32902 = cljs.core.concat.call(null,inst_32900,inst_32901);
var state_32999__$1 = (function (){var statearr_33014 = state_32999;
(statearr_33014[(12)] = inst_32902);

(statearr_33014[(17)] = inst_32898);

(statearr_33014[(18)] = inst_32896);

return statearr_33014;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33015_33096 = state_32999__$1;
(statearr_33015_33096[(1)] = (16));

} else {
var statearr_33016_33097 = state_32999__$1;
(statearr_33016_33097[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (15))){
var inst_32886 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
var statearr_33017_33098 = state_32999__$1;
(statearr_33017_33098[(2)] = inst_32886);

(statearr_33017_33098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (21))){
var inst_32912 = (state_32999[(19)]);
var inst_32912__$1 = (state_32999[(2)]);
var inst_32913 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32912__$1);
var state_32999__$1 = (function (){var statearr_33018 = state_32999;
(statearr_33018[(19)] = inst_32912__$1);

return statearr_33018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32999__$1,(22),inst_32913);
} else {
if((state_val_33000 === (31))){
var inst_32997 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32999__$1,inst_32997);
} else {
if((state_val_33000 === (32))){
var inst_32952 = (state_32999[(16)]);
var inst_32957 = inst_32952.cljs$lang$protocol_mask$partition0$;
var inst_32958 = (inst_32957 & (64));
var inst_32959 = inst_32952.cljs$core$ISeq$;
var inst_32960 = (cljs.core.PROTOCOL_SENTINEL === inst_32959);
var inst_32961 = ((inst_32958) || (inst_32960));
var state_32999__$1 = state_32999;
if(cljs.core.truth_(inst_32961)){
var statearr_33019_33099 = state_32999__$1;
(statearr_33019_33099[(1)] = (35));

} else {
var statearr_33020_33100 = state_32999__$1;
(statearr_33020_33100[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (40))){
var inst_32974 = (state_32999[(20)]);
var inst_32973 = (state_32999[(2)]);
var inst_32974__$1 = cljs.core.get.call(null,inst_32973,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32975 = cljs.core.get.call(null,inst_32973,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32976 = cljs.core.not_empty.call(null,inst_32974__$1);
var state_32999__$1 = (function (){var statearr_33021 = state_32999;
(statearr_33021[(21)] = inst_32975);

(statearr_33021[(20)] = inst_32974__$1);

return statearr_33021;
})();
if(cljs.core.truth_(inst_32976)){
var statearr_33022_33101 = state_32999__$1;
(statearr_33022_33101[(1)] = (41));

} else {
var statearr_33023_33102 = state_32999__$1;
(statearr_33023_33102[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (33))){
var state_32999__$1 = state_32999;
var statearr_33024_33103 = state_32999__$1;
(statearr_33024_33103[(2)] = false);

(statearr_33024_33103[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (13))){
var inst_32872 = (state_32999[(22)]);
var inst_32876 = cljs.core.chunk_first.call(null,inst_32872);
var inst_32877 = cljs.core.chunk_rest.call(null,inst_32872);
var inst_32878 = cljs.core.count.call(null,inst_32876);
var inst_32859 = inst_32877;
var inst_32860 = inst_32876;
var inst_32861 = inst_32878;
var inst_32862 = (0);
var state_32999__$1 = (function (){var statearr_33025 = state_32999;
(statearr_33025[(7)] = inst_32859);

(statearr_33025[(8)] = inst_32861);

(statearr_33025[(9)] = inst_32860);

(statearr_33025[(10)] = inst_32862);

return statearr_33025;
})();
var statearr_33026_33104 = state_32999__$1;
(statearr_33026_33104[(2)] = null);

(statearr_33026_33104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (22))){
var inst_32915 = (state_32999[(23)]);
var inst_32920 = (state_32999[(24)]);
var inst_32916 = (state_32999[(25)]);
var inst_32912 = (state_32999[(19)]);
var inst_32915__$1 = (state_32999[(2)]);
var inst_32916__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32915__$1);
var inst_32917 = (function (){var all_files = inst_32912;
var res_SINGLEQUOTE_ = inst_32915__$1;
var res = inst_32916__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32915,inst_32920,inst_32916,inst_32912,inst_32915__$1,inst_32916__$1,state_val_33000,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32841_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32841_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32915,inst_32920,inst_32916,inst_32912,inst_32915__$1,inst_32916__$1,state_val_33000,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32918 = cljs.core.filter.call(null,inst_32917,inst_32915__$1);
var inst_32919 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32920__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32919);
var inst_32921 = cljs.core.not_empty.call(null,inst_32920__$1);
var state_32999__$1 = (function (){var statearr_33027 = state_32999;
(statearr_33027[(26)] = inst_32918);

(statearr_33027[(23)] = inst_32915__$1);

(statearr_33027[(24)] = inst_32920__$1);

(statearr_33027[(25)] = inst_32916__$1);

return statearr_33027;
})();
if(cljs.core.truth_(inst_32921)){
var statearr_33028_33105 = state_32999__$1;
(statearr_33028_33105[(1)] = (23));

} else {
var statearr_33029_33106 = state_32999__$1;
(statearr_33029_33106[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (36))){
var state_32999__$1 = state_32999;
var statearr_33030_33107 = state_32999__$1;
(statearr_33030_33107[(2)] = false);

(statearr_33030_33107[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (41))){
var inst_32974 = (state_32999[(20)]);
var inst_32978 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32979 = cljs.core.map.call(null,inst_32978,inst_32974);
var inst_32980 = cljs.core.pr_str.call(null,inst_32979);
var inst_32981 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32980)].join('');
var inst_32982 = figwheel.client.utils.log.call(null,inst_32981);
var state_32999__$1 = state_32999;
var statearr_33031_33108 = state_32999__$1;
(statearr_33031_33108[(2)] = inst_32982);

(statearr_33031_33108[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (43))){
var inst_32975 = (state_32999[(21)]);
var inst_32985 = (state_32999[(2)]);
var inst_32986 = cljs.core.not_empty.call(null,inst_32975);
var state_32999__$1 = (function (){var statearr_33032 = state_32999;
(statearr_33032[(27)] = inst_32985);

return statearr_33032;
})();
if(cljs.core.truth_(inst_32986)){
var statearr_33033_33109 = state_32999__$1;
(statearr_33033_33109[(1)] = (44));

} else {
var statearr_33034_33110 = state_32999__$1;
(statearr_33034_33110[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (29))){
var inst_32918 = (state_32999[(26)]);
var inst_32915 = (state_32999[(23)]);
var inst_32920 = (state_32999[(24)]);
var inst_32916 = (state_32999[(25)]);
var inst_32912 = (state_32999[(19)]);
var inst_32952 = (state_32999[(16)]);
var inst_32948 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32951 = (function (){var all_files = inst_32912;
var res_SINGLEQUOTE_ = inst_32915;
var res = inst_32916;
var files_not_loaded = inst_32918;
var dependencies_that_loaded = inst_32920;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32918,inst_32915,inst_32920,inst_32916,inst_32912,inst_32952,inst_32948,state_val_33000,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32950){
var map__33035 = p__32950;
var map__33035__$1 = ((((!((map__33035 == null)))?(((((map__33035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33035):map__33035);
var namespace = cljs.core.get.call(null,map__33035__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32918,inst_32915,inst_32920,inst_32916,inst_32912,inst_32952,inst_32948,state_val_33000,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32952__$1 = cljs.core.group_by.call(null,inst_32951,inst_32918);
var inst_32954 = (inst_32952__$1 == null);
var inst_32955 = cljs.core.not.call(null,inst_32954);
var state_32999__$1 = (function (){var statearr_33037 = state_32999;
(statearr_33037[(28)] = inst_32948);

(statearr_33037[(16)] = inst_32952__$1);

return statearr_33037;
})();
if(inst_32955){
var statearr_33038_33111 = state_32999__$1;
(statearr_33038_33111[(1)] = (32));

} else {
var statearr_33039_33112 = state_32999__$1;
(statearr_33039_33112[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (44))){
var inst_32975 = (state_32999[(21)]);
var inst_32988 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32975);
var inst_32989 = cljs.core.pr_str.call(null,inst_32988);
var inst_32990 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32989)].join('');
var inst_32991 = figwheel.client.utils.log.call(null,inst_32990);
var state_32999__$1 = state_32999;
var statearr_33040_33113 = state_32999__$1;
(statearr_33040_33113[(2)] = inst_32991);

(statearr_33040_33113[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (6))){
var inst_32893 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
var statearr_33041_33114 = state_32999__$1;
(statearr_33041_33114[(2)] = inst_32893);

(statearr_33041_33114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (28))){
var inst_32918 = (state_32999[(26)]);
var inst_32945 = (state_32999[(2)]);
var inst_32946 = cljs.core.not_empty.call(null,inst_32918);
var state_32999__$1 = (function (){var statearr_33042 = state_32999;
(statearr_33042[(29)] = inst_32945);

return statearr_33042;
})();
if(cljs.core.truth_(inst_32946)){
var statearr_33043_33115 = state_32999__$1;
(statearr_33043_33115[(1)] = (29));

} else {
var statearr_33044_33116 = state_32999__$1;
(statearr_33044_33116[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (25))){
var inst_32916 = (state_32999[(25)]);
var inst_32932 = (state_32999[(2)]);
var inst_32933 = cljs.core.not_empty.call(null,inst_32916);
var state_32999__$1 = (function (){var statearr_33045 = state_32999;
(statearr_33045[(30)] = inst_32932);

return statearr_33045;
})();
if(cljs.core.truth_(inst_32933)){
var statearr_33046_33117 = state_32999__$1;
(statearr_33046_33117[(1)] = (26));

} else {
var statearr_33047_33118 = state_32999__$1;
(statearr_33047_33118[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (34))){
var inst_32968 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
if(cljs.core.truth_(inst_32968)){
var statearr_33048_33119 = state_32999__$1;
(statearr_33048_33119[(1)] = (38));

} else {
var statearr_33049_33120 = state_32999__$1;
(statearr_33049_33120[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (17))){
var state_32999__$1 = state_32999;
var statearr_33050_33121 = state_32999__$1;
(statearr_33050_33121[(2)] = recompile_dependents);

(statearr_33050_33121[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (3))){
var state_32999__$1 = state_32999;
var statearr_33051_33122 = state_32999__$1;
(statearr_33051_33122[(2)] = null);

(statearr_33051_33122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (12))){
var inst_32889 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
var statearr_33052_33123 = state_32999__$1;
(statearr_33052_33123[(2)] = inst_32889);

(statearr_33052_33123[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (2))){
var inst_32851 = (state_32999[(13)]);
var inst_32858 = cljs.core.seq.call(null,inst_32851);
var inst_32859 = inst_32858;
var inst_32860 = null;
var inst_32861 = (0);
var inst_32862 = (0);
var state_32999__$1 = (function (){var statearr_33053 = state_32999;
(statearr_33053[(7)] = inst_32859);

(statearr_33053[(8)] = inst_32861);

(statearr_33053[(9)] = inst_32860);

(statearr_33053[(10)] = inst_32862);

return statearr_33053;
})();
var statearr_33054_33124 = state_32999__$1;
(statearr_33054_33124[(2)] = null);

(statearr_33054_33124[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (23))){
var inst_32918 = (state_32999[(26)]);
var inst_32915 = (state_32999[(23)]);
var inst_32920 = (state_32999[(24)]);
var inst_32916 = (state_32999[(25)]);
var inst_32912 = (state_32999[(19)]);
var inst_32923 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32925 = (function (){var all_files = inst_32912;
var res_SINGLEQUOTE_ = inst_32915;
var res = inst_32916;
var files_not_loaded = inst_32918;
var dependencies_that_loaded = inst_32920;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32918,inst_32915,inst_32920,inst_32916,inst_32912,inst_32923,state_val_33000,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32924){
var map__33055 = p__32924;
var map__33055__$1 = ((((!((map__33055 == null)))?(((((map__33055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33055):map__33055);
var request_url = cljs.core.get.call(null,map__33055__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32918,inst_32915,inst_32920,inst_32916,inst_32912,inst_32923,state_val_33000,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32926 = cljs.core.reverse.call(null,inst_32920);
var inst_32927 = cljs.core.map.call(null,inst_32925,inst_32926);
var inst_32928 = cljs.core.pr_str.call(null,inst_32927);
var inst_32929 = figwheel.client.utils.log.call(null,inst_32928);
var state_32999__$1 = (function (){var statearr_33057 = state_32999;
(statearr_33057[(31)] = inst_32923);

return statearr_33057;
})();
var statearr_33058_33125 = state_32999__$1;
(statearr_33058_33125[(2)] = inst_32929);

(statearr_33058_33125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (35))){
var state_32999__$1 = state_32999;
var statearr_33059_33126 = state_32999__$1;
(statearr_33059_33126[(2)] = true);

(statearr_33059_33126[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (19))){
var inst_32902 = (state_32999[(12)]);
var inst_32908 = figwheel.client.file_reloading.expand_files.call(null,inst_32902);
var state_32999__$1 = state_32999;
var statearr_33060_33127 = state_32999__$1;
(statearr_33060_33127[(2)] = inst_32908);

(statearr_33060_33127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (11))){
var state_32999__$1 = state_32999;
var statearr_33061_33128 = state_32999__$1;
(statearr_33061_33128[(2)] = null);

(statearr_33061_33128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (9))){
var inst_32891 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
var statearr_33062_33129 = state_32999__$1;
(statearr_33062_33129[(2)] = inst_32891);

(statearr_33062_33129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (5))){
var inst_32861 = (state_32999[(8)]);
var inst_32862 = (state_32999[(10)]);
var inst_32864 = (inst_32862 < inst_32861);
var inst_32865 = inst_32864;
var state_32999__$1 = state_32999;
if(cljs.core.truth_(inst_32865)){
var statearr_33063_33130 = state_32999__$1;
(statearr_33063_33130[(1)] = (7));

} else {
var statearr_33064_33131 = state_32999__$1;
(statearr_33064_33131[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (14))){
var inst_32872 = (state_32999[(22)]);
var inst_32881 = cljs.core.first.call(null,inst_32872);
var inst_32882 = figwheel.client.file_reloading.eval_body.call(null,inst_32881,opts);
var inst_32883 = cljs.core.next.call(null,inst_32872);
var inst_32859 = inst_32883;
var inst_32860 = null;
var inst_32861 = (0);
var inst_32862 = (0);
var state_32999__$1 = (function (){var statearr_33065 = state_32999;
(statearr_33065[(32)] = inst_32882);

(statearr_33065[(7)] = inst_32859);

(statearr_33065[(8)] = inst_32861);

(statearr_33065[(9)] = inst_32860);

(statearr_33065[(10)] = inst_32862);

return statearr_33065;
})();
var statearr_33066_33132 = state_32999__$1;
(statearr_33066_33132[(2)] = null);

(statearr_33066_33132[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (45))){
var state_32999__$1 = state_32999;
var statearr_33067_33133 = state_32999__$1;
(statearr_33067_33133[(2)] = null);

(statearr_33067_33133[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (26))){
var inst_32918 = (state_32999[(26)]);
var inst_32915 = (state_32999[(23)]);
var inst_32920 = (state_32999[(24)]);
var inst_32916 = (state_32999[(25)]);
var inst_32912 = (state_32999[(19)]);
var inst_32935 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32937 = (function (){var all_files = inst_32912;
var res_SINGLEQUOTE_ = inst_32915;
var res = inst_32916;
var files_not_loaded = inst_32918;
var dependencies_that_loaded = inst_32920;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32918,inst_32915,inst_32920,inst_32916,inst_32912,inst_32935,state_val_33000,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32936){
var map__33068 = p__32936;
var map__33068__$1 = ((((!((map__33068 == null)))?(((((map__33068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33068):map__33068);
var namespace = cljs.core.get.call(null,map__33068__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33068__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32918,inst_32915,inst_32920,inst_32916,inst_32912,inst_32935,state_val_33000,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32938 = cljs.core.map.call(null,inst_32937,inst_32916);
var inst_32939 = cljs.core.pr_str.call(null,inst_32938);
var inst_32940 = figwheel.client.utils.log.call(null,inst_32939);
var inst_32941 = (function (){var all_files = inst_32912;
var res_SINGLEQUOTE_ = inst_32915;
var res = inst_32916;
var files_not_loaded = inst_32918;
var dependencies_that_loaded = inst_32920;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32918,inst_32915,inst_32920,inst_32916,inst_32912,inst_32935,inst_32937,inst_32938,inst_32939,inst_32940,state_val_33000,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32918,inst_32915,inst_32920,inst_32916,inst_32912,inst_32935,inst_32937,inst_32938,inst_32939,inst_32940,state_val_33000,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32942 = setTimeout(inst_32941,(10));
var state_32999__$1 = (function (){var statearr_33070 = state_32999;
(statearr_33070[(33)] = inst_32935);

(statearr_33070[(34)] = inst_32940);

return statearr_33070;
})();
var statearr_33071_33134 = state_32999__$1;
(statearr_33071_33134[(2)] = inst_32942);

(statearr_33071_33134[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (16))){
var state_32999__$1 = state_32999;
var statearr_33072_33135 = state_32999__$1;
(statearr_33072_33135[(2)] = reload_dependents);

(statearr_33072_33135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (38))){
var inst_32952 = (state_32999[(16)]);
var inst_32970 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32952);
var state_32999__$1 = state_32999;
var statearr_33073_33136 = state_32999__$1;
(statearr_33073_33136[(2)] = inst_32970);

(statearr_33073_33136[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (30))){
var state_32999__$1 = state_32999;
var statearr_33074_33137 = state_32999__$1;
(statearr_33074_33137[(2)] = null);

(statearr_33074_33137[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (10))){
var inst_32872 = (state_32999[(22)]);
var inst_32874 = cljs.core.chunked_seq_QMARK_.call(null,inst_32872);
var state_32999__$1 = state_32999;
if(inst_32874){
var statearr_33075_33138 = state_32999__$1;
(statearr_33075_33138[(1)] = (13));

} else {
var statearr_33076_33139 = state_32999__$1;
(statearr_33076_33139[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (18))){
var inst_32906 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
if(cljs.core.truth_(inst_32906)){
var statearr_33077_33140 = state_32999__$1;
(statearr_33077_33140[(1)] = (19));

} else {
var statearr_33078_33141 = state_32999__$1;
(statearr_33078_33141[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (42))){
var state_32999__$1 = state_32999;
var statearr_33079_33142 = state_32999__$1;
(statearr_33079_33142[(2)] = null);

(statearr_33079_33142[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (37))){
var inst_32965 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
var statearr_33080_33143 = state_32999__$1;
(statearr_33080_33143[(2)] = inst_32965);

(statearr_33080_33143[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (8))){
var inst_32859 = (state_32999[(7)]);
var inst_32872 = (state_32999[(22)]);
var inst_32872__$1 = cljs.core.seq.call(null,inst_32859);
var state_32999__$1 = (function (){var statearr_33081 = state_32999;
(statearr_33081[(22)] = inst_32872__$1);

return statearr_33081;
})();
if(inst_32872__$1){
var statearr_33082_33144 = state_32999__$1;
(statearr_33082_33144[(1)] = (10));

} else {
var statearr_33083_33145 = state_32999__$1;
(statearr_33083_33145[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28589__auto__,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28590__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28590__auto____0 = (function (){
var statearr_33084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33084[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28590__auto__);

(statearr_33084[(1)] = (1));

return statearr_33084;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28590__auto____1 = (function (state_32999){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_32999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e33085){if((e33085 instanceof Object)){
var ex__28593__auto__ = e33085;
var statearr_33086_33146 = state_32999;
(statearr_33086_33146[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33147 = state_32999;
state_32999 = G__33147;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28590__auto__ = function(state_32999){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28590__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28590__auto____1.call(this,state_32999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28590__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28590__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28682__auto__ = (function (){var statearr_33087 = f__28681__auto__.call(null);
(statearr_33087[(6)] = c__28680__auto__);

return statearr_33087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto__,map__32844,map__32844__$1,opts,before_jsload,on_jsload,reload_dependents,map__32845,map__32845__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28680__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33150,link){
var map__33151 = p__33150;
var map__33151__$1 = ((((!((map__33151 == null)))?(((((map__33151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33151):map__33151);
var file = cljs.core.get.call(null,map__33151__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__33151,map__33151__$1,file){
return (function (p1__33148_SHARP_,p2__33149_SHARP_){
if(cljs.core._EQ_.call(null,p1__33148_SHARP_,p2__33149_SHARP_)){
return p1__33148_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__33151,map__33151__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33154){
var map__33155 = p__33154;
var map__33155__$1 = ((((!((map__33155 == null)))?(((((map__33155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33155):map__33155);
var match_length = cljs.core.get.call(null,map__33155__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33155__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33153_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33153_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33157_SHARP_,p2__33158_SHARP_){
return cljs.core.assoc.call(null,p1__33157_SHARP_,cljs.core.get.call(null,p2__33158_SHARP_,key),p2__33158_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_33159 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33159);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33159);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33160,p__33161){
var map__33162 = p__33160;
var map__33162__$1 = ((((!((map__33162 == null)))?(((((map__33162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33162):map__33162);
var on_cssload = cljs.core.get.call(null,map__33162__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33163 = p__33161;
var map__33163__$1 = ((((!((map__33163 == null)))?(((((map__33163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33163):map__33163);
var files_msg = map__33163__$1;
var files = cljs.core.get.call(null,map__33163__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1530950272985
