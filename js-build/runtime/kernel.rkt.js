import * as $rjs_core from './core.js';
import * as M1 from "./lib.rkt.js";
import * as M2 from "../links/racketscript-compiler/racketscript/compiler/directive.rkt.js";
import * as M4 from "./unsafe.rkt.js";
var equal_p = M1.Core.isEqual;
var eqv_p = M1.Core.isEqv;
var eq_p = M1.Core.isEq;
var values = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(function() {
    var vals2893 = M1.Core.argumentsToArray(arguments);
    if ((vals2893.length === 1) !== false) {
        var if_res1634 = vals2893[0];
    } else {
        var if_res1634 = M1.Values.make(vals2893);
    }
    return if_res1634;
}, 0), $rjs_core.UString.make("values"));
var call_with_values = function(generator2894, receiver2895) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var vals2896 = generator2894();
    if (M1.Values.check(vals2896) !== false) {
        var if_res1636 = receiver2895.apply(this, vals2896.getAll());
    } else {
        if (not(eq_p(vals2896, undefined) || eq_p(vals2896, null)) !== false) {
            var if_res1635 = receiver2895.apply(this, [vals2896]);
        } else {
            var if_res1635 = rvoid();
        }
        var if_res1636 = if_res1635;
    }
    return if_res1636;
};
var immutable_p = function(v2897) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Kernel.isImmutable(v2897);
};
var rvoid = $rjs_core.attachProcedureArity(function(..._28981637) {
    var _2898 = $rjs_core.Pair.listFromArray(_28981637);
    return null;
});
var void_p = function(v2899) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (v2899 === null) || (v2899 === undefined);
};
var number_p = M1.Core.Number.JS.check;
var real_p = M1.Core.Number.JS.check;
var integer_p = Number.isInteger;
var complex_p = $rjs_core.attachProcedureArity(function(..._29001638) {
    var _2900 = $rjs_core.Pair.listFromArray(_29001638);
    return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
});
var zero_p = function(v2901) {
    if (number_p(v2901) !== false) {
        var if_res1639 = rvoid();
    } else {
        var if_res1639 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("zero?"), $rjs_core.UString.make("number?"), v2901));
    }
    if_res1639;
    return v2901 === 0;
};
var positive_p = function(v2902) {
    if (real_p(v2902) !== false) {
        var if_res1640 = rvoid();
    } else {
        var if_res1640 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("positive?"), $rjs_core.UString.make("real?"), v2902));
    }
    if_res1640;
    return v2902 > 0;
};
var negative_p = function(v2903) {
    if (real_p(v2903) !== false) {
        var if_res1641 = rvoid();
    } else {
        var if_res1641 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("negative?"), $rjs_core.UString.make("real?"), v2903));
    }
    if_res1641;
    return v2903 < 0;
};
var add1 = function(v2904) {
    if (number_p(v2904) !== false) {
        var if_res1642 = rvoid();
    } else {
        var if_res1642 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("add1"), $rjs_core.UString.make("number?"), v2904));
    }
    if_res1642;
    return v2904 + 1;
};
var sub1 = function(v2905) {
    if (number_p(v2905) !== false) {
        var if_res1643 = rvoid();
    } else {
        var if_res1643 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sub1"), $rjs_core.UString.make("number?"), v2905));
    }
    if_res1643;
    return v2905 - 1;
};
var quotient = function(dividend2906, divisor2907) {
    if (integer_p(dividend2906) !== false) {
        var if_res1644 = rvoid();
    } else {
        var if_res1644 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("quotient"), $rjs_core.UString.make("integer?"), dividend2906));
    }
    if_res1644;
    if (integer_p(divisor2907) !== false) {
        var if_res1645 = rvoid();
    } else {
        var if_res1645 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("quotient"), $rjs_core.UString.make("integer?"), divisor2907));
    }
    if_res1645;
    return (dividend2906 / divisor2907) | 0;
};
var even_p = function(v2908) {
    if (integer_p(v2908) !== false) {
        var if_res1646 = rvoid();
    } else {
        var if_res1646 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("even?"), $rjs_core.UString.make("integer?"), v2908));
    }
    if_res1646;
    return (v2908 % 2) === 0;
};
var odd_p = function(v2909) {
    if (integer_p(v2909) !== false) {
        var if_res1647 = rvoid();
    } else {
        var if_res1647 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("odd?"), $rjs_core.UString.make("integer?"), v2909));
    }
    if_res1647;
    return not(even_p(v2909));
};
var exact_nonnegative_integer_p = function(v2910) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Number.isInteger(v2910) && (v2910 >= 0);
};
var exact_integer_p = function(v2911) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Number.isInteger(v2911);
};
var exact_p = function(v2912) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Number.isInteger(v2912);
};
var inexact_p = function(v2913) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return not(exact_p(v2913));
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
var real__gt_single_flonum = function(v2914) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2914;
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
var floor = function(v2928) {
    if (real_p(v2928) !== false) {
        var if_res1648 = rvoid();
    } else {
        var if_res1648 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("floor"), $rjs_core.UString.make("real?"), v2928));
    }
    if_res1648;
    return Math.floor(v2928);
};
var abs = function(v2929) {
    if (real_p(v2929) !== false) {
        var if_res1649 = rvoid();
    } else {
        var if_res1649 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("abs"), $rjs_core.UString.make("real?"), v2929));
    }
    if_res1649;
    return Math.abs(v2929);
};
var sin = function(v2930) {
    if (number_p(v2930) !== false) {
        var if_res1650 = rvoid();
    } else {
        var if_res1650 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sin"), $rjs_core.UString.make("number?"), v2930));
    }
    if_res1650;
    return Math.sin(v2930);
};
var cos = function(v2931) {
    if (number_p(v2931) !== false) {
        var if_res1651 = rvoid();
    } else {
        var if_res1651 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cos"), $rjs_core.UString.make("number?"), v2931));
    }
    if_res1651;
    return Math.cos(v2931);
};
var tan = function(v2932) {
    if (number_p(v2932) !== false) {
        var if_res1652 = rvoid();
    } else {
        var if_res1652 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("tan"), $rjs_core.UString.make("number?"), v2932));
    }
    if_res1652;
    return Math.tan(v2932);
};
var asin = function(v2933) {
    if (number_p(v2933) !== false) {
        var if_res1653 = rvoid();
    } else {
        var if_res1653 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("asin"), $rjs_core.UString.make("number?"), v2933));
    }
    if_res1653;
    return Math.asin(v2933);
};
var acos = function(v2934) {
    if (number_p(v2934) !== false) {
        var if_res1654 = rvoid();
    } else {
        var if_res1654 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("acos"), $rjs_core.UString.make("number?"), v2934));
    }
    if_res1654;
    return Math.acos(v2934);
};
var cl1655 = function(v2938) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.atan(v2938);
};
var cl1656 = function(x2939, y2940) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.atan2(x2939, y2940);
};
var atan = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1657 = {
        '1': cl1655,
        '2': cl1656
    } [arguments.length];
    if (fixed_lam1657 !== undefined) {
        return fixed_lam1657.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var ceiling = function(v2941) {
    if (real_p(v2941) !== false) {
        var if_res1658 = rvoid();
    } else {
        var if_res1658 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("ceiling"), $rjs_core.UString.make("real?"), v2941));
    }
    if_res1658;
    return Math.ceil(v2941);
};
var round = function(v2942) {
    if (real_p(v2942) !== false) {
        var if_res1659 = rvoid();
    } else {
        var if_res1659 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("round"), $rjs_core.UString.make("real?"), v2942));
    }
    if_res1659;
    return Math.round(v2942);
};
var min = function(a2943, b2944) {
    if (real_p(a2943) !== false) {
        var if_res1660 = rvoid();
    } else {
        var if_res1660 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("min"), $rjs_core.UString.make("real?"), a2943));
    }
    if_res1660;
    if (real_p(b2944) !== false) {
        var if_res1661 = rvoid();
    } else {
        var if_res1661 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("min"), $rjs_core.UString.make("real?"), b2944));
    }
    if_res1661;
    return Math.min(a2943, b2944);
};
var max = function(a2945, b2946) {
    if (real_p(a2945) !== false) {
        var if_res1662 = rvoid();
    } else {
        var if_res1662 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("max"), $rjs_core.UString.make("real?"), a2945));
    }
    if_res1662;
    if (real_p(b2946) !== false) {
        var if_res1663 = rvoid();
    } else {
        var if_res1663 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("max"), $rjs_core.UString.make("real?"), b2946));
    }
    if_res1663;
    return Math.max(a2945, b2946);
};
var log = function(v2947) {
    if (number_p(v2947) !== false) {
        var if_res1664 = rvoid();
    } else {
        var if_res1664 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("log"), $rjs_core.UString.make("number?"), v2947));
    }
    if_res1664;
    return Math.log(v2947);
};
var exp = function(w2948) {
    if (number_p(w2948) !== false) {
        var if_res1665 = rvoid();
    } else {
        var if_res1665 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("exp"), $rjs_core.UString.make("number?"), w2948));
    }
    if_res1665;
    return Math.exp(w2948);
};
var expt = function(w2949, z2950) {
    if (number_p(w2949) !== false) {
        var if_res1666 = rvoid();
    } else {
        var if_res1666 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("expt"), $rjs_core.UString.make("number?"), w2949));
    }
    if_res1666;
    if (number_p(z2950) !== false) {
        var if_res1667 = rvoid();
    } else {
        var if_res1667 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("expt"), $rjs_core.UString.make("number?"), z2950));
    }
    if_res1667;
    return Math.pow(w2949, z2950);
};
var sqrt = function(v2951) {
    if (number_p(v2951) !== false) {
        var if_res1668 = rvoid();
    } else {
        var if_res1668 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sqrt"), $rjs_core.UString.make("number?"), v2951));
    }
    if_res1668;
    return Math.sqrt(v2951);
};
var sqr = function(v2952) {
    if (number_p(v2952) !== false) {
        var if_res1669 = rvoid();
    } else {
        var if_res1669 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sqr"), $rjs_core.UString.make("number?"), v2952));
    }
    if_res1669;
    return __times_(v2952, v2952);
};
var truncate = function(v2953) {
    if (number_p(v2953) !== false) {
        var if_res1670 = rvoid();
    } else {
        var if_res1670 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("truncate"), $rjs_core.UString.make("number?"), v2953));
    }
    if_res1670;
    return Math.trunc(v2953);
};
var remainder = function(a2954, b2955) {
    if (integer_p(a2954) !== false) {
        var if_res1671 = rvoid();
    } else {
        var if_res1671 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("remainder"), $rjs_core.UString.make("integer?"), a2954));
    }
    if_res1671;
    if (integer_p(b2955) !== false) {
        var if_res1672 = rvoid();
    } else {
        var if_res1672 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("remainder"), $rjs_core.UString.make("integer?"), b2955));
    }
    if_res1672;
    return a2954 % b2955;
};
var number__gt_string = function(n2956) {
    if (number_p(n2956) !== false) {
        var if_res1673 = rvoid();
    } else {
        var if_res1673 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("number->string"), $rjs_core.UString.make("number?"), n2956));
    }
    if_res1673;
    return M1.Core.UString.makeMutable(n2956.toString());
};
var arithmetic_shift = function(n2957, m2958) {
    if (integer_p(n2957) !== false) {
        var if_res1674 = rvoid();
    } else {
        var if_res1674 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("arithmetic-shift"), $rjs_core.UString.make("integer?"), n2957));
    }
    if_res1674;
    if (integer_p(m2958) !== false) {
        var if_res1675 = rvoid();
    } else {
        var if_res1675 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("arithmetic-shift"), $rjs_core.UString.make("integer?"), m2958));
    }
    if_res1675;
    if (negative_p(m2958) !== false) {
        var if_res1676 = n2957 >> __(m2958);
    } else {
        var if_res1676 = n2957 << m2958;
    }
    return if_res1676;
};
var inexact__gt_exact = function(v2959) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2959;
};
var exact__gt_inexact = function(v2960) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2960;
};
var make_rectangular = function(x2961, y2962) {
    if (real_p(x2961) !== false) {
        var if_res1677 = rvoid();
    } else {
        var if_res1677 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-rectangular"), $rjs_core.UString.make("real?"), x2961));
    }
    if_res1677;
    if (real_p(y2962) !== false) {
        var if_res1678 = rvoid();
    } else {
        var if_res1678 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-rectangular"), $rjs_core.UString.make("real?"), y2962));
    }
    if_res1678;
    return M1.Core.Pair.make(x2961, y2962);
};
var make_polar = function(m2963, a2964) {
    if (real_p(m2963) !== false) {
        var if_res1679 = rvoid();
    } else {
        var if_res1679 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-polar"), $rjs_core.UString.make("real?"), m2963));
    }
    if_res1679;
    if (real_p(a2964) !== false) {
        var if_res1680 = rvoid();
    } else {
        var if_res1680 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-polar"), $rjs_core.UString.make("real?"), a2964));
    }
    if_res1680;
    return error($rjs_core.UString.make("Complex numbers not supported with JS numerber semantics"));
};
var real_part = function(z2965) {
    if (pair_p(z2965) !== false) {
        var if_res1681 = rvoid();
    } else {
        var if_res1681 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("real-part"), $rjs_core.UString.make("(if-scheme-numbers number? pair?)"), z2965));
    }
    if_res1681;
    return z2965.hd(z2965);
};
var imag_part = function(z2966) {
    if (pair_p(z2966) !== false) {
        var if_res1682 = rvoid();
    } else {
        var if_res1682 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("imag-part"), $rjs_core.UString.make("(if-scheme-numbers number? pair?)"), z2966));
    }
    if_res1682;
    return z2966.tl(z2966);
};
var magnitude = function(x2967) {
    if (number_p(x2967) !== false) {
        var if_res1683 = rvoid();
    } else {
        var if_res1683 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("magnitude"), $rjs_core.UString.make("number?"), x2967));
    }
    if_res1683;
    return $rjs_core.attachProcedureArity(function(..._29681684) {
        var _2968 = $rjs_core.Pair.listFromArray(_29681684);
        return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
    });
};
var conjugate = function(x2969) {
    if (number_p(x2969) !== false) {
        var if_res1685 = rvoid();
    } else {
        var if_res1685 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("conjugate"), $rjs_core.UString.make("number?"), x2969));
    }
    if_res1685;
    return $rjs_core.attachProcedureArity(function(..._29701686) {
        var _2970 = $rjs_core.Pair.listFromArray(_29701686);
        return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
    });
};
var angle = function(x2971) {
    if (number_p(x2971) !== false) {
        var if_res1687 = rvoid();
    } else {
        var if_res1687 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("angle"), $rjs_core.UString.make("number?"), x2971));
    }
    if_res1687;
    return $rjs_core.attachProcedureArity(function(..._29721688) {
        var _2972 = $rjs_core.Pair.listFromArray(_29721688);
        return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
    });
};
var rational_p = Number.isInteger;
var numerator = function(x2973) {
    if (number_p(x2973) !== false) {
        var if_res1689 = rvoid();
    } else {
        var if_res1689 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("numerator"), $rjs_core.UString.make("number?"), x2973));
    }
    if_res1689;
    return x2973;
};
var denominator = function(x2974) {
    if (number_p(x2974) !== false) {
        var if_res1690 = rvoid();
    } else {
        var if_res1690 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("denominator"), $rjs_core.UString.make("number?"), x2974));
    }
    if_res1690;
    return 1;
};
var bitwise_and = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.JS.bitwiseAnd, 1), $rjs_core.UString.make("bitwise-and"));
var bitwise_ior = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.JS.bitwiseOr, 1), $rjs_core.UString.make("bitwise-ior"));
var bitwise_xor = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.JS.bitwiseXor, 1), $rjs_core.UString.make("bitwise-xor"));
var bitwise_not = function(v2975) {
    if (number_p(v2975) !== false) {
        var if_res1691 = rvoid();
    } else {
        var if_res1691 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bitwise-not"), $rjs_core.UString.make("number?"), v2975));
    }
    if_res1691;
    return M1.Core.Number.JS.bitwiseNot(v2975);
};
var bitwise_bit_set_p = function(n2976, m2977) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return not(zero_p(bitwise_and(n2976, arithmetic_shift(1, m2977))));
};
var not = function(v2978) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return equal_p(v2978, false) || false;
};
var rfalse = false;
var rtrue = true;
var false_p = function(v2979) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2979 === false;
};
var boolean_p = function(v2980) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (v2980 === true) || (v2980 === false);
};
var car = function(pair2981) {
    if (pair_p(pair2981) !== false) {
        var if_res1692 = rvoid();
    } else {
        var if_res1692 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("car"), $rjs_core.UString.make("pair?"), pair2981));
    }
    if_res1692;
    return pair2981.hd;
};
var cdr = function(pair2982) {
    if (pair_p(pair2982) !== false) {
        var if_res1693 = rvoid();
    } else {
        var if_res1693 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdr"), $rjs_core.UString.make("pair?"), pair2982));
    }
    if_res1693;
    return pair2982.tl;
};
var cons = M1.Core.attachProcedureName(M1.Core.Pair.make, $rjs_core.UString.make("cons"));
var pair_p = M1.Core.attachProcedureName(M1.Core.Pair.check, $rjs_core.UString.make("pair?"));
var caar = function(v2983) {
    if ((function(v2984) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v2984) && pair_p(v2984.hd);
        })(v2983) !== false) {
        var if_res1694 = rvoid();
    } else {
        var if_res1694 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("caar"), $rjs_core.UString.make("(check/pair-of? pair? #t)"), v2983));
    }
    if_res1694;
    return v2983.hd.hd;
};
var cadr = function(v2985) {
    if ((function(v2986) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v2986) && pair_p(v2986.tl);
        })(v2985) !== false) {
        var if_res1695 = rvoid();
    } else {
        var if_res1695 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cadr"), $rjs_core.UString.make("(check/pair-of? #t pair?)"), v2985));
    }
    if_res1695;
    return v2985.tl.hd;
};
var cdar = function(v2987) {
    if ((function(v2988) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v2988) && pair_p(v2988.hd);
        })(v2987) !== false) {
        var if_res1696 = rvoid();
    } else {
        var if_res1696 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdar"), $rjs_core.UString.make("(check/pair-of? pair? #t)"), v2987));
    }
    if_res1696;
    return v2987.hd.tl;
};
var cddr = function(v2989) {
    if ((function(v2990) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v2990) && pair_p(v2990.tl);
        })(v2989) !== false) {
        var if_res1697 = rvoid();
    } else {
        var if_res1697 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cddr"), $rjs_core.UString.make("(check/pair-of? #t pair?)"), v2989));
    }
    if_res1697;
    return v2989.tl.tl;
};
var cdddr = function(v2991) {
    if ((function(v2992) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v2992) && (function(v2993) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v2993) && pair_p(v2993.tl);
            })(v2992.tl);
        })(v2991) !== false) {
        var if_res1698 = rvoid();
    } else {
        var if_res1698 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t pair?))"), v2991));
    }
    if_res1698;
    return v2991.tl.tl.tl;
};
var caddr = function(v2994) {
    if ((function(v2995) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v2995) && (function(v2996) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v2996) && pair_p(v2996.tl);
            })(v2995.tl);
        })(v2994) !== false) {
        var if_res1699 = rvoid();
    } else {
        var if_res1699 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("caddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t pair?))"), v2994));
    }
    if_res1699;
    return v2994.tl.tl.hd;
};
var cadddr = function(v2997) {
    if ((function(v2998) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v2998) && (function(v2999) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v2999) && (function(v3000) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M1.Core.Pair.check(v3000) && pair_p(v3000.tl);
                })(v2999.tl);
            })(v2998.tl);
        })(v2997) !== false) {
        var if_res1700 = rvoid();
    } else {
        var if_res1700 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cadddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t (check/pair-of? #t pair?)))"), v2997));
    }
    if_res1700;
    return v2997.tl.tl.tl.hd;
};
var cddddr = function(v3001) {
    if ((function(v3002) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v3002) && (function(v3003) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v3003) && (function(v3004) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M1.Core.Pair.check(v3004) && pair_p(v3004.tl);
                })(v3003.tl);
            })(v3002.tl);
        })(v3001) !== false) {
        var if_res1701 = rvoid();
    } else {
        var if_res1701 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cddddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t (check/pair-of? #t pair?)))"), v3001));
    }
    if_res1701;
    return v3001.tl.tl.tl.tl;
};
var rnull = M1.Core.Pair.EMPTY;
var list = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Pair.makeList, 0), $rjs_core.UString.make("list"));
var null_p = M1.Core.Pair.isEmpty;
var list_p = M1.Core.Pair.isList;
var length = function(v3005) {
    if (list_p(v3005) !== false) {
        var if_res1702 = rvoid();
    } else {
        var if_res1702 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("length"), $rjs_core.UString.make("list?"), v3005));
    }
    if_res1702;
    return v3005.length;
};
var reverse = function(lst3006) {
    if (list_p(lst3006) !== false) {
        var if_res1703 = rvoid();
    } else {
        var if_res1703 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("reverse"), $rjs_core.UString.make("list?"), lst3006));
    }
    if_res1703;
    var loop3007 = function(lst3008, result3009) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst3008) !== false) {
            var if_res1704 = result3009;
        } else {
            var if_res1704 = loop3007(lst3008.tl, M1.Core.Pair.make(lst3008.hd, result3009));
        }
        return if_res1704;
    };
    return loop3007(lst3006, $rjs_core.Pair.EMPTY);
};
var list_times_ = function() {
    var let_result1705 = values();
    var n_args3010 = arguments.length;
    var top_arguments3011 = arguments;
    var loop3012 = function(ii3013, result3014) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((ii3013 === 0) !== false) {
            var if_res1706 = result3014;
        } else {
            var next_ii3015 = ii3013 - 1;
            var if_res1706 = loop3012(next_ii3015, M1.Core.Pair.make(top_arguments3011[next_ii3015], result3014));
        }
        return if_res1706;
    };
    return loop3012(n_args3010 - 1, arguments[n_args3010 - 1]);
};
var append = function() {
    var let_result1707 = values();
    var result3016 = $rjs_core.Pair.EMPTY;
    var lsts3017 = arguments;
    var loop3018 = function(i3019) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i3019 < lsts3017.length) !== false) {
            var lst3020 = lsts3017[i3019];
            result3016 = foldr(M1.Core.Pair.make, lst3020, result3016);
            var if_res1708 = loop3018(i3019 + 1);
        } else {
            var if_res1708 = rvoid();
        }
        return if_res1708;
    };
    loop3018(0);
    return result3016;
};
var for_each = function(lam3021) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1709 = null;
    } else {
        var if_res1709 = rvoid();
    }
    if_res1709;
    var let_result1710 = values();
    var lsts3022 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(lam3021) !== false) {
        var if_res1711 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), lam3021, $rjs_core.UString.make(", at:"), 0);
        var if_res1711 = null;
    }
    if_res1711;
    map.apply(null, [lam3021].concat(lsts3022));
    return null;
};
var mcons = function(hd3023, tl3024) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.MPair.make(hd3023, tl3024);
};
var mpair_p = function(v3025) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.MPair.check(v3025);
};
var mcar = function(p3026) {
    if (mpair_p(p3026) !== false) {
        var if_res1712 = rvoid();
    } else {
        var if_res1712 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("mcar"), $rjs_core.UString.make("mpair?"), p3026));
    }
    if_res1712;
    return p3026.car();
};
var mcdr = function(p3027) {
    if (mpair_p(p3027) !== false) {
        var if_res1713 = rvoid();
    } else {
        var if_res1713 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("mcdr"), $rjs_core.UString.make("mpair?"), p3027));
    }
    if_res1713;
    return p3027.cdr();
};
var set_mcar_bang_ = function(p3028, v3029) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (mpair_p(p3028) !== false) {
        var if_res1714 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("mpair?"), $rjs_core.UString.make(", given:"), p3028, $rjs_core.UString.make(", at:"), 0);
        var if_res1714 = null;
    }
    if_res1714;
    return p3028.setCar(v3029);
};
var set_mcdr_bang_ = function(p3030, v3031) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (mpair_p(p3030) !== false) {
        var if_res1715 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("mpair?"), $rjs_core.UString.make(", given:"), p3030, $rjs_core.UString.make(", at:"), 0);
        var if_res1715 = null;
    }
    if_res1715;
    return p3030.setCdr(v3031);
};
var make_struct_type = function(name3032, super_type3033, init_field_count3034, auto_field_count3035, auto_v3036, props3037, inspector3038, proc_spec3039, immutables3040, guard3041, constructor_name3042) {
    return M1.Core.Struct.makeStructType({
        'name': name3032.toString(),
        'superType': super_type3033,
        'initFieldCount': init_field_count3034,
        'autoFieldCount': auto_field_count3035,
        'autoV': auto_v3036,
        'props': props3037,
        'inspector': inspector3038,
        'procSpec': proc_spec3039,
        'immutables': immutables3040,
        'guard': guard3041,
        'constructorName': constructor_name3042
    });
};
var make_struct_field_accessor = function(ref3043, index3044, field_name3045) {
    return function(s3046) {
        if ((arguments.length !== 1) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res1716 = null;
        } else {
            var if_res1716 = rvoid();
        }
        if_res1716;
        return ref3043(s3046, index3044);
    };
};
var make_struct_field_mutator = function(set3047, index3048, fieldName3049) {
    return function(s3050, v3051) {
        if ((arguments.length !== 2) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res1717 = null;
        } else {
            var if_res1717 = rvoid();
        }
        if_res1717;
        return set3047(s3050, index3048, v3051);
    };
};
var make_struct_type_property = function(name3052, guard3053, supers3054, can_impersonate_p3055) {
    return M1.Core.Struct.makeStructTypeProperty({
        'name': name3052,
        'guard': guard3053,
        'supers': supers3054,
        'canImpersonate': can_impersonate_p3055
    });
};
var check_struct_type = function(name3056, what3057) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (what3057 !== false) {
        if (M1.Core.Struct.isStructType(what3057) !== false) {
            var if_res1718 = rvoid();
        } else {
            throw M1.Core.racketCoreError($rjs_core.UString.make("not a struct type"));
            var if_res1718 = null;
        }
        if_res1718;
        var if_res1719 = what3057;
    } else {
        var if_res1719 = rvoid();
    }
    return if_res1719;
};
var struct_type_p = function(v3058) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Struct.isStructType(v3058);
};
var struct_type_info = function(desc3059) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Values.make(M1.Core.Struct.structTypeInfo(desc3059));
};
var vector = function() {
    return M1.Core.Vector.make(M1.Core.argumentsToArray(arguments), true);
};
var make_vector = function(size3060, v3061) {
    if (integer_p(size3060) !== false) {
        var if_res1720 = rvoid();
    } else {
        var if_res1720 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-vector"), $rjs_core.UString.make("integer?"), size3060));
    }
    if_res1720;
    if (eq_p(v3061, undefined) !== false) {
        var if_res1721 = 0;
    } else {
        var if_res1721 = v3061;
    }
    return M1.Core.Vector.makeInit(size3060, if_res1721);
};
var vector_p = M1.Core.Vector.check;
var vector_length = function(v3062) {
    if (vector_p(v3062) !== false) {
        var if_res1722 = rvoid();
    } else {
        var if_res1722 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-length"), $rjs_core.UString.make("vector?"), v3062));
    }
    if_res1722;
    return v3062.length();
};
var vector_ref = function(vec3063, i3064) {
    if (vector_p(vec3063) !== false) {
        var if_res1723 = rvoid();
    } else {
        var if_res1723 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-ref"), $rjs_core.UString.make("vector?"), vec3063));
    }
    if_res1723;
    if (integer_p(i3064) !== false) {
        var if_res1724 = rvoid();
    } else {
        var if_res1724 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-ref"), $rjs_core.UString.make("integer?"), i3064));
    }
    if_res1724;
    return vec3063.ref(i3064);
};
var vector_set_bang_ = function(vec3065, i3066, v3067) {
    if (vector(vec3065) !== false) {
        var if_res1725 = rvoid();
    } else {
        var if_res1725 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-set!"), $rjs_core.UString.make("vector"), vec3065));
    }
    if_res1725;
    if (integer_p(i3066) !== false) {
        var if_res1726 = rvoid();
    } else {
        var if_res1726 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-set!"), $rjs_core.UString.make("integer?"), i3066));
    }
    if_res1726;
    return vec3065.set(i3066, v3067);
};
var vector__gt_list = function(vec3068) {
    if (vector_p(vec3068) !== false) {
        var if_res1727 = rvoid();
    } else {
        var if_res1727 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector->list"), $rjs_core.UString.make("vector?"), vec3068));
    }
    if_res1727;
    return M1.Core.Pair.listFromArray(vec3068.items);
};
var list__gt_vector = function(lst3069) {
    if (list_p(lst3069) !== false) {
        var if_res1728 = rvoid();
    } else {
        var if_res1728 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("list->vector"), $rjs_core.UString.make("list?"), lst3069));
    }
    if_res1728;
    return M1.Core.Vector.make(M1.Core.Pair.listToArray(lst3069), true);
};
var vector__gt_immutable_vector = function(vec3070) {
    if (vector_p(vec3070) !== false) {
        var if_res1729 = rvoid();
    } else {
        var if_res1729 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector->immutable-vector"), $rjs_core.UString.make("vector?"), vec3070));
    }
    if_res1729;
    return M1.Core.Vector.copy(vec3070, false);
};
var vector_copy = function(vec3071) {
    if (vector_p(vec3071) !== false) {
        var if_res1730 = rvoid();
    } else {
        var if_res1730 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy"), $rjs_core.UString.make("vector?"), vec3071));
    }
    if_res1730;
    return M1.Core.Vector.copy(vec3071, true);
};
var vector_copy_bang_ = function(dest3072, dest_start3073, src3074, src_start3075, src_end3076) {
    if (vector_p(dest3072) !== false) {
        var if_res1731 = rvoid();
    } else {
        var if_res1731 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("vector?"), dest3072));
    }
    if_res1731;
    if (integer_p(dest_start3073) !== false) {
        var if_res1732 = rvoid();
    } else {
        var if_res1732 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), dest_start3073));
    }
    if_res1732;
    if (vector_p(src3074) !== false) {
        var if_res1733 = rvoid();
    } else {
        var if_res1733 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("vector?"), src3074));
    }
    if_res1733;
    if (integer_p(src_start3075) !== false) {
        var if_res1734 = rvoid();
    } else {
        var if_res1734 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), src_start3075));
    }
    if_res1734;
    if (integer_p(src_end3076) !== false) {
        var if_res1735 = rvoid();
    } else {
        var if_res1735 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), src_end3076));
    }
    if_res1735;
    return dest3072.copy(dest_start3073, src3074, src_start3075, src_end3076);
};
var hash = function() {
    var let_result1736 = values();
    var kv_times_3077 = arguments;
    if (((kv_times_3077.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res1737 = null;
    } else {
        var if_res1737 = rvoid();
    }
    if_res1737;
    var items3078 = [];
    var loop3079 = function(i3080) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i3080 < kv_times_3077.length) !== false) {
            items3078.push([kv_times_3077[i3080], kv_times_3077[__plus_(i3080, 1)]]);
            var if_res1738 = loop3079(i3080 + 2);
        } else {
            var if_res1738 = rvoid();
        }
        return if_res1738;
    };
    loop3079(0);
    return M1.Core.Hash.makeEqual(items3078, false);
};
var hasheqv = function() {
    var let_result1739 = values();
    var kv_times_3081 = arguments;
    if (((kv_times_3081.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res1740 = null;
    } else {
        var if_res1740 = rvoid();
    }
    if_res1740;
    var items3082 = [];
    var loop3083 = function(i3084) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i3084 < kv_times_3081.length) !== false) {
            items3082.push([kv_times_3081[i3084], kv_times_3081[__plus_(i3084, 1)]]);
            var if_res1741 = loop3083(i3084 + 2);
        } else {
            var if_res1741 = rvoid();
        }
        return if_res1741;
    };
    loop3083(0);
    return M1.Core.Hash.makeEqv(items3082, false);
};
var hasheq = function() {
    var let_result1742 = values();
    var kv_times_3085 = arguments;
    if (((kv_times_3085.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res1743 = null;
    } else {
        var if_res1743 = rvoid();
    }
    if_res1743;
    var items3086 = [];
    var loop3087 = function(i3088) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i3088 < kv_times_3085.length) !== false) {
            items3086.push([kv_times_3085[i3088], kv_times_3085[__plus_(i3088, 1)]]);
            var if_res1744 = loop3087(i3088 + 2);
        } else {
            var if_res1744 = rvoid();
        }
        return if_res1744;
    };
    loop3087(0);
    return M1.Core.Hash.makeEq(items3086, false);
};
var make_hash = function(assocs3089) {
    var let_result1745 = values();
    var assocs_times_3090 = assocs3089 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqualFromAssocs(assocs_times_3090, true);
};
var make_hasheqv = function(assocs3091) {
    var let_result1746 = values();
    var assocs_times_3092 = assocs3091 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqvFromAssocs(assocs_times_3092, true);
};
var make_hasheq = function(assocs3093) {
    var let_result1747 = values();
    var assocs_times_3094 = assocs3093 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqFromAssocs(assocs_times_3094, true);
};
var make_immutable_hash = function(assocs3095) {
    var let_result1748 = values();
    var assocs_times_3096 = assocs3095 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqualFromAssocs(assocs_times_3096, false);
};
var make_immutable_hasheqv = function(assocs3097) {
    var let_result1749 = values();
    var assocs_times_3098 = assocs3097 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqvFromAssocs(assocs_times_3098, false);
};
var make_immutable_hasheq = function(assocs3099) {
    var let_result1750 = values();
    var assocs_times_3100 = assocs3099 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqFromAssocs(assocs_times_3100, false);
};
var hash_p = M1.Core.Hash.check;
var hash_equal_p = M1.Core.Hash.isEqualHash;
var hash_eqv_p = M1.Core.Hash.isEqvHash;
var hash_eq_p = M1.Core.Hash.isEqHash;
var hash_weak_p = M1.Core.Hash.isWeakHash;
var cl1751 = function(h3101, k3102) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h3101.hasKey(k3102) !== false) {
        var if_res1754 = h3101._h.get(k3102);
    } else {
        var if_res1754 = raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-ref"), $rjs_core.UString.make("no value found for key"), $rjs_core.UString.make("key"), k3102));
    }
    return if_res1754;
};
var cl1752 = function(h3103, k3104, fail3105) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h3103.ref(k3104, fail3105);
};
var hash_ref = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1753 = {
        '2': cl1751,
        '3': cl1752
    } [arguments.length];
    if (fixed_lam1753 !== undefined) {
        return fixed_lam1753.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_has_key_p = function(h3106, k3107) {
    return h3106.hasKey(k3107);
};
var cl1755 = function(h3108, k3109) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h3108.hasKey(k3109) !== false) {
        var if_res1758 = h3108.refKey(k3109);
    } else {
        var if_res1758 = raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-ref-key"), $rjs_core.UString.make("hash does not contain key"), $rjs_core.UString.make("key"), k3109));
    }
    return if_res1758;
};
var cl1756 = function(h3110, k3111, fail3112) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h3110.refKey(k3111, fail3112);
};
var hash_ref_key = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1757 = {
        '2': cl1755,
        '3': cl1756
    } [arguments.length];
    if (fixed_lam1757 !== undefined) {
        return fixed_lam1757.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_set = function(h3113, k3114, v3115) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h3113.isImmutable() !== false) {
        var if_res1759 = h3113.set(k3114, v3115);
    } else {
        var if_res1759 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-set"), $rjs_core.UString.make("(and/c hash? immutable?)"), 0, h3113, k3114, v3115));
    }
    return if_res1759;
};
var hash_remove = function(h3116, k3117) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h3116.isImmutable() !== false) {
        var if_res1760 = h3116.remove(k3117);
    } else {
        var if_res1760 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-remove"), $rjs_core.UString.make("(and/c hash? immutable?)"), 0, h3116, k3117));
    }
    return if_res1760;
};
var cl1761 = function(h3118, proc3119) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Hash.map(h3118, proc3119);
};
var cl1762 = function(h3120, proc3121, try_order_p3122) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Hash.map(h3120, proc3121);
};
var hash_map = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1763 = {
        '2': cl1761,
        '3': cl1762
    } [arguments.length];
    if (fixed_lam1763 !== undefined) {
        return fixed_lam1763.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_count = function(h3123) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h3123.size();
};
var hash_remove_bang_ = function(h3124, k3125) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h3124.isImmutable(h3124) !== false) {
        var if_res1764 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-remove!"), $rjs_core.UString.make("(and/c hash? (not/c immutable?))"), 0, h3124, k3125));
    } else {
        var if_res1764 = h3124.doremove(k3125);
    }
    return if_res1764;
};
var hash_set_bang_ = function(h3126, k3127, v3128) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h3126.isImmutable(h3126) !== false) {
        var if_res1765 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-set!"), $rjs_core.UString.make("(and/c hash? (not/c immutable?))"), 0, h3126, k3127, v3128));
    } else {
        var if_res1765 = h3126.doset(k3127, v3128);
    }
    return if_res1765;
};
var hash_iterate_first = function(h3129) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h3129.iterateFirst();
};
var hash_iterate_next = function(h3130, i3131) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h3130.iterateNext(i3131);
};
var hash_iterate_key = function(h3132, i3133) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h3132.iterateKey(i3133);
};
var hash_iterate_value = function(h3134, i3135) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h3134.iterateValue(i3135);
};
var hash_iterate_key_plus_value = function(h3136, i3137) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h3136.iterateKeyValue(i3137);
};
var hash_iterate_pair = function(h3138, i3139) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h3138.iteratePair(i3139);
};
var hash_keys_subset_p = function(h13140, h23141) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((M1.Core.Hash.check(h13140) && M1.Core.Hash.check(h23141)) !== false) {
        if (h13140.isSameType(h23141) !== false) {
            var if_res1766 = h13140.isKeysSubset(h23141);
        } else {
            var if_res1766 = raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-keys-subset?"), $rjs_core.UString.make("given hash tables do not use the same key comparison"), $rjs_core.UString.make("first table"), h13140, $rjs_core.UString.make("second table"), h23141));
        }
        var if_res1767 = if_res1766;
    } else {
        var if_res1767 = false;
    }
    return if_res1767;
};
var hash_union = function(h13142, h23143) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h13142.union(h23143);
};
var hash_strong_p = function(h3144) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return true;
};
var apply = function(lam3145) {
    var let_result1768 = values();
    var args3146 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(lam3145) !== false) {
        var if_res1769 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), lam3145, $rjs_core.UString.make(", at:"), 0);
        var if_res1769 = null;
    }
    if_res1769;
    var let_result1770 = values();
    if (zero_p(args3146.length) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1774 = null;
    } else {
        if (equal_p(args3146.length, 1) !== false) {
            if (null_p(args3146[0]) !== false) {
                var if_res1772 = rvoid();
            } else {
                if (M1.Core.Pair.check(args3146[0]) !== false) {
                    var if_res1771 = rvoid();
                } else {
                    throw M1.Core.racketContractError($rjs_core.UString.make("expected a"), M1.Core.Pair, $rjs_core.UString.make(", but given"), args3146[0]);
                    var if_res1771 = null;
                }
                var if_res1772 = if_res1771;
            }
            if_res1772;
            var if_res1773 = M1.Core.Pair.listToArray(args3146[0]);
        } else {
            var if_res1773 = args3146.concat(M1.Core.Pair.listToArray(args3146.pop()));
        }
        var if_res1774 = if_res1773;
    }
    var final_args3147 = if_res1774;
    return lam3145.apply(null, final_args3147);
};
var map = function(fn3148) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1775 = null;
    } else {
        var if_res1775 = rvoid();
    }
    if_res1775;
    var let_result1776 = values();
    var lists3149 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(fn3148) !== false) {
        var if_res1777 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn3148, $rjs_core.UString.make(", at:"), 0);
        var if_res1777 = null;
    }
    if_res1777;
    var let_result1778 = values();
    if (__lt__eq_(lists3149.length, 0) !== false) {
        var if_res1779 = error($rjs_core.PrimitiveSymbol.make("map"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res1779 = rvoid();
    }
    if_res1779;
    var let_result1780 = values();
    var lst_len3150 = length(lists3149[0]);
    var loop3151 = function(i3152) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i3152 < lists3149.length) !== false) {
            var v3153 = lists3149[i3152];
            if (eq_p(length(v3153), lst_len3150) !== false) {
                var if_res1781 = rvoid();
            } else {
                var if_res1781 = error($rjs_core.PrimitiveSymbol.make("map"), $rjs_core.UString.make("all input lists must have equal length"));
            }
            if_res1781;
            var if_res1782 = loop3151(i3152 + 1);
        } else {
            var if_res1782 = rvoid();
        }
        return if_res1782;
    };
    loop3151(1);
    var let_result1783 = values();
    var result3154 = Array(lst_len3150);
    var args3155 = Array(lists3149.length);
    var loop3156 = function(result_i3157) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((result_i3157 < lst_len3150) !== false) {
            var loop3158 = function(lst_j3159) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if ((lst_j3159 < lists3149.length) !== false) {
                    var lst3160 = lists3149[lst_j3159];
                    args3155[lst_j3159] = lst3160.hd;
                    lists3149[lst_j3159] = lst3160.tl;
                    var if_res1784 = loop3158(lst_j3159 + 1);
                } else {
                    var if_res1784 = rvoid();
                }
                return if_res1784;
            };
            loop3158(0);
            result3154[result_i3157] = fn3148.apply(null, args3155);
            var if_res1785 = loop3156(result_i3157 + 1);
        } else {
            var if_res1785 = rvoid();
        }
        return if_res1785;
    };
    loop3156(0);
    return M1.Core.Pair.listFromArray(result3154);
};
var foldl = function(fn3161, init3162) {
    if ((arguments.length < 2) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1786 = null;
    } else {
        var if_res1786 = rvoid();
    }
    if_res1786;
    var let_result1787 = values();
    var lists3163 = Array.prototype.slice.call(arguments, 2);
    if (procedure_p(fn3161) !== false) {
        var if_res1788 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn3161, $rjs_core.UString.make(", at:"), 0);
        var if_res1788 = null;
    }
    if_res1788;
    var let_result1789 = values();
    if (__lt__eq_(lists3163.length, 0) !== false) {
        var if_res1790 = error($rjs_core.PrimitiveSymbol.make("foldl"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res1790 = rvoid();
    }
    if_res1790;
    var let_result1791 = values();
    var lst_len3164 = length(lists3163[0]);
    var loop3165 = function(i3166) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i3166 < lists3163.length) !== false) {
            var v3167 = lists3163[i3166];
            if (eq_p(length(v3167), lst_len3164) !== false) {
                var if_res1792 = rvoid();
            } else {
                var if_res1792 = error($rjs_core.PrimitiveSymbol.make("foldl"), $rjs_core.UString.make("all input lists must have equal length"));
            }
            if_res1792;
            var if_res1793 = loop3165(i3166 + 1);
        } else {
            var if_res1793 = rvoid();
        }
        return if_res1793;
    };
    loop3165(1);
    var let_result1794 = values();
    var result3168 = init3162;
    var args3169 = Array(lists3163.length + 1);
    var loop3170 = function(result_i3171) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((result_i3171 < lst_len3164) !== false) {
            var loop3172 = function(lst_j3173) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if ((lst_j3173 < lists3163.length) !== false) {
                    var lst3174 = lists3163[lst_j3173];
                    args3169[lst_j3173] = lst3174.hd;
                    lists3163[lst_j3173] = lst3174.tl;
                    var if_res1795 = loop3172(lst_j3173 + 1);
                } else {
                    var if_res1795 = rvoid();
                }
                return if_res1795;
            };
            loop3172(0);
            args3169[lists3163.length] = result3168;
            result3168 = fn3161.apply(null, args3169);
            var if_res1796 = loop3170(result_i3171 + 1);
        } else {
            var if_res1796 = rvoid();
        }
        return if_res1796;
    };
    loop3170(0);
    return result3168;
};
var _foldr = function(fn3175, init3176, lists3177) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (null_p(lists3177[0]) !== false) {
        var if_res1798 = init3176;
    } else {
        var args3178 = Array(add1(lists3177.length));
        var loop3179 = function(ii3180) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((ii3180 < lists3177.length) !== false) {
                var lst3181 = lists3177[ii3180];
                args3178[ii3180] = lst3181.hd;
                lists3177[ii3180] = lst3181.tl;
                var if_res1797 = loop3179(ii3180 + 1);
            } else {
                var if_res1797 = rvoid();
            }
            return if_res1797;
        };
        loop3179(0);
        args3178[lists3177.length] = _foldr(fn3175, init3176, lists3177);
        var if_res1798 = fn3175.apply(null, args3178);
    }
    return if_res1798;
};
var foldr = function(fn3182, init3183) {
    if ((arguments.length < 2) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1799 = null;
    } else {
        var if_res1799 = rvoid();
    }
    if_res1799;
    var let_result1800 = values();
    var lists3184 = Array.prototype.slice.call(arguments, 2);
    if (procedure_p(fn3182) !== false) {
        var if_res1801 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn3182, $rjs_core.UString.make(", at:"), 0);
        var if_res1801 = null;
    }
    if_res1801;
    var let_result1802 = values();
    if (__lt__eq_(lists3184.length, 0) !== false) {
        var if_res1803 = error($rjs_core.PrimitiveSymbol.make("foldr"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res1803 = rvoid();
    }
    if_res1803;
    var let_result1804 = values();
    var lst_len3185 = length(lists3184[0]);
    var loop3186 = function(i3187) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i3187 < lists3184.length) !== false) {
            var v3188 = lists3184[i3187];
            if (eq_p(length(v3188), lst_len3185) !== false) {
                var if_res1805 = rvoid();
            } else {
                var if_res1805 = error($rjs_core.PrimitiveSymbol.make("foldr"), $rjs_core.UString.make("all input lists must have equal length"));
            }
            if_res1805;
            var if_res1806 = loop3186(i3187 + 1);
        } else {
            var if_res1806 = rvoid();
        }
        return if_res1806;
    };
    loop3186(1);
    return _foldr(fn3182, init3183, lists3184);
};
var cl1807 = function(end3189) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return range(0, end3189, 1);
};
var cl1808 = function(start3190, end3191) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (__lt_(start3190, end3191) !== false) {
        var if_res1811 = 1;
    } else {
        var if_res1811 = -1;
    }
    return range(start3190, end3191, if_res1811);
};
var cl1809 = function(start3192, end3193, step3194) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var result3195 = [];
    if ((__gt__eq_(step3194, 0) && __lt_(step3194, end3193)) !== false) {
        var loop3196 = function(i3197) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((i3197 < end3193) !== false) {
                result3195.push(i3197);
                var if_res1812 = loop3196(i3197 + step3194);
            } else {
                var if_res1812 = rvoid();
            }
            return if_res1812;
        };
        var if_res1815 = loop3196(start3192);
    } else {
        if ((__lt__eq_(step3194, 0) && __lt_(end3193, start3192)) !== false) {
            var loop3198 = function(i3199) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if ((i3199 < __(end3193)) !== false) {
                    result3195.push(__(i3199));
                    var if_res1813 = loop3198(i3199 + __(step3194));
                } else {
                    var if_res1813 = rvoid();
                }
                return if_res1813;
            };
            var if_res1814 = loop3198(__(start3192));
        } else {
            var if_res1814 = rvoid();
        }
        var if_res1815 = if_res1814;
    }
    if_res1815;
    return M1.Core.Pair.listFromArray(result3195);
};
var range = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1810 = {
        '1': cl1807,
        '2': cl1808,
        '3': cl1809
    } [arguments.length];
    if (fixed_lam1810 !== undefined) {
        return fixed_lam1810.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3]);
