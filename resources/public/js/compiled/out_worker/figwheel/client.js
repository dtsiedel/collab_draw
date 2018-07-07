// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e34070){if((e34070 instanceof Error)){
var e = e34070;
return "Error: Unable to stringify";
} else {
throw e34070;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__34073 = arguments.length;
switch (G__34073) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__34071_SHARP_){
if(typeof p1__34071_SHARP_ === 'string'){
return p1__34071_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__34071_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___34076 = arguments.length;
var i__4532__auto___34077 = (0);
while(true){
if((i__4532__auto___34077 < len__4531__auto___34076)){
args__4534__auto__.push((arguments[i__4532__auto___34077]));

var G__34078 = (i__4532__auto___34077 + (1));
i__4532__auto___34077 = G__34078;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34075){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34075));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___34080 = arguments.length;
var i__4532__auto___34081 = (0);
while(true){
if((i__4532__auto___34081 < len__4531__auto___34080)){
args__4534__auto__.push((arguments[i__4532__auto___34081]));

var G__34082 = (i__4532__auto___34081 + (1));
i__4532__auto___34081 = G__34082;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34079){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34079));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34083){
var map__34084 = p__34083;
var map__34084__$1 = ((((!((map__34084 == null)))?(((((map__34084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34084):map__34084);
var message = cljs.core.get.call(null,map__34084__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34084__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28680__auto___34163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___34163,ch){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___34163,ch){
return (function (state_34135){
var state_val_34136 = (state_34135[(1)]);
if((state_val_34136 === (7))){
var inst_34131 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
var statearr_34137_34164 = state_34135__$1;
(statearr_34137_34164[(2)] = inst_34131);

(statearr_34137_34164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (1))){
var state_34135__$1 = state_34135;
var statearr_34138_34165 = state_34135__$1;
(statearr_34138_34165[(2)] = null);

(statearr_34138_34165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (4))){
var inst_34088 = (state_34135[(7)]);
var inst_34088__$1 = (state_34135[(2)]);
var state_34135__$1 = (function (){var statearr_34139 = state_34135;
(statearr_34139[(7)] = inst_34088__$1);

return statearr_34139;
})();
if(cljs.core.truth_(inst_34088__$1)){
var statearr_34140_34166 = state_34135__$1;
(statearr_34140_34166[(1)] = (5));

} else {
var statearr_34141_34167 = state_34135__$1;
(statearr_34141_34167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (15))){
var inst_34095 = (state_34135[(8)]);
var inst_34110 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34095);
var inst_34111 = cljs.core.first.call(null,inst_34110);
var inst_34112 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34111);
var inst_34113 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34112)].join('');
var inst_34114 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34113);
var state_34135__$1 = state_34135;
var statearr_34142_34168 = state_34135__$1;
(statearr_34142_34168[(2)] = inst_34114);

(statearr_34142_34168[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (13))){
var inst_34119 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
var statearr_34143_34169 = state_34135__$1;
(statearr_34143_34169[(2)] = inst_34119);

(statearr_34143_34169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (6))){
var state_34135__$1 = state_34135;
var statearr_34144_34170 = state_34135__$1;
(statearr_34144_34170[(2)] = null);

(statearr_34144_34170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (17))){
var inst_34117 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
var statearr_34145_34171 = state_34135__$1;
(statearr_34145_34171[(2)] = inst_34117);

(statearr_34145_34171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (3))){
var inst_34133 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34135__$1,inst_34133);
} else {
if((state_val_34136 === (12))){
var inst_34094 = (state_34135[(9)]);
var inst_34108 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34094,opts);
var state_34135__$1 = state_34135;
if(cljs.core.truth_(inst_34108)){
var statearr_34146_34172 = state_34135__$1;
(statearr_34146_34172[(1)] = (15));

} else {
var statearr_34147_34173 = state_34135__$1;
(statearr_34147_34173[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (2))){
var state_34135__$1 = state_34135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34135__$1,(4),ch);
} else {
if((state_val_34136 === (11))){
var inst_34095 = (state_34135[(8)]);
var inst_34100 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34101 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34095);
var inst_34102 = cljs.core.async.timeout.call(null,(1000));
var inst_34103 = [inst_34101,inst_34102];
var inst_34104 = (new cljs.core.PersistentVector(null,2,(5),inst_34100,inst_34103,null));
var state_34135__$1 = state_34135;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34135__$1,(14),inst_34104);
} else {
if((state_val_34136 === (9))){
var inst_34095 = (state_34135[(8)]);
var inst_34121 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34122 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34095);
var inst_34123 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34122);
var inst_34124 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34123)].join('');
var inst_34125 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34124);
var state_34135__$1 = (function (){var statearr_34148 = state_34135;
(statearr_34148[(10)] = inst_34121);

return statearr_34148;
})();
var statearr_34149_34174 = state_34135__$1;
(statearr_34149_34174[(2)] = inst_34125);

(statearr_34149_34174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (5))){
var inst_34088 = (state_34135[(7)]);
var inst_34090 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34091 = (new cljs.core.PersistentArrayMap(null,2,inst_34090,null));
var inst_34092 = (new cljs.core.PersistentHashSet(null,inst_34091,null));
var inst_34093 = figwheel.client.focus_msgs.call(null,inst_34092,inst_34088);
var inst_34094 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34093);
var inst_34095 = cljs.core.first.call(null,inst_34093);
var inst_34096 = figwheel.client.autoload_QMARK_.call(null);
var state_34135__$1 = (function (){var statearr_34150 = state_34135;
(statearr_34150[(9)] = inst_34094);

(statearr_34150[(8)] = inst_34095);

return statearr_34150;
})();
if(cljs.core.truth_(inst_34096)){
var statearr_34151_34175 = state_34135__$1;
(statearr_34151_34175[(1)] = (8));

} else {
var statearr_34152_34176 = state_34135__$1;
(statearr_34152_34176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (14))){
var inst_34106 = (state_34135[(2)]);
var state_34135__$1 = state_34135;
var statearr_34153_34177 = state_34135__$1;
(statearr_34153_34177[(2)] = inst_34106);

(statearr_34153_34177[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (16))){
var state_34135__$1 = state_34135;
var statearr_34154_34178 = state_34135__$1;
(statearr_34154_34178[(2)] = null);

(statearr_34154_34178[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (10))){
var inst_34127 = (state_34135[(2)]);
var state_34135__$1 = (function (){var statearr_34155 = state_34135;
(statearr_34155[(11)] = inst_34127);

return statearr_34155;
})();
var statearr_34156_34179 = state_34135__$1;
(statearr_34156_34179[(2)] = null);

(statearr_34156_34179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34136 === (8))){
var inst_34094 = (state_34135[(9)]);
var inst_34098 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34094,opts);
var state_34135__$1 = state_34135;
if(cljs.core.truth_(inst_34098)){
var statearr_34157_34180 = state_34135__$1;
(statearr_34157_34180[(1)] = (11));

} else {
var statearr_34158_34181 = state_34135__$1;
(statearr_34158_34181[(1)] = (12));

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
});})(c__28680__auto___34163,ch))
;
return ((function (switch__28589__auto__,c__28680__auto___34163,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28590__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28590__auto____0 = (function (){
var statearr_34159 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34159[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28590__auto__);

(statearr_34159[(1)] = (1));

return statearr_34159;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28590__auto____1 = (function (state_34135){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_34135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e34160){if((e34160 instanceof Object)){
var ex__28593__auto__ = e34160;
var statearr_34161_34182 = state_34135;
(statearr_34161_34182[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34183 = state_34135;
state_34135 = G__34183;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28590__auto__ = function(state_34135){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28590__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28590__auto____1.call(this,state_34135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28590__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28590__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___34163,ch))
})();
var state__28682__auto__ = (function (){var statearr_34162 = f__28681__auto__.call(null);
(statearr_34162[(6)] = c__28680__auto___34163);

return statearr_34162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___34163,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34184_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34184_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34188 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34188){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_34186 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_34187 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_34186,_STAR_print_fn_STAR_34187,sb,base_path_34188){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_34186,_STAR_print_fn_STAR_34187,sb,base_path_34188))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34187;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34186;
}}catch (e34185){if((e34185 instanceof Error)){
var e = e34185;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34188], null));
} else {
var e = e34185;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34188))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34189){
var map__34190 = p__34189;
var map__34190__$1 = ((((!((map__34190 == null)))?(((((map__34190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34190):map__34190);
var opts = map__34190__$1;
var build_id = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34190,map__34190__$1,opts,build_id){
return (function (p__34192){
var vec__34193 = p__34192;
var seq__34194 = cljs.core.seq.call(null,vec__34193);
var first__34195 = cljs.core.first.call(null,seq__34194);
var seq__34194__$1 = cljs.core.next.call(null,seq__34194);
var map__34196 = first__34195;
var map__34196__$1 = ((((!((map__34196 == null)))?(((((map__34196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34196):map__34196);
var msg = map__34196__$1;
var msg_name = cljs.core.get.call(null,map__34196__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34194__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34193,seq__34194,first__34195,seq__34194__$1,map__34196,map__34196__$1,msg,msg_name,_,map__34190,map__34190__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34193,seq__34194,first__34195,seq__34194__$1,map__34196,map__34196__$1,msg,msg_name,_,map__34190,map__34190__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34190,map__34190__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34198){
var vec__34199 = p__34198;
var seq__34200 = cljs.core.seq.call(null,vec__34199);
var first__34201 = cljs.core.first.call(null,seq__34200);
var seq__34200__$1 = cljs.core.next.call(null,seq__34200);
var map__34202 = first__34201;
var map__34202__$1 = ((((!((map__34202 == null)))?(((((map__34202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34202):map__34202);
var msg = map__34202__$1;
var msg_name = cljs.core.get.call(null,map__34202__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34200__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34204){
var map__34205 = p__34204;
var map__34205__$1 = ((((!((map__34205 == null)))?(((((map__34205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34205):map__34205);
var on_compile_warning = cljs.core.get.call(null,map__34205__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34205__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34205,map__34205__$1,on_compile_warning,on_compile_fail){
return (function (p__34207){
var vec__34208 = p__34207;
var seq__34209 = cljs.core.seq.call(null,vec__34208);
var first__34210 = cljs.core.first.call(null,seq__34209);
var seq__34209__$1 = cljs.core.next.call(null,seq__34209);
var map__34211 = first__34210;
var map__34211__$1 = ((((!((map__34211 == null)))?(((((map__34211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34211):map__34211);
var msg = map__34211__$1;
var msg_name = cljs.core.get.call(null,map__34211__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34209__$1;
var pred__34213 = cljs.core._EQ_;
var expr__34214 = msg_name;
if(cljs.core.truth_(pred__34213.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34214))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34213.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34214))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34205,map__34205__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto__,msg_hist,msg_names,msg){
return (function (state_34303){
var state_val_34304 = (state_34303[(1)]);
if((state_val_34304 === (7))){
var inst_34223 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
if(cljs.core.truth_(inst_34223)){
var statearr_34305_34352 = state_34303__$1;
(statearr_34305_34352[(1)] = (8));

} else {
var statearr_34306_34353 = state_34303__$1;
(statearr_34306_34353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (20))){
var inst_34297 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
var statearr_34307_34354 = state_34303__$1;
(statearr_34307_34354[(2)] = inst_34297);

(statearr_34307_34354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (27))){
var inst_34293 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
var statearr_34308_34355 = state_34303__$1;
(statearr_34308_34355[(2)] = inst_34293);

(statearr_34308_34355[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (1))){
var inst_34216 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34303__$1 = state_34303;
if(cljs.core.truth_(inst_34216)){
var statearr_34309_34356 = state_34303__$1;
(statearr_34309_34356[(1)] = (2));

} else {
var statearr_34310_34357 = state_34303__$1;
(statearr_34310_34357[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (24))){
var inst_34295 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
var statearr_34311_34358 = state_34303__$1;
(statearr_34311_34358[(2)] = inst_34295);

(statearr_34311_34358[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (4))){
var inst_34301 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34303__$1,inst_34301);
} else {
if((state_val_34304 === (15))){
var inst_34299 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
var statearr_34312_34359 = state_34303__$1;
(statearr_34312_34359[(2)] = inst_34299);

(statearr_34312_34359[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (21))){
var inst_34252 = (state_34303[(2)]);
var inst_34253 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34254 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34253);
var state_34303__$1 = (function (){var statearr_34313 = state_34303;
(statearr_34313[(7)] = inst_34252);

return statearr_34313;
})();
var statearr_34314_34360 = state_34303__$1;
(statearr_34314_34360[(2)] = inst_34254);

(statearr_34314_34360[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (31))){
var inst_34282 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34303__$1 = state_34303;
if(cljs.core.truth_(inst_34282)){
var statearr_34315_34361 = state_34303__$1;
(statearr_34315_34361[(1)] = (34));

} else {
var statearr_34316_34362 = state_34303__$1;
(statearr_34316_34362[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (32))){
var inst_34291 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
var statearr_34317_34363 = state_34303__$1;
(statearr_34317_34363[(2)] = inst_34291);

(statearr_34317_34363[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (33))){
var inst_34278 = (state_34303[(2)]);
var inst_34279 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34280 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34279);
var state_34303__$1 = (function (){var statearr_34318 = state_34303;
(statearr_34318[(8)] = inst_34278);

return statearr_34318;
})();
var statearr_34319_34364 = state_34303__$1;
(statearr_34319_34364[(2)] = inst_34280);

(statearr_34319_34364[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (13))){
var inst_34237 = figwheel.client.heads_up.clear.call(null);
var state_34303__$1 = state_34303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34303__$1,(16),inst_34237);
} else {
if((state_val_34304 === (22))){
var inst_34258 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34259 = figwheel.client.heads_up.append_warning_message.call(null,inst_34258);
var state_34303__$1 = state_34303;
var statearr_34320_34365 = state_34303__$1;
(statearr_34320_34365[(2)] = inst_34259);

(statearr_34320_34365[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (36))){
var inst_34289 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
var statearr_34321_34366 = state_34303__$1;
(statearr_34321_34366[(2)] = inst_34289);

(statearr_34321_34366[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (29))){
var inst_34269 = (state_34303[(2)]);
var inst_34270 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34271 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34270);
var state_34303__$1 = (function (){var statearr_34322 = state_34303;
(statearr_34322[(9)] = inst_34269);

return statearr_34322;
})();
var statearr_34323_34367 = state_34303__$1;
(statearr_34323_34367[(2)] = inst_34271);

(statearr_34323_34367[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (6))){
var inst_34218 = (state_34303[(10)]);
var state_34303__$1 = state_34303;
var statearr_34324_34368 = state_34303__$1;
(statearr_34324_34368[(2)] = inst_34218);

(statearr_34324_34368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (28))){
var inst_34265 = (state_34303[(2)]);
var inst_34266 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34267 = figwheel.client.heads_up.display_warning.call(null,inst_34266);
var state_34303__$1 = (function (){var statearr_34325 = state_34303;
(statearr_34325[(11)] = inst_34265);

return statearr_34325;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34303__$1,(29),inst_34267);
} else {
if((state_val_34304 === (25))){
var inst_34263 = figwheel.client.heads_up.clear.call(null);
var state_34303__$1 = state_34303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34303__$1,(28),inst_34263);
} else {
if((state_val_34304 === (34))){
var inst_34284 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34303__$1 = state_34303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34303__$1,(37),inst_34284);
} else {
if((state_val_34304 === (17))){
var inst_34243 = (state_34303[(2)]);
var inst_34244 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34245 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34244);
var state_34303__$1 = (function (){var statearr_34326 = state_34303;
(statearr_34326[(12)] = inst_34243);

return statearr_34326;
})();
var statearr_34327_34369 = state_34303__$1;
(statearr_34327_34369[(2)] = inst_34245);

(statearr_34327_34369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (3))){
var inst_34235 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34303__$1 = state_34303;
if(cljs.core.truth_(inst_34235)){
var statearr_34328_34370 = state_34303__$1;
(statearr_34328_34370[(1)] = (13));

} else {
var statearr_34329_34371 = state_34303__$1;
(statearr_34329_34371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (12))){
var inst_34231 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
var statearr_34330_34372 = state_34303__$1;
(statearr_34330_34372[(2)] = inst_34231);

(statearr_34330_34372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (2))){
var inst_34218 = (state_34303[(10)]);
var inst_34218__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34303__$1 = (function (){var statearr_34331 = state_34303;
(statearr_34331[(10)] = inst_34218__$1);

return statearr_34331;
})();
if(cljs.core.truth_(inst_34218__$1)){
var statearr_34332_34373 = state_34303__$1;
(statearr_34332_34373[(1)] = (5));

} else {
var statearr_34333_34374 = state_34303__$1;
(statearr_34333_34374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (23))){
var inst_34261 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34303__$1 = state_34303;
if(cljs.core.truth_(inst_34261)){
var statearr_34334_34375 = state_34303__$1;
(statearr_34334_34375[(1)] = (25));

} else {
var statearr_34335_34376 = state_34303__$1;
(statearr_34335_34376[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (35))){
var state_34303__$1 = state_34303;
var statearr_34336_34377 = state_34303__$1;
(statearr_34336_34377[(2)] = null);

(statearr_34336_34377[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (19))){
var inst_34256 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34303__$1 = state_34303;
if(cljs.core.truth_(inst_34256)){
var statearr_34337_34378 = state_34303__$1;
(statearr_34337_34378[(1)] = (22));

} else {
var statearr_34338_34379 = state_34303__$1;
(statearr_34338_34379[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (11))){
var inst_34227 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
var statearr_34339_34380 = state_34303__$1;
(statearr_34339_34380[(2)] = inst_34227);

(statearr_34339_34380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (9))){
var inst_34229 = figwheel.client.heads_up.clear.call(null);
var state_34303__$1 = state_34303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34303__$1,(12),inst_34229);
} else {
if((state_val_34304 === (5))){
var inst_34220 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34303__$1 = state_34303;
var statearr_34340_34381 = state_34303__$1;
(statearr_34340_34381[(2)] = inst_34220);

(statearr_34340_34381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (14))){
var inst_34247 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34303__$1 = state_34303;
if(cljs.core.truth_(inst_34247)){
var statearr_34341_34382 = state_34303__$1;
(statearr_34341_34382[(1)] = (18));

} else {
var statearr_34342_34383 = state_34303__$1;
(statearr_34342_34383[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (26))){
var inst_34273 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34303__$1 = state_34303;
if(cljs.core.truth_(inst_34273)){
var statearr_34343_34384 = state_34303__$1;
(statearr_34343_34384[(1)] = (30));

} else {
var statearr_34344_34385 = state_34303__$1;
(statearr_34344_34385[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (16))){
var inst_34239 = (state_34303[(2)]);
var inst_34240 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34241 = figwheel.client.heads_up.display_exception.call(null,inst_34240);
var state_34303__$1 = (function (){var statearr_34345 = state_34303;
(statearr_34345[(13)] = inst_34239);

return statearr_34345;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34303__$1,(17),inst_34241);
} else {
if((state_val_34304 === (30))){
var inst_34275 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34276 = figwheel.client.heads_up.display_warning.call(null,inst_34275);
var state_34303__$1 = state_34303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34303__$1,(33),inst_34276);
} else {
if((state_val_34304 === (10))){
var inst_34233 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
var statearr_34346_34386 = state_34303__$1;
(statearr_34346_34386[(2)] = inst_34233);

(statearr_34346_34386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (18))){
var inst_34249 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34250 = figwheel.client.heads_up.display_exception.call(null,inst_34249);
var state_34303__$1 = state_34303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34303__$1,(21),inst_34250);
} else {
if((state_val_34304 === (37))){
var inst_34286 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
var statearr_34347_34387 = state_34303__$1;
(statearr_34347_34387[(2)] = inst_34286);

(statearr_34347_34387[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (8))){
var inst_34225 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34303__$1 = state_34303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34303__$1,(11),inst_34225);
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
});})(c__28680__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28589__auto__,c__28680__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28590__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28590__auto____0 = (function (){
var statearr_34348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34348[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28590__auto__);

(statearr_34348[(1)] = (1));

return statearr_34348;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28590__auto____1 = (function (state_34303){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_34303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e34349){if((e34349 instanceof Object)){
var ex__28593__auto__ = e34349;
var statearr_34350_34388 = state_34303;
(statearr_34350_34388[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34389 = state_34303;
state_34303 = G__34389;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28590__auto__ = function(state_34303){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28590__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28590__auto____1.call(this,state_34303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28590__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28590__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto__,msg_hist,msg_names,msg))
})();
var state__28682__auto__ = (function (){var statearr_34351 = f__28681__auto__.call(null);
(statearr_34351[(6)] = c__28680__auto__);

return statearr_34351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto__,msg_hist,msg_names,msg))
);

return c__28680__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28680__auto___34418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___34418,ch){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___34418,ch){
return (function (state_34404){
var state_val_34405 = (state_34404[(1)]);
if((state_val_34405 === (1))){
var state_34404__$1 = state_34404;
var statearr_34406_34419 = state_34404__$1;
(statearr_34406_34419[(2)] = null);

(statearr_34406_34419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (2))){
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34404__$1,(4),ch);
} else {
if((state_val_34405 === (3))){
var inst_34402 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34404__$1,inst_34402);
} else {
if((state_val_34405 === (4))){
var inst_34392 = (state_34404[(7)]);
var inst_34392__$1 = (state_34404[(2)]);
var state_34404__$1 = (function (){var statearr_34407 = state_34404;
(statearr_34407[(7)] = inst_34392__$1);

return statearr_34407;
})();
if(cljs.core.truth_(inst_34392__$1)){
var statearr_34408_34420 = state_34404__$1;
(statearr_34408_34420[(1)] = (5));

} else {
var statearr_34409_34421 = state_34404__$1;
(statearr_34409_34421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (5))){
var inst_34392 = (state_34404[(7)]);
var inst_34394 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34392);
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34404__$1,(8),inst_34394);
} else {
if((state_val_34405 === (6))){
var state_34404__$1 = state_34404;
var statearr_34410_34422 = state_34404__$1;
(statearr_34410_34422[(2)] = null);

(statearr_34410_34422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (7))){
var inst_34400 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34411_34423 = state_34404__$1;
(statearr_34411_34423[(2)] = inst_34400);

(statearr_34411_34423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (8))){
var inst_34396 = (state_34404[(2)]);
var state_34404__$1 = (function (){var statearr_34412 = state_34404;
(statearr_34412[(8)] = inst_34396);

return statearr_34412;
})();
var statearr_34413_34424 = state_34404__$1;
(statearr_34413_34424[(2)] = null);

(statearr_34413_34424[(1)] = (2));


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
});})(c__28680__auto___34418,ch))
;
return ((function (switch__28589__auto__,c__28680__auto___34418,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28590__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28590__auto____0 = (function (){
var statearr_34414 = [null,null,null,null,null,null,null,null,null];
(statearr_34414[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28590__auto__);

(statearr_34414[(1)] = (1));

return statearr_34414;
});
var figwheel$client$heads_up_plugin_$_state_machine__28590__auto____1 = (function (state_34404){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_34404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e34415){if((e34415 instanceof Object)){
var ex__28593__auto__ = e34415;
var statearr_34416_34425 = state_34404;
(statearr_34416_34425[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34426 = state_34404;
state_34404 = G__34426;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28590__auto__ = function(state_34404){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28590__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28590__auto____1.call(this,state_34404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28590__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28590__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___34418,ch))
})();
var state__28682__auto__ = (function (){var statearr_34417 = f__28681__auto__.call(null);
(statearr_34417[(6)] = c__28680__auto___34418);

return statearr_34417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___34418,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto__){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto__){
return (function (state_34432){
var state_val_34433 = (state_34432[(1)]);
if((state_val_34433 === (1))){
var inst_34427 = cljs.core.async.timeout.call(null,(3000));
var state_34432__$1 = state_34432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34432__$1,(2),inst_34427);
} else {
if((state_val_34433 === (2))){
var inst_34429 = (state_34432[(2)]);
var inst_34430 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34432__$1 = (function (){var statearr_34434 = state_34432;
(statearr_34434[(7)] = inst_34429);

return statearr_34434;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34432__$1,inst_34430);
} else {
return null;
}
}
});})(c__28680__auto__))
;
return ((function (switch__28589__auto__,c__28680__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28590__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28590__auto____0 = (function (){
var statearr_34435 = [null,null,null,null,null,null,null,null];
(statearr_34435[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28590__auto__);

(statearr_34435[(1)] = (1));

return statearr_34435;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28590__auto____1 = (function (state_34432){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_34432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e34436){if((e34436 instanceof Object)){
var ex__28593__auto__ = e34436;
var statearr_34437_34439 = state_34432;
(statearr_34437_34439[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34440 = state_34432;
state_34432 = G__34440;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28590__auto__ = function(state_34432){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28590__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28590__auto____1.call(this,state_34432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28590__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28590__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto__))
})();
var state__28682__auto__ = (function (){var statearr_34438 = f__28681__auto__.call(null);
(statearr_34438[(6)] = c__28680__auto__);

return statearr_34438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto__))
);

return c__28680__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto__,figwheel_version,temp__5457__auto__){
return (function (state_34447){
var state_val_34448 = (state_34447[(1)]);
if((state_val_34448 === (1))){
var inst_34441 = cljs.core.async.timeout.call(null,(2000));
var state_34447__$1 = state_34447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34447__$1,(2),inst_34441);
} else {
if((state_val_34448 === (2))){
var inst_34443 = (state_34447[(2)]);
var inst_34444 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_34445 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_34444);
var state_34447__$1 = (function (){var statearr_34449 = state_34447;
(statearr_34449[(7)] = inst_34443);

return statearr_34449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34447__$1,inst_34445);
} else {
return null;
}
}
});})(c__28680__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__28589__auto__,c__28680__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28590__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28590__auto____0 = (function (){
var statearr_34450 = [null,null,null,null,null,null,null,null];
(statearr_34450[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28590__auto__);

(statearr_34450[(1)] = (1));

return statearr_34450;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28590__auto____1 = (function (state_34447){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_34447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e34451){if((e34451 instanceof Object)){
var ex__28593__auto__ = e34451;
var statearr_34452_34454 = state_34447;
(statearr_34452_34454[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34455 = state_34447;
state_34447 = G__34455;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28590__auto__ = function(state_34447){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28590__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28590__auto____1.call(this,state_34447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28590__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28590__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto__,figwheel_version,temp__5457__auto__))
})();
var state__28682__auto__ = (function (){var statearr_34453 = f__28681__auto__.call(null);
(statearr_34453[(6)] = c__28680__auto__);

return statearr_34453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto__,figwheel_version,temp__5457__auto__))
);

return c__28680__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__34456){
var map__34457 = p__34456;
var map__34457__$1 = ((((!((map__34457 == null)))?(((((map__34457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34457):map__34457);
var file = cljs.core.get.call(null,map__34457__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34457__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34457__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34459 = "";
var G__34459__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34459),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__34459);
var G__34459__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34459__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34459__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34459__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__34459__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34460){
var map__34461 = p__34460;
var map__34461__$1 = ((((!((map__34461 == null)))?(((((map__34461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34461):map__34461);
var ed = map__34461__$1;
var formatted_exception = cljs.core.get.call(null,map__34461__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34461__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34461__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34463_34467 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34464_34468 = null;
var count__34465_34469 = (0);
var i__34466_34470 = (0);
while(true){
if((i__34466_34470 < count__34465_34469)){
var msg_34471 = cljs.core._nth.call(null,chunk__34464_34468,i__34466_34470);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34471);


var G__34472 = seq__34463_34467;
var G__34473 = chunk__34464_34468;
var G__34474 = count__34465_34469;
var G__34475 = (i__34466_34470 + (1));
seq__34463_34467 = G__34472;
chunk__34464_34468 = G__34473;
count__34465_34469 = G__34474;
i__34466_34470 = G__34475;
continue;
} else {
var temp__5457__auto___34476 = cljs.core.seq.call(null,seq__34463_34467);
if(temp__5457__auto___34476){
var seq__34463_34477__$1 = temp__5457__auto___34476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34463_34477__$1)){
var c__4351__auto___34478 = cljs.core.chunk_first.call(null,seq__34463_34477__$1);
var G__34479 = cljs.core.chunk_rest.call(null,seq__34463_34477__$1);
var G__34480 = c__4351__auto___34478;
var G__34481 = cljs.core.count.call(null,c__4351__auto___34478);
var G__34482 = (0);
seq__34463_34467 = G__34479;
chunk__34464_34468 = G__34480;
count__34465_34469 = G__34481;
i__34466_34470 = G__34482;
continue;
} else {
var msg_34483 = cljs.core.first.call(null,seq__34463_34477__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34483);


var G__34484 = cljs.core.next.call(null,seq__34463_34477__$1);
var G__34485 = null;
var G__34486 = (0);
var G__34487 = (0);
seq__34463_34467 = G__34484;
chunk__34464_34468 = G__34485;
count__34465_34469 = G__34486;
i__34466_34470 = G__34487;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34488){
var map__34489 = p__34488;
var map__34489__$1 = ((((!((map__34489 == null)))?(((((map__34489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34489):map__34489);
var w = map__34489__$1;
var message = cljs.core.get.call(null,map__34489__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out_worker/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out_worker/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34491 = cljs.core.seq.call(null,plugins);
var chunk__34492 = null;
var count__34493 = (0);
var i__34494 = (0);
while(true){
if((i__34494 < count__34493)){
var vec__34495 = cljs.core._nth.call(null,chunk__34492,i__34494);
var k = cljs.core.nth.call(null,vec__34495,(0),null);
var plugin = cljs.core.nth.call(null,vec__34495,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34501 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34491,chunk__34492,count__34493,i__34494,pl_34501,vec__34495,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34501.call(null,msg_hist);
});})(seq__34491,chunk__34492,count__34493,i__34494,pl_34501,vec__34495,k,plugin))
);
} else {
}


var G__34502 = seq__34491;
var G__34503 = chunk__34492;
var G__34504 = count__34493;
var G__34505 = (i__34494 + (1));
seq__34491 = G__34502;
chunk__34492 = G__34503;
count__34493 = G__34504;
i__34494 = G__34505;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34491);
if(temp__5457__auto__){
var seq__34491__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34491__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__34491__$1);
var G__34506 = cljs.core.chunk_rest.call(null,seq__34491__$1);
var G__34507 = c__4351__auto__;
var G__34508 = cljs.core.count.call(null,c__4351__auto__);
var G__34509 = (0);
seq__34491 = G__34506;
chunk__34492 = G__34507;
count__34493 = G__34508;
i__34494 = G__34509;
continue;
} else {
var vec__34498 = cljs.core.first.call(null,seq__34491__$1);
var k = cljs.core.nth.call(null,vec__34498,(0),null);
var plugin = cljs.core.nth.call(null,vec__34498,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34510 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34491,chunk__34492,count__34493,i__34494,pl_34510,vec__34498,k,plugin,seq__34491__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34510.call(null,msg_hist);
});})(seq__34491,chunk__34492,count__34493,i__34494,pl_34510,vec__34498,k,plugin,seq__34491__$1,temp__5457__auto__))
);
} else {
}


var G__34511 = cljs.core.next.call(null,seq__34491__$1);
var G__34512 = null;
var G__34513 = (0);
var G__34514 = (0);
seq__34491 = G__34511;
chunk__34492 = G__34512;
count__34493 = G__34513;
i__34494 = G__34514;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__34516 = arguments.length;
switch (G__34516) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__34517_34522 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34518_34523 = null;
var count__34519_34524 = (0);
var i__34520_34525 = (0);
while(true){
if((i__34520_34525 < count__34519_34524)){
var msg_34526 = cljs.core._nth.call(null,chunk__34518_34523,i__34520_34525);
figwheel.client.socket.handle_incoming_message.call(null,msg_34526);


var G__34527 = seq__34517_34522;
var G__34528 = chunk__34518_34523;
var G__34529 = count__34519_34524;
var G__34530 = (i__34520_34525 + (1));
seq__34517_34522 = G__34527;
chunk__34518_34523 = G__34528;
count__34519_34524 = G__34529;
i__34520_34525 = G__34530;
continue;
} else {
var temp__5457__auto___34531 = cljs.core.seq.call(null,seq__34517_34522);
if(temp__5457__auto___34531){
var seq__34517_34532__$1 = temp__5457__auto___34531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34517_34532__$1)){
var c__4351__auto___34533 = cljs.core.chunk_first.call(null,seq__34517_34532__$1);
var G__34534 = cljs.core.chunk_rest.call(null,seq__34517_34532__$1);
var G__34535 = c__4351__auto___34533;
var G__34536 = cljs.core.count.call(null,c__4351__auto___34533);
var G__34537 = (0);
seq__34517_34522 = G__34534;
chunk__34518_34523 = G__34535;
count__34519_34524 = G__34536;
i__34520_34525 = G__34537;
continue;
} else {
var msg_34538 = cljs.core.first.call(null,seq__34517_34532__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34538);


var G__34539 = cljs.core.next.call(null,seq__34517_34532__$1);
var G__34540 = null;
var G__34541 = (0);
var G__34542 = (0);
seq__34517_34522 = G__34539;
chunk__34518_34523 = G__34540;
count__34519_34524 = G__34541;
i__34520_34525 = G__34542;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___34547 = arguments.length;
var i__4532__auto___34548 = (0);
while(true){
if((i__4532__auto___34548 < len__4531__auto___34547)){
args__4534__auto__.push((arguments[i__4532__auto___34548]));

var G__34549 = (i__4532__auto___34548 + (1));
i__4532__auto___34548 = G__34549;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34544){
var map__34545 = p__34544;
var map__34545__$1 = ((((!((map__34545 == null)))?(((((map__34545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34545):map__34545);
var opts = map__34545__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34543){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34543));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34550){if((e34550 instanceof Error)){
var e = e34550;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34550;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__34551){
var map__34552 = p__34551;
var map__34552__$1 = ((((!((map__34552 == null)))?(((((map__34552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34552):map__34552);
var msg_name = cljs.core.get.call(null,map__34552__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1530950276397
