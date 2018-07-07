// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33974){
var map__33975 = p__33974;
var map__33975__$1 = ((((!((map__33975 == null)))?(((((map__33975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33975):map__33975);
var m = map__33975__$1;
var n = cljs.core.get.call(null,map__33975__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33975__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33977_33999 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33978_34000 = null;
var count__33979_34001 = (0);
var i__33980_34002 = (0);
while(true){
if((i__33980_34002 < count__33979_34001)){
var f_34003 = cljs.core._nth.call(null,chunk__33978_34000,i__33980_34002);
cljs.core.println.call(null,"  ",f_34003);


var G__34004 = seq__33977_33999;
var G__34005 = chunk__33978_34000;
var G__34006 = count__33979_34001;
var G__34007 = (i__33980_34002 + (1));
seq__33977_33999 = G__34004;
chunk__33978_34000 = G__34005;
count__33979_34001 = G__34006;
i__33980_34002 = G__34007;
continue;
} else {
var temp__5457__auto___34008 = cljs.core.seq.call(null,seq__33977_33999);
if(temp__5457__auto___34008){
var seq__33977_34009__$1 = temp__5457__auto___34008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33977_34009__$1)){
var c__4351__auto___34010 = cljs.core.chunk_first.call(null,seq__33977_34009__$1);
var G__34011 = cljs.core.chunk_rest.call(null,seq__33977_34009__$1);
var G__34012 = c__4351__auto___34010;
var G__34013 = cljs.core.count.call(null,c__4351__auto___34010);
var G__34014 = (0);
seq__33977_33999 = G__34011;
chunk__33978_34000 = G__34012;
count__33979_34001 = G__34013;
i__33980_34002 = G__34014;
continue;
} else {
var f_34015 = cljs.core.first.call(null,seq__33977_34009__$1);
cljs.core.println.call(null,"  ",f_34015);


var G__34016 = cljs.core.next.call(null,seq__33977_34009__$1);
var G__34017 = null;
var G__34018 = (0);
var G__34019 = (0);
seq__33977_33999 = G__34016;
chunk__33978_34000 = G__34017;
count__33979_34001 = G__34018;
i__33980_34002 = G__34019;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34020 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34020);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34020)))?cljs.core.second.call(null,arglists_34020):arglists_34020));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33981_34021 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33982_34022 = null;
var count__33983_34023 = (0);
var i__33984_34024 = (0);
while(true){
if((i__33984_34024 < count__33983_34023)){
var vec__33985_34025 = cljs.core._nth.call(null,chunk__33982_34022,i__33984_34024);
var name_34026 = cljs.core.nth.call(null,vec__33985_34025,(0),null);
var map__33988_34027 = cljs.core.nth.call(null,vec__33985_34025,(1),null);
var map__33988_34028__$1 = ((((!((map__33988_34027 == null)))?(((((map__33988_34027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33988_34027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33988_34027):map__33988_34027);
var doc_34029 = cljs.core.get.call(null,map__33988_34028__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34030 = cljs.core.get.call(null,map__33988_34028__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34026);

cljs.core.println.call(null," ",arglists_34030);

if(cljs.core.truth_(doc_34029)){
cljs.core.println.call(null," ",doc_34029);
} else {
}


var G__34031 = seq__33981_34021;
var G__34032 = chunk__33982_34022;
var G__34033 = count__33983_34023;
var G__34034 = (i__33984_34024 + (1));
seq__33981_34021 = G__34031;
chunk__33982_34022 = G__34032;
count__33983_34023 = G__34033;
i__33984_34024 = G__34034;
continue;
} else {
var temp__5457__auto___34035 = cljs.core.seq.call(null,seq__33981_34021);
if(temp__5457__auto___34035){
var seq__33981_34036__$1 = temp__5457__auto___34035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33981_34036__$1)){
var c__4351__auto___34037 = cljs.core.chunk_first.call(null,seq__33981_34036__$1);
var G__34038 = cljs.core.chunk_rest.call(null,seq__33981_34036__$1);
var G__34039 = c__4351__auto___34037;
var G__34040 = cljs.core.count.call(null,c__4351__auto___34037);
var G__34041 = (0);
seq__33981_34021 = G__34038;
chunk__33982_34022 = G__34039;
count__33983_34023 = G__34040;
i__33984_34024 = G__34041;
continue;
} else {
var vec__33990_34042 = cljs.core.first.call(null,seq__33981_34036__$1);
var name_34043 = cljs.core.nth.call(null,vec__33990_34042,(0),null);
var map__33993_34044 = cljs.core.nth.call(null,vec__33990_34042,(1),null);
var map__33993_34045__$1 = ((((!((map__33993_34044 == null)))?(((((map__33993_34044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33993_34044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33993_34044):map__33993_34044);
var doc_34046 = cljs.core.get.call(null,map__33993_34045__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34047 = cljs.core.get.call(null,map__33993_34045__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34043);

cljs.core.println.call(null," ",arglists_34047);

if(cljs.core.truth_(doc_34046)){
cljs.core.println.call(null," ",doc_34046);
} else {
}


var G__34048 = cljs.core.next.call(null,seq__33981_34036__$1);
var G__34049 = null;
var G__34050 = (0);
var G__34051 = (0);
seq__33981_34021 = G__34048;
chunk__33982_34022 = G__34049;
count__33983_34023 = G__34050;
i__33984_34024 = G__34051;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__33995 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33996 = null;
var count__33997 = (0);
var i__33998 = (0);
while(true){
if((i__33998 < count__33997)){
var role = cljs.core._nth.call(null,chunk__33996,i__33998);
var temp__5457__auto___34052__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34052__$1)){
var spec_34053 = temp__5457__auto___34052__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34053));
} else {
}


var G__34054 = seq__33995;
var G__34055 = chunk__33996;
var G__34056 = count__33997;
var G__34057 = (i__33998 + (1));
seq__33995 = G__34054;
chunk__33996 = G__34055;
count__33997 = G__34056;
i__33998 = G__34057;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__33995);
if(temp__5457__auto____$1){
var seq__33995__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33995__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__33995__$1);
var G__34058 = cljs.core.chunk_rest.call(null,seq__33995__$1);
var G__34059 = c__4351__auto__;
var G__34060 = cljs.core.count.call(null,c__4351__auto__);
var G__34061 = (0);
seq__33995 = G__34058;
chunk__33996 = G__34059;
count__33997 = G__34060;
i__33998 = G__34061;
continue;
} else {
var role = cljs.core.first.call(null,seq__33995__$1);
var temp__5457__auto___34062__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34062__$2)){
var spec_34063 = temp__5457__auto___34062__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34063));
} else {
}


var G__34064 = cljs.core.next.call(null,seq__33995__$1);
var G__34065 = null;
var G__34066 = (0);
var G__34067 = (0);
seq__33995 = G__34064;
chunk__33996 = G__34065;
count__33997 = G__34066;
i__33998 = G__34067;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1530950275946
