import * as $rjs_core from './core.js';
import * as M1 from "./lib.rkt.js";
import * as M2 from "../links/racketscript-compiler/racketscript/compiler/directive.rkt.js";
import * as M4 from "./unsafe.rkt.js";
var equal_p = M1.Core.isEqual;
var eqv_p = M1.Core.isEqv;
var eq_p = M1.Core.isEq;
var values = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(function() {
    var vals2100 = M1.Core.argumentsToArray(arguments);
    if ((vals2100.length === 1) !== false) {
        var if_res1011 = vals2100[0];
    } else {
        var if_res1011 = M1.Values.make(vals2100);
    }
    return if_res1011;
}, 0), $rjs_core.UString.make("values"));
var call_with_values = function(generator2101, receiver2102) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var vals2103 = generator2101();
    if (M1.Values.check(vals2103) !== false) {
        var if_res1013 = receiver2102.apply(this, vals2103.getAll());
    } else {
        if (not(eq_p(vals2103, undefined) || eq_p(vals2103, null)) !== false) {
            var if_res1012 = receiver2102.apply(this, [vals2103]);
        } else {
            var if_res1012 = rvoid();
        }
        var if_res1013 = if_res1012;
    }
    return if_res1013;
};
var immutable_p = function(v2104) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Kernel.isImmutable(v2104);
};
var rvoid = $rjs_core.attachProcedureArity(function(..._21051014) {
    var _2105 = $rjs_core.Pair.listFromArray(_21051014);
    return null;
});
var void_p = function(v2106) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (v2106 === null) || (v2106 === undefined);
};
var number_p = M1.Core.Number.JS.check;
var real_p = M1.Core.Number.JS.check;
var integer_p = Number.isInteger;
var complex_p = $rjs_core.attachProcedureArity(function(..._21071015) {
    var _2107 = $rjs_core.Pair.listFromArray(_21071015);
    return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
});
var zero_p = function(v2108) {
    if (number_p(v2108) !== false) {
        var if_res1016 = rvoid();
    } else {
        var if_res1016 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("zero?"), $rjs_core.UString.make("number?"), v2108));
    }
    if_res1016;
    return v2108 === 0;
};
var positive_p = function(v2109) {
    if (real_p(v2109) !== false) {
        var if_res1017 = rvoid();
    } else {
        var if_res1017 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("positive?"), $rjs_core.UString.make("real?"), v2109));
    }
    if_res1017;
    return v2109 > 0;
};
var negative_p = function(v2110) {
    if (real_p(v2110) !== false) {
        var if_res1018 = rvoid();
    } else {
        var if_res1018 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("negative?"), $rjs_core.UString.make("real?"), v2110));
    }
    if_res1018;
    return v2110 < 0;
};
var add1 = function(v2111) {
    if (number_p(v2111) !== false) {
        var if_res1019 = rvoid();
    } else {
        var if_res1019 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("add1"), $rjs_core.UString.make("number?"), v2111));
    }
    if_res1019;
    return v2111 + 1;
};
var sub1 = function(v2112) {
    if (number_p(v2112) !== false) {
        var if_res1020 = rvoid();
    } else {
        var if_res1020 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sub1"), $rjs_core.UString.make("number?"), v2112));
    }
    if_res1020;
    return v2112 - 1;
};
var quotient = function(dividend2113, divisor2114) {
    if (integer_p(dividend2113) !== false) {
        var if_res1021 = rvoid();
    } else {
        var if_res1021 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("quotient"), $rjs_core.UString.make("integer?"), dividend2113));
    }
    if_res1021;
    if (integer_p(divisor2114) !== false) {
        var if_res1022 = rvoid();
    } else {
        var if_res1022 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("quotient"), $rjs_core.UString.make("integer?"), divisor2114));
    }
    if_res1022;
    return (dividend2113 / divisor2114) | 0;
};
var even_p = function(v2115) {
    if (integer_p(v2115) !== false) {
        var if_res1023 = rvoid();
    } else {
        var if_res1023 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("even?"), $rjs_core.UString.make("integer?"), v2115));
    }
    if_res1023;
    return (v2115 % 2) === 0;
};
var odd_p = function(v2116) {
    if (integer_p(v2116) !== false) {
        var if_res1024 = rvoid();
    } else {
        var if_res1024 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("odd?"), $rjs_core.UString.make("integer?"), v2116));
    }
    if_res1024;
    return not(even_p(v2116));
};
var exact_nonnegative_integer_p = function(v2117) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Number.isInteger(v2117) && (v2117 >= 0);
};
var exact_integer_p = function(v2118) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Number.isInteger(v2118);
};
var exact_p = function(v2119) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Number.isInteger(v2119);
};
var inexact_p = function(v2120) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return not(exact_p(v2120));
};
var single_flonum_available_p = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var single_flonum_p = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var real__gt_single_flonum = function(v2121) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2121;
};
var __times_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.mul, 0);
var __by_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.div, 1);
var __plus_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.add, 0);
var __ = M1.Core.attachProcedureArity(M1.Core.Number.JS.sub, 1);
var __lt_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.lt, 1);
var __gt_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.gt, 1);
var __lt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.lte, 1);
var __gt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.gte, 1);
var __eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.equals, 1);
var floor = function(v2135) {
    if (real_p(v2135) !== false) {
        var if_res1025 = rvoid();
    } else {
        var if_res1025 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("floor"), $rjs_core.UString.make("real?"), v2135));
    }
    if_res1025;
    return Math.floor(v2135);
};
var abs = function(v2136) {
    if (real_p(v2136) !== false) {
        var if_res1026 = rvoid();
    } else {
        var if_res1026 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("abs"), $rjs_core.UString.make("real?"), v2136));
    }
    if_res1026;
    return Math.abs(v2136);
};
var sin = function(v2137) {
    if (number_p(v2137) !== false) {
        var if_res1027 = rvoid();
    } else {
        var if_res1027 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sin"), $rjs_core.UString.make("number?"), v2137));
    }
    if_res1027;
    return Math.sin(v2137);
};
var cos = function(v2138) {
    if (number_p(v2138) !== false) {
        var if_res1028 = rvoid();
    } else {
        var if_res1028 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cos"), $rjs_core.UString.make("number?"), v2138));
    }
    if_res1028;
    return Math.cos(v2138);
};
var tan = function(v2139) {
    if (number_p(v2139) !== false) {
        var if_res1029 = rvoid();
    } else {
        var if_res1029 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("tan"), $rjs_core.UString.make("number?"), v2139));
    }
    if_res1029;
    return Math.tan(v2139);
};
var asin = function(v2140) {
    if (number_p(v2140) !== false) {
        var if_res1030 = rvoid();
    } else {
        var if_res1030 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("asin"), $rjs_core.UString.make("number?"), v2140));
    }
    if_res1030;
    return Math.asin(v2140);
};
var acos = function(v2141) {
    if (number_p(v2141) !== false) {
        var if_res1031 = rvoid();
    } else {
        var if_res1031 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("acos"), $rjs_core.UString.make("number?"), v2141));
    }
    if_res1031;
    return Math.acos(v2141);
};
var cl1032 = function(v2145) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.atan(v2145);
};
var cl1033 = function(x2146, y2147) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.atan2(x2146, y2147);
};
var atan = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1034 = {
        '1': cl1032,
        '2': cl1033
    } [arguments.length];
    if (fixed_lam1034 !== undefined) {
        return fixed_lam1034.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var ceiling = function(v2148) {
    if (real_p(v2148) !== false) {
        var if_res1035 = rvoid();
    } else {
        var if_res1035 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("ceiling"), $rjs_core.UString.make("real?"), v2148));
    }
    if_res1035;
    return Math.ceil(v2148);
};
var round = function(v2149) {
    if (real_p(v2149) !== false) {
        var if_res1036 = rvoid();
    } else {
        var if_res1036 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("round"), $rjs_core.UString.make("real?"), v2149));
    }
    if_res1036;
    return Math.round(v2149);
};
var min = function(a2150, b2151) {
    if (real_p(a2150) !== false) {
        var if_res1037 = rvoid();
    } else {
        var if_res1037 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("min"), $rjs_core.UString.make("real?"), a2150));
    }
    if_res1037;
    if (real_p(b2151) !== false) {
        var if_res1038 = rvoid();
    } else {
        var if_res1038 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("min"), $rjs_core.UString.make("real?"), b2151));
    }
    if_res1038;
    return Math.min(a2150, b2151);
};
var max = function(a2152, b2153) {
    if (real_p(a2152) !== false) {
        var if_res1039 = rvoid();
    } else {
        var if_res1039 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("max"), $rjs_core.UString.make("real?"), a2152));
    }
    if_res1039;
    if (real_p(b2153) !== false) {
        var if_res1040 = rvoid();
    } else {
        var if_res1040 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("max"), $rjs_core.UString.make("real?"), b2153));
    }
    if_res1040;
    return Math.max(a2152, b2153);
};
var log = function(v2154) {
    if (number_p(v2154) !== false) {
        var if_res1041 = rvoid();
    } else {
        var if_res1041 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("log"), $rjs_core.UString.make("number?"), v2154));
    }
    if_res1041;
    return Math.log(v2154);
};
var exp = function(w2155) {
    if (number_p(w2155) !== false) {
        var if_res1042 = rvoid();
    } else {
        var if_res1042 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("exp"), $rjs_core.UString.make("number?"), w2155));
    }
    if_res1042;
    return Math.exp(w2155);
};
var expt = function(w2156, z2157) {
    if (number_p(w2156) !== false) {
        var if_res1043 = rvoid();
    } else {
        var if_res1043 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("expt"), $rjs_core.UString.make("number?"), w2156));
    }
    if_res1043;
    if (number_p(z2157) !== false) {
        var if_res1044 = rvoid();
    } else {
        var if_res1044 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("expt"), $rjs_core.UString.make("number?"), z2157));
    }
    if_res1044;
    return Math.pow(w2156, z2157);
};
var sqrt = function(v2158) {
    if (number_p(v2158) !== false) {
        var if_res1045 = rvoid();
    } else {
        var if_res1045 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sqrt"), $rjs_core.UString.make("number?"), v2158));
    }
    if_res1045;
    return Math.sqrt(v2158);
};
var sqr = function(v2159) {
    if (number_p(v2159) !== false) {
        var if_res1046 = rvoid();
    } else {
        var if_res1046 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sqr"), $rjs_core.UString.make("number?"), v2159));
    }
    if_res1046;
    return __times_(v2159, v2159);
};
var truncate = function(v2160) {
    if (number_p(v2160) !== false) {
        var if_res1047 = rvoid();
    } else {
        var if_res1047 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("truncate"), $rjs_core.UString.make("number?"), v2160));
    }
    if_res1047;
    return Math.trunc(v2160);
};
var remainder = function(a2161, b2162) {
    if (integer_p(a2161) !== false) {
        var if_res1048 = rvoid();
    } else {
        var if_res1048 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("remainder"), $rjs_core.UString.make("integer?"), a2161));
    }
    if_res1048;
    if (integer_p(b2162) !== false) {
        var if_res1049 = rvoid();
    } else {
        var if_res1049 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("remainder"), $rjs_core.UString.make("integer?"), b2162));
    }
    if_res1049;
    return a2161 % b2162;
};
var number__gt_string = function(n2163) {
    if (number_p(n2163) !== false) {
        var if_res1050 = rvoid();
    } else {
        var if_res1050 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("number->string"), $rjs_core.UString.make("number?"), n2163));
    }
    if_res1050;
    return M1.Core.UString.makeMutable(n2163.toString());
};
var arithmetic_shift = function(n2164, m2165) {
    if (integer_p(n2164) !== false) {
        var if_res1051 = rvoid();
    } else {
        var if_res1051 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("arithmetic-shift"), $rjs_core.UString.make("integer?"), n2164));
    }
    if_res1051;
    if (integer_p(m2165) !== false) {
        var if_res1052 = rvoid();
    } else {
        var if_res1052 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("arithmetic-shift"), $rjs_core.UString.make("integer?"), m2165));
    }
    if_res1052;
    if (negative_p(m2165) !== false) {
        var if_res1053 = n2164 >> __(m2165);
    } else {
        var if_res1053 = n2164 << m2165;
    }
    return if_res1053;
};
var inexact__gt_exact = function(v2166) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2166;
};
var exact__gt_inexact = function(v2167) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2167;
};
var make_rectangular = function(x2168, y2169) {
    if (real_p(x2168) !== false) {
        var if_res1054 = rvoid();
    } else {
        var if_res1054 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-rectangular"), $rjs_core.UString.make("real?"), x2168));
    }
    if_res1054;
    if (real_p(y2169) !== false) {
        var if_res1055 = rvoid();
    } else {
        var if_res1055 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-rectangular"), $rjs_core.UString.make("real?"), y2169));
    }
    if_res1055;
    return M1.Core.Pair.make(x2168, y2169);
};
var make_polar = function(m2170, a2171) {
    if (real_p(m2170) !== false) {
        var if_res1056 = rvoid();
    } else {
        var if_res1056 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-polar"), $rjs_core.UString.make("real?"), m2170));
    }
    if_res1056;
    if (real_p(a2171) !== false) {
        var if_res1057 = rvoid();
    } else {
        var if_res1057 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-polar"), $rjs_core.UString.make("real?"), a2171));
    }
    if_res1057;
    return error($rjs_core.UString.make("Complex numbers not supported with JS numerber semantics"));
};
var real_part = function(z2172) {
    if (pair_p(z2172) !== false) {
        var if_res1058 = rvoid();
    } else {
        var if_res1058 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("real-part"), $rjs_core.UString.make("(if-scheme-numbers number? pair?)"), z2172));
    }
    if_res1058;
    return z2172.hd(z2172);
};
var imag_part = function(z2173) {
    if (pair_p(z2173) !== false) {
        var if_res1059 = rvoid();
    } else {
        var if_res1059 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("imag-part"), $rjs_core.UString.make("(if-scheme-numbers number? pair?)"), z2173));
    }
    if_res1059;
    return z2173.tl(z2173);
};
var magnitude = function(x2174) {
    if (number_p(x2174) !== false) {
        var if_res1060 = rvoid();
    } else {
        var if_res1060 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("magnitude"), $rjs_core.UString.make("number?"), x2174));
    }
    if_res1060;
    return $rjs_core.attachProcedureArity(function(..._21751061) {
        var _2175 = $rjs_core.Pair.listFromArray(_21751061);
        return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
    });
};
var conjugate = function(x2176) {
    if (number_p(x2176) !== false) {
        var if_res1062 = rvoid();
    } else {
        var if_res1062 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("conjugate"), $rjs_core.UString.make("number?"), x2176));
    }
    if_res1062;
    return $rjs_core.attachProcedureArity(function(..._21771063) {
        var _2177 = $rjs_core.Pair.listFromArray(_21771063);
        return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
    });
};
var angle = function(x2178) {
    if (number_p(x2178) !== false) {
        var if_res1064 = rvoid();
    } else {
        var if_res1064 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("angle"), $rjs_core.UString.make("number?"), x2178));
    }
    if_res1064;
    return $rjs_core.attachProcedureArity(function(..._21791065) {
        var _2179 = $rjs_core.Pair.listFromArray(_21791065);
        return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
    });
};
var rational_p = Number.isInteger;
var numerator = function(x2180) {
    if (number_p(x2180) !== false) {
        var if_res1066 = rvoid();
    } else {
        var if_res1066 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("numerator"), $rjs_core.UString.make("number?"), x2180));
    }
    if_res1066;
    return x2180;
};
var denominator = function(x2181) {
    if (number_p(x2181) !== false) {
        var if_res1067 = rvoid();
    } else {
        var if_res1067 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("denominator"), $rjs_core.UString.make("number?"), x2181));
    }
    if_res1067;
    return 1;
};
var bitwise_and = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.JS.bitwiseAnd, 1), $rjs_core.UString.make("bitwise-and"));
var bitwise_ior = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.JS.bitwiseOr, 1), $rjs_core.UString.make("bitwise-ior"));
var bitwise_xor = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.JS.bitwiseXor, 1), $rjs_core.UString.make("bitwise-xor"));
var bitwise_not = function(v2182) {
    if (number_p(v2182) !== false) {
        var if_res1068 = rvoid();
    } else {
        var if_res1068 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bitwise-not"), $rjs_core.UString.make("number?"), v2182));
    }
    if_res1068;
    return M1.Core.Number.JS.bitwiseNot(v2182);
};
var bitwise_bit_set_p = function(n2183, m2184) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return not(zero_p(bitwise_and(n2183, arithmetic_shift(1, m2184))));
};
var not = function(v2185) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return equal_p(v2185, false) || false;
};
var rfalse = false;
var rtrue = true;
var false_p = function(v2186) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2186 === false;
};
var boolean_p = function(v2187) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (v2187 === true) || (v2187 === false);
};
var car = function(pair2188) {
    if (pair_p(pair2188) !== false) {
        var if_res1069 = rvoid();
    } else {
        var if_res1069 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("car"), $rjs_core.UString.make("pair?"), pair2188));
    }
    if_res1069;
    return pair2188.hd;
};
var cdr = function(pair2189) {
    if (pair_p(pair2189) !== false) {
        var if_res1070 = rvoid();
    } else {
        var if_res1070 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdr"), $rjs_core.UString.make("pair?"), pair2189));
    }
    if_res1070;
    return pair2189.tl;
};
var cons = M1.Core.attachProcedureName(M1.Core.Pair.make, $rjs_core.UString.make("cons"));
var pair_p = M1.Core.attachProcedureName(M1.Core.Pair.check, $rjs_core.UString.make("pair?"));
var caar = function(v2190) {
    if ((function(v2191) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v2191) && pair_p(v2191.hd);
        })(v2190) !== false) {
        var if_res1071 = rvoid();
    } else {
        var if_res1071 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("caar"), $rjs_core.UString.make("(check/pair-of? pair? #t)"), v2190));
    }
    if_res1071;
    return v2190.hd.hd;
};
var cadr = function(v2192) {
    if ((function(v2193) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v2193) && pair_p(v2193.tl);
        })(v2192) !== false) {
        var if_res1072 = rvoid();
    } else {
        var if_res1072 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cadr"), $rjs_core.UString.make("(check/pair-of? #t pair?)"), v2192));
    }
    if_res1072;
    return v2192.tl.hd;
};
var cdar = function(v2194) {
    if ((function(v2195) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v2195) && pair_p(v2195.hd);
        })(v2194) !== false) {
        var if_res1073 = rvoid();
    } else {
        var if_res1073 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdar"), $rjs_core.UString.make("(check/pair-of? pair? #t)"), v2194));
    }
    if_res1073;
    return v2194.hd.tl;
};
var cddr = function(v2196) {
    if ((function(v2197) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v2197) && pair_p(v2197.tl);
        })(v2196) !== false) {
        var if_res1074 = rvoid();
    } else {
        var if_res1074 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cddr"), $rjs_core.UString.make("(check/pair-of? #t pair?)"), v2196));
    }
    if_res1074;
    return v2196.tl.tl;
};
var cdddr = function(v2198) {
    if ((function(v2199) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v2199) && (function(v2200) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v2200) && pair_p(v2200.tl);
            })(v2199.tl);
        })(v2198) !== false) {
        var if_res1075 = rvoid();
    } else {
        var if_res1075 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t pair?))"), v2198));
    }
    if_res1075;
    return v2198.tl.tl.tl;
};
var caddr = function(v2201) {
    if ((function(v2202) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v2202) && (function(v2203) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v2203) && pair_p(v2203.tl);
            })(v2202.tl);
        })(v2201) !== false) {
        var if_res1076 = rvoid();
    } else {
        var if_res1076 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("caddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t pair?))"), v2201));
    }
    if_res1076;
    return v2201.tl.tl.hd;
};
var cadddr = function(v2204) {
    if ((function(v2205) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v2205) && (function(v2206) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v2206) && (function(v2207) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M1.Core.Pair.check(v2207) && pair_p(v2207.tl);
                })(v2206.tl);
            })(v2205.tl);
        })(v2204) !== false) {
        var if_res1077 = rvoid();
    } else {
        var if_res1077 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cadddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t (check/pair-of? #t pair?)))"), v2204));
    }
    if_res1077;
    return v2204.tl.tl.tl.hd;
};
var cddddr = function(v2208) {
    if ((function(v2209) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v2209) && (function(v2210) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v2210) && (function(v2211) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M1.Core.Pair.check(v2211) && pair_p(v2211.tl);
                })(v2210.tl);
            })(v2209.tl);
        })(v2208) !== false) {
        var if_res1078 = rvoid();
    } else {
        var if_res1078 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cddddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t (check/pair-of? #t pair?)))"), v2208));
    }
    if_res1078;
    return v2208.tl.tl.tl.tl;
};
var rnull = M1.Core.Pair.EMPTY;
var list = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Pair.makeList, 0), $rjs_core.UString.make("list"));
var null_p = M1.Core.Pair.isEmpty;
var list_p = M1.Core.Pair.isList;
var length = function(v2212) {
    if (list_p(v2212) !== false) {
        var if_res1079 = rvoid();
    } else {
        var if_res1079 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("length"), $rjs_core.UString.make("list?"), v2212));
    }
    if_res1079;
    return v2212.length;
};
var reverse = function(lst2213) {
    if (list_p(lst2213) !== false) {
        var if_res1080 = rvoid();
    } else {
        var if_res1080 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("reverse"), $rjs_core.UString.make("list?"), lst2213));
    }
    if_res1080;
    var loop2214 = function(lst2215, result2216) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst2215) !== false) {
            var if_res1081 = result2216;
        } else {
            var if_res1081 = loop2214(lst2215.tl, M1.Core.Pair.make(lst2215.hd, result2216));
        }
        return if_res1081;
    };
    return loop2214(lst2213, $rjs_core.Pair.EMPTY);
};
var list_times_ = function() {
    var let_result1082 = values();
    var n_args2217 = arguments.length;
    var top_arguments2218 = arguments;
    var loop2219 = function(ii2220, result2221) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((ii2220 === 0) !== false) {
            var if_res1083 = result2221;
        } else {
            var next_ii2222 = ii2220 - 1;
            var if_res1083 = loop2219(next_ii2222, M1.Core.Pair.make(top_arguments2218[next_ii2222], result2221));
        }
        return if_res1083;
    };
    return loop2219(n_args2217 - 1, arguments[n_args2217 - 1]);
};
var append = function() {
    var let_result1084 = values();
    var result2223 = $rjs_core.Pair.EMPTY;
    var lsts2224 = arguments;
    var loop2225 = function(i2226) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i2226 < lsts2224.length) !== false) {
            var lst2227 = lsts2224[i2226];
            result2223 = foldr(M1.Core.Pair.make, lst2227, result2223);
            var if_res1085 = loop2225(i2226 + 1);
        } else {
            var if_res1085 = rvoid();
        }
        return if_res1085;
    };
    loop2225(0);
    return result2223;
};
var for_each = function(lam2228) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1086 = null;
    } else {
        var if_res1086 = rvoid();
    }
    if_res1086;
    var let_result1087 = values();
    var lsts2229 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(lam2228) !== false) {
        var if_res1088 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), lam2228, $rjs_core.UString.make(", at:"), 0);
        var if_res1088 = null;
    }
    if_res1088;
    map.apply(null, [lam2228].concat(lsts2229));
    return null;
};
var mcons = function(hd2230, tl2231) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.MPair.make(hd2230, tl2231);
};
var mpair_p = function(v2232) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.MPair.check(v2232);
};
var mcar = function(p2233) {
    if (mpair_p(p2233) !== false) {
        var if_res1089 = rvoid();
    } else {
        var if_res1089 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("mcar"), $rjs_core.UString.make("mpair?"), p2233));
    }
    if_res1089;
    return p2233.car();
};
var mcdr = function(p2234) {
    if (mpair_p(p2234) !== false) {
        var if_res1090 = rvoid();
    } else {
        var if_res1090 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("mcdr"), $rjs_core.UString.make("mpair?"), p2234));
    }
    if_res1090;
    return p2234.cdr();
};
var set_mcar_bang_ = function(p2235, v2236) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (mpair_p(p2235) !== false) {
        var if_res1091 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("mpair?"), $rjs_core.UString.make(", given:"), p2235, $rjs_core.UString.make(", at:"), 0);
        var if_res1091 = null;
    }
    if_res1091;
    return p2235.setCar(v2236);
};
var set_mcdr_bang_ = function(p2237, v2238) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (mpair_p(p2237) !== false) {
        var if_res1092 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("mpair?"), $rjs_core.UString.make(", given:"), p2237, $rjs_core.UString.make(", at:"), 0);
        var if_res1092 = null;
    }
    if_res1092;
    return p2237.setCdr(v2238);
};
var make_struct_type = function(name2239, super_type2240, init_field_count2241, auto_field_count2242, auto_v2243, props2244, inspector2245, proc_spec2246, immutables2247, guard2248, constructor_name2249) {
    return M1.Core.Struct.makeStructType({
        'name': name2239.toString(),
        'superType': super_type2240,
        'initFieldCount': init_field_count2241,
        'autoFieldCount': auto_field_count2242,
        'autoV': auto_v2243,
        'props': props2244,
        'inspector': inspector2245,
        'procSpec': proc_spec2246,
        'immutables': immutables2247,
        'guard': guard2248,
        'constructorName': constructor_name2249
    });
};
var make_struct_field_accessor = function(ref2250, index2251, field_name2252) {
    return function(s2253) {
        if ((arguments.length !== 1) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res1093 = null;
        } else {
            var if_res1093 = rvoid();
        }
        if_res1093;
        return ref2250(s2253, index2251);
    };
};
var make_struct_field_mutator = function(set2254, index2255, fieldName2256) {
    return function(s2257, v2258) {
        if ((arguments.length !== 2) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res1094 = null;
        } else {
            var if_res1094 = rvoid();
        }
        if_res1094;
        return set2254(s2257, index2255, v2258);
    };
};
var make_struct_type_property = function(name2259, guard2260, supers2261, can_impersonate_p2262) {
    return M1.Core.Struct.makeStructTypeProperty({
        'name': name2259,
        'guard': guard2260,
        'supers': supers2261,
        'canImpersonate': can_impersonate_p2262
    });
};
var check_struct_type = function(name2263, what2264) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (what2264 !== false) {
        if (M1.Core.Struct.isStructType(what2264) !== false) {
            var if_res1095 = rvoid();
        } else {
            throw M1.Core.racketCoreError($rjs_core.UString.make("not a struct type"));
            var if_res1095 = null;
        }
        if_res1095;
        var if_res1096 = what2264;
    } else {
        var if_res1096 = rvoid();
    }
    return if_res1096;
};
var struct_type_p = function(v2265) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Struct.isStructType(v2265);
};
var struct_type_info = function(desc2266) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Values.make(M1.Core.Struct.structTypeInfo(desc2266));
};
var vector = function() {
    return M1.Core.Vector.make(M1.Core.argumentsToArray(arguments), true);
};
var make_vector = function(size2267, v2268) {
    if (integer_p(size2267) !== false) {
        var if_res1097 = rvoid();
    } else {
        var if_res1097 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-vector"), $rjs_core.UString.make("integer?"), size2267));
    }
    if_res1097;
    if (eq_p(v2268, undefined) !== false) {
        var if_res1098 = 0;
    } else {
        var if_res1098 = v2268;
    }
    return M1.Core.Vector.makeInit(size2267, if_res1098);
};
var vector_p = M1.Core.Vector.check;
var vector_length = function(v2269) {
    if (vector_p(v2269) !== false) {
        var if_res1099 = rvoid();
    } else {
        var if_res1099 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-length"), $rjs_core.UString.make("vector?"), v2269));
    }
    if_res1099;
    return v2269.length();
};
var vector_ref = function(vec2270, i2271) {
    if (vector_p(vec2270) !== false) {
        var if_res1100 = rvoid();
    } else {
        var if_res1100 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-ref"), $rjs_core.UString.make("vector?"), vec2270));
    }
    if_res1100;
    if (integer_p(i2271) !== false) {
        var if_res1101 = rvoid();
    } else {
        var if_res1101 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-ref"), $rjs_core.UString.make("integer?"), i2271));
    }
    if_res1101;
    return vec2270.ref(i2271);
};
var vector_set_bang_ = function(vec2272, i2273, v2274) {
    if (vector(vec2272) !== false) {
        var if_res1102 = rvoid();
    } else {
        var if_res1102 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-set!"), $rjs_core.UString.make("vector"), vec2272));
    }
    if_res1102;
    if (integer_p(i2273) !== false) {
        var if_res1103 = rvoid();
    } else {
        var if_res1103 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-set!"), $rjs_core.UString.make("integer?"), i2273));
    }
    if_res1103;
    return vec2272.set(i2273, v2274);
};
var vector__gt_list = function(vec2275) {
    if (vector_p(vec2275) !== false) {
        var if_res1104 = rvoid();
    } else {
        var if_res1104 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector->list"), $rjs_core.UString.make("vector?"), vec2275));
    }
    if_res1104;
    return M1.Core.Pair.listFromArray(vec2275.items);
};
var list__gt_vector = function(lst2276) {
    if (list_p(lst2276) !== false) {
        var if_res1105 = rvoid();
    } else {
        var if_res1105 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("list->vector"), $rjs_core.UString.make("list?"), lst2276));
    }
    if_res1105;
    return M1.Core.Vector.make(M1.Core.Pair.listToArray(lst2276), true);
};
var vector__gt_immutable_vector = function(vec2277) {
    if (vector_p(vec2277) !== false) {
        var if_res1106 = rvoid();
    } else {
        var if_res1106 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector->immutable-vector"), $rjs_core.UString.make("vector?"), vec2277));
    }
    if_res1106;
    return M1.Core.Vector.copy(vec2277, false);
};
var vector_copy = function(vec2278) {
    if (vector_p(vec2278) !== false) {
        var if_res1107 = rvoid();
    } else {
        var if_res1107 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy"), $rjs_core.UString.make("vector?"), vec2278));
    }
    if_res1107;
    return M1.Core.Vector.copy(vec2278, true);
};
var vector_copy_bang_ = function(dest2279, dest_start2280, src2281, src_start2282, src_end2283) {
    if (vector_p(dest2279) !== false) {
        var if_res1108 = rvoid();
    } else {
        var if_res1108 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("vector?"), dest2279));
    }
    if_res1108;
    if (integer_p(dest_start2280) !== false) {
        var if_res1109 = rvoid();
    } else {
        var if_res1109 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), dest_start2280));
    }
    if_res1109;
    if (vector_p(src2281) !== false) {
        var if_res1110 = rvoid();
    } else {
        var if_res1110 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("vector?"), src2281));
    }
    if_res1110;
    if (integer_p(src_start2282) !== false) {
        var if_res1111 = rvoid();
    } else {
        var if_res1111 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), src_start2282));
    }
    if_res1111;
    if (integer_p(src_end2283) !== false) {
        var if_res1112 = rvoid();
    } else {
        var if_res1112 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), src_end2283));
    }
    if_res1112;
    return dest2279.copy(dest_start2280, src2281, src_start2282, src_end2283);
};
var hash = function() {
    var let_result1113 = values();
    var kv_times_2284 = arguments;
    if (((kv_times_2284.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res1114 = null;
    } else {
        var if_res1114 = rvoid();
    }
    if_res1114;
    var items2285 = [];
    var loop2286 = function(i2287) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i2287 < kv_times_2284.length) !== false) {
            items2285.push([kv_times_2284[i2287], kv_times_2284[__plus_(i2287, 1)]]);
            var if_res1115 = loop2286(i2287 + 2);
        } else {
            var if_res1115 = rvoid();
        }
        return if_res1115;
    };
    loop2286(0);
    return M1.Core.Hash.makeEqual(items2285, false);
};
var hasheqv = function() {
    var let_result1116 = values();
    var kv_times_2288 = arguments;
    if (((kv_times_2288.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res1117 = null;
    } else {
        var if_res1117 = rvoid();
    }
    if_res1117;
    var items2289 = [];
    var loop2290 = function(i2291) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i2291 < kv_times_2288.length) !== false) {
            items2289.push([kv_times_2288[i2291], kv_times_2288[__plus_(i2291, 1)]]);
            var if_res1118 = loop2290(i2291 + 2);
        } else {
            var if_res1118 = rvoid();
        }
        return if_res1118;
    };
    loop2290(0);
    return M1.Core.Hash.makeEqv(items2289, false);
};
var hasheq = function() {
    var let_result1119 = values();
    var kv_times_2292 = arguments;
    if (((kv_times_2292.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res1120 = null;
    } else {
        var if_res1120 = rvoid();
    }
    if_res1120;
    var items2293 = [];
    var loop2294 = function(i2295) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i2295 < kv_times_2292.length) !== false) {
            items2293.push([kv_times_2292[i2295], kv_times_2292[__plus_(i2295, 1)]]);
            var if_res1121 = loop2294(i2295 + 2);
        } else {
            var if_res1121 = rvoid();
        }
        return if_res1121;
    };
    loop2294(0);
    return M1.Core.Hash.makeEq(items2293, false);
};
var make_hash = function(assocs2296) {
    var let_result1122 = values();
    var assocs_times_2297 = assocs2296 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqualFromAssocs(assocs_times_2297, true);
};
var make_hasheqv = function(assocs2298) {
    var let_result1123 = values();
    var assocs_times_2299 = assocs2298 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqvFromAssocs(assocs_times_2299, true);
};
var make_hasheq = function(assocs2300) {
    var let_result1124 = values();
    var assocs_times_2301 = assocs2300 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqFromAssocs(assocs_times_2301, true);
};
var make_immutable_hash = function(assocs2302) {
    var let_result1125 = values();
    var assocs_times_2303 = assocs2302 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqualFromAssocs(assocs_times_2303, false);
};
var make_immutable_hasheqv = function(assocs2304) {
    var let_result1126 = values();
    var assocs_times_2305 = assocs2304 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqvFromAssocs(assocs_times_2305, false);
};
var make_immutable_hasheq = function(assocs2306) {
    var let_result1127 = values();
    var assocs_times_2307 = assocs2306 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqFromAssocs(assocs_times_2307, false);
};
var hash_p = M1.Core.Hash.check;
var hash_equal_p = M1.Core.Hash.isEqualHash;
var hash_eqv_p = M1.Core.Hash.isEqvHash;
var hash_eq_p = M1.Core.Hash.isEqHash;
var hash_weak_p = M1.Core.Hash.isWeakHash;
var cl1128 = function(h2308, k2309) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h2308.hasKey(k2309) !== false) {
        var if_res1131 = h2308._h.get(k2309);
    } else {
        var if_res1131 = raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-ref"), $rjs_core.UString.make("no value found for key"), $rjs_core.UString.make("key"), k2309));
    }
    return if_res1131;
};
var cl1129 = function(h2310, k2311, fail2312) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h2310.ref(k2311, fail2312);
};
var hash_ref = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1130 = {
        '2': cl1128,
        '3': cl1129
    } [arguments.length];
    if (fixed_lam1130 !== undefined) {
        return fixed_lam1130.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_has_key_p = function(h2313, k2314) {
    return h2313.hasKey(k2314);
};
var cl1132 = function(h2315, k2316) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h2315.hasKey(k2316) !== false) {
        var if_res1135 = h2315.refKey(k2316);
    } else {
        var if_res1135 = raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-ref-key"), $rjs_core.UString.make("hash does not contain key"), $rjs_core.UString.make("key"), k2316));
    }
    return if_res1135;
};
var cl1133 = function(h2317, k2318, fail2319) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h2317.refKey(k2318, fail2319);
};
var hash_ref_key = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1134 = {
        '2': cl1132,
        '3': cl1133
    } [arguments.length];
    if (fixed_lam1134 !== undefined) {
        return fixed_lam1134.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_set = function(h2320, k2321, v2322) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h2320.isImmutable() !== false) {
        var if_res1136 = h2320.set(k2321, v2322);
    } else {
        var if_res1136 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-set"), $rjs_core.UString.make("(and/c hash? immutable?)"), 0, h2320, k2321, v2322));
    }
    return if_res1136;
};
var hash_remove = function(h2323, k2324) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h2323.isImmutable() !== false) {
        var if_res1137 = h2323.remove(k2324);
    } else {
        var if_res1137 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-remove"), $rjs_core.UString.make("(and/c hash? immutable?)"), 0, h2323, k2324));
    }
    return if_res1137;
};
var cl1138 = function(h2325, proc2326) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Hash.map(h2325, proc2326);
};
var cl1139 = function(h2327, proc2328, try_order_p2329) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Hash.map(h2327, proc2328);
};
var hash_map = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1140 = {
        '2': cl1138,
        '3': cl1139
    } [arguments.length];
    if (fixed_lam1140 !== undefined) {
        return fixed_lam1140.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_count = function(h2330) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h2330.size();
};
var hash_remove_bang_ = function(h2331, k2332) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h2331.isImmutable(h2331) !== false) {
        var if_res1141 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-remove!"), $rjs_core.UString.make("(and/c hash? (not/c immutable?))"), 0, h2331, k2332));
    } else {
        var if_res1141 = h2331.doremove(k2332);
    }
    return if_res1141;
};
var hash_set_bang_ = function(h2333, k2334, v2335) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h2333.isImmutable(h2333) !== false) {
        var if_res1142 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-set!"), $rjs_core.UString.make("(and/c hash? (not/c immutable?))"), 0, h2333, k2334, v2335));
    } else {
        var if_res1142 = h2333.doset(k2334, v2335);
    }
    return if_res1142;
};
var hash_iterate_first = function(h2336) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h2336.iterateFirst();
};
var hash_iterate_next = function(h2337, i2338) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h2337.iterateNext(i2338);
};
var hash_iterate_key = function(h2339, i2340) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h2339.iterateKey(i2340);
};
var hash_iterate_value = function(h2341, i2342) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h2341.iterateValue(i2342);
};
var hash_iterate_key_plus_value = function(h2343, i2344) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h2343.iterateKeyValue(i2344);
};
var hash_iterate_pair = function(h2345, i2346) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h2345.iteratePair(i2346);
};
var hash_keys_subset_p = function(h12347, h22348) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((M1.Core.Hash.check(h12347) && M1.Core.Hash.check(h22348)) !== false) {
        if (h12347.isSameType(h22348) !== false) {
            var if_res1143 = h12347.isKeysSubset(h22348);
        } else {
            var if_res1143 = raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-keys-subset?"), $rjs_core.UString.make("given hash tables do not use the same key comparison"), $rjs_core.UString.make("first table"), h12347, $rjs_core.UString.make("second table"), h22348));
        }
        var if_res1144 = if_res1143;
    } else {
        var if_res1144 = false;
    }
    return if_res1144;
};
var hash_union = function(h12349, h22350) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h12349.union(h22350);
};
var hash_strong_p = function(h2351) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return true;
};
var apply = function(lam2352) {
    var let_result1145 = values();
    var args2353 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(lam2352) !== false) {
        var if_res1146 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), lam2352, $rjs_core.UString.make(", at:"), 0);
        var if_res1146 = null;
    }
    if_res1146;
    var let_result1147 = values();
    if (zero_p(args2353.length) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1151 = null;
    } else {
        if (equal_p(args2353.length, 1) !== false) {
            if (null_p(args2353[0]) !== false) {
                var if_res1149 = rvoid();
            } else {
                if (M1.Core.Pair.check(args2353[0]) !== false) {
                    var if_res1148 = rvoid();
                } else {
                    throw M1.Core.racketContractError($rjs_core.UString.make("expected a"), M1.Core.Pair, $rjs_core.UString.make(", but given"), args2353[0]);
                    var if_res1148 = null;
                }
                var if_res1149 = if_res1148;
            }
            if_res1149;
            var if_res1150 = M1.Core.Pair.listToArray(args2353[0]);
        } else {
            var if_res1150 = args2353.concat(M1.Core.Pair.listToArray(args2353.pop()));
        }
        var if_res1151 = if_res1150;
    }
    var final_args2354 = if_res1151;
    return lam2352.apply(null, final_args2354);
};
var map = function(fn2355) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1152 = null;
    } else {
        var if_res1152 = rvoid();
    }
    if_res1152;
    var let_result1153 = values();
    var lists2356 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(fn2355) !== false) {
        var if_res1154 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn2355, $rjs_core.UString.make(", at:"), 0);
        var if_res1154 = null;
    }
    if_res1154;
    var let_result1155 = values();
    if (__lt__eq_(lists2356.length, 0) !== false) {
        var if_res1156 = error($rjs_core.PrimitiveSymbol.make("map"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res1156 = rvoid();
    }
    if_res1156;
    var let_result1157 = values();
    var lst_len2357 = length(lists2356[0]);
    var loop2358 = function(i2359) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i2359 < lists2356.length) !== false) {
            var v2360 = lists2356[i2359];
            if (eq_p(length(v2360), lst_len2357) !== false) {
                var if_res1158 = rvoid();
            } else {
                var if_res1158 = error($rjs_core.PrimitiveSymbol.make("map"), $rjs_core.UString.make("all input lists must have equal length"));
            }
            if_res1158;
            var if_res1159 = loop2358(i2359 + 1);
        } else {
            var if_res1159 = rvoid();
        }
        return if_res1159;
    };
    loop2358(1);
    var let_result1160 = values();
    var result2361 = Array(lst_len2357);
    var args2362 = Array(lists2356.length);
    var loop2363 = function(result_i2364) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((result_i2364 < lst_len2357) !== false) {
            var loop2365 = function(lst_j2366) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if ((lst_j2366 < lists2356.length) !== false) {
                    var lst2367 = lists2356[lst_j2366];
                    args2362[lst_j2366] = lst2367.hd;
                    lists2356[lst_j2366] = lst2367.tl;
                    var if_res1161 = loop2365(lst_j2366 + 1);
                } else {
                    var if_res1161 = rvoid();
                }
                return if_res1161;
            };
            loop2365(0);
            result2361[result_i2364] = fn2355.apply(null, args2362);
            var if_res1162 = loop2363(result_i2364 + 1);
        } else {
            var if_res1162 = rvoid();
        }
        return if_res1162;
    };
    loop2363(0);
    return M1.Core.Pair.listFromArray(result2361);
};
var foldl = function(fn2368, init2369) {
    if ((arguments.length < 2) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1163 = null;
    } else {
        var if_res1163 = rvoid();
    }
    if_res1163;
    var let_result1164 = values();
    var lists2370 = Array.prototype.slice.call(arguments, 2);
    if (procedure_p(fn2368) !== false) {
        var if_res1165 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn2368, $rjs_core.UString.make(", at:"), 0);
        var if_res1165 = null;
    }
    if_res1165;
    var let_result1166 = values();
    if (__lt__eq_(lists2370.length, 0) !== false) {
        var if_res1167 = error($rjs_core.PrimitiveSymbol.make("foldl"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res1167 = rvoid();
    }
    if_res1167;
    var let_result1168 = values();
    var lst_len2371 = length(lists2370[0]);
    var loop2372 = function(i2373) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i2373 < lists2370.length) !== false) {
            var v2374 = lists2370[i2373];
            if (eq_p(length(v2374), lst_len2371) !== false) {
                var if_res1169 = rvoid();
            } else {
                var if_res1169 = error($rjs_core.PrimitiveSymbol.make("foldl"), $rjs_core.UString.make("all input lists must have equal length"));
            }
            if_res1169;
            var if_res1170 = loop2372(i2373 + 1);
        } else {
            var if_res1170 = rvoid();
        }
        return if_res1170;
    };
    loop2372(1);
    var let_result1171 = values();
    var result2375 = init2369;
    var args2376 = Array(lists2370.length + 1);
    var loop2377 = function(result_i2378) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((result_i2378 < lst_len2371) !== false) {
            var loop2379 = function(lst_j2380) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if ((lst_j2380 < lists2370.length) !== false) {
                    var lst2381 = lists2370[lst_j2380];
                    args2376[lst_j2380] = lst2381.hd;
                    lists2370[lst_j2380] = lst2381.tl;
                    var if_res1172 = loop2379(lst_j2380 + 1);
                } else {
                    var if_res1172 = rvoid();
                }
                return if_res1172;
            };
            loop2379(0);
            args2376[lists2370.length] = result2375;
            result2375 = fn2368.apply(null, args2376);
            var if_res1173 = loop2377(result_i2378 + 1);
        } else {
            var if_res1173 = rvoid();
        }
        return if_res1173;
    };
    loop2377(0);
    return result2375;
};
var _foldr = function(fn2382, init2383, lists2384) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (null_p(lists2384[0]) !== false) {
        var if_res1175 = init2383;
    } else {
        var args2385 = Array(add1(lists2384.length));
        var loop2386 = function(ii2387) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((ii2387 < lists2384.length) !== false) {
                var lst2388 = lists2384[ii2387];
                args2385[ii2387] = lst2388.hd;
                lists2384[ii2387] = lst2388.tl;
                var if_res1174 = loop2386(ii2387 + 1);
            } else {
                var if_res1174 = rvoid();
            }
            return if_res1174;
        };
        loop2386(0);
        args2385[lists2384.length] = _foldr(fn2382, init2383, lists2384);
        var if_res1175 = fn2382.apply(null, args2385);
    }
    return if_res1175;
};
var foldr = function(fn2389, init2390) {
    if ((arguments.length < 2) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1176 = null;
    } else {
        var if_res1176 = rvoid();
    }
    if_res1176;
    var let_result1177 = values();
    var lists2391 = Array.prototype.slice.call(arguments, 2);
    if (procedure_p(fn2389) !== false) {
        var if_res1178 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn2389, $rjs_core.UString.make(", at:"), 0);
        var if_res1178 = null;
    }
    if_res1178;
    var let_result1179 = values();
    if (__lt__eq_(lists2391.length, 0) !== false) {
        var if_res1180 = error($rjs_core.PrimitiveSymbol.make("foldr"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res1180 = rvoid();
    }
    if_res1180;
    var let_result1181 = values();
    var lst_len2392 = length(lists2391[0]);
    var loop2393 = function(i2394) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i2394 < lists2391.length) !== false) {
            var v2395 = lists2391[i2394];
            if (eq_p(length(v2395), lst_len2392) !== false) {
                var if_res1182 = rvoid();
            } else {
                var if_res1182 = error($rjs_core.PrimitiveSymbol.make("foldr"), $rjs_core.UString.make("all input lists must have equal length"));
            }
            if_res1182;
            var if_res1183 = loop2393(i2394 + 1);
        } else {
            var if_res1183 = rvoid();
        }
        return if_res1183;
    };
    loop2393(1);
    return _foldr(fn2389, init2390, lists2391);
};
var cl1184 = function(end2396) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return range(0, end2396, 1);
};
var cl1185 = function(start2397, end2398) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (__lt_(start2397, end2398) !== false) {
        var if_res1188 = 1;
    } else {
        var if_res1188 = -1;
    }
    return range(start2397, end2398, if_res1188);
};
var cl1186 = function(start2399, end2400, step2401) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var result2402 = [];
    if ((__gt__eq_(step2401, 0) && __lt_(step2401, end2400)) !== false) {
        var loop2403 = function(i2404) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((i2404 < end2400) !== false) {
                result2402.push(i2404);
                var if_res1189 = loop2403(i2404 + step2401);
            } else {
                var if_res1189 = rvoid();
            }
            return if_res1189;
        };
        var if_res1192 = loop2403(start2399);
    } else {
        if ((__lt__eq_(step2401, 0) && __lt_(end2400, start2399)) !== false) {
            var loop2405 = function(i2406) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if ((i2406 < __(end2400)) !== false) {
                    result2402.push(__(i2406));
                    var if_res1190 = loop2405(i2406 + __(step2401));
                } else {
                    var if_res1190 = rvoid();
                }
                return if_res1190;
            };
            var if_res1191 = loop2405(__(start2399));
        } else {
            var if_res1191 = rvoid();
        }
        var if_res1192 = if_res1191;
    }
    if_res1192;
    return M1.Core.Pair.listFromArray(result2402);
};
var range = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1187 = {
        '1': cl1184,
        '2': cl1185,
        '3': cl1186
    } [arguments.length];
    if (fixed_lam1187 !== undefined) {
        return fixed_lam1187.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3]);
