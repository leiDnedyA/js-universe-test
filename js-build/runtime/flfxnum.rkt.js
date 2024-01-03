import * as $rjs_core from './core.js';
import * as M1 from "./lib.rkt.js";
import * as M2 from "../links/racketscript-compiler/racketscript/compiler/directive.rkt.js";
import * as M3 from "./kernel.rkt.js";
var fl_times_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.mul, 0);
var fl_by_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.div, 1);
var fl_plus_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.add, 0);
var fl_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.sub, 1);
var fl_lt_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.lt, 1);
var fl_gt_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.gt, 1);
var fl_lt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.lte, 1);
var fl_gt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.gte, 1);
var fl_eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.equals, 1);
var flabs = Math.abs;
var flmin = Math.min;
var flmax = Math.max;
var flround = Math.round;
var flfloor = Math.floor;
var flceiling = Math.ceil;
var fltruncate = Math.trunc;
var flsin = Math.sin;
var flcos = Math.cos;
var fltan = Math.tan;
var flasin = Math.asin;
var flacos = Math.acos;
var flatan = Math.atan;
var fllog = Math.log;
var flexp = Math.exp;
var flsqrt = Math.sqrt;
var flexpt = Math.pow;
var fx_plus_ = function(a1030, b1031) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1030 + b1031) | 0;
};
var fx_ = function(a1032, b1033) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1032 - b1033) | 0;
};
var fx_times_ = function(a1034, b1035) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1034 * b1035) | 0;
};
var fxquotient = function(a1036, b1037) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1036 / b1037) | 0;
};
var fxremainder = function(a1038, b1039) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1038 % b1039) | 0;
};
var fxmodulo = function(a1040, b1041) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var remainder1042 = a1040 % b1041;
    if ((remainder1042 >= 0) !== false) {
        var if_res479 = remainder1042;
    } else {
        var if_res479 = remainder1042 + b1041;
    }
    return Math.floor(if_res479);
};
var fxabs = function(a1043) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.abs(a1043);
};
var fx_eq_ = function(a1044, b1045) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a1044 === b1045;
};
var fx_lt_ = function(a1046, b1047) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a1046 < b1047;
};
var fx_lt__eq_ = function(a1048, b1049) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a1048 <= b1049;
};
var fx_gt_ = function(a1050, b1051) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a1050 > b1051;
};
var fx_gt__eq_ = function(a1052, b1053) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a1052 >= b1053;
};
var fxmin = function(a1054, b1055) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a1054 < b1055) !== false) {
        var if_res480 = a1054;
    } else {
        var if_res480 = b1055;
    }
    return if_res480;
};
var fxmax = function(a1056, b1057) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a1056 > b1057) !== false) {
        var if_res481 = b1057;
    } else {
        var if_res481 = a1056;
    }
    return if_res481;
};
var fxrshift = function(a1058, b1059) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1058 >> b1059) | 0;
};
var fxlshift = function(a1060, b1061) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1060 << b1061) | 0;
};
var fxand = function(a1062, b1063) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1062 && b1063) | 0;
};
var fxior = function(a1064, b1065) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1064 || b1065) | 0;
};
var fxxor = function(a1066, b1067) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1066 ^ b1067) | 0;
};
var fxnot = M1.Core.bitwiseNot;
var flvector = Array.from;
var flvector_p = Array.isArray;
var fxvector = Array.from;
var fxvector_p = Array.isArray;
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    fl_times_,
    fl_by_,
    fl_plus_,
    fl_,
    fl_lt_,
    fl_gt_,
    fl_lt__eq_,
    fl_gt__eq_,
    fl_eq_,
    flabs,
    flmin,
    flmax,
    flround,
    flfloor,
    flceiling,
    fltruncate,
    flsin,
    flcos,
    fltan,
    flasin,
    flacos,
    flatan,
    fllog,
    flexp,
    flsqrt,
    flexpt,
    fx_plus_,
    fx_,
    fx_times_,
    fxquotient,
    fxremainder,
    fxmodulo,
    fxabs,
    fx_eq_,
    fx_lt_,
    fx_lt__eq_,
    fx_gt_,
    fx_gt__eq_,
    fxmin,
    fxmax,
    fxrshift,
    fxlshift,
    fxand,
    fxior,
    fxxor,
    fxnot,
    flvector,
    flvector_p,
    fxvector,
    fxvector_p
};