import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./kw.rkt.js";
import * as M1 from "../../../runtime/kernel.rkt.js";
var new_apply_proc = M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws3235, kw_args3236, proc3237, args3238, ...rest32391925) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var rest3239 = $rjs_core.Pair.listFromArray(rest32391925);
    return M0.keyword_apply(proc3237, kws3235, kw_args3236, M1.apply(M1.list_times_, args3238, rest3239));
}), M1.apply);
var new_keyword_apply = M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws3240, kw_args3241, proc3242, orig_kws3243, orig_kw_args3244, args3245, ...rest32461926) {
    if (arguments.length < 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var rest3246 = $rjs_core.Pair.listFromArray(rest32461926);
    var loop3249 = function(kws3250, kw_args3251, kws23252, kw_args23253, swapped_p3254) {
        if (arguments.length !== 5) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(kws3250) !== false) {
            var if_res1931 = M1.values(kws23252, kw_args23253);
        } else {
            if (M1.null_p(kws23252) !== false) {
                var if_res1930 = M1.values(kws3250, kw_args3251);
            } else {
                if (M1.keyword_lt__p(M1.car(kws3250), M1.car(kws23252)) !== false) {
                    var let_result1927 = loop3249(M1.cdr(kws3250), M1.cdr(kw_args3251), kws23252, kw_args23253, false);
                    var res_kws3255 = let_result1927.getAt(0);
                    var res_kw_args3256 = let_result1927.getAt(1);
                    var if_res1929 = M1.values(M1.cons(M1.car(kws3250), res_kws3255), M1.cons(M1.car(kw_args3251), res_kw_args3256));
                } else {
                    if (swapped_p3254 !== false) {
                        var if_res1928 = M1.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("keyword-apply"), $rjs_core.UString.make("keyword duplicated in list and direct keyword arguments: "), M1.car(kws3250));
                    } else {
                        var if_res1928 = loop3249(kws23252, kw_args23253, kws3250, kw_args3251, true);
                    }
                    var if_res1929 = if_res1928;
                }
                var if_res1930 = if_res1929;
            }
            var if_res1931 = if_res1930;
        }
        return if_res1931;
    };
    var let_result1932 = loop3249(kws3240, kw_args3241, orig_kws3243, orig_kw_args3244, false);
    var kws3247 = let_result1932.getAt(0);
    var kw_args3248 = let_result1932.getAt(1);
    return M0.keyword_apply(proc3242, kws3247, kw_args3248, M1.apply(M1.list_times_, args3245, rest3246));
}), M0.keyword_apply);
var double_flonum_p = function(x3257) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.__rjs_quoted__.flonum_p(x3257);
};
var cl1933 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.random();
};
var cl1934 = function(x3259) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.random(x3259);
};
var cl1935 = function(x3260, y3261) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_integer_p(y3261) !== false) {
        if (M1.exact_integer_p(x3260) !== false) {
            var if_res1938 = M1.rvoid();
        } else {
            var if_res1938 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, x3260, y3261);
        }
        if_res1938;
        if (M1.__lt_(x3260, y3261) !== false) {
            var if_res1939 = M1.rvoid();
        } else {
            var if_res1939 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), M1.string_append($rjs_core.UString.make("(>/c "), M1.number__gt_string(x3260), $rjs_core.UString.make(")")), 1, x3260, y3261);
        }
        if_res1939;
        var d3262 = y3261 - x3260;
        if (M1.__lt__eq_(d3262, 4294967087) !== false) {
            var if_res1940 = M1.rvoid();
        } else {
            var if_res1940 = M1.raise_arguments_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("difference between arguments is greater than 4294967087"), $rjs_core.UString.make("min"), x3260, $rjs_core.UString.make("max"), y3261);
        }
        if_res1940;
        var if_res1945 = x3260 + M1.random(d3262);
    } else {
        if (M1.__rjs_quoted__.pseudo_random_generator_p(y3261) !== false) {
            if (M1.exact_integer_p(x3260) !== false) {
                var if_res1941 = M1.__lt__eq_(1, x3260, 4294967087);
            } else {
                var if_res1941 = false;
            }
            if (if_res1941 !== false) {
                var if_res1942 = M1.rvoid();
            } else {
                var if_res1942 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("(integer-in 1 4294967087)"), 0, x3260, y3261);
            }
            if_res1942;
            var if_res1944 = M1.random(x3260, y3261);
        } else {
            if (M1.exact_integer_p(x3260) !== false) {
                var if_res1943 = M1.rvoid();
            } else {
                var if_res1943 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, x3260, y3261);
            }
            if_res1943;
            var if_res1944 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("(or/c exact-integer? pseudo-random-generator?)"), 1, x3260, y3261);
        }
        var if_res1945 = if_res1944;
    }
    return if_res1945;
};
var cl1936 = function(min3263, max3264, prng3265) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_integer_p(min3263) !== false) {
        var if_res1946 = M1.rvoid();
    } else {
        var if_res1946 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, min3263, max3264, prng3265);
    }
    if_res1946;
    if (M1.exact_integer_p(max3264) !== false) {
        var if_res1947 = M1.rvoid();
    } else {
        var if_res1947 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 1, min3263, max3264, prng3265);
    }
    if_res1947;
    if (M1.__lt_(min3263, max3264) !== false) {
        var if_res1948 = M1.rvoid();
    } else {
        var if_res1948 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), M1.string_append($rjs_core.UString.make("(>/c "), M1.number__gt_string(min3263), $rjs_core.UString.make(")")), 1, min3263, max3264, prng3265);
    }
    if_res1948;
    var d3266 = max3264 - min3263;
    if (M1.__lt__eq_(d3266, 4294967087) !== false) {
        var if_res1949 = M1.rvoid();
    } else {
        var if_res1949 = M1.raise_arguments_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("difference between first and second arguments is greater than 4294967087"), $rjs_core.UString.make("min"), min3263, $rjs_core.UString.make("max"), max3264, $rjs_core.UString.make("rand-gen"), prng3265);
    }
    if_res1949;
    if (M1.__rjs_quoted__.pseudo_random_generator_p(prng3265) !== false) {
        var if_res1950 = M1.rvoid();
    } else {
        var if_res1950 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("pseudo-random-generator?"), 2, min3263, max3264, prng3265);
    }
    if_res1950;
    return min3263 + M1.random(d3266, prng3265);
};
var random3258 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1937 = {
        '0': cl1933,
        '1': cl1934,
        '2': cl1935,
        '3': cl1936
    } [arguments.length];
    if (fixed_lam1937 !== undefined) {
        return fixed_lam1937.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1, 2, 3]);
var __random = random3258;
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    __random as random,
    double_flonum_p,
    new_keyword_apply as keyword_apply,
    new_apply_proc
};