var remove = function(v2407, lst2408, proc2409) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(proc2409, undefined) !== false) {
        proc2409 = M1.Core.isEqual;
        var if_res1193 = null;
    } else {
        var if_res1193 = rvoid();
    }
    if_res1193;
    var loop2410 = function(result2411, lst2412) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst2412) !== false) {
            var if_res1195 = reverse(result2411);
        } else {
            if (proc2409(v2407, car(lst2412)) !== false) {
                var if_res1194 = append(reverse(result2411), cdr(lst2412));
            } else {
                var if_res1194 = rvoid();
            }
            if_res1194;
            var if_res1195 = loop2410(cons(car(lst2412), result2411), cdr(lst2412));
        }
        return if_res1195;
    };
    return loop2410($rjs_core.Pair.EMPTY, lst2408);
};
var filter = function(fn2413, lst2414) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2415 = function(result2416, lst2417) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst2417) !== false) {
            var if_res1197 = reverse(result2416);
        } else {
            if (fn2413(lst2417.hd) !== false) {
                var if_res1196 = loop2415(M1.Core.Pair.make(lst2417.hd, result2416), lst2417.tl);
            } else {
                var if_res1196 = loop2415(result2416, lst2417.tl);
            }
            var if_res1197 = if_res1196;
        }
        return if_res1197;
    };
    return loop2415($rjs_core.Pair.EMPTY, lst2414);
};
var ormap = function(fn2418) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1198 = null;
    } else {
        var if_res1198 = rvoid();
    }
    if_res1198;
    var let_result1199 = values();
    var lists2419 = Array.prototype.slice.call(arguments, 1);
    return foldl.apply(this, [function() {
        var args2420 = M1.Core.argumentsToArray(arguments);
        var final_arg2421 = args2420.pop();
        return (final_arg2421 || fn2418.apply(null, args2420)) && true;
    }, false].concat(lists2419));
};
var andmap = function(fn2422) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1200 = null;
    } else {
        var if_res1200 = rvoid();
    }
    if_res1200;
    var let_result1201 = values();
    var lists2423 = Array.prototype.slice.call(arguments, 1);
    return foldl.apply(this, [function() {
        var args2424 = M1.Core.argumentsToArray(arguments);
        var final_arg2425 = args2424.pop();
        return (final_arg2425 && fn2422.apply(null, args2424)) && true;
    }, true].concat(lists2423));
};
var member = function(v2426, lst2427) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2428 = function(lst2429) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst2429) !== false) {
            var if_res1203 = false;
        } else {
            if (M1.Core.isEqual(v2426, lst2429.hd) !== false) {
                var if_res1202 = lst2429;
            } else {
                var if_res1202 = loop2428(lst2429.tl);
            }
            var if_res1203 = if_res1202;
        }
        return if_res1203;
    };
    return loop2428(lst2427);
};
var compose = function() {
    var procs2430 = M1.Core.argumentsToArray(arguments);
    return function() {
        var let_result1204 = values();
        var result2431 = M1.Core.argumentsToArray(arguments);
        var procs_times_2432 = procs2430.reverse();
        var loop2433 = function(i2434) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((i2434 < procs_times_2432.length) !== false) {
                var p2435 = procs_times_2432[i2434];
                result2431 = p2435.apply(null, result2431);
                if (M1.Core.Values.check(result2431) !== false) {
                    result2431 = result2431.getAll();
                    var if_res1205 = null;
                } else {
                    result2431 = [result2431];
                    var if_res1205 = null;
                }
                if_res1205;
                var if_res1206 = loop2433(i2434 + 1);
            } else {
                var if_res1206 = rvoid();
            }
            return if_res1206;
        };
        loop2433(0);
        if ((result2431.length === 1) !== false) {
            var if_res1207 = result2431[0];
        } else {
            var if_res1207 = M1.Core.Values.make(result2431);
        }
        return if_res1207;
    };
};
var compose1 = function() {
    var procs2436 = M1.Core.argumentsToArray(arguments);
    return function(v2437) {
        var let_result1208 = values();
        var result2438 = v2437;
        var procs_times_2439 = procs2436.reverse();
        var loop2440 = function(i2441) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((i2441 < procs_times_2439.length) !== false) {
                var p2442 = procs_times_2439[i2441];
                result2438 = p2442(result2438);
                var if_res1209 = loop2440(i2441 + 1);
            } else {
                var if_res1209 = rvoid();
            }
            return if_res1209;
        };
        loop2440(0);
        return result2438;
    };
};
var list_ref = function(lst2443, pos2444) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2445 = function(i2446, lst2447) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst2447) !== false) {
            var if_res1211 = error($rjs_core.PrimitiveSymbol.make("list-ref?"), $rjs_core.UString.make("insufficient elements"));
        } else {
            if ((i2446 === pos2444) !== false) {
                var if_res1210 = lst2447.hd;
            } else {
                var if_res1210 = loop2445(i2446 + 1, lst2447.tl);
            }
            var if_res1211 = if_res1210;
        }
        return if_res1211;
    };
    return loop2445(0, lst2443);
};
var build_list = function(n2448, proc2449) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var arr2450 = Array(n2448);
    var loop2451 = function(i2452) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i2452 < n2448) !== false) {
            arr2450[i2452] = proc2449(i2452);
            var if_res1212 = loop2451(i2452 + 1);
        } else {
            var if_res1212 = rvoid();
        }
        return if_res1212;
    };
    loop2451(0);
    return M1.Core.Pair.listFromArray(arr2450);
};
var make_list = function(n2453, v2454) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2455 = function(result2456, i2457) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i2457 === n2453) !== false) {
            var if_res1213 = result2456;
        } else {
            var if_res1213 = loop2455(M1.Core.Pair.make(v2454, result2456), i2457 + 1);
        }
        return if_res1213;
    };
    return loop2455($rjs_core.Pair.EMPTY, 0);
};
var flatten = function(lst2458) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (null_p(lst2458) !== false) {
        var if_res1215 = lst2458;
    } else {
        if (pair_p(lst2458) !== false) {
            var if_res1214 = append(flatten(lst2458.hd), flatten(lst2458.tl));
        } else {
            var if_res1214 = list(lst2458);
        }
        var if_res1215 = if_res1214;
    }
    return if_res1215;
};
var assoc = function(k2459, lst2460) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2461 = function(lst2462) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst2462) !== false) {
            var if_res1217 = false;
        } else {
            if (M1.Core.isEqual(k2459, lst2462.hd.hd) !== false) {
                var if_res1216 = lst2462.hd;
            } else {
                var if_res1216 = loop2461(lst2462.tl);
            }
            var if_res1217 = if_res1216;
        }
        return if_res1217;
    };
    return loop2461(lst2460);
};
var memv = M1.Kernel.memv;
var memq = M1.Kernel.memq;
var memf = M1.Kernel.memf;
var findf = M1.Kernel.findf;
var assv = M1.Kernel.assv;
var assq = M1.Kernel.assq;
var assf = M1.Kernel.assf;
var alt_reverse = reverse;
var string = M1.Core.attachProcedureName(M1.Core.UString.makeMutableFromCharsVarArgs, $rjs_core.UString.make("string"));
var string_append = M1.Core.attachProcedureName(M1.Core.UString.stringAppend, $rjs_core.UString.make("string-append"));
var string_ref = function(s2463, i2464) {
    if (string_p(s2463) !== false) {
        var if_res1218 = rvoid();
    } else {
        var if_res1218 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-ref"), $rjs_core.UString.make("string?"), s2463));
    }
    if_res1218;
    if (exact_nonnegative_integer_p(i2464) !== false) {
        var if_res1219 = rvoid();
    } else {
        var if_res1219 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-ref"), $rjs_core.UString.make("exact-nonnegative-integer?"), i2464));
    }
    if_res1219;
    if (s2463.isValidIndex(i2464) !== false) {
        var if_res1220 = s2463.charAt(i2464);
    } else {
        var if_res1220 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("string-ref"), $rjs_core.UString.make("string"), s2463, s2463.length, i2464));
    }
    return if_res1220;
};
var string_eq__p = function(sa2465, sb2466) {
    if (string_p(sa2465) !== false) {
        var if_res1221 = rvoid();
    } else {
        var if_res1221 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string=?"), $rjs_core.UString.make("string?"), sa2465));
    }
    if_res1221;
    if (string_p(sb2466) !== false) {
        var if_res1222 = rvoid();
    } else {
        var if_res1222 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string=?"), $rjs_core.UString.make("string?"), sb2466));
    }
    if_res1222;
    return M1.Core.UString.eq(sa2465, sb2466);
};
var string_lt__p = function(sa2467, sb2468) {
    if (string_p(sa2467) !== false) {
        var if_res1223 = rvoid();
    } else {
        var if_res1223 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<?"), $rjs_core.UString.make("string?"), sa2467));
    }
    if_res1223;
    if (string_p(sb2468) !== false) {
        var if_res1224 = rvoid();
    } else {
        var if_res1224 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<?"), $rjs_core.UString.make("string?"), sb2468));
    }
    if_res1224;
    return M1.Core.UString.lt(sa2467, sb2468);
};
var string_lt__eq__p = function(sa2469, sb2470) {
    if (string_p(sa2469) !== false) {
        var if_res1225 = rvoid();
    } else {
        var if_res1225 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<=?"), $rjs_core.UString.make("string?"), sa2469));
    }
    if_res1225;
    if (string_p(sb2470) !== false) {
        var if_res1226 = rvoid();
    } else {
        var if_res1226 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<=?"), $rjs_core.UString.make("string?"), sb2470));
    }
    if_res1226;
    return M1.Core.UString.lte(sa2469, sb2470);
};
var string_gt__p = function(sa2471, sb2472) {
    if (string_p(sa2471) !== false) {
        var if_res1227 = rvoid();
    } else {
        var if_res1227 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>?"), $rjs_core.UString.make("string?"), sa2471));
    }
    if_res1227;
    if (string_p(sb2472) !== false) {
        var if_res1228 = rvoid();
    } else {
        var if_res1228 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>?"), $rjs_core.UString.make("string?"), sb2472));
    }
    if_res1228;
    return M1.Core.UString.gt(sa2471, sb2472);
};
var string_gt__eq__p = function(sa2473, sb2474) {
    if (string_p(sa2473) !== false) {
        var if_res1229 = rvoid();
    } else {
        var if_res1229 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>=?"), $rjs_core.UString.make("string?"), sa2473));
    }
    if_res1229;
    if (string_p(sb2474) !== false) {
        var if_res1230 = rvoid();
    } else {
        var if_res1230 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>=?"), $rjs_core.UString.make("string?"), sb2474));
    }
    if_res1230;
    return M1.Core.UString.gte(sa2473, sb2474);
};
var string_p = M1.Core.attachProcedureName(M1.Core.UString.check, $rjs_core.UString.make("string?"));
var fprintf = $rjs_core.attachProcedureArity(function(out2475, form2476, ...args24771231) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2477 = $rjs_core.Pair.listFromArray(args24771231);
    return apply(M1.Kernel.fprintf, print_as_expression(), out2475, form2476, args2477);
});
var eprintf = $rjs_core.attachProcedureArity(function(form2478, ...args24791232) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2479 = $rjs_core.Pair.listFromArray(args24791232);
    return apply(M1.Kernel.fprintf, print_as_expression(), current_error_port(), form2478, args2479);
});
var printf = $rjs_core.attachProcedureArity(function(form2480, ...args24811233) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2481 = $rjs_core.Pair.listFromArray(args24811233);
    return apply(M1.Kernel.fprintf, print_as_expression(), current_output_port(), form2480, args2481);
});
var format = $rjs_core.attachProcedureArity(function(form2482, ...args24831234) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2483 = $rjs_core.Pair.listFromArray(args24831234);
    var out2484 = open_output_string();
    apply(fprintf, out2484, form2482, args2483);
    return get_output_string(out2484);
});
var symbol_p = M1.Core.PrimitiveSymbol.check;
var keyword_p = M1.Core.Keyword.check;
var make_string2485 = function(k22486, c12487) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var k2488 = k22486;
    if (false !== false) {
        var if_res1235 = $rjs_core.Char.charFromCodepoint(0);
    } else {
        var if_res1235 = c12487;
    }
    var c2489 = if_res1235;
    return M1.Core.UString.repeatChar(k2488, c2489);
};
var cl1236 = function(k2490) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_string2485(k2490, $rjs_core.Char.charFromCodepoint(0));
};
var cl1237 = function(k2491, c12492) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_string2485(k2491, c12492);
};
var make_string = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1238 = {
        '1': cl1236,
        '2': cl1237
    } [arguments.length];
    if (fixed_lam1238 !== undefined) {
        return fixed_lam1238.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var list__gt_string = function(lst2493) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Kernel.listToString(lst2493);
};
var string__gt_list2494 = function(str32495) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(str32495, M4.unsafe_undefined) !== false) {
        var if_res1239 = string_p;
    } else {
        var if_res1239 = str32495;
    }
    var str2496 = if_res1239;
    return M1.Core.Pair.listFromArray(M1.Core.UString.toArray(str2496));
};
var cl1240 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_list2494(M4.unsafe_undefined);
};
var cl1241 = function(str32497) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_list2494(str32497);
};
var string__gt_list = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1242 = {
        '0': cl1240,
        '1': cl1241
    } [arguments.length];
    if (fixed_lam1242 !== undefined) {
        return fixed_lam1242.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var string__gt_immutable_string2498 = function(s42499) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(s42499, M4.unsafe_undefined) !== false) {
        var if_res1243 = string_p;
    } else {
        var if_res1243 = s42499;
    }
    var s2500 = if_res1243;
    return M1.Core.UString.stringToImmutableString(s2500);
};
var cl1244 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_immutable_string2498(M4.unsafe_undefined);
};
var cl1245 = function(s42501) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_immutable_string2498(s42501);
};
var string__gt_immutable_string = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1246 = {
        '0': cl1244,
        '1': cl1245
    } [arguments.length];
    if (fixed_lam1246 !== undefined) {
        return fixed_lam1246.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var symbol__gt_string = function(v2502) {
    if (symbol_p(v2502) !== false) {
        var if_res1247 = rvoid();
    } else {
        var if_res1247 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("symbol->string"), $rjs_core.UString.make("symbol?"), v2502));
    }
    if_res1247;
    return M1.Core.UString.makeMutable(v2502.toString());
};
var string__gt_symbol = function(s2503) {
    if (string_p(s2503) !== false) {
        var if_res1248 = rvoid();
    } else {
        var if_res1248 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->symbol"), $rjs_core.UString.make("string?"), s2503));
    }
    if_res1248;
    return M1.Core.PrimitiveSymbol.make(s2503);
};
var string__gt_uninterned_symbol = function(s2504) {
    if (string_p(s2504) !== false) {
        var if_res1249 = rvoid();
    } else {
        var if_res1249 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->uninterned-symbol"), $rjs_core.UString.make("string?"), s2504));
    }
    if_res1249;
    return M1.Core.PrimitiveSymbol.makeUninterned(s2504);
};
var string__gt_unreadable_symbol = function(s2505) {
    if (string_p(s2505) !== false) {
        var if_res1250 = rvoid();
    } else {
        var if_res1250 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->unreadable-symbol"), $rjs_core.UString.make("string?"), s2505));
    }
    if_res1250;
    return M1.Core.PrimitiveSymbol.make(s2505);
};
var string__gt_number2506 = function(s62507, radix52508) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var s2509 = s62507;
    if (false !== false) {
        var if_res1251 = 10;
    } else {
        var if_res1251 = radix52508;
    }
    var radix2510 = if_res1251;
    var integer_in2511 = function(lo2512, hi2513) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return function(v2514) {
            return (exact_integer_p(v2514) && __gt__eq_(v2514, 2)) && __lt__eq_(v2514, 16);
        };
    };
    if (string_p(s2509) !== false) {
        var if_res1252 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("string?"), $rjs_core.UString.make(", given:"), s2509, $rjs_core.UString.make(", at:"), 0);
        var if_res1252 = null;
    }
    if_res1252;
    var let_result1253 = values();
    if (integer_in2511(2, 16)(radix2510) !== false) {
        var if_res1254 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("(integer-in 2 16)"), $rjs_core.UString.make(", given:"), radix2510, $rjs_core.UString.make(", at:"), 1);
        var if_res1254 = null;
    }
    if_res1254;
    var let_result1255 = values();
    var js_string__gt_number2515 = function() {
        if (arguments.length !== 0) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var result2516 = parseInt(s2509, radix2510);
        if ((isNaN(result2516) || not(s2509.isValidInteger(radix2510))) !== false) {
            var if_res1256 = false;
        } else {
            var if_res1256 = result2516;
        }
        return if_res1256;
    };
    return js_string__gt_number2515();
};
var cl1257 = function(s2518) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_number2506(s2518, 10);
};
var cl1258 = function(s2519, radix52520) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_number2506(s2519, radix52520);
};
var string__gt_number = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1259 = {
        '1': cl1257,
        '2': cl1258
    } [arguments.length];
    if (fixed_lam1259 !== undefined) {
        return fixed_lam1259.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var symbol_interned_p = function(sym2521) {
    if (symbol_p(sym2521) !== false) {
        var if_res1260 = rvoid();
    } else {
        var if_res1260 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("symbol-interned?"), $rjs_core.UString.make("symbol?"), sym2521));
    }
    if_res1260;
    return M1.Core.PrimitiveSymbol.isInterned(sym2521);
};
var symbol_eq__p = function(s2522, v2523) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s2522.equals(v2523);
};
var symbol_lt__p = function(s2524, v2525) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s2524.lt(v2525);
};
var keyword_lt__p = function(s2526, v2527) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s2526.lt(v2527);
};
var string_length = function(s2528) {
    if (string_p(s2528) !== false) {
        var if_res1261 = rvoid();
    } else {
        var if_res1261 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-length"), $rjs_core.UString.make("string?"), s2528));
    }
    if_res1261;
    return s2528.length;
};
var string_downcase = function(s2529) {
    if (string_p(s2529) !== false) {
        var if_res1262 = rvoid();
    } else {
        var if_res1262 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-downcase"), $rjs_core.UString.make("string?"), s2529));
    }
    if_res1262;
    return s2529.toLowerCase();
};
var string_upcase = function(s2530) {
    if (string_p(s2530) !== false) {
        var if_res1263 = rvoid();
    } else {
        var if_res1263 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-upcase"), $rjs_core.UString.make("string?"), s2530));
    }
    if_res1263;
    return s2530.toUpperCase();
};
var substring2531 = function(str82532, start92533, end72534) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var str2535 = str82532;
    var start2536 = start92533;
    if (false !== false) {
        var if_res1264 = false;
    } else {
        var if_res1264 = end72534;
    }
    var end2537 = if_res1264;
    if (not(M1.Core.UString.check(str2535)) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("expected a string"));
        var if_res1268 = null;
    } else {
        if ((start2536 < 0) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("invalid start index"));
            var if_res1267 = null;
        } else {
            if (((end2537 !== false) && (((end2537 < 0) || (end2537 > str2535.length)) || (end2537 < start2536))) !== false) {
                throw M1.Core.racketContractError($rjs_core.UString.make("invalid end index"));
                var if_res1266 = null;
            } else {
                if ((end2537 === false) !== false) {
                    end2537 = str2535.length;
                    var if_res1265 = null;
                } else {
                    var if_res1265 = rvoid();
                }
                var if_res1266 = if_res1265;
            }
            var if_res1267 = if_res1266;
        }
        var if_res1268 = if_res1267;
    }
    if_res1268;
    return str2535.substring(start2536, end2537);
};
var cl1269 = function(str2538, start2539) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return substring2531(str2538, start2539, false);
};
var cl1270 = function(str2540, start2541, end72542) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return substring2531(str2540, start2541, end72542);
};
var substring = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1271 = {
        '2': cl1269,
        '3': cl1270
    } [arguments.length];
    if (fixed_lam1271 !== undefined) {
        return fixed_lam1271.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var string_split = function(str2543, sep2544) {
    if (string_p(str2543) !== false) {
        var if_res1272 = rvoid();
    } else {
        var if_res1272 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-split"), $rjs_core.UString.make("string?"), str2543));
    }
    if_res1272;
    if ((function(v2545) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return string_p(v2545) || regexp_p(v2545);
        })(sep2544) !== false) {
        var if_res1273 = rvoid();
    } else {
        var if_res1273 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-split"), $rjs_core.UString.make("(check/or string? regexp?)"), sep2544));
    }
    if_res1273;
    return M1.Core.Pair.listFromArray(str2543.split(sep2544));
};
var string_set_bang_ = function(str2546, k2547, char2548) {
    if ((function(v2549) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return string_p(v2549) && (function(v2550) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return not(immutable_p(v2550));
            })(v2549);
        })(str2546) !== false) {
        var if_res1274 = rvoid();
    } else {
        var if_res1274 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("(check/and string? (check/not immutable?))"), str2546));
    }
    if_res1274;
    if (exact_nonnegative_integer_p(k2547) !== false) {
        var if_res1275 = rvoid();
    } else {
        var if_res1275 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("exact-nonnegative-integer?"), k2547));
    }
    if_res1275;
    if (char_p(char2548) !== false) {
        var if_res1276 = rvoid();
    } else {
        var if_res1276 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("char?"), char2548));
    }
    if_res1276;
    if (str2546.isValidIndex(k2547) !== false) {
        var if_res1277 = str2546.setCharAt(k2547, char2548);
    } else {
        var if_res1277 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("string-set!"), $rjs_core.UString.make("string"), str2546, str2546.length, k2547));
    }
    return if_res1277;
};
var char_p = function(c2551) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Char.check(c2551);
};
var char__gt_integer = function(c2552) {
    if (char_p(c2552) !== false) {
        var if_res1278 = rvoid();
    } else {
        var if_res1278 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char->integer"), $rjs_core.UString.make("char?"), c2552));
    }
    if_res1278;
    return M1.Core.Char.charToInteger(c2552);
};
var integer__gt_char = function(k2553) {
    if (exact_nonnegative_integer_p(k2553) !== false) {
        var if_res1279 = rvoid();
    } else {
        var if_res1279 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("integer->char"), $rjs_core.UString.make("exact-nonnegative-integer?"), k2553));
    }
    if_res1279;
    return M1.Core.Char.integerToChar(k2553);
};
var char_utf_8_length = function(c2554) {
    if (char_p(c2554) !== false) {
        var if_res1280 = rvoid();
    } else {
        var if_res1280 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-utf-8-length"), $rjs_core.UString.make("char?"), c2554));
    }
    if_res1280;
    return M1.Core.Char.charUtf8Length(c2554);
};
var char_upcase = function(c2555) {
    if (char_p(c2555) !== false) {
        var if_res1281 = rvoid();
    } else {
        var if_res1281 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-upcase"), $rjs_core.UString.make("char?"), c2555));
    }
    if_res1281;
    return M1.Core.Char.upcase(c2555);
};
var char_downcase = function(c2556) {
    if (char_p(c2556) !== false) {
        var if_res1282 = rvoid();
    } else {
        var if_res1282 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-downcase"), $rjs_core.UString.make("char?"), c2556));
    }
    if_res1282;
    return M1.Core.Char.downcase(c2556);
};
var char_alphabetic_p = function(c2557) {
    if (char_p(c2557) !== false) {
        var if_res1283 = rvoid();
    } else {
        var if_res1283 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-alphabetic?"), $rjs_core.UString.make("char?"), c2557));
    }
    if_res1283;
    return M1.Core.Char.isAlphabetic(c2557);
};
var char_lower_case_p = function(c2558) {
    if (char_p(c2558) !== false) {
        var if_res1284 = rvoid();
    } else {
        var if_res1284 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-lower-case?"), $rjs_core.UString.make("char?"), c2558));
    }
    if_res1284;
    return M1.Core.Char.isLowerCase(c2558);
};
var char_upper_case_p = function(c2559) {
    if (char_p(c2559) !== false) {
        var if_res1285 = rvoid();
    } else {
        var if_res1285 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-upper-case?"), $rjs_core.UString.make("char?"), c2559));
    }
    if_res1285;
    return M1.Core.Char.isUpperCase(c2559);
};
var char_title_case_p = function(c2560) {
    if (char_p(c2560) !== false) {
        var if_res1286 = rvoid();
    } else {
        var if_res1286 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-title-case?"), $rjs_core.UString.make("char?"), c2560));
    }
    if_res1286;
    return M1.Core.Char.isTitleCase(c2560);
};
var char_numeric_p = function(c2561) {
    if (char_p(c2561) !== false) {
        var if_res1287 = rvoid();
    } else {
        var if_res1287 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-numeric?"), $rjs_core.UString.make("char?"), c2561));
    }
    if_res1287;
    return M1.Core.Char.isNumeric(c2561);
};
var char_symbolic_p = function(c2562) {
    if (char_p(c2562) !== false) {
        var if_res1288 = rvoid();
    } else {
        var if_res1288 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-symbolic?"), $rjs_core.UString.make("char?"), c2562));
    }
    if_res1288;
    return M1.Core.Char.isSymbolic(c2562);
};
var char_punctuation_p = function(c2563) {
    if (char_p(c2563) !== false) {
        var if_res1289 = rvoid();
    } else {
        var if_res1289 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-punctuation?"), $rjs_core.UString.make("char?"), c2563));
    }
    if_res1289;
    return M1.Core.Char.isPunctuation(c2563);
};
var char_graphic_p = function(c2564) {
    if (char_p(c2564) !== false) {
        var if_res1290 = rvoid();
    } else {
        var if_res1290 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-graphic?"), $rjs_core.UString.make("char?"), c2564));
    }
    if_res1290;
    return M1.Core.Char.isGraphic(c2564);
};
var char_whitespace_p = function(c2565) {
    if (char_p(c2565) !== false) {
        var if_res1291 = rvoid();
    } else {
        var if_res1291 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-whitespace?"), $rjs_core.UString.make("char?"), c2565));
    }
    if_res1291;
    return M1.Core.Char.isWhitespace(c2565);
};
var char_blank_p = function(c2566) {
    if (char_p(c2566) !== false) {
        var if_res1292 = rvoid();
    } else {
        var if_res1292 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-blank?"), $rjs_core.UString.make("char?"), c2566));
    }
    if_res1292;
    return M1.Core.Char.isBlank(c2566);
};
var char_iso_control_p = function(c2567) {
    if (char_p(c2567) !== false) {
        var if_res1293 = rvoid();
    } else {
        var if_res1293 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-iso-control?"), $rjs_core.UString.make("char?"), c2567));
    }
    if_res1293;
    return M1.Core.Char.isIsoControl(c2567);
};
var char_lt__p = function(a2568, b2569) {
    if (char_p(a2568) !== false) {
        var if_res1294 = rvoid();
    } else {
        var if_res1294 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<?"), $rjs_core.UString.make("char?"), a2568));
    }
    if_res1294;
    if (char_p(b2569) !== false) {
        var if_res1295 = rvoid();
    } else {
        var if_res1295 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<?"), $rjs_core.UString.make("char?"), b2569));
    }
    if_res1295;
    return a2568 < b2569;
};
var char_lt__eq__p = function(a2570, b2571) {
    if (char_p(a2570) !== false) {
        var if_res1296 = rvoid();
    } else {
        var if_res1296 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<=?"), $rjs_core.UString.make("char?"), a2570));
    }
    if_res1296;
    if (char_p(b2571) !== false) {
        var if_res1297 = rvoid();
    } else {
        var if_res1297 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<=?"), $rjs_core.UString.make("char?"), b2571));
    }
    if_res1297;
    return a2570 <= b2571;
};
var char_gt__p = function(a2572, b2573) {
    if (char_p(a2572) !== false) {
        var if_res1298 = rvoid();
    } else {
        var if_res1298 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>?"), $rjs_core.UString.make("char?"), a2572));
    }
    if_res1298;
    if (char_p(b2573) !== false) {
        var if_res1299 = rvoid();
    } else {
        var if_res1299 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>?"), $rjs_core.UString.make("char?"), b2573));
    }
    if_res1299;
    return a2572 > b2573;
};
var char_gt__eq__p = function(a2574, b2575) {
    if (char_p(a2574) !== false) {
        var if_res1300 = rvoid();
    } else {
        var if_res1300 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>=?"), $rjs_core.UString.make("char?"), a2574));
    }
    if_res1300;
    if (char_p(b2575) !== false) {
        var if_res1301 = rvoid();
    } else {
        var if_res1301 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>=?"), $rjs_core.UString.make("char?"), b2575));
    }
    if_res1301;
    return a2574 >= b2575;
};
var char_eq__p = function(a2576, b2577) {
    if (char_p(a2576) !== false) {
        var if_res1302 = rvoid();
    } else {
        var if_res1302 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char=?"), $rjs_core.UString.make("char?"), a2576));
    }
    if_res1302;
    if (char_p(b2577) !== false) {
        var if_res1303 = rvoid();
    } else {
        var if_res1303 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char=?"), $rjs_core.UString.make("char?"), b2577));
    }
    if_res1303;
    return M1.Core.Char.eq(a2576, b2577);
};
var box = M1.Core.Box.make;
var unbox = function(v2578) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2578.get();
};
var set_box_bang_ = function(b2579, v2580) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b2579.set(v2580);
};
var box_p = M1.Core.Box.check;
var box_cas_bang_ = function(loc2581, old2582, new2583) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (eq_p(old2582, unbox(loc2581)) && set_box_bang_(loc2581, new2583)) && true;
};
var box_immutable = M1.Core.Box.make;
var make_weak_box = M1.Core.Box.make;
var weak_box_value = function(v2584) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2584.get();
};
var set_box_times__bang_ = function(b2585, v2586) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b2585.set(v2586);
};
var unbox_times_ = function(v2587) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2587.get();
};
var let_result1304 = M1.Core.Struct.makeStructTypeProperty({
    'name': $rjs_core.UString.make("prop:evt")
});
var prop_evt = let_result1304.getAt(0);
var evt_p = let_result1304.getAt(1);
var prop_checked_procedure = make_struct_type_property($rjs_core.UString.make("prop:checked-procedure")).getAt(0);
var prop_impersonator_of = make_struct_type_property($rjs_core.UString.make("prop:impersonator-of")).getAt(0);
var prop_arity_string = make_struct_type_property($rjs_core.UString.make("prop:arity-string")).getAt(0);
var prop_incomplete_arity = make_struct_type_property($rjs_core.UString.make("prop:incomplete-arity")).getAt(0);
var prop_method_arity_error = make_struct_type_property($rjs_core.UString.make("prop:method-arity-error")).getAt(0);
var prop_exn_srclocs = make_struct_type_property($rjs_core.UString.make("prop:exn:srclocs")).getAt(0);
var prop_authentic = make_struct_type_property($rjs_core.UString.make("prop:authentic")).getAt(0);
var prop_serialize = make_struct_type_property($rjs_core.UString.make("prop:serialize")).getAt(0);
var prop_custom_write = make_struct_type_property($rjs_core.UString.make("prop:custom-write")).getAt(0);
var prop_sealed = make_struct_type_property($rjs_core.UString.make("prop:sealed")).getAt(0);
var prop_object_name = make_struct_type_property($rjs_core.UString.make("prop:object-name")).getAt(0);
var prop_procedure = M1.Core.Struct.propProcedure;
var prop_equal_plus_hash = M1.Core.Struct.propEqualHash;
var equal_hash_code = function(v2588) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return 0;
};
var equal_secondary_hash_code = function(v2589) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return 1;
};
var error = M1.Kernel.error;
var raise_argument_error = M1.Kernel.argerror;
var raise_arguments_error = M1.Kernel.argserror;
var raise_result_error = M1.Kernel.resulterror;
var raise_mismatch_error = M1.Kernel.mismatcherror;
var bytes_p = function(bs2590) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Bytes.check(bs2590);
};
var make_bytes2591 = function(len112592, b102593) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var len2594 = len112592;
    if (false !== false) {
        var if_res1305 = 0;
    } else {
        var if_res1305 = b102593;
    }
    var b2595 = if_res1305;
    return M1.Core.Bytes.make(len2594, b2595);
};
var cl1306 = function(len2596) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_bytes2591(len2596, 0);
};
var cl1307 = function(len2597, b102598) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_bytes2591(len2597, b102598);
};
var make_bytes = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1308 = {
        '1': cl1306,
        '2': cl1307
    } [arguments.length];
    if (fixed_lam1308 !== undefined) {
        return fixed_lam1308.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var bytes_ref = function(bs2599, i2600) {
    if (bytes_p(bs2599) !== false) {
        var if_res1309 = rvoid();
    } else {
        var if_res1309 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-ref"), $rjs_core.UString.make("bytes?"), bs2599));
    }
    if_res1309;
    if (integer_p(i2600) !== false) {
        var if_res1310 = rvoid();
    } else {
        var if_res1310 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-ref"), $rjs_core.UString.make("integer?"), i2600));
    }
    if_res1310;
    if ((__lt_(i2600, 0) || __gt_(i2600, bs2599.length)) !== false) {
        var if_res1311 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("bytes-ref"), $rjs_core.UString.make("byte string"), bs2599, bs2599.length, i2600));
    } else {
        var if_res1311 = M1.Core.Bytes.ref(bs2599, i2600);
    }
    return if_res1311;
};
var bytes_set_bang_ = function(bs2601, i2602, b2603) {
    if (bytes_p(bs2601) !== false) {
        var if_res1312 = rvoid();
    } else {
        var if_res1312 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("bytes?"), bs2601));
    }
    if_res1312;
    if (integer_p(i2602) !== false) {
        var if_res1313 = rvoid();
    } else {
        var if_res1313 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("integer?"), i2602));
    }
    if_res1313;
    if (integer_p(b2603) !== false) {
        var if_res1314 = rvoid();
    } else {
        var if_res1314 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("integer?"), b2603));
    }
    if_res1314;
    if ((__lt_(i2602, 0) || __gt_(i2602, bs2601.length)) !== false) {
        var if_res1315 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("bytes-set!"), $rjs_core.UString.make("byte string"), bs2601, bs2601.length, i2602));
    } else {
        var if_res1315 = M1.Core.Bytes.set(bs2601, i2602, b2603);
    }
    return if_res1315;
};
var bytes_append = function() {
    var bss2604 = M1.Core.argumentsToArray(arguments);
    return M1.Core.Bytes.append(bss2604);
};
var bytes__gt_string_by_utf_8 = function(bs2605) {
    if (bytes_p(bs2605) !== false) {
        var if_res1316 = rvoid();
    } else {
        var if_res1316 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes->string/utf-8"), $rjs_core.UString.make("bytes?"), bs2605));
    }
    if_res1316;
    return M1.Core.UString.fromBytesUtf8(bs2605);
};
var bytes__gt_string_by_latin_1 = function(bs2606) {
    if (bytes_p(bs2606) !== false) {
        var if_res1317 = rvoid();
    } else {
        var if_res1317 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes->string/latin-1"), $rjs_core.UString.make("bytes?"), bs2606));
    }
    if_res1317;
    return M1.Core.UString.fromBytesLatin1(bs2606);
};
var string__gt_bytes_by_utf_8 = function(str2607) {
    if (string_p(str2607) !== false) {
        var if_res1318 = rvoid();
    } else {
        var if_res1318 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->bytes/utf-8"), $rjs_core.UString.make("string?"), str2607));
    }
    if_res1318;
    return M1.Core.UString.toBytesUtf8(str2607);
};
var string__gt_bytes_by_locale2608 = function(str152609, err_byte122610, start132611, end142612) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var str2613 = str152609;
    if (false !== false) {
        var if_res1319 = true;
    } else {
        var if_res1319 = err_byte122610;
    }
    var err_byte2614 = if_res1319;
    if (false !== false) {
        var if_res1320 = 0;
    } else {
        var if_res1320 = start132611;
    }
    var start2615 = if_res1320;
    if (false !== false) {
        var if_res1321 = 0;
    } else {
        var if_res1321 = end142612;
    }
    var end2616 = if_res1321;
    return M1.Core.UString.toBytesUtf8(str2613);
};
var cl1322 = function(str2617) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale2608(str2617, true, 0, 0);
};
var cl1323 = function(str2618, err_byte2619, start2620, end142621) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale2608(str2618, err_byte2619, start2620, end142621);
};
var cl1324 = function(str2622, err_byte2623, start132624) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale2608(str2622, err_byte2623, start132624, 0);
};
var cl1325 = function(str2625, err_byte122626) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale2608(str2625, err_byte122626, 0, 0);
};
var string__gt_bytes_by_locale = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1326 = {
        '1': cl1322,
        '4': cl1323,
        '3': cl1324,
        '2': cl1325
    } [arguments.length];
    if (fixed_lam1326 !== undefined) {
        return fixed_lam1326.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3, 4]);
