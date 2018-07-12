// Compiled by ClojureScript 1.10.339 {}
goog.provide('jaki.couch');
goog.require('cljs.core');
goog.require('jaki.req');
goog.require('clojure.string');
goog.require('goog.array');
goog.require('goog.json');
goog.require('goog.crypt.Sha1');
jaki.couch.host = cljs.core.atom.call(null,null);
jaki.couch.url_prefix = cljs.core.atom.call(null,"");
jaki.couch.default_db = cljs.core.atom.call(null,null);
jaki.couch.set_host_BANG_ = (function jaki$couch$set_host_BANG_(s){
return cljs.core.reset_BANG_.call(null,jaki.couch.host,s);
});
jaki.couch.set_url_prefix = (function jaki$couch$set_url_prefix(prefix){
return cljs.core.reset_BANG_.call(null,jaki.couch.url_prefix,((((cljs.core._EQ_.call(null,"",prefix)) || (cljs.core._EQ_.call(null,"/",prefix.substr((0),(1))))))?prefix:["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join('')));
});
jaki.couch.set_default_db = (function jaki$couch$set_default_db(db){
return cljs.core.reset_BANG_.call(null,jaki.couch.default_db,db);
});
jaki.couch.url = (function jaki$couch$url(path){
if(!(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,jaki.couch.host)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,jaki.couch.host)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,jaki.couch.url_prefix)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,jaki.couch.url_prefix)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
}
});
jaki.couch.default_db_set_QMARK_ = (function jaki$couch$default_db_set_QMARK_(){
if((cljs.core.deref.call(null,jaki.couch.default_db) == null)){
return false;
} else {
return true;
}
});
jaki.couch.encode_doc_id = (function jaki$couch$encode_doc_id(id){
if(cljs.core._EQ_.call(null,"_design",cljs.core.first.call(null,clojure.string.split.call(null,id,"/")))){
return ["_design/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.subs.call(null,id,"_design/".length())))].join('');
} else {
return encodeURIComponent(id);
}
});
jaki.couch.config = (function jaki$couch$config(var_args){
var G__32997 = arguments.length;
switch (G__32997) {
case 1:
return jaki.couch.config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jaki.couch.config.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jaki.couch.config.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jaki.couch.config.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jaki.couch.config.cljs$core$IFn$_invoke$arity$1 = (function (callback){
return jaki.req.request.call(null,jaki.couch.url.call(null,"/_config"),callback);
});

jaki.couch.config.cljs$core$IFn$_invoke$arity$2 = (function (section,callback){
return jaki.req.get.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jaki.couch.url.call(null,"/_config/")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(section)].join(''),callback);
});

jaki.couch.config.cljs$core$IFn$_invoke$arity$3 = (function (section,option,value_or_callback){
if(cljs.core.fn_QMARK_.call(null,value_or_callback)){
return jaki.req.request.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jaki.couch.url.call(null,"/_config/")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(section),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(option)].join(''),value_or_callback);
} else {
return jaki.couch.config.call(null,section,option,value_or_callback,null);
}
});

jaki.couch.config.cljs$core$IFn$_invoke$arity$4 = (function (section,option,value,callback){
var path = jaki.couch.url.call(null,"/_config");
var section__$1 = encodeURIComponent(section);
var option__$1 = encodeURIComponent(option);
var method = (((value == null))?"DELETE":"PUT");
var value__$1 = ((((typeof value === 'string') || (typeof value === 'number')))?["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"\""].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.json.serialize(value))].join(''));
var headers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Content-Type","Content-Type",-692731875),"application/json"], null);
return jaki.req.request.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(section__$1),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(option__$1)].join(''),callback,method,value__$1,headers);
});

jaki.couch.config.cljs$lang$maxFixedArity = 4;

