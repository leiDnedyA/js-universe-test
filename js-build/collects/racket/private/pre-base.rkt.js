import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./kw.rkt.js";
import * as M1 from "../../../runtime/kernel.rkt.js";
var new_apply_proc = M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2703, kw_args2704, proc2705, args2706, ...rest27071461) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var rest2707 = $rjs_core.Pair.listFromArray(rest27071461);
    return M0.keyword_apply(proc2705, kws2703, kw_args2704, M1.apply(M1.list_times_, args2706, rest2707));
}), M1.apply);
var new_keyword_apply = M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2708, kw_args2709, proc2710, orig_kws2711, orig_kw_args2712, args2713, ...rest27141462) {
    if (arguments.length < 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var rest2714 = $rjs_core.Pair.listFromArray(rest27141462);
    var loop2717 = function(kws2718, kw_args2719, kws22720, kw_args22721, swapped_p2722) {
        if (arguments.length !== 5) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(kws2718) !== false) {
            var if_res1467 = M1.values(kws22720, kw_args22721);
        } else {
            if (M1.null_p(kws22720) !== false) {
                var if_res1466 = M1.values(kws2718, kw_args2719);
            } else {
                if (M1.keyword_lt__p(M1.car(kws2718), M1.car(kws22720)) !== false) {
                    var let_result1463 = loop2717(M1.cdr(kws2718), M1.cdr(kw_args2719), kws22720, kw_args22721, false);
                    var res_kws2723 = let_result1463.getAt(0);
                    var res_kw_args2724 = let_result1463.getAt(1);
                    var if_res1465 = M1.values(M1.cons(M1.car(kws2718), res_kws2723), M1.cons(M1.car(kw_args2719), res_kw_args2724));
                } else {
                    if (swapped_p2722 !== false) {
                        var if_res1464 = M1.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("keyword-apply"), $rjs_core.UString.make("keyword duplicated in list and direct keyword arguments: "), M1.car(kws2718));
                    } else {
                        var if_res1464 = loop2717(kws22720, kw_args22721, kws2718, kw_args2719, true);
                    }
                    var if_res1465 = if_res1464;
                }
                var if_res1466 = if_res1465;
            }
            var if_res1467 = if_res1466;
        }
        return if_res1467;
    };
    var let_result1468 = loop2717(kws2708, kw_args2709, orig_kws2711, orig_kw_args2712, false);
    var kws2715 = let_result1468.getAt(0);
    var kw_args2716 = let_result1468.getAt(1);
    return M0.keyword_apply(proc2710, kws2715, kw_args2716, M1.apply(M1.list_times_, args2713, rest2714));
}), M0.keyword_apply);
var double_flonum_p = function(x2725) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.__rjs_quoted__.flonum_p(x2725);
};
var cl1469 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.random();
};
var cl1470 = function(x2727) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.random(x2727);
};
var cl1471 = function(x2728, y2729) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_integer_p(y2729) !== false) {
        if (M1.exact_integer_p(x2728) !== false) {
            var if_res1474 = M1.rvoid();
        } else {
            var if_res1474 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, x2728, y2729);
        }
        if_res1474;
        if (M1.__lt_(x2728, y2729) !== false) {
            var if_res1475 = M1.rvoid();
        } else {
            var if_res1475 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), M1.string_append($rjs_core.UString.make("(>/c "), M1.number__gt_string(x2728), $rjs_core.UString.make(")")), 1, x2728, y2729);
        }
        if_res1475;
        var d2730 = y2729 - x2728;
        if (M1.__lt__eq_(d2730, 4294967087) !== false) {
            var if_res1476 = M1.rvoid();
        } else {
            var if_res1476 = M1.raise_arguments_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("difference between arguments is greater than 4294967087"), $rjs_core.UString.make("min"), x2728, $rjs_core.UString.make("max"), y2729);
        }
        if_res1476;
        var if_res1481 = x2728 + M1.random(d2730);
    } else {
        if (M1.__rjs_quoted__.pseudo_random_generator_p(y2729) !== false) {
            if (M1.exact_integer_p(x2728) !== false) {
                var if_res1477 = M1.__lt__eq_(1, x2728, 4294967087);
            } else {
                var if_res1477 = false;
            }
            if (if_res1477 !== false) {
                var if_res1478 = M1.rvoid();
            } else {
                var if_res1478 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("(integer-in 1 4294967087)"), 0, x2728, y2729);
            }
            if_res1478;
            var if_res1480 = M1.random(x2728, y2729);
        } else {
            if (M1.exact_integer_p(x2728) !== false) {
                var if_res1479 = M1.rvoid();
            } else {
                var if_res1479 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, x2728, y2729);
            }
            if_res1479;
            var if_res1480 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("(or/c exact-integer? pseudo-random-generator?)"), 1, x2728, y2729);
        }
        var if_res1481 = if_res1480;
    }
    return if_res1481;
};
var cl1472 = function(min2731, max2732, prng2733) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_integer_p(min2731) !== false) {
        var if_res1482 = M1.rvoid();
    } else {
        var if_res1482 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, min2731, max2732, prng2733);
    }
    if_res1482;
    if (M1.exact_integer_p(max2732) !== false) {
        var if_res1483 = M1.rvoid();
    } else {
        var if_res1483 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 1, min2731, max2732, prng2733);
    }
    if_res1483;
    if (M1.__lt_(min2731, max2732) !== false) {
        var if_res1484 = M1.rvoid();
    } else {
        var if_res1484 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), M1.string_append($rjs_core.UString.make("(>/c "), M1.number__gt_string(min2731), $rjs_core.UString.make(")")), 1, min2731, max2732, prng2733);
    }
    if_res1484;
    var d2734 = max2732 - min2731;
    if (M1.__lt__eq_(d2734, 4294967087) !== false) {
        var if_res1485 = M1.rvoid();
    } else {
        var if_res1485 = M1.raise_arguments_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("difference between first and second arguments is greater than 4294967087"), $rjs_core.UString.make("min"), min2731, $rjs_core.UString.make("max"), max2732, $rjs_core.UString.make("rand-gen"), prng2733);
    }
    if_res1485;
    if (M1.__rjs_quoted__.pseudo_random_generator_p(prng2733) !== false) {
        var if_res1486 = M1.rvoid();
    } else {
        var if_res1486 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("pseudo-random-generator?"), 2, min2731, max2732, prng2733);
    }
    if_res1486;
    return min2731 + M1.random(d2734, prng2733);
};
var random2726 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1473 = {
        '0': cl1469,
        '1': cl1470,
        '2': cl1471,
        '3': cl1472
    } [arguments.length];
    if (fixed_lam1473 !== undefined) {
        return fixed_lam1473.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1, 2, 3]);
var __random = random2726;
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    __random as random,
    double_flonum_p,
    new_keyword_apply as keyword_apply,
    new_apply_proc
};