var bytes_eq__p = function(bstr12627, bstr22628) {
    if (bytes_p(bstr12627) !== false) {
        var if_res1327 = rvoid();
    } else {
        var if_res1327 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes=?"), $rjs_core.UString.make("bytes?"), bstr12627));
    }
    if_res1327;
    if (bytes_p(bstr22628) !== false) {
        var if_res1328 = rvoid();
    } else {
        var if_res1328 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes=?"), $rjs_core.UString.make("bytes?"), bstr22628));
    }
    if_res1328;
    return M1.Core.Bytes.eq(bstr12627, bstr22628);
};
var bytes_lt__p = function(bstr12629, bstr22630) {
    if (bytes_p(bstr12629) !== false) {
        var if_res1329 = rvoid();
    } else {
        var if_res1329 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes<?"), $rjs_core.UString.make("bytes?"), bstr12629));
    }
    if_res1329;
    if (bytes_p(bstr22630) !== false) {
        var if_res1330 = rvoid();
    } else {
        var if_res1330 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes<?"), $rjs_core.UString.make("bytes?"), bstr22630));
    }
    if_res1330;
    return M1.Core.Bytes.lt(bstr12629, bstr22630);
};
var bytes_gt__p = function(bstr12631, bstr22632) {
    if (bytes_p(bstr12631) !== false) {
        var if_res1331 = rvoid();
    } else {
        var if_res1331 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes>?"), $rjs_core.UString.make("bytes?"), bstr12631));
    }
    if_res1331;
    if (bytes_p(bstr22632) !== false) {
        var if_res1332 = rvoid();
    } else {
        var if_res1332 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes>?"), $rjs_core.UString.make("bytes?"), bstr22632));
    }
    if_res1332;
    return M1.Core.Bytes.gt(bstr12631, bstr22632);
};
var bytes_length = function(bs2633) {
    if (bytes_p(bs2633) !== false) {
        var if_res1333 = rvoid();
    } else {
        var if_res1333 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-length"), $rjs_core.UString.make("bytes?"), bs2633));
    }
    if_res1333;
    return bs2633.length;
};
var current_continuation_marks = M1.Core.Marks.getContinuationMarks;
var continuation_mark_set__gt_list = M1.Core.Marks.getMarks;
var continuation_mark_set_first = function(mark_set2634, key_v2635, none_v2636, prompt_tag2637) {
    var let_result1334 = values();
    var mark_set2638 = mark_set2638 || M1.Core.Marks.getContinuationMarks(prompt_tag2637);
    var marks2639 = M1.Core.Marks.getMarks(mark_set2638, key_v2635, prompt_tag2637);
    if (null_p(marks2639) !== false) {
        var if_res1335 = none_v2636;
    } else {
        var if_res1335 = marks2639.hd;
    }
    return if_res1335;
};
var make_parameter = M1.Paramz.makeParameter;
var call_with_continuation_prompt = M1.Core.Marks.callWithContinuationPrompt;
var abort_current_continuation = function(prompt_tag2640) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1336 = null;
    } else {
        var if_res1336 = rvoid();
    }
    if_res1336;
    var let_result1337 = values();
    var args2641 = Array.prototype.slice.call(arguments, 1);
    throw new M1.Core.Marks.AbortCurrentContinuation(prompt_tag2640, args2641);
    return null;
};
var make_continuation_prompt_tag = M1.Core.Marks.makeContinuationPromptTag;
var default_continuation_prompt_tag = M1.Core.Marks.defaultContinuationPromptTag;
var raise = M1.Kernel.doraise;
var exn_fail_p = M1.Core.isErr;
var exn_fail_contract_p = M1.Core.isContractErr;
var exn_fail_contract_arity_p = M1.Core.isContractErr;
var exn_message = function(e2642) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.UString.makeMutable(M1.Core.errMsg(e2642));
};
var current_output_port = make_parameter(M1.Core.Ports.standardOutputPort);
var current_input_port = make_parameter(M1.Core.Ports.standardInputPort);
var current_error_port = make_parameter(M1.Core.Ports.standardErrorPort);
var current_print = make_parameter(function(p2643) {
    if (void_p(p2643) !== false) {
        var if_res1338 = rvoid();
    } else {
        print(p2643);
        var if_res1338 = newline();
    }
    return if_res1338;
});
var port_p = function(p2644) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.check(p2644);
};
var input_port_p = function(p2645) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.isInputPort(p2645);
};
var output_port_p = function(p2646) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.isOutputPort(p2646);
};
var string_port_p = function(p2647) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.isStringPort(p2647);
};
var open_output_string = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.openOutputString();
};
var get_output_string = function(p2648) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.getOutputString(p2648);
};
var print_as_expression = make_parameter(true);
var display2649 = function(datum172650, out162651) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2652 = datum172650;
    if (eq_p(out162651, M4.unsafe_undefined) !== false) {
        var if_res1339 = current_output_port();
    } else {
        var if_res1339 = out162651;
    }
    var out2653 = if_res1339;
    return M1.Core.display(out2653, datum2652);
};
var cl1340 = function(datum2654) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return display2649(datum2654, M4.unsafe_undefined);
};
var cl1341 = function(datum2655, out162656) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return display2649(datum2655, out162656);
};
var display = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1342 = {
        '1': cl1340,
        '2': cl1341
    } [arguments.length];
    if (fixed_lam1342 !== undefined) {
        return fixed_lam1342.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var displayln2657 = function(datum192658, out182659) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2660 = datum192658;
    if (eq_p(out182659, M4.unsafe_undefined) !== false) {
        var if_res1343 = current_output_port();
    } else {
        var if_res1343 = out182659;
    }
    var out2661 = if_res1343;
    display(datum2660, out2661);
    return newline(out2661);
};
var cl1344 = function(datum2662) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return displayln2657(datum2662, M4.unsafe_undefined);
};
var cl1345 = function(datum2663, out182664) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return displayln2657(datum2663, out182664);
};
var displayln = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1346 = {
        '1': cl1344,
        '2': cl1345
    } [arguments.length];
    if (fixed_lam1346 !== undefined) {
        return fixed_lam1346.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var write2665 = function(datum212666, out202667) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2668 = datum212666;
    if (eq_p(out202667, M4.unsafe_undefined) !== false) {
        var if_res1347 = current_output_port();
    } else {
        var if_res1347 = out202667;
    }
    var out2669 = if_res1347;
    return M1.Core.write(out2669, datum2668);
};
var cl1348 = function(datum2670) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return write2665(datum2670, M4.unsafe_undefined);
};
var cl1349 = function(datum2671, out202672) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return write2665(datum2671, out202672);
};
var write = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1350 = {
        '1': cl1348,
        '2': cl1349
    } [arguments.length];
    if (fixed_lam1350 !== undefined) {
        return fixed_lam1350.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var writeln2673 = function(datum232674, out222675) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2676 = datum232674;
    if (eq_p(out222675, M4.unsafe_undefined) !== false) {
        var if_res1351 = current_output_port();
    } else {
        var if_res1351 = out222675;
    }
    var out2677 = if_res1351;
    write(datum2676, out2677);
    return newline(out2677);
};
var cl1352 = function(datum2678) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return writeln2673(datum2678, M4.unsafe_undefined);
};
var cl1353 = function(datum2679, out222680) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return writeln2673(datum2679, out222680);
};
var writeln = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1354 = {
        '1': cl1352,
        '2': cl1353
    } [arguments.length];
    if (fixed_lam1354 !== undefined) {
        return fixed_lam1354.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var print2681 = function(datum262682, out242683, quote_depth252684) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2685 = datum262682;
    if (eq_p(out242683, M4.unsafe_undefined) !== false) {
        var if_res1355 = current_output_port();
    } else {
        var if_res1355 = out242683;
    }
    var out2686 = if_res1355;
    if (false !== false) {
        var if_res1356 = 0;
    } else {
        var if_res1356 = quote_depth252684;
    }
    var quote_depth2687 = if_res1356;
    return M1.Core.print(out2686, datum2685, print_as_expression(), quote_depth2687);
};
var cl1357 = function(datum2688) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return print2681(datum2688, M4.unsafe_undefined, 0);
};
var cl1358 = function(datum2689, out2690, quote_depth252691) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return print2681(datum2689, out2690, quote_depth252691);
};
var cl1359 = function(datum2692, out242693) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return print2681(datum2692, out242693, 0);
};
var print = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1360 = {
        '1': cl1357,
        '3': cl1358,
        '2': cl1359
    } [arguments.length];
    if (fixed_lam1360 !== undefined) {
        return fixed_lam1360.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3]);
