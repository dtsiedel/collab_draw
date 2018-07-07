// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28740 = arguments.length;
switch (G__28740) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28741 = (function (f,blockable,meta28742){
this.f = f;
this.blockable = blockable;
this.meta28742 = meta28742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28743,meta28742__$1){
var self__ = this;
var _28743__$1 = this;
return (new cljs.core.async.t_cljs$core$async28741(self__.f,self__.blockable,meta28742__$1));
});

cljs.core.async.t_cljs$core$async28741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28743){
var self__ = this;
var _28743__$1 = this;
return self__.meta28742;
});

cljs.core.async.t_cljs$core$async28741.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28741.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28742","meta28742",2043217464,null)], null);
});

cljs.core.async.t_cljs$core$async28741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28741";

cljs.core.async.t_cljs$core$async28741.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28741");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28741.
 */
cljs.core.async.__GT_t_cljs$core$async28741 = (function cljs$core$async$__GT_t_cljs$core$async28741(f__$1,blockable__$1,meta28742){
return (new cljs.core.async.t_cljs$core$async28741(f__$1,blockable__$1,meta28742));
});

}

return (new cljs.core.async.t_cljs$core$async28741(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28747 = arguments.length;
switch (G__28747) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28750 = arguments.length;
switch (G__28750) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28753 = arguments.length;
switch (G__28753) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28755 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28755);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28755,ret){
return (function (){
return fn1.call(null,val_28755);
});})(val_28755,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28757 = arguments.length;
switch (G__28757) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___28759 = n;
var x_28760 = (0);
while(true){
if((x_28760 < n__4408__auto___28759)){
(a[x_28760] = (0));

var G__28761 = (x_28760 + (1));
x_28760 = G__28761;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28762 = (i + (1));
i = G__28762;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28763 = (function (flag,meta28764){
this.flag = flag;
this.meta28764 = meta28764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28765,meta28764__$1){
var self__ = this;
var _28765__$1 = this;
return (new cljs.core.async.t_cljs$core$async28763(self__.flag,meta28764__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28765){
var self__ = this;
var _28765__$1 = this;
return self__.meta28764;
});})(flag))
;

cljs.core.async.t_cljs$core$async28763.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28763.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28763.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28764","meta28764",247249738,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28763";

cljs.core.async.t_cljs$core$async28763.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28763");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28763.
 */
cljs.core.async.__GT_t_cljs$core$async28763 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28763(flag__$1,meta28764){
return (new cljs.core.async.t_cljs$core$async28763(flag__$1,meta28764));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28763(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28766 = (function (flag,cb,meta28767){
this.flag = flag;
this.cb = cb;
this.meta28767 = meta28767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28768,meta28767__$1){
var self__ = this;
var _28768__$1 = this;
return (new cljs.core.async.t_cljs$core$async28766(self__.flag,self__.cb,meta28767__$1));
});

cljs.core.async.t_cljs$core$async28766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28768){
var self__ = this;
var _28768__$1 = this;
return self__.meta28767;
});

cljs.core.async.t_cljs$core$async28766.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28766.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28766.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28766.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28767","meta28767",-305174276,null)], null);
});

cljs.core.async.t_cljs$core$async28766.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28766";

cljs.core.async.t_cljs$core$async28766.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28766");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28766.
 */
cljs.core.async.__GT_t_cljs$core$async28766 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28766(flag__$1,cb__$1,meta28767){
return (new cljs.core.async.t_cljs$core$async28766(flag__$1,cb__$1,meta28767));
});

}

