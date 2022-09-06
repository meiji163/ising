// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ising.animate');
goog.require('cljs.core');
goog.require('ising.core');
goog.require('goog.dom');
if((typeof ising !== 'undefined') && (typeof ising.animate !== 'undefined') && (typeof ising.animate.app_state !== 'undefined')){
} else {
ising.animate.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
ising.animate.get_app_element = (function ising$animate$get_app_element(){
return goog.dom.getElement("app");
});
ising.animate.wpx = (250);
ising.animate.hpx = (250);
ising.animate.px_size = (2);
ising.animate.rand_update = (function ising$animate$rand_update(beta,H,grid){
var x = cljs.core.rand_int.call(null,ising.animate.wpx);
var y = cljs.core.rand_int.call(null,ising.animate.hpx);
ising.core.gibbs_update.call(null,grid,beta,H,x,y);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
ising.animate.rand_updateN = (function ising$animate$rand_updateN(beta,H,grid,n){

ising.animate.helper = (function ising$animate$rand_updateN_$_helper(updated,n__$1){
while(true){
if((n__$1 > (0))){
var p = ising.animate.rand_update.call(null,beta,H,grid);
var G__17920 = cljs.core.conj.call(null,updated,p);
var G__17921 = (n__$1 - (1));
updated = G__17920;
n__$1 = G__17921;
continue;
} else {
return updated;
}
break;
}
});

return ising.animate.helper.call(null,cljs.core.List.EMPTY,n);
});
ising.animate.draw_coord = (function ising$animate$draw_coord(ctx,grid,p){
var vec__17922 = p;
var x = cljs.core.nth.call(null,vec__17922,(0),null);
var y = cljs.core.nth.call(null,vec__17922,(1),null);
if(cljs.core.truth_((grid[x][y]))){
return ctx.fillRect((ising.animate.px_size * x),(ising.animate.px_size * y),ising.animate.px_size,ising.animate.px_size);
} else {
return ctx.clearRect((ising.animate.px_size * x),(ising.animate.px_size * y),ising.animate.px_size,ising.animate.px_size);
}
});
ising.animate.draw_grid = (function ising$animate$draw_grid(ctx,grid,coords){
var w_17925 = grid.length;
var h_17926 = (grid[(0)]).length;
ctx.save();

cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,ising.animate.draw_coord,ctx,grid),coords));

return ctx.restore();
});
ising.animate.running = cljs.core.atom.call(null,null);
ising.animate.beta = cljs.core.atom.call(null,0.5);
ising.animate.H = cljs.core.atom.call(null,0.0);
ising.animate.spins = ising.core.rand_spins.call(null,0.5,ising.animate.wpx,ising.animate.hpx);
ising.animate.ising_ctx = goog.dom.getElement("ising-canvas").getContext("2d");
(ising.animate.ising_ctx.fillStyle = "blue");
ising.animate.update_BANG_ = (function ising$animate$update_BANG_(){
if(cljs.core.truth_(cljs.core.deref.call(null,ising.animate.running))){
var updates = ising.animate.rand_updateN.call(null,cljs.core.deref.call(null,ising.animate.beta),cljs.core.deref.call(null,ising.animate.H),ising.animate.spins,(300));
setTimeout((function (){
return ising.animate.draw_grid.call(null,ising.animate.ising_ctx,ising.animate.spins,updates);
}),(8));

return window.requestAnimationFrame(ising.animate.update_BANG_);
} else {
return null;
}
});
ising.animate.get_input = (function ising$animate$get_input(id){
return parseFloat(goog.dom.getElement(id).value);
});
ising.animate.set_H = (function ising$animate$set_H(){
return cljs.core.swap_BANG_.call(null,ising.animate.H,(function (){
return ising.animate.get_input.call(null,"H");
}));
});
ising.animate.set_beta = (function ising$animate$set_beta(){
return cljs.core.swap_BANG_.call(null,ising.animate.beta,(function (){
return ising.animate.get_input.call(null,"beta");
}));
});
ising.animate.stop_BANG_ = (function ising$animate$stop_BANG_(){
return cljs.core.reset_BANG_.call(null,ising.animate.running,false);
});
ising.animate.init_BANG_ = (function ising$animate$init_BANG_(){
goog.dom.getElement("H").addEventListener("input",ising.animate.set_H);

goog.dom.getElement("beta").addEventListener("input",ising.animate.set_beta);

cljs.core.reset_BANG_.call(null,ising.animate.running,true);

return ising.animate.draw_grid.call(null,ising.animate.ising_ctx,ising.animate.spins,(function (){var iter__4652__auto__ = (function ising$animate$init_BANG__$_iter__17927(s__17928){
return (new cljs.core.LazySeq(null,(function (){
var s__17928__$1 = s__17928;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17928__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4648__auto__ = ((function (s__17928__$1,x,xs__6277__auto__,temp__5720__auto__){
return (function ising$animate$init_BANG__$_iter__17927_$_iter__17929(s__17930){
return (new cljs.core.LazySeq(null,((function (s__17928__$1,x,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__17930__$1 = s__17930;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__17930__$1);
if(temp__5720__auto____$1){
var s__17930__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17930__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__17930__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__17932 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__17931 = (0);
while(true){
if((i__17931 < size__4651__auto__)){
var y = cljs.core._nth.call(null,c__4650__auto__,i__17931);
cljs.core.chunk_append.call(null,b__17932,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__17933 = (i__17931 + (1));
i__17931 = G__17933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17932),ising$animate$init_BANG__$_iter__17927_$_iter__17929.call(null,cljs.core.chunk_rest.call(null,s__17930__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17932),null);
}
} else {
var y = cljs.core.first.call(null,s__17930__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),ising$animate$init_BANG__$_iter__17927_$_iter__17929.call(null,cljs.core.rest.call(null,s__17930__$2)));
}
} else {
return null;
}
break;
}
});})(s__17928__$1,x,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__17928__$1,x,xs__6277__auto__,temp__5720__auto__))
;
var fs__4649__auto__ = cljs.core.seq.call(null,iterys__4648__auto__.call(null,cljs.core.range.call(null,ising.animate.hpx)));
if(fs__4649__auto__){
return cljs.core.concat.call(null,fs__4649__auto__,ising$animate$init_BANG__$_iter__17927.call(null,cljs.core.rest.call(null,s__17928__$1)));
} else {
var G__17934 = cljs.core.rest.call(null,s__17928__$1);
s__17928__$1 = G__17934;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.range.call(null,ising.animate.wpx));
})());
});
ising.animate.start = (function ising$animate$start(){
ising.animate.init_BANG_.call(null);

return window.requestAnimationFrame(ising.animate.update_BANG_);
});
goog.exportSymbol('ising.animate.start', ising.animate.start);
ising.animate.on_reload = (function ising$animate$on_reload(){
return null;
});

//# sourceMappingURL=animate.js.map