var remove = function(v3200, lst3201, proc3202) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(proc3202, undefined) !== false) {
        proc3202 = M1.Core.isEqual;
        var if_res1816 = null;
    } else {
        var if_res1816 = rvoid();
    }
    if_res1816;
    var loop3203 = function(result3204, lst3205) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst3205) !== false) {
            var if_res1818 = reverse(result3204);
        } else {
            if (proc3202(v3200, car(lst3205)) !== false) {
                var if_res1817 = append(reverse(result3204), cdr(lst3205));
            } else {
                var if_res1817 = rvoid();
            }
            if_res1817;
            var if_res1818 = loop3203(cons(car(lst3205), result3204), cdr(lst3205));
        }
        return if_res1818;
    };
    return loop3203($rjs_core.Pair.EMPTY, lst3201);
};
var filter = function(fn3206, lst3207) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop3208 = function(result3209, lst3210) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst3210) !== false) {
            var if_res1820 = reverse(result3209);
        } else {
            if (fn3206(lst3210.hd) !== false) {
                var if_res1819 = loop3208(M1.Core.Pair.make(lst3210.hd, result3209), lst3210.tl);
            } else {
                var if_res1819 = loop3208(result3209, lst3210.tl);
            }
            var if_res1820 = if_res1819;
        }
        return if_res1820;
    };
    return loop3208($rjs_core.Pair.EMPTY, lst3207);
};
var ormap = function(fn3211) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1821 = null;
    } else {
        var if_res1821 = rvoid();
    }
    if_res1821;
    var let_result1822 = values();
    var lists3212 = Array.prototype.slice.call(arguments, 1);
    return foldl.apply(this, [function() {
        var args3213 = M1.Core.argumentsToArray(arguments);
        var final_arg3214 = args3213.pop();
        return (final_arg3214 || fn3211.apply(null, args3213)) && true;
    }, false].concat(lists3212));
};
var andmap = function(fn3215) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1823 = null;
    } else {
        var if_res1823 = rvoid();
    }
    if_res1823;
    var let_result1824 = values();
    var lists3216 = Array.prototype.slice.call(arguments, 1);
    return foldl.apply(this, [function() {
        var args3217 = M1.Core.argumentsToArray(arguments);
        var final_arg3218 = args3217.pop();
        return (final_arg3218 && fn3215.apply(null, args3217)) && true;
    }, true].concat(lists3216));
};
var member = function(v3219, lst3220) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop3221 = function(lst3222) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst3222) !== false) {
            var if_res1826 = false;
        } else {
            if (M1.Core.isEqual(v3219, lst3222.hd) !== false) {
                var if_res1825 = lst3222;
            } else {
                var if_res1825 = loop3221(lst3222.tl);
            }
            var if_res1826 = if_res1825;
        }
        return if_res1826;
    };
    return loop3221(lst3220);
};
var compose = function() {
    var procs3223 = M1.Core.argumentsToArray(arguments);
    return function() {
        var let_result1827 = values();
        var result3224 = M1.Core.argumentsToArray(arguments);
        var procs_times_3225 = procs3223.reverse();
        var loop3226 = function(i3227) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((i3227 < procs_times_3225.length) !== false) {
                var p3228 = procs_times_3225[i3227];
                result3224 = p3228.apply(null, result3224);
                if (M1.Core.Values.check(result3224) !== false) {
                    result3224 = result3224.getAll();
                    var if_res1828 = null;
                } else {
                    result3224 = [result3224];
                    var if_res1828 = null;
                }
                if_res1828;
                var if_res1829 = loop3226(i3227 + 1);
            } else {
                var if_res1829 = rvoid();
            }
            return if_res1829;
        };
        loop3226(0);
        if ((result3224.length === 1) !== false) {
            var if_res1830 = result3224[0];
        } else {
            var if_res1830 = M1.Core.Values.make(result3224);
        }
        return if_res1830;
    };
};
var compose1 = function() {
    var procs3229 = M1.Core.argumentsToArray(arguments);
    return function(v3230) {
        var let_result1831 = values();
        var result3231 = v3230;
        var procs_times_3232 = procs3229.reverse();
        var loop3233 = function(i3234) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((i3234 < procs_times_3232.length) !== false) {
                var p3235 = procs_times_3232[i3234];
                result3231 = p3235(result3231);
                var if_res1832 = loop3233(i3234 + 1);
            } else {
                var if_res1832 = rvoid();
            }
            return if_res1832;
        };
        loop3233(0);
        return result3231;
    };
};
var list_ref = function(lst3236, pos3237) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop3238 = function(i3239, lst3240) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst3240) !== false) {
            var if_res1834 = error($rjs_core.PrimitiveSymbol.make("list-ref?"), $rjs_core.UString.make("insufficient elements"));
        } else {
            if ((i3239 === pos3237) !== false) {
                var if_res1833 = lst3240.hd;
            } else {
                var if_res1833 = loop3238(i3239 + 1, lst3240.tl);
            }
            var if_res1834 = if_res1833;
        }
        return if_res1834;
    };
    return loop3238(0, lst3236);
};
var build_list = function(n3241, proc3242) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var arr3243 = Array(n3241);
    var loop3244 = function(i3245) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i3245 < n3241) !== false) {
            arr3243[i3245] = proc3242(i3245);
            var if_res1835 = loop3244(i3245 + 1);
        } else {
            var if_res1835 = rvoid();
        }
        return if_res1835;
    };
    loop3244(0);
    return M1.Core.Pair.listFromArray(arr3243);
};
var make_list = function(n3246, v3247) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop3248 = function(result3249, i3250) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i3250 === n3246) !== false) {
            var if_res1836 = result3249;
        } else {
            var if_res1836 = loop3248(M1.Core.Pair.make(v3247, result3249), i3250 + 1);
        }
        return if_res1836;
    };
    return loop3248($rjs_core.Pair.EMPTY, 0);
};
var flatten = function(lst3251) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (null_p(lst3251) !== false) {
        var if_res1838 = lst3251;
    } else {
        if (pair_p(lst3251) !== false) {
            var if_res1837 = append(flatten(lst3251.hd), flatten(lst3251.tl));
        } else {
            var if_res1837 = list(lst3251);
        }
        var if_res1838 = if_res1837;
    }
    return if_res1838;
};
var assoc = function(k3252, lst3253) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop3254 = function(lst3255) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst3255) !== false) {
            var if_res1840 = false;
        } else {
            if (M1.Core.isEqual(k3252, lst3255.hd.hd) !== false) {
                var if_res1839 = lst3255.hd;
            } else {
                var if_res1839 = loop3254(lst3255.tl);
            }
            var if_res1840 = if_res1839;
        }
        return if_res1840;
    };
    return loop3254(lst3253);
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
var string_ref = function(s3256, i3257) {
    if (string_p(s3256) !== false) {
        var if_res1841 = rvoid();
    } else {
        var if_res1841 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-ref"), $rjs_core.UString.make("string?"), s3256));
    }
    if_res1841;
    if (exact_nonnegative_integer_p(i3257) !== false) {
        var if_res1842 = rvoid();
    } else {
        var if_res1842 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-ref"), $rjs_core.UString.make("exact-nonnegative-integer?"), i3257));
    }
    if_res1842;
    if (s3256.isValidIndex(i3257) !== false) {
        var if_res1843 = s3256.charAt(i3257);
    } else {
        var if_res1843 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("string-ref"), $rjs_core.UString.make("string"), s3256, s3256.length, i3257));
    }
    return if_res1843;
};
var string_eq__p = function(sa3258, sb3259) {
    if (string_p(sa3258) !== false) {
        var if_res1844 = rvoid();
    } else {
        var if_res1844 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string=?"), $rjs_core.UString.make("string?"), sa3258));
    }
    if_res1844;
    if (string_p(sb3259) !== false) {
        var if_res1845 = rvoid();
    } else {
        var if_res1845 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string=?"), $rjs_core.UString.make("string?"), sb3259));
    }
    if_res1845;
    return M1.Core.UString.eq(sa3258, sb3259);
};
var string_lt__p = function(sa3260, sb3261) {
    if (string_p(sa3260) !== false) {
        var if_res1846 = rvoid();
    } else {
        var if_res1846 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<?"), $rjs_core.UString.make("string?"), sa3260));
    }
    if_res1846;
    if (string_p(sb3261) !== false) {
        var if_res1847 = rvoid();
    } else {
        var if_res1847 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<?"), $rjs_core.UString.make("string?"), sb3261));
    }
    if_res1847;
    return M1.Core.UString.lt(sa3260, sb3261);
};
var string_lt__eq__p = function(sa3262, sb3263) {
    if (string_p(sa3262) !== false) {
        var if_res1848 = rvoid();
    } else {
        var if_res1848 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<=?"), $rjs_core.UString.make("string?"), sa3262));
    }
    if_res1848;
    if (string_p(sb3263) !== false) {
        var if_res1849 = rvoid();
    } else {
        var if_res1849 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<=?"), $rjs_core.UString.make("string?"), sb3263));
    }
    if_res1849;
    return M1.Core.UString.lte(sa3262, sb3263);
};
var string_gt__p = function(sa3264, sb3265) {
    if (string_p(sa3264) !== false) {
        var if_res1850 = rvoid();
    } else {
        var if_res1850 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>?"), $rjs_core.UString.make("string?"), sa3264));
    }
    if_res1850;
    if (string_p(sb3265) !== false) {
        var if_res1851 = rvoid();
    } else {
        var if_res1851 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>?"), $rjs_core.UString.make("string?"), sb3265));
    }
    if_res1851;
    return M1.Core.UString.gt(sa3264, sb3265);
};
var string_gt__eq__p = function(sa3266, sb3267) {
    if (string_p(sa3266) !== false) {
        var if_res1852 = rvoid();
    } else {
        var if_res1852 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>=?"), $rjs_core.UString.make("string?"), sa3266));
    }
    if_res1852;
    if (string_p(sb3267) !== false) {
        var if_res1853 = rvoid();
    } else {
        var if_res1853 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>=?"), $rjs_core.UString.make("string?"), sb3267));
    }
    if_res1853;
    return M1.Core.UString.gte(sa3266, sb3267);
};
var string_p = M1.Core.attachProcedureName(M1.Core.UString.check, $rjs_core.UString.make("string?"));
var fprintf = $rjs_core.attachProcedureArity(function(out3268, form3269, ...args32701854) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args3270 = $rjs_core.Pair.listFromArray(args32701854);
    return apply(M1.Kernel.fprintf, print_as_expression(), out3268, form3269, args3270);
});
var eprintf = $rjs_core.attachProcedureArity(function(form3271, ...args32721855) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args3272 = $rjs_core.Pair.listFromArray(args32721855);
    return apply(M1.Kernel.fprintf, print_as_expression(), current_error_port(), form3271, args3272);
});
var printf = $rjs_core.attachProcedureArity(function(form3273, ...args32741856) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args3274 = $rjs_core.Pair.listFromArray(args32741856);
    return apply(M1.Kernel.fprintf, print_as_expression(), current_output_port(), form3273, args3274);
});
var format = $rjs_core.attachProcedureArity(function(form3275, ...args32761857) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args3276 = $rjs_core.Pair.listFromArray(args32761857);
    var out3277 = open_output_string();
    apply(fprintf, out3277, form3275, args3276);
    return get_output_string(out3277);
});
var symbol_p = M1.Core.PrimitiveSymbol.check;
var keyword_p = M1.Core.Keyword.check;
var make_string3278 = function(k23279, c13280) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var k3281 = k23279;
    if (false !== false) {
        var if_res1858 = $rjs_core.Char.charFromCodepoint(0);
    } else {
        var if_res1858 = c13280;
    }
    var c3282 = if_res1858;
    return M1.Core.UString.repeatChar(k3281, c3282);
};
var cl1859 = function(k3283) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_string3278(k3283, $rjs_core.Char.charFromCodepoint(0));
};
var cl1860 = function(k3284, c13285) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_string3278(k3284, c13285);
};
var make_string = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1861 = {
        '1': cl1859,
        '2': cl1860
    } [arguments.length];
    if (fixed_lam1861 !== undefined) {
        return fixed_lam1861.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var list__gt_string = function(lst3286) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Kernel.listToString(lst3286);
};
var string__gt_list3287 = function(str33288) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(str33288, M4.unsafe_undefined) !== false) {
        var if_res1862 = string_p;
    } else {
        var if_res1862 = str33288;
    }
    var str3289 = if_res1862;
    return M1.Core.Pair.listFromArray(M1.Core.UString.toArray(str3289));
};
var cl1863 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_list3287(M4.unsafe_undefined);
};
var cl1864 = function(str33290) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_list3287(str33290);
};
var string__gt_list = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1865 = {
        '0': cl1863,
        '1': cl1864
    } [arguments.length];
    if (fixed_lam1865 !== undefined) {
        return fixed_lam1865.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var string__gt_immutable_string3291 = function(s43292) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(s43292, M4.unsafe_undefined) !== false) {
        var if_res1866 = string_p;
    } else {
        var if_res1866 = s43292;
    }
    var s3293 = if_res1866;
    return M1.Core.UString.stringToImmutableString(s3293);
};
var cl1867 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_immutable_string3291(M4.unsafe_undefined);
};
var cl1868 = function(s43294) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_immutable_string3291(s43294);
};
var string__gt_immutable_string = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1869 = {
        '0': cl1867,
        '1': cl1868
    } [arguments.length];
    if (fixed_lam1869 !== undefined) {
        return fixed_lam1869.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var symbol__gt_string = function(v3295) {
    if (symbol_p(v3295) !== false) {
        var if_res1870 = rvoid();
    } else {
        var if_res1870 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("symbol->string"), $rjs_core.UString.make("symbol?"), v3295));
    }
    if_res1870;
    return M1.Core.UString.makeMutable(v3295.toString());
};
var string__gt_symbol = function(s3296) {
    if (string_p(s3296) !== false) {
        var if_res1871 = rvoid();
    } else {
        var if_res1871 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->symbol"), $rjs_core.UString.make("string?"), s3296));
    }
    if_res1871;
    return M1.Core.PrimitiveSymbol.make(s3296);
};
var string__gt_uninterned_symbol = function(s3297) {
    if (string_p(s3297) !== false) {
        var if_res1872 = rvoid();
    } else {
        var if_res1872 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->uninterned-symbol"), $rjs_core.UString.make("string?"), s3297));
    }
    if_res1872;
    return M1.Core.PrimitiveSymbol.makeUninterned(s3297);
};
var string__gt_unreadable_symbol = function(s3298) {
    if (string_p(s3298) !== false) {
        var if_res1873 = rvoid();
    } else {
        var if_res1873 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->unreadable-symbol"), $rjs_core.UString.make("string?"), s3298));
    }
    if_res1873;
    return M1.Core.PrimitiveSymbol.make(s3298);
};
var string__gt_number3299 = function(s63300, radix53301) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var s3302 = s63300;
    if (false !== false) {
        var if_res1874 = 10;
    } else {
        var if_res1874 = radix53301;
    }
    var radix3303 = if_res1874;
    var integer_in3304 = function(lo3305, hi3306) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return function(v3307) {
            return (exact_integer_p(v3307) && __gt__eq_(v3307, 2)) && __lt__eq_(v3307, 16);
        };
    };
    if (string_p(s3302) !== false) {
        var if_res1875 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("string?"), $rjs_core.UString.make(", given:"), s3302, $rjs_core.UString.make(", at:"), 0);
        var if_res1875 = null;
    }
    if_res1875;
    var let_result1876 = values();
    if (integer_in3304(2, 16)(radix3303) !== false) {
        var if_res1877 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("(integer-in 2 16)"), $rjs_core.UString.make(", given:"), radix3303, $rjs_core.UString.make(", at:"), 1);
        var if_res1877 = null;
    }
    if_res1877;
    var let_result1878 = values();
    var js_string__gt_number3308 = function() {
        if (arguments.length !== 0) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var result3309 = parseInt(s3302, radix3303);
        if ((isNaN(result3309) || not(s3302.isValidInteger(radix3303))) !== false) {
            var if_res1879 = false;
        } else {
            var if_res1879 = result3309;
        }
        return if_res1879;
    };
    return js_string__gt_number3308();
};
var cl1880 = function(s3311) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_number3299(s3311, 10);
};
var cl1881 = function(s3312, radix53313) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_number3299(s3312, radix53313);
};
var string__gt_number = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1882 = {
        '1': cl1880,
        '2': cl1881
    } [arguments.length];
    if (fixed_lam1882 !== undefined) {
        return fixed_lam1882.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var symbol_interned_p = function(sym3314) {
    if (symbol_p(sym3314) !== false) {
        var if_res1883 = rvoid();
    } else {
        var if_res1883 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("symbol-interned?"), $rjs_core.UString.make("symbol?"), sym3314));
    }
    if_res1883;
    return M1.Core.PrimitiveSymbol.isInterned(sym3314);
};
var symbol_eq__p = function(s3315, v3316) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s3315.equals(v3316);
};
var symbol_lt__p = function(s3317, v3318) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s3317.lt(v3318);
};
var keyword_lt__p = function(s3319, v3320) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s3319.lt(v3320);
};
var string_length = function(s3321) {
    if (string_p(s3321) !== false) {
        var if_res1884 = rvoid();
    } else {
        var if_res1884 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-length"), $rjs_core.UString.make("string?"), s3321));
    }
    if_res1884;
    return s3321.length;
};
var string_downcase = function(s3322) {
    if (string_p(s3322) !== false) {
        var if_res1885 = rvoid();
    } else {
        var if_res1885 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-downcase"), $rjs_core.UString.make("string?"), s3322));
    }
    if_res1885;
    return s3322.toLowerCase();
};
var string_upcase = function(s3323) {
    if (string_p(s3323) !== false) {
        var if_res1886 = rvoid();
    } else {
        var if_res1886 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-upcase"), $rjs_core.UString.make("string?"), s3323));
    }
    if_res1886;
    return s3323.toUpperCase();
};
var substring3324 = function(str83325, start93326, end73327) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var str3328 = str83325;
    var start3329 = start93326;
    if (false !== false) {
        var if_res1887 = false;
    } else {
        var if_res1887 = end73327;
    }
    var end3330 = if_res1887;
    if (not(M1.Core.UString.check(str3328)) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("expected a string"));
        var if_res1891 = null;
    } else {
        if ((start3329 < 0) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("invalid start index"));
            var if_res1890 = null;
        } else {
            if (((end3330 !== false) && (((end3330 < 0) || (end3330 > str3328.length)) || (end3330 < start3329))) !== false) {
                throw M1.Core.racketContractError($rjs_core.UString.make("invalid end index"));
                var if_res1889 = null;
            } else {
                if ((end3330 === false) !== false) {
                    end3330 = str3328.length;
                    var if_res1888 = null;
                } else {
                    var if_res1888 = rvoid();
                }
                var if_res1889 = if_res1888;
            }
            var if_res1890 = if_res1889;
        }
        var if_res1891 = if_res1890;
    }
    if_res1891;
    return str3328.substring(start3329, end3330);
};
var cl1892 = function(str3331, start3332) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return substring3324(str3331, start3332, false);
};
var cl1893 = function(str3333, start3334, end73335) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return substring3324(str3333, start3334, end73335);
};
var substring = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1894 = {
        '2': cl1892,
        '3': cl1893
    } [arguments.length];
    if (fixed_lam1894 !== undefined) {
        return fixed_lam1894.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var string_split = function(str3336, sep3337) {
    if (string_p(str3336) !== false) {
        var if_res1895 = rvoid();
    } else {
        var if_res1895 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-split"), $rjs_core.UString.make("string?"), str3336));
    }
    if_res1895;
    if ((function(v3338) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return string_p(v3338) || regexp_p(v3338);
        })(sep3337) !== false) {
        var if_res1896 = rvoid();
    } else {
        var if_res1896 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-split"), $rjs_core.UString.make("(check/or string? regexp?)"), sep3337));
    }
    if_res1896;
    return M1.Core.Pair.listFromArray(str3336.split(sep3337));
};
var string_set_bang_ = function(str3339, k3340, char3341) {
    if ((function(v3342) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return string_p(v3342) && (function(v3343) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return not(immutable_p(v3343));
            })(v3342);
        })(str3339) !== false) {
        var if_res1897 = rvoid();
    } else {
        var if_res1897 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("(check/and string? (check/not immutable?))"), str3339));
    }
    if_res1897;
    if (exact_nonnegative_integer_p(k3340) !== false) {
        var if_res1898 = rvoid();
    } else {
        var if_res1898 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("exact-nonnegative-integer?"), k3340));
    }
    if_res1898;
    if (char_p(char3341) !== false) {
        var if_res1899 = rvoid();
    } else {
        var if_res1899 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("char?"), char3341));
    }
    if_res1899;
    if (str3339.isValidIndex(k3340) !== false) {
        var if_res1900 = str3339.setCharAt(k3340, char3341);
    } else {
        var if_res1900 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("string-set!"), $rjs_core.UString.make("string"), str3339, str3339.length, k3340));
    }
    return if_res1900;
};
var char_p = function(c3344) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Char.check(c3344);
};
var char__gt_integer = function(c3345) {
    if (char_p(c3345) !== false) {
        var if_res1901 = rvoid();
    } else {
        var if_res1901 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char->integer"), $rjs_core.UString.make("char?"), c3345));
    }
    if_res1901;
    return M1.Core.Char.charToInteger(c3345);
};
var integer__gt_char = function(k3346) {
    if (exact_nonnegative_integer_p(k3346) !== false) {
        var if_res1902 = rvoid();
    } else {
        var if_res1902 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("integer->char"), $rjs_core.UString.make("exact-nonnegative-integer?"), k3346));
    }
    if_res1902;
    return M1.Core.Char.integerToChar(k3346);
};
var char_utf_8_length = function(c3347) {
    if (char_p(c3347) !== false) {
        var if_res1903 = rvoid();
    } else {
        var if_res1903 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-utf-8-length"), $rjs_core.UString.make("char?"), c3347));
    }
    if_res1903;
    return M1.Core.Char.charUtf8Length(c3347);
};
var char_upcase = function(c3348) {
    if (char_p(c3348) !== false) {
        var if_res1904 = rvoid();
    } else {
        var if_res1904 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-upcase"), $rjs_core.UString.make("char?"), c3348));
    }
    if_res1904;
    return M1.Core.Char.upcase(c3348);
};
var char_downcase = function(c3349) {
    if (char_p(c3349) !== false) {
        var if_res1905 = rvoid();
    } else {
        var if_res1905 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-downcase"), $rjs_core.UString.make("char?"), c3349));
    }
    if_res1905;
    return M1.Core.Char.downcase(c3349);
};
var char_alphabetic_p = function(c3350) {
    if (char_p(c3350) !== false) {
        var if_res1906 = rvoid();
    } else {
        var if_res1906 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-alphabetic?"), $rjs_core.UString.make("char?"), c3350));
    }
    if_res1906;
    return M1.Core.Char.isAlphabetic(c3350);
};
var char_lower_case_p = function(c3351) {
    if (char_p(c3351) !== false) {
        var if_res1907 = rvoid();
    } else {
        var if_res1907 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-lower-case?"), $rjs_core.UString.make("char?"), c3351));
    }
    if_res1907;
    return M1.Core.Char.isLowerCase(c3351);
};
var char_upper_case_p = function(c3352) {
    if (char_p(c3352) !== false) {
        var if_res1908 = rvoid();
    } else {
        var if_res1908 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-upper-case?"), $rjs_core.UString.make("char?"), c3352));
    }
    if_res1908;
    return M1.Core.Char.isUpperCase(c3352);
};
var char_title_case_p = function(c3353) {
    if (char_p(c3353) !== false) {
        var if_res1909 = rvoid();
    } else {
        var if_res1909 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-title-case?"), $rjs_core.UString.make("char?"), c3353));
    }
    if_res1909;
    return M1.Core.Char.isTitleCase(c3353);
};
var char_numeric_p = function(c3354) {
    if (char_p(c3354) !== false) {
        var if_res1910 = rvoid();
    } else {
        var if_res1910 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-numeric?"), $rjs_core.UString.make("char?"), c3354));
    }
    if_res1910;
    return M1.Core.Char.isNumeric(c3354);
};
var char_symbolic_p = function(c3355) {
    if (char_p(c3355) !== false) {
        var if_res1911 = rvoid();
    } else {
        var if_res1911 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-symbolic?"), $rjs_core.UString.make("char?"), c3355));
    }
    if_res1911;
    return M1.Core.Char.isSymbolic(c3355);
};
var char_punctuation_p = function(c3356) {
    if (char_p(c3356) !== false) {
        var if_res1912 = rvoid();
    } else {
        var if_res1912 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-punctuation?"), $rjs_core.UString.make("char?"), c3356));
    }
    if_res1912;
    return M1.Core.Char.isPunctuation(c3356);
};
var char_graphic_p = function(c3357) {
    if (char_p(c3357) !== false) {
        var if_res1913 = rvoid();
    } else {
        var if_res1913 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-graphic?"), $rjs_core.UString.make("char?"), c3357));
    }
    if_res1913;
    return M1.Core.Char.isGraphic(c3357);
};
var char_whitespace_p = function(c3358) {
    if (char_p(c3358) !== false) {
        var if_res1914 = rvoid();
    } else {
        var if_res1914 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-whitespace?"), $rjs_core.UString.make("char?"), c3358));
    }
    if_res1914;
    return M1.Core.Char.isWhitespace(c3358);
};
var char_blank_p = function(c3359) {
    if (char_p(c3359) !== false) {
        var if_res1915 = rvoid();
    } else {
        var if_res1915 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-blank?"), $rjs_core.UString.make("char?"), c3359));
    }
    if_res1915;
    return M1.Core.Char.isBlank(c3359);
};
var char_iso_control_p = function(c3360) {
    if (char_p(c3360) !== false) {
        var if_res1916 = rvoid();
    } else {
        var if_res1916 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-iso-control?"), $rjs_core.UString.make("char?"), c3360));
    }
    if_res1916;
    return M1.Core.Char.isIsoControl(c3360);
};
var char_lt__p = function(a3361, b3362) {
    if (char_p(a3361) !== false) {
        var if_res1917 = rvoid();
    } else {
        var if_res1917 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<?"), $rjs_core.UString.make("char?"), a3361));
    }
    if_res1917;
    if (char_p(b3362) !== false) {
        var if_res1918 = rvoid();
    } else {
        var if_res1918 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<?"), $rjs_core.UString.make("char?"), b3362));
    }
    if_res1918;
    return a3361 < b3362;
};
var char_lt__eq__p = function(a3363, b3364) {
    if (char_p(a3363) !== false) {
        var if_res1919 = rvoid();
    } else {
        var if_res1919 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<=?"), $rjs_core.UString.make("char?"), a3363));
    }
    if_res1919;
    if (char_p(b3364) !== false) {
        var if_res1920 = rvoid();
    } else {
        var if_res1920 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<=?"), $rjs_core.UString.make("char?"), b3364));
    }
    if_res1920;
    return a3363 <= b3364;
};
var char_gt__p = function(a3365, b3366) {
    if (char_p(a3365) !== false) {
        var if_res1921 = rvoid();
    } else {
        var if_res1921 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>?"), $rjs_core.UString.make("char?"), a3365));
    }
    if_res1921;
    if (char_p(b3366) !== false) {
        var if_res1922 = rvoid();
    } else {
        var if_res1922 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>?"), $rjs_core.UString.make("char?"), b3366));
    }
    if_res1922;
    return a3365 > b3366;
};
var char_gt__eq__p = function(a3367, b3368) {
    if (char_p(a3367) !== false) {
        var if_res1923 = rvoid();
    } else {
        var if_res1923 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>=?"), $rjs_core.UString.make("char?"), a3367));
    }
    if_res1923;
    if (char_p(b3368) !== false) {
        var if_res1924 = rvoid();
    } else {
        var if_res1924 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>=?"), $rjs_core.UString.make("char?"), b3368));
    }
    if_res1924;
    return a3367 >= b3368;
};
var char_eq__p = function(a3369, b3370) {
    if (char_p(a3369) !== false) {
        var if_res1925 = rvoid();
    } else {
        var if_res1925 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char=?"), $rjs_core.UString.make("char?"), a3369));
    }
    if_res1925;
    if (char_p(b3370) !== false) {
        var if_res1926 = rvoid();
    } else {
        var if_res1926 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char=?"), $rjs_core.UString.make("char?"), b3370));
    }
    if_res1926;
    return M1.Core.Char.eq(a3369, b3370);
};
var box = M1.Core.Box.make;
var unbox = function(v3371) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v3371.get();
};
var set_box_bang_ = function(b3372, v3373) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b3372.set(v3373);
};
var box_p = M1.Core.Box.check;
var box_cas_bang_ = function(loc3374, old3375, new3376) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (eq_p(old3375, unbox(loc3374)) && set_box_bang_(loc3374, new3376)) && true;
};
var box_immutable = M1.Core.Box.make;
var make_weak_box = M1.Core.Box.make;
var weak_box_value = function(v3377) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v3377.get();
};
var set_box_times__bang_ = function(b3378, v3379) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b3378.set(v3379);
};
var unbox_times_ = function(v3380) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v3380.get();
};
var let_result1927 = M1.Core.Struct.makeStructTypeProperty({
    'name': $rjs_core.UString.make("prop:evt")
});
var prop_evt = let_result1927.getAt(0);
var evt_p = let_result1927.getAt(1);
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
var equal_hash_code = function(v3381) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return 0;
};
var equal_secondary_hash_code = function(v3382) {
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
var bytes_p = function(bs3383) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Bytes.check(bs3383);
};
var make_bytes3384 = function(len113385, b103386) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var len3387 = len113385;
    if (false !== false) {
        var if_res1928 = 0;
    } else {
        var if_res1928 = b103386;
    }
    var b3388 = if_res1928;
    return M1.Core.Bytes.make(len3387, b3388);
};
var cl1929 = function(len3389) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_bytes3384(len3389, 0);
};
var cl1930 = function(len3390, b103391) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_bytes3384(len3390, b103391);
};
var make_bytes = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1931 = {
        '1': cl1929,
        '2': cl1930
    } [arguments.length];
    if (fixed_lam1931 !== undefined) {
        return fixed_lam1931.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var bytes_ref = function(bs3392, i3393) {
    if (bytes_p(bs3392) !== false) {
        var if_res1932 = rvoid();
    } else {
        var if_res1932 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-ref"), $rjs_core.UString.make("bytes?"), bs3392));
    }
    if_res1932;
    if (integer_p(i3393) !== false) {
        var if_res1933 = rvoid();
    } else {
        var if_res1933 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-ref"), $rjs_core.UString.make("integer?"), i3393));
    }
    if_res1933;
    if ((__lt_(i3393, 0) || __gt_(i3393, bs3392.length)) !== false) {
        var if_res1934 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("bytes-ref"), $rjs_core.UString.make("byte string"), bs3392, bs3392.length, i3393));
    } else {
        var if_res1934 = M1.Core.Bytes.ref(bs3392, i3393);
    }
    return if_res1934;
};
var bytes_set_bang_ = function(bs3394, i3395, b3396) {
    if (bytes_p(bs3394) !== false) {
        var if_res1935 = rvoid();
    } else {
        var if_res1935 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("bytes?"), bs3394));
    }
    if_res1935;
    if (integer_p(i3395) !== false) {
        var if_res1936 = rvoid();
    } else {
        var if_res1936 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("integer?"), i3395));
    }
    if_res1936;
    if (integer_p(b3396) !== false) {
        var if_res1937 = rvoid();
    } else {
        var if_res1937 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("integer?"), b3396));
    }
    if_res1937;
    if ((__lt_(i3395, 0) || __gt_(i3395, bs3394.length)) !== false) {
        var if_res1938 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("bytes-set!"), $rjs_core.UString.make("byte string"), bs3394, bs3394.length, i3395));
    } else {
        var if_res1938 = M1.Core.Bytes.set(bs3394, i3395, b3396);
    }
    return if_res1938;
};
var bytes_append = function() {
    var bss3397 = M1.Core.argumentsToArray(arguments);
    return M1.Core.Bytes.append(bss3397);
};
var bytes__gt_string_by_utf_8 = function(bs3398) {
    if (bytes_p(bs3398) !== false) {
        var if_res1939 = rvoid();
    } else {
        var if_res1939 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes->string/utf-8"), $rjs_core.UString.make("bytes?"), bs3398));
    }
    if_res1939;
    return M1.Core.UString.fromBytesUtf8(bs3398);
};
var bytes__gt_string_by_latin_1 = function(bs3399) {
    if (bytes_p(bs3399) !== false) {
        var if_res1940 = rvoid();
    } else {
        var if_res1940 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes->string/latin-1"), $rjs_core.UString.make("bytes?"), bs3399));
    }
    if_res1940;
    return M1.Core.UString.fromBytesLatin1(bs3399);
};
var string__gt_bytes_by_utf_8 = function(str3400) {
    if (string_p(str3400) !== false) {
        var if_res1941 = rvoid();
    } else {
        var if_res1941 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->bytes/utf-8"), $rjs_core.UString.make("string?"), str3400));
    }
    if_res1941;
    return M1.Core.UString.toBytesUtf8(str3400);
};
var string__gt_bytes_by_locale3401 = function(str153402, err_byte123403, start133404, end143405) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var str3406 = str153402;
    if (false !== false) {
        var if_res1942 = true;
    } else {
        var if_res1942 = err_byte123403;
    }
    var err_byte3407 = if_res1942;
    if (false !== false) {
        var if_res1943 = 0;
    } else {
        var if_res1943 = start133404;
    }
    var start3408 = if_res1943;
    if (false !== false) {
        var if_res1944 = 0;
    } else {
        var if_res1944 = end143405;
    }
    var end3409 = if_res1944;
    return M1.Core.UString.toBytesUtf8(str3406);
};
var cl1945 = function(str3410) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale3401(str3410, true, 0, 0);
};
var cl1946 = function(str3411, err_byte3412, start3413, end143414) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale3401(str3411, err_byte3412, start3413, end143414);
};
var cl1947 = function(str3415, err_byte3416, start133417) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale3401(str3415, err_byte3416, start133417, 0);
};
var cl1948 = function(str3418, err_byte123419) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale3401(str3418, err_byte123419, 0, 0);
};
var string__gt_bytes_by_locale = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1949 = {
        '1': cl1945,
        '4': cl1946,
        '3': cl1947,
        '2': cl1948
    } [arguments.length];
    if (fixed_lam1949 !== undefined) {
        return fixed_lam1949.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3, 4]);
