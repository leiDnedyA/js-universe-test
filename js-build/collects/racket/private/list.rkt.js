import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./kw.rkt.js";
import * as M1 from "../../../runtime/kernel.rkt.js";
import * as M2 from "./pre-base.rkt.js";
import * as M3 from "./map.rkt.js";
import * as M4 from "./sort.rkt.js";
import * as M5 from "../../../runtime/unsafe.rkt.js";
import * as M6 from "./reverse.rkt.js";
var sort = function(cache_keys_p22953, key12954, lst52955, less_p62956) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var lst2957 = lst52955;
    var less_p2958 = less_p62956;
    if (false !== false) {
        var if_res1528 = false;
    } else {
        var if_res1528 = key12954;
    }
    var getkey2959 = if_res1528;
    if (false !== false) {
        var if_res1529 = false;
    } else {
        var if_res1529 = cache_keys_p22953;
    }
    var cache_keys_p2960 = if_res1529;
    if (M1.list_p(lst2957) !== false) {
        var if_res1530 = M1.rvoid();
    } else {
        var if_res1530 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("list?"), lst2957);
    }
    if_res1530;
    if (M1.procedure_p(less_p2958) !== false) {
        var if_res1531 = M1.procedure_arity_includes_p(less_p2958, 2);
    } else {
        var if_res1531 = false;
    }
    if (if_res1531 !== false) {
        var if_res1532 = M1.rvoid();
    } else {
        var if_res1532 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), less_p2958);
    }
    if_res1532;
    if (getkey2959 !== false) {
        if (M1.procedure_p(getkey2959) !== false) {
            var if_res1533 = M1.procedure_arity_includes_p(getkey2959, 1);
        } else {
            var if_res1533 = false;
        }
        var if_res1534 = M1.not(if_res1533);
    } else {
        var if_res1534 = false;
    }
    if (if_res1534 !== false) {
        var if_res1535 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("(any/c . -> . any/c)"), getkey2959);
    } else {
        var if_res1535 = M1.rvoid();
    }
    if_res1535;
    if (getkey2959 !== false) {
        var if_res1536 = M4.sort(lst2957, less_p2958, getkey2959, cache_keys_p2960);
    } else {
        var if_res1536 = M4.sort(lst2957, less_p2958);
    }
    return if_res1536;
};
var sort2952 = function(given_kws2961, given_args2962, lst52963, less_p62964) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.pair_p(given_kws2961) !== false) {
        var if_res1537 = M1.eq_p($rjs_core.Keyword.make("cache-keys?"), M1.car(given_kws2961));
    } else {
        var if_res1537 = false;
    }
    var cache_keys_p42965 = if_res1537;
    if (cache_keys_p42965 !== false) {
        var if_res1538 = M1.car(given_args2962);
    } else {
        var if_res1538 = false;
    }
    var cache_keys_p22966 = if_res1538;
    if (cache_keys_p42965 !== false) {
        var if_res1539 = M1.cdr(given_kws2961);
    } else {
        var if_res1539 = given_kws2961;
    }
    var kws2029552967 = if_res1539;
    if (cache_keys_p42965 !== false) {
        var if_res1540 = M1.cdr(given_args2962);
    } else {
        var if_res1540 = given_args2962;
    }
    var kw_args2029562968 = if_res1540;
    var key32969 = M1.pair_p(kws2029552967);
    if (key32969 !== false) {
        var if_res1541 = M1.car(kw_args2029562968);
    } else {
        var if_res1541 = false;
    }
    var key12970 = if_res1541;
    return sort(cache_keys_p22966, key12970, lst52963, less_p62964);
};
var cl1545 = function(given_kws2977, given_args2978, lst2979, less_p2980) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return sort2952(given_kws2977, given_args2978, lst2979, less_p2980);
};
var temp1547 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1546 = {
        '4': cl1545
    } [arguments.length];
    if (fixed_lam1546 !== undefined) {
        return fixed_lam1546.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4]);
var temp1544 = $rjs_core.Pair.makeList($rjs_core.Keyword.make("cache-keys?"), $rjs_core.Keyword.make("key"));
var cl1542 = function(lst2981, less_p2982) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return sort2952(M1.rnull, M1.rnull, lst2981, less_p2982);
};
var sort7 = M0.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws2971, given_argc2972) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.__eq_(given_argc2972, 4) !== false) {
        var l12029572973 = given_kws2971;
        if (M1.null_p(l12029572973) !== false) {
            var if_res1549 = l12029572973;
        } else {
            if (M1.eq_p(M1.car(l12029572973), $rjs_core.Keyword.make("cache-keys?")) !== false) {
                var if_res1548 = M1.cdr(l12029572973);
            } else {
                var if_res1548 = l12029572973;
            }
            var if_res1549 = if_res1548;
        }
        var l12029572974 = if_res1549;
        var l12029582975 = l12029572974;
        if (M1.null_p(l12029582975) !== false) {
            var if_res1551 = l12029582975;
        } else {
            if (M1.eq_p(M1.car(l12029582975), $rjs_core.Keyword.make("key")) !== false) {
                var if_res1550 = M1.cdr(l12029582975);
            } else {
                var if_res1550 = l12029582975;
            }
            var if_res1551 = if_res1550;
        }
        var l12029582976 = if_res1551;
        var if_res1552 = M1.null_p(l12029582976);
    } else {
        var if_res1552 = false;
    }
    return if_res1552;
}, temp1547, M1.rnull, temp1544, $rjs_core.attachProcedureArity(function() {
    var fixed_lam1543 = {
        '2': cl1542
    } [arguments.length];
    if (fixed_lam1543 !== undefined) {
        return fixed_lam1543.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2]));
