import * as $rjs_core from '../runtime/core.js';
import * as M0 from "../runtime/kernel.rkt.js";
import * as M1 from "../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
var js_string_p = function(s2627) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var or_part2628 = typeof(s2627) === "string";
    if (or_part2628 !== false) {
        var if_res1459 = or_part2628;
    } else {
        var if_res1459 = (s2627) instanceof(String);
    }
    return if_res1459;
};
var js_object_p = function(obj2629) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.not(M0.string_p(obj2629), M0.number_p(obj2629), M0.boolean_p(obj2629), M0.list_p(obj2629), M0.symbol_p(obj2629)) !== false) {
        var if_res1460 = typeof(obj2629) === "object";
    } else {
        var if_res1460 = false;
    }
    return if_res1460;
};
var null_p = function(val2630) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return val2630 === null;
};
var undefined_p = function(val2631) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return val2631 === undefined;
};
var js_array_p = function(arr2632) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Array.isArray(arr2632);
};
var msg__gt_string = function(msg2633) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (undefined_p(msg2633) !== false) {
        var if_res1465 = $rjs_core.UString.make("undefined");
    } else {
        if (js_string_p(msg2633) !== false) {
            var if_res1464 = M1.js_string__gt_string(msg2633);
        } else {
            var or_part2634 = js_object_p(msg2633);
            if (or_part2634 !== false) {
                var if_res1462 = or_part2634;
            } else {
                var or_part2635 = js_array_p(msg2633);
                if (or_part2635 !== false) {
                    var if_res1461 = or_part2635;
                } else {
                    var if_res1461 = null_p(msg2633);
                }
                var if_res1462 = if_res1461;
            }
            if (if_res1462 !== false) {
                var if_res1463 = JSON.stringify(msg2633);
            } else {
                var if_res1463 = M0.format($rjs_core.UString.make("~a"), msg2633);
            }
            var if_res1464 = if_res1463;
        }
        var if_res1465 = if_res1464;
    }
    return if_res1465;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    js_array_p,
    undefined_p,
    msg__gt_string,
    null_p,
    js_object_p,
    js_string_p
};