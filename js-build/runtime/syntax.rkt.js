import * as $rjs_core from './core.js';
import * as M0 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
import * as M1 from "./lib.rkt.js";
var __syntax_p = function(v2817) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Correlated.syntaxP(v2817);
};
var __datum__gt_syntax = function(v2818) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Correlated.datumToSyntax(v2818);
};
var __syntax_e = function(v2819) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2819.get();
};
var __syntax__gt_datum = function(v2820) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2820.get();
};
var __syntax_source = function(v2821) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_line = function(v2822) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_column = function(v2823) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_position = function(v2824) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_span = function(v2825) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_property2826 = function(s22827, k32828, val12829) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var s2830 = s22827;
    var k2831 = k32828;
    if (false !== false) {
        var if_res1409 = false;
    } else {
        var if_res1409 = val12829;
    }
    var val2832 = if_res1409;
    if (val2832 !== false) {
        var if_res1410 = s2830;
    } else {
        var if_res1410 = false;
    }
    return if_res1410;
};
var cl1411 = function(s2833, k2834) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return __syntax_property2826(s2833, k2834, false);
};
var cl1412 = function(s2835, k2836, val12837) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return __syntax_property2826(s2835, k2836, val12837);
};
var __syntax_property = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1413 = {
        '2': cl1411,
        '3': cl1412
    } [arguments.length];
    if (fixed_lam1413 !== undefined) {
        return fixed_lam1413.apply(null, arguments);
    } else {
        return ___kernel.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var __syntax_property_symbol_keys = function(v2838) {
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