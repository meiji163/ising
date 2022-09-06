// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18949){
var map__18950 = p__18949;
var map__18950__$1 = cljs.core.__destructure_map.call(null,map__18950);
var m = map__18950__$1;
var n = cljs.core.get.call(null,map__18950__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18950__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18951_18979 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18952_18980 = null;
var count__18953_18981 = (0);
var i__18954_18982 = (0);
while(true){
if((i__18954_18982 < count__18953_18981)){
var f_18983 = cljs.core._nth.call(null,chunk__18952_18980,i__18954_18982);
cljs.core.println.call(null,"  ",f_18983);


var G__18984 = seq__18951_18979;
var G__18985 = chunk__18952_18980;
var G__18986 = count__18953_18981;
var G__18987 = (i__18954_18982 + (1));
seq__18951_18979 = G__18984;
chunk__18952_18980 = G__18985;
count__18953_18981 = G__18986;
i__18954_18982 = G__18987;
continue;
} else {
var temp__5720__auto___18988 = cljs.core.seq.call(null,seq__18951_18979);
if(temp__5720__auto___18988){
var seq__18951_18989__$1 = temp__5720__auto___18988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18951_18989__$1)){
var c__4679__auto___18990 = cljs.core.chunk_first.call(null,seq__18951_18989__$1);
var G__18991 = cljs.core.chunk_rest.call(null,seq__18951_18989__$1);
var G__18992 = c__4679__auto___18990;
var G__18993 = cljs.core.count.call(null,c__4679__auto___18990);
var G__18994 = (0);
seq__18951_18979 = G__18991;
chunk__18952_18980 = G__18992;
count__18953_18981 = G__18993;
i__18954_18982 = G__18994;
continue;
} else {
var f_18995 = cljs.core.first.call(null,seq__18951_18989__$1);
cljs.core.println.call(null,"  ",f_18995);


var G__18996 = cljs.core.next.call(null,seq__18951_18989__$1);
var G__18997 = null;
var G__18998 = (0);
var G__18999 = (0);
seq__18951_18979 = G__18996;
chunk__18952_18980 = G__18997;
count__18953_18981 = G__18998;
i__18954_18982 = G__18999;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19000 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19000);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19000)))?cljs.core.second.call(null,arglists_19000):arglists_19000));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18955_19001 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18956_19002 = null;
var count__18957_19003 = (0);
var i__18958_19004 = (0);
while(true){
if((i__18958_19004 < count__18957_19003)){
var vec__18967_19005 = cljs.core._nth.call(null,chunk__18956_19002,i__18958_19004);
var name_19006 = cljs.core.nth.call(null,vec__18967_19005,(0),null);
var map__18970_19007 = cljs.core.nth.call(null,vec__18967_19005,(1),null);
var map__18970_19008__$1 = cljs.core.__destructure_map.call(null,map__18970_19007);
var doc_19009 = cljs.core.get.call(null,map__18970_19008__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19010 = cljs.core.get.call(null,map__18970_19008__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19006);

cljs.core.println.call(null," ",arglists_19010);

if(cljs.core.truth_(doc_19009)){
cljs.core.println.call(null," ",doc_19009);
} else {
}


var G__19011 = seq__18955_19001;
var G__19012 = chunk__18956_19002;
var G__19013 = count__18957_19003;
var G__19014 = (i__18958_19004 + (1));
seq__18955_19001 = G__19011;
chunk__18956_19002 = G__19012;
count__18957_19003 = G__19013;
i__18958_19004 = G__19014;
continue;
} else {
var temp__5720__auto___19015 = cljs.core.seq.call(null,seq__18955_19001);
if(temp__5720__auto___19015){
var seq__18955_19016__$1 = temp__5720__auto___19015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18955_19016__$1)){
var c__4679__auto___19017 = cljs.core.chunk_first.call(null,seq__18955_19016__$1);
var G__19018 = cljs.core.chunk_rest.call(null,seq__18955_19016__$1);
var G__19019 = c__4679__auto___19017;
var G__19020 = cljs.core.count.call(null,c__4679__auto___19017);
var G__19021 = (0);
seq__18955_19001 = G__19018;
chunk__18956_19002 = G__19019;
count__18957_19003 = G__19020;
i__18958_19004 = G__19021;
continue;
} else {
var vec__18971_19022 = cljs.core.first.call(null,seq__18955_19016__$1);
var name_19023 = cljs.core.nth.call(null,vec__18971_19022,(0),null);
var map__18974_19024 = cljs.core.nth.call(null,vec__18971_19022,(1),null);
var map__18974_19025__$1 = cljs.core.__destructure_map.call(null,map__18974_19024);
var doc_19026 = cljs.core.get.call(null,map__18974_19025__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19027 = cljs.core.get.call(null,map__18974_19025__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19023);

cljs.core.println.call(null," ",arglists_19027);

if(cljs.core.truth_(doc_19026)){
cljs.core.println.call(null," ",doc_19026);
} else {
}


var G__19028 = cljs.core.next.call(null,seq__18955_19016__$1);
var G__19029 = null;
var G__19030 = (0);
var G__19031 = (0);
seq__18955_19001 = G__19028;
chunk__18956_19002 = G__19029;
count__18957_19003 = G__19030;
i__18958_19004 = G__19031;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__18975 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18976 = null;
var count__18977 = (0);
var i__18978 = (0);
while(true){
if((i__18978 < count__18977)){
var role = cljs.core._nth.call(null,chunk__18976,i__18978);
var temp__5720__auto___19032__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___19032__$1)){
var spec_19033 = temp__5720__auto___19032__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19033));
} else {
}


var G__19034 = seq__18975;
var G__19035 = chunk__18976;
var G__19036 = count__18977;
var G__19037 = (i__18978 + (1));
seq__18975 = G__19034;
chunk__18976 = G__19035;
count__18977 = G__19036;
i__18978 = G__19037;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__18975);
if(temp__5720__auto____$1){
var seq__18975__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18975__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__18975__$1);
var G__19038 = cljs.core.chunk_rest.call(null,seq__18975__$1);
var G__19039 = c__4679__auto__;
var G__19040 = cljs.core.count.call(null,c__4679__auto__);
var G__19041 = (0);
seq__18975 = G__19038;
chunk__18976 = G__19039;
count__18977 = G__19040;
i__18978 = G__19041;
continue;
} else {
var role = cljs.core.first.call(null,seq__18975__$1);
var temp__5720__auto___19042__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___19042__$2)){
var spec_19043 = temp__5720__auto___19042__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19043));
} else {
}