jaki.couch.get_session = (function jaki$couch$get_session(callback){
return jaki.req.get.call(null,jaki.couch.url.call(null,"/_session"),callback);
});
jaki.couch.get_users_db = (function jaki$couch$get_users_db(callback){
return jaki.couch.get_session.call(null,(function (p1__32999_SHARP_){
return callback.call(null,new cljs.core.Keyword(null,"authentication_db","authentication_db",-1732911648).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(p1__32999_SHARP_)));
}));
});
jaki.couch.new_uuid = (function jaki$couch$new_uuid(){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeatedly.call(null,(32),(function (){
return cljs.core.get.call(null,"0123456789abcdef",Math.floor(cljs.core.rand.call(null,(16))));
})));
});
jaki.couch.string_to_bytes = (function jaki$couch$string_to_bytes(s){
var get_byte = (function (p1__33000_SHARP_){
if(typeof p1__33000_SHARP_ === 'string'){
return (p1__33000_SHARP_.charCodeAt((0)) & (255));
} else {
return p1__33000_SHARP_;
}
});
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,s))){
return goog.array.concat(get_byte.call(null,s));
} else {
return cljs.core.reduce.call(null,((function (get_byte){
return (function (p1__33001_SHARP_,p2__33002_SHARP_){
return goog.array.concat(get_byte.call(null,p1__33001_SHARP_),get_byte.call(null,p2__33002_SHARP_));
});})(get_byte))
,s);
}
});
jaki.couch.sign_up = (function jaki$couch$sign_up(var_args){
var G__33005 = arguments.length;
switch (G__33005) {
case 2:
return jaki.couch.sign_up.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jaki.couch.sign_up.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jaki.couch.sign_up.cljs$core$IFn$_invoke$arity$2 = (function (user_doc,password){
return jaki.couch.sign_up.call(null,user_doc,password,null);
});

jaki.couch.sign_up.cljs$core$IFn$_invoke$arity$3 = (function (user_doc,password,callback){
var sha1 = (new goog.crypt.Sha1());
var salt = jaki.couch.new_uuid.call(null);
var id = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(user_doc);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ["org.couchdb.user:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(user_doc))].join('');
}
})();
var roles = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"roles","roles",143379530).cljs$core$IFn$_invoke$arity$1(user_doc);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
sha1.update(jaki.couch.string_to_bytes.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(password),cljs.core.str.cljs$core$IFn$_invoke$arity$1(salt)].join('')));

return jaki.couch.get_user_db.call(null,((function (sha1,salt,id,roles){
return (function (db){
return jaki.couch.post_docs.call(null,cljs.core.assoc.call(null,user_doc,new cljs.core.Keyword(null,"salt","salt",-587171712),salt,new cljs.core.Keyword(null,"_id","_id",-789960287),id,new cljs.core.Keyword(null,"type","type",1174270348),"user",new cljs.core.Keyword(null,"_roles","_roles",-1806684339),roles,new cljs.core.Keyword(null,"password_sha","password_sha",309143790),goog.array.map(sha1.digest(),((function (sha1,salt,id,roles){
return (function (p1__33003_SHARP_){
return p1__33003_SHARP_.toString((16));
});})(sha1,salt,id,roles))
).join("")),db,callback);
});})(sha1,salt,id,roles))
);
});

jaki.couch.sign_up.cljs$lang$maxFixedArity = 3;

jaki.couch.login = (function jaki$couch$login(var_args){
var G__33008 = arguments.length;
switch (G__33008) {
case 2:
return jaki.couch.login.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jaki.couch.login.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jaki.couch.login.cljs$core$IFn$_invoke$arity$2 = (function (username,password){
return jaki.couch.login.call(null,username,password,null);
});

jaki.couch.login.cljs$core$IFn$_invoke$arity$3 = (function (username,password,callback){
return jaki.req.post.call(null,jaki.couch.url.call(null,"/_session"),callback,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),username,new cljs.core.Keyword(null,"password","password",417022471),password], null));
});

jaki.couch.login.cljs$lang$maxFixedArity = 3;

