import * as $rjs_core from '../runtime/core.js';
import * as M0 from "../runtime/kernel.rkt.js";
import * as M1 from "../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
var js_string_p = function(s3322) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var or_part3323 = typeof(s3322) === "string";
    if (or_part3323 !== false) {
        var if_res1794 = or_part3323;
    } else {
        var if_res1794 = (s3322) instanceof(String);
    }
    return if_res1794;
};
var js_object_p = function(obj3324) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.not(M0.string_p(obj3324), M0.number_p(obj3324), M0.boolean_p(obj3324), M0.list_p(obj3324), M0.symbol_p(obj3324)) !== false) {
        var if_res1795 = typeof(obj3324) === "object";
    } else {
        var if_res1795 = false;
    }
    return if_res1795;
};
var null_p = function(val3325) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return val3325 === null;
};
var undefined_p = function(val3326) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return val3326 === undefined;
};
var js_array_p = function(arr3327) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Array.isArray(arr3327);
};
var msg__gt_string = function(msg3328) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (undefined_p(msg3328) !== false) {
        var if_res1800 = $rjs_core.UString.make("undefined");
    } else {
        if (js_string_p(msg3328) !== false) {
            var if_res1799 = M1.js_string__gt_string(msg3328);
        } else {
            var or_part3329 = js_object_p(msg3328);
            if (or_part3329 !== false) {
                var if_res1797 = or_part3329;
            } else {
                var or_part3330 = js_array_p(msg3328);
                if (or_part3330 !== false) {
                    var if_res1796 = or_part3330;
                } else {
                    var if_res1796 = null_p(msg3328);
                }
                var if_res1797 = if_res1796;
            }
            if (if_res1797 !== false) {
                var if_res1798 = JSON.stringify(msg3328);
            } else {
                var if_res1798 = M0.format($rjs_core.UString.make("~a"), msg3328);
            }
            var if_res1799 = if_res1798;
        }
        var if_res1800 = if_res1799;
    }
    return if_res1800;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    msg__gt_string,
    null_p,
    js_object_p,
    js_string_p,
    undefined_p,
    js_array_p
};