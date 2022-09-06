// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ising.core');
goog.require('cljs.core');
ising.core.make_grid = (function ising$core$make_grid(w,h){
var dims__4686__auto__ = (new cljs.core.List(null,h,null,(1),null));
var dimarray__4687__auto__ = (new Array(w));
var n__4741__auto___15252 = dimarray__4687__auto__.length;
var i__4688__auto___15253 = (0);
while(true){
if((i__4688__auto___15253 < n__4741__auto___15252)){
(dimarray__4687__auto__[i__4688__auto___15253] = cljs.core.apply.call(null,cljs.core.make_array,null,dims__4686__auto__));

var G__15254 = (i__4688__auto___15253 + (1));
i__4688__auto___15253 = G__15254;
continue;
} else {
}
break;
}

return dimarray__4687__auto__;
});
ising.core.rand_spin = (function ising$core$rand_spin(p){
var r = cljs.core.rand.call(null,1.0);
if((r < p)){
return true;
} else {
return null;
}
});
ising.core.rand_spins = (function ising$core$rand_spins(p,w,h){
ising.core.a = ising.core.make_grid.call(null,w,h);

var seq__15255_15267 = cljs.core.seq.call(null,cljs.core.range.call(null,w));
var chunk__15260_15268 = null;
var count__15261_15269 = (0);
var i__15262_15270 = (0);
while(true){
if((i__15262_15270 < count__15261_15269)){
var x_15271 = cljs.core._nth.call(null,chunk__15260_15268,i__15262_15270);
var seq__15263_15272 = cljs.core.seq.call(null,cljs.core.range.call(null,h));
var chunk__15264_15273 = null;
var count__15265_15274 = (0);
var i__15266_15275 = (0);
while(true){
if((i__15266_15275 < count__15265_15274)){
var y_15276 = cljs.core._nth.call(null,chunk__15264_15273,i__15266_15275);
(ising.core.a[x_15271][y_15276] = ising.core.rand_spin.call(null,p));


var G__15277 = seq__15263_15272;
var G__15278 = chunk__15264_15273;
var G__15279 = count__15265_15274;
var G__15280 = (i__15266_15275 + (1));
seq__15263_15272 = G__15277;
chunk__15264_15273 = G__15278;
count__15265_15274 = G__15279;
i__15266_15275 = G__15280;
continue;
} else {
var temp__5720__auto___15281 = cljs.core.seq.call(null,seq__15263_15272);
if(temp__5720__auto___15281){
var seq__15263_15282__$1 = temp__5720__auto___15281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15263_15282__$1)){
var c__4679__auto___15283 = cljs.core.chunk_first.call(null,seq__15263_15282__$1);
var G__15284 = cljs.core.chunk_rest.call(null,seq__15263_15282__$1);
var G__15285 = c__4679__auto___15283;
var G__15286 = cljs.core.count.call(null,c__4679__auto___15283);
var G__15287 = (0);
seq__15263_15272 = G__15284;
chunk__15264_15273 = G__15285;
count__15265_15274 = G__15286;
i__15266_15275 = G__15287;
continue;
} else {
var y_15288 = cljs.core.first.call(null,seq__15263_15282__$1);
(ising.core.a[x_15271][y_15288] = ising.core.rand_spin.call(null,p));


var G__15289 = cljs.core.next.call(null,seq__15263_15282__$1);
var G__15290 = null;
var G__15291 = (0);
var G__15292 = (0);
seq__15263_15272 = G__15289;
chunk__15264_15273 = G__15290;
count__15265_15274 = G__15291;
i__15266_15275 = G__15292;
continue;
}
} else {
}
}
break;
}

var G__15293 = seq__15255_15267;
var G__15294 = chunk__15260_15268;
var G__15295 = count__15261_15269;
var G__15296 = (i__15262_15270 + (1));
seq__15255_15267 = G__15293;
chunk__15260_15268 = G__15294;
count__15261_15269 = G__15295;
i__15262_15270 = G__15296;
continue;
} else {
var temp__5720__auto___15297 = cljs.core.seq.call(null,seq__15255_15267);
if(temp__5720__auto___15297){
var seq__15255_15298__$1 = temp__5720__auto___15297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15255_15298__$1)){
var c__4679__auto___15299 = cljs.core.chunk_first.call(null,seq__15255_15298__$1);
var G__15300 = cljs.core.chunk_rest.call(null,seq__15255_15298__$1);
var G__15301 = c__4679__auto___15299;
var G__15302 = cljs.core.count.call(null,c__4679__auto___15299);
var G__15303 = (0);
seq__15255_15267 = G__15300;
chunk__15260_15268 = G__15301;
count__15261_15269 = G__15302;
i__15262_15270 = G__15303;
continue;
} else {
var x_15304 = cljs.core.first.call(null,seq__15255_15298__$1);
var seq__15256_15305 = cljs.core.seq.call(null,cljs.core.range.call(null,h));
var chunk__15257_15306 = null;
var count__15258_15307 = (0);
var i__15259_15308 = (0);
while(true){
if((i__15259_15308 < count__15258_15307)){
var y_15309 = cljs.core._nth.call(null,chunk__15257_15306,i__15259_15308);
(ising.core.a[x_15304][y_15309] = ising.core.rand_spin.call(null,p));


var G__15310 = seq__15256_15305;
var G__15311 = chunk__15257_15306;
var G__15312 = count__15258_15307;
var G__15313 = (i__15259_15308 + (1));
seq__15256_15305 = G__15310;
chunk__15257_15306 = G__15311;
count__15258_15307 = G__15312;
i__15259_15308 = G__15313;
continue;
} else {
var temp__5720__auto___15314__$1 = cljs.core.seq.call(null,seq__15256_15305);
if(temp__5720__auto___15314__$1){
var seq__15256_15315__$1 = temp__5720__auto___15314__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15256_15315__$1)){
var c__4679__auto___15316 = cljs.core.chunk_first.call(null,seq__15256_15315__$1);
var G__15317 = cljs.core.chunk_rest.call(null,seq__15256_15315__$1);
var G__15318 = c__4679__auto___15316;
var G__15319 = cljs.core.count.call(null,c__4679__auto___15316);
var G__15320 = (0);
seq__15256_15305 = G__15317;
chunk__15257_15306 = G__15318;
count__15258_15307 = G__15319;
i__15259_15308 = G__15320;
continue;
} else {
var y_15321 = cljs.core.first.call(null,seq__15256_15315__$1);
(ising.core.a[x_15304][y_15321] = ising.core.rand_spin.call(null,p));


var G__15322 = cljs.core.next.call(null,seq__15256_15315__$1);
var G__15323 = null;
var G__15324 = (0);
var G__15325 = (0);
seq__15256_15305 = G__15322;
chunk__15257_15306 = G__15323;
count__15258_15307 = G__15324;
i__15259_15308 = G__15325;
continue;
}
} else {
}
}
break;
}

