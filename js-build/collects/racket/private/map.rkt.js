import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./kw.rkt.js";
import * as M1 from "../../../runtime/kernel.rkt.js";
var cl1520 = function(f2782, l2783) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1527 = true;
    } else {
        if (M1.procedure_p(f2782) !== false) {
            if (M1.procedure_arity_includes_p(f2782, 1) !== false) {
                var if_res1525 = M1.list_p(l2783);
            } else {
                var if_res1525 = false;
            }
            var if_res1526 = if_res1525;
        } else {
            var if_res1526 = false;
        }
        var if_res1527 = if_res1526;
    }
    if (if_res1527 !== false) {
        var loop2784 = function(l2785) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l2785) !== false) {
                var if_res1528 = M1.rnull;
            } else {
                var r2786 = M1.cdr(l2785);
                var if_res1528 = M1.cons(f2782(M1.car(l2785)), loop2784(r2786));
            }
            return if_res1528;
        };
        var if_res1529 = loop2784(l2783);
    } else {
        var if_res1529 = gen_map(f2782, M1.list(l2783));
    }
    return if_res1529;
};
var cl1521 = function(f2787, l12788, l22789) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1534 = true;
    } else {
        if (M1.procedure_p(f2787) !== false) {
            if (M1.procedure_arity_includes_p(f2787, 2) !== false) {
                if (M1.list_p(l12788) !== false) {
                    if (M1.list_p(l22789) !== false) {
                        var if_res1530 = M1.__eq_(M1.length(l12788), M1.length(l22789));
                    } else {
                        var if_res1530 = false;
                    }
                    var if_res1531 = if_res1530;
                } else {
                    var if_res1531 = false;
                }
                var if_res1532 = if_res1531;
            } else {
                var if_res1532 = false;
            }
            var if_res1533 = if_res1532;
        } else {
            var if_res1533 = false;
        }
        var if_res1534 = if_res1533;
    }
    if (if_res1534 !== false) {
        var loop2790 = function(l12791, l22792) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l12791) !== false) {
                var if_res1535 = M1.rnull;
            } else {
                var r12793 = M1.cdr(l12791);
                var r22794 = M1.cdr(l22792);
                var if_res1535 = M1.cons(f2787(M1.car(l12791), M1.car(l22792)), loop2790(r12793, r22794));
            }
            return if_res1535;
        };
        var if_res1536 = loop2790(l12788, l22789);
    } else {
        var if_res1536 = gen_map(f2787, M1.list(l12788, l22789));
    }
    return if_res1536;
};
var cl1522 = $rjs_core.attachProcedureArity(function(f2795, l2796, ...args27971537) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2797 = $rjs_core.Pair.listFromArray(args27971537);
    return gen_map(f2795, M1.cons(l2796, args2797));
});
var map2781 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1523 = {
        '2': cl1520,
        '3': cl1521
    } [arguments.length];
    if (fixed_lam1523 !== undefined) {
        return fixed_lam1523.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1522.length, 1) !== false) {
            var if_res1524 = cl1522.apply(null, arguments);
        } else {
            var if_res1524 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1524;
    }
}, [M1.make_arity_at_least(2)]);
var map2 = map2781;
var cl1538 = function(f2799, l2800) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1545 = true;
    } else {
        if (M1.procedure_p(f2799) !== false) {
            if (M1.procedure_arity_includes_p(f2799, 1) !== false) {
                var if_res1543 = M1.list_p(l2800);
            } else {
                var if_res1543 = false;
            }
            var if_res1544 = if_res1543;
        } else {
            var if_res1544 = false;
        }
        var if_res1545 = if_res1544;
    }
    if (if_res1545 !== false) {
        var loop2801 = function(l2802) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l2802) !== false) {
                var if_res1546 = M1.rvoid();
            } else {
                var r2803 = M1.cdr(l2802);
                f2799(M1.car(l2802));
                var if_res1546 = loop2801(r2803);
            }
            return if_res1546;
        };
        var if_res1547 = loop2801(l2800);
    } else {
        var if_res1547 = gen_for_each(f2799, M1.list(l2800));
    }
    return if_res1547;
};
var cl1539 = function(f2804, l12805, l22806) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1552 = true;
    } else {
        if (M1.procedure_p(f2804) !== false) {
            if (M1.procedure_arity_includes_p(f2804, 2) !== false) {
                if (M1.list_p(l12805) !== false) {
                    if (M1.list_p(l22806) !== false) {
                        var if_res1548 = M1.__eq_(M1.length(l12805), M1.length(l22806));
                    } else {
                        var if_res1548 = false;
                    }
                    var if_res1549 = if_res1548;
                } else {
                    var if_res1549 = false;
                }
                var if_res1550 = if_res1549;
            } else {
                var if_res1550 = false;
            }
            var if_res1551 = if_res1550;
        } else {
            var if_res1551 = false;
        }
        var if_res1552 = if_res1551;
    }
    if (if_res1552 !== false) {
        var loop2807 = function(l12808, l22809) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l12808) !== false) {
                var if_res1553 = M1.rvoid();
            } else {
                var r12810 = M1.cdr(l12808);
                var r22811 = M1.cdr(l22809);
                f2804(M1.car(l12808), M1.car(l22809));
                var if_res1553 = loop2807(r12810, r22811);
            }
            return if_res1553;
        };
        var if_res1554 = loop2807(l12805, l22806);
    } else {
        var if_res1554 = gen_for_each(f2804, M1.list(l12805, l22806));
    }
    return if_res1554;
};
var cl1540 = $rjs_core.attachProcedureArity(function(f2812, l2813, ...args28141555) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2814 = $rjs_core.Pair.listFromArray(args28141555);
    return gen_for_each(f2812, M1.cons(l2813, args2814));
});
var for_each2798 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1541 = {
        '2': cl1538,
        '3': cl1539
    } [arguments.length];
    if (fixed_lam1541 !== undefined) {
        return fixed_lam1541.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1540.length, 1) !== false) {
            var if_res1542 = cl1540.apply(null, arguments);
        } else {
            var if_res1542 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1542;
    }
}, [M1.make_arity_at_least(2)]);
var for_each2 = for_each2798;
var cl1556 = function(f2816, l2817) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1563 = true;
    } else {
        if (M1.procedure_p(f2816) !== false) {
            if (M1.procedure_arity_includes_p(f2816, 1) !== false) {
                var if_res1561 = M1.list_p(l2817);
            } else {
                var if_res1561 = false;
            }
            var if_res1562 = if_res1561;
        } else {
            var if_res1562 = false;
        }
        var if_res1563 = if_res1562;
    }
    if (if_res1563 !== false) {
        if (M1.null_p(l2817) !== false) {
            var if_res1566 = true;
        } else {
            var loop2818 = function(l2819) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l2819)) !== false) {
                    var if_res1565 = f2816(M1.car(l2819));
                } else {
                    var r2820 = M1.cdr(l2819);
                    if (f2816(M1.car(l2819)) !== false) {
                        var if_res1564 = loop2818(r2820);
                    } else {
                        var if_res1564 = false;
                    }
                    var if_res1565 = if_res1564;
                }
                return if_res1565;
            };
            var if_res1566 = loop2818(l2817);
        }
        var if_res1567 = if_res1566;
    } else {
        var if_res1567 = gen_andmap(f2816, M1.list(l2817));
    }
    return if_res1567;
};
var cl1557 = function(f2821, l12822, l22823) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1572 = true;
    } else {
        if (M1.procedure_p(f2821) !== false) {
            if (M1.procedure_arity_includes_p(f2821, 2) !== false) {
                if (M1.list_p(l12822) !== false) {
                    if (M1.list_p(l22823) !== false) {
                        var if_res1568 = M1.__eq_(M1.length(l12822), M1.length(l22823));
                    } else {
                        var if_res1568 = false;
                    }
                    var if_res1569 = if_res1568;
                } else {
                    var if_res1569 = false;
                }
                var if_res1570 = if_res1569;
            } else {
                var if_res1570 = false;
            }
            var if_res1571 = if_res1570;
        } else {
            var if_res1571 = false;
        }
        var if_res1572 = if_res1571;
    }
    if (if_res1572 !== false) {
        if (M1.null_p(l12822) !== false) {
            var if_res1575 = true;
        } else {
            var loop2824 = function(l12825, l22826) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l12825)) !== false) {
                    var if_res1574 = f2821(M1.car(l12825), M1.car(l22826));
                } else {
                    var r12827 = M1.cdr(l12825);
                    var r22828 = M1.cdr(l22826);
                    if (f2821(M1.car(l12825), M1.car(l22826)) !== false) {
                        var if_res1573 = loop2824(r12827, r22828);
                    } else {
                        var if_res1573 = false;
                    }
                    var if_res1574 = if_res1573;
                }
                return if_res1574;
            };
            var if_res1575 = loop2824(l12822, l22823);
        }
        var if_res1576 = if_res1575;
    } else {
        var if_res1576 = gen_andmap(f2821, M1.list(l12822, l22823));
    }
    return if_res1576;
};
var cl1558 = $rjs_core.attachProcedureArity(function(f2829, l2830, ...args28311577) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2831 = $rjs_core.Pair.listFromArray(args28311577);
    return gen_andmap(f2829, M1.cons(l2830, args2831));
});
var andmap2815 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1559 = {
        '2': cl1556,
        '3': cl1557
    } [arguments.length];
    if (fixed_lam1559 !== undefined) {
        return fixed_lam1559.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1558.length, 1) !== false) {
            var if_res1560 = cl1558.apply(null, arguments);
        } else {
            var if_res1560 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1560;
    }
}, [M1.make_arity_at_least(2)]);
var andmap2 = andmap2815;
var cl1578 = function(f2833, l2834) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1585 = true;
    } else {
        if (M1.procedure_p(f2833) !== false) {
            if (M1.procedure_arity_includes_p(f2833, 1) !== false) {
                var if_res1583 = M1.list_p(l2834);
            } else {
                var if_res1583 = false;
            }
            var if_res1584 = if_res1583;
        } else {
            var if_res1584 = false;
        }
        var if_res1585 = if_res1584;
    }
    if (if_res1585 !== false) {
        if (M1.null_p(l2834) !== false) {
            var if_res1588 = false;
        } else {
            var loop2835 = function(l2836) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l2836)) !== false) {
                    var if_res1587 = f2833(M1.car(l2836));
                } else {
                    var r2837 = M1.cdr(l2836);
                    var or_part2838 = f2833(M1.car(l2836));
                    if (or_part2838 !== false) {
                        var if_res1586 = or_part2838;
                    } else {
                        var if_res1586 = loop2835(r2837);
                    }
                    var if_res1587 = if_res1586;
                }
                return if_res1587;
            };
            var if_res1588 = loop2835(l2834);
        }
        var if_res1589 = if_res1588;
    } else {
        var if_res1589 = gen_ormap(f2833, M1.list(l2834));
    }
    return if_res1589;
};
var cl1579 = function(f2839, l12840, l22841) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1594 = true;
    } else {
        if (M1.procedure_p(f2839) !== false) {
            if (M1.procedure_arity_includes_p(f2839, 2) !== false) {
                if (M1.list_p(l12840) !== false) {
                    if (M1.list_p(l22841) !== false) {
                        var if_res1590 = M1.__eq_(M1.length(l12840), M1.length(l22841));
                    } else {
                        var if_res1590 = false;
                    }
                    var if_res1591 = if_res1590;
                } else {
                    var if_res1591 = false;
                }
                var if_res1592 = if_res1591;
            } else {
                var if_res1592 = false;
            }
            var if_res1593 = if_res1592;
        } else {
            var if_res1593 = false;
        }
        var if_res1594 = if_res1593;
    }
    if (if_res1594 !== false) {
        if (M1.null_p(l12840) !== false) {
            var if_res1597 = false;
        } else {
            var loop2842 = function(l12843, l22844) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l12843)) !== false) {
                    var if_res1596 = f2839(M1.car(l12843), M1.car(l22844));
                } else {
                    var r12845 = M1.cdr(l12843);
                    var r22846 = M1.cdr(l22844);
                    var or_part2847 = f2839(M1.car(l12843), M1.car(l22844));
                    if (or_part2847 !== false) {
                        var if_res1595 = or_part2847;
                    } else {
                        var if_res1595 = loop2842(r12845, r22846);
                    }
                    var if_res1596 = if_res1595;
                }
                return if_res1596;
            };
            var if_res1597 = loop2842(l12840, l22841);
        }
        var if_res1598 = if_res1597;
    } else {
        var if_res1598 = gen_ormap(f2839, M1.list(l12840, l22841));
    }
    return if_res1598;
};
var cl1580 = $rjs_core.attachProcedureArity(function(f2848, l2849, ...args28501599) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2850 = $rjs_core.Pair.listFromArray(args28501599);
    return gen_ormap(f2848, M1.cons(l2849, args2850));
});
var ormap2832 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1581 = {
        '2': cl1578,
        '3': cl1579
    } [arguments.length];
    if (fixed_lam1581 !== undefined) {
        return fixed_lam1581.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1580.length, 1) !== false) {
            var if_res1582 = cl1580.apply(null, arguments);
        } else {
            var if_res1582 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1582;
    }
}, [M1.make_arity_at_least(2)]);
var ormap2 = ormap2832;
var check_args = function(who2851, f2852, ls2853) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2852) !== false) {
        var if_res1600 = M1.rvoid();
    } else {
        var if_res1600 = M1.raise_argument_error(who2851, $rjs_core.UString.make("procedure?"), f2852);
    }
    if_res1600;
    var loop2854 = function(prev_len2855, ls2856, i2857) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(ls2856) !== false) {
            var if_res1604 = M1.rvoid();
        } else {
            var l2858 = M1.car(ls2856);
            if (M1.list_p(l2858) !== false) {
                var if_res1601 = M1.rvoid();
            } else {
                var if_res1601 = M1.raise_argument_error(who2851, $rjs_core.UString.make("list?"), l2858);
            }
            if_res1601;
            var len2859 = M1.length(l2858);
            if (prev_len2855 !== false) {
                var if_res1602 = M1.not(M1.__eq_(len2859, prev_len2855));
            } else {
                var if_res1602 = false;
            }
            if (if_res1602 !== false) {
                var if_res1603 = M1.raise_arguments_error(who2851, $rjs_core.UString.make("all lists must have same size"), $rjs_core.UString.make("first list length"), prev_len2855, $rjs_core.UString.make("other list length"), len2859, $rjs_core.UString.make("procedure"), f2852);
            } else {
                var if_res1603 = M1.rvoid();
            }
            if_res1603;
            var if_res1604 = loop2854(len2859, M1.cdr(ls2856), M1.add1(i2857));
        }
        return if_res1604;
    };
    loop2854(false, ls2853, 1);
    if (M1.procedure_arity_includes_p(f2852, M1.length(ls2853)) !== false) {
        var if_res1621 = M1.rvoid();
    } else {
        var let_result1605 = M0.procedure_keywords(f2852);
        var required_keywords2860 = let_result1605.getAt(0);
        var optional_keywords2861 = let_result1605.getAt(1);
        if (M1.pair_p(required_keywords2860) !== false) {
            var if_res1620 = M1.string_append($rjs_core.UString.make("argument mismatch;\n"), $rjs_core.UString.make(" the given procedure expects keyword arguments"));
        } else {
            var if_res1620 = M1.string_append($rjs_core.UString.make("argument mismatch;\n"), $rjs_core.UString.make(" the given procedure's expected number of arguments does not match"), $rjs_core.UString.make(" the given number of lists"));
        }
        var temp1619 = $rjs_core.UString.make("given procedure");
        var n2863 = M1.object_name(f2852);
        if (M1.symbol_p(n2863) !== false) {
            var if_res1616 = M1.symbol__gt_string(n2863);
        } else {
            var if_res1616 = false;
        }
        var or_part2862 = if_res1616;
        if (or_part2862 !== false) {
            var if_res1617 = or_part2862;
        } else {
            var if_res1617 = $rjs_core.UString.make("#<procedure>");
        }
        var temp1618 = M1.unquoted_printing_string(if_res1617);
        var a2864 = M1.procedure_arity(f2852);
        if (M1.pair_p(required_keywords2860) !== false) {
            var if_res1615 = M1.rnull;
        } else {
            if (M1.integer_p(a2864) !== false) {
                var if_res1614 = M1.list($rjs_core.UString.make("expected"), a2864);
            } else {
                if (M1.arity_at_least_p(a2864) !== false) {
                    var if_res1613 = M1.list($rjs_core.UString.make("expected"), M1.unquoted_printing_string(M1.string_append($rjs_core.UString.make("at least "), M1.number__gt_string(M1.arity_at_least_value(a2864)))));
                } else {
                    var if_res1613 = M1.rnull;
                }
                var if_res1614 = if_res1613;
            }
            var if_res1615 = if_res1614;
        }
        if (M1.pair_p(required_keywords2860) !== false) {
            var if_res1612 = M1.rnull;
        } else {
            var if_res1612 = M1.list($rjs_core.UString.make("given"), M1.length(ls2853));
        }
        if (M1.pair_p(required_keywords2860) !== false) {
            var temp1610 = $rjs_core.UString.make("required keywords");
            var loop2865 = function(kws2866) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(kws2866) !== false) {
                    var if_res1609 = M1.rnull;
                } else {
                    var if_res1609 = M1.list_times_($rjs_core.UString.make(" "), M1.string_append($rjs_core.UString.make("#:"), M1.__rjs_quoted__.keyword__gt_string(M1.car(kws2866))), loop2865(M1.cdr(kws2866)));
                }
                return if_res1609;
            };
            var if_res1611 = M1.list(temp1610, M1.unquoted_printing_string(M1.apply(M1.string_append, M1.cdr(loop2865(required_keywords2860)))));
        } else {
            var if_res1611 = M1.rnull;
        }
        var w2867 = M1.quotient(M1.error_print_width(), M1.length(ls2853));
        if (M1.__gt_(w2867, 10) !== false) {
            var temp1607 = $rjs_core.UString.make("argument lists...");
            var loop2868 = function(ls2869) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(ls2869) !== false) {
                    var if_res1606 = M1.rnull;
                } else {
                    var if_res1606 = M1.cons(M1.string_append($rjs_core.UString.make("\n   "), M1.error_value__gt_string_handler()(M1.car(ls2869), w2867)), loop2868(M1.cdr(ls2869)));
                }
                return if_res1606;
            };
            var if_res1608 = M1.list(temp1607, M1.unquoted_printing_string(M1.apply(M1.string_append, loop2868(ls2853))));
        } else {
            var if_res1608 = M1.rnull;
        }
        var if_res1621 = M1.apply(M1.raise_arguments_error, who2851, if_res1620, temp1619, temp1618, M1.append(if_res1615, if_res1612, if_res1611, if_res1608));
    }
    return if_res1621;
};
var gen_map = function(f2870, ls2871) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1622 = true;
    } else {
        var if_res1622 = check_args($rjs_core.PrimitiveSymbol.make("map"), f2870, ls2871);
    }
    if_res1622;
    var loop2872 = function(ls2873) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2873)) !== false) {
            var if_res1623 = M1.rnull;
        } else {
            var next_ls2874 = map2(M1.cdr, ls2873);
            var if_res1623 = M1.cons(M1.apply(f2870, map2(M1.car, ls2873)), loop2872(next_ls2874));
        }
        return if_res1623;
    };
    return loop2872(ls2871);
};
var gen_for_each = function(f2875, ls2876) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1624 = true;
    } else {
        var if_res1624 = check_args($rjs_core.PrimitiveSymbol.make("for-each"), f2875, ls2876);
    }
    if_res1624;
    var loop2877 = function(ls2878) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2878)) !== false) {
            var if_res1625 = M1.rvoid();
        } else {
            var next_ls2879 = map2(M1.cdr, ls2878);
            M1.apply(f2875, map2(M1.car, ls2878));
            var if_res1625 = loop2877(next_ls2879);
        }
        return if_res1625;
    };
    return loop2877(ls2876);
};
var gen_andmap = function(f2880, ls2881) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1626 = true;
    } else {
        var if_res1626 = check_args($rjs_core.PrimitiveSymbol.make("andmap"), f2880, ls2881);
    }
    if_res1626;
    var loop2882 = function(ls2883) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2883)) !== false) {
            var if_res1629 = true;
        } else {
            if (M1.null_p(M1.cdar(ls2883)) !== false) {
                var if_res1628 = M1.apply(f2880, map2(M1.car, ls2883));
            } else {
                var next_ls2884 = map2(M1.cdr, ls2883);
                if (M1.apply(f2880, map2(M1.car, ls2883)) !== false) {
                    var if_res1627 = loop2882(next_ls2884);
                } else {
                    var if_res1627 = false;
                }
                var if_res1628 = if_res1627;
            }
            var if_res1629 = if_res1628;
        }
        return if_res1629;
    };
    return loop2882(ls2881);
};
var gen_ormap = function(f2885, ls2886) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1630 = true;
    } else {
        var if_res1630 = check_args($rjs_core.PrimitiveSymbol.make("ormap"), f2885, ls2886);
    }
    if_res1630;
    var loop2887 = function(ls2888) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2888)) !== false) {
            var if_res1633 = false;
        } else {
            if (M1.null_p(M1.cdar(ls2888)) !== false) {
                var if_res1632 = M1.apply(f2885, map2(M1.car, ls2888));
            } else {
                var next_ls2889 = map2(M1.cdr, ls2888);
                var or_part2890 = M1.apply(f2885, map2(M1.car, ls2888));
                if (or_part2890 !== false) {
                    var if_res1631 = or_part2890;
                } else {
                    var if_res1631 = loop2887(next_ls2889);
                }
                var if_res1632 = if_res1631;
            }
            var if_res1633 = if_res1632;
        }
        return if_res1633;
    };
    return loop2887(ls2886);
};
M1.rvoid();
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    ormap2 as ormap,
    andmap2 as andmap,
    for_each2 as for_each,
    map2 as map
};