var G__19044 = cljs.core.next.call(null,seq__18975__$1);
var G__19045 = null;
var G__19046 = (0);
var G__19047 = (0);
seq__18975 = G__19044;
chunk__18976 = G__19045;
count__18977 = G__19046;
i__18978 = G__19047;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19048 = cljs.core.conj.call(null,via,t);
var G__19049 = cljs.core.ex_cause.call(null,t);
via = G__19048;
t = G__19049;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19052 = datafied_throwable;
var map__19052__$1 = cljs.core.__destructure_map.call(null,map__19052);
var via = cljs.core.get.call(null,map__19052__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__19052__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__19052__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19053 = cljs.core.last.call(null,via);
var map__19053__$1 = cljs.core.__destructure_map.call(null,map__19053);
var type = cljs.core.get.call(null,map__19053__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__19053__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__19053__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19054 = data;
var map__19054__$1 = cljs.core.__destructure_map.call(null,map__19054);
var problems = cljs.core.get.call(null,map__19054__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__19054__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__19054__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19055 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__19055__$1 = cljs.core.__destructure_map.call(null,map__19055);
var top_data = map__19055__$1;
var source = cljs.core.get.call(null,map__19055__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__19056 = phase;
var G__19056__$1 = (((G__19056 instanceof cljs.core.Keyword))?G__19056.fqn:null);
switch (G__19056__$1) {
case "read-source":
var map__19057 = data;
var map__19057__$1 = cljs.core.__destructure_map.call(null,map__19057);
var line = cljs.core.get.call(null,map__19057__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19057__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19058 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__19058__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19058,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19058);
var G__19058__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19058__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19058__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19058__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19058__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19059 = top_data;
var G__19059__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19059,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19059);
var G__19059__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19059__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19059__$1);
var G__19059__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19059__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19059__$2);
var G__19059__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19059__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19059__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19059__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19059__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19060 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19060,(0),null);
var method = cljs.core.nth.call(null,vec__19060,(1),null);
var file = cljs.core.nth.call(null,vec__19060,(2),null);
var line = cljs.core.nth.call(null,vec__19060,(3),null);
var G__19063 = top_data;
var G__19063__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__19063,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19063);
var G__19063__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__19063__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19063__$1);
var G__19063__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.call(null,G__19063__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19063__$2);
var G__19063__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19063__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19063__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19063__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19063__$4;
}

break;
case "execution":
var vec__19064 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19064,(0),null);
var method = cljs.core.nth.call(null,vec__19064,(1),null);
var file = cljs.core.nth.call(null,vec__19064,(2),null);
var line = cljs.core.nth.call(null,vec__19064,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__19051_SHARP_){
var or__4253__auto__ = (p1__19051_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__19051_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__19067 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19067__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__19067,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19067);
var G__19067__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19067__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19067__$1);
var G__19067__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.call(null,G__19067__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19067__$2);
var G__19067__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__19067__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19067__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19067__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19067__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19056__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19071){
var map__19072 = p__19071;
var map__19072__$1 = cljs.core.__destructure_map.call(null,map__19072);
var triage_data = map__19072__$1;
var phase = cljs.core.get.call(null,map__19072__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__19072__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__19072__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19072__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__19072__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__19072__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__19072__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__19072__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19073 = phase;
var G__19073__$1 = (((G__19073 instanceof cljs.core.Keyword))?G__19073.fqn:null);
switch (G__19073__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19074_19083 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19075_19084 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19076_19085 = true;
var _STAR_print_fn_STAR__temp_val__19077_19086 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19076_19085);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19077_19086);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__19069_SHARP_){
return cljs.core.dissoc.call(null,p1__19069_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19075_19084);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19074_19083);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19078_19087 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19079_19088 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19080_19089 = true;
var _STAR_print_fn_STAR__temp_val__19081_19090 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19080_19089);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19081_19090);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__19070_SHARP_){
return cljs.core.dissoc.call(null,p1__19070_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19079_19088);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19078_19087);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19073__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