jaki.couch.logout = (function jaki$couch$logout(callback){
return jaki.req.delete$.call(null,jaki.couch.url.call(null,"/_session"),callback);
});
jaki.couch.all_dbs = (function jaki$couch$all_dbs(callback){
return jaki.req.get.call(null,jaki.couch.url.call(null,"/_all_dbs"),callback);
});
jaki.couch.create_db = (function jaki$couch$create_db(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33016 = arguments.length;
var i__4532__auto___33017 = (0);
while(true){
if((i__4532__auto___33017 < len__4531__auto___33016)){
args__4534__auto__.push((arguments[i__4532__auto___33017]));

var G__33018 = (i__4532__auto___33017 + (1));
i__4532__auto___33017 = G__33018;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return jaki.couch.create_db.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

jaki.couch.create_db.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__33012){
var vec__33013 = p__33012;
var callback = cljs.core.nth.call(null,vec__33013,(0),null);
return jaki.req.put.call(null,jaki.couch.url.call(null,["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),callback));
});

jaki.couch.create_db.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
jaki.couch.create_db.cljs$lang$applyTo = (function (seq33010){
var G__33011 = cljs.core.first.call(null,seq33010);
var seq33010__$1 = cljs.core.next.call(null,seq33010);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33011,seq33010__$1);
});

jaki.couch.drop_db = (function jaki$couch$drop_db(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33025 = arguments.length;
var i__4532__auto___33026 = (0);
while(true){
if((i__4532__auto___33026 < len__4531__auto___33025)){
args__4534__auto__.push((arguments[i__4532__auto___33026]));

var G__33027 = (i__4532__auto___33026 + (1));
i__4532__auto___33026 = G__33027;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return jaki.couch.drop_db.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

jaki.couch.drop_db.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__33021){
var vec__33022 = p__33021;
var callback = cljs.core.nth.call(null,vec__33022,(0),null);
return jaki.req.delete$.call(null,jaki.couch.url.call(null,["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')),callback);
});

jaki.couch.drop_db.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
jaki.couch.drop_db.cljs$lang$applyTo = (function (seq33019){
var G__33020 = cljs.core.first.call(null,seq33019);
var seq33019__$1 = cljs.core.next.call(null,seq33019);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33020,seq33019__$1);
});

jaki.couch.about_db = (function jaki$couch$about_db(name,callback){
return jaki.req.get.call(null,jaki.couch.url.call(null,["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')),callback);
});
/**
 * Quick and dirty way to not have to specify any db, using pathname
 */
jaki.couch.guess_current_db = (function jaki$couch$guess_current_db(){
return (window.location().pathname().split("/")[((1) + (cljs.core.deref.call(null,jaki.couch.url_prefix).split("/").length() - (1)))]);
});
jaki.couch.to_path = (function jaki$couch$to_path(view_map){
if(cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,view_map),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"design","design",1241338903),new cljs.core.Keyword(null,"view","view",1247994814)], null))){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interleave.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/","/_design/","/_view/"], null),cljs.core.vals.call(null,cljs.core.select_keys.call(null,view_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"design","design",1241338903),new cljs.core.Keyword(null,"view","view",1247994814)], null)))));
} else {
if(cljs.core.contains_QMARK_.call(null,view_map,new cljs.core.Keyword(null,"db","db",993250759))){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(view_map)),"/_all_docs"].join('');
} else {
return null;
}
}
});
jaki.couch.to_qstr = (function jaki$couch$to_qstr(view_map){
var opts = cljs.core.select_keys.call(null,view_map,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"startkey","startkey",1435668348),new cljs.core.Keyword(null,"startkey_docid","startkey_docid",-1343020470),new cljs.core.Keyword(null,"endkey","endkey",-893308937),new cljs.core.Keyword(null,"endkey_docid","endkey_docid",-1813242517),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"stale","stale",395586896),new cljs.core.Keyword(null,"descending","descending",-24766135),new cljs.core.Keyword(null,"skip","skip",602715391),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"group_level","group_level",1964139574),new cljs.core.Keyword(null,"reduce","reduce",-281692167),new cljs.core.Keyword(null,"include_docs","include_docs",-65447201),new cljs.core.Keyword(null,"inclusive_end","inclusive_end",268461633),new cljs.core.Keyword(null,"update_seq","update_seq",-1977983391)], null));
if(cljs.core.empty_QMARK_.call(null,opts)){
return "";
} else {
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"&",cljs.core.map.call(null,((function (opts){
return (function (p__33028){
var vec__33029 = p__33028;
var k = cljs.core.nth.call(null,vec__33029,(0),null);
var v = cljs.core.nth.call(null,vec__33029,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(v))].join('');
});})(opts))
,opts))))].join('');
}
});
jaki.couch.resolve_db = (function jaki$couch$resolve_db(){
if(cljs.core.truth_(jaki.couch.default_db_set_QMARK_.call(null))){
return cljs.core.deref.call(null,jaki.couch.default_db);
} else {
return jaki.couch.guess_current_db.call(null);
}
});
jaki.couch.get_docs = (function jaki$couch$get_docs(var_args){
var G__33033 = arguments.length;
switch (G__33033) {
case 1:
return jaki.couch.get_docs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jaki.couch.get_docs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jaki.couch.get_docs.cljs$core$IFn$_invoke$arity$1 = (function (callback){
return jaki.couch.get_docs.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),jaki.couch.resolve_db.call(null),new cljs.core.Keyword(null,"include_docs","include_docs",-65447201),true], null),callback);
});