var println2694 = function(datum282695, out272696) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2697 = datum282695;
    if (eq_p(out272696, M4.unsafe_undefined) !== false) {
        var if_res1361 = current_output_port();
    } else {
        var if_res1361 = out272696;
    }
    var out2698 = if_res1361;
    print(datum2697, out2698);
    return newline(out2698);
};
var cl1362 = function(datum2699) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return println2694(datum2699, M4.unsafe_undefined);
};
var cl1363 = function(datum2700, out272701) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return println2694(datum2700, out272701);
};
var println = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1364 = {
        '1': cl1362,
        '2': cl1363
    } [arguments.length];
    if (fixed_lam1364 !== undefined) {
        return fixed_lam1364.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var newline2702 = function(out292703) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(out292703, M4.unsafe_undefined) !== false) {
        var if_res1365 = current_output_port();
    } else {
        var if_res1365 = out292703;
    }
    var out2704 = if_res1365;
    return display($rjs_core.UString.make("\n"), out2704);
};
var cl1366 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return newline2702(M4.unsafe_undefined);
};
var cl1367 = function(out292705) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return newline2702(out292705);
};
var newline = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1368 = {
        '0': cl1366,
        '1': cl1367
    } [arguments.length];
    if (fixed_lam1368 !== undefined) {
        return fixed_lam1368.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var current_inspector = function() {
    return true;
};
var current_code_inspector = function() {
    return true;
};
var make_inspector = $rjs_core.attachProcedureArity(function(..._27061369) {
    var _2706 = $rjs_core.Pair.listFromArray(_27061369);
    return false;
});
var check_method = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var random = M1.Kernel.random;
var current_seconds = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.floor(Date.now() / 1000);
};
var object_name = function(fn2707) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return fn2707.name;
};
var unquoted_printing_string = function(s2708) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s2708;
};
var error_print_width = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return 42;
};
var error_value__gt_string_handler = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(x2709, n2710) {
        if ((arguments.length !== 2) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res1370 = null;
        } else {
            var if_res1370 = rvoid();
        }
        if_res1370;
        return $rjs_core.UString.make("str");
    };
};
var procedure_extract_target = function(f2711) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var regexp_p = function(v2712) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Regexp.check(v2712);
};
var pregexp_p = regexp_p;
var byte_regexp_p = regexp_p;
var byte_pregexp_p = regexp_p;
var regexp = function(str2713) {
    if (string_p(str2713) !== false) {
        var if_res1371 = rvoid();
    } else {
        var if_res1371 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("regexp"), $rjs_core.UString.make("string?"), str2713));
    }
    if_res1371;
    return M1.Core.Regexp.fromString(str2713);
};
var pregexp = regexp;
var byte_regexp = function(bs2714) {
    if (bytes_p(bs2714) !== false) {
        var if_res1372 = rvoid();
    } else {
        var if_res1372 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("byte-regexp"), $rjs_core.UString.make("bytes?"), bs2714));
    }
    if_res1372;
    return M1.Core.Regexp.fromString(bytes__gt_string_by_utf_8(bs2714));
};
var byte_pregexp = byte_regexp;
var regexp_match2715 = function(pattern322716, input332717, start_pos302718, end_pos312719) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var pattern2720 = pattern322716;
    var input2721 = input332717;
    if (false !== false) {
        var if_res1373 = 0;
    } else {
        var if_res1373 = start_pos302718;
    }
    var start_pos2722 = if_res1373;
    if (false !== false) {
        var if_res1374 = false;
    } else {
        var if_res1374 = end_pos312719;
    }
    var end_pos2723 = if_res1374;
    return M1.Core.Regexp.match(pattern2720, input2721, start_pos2722, end_pos2723);
};
var cl1375 = function(pattern2724, input2725) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match2715(pattern2724, input2725, 0, false);
};
var cl1376 = function(pattern2726, input2727, start_pos2728, end_pos312729) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match2715(pattern2726, input2727, start_pos2728, end_pos312729);
};
var cl1377 = function(pattern2730, input2731, start_pos302732) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match2715(pattern2730, input2731, start_pos302732, false);
};
var regexp_match = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1378 = {
        '2': cl1375,
        '4': cl1376,
        '3': cl1377
    } [arguments.length];
    if (fixed_lam1378 !== undefined) {
        return fixed_lam1378.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var regexp_match_p2733 = function(pattern362734, input372735, start_pos342736, end_pos352737) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var pattern2738 = pattern362734;
    var input2739 = input372735;
    if (false !== false) {
        var if_res1379 = 0;
    } else {
        var if_res1379 = start_pos342736;
    }
    var start_pos2740 = if_res1379;
    if (false !== false) {
        var if_res1380 = false;
    } else {
        var if_res1380 = end_pos352737;
    }
    var end_pos2741 = if_res1380;
    if (M1.Core.Regexp.match(pattern2738, input2739, start_pos2740, end_pos2741) !== false) {
        var if_res1381 = true;
    } else {
        var if_res1381 = false;
    }
    return if_res1381;
};
var cl1382 = function(pattern2742, input2743) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match_p2733(pattern2742, input2743, 0, false);
};
var cl1383 = function(pattern2744, input2745, start_pos2746, end_pos352747) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match_p2733(pattern2744, input2745, start_pos2746, end_pos352747);
};
var cl1384 = function(pattern2748, input2749, start_pos342750) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match_p2733(pattern2748, input2749, start_pos342750, false);
};
var regexp_match_p = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1385 = {
        '2': cl1382,
        '4': cl1383,
        '3': cl1384
    } [arguments.length];
    if (fixed_lam1385 !== undefined) {
        return fixed_lam1385.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var let_result1386 = make_struct_type($rjs_core.PrimitiveSymbol.make("kernel:arity-at-least"), false, 1, 0, false, rnull, false, false, $rjs_core.Pair.makeList(0), false, $rjs_core.PrimitiveSymbol.make("kernel:arity-at-least"));
var struct_2751 = let_result1386.getAt(0);
var make_2752 = let_result1386.getAt(1);
var __p2753 = let_result1386.getAt(2);
var __ref2754 = let_result1386.getAt(3);
var __set_bang_2755 = let_result1386.getAt(4);
var let_result1387 = values(struct_2751, make_2752, __p2753, make_struct_field_accessor(__ref2754, 0, $rjs_core.PrimitiveSymbol.make("value")));
var struct_kernel_arity_at_least = let_result1387.getAt(0);
var make_arity_at_least = let_result1387.getAt(1);
var kernel_arity_at_least_p = let_result1387.getAt(2);
var kernel_arity_at_least_value = let_result1387.getAt(3);
var procedure_p = function(f2756) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return typeof(f2756) === "function";
};
var arity_at_least = make_arity_at_least;
var arity_at_least_p = function(p2757) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kernel_arity_at_least_p(p2757);
};
var arity_at_least_value = function(p2758) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kernel_arity_at_least_value(p2758);
};
var procedure_arity_includes_p = function(fn2759, n2760) {
    var ar2761 = procedure_arity(fn2759);
    if (kernel_arity_at_least_p(ar2761) !== false) {
        var if_res1389 = __lt__eq_(kernel_arity_at_least_value(ar2761), n2760);
    } else {
        if (list_p(ar2761) !== false) {
            var if_res1388 = member(n2760, ar2761);
        } else {
            var if_res1388 = n2760 === ar2761;
        }
        var if_res1389 = if_res1388;
    }
    return if_res1389;
};
var procedure_arity = function(fn2762) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (Array.isArray(fn2762.__rjs_arityValue) !== false) {
        if ((fn2762.__rjs_arityValue.length === 1) !== false) {
            var if_res1390 = fn2762.__rjs_arityValue[0];
        } else {
            var if_res1390 = M1.Core.Pair.listFromArray(fn2762.__rjs_arityValue);
        }
        var if_res1392 = if_res1390;
    } else {
        if ((fn2762.__rjs_arityValue === undefined) !== false) {
            var if_res1391 = fn2762.length;
        } else {
            var if_res1391 = make_arity_at_least(fn2762.__rjs_arityValue || fn2762.length);
        }
        var if_res1392 = if_res1391;
    }
    return if_res1392;
};
var procedure_arity_p = function(v2763) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (exact_nonnegative_integer_p(v2763) || kernel_arity_at_least_p(v2763)) || ormap(function(v2764) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return exact_nonnegative_integer_p(v2764) || kernel_arity_at_least_p(v2764);
    }, v2763);
};
var procedure_arity_mask = function(fn2765) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var ar2766 = procedure_arity(fn2765);
    if (integer_p(ar2766) !== false) {
        var if_res1394 = arithmetic_shift(1, ar2766);
    } else {
        if (kernel_arity_at_least_p(ar2766) !== false) {
            var if_res1393 = arithmetic_shift(-1, kernel_arity_at_least_value(ar2766));
        } else {
            var if_res1393 = rvoid();
        }
        var if_res1394 = if_res1393;
    }
    return if_res1394;
};
var checked_procedure_check_and_extract = function(type2767, v2768, proc2769, v12770, v22771) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((M1.Core.Struct.check(v2768, type2767) && type2767._findProperty(prop_checked_procedure)) !== false) {
        var fn2772 = v2768.getField(0);
        var r12773 = fn2772(v12770, v22771);
        if (r12773 !== false) {
            var if_res1395 = v2768.getField(1);
        } else {
            var if_res1395 = proc2769(v2768, v12770, v22771);
        }
        var if_res1396 = if_res1395;
    } else {
        var if_res1396 = proc2769(v2768, v12770, v22771);
    }
    return if_res1396;
};
var gensym = function(sym2774) {
    var s2775 = (sym2774 && sym2774.v) || $rjs_core.UString.make("");
    __count = __count + 1;
    return M1.Core.PrimitiveSymbol.makeUninterned(s2775 + __count);
};
var eval_jit_enabled = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference_constant_p = function(x2776) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference_from_unsafe_p = function(x2777) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference__gt_module_source = function(x2778) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference__gt_resolved_module_path = function(x2779) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var module_name_fixup = function(x2780) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var inspector_p = function(p2781) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return true;
};
var make_thread_cell = function(p2782) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return p2782;
};
var __count = 1000;
var system_type2783 = function(mode382784) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (false !== false) {
        var if_res1397 = $rjs_core.PrimitiveSymbol.make("os");
    } else {
        var if_res1397 = mode382784;
    }
    var mode2785 = if_res1397;
    var tmp2786 = mode2785;
    if (equal_p(tmp2786, $rjs_core.PrimitiveSymbol.make("os")) !== false) {
        var if_res1401 = $rjs_core.PrimitiveSymbol.make("unix");
    } else {
        if (equal_p(tmp2786, $rjs_core.PrimitiveSymbol.make("vm")) !== false) {
            var if_res1400 = $rjs_core.PrimitiveSymbol.make("javascript");
        } else {
            if (equal_p(tmp2786, $rjs_core.PrimitiveSymbol.make("gc")) !== false) {
                var if_res1399 = $rjs_core.PrimitiveSymbol.make("javascript");
            } else {
                if (equal_p(tmp2786, $rjs_core.PrimitiveSymbol.make("fs-change")) !== false) {
                    var if_res1398 = M1.Core.Vector.make([false, false, false, false], false);
                } else {
                    var if_res1398 = false;
                }
                var if_res1399 = if_res1398;
            }
            var if_res1400 = if_res1399;
        }
        var if_res1401 = if_res1400;
    }
    return if_res1401;
};
var cl1402 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return system_type2783($rjs_core.PrimitiveSymbol.make("os"));
};
var cl1403 = function(mode382787) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return system_type2783(mode382787);
};
var system_type = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1404 = {
        '0': cl1402,
        '1': cl1403
    } [arguments.length];
    if (fixed_lam1404 !== undefined) {
        return fixed_lam1404.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var find_system_path = function(kind2788) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.UString.make("");
};
var build_path = function(base2789) {
    return base2789;
};
var make_weak_hash = make_hash;
var make_weak_hasheqv = make_hasheqv;
var make_weak_hasheq = make_hasheq;
var current_environment_variables = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return rnull;
};
var environment_variables_ref = function(e2790, n2791) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var environment_variables_set_bang_2792 = function(e402793, n412794, v422795, fail392796) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var e2797 = e402793;
    var n2798 = n412794;
    var v2799 = v422795;
    if (false !== false) {
        var if_res1405 = false;
    } else {
        var if_res1405 = fail392796;
    }
    var fail2800 = if_res1405;
    return rvoid();
};
var cl1406 = function(e2801, n2802, v2803) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return environment_variables_set_bang_2792(e2801, n2802, v2803, false);
};
var cl1407 = function(e2804, n2805, v2806, fail392807) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return environment_variables_set_bang_2792(e2804, n2805, v2806, fail392807);
};
var environment_variables_set_bang_ = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1408 = {
        '3': cl1406,
        '4': cl1407
    } [arguments.length];
    if (fixed_lam1408 !== undefined) {
        return fixed_lam1408.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [3, 4]);
