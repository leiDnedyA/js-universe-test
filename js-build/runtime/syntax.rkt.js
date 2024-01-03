import * as $rjs_core from './core.js';
import * as M0 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
import * as M1 from "./lib.rkt.js";
var __syntax_p = function(v3610) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Correlated.syntaxP(v3610);
};
var __datum__gt_syntax = function(v3611) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Correlated.datumToSyntax(v3611);
};
var __syntax_e = function(v3612) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v3612.get();
};
var __syntax__gt_datum = function(v3613) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v3613.get();
};
var __syntax_source = function(v3614) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_line = function(v3615) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_column = function(v3616) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_position = function(v3617) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_span = function(v3618) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_property3619 = function(s23620, k33621, val13622) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var s3623 = s23620;
    var k3624 = k33621;
    if (false !== false) {
        var if_res2032 = false;
    } else {
        var if_res2032 = val13622;
    }
    var val3625 = if_res2032;
    if (val3625 !== false) {
        var if_res2033 = s3623;
    } else {
        var if_res2033 = false;
    }
    return if_res2033;
};
var cl2034 = function(s3626, k3627) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return __syntax_property3619(s3626, k3627, false);
};
var cl2035 = function(s3628, k3629, val13630) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return __syntax_property3619(s3628, k3629, val13630);
};
var __syntax_property = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2036 = {
        '2': cl2034,
        '3': cl2035
    } [arguments.length];
    if (fixed_lam2036 !== undefined) {
        return fixed_lam2036.apply(null, arguments);
    } else {
        return ___kernel.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var __syntax_property_symbol_keys = function(v3631) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Pair.EMPTY;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    __syntax_property_symbol_keys as syntax_property_symbol_keys,
    __syntax_property as syntax_property,
    __syntax_span as syntax_span,
    __syntax_position as syntax_position,
    __syntax_column as syntax_column,
    __syntax_line as syntax_line,
    __syntax_source as syntax_source,
    __syntax_e as syntax_e,
    __syntax__gt_datum as syntax__gt_datum,
    __datum__gt_syntax as datum__gt_syntax,
    __syntax_p as syntax_p
};