jaki.couch.get_docs.cljs$core$IFn$_invoke$arity$2 = (function (specifier,callback){
if(typeof specifier === 'string'){
return jaki.req.get.call(null,jaki.couch.url.call(null,["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(jaki.couch.resolve_db.call(null)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specifier)].join('')),callback);
} else {
if(typeof specifier === 'number'){
return jaki.couch.get_docs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),jaki.couch.resolve_db.call(null),new cljs.core.Keyword(null,"include_docs","include_docs",-65447201),true,new cljs.core.Keyword(null,"limit","limit",-1355822363),specifier], null),callback);
} else {
if(cljs.core.vector_QMARK_.call(null,specifier)){
return jaki.couch.get_docs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),jaki.couch.resolve_db.call(null),new cljs.core.Keyword(null,"include_docs","include_docs",-65447201),true,new cljs.core.Keyword(null,"keys","keys",1068423698),specifier], null),callback);
} else {
if(cljs.core.map_QMARK_.call(null,specifier)){
var view_map = ((cljs.core.contains_QMARK_.call(null,specifier,new cljs.core.Keyword(null,"db","db",993250759)))?specifier:cljs.core.assoc.call(null,specifier,new cljs.core.Keyword(null,"db","db",993250759),jaki.couch.resolve_db.call(null)));
var uri = jaki.couch.url.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jaki.couch.to_path.call(null,view_map)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(jaki.couch.to_qstr.call(null,view_map))].join(''));
if(cljs.core.truth_(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(view_map))){
return jaki.req.post.call(null,uri,callback,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(view_map)], null));
} else {
return jaki.req.get.call(null,uri,callback);
}
} else {
return null;
}
}
}
}
});

jaki.couch.get_docs.cljs$lang$maxFixedArity = 2;

jaki.couch.post_docs = (function jaki$couch$post_docs(var_args){
var G__33036 = arguments.length;
switch (G__33036) {
case 1:
return jaki.couch.post_docs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jaki.couch.post_docs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jaki.couch.post_docs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jaki.couch.post_docs.cljs$core$IFn$_invoke$arity$1 = (function (doc_or_docs){
return jaki.couch.post_docs.call(null,doc_or_docs,null);
});

jaki.couch.post_docs.cljs$core$IFn$_invoke$arity$2 = (function (doc_or_docs,callback){
return jaki.couch.post_docs.call(null,doc_or_docs,jaki.couch.resolve_db.call(null),callback);
});

jaki.couch.post_docs.cljs$core$IFn$_invoke$arity$3 = (function (doc_or_docs,db,callback){
var data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"docs","docs",-1974280502),((cljs.core.vector_QMARK_.call(null,doc_or_docs))?doc_or_docs:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[doc_or_docs],null)))], null);
return jaki.req.post.call(null,jaki.couch.url.call(null,["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(db),"/_bulk_docs"].join('')),callback,data);
});

jaki.couch.post_docs.cljs$lang$maxFixedArity = 3;

jaki.couch.delete_docs = (function jaki$couch$delete_docs(var_args){
var G__33039 = arguments.length;
switch (G__33039) {
case 1:
return jaki.couch.delete_docs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jaki.couch.delete_docs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jaki.couch.delete_docs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jaki.couch.delete_docs.cljs$core$IFn$_invoke$arity$1 = (function (doc_or_docs){
return jaki.couch.delete_docs.call(null,doc_or_docs,null);
});

jaki.couch.delete_docs.cljs$core$IFn$_invoke$arity$2 = (function (doc_or_docs,callback){
return jaki.couch.delete_docs.call(null,jaki.couch.resolve_db.call(null),callback);
});

jaki.couch.delete_docs.cljs$core$IFn$_invoke$arity$3 = (function (doc_or_docs,db,callback){
if(cljs.core.vector_QMARK_.call(null,doc_or_docs)){
return jaki.req.post.call(null,jaki.couch.url.call(null,["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(db),"/_bulk_docs"].join('')),callback,cljs.core.vec.call(null,(function (){var iter__4324__auto__ = (function jaki$couch$iter__33040(s__33041){
return (new cljs.core.LazySeq(null,(function (){
var s__33041__$1 = s__33041;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__33041__$1);
if(temp__5457__auto__){
var s__33041__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33041__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__33041__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__33043 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__33042 = (0);
while(true){
if((i__33042 < size__4323__auto__)){
var d = cljs.core._nth.call(null,c__4322__auto__,i__33042);
cljs.core.chunk_append.call(null,b__33043,cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"_deleted","_deleted",27883763),true));

var G__33045 = (i__33042 + (1));
i__33042 = G__33045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33043),jaki$couch$iter__33040.call(null,cljs.core.chunk_rest.call(null,s__33041__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33043),null);
}
} else {
var d = cljs.core.first.call(null,s__33041__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"_deleted","_deleted",27883763),true),jaki$couch$iter__33040.call(null,cljs.core.rest.call(null,s__33041__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,doc_or_docs);
})()));
} else {
return jaki.req.delete$.call(null,jaki.couch.url.call(null,["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(db),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(doc_or_docs))].join('')),callback);
}
});

jaki.couch.delete_docs.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=couch.js.map?rel=1530952925939