var prefab_struct_key = function(v2808) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var path_p = M1.Core.Path.check;
var version = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.UString.make("99.0");
};
var string__gt_path = M1.Core.Path.fromString;
var dynamic_wind = function(f2809, g2810, h2811) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    f2809();
    g2810();
    return h2811();
};
var datum_intern_literal = function(v2812) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2812;
};
var make_semaphore = function(x2813) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return x2813;
};
var semaphore_peek_evt = function(x2814) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return x2814;
};
var call_with_semaphore = function(s2815, f2816) {
    return false;
};
var syntax_source = M1.Core.Correlated.syntaxSource;
var syntax_line = M1.Core.Correlated.syntaxLine;
var syntax_column = M1.Core.Correlated.syntaxColumn;
var syntax_position = M1.Core.Correlated.syntaxPosition;
var syntax_span = M1.Core.Correlated.syntaxSpan;
var __rjs_quoted__ = {};
__rjs_quoted__.length = length;
__rjs_quoted__.kernel_arity_at_least_value = kernel_arity_at_least_value;
__rjs_quoted__.null_p = null_p;
__rjs_quoted__.struct_kernel_arity_at_least = struct_kernel_arity_at_least;
__rjs_quoted__.make_struct_type_property = make_struct_type_property;
__rjs_quoted__.cdr = cdr;
__rjs_quoted__.make_arity_at_least = make_arity_at_least;
__rjs_quoted__.car = car;
__rjs_quoted__.__plus_ = __plus_;
__rjs_quoted__.apply = apply;
__rjs_quoted__.kernel_arity_at_least_p = kernel_arity_at_least_p;
export {
    __rjs_quoted__,
    equal_p,
    eqv_p,
    eq_p,
    values,
    call_with_values,
    immutable_p,
    rvoid,
    void_p,
    number_p,
    real_p,
    integer_p,
    complex_p,
    zero_p,
    positive_p,
    negative_p,
    add1,
    sub1,
    quotient,
    even_p,
    odd_p,
    exact_nonnegative_integer_p,
    exact_integer_p,
    exact_p,
    inexact_p,
    single_flonum_available_p,
    single_flonum_p,
    real__gt_single_flonum,
    __times_,
    __by_,
    __plus_,
    __,
    __lt_,
    __gt_,
    __lt__eq_,
    __gt__eq_,
    __eq_,
    floor,
    abs,
    sin,
    cos,
    tan,
    asin,
    acos,
    atan,
    ceiling,
    round,
    min,
    max,
    log,
    exp,
    expt,
    sqrt,
    sqr,
    truncate,
    remainder,
    number__gt_string,
    arithmetic_shift,
    inexact__gt_exact,
    exact__gt_inexact,
    make_rectangular,
    make_polar,
    real_part,
    imag_part,
    magnitude,
    conjugate,
    angle,
    rational_p,
    numerator,
    denominator,
    bitwise_and,
    bitwise_ior,
    bitwise_xor,
    bitwise_not,
    bitwise_bit_set_p,
    not,
    rfalse,
    rtrue,
    false_p,
    boolean_p,
    car,
    cdr,
    cons,
    pair_p,
    caar,
    cadr,
    cdar,
    cddr,
    cdddr,
    caddr,
    cadddr,
    cddddr,
    rnull,
    list,
    null_p,
    list_p,
    length,
    reverse,
    list_times_,
    append,
    for_each,
    mcons,
    mpair_p,
    mcar,
    mcdr,
    set_mcar_bang_,
    set_mcdr_bang_,
    make_struct_type,
    make_struct_field_accessor,
    make_struct_field_mutator,
    make_struct_type_property,
    check_struct_type,
    struct_type_p,
    struct_type_info,
    vector,
    make_vector,
    vector_p,
    vector_length,
    vector_ref,
    vector_set_bang_,
    vector__gt_list,
    list__gt_vector,
    vector__gt_immutable_vector,
    vector_copy,
    vector_copy_bang_,
    hash,
    hasheqv,
    hasheq,
    make_hash,
    make_hasheqv,
    make_hasheq,
    make_immutable_hash,
    make_immutable_hasheqv,
    make_immutable_hasheq,
    hash_p,
    hash_equal_p,
    hash_eqv_p,
    hash_eq_p,
    hash_weak_p,
    hash_ref,
    hash_has_key_p,
    hash_ref_key,
    hash_set,
    hash_remove,
    hash_map,
    hash_count,
    hash_remove_bang_,
    hash_set_bang_,
    hash_iterate_first,
    hash_iterate_next,
    hash_iterate_key,
    hash_iterate_value,
    hash_iterate_key_plus_value,
    hash_iterate_pair,
    hash_keys_subset_p,
    hash_union,
    hash_strong_p,
    apply,
    map,
    foldl,
    _foldr,
    foldr,
    range,
    remove,
    filter,
    ormap,
    andmap,
    member,
    compose,
    compose1,
    list_ref,
    build_list,
    make_list,
    flatten,
    assoc,
    memv,
    memq,
    memf,
    findf,
    assv,
    assq,
    assf,
    alt_reverse,
    string,
    string_append,
    string_ref,
    string_eq__p,
    string_lt__p,
    string_lt__eq__p,
    string_gt__p,
    string_gt__eq__p,
    string_p,
    fprintf,
    eprintf,
    printf,
    format,
    symbol_p,
    keyword_p,
    make_string,
    list__gt_string,
    string__gt_list,
    string__gt_immutable_string,
    symbol__gt_string,
    string__gt_symbol,
    string__gt_uninterned_symbol,
    string__gt_unreadable_symbol,
    string__gt_number,
    symbol_interned_p,
    symbol_eq__p,
    symbol_lt__p,
    keyword_lt__p,
    string_length,
    string_downcase,
    string_upcase,
    substring,
    string_split,
    string_set_bang_,
    char_p,
    char__gt_integer,
    integer__gt_char,
    char_utf_8_length,
    char_upcase,
    char_downcase,
    char_alphabetic_p,
    char_lower_case_p,
    char_upper_case_p,
    char_title_case_p,
    char_numeric_p,
    char_symbolic_p,
    char_punctuation_p,
    char_graphic_p,
    char_whitespace_p,
    char_blank_p,
    char_iso_control_p,
    char_lt__p,
    char_lt__eq__p,
    char_gt__p,
    char_gt__eq__p,
    char_eq__p,
    box,
    unbox,
    set_box_bang_,
    box_p,
    box_cas_bang_,
    box_immutable,
    make_weak_box,
    weak_box_value,
    set_box_times__bang_,
    unbox_times_,
    evt_p,
    prop_evt,
    prop_checked_procedure,
    prop_impersonator_of,
    prop_arity_string,
    prop_incomplete_arity,
    prop_method_arity_error,
    prop_exn_srclocs,
    prop_authentic,
    prop_serialize,
    prop_custom_write,
    prop_sealed,
    prop_object_name,
    prop_procedure,
    prop_equal_plus_hash,
    equal_hash_code,
    equal_secondary_hash_code,
    error,
    raise_argument_error,
    raise_arguments_error,
    raise_result_error,
    raise_mismatch_error,
    bytes_p,
    make_bytes,
    bytes_ref,
    bytes_set_bang_,
    bytes_append,
    bytes__gt_string_by_utf_8,
    bytes__gt_string_by_latin_1,
    string__gt_bytes_by_utf_8,
    string__gt_bytes_by_locale,
    bytes_eq__p,
    bytes_lt__p,
    bytes_gt__p,
    bytes_length,
    current_continuation_marks,
    continuation_mark_set__gt_list,
    continuation_mark_set_first,
    make_parameter,
    call_with_continuation_prompt,
    abort_current_continuation,
    make_continuation_prompt_tag,
    default_continuation_prompt_tag,
    raise,
    exn_fail_p,
    exn_fail_contract_p,
    exn_fail_contract_arity_p,
    exn_message,
    current_output_port,
    current_input_port,
    current_error_port,
    current_print,
    port_p,
    input_port_p,
    output_port_p,
    string_port_p,
    open_output_string,
    get_output_string,
    print_as_expression,
    display,
    displayln,
    write,
    writeln,
    print,
    println,
    newline,
    current_inspector,
    current_code_inspector,
    make_inspector,
    check_method,
    random,
    current_seconds,
    object_name,
    unquoted_printing_string,
    error_print_width,
    error_value__gt_string_handler,
    procedure_extract_target,
    regexp_p,
    pregexp_p,
    byte_regexp_p,
    byte_pregexp_p,
    regexp,
    pregexp,
    byte_regexp,
    byte_pregexp,
    regexp_match,
    regexp_match_p,
    kernel_arity_at_least_value,
    kernel_arity_at_least_p,
    make_arity_at_least,
    struct_kernel_arity_at_least,
    procedure_p,
    arity_at_least,
    arity_at_least_p,
    arity_at_least_value,
    procedure_arity_includes_p,
    procedure_arity,
    procedure_arity_p,
    procedure_arity_mask,
    checked_procedure_check_and_extract,
    gensym,
    eval_jit_enabled,
    variable_reference_constant_p,
    variable_reference_from_unsafe_p,
    variable_reference__gt_module_source,
    variable_reference__gt_resolved_module_path,
    module_name_fixup,
    inspector_p,
    make_thread_cell,
    system_type,
    find_system_path,
    build_path,
    make_weak_hash,
    make_weak_hasheqv,
    make_weak_hasheq,
    current_environment_variables,
    environment_variables_ref,
    environment_variables_set_bang_,
    prefab_struct_key,
    path_p,
    version,
    string__gt_path,
    dynamic_wind,
    datum_intern_literal,
    make_semaphore,
    semaphore_peek_evt,
    call_with_semaphore,
    syntax_source,
    syntax_line,
    syntax_column,
    syntax_position,
    syntax_span
};