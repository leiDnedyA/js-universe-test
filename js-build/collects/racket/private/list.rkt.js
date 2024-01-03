import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./kw.rkt.js";
import * as M1 from "../../../runtime/kernel.rkt.js";
import * as M2 from "./pre-base.rkt.js";
import * as M3 from "./map.rkt.js";
import * as M4 from "./sort.rkt.js";
import * as M5 from "../../../runtime/unsafe.rkt.js";
import * as M6 from "./reverse.rkt.js";
var sort = function(cache_keys_p22641, key12642, lst52643, less_p62644) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var lst2645 = lst52643;
    var less_p2646 = less_p62644;
    if (false !== false) {
        var if_res1469 = false;
    } else {
        var if_res1469 = key12642;
    }
    var getkey2647 = if_res1469;
    if (false !== false) {
        var if_res1470 = false;
    } else {
        var if_res1470 = cache_keys_p22641;
    }
    var cache_keys_p2648 = if_res1470;
    if (M1.list_p(lst2645) !== false) {
        var if_res1471 = M1.rvoid();
    } else {
        var if_res1471 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("list?"), lst2645);
    }
    if_res1471;
    if (M1.procedure_p(less_p2646) !== false) {
        var if_res1472 = M1.procedure_arity_includes_p(less_p2646, 2);
    } else {
        var if_res1472 = false;
    }
    if (if_res1472 !== false) {
        var if_res1473 = M1.rvoid();
    } else {
        var if_res1473 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), less_p2646);
    }
    if_res1473;
    if (getkey2647 !== false) {
        if (M1.procedure_p(getkey2647) !== false) {
            var if_res1474 = M1.procedure_arity_includes_p(getkey2647, 1);
        } else {
            var if_res1474 = false;
        }
        var if_res1475 = M1.not(if_res1474);
    } else {
        var if_res1475 = false;
    }
    if (if_res1475 !== false) {
        var if_res1476 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("(any/c . -> . any/c)"), getkey2647);
    } else {
        var if_res1476 = M1.rvoid();
    }
    if_res1476;
    if (getkey2647 !== false) {
        var if_res1477 = M4.sort(lst2645, less_p2646, getkey2647, cache_keys_p2648);
    } else {
        var if_res1477 = M4.sort(lst2645, less_p2646);
    }
    return if_res1477;
};
var sort2640 = function(given_kws2649, given_args2650, lst52651, less_p62652) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.pair_p(given_kws2649) !== false) {
        var if_res1478 = M1.eq_p($rjs_core.Keyword.make("cache-keys?"), M1.car(given_kws2649));
    } else {
        var if_res1478 = false;
    }
    var cache_keys_p42653 = if_res1478;
    if (cache_keys_p42653 !== false) {
        var if_res1479 = M1.car(given_args2650);
    } else {
        var if_res1479 = false;
    }
    var cache_keys_p22654 = if_res1479;
    if (cache_keys_p42653 !== false) {
        var if_res1480 = M1.cdr(given_kws2649);
    } else {
        var if_res1480 = given_kws2649;
    }
    var kws1981242655 = if_res1480;
    if (cache_keys_p42653 !== false) {
        var if_res1481 = M1.cdr(given_args2650);
    } else {
        var if_res1481 = given_args2650;
    }
    var kw_args1981252656 = if_res1481;
    var key32657 = M1.pair_p(kws1981242655);
    if (key32657 !== false) {
        var if_res1482 = M1.car(kw_args1981252656);
    } else {
        var if_res1482 = false;
    }
    var key12658 = if_res1482;
    return sort(cache_keys_p22654, key12658, lst52651, less_p62652);
};
var cl1486 = function(given_kws2665, given_args2666, lst2667, less_p2668) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return sort2640(given_kws2665, given_args2666, lst2667, less_p2668);
};
var temp1488 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1487 = {
        '4': cl1486
    } [arguments.length];
    if (fixed_lam1487 !== undefined) {
        return fixed_lam1487.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4]);
var temp1485 = $rjs_core.Pair.makeList($rjs_core.Keyword.make("cache-keys?"), $rjs_core.Keyword.make("key"));
var cl1483 = function(lst2669, less_p2670) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return sort2640(M1.rnull, M1.rnull, lst2669, less_p2670);
};
var sort7 = M0.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws2659, given_argc2660) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.__eq_(given_argc2660, 4) !== false) {
        var l11981262661 = given_kws2659;
        if (M1.null_p(l11981262661) !== false) {
            var if_res1490 = l11981262661;
        } else {
            if (M1.eq_p(M1.car(l11981262661), $rjs_core.Keyword.make("cache-keys?")) !== false) {
                var if_res1489 = M1.cdr(l11981262661);
            } else {
                var if_res1489 = l11981262661;
            }
            var if_res1490 = if_res1489;
        }
        var l11981262662 = if_res1490;
        var l11981272663 = l11981262662;
        if (M1.null_p(l11981272663) !== false) {
            var if_res1492 = l11981272663;
        } else {
            if (M1.eq_p(M1.car(l11981272663), $rjs_core.Keyword.make("key")) !== false) {
                var if_res1491 = M1.cdr(l11981272663);
            } else {
                var if_res1491 = l11981272663;
            }
            var if_res1492 = if_res1491;
        }
        var l11981272664 = if_res1492;
        var if_res1493 = M1.null_p(l11981272664);
    } else {
        var if_res1493 = false;
    }
    return if_res1493;
}, temp1488, M1.rnull, temp1485, $rjs_core.attachProcedureArity(function() {
    var fixed_lam1484 = {
        '2': cl1483
    } [arguments.length];
    if (fixed_lam1484 !== undefined) {
        return fixed_lam1484.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2]));