var bytes_eq__p = function(bstr13420, bstr23421) {
    if (bytes_p(bstr13420) !== false) {
        var if_res1950 = rvoid();
    } else {
        var if_res1950 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes=?"), $rjs_core.UString.make("bytes?"), bstr13420));
    }
    if_res1950;
    if (bytes_p(bstr23421) !== false) {
        var if_res1951 = rvoid();
    } else {
        var if_res1951 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes=?"), $rjs_core.UString.make("bytes?"), bstr23421));
    }
    if_res1951;
    return M1.Core.Bytes.eq(bstr13420, bstr23421);
};
var bytes_lt__p = function(bstr13422, bstr23423) {
    if (bytes_p(bstr13422) !== false) {
        var if_res1952 = rvoid();
    } else {
        var if_res1952 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes<?"), $rjs_core.UString.make("bytes?"), bstr13422));
    }
    if_res1952;
    if (bytes_p(bstr23423) !== false) {
        var if_res1953 = rvoid();
    } else {
        var if_res1953 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes<?"), $rjs_core.UString.make("bytes?"), bstr23423));
    }
    if_res1953;
    return M1.Core.Bytes.lt(bstr13422, bstr23423);
};
var bytes_gt__p = function(bstr13424, bstr23425) {
    if (bytes_p(bstr13424) !== false) {
        var if_res1954 = rvoid();
    } else {
        var if_res1954 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes>?"), $rjs_core.UString.make("bytes?"), bstr13424));
    }
    if_res1954;
    if (bytes_p(bstr23425) !== false) {
        var if_res1955 = rvoid();
    } else {
        var if_res1955 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes>?"), $rjs_core.UString.make("bytes?"), bstr23425));
    }
    if_res1955;
    return M1.Core.Bytes.gt(bstr13424, bstr23425);
};
var bytes_length = function(bs3426) {
    if (bytes_p(bs3426) !== false) {
        var if_res1956 = rvoid();
    } else {
        var if_res1956 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-length"), $rjs_core.UString.make("bytes?"), bs3426));
    }
    if_res1956;
    return bs3426.length;
};
var current_continuation_marks = M1.Core.Marks.getContinuationMarks;
var continuation_mark_set__gt_list = M1.Core.Marks.getMarks;
var continuation_mark_set_first = function(mark_set3427, key_v3428, none_v3429, prompt_tag3430) {
    var let_result1957 = values();
    var mark_set3431 = mark_set3431 || M1.Core.Marks.getContinuationMarks(prompt_tag3430);
    var marks3432 = M1.Core.Marks.getMarks(mark_set3431, key_v3428, prompt_tag3430);
    if (null_p(marks3432) !== false) {
        var if_res1958 = none_v3429;
    } else {
        var if_res1958 = marks3432.hd;
    }
    return if_res1958;
};
var make_parameter = M1.Paramz.makeParameter;
var call_with_continuation_prompt = M1.Core.Marks.callWithContinuationPrompt;
var abort_current_continuation = function(prompt_tag3433) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1959 = null;
    } else {
        var if_res1959 = rvoid();
    }
    if_res1959;
    var let_result1960 = values();
    var args3434 = Array.prototype.slice.call(arguments, 1);
    throw new M1.Core.Marks.AbortCurrentContinuation(prompt_tag3433, args3434);
    return null;
};
var make_continuation_prompt_tag = M1.Core.Marks.makeContinuationPromptTag;
var default_continuation_prompt_tag = M1.Core.Marks.defaultContinuationPromptTag;
var raise = M1.Kernel.doraise;
var exn_fail_p = M1.Core.isErr;
var exn_fail_contract_p = M1.Core.isContractErr;
var exn_fail_contract_arity_p = M1.Core.isContractErr;
var exn_message = function(e3435) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.UString.makeMutable(M1.Core.errMsg(e3435));
};
var current_output_port = make_parameter(M1.Core.Ports.standardOutputPort);
var current_input_port = make_parameter(M1.Core.Ports.standardInputPort);
var current_error_port = make_parameter(M1.Core.Ports.standardErrorPort);
var current_print = make_parameter(function(p3436) {
    if (void_p(p3436) !== false) {
        var if_res1961 = rvoid();
    } else {
        print(p3436);
        var if_res1961 = newline();
    }
    return if_res1961;
});
var port_p = function(p3437) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.check(p3437);
};
var input_port_p = function(p3438) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.isInputPort(p3438);
};
var output_port_p = function(p3439) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.isOutputPort(p3439);
};
var string_port_p = function(p3440) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.isStringPort(p3440);
};
var open_output_string = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.openOutputString();
};
var get_output_string = function(p3441) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.getOutputString(p3441);
};
var print_as_expression = make_parameter(true);
var display3442 = function(datum173443, out163444) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum3445 = datum173443;
    if (eq_p(out163444, M4.unsafe_undefined) !== false) {
        var if_res1962 = current_output_port();
    } else {
        var if_res1962 = out163444;
    }
    var out3446 = if_res1962;
    return M1.Core.display(out3446, datum3445);
};
var cl1963 = function(datum3447) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return display3442(datum3447, M4.unsafe_undefined);
};
var cl1964 = function(datum3448, out163449) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return display3442(datum3448, out163449);
};
var display = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1965 = {
        '1': cl1963,
        '2': cl1964
    } [arguments.length];
    if (fixed_lam1965 !== undefined) {
        return fixed_lam1965.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var displayln3450 = function(datum193451, out183452) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum3453 = datum193451;
    if (eq_p(out183452, M4.unsafe_undefined) !== false) {
        var if_res1966 = current_output_port();
    } else {
        var if_res1966 = out183452;
    }
    var out3454 = if_res1966;
    display(datum3453, out3454);
    return newline(out3454);
};
var cl1967 = function(datum3455) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return displayln3450(datum3455, M4.unsafe_undefined);
};
var cl1968 = function(datum3456, out183457) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return displayln3450(datum3456, out183457);
};
var displayln = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1969 = {
        '1': cl1967,
        '2': cl1968
    } [arguments.length];
    if (fixed_lam1969 !== undefined) {
        return fixed_lam1969.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var write3458 = function(datum213459, out203460) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum3461 = datum213459;
    if (eq_p(out203460, M4.unsafe_undefined) !== false) {
        var if_res1970 = current_output_port();
    } else {
        var if_res1970 = out203460;
    }
    var out3462 = if_res1970;
    return M1.Core.write(out3462, datum3461);
};
var cl1971 = function(datum3463) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return write3458(datum3463, M4.unsafe_undefined);
};
var cl1972 = function(datum3464, out203465) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return write3458(datum3464, out203465);
};
var write = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1973 = {
        '1': cl1971,
        '2': cl1972
    } [arguments.length];
    if (fixed_lam1973 !== undefined) {
        return fixed_lam1973.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var writeln3466 = function(datum233467, out223468) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum3469 = datum233467;
    if (eq_p(out223468, M4.unsafe_undefined) !== false) {
        var if_res1974 = current_output_port();
    } else {
        var if_res1974 = out223468;
    }
    var out3470 = if_res1974;
    write(datum3469, out3470);
    return newline(out3470);
};
var cl1975 = function(datum3471) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return writeln3466(datum3471, M4.unsafe_undefined);
};
var cl1976 = function(datum3472, out223473) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return writeln3466(datum3472, out223473);
};
var writeln = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1977 = {
        '1': cl1975,
        '2': cl1976
    } [arguments.length];
    if (fixed_lam1977 !== undefined) {
        return fixed_lam1977.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var print3474 = function(datum263475, out243476, quote_depth253477) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum3478 = datum263475;
    if (eq_p(out243476, M4.unsafe_undefined) !== false) {
        var if_res1978 = current_output_port();
    } else {
        var if_res1978 = out243476;
    }
    var out3479 = if_res1978;
    if (false !== false) {
        var if_res1979 = 0;
    } else {
        var if_res1979 = quote_depth253477;
    }
    var quote_depth3480 = if_res1979;
    return M1.Core.print(out3479, datum3478, print_as_expression(), quote_depth3480);
};
var cl1980 = function(datum3481) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return print3474(datum3481, M4.unsafe_undefined, 0);
};
var cl1981 = function(datum3482, out3483, quote_depth253484) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return print3474(datum3482, out3483, quote_depth253484);
};
var cl1982 = function(datum3485, out243486) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return print3474(datum3485, out243486, 0);
};
var print = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1983 = {
        '1': cl1980,
        '3': cl1981,
        '2': cl1982
    } [arguments.length];
    if (fixed_lam1983 !== undefined) {
        return fixed_lam1983.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3]);
