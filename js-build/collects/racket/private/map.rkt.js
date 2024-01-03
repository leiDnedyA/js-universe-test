import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./kw.rkt.js";
import * as M1 from "../../../runtime/kernel.rkt.js";
var cl1333 = function(f2490, l2491) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1340 = true;
    } else {
        if (M1.procedure_p(f2490) !== false) {
            if (M1.procedure_arity_includes_p(f2490, 1) !== false) {
                var if_res1338 = M1.list_p(l2491);
            } else {
                var if_res1338 = false;
            }
            var if_res1339 = if_res1338;
        } else {
            var if_res1339 = false;
        }
        var if_res1340 = if_res1339;
    }
    if (if_res1340 !== false) {
        var loop2492 = function(l2493) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l2493) !== false) {
                var if_res1341 = M1.rnull;
            } else {
                var r2494 = M1.cdr(l2493);
                var if_res1341 = M1.cons(f2490(M1.car(l2493)), loop2492(r2494));
            }
            return if_res1341;
        };
        var if_res1342 = loop2492(l2491);
    } else {
        var if_res1342 = gen_map(f2490, M1.list(l2491));
    }
    return if_res1342;
};
var cl1334 = function(f2495, l12496, l22497) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1347 = true;
    } else {
        if (M1.procedure_p(f2495) !== false) {
            if (M1.procedure_arity_includes_p(f2495, 2) !== false) {
                if (M1.list_p(l12496) !== false) {
                    if (M1.list_p(l22497) !== false) {
                        var if_res1343 = M1.__eq_(M1.length(l12496), M1.length(l22497));
                    } else {
                        var if_res1343 = false;
                    }
                    var if_res1344 = if_res1343;
                } else {
                    var if_res1344 = false;
                }
                var if_res1345 = if_res1344;
            } else {
                var if_res1345 = false;
            }
            var if_res1346 = if_res1345;
        } else {
            var if_res1346 = false;
        }
        var if_res1347 = if_res1346;
    }
    if (if_res1347 !== false) {
        var loop2498 = function(l12499, l22500) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l12499) !== false) {
                var if_res1348 = M1.rnull;
            } else {
                var r12501 = M1.cdr(l12499);
                var r22502 = M1.cdr(l22500);
                var if_res1348 = M1.cons(f2495(M1.car(l12499), M1.car(l22500)), loop2498(r12501, r22502));
            }
            return if_res1348;
        };
        var if_res1349 = loop2498(l12496, l22497);
    } else {
        var if_res1349 = gen_map(f2495, M1.list(l12496, l22497));
    }
    return if_res1349;
};
var cl1335 = $rjs_core.attachProcedureArity(function(f2503, l2504, ...args25051350) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2505 = $rjs_core.Pair.listFromArray(args25051350);
    return gen_map(f2503, M1.cons(l2504, args2505));
});
var map2489 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1336 = {
        '2': cl1333,
        '3': cl1334
    } [arguments.length];
    if (fixed_lam1336 !== undefined) {
        return fixed_lam1336.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1335.length, 1) !== false) {
            var if_res1337 = cl1335.apply(null, arguments);
        } else {
            var if_res1337 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1337;
    }
}, [M1.make_arity_at_least(2)]);
var map2 = map2489;
var cl1351 = function(f2507, l2508) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1358 = true;
    } else {
        if (M1.procedure_p(f2507) !== false) {
            if (M1.procedure_arity_includes_p(f2507, 1) !== false) {
                var if_res1356 = M1.list_p(l2508);
            } else {
                var if_res1356 = false;
            }
            var if_res1357 = if_res1356;
        } else {
            var if_res1357 = false;
        }
        var if_res1358 = if_res1357;
    }
    if (if_res1358 !== false) {
        var loop2509 = function(l2510) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l2510) !== false) {
                var if_res1359 = M1.rvoid();
            } else {
                var r2511 = M1.cdr(l2510);
                f2507(M1.car(l2510));
                var if_res1359 = loop2509(r2511);
            }
            return if_res1359;
        };
        var if_res1360 = loop2509(l2508);
    } else {
        var if_res1360 = gen_for_each(f2507, M1.list(l2508));
    }
    return if_res1360;
};
var cl1352 = function(f2512, l12513, l22514) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1365 = true;
    } else {
        if (M1.procedure_p(f2512) !== false) {
            if (M1.procedure_arity_includes_p(f2512, 2) !== false) {
                if (M1.list_p(l12513) !== false) {
                    if (M1.list_p(l22514) !== false) {
                        var if_res1361 = M1.__eq_(M1.length(l12513), M1.length(l22514));
                    } else {
                        var if_res1361 = false;
                    }
                    var if_res1362 = if_res1361;
                } else {
                    var if_res1362 = false;
                }
                var if_res1363 = if_res1362;
            } else {
                var if_res1363 = false;
            }
            var if_res1364 = if_res1363;
        } else {
            var if_res1364 = false;
        }
        var if_res1365 = if_res1364;
    }
    if (if_res1365 !== false) {
        var loop2515 = function(l12516, l22517) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l12516) !== false) {
                var if_res1366 = M1.rvoid();
            } else {
                var r12518 = M1.cdr(l12516);
                var r22519 = M1.cdr(l22517);
                f2512(M1.car(l12516), M1.car(l22517));
                var if_res1366 = loop2515(r12518, r22519);
            }
            return if_res1366;
        };
        var if_res1367 = loop2515(l12513, l22514);
    } else {
        var if_res1367 = gen_for_each(f2512, M1.list(l12513, l22514));
    }
    return if_res1367;
};
var cl1353 = $rjs_core.attachProcedureArity(function(f2520, l2521, ...args25221368) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2522 = $rjs_core.Pair.listFromArray(args25221368);
    return gen_for_each(f2520, M1.cons(l2521, args2522));
});
var for_each2506 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1354 = {
        '2': cl1351,
        '3': cl1352
    } [arguments.length];
    if (fixed_lam1354 !== undefined) {
        return fixed_lam1354.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1353.length, 1) !== false) {
            var if_res1355 = cl1353.apply(null, arguments);
        } else {
            var if_res1355 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1355;
    }
}, [M1.make_arity_at_least(2)]);
var for_each2 = for_each2506;
var cl1369 = function(f2524, l2525) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1376 = true;
    } else {
        if (M1.procedure_p(f2524) !== false) {
            if (M1.procedure_arity_includes_p(f2524, 1) !== false) {
                var if_res1374 = M1.list_p(l2525);
            } else {
                var if_res1374 = false;
            }
            var if_res1375 = if_res1374;
        } else {
            var if_res1375 = false;
        }
        var if_res1376 = if_res1375;
    }
    if (if_res1376 !== false) {
        if (M1.null_p(l2525) !== false) {
            var if_res1379 = true;
        } else {
            var loop2526 = function(l2527) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l2527)) !== false) {
                    var if_res1378 = f2524(M1.car(l2527));
                } else {
                    var r2528 = M1.cdr(l2527);
                    if (f2524(M1.car(l2527)) !== false) {
                        var if_res1377 = loop2526(r2528);
                    } else {
                        var if_res1377 = false;
                    }
                    var if_res1378 = if_res1377;
                }
                return if_res1378;
            };
            var if_res1379 = loop2526(l2525);
        }
        var if_res1380 = if_res1379;
    } else {
        var if_res1380 = gen_andmap(f2524, M1.list(l2525));
    }
    return if_res1380;
};
var cl1370 = function(f2529, l12530, l22531) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1385 = true;
    } else {
        if (M1.procedure_p(f2529) !== false) {
            if (M1.procedure_arity_includes_p(f2529, 2) !== false) {
                if (M1.list_p(l12530) !== false) {
                    if (M1.list_p(l22531) !== false) {
                        var if_res1381 = M1.__eq_(M1.length(l12530), M1.length(l22531));
                    } else {
                        var if_res1381 = false;
                    }
                    var if_res1382 = if_res1381;
                } else {
                    var if_res1382 = false;
                }
                var if_res1383 = if_res1382;
            } else {
                var if_res1383 = false;
            }
            var if_res1384 = if_res1383;
        } else {
            var if_res1384 = false;
        }
        var if_res1385 = if_res1384;
    }
    if (if_res1385 !== false) {
        if (M1.null_p(l12530) !== false) {
            var if_res1388 = true;
        } else {
            var loop2532 = function(l12533, l22534) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l12533)) !== false) {
                    var if_res1387 = f2529(M1.car(l12533), M1.car(l22534));
                } else {
                    var r12535 = M1.cdr(l12533);
                    var r22536 = M1.cdr(l22534);
                    if (f2529(M1.car(l12533), M1.car(l22534)) !== false) {
                        var if_res1386 = loop2532(r12535, r22536);
                    } else {
                        var if_res1386 = false;
                    }
                    var if_res1387 = if_res1386;
                }
                return if_res1387;
            };
            var if_res1388 = loop2532(l12530, l22531);
        }
        var if_res1389 = if_res1388;
    } else {
        var if_res1389 = gen_andmap(f2529, M1.list(l12530, l22531));
    }
    return if_res1389;
};
var cl1371 = $rjs_core.attachProcedureArity(function(f2537, l2538, ...args25391390) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2539 = $rjs_core.Pair.listFromArray(args25391390);
    return gen_andmap(f2537, M1.cons(l2538, args2539));
});
var andmap2523 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1372 = {
        '2': cl1369,
        '3': cl1370
    } [arguments.length];
    if (fixed_lam1372 !== undefined) {
        return fixed_lam1372.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1371.length, 1) !== false) {
            var if_res1373 = cl1371.apply(null, arguments);
        } else {
            var if_res1373 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1373;
    }
}, [M1.make_arity_at_least(2)]);
var andmap2 = andmap2523;
var cl1391 = function(f2541, l2542) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1398 = true;
    } else {
        if (M1.procedure_p(f2541) !== false) {
            if (M1.procedure_arity_includes_p(f2541, 1) !== false) {
                var if_res1396 = M1.list_p(l2542);
            } else {
                var if_res1396 = false;
            }
            var if_res1397 = if_res1396;
        } else {
            var if_res1397 = false;
        }
        var if_res1398 = if_res1397;
    }
    if (if_res1398 !== false) {
        if (M1.null_p(l2542) !== false) {
            var if_res1401 = false;
        } else {
            var loop2543 = function(l2544) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l2544)) !== false) {
                    var if_res1400 = f2541(M1.car(l2544));
                } else {
                    var r2545 = M1.cdr(l2544);
                    var or_part2546 = f2541(M1.car(l2544));
                    if (or_part2546 !== false) {
                        var if_res1399 = or_part2546;
                    } else {
                        var if_res1399 = loop2543(r2545);
                    }
                    var if_res1400 = if_res1399;
                }
                return if_res1400;
            };
            var if_res1401 = loop2543(l2542);
        }
        var if_res1402 = if_res1401;
    } else {
        var if_res1402 = gen_ormap(f2541, M1.list(l2542));
    }
    return if_res1402;
};
var cl1392 = function(f2547, l12548, l22549) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1407 = true;
    } else {
        if (M1.procedure_p(f2547) !== false) {
            if (M1.procedure_arity_includes_p(f2547, 2) !== false) {
                if (M1.list_p(l12548) !== false) {
                    if (M1.list_p(l22549) !== false) {
                        var if_res1403 = M1.__eq_(M1.length(l12548), M1.length(l22549));
                    } else {
                        var if_res1403 = false;
                    }
                    var if_res1404 = if_res1403;
                } else {
                    var if_res1404 = false;
                }
                var if_res1405 = if_res1404;
            } else {
                var if_res1405 = false;
            }
            var if_res1406 = if_res1405;
        } else {
            var if_res1406 = false;
        }
        var if_res1407 = if_res1406;
    }
    if (if_res1407 !== false) {
        if (M1.null_p(l12548) !== false) {
            var if_res1410 = false;
        } else {
            var loop2550 = function(l12551, l22552) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l12551)) !== false) {
                    var if_res1409 = f2547(M1.car(l12551), M1.car(l22552));
                } else {
                    var r12553 = M1.cdr(l12551);
                    var r22554 = M1.cdr(l22552);
                    var or_part2555 = f2547(M1.car(l12551), M1.car(l22552));
                    if (or_part2555 !== false) {
                        var if_res1408 = or_part2555;
                    } else {
                        var if_res1408 = loop2550(r12553, r22554);
                    }
                    var if_res1409 = if_res1408;
                }
                return if_res1409;
            };
            var if_res1410 = loop2550(l12548, l22549);
        }
        var if_res1411 = if_res1410;
    } else {
        var if_res1411 = gen_ormap(f2547, M1.list(l12548, l22549));
    }
    return if_res1411;
};
var cl1393 = $rjs_core.attachProcedureArity(function(f2556, l2557, ...args25581412) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2558 = $rjs_core.Pair.listFromArray(args25581412);
    return gen_ormap(f2556, M1.cons(l2557, args2558));
});
var ormap2540 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1394 = {
        '2': cl1391,
        '3': cl1392
    } [arguments.length];
    if (fixed_lam1394 !== undefined) {
        return fixed_lam1394.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1393.length, 1) !== false) {
            var if_res1395 = cl1393.apply(null, arguments);
        } else {
            var if_res1395 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1395;
    }
}, [M1.make_arity_at_least(2)]);
var ormap2 = ormap2540;
var check_args = function(who2559, f2560, ls2561) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2560) !== false) {
        var if_res1413 = M1.rvoid();
    } else {
        var if_res1413 = M1.raise_argument_error(who2559, $rjs_core.UString.make("procedure?"), f2560);
    }
    if_res1413;
    var loop2562 = function(prev_len2563, ls2564, i2565) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(ls2564) !== false) {
            var if_res1417 = M1.rvoid();
        } else {
            var l2566 = M1.car(ls2564);
            if (M1.list_p(l2566) !== false) {
                var if_res1414 = M1.rvoid();
            } else {
                var if_res1414 = M1.raise_argument_error(who2559, $rjs_core.UString.make("list?"), l2566);
            }
            if_res1414;
            var len2567 = M1.length(l2566);
            if (prev_len2563 !== false) {
                var if_res1415 = M1.not(M1.__eq_(len2567, prev_len2563));
            } else {
                var if_res1415 = false;
            }
            if (if_res1415 !== false) {
                var if_res1416 = M1.raise_arguments_error(who2559, $rjs_core.UString.make("all lists must have same size"), $rjs_core.UString.make("first list length"), prev_len2563, $rjs_core.UString.make("other list length"), len2567, $rjs_core.UString.make("procedure"), f2560);
            } else {
                var if_res1416 = M1.rvoid();
            }
            if_res1416;
            var if_res1417 = loop2562(len2567, M1.cdr(ls2564), M1.add1(i2565));
        }
        return if_res1417;
    };
    loop2562(false, ls2561, 1);
    if (M1.procedure_arity_includes_p(f2560, M1.length(ls2561)) !== false) {
        var if_res1434 = M1.rvoid();
    } else {
        var let_result1418 = M0.procedure_keywords(f2560);
        var required_keywords2568 = let_result1418.getAt(0);
        var optional_keywords2569 = let_result1418.getAt(1);
        if (M1.pair_p(required_keywords2568) !== false) {
            var if_res1433 = M1.string_append($rjs_core.UString.make("argument mismatch;\n"), $rjs_core.UString.make(" the given procedure expects keyword arguments"));
        } else {
            var if_res1433 = M1.string_append($rjs_core.UString.make("argument mismatch;\n"), $rjs_core.UString.make(" the given procedure's expected number of arguments does not match"), $rjs_core.UString.make(" the given number of lists"));
        }
        var temp1432 = $rjs_core.UString.make("given procedure");
        var n2571 = M1.object_name(f2560);
        if (M1.symbol_p(n2571) !== false) {
            var if_res1429 = M1.symbol__gt_string(n2571);
        } else {
            var if_res1429 = false;
        }
        var or_part2570 = if_res1429;
        if (or_part2570 !== false) {
            var if_res1430 = or_part2570;
        } else {
            var if_res1430 = $rjs_core.UString.make("#<procedure>");
        }
        var temp1431 = M1.unquoted_printing_string(if_res1430);
        var a2572 = M1.procedure_arity(f2560);
        if (M1.pair_p(required_keywords2568) !== false) {
            var if_res1428 = M1.rnull;
        } else {
            if (M1.integer_p(a2572) !== false) {
                var if_res1427 = M1.list($rjs_core.UString.make("expected"), a2572);
            } else {
                if (M1.arity_at_least_p(a2572) !== false) {
                    var if_res1426 = M1.list($rjs_core.UString.make("expected"), M1.unquoted_printing_string(M1.string_append($rjs_core.UString.make("at least "), M1.number__gt_string(M1.arity_at_least_value(a2572)))));
                } else {
                    var if_res1426 = M1.rnull;
                }
                var if_res1427 = if_res1426;
            }
            var if_res1428 = if_res1427;
        }
        if (M1.pair_p(required_keywords2568) !== false) {
            var if_res1425 = M1.rnull;
        } else {
            var if_res1425 = M1.list($rjs_core.UString.make("given"), M1.length(ls2561));
        }
        if (M1.pair_p(required_keywords2568) !== false) {
            var temp1423 = $rjs_core.UString.make("required keywords");
            var loop2573 = function(kws2574) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(kws2574) !== false) {
                    var if_res1422 = M1.rnull;
                } else {
                    var if_res1422 = M1.list_times_($rjs_core.UString.make(" "), M1.string_append($rjs_core.UString.make("#:"), M1.__rjs_quoted__.keyword__gt_string(M1.car(kws2574))), loop2573(M1.cdr(kws2574)));
                }
                return if_res1422;
            };
            var if_res1424 = M1.list(temp1423, M1.unquoted_printing_string(M1.apply(M1.string_append, M1.cdr(loop2573(required_keywords2568)))));
        } else {
            var if_res1424 = M1.rnull;
        }
        var w2575 = M1.quotient(M1.error_print_width(), M1.length(ls2561));
        if (M1.__gt_(w2575, 10) !== false) {
            var temp1420 = $rjs_core.UString.make("argument lists...");
            var loop2576 = function(ls2577) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(ls2577) !== false) {
                    var if_res1419 = M1.rnull;
                } else {
                    var if_res1419 = M1.cons(M1.string_append($rjs_core.UString.make("\n   "), M1.error_value__gt_string_handler()(M1.car(ls2577), w2575)), loop2576(M1.cdr(ls2577)));
                }
                return if_res1419;
            };
            var if_res1421 = M1.list(temp1420, M1.unquoted_printing_string(M1.apply(M1.string_append, loop2576(ls2561))));
        } else {
            var if_res1421 = M1.rnull;
        }
        var if_res1434 = M1.apply(M1.raise_arguments_error, who2559, if_res1433, temp1432, temp1431, M1.append(if_res1428, if_res1425, if_res1424, if_res1421));
    }
    return if_res1434;
};
var gen_map = function(f2578, ls2579) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1435 = true;
    } else {
        var if_res1435 = check_args($rjs_core.PrimitiveSymbol.make("map"), f2578, ls2579);
    }
    if_res1435;
    var loop2580 = function(ls2581) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2581)) !== false) {
            var if_res1436 = M1.rnull;
        } else {
            var next_ls2582 = map2(M1.cdr, ls2581);
            var if_res1436 = M1.cons(M1.apply(f2578, map2(M1.car, ls2581)), loop2580(next_ls2582));
        }
        return if_res1436;
    };
    return loop2580(ls2579);
};
var gen_for_each = function(f2583, ls2584) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1437 = true;
    } else {
        var if_res1437 = check_args($rjs_core.PrimitiveSymbol.make("for-each"), f2583, ls2584);
    }
    if_res1437;
    var loop2585 = function(ls2586) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2586)) !== false) {
            var if_res1438 = M1.rvoid();
        } else {
            var next_ls2587 = map2(M1.cdr, ls2586);
            M1.apply(f2583, map2(M1.car, ls2586));
            var if_res1438 = loop2585(next_ls2587);
        }
        return if_res1438;
    };
    return loop2585(ls2584);
};
var gen_andmap = function(f2588, ls2589) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1439 = true;
    } else {
        var if_res1439 = check_args($rjs_core.PrimitiveSymbol.make("andmap"), f2588, ls2589);
    }
    if_res1439;
    var loop2590 = function(ls2591) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2591)) !== false) {
            var if_res1442 = true;
        } else {
            if (M1.null_p(M1.cdar(ls2591)) !== false) {
                var if_res1441 = M1.apply(f2588, map2(M1.car, ls2591));
            } else {
                var next_ls2592 = map2(M1.cdr, ls2591);
                if (M1.apply(f2588, map2(M1.car, ls2591)) !== false) {
                    var if_res1440 = loop2590(next_ls2592);
                } else {
                    var if_res1440 = false;
                }
                var if_res1441 = if_res1440;
            }
            var if_res1442 = if_res1441;
        }
        return if_res1442;
    };
    return loop2590(ls2589);
};
var gen_ormap = function(f2593, ls2594) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1443 = true;
    } else {
        var if_res1443 = check_args($rjs_core.PrimitiveSymbol.make("ormap"), f2593, ls2594);
    }
    if_res1443;
    var loop2595 = function(ls2596) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2596)) !== false) {
            var if_res1446 = false;
        } else {
            if (M1.null_p(M1.cdar(ls2596)) !== false) {
                var if_res1445 = M1.apply(f2593, map2(M1.car, ls2596));
            } else {
                var next_ls2597 = map2(M1.cdr, ls2596);
                var or_part2598 = M1.apply(f2593, map2(M1.car, ls2596));
                if (or_part2598 !== false) {
                    var if_res1444 = or_part2598;
                } else {
                    var if_res1444 = loop2595(next_ls2597);
                }
                var if_res1445 = if_res1444;
            }
            var if_res1446 = if_res1445;
        }
        return if_res1446;
    };
    return loop2595(ls2594);
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