return (new cljs.core.async.t_cljs$core$async28766(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28769_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28769_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28770_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28770_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28771 = (i + (1));
i = G__28771;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28777 = arguments.length;
var i__4532__auto___28778 = (0);
while(true){
if((i__4532__auto___28778 < len__4531__auto___28777)){
args__4534__auto__.push((arguments[i__4532__auto___28778]));

var G__28779 = (i__4532__auto___28778 + (1));
i__4532__auto___28778 = G__28779;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28774){
var map__28775 = p__28774;
var map__28775__$1 = ((((!((map__28775 == null)))?(((((map__28775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28775):map__28775);
var opts = map__28775__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28772){
var G__28773 = cljs.core.first.call(null,seq28772);
var seq28772__$1 = cljs.core.next.call(null,seq28772);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28773,seq28772__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28781 = arguments.length;
switch (G__28781) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28680__auto___28827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___28827){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___28827){
return (function (state_28805){
var state_val_28806 = (state_28805[(1)]);
if((state_val_28806 === (7))){
var inst_28801 = (state_28805[(2)]);
var state_28805__$1 = state_28805;
var statearr_28807_28828 = state_28805__$1;
(statearr_28807_28828[(2)] = inst_28801);

(statearr_28807_28828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28806 === (1))){
var state_28805__$1 = state_28805;
var statearr_28808_28829 = state_28805__$1;
(statearr_28808_28829[(2)] = null);

(statearr_28808_28829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28806 === (4))){
var inst_28784 = (state_28805[(7)]);
var inst_28784__$1 = (state_28805[(2)]);
var inst_28785 = (inst_28784__$1 == null);
var state_28805__$1 = (function (){var statearr_28809 = state_28805;
(statearr_28809[(7)] = inst_28784__$1);

return statearr_28809;
})();
if(cljs.core.truth_(inst_28785)){
var statearr_28810_28830 = state_28805__$1;
(statearr_28810_28830[(1)] = (5));

} else {
var statearr_28811_28831 = state_28805__$1;
(statearr_28811_28831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28806 === (13))){
var state_28805__$1 = state_28805;
var statearr_28812_28832 = state_28805__$1;
(statearr_28812_28832[(2)] = null);

(statearr_28812_28832[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28806 === (6))){
var inst_28784 = (state_28805[(7)]);
var state_28805__$1 = state_28805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28805__$1,(11),to,inst_28784);
} else {
if((state_val_28806 === (3))){
var inst_28803 = (state_28805[(2)]);
var state_28805__$1 = state_28805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28805__$1,inst_28803);
} else {
if((state_val_28806 === (12))){
var state_28805__$1 = state_28805;
var statearr_28813_28833 = state_28805__$1;
(statearr_28813_28833[(2)] = null);

(statearr_28813_28833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28806 === (2))){
var state_28805__$1 = state_28805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28805__$1,(4),from);
} else {
if((state_val_28806 === (11))){
var inst_28794 = (state_28805[(2)]);
var state_28805__$1 = state_28805;
if(cljs.core.truth_(inst_28794)){
var statearr_28814_28834 = state_28805__$1;
(statearr_28814_28834[(1)] = (12));

} else {
var statearr_28815_28835 = state_28805__$1;
(statearr_28815_28835[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28806 === (9))){
var state_28805__$1 = state_28805;
var statearr_28816_28836 = state_28805__$1;
(statearr_28816_28836[(2)] = null);

(statearr_28816_28836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28806 === (5))){
var state_28805__$1 = state_28805;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28817_28837 = state_28805__$1;
(statearr_28817_28837[(1)] = (8));

} else {
var statearr_28818_28838 = state_28805__$1;
(statearr_28818_28838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28806 === (14))){
var inst_28799 = (state_28805[(2)]);
var state_28805__$1 = state_28805;
var statearr_28819_28839 = state_28805__$1;
(statearr_28819_28839[(2)] = inst_28799);

(statearr_28819_28839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28806 === (10))){
var inst_28791 = (state_28805[(2)]);
var state_28805__$1 = state_28805;
var statearr_28820_28840 = state_28805__$1;
(statearr_28820_28840[(2)] = inst_28791);

(statearr_28820_28840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28806 === (8))){
var inst_28788 = cljs.core.async.close_BANG_.call(null,to);
var state_28805__$1 = state_28805;
var statearr_28821_28841 = state_28805__$1;
(statearr_28821_28841[(2)] = inst_28788);

(statearr_28821_28841[(1)] = (10));


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
});})(c__28680__auto___28827))
;
return ((function (switch__28589__auto__,c__28680__auto___28827){
return (function() {
var cljs$core$async$state_machine__28590__auto__ = null;
var cljs$core$async$state_machine__28590__auto____0 = (function (){
var statearr_28822 = [null,null,null,null,null,null,null,null];
(statearr_28822[(0)] = cljs$core$async$state_machine__28590__auto__);

(statearr_28822[(1)] = (1));

return statearr_28822;
});
var cljs$core$async$state_machine__28590__auto____1 = (function (state_28805){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_28805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e28823){if((e28823 instanceof Object)){
var ex__28593__auto__ = e28823;
var statearr_28824_28842 = state_28805;
(statearr_28824_28842[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28843 = state_28805;
state_28805 = G__28843;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$state_machine__28590__auto__ = function(state_28805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28590__auto____1.call(this,state_28805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28590__auto____0;
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28590__auto____1;
return cljs$core$async$state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___28827))
})();
var state__28682__auto__ = (function (){var statearr_28825 = f__28681__auto__.call(null);
(statearr_28825[(6)] = c__28680__auto___28827);

return statearr_28825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___28827))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28844){
var vec__28845 = p__28844;
var v = cljs.core.nth.call(null,vec__28845,(0),null);
var p = cljs.core.nth.call(null,vec__28845,(1),null);
var job = vec__28845;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28680__auto___29016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___29016,res,vec__28845,v,p,job,jobs,results){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___29016,res,vec__28845,v,p,job,jobs,results){
return (function (state_28852){
var state_val_28853 = (state_28852[(1)]);
if((state_val_28853 === (1))){
var state_28852__$1 = state_28852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28852__$1,(2),res,v);
} else {
if((state_val_28853 === (2))){
var inst_28849 = (state_28852[(2)]);
var inst_28850 = cljs.core.async.close_BANG_.call(null,res);
var state_28852__$1 = (function (){var statearr_28854 = state_28852;
(statearr_28854[(7)] = inst_28849);

return statearr_28854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28852__$1,inst_28850);
} else {
return null;
}
}
});})(c__28680__auto___29016,res,vec__28845,v,p,job,jobs,results))
;
return ((function (switch__28589__auto__,c__28680__auto___29016,res,vec__28845,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____0 = (function (){
var statearr_28855 = [null,null,null,null,null,null,null,null];
(statearr_28855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__);

(statearr_28855[(1)] = (1));

return statearr_28855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____1 = (function (state_28852){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_28852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e28856){if((e28856 instanceof Object)){
var ex__28593__auto__ = e28856;
var statearr_28857_29017 = state_28852;
(statearr_28857_29017[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29018 = state_28852;
state_28852 = G__29018;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__ = function(state_28852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____1.call(this,state_28852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___29016,res,vec__28845,v,p,job,jobs,results))
})();
var state__28682__auto__ = (function (){var statearr_28858 = f__28681__auto__.call(null);
(statearr_28858[(6)] = c__28680__auto___29016);

return statearr_28858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___29016,res,vec__28845,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28859){
var vec__28860 = p__28859;
var v = cljs.core.nth.call(null,vec__28860,(0),null);
var p = cljs.core.nth.call(null,vec__28860,(1),null);
var job = vec__28860;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___29019 = n;
var __29020 = (0);
while(true){
if((__29020 < n__4408__auto___29019)){
var G__28863_29021 = type;
var G__28863_29022__$1 = (((G__28863_29021 instanceof cljs.core.Keyword))?G__28863_29021.fqn:null);
switch (G__28863_29022__$1) {
case "compute":
var c__28680__auto___29024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29020,c__28680__auto___29024,G__28863_29021,G__28863_29022__$1,n__4408__auto___29019,jobs,results,process,async){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (__29020,c__28680__auto___29024,G__28863_29021,G__28863_29022__$1,n__4408__auto___29019,jobs,results,process,async){
return (function (state_28876){
var state_val_28877 = (state_28876[(1)]);
if((state_val_28877 === (1))){
var state_28876__$1 = state_28876;
var statearr_28878_29025 = state_28876__$1;
(statearr_28878_29025[(2)] = null);

(statearr_28878_29025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (2))){
var state_28876__$1 = state_28876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28876__$1,(4),jobs);
} else {
if((state_val_28877 === (3))){
var inst_28874 = (state_28876[(2)]);
var state_28876__$1 = state_28876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28876__$1,inst_28874);
} else {
if((state_val_28877 === (4))){
var inst_28866 = (state_28876[(2)]);
var inst_28867 = process.call(null,inst_28866);
var state_28876__$1 = state_28876;
if(cljs.core.truth_(inst_28867)){
var statearr_28879_29026 = state_28876__$1;
(statearr_28879_29026[(1)] = (5));

} else {
var statearr_28880_29027 = state_28876__$1;
(statearr_28880_29027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (5))){
var state_28876__$1 = state_28876;
var statearr_28881_29028 = state_28876__$1;
(statearr_28881_29028[(2)] = null);

(statearr_28881_29028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (6))){
var state_28876__$1 = state_28876;
var statearr_28882_29029 = state_28876__$1;
(statearr_28882_29029[(2)] = null);

(statearr_28882_29029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (7))){
var inst_28872 = (state_28876[(2)]);
var state_28876__$1 = state_28876;
var statearr_28883_29030 = state_28876__$1;
(statearr_28883_29030[(2)] = inst_28872);

(statearr_28883_29030[(1)] = (3));


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
});})(__29020,c__28680__auto___29024,G__28863_29021,G__28863_29022__$1,n__4408__auto___29019,jobs,results,process,async))
;
return ((function (__29020,switch__28589__auto__,c__28680__auto___29024,G__28863_29021,G__28863_29022__$1,n__4408__auto___29019,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____0 = (function (){
var statearr_28884 = [null,null,null,null,null,null,null];
(statearr_28884[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__);

(statearr_28884[(1)] = (1));

return statearr_28884;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____1 = (function (state_28876){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_28876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e28885){if((e28885 instanceof Object)){
var ex__28593__auto__ = e28885;
var statearr_28886_29031 = state_28876;
(statearr_28886_29031[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29032 = state_28876;
state_28876 = G__29032;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__ = function(state_28876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____1.call(this,state_28876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__;
})()
;})(__29020,switch__28589__auto__,c__28680__auto___29024,G__28863_29021,G__28863_29022__$1,n__4408__auto___29019,jobs,results,process,async))
})();
var state__28682__auto__ = (function (){var statearr_28887 = f__28681__auto__.call(null);
(statearr_28887[(6)] = c__28680__auto___29024);

return statearr_28887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(__29020,c__28680__auto___29024,G__28863_29021,G__28863_29022__$1,n__4408__auto___29019,jobs,results,process,async))
);


break;
case "async":
var c__28680__auto___29033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29020,c__28680__auto___29033,G__28863_29021,G__28863_29022__$1,n__4408__auto___29019,jobs,results,process,async){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (__29020,c__28680__auto___29033,G__28863_29021,G__28863_29022__$1,n__4408__auto___29019,jobs,results,process,async){
return (function (state_28900){
var state_val_28901 = (state_28900[(1)]);
if((state_val_28901 === (1))){
var state_28900__$1 = state_28900;
var statearr_28902_29034 = state_28900__$1;
(statearr_28902_29034[(2)] = null);

(statearr_28902_29034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (2))){
var state_28900__$1 = state_28900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28900__$1,(4),jobs);
} else {
if((state_val_28901 === (3))){
var inst_28898 = (state_28900[(2)]);
var state_28900__$1 = state_28900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28900__$1,inst_28898);
} else {
if((state_val_28901 === (4))){
var inst_28890 = (state_28900[(2)]);
var inst_28891 = async.call(null,inst_28890);
var state_28900__$1 = state_28900;
if(cljs.core.truth_(inst_28891)){
var statearr_28903_29035 = state_28900__$1;
(statearr_28903_29035[(1)] = (5));

} else {
var statearr_28904_29036 = state_28900__$1;
(statearr_28904_29036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (5))){
var state_28900__$1 = state_28900;
var statearr_28905_29037 = state_28900__$1;
(statearr_28905_29037[(2)] = null);

(statearr_28905_29037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (6))){
var state_28900__$1 = state_28900;
var statearr_28906_29038 = state_28900__$1;
(statearr_28906_29038[(2)] = null);

(statearr_28906_29038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (7))){
var inst_28896 = (state_28900[(2)]);
var state_28900__$1 = state_28900;
var statearr_28907_29039 = state_28900__$1;
(statearr_28907_29039[(2)] = inst_28896);

(statearr_28907_29039[(1)] = (3));


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
});})(__29020,c__28680__auto___29033,G__28863_29021,G__28863_29022__$1,n__4408__auto___29019,jobs,results,process,async))
;
return ((function (__29020,switch__28589__auto__,c__28680__auto___29033,G__28863_29021,G__28863_29022__$1,n__4408__auto___29019,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____0 = (function (){
var statearr_28908 = [null,null,null,null,null,null,null];
(statearr_28908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__);

(statearr_28908[(1)] = (1));

return statearr_28908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____1 = (function (state_28900){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_28900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e28909){if((e28909 instanceof Object)){
var ex__28593__auto__ = e28909;
var statearr_28910_29040 = state_28900;
(statearr_28910_29040[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29041 = state_28900;
state_28900 = G__29041;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__ = function(state_28900){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____1.call(this,state_28900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__;
})()
;})(__29020,switch__28589__auto__,c__28680__auto___29033,G__28863_29021,G__28863_29022__$1,n__4408__auto___29019,jobs,results,process,async))
})();
var state__28682__auto__ = (function (){var statearr_28911 = f__28681__auto__.call(null);
(statearr_28911[(6)] = c__28680__auto___29033);

return statearr_28911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(__29020,c__28680__auto___29033,G__28863_29021,G__28863_29022__$1,n__4408__auto___29019,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28863_29022__$1)].join('')));

}

var G__29042 = (__29020 + (1));
__29020 = G__29042;
continue;
} else {
}
break;
}

var c__28680__auto___29043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___29043,jobs,results,process,async){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___29043,jobs,results,process,async){
return (function (state_28933){
var state_val_28934 = (state_28933[(1)]);
if((state_val_28934 === (1))){
var state_28933__$1 = state_28933;
var statearr_28935_29044 = state_28933__$1;
(statearr_28935_29044[(2)] = null);

(statearr_28935_29044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (2))){
var state_28933__$1 = state_28933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28933__$1,(4),from);
} else {
if((state_val_28934 === (3))){
var inst_28931 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28933__$1,inst_28931);
} else {
if((state_val_28934 === (4))){
var inst_28914 = (state_28933[(7)]);
var inst_28914__$1 = (state_28933[(2)]);
var inst_28915 = (inst_28914__$1 == null);
var state_28933__$1 = (function (){var statearr_28936 = state_28933;
(statearr_28936[(7)] = inst_28914__$1);

return statearr_28936;
})();
if(cljs.core.truth_(inst_28915)){
var statearr_28937_29045 = state_28933__$1;
(statearr_28937_29045[(1)] = (5));

} else {
var statearr_28938_29046 = state_28933__$1;
(statearr_28938_29046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (5))){
var inst_28917 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28933__$1 = state_28933;
var statearr_28939_29047 = state_28933__$1;
(statearr_28939_29047[(2)] = inst_28917);

(statearr_28939_29047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (6))){
var inst_28914 = (state_28933[(7)]);
var inst_28919 = (state_28933[(8)]);
var inst_28919__$1 = cljs.core.async.chan.call(null,(1));
var inst_28920 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28921 = [inst_28914,inst_28919__$1];
var inst_28922 = (new cljs.core.PersistentVector(null,2,(5),inst_28920,inst_28921,null));
var state_28933__$1 = (function (){var statearr_28940 = state_28933;
(statearr_28940[(8)] = inst_28919__$1);

return statearr_28940;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28933__$1,(8),jobs,inst_28922);
} else {
if((state_val_28934 === (7))){
var inst_28929 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
var statearr_28941_29048 = state_28933__$1;
(statearr_28941_29048[(2)] = inst_28929);

(statearr_28941_29048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (8))){
var inst_28919 = (state_28933[(8)]);
var inst_28924 = (state_28933[(2)]);
var state_28933__$1 = (function (){var statearr_28942 = state_28933;
(statearr_28942[(9)] = inst_28924);

return statearr_28942;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28933__$1,(9),results,inst_28919);
} else {
if((state_val_28934 === (9))){
var inst_28926 = (state_28933[(2)]);
var state_28933__$1 = (function (){var statearr_28943 = state_28933;
(statearr_28943[(10)] = inst_28926);

return statearr_28943;
})();
var statearr_28944_29049 = state_28933__$1;
(statearr_28944_29049[(2)] = null);

(statearr_28944_29049[(1)] = (2));


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
});})(c__28680__auto___29043,jobs,results,process,async))
;
return ((function (switch__28589__auto__,c__28680__auto___29043,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____0 = (function (){
var statearr_28945 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__);

(statearr_28945[(1)] = (1));

return statearr_28945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____1 = (function (state_28933){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_28933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e28946){if((e28946 instanceof Object)){
var ex__28593__auto__ = e28946;
var statearr_28947_29050 = state_28933;
(statearr_28947_29050[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29051 = state_28933;
state_28933 = G__29051;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__ = function(state_28933){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____1.call(this,state_28933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___29043,jobs,results,process,async))
})();
var state__28682__auto__ = (function (){var statearr_28948 = f__28681__auto__.call(null);
(statearr_28948[(6)] = c__28680__auto___29043);

return statearr_28948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___29043,jobs,results,process,async))
);


var c__28680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto__,jobs,results,process,async){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto__,jobs,results,process,async){
return (function (state_28986){
var state_val_28987 = (state_28986[(1)]);
if((state_val_28987 === (7))){
var inst_28982 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_28988_29052 = state_28986__$1;
(statearr_28988_29052[(2)] = inst_28982);

(statearr_28988_29052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (20))){
var state_28986__$1 = state_28986;
var statearr_28989_29053 = state_28986__$1;
(statearr_28989_29053[(2)] = null);

(statearr_28989_29053[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (1))){
var state_28986__$1 = state_28986;
var statearr_28990_29054 = state_28986__$1;
(statearr_28990_29054[(2)] = null);

(statearr_28990_29054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (4))){
var inst_28951 = (state_28986[(7)]);
var inst_28951__$1 = (state_28986[(2)]);
var inst_28952 = (inst_28951__$1 == null);
var state_28986__$1 = (function (){var statearr_28991 = state_28986;
(statearr_28991[(7)] = inst_28951__$1);

return statearr_28991;
})();
if(cljs.core.truth_(inst_28952)){
var statearr_28992_29055 = state_28986__$1;
(statearr_28992_29055[(1)] = (5));

} else {
var statearr_28993_29056 = state_28986__$1;
(statearr_28993_29056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (15))){
var inst_28964 = (state_28986[(8)]);
var state_28986__$1 = state_28986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28986__$1,(18),to,inst_28964);
} else {
if((state_val_28987 === (21))){
var inst_28977 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_28994_29057 = state_28986__$1;
(statearr_28994_29057[(2)] = inst_28977);

(statearr_28994_29057[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (13))){
var inst_28979 = (state_28986[(2)]);
var state_28986__$1 = (function (){var statearr_28995 = state_28986;
(statearr_28995[(9)] = inst_28979);

return statearr_28995;
})();
var statearr_28996_29058 = state_28986__$1;
(statearr_28996_29058[(2)] = null);

(statearr_28996_29058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (6))){
var inst_28951 = (state_28986[(7)]);
var state_28986__$1 = state_28986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28986__$1,(11),inst_28951);
} else {
if((state_val_28987 === (17))){
var inst_28972 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
if(cljs.core.truth_(inst_28972)){
var statearr_28997_29059 = state_28986__$1;
(statearr_28997_29059[(1)] = (19));

} else {
var statearr_28998_29060 = state_28986__$1;
(statearr_28998_29060[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (3))){
var inst_28984 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28986__$1,inst_28984);
} else {
if((state_val_28987 === (12))){
var inst_28961 = (state_28986[(10)]);
var state_28986__$1 = state_28986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28986__$1,(14),inst_28961);
} else {
if((state_val_28987 === (2))){
var state_28986__$1 = state_28986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28986__$1,(4),results);
} else {
if((state_val_28987 === (19))){
var state_28986__$1 = state_28986;
var statearr_28999_29061 = state_28986__$1;
(statearr_28999_29061[(2)] = null);

(statearr_28999_29061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (11))){
var inst_28961 = (state_28986[(2)]);
var state_28986__$1 = (function (){var statearr_29000 = state_28986;
(statearr_29000[(10)] = inst_28961);

return statearr_29000;
})();
var statearr_29001_29062 = state_28986__$1;
(statearr_29001_29062[(2)] = null);

(statearr_29001_29062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (9))){
var state_28986__$1 = state_28986;
var statearr_29002_29063 = state_28986__$1;
(statearr_29002_29063[(2)] = null);

(statearr_29002_29063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (5))){
var state_28986__$1 = state_28986;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29003_29064 = state_28986__$1;
(statearr_29003_29064[(1)] = (8));

} else {
var statearr_29004_29065 = state_28986__$1;
(statearr_29004_29065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (14))){
var inst_28964 = (state_28986[(8)]);
var inst_28966 = (state_28986[(11)]);
var inst_28964__$1 = (state_28986[(2)]);
var inst_28965 = (inst_28964__$1 == null);
var inst_28966__$1 = cljs.core.not.call(null,inst_28965);
var state_28986__$1 = (function (){var statearr_29005 = state_28986;
(statearr_29005[(8)] = inst_28964__$1);

(statearr_29005[(11)] = inst_28966__$1);

return statearr_29005;
})();
if(inst_28966__$1){
var statearr_29006_29066 = state_28986__$1;
(statearr_29006_29066[(1)] = (15));

} else {
var statearr_29007_29067 = state_28986__$1;
(statearr_29007_29067[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (16))){
var inst_28966 = (state_28986[(11)]);
var state_28986__$1 = state_28986;
var statearr_29008_29068 = state_28986__$1;
(statearr_29008_29068[(2)] = inst_28966);

(statearr_29008_29068[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (10))){
var inst_28958 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_29009_29069 = state_28986__$1;
(statearr_29009_29069[(2)] = inst_28958);

(statearr_29009_29069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (18))){
var inst_28969 = (state_28986[(2)]);
var state_28986__$1 = state_28986;
var statearr_29010_29070 = state_28986__$1;
(statearr_29010_29070[(2)] = inst_28969);

(statearr_29010_29070[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28987 === (8))){
var inst_28955 = cljs.core.async.close_BANG_.call(null,to);
var state_28986__$1 = state_28986;
var statearr_29011_29071 = state_28986__$1;
(statearr_29011_29071[(2)] = inst_28955);

(statearr_29011_29071[(1)] = (10));


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
});})(c__28680__auto__,jobs,results,process,async))
;
return ((function (switch__28589__auto__,c__28680__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____0 = (function (){
var statearr_29012 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__);

(statearr_29012[(1)] = (1));

return statearr_29012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____1 = (function (state_28986){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_28986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e29013){if((e29013 instanceof Object)){
var ex__28593__auto__ = e29013;
var statearr_29014_29072 = state_28986;
(statearr_29014_29072[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29073 = state_28986;
state_28986 = G__29073;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__ = function(state_28986){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____1.call(this,state_28986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28590__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto__,jobs,results,process,async))
})();
var state__28682__auto__ = (function (){var statearr_29015 = f__28681__auto__.call(null);
(statearr_29015[(6)] = c__28680__auto__);

return statearr_29015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto__,jobs,results,process,async))
);

return c__28680__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29075 = arguments.length;
switch (G__29075) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29078 = arguments.length;
switch (G__29078) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29081 = arguments.length;
switch (G__29081) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28680__auto___29130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___29130,tc,fc){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___29130,tc,fc){
return (function (state_29107){
var state_val_29108 = (state_29107[(1)]);
if((state_val_29108 === (7))){
var inst_29103 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29109_29131 = state_29107__$1;
(statearr_29109_29131[(2)] = inst_29103);

(statearr_29109_29131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (1))){
var state_29107__$1 = state_29107;
var statearr_29110_29132 = state_29107__$1;
(statearr_29110_29132[(2)] = null);

(statearr_29110_29132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (4))){
var inst_29084 = (state_29107[(7)]);
var inst_29084__$1 = (state_29107[(2)]);
var inst_29085 = (inst_29084__$1 == null);
var state_29107__$1 = (function (){var statearr_29111 = state_29107;
(statearr_29111[(7)] = inst_29084__$1);

return statearr_29111;
})();
if(cljs.core.truth_(inst_29085)){
var statearr_29112_29133 = state_29107__$1;
(statearr_29112_29133[(1)] = (5));

} else {
var statearr_29113_29134 = state_29107__$1;
(statearr_29113_29134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (13))){
var state_29107__$1 = state_29107;
var statearr_29114_29135 = state_29107__$1;
(statearr_29114_29135[(2)] = null);

(statearr_29114_29135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (6))){
var inst_29084 = (state_29107[(7)]);
var inst_29090 = p.call(null,inst_29084);
var state_29107__$1 = state_29107;
if(cljs.core.truth_(inst_29090)){
var statearr_29115_29136 = state_29107__$1;
(statearr_29115_29136[(1)] = (9));

} else {
var statearr_29116_29137 = state_29107__$1;
(statearr_29116_29137[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (3))){
var inst_29105 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29107__$1,inst_29105);
} else {
if((state_val_29108 === (12))){
var state_29107__$1 = state_29107;
var statearr_29117_29138 = state_29107__$1;
(statearr_29117_29138[(2)] = null);

(statearr_29117_29138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (2))){
var state_29107__$1 = state_29107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29107__$1,(4),ch);
} else {
if((state_val_29108 === (11))){
var inst_29084 = (state_29107[(7)]);
var inst_29094 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29107__$1,(8),inst_29094,inst_29084);
} else {
if((state_val_29108 === (9))){
var state_29107__$1 = state_29107;
var statearr_29118_29139 = state_29107__$1;
(statearr_29118_29139[(2)] = tc);

(statearr_29118_29139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (5))){
var inst_29087 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29088 = cljs.core.async.close_BANG_.call(null,fc);
var state_29107__$1 = (function (){var statearr_29119 = state_29107;
(statearr_29119[(8)] = inst_29087);

return statearr_29119;
})();
var statearr_29120_29140 = state_29107__$1;
(statearr_29120_29140[(2)] = inst_29088);

(statearr_29120_29140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (14))){
var inst_29101 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29121_29141 = state_29107__$1;
(statearr_29121_29141[(2)] = inst_29101);

(statearr_29121_29141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (10))){
var state_29107__$1 = state_29107;
var statearr_29122_29142 = state_29107__$1;
(statearr_29122_29142[(2)] = fc);

(statearr_29122_29142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (8))){
var inst_29096 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
if(cljs.core.truth_(inst_29096)){
var statearr_29123_29143 = state_29107__$1;
(statearr_29123_29143[(1)] = (12));

} else {
var statearr_29124_29144 = state_29107__$1;
(statearr_29124_29144[(1)] = (13));

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
});})(c__28680__auto___29130,tc,fc))
;
return ((function (switch__28589__auto__,c__28680__auto___29130,tc,fc){
return (function() {
var cljs$core$async$state_machine__28590__auto__ = null;
var cljs$core$async$state_machine__28590__auto____0 = (function (){
var statearr_29125 = [null,null,null,null,null,null,null,null,null];
(statearr_29125[(0)] = cljs$core$async$state_machine__28590__auto__);

(statearr_29125[(1)] = (1));

return statearr_29125;
});
var cljs$core$async$state_machine__28590__auto____1 = (function (state_29107){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_29107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e29126){if((e29126 instanceof Object)){
var ex__28593__auto__ = e29126;
var statearr_29127_29145 = state_29107;
(statearr_29127_29145[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29146 = state_29107;
state_29107 = G__29146;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$state_machine__28590__auto__ = function(state_29107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28590__auto____1.call(this,state_29107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28590__auto____0;
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28590__auto____1;
return cljs$core$async$state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___29130,tc,fc))
})();
var state__28682__auto__ = (function (){var statearr_29128 = f__28681__auto__.call(null);
(statearr_29128[(6)] = c__28680__auto___29130);

return statearr_29128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___29130,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto__){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto__){
return (function (state_29167){
var state_val_29168 = (state_29167[(1)]);
if((state_val_29168 === (7))){
var inst_29163 = (state_29167[(2)]);
var state_29167__$1 = state_29167;
var statearr_29169_29187 = state_29167__$1;
(statearr_29169_29187[(2)] = inst_29163);

(statearr_29169_29187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (1))){
var inst_29147 = init;
var state_29167__$1 = (function (){var statearr_29170 = state_29167;
(statearr_29170[(7)] = inst_29147);

return statearr_29170;
})();
var statearr_29171_29188 = state_29167__$1;
(statearr_29171_29188[(2)] = null);

(statearr_29171_29188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (4))){
var inst_29150 = (state_29167[(8)]);
var inst_29150__$1 = (state_29167[(2)]);
var inst_29151 = (inst_29150__$1 == null);
var state_29167__$1 = (function (){var statearr_29172 = state_29167;
(statearr_29172[(8)] = inst_29150__$1);

return statearr_29172;
})();
if(cljs.core.truth_(inst_29151)){
var statearr_29173_29189 = state_29167__$1;
(statearr_29173_29189[(1)] = (5));

} else {
var statearr_29174_29190 = state_29167__$1;
(statearr_29174_29190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (6))){
var inst_29147 = (state_29167[(7)]);
var inst_29154 = (state_29167[(9)]);
var inst_29150 = (state_29167[(8)]);
var inst_29154__$1 = f.call(null,inst_29147,inst_29150);
var inst_29155 = cljs.core.reduced_QMARK_.call(null,inst_29154__$1);
var state_29167__$1 = (function (){var statearr_29175 = state_29167;
(statearr_29175[(9)] = inst_29154__$1);

return statearr_29175;
})();
if(inst_29155){
var statearr_29176_29191 = state_29167__$1;
(statearr_29176_29191[(1)] = (8));

} else {
var statearr_29177_29192 = state_29167__$1;
(statearr_29177_29192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (3))){
var inst_29165 = (state_29167[(2)]);
var state_29167__$1 = state_29167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29167__$1,inst_29165);
} else {
if((state_val_29168 === (2))){
var state_29167__$1 = state_29167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29167__$1,(4),ch);
} else {
if((state_val_29168 === (9))){
var inst_29154 = (state_29167[(9)]);
var inst_29147 = inst_29154;
var state_29167__$1 = (function (){var statearr_29178 = state_29167;
(statearr_29178[(7)] = inst_29147);

return statearr_29178;
})();
var statearr_29179_29193 = state_29167__$1;
(statearr_29179_29193[(2)] = null);

(statearr_29179_29193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (5))){
var inst_29147 = (state_29167[(7)]);
var state_29167__$1 = state_29167;
var statearr_29180_29194 = state_29167__$1;
(statearr_29180_29194[(2)] = inst_29147);

(statearr_29180_29194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (10))){
var inst_29161 = (state_29167[(2)]);
var state_29167__$1 = state_29167;
var statearr_29181_29195 = state_29167__$1;
(statearr_29181_29195[(2)] = inst_29161);

(statearr_29181_29195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (8))){
var inst_29154 = (state_29167[(9)]);
var inst_29157 = cljs.core.deref.call(null,inst_29154);
var state_29167__$1 = state_29167;
var statearr_29182_29196 = state_29167__$1;
(statearr_29182_29196[(2)] = inst_29157);

(statearr_29182_29196[(1)] = (10));


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
});})(c__28680__auto__))
;
return ((function (switch__28589__auto__,c__28680__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28590__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28590__auto____0 = (function (){
var statearr_29183 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29183[(0)] = cljs$core$async$reduce_$_state_machine__28590__auto__);

(statearr_29183[(1)] = (1));

return statearr_29183;
});
var cljs$core$async$reduce_$_state_machine__28590__auto____1 = (function (state_29167){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_29167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e29184){if((e29184 instanceof Object)){
var ex__28593__auto__ = e29184;
var statearr_29185_29197 = state_29167;
(statearr_29185_29197[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29198 = state_29167;
state_29167 = G__29198;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28590__auto__ = function(state_29167){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28590__auto____1.call(this,state_29167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28590__auto____0;
cljs$core$async$reduce_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28590__auto____1;
return cljs$core$async$reduce_$_state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto__))
})();
var state__28682__auto__ = (function (){var statearr_29186 = f__28681__auto__.call(null);
(statearr_29186[(6)] = c__28680__auto__);

return statearr_29186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto__))
);

return c__28680__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto__,f__$1){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto__,f__$1){
return (function (state_29204){
var state_val_29205 = (state_29204[(1)]);
if((state_val_29205 === (1))){
var inst_29199 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29204__$1 = state_29204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29204__$1,(2),inst_29199);
} else {
if((state_val_29205 === (2))){
var inst_29201 = (state_29204[(2)]);
var inst_29202 = f__$1.call(null,inst_29201);
var state_29204__$1 = state_29204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29204__$1,inst_29202);
} else {
return null;
}
}
});})(c__28680__auto__,f__$1))
;
return ((function (switch__28589__auto__,c__28680__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28590__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28590__auto____0 = (function (){
var statearr_29206 = [null,null,null,null,null,null,null];
(statearr_29206[(0)] = cljs$core$async$transduce_$_state_machine__28590__auto__);

(statearr_29206[(1)] = (1));

return statearr_29206;
});
var cljs$core$async$transduce_$_state_machine__28590__auto____1 = (function (state_29204){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_29204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e29207){if((e29207 instanceof Object)){
var ex__28593__auto__ = e29207;
var statearr_29208_29210 = state_29204;
(statearr_29208_29210[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29211 = state_29204;
state_29204 = G__29211;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28590__auto__ = function(state_29204){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28590__auto____1.call(this,state_29204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28590__auto____0;
cljs$core$async$transduce_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28590__auto____1;
return cljs$core$async$transduce_$_state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto__,f__$1))
})();
var state__28682__auto__ = (function (){var statearr_29209 = f__28681__auto__.call(null);
(statearr_29209[(6)] = c__28680__auto__);

return statearr_29209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto__,f__$1))
);

return c__28680__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29213 = arguments.length;
switch (G__29213) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto__){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto__){
return (function (state_29238){
var state_val_29239 = (state_29238[(1)]);
if((state_val_29239 === (7))){
var inst_29220 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29240_29261 = state_29238__$1;
(statearr_29240_29261[(2)] = inst_29220);

(statearr_29240_29261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (1))){
var inst_29214 = cljs.core.seq.call(null,coll);
var inst_29215 = inst_29214;
var state_29238__$1 = (function (){var statearr_29241 = state_29238;
(statearr_29241[(7)] = inst_29215);

return statearr_29241;
})();
var statearr_29242_29262 = state_29238__$1;
(statearr_29242_29262[(2)] = null);

(statearr_29242_29262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (4))){
var inst_29215 = (state_29238[(7)]);
var inst_29218 = cljs.core.first.call(null,inst_29215);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29238__$1,(7),ch,inst_29218);
} else {
if((state_val_29239 === (13))){
var inst_29232 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29243_29263 = state_29238__$1;
(statearr_29243_29263[(2)] = inst_29232);

(statearr_29243_29263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (6))){
var inst_29223 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
if(cljs.core.truth_(inst_29223)){
var statearr_29244_29264 = state_29238__$1;
(statearr_29244_29264[(1)] = (8));

} else {
var statearr_29245_29265 = state_29238__$1;
(statearr_29245_29265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (3))){
var inst_29236 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29238__$1,inst_29236);
} else {
if((state_val_29239 === (12))){
var state_29238__$1 = state_29238;
var statearr_29246_29266 = state_29238__$1;
(statearr_29246_29266[(2)] = null);

(statearr_29246_29266[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (2))){
var inst_29215 = (state_29238[(7)]);
var state_29238__$1 = state_29238;
if(cljs.core.truth_(inst_29215)){
var statearr_29247_29267 = state_29238__$1;
(statearr_29247_29267[(1)] = (4));

} else {
var statearr_29248_29268 = state_29238__$1;
(statearr_29248_29268[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (11))){
var inst_29229 = cljs.core.async.close_BANG_.call(null,ch);
var state_29238__$1 = state_29238;
var statearr_29249_29269 = state_29238__$1;
(statearr_29249_29269[(2)] = inst_29229);

(statearr_29249_29269[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (9))){
var state_29238__$1 = state_29238;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29250_29270 = state_29238__$1;
(statearr_29250_29270[(1)] = (11));

} else {
var statearr_29251_29271 = state_29238__$1;
(statearr_29251_29271[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (5))){
var inst_29215 = (state_29238[(7)]);
var state_29238__$1 = state_29238;
var statearr_29252_29272 = state_29238__$1;
(statearr_29252_29272[(2)] = inst_29215);

(statearr_29252_29272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (10))){
var inst_29234 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29253_29273 = state_29238__$1;
(statearr_29253_29273[(2)] = inst_29234);

(statearr_29253_29273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (8))){
var inst_29215 = (state_29238[(7)]);
var inst_29225 = cljs.core.next.call(null,inst_29215);
var inst_29215__$1 = inst_29225;
var state_29238__$1 = (function (){var statearr_29254 = state_29238;
(statearr_29254[(7)] = inst_29215__$1);

return statearr_29254;
})();
var statearr_29255_29274 = state_29238__$1;
(statearr_29255_29274[(2)] = null);

(statearr_29255_29274[(1)] = (2));


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
});})(c__28680__auto__))
;
return ((function (switch__28589__auto__,c__28680__auto__){
return (function() {
var cljs$core$async$state_machine__28590__auto__ = null;
var cljs$core$async$state_machine__28590__auto____0 = (function (){
var statearr_29256 = [null,null,null,null,null,null,null,null];
(statearr_29256[(0)] = cljs$core$async$state_machine__28590__auto__);

(statearr_29256[(1)] = (1));

return statearr_29256;
});
var cljs$core$async$state_machine__28590__auto____1 = (function (state_29238){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_29238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e29257){if((e29257 instanceof Object)){
var ex__28593__auto__ = e29257;
var statearr_29258_29275 = state_29238;
(statearr_29258_29275[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29276 = state_29238;
state_29238 = G__29276;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$state_machine__28590__auto__ = function(state_29238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28590__auto____1.call(this,state_29238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28590__auto____0;
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28590__auto____1;
return cljs$core$async$state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto__))
})();
var state__28682__auto__ = (function (){var statearr_29259 = f__28681__auto__.call(null);
(statearr_29259[(6)] = c__28680__auto__);

return statearr_29259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto__))
);

return c__28680__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29277 = (function (ch,cs,meta29278){
this.ch = ch;
this.cs = cs;
this.meta29278 = meta29278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29279,meta29278__$1){
var self__ = this;
var _29279__$1 = this;
return (new cljs.core.async.t_cljs$core$async29277(self__.ch,self__.cs,meta29278__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29277.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29279){
var self__ = this;
var _29279__$1 = this;
return self__.meta29278;
});})(cs))
;

cljs.core.async.t_cljs$core$async29277.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29277.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29277.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29277.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29277.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29277.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29277.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29278","meta29278",-1045891578,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29277";

cljs.core.async.t_cljs$core$async29277.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29277");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29277.
 */
cljs.core.async.__GT_t_cljs$core$async29277 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29277(ch__$1,cs__$1,meta29278){
return (new cljs.core.async.t_cljs$core$async29277(ch__$1,cs__$1,meta29278));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29277(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28680__auto___29499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___29499,cs,m,dchan,dctr,done){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___29499,cs,m,dchan,dctr,done){
return (function (state_29414){
var state_val_29415 = (state_29414[(1)]);
if((state_val_29415 === (7))){
var inst_29410 = (state_29414[(2)]);
var state_29414__$1 = state_29414;
var statearr_29416_29500 = state_29414__$1;
(statearr_29416_29500[(2)] = inst_29410);

(statearr_29416_29500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (20))){
var inst_29313 = (state_29414[(7)]);
var inst_29325 = cljs.core.first.call(null,inst_29313);
var inst_29326 = cljs.core.nth.call(null,inst_29325,(0),null);
var inst_29327 = cljs.core.nth.call(null,inst_29325,(1),null);
var state_29414__$1 = (function (){var statearr_29417 = state_29414;
(statearr_29417[(8)] = inst_29326);

return statearr_29417;
})();
if(cljs.core.truth_(inst_29327)){
var statearr_29418_29501 = state_29414__$1;
(statearr_29418_29501[(1)] = (22));

} else {
var statearr_29419_29502 = state_29414__$1;
(statearr_29419_29502[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (27))){
var inst_29282 = (state_29414[(9)]);
var inst_29357 = (state_29414[(10)]);
var inst_29362 = (state_29414[(11)]);
var inst_29355 = (state_29414[(12)]);
var inst_29362__$1 = cljs.core._nth.call(null,inst_29355,inst_29357);
var inst_29363 = cljs.core.async.put_BANG_.call(null,inst_29362__$1,inst_29282,done);
var state_29414__$1 = (function (){var statearr_29420 = state_29414;
(statearr_29420[(11)] = inst_29362__$1);

return statearr_29420;
})();
if(cljs.core.truth_(inst_29363)){
var statearr_29421_29503 = state_29414__$1;
(statearr_29421_29503[(1)] = (30));

} else {
var statearr_29422_29504 = state_29414__$1;
(statearr_29422_29504[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (1))){
var state_29414__$1 = state_29414;
var statearr_29423_29505 = state_29414__$1;
(statearr_29423_29505[(2)] = null);

(statearr_29423_29505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (24))){
var inst_29313 = (state_29414[(7)]);
var inst_29332 = (state_29414[(2)]);
var inst_29333 = cljs.core.next.call(null,inst_29313);
var inst_29291 = inst_29333;
var inst_29292 = null;
var inst_29293 = (0);
var inst_29294 = (0);
var state_29414__$1 = (function (){var statearr_29424 = state_29414;
(statearr_29424[(13)] = inst_29332);

(statearr_29424[(14)] = inst_29294);

(statearr_29424[(15)] = inst_29293);

(statearr_29424[(16)] = inst_29292);

(statearr_29424[(17)] = inst_29291);

return statearr_29424;
})();
var statearr_29425_29506 = state_29414__$1;
(statearr_29425_29506[(2)] = null);

(statearr_29425_29506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (39))){
var state_29414__$1 = state_29414;
var statearr_29429_29507 = state_29414__$1;
(statearr_29429_29507[(2)] = null);

(statearr_29429_29507[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (4))){
var inst_29282 = (state_29414[(9)]);
var inst_29282__$1 = (state_29414[(2)]);
var inst_29283 = (inst_29282__$1 == null);
var state_29414__$1 = (function (){var statearr_29430 = state_29414;
(statearr_29430[(9)] = inst_29282__$1);

return statearr_29430;
})();
if(cljs.core.truth_(inst_29283)){
var statearr_29431_29508 = state_29414__$1;
(statearr_29431_29508[(1)] = (5));

} else {
var statearr_29432_29509 = state_29414__$1;
(statearr_29432_29509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (15))){
var inst_29294 = (state_29414[(14)]);
var inst_29293 = (state_29414[(15)]);
var inst_29292 = (state_29414[(16)]);
var inst_29291 = (state_29414[(17)]);
var inst_29309 = (state_29414[(2)]);
var inst_29310 = (inst_29294 + (1));
var tmp29426 = inst_29293;
var tmp29427 = inst_29292;
var tmp29428 = inst_29291;
var inst_29291__$1 = tmp29428;
var inst_29292__$1 = tmp29427;
var inst_29293__$1 = tmp29426;
var inst_29294__$1 = inst_29310;
var state_29414__$1 = (function (){var statearr_29433 = state_29414;
(statearr_29433[(14)] = inst_29294__$1);

(statearr_29433[(15)] = inst_29293__$1);

(statearr_29433[(16)] = inst_29292__$1);

(statearr_29433[(18)] = inst_29309);

(statearr_29433[(17)] = inst_29291__$1);

return statearr_29433;
})();
var statearr_29434_29510 = state_29414__$1;
(statearr_29434_29510[(2)] = null);

(statearr_29434_29510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (21))){
var inst_29336 = (state_29414[(2)]);
var state_29414__$1 = state_29414;
var statearr_29438_29511 = state_29414__$1;
(statearr_29438_29511[(2)] = inst_29336);

(statearr_29438_29511[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (31))){
var inst_29362 = (state_29414[(11)]);
var inst_29366 = done.call(null,null);
var inst_29367 = cljs.core.async.untap_STAR_.call(null,m,inst_29362);
var state_29414__$1 = (function (){var statearr_29439 = state_29414;
(statearr_29439[(19)] = inst_29366);

return statearr_29439;
})();
var statearr_29440_29512 = state_29414__$1;
(statearr_29440_29512[(2)] = inst_29367);

(statearr_29440_29512[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (32))){
var inst_29354 = (state_29414[(20)]);
var inst_29357 = (state_29414[(10)]);
var inst_29356 = (state_29414[(21)]);
var inst_29355 = (state_29414[(12)]);
var inst_29369 = (state_29414[(2)]);
var inst_29370 = (inst_29357 + (1));
var tmp29435 = inst_29354;
var tmp29436 = inst_29356;
var tmp29437 = inst_29355;
var inst_29354__$1 = tmp29435;
var inst_29355__$1 = tmp29437;
var inst_29356__$1 = tmp29436;
var inst_29357__$1 = inst_29370;
var state_29414__$1 = (function (){var statearr_29441 = state_29414;
(statearr_29441[(20)] = inst_29354__$1);

(statearr_29441[(10)] = inst_29357__$1);

(statearr_29441[(21)] = inst_29356__$1);

(statearr_29441[(22)] = inst_29369);

(statearr_29441[(12)] = inst_29355__$1);

return statearr_29441;
})();
var statearr_29442_29513 = state_29414__$1;
(statearr_29442_29513[(2)] = null);

(statearr_29442_29513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (40))){
var inst_29382 = (state_29414[(23)]);
var inst_29386 = done.call(null,null);
var inst_29387 = cljs.core.async.untap_STAR_.call(null,m,inst_29382);
var state_29414__$1 = (function (){var statearr_29443 = state_29414;
(statearr_29443[(24)] = inst_29386);

return statearr_29443;
})();
var statearr_29444_29514 = state_29414__$1;
(statearr_29444_29514[(2)] = inst_29387);

(statearr_29444_29514[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (33))){
var inst_29373 = (state_29414[(25)]);
var inst_29375 = cljs.core.chunked_seq_QMARK_.call(null,inst_29373);
var state_29414__$1 = state_29414;
if(inst_29375){
var statearr_29445_29515 = state_29414__$1;
(statearr_29445_29515[(1)] = (36));

} else {
var statearr_29446_29516 = state_29414__$1;
(statearr_29446_29516[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (13))){
var inst_29303 = (state_29414[(26)]);
var inst_29306 = cljs.core.async.close_BANG_.call(null,inst_29303);
var state_29414__$1 = state_29414;
var statearr_29447_29517 = state_29414__$1;
(statearr_29447_29517[(2)] = inst_29306);

(statearr_29447_29517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (22))){
var inst_29326 = (state_29414[(8)]);
var inst_29329 = cljs.core.async.close_BANG_.call(null,inst_29326);
var state_29414__$1 = state_29414;
var statearr_29448_29518 = state_29414__$1;
(statearr_29448_29518[(2)] = inst_29329);

(statearr_29448_29518[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (36))){
var inst_29373 = (state_29414[(25)]);
var inst_29377 = cljs.core.chunk_first.call(null,inst_29373);
var inst_29378 = cljs.core.chunk_rest.call(null,inst_29373);
var inst_29379 = cljs.core.count.call(null,inst_29377);
var inst_29354 = inst_29378;
var inst_29355 = inst_29377;
var inst_29356 = inst_29379;
var inst_29357 = (0);
var state_29414__$1 = (function (){var statearr_29449 = state_29414;
(statearr_29449[(20)] = inst_29354);

(statearr_29449[(10)] = inst_29357);

(statearr_29449[(21)] = inst_29356);

(statearr_29449[(12)] = inst_29355);

return statearr_29449;
})();
var statearr_29450_29519 = state_29414__$1;
(statearr_29450_29519[(2)] = null);

(statearr_29450_29519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (41))){
var inst_29373 = (state_29414[(25)]);
var inst_29389 = (state_29414[(2)]);
var inst_29390 = cljs.core.next.call(null,inst_29373);
var inst_29354 = inst_29390;
var inst_29355 = null;
var inst_29356 = (0);
var inst_29357 = (0);
var state_29414__$1 = (function (){var statearr_29451 = state_29414;
(statearr_29451[(20)] = inst_29354);

(statearr_29451[(10)] = inst_29357);

(statearr_29451[(21)] = inst_29356);

(statearr_29451[(12)] = inst_29355);

(statearr_29451[(27)] = inst_29389);

return statearr_29451;
})();
var statearr_29452_29520 = state_29414__$1;
(statearr_29452_29520[(2)] = null);

(statearr_29452_29520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (43))){
var state_29414__$1 = state_29414;
var statearr_29453_29521 = state_29414__$1;
(statearr_29453_29521[(2)] = null);

(statearr_29453_29521[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (29))){
var inst_29398 = (state_29414[(2)]);
var state_29414__$1 = state_29414;
var statearr_29454_29522 = state_29414__$1;
(statearr_29454_29522[(2)] = inst_29398);

(statearr_29454_29522[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (44))){
var inst_29407 = (state_29414[(2)]);
var state_29414__$1 = (function (){var statearr_29455 = state_29414;
(statearr_29455[(28)] = inst_29407);

return statearr_29455;
})();
var statearr_29456_29523 = state_29414__$1;
(statearr_29456_29523[(2)] = null);

(statearr_29456_29523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (6))){
var inst_29346 = (state_29414[(29)]);
var inst_29345 = cljs.core.deref.call(null,cs);
var inst_29346__$1 = cljs.core.keys.call(null,inst_29345);
var inst_29347 = cljs.core.count.call(null,inst_29346__$1);
var inst_29348 = cljs.core.reset_BANG_.call(null,dctr,inst_29347);
var inst_29353 = cljs.core.seq.call(null,inst_29346__$1);
var inst_29354 = inst_29353;
var inst_29355 = null;
var inst_29356 = (0);
var inst_29357 = (0);
var state_29414__$1 = (function (){var statearr_29457 = state_29414;
(statearr_29457[(20)] = inst_29354);

(statearr_29457[(30)] = inst_29348);

(statearr_29457[(10)] = inst_29357);

(statearr_29457[(29)] = inst_29346__$1);

(statearr_29457[(21)] = inst_29356);

(statearr_29457[(12)] = inst_29355);

return statearr_29457;
})();
var statearr_29458_29524 = state_29414__$1;
(statearr_29458_29524[(2)] = null);

(statearr_29458_29524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (28))){
var inst_29354 = (state_29414[(20)]);
var inst_29373 = (state_29414[(25)]);
var inst_29373__$1 = cljs.core.seq.call(null,inst_29354);
var state_29414__$1 = (function (){var statearr_29459 = state_29414;
(statearr_29459[(25)] = inst_29373__$1);

return statearr_29459;
})();
if(inst_29373__$1){
var statearr_29460_29525 = state_29414__$1;
(statearr_29460_29525[(1)] = (33));

} else {
var statearr_29461_29526 = state_29414__$1;
(statearr_29461_29526[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (25))){
var inst_29357 = (state_29414[(10)]);
var inst_29356 = (state_29414[(21)]);
var inst_29359 = (inst_29357 < inst_29356);
var inst_29360 = inst_29359;
var state_29414__$1 = state_29414;
if(cljs.core.truth_(inst_29360)){
var statearr_29462_29527 = state_29414__$1;
(statearr_29462_29527[(1)] = (27));

} else {
var statearr_29463_29528 = state_29414__$1;
(statearr_29463_29528[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (34))){
var state_29414__$1 = state_29414;
var statearr_29464_29529 = state_29414__$1;
(statearr_29464_29529[(2)] = null);

(statearr_29464_29529[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (17))){
var state_29414__$1 = state_29414;
var statearr_29465_29530 = state_29414__$1;
(statearr_29465_29530[(2)] = null);

(statearr_29465_29530[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (3))){
var inst_29412 = (state_29414[(2)]);
var state_29414__$1 = state_29414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29414__$1,inst_29412);
} else {
if((state_val_29415 === (12))){
var inst_29341 = (state_29414[(2)]);
var state_29414__$1 = state_29414;
var statearr_29466_29531 = state_29414__$1;
(statearr_29466_29531[(2)] = inst_29341);

(statearr_29466_29531[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (2))){
var state_29414__$1 = state_29414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29414__$1,(4),ch);
} else {
if((state_val_29415 === (23))){
var state_29414__$1 = state_29414;
var statearr_29467_29532 = state_29414__$1;
(statearr_29467_29532[(2)] = null);

(statearr_29467_29532[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (35))){
var inst_29396 = (state_29414[(2)]);
var state_29414__$1 = state_29414;
var statearr_29468_29533 = state_29414__$1;
(statearr_29468_29533[(2)] = inst_29396);

(statearr_29468_29533[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (19))){
var inst_29313 = (state_29414[(7)]);
var inst_29317 = cljs.core.chunk_first.call(null,inst_29313);
var inst_29318 = cljs.core.chunk_rest.call(null,inst_29313);
var inst_29319 = cljs.core.count.call(null,inst_29317);
var inst_29291 = inst_29318;
var inst_29292 = inst_29317;
var inst_29293 = inst_29319;
var inst_29294 = (0);
var state_29414__$1 = (function (){var statearr_29469 = state_29414;
(statearr_29469[(14)] = inst_29294);

(statearr_29469[(15)] = inst_29293);

(statearr_29469[(16)] = inst_29292);

(statearr_29469[(17)] = inst_29291);

return statearr_29469;
})();
var statearr_29470_29534 = state_29414__$1;
(statearr_29470_29534[(2)] = null);

(statearr_29470_29534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (11))){
var inst_29313 = (state_29414[(7)]);
var inst_29291 = (state_29414[(17)]);
var inst_29313__$1 = cljs.core.seq.call(null,inst_29291);
var state_29414__$1 = (function (){var statearr_29471 = state_29414;
(statearr_29471[(7)] = inst_29313__$1);

return statearr_29471;
})();
if(inst_29313__$1){
var statearr_29472_29535 = state_29414__$1;
(statearr_29472_29535[(1)] = (16));

} else {
var statearr_29473_29536 = state_29414__$1;
(statearr_29473_29536[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (9))){
var inst_29343 = (state_29414[(2)]);
var state_29414__$1 = state_29414;
var statearr_29474_29537 = state_29414__$1;
(statearr_29474_29537[(2)] = inst_29343);

(statearr_29474_29537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (5))){
var inst_29289 = cljs.core.deref.call(null,cs);
var inst_29290 = cljs.core.seq.call(null,inst_29289);
var inst_29291 = inst_29290;
var inst_29292 = null;
var inst_29293 = (0);
var inst_29294 = (0);
var state_29414__$1 = (function (){var statearr_29475 = state_29414;
(statearr_29475[(14)] = inst_29294);

(statearr_29475[(15)] = inst_29293);

(statearr_29475[(16)] = inst_29292);

(statearr_29475[(17)] = inst_29291);

return statearr_29475;
})();
var statearr_29476_29538 = state_29414__$1;
(statearr_29476_29538[(2)] = null);

(statearr_29476_29538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (14))){
var state_29414__$1 = state_29414;
var statearr_29477_29539 = state_29414__$1;
(statearr_29477_29539[(2)] = null);

(statearr_29477_29539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (45))){
var inst_29404 = (state_29414[(2)]);
var state_29414__$1 = state_29414;
var statearr_29478_29540 = state_29414__$1;
(statearr_29478_29540[(2)] = inst_29404);

(statearr_29478_29540[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (26))){
var inst_29346 = (state_29414[(29)]);
var inst_29400 = (state_29414[(2)]);
var inst_29401 = cljs.core.seq.call(null,inst_29346);
var state_29414__$1 = (function (){var statearr_29479 = state_29414;
(statearr_29479[(31)] = inst_29400);

return statearr_29479;
})();
if(inst_29401){
var statearr_29480_29541 = state_29414__$1;
(statearr_29480_29541[(1)] = (42));

} else {
var statearr_29481_29542 = state_29414__$1;
(statearr_29481_29542[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (16))){
var inst_29313 = (state_29414[(7)]);
var inst_29315 = cljs.core.chunked_seq_QMARK_.call(null,inst_29313);
var state_29414__$1 = state_29414;
if(inst_29315){
var statearr_29482_29543 = state_29414__$1;
(statearr_29482_29543[(1)] = (19));

} else {
var statearr_29483_29544 = state_29414__$1;
(statearr_29483_29544[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (38))){
var inst_29393 = (state_29414[(2)]);
var state_29414__$1 = state_29414;
var statearr_29484_29545 = state_29414__$1;
(statearr_29484_29545[(2)] = inst_29393);

(statearr_29484_29545[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (30))){
var state_29414__$1 = state_29414;
var statearr_29485_29546 = state_29414__$1;
(statearr_29485_29546[(2)] = null);

(statearr_29485_29546[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (10))){
var inst_29294 = (state_29414[(14)]);
var inst_29292 = (state_29414[(16)]);
var inst_29302 = cljs.core._nth.call(null,inst_29292,inst_29294);
var inst_29303 = cljs.core.nth.call(null,inst_29302,(0),null);
var inst_29304 = cljs.core.nth.call(null,inst_29302,(1),null);
var state_29414__$1 = (function (){var statearr_29486 = state_29414;
(statearr_29486[(26)] = inst_29303);

return statearr_29486;
})();
if(cljs.core.truth_(inst_29304)){
var statearr_29487_29547 = state_29414__$1;
(statearr_29487_29547[(1)] = (13));

} else {
var statearr_29488_29548 = state_29414__$1;
(statearr_29488_29548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (18))){
var inst_29339 = (state_29414[(2)]);
var state_29414__$1 = state_29414;
var statearr_29489_29549 = state_29414__$1;
(statearr_29489_29549[(2)] = inst_29339);

(statearr_29489_29549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (42))){
var state_29414__$1 = state_29414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29414__$1,(45),dchan);
} else {
if((state_val_29415 === (37))){
var inst_29282 = (state_29414[(9)]);
var inst_29382 = (state_29414[(23)]);
var inst_29373 = (state_29414[(25)]);
var inst_29382__$1 = cljs.core.first.call(null,inst_29373);
var inst_29383 = cljs.core.async.put_BANG_.call(null,inst_29382__$1,inst_29282,done);
var state_29414__$1 = (function (){var statearr_29490 = state_29414;
(statearr_29490[(23)] = inst_29382__$1);

return statearr_29490;
})();
if(cljs.core.truth_(inst_29383)){
var statearr_29491_29550 = state_29414__$1;
(statearr_29491_29550[(1)] = (39));

} else {
var statearr_29492_29551 = state_29414__$1;
(statearr_29492_29551[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (8))){
var inst_29294 = (state_29414[(14)]);
var inst_29293 = (state_29414[(15)]);
var inst_29296 = (inst_29294 < inst_29293);
var inst_29297 = inst_29296;
var state_29414__$1 = state_29414;
if(cljs.core.truth_(inst_29297)){
var statearr_29493_29552 = state_29414__$1;
(statearr_29493_29552[(1)] = (10));

} else {
var statearr_29494_29553 = state_29414__$1;
(statearr_29494_29553[(1)] = (11));

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
});})(c__28680__auto___29499,cs,m,dchan,dctr,done))
;
return ((function (switch__28589__auto__,c__28680__auto___29499,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28590__auto__ = null;
var cljs$core$async$mult_$_state_machine__28590__auto____0 = (function (){
var statearr_29495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29495[(0)] = cljs$core$async$mult_$_state_machine__28590__auto__);

(statearr_29495[(1)] = (1));

return statearr_29495;
});
var cljs$core$async$mult_$_state_machine__28590__auto____1 = (function (state_29414){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_29414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e29496){if((e29496 instanceof Object)){
var ex__28593__auto__ = e29496;
var statearr_29497_29554 = state_29414;
(statearr_29497_29554[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29555 = state_29414;
state_29414 = G__29555;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28590__auto__ = function(state_29414){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28590__auto____1.call(this,state_29414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28590__auto____0;
cljs$core$async$mult_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28590__auto____1;
return cljs$core$async$mult_$_state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___29499,cs,m,dchan,dctr,done))
})();
var state__28682__auto__ = (function (){var statearr_29498 = f__28681__auto__.call(null);
(statearr_29498[(6)] = c__28680__auto___29499);

return statearr_29498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___29499,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29557 = arguments.length;
switch (G__29557) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___29569 = arguments.length;
var i__4532__auto___29570 = (0);
while(true){
if((i__4532__auto___29570 < len__4531__auto___29569)){
args__4534__auto__.push((arguments[i__4532__auto___29570]));

var G__29571 = (i__4532__auto___29570 + (1));
i__4532__auto___29570 = G__29571;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29563){
var map__29564 = p__29563;
var map__29564__$1 = ((((!((map__29564 == null)))?(((((map__29564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29564):map__29564);
var opts = map__29564__$1;
var statearr_29566_29572 = state;
(statearr_29566_29572[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__29564,map__29564__$1,opts){
return (function (val){
var statearr_29567_29573 = state;
(statearr_29567_29573[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29564,map__29564__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_29568_29574 = state;
(statearr_29568_29574[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29559){
var G__29560 = cljs.core.first.call(null,seq29559);
var seq29559__$1 = cljs.core.next.call(null,seq29559);
var G__29561 = cljs.core.first.call(null,seq29559__$1);
var seq29559__$2 = cljs.core.next.call(null,seq29559__$1);
var G__29562 = cljs.core.first.call(null,seq29559__$2);
var seq29559__$3 = cljs.core.next.call(null,seq29559__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29560,G__29561,G__29562,seq29559__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29575 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29576){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29576 = meta29576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29577,meta29576__$1){
var self__ = this;
var _29577__$1 = this;
return (new cljs.core.async.t_cljs$core$async29575(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29576__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29577){
var self__ = this;
var _29577__$1 = this;
return self__.meta29576;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29575.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta29576","meta29576",1012996552,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29575";

cljs.core.async.t_cljs$core$async29575.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29575");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29575.
 */
cljs.core.async.__GT_t_cljs$core$async29575 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29575(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29576){
return (new cljs.core.async.t_cljs$core$async29575(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29576));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29575(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28680__auto___29739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___29739,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___29739,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29679){
var state_val_29680 = (state_29679[(1)]);
if((state_val_29680 === (7))){
var inst_29594 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29681_29740 = state_29679__$1;
(statearr_29681_29740[(2)] = inst_29594);

(statearr_29681_29740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (20))){
var inst_29606 = (state_29679[(7)]);
var state_29679__$1 = state_29679;
var statearr_29682_29741 = state_29679__$1;
(statearr_29682_29741[(2)] = inst_29606);

(statearr_29682_29741[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (27))){
var state_29679__$1 = state_29679;
var statearr_29683_29742 = state_29679__$1;
(statearr_29683_29742[(2)] = null);

(statearr_29683_29742[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (1))){
var inst_29581 = (state_29679[(8)]);
var inst_29581__$1 = calc_state.call(null);
var inst_29583 = (inst_29581__$1 == null);
var inst_29584 = cljs.core.not.call(null,inst_29583);
var state_29679__$1 = (function (){var statearr_29684 = state_29679;
(statearr_29684[(8)] = inst_29581__$1);

return statearr_29684;
})();
if(inst_29584){
var statearr_29685_29743 = state_29679__$1;
(statearr_29685_29743[(1)] = (2));

} else {
var statearr_29686_29744 = state_29679__$1;
(statearr_29686_29744[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (24))){
var inst_29630 = (state_29679[(9)]);
var inst_29653 = (state_29679[(10)]);
var inst_29639 = (state_29679[(11)]);
var inst_29653__$1 = inst_29630.call(null,inst_29639);
var state_29679__$1 = (function (){var statearr_29687 = state_29679;
(statearr_29687[(10)] = inst_29653__$1);

return statearr_29687;
})();
if(cljs.core.truth_(inst_29653__$1)){
var statearr_29688_29745 = state_29679__$1;
(statearr_29688_29745[(1)] = (29));

} else {
var statearr_29689_29746 = state_29679__$1;
(statearr_29689_29746[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (4))){
var inst_29597 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
if(cljs.core.truth_(inst_29597)){
var statearr_29690_29747 = state_29679__$1;
(statearr_29690_29747[(1)] = (8));

} else {
var statearr_29691_29748 = state_29679__$1;
(statearr_29691_29748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (15))){
var inst_29624 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
if(cljs.core.truth_(inst_29624)){
var statearr_29692_29749 = state_29679__$1;
(statearr_29692_29749[(1)] = (19));

} else {
var statearr_29693_29750 = state_29679__$1;
(statearr_29693_29750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (21))){
var inst_29629 = (state_29679[(12)]);
var inst_29629__$1 = (state_29679[(2)]);
var inst_29630 = cljs.core.get.call(null,inst_29629__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29631 = cljs.core.get.call(null,inst_29629__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29632 = cljs.core.get.call(null,inst_29629__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29679__$1 = (function (){var statearr_29694 = state_29679;
(statearr_29694[(9)] = inst_29630);

(statearr_29694[(12)] = inst_29629__$1);

(statearr_29694[(13)] = inst_29631);

return statearr_29694;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29679__$1,(22),inst_29632);
} else {
if((state_val_29680 === (31))){
var inst_29661 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
if(cljs.core.truth_(inst_29661)){
var statearr_29695_29751 = state_29679__$1;
(statearr_29695_29751[(1)] = (32));

} else {
var statearr_29696_29752 = state_29679__$1;
(statearr_29696_29752[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (32))){
var inst_29638 = (state_29679[(14)]);
var state_29679__$1 = state_29679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29679__$1,(35),out,inst_29638);
} else {
if((state_val_29680 === (33))){
var inst_29629 = (state_29679[(12)]);
var inst_29606 = inst_29629;
var state_29679__$1 = (function (){var statearr_29697 = state_29679;
(statearr_29697[(7)] = inst_29606);

return statearr_29697;
})();
var statearr_29698_29753 = state_29679__$1;
(statearr_29698_29753[(2)] = null);

(statearr_29698_29753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (13))){
var inst_29606 = (state_29679[(7)]);
var inst_29613 = inst_29606.cljs$lang$protocol_mask$partition0$;
var inst_29614 = (inst_29613 & (64));
var inst_29615 = inst_29606.cljs$core$ISeq$;
var inst_29616 = (cljs.core.PROTOCOL_SENTINEL === inst_29615);
var inst_29617 = ((inst_29614) || (inst_29616));
var state_29679__$1 = state_29679;
if(cljs.core.truth_(inst_29617)){
var statearr_29699_29754 = state_29679__$1;
(statearr_29699_29754[(1)] = (16));

} else {
var statearr_29700_29755 = state_29679__$1;
(statearr_29700_29755[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (22))){
var inst_29639 = (state_29679[(11)]);
var inst_29638 = (state_29679[(14)]);
var inst_29637 = (state_29679[(2)]);
var inst_29638__$1 = cljs.core.nth.call(null,inst_29637,(0),null);
var inst_29639__$1 = cljs.core.nth.call(null,inst_29637,(1),null);
var inst_29640 = (inst_29638__$1 == null);
var inst_29641 = cljs.core._EQ_.call(null,inst_29639__$1,change);
var inst_29642 = ((inst_29640) || (inst_29641));
var state_29679__$1 = (function (){var statearr_29701 = state_29679;
(statearr_29701[(11)] = inst_29639__$1);

(statearr_29701[(14)] = inst_29638__$1);

return statearr_29701;
})();
if(cljs.core.truth_(inst_29642)){
var statearr_29702_29756 = state_29679__$1;
(statearr_29702_29756[(1)] = (23));

} else {
var statearr_29703_29757 = state_29679__$1;
(statearr_29703_29757[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (36))){
var inst_29629 = (state_29679[(12)]);
var inst_29606 = inst_29629;
var state_29679__$1 = (function (){var statearr_29704 = state_29679;
(statearr_29704[(7)] = inst_29606);

return statearr_29704;
})();
var statearr_29705_29758 = state_29679__$1;
(statearr_29705_29758[(2)] = null);

(statearr_29705_29758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (29))){
var inst_29653 = (state_29679[(10)]);
var state_29679__$1 = state_29679;
var statearr_29706_29759 = state_29679__$1;
(statearr_29706_29759[(2)] = inst_29653);

(statearr_29706_29759[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (6))){
var state_29679__$1 = state_29679;
var statearr_29707_29760 = state_29679__$1;
(statearr_29707_29760[(2)] = false);

(statearr_29707_29760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (28))){
var inst_29649 = (state_29679[(2)]);
var inst_29650 = calc_state.call(null);
var inst_29606 = inst_29650;
var state_29679__$1 = (function (){var statearr_29708 = state_29679;
(statearr_29708[(15)] = inst_29649);

(statearr_29708[(7)] = inst_29606);

return statearr_29708;
})();
var statearr_29709_29761 = state_29679__$1;
(statearr_29709_29761[(2)] = null);

(statearr_29709_29761[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (25))){
var inst_29675 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29710_29762 = state_29679__$1;
(statearr_29710_29762[(2)] = inst_29675);

(statearr_29710_29762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (34))){
var inst_29673 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29711_29763 = state_29679__$1;
(statearr_29711_29763[(2)] = inst_29673);

(statearr_29711_29763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (17))){
var state_29679__$1 = state_29679;
var statearr_29712_29764 = state_29679__$1;
(statearr_29712_29764[(2)] = false);

(statearr_29712_29764[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (3))){
var state_29679__$1 = state_29679;
var statearr_29713_29765 = state_29679__$1;
(statearr_29713_29765[(2)] = false);

(statearr_29713_29765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (12))){
var inst_29677 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29679__$1,inst_29677);
} else {
if((state_val_29680 === (2))){
var inst_29581 = (state_29679[(8)]);
var inst_29586 = inst_29581.cljs$lang$protocol_mask$partition0$;
var inst_29587 = (inst_29586 & (64));
var inst_29588 = inst_29581.cljs$core$ISeq$;
var inst_29589 = (cljs.core.PROTOCOL_SENTINEL === inst_29588);
var inst_29590 = ((inst_29587) || (inst_29589));
var state_29679__$1 = state_29679;
if(cljs.core.truth_(inst_29590)){
var statearr_29714_29766 = state_29679__$1;
(statearr_29714_29766[(1)] = (5));

} else {
var statearr_29715_29767 = state_29679__$1;
(statearr_29715_29767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (23))){
var inst_29638 = (state_29679[(14)]);
var inst_29644 = (inst_29638 == null);
var state_29679__$1 = state_29679;
if(cljs.core.truth_(inst_29644)){
var statearr_29716_29768 = state_29679__$1;
(statearr_29716_29768[(1)] = (26));

} else {
var statearr_29717_29769 = state_29679__$1;
(statearr_29717_29769[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (35))){
var inst_29664 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
if(cljs.core.truth_(inst_29664)){
var statearr_29718_29770 = state_29679__$1;
(statearr_29718_29770[(1)] = (36));

} else {
var statearr_29719_29771 = state_29679__$1;
(statearr_29719_29771[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (19))){
var inst_29606 = (state_29679[(7)]);
var inst_29626 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29606);
var state_29679__$1 = state_29679;
var statearr_29720_29772 = state_29679__$1;
(statearr_29720_29772[(2)] = inst_29626);

(statearr_29720_29772[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (11))){
var inst_29606 = (state_29679[(7)]);
var inst_29610 = (inst_29606 == null);
var inst_29611 = cljs.core.not.call(null,inst_29610);
var state_29679__$1 = state_29679;
if(inst_29611){
var statearr_29721_29773 = state_29679__$1;
(statearr_29721_29773[(1)] = (13));

} else {
var statearr_29722_29774 = state_29679__$1;
(statearr_29722_29774[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (9))){
var inst_29581 = (state_29679[(8)]);
var state_29679__$1 = state_29679;
var statearr_29723_29775 = state_29679__$1;
(statearr_29723_29775[(2)] = inst_29581);

(statearr_29723_29775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (5))){
var state_29679__$1 = state_29679;
var statearr_29724_29776 = state_29679__$1;
(statearr_29724_29776[(2)] = true);

(statearr_29724_29776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (14))){
var state_29679__$1 = state_29679;
var statearr_29725_29777 = state_29679__$1;
(statearr_29725_29777[(2)] = false);

(statearr_29725_29777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (26))){
var inst_29639 = (state_29679[(11)]);
var inst_29646 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29639);
var state_29679__$1 = state_29679;
var statearr_29726_29778 = state_29679__$1;
(statearr_29726_29778[(2)] = inst_29646);

(statearr_29726_29778[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (16))){
var state_29679__$1 = state_29679;
var statearr_29727_29779 = state_29679__$1;
(statearr_29727_29779[(2)] = true);

(statearr_29727_29779[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (38))){
var inst_29669 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29728_29780 = state_29679__$1;
(statearr_29728_29780[(2)] = inst_29669);

(statearr_29728_29780[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (30))){
var inst_29630 = (state_29679[(9)]);
var inst_29639 = (state_29679[(11)]);
var inst_29631 = (state_29679[(13)]);
var inst_29656 = cljs.core.empty_QMARK_.call(null,inst_29630);
var inst_29657 = inst_29631.call(null,inst_29639);
var inst_29658 = cljs.core.not.call(null,inst_29657);
var inst_29659 = ((inst_29656) && (inst_29658));
var state_29679__$1 = state_29679;
var statearr_29729_29781 = state_29679__$1;
(statearr_29729_29781[(2)] = inst_29659);

(statearr_29729_29781[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (10))){
var inst_29581 = (state_29679[(8)]);
var inst_29602 = (state_29679[(2)]);
var inst_29603 = cljs.core.get.call(null,inst_29602,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29604 = cljs.core.get.call(null,inst_29602,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29605 = cljs.core.get.call(null,inst_29602,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29606 = inst_29581;
var state_29679__$1 = (function (){var statearr_29730 = state_29679;
(statearr_29730[(16)] = inst_29603);

(statearr_29730[(17)] = inst_29605);

(statearr_29730[(18)] = inst_29604);

(statearr_29730[(7)] = inst_29606);

return statearr_29730;
})();
var statearr_29731_29782 = state_29679__$1;
(statearr_29731_29782[(2)] = null);

(statearr_29731_29782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (18))){
var inst_29621 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29732_29783 = state_29679__$1;
(statearr_29732_29783[(2)] = inst_29621);

(statearr_29732_29783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (37))){
var state_29679__$1 = state_29679;
var statearr_29733_29784 = state_29679__$1;
(statearr_29733_29784[(2)] = null);

(statearr_29733_29784[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (8))){
var inst_29581 = (state_29679[(8)]);
var inst_29599 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29581);
var state_29679__$1 = state_29679;
var statearr_29734_29785 = state_29679__$1;
(statearr_29734_29785[(2)] = inst_29599);

(statearr_29734_29785[(1)] = (10));


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
});})(c__28680__auto___29739,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28589__auto__,c__28680__auto___29739,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28590__auto__ = null;
var cljs$core$async$mix_$_state_machine__28590__auto____0 = (function (){
var statearr_29735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29735[(0)] = cljs$core$async$mix_$_state_machine__28590__auto__);

(statearr_29735[(1)] = (1));

return statearr_29735;
});
var cljs$core$async$mix_$_state_machine__28590__auto____1 = (function (state_29679){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_29679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e29736){if((e29736 instanceof Object)){
var ex__28593__auto__ = e29736;
var statearr_29737_29786 = state_29679;
(statearr_29737_29786[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29787 = state_29679;
state_29679 = G__29787;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28590__auto__ = function(state_29679){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28590__auto____1.call(this,state_29679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28590__auto____0;
cljs$core$async$mix_$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28590__auto____1;
return cljs$core$async$mix_$_state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___29739,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28682__auto__ = (function (){var statearr_29738 = f__28681__auto__.call(null);
(statearr_29738[(6)] = c__28680__auto___29739);

return statearr_29738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___29739,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29789 = arguments.length;
switch (G__29789) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29793 = arguments.length;
switch (G__29793) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__29791_SHARP_){
if(cljs.core.truth_(p1__29791_SHARP_.call(null,topic))){
return p1__29791_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29791_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29794 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29794 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29795){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29795 = meta29795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29796,meta29795__$1){
var self__ = this;
var _29796__$1 = this;
return (new cljs.core.async.t_cljs$core$async29794(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29795__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29796){
var self__ = this;
var _29796__$1 = this;
return self__.meta29795;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29794.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29795","meta29795",1377045973,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29794";

cljs.core.async.t_cljs$core$async29794.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29794");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29794.
 */
cljs.core.async.__GT_t_cljs$core$async29794 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29794(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29795){
return (new cljs.core.async.t_cljs$core$async29794(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29795));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29794(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28680__auto___29914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___29914,mults,ensure_mult,p){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___29914,mults,ensure_mult,p){
return (function (state_29868){
var state_val_29869 = (state_29868[(1)]);
if((state_val_29869 === (7))){
var inst_29864 = (state_29868[(2)]);
var state_29868__$1 = state_29868;
var statearr_29870_29915 = state_29868__$1;
(statearr_29870_29915[(2)] = inst_29864);

(statearr_29870_29915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (20))){
var state_29868__$1 = state_29868;
var statearr_29871_29916 = state_29868__$1;
(statearr_29871_29916[(2)] = null);

(statearr_29871_29916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (1))){
var state_29868__$1 = state_29868;
var statearr_29872_29917 = state_29868__$1;
(statearr_29872_29917[(2)] = null);

(statearr_29872_29917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (24))){
var inst_29847 = (state_29868[(7)]);
var inst_29856 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29847);
var state_29868__$1 = state_29868;
var statearr_29873_29918 = state_29868__$1;
(statearr_29873_29918[(2)] = inst_29856);

(statearr_29873_29918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (4))){
var inst_29799 = (state_29868[(8)]);
var inst_29799__$1 = (state_29868[(2)]);
var inst_29800 = (inst_29799__$1 == null);
var state_29868__$1 = (function (){var statearr_29874 = state_29868;
(statearr_29874[(8)] = inst_29799__$1);

return statearr_29874;
})();
if(cljs.core.truth_(inst_29800)){
var statearr_29875_29919 = state_29868__$1;
(statearr_29875_29919[(1)] = (5));

} else {
var statearr_29876_29920 = state_29868__$1;
(statearr_29876_29920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (15))){
var inst_29841 = (state_29868[(2)]);
var state_29868__$1 = state_29868;
var statearr_29877_29921 = state_29868__$1;
(statearr_29877_29921[(2)] = inst_29841);

(statearr_29877_29921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (21))){
var inst_29861 = (state_29868[(2)]);
var state_29868__$1 = (function (){var statearr_29878 = state_29868;
(statearr_29878[(9)] = inst_29861);

return statearr_29878;
})();
var statearr_29879_29922 = state_29868__$1;
(statearr_29879_29922[(2)] = null);

(statearr_29879_29922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (13))){
var inst_29823 = (state_29868[(10)]);
var inst_29825 = cljs.core.chunked_seq_QMARK_.call(null,inst_29823);
var state_29868__$1 = state_29868;
if(inst_29825){
var statearr_29880_29923 = state_29868__$1;
(statearr_29880_29923[(1)] = (16));

} else {
var statearr_29881_29924 = state_29868__$1;
(statearr_29881_29924[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (22))){
var inst_29853 = (state_29868[(2)]);
var state_29868__$1 = state_29868;
if(cljs.core.truth_(inst_29853)){
var statearr_29882_29925 = state_29868__$1;
(statearr_29882_29925[(1)] = (23));

} else {
var statearr_29883_29926 = state_29868__$1;
(statearr_29883_29926[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (6))){
var inst_29799 = (state_29868[(8)]);
var inst_29847 = (state_29868[(7)]);
var inst_29849 = (state_29868[(11)]);
var inst_29847__$1 = topic_fn.call(null,inst_29799);
var inst_29848 = cljs.core.deref.call(null,mults);
var inst_29849__$1 = cljs.core.get.call(null,inst_29848,inst_29847__$1);
var state_29868__$1 = (function (){var statearr_29884 = state_29868;
(statearr_29884[(7)] = inst_29847__$1);

(statearr_29884[(11)] = inst_29849__$1);

return statearr_29884;
})();
if(cljs.core.truth_(inst_29849__$1)){
var statearr_29885_29927 = state_29868__$1;
(statearr_29885_29927[(1)] = (19));

} else {
var statearr_29886_29928 = state_29868__$1;
(statearr_29886_29928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (25))){
var inst_29858 = (state_29868[(2)]);
var state_29868__$1 = state_29868;
var statearr_29887_29929 = state_29868__$1;
(statearr_29887_29929[(2)] = inst_29858);

(statearr_29887_29929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (17))){
var inst_29823 = (state_29868[(10)]);
var inst_29832 = cljs.core.first.call(null,inst_29823);
var inst_29833 = cljs.core.async.muxch_STAR_.call(null,inst_29832);
var inst_29834 = cljs.core.async.close_BANG_.call(null,inst_29833);
var inst_29835 = cljs.core.next.call(null,inst_29823);
var inst_29809 = inst_29835;
var inst_29810 = null;
var inst_29811 = (0);
var inst_29812 = (0);
var state_29868__$1 = (function (){var statearr_29888 = state_29868;
(statearr_29888[(12)] = inst_29809);

(statearr_29888[(13)] = inst_29812);

(statearr_29888[(14)] = inst_29810);

(statearr_29888[(15)] = inst_29834);

(statearr_29888[(16)] = inst_29811);

return statearr_29888;
})();
var statearr_29889_29930 = state_29868__$1;
(statearr_29889_29930[(2)] = null);

(statearr_29889_29930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (3))){
var inst_29866 = (state_29868[(2)]);
var state_29868__$1 = state_29868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29868__$1,inst_29866);
} else {
if((state_val_29869 === (12))){
var inst_29843 = (state_29868[(2)]);
var state_29868__$1 = state_29868;
var statearr_29890_29931 = state_29868__$1;
(statearr_29890_29931[(2)] = inst_29843);

(statearr_29890_29931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (2))){
var state_29868__$1 = state_29868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29868__$1,(4),ch);
} else {
if((state_val_29869 === (23))){
var state_29868__$1 = state_29868;
var statearr_29891_29932 = state_29868__$1;
(statearr_29891_29932[(2)] = null);

(statearr_29891_29932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (19))){
var inst_29799 = (state_29868[(8)]);
var inst_29849 = (state_29868[(11)]);
var inst_29851 = cljs.core.async.muxch_STAR_.call(null,inst_29849);
var state_29868__$1 = state_29868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29868__$1,(22),inst_29851,inst_29799);
} else {
if((state_val_29869 === (11))){
var inst_29809 = (state_29868[(12)]);
var inst_29823 = (state_29868[(10)]);
var inst_29823__$1 = cljs.core.seq.call(null,inst_29809);
var state_29868__$1 = (function (){var statearr_29892 = state_29868;
(statearr_29892[(10)] = inst_29823__$1);

return statearr_29892;
})();
if(inst_29823__$1){
var statearr_29893_29933 = state_29868__$1;
(statearr_29893_29933[(1)] = (13));

} else {
var statearr_29894_29934 = state_29868__$1;
(statearr_29894_29934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (9))){
var inst_29845 = (state_29868[(2)]);
var state_29868__$1 = state_29868;
var statearr_29895_29935 = state_29868__$1;
(statearr_29895_29935[(2)] = inst_29845);

(statearr_29895_29935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (5))){
var inst_29806 = cljs.core.deref.call(null,mults);
var inst_29807 = cljs.core.vals.call(null,inst_29806);
var inst_29808 = cljs.core.seq.call(null,inst_29807);
var inst_29809 = inst_29808;
var inst_29810 = null;
var inst_29811 = (0);
var inst_29812 = (0);
var state_29868__$1 = (function (){var statearr_29896 = state_29868;
(statearr_29896[(12)] = inst_29809);

(statearr_29896[(13)] = inst_29812);

(statearr_29896[(14)] = inst_29810);

(statearr_29896[(16)] = inst_29811);

return statearr_29896;
})();
var statearr_29897_29936 = state_29868__$1;
(statearr_29897_29936[(2)] = null);

(statearr_29897_29936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (14))){
var state_29868__$1 = state_29868;
var statearr_29901_29937 = state_29868__$1;
(statearr_29901_29937[(2)] = null);

(statearr_29901_29937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (16))){
var inst_29823 = (state_29868[(10)]);
var inst_29827 = cljs.core.chunk_first.call(null,inst_29823);
var inst_29828 = cljs.core.chunk_rest.call(null,inst_29823);
var inst_29829 = cljs.core.count.call(null,inst_29827);
var inst_29809 = inst_29828;
var inst_29810 = inst_29827;
var inst_29811 = inst_29829;
var inst_29812 = (0);
var state_29868__$1 = (function (){var statearr_29902 = state_29868;
(statearr_29902[(12)] = inst_29809);

(statearr_29902[(13)] = inst_29812);

(statearr_29902[(14)] = inst_29810);

(statearr_29902[(16)] = inst_29811);

return statearr_29902;
})();
var statearr_29903_29938 = state_29868__$1;
(statearr_29903_29938[(2)] = null);

(statearr_29903_29938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (10))){
var inst_29809 = (state_29868[(12)]);
var inst_29812 = (state_29868[(13)]);
var inst_29810 = (state_29868[(14)]);
var inst_29811 = (state_29868[(16)]);
var inst_29817 = cljs.core._nth.call(null,inst_29810,inst_29812);
var inst_29818 = cljs.core.async.muxch_STAR_.call(null,inst_29817);
var inst_29819 = cljs.core.async.close_BANG_.call(null,inst_29818);
var inst_29820 = (inst_29812 + (1));
var tmp29898 = inst_29809;
var tmp29899 = inst_29810;
var tmp29900 = inst_29811;
var inst_29809__$1 = tmp29898;
var inst_29810__$1 = tmp29899;
var inst_29811__$1 = tmp29900;
var inst_29812__$1 = inst_29820;
var state_29868__$1 = (function (){var statearr_29904 = state_29868;
(statearr_29904[(12)] = inst_29809__$1);

(statearr_29904[(13)] = inst_29812__$1);

(statearr_29904[(14)] = inst_29810__$1);

(statearr_29904[(16)] = inst_29811__$1);

(statearr_29904[(17)] = inst_29819);

return statearr_29904;
})();
var statearr_29905_29939 = state_29868__$1;
(statearr_29905_29939[(2)] = null);

(statearr_29905_29939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (18))){
var inst_29838 = (state_29868[(2)]);
var state_29868__$1 = state_29868;
var statearr_29906_29940 = state_29868__$1;
(statearr_29906_29940[(2)] = inst_29838);

(statearr_29906_29940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (8))){
var inst_29812 = (state_29868[(13)]);
var inst_29811 = (state_29868[(16)]);
var inst_29814 = (inst_29812 < inst_29811);
var inst_29815 = inst_29814;
var state_29868__$1 = state_29868;
if(cljs.core.truth_(inst_29815)){
var statearr_29907_29941 = state_29868__$1;
(statearr_29907_29941[(1)] = (10));

} else {
var statearr_29908_29942 = state_29868__$1;
(statearr_29908_29942[(1)] = (11));

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
});})(c__28680__auto___29914,mults,ensure_mult,p))
;
return ((function (switch__28589__auto__,c__28680__auto___29914,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28590__auto__ = null;
var cljs$core$async$state_machine__28590__auto____0 = (function (){
var statearr_29909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29909[(0)] = cljs$core$async$state_machine__28590__auto__);

(statearr_29909[(1)] = (1));

return statearr_29909;
});
var cljs$core$async$state_machine__28590__auto____1 = (function (state_29868){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_29868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e29910){if((e29910 instanceof Object)){
var ex__28593__auto__ = e29910;
var statearr_29911_29943 = state_29868;
(statearr_29911_29943[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29944 = state_29868;
state_29868 = G__29944;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$state_machine__28590__auto__ = function(state_29868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28590__auto____1.call(this,state_29868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28590__auto____0;
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28590__auto____1;
return cljs$core$async$state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___29914,mults,ensure_mult,p))
})();
var state__28682__auto__ = (function (){var statearr_29912 = f__28681__auto__.call(null);
(statearr_29912[(6)] = c__28680__auto___29914);

return statearr_29912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___29914,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29946 = arguments.length;
switch (G__29946) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29949 = arguments.length;
switch (G__29949) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29952 = arguments.length;
switch (G__29952) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28680__auto___30019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___30019,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___30019,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29991){
var state_val_29992 = (state_29991[(1)]);
if((state_val_29992 === (7))){
var state_29991__$1 = state_29991;
var statearr_29993_30020 = state_29991__$1;
(statearr_29993_30020[(2)] = null);

(statearr_29993_30020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (1))){
var state_29991__$1 = state_29991;
var statearr_29994_30021 = state_29991__$1;
(statearr_29994_30021[(2)] = null);

(statearr_29994_30021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (4))){
var inst_29955 = (state_29991[(7)]);
var inst_29957 = (inst_29955 < cnt);
var state_29991__$1 = state_29991;
if(cljs.core.truth_(inst_29957)){
var statearr_29995_30022 = state_29991__$1;
(statearr_29995_30022[(1)] = (6));

} else {
var statearr_29996_30023 = state_29991__$1;
(statearr_29996_30023[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (15))){
var inst_29987 = (state_29991[(2)]);
var state_29991__$1 = state_29991;
var statearr_29997_30024 = state_29991__$1;
(statearr_29997_30024[(2)] = inst_29987);

(statearr_29997_30024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (13))){
var inst_29980 = cljs.core.async.close_BANG_.call(null,out);
var state_29991__$1 = state_29991;
var statearr_29998_30025 = state_29991__$1;
(statearr_29998_30025[(2)] = inst_29980);

(statearr_29998_30025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (6))){
var state_29991__$1 = state_29991;
var statearr_29999_30026 = state_29991__$1;
(statearr_29999_30026[(2)] = null);

(statearr_29999_30026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (3))){
var inst_29989 = (state_29991[(2)]);
var state_29991__$1 = state_29991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29991__$1,inst_29989);
} else {
if((state_val_29992 === (12))){
var inst_29977 = (state_29991[(8)]);
var inst_29977__$1 = (state_29991[(2)]);
var inst_29978 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29977__$1);
var state_29991__$1 = (function (){var statearr_30000 = state_29991;
(statearr_30000[(8)] = inst_29977__$1);

return statearr_30000;
})();
if(cljs.core.truth_(inst_29978)){
var statearr_30001_30027 = state_29991__$1;
(statearr_30001_30027[(1)] = (13));

} else {
var statearr_30002_30028 = state_29991__$1;
(statearr_30002_30028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (2))){
var inst_29954 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29955 = (0);
var state_29991__$1 = (function (){var statearr_30003 = state_29991;
(statearr_30003[(7)] = inst_29955);

(statearr_30003[(9)] = inst_29954);

return statearr_30003;
})();
var statearr_30004_30029 = state_29991__$1;
(statearr_30004_30029[(2)] = null);

(statearr_30004_30029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (11))){
var inst_29955 = (state_29991[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29991,(10),Object,null,(9));
var inst_29964 = chs__$1.call(null,inst_29955);
var inst_29965 = done.call(null,inst_29955);
var inst_29966 = cljs.core.async.take_BANG_.call(null,inst_29964,inst_29965);
var state_29991__$1 = state_29991;
var statearr_30005_30030 = state_29991__$1;
(statearr_30005_30030[(2)] = inst_29966);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29991__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (9))){
var inst_29955 = (state_29991[(7)]);
var inst_29968 = (state_29991[(2)]);
var inst_29969 = (inst_29955 + (1));
var inst_29955__$1 = inst_29969;
var state_29991__$1 = (function (){var statearr_30006 = state_29991;
(statearr_30006[(7)] = inst_29955__$1);

(statearr_30006[(10)] = inst_29968);

return statearr_30006;
})();
var statearr_30007_30031 = state_29991__$1;
(statearr_30007_30031[(2)] = null);

(statearr_30007_30031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (5))){
var inst_29975 = (state_29991[(2)]);
var state_29991__$1 = (function (){var statearr_30008 = state_29991;
(statearr_30008[(11)] = inst_29975);

return statearr_30008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29991__$1,(12),dchan);
} else {
if((state_val_29992 === (14))){
var inst_29977 = (state_29991[(8)]);
var inst_29982 = cljs.core.apply.call(null,f,inst_29977);
var state_29991__$1 = state_29991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29991__$1,(16),out,inst_29982);
} else {
if((state_val_29992 === (16))){
var inst_29984 = (state_29991[(2)]);
var state_29991__$1 = (function (){var statearr_30009 = state_29991;
(statearr_30009[(12)] = inst_29984);

return statearr_30009;
})();
var statearr_30010_30032 = state_29991__$1;
(statearr_30010_30032[(2)] = null);

(statearr_30010_30032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (10))){
var inst_29959 = (state_29991[(2)]);
var inst_29960 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29991__$1 = (function (){var statearr_30011 = state_29991;
(statearr_30011[(13)] = inst_29959);

return statearr_30011;
})();
var statearr_30012_30033 = state_29991__$1;
(statearr_30012_30033[(2)] = inst_29960);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29991__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (8))){
var inst_29973 = (state_29991[(2)]);
var state_29991__$1 = state_29991;
var statearr_30013_30034 = state_29991__$1;
(statearr_30013_30034[(2)] = inst_29973);

(statearr_30013_30034[(1)] = (5));


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
});})(c__28680__auto___30019,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28589__auto__,c__28680__auto___30019,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28590__auto__ = null;
var cljs$core$async$state_machine__28590__auto____0 = (function (){
var statearr_30014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30014[(0)] = cljs$core$async$state_machine__28590__auto__);

(statearr_30014[(1)] = (1));

return statearr_30014;
});
var cljs$core$async$state_machine__28590__auto____1 = (function (state_29991){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_29991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e30015){if((e30015 instanceof Object)){
var ex__28593__auto__ = e30015;
var statearr_30016_30035 = state_29991;
(statearr_30016_30035[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30036 = state_29991;
state_29991 = G__30036;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$state_machine__28590__auto__ = function(state_29991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28590__auto____1.call(this,state_29991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28590__auto____0;
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28590__auto____1;
return cljs$core$async$state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___30019,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28682__auto__ = (function (){var statearr_30017 = f__28681__auto__.call(null);
(statearr_30017[(6)] = c__28680__auto___30019);

return statearr_30017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___30019,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30039 = arguments.length;
switch (G__30039) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28680__auto___30093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___30093,out){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___30093,out){
return (function (state_30071){
var state_val_30072 = (state_30071[(1)]);
if((state_val_30072 === (7))){
var inst_30050 = (state_30071[(7)]);
var inst_30051 = (state_30071[(8)]);
var inst_30050__$1 = (state_30071[(2)]);
var inst_30051__$1 = cljs.core.nth.call(null,inst_30050__$1,(0),null);
var inst_30052 = cljs.core.nth.call(null,inst_30050__$1,(1),null);
var inst_30053 = (inst_30051__$1 == null);
var state_30071__$1 = (function (){var statearr_30073 = state_30071;
(statearr_30073[(7)] = inst_30050__$1);

(statearr_30073[(8)] = inst_30051__$1);

(statearr_30073[(9)] = inst_30052);

return statearr_30073;
})();
if(cljs.core.truth_(inst_30053)){
var statearr_30074_30094 = state_30071__$1;
(statearr_30074_30094[(1)] = (8));

} else {
var statearr_30075_30095 = state_30071__$1;
(statearr_30075_30095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (1))){
var inst_30040 = cljs.core.vec.call(null,chs);
var inst_30041 = inst_30040;
var state_30071__$1 = (function (){var statearr_30076 = state_30071;
(statearr_30076[(10)] = inst_30041);

return statearr_30076;
})();
var statearr_30077_30096 = state_30071__$1;
(statearr_30077_30096[(2)] = null);

(statearr_30077_30096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (4))){
var inst_30041 = (state_30071[(10)]);
var state_30071__$1 = state_30071;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30071__$1,(7),inst_30041);
} else {
if((state_val_30072 === (6))){
var inst_30067 = (state_30071[(2)]);
var state_30071__$1 = state_30071;
var statearr_30078_30097 = state_30071__$1;
(statearr_30078_30097[(2)] = inst_30067);

(statearr_30078_30097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (3))){
var inst_30069 = (state_30071[(2)]);
var state_30071__$1 = state_30071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30071__$1,inst_30069);
} else {
if((state_val_30072 === (2))){
var inst_30041 = (state_30071[(10)]);
var inst_30043 = cljs.core.count.call(null,inst_30041);
var inst_30044 = (inst_30043 > (0));
var state_30071__$1 = state_30071;
if(cljs.core.truth_(inst_30044)){
var statearr_30080_30098 = state_30071__$1;
(statearr_30080_30098[(1)] = (4));

} else {
var statearr_30081_30099 = state_30071__$1;
(statearr_30081_30099[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (11))){
var inst_30041 = (state_30071[(10)]);
var inst_30060 = (state_30071[(2)]);
var tmp30079 = inst_30041;
var inst_30041__$1 = tmp30079;
var state_30071__$1 = (function (){var statearr_30082 = state_30071;
(statearr_30082[(11)] = inst_30060);

(statearr_30082[(10)] = inst_30041__$1);

return statearr_30082;
})();
var statearr_30083_30100 = state_30071__$1;
(statearr_30083_30100[(2)] = null);

(statearr_30083_30100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (9))){
var inst_30051 = (state_30071[(8)]);
var state_30071__$1 = state_30071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30071__$1,(11),out,inst_30051);
} else {
if((state_val_30072 === (5))){
var inst_30065 = cljs.core.async.close_BANG_.call(null,out);
var state_30071__$1 = state_30071;
var statearr_30084_30101 = state_30071__$1;
(statearr_30084_30101[(2)] = inst_30065);

(statearr_30084_30101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (10))){
var inst_30063 = (state_30071[(2)]);
var state_30071__$1 = state_30071;
var statearr_30085_30102 = state_30071__$1;
(statearr_30085_30102[(2)] = inst_30063);

(statearr_30085_30102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (8))){
var inst_30041 = (state_30071[(10)]);
var inst_30050 = (state_30071[(7)]);
var inst_30051 = (state_30071[(8)]);
var inst_30052 = (state_30071[(9)]);
var inst_30055 = (function (){var cs = inst_30041;
var vec__30046 = inst_30050;
var v = inst_30051;
var c = inst_30052;
return ((function (cs,vec__30046,v,c,inst_30041,inst_30050,inst_30051,inst_30052,state_val_30072,c__28680__auto___30093,out){
return (function (p1__30037_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30037_SHARP_);
});
;})(cs,vec__30046,v,c,inst_30041,inst_30050,inst_30051,inst_30052,state_val_30072,c__28680__auto___30093,out))
})();
var inst_30056 = cljs.core.filterv.call(null,inst_30055,inst_30041);
var inst_30041__$1 = inst_30056;
var state_30071__$1 = (function (){var statearr_30086 = state_30071;
(statearr_30086[(10)] = inst_30041__$1);

return statearr_30086;
})();
var statearr_30087_30103 = state_30071__$1;
(statearr_30087_30103[(2)] = null);

(statearr_30087_30103[(1)] = (2));


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
});})(c__28680__auto___30093,out))
;
return ((function (switch__28589__auto__,c__28680__auto___30093,out){
return (function() {
var cljs$core$async$state_machine__28590__auto__ = null;
var cljs$core$async$state_machine__28590__auto____0 = (function (){
var statearr_30088 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30088[(0)] = cljs$core$async$state_machine__28590__auto__);

(statearr_30088[(1)] = (1));

return statearr_30088;
});
var cljs$core$async$state_machine__28590__auto____1 = (function (state_30071){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_30071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e30089){if((e30089 instanceof Object)){
var ex__28593__auto__ = e30089;
var statearr_30090_30104 = state_30071;
(statearr_30090_30104[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30105 = state_30071;
state_30071 = G__30105;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$state_machine__28590__auto__ = function(state_30071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28590__auto____1.call(this,state_30071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28590__auto____0;
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28590__auto____1;
return cljs$core$async$state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___30093,out))
})();
var state__28682__auto__ = (function (){var statearr_30091 = f__28681__auto__.call(null);
(statearr_30091[(6)] = c__28680__auto___30093);

return statearr_30091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___30093,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30107 = arguments.length;
switch (G__30107) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28680__auto___30152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___30152,out){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___30152,out){
return (function (state_30131){
var state_val_30132 = (state_30131[(1)]);
if((state_val_30132 === (7))){
var inst_30113 = (state_30131[(7)]);
var inst_30113__$1 = (state_30131[(2)]);
var inst_30114 = (inst_30113__$1 == null);
var inst_30115 = cljs.core.not.call(null,inst_30114);
var state_30131__$1 = (function (){var statearr_30133 = state_30131;
(statearr_30133[(7)] = inst_30113__$1);

return statearr_30133;
})();
if(inst_30115){
var statearr_30134_30153 = state_30131__$1;
(statearr_30134_30153[(1)] = (8));

} else {
var statearr_30135_30154 = state_30131__$1;
(statearr_30135_30154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (1))){
var inst_30108 = (0);
var state_30131__$1 = (function (){var statearr_30136 = state_30131;
(statearr_30136[(8)] = inst_30108);

return statearr_30136;
})();
var statearr_30137_30155 = state_30131__$1;
(statearr_30137_30155[(2)] = null);

(statearr_30137_30155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (4))){
var state_30131__$1 = state_30131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30131__$1,(7),ch);
} else {
if((state_val_30132 === (6))){
var inst_30126 = (state_30131[(2)]);
var state_30131__$1 = state_30131;
var statearr_30138_30156 = state_30131__$1;
(statearr_30138_30156[(2)] = inst_30126);

(statearr_30138_30156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (3))){
var inst_30128 = (state_30131[(2)]);
var inst_30129 = cljs.core.async.close_BANG_.call(null,out);
var state_30131__$1 = (function (){var statearr_30139 = state_30131;
(statearr_30139[(9)] = inst_30128);

return statearr_30139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30131__$1,inst_30129);
} else {
if((state_val_30132 === (2))){
var inst_30108 = (state_30131[(8)]);
var inst_30110 = (inst_30108 < n);
var state_30131__$1 = state_30131;
if(cljs.core.truth_(inst_30110)){
var statearr_30140_30157 = state_30131__$1;
(statearr_30140_30157[(1)] = (4));

} else {
var statearr_30141_30158 = state_30131__$1;
(statearr_30141_30158[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (11))){
var inst_30108 = (state_30131[(8)]);
var inst_30118 = (state_30131[(2)]);
var inst_30119 = (inst_30108 + (1));
var inst_30108__$1 = inst_30119;
var state_30131__$1 = (function (){var statearr_30142 = state_30131;
(statearr_30142[(8)] = inst_30108__$1);

(statearr_30142[(10)] = inst_30118);

return statearr_30142;
})();
var statearr_30143_30159 = state_30131__$1;
(statearr_30143_30159[(2)] = null);

(statearr_30143_30159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (9))){
var state_30131__$1 = state_30131;
var statearr_30144_30160 = state_30131__$1;
(statearr_30144_30160[(2)] = null);

(statearr_30144_30160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (5))){
var state_30131__$1 = state_30131;
var statearr_30145_30161 = state_30131__$1;
(statearr_30145_30161[(2)] = null);

(statearr_30145_30161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (10))){
var inst_30123 = (state_30131[(2)]);
var state_30131__$1 = state_30131;
var statearr_30146_30162 = state_30131__$1;
(statearr_30146_30162[(2)] = inst_30123);

(statearr_30146_30162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (8))){
var inst_30113 = (state_30131[(7)]);
var state_30131__$1 = state_30131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30131__$1,(11),out,inst_30113);
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
});})(c__28680__auto___30152,out))
;
return ((function (switch__28589__auto__,c__28680__auto___30152,out){
return (function() {
var cljs$core$async$state_machine__28590__auto__ = null;
var cljs$core$async$state_machine__28590__auto____0 = (function (){
var statearr_30147 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30147[(0)] = cljs$core$async$state_machine__28590__auto__);

(statearr_30147[(1)] = (1));

return statearr_30147;
});
var cljs$core$async$state_machine__28590__auto____1 = (function (state_30131){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_30131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e30148){if((e30148 instanceof Object)){
var ex__28593__auto__ = e30148;
var statearr_30149_30163 = state_30131;
(statearr_30149_30163[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30164 = state_30131;
state_30131 = G__30164;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$state_machine__28590__auto__ = function(state_30131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28590__auto____1.call(this,state_30131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28590__auto____0;
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28590__auto____1;
return cljs$core$async$state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___30152,out))
})();
var state__28682__auto__ = (function (){var statearr_30150 = f__28681__auto__.call(null);
(statearr_30150[(6)] = c__28680__auto___30152);

return statearr_30150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___30152,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30166 = (function (f,ch,meta30167){
this.f = f;
this.ch = ch;
this.meta30167 = meta30167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30168,meta30167__$1){
var self__ = this;
var _30168__$1 = this;
return (new cljs.core.async.t_cljs$core$async30166(self__.f,self__.ch,meta30167__$1));
});

cljs.core.async.t_cljs$core$async30166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30168){
var self__ = this;
var _30168__$1 = this;
return self__.meta30167;
});

cljs.core.async.t_cljs$core$async30166.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30166.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30166.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30166.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30166.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30169 = (function (f,ch,meta30167,_,fn1,meta30170){
this.f = f;
this.ch = ch;
this.meta30167 = meta30167;
this._ = _;
this.fn1 = fn1;
this.meta30170 = meta30170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30171,meta30170__$1){
var self__ = this;
var _30171__$1 = this;
return (new cljs.core.async.t_cljs$core$async30169(self__.f,self__.ch,self__.meta30167,self__._,self__.fn1,meta30170__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30169.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30171){
var self__ = this;
var _30171__$1 = this;
return self__.meta30170;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30169.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30169.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30169.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30169.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30165_SHARP_){
return f1.call(null,(((p1__30165_SHARP_ == null))?null:self__.f.call(null,p1__30165_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30169.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30167","meta30167",-1886528742,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30166","cljs.core.async/t_cljs$core$async30166",-463181430,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30170","meta30170",-471289741,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30169.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30169";

cljs.core.async.t_cljs$core$async30169.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30169");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30169.
 */
cljs.core.async.__GT_t_cljs$core$async30169 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30169(f__$1,ch__$1,meta30167__$1,___$2,fn1__$1,meta30170){
return (new cljs.core.async.t_cljs$core$async30169(f__$1,ch__$1,meta30167__$1,___$2,fn1__$1,meta30170));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30169(self__.f,self__.ch,self__.meta30167,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30166.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30166.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30167","meta30167",-1886528742,null)], null);
});

cljs.core.async.t_cljs$core$async30166.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30166";

cljs.core.async.t_cljs$core$async30166.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30166");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30166.
 */
cljs.core.async.__GT_t_cljs$core$async30166 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30166(f__$1,ch__$1,meta30167){
return (new cljs.core.async.t_cljs$core$async30166(f__$1,ch__$1,meta30167));
});

}

return (new cljs.core.async.t_cljs$core$async30166(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30172 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30172 = (function (f,ch,meta30173){
this.f = f;
this.ch = ch;
this.meta30173 = meta30173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30174,meta30173__$1){
var self__ = this;
var _30174__$1 = this;
return (new cljs.core.async.t_cljs$core$async30172(self__.f,self__.ch,meta30173__$1));
});

cljs.core.async.t_cljs$core$async30172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30174){
var self__ = this;
var _30174__$1 = this;
return self__.meta30173;
});

cljs.core.async.t_cljs$core$async30172.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30172.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30172.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30172.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30172.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30172.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30173","meta30173",2008999759,null)], null);
});

cljs.core.async.t_cljs$core$async30172.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30172";

cljs.core.async.t_cljs$core$async30172.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30172");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30172.
 */
cljs.core.async.__GT_t_cljs$core$async30172 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30172(f__$1,ch__$1,meta30173){
return (new cljs.core.async.t_cljs$core$async30172(f__$1,ch__$1,meta30173));
});

}

return (new cljs.core.async.t_cljs$core$async30172(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30175 = (function (p,ch,meta30176){
this.p = p;
this.ch = ch;
this.meta30176 = meta30176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30177,meta30176__$1){
var self__ = this;
var _30177__$1 = this;
return (new cljs.core.async.t_cljs$core$async30175(self__.p,self__.ch,meta30176__$1));
});

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30177){
var self__ = this;
var _30177__$1 = this;
return self__.meta30176;
});

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30175.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30176","meta30176",-94195733,null)], null);
});

cljs.core.async.t_cljs$core$async30175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30175";

cljs.core.async.t_cljs$core$async30175.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30175");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30175.
 */
cljs.core.async.__GT_t_cljs$core$async30175 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30175(p__$1,ch__$1,meta30176){
return (new cljs.core.async.t_cljs$core$async30175(p__$1,ch__$1,meta30176));
});

}

return (new cljs.core.async.t_cljs$core$async30175(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30179 = arguments.length;
switch (G__30179) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28680__auto___30219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___30219,out){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___30219,out){
return (function (state_30200){
var state_val_30201 = (state_30200[(1)]);
if((state_val_30201 === (7))){
var inst_30196 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
var statearr_30202_30220 = state_30200__$1;
(statearr_30202_30220[(2)] = inst_30196);

(statearr_30202_30220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (1))){
var state_30200__$1 = state_30200;
var statearr_30203_30221 = state_30200__$1;
(statearr_30203_30221[(2)] = null);

(statearr_30203_30221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (4))){
var inst_30182 = (state_30200[(7)]);
var inst_30182__$1 = (state_30200[(2)]);
var inst_30183 = (inst_30182__$1 == null);
var state_30200__$1 = (function (){var statearr_30204 = state_30200;
(statearr_30204[(7)] = inst_30182__$1);

return statearr_30204;
})();
if(cljs.core.truth_(inst_30183)){
var statearr_30205_30222 = state_30200__$1;
(statearr_30205_30222[(1)] = (5));

} else {
var statearr_30206_30223 = state_30200__$1;
(statearr_30206_30223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (6))){
var inst_30182 = (state_30200[(7)]);
var inst_30187 = p.call(null,inst_30182);
var state_30200__$1 = state_30200;
if(cljs.core.truth_(inst_30187)){
var statearr_30207_30224 = state_30200__$1;
(statearr_30207_30224[(1)] = (8));

} else {
var statearr_30208_30225 = state_30200__$1;
(statearr_30208_30225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (3))){
var inst_30198 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30200__$1,inst_30198);
} else {
if((state_val_30201 === (2))){
var state_30200__$1 = state_30200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30200__$1,(4),ch);
} else {
if((state_val_30201 === (11))){
var inst_30190 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
var statearr_30209_30226 = state_30200__$1;
(statearr_30209_30226[(2)] = inst_30190);

(statearr_30209_30226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (9))){
var state_30200__$1 = state_30200;
var statearr_30210_30227 = state_30200__$1;
(statearr_30210_30227[(2)] = null);

(statearr_30210_30227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (5))){
var inst_30185 = cljs.core.async.close_BANG_.call(null,out);
var state_30200__$1 = state_30200;
var statearr_30211_30228 = state_30200__$1;
(statearr_30211_30228[(2)] = inst_30185);

(statearr_30211_30228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (10))){
var inst_30193 = (state_30200[(2)]);
var state_30200__$1 = (function (){var statearr_30212 = state_30200;
(statearr_30212[(8)] = inst_30193);

return statearr_30212;
})();
var statearr_30213_30229 = state_30200__$1;
(statearr_30213_30229[(2)] = null);

(statearr_30213_30229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (8))){
var inst_30182 = (state_30200[(7)]);
var state_30200__$1 = state_30200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30200__$1,(11),out,inst_30182);
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
});})(c__28680__auto___30219,out))
;
return ((function (switch__28589__auto__,c__28680__auto___30219,out){
return (function() {
var cljs$core$async$state_machine__28590__auto__ = null;
var cljs$core$async$state_machine__28590__auto____0 = (function (){
var statearr_30214 = [null,null,null,null,null,null,null,null,null];
(statearr_30214[(0)] = cljs$core$async$state_machine__28590__auto__);

(statearr_30214[(1)] = (1));

return statearr_30214;
});
var cljs$core$async$state_machine__28590__auto____1 = (function (state_30200){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_30200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e30215){if((e30215 instanceof Object)){
var ex__28593__auto__ = e30215;
var statearr_30216_30230 = state_30200;
(statearr_30216_30230[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30231 = state_30200;
state_30200 = G__30231;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$state_machine__28590__auto__ = function(state_30200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28590__auto____1.call(this,state_30200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28590__auto____0;
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28590__auto____1;
return cljs$core$async$state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___30219,out))
})();
var state__28682__auto__ = (function (){var statearr_30217 = f__28681__auto__.call(null);
(statearr_30217[(6)] = c__28680__auto___30219);

return statearr_30217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___30219,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30233 = arguments.length;
switch (G__30233) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28680__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto__){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto__){
return (function (state_30296){
var state_val_30297 = (state_30296[(1)]);
if((state_val_30297 === (7))){
var inst_30292 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30298_30336 = state_30296__$1;
(statearr_30298_30336[(2)] = inst_30292);

(statearr_30298_30336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (20))){
var inst_30262 = (state_30296[(7)]);
var inst_30273 = (state_30296[(2)]);
var inst_30274 = cljs.core.next.call(null,inst_30262);
var inst_30248 = inst_30274;
var inst_30249 = null;
var inst_30250 = (0);
var inst_30251 = (0);
var state_30296__$1 = (function (){var statearr_30299 = state_30296;
(statearr_30299[(8)] = inst_30250);

(statearr_30299[(9)] = inst_30249);

(statearr_30299[(10)] = inst_30251);

(statearr_30299[(11)] = inst_30273);

(statearr_30299[(12)] = inst_30248);

return statearr_30299;
})();
var statearr_30300_30337 = state_30296__$1;
(statearr_30300_30337[(2)] = null);

(statearr_30300_30337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (1))){
var state_30296__$1 = state_30296;
var statearr_30301_30338 = state_30296__$1;
(statearr_30301_30338[(2)] = null);

(statearr_30301_30338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (4))){
var inst_30237 = (state_30296[(13)]);
var inst_30237__$1 = (state_30296[(2)]);
var inst_30238 = (inst_30237__$1 == null);
var state_30296__$1 = (function (){var statearr_30302 = state_30296;
(statearr_30302[(13)] = inst_30237__$1);

return statearr_30302;
})();
if(cljs.core.truth_(inst_30238)){
var statearr_30303_30339 = state_30296__$1;
(statearr_30303_30339[(1)] = (5));

} else {
var statearr_30304_30340 = state_30296__$1;
(statearr_30304_30340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (15))){
var state_30296__$1 = state_30296;
var statearr_30308_30341 = state_30296__$1;
(statearr_30308_30341[(2)] = null);

(statearr_30308_30341[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (21))){
var state_30296__$1 = state_30296;
var statearr_30309_30342 = state_30296__$1;
(statearr_30309_30342[(2)] = null);

(statearr_30309_30342[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (13))){
var inst_30250 = (state_30296[(8)]);
var inst_30249 = (state_30296[(9)]);
var inst_30251 = (state_30296[(10)]);
var inst_30248 = (state_30296[(12)]);
var inst_30258 = (state_30296[(2)]);
var inst_30259 = (inst_30251 + (1));
var tmp30305 = inst_30250;
var tmp30306 = inst_30249;
var tmp30307 = inst_30248;
var inst_30248__$1 = tmp30307;
var inst_30249__$1 = tmp30306;
var inst_30250__$1 = tmp30305;
var inst_30251__$1 = inst_30259;
var state_30296__$1 = (function (){var statearr_30310 = state_30296;
(statearr_30310[(8)] = inst_30250__$1);

(statearr_30310[(9)] = inst_30249__$1);

(statearr_30310[(10)] = inst_30251__$1);

(statearr_30310[(14)] = inst_30258);

(statearr_30310[(12)] = inst_30248__$1);

return statearr_30310;
})();
var statearr_30311_30343 = state_30296__$1;
(statearr_30311_30343[(2)] = null);

(statearr_30311_30343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (22))){
var state_30296__$1 = state_30296;
var statearr_30312_30344 = state_30296__$1;
(statearr_30312_30344[(2)] = null);

(statearr_30312_30344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (6))){
var inst_30237 = (state_30296[(13)]);
var inst_30246 = f.call(null,inst_30237);
var inst_30247 = cljs.core.seq.call(null,inst_30246);
var inst_30248 = inst_30247;
var inst_30249 = null;
var inst_30250 = (0);
var inst_30251 = (0);
var state_30296__$1 = (function (){var statearr_30313 = state_30296;
(statearr_30313[(8)] = inst_30250);

(statearr_30313[(9)] = inst_30249);

(statearr_30313[(10)] = inst_30251);

(statearr_30313[(12)] = inst_30248);

return statearr_30313;
})();
var statearr_30314_30345 = state_30296__$1;
(statearr_30314_30345[(2)] = null);

(statearr_30314_30345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (17))){
var inst_30262 = (state_30296[(7)]);
var inst_30266 = cljs.core.chunk_first.call(null,inst_30262);
var inst_30267 = cljs.core.chunk_rest.call(null,inst_30262);
var inst_30268 = cljs.core.count.call(null,inst_30266);
var inst_30248 = inst_30267;
var inst_30249 = inst_30266;
var inst_30250 = inst_30268;
var inst_30251 = (0);
var state_30296__$1 = (function (){var statearr_30315 = state_30296;
(statearr_30315[(8)] = inst_30250);

(statearr_30315[(9)] = inst_30249);

(statearr_30315[(10)] = inst_30251);

(statearr_30315[(12)] = inst_30248);

return statearr_30315;
})();
var statearr_30316_30346 = state_30296__$1;
(statearr_30316_30346[(2)] = null);

(statearr_30316_30346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (3))){
var inst_30294 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30296__$1,inst_30294);
} else {
if((state_val_30297 === (12))){
var inst_30282 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30317_30347 = state_30296__$1;
(statearr_30317_30347[(2)] = inst_30282);

(statearr_30317_30347[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (2))){
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30296__$1,(4),in$);
} else {
if((state_val_30297 === (23))){
var inst_30290 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30318_30348 = state_30296__$1;
(statearr_30318_30348[(2)] = inst_30290);

(statearr_30318_30348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (19))){
var inst_30277 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30319_30349 = state_30296__$1;
(statearr_30319_30349[(2)] = inst_30277);

(statearr_30319_30349[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (11))){
var inst_30262 = (state_30296[(7)]);
var inst_30248 = (state_30296[(12)]);
var inst_30262__$1 = cljs.core.seq.call(null,inst_30248);
var state_30296__$1 = (function (){var statearr_30320 = state_30296;
(statearr_30320[(7)] = inst_30262__$1);

return statearr_30320;
})();
if(inst_30262__$1){
var statearr_30321_30350 = state_30296__$1;
(statearr_30321_30350[(1)] = (14));

} else {
var statearr_30322_30351 = state_30296__$1;
(statearr_30322_30351[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (9))){
var inst_30284 = (state_30296[(2)]);
var inst_30285 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30296__$1 = (function (){var statearr_30323 = state_30296;
(statearr_30323[(15)] = inst_30284);

return statearr_30323;
})();
if(cljs.core.truth_(inst_30285)){
var statearr_30324_30352 = state_30296__$1;
(statearr_30324_30352[(1)] = (21));

} else {
var statearr_30325_30353 = state_30296__$1;
(statearr_30325_30353[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (5))){
var inst_30240 = cljs.core.async.close_BANG_.call(null,out);
var state_30296__$1 = state_30296;
var statearr_30326_30354 = state_30296__$1;
(statearr_30326_30354[(2)] = inst_30240);

(statearr_30326_30354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (14))){
var inst_30262 = (state_30296[(7)]);
var inst_30264 = cljs.core.chunked_seq_QMARK_.call(null,inst_30262);
var state_30296__$1 = state_30296;
if(inst_30264){
var statearr_30327_30355 = state_30296__$1;
(statearr_30327_30355[(1)] = (17));

} else {
var statearr_30328_30356 = state_30296__$1;
(statearr_30328_30356[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (16))){
var inst_30280 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30329_30357 = state_30296__$1;
(statearr_30329_30357[(2)] = inst_30280);

(statearr_30329_30357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (10))){
var inst_30249 = (state_30296[(9)]);
var inst_30251 = (state_30296[(10)]);
var inst_30256 = cljs.core._nth.call(null,inst_30249,inst_30251);
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30296__$1,(13),out,inst_30256);
} else {
if((state_val_30297 === (18))){
var inst_30262 = (state_30296[(7)]);
var inst_30271 = cljs.core.first.call(null,inst_30262);
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30296__$1,(20),out,inst_30271);
} else {
if((state_val_30297 === (8))){
var inst_30250 = (state_30296[(8)]);
var inst_30251 = (state_30296[(10)]);
var inst_30253 = (inst_30251 < inst_30250);
var inst_30254 = inst_30253;
var state_30296__$1 = state_30296;
if(cljs.core.truth_(inst_30254)){
var statearr_30330_30358 = state_30296__$1;
(statearr_30330_30358[(1)] = (10));

} else {
var statearr_30331_30359 = state_30296__$1;
(statearr_30331_30359[(1)] = (11));

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
});})(c__28680__auto__))
;
return ((function (switch__28589__auto__,c__28680__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28590__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28590__auto____0 = (function (){
var statearr_30332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30332[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28590__auto__);

(statearr_30332[(1)] = (1));

return statearr_30332;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28590__auto____1 = (function (state_30296){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_30296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e30333){if((e30333 instanceof Object)){
var ex__28593__auto__ = e30333;
var statearr_30334_30360 = state_30296;
(statearr_30334_30360[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30361 = state_30296;
state_30296 = G__30361;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28590__auto__ = function(state_30296){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28590__auto____1.call(this,state_30296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28590__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28590__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto__))
})();
var state__28682__auto__ = (function (){var statearr_30335 = f__28681__auto__.call(null);
(statearr_30335[(6)] = c__28680__auto__);

return statearr_30335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto__))
);

return c__28680__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30363 = arguments.length;
switch (G__30363) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30366 = arguments.length;
switch (G__30366) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30369 = arguments.length;
switch (G__30369) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28680__auto___30416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___30416,out){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___30416,out){
return (function (state_30393){
var state_val_30394 = (state_30393[(1)]);
if((state_val_30394 === (7))){
var inst_30388 = (state_30393[(2)]);
var state_30393__$1 = state_30393;
var statearr_30395_30417 = state_30393__$1;
(statearr_30395_30417[(2)] = inst_30388);

(statearr_30395_30417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30394 === (1))){
var inst_30370 = null;
var state_30393__$1 = (function (){var statearr_30396 = state_30393;
(statearr_30396[(7)] = inst_30370);

return statearr_30396;
})();
var statearr_30397_30418 = state_30393__$1;
(statearr_30397_30418[(2)] = null);

(statearr_30397_30418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30394 === (4))){
var inst_30373 = (state_30393[(8)]);
var inst_30373__$1 = (state_30393[(2)]);
var inst_30374 = (inst_30373__$1 == null);
var inst_30375 = cljs.core.not.call(null,inst_30374);
var state_30393__$1 = (function (){var statearr_30398 = state_30393;
(statearr_30398[(8)] = inst_30373__$1);

return statearr_30398;
})();
if(inst_30375){
var statearr_30399_30419 = state_30393__$1;
(statearr_30399_30419[(1)] = (5));

} else {
var statearr_30400_30420 = state_30393__$1;
(statearr_30400_30420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30394 === (6))){
var state_30393__$1 = state_30393;
var statearr_30401_30421 = state_30393__$1;
(statearr_30401_30421[(2)] = null);

(statearr_30401_30421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30394 === (3))){
var inst_30390 = (state_30393[(2)]);
var inst_30391 = cljs.core.async.close_BANG_.call(null,out);
var state_30393__$1 = (function (){var statearr_30402 = state_30393;
(statearr_30402[(9)] = inst_30390);

return statearr_30402;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30393__$1,inst_30391);
} else {
if((state_val_30394 === (2))){
var state_30393__$1 = state_30393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30393__$1,(4),ch);
} else {
if((state_val_30394 === (11))){
var inst_30373 = (state_30393[(8)]);
var inst_30382 = (state_30393[(2)]);
var inst_30370 = inst_30373;
var state_30393__$1 = (function (){var statearr_30403 = state_30393;
(statearr_30403[(10)] = inst_30382);

(statearr_30403[(7)] = inst_30370);

return statearr_30403;
})();
var statearr_30404_30422 = state_30393__$1;
(statearr_30404_30422[(2)] = null);

(statearr_30404_30422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30394 === (9))){
var inst_30373 = (state_30393[(8)]);
var state_30393__$1 = state_30393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30393__$1,(11),out,inst_30373);
} else {
if((state_val_30394 === (5))){
var inst_30370 = (state_30393[(7)]);
var inst_30373 = (state_30393[(8)]);
var inst_30377 = cljs.core._EQ_.call(null,inst_30373,inst_30370);
var state_30393__$1 = state_30393;
if(inst_30377){
var statearr_30406_30423 = state_30393__$1;
(statearr_30406_30423[(1)] = (8));

} else {
var statearr_30407_30424 = state_30393__$1;
(statearr_30407_30424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30394 === (10))){
var inst_30385 = (state_30393[(2)]);
var state_30393__$1 = state_30393;
var statearr_30408_30425 = state_30393__$1;
(statearr_30408_30425[(2)] = inst_30385);

(statearr_30408_30425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30394 === (8))){
var inst_30370 = (state_30393[(7)]);
var tmp30405 = inst_30370;
var inst_30370__$1 = tmp30405;
var state_30393__$1 = (function (){var statearr_30409 = state_30393;
(statearr_30409[(7)] = inst_30370__$1);

return statearr_30409;
})();
var statearr_30410_30426 = state_30393__$1;
(statearr_30410_30426[(2)] = null);

(statearr_30410_30426[(1)] = (2));


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
});})(c__28680__auto___30416,out))
;
return ((function (switch__28589__auto__,c__28680__auto___30416,out){
return (function() {
var cljs$core$async$state_machine__28590__auto__ = null;
var cljs$core$async$state_machine__28590__auto____0 = (function (){
var statearr_30411 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30411[(0)] = cljs$core$async$state_machine__28590__auto__);

(statearr_30411[(1)] = (1));

return statearr_30411;
});
var cljs$core$async$state_machine__28590__auto____1 = (function (state_30393){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_30393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e30412){if((e30412 instanceof Object)){
var ex__28593__auto__ = e30412;
var statearr_30413_30427 = state_30393;
(statearr_30413_30427[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30428 = state_30393;
state_30393 = G__30428;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$state_machine__28590__auto__ = function(state_30393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28590__auto____1.call(this,state_30393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28590__auto____0;
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28590__auto____1;
return cljs$core$async$state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___30416,out))
})();
var state__28682__auto__ = (function (){var statearr_30414 = f__28681__auto__.call(null);
(statearr_30414[(6)] = c__28680__auto___30416);

return statearr_30414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___30416,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30430 = arguments.length;
switch (G__30430) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28680__auto___30496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___30496,out){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___30496,out){
return (function (state_30468){
var state_val_30469 = (state_30468[(1)]);
if((state_val_30469 === (7))){
var inst_30464 = (state_30468[(2)]);
var state_30468__$1 = state_30468;
var statearr_30470_30497 = state_30468__$1;
(statearr_30470_30497[(2)] = inst_30464);

(statearr_30470_30497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30469 === (1))){
var inst_30431 = (new Array(n));
var inst_30432 = inst_30431;
var inst_30433 = (0);
var state_30468__$1 = (function (){var statearr_30471 = state_30468;
(statearr_30471[(7)] = inst_30432);

(statearr_30471[(8)] = inst_30433);

return statearr_30471;
})();
var statearr_30472_30498 = state_30468__$1;
(statearr_30472_30498[(2)] = null);

(statearr_30472_30498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30469 === (4))){
var inst_30436 = (state_30468[(9)]);
var inst_30436__$1 = (state_30468[(2)]);
var inst_30437 = (inst_30436__$1 == null);
var inst_30438 = cljs.core.not.call(null,inst_30437);
var state_30468__$1 = (function (){var statearr_30473 = state_30468;
(statearr_30473[(9)] = inst_30436__$1);

return statearr_30473;
})();
if(inst_30438){
var statearr_30474_30499 = state_30468__$1;
(statearr_30474_30499[(1)] = (5));

} else {
var statearr_30475_30500 = state_30468__$1;
(statearr_30475_30500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30469 === (15))){
var inst_30458 = (state_30468[(2)]);
var state_30468__$1 = state_30468;
var statearr_30476_30501 = state_30468__$1;
(statearr_30476_30501[(2)] = inst_30458);

(statearr_30476_30501[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30469 === (13))){
var state_30468__$1 = state_30468;
var statearr_30477_30502 = state_30468__$1;
(statearr_30477_30502[(2)] = null);

(statearr_30477_30502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30469 === (6))){
var inst_30433 = (state_30468[(8)]);
var inst_30454 = (inst_30433 > (0));
var state_30468__$1 = state_30468;
if(cljs.core.truth_(inst_30454)){
var statearr_30478_30503 = state_30468__$1;
(statearr_30478_30503[(1)] = (12));

} else {
var statearr_30479_30504 = state_30468__$1;
(statearr_30479_30504[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30469 === (3))){
var inst_30466 = (state_30468[(2)]);
var state_30468__$1 = state_30468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30468__$1,inst_30466);
} else {
if((state_val_30469 === (12))){
var inst_30432 = (state_30468[(7)]);
var inst_30456 = cljs.core.vec.call(null,inst_30432);
var state_30468__$1 = state_30468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30468__$1,(15),out,inst_30456);
} else {
if((state_val_30469 === (2))){
var state_30468__$1 = state_30468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30468__$1,(4),ch);
} else {
if((state_val_30469 === (11))){
var inst_30448 = (state_30468[(2)]);
var inst_30449 = (new Array(n));
var inst_30432 = inst_30449;
var inst_30433 = (0);
var state_30468__$1 = (function (){var statearr_30480 = state_30468;
(statearr_30480[(10)] = inst_30448);

(statearr_30480[(7)] = inst_30432);

(statearr_30480[(8)] = inst_30433);

return statearr_30480;
})();
var statearr_30481_30505 = state_30468__$1;
(statearr_30481_30505[(2)] = null);

(statearr_30481_30505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30469 === (9))){
var inst_30432 = (state_30468[(7)]);
var inst_30446 = cljs.core.vec.call(null,inst_30432);
var state_30468__$1 = state_30468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30468__$1,(11),out,inst_30446);
} else {
if((state_val_30469 === (5))){
var inst_30436 = (state_30468[(9)]);
var inst_30441 = (state_30468[(11)]);
var inst_30432 = (state_30468[(7)]);
var inst_30433 = (state_30468[(8)]);
var inst_30440 = (inst_30432[inst_30433] = inst_30436);
var inst_30441__$1 = (inst_30433 + (1));
var inst_30442 = (inst_30441__$1 < n);
var state_30468__$1 = (function (){var statearr_30482 = state_30468;
(statearr_30482[(11)] = inst_30441__$1);

(statearr_30482[(12)] = inst_30440);

return statearr_30482;
})();
if(cljs.core.truth_(inst_30442)){
var statearr_30483_30506 = state_30468__$1;
(statearr_30483_30506[(1)] = (8));

} else {
var statearr_30484_30507 = state_30468__$1;
(statearr_30484_30507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30469 === (14))){
var inst_30461 = (state_30468[(2)]);
var inst_30462 = cljs.core.async.close_BANG_.call(null,out);
var state_30468__$1 = (function (){var statearr_30486 = state_30468;
(statearr_30486[(13)] = inst_30461);

return statearr_30486;
})();
var statearr_30487_30508 = state_30468__$1;
(statearr_30487_30508[(2)] = inst_30462);

(statearr_30487_30508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30469 === (10))){
var inst_30452 = (state_30468[(2)]);
var state_30468__$1 = state_30468;
var statearr_30488_30509 = state_30468__$1;
(statearr_30488_30509[(2)] = inst_30452);

(statearr_30488_30509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30469 === (8))){
var inst_30441 = (state_30468[(11)]);
var inst_30432 = (state_30468[(7)]);
var tmp30485 = inst_30432;
var inst_30432__$1 = tmp30485;
var inst_30433 = inst_30441;
var state_30468__$1 = (function (){var statearr_30489 = state_30468;
(statearr_30489[(7)] = inst_30432__$1);

(statearr_30489[(8)] = inst_30433);

return statearr_30489;
})();
var statearr_30490_30510 = state_30468__$1;
(statearr_30490_30510[(2)] = null);

(statearr_30490_30510[(1)] = (2));


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
});})(c__28680__auto___30496,out))
;
return ((function (switch__28589__auto__,c__28680__auto___30496,out){
return (function() {
var cljs$core$async$state_machine__28590__auto__ = null;
var cljs$core$async$state_machine__28590__auto____0 = (function (){
var statearr_30491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30491[(0)] = cljs$core$async$state_machine__28590__auto__);

(statearr_30491[(1)] = (1));

return statearr_30491;
});
var cljs$core$async$state_machine__28590__auto____1 = (function (state_30468){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_30468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e30492){if((e30492 instanceof Object)){
var ex__28593__auto__ = e30492;
var statearr_30493_30511 = state_30468;
(statearr_30493_30511[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30512 = state_30468;
state_30468 = G__30512;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$state_machine__28590__auto__ = function(state_30468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28590__auto____1.call(this,state_30468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28590__auto____0;
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28590__auto____1;
return cljs$core$async$state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___30496,out))
})();
var state__28682__auto__ = (function (){var statearr_30494 = f__28681__auto__.call(null);
(statearr_30494[(6)] = c__28680__auto___30496);

return statearr_30494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___30496,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30514 = arguments.length;
switch (G__30514) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28680__auto___30584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28680__auto___30584,out){
return (function (){
var f__28681__auto__ = (function (){var switch__28589__auto__ = ((function (c__28680__auto___30584,out){
return (function (state_30556){
var state_val_30557 = (state_30556[(1)]);
if((state_val_30557 === (7))){
var inst_30552 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
var statearr_30558_30585 = state_30556__$1;
(statearr_30558_30585[(2)] = inst_30552);

(statearr_30558_30585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (1))){
var inst_30515 = [];
var inst_30516 = inst_30515;
var inst_30517 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30556__$1 = (function (){var statearr_30559 = state_30556;
(statearr_30559[(7)] = inst_30517);

(statearr_30559[(8)] = inst_30516);

return statearr_30559;
})();
var statearr_30560_30586 = state_30556__$1;
(statearr_30560_30586[(2)] = null);

(statearr_30560_30586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (4))){
var inst_30520 = (state_30556[(9)]);
var inst_30520__$1 = (state_30556[(2)]);
var inst_30521 = (inst_30520__$1 == null);
var inst_30522 = cljs.core.not.call(null,inst_30521);
var state_30556__$1 = (function (){var statearr_30561 = state_30556;
(statearr_30561[(9)] = inst_30520__$1);

return statearr_30561;
})();
if(inst_30522){
var statearr_30562_30587 = state_30556__$1;
(statearr_30562_30587[(1)] = (5));

} else {
var statearr_30563_30588 = state_30556__$1;
(statearr_30563_30588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (15))){
var inst_30546 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
var statearr_30564_30589 = state_30556__$1;
(statearr_30564_30589[(2)] = inst_30546);

(statearr_30564_30589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (13))){
var state_30556__$1 = state_30556;
var statearr_30565_30590 = state_30556__$1;
(statearr_30565_30590[(2)] = null);

(statearr_30565_30590[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (6))){
var inst_30516 = (state_30556[(8)]);
var inst_30541 = inst_30516.length;
var inst_30542 = (inst_30541 > (0));
var state_30556__$1 = state_30556;
if(cljs.core.truth_(inst_30542)){
var statearr_30566_30591 = state_30556__$1;
(statearr_30566_30591[(1)] = (12));

} else {
var statearr_30567_30592 = state_30556__$1;
(statearr_30567_30592[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (3))){
var inst_30554 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30556__$1,inst_30554);
} else {
if((state_val_30557 === (12))){
var inst_30516 = (state_30556[(8)]);
var inst_30544 = cljs.core.vec.call(null,inst_30516);
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30556__$1,(15),out,inst_30544);
} else {
if((state_val_30557 === (2))){
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30556__$1,(4),ch);
} else {
if((state_val_30557 === (11))){
var inst_30524 = (state_30556[(10)]);
var inst_30520 = (state_30556[(9)]);
var inst_30534 = (state_30556[(2)]);
var inst_30535 = [];
var inst_30536 = inst_30535.push(inst_30520);
var inst_30516 = inst_30535;
var inst_30517 = inst_30524;
var state_30556__$1 = (function (){var statearr_30568 = state_30556;
(statearr_30568[(7)] = inst_30517);

(statearr_30568[(8)] = inst_30516);

(statearr_30568[(11)] = inst_30534);

(statearr_30568[(12)] = inst_30536);

return statearr_30568;
})();
var statearr_30569_30593 = state_30556__$1;
(statearr_30569_30593[(2)] = null);

(statearr_30569_30593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (9))){
var inst_30516 = (state_30556[(8)]);
var inst_30532 = cljs.core.vec.call(null,inst_30516);
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30556__$1,(11),out,inst_30532);
} else {
if((state_val_30557 === (5))){
var inst_30517 = (state_30556[(7)]);
var inst_30524 = (state_30556[(10)]);
var inst_30520 = (state_30556[(9)]);
var inst_30524__$1 = f.call(null,inst_30520);
var inst_30525 = cljs.core._EQ_.call(null,inst_30524__$1,inst_30517);
var inst_30526 = cljs.core.keyword_identical_QMARK_.call(null,inst_30517,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30527 = ((inst_30525) || (inst_30526));
var state_30556__$1 = (function (){var statearr_30570 = state_30556;
(statearr_30570[(10)] = inst_30524__$1);

return statearr_30570;
})();
if(cljs.core.truth_(inst_30527)){
var statearr_30571_30594 = state_30556__$1;
(statearr_30571_30594[(1)] = (8));

} else {
var statearr_30572_30595 = state_30556__$1;
(statearr_30572_30595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (14))){
var inst_30549 = (state_30556[(2)]);
var inst_30550 = cljs.core.async.close_BANG_.call(null,out);
var state_30556__$1 = (function (){var statearr_30574 = state_30556;
(statearr_30574[(13)] = inst_30549);

return statearr_30574;
})();
var statearr_30575_30596 = state_30556__$1;
(statearr_30575_30596[(2)] = inst_30550);

(statearr_30575_30596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (10))){
var inst_30539 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
var statearr_30576_30597 = state_30556__$1;
(statearr_30576_30597[(2)] = inst_30539);

(statearr_30576_30597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (8))){
var inst_30516 = (state_30556[(8)]);
var inst_30524 = (state_30556[(10)]);
var inst_30520 = (state_30556[(9)]);
var inst_30529 = inst_30516.push(inst_30520);
var tmp30573 = inst_30516;
var inst_30516__$1 = tmp30573;
var inst_30517 = inst_30524;
var state_30556__$1 = (function (){var statearr_30577 = state_30556;
(statearr_30577[(7)] = inst_30517);

(statearr_30577[(14)] = inst_30529);

(statearr_30577[(8)] = inst_30516__$1);

return statearr_30577;
})();
var statearr_30578_30598 = state_30556__$1;
(statearr_30578_30598[(2)] = null);

(statearr_30578_30598[(1)] = (2));


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
});})(c__28680__auto___30584,out))
;
return ((function (switch__28589__auto__,c__28680__auto___30584,out){
return (function() {
var cljs$core$async$state_machine__28590__auto__ = null;
var cljs$core$async$state_machine__28590__auto____0 = (function (){
var statearr_30579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30579[(0)] = cljs$core$async$state_machine__28590__auto__);

(statearr_30579[(1)] = (1));

return statearr_30579;
});
var cljs$core$async$state_machine__28590__auto____1 = (function (state_30556){
while(true){
var ret_value__28591__auto__ = (function (){try{while(true){
var result__28592__auto__ = switch__28589__auto__.call(null,state_30556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28592__auto__;
}
break;
}
}catch (e30580){if((e30580 instanceof Object)){
var ex__28593__auto__ = e30580;
var statearr_30581_30599 = state_30556;
(statearr_30581_30599[(5)] = ex__28593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30600 = state_30556;
state_30556 = G__30600;
continue;
} else {
return ret_value__28591__auto__;
}
break;
}
});
cljs$core$async$state_machine__28590__auto__ = function(state_30556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28590__auto____1.call(this,state_30556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28590__auto____0;
cljs$core$async$state_machine__28590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28590__auto____1;
return cljs$core$async$state_machine__28590__auto__;
})()
;})(switch__28589__auto__,c__28680__auto___30584,out))
})();
var state__28682__auto__ = (function (){var statearr_30582 = f__28681__auto__.call(null);
(statearr_30582[(6)] = c__28680__auto___30584);

return statearr_30582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28682__auto__);
});})(c__28680__auto___30584,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1530950265412
