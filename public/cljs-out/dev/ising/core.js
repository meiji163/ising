// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('ising.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
ising.core.make_grid = (function ising$core$make_grid(w,h){
var dims__4686__auto__ = (new cljs.core.List(null,h,null,(1),null));
var dimarray__4687__auto__ = (new Array(w));
var n__4741__auto___10029 = dimarray__4687__auto__.length;
var i__4688__auto___10030 = (0);
while(true){
if((i__4688__auto___10030 < n__4741__auto___10029)){
(dimarray__4687__auto__[i__4688__auto___10030] = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.make_array,null,dims__4686__auto__));

var G__10031 = (i__4688__auto___10030 + (1));
i__4688__auto___10030 = G__10031;
continue;
} else {
}
break;
}

return dimarray__4687__auto__;
});
ising.core.rand_spin = (function ising$core$rand_spin(p){
var r = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(1.0);
if((r < p)){
return true;
} else {
return null;
}
});
ising.core.rand_spins = (function ising$core$rand_spins(p,w,h){
ising.core.a = ising.core.make_grid(w,h);

var seq__10032_10044 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(w));
var chunk__10037_10045 = null;
var count__10038_10046 = (0);
var i__10039_10047 = (0);
while(true){
if((i__10039_10047 < count__10038_10046)){
var x_10048 = chunk__10037_10045.cljs$core$IIndexed$_nth$arity$2(null,i__10039_10047);
var seq__10040_10049 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(h));
var chunk__10041_10050 = null;
var count__10042_10051 = (0);
var i__10043_10052 = (0);
while(true){
if((i__10043_10052 < count__10042_10051)){
var y_10053 = chunk__10041_10050.cljs$core$IIndexed$_nth$arity$2(null,i__10043_10052);
(ising.core.a[x_10048][y_10053] = ising.core.rand_spin(p));


var G__10054 = seq__10040_10049;
var G__10055 = chunk__10041_10050;
var G__10056 = count__10042_10051;
var G__10057 = (i__10043_10052 + (1));
seq__10040_10049 = G__10054;
chunk__10041_10050 = G__10055;
count__10042_10051 = G__10056;
i__10043_10052 = G__10057;
continue;
} else {
var temp__5720__auto___10058 = cljs.core.seq(seq__10040_10049);
if(temp__5720__auto___10058){
var seq__10040_10059__$1 = temp__5720__auto___10058;
if(cljs.core.chunked_seq_QMARK_(seq__10040_10059__$1)){
var c__4679__auto___10060 = cljs.core.chunk_first(seq__10040_10059__$1);
var G__10061 = cljs.core.chunk_rest(seq__10040_10059__$1);
var G__10062 = c__4679__auto___10060;
var G__10063 = cljs.core.count(c__4679__auto___10060);
var G__10064 = (0);
seq__10040_10049 = G__10061;
chunk__10041_10050 = G__10062;
count__10042_10051 = G__10063;
i__10043_10052 = G__10064;
continue;
} else {
var y_10065 = cljs.core.first(seq__10040_10059__$1);
(ising.core.a[x_10048][y_10065] = ising.core.rand_spin(p));


var G__10066 = cljs.core.next(seq__10040_10059__$1);
var G__10067 = null;
var G__10068 = (0);
var G__10069 = (0);
seq__10040_10049 = G__10066;
chunk__10041_10050 = G__10067;
count__10042_10051 = G__10068;
i__10043_10052 = G__10069;
continue;
}
} else {
}
}
break;
}

var G__10070 = seq__10032_10044;
var G__10071 = chunk__10037_10045;
var G__10072 = count__10038_10046;
var G__10073 = (i__10039_10047 + (1));
seq__10032_10044 = G__10070;
chunk__10037_10045 = G__10071;
count__10038_10046 = G__10072;
i__10039_10047 = G__10073;
continue;
} else {
var temp__5720__auto___10074 = cljs.core.seq(seq__10032_10044);
if(temp__5720__auto___10074){
var seq__10032_10075__$1 = temp__5720__auto___10074;
if(cljs.core.chunked_seq_QMARK_(seq__10032_10075__$1)){
var c__4679__auto___10076 = cljs.core.chunk_first(seq__10032_10075__$1);
var G__10077 = cljs.core.chunk_rest(seq__10032_10075__$1);
var G__10078 = c__4679__auto___10076;
var G__10079 = cljs.core.count(c__4679__auto___10076);
var G__10080 = (0);
seq__10032_10044 = G__10077;
chunk__10037_10045 = G__10078;
count__10038_10046 = G__10079;
i__10039_10047 = G__10080;
continue;
} else {
var x_10081 = cljs.core.first(seq__10032_10075__$1);
var seq__10033_10082 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(h));
var chunk__10034_10083 = null;
var count__10035_10084 = (0);
var i__10036_10085 = (0);
while(true){
if((i__10036_10085 < count__10035_10084)){
var y_10086 = chunk__10034_10083.cljs$core$IIndexed$_nth$arity$2(null,i__10036_10085);
(ising.core.a[x_10081][y_10086] = ising.core.rand_spin(p));


var G__10087 = seq__10033_10082;
var G__10088 = chunk__10034_10083;
var G__10089 = count__10035_10084;
var G__10090 = (i__10036_10085 + (1));
seq__10033_10082 = G__10087;
chunk__10034_10083 = G__10088;
count__10035_10084 = G__10089;
i__10036_10085 = G__10090;
continue;
} else {
var temp__5720__auto___10091__$1 = cljs.core.seq(seq__10033_10082);
if(temp__5720__auto___10091__$1){
var seq__10033_10092__$1 = temp__5720__auto___10091__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10033_10092__$1)){
var c__4679__auto___10093 = cljs.core.chunk_first(seq__10033_10092__$1);
var G__10094 = cljs.core.chunk_rest(seq__10033_10092__$1);
var G__10095 = c__4679__auto___10093;
var G__10096 = cljs.core.count(c__4679__auto___10093);
var G__10097 = (0);
seq__10033_10082 = G__10094;
chunk__10034_10083 = G__10095;
count__10035_10084 = G__10096;
i__10036_10085 = G__10097;
continue;
} else {
var y_10098 = cljs.core.first(seq__10033_10092__$1);
(ising.core.a[x_10081][y_10098] = ising.core.rand_spin(p));


var G__10099 = cljs.core.next(seq__10033_10092__$1);
var G__10100 = null;
var G__10101 = (0);
var G__10102 = (0);
seq__10033_10082 = G__10099;
chunk__10034_10083 = G__10100;
count__10035_10084 = G__10101;
i__10036_10085 = G__10102;
continue;
}
} else {
}
}
break;
}

var G__10103 = cljs.core.next(seq__10032_10075__$1);
var G__10104 = null;
var G__10105 = (0);
var G__10106 = (0);
seq__10032_10044 = G__10103;
chunk__10037_10045 = G__10104;
count__10038_10046 = G__10105;
i__10039_10047 = G__10106;
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
var iter__4652__auto__ = (function ising$core$neighbors_$_iter__10107(s__10108){
return (new cljs.core.LazySeq(null,(function (){
var s__10108__$1 = s__10108;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10108__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var dx = cljs.core.first(xs__6277__auto__);
var iterys__4648__auto__ = ((function (s__10108__$1,dx,xs__6277__auto__,temp__5720__auto__,w,h){
return (function ising$core$neighbors_$_iter__10107_$_iter__10109(s__10110){
return (new cljs.core.LazySeq(null,((function (s__10108__$1,dx,xs__6277__auto__,temp__5720__auto__,w,h){
return (function (){
var s__10110__$1 = s__10110;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__10110__$1);
if(temp__5720__auto____$1){
var s__10110__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10110__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__10110__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__10112 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__10111 = (0);
while(true){
if((i__10111 < size__4651__auto__)){
var dy = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4650__auto__,i__10111);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(dx,(0))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(dy,(0))))){
cljs.core.chunk_append(b__10112,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mod((dx + x),w),cljs.core.mod((dy + y),h)],null)));

var G__10113 = (i__10111 + (1));
i__10111 = G__10113;
continue;
} else {
var G__10114 = (i__10111 + (1));
i__10111 = G__10114;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10112),ising$core$neighbors_$_iter__10107_$_iter__10109(cljs.core.chunk_rest(s__10110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10112),null);
}
} else {
var dy = cljs.core.first(s__10110__$2);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(dx,(0))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(dy,(0))))){
return cljs.core.cons((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mod((dx + x),w),cljs.core.mod((dy + y),h)],null)),ising$core$neighbors_$_iter__10107_$_iter__10109(cljs.core.rest(s__10110__$2)));
} else {
var G__10115 = cljs.core.rest(s__10110__$2);
s__10110__$1 = G__10115;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__10108__$1,dx,xs__6277__auto__,temp__5720__auto__,w,h))
,null,null));
});})(s__10108__$1,dx,xs__6277__auto__,temp__5720__auto__,w,h))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,ising$core$neighbors_$_iter__10107(cljs.core.rest(s__10108__$1)));
} else {
var G__10116 = cljs.core.rest(s__10108__$1);
s__10108__$1 = G__10116;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
});
ising.core.get_coord = (function ising$core$get_coord(grid,p){
var vec__10117 = p;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10117,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10117,(1),null);
if(cljs.core.truth_((grid[x][y]))){
return (1);
} else {
return (-1);
}
});
ising.core.local_field = (function ising$core$local_field(grid,H,x,y){
return (H + cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ising.core.get_coord,grid),ising.core.neighbors(grid,x,y))));
});
ising.core.coupling = (function ising$core$coupling(grid,H,p){
return ((0.5 * ising.core.get_coord(grid,p)) * ising.core.local_field(grid,H,cljs.core.first(p),cljs.core.second(p)));
});
ising.core.spin_prob = (function ising$core$spin_prob(grid,beta,H,x,y){

var l = ising.core.local_field(grid,H,x,y);
var e = ((-2.0 * beta) * l);
return (1.0 / ((1) + Math.exp(e)));
});
ising.core.energy = (function ising$core$energy(grid,H){

var w = grid.length;
var h = (grid[(0)]).length;
var coords = (function (){var iter__4652__auto__ = (function ising$core$energy_$_iter__10120(s__10121){
return (new cljs.core.LazySeq(null,(function (){
var s__10121__$1 = s__10121;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10121__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first(xs__6277__auto__);
var iterys__4648__auto__ = ((function (s__10121__$1,x,xs__6277__auto__,temp__5720__auto__,w,h){
return (function ising$core$energy_$_iter__10120_$_iter__10122(s__10123){
return (new cljs.core.LazySeq(null,((function (s__10121__$1,x,xs__6277__auto__,temp__5720__auto__,w,h){
return (function (){
var s__10123__$1 = s__10123;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__10123__$1);
if(temp__5720__auto____$1){
var s__10123__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10123__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__10123__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__10125 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__10124 = (0);
while(true){
if((i__10124 < size__4651__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4650__auto__,i__10124);
cljs.core.chunk_append(b__10125,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__10126 = (i__10124 + (1));
i__10124 = G__10126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10125),ising$core$energy_$_iter__10120_$_iter__10122(cljs.core.chunk_rest(s__10123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10125),null);
}
} else {
var y = cljs.core.first(s__10123__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),ising$core$energy_$_iter__10120_$_iter__10122(cljs.core.rest(s__10123__$2)));
}
} else {
return null;
}
break;
}
});})(s__10121__$1,x,xs__6277__auto__,temp__5720__auto__,w,h))
,null,null));
});})(s__10121__$1,x,xs__6277__auto__,temp__5720__auto__,w,h))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(h)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,ising$core$energy_$_iter__10120(cljs.core.rest(s__10121__$1)));
} else {
var G__10127 = cljs.core.rest(s__10121__$1);
s__10121__$1 = G__10127;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(w));
})();
var f = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(ising.core.coupling,grid,H);
var g = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ising.core.get_coord,grid);
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coords)) + cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(g,coords)));
});
ising.core.spin_update = (function ising$core$spin_update(grid,beta,H,x,y){
var p = ising.core.spin_prob(grid,beta,H,x,y);
return (grid[x][y] = ising.core.rand_spin(p));
});
ising.core.gibbs_update = (function ising$core$gibbs_update(grid,beta,H,x,y){

var b = (grid[x][y]);
var s = (cljs.core.truth_(b)?(1):(-1));
var l = ising.core.local_field(grid,H,x,y);
var deltaE = ((2.0 * s) * l);
var acceptP = (((deltaE > 0.0))?Math.exp(((- beta) * deltaE)):1.0);
if(cljs.core.truth_(ising.core.rand_spin(acceptP))){
return (grid[x][y] = cljs.core.not(b));
} else {
return null;
}
});
