import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./kw.rkt.js";
import * as M1 from "../../../runtime/kernel.rkt.js";
import * as M2 from "./pre-base.rkt.js";
import * as M3 from "./map.rkt.js";
import * as M4 from "./sort.rkt.js";
import * as M5 from "../../../runtime/unsafe.rkt.js";
import * as M6 from "./reverse.rkt.js";
var sort = function(cache_keys_p21162, key11163, lst51164, less_p61165) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var lst1166 = lst51164;
    var less_p1167 = less_p61165;
    if (false !== false) {
        var if_res519 = false;
    } else {
        var if_res519 = key11163;
    }
    var getkey1168 = if_res519;
    if (false !== false) {
        var if_res520 = false;
    } else {
        var if_res520 = cache_keys_p21162;
    }
    var cache_keys_p1169 = if_res520;
    if (M1.list_p(lst1166) !== false) {
        var if_res521 = M1.rvoid();
    } else {
        var if_res521 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("list?"), lst1166);
    }
    if_res521;
    if (M1.procedure_p(less_p1167) !== false) {
        var if_res522 = M1.procedure_arity_includes_p(less_p1167, 2);
    } else {
        var if_res522 = false;
    }
    if (if_res522 !== false) {
        var if_res523 = M1.rvoid();
    } else {
        var if_res523 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), less_p1167);
    }
    if_res523;
    if (getkey1168 !== false) {
        if (M1.procedure_p(getkey1168) !== false) {
            var if_res524 = M1.procedure_arity_includes_p(getkey1168, 1);
        } else {
            var if_res524 = false;
        }
        var if_res525 = M1.not(if_res524);
    } else {
        var if_res525 = false;
    }
    if (if_res525 !== false) {
        var if_res526 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("(any/c . -> . any/c)"), getkey1168);
    } else {
        var if_res526 = M1.rvoid();
    }
    if_res526;
    if (getkey1168 !== false) {
        var if_res527 = M4.sort(lst1166, less_p1167, getkey1168, cache_keys_p1169);
    } else {
        var if_res527 = M4.sort(lst1166, less_p1167);
    }
    return if_res527;
};
var sort1161 = function(given_kws1170, given_args1171, lst51172, less_p61173) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.pair_p(given_kws1170) !== false) {
        var if_res528 = M1.eq_p($rjs_core.Keyword.make("cache-keys?"), M1.car(given_kws1170));
    } else {
        var if_res528 = false;
    }
    var cache_keys_p41174 = if_res528;
    if (cache_keys_p41174 !== false) {
        var if_res529 = M1.car(given_args1171);
    } else {
        var if_res529 = false;
    }
    var cache_keys_p21175 = if_res529;
    if (cache_keys_p41174 !== false) {
        var if_res530 = M1.cdr(given_kws1170);
    } else {
        var if_res530 = given_kws1170;
    }
    var kws1263271176 = if_res530;
    if (cache_keys_p41174 !== false) {
        var if_res531 = M1.cdr(given_args1171);
    } else {
        var if_res531 = given_args1171;
    }
    var kw_args1263281177 = if_res531;
    var key31178 = M1.pair_p(kws1263271176);
    if (key31178 !== false) {
        var if_res532 = M1.car(kw_args1263281177);
    } else {
        var if_res532 = false;
    }
    var key11179 = if_res532;
    return sort(cache_keys_p21175, key11179, lst51172, less_p61173);
};
var cl536 = function(given_kws1186, given_args1187, lst1188, less_p1189) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return sort1161(given_kws1186, given_args1187, lst1188, less_p1189);
};
var temp538 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam537 = {
        '4': cl536
    } [arguments.length];
    if (fixed_lam537 !== undefined) {
        return fixed_lam537.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4]);
var temp535 = $rjs_core.Pair.makeList($rjs_core.Keyword.make("cache-keys?"), $rjs_core.Keyword.make("key"));
var cl533 = function(lst1190, less_p1191) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return sort1161(M1.rnull, M1.rnull, lst1190, less_p1191);
};
var sort7 = M0.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws1180, given_argc1181) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.__eq_(given_argc1181, 4) !== false) {
        var l11263291182 = given_kws1180;
        if (M1.null_p(l11263291182) !== false) {
            var if_res540 = l11263291182;
        } else {
            if (M1.eq_p(M1.car(l11263291182), $rjs_core.Keyword.make("cache-keys?")) !== false) {
                var if_res539 = M1.cdr(l11263291182);
            } else {
                var if_res539 = l11263291182;
            }
            var if_res540 = if_res539;
        }
        var l11263291183 = if_res540;
        var l11263301184 = l11263291183;
        if (M1.null_p(l11263301184) !== false) {
            var if_res542 = l11263301184;
        } else {
            if (M1.eq_p(M1.car(l11263301184), $rjs_core.Keyword.make("key")) !== false) {
                var if_res541 = M1.cdr(l11263301184);
            } else {
                var if_res541 = l11263301184;
            }
            var if_res542 = if_res541;
        }
        var l11263301185 = if_res542;
        var if_res543 = M1.null_p(l11263301185);
    } else {
        var if_res543 = false;
    }
    return if_res543;
}, temp538, M1.rnull, temp535, $rjs_core.attachProcedureArity(function() {
    var fixed_lam534 = {
        '2': cl533
    } [arguments.length];
    if (fixed_lam534 !== undefined) {
        return fixed_lam534.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2]));