var do_remove = function(who2671, item2672, list2673, equal_p2674) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.list_p(list2673) !== false) {
        var if_res1494 = M1.rvoid();
    } else {
        var if_res1494 = M1.raise_argument_error(who2671, $rjs_core.UString.make("list?"), list2673);
    }
    if_res1494;
    var loop2675 = function(list2676) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(list2676) !== false) {
            var if_res1497 = list2676;
        } else {
            if (equal_p2674(item2672, M1.car(list2676)) !== false) {
                var if_res1496 = M1.cdr(list2676);
            } else {
                var next2677 = loop2675(M1.cdr(list2676));
                if (M1.eq_p(next2677, M1.cdr(list2676)) !== false) {
                    var if_res1495 = list2676;
                } else {
                    var if_res1495 = M1.cons(M1.car(list2676), next2677);
                }
                var if_res1496 = if_res1495;
            }
            var if_res1497 = if_res1496;
        }
        return if_res1497;
    };
    return loop2675(list2673);
};
var cl1498 = function(item2678, list2679) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remove"), item2678, list2679, M1.equal_p);
};
var cl1499 = function(item2680, list2681, equal_p2682) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(equal_p2682) !== false) {
        var if_res1501 = M1.procedure_arity_includes_p(equal_p2682, 2);
    } else {
        var if_res1501 = false;
    }
    if (if_res1501 !== false) {
        var if_res1502 = M1.rvoid();
    } else {
        var if_res1502 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("remove"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), equal_p2682);
    }
    if_res1502;
    return do_remove($rjs_core.PrimitiveSymbol.make("remove"), item2680, list2681, equal_p2682);
};
var remove = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1500 = {
        '2': cl1498,
        '3': cl1499
    } [arguments.length];
    if (fixed_lam1500 !== undefined) {
        return fixed_lam1500.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var remq = function(item2683, list2684) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remq"), item2683, list2684, M1.eq_p);
};
var remv = function(item2685, list2686) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remv"), item2685, list2686, M1.eqv_p);
};
var remw = function(item2687, list2688) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remw"), item2687, list2688, M1.equal_always_p);
};
var do_remove_times_ = function(who2689, l2690, r2691, equal_p2692) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.list_p(l2690) !== false) {
        var if_res1503 = M1.rvoid();
    } else {
        var if_res1503 = M1.raise_argument_error(who2689, $rjs_core.UString.make("list?"), l2690);
    }
    if_res1503;
    if (M1.list_p(r2691) !== false) {
        var if_res1504 = M1.rvoid();
    } else {
        var if_res1504 = M1.raise_argument_error(who2689, $rjs_core.UString.make("list?"), r2691);
    }
    if_res1504;
    var rloop2693 = function(r2694) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(r2694) !== false) {
            var if_res1508 = r2694;
        } else {
            var first_r2695 = M1.car(r2694);
            var loop2696 = function(l_rest2697) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(l_rest2697) !== false) {
                    var next2698 = rloop2693(M1.cdr(r2694));
                    if (M1.eq_p(next2698, M1.cdr(r2694)) !== false) {
                        var if_res1505 = r2694;
                    } else {
                        var if_res1505 = M1.cons(first_r2695, next2698);
                    }
                    var if_res1507 = if_res1505;
                } else {
                    if (equal_p2692(M1.car(l_rest2697), first_r2695) !== false) {
                        var if_res1506 = rloop2693(M1.cdr(r2694));
                    } else {
                        var if_res1506 = loop2696(M1.cdr(l_rest2697));
                    }
                    var if_res1507 = if_res1506;
                }
                return if_res1507;
            };
            var if_res1508 = loop2696(l2690);
        }
        return if_res1508;
    };
    return rloop2693(r2691);
};
var cl1509 = function(l2699, r2700) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remove*"), l2699, r2700, M1.equal_p);
};
var cl1510 = function(l2701, r2702, equal_p2703) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(equal_p2703) !== false) {
        var if_res1512 = M1.procedure_arity_includes_p(equal_p2703, 2);
    } else {
        var if_res1512 = false;
    }
    if (if_res1512 !== false) {
        var if_res1513 = M1.rvoid();
    } else {
        var if_res1513 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("remove*"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), equal_p2703);
    }
    if_res1513;
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remove*"), l2701, r2702, equal_p2703);
};
var remove_times_ = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1511 = {
        '2': cl1509,
        '3': cl1510
    } [arguments.length];
    if (fixed_lam1511 !== undefined) {
        return fixed_lam1511.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var remq_times_ = function(l2704, r2705) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remq*"), l2704, r2705, M1.eq_p);
};
var remv_times_ = function(l2706, r2707) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remv*"), l2706, r2707, M1.eqv_p);
};
var remw_times_ = function(l2708, r2709) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remw*"), l2708, r2709, M1.equal_always_p);
};
var memf = function(f2710, list2711) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2710) !== false) {
        var if_res1514 = M1.procedure_arity_includes_p(f2710, 1);
    } else {
        var if_res1514 = false;
    }
    if (if_res1514 !== false) {
        var if_res1515 = M1.rvoid();
    } else {
        var if_res1515 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("memf"), $rjs_core.UString.make("(any/c . -> any/c)"), f2710);
    }
    if_res1515;
    var loop2712 = function(l2713) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2713) !== false) {
            var if_res1518 = false;
        } else {
            if (M1.not(M1.pair_p(l2713)) !== false) {
                var if_res1517 = M1.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("memf"), $rjs_core.UString.make("not a proper list: "), list2711);
            } else {
                if (f2710(M1.car(l2713)) !== false) {
                    var if_res1516 = l2713;
                } else {
                    var if_res1516 = loop2712(M1.cdr(l2713));
                }
                var if_res1517 = if_res1516;
            }
            var if_res1518 = if_res1517;
        }
        return if_res1518;
    };
    return loop2712(list2711);
};
var findf = function(f2714, list2715) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2714) !== false) {
        var if_res1519 = M1.procedure_arity_includes_p(f2714, 1);
    } else {
        var if_res1519 = false;
    }
    if (if_res1519 !== false) {
        var if_res1520 = M1.rvoid();
    } else {
        var if_res1520 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("findf"), $rjs_core.UString.make("(any/c . -> . any/c)"), f2714);
    }
    if_res1520;
    var loop2716 = function(l2717) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2717) !== false) {
            var if_res1523 = false;
        } else {
            if (M1.not(M1.pair_p(l2717)) !== false) {
                var if_res1522 = M1.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("findf"), $rjs_core.UString.make("not a proper list: "), list2715);
            } else {
                var a2718 = M1.car(l2717);
                if (f2714(a2718) !== false) {
                    var if_res1521 = a2718;
                } else {
                    var if_res1521 = loop2716(M1.cdr(l2717));
                }
                var if_res1522 = if_res1521;
            }
            var if_res1523 = if_res1522;
        }
        return if_res1523;
    };
    return loop2716(list2715);
};
var bad_list = function(who2719, orig_l2720) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.raise_mismatch_error(who2719, $rjs_core.UString.make("not a proper list: "), orig_l2720);
};
var bad_item = function(who2721, a2722, orig_l2723) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.raise_arguments_error(who2721, $rjs_core.UString.make("non-pair found in list"), $rjs_core.UString.make("non-pair"), a2722, $rjs_core.UString.make("list"), orig_l2723);
};
var assq2724 = function(x2729, l2730) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2731 = function(l2732, t2733) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2732) !== false) {
            var a2734 = M5.unsafe_car(l2732);
            if (M1.pair_p(a2734) !== false) {
                if (M1.eq_p(x2729, M5.unsafe_car(a2734)) !== false) {
                    var if_res1529 = a2734;
                } else {
                    var l2735 = M5.unsafe_cdr(l2732);
                    if (M1.pair_p(l2735) !== false) {
                        var a2736 = M5.unsafe_car(l2735);
                        if (M1.pair_p(a2736) !== false) {
                            if (M1.eq_p(x2729, M5.unsafe_car(a2736)) !== false) {
                                var if_res1525 = a2736;
                            } else {
                                var t2737 = M5.unsafe_cdr(t2733);
                                var l2738 = M5.unsafe_cdr(l2735);
                                if (M1.eq_p(l2738, t2737) !== false) {
                                    var if_res1524 = bad_list($rjs_core.PrimitiveSymbol.make("assq"), l2730);
                                } else {
                                    var if_res1524 = loop2731(l2738, t2737);
                                }
                                var if_res1525 = if_res1524;
                            }
                            var if_res1526 = if_res1525;
                        } else {
                            var if_res1526 = bad_item($rjs_core.PrimitiveSymbol.make("assq"), a2736, l2730);
                        }
                        var if_res1528 = if_res1526;
                    } else {
                        if (M1.null_p(l2735) !== false) {
                            var if_res1527 = false;
                        } else {
                            var if_res1527 = bad_list($rjs_core.PrimitiveSymbol.make("assq"), l2730);
                        }
                        var if_res1528 = if_res1527;
                    }
                    var if_res1529 = if_res1528;
                }
                var if_res1530 = if_res1529;
            } else {
                var if_res1530 = bad_item($rjs_core.PrimitiveSymbol.make("assq"), a2734, l2730);
            }
            var if_res1532 = if_res1530;
        } else {
            if (M1.null_p(l2732) !== false) {
                var if_res1531 = false;
            } else {
                var if_res1531 = bad_list($rjs_core.PrimitiveSymbol.make("assq"), l2730);
            }
            var if_res1532 = if_res1531;
        }
        return if_res1532;
    };
    return loop2731(l2730, l2730);
};
var assv2725 = function(x2739, l2740) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2741 = function(l2742, t2743) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2742) !== false) {
            var a2744 = M5.unsafe_car(l2742);
            if (M1.pair_p(a2744) !== false) {
                if (M1.eqv_p(x2739, M5.unsafe_car(a2744)) !== false) {
                    var if_res1538 = a2744;
                } else {
                    var l2745 = M5.unsafe_cdr(l2742);
                    if (M1.pair_p(l2745) !== false) {
                        var a2746 = M5.unsafe_car(l2745);
                        if (M1.pair_p(a2746) !== false) {
                            if (M1.eqv_p(x2739, M5.unsafe_car(a2746)) !== false) {
                                var if_res1534 = a2746;
                            } else {
                                var t2747 = M5.unsafe_cdr(t2743);
                                var l2748 = M5.unsafe_cdr(l2745);
                                if (M1.eq_p(l2748, t2747) !== false) {
                                    var if_res1533 = bad_list($rjs_core.PrimitiveSymbol.make("assv"), l2740);
                                } else {
                                    var if_res1533 = loop2741(l2748, t2747);
                                }
                                var if_res1534 = if_res1533;
                            }
                            var if_res1535 = if_res1534;
                        } else {
                            var if_res1535 = bad_item($rjs_core.PrimitiveSymbol.make("assv"), a2746, l2740);
                        }
                        var if_res1537 = if_res1535;
                    } else {
                        if (M1.null_p(l2745) !== false) {
                            var if_res1536 = false;
                        } else {
                            var if_res1536 = bad_list($rjs_core.PrimitiveSymbol.make("assv"), l2740);
                        }
                        var if_res1537 = if_res1536;
                    }
                    var if_res1538 = if_res1537;
                }
                var if_res1539 = if_res1538;
            } else {
                var if_res1539 = bad_item($rjs_core.PrimitiveSymbol.make("assv"), a2744, l2740);
            }
            var if_res1541 = if_res1539;
        } else {
            if (M1.null_p(l2742) !== false) {
                var if_res1540 = false;
            } else {
                var if_res1540 = bad_list($rjs_core.PrimitiveSymbol.make("assv"), l2740);
            }
            var if_res1541 = if_res1540;
        }
        return if_res1541;
    };
    return loop2741(l2740, l2740);
};
var assw2726 = function(x2749, l2750) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2751 = function(l2752, t2753) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2752) !== false) {
            var a2754 = M5.unsafe_car(l2752);
            if (M1.pair_p(a2754) !== false) {
                if (M1.equal_always_p(x2749, M5.unsafe_car(a2754)) !== false) {
                    var if_res1547 = a2754;
                } else {
                    var l2755 = M5.unsafe_cdr(l2752);
                    if (M1.pair_p(l2755) !== false) {
                        var a2756 = M5.unsafe_car(l2755);
                        if (M1.pair_p(a2756) !== false) {
                            if (M1.equal_always_p(x2749, M5.unsafe_car(a2756)) !== false) {
                                var if_res1543 = a2756;
                            } else {
                                var t2757 = M5.unsafe_cdr(t2753);
                                var l2758 = M5.unsafe_cdr(l2755);
                                if (M1.eq_p(l2758, t2757) !== false) {
                                    var if_res1542 = bad_list($rjs_core.PrimitiveSymbol.make("assw"), l2750);
                                } else {
                                    var if_res1542 = loop2751(l2758, t2757);
                                }
                                var if_res1543 = if_res1542;
                            }
                            var if_res1544 = if_res1543;
                        } else {
                            var if_res1544 = bad_item($rjs_core.PrimitiveSymbol.make("assw"), a2756, l2750);
                        }
                        var if_res1546 = if_res1544;
                    } else {
                        if (M1.null_p(l2755) !== false) {
                            var if_res1545 = false;
                        } else {
                            var if_res1545 = bad_list($rjs_core.PrimitiveSymbol.make("assw"), l2750);
                        }
                        var if_res1546 = if_res1545;
                    }
                    var if_res1547 = if_res1546;
                }
                var if_res1548 = if_res1547;
            } else {
                var if_res1548 = bad_item($rjs_core.PrimitiveSymbol.make("assw"), a2754, l2750);
            }
            var if_res1550 = if_res1548;
        } else {
            if (M1.null_p(l2752) !== false) {
                var if_res1549 = false;
            } else {
                var if_res1549 = bad_list($rjs_core.PrimitiveSymbol.make("assw"), l2750);
            }
            var if_res1550 = if_res1549;
        }
        return if_res1550;
    };
    return loop2751(l2750, l2750);
};
var cl1551 = function(x2759, l2760) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2761 = function(l2762, t2763) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2762) !== false) {
            var a2764 = M5.unsafe_car(l2762);
            if (M1.pair_p(a2764) !== false) {
                if (M1.equal_p(x2759, M5.unsafe_car(a2764)) !== false) {
                    var if_res1559 = a2764;
                } else {
                    var l2765 = M5.unsafe_cdr(l2762);
                    if (M1.pair_p(l2765) !== false) {
                        var a2766 = M5.unsafe_car(l2765);
                        if (M1.pair_p(a2766) !== false) {
                            if (M1.equal_p(x2759, M5.unsafe_car(a2766)) !== false) {
                                var if_res1555 = a2766;
                            } else {
                                var t2767 = M5.unsafe_cdr(t2763);
                                var l2768 = M5.unsafe_cdr(l2765);
                                if (M1.eq_p(l2768, t2767) !== false) {
                                    var if_res1554 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2760);
                                } else {
                                    var if_res1554 = loop2761(l2768, t2767);
                                }
                                var if_res1555 = if_res1554;
                            }
                            var if_res1556 = if_res1555;
                        } else {
                            var if_res1556 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a2766, l2760);
                        }
                        var if_res1558 = if_res1556;
                    } else {
                        if (M1.null_p(l2765) !== false) {
                            var if_res1557 = false;
                        } else {
                            var if_res1557 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2760);
                        }
                        var if_res1558 = if_res1557;
                    }
                    var if_res1559 = if_res1558;
                }
                var if_res1560 = if_res1559;
            } else {
                var if_res1560 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a2764, l2760);
            }
            var if_res1562 = if_res1560;
        } else {
            if (M1.null_p(l2762) !== false) {
                var if_res1561 = false;
            } else {
                var if_res1561 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2760);
            }
            var if_res1562 = if_res1561;
        }
        return if_res1562;
    };
    return loop2761(l2760, l2760);
};
var cl1552 = function(x2769, l2770, is_equal_p2771) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(is_equal_p2771) !== false) {
        var if_res1563 = M1.procedure_arity_includes_p(is_equal_p2771, 2);
    } else {
        var if_res1563 = false;
    }
    if (if_res1563 !== false) {
        var if_res1564 = M1.rvoid();
    } else {
        var if_res1564 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("assoc"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), is_equal_p2771);
    }
    if_res1564;
    var loop2772 = function(l2773, t2774) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2773) !== false) {
            var a2775 = M5.unsafe_car(l2773);
            if (M1.pair_p(a2775) !== false) {
                if (is_equal_p2771(x2769, M5.unsafe_car(a2775)) !== false) {
                    var if_res1570 = a2775;
                } else {
                    var l2776 = M5.unsafe_cdr(l2773);
                    if (M1.pair_p(l2776) !== false) {
                        var a2777 = M5.unsafe_car(l2776);
                        if (M1.pair_p(a2777) !== false) {
                            if (is_equal_p2771(x2769, M5.unsafe_car(a2777)) !== false) {
                                var if_res1566 = a2777;
                            } else {
                                var t2778 = M5.unsafe_cdr(t2774);
                                var l2779 = M5.unsafe_cdr(l2776);
                                if (M1.eq_p(l2779, t2778) !== false) {
                                    var if_res1565 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2770);
                                } else {
                                    var if_res1565 = loop2772(l2779, t2778);
                                }
                                var if_res1566 = if_res1565;
                            }
                            var if_res1567 = if_res1566;
                        } else {
                            var if_res1567 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a2777, l2770);
                        }
                        var if_res1569 = if_res1567;
                    } else {
                        if (M1.null_p(l2776) !== false) {
                            var if_res1568 = false;
                        } else {
                            var if_res1568 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2770);
                        }
                        var if_res1569 = if_res1568;
                    }
                    var if_res1570 = if_res1569;
                }
                var if_res1571 = if_res1570;
            } else {
                var if_res1571 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a2775, l2770);
            }
            var if_res1573 = if_res1571;
        } else {
            if (M1.null_p(l2773) !== false) {
                var if_res1572 = false;
            } else {
                var if_res1572 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2770);
            }
            var if_res1573 = if_res1572;
        }
        return if_res1573;
    };
    return loop2772(l2770, l2770);
};
var assoc2727 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1553 = {
        '2': cl1551,
        '3': cl1552
    } [arguments.length];
    if (fixed_lam1553 !== undefined) {
        return fixed_lam1553.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var assf2728 = function(f2780, l2781) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2780) !== false) {
        var if_res1574 = M1.procedure_arity_includes_p(f2780, 1);
    } else {
        var if_res1574 = false;
    }
    if (if_res1574 !== false) {
        var if_res1575 = M1.rvoid();
    } else {
        var if_res1575 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("assf"), $rjs_core.UString.make("(any/c . -> . any/c)"), f2780);
    }
    if_res1575;
    var loop2782 = function(l2783, t2784) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2783) !== false) {
            var a2785 = M5.unsafe_car(l2783);
            if (M1.pair_p(a2785) !== false) {
                if ((function(_2786, a2787) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return f2780(a2787);
                    })(false, M5.unsafe_car(a2785)) !== false) {
                    var if_res1581 = a2785;
                } else {
                    var l2788 = M5.unsafe_cdr(l2783);
                    if (M1.pair_p(l2788) !== false) {
                        var a2789 = M5.unsafe_car(l2788);
                        if (M1.pair_p(a2789) !== false) {
                            if ((function(_2790, a2791) {
                                    if (arguments.length !== 2) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    return f2780(a2791);
                                })(false, M5.unsafe_car(a2789)) !== false) {
                                var if_res1577 = a2789;
                            } else {
                                var t2792 = M5.unsafe_cdr(t2784);
                                var l2793 = M5.unsafe_cdr(l2788);
                                if (M1.eq_p(l2793, t2792) !== false) {
                                    var if_res1576 = bad_list($rjs_core.PrimitiveSymbol.make("assf"), l2781);
                                } else {
                                    var if_res1576 = loop2782(l2793, t2792);
                                }
                                var if_res1577 = if_res1576;
                            }
                            var if_res1578 = if_res1577;
                        } else {
                            var if_res1578 = bad_item($rjs_core.PrimitiveSymbol.make("assf"), a2789, l2781);
                        }
                        var if_res1580 = if_res1578;
                    } else {
                        if (M1.null_p(l2788) !== false) {
                            var if_res1579 = false;
                        } else {
                            var if_res1579 = bad_list($rjs_core.PrimitiveSymbol.make("assf"), l2781);
                        }
                        var if_res1580 = if_res1579;
                    }
                    var if_res1581 = if_res1580;
                }
                var if_res1582 = if_res1581;
            } else {
                var if_res1582 = bad_item($rjs_core.PrimitiveSymbol.make("assf"), a2785, l2781);
            }
            var if_res1584 = if_res1582;
        } else {
            if (M1.null_p(l2783) !== false) {
                var if_res1583 = false;
            } else {
                var if_res1583 = bad_list($rjs_core.PrimitiveSymbol.make("assf"), l2781);
            }
            var if_res1584 = if_res1583;
        }
        return if_res1584;
    };
    return loop2782(l2781, l2781);
};
var let_result1585 = M1.values(assq2724, assv2725, assw2726, assoc2727, assf2728);
var assq = let_result1585.getAt(0);
var assv = let_result1585.getAt(1);
var assw = let_result1585.getAt(2);
var assoc = let_result1585.getAt(3);
var assf = let_result1585.getAt(4);
var mapadd = function(f2794, l2795, last2796) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2797 = function(l2798) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2798) !== false) {
            var if_res1586 = M1.list(last2796);
        } else {
            var if_res1586 = M1.cons(f2794(M1.car(l2798)), loop2797(M1.cdr(l2798)));
        }
        return if_res1586;
    };
    return loop2797(l2795);
};
var check_fold = function(name2799, proc2800, init2801, l2802, more2803) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(proc2800) !== false) {
        var if_res1587 = M1.rvoid();
    } else {
        var if_res1587 = M1.apply(M1.raise_argument_error, name2799, $rjs_core.UString.make("procedure?"), 0, proc2800, init2801, l2802, more2803);
    }
    if_res1587;
    if (M1.list_p(l2802) !== false) {
        var if_res1588 = M1.rvoid();
    } else {
        var if_res1588 = M1.apply(M1.raise_argument_error, name2799, $rjs_core.UString.make("list?"), 2, proc2800, init2801, l2802, more2803);
    }
    if_res1588;
    if (M1.null_p(more2803) !== false) {
        if (M1.procedure_arity_includes_p(proc2800, 2) !== false) {
            var if_res1589 = M1.rvoid();
        } else {
            var if_res1589 = M1.raise_mismatch_error(name2799, $rjs_core.UString.make("given procedure does not accept 2 arguments: "), proc2800);
        }
        var if_res1594 = if_res1589;
    } else {
        var len2804 = M1.length(l2802);
        var loop2805 = function(remaining2806, n2807) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(remaining2806) !== false) {
                var if_res1592 = M1.rvoid();
            } else {
                if (M1.list_p(M1.car(remaining2806)) !== false) {
                    var if_res1590 = M1.rvoid();
                } else {
                    var if_res1590 = M1.apply(M1.raise_argument_error, name2799, $rjs_core.UString.make("list?"), n2807, proc2800, init2801, l2802, more2803);
                }
                if_res1590;
                if (M1.__eq_(len2804, M1.length(M1.car(remaining2806))) !== false) {
                    var if_res1591 = M1.rvoid();
                } else {
                    var if_res1591 = M1.raise_mismatch_error(name2799, $rjs_core.UString.make("given list does not have the same size as the first list: "), M1.car(remaining2806));
                }
                if_res1591;
                var if_res1592 = loop2805(M1.cdr(remaining2806), M1.add1(n2807));
            }
            return if_res1592;
        };
        loop2805(more2803, 3);
        if (M1.procedure_arity_includes_p(proc2800, 2 + M1.length(more2803)) !== false) {
            var if_res1593 = M1.rvoid();
        } else {
            var if_res1593 = M1.raise_mismatch_error(name2799, M1.format($rjs_core.UString.make("given procedure does not accept ~a arguments: "), 2 + M1.length(more2803)), proc2800);
        }
        var if_res1594 = if_res1593;
    }
    return if_res1594;
};
var cl1595 = function(f2808, init2809, l2810) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_fold($rjs_core.PrimitiveSymbol.make("foldl"), f2808, init2809, l2810, M1.rnull);
    var loop2811 = function(init2812, l2813) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2813) !== false) {
            var if_res1599 = init2812;
        } else {
            var if_res1599 = loop2811(f2808(M1.car(l2813), init2812), M1.cdr(l2813));
        }
        return if_res1599;
    };
    return loop2811(init2809, l2810);
};
var cl1596 = $rjs_core.attachProcedureArity(function(f2814, init2815, l2816, ...ls28171600) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var ls2817 = $rjs_core.Pair.listFromArray(ls28171600);
    check_fold($rjs_core.PrimitiveSymbol.make("foldl"), f2814, init2815, l2816, ls2817);
    var loop2818 = function(init2819, ls2820) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(M1.car(ls2820)) !== false) {
            var if_res1601 = loop2818(M1.apply(f2814, mapadd(M1.car, ls2820, init2819)), M3.map(M1.cdr, ls2820));
        } else {
            var if_res1601 = init2819;
        }
        return if_res1601;
    };
    return loop2818(init2815, M1.cons(l2816, ls2817));
});
var foldl = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1597 = {
        '3': cl1595
    } [arguments.length];
    if (fixed_lam1597 !== undefined) {
        return fixed_lam1597.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1596.length, 1) !== false) {
            var if_res1598 = cl1596.apply(null, arguments);
        } else {
            var if_res1598 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1598;
    }
}, [M1.make_arity_at_least(3)]);
var cl1602 = function(f2821, init2822, l2823) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_fold($rjs_core.PrimitiveSymbol.make("foldr"), f2821, init2822, l2823, M1.rnull);
    var loop2824 = function(init2825, l2826) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2826) !== false) {
            var if_res1606 = init2825;
        } else {
            var if_res1606 = f2821(M1.car(l2826), loop2824(init2825, M1.cdr(l2826)));
        }
        return if_res1606;
    };
    return loop2824(init2822, l2823);
};
var cl1603 = $rjs_core.attachProcedureArity(function(f2827, init2828, l2829, ...ls28301607) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var ls2830 = $rjs_core.Pair.listFromArray(ls28301607);
    check_fold($rjs_core.PrimitiveSymbol.make("foldr"), f2827, init2828, l2829, ls2830);
    var loop2831 = function(ls2832) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(M1.car(ls2832)) !== false) {
            var if_res1608 = M1.apply(f2827, mapadd(M1.car, ls2832, loop2831(M3.map(M1.cdr, ls2832))));
        } else {
            var if_res1608 = init2828;
        }
        return if_res1608;
    };
    return loop2831(M1.cons(l2829, ls2830));
});
var foldr = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1604 = {
        '3': cl1602
    } [arguments.length];
    if (fixed_lam1604 !== undefined) {
        return fixed_lam1604.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1603.length, 1) !== false) {
            var if_res1605 = cl1603.apply(null, arguments);
        } else {
            var if_res1605 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1605;
    }
}, [M1.make_arity_at_least(3)]);
var filter = function(f2833, list2834) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2833) !== false) {
        var if_res1609 = M1.procedure_arity_includes_p(f2833, 1);
    } else {
        var if_res1609 = false;
    }
    if (if_res1609 !== false) {
        var if_res1610 = M1.rvoid();
    } else {
        var if_res1610 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter"), $rjs_core.UString.make("(any/c . -> . any/c)"), f2833);
    }
    if_res1610;
    if (M1.list_p(list2834) !== false) {
        var if_res1611 = M1.rvoid();
    } else {
        var if_res1611 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter"), $rjs_core.UString.make("list?"), list2834);
    }
    if_res1611;
    var loop2835 = function(l2836, result2837) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2836) !== false) {
            var if_res1614 = M6.alt_reverse(result2837);
        } else {
            var temp1613 = M1.cdr(l2836);
            if (f2833(M1.car(l2836)) !== false) {
                var if_res1612 = M1.cons(M1.car(l2836), result2837);
            } else {
                var if_res1612 = result2837;
            }
            var if_res1614 = loop2835(temp1613, if_res1612);
        }
        return if_res1614;
    };
    return loop2835(list2834, M1.rnull);
};
var build_vector = function(n2838, fcn2839) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_nonnegative_integer_p(n2838) !== false) {
        var if_res1615 = M1.rvoid();
    } else {
        var if_res1615 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-vector"), $rjs_core.UString.make("exact-nonnegative-integer?"), n2838);
    }
    if_res1615;
    if (M1.procedure_p(fcn2839) !== false) {
        var if_res1616 = M1.procedure_arity_includes_p(fcn2839, 1);
    } else {
        var if_res1616 = false;
    }
    if (if_res1616 !== false) {
        var if_res1617 = M1.rvoid();
    } else {
        var if_res1617 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-vector"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . any/c)"), fcn2839);
    }
    if_res1617;
    var vec2840 = M1.make_vector(n2838);
    var loop2841 = function(i2842) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.__eq_(i2842, n2838) !== false) {
            var if_res1618 = vec2840;
        } else {
            M1.vector_set_bang_(vec2840, i2842, fcn2839(i2842));
            var if_res1618 = loop2841(M1.add1(i2842));
        }
        return if_res1618;
    };
    return loop2841(0);
};
var build_string = function(n2843, fcn2844) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_nonnegative_integer_p(n2843) !== false) {
        var if_res1619 = M1.rvoid();
    } else {
        var if_res1619 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-string"), $rjs_core.UString.make("exact-nonnegative-integer?"), n2843);
    }
    if_res1619;
    if (M1.procedure_p(fcn2844) !== false) {
        var if_res1620 = M1.procedure_arity_includes_p(fcn2844, 1);
    } else {
        var if_res1620 = false;
    }
    if (if_res1620 !== false) {
        var if_res1621 = M1.rvoid();
    } else {
        var if_res1621 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-string"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . char?)"), fcn2844);
    }
    if_res1621;
    var str2845 = M1.make_string(n2843);
    var loop2846 = function(i2847) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.__eq_(i2847, n2843) !== false) {
            var if_res1622 = str2845;
        } else {
            M1.string_set_bang_(str2845, i2847, fcn2844(i2847));
            var if_res1622 = loop2846(M1.add1(i2847));
        }
        return if_res1622;
    };
    return loop2846(0);
};
var build_list = function(n2848, fcn2849) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_nonnegative_integer_p(n2848) !== false) {
        var if_res1623 = M1.rvoid();
    } else {
        var if_res1623 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-list"), $rjs_core.UString.make("exact-nonnegative-integer?"), n2848);
    }
    if_res1623;
    if (M1.procedure_p(fcn2849) !== false) {
        var if_res1624 = M1.procedure_arity_includes_p(fcn2849, 1);
    } else {
        var if_res1624 = false;
    }
    if (if_res1624 !== false) {
        var if_res1625 = M1.rvoid();
    } else {
        var if_res1625 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-list"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . any/c)"), fcn2849);
    }
    if_res1625;
    var recr2850 = function(j2851, i2852) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.zero_p(i2852) !== false) {
            var if_res1626 = M1.rnull;
        } else {
            var if_res1626 = M1.cons(fcn2849(j2851), recr2850(M1.add1(j2851), M1.sub1(i2852)));
        }
        return if_res1626;
    };
    return recr2850(0, n2848);
};
var id_p2853 = function(f2854) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.eq_p(M1.values, f2854);
};
var pipeline12855 = function(f2856, rfuns2857) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var composed2858 = function(x2859) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var loop2860 = function(x2861, f2862, rfuns2863) {
            if (arguments.length !== 3) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(rfuns2863) !== false) {
                var if_res1627 = f2862(x2861);
            } else {
                var if_res1627 = loop2860(f2862(x2861), M1.car(rfuns2863), M1.cdr(rfuns2863));
            }
            return if_res1627;
        };
        return loop2860(x2859, f2856, rfuns2857);
    };
    return composed2858;
};
var pipeline_times_2864 = function(f2865, rfuns2866) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.eqv_p(2, M1.procedure_arity_mask(f2865)) !== false) {
        var loop2867 = function(f2868, rfuns2869) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(rfuns2869) !== false) {
                var if_res1629 = f2868;
            } else {
                var fst2870 = M1.car(rfuns2869);
                if (M1.eqv_p(2, M1.procedure_arity_mask(fst2870)) !== false) {
                    var if_res1628 = function(x2871) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return fst2870(f2868(x2871));
                    };
                } else {
                    var if_res1628 = function(x2872) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return M1.call_with_values(function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2868(x2872);
                        }, fst2870);
                    };
                }
                var if_res1629 = loop2867(if_res1628, M1.cdr(rfuns2869));
            }
            return if_res1629;
        };
        var if_res1636 = loop2867(f2865, rfuns2866);
    } else {
        var funs2873 = M6.alt_reverse(M1.cons(f2865, rfuns2866));
        var loop2874 = function(f2875, funs2876) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(funs2876) !== false) {
                var if_res1635 = f2875;
            } else {
                var fst2877 = M1.car(funs2876);
                if (M1.eqv_p(2, M1.procedure_arity_mask(f2875)) !== false) {
                    if (M1.eqv_p(2, M1.procedure_arity_mask(fst2877)) !== false) {
                        var if_res1631 = function(x2878) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2875(fst2877(x2878));
                        };
                    } else {
                        var if_res1631 = $rjs_core.attachProcedureArity(function(...xs28791630) {
                            var xs2879 = $rjs_core.Pair.listFromArray(xs28791630);
                            return f2875(M1.apply(fst2877, xs2879));
                        });
                    }
                    var if_res1634 = if_res1631;
                } else {
                    if (M1.eqv_p(2, M1.procedure_arity_mask(fst2877)) !== false) {
                        var if_res1633 = function(x2880) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return fst2877(x2880);
                            }, f2875);
                        };
                    } else {
                        var if_res1633 = $rjs_core.attachProcedureArity(function(...xs28811632) {
                            var xs2881 = $rjs_core.Pair.listFromArray(xs28811632);
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return M1.apply(fst2877, xs2881);
                            }, f2875);
                        });
                    }
                    var if_res1634 = if_res1633;
                }
                var if_res1635 = loop2874(if_res1634, M1.cdr(funs2876));
            }
            return if_res1635;
        };
        var if_res1636 = loop2874(M1.car(funs2873), M1.cdr(funs2873));
    }
    return if_res1636;
};
var simple_compose2883 = function(f2884, g2885) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var arity_mask2886 = M1.procedure_arity_mask(g2885);
    var let_result1637 = M0.procedure_keywords(g2885);
    var required_kwds2887 = let_result1637.getAt(0);
    var allowed_kwds2888 = let_result1637.getAt(1);
    var tmp2890 = arity_mask2886;
    if (M1.equal_p(tmp2890, 1) !== false) {
        var if_res1647 = function() {
            if (arguments.length !== 0) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return f2884(g2885());
        };
    } else {
        if (M1.equal_p(tmp2890, 2) !== false) {
            var if_res1646 = function(x2891) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return f2884(g2885(x2891));
            };
        } else {
            if (M1.equal_p(tmp2890, 4) !== false) {
                var if_res1645 = function(x2892, y2893) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f2884(g2885(x2892, y2893));
                };
            } else {
                var cl1638 = function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f2884(g2885());
                };
                var cl1639 = function(x2894) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f2884(g2885(x2894));
                };
                var cl1640 = function(x2895, y2896) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f2884(g2885(x2895, y2896));
                };
                var cl1641 = $rjs_core.attachProcedureArity(function(...args28971644) {
                    var args2897 = $rjs_core.Pair.listFromArray(args28971644);
                    return f2884(M1.apply(g2885, args2897));
                });
                var if_res1645 = $rjs_core.attachProcedureArity(function() {
                    var fixed_lam1642 = {
                        '0': cl1638,
                        '1': cl1639,
                        '2': cl1640
                    } [arguments.length];
                    if (fixed_lam1642 !== undefined) {
                        return fixed_lam1642.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            var if_res1643 = cl1641.apply(null, arguments);
                        } else {
                            var if_res1643 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                        return if_res1643;
                    }
                }, [M1.make_arity_at_least(0)]);
            }
            var if_res1646 = if_res1645;
        }
        var if_res1647 = if_res1646;
    }
    var composed2889 = if_res1647;
    if (M1.null_p(allowed_kwds2888) !== false) {
        if (M1.eqv_p(arity_mask2886, M1.procedure_arity_mask(composed2889)) !== false) {
            var if_res1648 = composed2889;
        } else {
            var if_res1648 = M0.new_procedure_reduce_arity_mask(composed2889, arity_mask2886);
        }
        var if_res1650 = if_res1648;
    } else {
        var if_res1650 = M0.procedure_reduce_keyword_arity_mask(M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2898, kw_args2899, ...xs29001649) {
            if (arguments.length < 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            var xs2900 = $rjs_core.Pair.listFromArray(xs29001649);
            return f2884(M2.keyword_apply(g2885, kws2898, kw_args2899, xs2900));
        }), composed2889), arity_mask2886, required_kwds2887, allowed_kwds2888, $rjs_core.PrimitiveSymbol.make("composed"), $rjs_core.PrimitiveSymbol.make("racket"));
    }
    return if_res1650;
};
var cl1651 = function(f2901) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2901) !== false) {
        var if_res1657 = f2901;
    } else {
        var if_res1657 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 0, f2901);
    }
    return if_res1657;
};
var cl1652 = function(f2902, g2903) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2902) !== false) {
        var if_res1658 = M1.rvoid();
    } else {
        var if_res1658 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 0, f2902, g2903);
    }
    if_res1658;
    if (M1.procedure_p(g2903) !== false) {
        var if_res1659 = M1.rvoid();
    } else {
        var if_res1659 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 1, f2902, g2903);
    }
    if_res1659;
    if (M1.procedure_arity_includes_p(f2902, 1) !== false) {
        var if_res1660 = M1.rvoid();
    } else {
        var if_res1660 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("(any/c . -> . any/c)"), 0, f2902, $rjs_core.Pair.EMPTY);
    }
    if_res1660;
    var let_result1661 = M0.procedure_keywords(f2902);
    var req2904 = let_result1661.getAt(0);
    var _2905 = let_result1661.getAt(1);
    if (M1.null_p(req2904) !== false) {
        var if_res1662 = M1.rvoid();
    } else {
        var if_res1662 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), 0, f2902, $rjs_core.Pair.EMPTY);
    }
    if_res1662;
    return simple_compose2883(f2902, g2903);
};
var cl1653 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.values;
};
var cl1654 = $rjs_core.attachProcedureArity(function(f02906, ...fs029071663) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var fs02907 = $rjs_core.Pair.listFromArray(fs029071663);
    var loop2908 = function(g2909, fs2910, i2911, rfuns2912) {
        if (arguments.length !== 4) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.procedure_p(g2909) !== false) {
            var if_res1664 = M1.rvoid();
        } else {
            var if_res1664 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), i2911, f02906, fs02907);
        }
        if_res1664;
        if (M1.pair_p(fs2910) !== false) {
            if (M1.procedure_arity_includes_p(g2909, 1) !== false) {
                var if_res1665 = M1.rvoid();
            } else {
                var if_res1665 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("(any/c . -> . any/c)"), i2911, f02906, fs02907);
            }
            if_res1665;
            var let_result1666 = M0.procedure_keywords(g2909);
            var req2913 = let_result1666.getAt(0);
            var _2914 = let_result1666.getAt(1);
            if (M1.null_p(req2913) !== false) {
                var if_res1667 = M1.rvoid();
            } else {
                var if_res1667 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), i2911, f02906, fs02907);
            }
            if_res1667;
            var if_res1669 = loop2908(M1.car(fs2910), M1.cdr(fs2910), M1.add1(i2911), M1.cons(g2909, rfuns2912));
        } else {
            var rfuns2915 = remq_times_(M1.list(M1.values), rfuns2912);
            if (M1.null_p(rfuns2915) !== false) {
                var if_res1668 = M1.values;
            } else {
                var if_res1668 = pipeline12855(M1.car(rfuns2915), M1.cdr(rfuns2915));
            }
            var f2916 = if_res1668;
            var if_res1669 = simple_compose2883(f2916, g2909);
        }
        return if_res1669;
    };
    return loop2908(f02906, fs02907, 0, $rjs_core.Pair.EMPTY);
});
var compose12882 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1655 = {
        '1': cl1651,
        '2': cl1652,
        '0': cl1653
    } [arguments.length];
    if (fixed_lam1655 !== undefined) {
        return fixed_lam1655.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1654.length, 1) !== false) {
            var if_res1656 = cl1654.apply(null, arguments);
        } else {
            var if_res1656 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1656;
    }
}, [0, M1.make_arity_at_least(1)]);
var simple_compose2918 = function(f2919, g2920) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (id_p2853(f2919) !== false) {
        var if_res1699 = g2920;
    } else {
        if (M1.eqv_p(2, M1.procedure_arity_mask(f2919)) !== false) {
            var arity_mask2921 = M1.procedure_arity_mask(g2920);
            var let_result1670 = M0.procedure_keywords(g2920);
            var required_kwds2922 = let_result1670.getAt(0);
            var allowed_kwds2923 = let_result1670.getAt(1);
            var tmp2925 = arity_mask2921;
            if (M1.equal_p(tmp2925, 1) !== false) {
                var if_res1680 = function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f2919(g2920());
                };
            } else {
                if (M1.equal_p(tmp2925, 2) !== false) {
                    var if_res1679 = function(x2926) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return f2919(g2920(x2926));
                    };
                } else {
                    if (M1.equal_p(tmp2925, 4) !== false) {
                        var if_res1678 = function(x2927, y2928) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2919(g2920(x2927, y2928));
                        };
                    } else {
                        var cl1671 = function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2919(g2920());
                        };
                        var cl1672 = function(x2929) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2919(g2920(x2929));
                        };
                        var cl1673 = function(x2930, y2931) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2919(g2920(x2930, y2931));
                        };
                        var cl1674 = $rjs_core.attachProcedureArity(function(...args29321677) {
                            var args2932 = $rjs_core.Pair.listFromArray(args29321677);
                            return f2919(M1.apply(g2920, args2932));
                        });
                        var if_res1678 = $rjs_core.attachProcedureArity(function() {
                            var fixed_lam1675 = {
                                '0': cl1671,
                                '1': cl1672,
                                '2': cl1673
                            } [arguments.length];
                            if (fixed_lam1675 !== undefined) {
                                return fixed_lam1675.apply(null, arguments);
                            } else {
                                if (true !== false) {
                                    var if_res1676 = cl1674.apply(null, arguments);
                                } else {
                                    var if_res1676 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
                                }
                                return if_res1676;
                            }
                        }, [M1.make_arity_at_least(0)]);
                    }
                    var if_res1679 = if_res1678;
                }
                var if_res1680 = if_res1679;
            }
            var composed2924 = if_res1680;
            if (M1.null_p(allowed_kwds2923) !== false) {
                if (M1.eqv_p(arity_mask2921, M1.procedure_arity_mask(composed2924)) !== false) {
                    var if_res1681 = composed2924;
                } else {
                    var if_res1681 = M0.new_procedure_reduce_arity_mask(composed2924, arity_mask2921);
                }
                var if_res1683 = if_res1681;
            } else {
                var if_res1683 = M0.procedure_reduce_keyword_arity_mask(M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2933, kw_args2934, ...xs29351682) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var xs2935 = $rjs_core.Pair.listFromArray(xs29351682);
                    return f2919(M2.keyword_apply(g2920, kws2933, kw_args2934, xs2935));
                }), composed2924), arity_mask2921, required_kwds2922, allowed_kwds2923, $rjs_core.PrimitiveSymbol.make("composed"), $rjs_core.PrimitiveSymbol.make("racket"));
            }
            var if_res1698 = if_res1683;
        } else {
            var arity_mask2936 = M1.procedure_arity_mask(g2920);
            var let_result1684 = M0.procedure_keywords(g2920);
            var required_kwds2937 = let_result1684.getAt(0);
            var allowed_kwds2938 = let_result1684.getAt(1);
            var tmp2940 = arity_mask2936;
            if (M1.equal_p(tmp2940, 1) !== false) {
                var if_res1694 = function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M1.call_with_values(function() {
                        if (arguments.length !== 0) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return g2920();
                    }, f2919);
                };
            } else {
                if (M1.equal_p(tmp2940, 2) !== false) {
                    var if_res1693 = function(x2941) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return M1.call_with_values(function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return g2920(x2941);
                        }, f2919);
                    };
                } else {
                    if (M1.equal_p(tmp2940, 4) !== false) {
                        var if_res1692 = function(x2942, y2943) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g2920(x2942, y2943);
                            }, f2919);
                        };
                    } else {
                        var cl1685 = function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g2920();
                            }, f2919);
                        };
                        var cl1686 = function(x2944) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g2920(x2944);
                            }, f2919);
                        };
                        var cl1687 = function(x2945, y2946) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g2920(x2945, y2946);
                            }, f2919);
                        };
                        var cl1688 = $rjs_core.attachProcedureArity(function(...args29471691) {
                            var args2947 = $rjs_core.Pair.listFromArray(args29471691);
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return M1.apply(g2920, args2947);
                            }, f2919);
                        });
                        var if_res1692 = $rjs_core.attachProcedureArity(function() {
                            var fixed_lam1689 = {
                                '0': cl1685,
                                '1': cl1686,
                                '2': cl1687
                            } [arguments.length];
                            if (fixed_lam1689 !== undefined) {
                                return fixed_lam1689.apply(null, arguments);
                            } else {
                                if (true !== false) {
                                    var if_res1690 = cl1688.apply(null, arguments);
                                } else {
                                    var if_res1690 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
                                }
                                return if_res1690;
                            }
                        }, [M1.make_arity_at_least(0)]);
                    }
                    var if_res1693 = if_res1692;
                }
                var if_res1694 = if_res1693;
            }
            var composed2939 = if_res1694;
            if (M1.null_p(allowed_kwds2938) !== false) {
                if (M1.eqv_p(arity_mask2936, M1.procedure_arity_mask(composed2939)) !== false) {
                    var if_res1695 = composed2939;
                } else {
                    var if_res1695 = M0.new_procedure_reduce_arity_mask(composed2939, arity_mask2936);
                }
                var if_res1697 = if_res1695;
            } else {
                var if_res1697 = M0.procedure_reduce_keyword_arity_mask(M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2948, kw_args2949, ...xs29501696) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var xs2950 = $rjs_core.Pair.listFromArray(xs29501696);
                    return M1.call_with_values(function() {
                        if (arguments.length !== 0) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return M2.keyword_apply(g2920, kws2948, kw_args2949, xs2950);
                    }, f2919);
                }), composed2939), arity_mask2936, required_kwds2937, allowed_kwds2938, $rjs_core.PrimitiveSymbol.make("composed"), $rjs_core.PrimitiveSymbol.make("racket"));
            }
            var if_res1698 = if_res1697;
        }
        var if_res1699 = if_res1698;
    }
    return if_res1699;
};
var cl1700 = function(f2951) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2951) !== false) {
        var if_res1706 = f2951;
    } else {
        var if_res1706 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 0, f2951);
    }
    return if_res1706;
};
var cl1701 = function(f2952, g2953) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2952) !== false) {
        var if_res1707 = M1.rvoid();
    } else {
        var if_res1707 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 0, f2952, g2953);
    }
    if_res1707;
    if (M1.procedure_p(g2953) !== false) {
        var if_res1708 = M1.rvoid();
    } else {
        var if_res1708 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 1, f2952, g2953);
    }
    if_res1708;
    var let_result1709 = M0.procedure_keywords(f2952);
    var req2954 = let_result1709.getAt(0);
    var _2955 = let_result1709.getAt(1);
    if (M1.null_p(req2954) !== false) {
        var if_res1710 = M1.rvoid();
    } else {
        var if_res1710 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), 0, f2952, $rjs_core.Pair.EMPTY);
    }
    if_res1710;
    return simple_compose2918(f2952, g2953);
};
var cl1702 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.values;
};
var cl1703 = $rjs_core.attachProcedureArity(function(f02956, ...fs029571711) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var fs02957 = $rjs_core.Pair.listFromArray(fs029571711);
    var loop2958 = function(g2959, fs2960, i2961, rfuns2962) {
        if (arguments.length !== 4) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.procedure_p(g2959) !== false) {
            var if_res1712 = M1.rvoid();
        } else {
            var if_res1712 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), i2961, f02956, fs02957);
        }
        if_res1712;
        if (M1.pair_p(fs2960) !== false) {
            var let_result1713 = M0.procedure_keywords(g2959);
            var req2963 = let_result1713.getAt(0);
            var _2964 = let_result1713.getAt(1);
            if (M1.null_p(req2963) !== false) {
                var if_res1714 = M1.rvoid();
            } else {
                var if_res1714 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), i2961, f02956, fs02957);
            }
            if_res1714;
            var if_res1716 = loop2958(M1.car(fs2960), M1.cdr(fs2960), M1.add1(i2961), M1.cons(g2959, rfuns2962));
        } else {
            var rfuns2965 = remq_times_(M1.list(M1.values), rfuns2962);
            if (M1.null_p(rfuns2965) !== false) {
                var if_res1715 = M1.values;
            } else {
                var if_res1715 = pipeline_times_2864(M1.car(rfuns2965), M1.cdr(rfuns2965));
            }
            var f2966 = if_res1715;
            var if_res1716 = simple_compose2918(f2966, g2959);
        }
        return if_res1716;
    };
    return loop2958(f02956, fs02957, 0, $rjs_core.Pair.EMPTY);
});
var compose2917 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1704 = {
        '1': cl1700,
        '2': cl1701,
        '0': cl1702
    } [arguments.length];
    if (fixed_lam1704 !== undefined) {
        return fixed_lam1704.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1703.length, 1) !== false) {
            var if_res1705 = cl1703.apply(null, arguments);
        } else {
            var if_res1705 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1705;
    }
}, [0, M1.make_arity_at_least(1)]);
var let_result1717 = M1.values(compose12882, compose2917);
var compose1 = let_result1717.getAt(0);
var compose = let_result1717.getAt(1);
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