var do_remove = function(who2983, item2984, list2985, equal_p2986) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.list_p(list2985) !== false) {
        var if_res1553 = M1.rvoid();
    } else {
        var if_res1553 = M1.raise_argument_error(who2983, $rjs_core.UString.make("list?"), list2985);
    }
    if_res1553;
    var loop2987 = function(list2988) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(list2988) !== false) {
            var if_res1556 = list2988;
        } else {
            if (equal_p2986(item2984, M1.car(list2988)) !== false) {
                var if_res1555 = M1.cdr(list2988);
            } else {
                var next2989 = loop2987(M1.cdr(list2988));
                if (M1.eq_p(next2989, M1.cdr(list2988)) !== false) {
                    var if_res1554 = list2988;
                } else {
                    var if_res1554 = M1.cons(M1.car(list2988), next2989);
                }
                var if_res1555 = if_res1554;
            }
            var if_res1556 = if_res1555;
        }
        return if_res1556;
    };
    return loop2987(list2985);
};
var cl1557 = function(item2990, list2991) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remove"), item2990, list2991, M1.equal_p);
};
var cl1558 = function(item2992, list2993, equal_p2994) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(equal_p2994) !== false) {
        var if_res1560 = M1.procedure_arity_includes_p(equal_p2994, 2);
    } else {
        var if_res1560 = false;
    }
    if (if_res1560 !== false) {
        var if_res1561 = M1.rvoid();
    } else {
        var if_res1561 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("remove"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), equal_p2994);
    }
    if_res1561;
    return do_remove($rjs_core.PrimitiveSymbol.make("remove"), item2992, list2993, equal_p2994);
};
var remove = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1559 = {
        '2': cl1557,
        '3': cl1558
    } [arguments.length];
    if (fixed_lam1559 !== undefined) {
        return fixed_lam1559.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var remq = function(item2995, list2996) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remq"), item2995, list2996, M1.eq_p);
};
var remv = function(item2997, list2998) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remv"), item2997, list2998, M1.eqv_p);
};
var remw = function(item2999, list3000) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remw"), item2999, list3000, M1.equal_always_p);
};
var do_remove_times_ = function(who3001, l3002, r3003, equal_p3004) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.list_p(l3002) !== false) {
        var if_res1562 = M1.rvoid();
    } else {
        var if_res1562 = M1.raise_argument_error(who3001, $rjs_core.UString.make("list?"), l3002);
    }
    if_res1562;
    if (M1.list_p(r3003) !== false) {
        var if_res1563 = M1.rvoid();
    } else {
        var if_res1563 = M1.raise_argument_error(who3001, $rjs_core.UString.make("list?"), r3003);
    }
    if_res1563;
    var rloop3005 = function(r3006) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(r3006) !== false) {
            var if_res1567 = r3006;
        } else {
            var first_r3007 = M1.car(r3006);
            var loop3008 = function(l_rest3009) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(l_rest3009) !== false) {
                    var next3010 = rloop3005(M1.cdr(r3006));
                    if (M1.eq_p(next3010, M1.cdr(r3006)) !== false) {
                        var if_res1564 = r3006;
                    } else {
                        var if_res1564 = M1.cons(first_r3007, next3010);
                    }
                    var if_res1566 = if_res1564;
                } else {
                    if (equal_p3004(M1.car(l_rest3009), first_r3007) !== false) {
                        var if_res1565 = rloop3005(M1.cdr(r3006));
                    } else {
                        var if_res1565 = loop3008(M1.cdr(l_rest3009));
                    }
                    var if_res1566 = if_res1565;
                }
                return if_res1566;
            };
            var if_res1567 = loop3008(l3002);
        }
        return if_res1567;
    };
    return rloop3005(r3003);
};
var cl1568 = function(l3011, r3012) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remove*"), l3011, r3012, M1.equal_p);
};
var cl1569 = function(l3013, r3014, equal_p3015) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(equal_p3015) !== false) {
        var if_res1571 = M1.procedure_arity_includes_p(equal_p3015, 2);
    } else {
        var if_res1571 = false;
    }
    if (if_res1571 !== false) {
        var if_res1572 = M1.rvoid();
    } else {
        var if_res1572 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("remove*"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), equal_p3015);
    }
    if_res1572;
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remove*"), l3013, r3014, equal_p3015);
};
var remove_times_ = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1570 = {
        '2': cl1568,
        '3': cl1569
    } [arguments.length];
    if (fixed_lam1570 !== undefined) {
        return fixed_lam1570.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var remq_times_ = function(l3016, r3017) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remq*"), l3016, r3017, M1.eq_p);
};
var remv_times_ = function(l3018, r3019) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remv*"), l3018, r3019, M1.eqv_p);
};
var remw_times_ = function(l3020, r3021) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remw*"), l3020, r3021, M1.equal_always_p);
};
var memf = function(f3022, list3023) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f3022) !== false) {
        var if_res1573 = M1.procedure_arity_includes_p(f3022, 1);
    } else {
        var if_res1573 = false;
    }
    if (if_res1573 !== false) {
        var if_res1574 = M1.rvoid();
    } else {
        var if_res1574 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("memf"), $rjs_core.UString.make("(any/c . -> any/c)"), f3022);
    }
    if_res1574;
    var loop3024 = function(l3025) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l3025) !== false) {
            var if_res1577 = false;
        } else {
            if (M1.not(M1.pair_p(l3025)) !== false) {
                var if_res1576 = M1.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("memf"), $rjs_core.UString.make("not a proper list: "), list3023);
            } else {
                if (f3022(M1.car(l3025)) !== false) {
                    var if_res1575 = l3025;
                } else {
                    var if_res1575 = loop3024(M1.cdr(l3025));
                }
                var if_res1576 = if_res1575;
            }
            var if_res1577 = if_res1576;
        }
        return if_res1577;
    };
    return loop3024(list3023);
};
var findf = function(f3026, list3027) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f3026) !== false) {
        var if_res1578 = M1.procedure_arity_includes_p(f3026, 1);
    } else {
        var if_res1578 = false;
    }
    if (if_res1578 !== false) {
        var if_res1579 = M1.rvoid();
    } else {
        var if_res1579 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("findf"), $rjs_core.UString.make("(any/c . -> . any/c)"), f3026);
    }
    if_res1579;
    var loop3028 = function(l3029) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l3029) !== false) {
            var if_res1582 = false;
        } else {
            if (M1.not(M1.pair_p(l3029)) !== false) {
                var if_res1581 = M1.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("findf"), $rjs_core.UString.make("not a proper list: "), list3027);
            } else {
                var a3030 = M1.car(l3029);
                if (f3026(a3030) !== false) {
                    var if_res1580 = a3030;
                } else {
                    var if_res1580 = loop3028(M1.cdr(l3029));
                }
                var if_res1581 = if_res1580;
            }
            var if_res1582 = if_res1581;
        }
        return if_res1582;
    };
    return loop3028(list3027);
};
var bad_list = function(who3031, orig_l3032) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.raise_mismatch_error(who3031, $rjs_core.UString.make("not a proper list: "), orig_l3032);
};
var bad_item = function(who3033, a3034, orig_l3035) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.raise_arguments_error(who3033, $rjs_core.UString.make("non-pair found in list"), $rjs_core.UString.make("non-pair"), a3034, $rjs_core.UString.make("list"), orig_l3035);
};
var assq3036 = function(x3041, l3042) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop3043 = function(l3044, t3045) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l3044) !== false) {
            var a3046 = M5.unsafe_car(l3044);
            if (M1.pair_p(a3046) !== false) {
                if (M1.eq_p(x3041, M5.unsafe_car(a3046)) !== false) {
                    var if_res1588 = a3046;
                } else {
                    var l3047 = M5.unsafe_cdr(l3044);
                    if (M1.pair_p(l3047) !== false) {
                        var a3048 = M5.unsafe_car(l3047);
                        if (M1.pair_p(a3048) !== false) {
                            if (M1.eq_p(x3041, M5.unsafe_car(a3048)) !== false) {
                                var if_res1584 = a3048;
                            } else {
                                var t3049 = M5.unsafe_cdr(t3045);
                                var l3050 = M5.unsafe_cdr(l3047);
                                if (M1.eq_p(l3050, t3049) !== false) {
                                    var if_res1583 = bad_list($rjs_core.PrimitiveSymbol.make("assq"), l3042);
                                } else {
                                    var if_res1583 = loop3043(l3050, t3049);
                                }
                                var if_res1584 = if_res1583;
                            }
                            var if_res1585 = if_res1584;
                        } else {
                            var if_res1585 = bad_item($rjs_core.PrimitiveSymbol.make("assq"), a3048, l3042);
                        }
                        var if_res1587 = if_res1585;
                    } else {
                        if (M1.null_p(l3047) !== false) {
                            var if_res1586 = false;
                        } else {
                            var if_res1586 = bad_list($rjs_core.PrimitiveSymbol.make("assq"), l3042);
                        }
                        var if_res1587 = if_res1586;
                    }
                    var if_res1588 = if_res1587;
                }
                var if_res1589 = if_res1588;
            } else {
                var if_res1589 = bad_item($rjs_core.PrimitiveSymbol.make("assq"), a3046, l3042);
            }
            var if_res1591 = if_res1589;
        } else {
            if (M1.null_p(l3044) !== false) {
                var if_res1590 = false;
            } else {
                var if_res1590 = bad_list($rjs_core.PrimitiveSymbol.make("assq"), l3042);
            }
            var if_res1591 = if_res1590;
        }
        return if_res1591;
    };
    return loop3043(l3042, l3042);
};
var assv3037 = function(x3051, l3052) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop3053 = function(l3054, t3055) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l3054) !== false) {
            var a3056 = M5.unsafe_car(l3054);
            if (M1.pair_p(a3056) !== false) {
                if (M1.eqv_p(x3051, M5.unsafe_car(a3056)) !== false) {
                    var if_res1597 = a3056;
                } else {
                    var l3057 = M5.unsafe_cdr(l3054);
                    if (M1.pair_p(l3057) !== false) {
                        var a3058 = M5.unsafe_car(l3057);
                        if (M1.pair_p(a3058) !== false) {
                            if (M1.eqv_p(x3051, M5.unsafe_car(a3058)) !== false) {
                                var if_res1593 = a3058;
                            } else {
                                var t3059 = M5.unsafe_cdr(t3055);
                                var l3060 = M5.unsafe_cdr(l3057);
                                if (M1.eq_p(l3060, t3059) !== false) {
                                    var if_res1592 = bad_list($rjs_core.PrimitiveSymbol.make("assv"), l3052);
                                } else {
                                    var if_res1592 = loop3053(l3060, t3059);
                                }
                                var if_res1593 = if_res1592;
                            }
                            var if_res1594 = if_res1593;
                        } else {
                            var if_res1594 = bad_item($rjs_core.PrimitiveSymbol.make("assv"), a3058, l3052);
                        }
                        var if_res1596 = if_res1594;
                    } else {
                        if (M1.null_p(l3057) !== false) {
                            var if_res1595 = false;
                        } else {
                            var if_res1595 = bad_list($rjs_core.PrimitiveSymbol.make("assv"), l3052);
                        }
                        var if_res1596 = if_res1595;
                    }
                    var if_res1597 = if_res1596;
                }
                var if_res1598 = if_res1597;
            } else {
                var if_res1598 = bad_item($rjs_core.PrimitiveSymbol.make("assv"), a3056, l3052);
            }
            var if_res1600 = if_res1598;
        } else {
            if (M1.null_p(l3054) !== false) {
                var if_res1599 = false;
            } else {
                var if_res1599 = bad_list($rjs_core.PrimitiveSymbol.make("assv"), l3052);
            }
            var if_res1600 = if_res1599;
        }
        return if_res1600;
    };
    return loop3053(l3052, l3052);
};
var assw3038 = function(x3061, l3062) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop3063 = function(l3064, t3065) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l3064) !== false) {
            var a3066 = M5.unsafe_car(l3064);
            if (M1.pair_p(a3066) !== false) {
                if (M1.equal_always_p(x3061, M5.unsafe_car(a3066)) !== false) {
                    var if_res1606 = a3066;
                } else {
                    var l3067 = M5.unsafe_cdr(l3064);
                    if (M1.pair_p(l3067) !== false) {
                        var a3068 = M5.unsafe_car(l3067);
                        if (M1.pair_p(a3068) !== false) {
                            if (M1.equal_always_p(x3061, M5.unsafe_car(a3068)) !== false) {
                                var if_res1602 = a3068;
                            } else {
                                var t3069 = M5.unsafe_cdr(t3065);
                                var l3070 = M5.unsafe_cdr(l3067);
                                if (M1.eq_p(l3070, t3069) !== false) {
                                    var if_res1601 = bad_list($rjs_core.PrimitiveSymbol.make("assw"), l3062);
                                } else {
                                    var if_res1601 = loop3063(l3070, t3069);
                                }
                                var if_res1602 = if_res1601;
                            }
                            var if_res1603 = if_res1602;
                        } else {
                            var if_res1603 = bad_item($rjs_core.PrimitiveSymbol.make("assw"), a3068, l3062);
                        }
                        var if_res1605 = if_res1603;
                    } else {
                        if (M1.null_p(l3067) !== false) {
                            var if_res1604 = false;
                        } else {
                            var if_res1604 = bad_list($rjs_core.PrimitiveSymbol.make("assw"), l3062);
                        }
                        var if_res1605 = if_res1604;
                    }
                    var if_res1606 = if_res1605;
                }
                var if_res1607 = if_res1606;
            } else {
                var if_res1607 = bad_item($rjs_core.PrimitiveSymbol.make("assw"), a3066, l3062);
            }
            var if_res1609 = if_res1607;
        } else {
            if (M1.null_p(l3064) !== false) {
                var if_res1608 = false;
            } else {
                var if_res1608 = bad_list($rjs_core.PrimitiveSymbol.make("assw"), l3062);
            }
            var if_res1609 = if_res1608;
        }
        return if_res1609;
    };
    return loop3063(l3062, l3062);
};
var cl1610 = function(x3071, l3072) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop3073 = function(l3074, t3075) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l3074) !== false) {
            var a3076 = M5.unsafe_car(l3074);
            if (M1.pair_p(a3076) !== false) {
                if (M1.equal_p(x3071, M5.unsafe_car(a3076)) !== false) {
                    var if_res1618 = a3076;
                } else {
                    var l3077 = M5.unsafe_cdr(l3074);
                    if (M1.pair_p(l3077) !== false) {
                        var a3078 = M5.unsafe_car(l3077);
                        if (M1.pair_p(a3078) !== false) {
                            if (M1.equal_p(x3071, M5.unsafe_car(a3078)) !== false) {
                                var if_res1614 = a3078;
                            } else {
                                var t3079 = M5.unsafe_cdr(t3075);
                                var l3080 = M5.unsafe_cdr(l3077);
                                if (M1.eq_p(l3080, t3079) !== false) {
                                    var if_res1613 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l3072);
                                } else {
                                    var if_res1613 = loop3073(l3080, t3079);
                                }
                                var if_res1614 = if_res1613;
                            }
                            var if_res1615 = if_res1614;
                        } else {
                            var if_res1615 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a3078, l3072);
                        }
                        var if_res1617 = if_res1615;
                    } else {
                        if (M1.null_p(l3077) !== false) {
                            var if_res1616 = false;
                        } else {
                            var if_res1616 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l3072);
                        }
                        var if_res1617 = if_res1616;
                    }
                    var if_res1618 = if_res1617;
                }
                var if_res1619 = if_res1618;
            } else {
                var if_res1619 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a3076, l3072);
            }
            var if_res1621 = if_res1619;
        } else {
            if (M1.null_p(l3074) !== false) {
                var if_res1620 = false;
            } else {
                var if_res1620 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l3072);
            }
            var if_res1621 = if_res1620;
        }
        return if_res1621;
    };
    return loop3073(l3072, l3072);
};
var cl1611 = function(x3081, l3082, is_equal_p3083) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(is_equal_p3083) !== false) {
        var if_res1622 = M1.procedure_arity_includes_p(is_equal_p3083, 2);
    } else {
        var if_res1622 = false;
    }
    if (if_res1622 !== false) {
        var if_res1623 = M1.rvoid();
    } else {
        var if_res1623 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("assoc"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), is_equal_p3083);
    }
    if_res1623;
    var loop3084 = function(l3085, t3086) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l3085) !== false) {
            var a3087 = M5.unsafe_car(l3085);
            if (M1.pair_p(a3087) !== false) {
                if (is_equal_p3083(x3081, M5.unsafe_car(a3087)) !== false) {
                    var if_res1629 = a3087;
                } else {
                    var l3088 = M5.unsafe_cdr(l3085);
                    if (M1.pair_p(l3088) !== false) {
                        var a3089 = M5.unsafe_car(l3088);
                        if (M1.pair_p(a3089) !== false) {
                            if (is_equal_p3083(x3081, M5.unsafe_car(a3089)) !== false) {
                                var if_res1625 = a3089;
                            } else {
                                var t3090 = M5.unsafe_cdr(t3086);
                                var l3091 = M5.unsafe_cdr(l3088);
                                if (M1.eq_p(l3091, t3090) !== false) {
                                    var if_res1624 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l3082);
                                } else {
                                    var if_res1624 = loop3084(l3091, t3090);
                                }
                                var if_res1625 = if_res1624;
                            }
                            var if_res1626 = if_res1625;
                        } else {
                            var if_res1626 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a3089, l3082);
                        }
                        var if_res1628 = if_res1626;
                    } else {
                        if (M1.null_p(l3088) !== false) {
                            var if_res1627 = false;
                        } else {
                            var if_res1627 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l3082);
                        }
                        var if_res1628 = if_res1627;
                    }
                    var if_res1629 = if_res1628;
                }
                var if_res1630 = if_res1629;
            } else {
                var if_res1630 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a3087, l3082);
            }
            var if_res1632 = if_res1630;
        } else {
            if (M1.null_p(l3085) !== false) {
                var if_res1631 = false;
            } else {
                var if_res1631 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l3082);
            }
            var if_res1632 = if_res1631;
        }
        return if_res1632;
    };
    return loop3084(l3082, l3082);
};
var assoc3039 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1612 = {
        '2': cl1610,
        '3': cl1611
    } [arguments.length];
    if (fixed_lam1612 !== undefined) {
        return fixed_lam1612.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var assf3040 = function(f3092, l3093) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f3092) !== false) {
        var if_res1633 = M1.procedure_arity_includes_p(f3092, 1);
    } else {
        var if_res1633 = false;
    }
    if (if_res1633 !== false) {
        var if_res1634 = M1.rvoid();
    } else {
        var if_res1634 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("assf"), $rjs_core.UString.make("(any/c . -> . any/c)"), f3092);
    }
    if_res1634;
    var loop3094 = function(l3095, t3096) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l3095) !== false) {
            var a3097 = M5.unsafe_car(l3095);
            if (M1.pair_p(a3097) !== false) {
                if ((function(_3098, a3099) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return f3092(a3099);
                    })(false, M5.unsafe_car(a3097)) !== false) {
                    var if_res1640 = a3097;
                } else {
                    var l3100 = M5.unsafe_cdr(l3095);
                    if (M1.pair_p(l3100) !== false) {
                        var a3101 = M5.unsafe_car(l3100);
                        if (M1.pair_p(a3101) !== false) {
                            if ((function(_3102, a3103) {
                                    if (arguments.length !== 2) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    return f3092(a3103);
                                })(false, M5.unsafe_car(a3101)) !== false) {
                                var if_res1636 = a3101;
                            } else {
                                var t3104 = M5.unsafe_cdr(t3096);
                                var l3105 = M5.unsafe_cdr(l3100);
                                if (M1.eq_p(l3105, t3104) !== false) {
                                    var if_res1635 = bad_list($rjs_core.PrimitiveSymbol.make("assf"), l3093);
                                } else {
                                    var if_res1635 = loop3094(l3105, t3104);
                                }
                                var if_res1636 = if_res1635;
                            }
                            var if_res1637 = if_res1636;
                        } else {
                            var if_res1637 = bad_item($rjs_core.PrimitiveSymbol.make("assf"), a3101, l3093);
                        }
                        var if_res1639 = if_res1637;
                    } else {
                        if (M1.null_p(l3100) !== false) {
                            var if_res1638 = false;
                        } else {
                            var if_res1638 = bad_list($rjs_core.PrimitiveSymbol.make("assf"), l3093);
                        }
                        var if_res1639 = if_res1638;
                    }
                    var if_res1640 = if_res1639;
                }
                var if_res1641 = if_res1640;
            } else {
                var if_res1641 = bad_item($rjs_core.PrimitiveSymbol.make("assf"), a3097, l3093);
            }
            var if_res1643 = if_res1641;
        } else {
            if (M1.null_p(l3095) !== false) {
                var if_res1642 = false;
            } else {
                var if_res1642 = bad_list($rjs_core.PrimitiveSymbol.make("assf"), l3093);
            }
            var if_res1643 = if_res1642;
        }
        return if_res1643;
    };
    return loop3094(l3093, l3093);
};
var let_result1644 = M1.values(assq3036, assv3037, assw3038, assoc3039, assf3040);
var assq = let_result1644.getAt(0);
var assv = let_result1644.getAt(1);
var assw = let_result1644.getAt(2);
var assoc = let_result1644.getAt(3);
var assf = let_result1644.getAt(4);
var mapadd = function(f3106, l3107, last3108) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop3109 = function(l3110) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l3110) !== false) {
            var if_res1645 = M1.list(last3108);
        } else {
            var if_res1645 = M1.cons(f3106(M1.car(l3110)), loop3109(M1.cdr(l3110)));
        }
        return if_res1645;
    };
    return loop3109(l3107);
};
var check_fold = function(name3111, proc3112, init3113, l3114, more3115) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(proc3112) !== false) {
        var if_res1646 = M1.rvoid();
    } else {
        var if_res1646 = M1.apply(M1.raise_argument_error, name3111, $rjs_core.UString.make("procedure?"), 0, proc3112, init3113, l3114, more3115);
    }
    if_res1646;
    if (M1.list_p(l3114) !== false) {
        var if_res1647 = M1.rvoid();
    } else {
        var if_res1647 = M1.apply(M1.raise_argument_error, name3111, $rjs_core.UString.make("list?"), 2, proc3112, init3113, l3114, more3115);
    }
    if_res1647;
    if (M1.null_p(more3115) !== false) {
        if (M1.procedure_arity_includes_p(proc3112, 2) !== false) {
            var if_res1648 = M1.rvoid();
        } else {
            var if_res1648 = M1.raise_mismatch_error(name3111, $rjs_core.UString.make("given procedure does not accept 2 arguments: "), proc3112);
        }
        var if_res1653 = if_res1648;
    } else {
        var len3116 = M1.length(l3114);
        var loop3117 = function(remaining3118, n3119) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(remaining3118) !== false) {
                var if_res1651 = M1.rvoid();
            } else {
                if (M1.list_p(M1.car(remaining3118)) !== false) {
                    var if_res1649 = M1.rvoid();
                } else {
                    var if_res1649 = M1.apply(M1.raise_argument_error, name3111, $rjs_core.UString.make("list?"), n3119, proc3112, init3113, l3114, more3115);
                }
                if_res1649;
                if (M1.__eq_(len3116, M1.length(M1.car(remaining3118))) !== false) {
                    var if_res1650 = M1.rvoid();
                } else {
                    var if_res1650 = M1.raise_mismatch_error(name3111, $rjs_core.UString.make("given list does not have the same size as the first list: "), M1.car(remaining3118));
                }
                if_res1650;
                var if_res1651 = loop3117(M1.cdr(remaining3118), M1.add1(n3119));
            }
            return if_res1651;
        };
        loop3117(more3115, 3);
        if (M1.procedure_arity_includes_p(proc3112, 2 + M1.length(more3115)) !== false) {
            var if_res1652 = M1.rvoid();
        } else {
            var if_res1652 = M1.raise_mismatch_error(name3111, M1.format($rjs_core.UString.make("given procedure does not accept ~a arguments: "), 2 + M1.length(more3115)), proc3112);
        }
        var if_res1653 = if_res1652;
    }
    return if_res1653;
};
var cl1654 = function(f3120, init3121, l3122) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_fold($rjs_core.PrimitiveSymbol.make("foldl"), f3120, init3121, l3122, M1.rnull);
    var loop3123 = function(init3124, l3125) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l3125) !== false) {
            var if_res1658 = init3124;
        } else {
            var if_res1658 = loop3123(f3120(M1.car(l3125), init3124), M1.cdr(l3125));
        }
        return if_res1658;
    };
    return loop3123(init3121, l3122);
};
var cl1655 = $rjs_core.attachProcedureArity(function(f3126, init3127, l3128, ...ls31291659) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var ls3129 = $rjs_core.Pair.listFromArray(ls31291659);
    check_fold($rjs_core.PrimitiveSymbol.make("foldl"), f3126, init3127, l3128, ls3129);
    var loop3130 = function(init3131, ls3132) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(M1.car(ls3132)) !== false) {
            var if_res1660 = loop3130(M1.apply(f3126, mapadd(M1.car, ls3132, init3131)), M3.map(M1.cdr, ls3132));
        } else {
            var if_res1660 = init3131;
        }
        return if_res1660;
    };
    return loop3130(init3127, M1.cons(l3128, ls3129));
});
var foldl = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1656 = {
        '3': cl1654
    } [arguments.length];
    if (fixed_lam1656 !== undefined) {
        return fixed_lam1656.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1655.length, 1) !== false) {
            var if_res1657 = cl1655.apply(null, arguments);
        } else {
            var if_res1657 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1657;
    }
}, [M1.make_arity_at_least(3)]);
var cl1661 = function(f3133, init3134, l3135) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_fold($rjs_core.PrimitiveSymbol.make("foldr"), f3133, init3134, l3135, M1.rnull);
    var loop3136 = function(init3137, l3138) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l3138) !== false) {
            var if_res1665 = init3137;
        } else {
            var if_res1665 = f3133(M1.car(l3138), loop3136(init3137, M1.cdr(l3138)));
        }
        return if_res1665;
    };
    return loop3136(init3134, l3135);
};
var cl1662 = $rjs_core.attachProcedureArity(function(f3139, init3140, l3141, ...ls31421666) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var ls3142 = $rjs_core.Pair.listFromArray(ls31421666);
    check_fold($rjs_core.PrimitiveSymbol.make("foldr"), f3139, init3140, l3141, ls3142);
    var loop3143 = function(ls3144) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(M1.car(ls3144)) !== false) {
            var if_res1667 = M1.apply(f3139, mapadd(M1.car, ls3144, loop3143(M3.map(M1.cdr, ls3144))));
        } else {
            var if_res1667 = init3140;
        }
        return if_res1667;
    };
    return loop3143(M1.cons(l3141, ls3142));
});
var foldr = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1663 = {
        '3': cl1661
    } [arguments.length];
    if (fixed_lam1663 !== undefined) {
        return fixed_lam1663.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1662.length, 1) !== false) {
            var if_res1664 = cl1662.apply(null, arguments);
        } else {
            var if_res1664 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1664;
    }
}, [M1.make_arity_at_least(3)]);
var filter = function(f3145, list3146) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f3145) !== false) {
        var if_res1668 = M1.procedure_arity_includes_p(f3145, 1);
    } else {
        var if_res1668 = false;
    }
    if (if_res1668 !== false) {
        var if_res1669 = M1.rvoid();
    } else {
        var if_res1669 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter"), $rjs_core.UString.make("(any/c . -> . any/c)"), f3145);
    }
    if_res1669;
    if (M1.list_p(list3146) !== false) {
        var if_res1670 = M1.rvoid();
    } else {
        var if_res1670 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter"), $rjs_core.UString.make("list?"), list3146);
    }
    if_res1670;
    var loop3147 = function(l3148, result3149) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l3148) !== false) {
            var if_res1673 = M6.alt_reverse(result3149);
        } else {
            var temp1672 = M1.cdr(l3148);
            if (f3145(M1.car(l3148)) !== false) {
                var if_res1671 = M1.cons(M1.car(l3148), result3149);
            } else {
                var if_res1671 = result3149;
            }
            var if_res1673 = loop3147(temp1672, if_res1671);
        }
        return if_res1673;
    };
    return loop3147(list3146, M1.rnull);
};
var build_vector = function(n3150, fcn3151) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_nonnegative_integer_p(n3150) !== false) {
        var if_res1674 = M1.rvoid();
    } else {
        var if_res1674 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-vector"), $rjs_core.UString.make("exact-nonnegative-integer?"), n3150);
    }
    if_res1674;
    if (M1.procedure_p(fcn3151) !== false) {
        var if_res1675 = M1.procedure_arity_includes_p(fcn3151, 1);
    } else {
        var if_res1675 = false;
    }
    if (if_res1675 !== false) {
        var if_res1676 = M1.rvoid();
    } else {
        var if_res1676 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-vector"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . any/c)"), fcn3151);
    }
    if_res1676;
    var vec3152 = M1.make_vector(n3150);
    var loop3153 = function(i3154) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.__eq_(i3154, n3150) !== false) {
            var if_res1677 = vec3152;
        } else {
            M1.vector_set_bang_(vec3152, i3154, fcn3151(i3154));
            var if_res1677 = loop3153(M1.add1(i3154));
        }
        return if_res1677;
    };
    return loop3153(0);
};
var build_string = function(n3155, fcn3156) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_nonnegative_integer_p(n3155) !== false) {
        var if_res1678 = M1.rvoid();
    } else {
        var if_res1678 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-string"), $rjs_core.UString.make("exact-nonnegative-integer?"), n3155);
    }
    if_res1678;
    if (M1.procedure_p(fcn3156) !== false) {
        var if_res1679 = M1.procedure_arity_includes_p(fcn3156, 1);
    } else {
        var if_res1679 = false;
    }
    if (if_res1679 !== false) {
        var if_res1680 = M1.rvoid();
    } else {
        var if_res1680 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-string"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . char?)"), fcn3156);
    }
    if_res1680;
    var str3157 = M1.make_string(n3155);
    var loop3158 = function(i3159) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.__eq_(i3159, n3155) !== false) {
            var if_res1681 = str3157;
        } else {
            M1.string_set_bang_(str3157, i3159, fcn3156(i3159));
            var if_res1681 = loop3158(M1.add1(i3159));
        }
        return if_res1681;
    };
    return loop3158(0);
};
var build_list = function(n3160, fcn3161) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_nonnegative_integer_p(n3160) !== false) {
        var if_res1682 = M1.rvoid();
    } else {
        var if_res1682 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-list"), $rjs_core.UString.make("exact-nonnegative-integer?"), n3160);
    }
    if_res1682;
    if (M1.procedure_p(fcn3161) !== false) {
        var if_res1683 = M1.procedure_arity_includes_p(fcn3161, 1);
    } else {
        var if_res1683 = false;
    }
    if (if_res1683 !== false) {
        var if_res1684 = M1.rvoid();
    } else {
        var if_res1684 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-list"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . any/c)"), fcn3161);
    }
    if_res1684;
    var recr3162 = function(j3163, i3164) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.zero_p(i3164) !== false) {
            var if_res1685 = M1.rnull;
        } else {
            var if_res1685 = M1.cons(fcn3161(j3163), recr3162(M1.add1(j3163), M1.sub1(i3164)));
        }
        return if_res1685;
    };
    return recr3162(0, n3160);
};
var id_p3165 = function(f3166) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.eq_p(M1.values, f3166);
};
var pipeline13167 = function(f3168, rfuns3169) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var composed3170 = function(x3171) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var loop3172 = function(x3173, f3174, rfuns3175) {
            if (arguments.length !== 3) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(rfuns3175) !== false) {
                var if_res1686 = f3174(x3173);
            } else {
                var if_res1686 = loop3172(f3174(x3173), M1.car(rfuns3175), M1.cdr(rfuns3175));
            }
            return if_res1686;
        };
        return loop3172(x3171, f3168, rfuns3169);
    };
    return composed3170;
};
var pipeline_times_3176 = function(f3177, rfuns3178) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.eqv_p(2, M1.procedure_arity_mask(f3177)) !== false) {
        var loop3179 = function(f3180, rfuns3181) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(rfuns3181) !== false) {
                var if_res1688 = f3180;
            } else {
                var fst3182 = M1.car(rfuns3181);
                if (M1.eqv_p(2, M1.procedure_arity_mask(fst3182)) !== false) {
                    var if_res1687 = function(x3183) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return fst3182(f3180(x3183));
                    };
                } else {
                    var if_res1687 = function(x3184) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return M1.call_with_values(function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f3180(x3184);
                        }, fst3182);
                    };
                }
                var if_res1688 = loop3179(if_res1687, M1.cdr(rfuns3181));
            }
            return if_res1688;
        };
        var if_res1695 = loop3179(f3177, rfuns3178);
    } else {
        var funs3185 = M6.alt_reverse(M1.cons(f3177, rfuns3178));
        var loop3186 = function(f3187, funs3188) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(funs3188) !== false) {
                var if_res1694 = f3187;
            } else {
                var fst3189 = M1.car(funs3188);
                if (M1.eqv_p(2, M1.procedure_arity_mask(f3187)) !== false) {
                    if (M1.eqv_p(2, M1.procedure_arity_mask(fst3189)) !== false) {
                        var if_res1690 = function(x3190) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f3187(fst3189(x3190));
                        };
                    } else {
                        var if_res1690 = $rjs_core.attachProcedureArity(function(...xs31911689) {
                            var xs3191 = $rjs_core.Pair.listFromArray(xs31911689);
                            return f3187(M1.apply(fst3189, xs3191));
                        });
                    }
                    var if_res1693 = if_res1690;
                } else {
                    if (M1.eqv_p(2, M1.procedure_arity_mask(fst3189)) !== false) {
                        var if_res1692 = function(x3192) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return fst3189(x3192);
                            }, f3187);
                        };
                    } else {
                        var if_res1692 = $rjs_core.attachProcedureArity(function(...xs31931691) {
                            var xs3193 = $rjs_core.Pair.listFromArray(xs31931691);
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return M1.apply(fst3189, xs3193);
                            }, f3187);
                        });
                    }
                    var if_res1693 = if_res1692;
                }
                var if_res1694 = loop3186(if_res1693, M1.cdr(funs3188));
            }
            return if_res1694;
        };
        var if_res1695 = loop3186(M1.car(funs3185), M1.cdr(funs3185));
    }
    return if_res1695;
};
var simple_compose3195 = function(f3196, g3197) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var arity_mask3198 = M1.procedure_arity_mask(g3197);
    var let_result1696 = M0.procedure_keywords(g3197);
    var required_kwds3199 = let_result1696.getAt(0);
    var allowed_kwds3200 = let_result1696.getAt(1);
    var tmp3202 = arity_mask3198;
    if (M1.equal_p(tmp3202, 1) !== false) {
        var if_res1706 = function() {
            if (arguments.length !== 0) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return f3196(g3197());
        };
    } else {
        if (M1.equal_p(tmp3202, 2) !== false) {
            var if_res1705 = function(x3203) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return f3196(g3197(x3203));
            };
        } else {
            if (M1.equal_p(tmp3202, 4) !== false) {
                var if_res1704 = function(x3204, y3205) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f3196(g3197(x3204, y3205));
                };
            } else {
                var cl1697 = function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f3196(g3197());
                };
                var cl1698 = function(x3206) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f3196(g3197(x3206));
                };
                var cl1699 = function(x3207, y3208) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f3196(g3197(x3207, y3208));
                };
                var cl1700 = $rjs_core.attachProcedureArity(function(...args32091703) {
                    var args3209 = $rjs_core.Pair.listFromArray(args32091703);
                    return f3196(M1.apply(g3197, args3209));
                });
                var if_res1704 = $rjs_core.attachProcedureArity(function() {
                    var fixed_lam1701 = {
                        '0': cl1697,
                        '1': cl1698,
                        '2': cl1699
                    } [arguments.length];
                    if (fixed_lam1701 !== undefined) {
                        return fixed_lam1701.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            var if_res1702 = cl1700.apply(null, arguments);
                        } else {
                            var if_res1702 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                        return if_res1702;
                    }
                }, [M1.make_arity_at_least(0)]);
            }
            var if_res1705 = if_res1704;
        }
        var if_res1706 = if_res1705;
    }
    var composed3201 = if_res1706;
    if (M1.null_p(allowed_kwds3200) !== false) {
        if (M1.eqv_p(arity_mask3198, M1.procedure_arity_mask(composed3201)) !== false) {
            var if_res1707 = composed3201;
        } else {
            var if_res1707 = M0.new_procedure_reduce_arity_mask(composed3201, arity_mask3198);
        }
        var if_res1709 = if_res1707;
    } else {
        var if_res1709 = M0.procedure_reduce_keyword_arity_mask(M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws3210, kw_args3211, ...xs32121708) {
            if (arguments.length < 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            var xs3212 = $rjs_core.Pair.listFromArray(xs32121708);
            return f3196(M2.keyword_apply(g3197, kws3210, kw_args3211, xs3212));
        }), composed3201), arity_mask3198, required_kwds3199, allowed_kwds3200, $rjs_core.PrimitiveSymbol.make("composed"), $rjs_core.PrimitiveSymbol.make("racket"));
    }
    return if_res1709;
};
var cl1710 = function(f3213) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f3213) !== false) {
        var if_res1716 = f3213;
    } else {
        var if_res1716 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 0, f3213);
    }
    return if_res1716;
};
var cl1711 = function(f3214, g3215) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f3214) !== false) {
        var if_res1717 = M1.rvoid();
    } else {
        var if_res1717 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 0, f3214, g3215);
    }
    if_res1717;
    if (M1.procedure_p(g3215) !== false) {
        var if_res1718 = M1.rvoid();
    } else {
        var if_res1718 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 1, f3214, g3215);
    }
    if_res1718;
    if (M1.procedure_arity_includes_p(f3214, 1) !== false) {
        var if_res1719 = M1.rvoid();
    } else {
        var if_res1719 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("(any/c . -> . any/c)"), 0, f3214, $rjs_core.Pair.EMPTY);
    }
    if_res1719;
    var let_result1720 = M0.procedure_keywords(f3214);
    var req3216 = let_result1720.getAt(0);
    var _3217 = let_result1720.getAt(1);
    if (M1.null_p(req3216) !== false) {
        var if_res1721 = M1.rvoid();
    } else {
        var if_res1721 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), 0, f3214, $rjs_core.Pair.EMPTY);
    }
    if_res1721;
    return simple_compose3195(f3214, g3215);
};
var cl1712 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.values;
};
var cl1713 = $rjs_core.attachProcedureArity(function(f03218, ...fs032191722) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var fs03219 = $rjs_core.Pair.listFromArray(fs032191722);
    var loop3220 = function(g3221, fs3222, i3223, rfuns3224) {
        if (arguments.length !== 4) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.procedure_p(g3221) !== false) {
            var if_res1723 = M1.rvoid();
        } else {
            var if_res1723 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), i3223, f03218, fs03219);
        }
        if_res1723;
        if (M1.pair_p(fs3222) !== false) {
            if (M1.procedure_arity_includes_p(g3221, 1) !== false) {
                var if_res1724 = M1.rvoid();
            } else {
                var if_res1724 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("(any/c . -> . any/c)"), i3223, f03218, fs03219);
            }
            if_res1724;
            var let_result1725 = M0.procedure_keywords(g3221);
            var req3225 = let_result1725.getAt(0);
            var _3226 = let_result1725.getAt(1);
            if (M1.null_p(req3225) !== false) {
                var if_res1726 = M1.rvoid();
            } else {
                var if_res1726 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), i3223, f03218, fs03219);
            }
            if_res1726;
            var if_res1728 = loop3220(M1.car(fs3222), M1.cdr(fs3222), M1.add1(i3223), M1.cons(g3221, rfuns3224));
        } else {
            var rfuns3227 = remq_times_(M1.list(M1.values), rfuns3224);
            if (M1.null_p(rfuns3227) !== false) {
                var if_res1727 = M1.values;
            } else {
                var if_res1727 = pipeline13167(M1.car(rfuns3227), M1.cdr(rfuns3227));
            }
            var f3228 = if_res1727;
            var if_res1728 = simple_compose3195(f3228, g3221);
        }
        return if_res1728;
    };
    return loop3220(f03218, fs03219, 0, $rjs_core.Pair.EMPTY);
});
var compose13194 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1714 = {
        '1': cl1710,
        '2': cl1711,
        '0': cl1712
    } [arguments.length];
    if (fixed_lam1714 !== undefined) {
        return fixed_lam1714.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1713.length, 1) !== false) {
            var if_res1715 = cl1713.apply(null, arguments);
        } else {
            var if_res1715 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1715;
    }
}, [0, M1.make_arity_at_least(1)]);
var simple_compose3230 = function(f3231, g3232) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (id_p3165(f3231) !== false) {
        var if_res1758 = g3232;
    } else {
        if (M1.eqv_p(2, M1.procedure_arity_mask(f3231)) !== false) {
            var arity_mask3233 = M1.procedure_arity_mask(g3232);
            var let_result1729 = M0.procedure_keywords(g3232);
            var required_kwds3234 = let_result1729.getAt(0);
            var allowed_kwds3235 = let_result1729.getAt(1);
            var tmp3237 = arity_mask3233;
            if (M1.equal_p(tmp3237, 1) !== false) {
                var if_res1739 = function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f3231(g3232());
                };
            } else {
                if (M1.equal_p(tmp3237, 2) !== false) {
                    var if_res1738 = function(x3238) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return f3231(g3232(x3238));
                    };
                } else {
                    if (M1.equal_p(tmp3237, 4) !== false) {
                        var if_res1737 = function(x3239, y3240) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f3231(g3232(x3239, y3240));
                        };
                    } else {
                        var cl1730 = function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f3231(g3232());
                        };
                        var cl1731 = function(x3241) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f3231(g3232(x3241));
                        };
                        var cl1732 = function(x3242, y3243) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f3231(g3232(x3242, y3243));
                        };
                        var cl1733 = $rjs_core.attachProcedureArity(function(...args32441736) {
                            var args3244 = $rjs_core.Pair.listFromArray(args32441736);
                            return f3231(M1.apply(g3232, args3244));
                        });
                        var if_res1737 = $rjs_core.attachProcedureArity(function() {
                            var fixed_lam1734 = {
                                '0': cl1730,
                                '1': cl1731,
                                '2': cl1732
                            } [arguments.length];
                            if (fixed_lam1734 !== undefined) {
                                return fixed_lam1734.apply(null, arguments);
                            } else {
                                if (true !== false) {
                                    var if_res1735 = cl1733.apply(null, arguments);
                                } else {
                                    var if_res1735 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
                                }
                                return if_res1735;
                            }
                        }, [M1.make_arity_at_least(0)]);
                    }
                    var if_res1738 = if_res1737;
                }
                var if_res1739 = if_res1738;
            }
            var composed3236 = if_res1739;
            if (M1.null_p(allowed_kwds3235) !== false) {
                if (M1.eqv_p(arity_mask3233, M1.procedure_arity_mask(composed3236)) !== false) {
                    var if_res1740 = composed3236;
                } else {
                    var if_res1740 = M0.new_procedure_reduce_arity_mask(composed3236, arity_mask3233);
                }
                var if_res1742 = if_res1740;
            } else {
                var if_res1742 = M0.procedure_reduce_keyword_arity_mask(M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws3245, kw_args3246, ...xs32471741) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var xs3247 = $rjs_core.Pair.listFromArray(xs32471741);
                    return f3231(M2.keyword_apply(g3232, kws3245, kw_args3246, xs3247));
                }), composed3236), arity_mask3233, required_kwds3234, allowed_kwds3235, $rjs_core.PrimitiveSymbol.make("composed"), $rjs_core.PrimitiveSymbol.make("racket"));
            }
            var if_res1757 = if_res1742;
        } else {
            var arity_mask3248 = M1.procedure_arity_mask(g3232);
            var let_result1743 = M0.procedure_keywords(g3232);
            var required_kwds3249 = let_result1743.getAt(0);
            var allowed_kwds3250 = let_result1743.getAt(1);
            var tmp3252 = arity_mask3248;
            if (M1.equal_p(tmp3252, 1) !== false) {
                var if_res1753 = function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M1.call_with_values(function() {
                        if (arguments.length !== 0) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return g3232();
                    }, f3231);
                };
            } else {
                if (M1.equal_p(tmp3252, 2) !== false) {
                    var if_res1752 = function(x3253) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return M1.call_with_values(function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return g3232(x3253);
                        }, f3231);
                    };
                } else {
                    if (M1.equal_p(tmp3252, 4) !== false) {
                        var if_res1751 = function(x3254, y3255) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g3232(x3254, y3255);
                            }, f3231);
                        };
                    } else {
                        var cl1744 = function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g3232();
                            }, f3231);
                        };
                        var cl1745 = function(x3256) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g3232(x3256);
                            }, f3231);
                        };
                        var cl1746 = function(x3257, y3258) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g3232(x3257, y3258);
                            }, f3231);
                        };
                        var cl1747 = $rjs_core.attachProcedureArity(function(...args32591750) {
                            var args3259 = $rjs_core.Pair.listFromArray(args32591750);
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return M1.apply(g3232, args3259);
                            }, f3231);
                        });
                        var if_res1751 = $rjs_core.attachProcedureArity(function() {
                            var fixed_lam1748 = {
                                '0': cl1744,
                                '1': cl1745,
                                '2': cl1746
                            } [arguments.length];
                            if (fixed_lam1748 !== undefined) {
                                return fixed_lam1748.apply(null, arguments);
                            } else {
                                if (true !== false) {
                                    var if_res1749 = cl1747.apply(null, arguments);
                                } else {
                                    var if_res1749 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
                                }
                                return if_res1749;
                            }
                        }, [M1.make_arity_at_least(0)]);
                    }
                    var if_res1752 = if_res1751;
                }
                var if_res1753 = if_res1752;
            }
            var composed3251 = if_res1753;
            if (M1.null_p(allowed_kwds3250) !== false) {
                if (M1.eqv_p(arity_mask3248, M1.procedure_arity_mask(composed3251)) !== false) {
                    var if_res1754 = composed3251;
                } else {
                    var if_res1754 = M0.new_procedure_reduce_arity_mask(composed3251, arity_mask3248);
                }
                var if_res1756 = if_res1754;
            } else {
                var if_res1756 = M0.procedure_reduce_keyword_arity_mask(M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws3260, kw_args3261, ...xs32621755) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var xs3262 = $rjs_core.Pair.listFromArray(xs32621755);
                    return M1.call_with_values(function() {
                        if (arguments.length !== 0) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return M2.keyword_apply(g3232, kws3260, kw_args3261, xs3262);
                    }, f3231);
                }), composed3251), arity_mask3248, required_kwds3249, allowed_kwds3250, $rjs_core.PrimitiveSymbol.make("composed"), $rjs_core.PrimitiveSymbol.make("racket"));
            }
            var if_res1757 = if_res1756;
        }
        var if_res1758 = if_res1757;
    }
    return if_res1758;
};
var cl1759 = function(f3263) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f3263) !== false) {
        var if_res1765 = f3263;
    } else {
        var if_res1765 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 0, f3263);
    }
    return if_res1765;
};
var cl1760 = function(f3264, g3265) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f3264) !== false) {
        var if_res1766 = M1.rvoid();
    } else {
        var if_res1766 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 0, f3264, g3265);
    }
    if_res1766;
    if (M1.procedure_p(g3265) !== false) {
        var if_res1767 = M1.rvoid();
    } else {
        var if_res1767 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 1, f3264, g3265);
    }
    if_res1767;
    var let_result1768 = M0.procedure_keywords(f3264);
    var req3266 = let_result1768.getAt(0);
    var _3267 = let_result1768.getAt(1);
    if (M1.null_p(req3266) !== false) {
        var if_res1769 = M1.rvoid();
    } else {
        var if_res1769 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), 0, f3264, $rjs_core.Pair.EMPTY);
    }
    if_res1769;
    return simple_compose3230(f3264, g3265);
};
var cl1761 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.values;
};
var cl1762 = $rjs_core.attachProcedureArity(function(f03268, ...fs032691770) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var fs03269 = $rjs_core.Pair.listFromArray(fs032691770);
    var loop3270 = function(g3271, fs3272, i3273, rfuns3274) {
        if (arguments.length !== 4) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.procedure_p(g3271) !== false) {
            var if_res1771 = M1.rvoid();
        } else {
            var if_res1771 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), i3273, f03268, fs03269);
        }
        if_res1771;
        if (M1.pair_p(fs3272) !== false) {
            var let_result1772 = M0.procedure_keywords(g3271);
            var req3275 = let_result1772.getAt(0);
            var _3276 = let_result1772.getAt(1);
            if (M1.null_p(req3275) !== false) {
                var if_res1773 = M1.rvoid();
            } else {
                var if_res1773 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), i3273, f03268, fs03269);
            }
            if_res1773;
            var if_res1775 = loop3270(M1.car(fs3272), M1.cdr(fs3272), M1.add1(i3273), M1.cons(g3271, rfuns3274));
        } else {
            var rfuns3277 = remq_times_(M1.list(M1.values), rfuns3274);
            if (M1.null_p(rfuns3277) !== false) {
                var if_res1774 = M1.values;
            } else {
                var if_res1774 = pipeline_times_3176(M1.car(rfuns3277), M1.cdr(rfuns3277));
            }
            var f3278 = if_res1774;
            var if_res1775 = simple_compose3230(f3278, g3271);
        }
        return if_res1775;
    };
    return loop3270(f03268, fs03269, 0, $rjs_core.Pair.EMPTY);
});
var compose3229 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1763 = {
        '1': cl1759,
        '2': cl1760,
        '0': cl1761
    } [arguments.length];
    if (fixed_lam1763 !== undefined) {
        return fixed_lam1763.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1762.length, 1) !== false) {
            var if_res1764 = cl1762.apply(null, arguments);
        } else {
            var if_res1764 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1764;
    }
}, [0, M1.make_arity_at_least(1)]);
var let_result1776 = M1.values(compose13194, compose3229);
var compose1 = let_result1776.getAt(0);
var compose = let_result1776.getAt(1);
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