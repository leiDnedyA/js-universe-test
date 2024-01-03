import * as $rjs_core from '../runtime/core.js';
import * as M0 from "../runtime/kernel.rkt.js";
import * as M1 from "../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
var js_string_p = function(s1640) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var or_part1641 = typeof(s1640) === "string";
    if (or_part1641 !== false) {
        var if_res806 = or_part1641;
    } else {
        var if_res806 = (s1640) instanceof(String);
    }
    return if_res806;
};
var js_object_p = function(obj1642) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.not(M0.string_p(obj1642), M0.number_p(obj1642), M0.boolean_p(obj1642), M0.list_p(obj1642), M0.symbol_p(obj1642)) !== false) {
        var if_res807 = typeof(obj1642) === "object";
    } else {
        var if_res807 = false;
    }
    return if_res807;
};
var null_p = function(val1643) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return val1643 === null;
};
var undefined_p = function(val1644) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return val1644 === undefined;
};
var js_array_p = function(arr1645) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Array.isArray(arr1645);
};
var msg__gt_string = function(msg1646) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (undefined_p(msg1646) !== false) {
        var if_res812 = $rjs_core.UString.make("undefined");
    } else {
        if (js_string_p(msg1646) !== false) {
            var if_res811 = M1.js_string__gt_string(msg1646);
        } else {
            var or_part1647 = js_object_p(msg1646);
            if (or_part1647 !== false) {
                var if_res809 = or_part1647;
            } else {
                var or_part1648 = js_array_p(msg1646);
                if (or_part1648 !== false) {
                    var if_res808 = or_part1648;
                } else {
                    var if_res808 = null_p(msg1646);
                }
                var if_res809 = if_res808;
            }
            if (if_res809 !== false) {
                var if_res810 = JSON.stringify(msg1646);
            } else {
                var if_res810 = M0.format($rjs_core.UString.make("~a"), msg1646);
            }
            var if_res811 = if_res810;
        }
        var if_res812 = if_res811;
    }
    return if_res812;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    null_p,
    js_object_p,
    undefined_p,
    js_array_p,
    js_string_p,
    msg__gt_string
};