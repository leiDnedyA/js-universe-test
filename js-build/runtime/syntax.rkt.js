import * as $rjs_core from './core.js';
import * as M0 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
import * as M1 from "./lib.rkt.js";
var __syntax_p = function(v2465) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Correlated.syntaxP(v2465);
};
var __datum__gt_syntax = function(v2466) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Correlated.datumToSyntax(v2466);
};
var __syntax_e = function(v2467) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2467.get();
};
var __syntax__gt_datum = function(v2468) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2468.get();
};
var __syntax_source = function(v2469) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_line = function(v2470) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_column = function(v2471) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_position = function(v2472) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_span = function(v2473) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var __syntax_property2474 = function(s22475, k32476, val12477) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var s2478 = s22475;
    var k2479 = k32476;
    if (false !== false) {
        var if_res1328 = false;
    } else {
        var if_res1328 = val12477;
    }
    var val2480 = if_res1328;
    if (val2480 !== false) {
        var if_res1329 = s2478;
    } else {
        var if_res1329 = false;
    }
    return if_res1329;
};
var cl1330 = function(s2481, k2482) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return __syntax_property2474(s2481, k2482, false);
};
var cl1331 = function(s2483, k2484, val12485) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return __syntax_property2474(s2483, k2484, val12485);
};
var __syntax_property = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1332 = {
        '2': cl1330,
        '3': cl1331
    } [arguments.length];
    if (fixed_lam1332 !== undefined) {
        return fixed_lam1332.apply(null, arguments);
    } else {
        return ___kernel.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var __syntax_property_symbol_keys = function(v2486) {
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