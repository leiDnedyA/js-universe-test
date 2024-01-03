import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./private/interop.rkt.js";
import * as M1 from "../../../collects/racket/private/reverse.rkt.js";
import * as M2 from "../../../runtime/kernel.rkt.js";
var __eq__gt_$ = function(lam_expr1078) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.Marks.wrapWithContext(lam_expr1078);
};
var js_string = function(e1079) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return e1079.toString();
};
var js_string__gt_string = function(e1080) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.UString.makeImmutable(e1080);
};
var js_array__gt_list = function(e1081) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.Pair.listFromArray(e1081);
};
var assoc__gt_object = function(pairs1082) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var result1083 = {};
    var loop1084 = function(pairs1085) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M2.null_p(pairs1085) !== false) {
            var if_res489 = result1083;
        } else {
            var p1086 = M2.car(pairs1085);
            var k1088 = M2.car(p1086);
            var or_part1089 = typeof(k1088) === "string";
            if (or_part1089 !== false) {
                var if_res486 = or_part1089;
            } else {
                var if_res486 = M2.string_p(k1088);
            }
            if (if_res486 !== false) {
                var if_res488 = k1088;
            } else {
                if (M2.symbol_p(k1088) !== false) {
                    var if_res487 = M2.symbol__gt_string(k1088);
                } else {
                    var if_res487 = M2.error($rjs_core.PrimitiveSymbol.make("assoc->object"), $rjs_core.UString.make("invalid key value"));
                }
                var if_res488 = if_res487;
            }
            var key1087 = if_res488;
            result1083[key1087] = M2.car(M2.cdr(p1086));
            var if_res489 = loop1084(M2.cdr(pairs1085));
        }
        return if_res489;
    };
    return loop1084(pairs1082);
};
var js_array_p = function(v1090) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Array.isArray(v1090);
};
var in_js_array = function(arr1091) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_array(arr1091);
    var arr1092 = arr1091;
    if (js_array_p(arr1092) !== false) {
        var if_res490 = M2.rvoid();
    } else {
        var if_res490 = in_js_array(arr1092);
    }
    if_res490;
    var for_loop1093 = function(fold_var1094, i1095) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M2.__lt_(i1095, arr1092.length) !== false) {
            var v1096 = arr1092[i1095];
            if (true !== false) {
                var fold_var1098 = fold_var1094;
                var fold_var1099 = M2.cons(v1096, fold_var1098);
                var fold_var1097 = M2.values(fold_var1099);
                if (true !== false) {
                    var if_res491 = M2.not(false);
                } else {
                    var if_res491 = false;
                }
                if (if_res491 !== false) {
                    var if_res492 = for_loop1093(fold_var1097, i1095 + 1);
                } else {
                    var if_res492 = fold_var1097;
                }
                var if_res493 = if_res492;
            } else {
                var if_res493 = fold_var1094;
            }
            var if_res494 = if_res493;
        } else {
            var if_res494 = fold_var1094;
        }
        return if_res494;
    };
    return M1.alt_reverse(for_loop1093(M2.rnull, 0));
};
var check_array = function(v1100) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (js_array_p(v1100) !== false) {
        var if_res495 = M2.rvoid();
    } else {
        var if_res495 = M2.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-js-array"), $rjs_core.UString.make("js-array?"), v1100);
    }
    return if_res495;
};
var in_js_obect = function(obj1101) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_object(obj1101);
    var obj1102 = obj1101;
    var keys1103 = Object.keys(obj1101);
    if (js_object_p(obj1102) !== false) {
        var if_res496 = M2.rvoid();
    } else {
        var if_res496 = in_js_array(obj1102);
    }
    if_res496;
    var for_loop1104 = function(fold_var1105, i1106) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M2.__lt_(i1106, keys1103.length) !== false) {
            var k1107 = keys1103[i1106];
            var v1108 = obj1102[keys1103[i1106]];
            if (true !== false) {
                var fold_var1110 = fold_var1105;
                var fold_var1111 = M2.cons(M2.values(k1107, v1108), fold_var1110);
                var fold_var1109 = M2.values(fold_var1111);
                if (true !== false) {
                    var if_res497 = M2.not(false);
                } else {
                    var if_res497 = false;
                }
                if (if_res497 !== false) {
                    var if_res498 = for_loop1104(fold_var1109, i1106 + 1);
                } else {
                    var if_res498 = fold_var1109;
                }
                var if_res499 = if_res498;
            } else {
                var if_res499 = fold_var1105;
            }
            var if_res500 = if_res499;
        } else {
            var if_res500 = fold_var1105;
        }
        return if_res500;
    };
    return M1.alt_reverse(for_loop1104(M2.rnull, 0));
};
var js_object_p = function(v1112) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return ((typeof(v1112) === "object") && (v1112 !== null)) && M2.not($rjs_core.Primitive.check(v1112));
};
var check_object = function(v1113) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (js_object_p(v1113) !== false) {
        var if_res501 = M2.rvoid();
    } else {
        var if_res501 = M2.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-js-object"), $rjs_core.UString.make("js-object?"), v1113);
    }
    return if_res501;
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