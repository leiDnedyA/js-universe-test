import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./kw.rkt.js";
import * as M1 from "../../../runtime/kernel.rkt.js";
var new_apply_proc = M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws3603, kw_args3604, proc3605, args3606, ...rest36072011) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var rest3607 = $rjs_core.Pair.listFromArray(rest36072011);
    return M0.keyword_apply(proc3605, kws3603, kw_args3604, M1.apply(M1.list_times_, args3606, rest3607));
}), M1.apply);
var new_keyword_apply = M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws3608, kw_args3609, proc3610, orig_kws3611, orig_kw_args3612, args3613, ...rest36142012) {
    if (arguments.length < 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var rest3614 = $rjs_core.Pair.listFromArray(rest36142012);
    var loop3617 = function(kws3618, kw_args3619, kws23620, kw_args23621, swapped_p3622) {
        if (arguments.length !== 5) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(kws3618) !== false) {
            var if_res2017 = M1.values(kws23620, kw_args23621);
        } else {
            if (M1.null_p(kws23620) !== false) {
                var if_res2016 = M1.values(kws3618, kw_args3619);
            } else {
                if (M1.keyword_lt__p(M1.car(kws3618), M1.car(kws23620)) !== false) {
                    var let_result2013 = loop3617(M1.cdr(kws3618), M1.cdr(kw_args3619), kws23620, kw_args23621, false);
                    var res_kws3623 = let_result2013.getAt(0);
                    var res_kw_args3624 = let_result2013.getAt(1);
                    var if_res2015 = M1.values(M1.cons(M1.car(kws3618), res_kws3623), M1.cons(M1.car(kw_args3619), res_kw_args3624));
                } else {
                    if (swapped_p3622 !== false) {
                        var if_res2014 = M1.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("keyword-apply"), $rjs_core.UString.make("keyword duplicated in list and direct keyword arguments: "), M1.car(kws3618));
                    } else {
                        var if_res2014 = loop3617(kws23620, kw_args23621, kws3618, kw_args3619, true);
                    }
                    var if_res2015 = if_res2014;
                }
                var if_res2016 = if_res2015;
            }
            var if_res2017 = if_res2016;
        }
        return if_res2017;
    };
    var let_result2018 = loop3617(kws3608, kw_args3609, orig_kws3611, orig_kw_args3612, false);
    var kws3615 = let_result2018.getAt(0);
    var kw_args3616 = let_result2018.getAt(1);
    return M0.keyword_apply(proc3610, kws3615, kw_args3616, M1.apply(M1.list_times_, args3613, rest3614));
}), M0.keyword_apply);
var double_flonum_p = function(x3625) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.__rjs_quoted__.flonum_p(x3625);
};
var cl2019 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.random();
};
var cl2020 = function(x3627) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.random(x3627);
};
var cl2021 = function(x3628, y3629) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_integer_p(y3629) !== false) {
        if (M1.exact_integer_p(x3628) !== false) {
            var if_res2024 = M1.rvoid();
        } else {
            var if_res2024 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, x3628, y3629);
        }
        if_res2024;
        if (M1.__lt_(x3628, y3629) !== false) {
            var if_res2025 = M1.rvoid();
        } else {
            var if_res2025 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), M1.string_append($rjs_core.UString.make("(>/c "), M1.number__gt_string(x3628), $rjs_core.UString.make(")")), 1, x3628, y3629);
        }
        if_res2025;
        var d3630 = y3629 - x3628;
        if (M1.__lt__eq_(d3630, 4294967087) !== false) {
            var if_res2026 = M1.rvoid();
        } else {
            var if_res2026 = M1.raise_arguments_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("difference between arguments is greater than 4294967087"), $rjs_core.UString.make("min"), x3628, $rjs_core.UString.make("max"), y3629);
        }
        if_res2026;
        var if_res2031 = x3628 + M1.random(d3630);
    } else {
        if (M1.__rjs_quoted__.pseudo_random_generator_p(y3629) !== false) {
            if (M1.exact_integer_p(x3628) !== false) {
                var if_res2027 = M1.__lt__eq_(1, x3628, 4294967087);
            } else {
                var if_res2027 = false;
            }
            if (if_res2027 !== false) {
                var if_res2028 = M1.rvoid();
            } else {
                var if_res2028 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("(integer-in 1 4294967087)"), 0, x3628, y3629);
            }
            if_res2028;
            var if_res2030 = M1.random(x3628, y3629);
        } else {
            if (M1.exact_integer_p(x3628) !== false) {
                var if_res2029 = M1.rvoid();
            } else {
                var if_res2029 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, x3628, y3629);
            }
            if_res2029;
            var if_res2030 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("(or/c exact-integer? pseudo-random-generator?)"), 1, x3628, y3629);
        }
        var if_res2031 = if_res2030;
    }
    return if_res2031;
};
var cl2022 = function(min3631, max3632, prng3633) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_integer_p(min3631) !== false) {
        var if_res2032 = M1.rvoid();
    } else {
        var if_res2032 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, min3631, max3632, prng3633);
    }
    if_res2032;
    if (M1.exact_integer_p(max3632) !== false) {
        var if_res2033 = M1.rvoid();
    } else {
        var if_res2033 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 1, min3631, max3632, prng3633);
    }
    if_res2033;
    if (M1.__lt_(min3631, max3632) !== false) {
        var if_res2034 = M1.rvoid();
    } else {
        var if_res2034 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), M1.string_append($rjs_core.UString.make("(>/c "), M1.number__gt_string(min3631), $rjs_core.UString.make(")")), 1, min3631, max3632, prng3633);
    }
    if_res2034;
    var d3634 = max3632 - min3631;
    if (M1.__lt__eq_(d3634, 4294967087) !== false) {
        var if_res2035 = M1.rvoid();
    } else {
        var if_res2035 = M1.raise_arguments_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("difference between first and second arguments is greater than 4294967087"), $rjs_core.UString.make("min"), min3631, $rjs_core.UString.make("max"), max3632, $rjs_core.UString.make("rand-gen"), prng3633);
    }
    if_res2035;
    if (M1.__rjs_quoted__.pseudo_random_generator_p(prng3633) !== false) {
        var if_res2036 = M1.rvoid();
    } else {
        var if_res2036 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("pseudo-random-generator?"), 2, min3631, max3632, prng3633);
    }
    if_res2036;
    return min3631 + M1.random(d3634, prng3633);
};
var random3626 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2023 = {
        '0': cl2019,
        '1': cl2020,
        '2': cl2021,
        '3': cl2022
    } [arguments.length];
    if (fixed_lam2023 !== undefined) {
        return fixed_lam2023.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1, 2, 3]);
var __random = random3626;
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    __random as random,
    double_flonum_p,
    new_keyword_apply as keyword_apply,
    new_apply_proc
};