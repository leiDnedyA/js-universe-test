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
var fx_plus_ = function(a1031, b1032) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1031 + b1032) | 0;
};
var fx_ = function(a1033, b1034) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1033 - b1034) | 0;
};
var fx_times_ = function(a1035, b1036) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1035 * b1036) | 0;
};
var fxquotient = function(a1037, b1038) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1037 / b1038) | 0;
};
var fxremainder = function(a1039, b1040) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1039 % b1040) | 0;
};
var fxmodulo = function(a1041, b1042) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var remainder1043 = a1041 % b1042;
    if ((remainder1043 >= 0) !== false) {
        var if_res479 = remainder1043;
    } else {
        var if_res479 = remainder1043 + b1042;
    }
    return Math.floor(if_res479);
};
var fxabs = function(a1044) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.abs(a1044);
};
var fx_eq_ = function(a1045, b1046) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a1045 === b1046;
};
var fx_lt_ = function(a1047, b1048) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a1047 < b1048;
};
var fx_lt__eq_ = function(a1049, b1050) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a1049 <= b1050;
};
var fx_gt_ = function(a1051, b1052) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a1051 > b1052;
};
var fx_gt__eq_ = function(a1053, b1054) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a1053 >= b1054;
};
var fxmin = function(a1055, b1056) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a1055 < b1056) !== false) {
        var if_res480 = a1055;
    } else {
        var if_res480 = b1056;
    }
    return if_res480;
};
var fxmax = function(a1057, b1058) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a1057 > b1058) !== false) {
        var if_res481 = b1058;
    } else {
        var if_res481 = a1057;
    }
    return if_res481;
};
var fxrshift = function(a1059, b1060) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1059 >> b1060) | 0;
};
var fxlshift = function(a1061, b1062) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1061 << b1062) | 0;
};
var fxand = function(a1063, b1064) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1063 && b1064) | 0;
};
var fxior = function(a1065, b1066) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1065 || b1066) | 0;
};
var fxxor = function(a1067, b1068) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a1067 ^ b1068) | 0;
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