var do_remove = function(who1192, item1193, list1194, equal_p1195) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.list_p(list1194) !== false) {
        var if_res544 = M1.rvoid();
    } else {
        var if_res544 = M1.raise_argument_error(who1192, $rjs_core.UString.make("list?"), list1194);
    }
    if_res544;
    var loop1196 = function(list1197) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(list1197) !== false) {
            var if_res547 = list1197;
        } else {
            if (equal_p1195(item1193, M1.car(list1197)) !== false) {
                var if_res546 = M1.cdr(list1197);
            } else {
                var next1198 = loop1196(M1.cdr(list1197));
                if (M1.eq_p(next1198, M1.cdr(list1197)) !== false) {
                    var if_res545 = list1197;
                } else {
                    var if_res545 = M1.cons(M1.car(list1197), next1198);
                }
                var if_res546 = if_res545;
            }
            var if_res547 = if_res546;
        }
        return if_res547;
    };
    return loop1196(list1194);
};
var cl548 = function(item1199, list1200) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remove"), item1199, list1200, M1.equal_p);
};
var cl549 = function(item1201, list1202, equal_p1203) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(equal_p1203) !== false) {
        var if_res551 = M1.procedure_arity_includes_p(equal_p1203, 2);
    } else {
        var if_res551 = false;
    }
    if (if_res551 !== false) {
        var if_res552 = M1.rvoid();
    } else {
        var if_res552 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("remove"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), equal_p1203);
    }
    if_res552;
    return do_remove($rjs_core.PrimitiveSymbol.make("remove"), item1201, list1202, equal_p1203);
};
var remove = $rjs_core.attachProcedureArity(function() {
    var fixed_lam550 = {
        '2': cl548,
        '3': cl549
    } [arguments.length];
    if (fixed_lam550 !== undefined) {
        return fixed_lam550.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var remq = function(item1204, list1205) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remq"), item1204, list1205, M1.eq_p);
};
var remv = function(item1206, list1207) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remv"), item1206, list1207, M1.eqv_p);
};
var remw = function(item1208, list1209) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remw"), item1208, list1209, M1.equal_always_p);
};
var do_remove_times_ = function(who1210, l1211, r1212, equal_p1213) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.list_p(l1211) !== false) {
        var if_res553 = M1.rvoid();
    } else {
        var if_res553 = M1.raise_argument_error(who1210, $rjs_core.UString.make("list?"), l1211);
    }
    if_res553;
    if (M1.list_p(r1212) !== false) {
        var if_res554 = M1.rvoid();
    } else {
        var if_res554 = M1.raise_argument_error(who1210, $rjs_core.UString.make("list?"), r1212);
    }
    if_res554;
    var rloop1214 = function(r1215) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(r1215) !== false) {
            var if_res558 = r1215;
        } else {
            var first_r1216 = M1.car(r1215);
            var loop1217 = function(l_rest1218) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(l_rest1218) !== false) {
                    var next1219 = rloop1214(M1.cdr(r1215));
                    if (M1.eq_p(next1219, M1.cdr(r1215)) !== false) {
                        var if_res555 = r1215;
                    } else {
                        var if_res555 = M1.cons(first_r1216, next1219);
                    }
                    var if_res557 = if_res555;
                } else {
                    if (equal_p1213(M1.car(l_rest1218), first_r1216) !== false) {
                        var if_res556 = rloop1214(M1.cdr(r1215));
                    } else {
                        var if_res556 = loop1217(M1.cdr(l_rest1218));
                    }
                    var if_res557 = if_res556;
                }
                return if_res557;
            };
            var if_res558 = loop1217(l1211);
        }
        return if_res558;
    };
    return rloop1214(r1212);
};
var cl559 = function(l1220, r1221) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remove*"), l1220, r1221, M1.equal_p);
};
var cl560 = function(l1222, r1223, equal_p1224) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(equal_p1224) !== false) {
        var if_res562 = M1.procedure_arity_includes_p(equal_p1224, 2);
    } else {
        var if_res562 = false;
    }
    if (if_res562 !== false) {
        var if_res563 = M1.rvoid();
    } else {
        var if_res563 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("remove*"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), equal_p1224);
    }
    if_res563;
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remove*"), l1222, r1223, equal_p1224);
};
var remove_times_ = $rjs_core.attachProcedureArity(function() {
    var fixed_lam561 = {
        '2': cl559,
        '3': cl560
    } [arguments.length];
    if (fixed_lam561 !== undefined) {
        return fixed_lam561.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var remq_times_ = function(l1225, r1226) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remq*"), l1225, r1226, M1.eq_p);
};
var remv_times_ = function(l1227, r1228) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remv*"), l1227, r1228, M1.eqv_p);
};
var remw_times_ = function(l1229, r1230) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remw*"), l1229, r1230, M1.equal_always_p);
};
var memf = function(f1231, list1232) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f1231) !== false) {
        var if_res564 = M1.procedure_arity_includes_p(f1231, 1);
    } else {
        var if_res564 = false;
    }
    if (if_res564 !== false) {
        var if_res565 = M1.rvoid();
    } else {
        var if_res565 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("memf"), $rjs_core.UString.make("(any/c . -> any/c)"), f1231);
    }
    if_res565;
    var loop1233 = function(l1234) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l1234) !== false) {
            var if_res568 = false;
        } else {
            if (M1.not(M1.pair_p(l1234)) !== false) {
                var if_res567 = M1.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("memf"), $rjs_core.UString.make("not a proper list: "), list1232);
            } else {
                if (f1231(M1.car(l1234)) !== false) {
                    var if_res566 = l1234;
                } else {
                    var if_res566 = loop1233(M1.cdr(l1234));
                }
                var if_res567 = if_res566;
            }
            var if_res568 = if_res567;
        }
        return if_res568;
    };
    return loop1233(list1232);
};
var findf = function(f1235, list1236) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f1235) !== false) {
        var if_res569 = M1.procedure_arity_includes_p(f1235, 1);
    } else {
        var if_res569 = false;
    }
    if (if_res569 !== false) {
        var if_res570 = M1.rvoid();
    } else {
        var if_res570 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("findf"), $rjs_core.UString.make("(any/c . -> . any/c)"), f1235);
    }
    if_res570;
    var loop1237 = function(l1238) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l1238) !== false) {
            var if_res573 = false;
        } else {
            if (M1.not(M1.pair_p(l1238)) !== false) {
                var if_res572 = M1.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("findf"), $rjs_core.UString.make("not a proper list: "), list1236);
            } else {
                var a1239 = M1.car(l1238);
                if (f1235(a1239) !== false) {
                    var if_res571 = a1239;
                } else {
                    var if_res571 = loop1237(M1.cdr(l1238));
                }
                var if_res572 = if_res571;
            }
            var if_res573 = if_res572;
        }
        return if_res573;
    };
    return loop1237(list1236);
};
var bad_list = function(who1240, orig_l1241) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.raise_mismatch_error(who1240, $rjs_core.UString.make("not a proper list: "), orig_l1241);
};
var bad_item = function(who1242, a1243, orig_l1244) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.raise_arguments_error(who1242, $rjs_core.UString.make("non-pair found in list"), $rjs_core.UString.make("non-pair"), a1243, $rjs_core.UString.make("list"), orig_l1244);
};
var assq1245 = function(x1250, l1251) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1252 = function(l1253, t1254) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l1253) !== false) {
            var a1255 = M5.unsafe_car(l1253);
            if (M1.pair_p(a1255) !== false) {
                if (M1.eq_p(x1250, M5.unsafe_car(a1255)) !== false) {
                    var if_res579 = a1255;
                } else {
                    var l1256 = M5.unsafe_cdr(l1253);
                    if (M1.pair_p(l1256) !== false) {
                        var a1257 = M5.unsafe_car(l1256);
                        if (M1.pair_p(a1257) !== false) {
                            if (M1.eq_p(x1250, M5.unsafe_car(a1257)) !== false) {
                                var if_res575 = a1257;
                            } else {
                                var t1258 = M5.unsafe_cdr(t1254);
                                var l1259 = M5.unsafe_cdr(l1256);
                                if (M1.eq_p(l1259, t1258) !== false) {
                                    var if_res574 = bad_list($rjs_core.PrimitiveSymbol.make("assq"), l1251);
                                } else {
                                    var if_res574 = loop1252(l1259, t1258);
                                }
                                var if_res575 = if_res574;
                            }
                            var if_res576 = if_res575;
                        } else {
                            var if_res576 = bad_item($rjs_core.PrimitiveSymbol.make("assq"), a1257, l1251);
                        }
                        var if_res578 = if_res576;
                    } else {
                        if (M1.null_p(l1256) !== false) {
                            var if_res577 = false;
                        } else {
                            var if_res577 = bad_list($rjs_core.PrimitiveSymbol.make("assq"), l1251);
                        }
                        var if_res578 = if_res577;
                    }
                    var if_res579 = if_res578;
                }
                var if_res580 = if_res579;
            } else {
                var if_res580 = bad_item($rjs_core.PrimitiveSymbol.make("assq"), a1255, l1251);
            }
            var if_res582 = if_res580;
        } else {
            if (M1.null_p(l1253) !== false) {
                var if_res581 = false;
            } else {
                var if_res581 = bad_list($rjs_core.PrimitiveSymbol.make("assq"), l1251);
            }
            var if_res582 = if_res581;
        }
        return if_res582;
    };
    return loop1252(l1251, l1251);
};
var assv1246 = function(x1260, l1261) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1262 = function(l1263, t1264) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l1263) !== false) {
            var a1265 = M5.unsafe_car(l1263);
            if (M1.pair_p(a1265) !== false) {
                if (M1.eqv_p(x1260, M5.unsafe_car(a1265)) !== false) {
                    var if_res588 = a1265;
                } else {
                    var l1266 = M5.unsafe_cdr(l1263);
                    if (M1.pair_p(l1266) !== false) {
                        var a1267 = M5.unsafe_car(l1266);
                        if (M1.pair_p(a1267) !== false) {
                            if (M1.eqv_p(x1260, M5.unsafe_car(a1267)) !== false) {
                                var if_res584 = a1267;
                            } else {
                                var t1268 = M5.unsafe_cdr(t1264);
                                var l1269 = M5.unsafe_cdr(l1266);
                                if (M1.eq_p(l1269, t1268) !== false) {
                                    var if_res583 = bad_list($rjs_core.PrimitiveSymbol.make("assv"), l1261);
                                } else {
                                    var if_res583 = loop1262(l1269, t1268);
                                }
                                var if_res584 = if_res583;
                            }
                            var if_res585 = if_res584;
                        } else {
                            var if_res585 = bad_item($rjs_core.PrimitiveSymbol.make("assv"), a1267, l1261);
                        }
                        var if_res587 = if_res585;
                    } else {
                        if (M1.null_p(l1266) !== false) {
                            var if_res586 = false;
                        } else {
                            var if_res586 = bad_list($rjs_core.PrimitiveSymbol.make("assv"), l1261);
                        }
                        var if_res587 = if_res586;
                    }
                    var if_res588 = if_res587;
                }
                var if_res589 = if_res588;
            } else {
                var if_res589 = bad_item($rjs_core.PrimitiveSymbol.make("assv"), a1265, l1261);
            }
            var if_res591 = if_res589;
        } else {
            if (M1.null_p(l1263) !== false) {
                var if_res590 = false;
            } else {
                var if_res590 = bad_list($rjs_core.PrimitiveSymbol.make("assv"), l1261);
            }
            var if_res591 = if_res590;
        }
        return if_res591;
    };
    return loop1262(l1261, l1261);
};
var assw1247 = function(x1270, l1271) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1272 = function(l1273, t1274) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l1273) !== false) {
            var a1275 = M5.unsafe_car(l1273);
            if (M1.pair_p(a1275) !== false) {
                if (M1.equal_always_p(x1270, M5.unsafe_car(a1275)) !== false) {
                    var if_res597 = a1275;
                } else {
                    var l1276 = M5.unsafe_cdr(l1273);
                    if (M1.pair_p(l1276) !== false) {
                        var a1277 = M5.unsafe_car(l1276);
                        if (M1.pair_p(a1277) !== false) {
                            if (M1.equal_always_p(x1270, M5.unsafe_car(a1277)) !== false) {
                                var if_res593 = a1277;
                            } else {
                                var t1278 = M5.unsafe_cdr(t1274);
                                var l1279 = M5.unsafe_cdr(l1276);
                                if (M1.eq_p(l1279, t1278) !== false) {
                                    var if_res592 = bad_list($rjs_core.PrimitiveSymbol.make("assw"), l1271);
                                } else {
                                    var if_res592 = loop1272(l1279, t1278);
                                }
                                var if_res593 = if_res592;
                            }
                            var if_res594 = if_res593;
                        } else {
                            var if_res594 = bad_item($rjs_core.PrimitiveSymbol.make("assw"), a1277, l1271);
                        }
                        var if_res596 = if_res594;
                    } else {
                        if (M1.null_p(l1276) !== false) {
                            var if_res595 = false;
                        } else {
                            var if_res595 = bad_list($rjs_core.PrimitiveSymbol.make("assw"), l1271);
                        }
                        var if_res596 = if_res595;
                    }
                    var if_res597 = if_res596;
                }
                var if_res598 = if_res597;
            } else {
                var if_res598 = bad_item($rjs_core.PrimitiveSymbol.make("assw"), a1275, l1271);
            }
            var if_res600 = if_res598;
        } else {
            if (M1.null_p(l1273) !== false) {
                var if_res599 = false;
            } else {
                var if_res599 = bad_list($rjs_core.PrimitiveSymbol.make("assw"), l1271);
            }
            var if_res600 = if_res599;
        }
        return if_res600;
    };
    return loop1272(l1271, l1271);
};
var cl601 = function(x1280, l1281) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1282 = function(l1283, t1284) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l1283) !== false) {
            var a1285 = M5.unsafe_car(l1283);
            if (M1.pair_p(a1285) !== false) {
                if (M1.equal_p(x1280, M5.unsafe_car(a1285)) !== false) {
                    var if_res609 = a1285;
                } else {
                    var l1286 = M5.unsafe_cdr(l1283);
                    if (M1.pair_p(l1286) !== false) {
                        var a1287 = M5.unsafe_car(l1286);
                        if (M1.pair_p(a1287) !== false) {
                            if (M1.equal_p(x1280, M5.unsafe_car(a1287)) !== false) {
                                var if_res605 = a1287;
                            } else {
                                var t1288 = M5.unsafe_cdr(t1284);
                                var l1289 = M5.unsafe_cdr(l1286);
                                if (M1.eq_p(l1289, t1288) !== false) {
                                    var if_res604 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l1281);
                                } else {
                                    var if_res604 = loop1282(l1289, t1288);
                                }
                                var if_res605 = if_res604;
                            }
                            var if_res606 = if_res605;
                        } else {
                            var if_res606 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a1287, l1281);
                        }
                        var if_res608 = if_res606;
                    } else {
                        if (M1.null_p(l1286) !== false) {
                            var if_res607 = false;
                        } else {
                            var if_res607 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l1281);
                        }
                        var if_res608 = if_res607;
                    }
                    var if_res609 = if_res608;
                }
                var if_res610 = if_res609;
            } else {
                var if_res610 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a1285, l1281);
            }
            var if_res612 = if_res610;
        } else {
            if (M1.null_p(l1283) !== false) {
                var if_res611 = false;
            } else {
                var if_res611 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l1281);
            }
            var if_res612 = if_res611;
        }
        return if_res612;
    };
    return loop1282(l1281, l1281);
};
var cl602 = function(x1290, l1291, is_equal_p1292) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(is_equal_p1292) !== false) {
        var if_res613 = M1.procedure_arity_includes_p(is_equal_p1292, 2);
    } else {
        var if_res613 = false;
    }
    if (if_res613 !== false) {
        var if_res614 = M1.rvoid();
    } else {
        var if_res614 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("assoc"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), is_equal_p1292);
    }
    if_res614;
    var loop1293 = function(l1294, t1295) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l1294) !== false) {
            var a1296 = M5.unsafe_car(l1294);
            if (M1.pair_p(a1296) !== false) {
                if (is_equal_p1292(x1290, M5.unsafe_car(a1296)) !== false) {
                    var if_res620 = a1296;
                } else {
                    var l1297 = M5.unsafe_cdr(l1294);
                    if (M1.pair_p(l1297) !== false) {
                        var a1298 = M5.unsafe_car(l1297);
                        if (M1.pair_p(a1298) !== false) {
                            if (is_equal_p1292(x1290, M5.unsafe_car(a1298)) !== false) {
                                var if_res616 = a1298;
                            } else {
                                var t1299 = M5.unsafe_cdr(t1295);
                                var l1300 = M5.unsafe_cdr(l1297);
                                if (M1.eq_p(l1300, t1299) !== false) {
                                    var if_res615 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l1291);
                                } else {
                                    var if_res615 = loop1293(l1300, t1299);
                                }
                                var if_res616 = if_res615;
                            }
                            var if_res617 = if_res616;
                        } else {
                            var if_res617 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a1298, l1291);
                        }
                        var if_res619 = if_res617;
                    } else {
                        if (M1.null_p(l1297) !== false) {
                            var if_res618 = false;
                        } else {
                            var if_res618 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l1291);
                        }
                        var if_res619 = if_res618;
                    }
                    var if_res620 = if_res619;
                }
                var if_res621 = if_res620;
            } else {
                var if_res621 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a1296, l1291);
            }
            var if_res623 = if_res621;
        } else {
            if (M1.null_p(l1294) !== false) {
                var if_res622 = false;
            } else {
                var if_res622 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l1291);
            }
            var if_res623 = if_res622;
        }
        return if_res623;
    };
    return loop1293(l1291, l1291);
};
var assoc1248 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam603 = {
        '2': cl601,
        '3': cl602
    } [arguments.length];
    if (fixed_lam603 !== undefined) {
        return fixed_lam603.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var assf1249 = function(f1301, l1302) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f1301) !== false) {
        var if_res624 = M1.procedure_arity_includes_p(f1301, 1);
    } else {
        var if_res624 = false;
    }
    if (if_res624 !== false) {
        var if_res625 = M1.rvoid();
    } else {
        var if_res625 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("assf"), $rjs_core.UString.make("(any/c . -> . any/c)"), f1301);
    }
    if_res625;
    var loop1303 = function(l1304, t1305) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l1304) !== false) {
            var a1306 = M5.unsafe_car(l1304);
            if (M1.pair_p(a1306) !== false) {
                if ((function(_1307, a1308) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return f1301(a1308);
                    })(false, M5.unsafe_car(a1306)) !== false) {
                    var if_res631 = a1306;
                } else {
                    var l1309 = M5.unsafe_cdr(l1304);
                    if (M1.pair_p(l1309) !== false) {
                        var a1310 = M5.unsafe_car(l1309);
                        if (M1.pair_p(a1310) !== false) {
                            if ((function(_1311, a1312) {
                                    if (arguments.length !== 2) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    return f1301(a1312);
                                })(false, M5.unsafe_car(a1310)) !== false) {
                                var if_res627 = a1310;
                            } else {
                                var t1313 = M5.unsafe_cdr(t1305);
                                var l1314 = M5.unsafe_cdr(l1309);
                                if (M1.eq_p(l1314, t1313) !== false) {
                                    var if_res626 = bad_list($rjs_core.PrimitiveSymbol.make("assf"), l1302);
                                } else {
                                    var if_res626 = loop1303(l1314, t1313);
                                }
                                var if_res627 = if_res626;
                            }
                            var if_res628 = if_res627;
                        } else {
                            var if_res628 = bad_item($rjs_core.PrimitiveSymbol.make("assf"), a1310, l1302);
                        }
                        var if_res630 = if_res628;
                    } else {
                        if (M1.null_p(l1309) !== false) {
                            var if_res629 = false;
                        } else {
                            var if_res629 = bad_list($rjs_core.PrimitiveSymbol.make("assf"), l1302);
                        }
                        var if_res630 = if_res629;
                    }
                    var if_res631 = if_res630;
                }
                var if_res632 = if_res631;
            } else {
                var if_res632 = bad_item($rjs_core.PrimitiveSymbol.make("assf"), a1306, l1302);
            }
            var if_res634 = if_res632;
        } else {
            if (M1.null_p(l1304) !== false) {
                var if_res633 = false;
            } else {
                var if_res633 = bad_list($rjs_core.PrimitiveSymbol.make("assf"), l1302);
            }
            var if_res634 = if_res633;
        }
        return if_res634;
    };
    return loop1303(l1302, l1302);
};
var let_result635 = M1.values(assq1245, assv1246, assw1247, assoc1248, assf1249);
var assq = let_result635.getAt(0);
var assv = let_result635.getAt(1);
var assw = let_result635.getAt(2);
var assoc = let_result635.getAt(3);
var assf = let_result635.getAt(4);
var mapadd = function(f1315, l1316, last1317) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1318 = function(l1319) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l1319) !== false) {
            var if_res636 = M1.list(last1317);
        } else {
            var if_res636 = M1.cons(f1315(M1.car(l1319)), loop1318(M1.cdr(l1319)));
        }
        return if_res636;
    };
    return loop1318(l1316);
};
var check_fold = function(name1320, proc1321, init1322, l1323, more1324) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(proc1321) !== false) {
        var if_res637 = M1.rvoid();
    } else {
        var if_res637 = M1.apply(M1.raise_argument_error, name1320, $rjs_core.UString.make("procedure?"), 0, proc1321, init1322, l1323, more1324);
    }
    if_res637;
    if (M1.list_p(l1323) !== false) {
        var if_res638 = M1.rvoid();
    } else {
        var if_res638 = M1.apply(M1.raise_argument_error, name1320, $rjs_core.UString.make("list?"), 2, proc1321, init1322, l1323, more1324);
    }
    if_res638;
    if (M1.null_p(more1324) !== false) {
        if (M1.procedure_arity_includes_p(proc1321, 2) !== false) {
            var if_res639 = M1.rvoid();
        } else {
            var if_res639 = M1.raise_mismatch_error(name1320, $rjs_core.UString.make("given procedure does not accept 2 arguments: "), proc1321);
        }
        var if_res644 = if_res639;
    } else {
        var len1325 = M1.length(l1323);
        var loop1326 = function(remaining1327, n1328) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(remaining1327) !== false) {
                var if_res642 = M1.rvoid();
            } else {
                if (M1.list_p(M1.car(remaining1327)) !== false) {
                    var if_res640 = M1.rvoid();
                } else {
                    var if_res640 = M1.apply(M1.raise_argument_error, name1320, $rjs_core.UString.make("list?"), n1328, proc1321, init1322, l1323, more1324);
                }
                if_res640;
                if (M1.__eq_(len1325, M1.length(M1.car(remaining1327))) !== false) {
                    var if_res641 = M1.rvoid();
                } else {
                    var if_res641 = M1.raise_mismatch_error(name1320, $rjs_core.UString.make("given list does not have the same size as the first list: "), M1.car(remaining1327));
                }
                if_res641;
                var if_res642 = loop1326(M1.cdr(remaining1327), M1.add1(n1328));
            }
            return if_res642;
        };
        loop1326(more1324, 3);
        if (M1.procedure_arity_includes_p(proc1321, 2 + M1.length(more1324)) !== false) {
            var if_res643 = M1.rvoid();
        } else {
            var if_res643 = M1.raise_mismatch_error(name1320, M1.format($rjs_core.UString.make("given procedure does not accept ~a arguments: "), 2 + M1.length(more1324)), proc1321);
        }
        var if_res644 = if_res643;
    }
    return if_res644;
};
var cl645 = function(f1329, init1330, l1331) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_fold($rjs_core.PrimitiveSymbol.make("foldl"), f1329, init1330, l1331, M1.rnull);
    var loop1332 = function(init1333, l1334) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l1334) !== false) {
            var if_res649 = init1333;
        } else {
            var if_res649 = loop1332(f1329(M1.car(l1334), init1333), M1.cdr(l1334));
        }
        return if_res649;
    };
    return loop1332(init1330, l1331);
};
var cl646 = $rjs_core.attachProcedureArity(function(f1335, init1336, l1337, ...ls1338650) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var ls1338 = $rjs_core.Pair.listFromArray(ls1338650);
    check_fold($rjs_core.PrimitiveSymbol.make("foldl"), f1335, init1336, l1337, ls1338);
    var loop1339 = function(init1340, ls1341) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(M1.car(ls1341)) !== false) {
            var if_res651 = loop1339(M1.apply(f1335, mapadd(M1.car, ls1341, init1340)), M3.map(M1.cdr, ls1341));
        } else {
            var if_res651 = init1340;
        }
        return if_res651;
    };
    return loop1339(init1336, M1.cons(l1337, ls1338));
});
var foldl = $rjs_core.attachProcedureArity(function() {
    var fixed_lam647 = {
        '3': cl645
    } [arguments.length];
    if (fixed_lam647 !== undefined) {
        return fixed_lam647.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl646.length, 1) !== false) {
            var if_res648 = cl646.apply(null, arguments);
        } else {
            var if_res648 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res648;
    }
}, [M1.make_arity_at_least(3)]);
var cl652 = function(f1342, init1343, l1344) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_fold($rjs_core.PrimitiveSymbol.make("foldr"), f1342, init1343, l1344, M1.rnull);
    var loop1345 = function(init1346, l1347) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l1347) !== false) {
            var if_res656 = init1346;
        } else {
            var if_res656 = f1342(M1.car(l1347), loop1345(init1346, M1.cdr(l1347)));
        }
        return if_res656;
    };
    return loop1345(init1343, l1344);
};
var cl653 = $rjs_core.attachProcedureArity(function(f1348, init1349, l1350, ...ls1351657) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var ls1351 = $rjs_core.Pair.listFromArray(ls1351657);
    check_fold($rjs_core.PrimitiveSymbol.make("foldr"), f1348, init1349, l1350, ls1351);
    var loop1352 = function(ls1353) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(M1.car(ls1353)) !== false) {
            var if_res658 = M1.apply(f1348, mapadd(M1.car, ls1353, loop1352(M3.map(M1.cdr, ls1353))));
        } else {
            var if_res658 = init1349;
        }
        return if_res658;
    };
    return loop1352(M1.cons(l1350, ls1351));
});
var foldr = $rjs_core.attachProcedureArity(function() {
    var fixed_lam654 = {
        '3': cl652
    } [arguments.length];
    if (fixed_lam654 !== undefined) {
        return fixed_lam654.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl653.length, 1) !== false) {
            var if_res655 = cl653.apply(null, arguments);
        } else {
            var if_res655 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res655;
    }
}, [M1.make_arity_at_least(3)]);
var filter = function(f1354, list1355) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f1354) !== false) {
        var if_res659 = M1.procedure_arity_includes_p(f1354, 1);
    } else {
        var if_res659 = false;
    }
    if (if_res659 !== false) {
        var if_res660 = M1.rvoid();
    } else {
        var if_res660 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter"), $rjs_core.UString.make("(any/c . -> . any/c)"), f1354);
    }
    if_res660;
    if (M1.list_p(list1355) !== false) {
        var if_res661 = M1.rvoid();
    } else {
        var if_res661 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter"), $rjs_core.UString.make("list?"), list1355);
    }
    if_res661;
    var loop1356 = function(l1357, result1358) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l1357) !== false) {
            var if_res664 = M6.alt_reverse(result1358);
        } else {
            var temp663 = M1.cdr(l1357);
            if (f1354(M1.car(l1357)) !== false) {
                var if_res662 = M1.cons(M1.car(l1357), result1358);
            } else {
                var if_res662 = result1358;
            }
            var if_res664 = loop1356(temp663, if_res662);
        }
        return if_res664;
    };
    return loop1356(list1355, M1.rnull);
};
var build_vector = function(n1359, fcn1360) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_nonnegative_integer_p(n1359) !== false) {
        var if_res665 = M1.rvoid();
    } else {
        var if_res665 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-vector"), $rjs_core.UString.make("exact-nonnegative-integer?"), n1359);
    }
    if_res665;
    if (M1.procedure_p(fcn1360) !== false) {
        var if_res666 = M1.procedure_arity_includes_p(fcn1360, 1);
    } else {
        var if_res666 = false;
    }
    if (if_res666 !== false) {
        var if_res667 = M1.rvoid();
    } else {
        var if_res667 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-vector"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . any/c)"), fcn1360);
    }
    if_res667;
    var vec1361 = M1.make_vector(n1359);
    var loop1362 = function(i1363) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.__eq_(i1363, n1359) !== false) {
            var if_res668 = vec1361;
        } else {
            M1.vector_set_bang_(vec1361, i1363, fcn1360(i1363));
            var if_res668 = loop1362(M1.add1(i1363));
        }
        return if_res668;
    };
    return loop1362(0);
};
var build_string = function(n1364, fcn1365) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_nonnegative_integer_p(n1364) !== false) {
        var if_res669 = M1.rvoid();
    } else {
        var if_res669 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-string"), $rjs_core.UString.make("exact-nonnegative-integer?"), n1364);
    }
    if_res669;
    if (M1.procedure_p(fcn1365) !== false) {
        var if_res670 = M1.procedure_arity_includes_p(fcn1365, 1);
    } else {
        var if_res670 = false;
    }
    if (if_res670 !== false) {
        var if_res671 = M1.rvoid();
    } else {
        var if_res671 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-string"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . char?)"), fcn1365);
    }
    if_res671;
    var str1366 = M1.make_string(n1364);
    var loop1367 = function(i1368) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.__eq_(i1368, n1364) !== false) {
            var if_res672 = str1366;
        } else {
            M1.string_set_bang_(str1366, i1368, fcn1365(i1368));
            var if_res672 = loop1367(M1.add1(i1368));
        }
        return if_res672;
    };
    return loop1367(0);
};
var build_list = function(n1369, fcn1370) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_nonnegative_integer_p(n1369) !== false) {
        var if_res673 = M1.rvoid();
    } else {
        var if_res673 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-list"), $rjs_core.UString.make("exact-nonnegative-integer?"), n1369);
    }
    if_res673;
    if (M1.procedure_p(fcn1370) !== false) {
        var if_res674 = M1.procedure_arity_includes_p(fcn1370, 1);
    } else {
        var if_res674 = false;
    }
    if (if_res674 !== false) {
        var if_res675 = M1.rvoid();
    } else {
        var if_res675 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-list"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . any/c)"), fcn1370);
    }
    if_res675;
    var recr1371 = function(j1372, i1373) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.zero_p(i1373) !== false) {
            var if_res676 = M1.rnull;
        } else {
            var if_res676 = M1.cons(fcn1370(j1372), recr1371(M1.add1(j1372), M1.sub1(i1373)));
        }
        return if_res676;
    };
    return recr1371(0, n1369);
};
var id_p1374 = function(f1375) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.eq_p(M1.values, f1375);
};
var pipeline11376 = function(f1377, rfuns1378) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var composed1379 = function(x1380) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var loop1381 = function(x1382, f1383, rfuns1384) {
            if (arguments.length !== 3) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(rfuns1384) !== false) {
                var if_res677 = f1383(x1382);
            } else {
                var if_res677 = loop1381(f1383(x1382), M1.car(rfuns1384), M1.cdr(rfuns1384));
            }
            return if_res677;
        };
        return loop1381(x1380, f1377, rfuns1378);
    };
    return composed1379;
};
var pipeline_times_1385 = function(f1386, rfuns1387) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.eqv_p(2, M1.procedure_arity_mask(f1386)) !== false) {
        var loop1388 = function(f1389, rfuns1390) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(rfuns1390) !== false) {
                var if_res679 = f1389;
            } else {
                var fst1391 = M1.car(rfuns1390);
                if (M1.eqv_p(2, M1.procedure_arity_mask(fst1391)) !== false) {
                    var if_res678 = function(x1392) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return fst1391(f1389(x1392));
                    };
                } else {
                    var if_res678 = function(x1393) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return M1.call_with_values(function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f1389(x1393);
                        }, fst1391);
                    };
                }
                var if_res679 = loop1388(if_res678, M1.cdr(rfuns1390));
            }
            return if_res679;
        };
        var if_res686 = loop1388(f1386, rfuns1387);
    } else {
        var funs1394 = M6.alt_reverse(M1.cons(f1386, rfuns1387));
        var loop1395 = function(f1396, funs1397) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(funs1397) !== false) {
                var if_res685 = f1396;
            } else {
                var fst1398 = M1.car(funs1397);
                if (M1.eqv_p(2, M1.procedure_arity_mask(f1396)) !== false) {
                    if (M1.eqv_p(2, M1.procedure_arity_mask(fst1398)) !== false) {
                        var if_res681 = function(x1399) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f1396(fst1398(x1399));
                        };
                    } else {
                        var if_res681 = $rjs_core.attachProcedureArity(function(...xs1400680) {
                            var xs1400 = $rjs_core.Pair.listFromArray(xs1400680);
                            return f1396(M1.apply(fst1398, xs1400));
                        });
                    }
                    var if_res684 = if_res681;
                } else {
                    if (M1.eqv_p(2, M1.procedure_arity_mask(fst1398)) !== false) {
                        var if_res683 = function(x1401) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return fst1398(x1401);
                            }, f1396);
                        };
                    } else {
                        var if_res683 = $rjs_core.attachProcedureArity(function(...xs1402682) {
                            var xs1402 = $rjs_core.Pair.listFromArray(xs1402682);
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return M1.apply(fst1398, xs1402);
                            }, f1396);
                        });
                    }
                    var if_res684 = if_res683;
                }
                var if_res685 = loop1395(if_res684, M1.cdr(funs1397));
            }
            return if_res685;
        };
        var if_res686 = loop1395(M1.car(funs1394), M1.cdr(funs1394));
    }
    return if_res686;
};
var simple_compose1404 = function(f1405, g1406) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var arity_mask1407 = M1.procedure_arity_mask(g1406);
    var let_result687 = M0.procedure_keywords(g1406);
    var required_kwds1408 = let_result687.getAt(0);
    var allowed_kwds1409 = let_result687.getAt(1);
    var tmp1411 = arity_mask1407;
    if (M1.equal_p(tmp1411, 1) !== false) {
        var if_res697 = function() {
            if (arguments.length !== 0) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return f1405(g1406());
        };
    } else {
        if (M1.equal_p(tmp1411, 2) !== false) {
            var if_res696 = function(x1412) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return f1405(g1406(x1412));
            };
        } else {
            if (M1.equal_p(tmp1411, 4) !== false) {
                var if_res695 = function(x1413, y1414) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f1405(g1406(x1413, y1414));
                };
            } else {
                var cl688 = function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f1405(g1406());
                };
                var cl689 = function(x1415) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f1405(g1406(x1415));
                };
                var cl690 = function(x1416, y1417) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f1405(g1406(x1416, y1417));
                };
                var cl691 = $rjs_core.attachProcedureArity(function(...args1418694) {
                    var args1418 = $rjs_core.Pair.listFromArray(args1418694);
                    return f1405(M1.apply(g1406, args1418));
                });
                var if_res695 = $rjs_core.attachProcedureArity(function() {
                    var fixed_lam692 = {
                        '0': cl688,
                        '1': cl689,
                        '2': cl690
                    } [arguments.length];
                    if (fixed_lam692 !== undefined) {
                        return fixed_lam692.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            var if_res693 = cl691.apply(null, arguments);
                        } else {
                            var if_res693 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                        return if_res693;
                    }
                }, [M1.make_arity_at_least(0)]);
            }
            var if_res696 = if_res695;
        }
        var if_res697 = if_res696;
    }
    var composed1410 = if_res697;
    if (M1.null_p(allowed_kwds1409) !== false) {
        if (M1.eqv_p(arity_mask1407, M1.procedure_arity_mask(composed1410)) !== false) {
            var if_res698 = composed1410;
        } else {
            var if_res698 = M0.new_procedure_reduce_arity_mask(composed1410, arity_mask1407);
        }
        var if_res700 = if_res698;
    } else {
        var if_res700 = M0.procedure_reduce_keyword_arity_mask(M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws1419, kw_args1420, ...xs1421699) {
            if (arguments.length < 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            var xs1421 = $rjs_core.Pair.listFromArray(xs1421699);
            return f1405(M2.keyword_apply(g1406, kws1419, kw_args1420, xs1421));
        }), composed1410), arity_mask1407, required_kwds1408, allowed_kwds1409, $rjs_core.PrimitiveSymbol.make("composed"), $rjs_core.PrimitiveSymbol.make("racket"));
    }
    return if_res700;
};
var cl701 = function(f1422) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f1422) !== false) {
        var if_res707 = f1422;
    } else {
        var if_res707 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 0, f1422);
    }
    return if_res707;
};
var cl702 = function(f1423, g1424) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f1423) !== false) {
        var if_res708 = M1.rvoid();
    } else {
        var if_res708 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 0, f1423, g1424);
    }
    if_res708;
    if (M1.procedure_p(g1424) !== false) {
        var if_res709 = M1.rvoid();
    } else {
        var if_res709 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 1, f1423, g1424);
    }
    if_res709;
    if (M1.procedure_arity_includes_p(f1423, 1) !== false) {
        var if_res710 = M1.rvoid();
    } else {
        var if_res710 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("(any/c . -> . any/c)"), 0, f1423, $rjs_core.Pair.EMPTY);
    }
    if_res710;
    var let_result711 = M0.procedure_keywords(f1423);
    var req1425 = let_result711.getAt(0);
    var _1426 = let_result711.getAt(1);
    if (M1.null_p(req1425) !== false) {
        var if_res712 = M1.rvoid();
    } else {
        var if_res712 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), 0, f1423, $rjs_core.Pair.EMPTY);
    }
    if_res712;
    return simple_compose1404(f1423, g1424);
};
var cl703 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.values;
};
var cl704 = $rjs_core.attachProcedureArity(function(f01427, ...fs01428713) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var fs01428 = $rjs_core.Pair.listFromArray(fs01428713);
    var loop1429 = function(g1430, fs1431, i1432, rfuns1433) {
        if (arguments.length !== 4) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.procedure_p(g1430) !== false) {
            var if_res714 = M1.rvoid();
        } else {
            var if_res714 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), i1432, f01427, fs01428);
        }
        if_res714;
        if (M1.pair_p(fs1431) !== false) {
            if (M1.procedure_arity_includes_p(g1430, 1) !== false) {
                var if_res715 = M1.rvoid();
            } else {
                var if_res715 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("(any/c . -> . any/c)"), i1432, f01427, fs01428);
            }
            if_res715;
            var let_result716 = M0.procedure_keywords(g1430);
            var req1434 = let_result716.getAt(0);
            var _1435 = let_result716.getAt(1);
            if (M1.null_p(req1434) !== false) {
                var if_res717 = M1.rvoid();
            } else {
                var if_res717 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), i1432, f01427, fs01428);
            }
            if_res717;
            var if_res719 = loop1429(M1.car(fs1431), M1.cdr(fs1431), M1.add1(i1432), M1.cons(g1430, rfuns1433));
        } else {
            var rfuns1436 = remq_times_(M1.list(M1.values), rfuns1433);
            if (M1.null_p(rfuns1436) !== false) {
                var if_res718 = M1.values;
            } else {
                var if_res718 = pipeline11376(M1.car(rfuns1436), M1.cdr(rfuns1436));
            }
            var f1437 = if_res718;
            var if_res719 = simple_compose1404(f1437, g1430);
        }
        return if_res719;
    };
    return loop1429(f01427, fs01428, 0, $rjs_core.Pair.EMPTY);
});
var compose11403 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam705 = {
        '1': cl701,
        '2': cl702,
        '0': cl703
    } [arguments.length];
    if (fixed_lam705 !== undefined) {
        return fixed_lam705.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl704.length, 1) !== false) {
            var if_res706 = cl704.apply(null, arguments);
        } else {
            var if_res706 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res706;
    }
}, [0, M1.make_arity_at_least(1)]);
var simple_compose1439 = function(f1440, g1441) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (id_p1374(f1440) !== false) {
        var if_res749 = g1441;
    } else {
        if (M1.eqv_p(2, M1.procedure_arity_mask(f1440)) !== false) {
            var arity_mask1442 = M1.procedure_arity_mask(g1441);
            var let_result720 = M0.procedure_keywords(g1441);
            var required_kwds1443 = let_result720.getAt(0);
            var allowed_kwds1444 = let_result720.getAt(1);
            var tmp1446 = arity_mask1442;
            if (M1.equal_p(tmp1446, 1) !== false) {
                var if_res730 = function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f1440(g1441());
                };
            } else {
                if (M1.equal_p(tmp1446, 2) !== false) {
                    var if_res729 = function(x1447) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return f1440(g1441(x1447));
                    };
                } else {
                    if (M1.equal_p(tmp1446, 4) !== false) {
                        var if_res728 = function(x1448, y1449) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f1440(g1441(x1448, y1449));
                        };
                    } else {
                        var cl721 = function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f1440(g1441());
                        };
                        var cl722 = function(x1450) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f1440(g1441(x1450));
                        };
                        var cl723 = function(x1451, y1452) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f1440(g1441(x1451, y1452));
                        };
                        var cl724 = $rjs_core.attachProcedureArity(function(...args1453727) {
                            var args1453 = $rjs_core.Pair.listFromArray(args1453727);
                            return f1440(M1.apply(g1441, args1453));
                        });
                        var if_res728 = $rjs_core.attachProcedureArity(function() {
                            var fixed_lam725 = {
                                '0': cl721,
                                '1': cl722,
                                '2': cl723
                            } [arguments.length];
                            if (fixed_lam725 !== undefined) {
                                return fixed_lam725.apply(null, arguments);
                            } else {
                                if (true !== false) {
                                    var if_res726 = cl724.apply(null, arguments);
                                } else {
                                    var if_res726 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
                                }
                                return if_res726;
                            }
                        }, [M1.make_arity_at_least(0)]);
                    }
                    var if_res729 = if_res728;
                }
                var if_res730 = if_res729;
            }
            var composed1445 = if_res730;
            if (M1.null_p(allowed_kwds1444) !== false) {
                if (M1.eqv_p(arity_mask1442, M1.procedure_arity_mask(composed1445)) !== false) {
                    var if_res731 = composed1445;
                } else {
                    var if_res731 = M0.new_procedure_reduce_arity_mask(composed1445, arity_mask1442);
                }
                var if_res733 = if_res731;
            } else {
                var if_res733 = M0.procedure_reduce_keyword_arity_mask(M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws1454, kw_args1455, ...xs1456732) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var xs1456 = $rjs_core.Pair.listFromArray(xs1456732);
                    return f1440(M2.keyword_apply(g1441, kws1454, kw_args1455, xs1456));
                }), composed1445), arity_mask1442, required_kwds1443, allowed_kwds1444, $rjs_core.PrimitiveSymbol.make("composed"), $rjs_core.PrimitiveSymbol.make("racket"));
            }
            var if_res748 = if_res733;
        } else {
            var arity_mask1457 = M1.procedure_arity_mask(g1441);
            var let_result734 = M0.procedure_keywords(g1441);
            var required_kwds1458 = let_result734.getAt(0);
            var allowed_kwds1459 = let_result734.getAt(1);
            var tmp1461 = arity_mask1457;
            if (M1.equal_p(tmp1461, 1) !== false) {
                var if_res744 = function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M1.call_with_values(function() {
                        if (arguments.length !== 0) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return g1441();
                    }, f1440);
                };
            } else {
                if (M1.equal_p(tmp1461, 2) !== false) {
                    var if_res743 = function(x1462) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return M1.call_with_values(function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return g1441(x1462);
                        }, f1440);
                    };
                } else {
                    if (M1.equal_p(tmp1461, 4) !== false) {
                        var if_res742 = function(x1463, y1464) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g1441(x1463, y1464);
                            }, f1440);
                        };
                    } else {
                        var cl735 = function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g1441();
                            }, f1440);
                        };
                        var cl736 = function(x1465) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g1441(x1465);
                            }, f1440);
                        };
                        var cl737 = function(x1466, y1467) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g1441(x1466, y1467);
                            }, f1440);
                        };
                        var cl738 = $rjs_core.attachProcedureArity(function(...args1468741) {
                            var args1468 = $rjs_core.Pair.listFromArray(args1468741);
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return M1.apply(g1441, args1468);
                            }, f1440);
                        });
                        var if_res742 = $rjs_core.attachProcedureArity(function() {
                            var fixed_lam739 = {
                                '0': cl735,
                                '1': cl736,
                                '2': cl737
                            } [arguments.length];
                            if (fixed_lam739 !== undefined) {
                                return fixed_lam739.apply(null, arguments);
                            } else {
                                if (true !== false) {
                                    var if_res740 = cl738.apply(null, arguments);
                                } else {
                                    var if_res740 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
                                }
                                return if_res740;
                            }
                        }, [M1.make_arity_at_least(0)]);
                    }
                    var if_res743 = if_res742;
                }
                var if_res744 = if_res743;
            }
            var composed1460 = if_res744;
            if (M1.null_p(allowed_kwds1459) !== false) {
                if (M1.eqv_p(arity_mask1457, M1.procedure_arity_mask(composed1460)) !== false) {
                    var if_res745 = composed1460;
                } else {
                    var if_res745 = M0.new_procedure_reduce_arity_mask(composed1460, arity_mask1457);
                }
                var if_res747 = if_res745;
            } else {
                var if_res747 = M0.procedure_reduce_keyword_arity_mask(M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws1469, kw_args1470, ...xs1471746) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var xs1471 = $rjs_core.Pair.listFromArray(xs1471746);
                    return M1.call_with_values(function() {
                        if (arguments.length !== 0) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return M2.keyword_apply(g1441, kws1469, kw_args1470, xs1471);
                    }, f1440);
                }), composed1460), arity_mask1457, required_kwds1458, allowed_kwds1459, $rjs_core.PrimitiveSymbol.make("composed"), $rjs_core.PrimitiveSymbol.make("racket"));
            }
            var if_res748 = if_res747;
        }
        var if_res749 = if_res748;
    }
    return if_res749;
};
var cl750 = function(f1472) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f1472) !== false) {
        var if_res756 = f1472;
    } else {
        var if_res756 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 0, f1472);
    }
    return if_res756;
};
var cl751 = function(f1473, g1474) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f1473) !== false) {
        var if_res757 = M1.rvoid();
    } else {
        var if_res757 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 0, f1473, g1474);
    }
    if_res757;
    if (M1.procedure_p(g1474) !== false) {
        var if_res758 = M1.rvoid();
    } else {
        var if_res758 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 1, f1473, g1474);
    }
    if_res758;
    var let_result759 = M0.procedure_keywords(f1473);
    var req1475 = let_result759.getAt(0);
    var _1476 = let_result759.getAt(1);
    if (M1.null_p(req1475) !== false) {
        var if_res760 = M1.rvoid();
    } else {
        var if_res760 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), 0, f1473, $rjs_core.Pair.EMPTY);
    }
    if_res760;
    return simple_compose1439(f1473, g1474);
};
var cl752 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.values;
};
var cl753 = $rjs_core.attachProcedureArity(function(f01477, ...fs01478761) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var fs01478 = $rjs_core.Pair.listFromArray(fs01478761);
    var loop1479 = function(g1480, fs1481, i1482, rfuns1483) {
        if (arguments.length !== 4) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.procedure_p(g1480) !== false) {
            var if_res762 = M1.rvoid();
        } else {
            var if_res762 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), i1482, f01477, fs01478);
        }
        if_res762;
        if (M1.pair_p(fs1481) !== false) {
            var let_result763 = M0.procedure_keywords(g1480);
            var req1484 = let_result763.getAt(0);
            var _1485 = let_result763.getAt(1);
            if (M1.null_p(req1484) !== false) {
                var if_res764 = M1.rvoid();
            } else {
                var if_res764 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), i1482, f01477, fs01478);
            }
            if_res764;
            var if_res766 = loop1479(M1.car(fs1481), M1.cdr(fs1481), M1.add1(i1482), M1.cons(g1480, rfuns1483));
        } else {
            var rfuns1486 = remq_times_(M1.list(M1.values), rfuns1483);
            if (M1.null_p(rfuns1486) !== false) {
                var if_res765 = M1.values;
            } else {
                var if_res765 = pipeline_times_1385(M1.car(rfuns1486), M1.cdr(rfuns1486));
            }
            var f1487 = if_res765;
            var if_res766 = simple_compose1439(f1487, g1480);
        }
        return if_res766;
    };
    return loop1479(f01477, fs01478, 0, $rjs_core.Pair.EMPTY);
});
var compose1438 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam754 = {
        '1': cl750,
        '2': cl751,
        '0': cl752
    } [arguments.length];
    if (fixed_lam754 !== undefined) {
        return fixed_lam754.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl753.length, 1) !== false) {
            var if_res755 = cl753.apply(null, arguments);
        } else {
            var if_res755 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res755;
    }
}, [0, M1.make_arity_at_least(1)]);
var let_result767 = M1.values(compose11403, compose1438);
var compose1 = let_result767.getAt(0);
var compose = let_result767.getAt(1);
var __rjs_quoted__ = {};
__rjs_quoted__.sort = sort;
__rjs_quoted__.sort7 = sort7;
export {
    __rjs_quoted__,
    compose1,
    compose,
    build_list,
    build_string,
    build_vector,
    sort,
    filter,
    assoc,
    assw,
    assv,
    assq,
    findf,
    assf,
    memf,
    remove_times_,
    remq_times_,
    remw_times_,
    remv_times_,
    remove,
    remw,
    remq,
    remv,
    foldr,
    foldl
};