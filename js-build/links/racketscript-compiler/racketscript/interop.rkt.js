import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./private/interop.rkt.js";
import * as M1 from "../../../collects/racket/private/reverse.rkt.js";
import * as M2 from "../../../runtime/kernel.rkt.js";
var __eq__gt_$ = function(lam_expr2045) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.Marks.wrapWithContext(lam_expr2045);
};
var js_string = function(e2046) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return e2046.toString();
};
var js_string__gt_string = function(e2047) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.UString.makeImmutable(e2047);
};
var js_array__gt_list = function(e2048) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.Pair.listFromArray(e2048);
};
var assoc__gt_object = function(pairs2049) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var result2050 = {};
    var loop2051 = function(pairs2052) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M2.null_p(pairs2052) !== false) {
            var if_res976 = result2050;
        } else {
            var p2053 = M2.car(pairs2052);
            var k2055 = M2.car(p2053);
            var or_part2056 = typeof(k2055) === "string";
            if (or_part2056 !== false) {
                var if_res973 = or_part2056;
            } else {
                var if_res973 = M2.string_p(k2055);
            }
            if (if_res973 !== false) {
                var if_res975 = k2055;
            } else {
                if (M2.symbol_p(k2055) !== false) {
                    var if_res974 = M2.symbol__gt_string(k2055);
                } else {
                    var if_res974 = M2.error($rjs_core.PrimitiveSymbol.make("assoc->object"), $rjs_core.UString.make("invalid key value"));
                }
                var if_res975 = if_res974;
            }
            var key2054 = if_res975;
            result2050[key2054] = M2.car(M2.cdr(p2053));
            var if_res976 = loop2051(M2.cdr(pairs2052));
        }
        return if_res976;
    };
    return loop2051(pairs2049);
};
var js_array_p = function(v2057) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Array.isArray(v2057);
};
var in_js_array = function(arr2058) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_array(arr2058);
    var arr2059 = arr2058;
    if (js_array_p(arr2059) !== false) {
        var if_res977 = M2.rvoid();
    } else {
        var if_res977 = in_js_array(arr2059);
    }
    if_res977;
    var for_loop2060 = function(fold_var2061, i2062) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M2.__lt_(i2062, arr2059.length) !== false) {
            var v2063 = arr2059[i2062];
            if (true !== false) {
                var fold_var2065 = fold_var2061;
                var fold_var2066 = M2.cons(v2063, fold_var2065);
                var fold_var2064 = M2.values(fold_var2066);
                if (true !== false) {
                    var if_res978 = M2.not(false);
                } else {
                    var if_res978 = false;
                }
                if (if_res978 !== false) {
                    var if_res979 = for_loop2060(fold_var2064, i2062 + 1);
                } else {
                    var if_res979 = fold_var2064;
                }
                var if_res980 = if_res979;
            } else {
                var if_res980 = fold_var2061;
            }
            var if_res981 = if_res980;
        } else {
            var if_res981 = fold_var2061;
        }
        return if_res981;
    };
    return M1.alt_reverse(for_loop2060(M2.rnull, 0));
};
var check_array = function(v2067) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (js_array_p(v2067) !== false) {
        var if_res982 = M2.rvoid();
    } else {
        var if_res982 = M2.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-js-array"), $rjs_core.UString.make("js-array?"), v2067);
    }
    return if_res982;
};
var in_js_obect = function(obj2068) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_object(obj2068);
    var obj2069 = obj2068;
    var keys2070 = Object.keys(obj2068);
    if (js_object_p(obj2069) !== false) {
        var if_res983 = M2.rvoid();
    } else {
        var if_res983 = in_js_array(obj2069);
    }
    if_res983;
    var for_loop2071 = function(fold_var2072, i2073) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M2.__lt_(i2073, keys2070.length) !== false) {
            var k2074 = keys2070[i2073];
            var v2075 = obj2069[keys2070[i2073]];
            if (true !== false) {
                var fold_var2077 = fold_var2072;
                var fold_var2078 = M2.cons(M2.values(k2074, v2075), fold_var2077);
                var fold_var2076 = M2.values(fold_var2078);
                if (true !== false) {
                    var if_res984 = M2.not(false);
                } else {
                    var if_res984 = false;
                }
                if (if_res984 !== false) {
                    var if_res985 = for_loop2071(fold_var2076, i2073 + 1);
                } else {
                    var if_res985 = fold_var2076;
                }
                var if_res986 = if_res985;
            } else {
                var if_res986 = fold_var2072;
            }
            var if_res987 = if_res986;
        } else {
            var if_res987 = fold_var2072;
        }
        return if_res987;
    };
    return M1.alt_reverse(for_loop2071(M2.rnull, 0));
};
var js_object_p = function(v2079) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return ((typeof(v2079) === "object") && (v2079 !== null)) && M2.not($rjs_core.Primitive.check(v2079));
};
var check_object = function(v2080) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (js_object_p(v2080) !== false) {
        var if_res988 = M2.rvoid();
    } else {
        var if_res988 = M2.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-js-object"), $rjs_core.UString.make("js-object?"), v2080);
    }
    return if_res988;
};
var __rjs_quoted__ = {};
__rjs_quoted__.js_object_p = js_object_p;
__rjs_quoted__.js_array_p = js_array_p;
__rjs_quoted__.in_js_array = in_js_array;
__rjs_quoted__.js_string = js_string;
export {
    __rjs_quoted__,
    js_object_p,
    js_array_p,
    assoc__gt_object,
    js_array__gt_list,
    js_string__gt_string,
    js_string,
    __eq__gt_$
};