var G__15326 = cljs.core.next.call(null,seq__15255_15298__$1);
var G__15327 = null;
var G__15328 = (0);
var G__15329 = (0);
seq__15255_15267 = G__15326;
chunk__15260_15268 = G__15327;
count__15261_15269 = G__15328;
i__15262_15270 = G__15329;
continue;
}
} else {
}
}
break;
}

return ising.core.a;
});
ising.core.neighbors = (function ising$core$neighbors(grid,x,y){

var w = grid.length;
var h = (grid[(0)]).length;
var iter__4652__auto__ = (function ising$core$neighbors_$_iter__15330(s__15331){
return (new cljs.core.LazySeq(null,(function (){
var s__15331__$1 = s__15331;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15331__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var dx = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4648__auto__ = ((function (s__15331__$1,dx,xs__6277__auto__,temp__5720__auto__,w,h){
return (function ising$core$neighbors_$_iter__15330_$_iter__15332(s__15333){
return (new cljs.core.LazySeq(null,((function (s__15331__$1,dx,xs__6277__auto__,temp__5720__auto__,w,h){
return (function (){
var s__15333__$1 = s__15333;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__15333__$1);
if(temp__5720__auto____$1){
var s__15333__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15333__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__15333__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__15335 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__15334 = (0);
while(true){
if((i__15334 < size__4651__auto__)){
var dy = cljs.core._nth.call(null,c__4650__auto__,i__15334);
if(((cljs.core.not_EQ_.call(null,dx,(0))) || (cljs.core.not_EQ_.call(null,dy,(0))))){
cljs.core.chunk_append.call(null,b__15335,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mod.call(null,(dx + x),w),cljs.core.mod.call(null,(dy + y),h)],null)));

var G__15336 = (i__15334 + (1));
i__15334 = G__15336;
continue;
} else {
var G__15337 = (i__15334 + (1));
i__15334 = G__15337;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15335),ising$core$neighbors_$_iter__15330_$_iter__15332.call(null,cljs.core.chunk_rest.call(null,s__15333__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15335),null);
}
} else {
var dy = cljs.core.first.call(null,s__15333__$2);
if(((cljs.core.not_EQ_.call(null,dx,(0))) || (cljs.core.not_EQ_.call(null,dy,(0))))){
return cljs.core.cons.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mod.call(null,(dx + x),w),cljs.core.mod.call(null,(dy + y),h)],null)),ising$core$neighbors_$_iter__15330_$_iter__15332.call(null,cljs.core.rest.call(null,s__15333__$2)));
} else {
var G__15338 = cljs.core.rest.call(null,s__15333__$2);
s__15333__$1 = G__15338;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__15331__$1,dx,xs__6277__auto__,temp__5720__auto__,w,h))
,null,null));
});})(s__15331__$1,dx,xs__6277__auto__,temp__5720__auto__,w,h))
;
var fs__4649__auto__ = cljs.core.seq.call(null,iterys__4648__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4649__auto__){
return cljs.core.concat.call(null,fs__4649__auto__,ising$core$neighbors_$_iter__15330.call(null,cljs.core.rest.call(null,s__15331__$1)));
} else {
var G__15339 = cljs.core.rest.call(null,s__15331__$1);
s__15331__$1 = G__15339;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
});
ising.core.get_coord = (function ising$core$get_coord(grid,p){
var vec__15340 = p;
var x = cljs.core.nth.call(null,vec__15340,(0),null);
var y = cljs.core.nth.call(null,vec__15340,(1),null);
if(cljs.core.truth_((grid[x][y]))){
return (1);
} else {
return (-1);
}
});
ising.core.local_field = (function ising$core$local_field(grid,H,x,y){
return (H + cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.partial.call(null,ising.core.get_coord,grid),ising.core.neighbors.call(null,grid,x,y))));
});
ising.core.coupling = (function ising$core$coupling(grid,H,p){
return ((0.5 * ising.core.get_coord.call(null,grid,p)) * ising.core.local_field.call(null,grid,H,cljs.core.first.call(null,p),cljs.core.second.call(null,p)));
});
ising.core.spin_prob = (function ising$core$spin_prob(grid,beta,H,x,y){

var l = ising.core.local_field.call(null,grid,H,x,y);
var e = ((-2.0 * beta) * l);
return (1.0 / ((1) + Math.exp(e)));
});
ising.core.energy = (function ising$core$energy(grid,H){

var w = grid.length;
var h = (grid[(0)]).length;
var coords = (function (){var iter__4652__auto__ = (function ising$core$energy_$_iter__15343(s__15344){
return (new cljs.core.LazySeq(null,(function (){
var s__15344__$1 = s__15344;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15344__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4648__auto__ = ((function (s__15344__$1,x,xs__6277__auto__,temp__5720__auto__,w,h){
return (function ising$core$energy_$_iter__15343_$_iter__15345(s__15346){
return (new cljs.core.LazySeq(null,((function (s__15344__$1,x,xs__6277__auto__,temp__5720__auto__,w,h){
return (function (){
var s__15346__$1 = s__15346;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__15346__$1);
if(temp__5720__auto____$1){
var s__15346__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15346__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__15346__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__15348 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__15347 = (0);
while(true){
if((i__15347 < size__4651__auto__)){
var y = cljs.core._nth.call(null,c__4650__auto__,i__15347);
cljs.core.chunk_append.call(null,b__15348,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__15349 = (i__15347 + (1));
i__15347 = G__15349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15348),ising$core$energy_$_iter__15343_$_iter__15345.call(null,cljs.core.chunk_rest.call(null,s__15346__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15348),null);
}
} else {
var y = cljs.core.first.call(null,s__15346__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),ising$core$energy_$_iter__15343_$_iter__15345.call(null,cljs.core.rest.call(null,s__15346__$2)));
}
} else {
return null;
}
break;
}
});})(s__15344__$1,x,xs__6277__auto__,temp__5720__auto__,w,h))
,null,null));
});})(s__15344__$1,x,xs__6277__auto__,temp__5720__auto__,w,h))
;
var fs__4649__auto__ = cljs.core.seq.call(null,iterys__4648__auto__.call(null,cljs.core.range.call(null,h)));
if(fs__4649__auto__){
return cljs.core.concat.call(null,fs__4649__auto__,ising$core$energy_$_iter__15343.call(null,cljs.core.rest.call(null,s__15344__$1)));
} else {
var G__15350 = cljs.core.rest.call(null,s__15344__$1);
s__15344__$1 = G__15350;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.range.call(null,w));
})();
var f = cljs.core.partial.call(null,ising.core.coupling,grid,H);
var g = cljs.core.partial.call(null,ising.core.get_coord,grid);
return (cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,coords)) + cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,g,coords)));
});
ising.core.spin_update = (function ising$core$spin_update(grid,beta,H,x,y){
var p = ising.core.spin_prob.call(null,grid,beta,H,x,y);
return (grid[x][y] = ising.core.rand_spin.call(null,p));
});
ising.core.gibbs_update = (function ising$core$gibbs_update(grid,beta,H,x,y){

var b = (grid[x][y]);
var s = (cljs.core.truth_(b)?(1):(-1));
var l = ising.core.local_field.call(null,grid,H,x,y);
var deltaE = ((2.0 * s) * l);
var acceptP = (((deltaE > 0.0))?Math.exp(((- beta) * deltaE)):1.0);
if(cljs.core.truth_(ising.core.rand_spin.call(null,acceptP))){
return (grid[x][y] = cljs.core.not.call(null,b));
} else {
return null;
}
});

//# sourceMappingURL=core.js.map