var println3487 = function(datum283488, out273489) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum3490 = datum283488;
    if (eq_p(out273489, M4.unsafe_undefined) !== false) {
        var if_res1984 = current_output_port();
    } else {
        var if_res1984 = out273489;
    }
    var out3491 = if_res1984;
    print(datum3490, out3491);
    return newline(out3491);
};
var cl1985 = function(datum3492) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return println3487(datum3492, M4.unsafe_undefined);
};
var cl1986 = function(datum3493, out273494) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return println3487(datum3493, out273494);
};
var println = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1987 = {
        '1': cl1985,
        '2': cl1986
    } [arguments.length];
    if (fixed_lam1987 !== undefined) {
        return fixed_lam1987.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var newline3495 = function(out293496) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(out293496, M4.unsafe_undefined) !== false) {
        var if_res1988 = current_output_port();
    } else {
        var if_res1988 = out293496;
    }
    var out3497 = if_res1988;
    return display($rjs_core.UString.make("\n"), out3497);
};
var cl1989 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return newline3495(M4.unsafe_undefined);
};
var cl1990 = function(out293498) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return newline3495(out293498);
};
var newline = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1991 = {
        '0': cl1989,
        '1': cl1990
    } [arguments.length];
    if (fixed_lam1991 !== undefined) {
        return fixed_lam1991.apply(null, arguments);
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
var make_inspector = $rjs_core.attachProcedureArity(function(..._34991992) {
    var _3499 = $rjs_core.Pair.listFromArray(_34991992);
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
var object_name = function(fn3500) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return fn3500.name;
};
var unquoted_printing_string = function(s3501) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s3501;
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
    return function(x3502, n3503) {
        if ((arguments.length !== 2) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res1993 = null;
        } else {
            var if_res1993 = rvoid();
        }
        if_res1993;
        return $rjs_core.UString.make("str");
    };
};
var procedure_extract_target = function(f3504) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var regexp_p = function(v3505) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Regexp.check(v3505);
};
var pregexp_p = regexp_p;
var byte_regexp_p = regexp_p;
var byte_pregexp_p = regexp_p;
var regexp = function(str3506) {
    if (string_p(str3506) !== false) {
        var if_res1994 = rvoid();
    } else {
        var if_res1994 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("regexp"), $rjs_core.UString.make("string?"), str3506));
    }
    if_res1994;
    return M1.Core.Regexp.fromString(str3506);
};
var pregexp = regexp;
var byte_regexp = function(bs3507) {
    if (bytes_p(bs3507) !== false) {
        var if_res1995 = rvoid();
    } else {
        var if_res1995 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("byte-regexp"), $rjs_core.UString.make("bytes?"), bs3507));
    }
    if_res1995;
    return M1.Core.Regexp.fromString(bytes__gt_string_by_utf_8(bs3507));
};
var byte_pregexp = byte_regexp;
var regexp_match3508 = function(pattern323509, input333510, start_pos303511, end_pos313512) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var pattern3513 = pattern323509;
    var input3514 = input333510;
    if (false !== false) {
        var if_res1996 = 0;
    } else {
        var if_res1996 = start_pos303511;
    }
    var start_pos3515 = if_res1996;
    if (false !== false) {
        var if_res1997 = false;
    } else {
        var if_res1997 = end_pos313512;
    }
    var end_pos3516 = if_res1997;
    return M1.Core.Regexp.match(pattern3513, input3514, start_pos3515, end_pos3516);
};
var cl1998 = function(pattern3517, input3518) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match3508(pattern3517, input3518, 0, false);
};
var cl1999 = function(pattern3519, input3520, start_pos3521, end_pos313522) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match3508(pattern3519, input3520, start_pos3521, end_pos313522);
};
var cl2000 = function(pattern3523, input3524, start_pos303525) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match3508(pattern3523, input3524, start_pos303525, false);
};
var regexp_match = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2001 = {
        '2': cl1998,
        '4': cl1999,
        '3': cl2000
    } [arguments.length];
    if (fixed_lam2001 !== undefined) {
        return fixed_lam2001.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var regexp_match_p3526 = function(pattern363527, input373528, start_pos343529, end_pos353530) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var pattern3531 = pattern363527;
    var input3532 = input373528;
    if (false !== false) {
        var if_res2002 = 0;
    } else {
        var if_res2002 = start_pos343529;
    }
    var start_pos3533 = if_res2002;
    if (false !== false) {
        var if_res2003 = false;
    } else {
        var if_res2003 = end_pos353530;
    }
    var end_pos3534 = if_res2003;
    if (M1.Core.Regexp.match(pattern3531, input3532, start_pos3533, end_pos3534) !== false) {
        var if_res2004 = true;
    } else {
        var if_res2004 = false;
    }
    return if_res2004;
};
var cl2005 = function(pattern3535, input3536) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match_p3526(pattern3535, input3536, 0, false);
};
var cl2006 = function(pattern3537, input3538, start_pos3539, end_pos353540) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match_p3526(pattern3537, input3538, start_pos3539, end_pos353540);
};
var cl2007 = function(pattern3541, input3542, start_pos343543) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match_p3526(pattern3541, input3542, start_pos343543, false);
};
var regexp_match_p = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2008 = {
        '2': cl2005,
        '4': cl2006,
        '3': cl2007
    } [arguments.length];
    if (fixed_lam2008 !== undefined) {
        return fixed_lam2008.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var let_result2009 = make_struct_type($rjs_core.PrimitiveSymbol.make("kernel:arity-at-least"), false, 1, 0, false, rnull, false, false, $rjs_core.Pair.makeList(0), false, $rjs_core.PrimitiveSymbol.make("kernel:arity-at-least"));
var struct_3544 = let_result2009.getAt(0);
var make_3545 = let_result2009.getAt(1);
var __p3546 = let_result2009.getAt(2);
var __ref3547 = let_result2009.getAt(3);
var __set_bang_3548 = let_result2009.getAt(4);
var let_result2010 = values(struct_3544, make_3545, __p3546, make_struct_field_accessor(__ref3547, 0, $rjs_core.PrimitiveSymbol.make("value")));
var struct_kernel_arity_at_least = let_result2010.getAt(0);
var make_arity_at_least = let_result2010.getAt(1);
var kernel_arity_at_least_p = let_result2010.getAt(2);
var kernel_arity_at_least_value = let_result2010.getAt(3);
var procedure_p = function(f3549) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return typeof(f3549) === "function";
};
var arity_at_least = make_arity_at_least;
var arity_at_least_p = function(p3550) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kernel_arity_at_least_p(p3550);
};
var arity_at_least_value = function(p3551) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kernel_arity_at_least_value(p3551);
};
var procedure_arity_includes_p = function(fn3552, n3553) {
    var ar3554 = procedure_arity(fn3552);
    if (kernel_arity_at_least_p(ar3554) !== false) {
        var if_res2012 = __lt__eq_(kernel_arity_at_least_value(ar3554), n3553);
    } else {
        if (list_p(ar3554) !== false) {
            var if_res2011 = member(n3553, ar3554);
        } else {
            var if_res2011 = n3553 === ar3554;
        }
        var if_res2012 = if_res2011;
    }
    return if_res2012;
};
var procedure_arity = function(fn3555) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (Array.isArray(fn3555.__rjs_arityValue) !== false) {
        if ((fn3555.__rjs_arityValue.length === 1) !== false) {
            var if_res2013 = fn3555.__rjs_arityValue[0];
        } else {
            var if_res2013 = M1.Core.Pair.listFromArray(fn3555.__rjs_arityValue);
        }
        var if_res2015 = if_res2013;
    } else {
        if ((fn3555.__rjs_arityValue === undefined) !== false) {
            var if_res2014 = fn3555.length;
        } else {
            var if_res2014 = make_arity_at_least(fn3555.__rjs_arityValue || fn3555.length);
        }
        var if_res2015 = if_res2014;
    }
    return if_res2015;
};
var procedure_arity_p = function(v3556) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (exact_nonnegative_integer_p(v3556) || kernel_arity_at_least_p(v3556)) || ormap(function(v3557) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return exact_nonnegative_integer_p(v3557) || kernel_arity_at_least_p(v3557);
    }, v3556);
};
var procedure_arity_mask = function(fn3558) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var ar3559 = procedure_arity(fn3558);
    if (integer_p(ar3559) !== false) {
        var if_res2017 = arithmetic_shift(1, ar3559);
    } else {
        if (kernel_arity_at_least_p(ar3559) !== false) {
            var if_res2016 = arithmetic_shift(-1, kernel_arity_at_least_value(ar3559));
        } else {
            var if_res2016 = rvoid();
        }
        var if_res2017 = if_res2016;
    }
    return if_res2017;
};
var checked_procedure_check_and_extract = function(type3560, v3561, proc3562, v13563, v23564) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((M1.Core.Struct.check(v3561, type3560) && type3560._findProperty(prop_checked_procedure)) !== false) {
        var fn3565 = v3561.getField(0);
        var r13566 = fn3565(v13563, v23564);
        if (r13566 !== false) {
            var if_res2018 = v3561.getField(1);
        } else {
            var if_res2018 = proc3562(v3561, v13563, v23564);
        }
        var if_res2019 = if_res2018;
    } else {
        var if_res2019 = proc3562(v3561, v13563, v23564);
    }
    return if_res2019;
};
var gensym = function(sym3567) {
    var s3568 = (sym3567 && sym3567.v) || $rjs_core.UString.make("");
    __count = __count + 1;
    return M1.Core.PrimitiveSymbol.makeUninterned(s3568 + __count);
};
var eval_jit_enabled = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference_constant_p = function(x3569) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference_from_unsafe_p = function(x3570) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference__gt_module_source = function(x3571) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference__gt_resolved_module_path = function(x3572) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var module_name_fixup = function(x3573) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var inspector_p = function(p3574) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return true;
};
var make_thread_cell = function(p3575) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return p3575;
};
var __count = 1000;
var system_type3576 = function(mode383577) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (false !== false) {
        var if_res2020 = $rjs_core.PrimitiveSymbol.make("os");
    } else {
        var if_res2020 = mode383577;
    }
    var mode3578 = if_res2020;
    var tmp3579 = mode3578;
    if (equal_p(tmp3579, $rjs_core.PrimitiveSymbol.make("os")) !== false) {
        var if_res2024 = $rjs_core.PrimitiveSymbol.make("unix");
    } else {
        if (equal_p(tmp3579, $rjs_core.PrimitiveSymbol.make("vm")) !== false) {
            var if_res2023 = $rjs_core.PrimitiveSymbol.make("javascript");
        } else {
            if (equal_p(tmp3579, $rjs_core.PrimitiveSymbol.make("gc")) !== false) {
                var if_res2022 = $rjs_core.PrimitiveSymbol.make("javascript");
            } else {
                if (equal_p(tmp3579, $rjs_core.PrimitiveSymbol.make("fs-change")) !== false) {
                    var if_res2021 = M1.Core.Vector.make([false, false, false, false], false);
                } else {
                    var if_res2021 = false;
                }
                var if_res2022 = if_res2021;
            }
            var if_res2023 = if_res2022;
        }
        var if_res2024 = if_res2023;
    }
    return if_res2024;
};
var cl2025 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return system_type3576($rjs_core.PrimitiveSymbol.make("os"));
};
var cl2026 = function(mode383580) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return system_type3576(mode383580);
};
var system_type = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2027 = {
        '0': cl2025,
        '1': cl2026
    } [arguments.length];
    if (fixed_lam2027 !== undefined) {
        return fixed_lam2027.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var find_system_path = function(kind3581) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.UString.make("");
};
var build_path = function(base3582) {
    return base3582;
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
var environment_variables_ref = function(e3583, n3584) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var environment_variables_set_bang_3585 = function(e403586, n413587, v423588, fail393589) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var e3590 = e403586;
    var n3591 = n413587;
    var v3592 = v423588;
    if (false !== false) {
        var if_res2028 = false;
    } else {
        var if_res2028 = fail393589;
    }
    var fail3593 = if_res2028;
    return rvoid();
};
var cl2029 = function(e3594, n3595, v3596) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return environment_variables_set_bang_3585(e3594, n3595, v3596, false);
};
var cl2030 = function(e3597, n3598, v3599, fail393600) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return environment_variables_set_bang_3585(e3597, n3598, v3599, fail393600);
};
var environment_variables_set_bang_ = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2031 = {
        '3': cl2029,
        '4': cl2030
    } [arguments.length];
    if (fixed_lam2031 !== undefined) {
        return fixed_lam2031.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [3, 4]);
var prefab_struct_key = function(v3601) {
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
var dynamic_wind = function(f3602, g3603, h3604) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    f3602();
    g3603();
    return h3604();
};
var datum_intern_literal = function(v3605) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v3605;
};
var make_semaphore = function(x3606) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return x3606;
};
var semaphore_peek_evt = function(x3607) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return x3607;
};
var call_with_semaphore = function(s3608, f3609) {
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