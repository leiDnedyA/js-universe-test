import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./kw.rkt.js";
import * as M1 from "../../../runtime/kernel.rkt.js";
var cl1414 = function(f2842, l2843) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1421 = true;
    } else {
        if (M1.procedure_p(f2842) !== false) {
            if (M1.procedure_arity_includes_p(f2842, 1) !== false) {
                var if_res1419 = M1.list_p(l2843);
            } else {
                var if_res1419 = false;
            }
            var if_res1420 = if_res1419;
        } else {
            var if_res1420 = false;
        }
        var if_res1421 = if_res1420;
    }
    if (if_res1421 !== false) {
        var loop2844 = function(l2845) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l2845) !== false) {
                var if_res1422 = M1.rnull;
            } else {
                var r2846 = M1.cdr(l2845);
                var if_res1422 = M1.cons(f2842(M1.car(l2845)), loop2844(r2846));
            }
            return if_res1422;
        };
        var if_res1423 = loop2844(l2843);
    } else {
        var if_res1423 = gen_map(f2842, M1.list(l2843));
    }
    return if_res1423;
};
var cl1415 = function(f2847, l12848, l22849) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1428 = true;
    } else {
        if (M1.procedure_p(f2847) !== false) {
            if (M1.procedure_arity_includes_p(f2847, 2) !== false) {
                if (M1.list_p(l12848) !== false) {
                    if (M1.list_p(l22849) !== false) {
                        var if_res1424 = M1.__eq_(M1.length(l12848), M1.length(l22849));
                    } else {
                        var if_res1424 = false;
                    }
                    var if_res1425 = if_res1424;
                } else {
                    var if_res1425 = false;
                }
                var if_res1426 = if_res1425;
            } else {
                var if_res1426 = false;
            }
            var if_res1427 = if_res1426;
        } else {
            var if_res1427 = false;
        }
        var if_res1428 = if_res1427;
    }
    if (if_res1428 !== false) {
        var loop2850 = function(l12851, l22852) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l12851) !== false) {
                var if_res1429 = M1.rnull;
            } else {
                var r12853 = M1.cdr(l12851);
                var r22854 = M1.cdr(l22852);
                var if_res1429 = M1.cons(f2847(M1.car(l12851), M1.car(l22852)), loop2850(r12853, r22854));
            }
            return if_res1429;
        };
        var if_res1430 = loop2850(l12848, l22849);
    } else {
        var if_res1430 = gen_map(f2847, M1.list(l12848, l22849));
    }
    return if_res1430;
};
var cl1416 = $rjs_core.attachProcedureArity(function(f2855, l2856, ...args28571431) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2857 = $rjs_core.Pair.listFromArray(args28571431);
    return gen_map(f2855, M1.cons(l2856, args2857));
});
var map2841 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1417 = {
        '2': cl1414,
        '3': cl1415
    } [arguments.length];
    if (fixed_lam1417 !== undefined) {
        return fixed_lam1417.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1416.length, 1) !== false) {
            var if_res1418 = cl1416.apply(null, arguments);
        } else {
            var if_res1418 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1418;
    }
}, [M1.make_arity_at_least(2)]);
var map2 = map2841;
var cl1432 = function(f2859, l2860) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1439 = true;
    } else {
        if (M1.procedure_p(f2859) !== false) {
            if (M1.procedure_arity_includes_p(f2859, 1) !== false) {
                var if_res1437 = M1.list_p(l2860);
            } else {
                var if_res1437 = false;
            }
            var if_res1438 = if_res1437;
        } else {
            var if_res1438 = false;
        }
        var if_res1439 = if_res1438;
    }
    if (if_res1439 !== false) {
        var loop2861 = function(l2862) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l2862) !== false) {
                var if_res1440 = M1.rvoid();
            } else {
                var r2863 = M1.cdr(l2862);
                f2859(M1.car(l2862));
                var if_res1440 = loop2861(r2863);
            }
            return if_res1440;
        };
        var if_res1441 = loop2861(l2860);
    } else {
        var if_res1441 = gen_for_each(f2859, M1.list(l2860));
    }
    return if_res1441;
};
var cl1433 = function(f2864, l12865, l22866) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1446 = true;
    } else {
        if (M1.procedure_p(f2864) !== false) {
            if (M1.procedure_arity_includes_p(f2864, 2) !== false) {
                if (M1.list_p(l12865) !== false) {
                    if (M1.list_p(l22866) !== false) {
                        var if_res1442 = M1.__eq_(M1.length(l12865), M1.length(l22866));
                    } else {
                        var if_res1442 = false;
                    }
                    var if_res1443 = if_res1442;
                } else {
                    var if_res1443 = false;
                }
                var if_res1444 = if_res1443;
            } else {
                var if_res1444 = false;
            }
            var if_res1445 = if_res1444;
        } else {
            var if_res1445 = false;
        }
        var if_res1446 = if_res1445;
    }
    if (if_res1446 !== false) {
        var loop2867 = function(l12868, l22869) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l12868) !== false) {
                var if_res1447 = M1.rvoid();
            } else {
                var r12870 = M1.cdr(l12868);
                var r22871 = M1.cdr(l22869);
                f2864(M1.car(l12868), M1.car(l22869));
                var if_res1447 = loop2867(r12870, r22871);
            }
            return if_res1447;
        };
        var if_res1448 = loop2867(l12865, l22866);
    } else {
        var if_res1448 = gen_for_each(f2864, M1.list(l12865, l22866));
    }
    return if_res1448;
};
var cl1434 = $rjs_core.attachProcedureArity(function(f2872, l2873, ...args28741449) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2874 = $rjs_core.Pair.listFromArray(args28741449);
    return gen_for_each(f2872, M1.cons(l2873, args2874));
});
var for_each2858 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1435 = {
        '2': cl1432,
        '3': cl1433
    } [arguments.length];
    if (fixed_lam1435 !== undefined) {
        return fixed_lam1435.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1434.length, 1) !== false) {
            var if_res1436 = cl1434.apply(null, arguments);
        } else {
            var if_res1436 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1436;
    }
}, [M1.make_arity_at_least(2)]);
var for_each2 = for_each2858;
var cl1450 = function(f2876, l2877) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1457 = true;
    } else {
        if (M1.procedure_p(f2876) !== false) {
            if (M1.procedure_arity_includes_p(f2876, 1) !== false) {
                var if_res1455 = M1.list_p(l2877);
            } else {
                var if_res1455 = false;
            }
            var if_res1456 = if_res1455;
        } else {
            var if_res1456 = false;
        }
        var if_res1457 = if_res1456;
    }
    if (if_res1457 !== false) {
        if (M1.null_p(l2877) !== false) {
            var if_res1460 = true;
        } else {
            var loop2878 = function(l2879) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l2879)) !== false) {
                    var if_res1459 = f2876(M1.car(l2879));
                } else {
                    var r2880 = M1.cdr(l2879);
                    if (f2876(M1.car(l2879)) !== false) {
                        var if_res1458 = loop2878(r2880);
                    } else {
                        var if_res1458 = false;
                    }
                    var if_res1459 = if_res1458;
                }
                return if_res1459;
            };
            var if_res1460 = loop2878(l2877);
        }
        var if_res1461 = if_res1460;
    } else {
        var if_res1461 = gen_andmap(f2876, M1.list(l2877));
    }
    return if_res1461;
};
var cl1451 = function(f2881, l12882, l22883) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1466 = true;
    } else {
        if (M1.procedure_p(f2881) !== false) {
            if (M1.procedure_arity_includes_p(f2881, 2) !== false) {
                if (M1.list_p(l12882) !== false) {
                    if (M1.list_p(l22883) !== false) {
                        var if_res1462 = M1.__eq_(M1.length(l12882), M1.length(l22883));
                    } else {
                        var if_res1462 = false;
                    }
                    var if_res1463 = if_res1462;
                } else {
                    var if_res1463 = false;
                }
                var if_res1464 = if_res1463;
            } else {
                var if_res1464 = false;
            }
            var if_res1465 = if_res1464;
        } else {
            var if_res1465 = false;
        }
        var if_res1466 = if_res1465;
    }
    if (if_res1466 !== false) {
        if (M1.null_p(l12882) !== false) {
            var if_res1469 = true;
        } else {
            var loop2884 = function(l12885, l22886) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l12885)) !== false) {
                    var if_res1468 = f2881(M1.car(l12885), M1.car(l22886));
                } else {
                    var r12887 = M1.cdr(l12885);
                    var r22888 = M1.cdr(l22886);
                    if (f2881(M1.car(l12885), M1.car(l22886)) !== false) {
                        var if_res1467 = loop2884(r12887, r22888);
                    } else {
                        var if_res1467 = false;
                    }
                    var if_res1468 = if_res1467;
                }
                return if_res1468;
            };
            var if_res1469 = loop2884(l12882, l22883);
        }
        var if_res1470 = if_res1469;
    } else {
        var if_res1470 = gen_andmap(f2881, M1.list(l12882, l22883));
    }
    return if_res1470;
};
var cl1452 = $rjs_core.attachProcedureArity(function(f2889, l2890, ...args28911471) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2891 = $rjs_core.Pair.listFromArray(args28911471);
    return gen_andmap(f2889, M1.cons(l2890, args2891));
});
var andmap2875 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1453 = {
        '2': cl1450,
        '3': cl1451
    } [arguments.length];
    if (fixed_lam1453 !== undefined) {
        return fixed_lam1453.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1452.length, 1) !== false) {
            var if_res1454 = cl1452.apply(null, arguments);
        } else {
            var if_res1454 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1454;
    }
}, [M1.make_arity_at_least(2)]);
var andmap2 = andmap2875;
var cl1472 = function(f2893, l2894) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1479 = true;
    } else {
        if (M1.procedure_p(f2893) !== false) {
            if (M1.procedure_arity_includes_p(f2893, 1) !== false) {
                var if_res1477 = M1.list_p(l2894);
            } else {
                var if_res1477 = false;
            }
            var if_res1478 = if_res1477;
        } else {
            var if_res1478 = false;
        }
        var if_res1479 = if_res1478;
    }
    if (if_res1479 !== false) {
        if (M1.null_p(l2894) !== false) {
            var if_res1482 = false;
        } else {
            var loop2895 = function(l2896) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l2896)) !== false) {
                    var if_res1481 = f2893(M1.car(l2896));
                } else {
                    var r2897 = M1.cdr(l2896);
                    var or_part2898 = f2893(M1.car(l2896));
                    if (or_part2898 !== false) {
                        var if_res1480 = or_part2898;
                    } else {
                        var if_res1480 = loop2895(r2897);
                    }
                    var if_res1481 = if_res1480;
                }
                return if_res1481;
            };
            var if_res1482 = loop2895(l2894);
        }
        var if_res1483 = if_res1482;
    } else {
        var if_res1483 = gen_ormap(f2893, M1.list(l2894));
    }
    return if_res1483;
};
var cl1473 = function(f2899, l12900, l22901) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1488 = true;
    } else {
        if (M1.procedure_p(f2899) !== false) {
            if (M1.procedure_arity_includes_p(f2899, 2) !== false) {
                if (M1.list_p(l12900) !== false) {
                    if (M1.list_p(l22901) !== false) {
                        var if_res1484 = M1.__eq_(M1.length(l12900), M1.length(l22901));
                    } else {
                        var if_res1484 = false;
                    }
                    var if_res1485 = if_res1484;
                } else {
                    var if_res1485 = false;
                }
                var if_res1486 = if_res1485;
            } else {
                var if_res1486 = false;
            }
            var if_res1487 = if_res1486;
        } else {
            var if_res1487 = false;
        }
        var if_res1488 = if_res1487;
    }
    if (if_res1488 !== false) {
        if (M1.null_p(l12900) !== false) {
            var if_res1491 = false;
        } else {
            var loop2902 = function(l12903, l22904) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l12903)) !== false) {
                    var if_res1490 = f2899(M1.car(l12903), M1.car(l22904));
                } else {
                    var r12905 = M1.cdr(l12903);
                    var r22906 = M1.cdr(l22904);
                    var or_part2907 = f2899(M1.car(l12903), M1.car(l22904));
                    if (or_part2907 !== false) {
                        var if_res1489 = or_part2907;
                    } else {
                        var if_res1489 = loop2902(r12905, r22906);
                    }
                    var if_res1490 = if_res1489;
                }
                return if_res1490;
            };
            var if_res1491 = loop2902(l12900, l22901);
        }
        var if_res1492 = if_res1491;
    } else {
        var if_res1492 = gen_ormap(f2899, M1.list(l12900, l22901));
    }
    return if_res1492;
};
var cl1474 = $rjs_core.attachProcedureArity(function(f2908, l2909, ...args29101493) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2910 = $rjs_core.Pair.listFromArray(args29101493);
    return gen_ormap(f2908, M1.cons(l2909, args2910));
});
var ormap2892 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1475 = {
        '2': cl1472,
        '3': cl1473
    } [arguments.length];
    if (fixed_lam1475 !== undefined) {
        return fixed_lam1475.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1474.length, 1) !== false) {
            var if_res1476 = cl1474.apply(null, arguments);
        } else {
            var if_res1476 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1476;
    }
}, [M1.make_arity_at_least(2)]);
var ormap2 = ormap2892;
var check_args = function(who2911, f2912, ls2913) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2912) !== false) {
        var if_res1494 = M1.rvoid();
    } else {
        var if_res1494 = M1.raise_argument_error(who2911, $rjs_core.UString.make("procedure?"), f2912);
    }
    if_res1494;
    var loop2914 = function(prev_len2915, ls2916, i2917) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(ls2916) !== false) {
            var if_res1498 = M1.rvoid();
        } else {
            var l2918 = M1.car(ls2916);
            if (M1.list_p(l2918) !== false) {
                var if_res1495 = M1.rvoid();
            } else {
                var if_res1495 = M1.raise_argument_error(who2911, $rjs_core.UString.make("list?"), l2918);
            }
            if_res1495;
            var len2919 = M1.length(l2918);
            if (prev_len2915 !== false) {
                var if_res1496 = M1.not(M1.__eq_(len2919, prev_len2915));
            } else {
                var if_res1496 = false;
            }
            if (if_res1496 !== false) {
                var if_res1497 = M1.raise_arguments_error(who2911, $rjs_core.UString.make("all lists must have same size"), $rjs_core.UString.make("first list length"), prev_len2915, $rjs_core.UString.make("other list length"), len2919, $rjs_core.UString.make("procedure"), f2912);
            } else {
                var if_res1497 = M1.rvoid();
            }
            if_res1497;
            var if_res1498 = loop2914(len2919, M1.cdr(ls2916), M1.add1(i2917));
        }
        return if_res1498;
    };
    loop2914(false, ls2913, 1);
    if (M1.procedure_arity_includes_p(f2912, M1.length(ls2913)) !== false) {
        var if_res1515 = M1.rvoid();
    } else {
        var let_result1499 = M0.procedure_keywords(f2912);
        var required_keywords2920 = let_result1499.getAt(0);
        var optional_keywords2921 = let_result1499.getAt(1);
        if (M1.pair_p(required_keywords2920) !== false) {
            var if_res1514 = M1.string_append($rjs_core.UString.make("argument mismatch;\n"), $rjs_core.UString.make(" the given procedure expects keyword arguments"));
        } else {
            var if_res1514 = M1.string_append($rjs_core.UString.make("argument mismatch;\n"), $rjs_core.UString.make(" the given procedure's expected number of arguments does not match"), $rjs_core.UString.make(" the given number of lists"));
        }
        var temp1513 = $rjs_core.UString.make("given procedure");
        var n2923 = M1.object_name(f2912);
        if (M1.symbol_p(n2923) !== false) {
            var if_res1510 = M1.symbol__gt_string(n2923);
        } else {
            var if_res1510 = false;
        }
        var or_part2922 = if_res1510;
        if (or_part2922 !== false) {
            var if_res1511 = or_part2922;
        } else {
            var if_res1511 = $rjs_core.UString.make("#<procedure>");
        }
        var temp1512 = M1.unquoted_printing_string(if_res1511);
        var a2924 = M1.procedure_arity(f2912);
        if (M1.pair_p(required_keywords2920) !== false) {
            var if_res1509 = M1.rnull;
        } else {
            if (M1.integer_p(a2924) !== false) {
                var if_res1508 = M1.list($rjs_core.UString.make("expected"), a2924);
            } else {
                if (M1.arity_at_least_p(a2924) !== false) {
                    var if_res1507 = M1.list($rjs_core.UString.make("expected"), M1.unquoted_printing_string(M1.string_append($rjs_core.UString.make("at least "), M1.number__gt_string(M1.arity_at_least_value(a2924)))));
                } else {
                    var if_res1507 = M1.rnull;
                }
                var if_res1508 = if_res1507;
            }
            var if_res1509 = if_res1508;
        }
        if (M1.pair_p(required_keywords2920) !== false) {
            var if_res1506 = M1.rnull;
        } else {
            var if_res1506 = M1.list($rjs_core.UString.make("given"), M1.length(ls2913));
        }
        if (M1.pair_p(required_keywords2920) !== false) {
            var temp1504 = $rjs_core.UString.make("required keywords");
            var loop2925 = function(kws2926) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(kws2926) !== false) {
                    var if_res1503 = M1.rnull;
                } else {
                    var if_res1503 = M1.list_times_($rjs_core.UString.make(" "), M1.string_append($rjs_core.UString.make("#:"), M1.__rjs_quoted__.keyword__gt_string(M1.car(kws2926))), loop2925(M1.cdr(kws2926)));
                }
                return if_res1503;
            };
            var if_res1505 = M1.list(temp1504, M1.unquoted_printing_string(M1.apply(M1.string_append, M1.cdr(loop2925(required_keywords2920)))));
        } else {
            var if_res1505 = M1.rnull;
        }
        var w2927 = M1.quotient(M1.error_print_width(), M1.length(ls2913));
        if (M1.__gt_(w2927, 10) !== false) {
            var temp1501 = $rjs_core.UString.make("argument lists...");
            var loop2928 = function(ls2929) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(ls2929) !== false) {
                    var if_res1500 = M1.rnull;
                } else {
                    var if_res1500 = M1.cons(M1.string_append($rjs_core.UString.make("\n   "), M1.error_value__gt_string_handler()(M1.car(ls2929), w2927)), loop2928(M1.cdr(ls2929)));
                }
                return if_res1500;
            };
            var if_res1502 = M1.list(temp1501, M1.unquoted_printing_string(M1.apply(M1.string_append, loop2928(ls2913))));
        } else {
            var if_res1502 = M1.rnull;
        }
        var if_res1515 = M1.apply(M1.raise_arguments_error, who2911, if_res1514, temp1513, temp1512, M1.append(if_res1509, if_res1506, if_res1505, if_res1502));
    }
    return if_res1515;
};
var gen_map = function(f2930, ls2931) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1516 = true;
    } else {
        var if_res1516 = check_args($rjs_core.PrimitiveSymbol.make("map"), f2930, ls2931);
    }
    if_res1516;
    var loop2932 = function(ls2933) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2933)) !== false) {
            var if_res1517 = M1.rnull;
        } else {
            var next_ls2934 = map2(M1.cdr, ls2933);
            var if_res1517 = M1.cons(M1.apply(f2930, map2(M1.car, ls2933)), loop2932(next_ls2934));
        }
        return if_res1517;
    };
    return loop2932(ls2931);
};
var gen_for_each = function(f2935, ls2936) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1518 = true;
    } else {
        var if_res1518 = check_args($rjs_core.PrimitiveSymbol.make("for-each"), f2935, ls2936);
    }
    if_res1518;
    var loop2937 = function(ls2938) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2938)) !== false) {
            var if_res1519 = M1.rvoid();
        } else {
            var next_ls2939 = map2(M1.cdr, ls2938);
            M1.apply(f2935, map2(M1.car, ls2938));
            var if_res1519 = loop2937(next_ls2939);
        }
        return if_res1519;
    };
    return loop2937(ls2936);
};
var gen_andmap = function(f2940, ls2941) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1520 = true;
    } else {
        var if_res1520 = check_args($rjs_core.PrimitiveSymbol.make("andmap"), f2940, ls2941);
    }
    if_res1520;
    var loop2942 = function(ls2943) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2943)) !== false) {
            var if_res1523 = true;
        } else {
            if (M1.null_p(M1.cdar(ls2943)) !== false) {
                var if_res1522 = M1.apply(f2940, map2(M1.car, ls2943));
            } else {
                var next_ls2944 = map2(M1.cdr, ls2943);
                if (M1.apply(f2940, map2(M1.car, ls2943)) !== false) {
                    var if_res1521 = loop2942(next_ls2944);
                } else {
                    var if_res1521 = false;
                }
                var if_res1522 = if_res1521;
            }
            var if_res1523 = if_res1522;
        }
        return if_res1523;
    };
    return loop2942(ls2941);
};
var gen_ormap = function(f2945, ls2946) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1524 = true;
    } else {
        var if_res1524 = check_args($rjs_core.PrimitiveSymbol.make("ormap"), f2945, ls2946);
    }
    if_res1524;
    var loop2947 = function(ls2948) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2948)) !== false) {
            var if_res1527 = false;
        } else {
            if (M1.null_p(M1.cdar(ls2948)) !== false) {
                var if_res1526 = M1.apply(f2945, map2(M1.car, ls2948));
            } else {
                var next_ls2949 = map2(M1.cdr, ls2948);
                var or_part2950 = M1.apply(f2945, map2(M1.car, ls2948));
                if (or_part2950 !== false) {
                    var if_res1525 = or_part2950;
                } else {
                    var if_res1525 = loop2947(next_ls2949);
                }
                var if_res1526 = if_res1525;
            }
            var if_res1527 = if_res1526;
        }
        return if_res1527;
    };
    return loop2947(ls2946);
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