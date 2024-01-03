import * as $rjs_core from './core.js';
import * as M1 from "./lib.rkt.js";
import * as M2 from "../links/racketscript-compiler/racketscript/compiler/directive.rkt.js";
import * as M4 from "./unsafe.rkt.js";
var equal_p = M1.Core.isEqual;
var eqv_p = M1.Core.isEqv;
var eq_p = M1.Core.isEq;
var values = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(function() {
    var vals1748 = M1.Core.argumentsToArray(arguments);
    if ((vals1748.length === 1) !== false) {
        var if_res930 = vals1748[0];
    } else {
        var if_res930 = M1.Values.make(vals1748);
    }
    return if_res930;
}, 0), $rjs_core.UString.make("values"));
var call_with_values = function(generator1749, receiver1750) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var vals1751 = generator1749();
    if (M1.Values.check(vals1751) !== false) {
        var if_res932 = receiver1750.apply(this, vals1751.getAll());
    } else {
        if (not(eq_p(vals1751, undefined) || eq_p(vals1751, null)) !== false) {
            var if_res931 = receiver1750.apply(this, [vals1751]);
        } else {
            var if_res931 = rvoid();
        }
        var if_res932 = if_res931;
    }
    return if_res932;
};
var immutable_p = function(v1752) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Kernel.isImmutable(v1752);
};
var rvoid = $rjs_core.attachProcedureArity(function(..._1753933) {
    var _1753 = $rjs_core.Pair.listFromArray(_1753933);
    return null;
});
var void_p = function(v1754) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (v1754 === null) || (v1754 === undefined);
};
var number_p = M1.Core.Number.JS.check;
var real_p = M1.Core.Number.JS.check;
var integer_p = Number.isInteger;
var complex_p = $rjs_core.attachProcedureArity(function(..._1755934) {
    var _1755 = $rjs_core.Pair.listFromArray(_1755934);
    return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
});
var zero_p = function(v1756) {
    if (number_p(v1756) !== false) {
        var if_res935 = rvoid();
    } else {
        var if_res935 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("zero?"), $rjs_core.UString.make("number?"), v1756));
    }
    if_res935;
    return v1756 === 0;
};
var positive_p = function(v1757) {
    if (real_p(v1757) !== false) {
        var if_res936 = rvoid();
    } else {
        var if_res936 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("positive?"), $rjs_core.UString.make("real?"), v1757));
    }
    if_res936;
    return v1757 > 0;
};
var negative_p = function(v1758) {
    if (real_p(v1758) !== false) {
        var if_res937 = rvoid();
    } else {
        var if_res937 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("negative?"), $rjs_core.UString.make("real?"), v1758));
    }
    if_res937;
    return v1758 < 0;
};
var add1 = function(v1759) {
    if (number_p(v1759) !== false) {
        var if_res938 = rvoid();
    } else {
        var if_res938 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("add1"), $rjs_core.UString.make("number?"), v1759));
    }
    if_res938;
    return v1759 + 1;
};
var sub1 = function(v1760) {
    if (number_p(v1760) !== false) {
        var if_res939 = rvoid();
    } else {
        var if_res939 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sub1"), $rjs_core.UString.make("number?"), v1760));
    }
    if_res939;
    return v1760 - 1;
};
var quotient = function(dividend1761, divisor1762) {
    if (integer_p(dividend1761) !== false) {
        var if_res940 = rvoid();
    } else {
        var if_res940 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("quotient"), $rjs_core.UString.make("integer?"), dividend1761));
    }
    if_res940;
    if (integer_p(divisor1762) !== false) {
        var if_res941 = rvoid();
    } else {
        var if_res941 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("quotient"), $rjs_core.UString.make("integer?"), divisor1762));
    }
    if_res941;
    return (dividend1761 / divisor1762) | 0;
};
var even_p = function(v1763) {
    if (integer_p(v1763) !== false) {
        var if_res942 = rvoid();
    } else {
        var if_res942 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("even?"), $rjs_core.UString.make("integer?"), v1763));
    }
    if_res942;
    return (v1763 % 2) === 0;
};
var odd_p = function(v1764) {
    if (integer_p(v1764) !== false) {
        var if_res943 = rvoid();
    } else {
        var if_res943 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("odd?"), $rjs_core.UString.make("integer?"), v1764));
    }
    if_res943;
    return not(even_p(v1764));
};
var exact_nonnegative_integer_p = function(v1765) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Number.isInteger(v1765) && (v1765 >= 0);
};
var exact_integer_p = function(v1766) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Number.isInteger(v1766);
};
var exact_p = function(v1767) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Number.isInteger(v1767);
};
var inexact_p = function(v1768) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return not(exact_p(v1768));
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
var real__gt_single_flonum = function(v1769) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1769;
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
var floor = function(v1783) {
    if (real_p(v1783) !== false) {
        var if_res944 = rvoid();
    } else {
        var if_res944 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("floor"), $rjs_core.UString.make("real?"), v1783));
    }
    if_res944;
    return Math.floor(v1783);
};
var abs = function(v1784) {
    if (real_p(v1784) !== false) {
        var if_res945 = rvoid();
    } else {
        var if_res945 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("abs"), $rjs_core.UString.make("real?"), v1784));
    }
    if_res945;
    return Math.abs(v1784);
};
var sin = function(v1785) {
    if (number_p(v1785) !== false) {
        var if_res946 = rvoid();
    } else {
        var if_res946 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sin"), $rjs_core.UString.make("number?"), v1785));
    }
    if_res946;
    return Math.sin(v1785);
};
var cos = function(v1786) {
    if (number_p(v1786) !== false) {
        var if_res947 = rvoid();
    } else {
        var if_res947 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cos"), $rjs_core.UString.make("number?"), v1786));
    }
    if_res947;
    return Math.cos(v1786);
};
var tan = function(v1787) {
    if (number_p(v1787) !== false) {
        var if_res948 = rvoid();
    } else {
        var if_res948 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("tan"), $rjs_core.UString.make("number?"), v1787));
    }
    if_res948;
    return Math.tan(v1787);
};
var asin = function(v1788) {
    if (number_p(v1788) !== false) {
        var if_res949 = rvoid();
    } else {
        var if_res949 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("asin"), $rjs_core.UString.make("number?"), v1788));
    }
    if_res949;
    return Math.asin(v1788);
};
var acos = function(v1789) {
    if (number_p(v1789) !== false) {
        var if_res950 = rvoid();
    } else {
        var if_res950 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("acos"), $rjs_core.UString.make("number?"), v1789));
    }
    if_res950;
    return Math.acos(v1789);
};
var cl951 = function(v1793) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.atan(v1793);
};
var cl952 = function(x1794, y1795) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.atan2(x1794, y1795);
};
var atan = $rjs_core.attachProcedureArity(function() {
    var fixed_lam953 = {
        '1': cl951,
        '2': cl952
    } [arguments.length];
    if (fixed_lam953 !== undefined) {
        return fixed_lam953.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var ceiling = function(v1796) {
    if (real_p(v1796) !== false) {
        var if_res954 = rvoid();
    } else {
        var if_res954 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("ceiling"), $rjs_core.UString.make("real?"), v1796));
    }
    if_res954;
    return Math.ceil(v1796);
};
var round = function(v1797) {
    if (real_p(v1797) !== false) {
        var if_res955 = rvoid();
    } else {
        var if_res955 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("round"), $rjs_core.UString.make("real?"), v1797));
    }
    if_res955;
    return Math.round(v1797);
};
var min = function(a1798, b1799) {
    if (real_p(a1798) !== false) {
        var if_res956 = rvoid();
    } else {
        var if_res956 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("min"), $rjs_core.UString.make("real?"), a1798));
    }
    if_res956;
    if (real_p(b1799) !== false) {
        var if_res957 = rvoid();
    } else {
        var if_res957 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("min"), $rjs_core.UString.make("real?"), b1799));
    }
    if_res957;
    return Math.min(a1798, b1799);
};
var max = function(a1800, b1801) {
    if (real_p(a1800) !== false) {
        var if_res958 = rvoid();
    } else {
        var if_res958 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("max"), $rjs_core.UString.make("real?"), a1800));
    }
    if_res958;
    if (real_p(b1801) !== false) {
        var if_res959 = rvoid();
    } else {
        var if_res959 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("max"), $rjs_core.UString.make("real?"), b1801));
    }
    if_res959;
    return Math.max(a1800, b1801);
};
var log = function(v1802) {
    if (number_p(v1802) !== false) {
        var if_res960 = rvoid();
    } else {
        var if_res960 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("log"), $rjs_core.UString.make("number?"), v1802));
    }
    if_res960;
    return Math.log(v1802);
};
var exp = function(w1803) {
    if (number_p(w1803) !== false) {
        var if_res961 = rvoid();
    } else {
        var if_res961 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("exp"), $rjs_core.UString.make("number?"), w1803));
    }
    if_res961;
    return Math.exp(w1803);
};
var expt = function(w1804, z1805) {
    if (number_p(w1804) !== false) {
        var if_res962 = rvoid();
    } else {
        var if_res962 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("expt"), $rjs_core.UString.make("number?"), w1804));
    }
    if_res962;
    if (number_p(z1805) !== false) {
        var if_res963 = rvoid();
    } else {
        var if_res963 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("expt"), $rjs_core.UString.make("number?"), z1805));
    }
    if_res963;
    return Math.pow(w1804, z1805);
};
var sqrt = function(v1806) {
    if (number_p(v1806) !== false) {
        var if_res964 = rvoid();
    } else {
        var if_res964 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sqrt"), $rjs_core.UString.make("number?"), v1806));
    }
    if_res964;
    return Math.sqrt(v1806);
};
var sqr = function(v1807) {
    if (number_p(v1807) !== false) {
        var if_res965 = rvoid();
    } else {
        var if_res965 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sqr"), $rjs_core.UString.make("number?"), v1807));
    }
    if_res965;
    return __times_(v1807, v1807);
};
var truncate = function(v1808) {
    if (number_p(v1808) !== false) {
        var if_res966 = rvoid();
    } else {
        var if_res966 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("truncate"), $rjs_core.UString.make("number?"), v1808));
    }
    if_res966;
    return Math.trunc(v1808);
};
var remainder = function(a1809, b1810) {
    if (integer_p(a1809) !== false) {
        var if_res967 = rvoid();
    } else {
        var if_res967 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("remainder"), $rjs_core.UString.make("integer?"), a1809));
    }
    if_res967;
    if (integer_p(b1810) !== false) {
        var if_res968 = rvoid();
    } else {
        var if_res968 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("remainder"), $rjs_core.UString.make("integer?"), b1810));
    }
    if_res968;
    return a1809 % b1810;
};
var number__gt_string = function(n1811) {
    if (number_p(n1811) !== false) {
        var if_res969 = rvoid();
    } else {
        var if_res969 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("number->string"), $rjs_core.UString.make("number?"), n1811));
    }
    if_res969;
    return M1.Core.UString.makeMutable(n1811.toString());
};
var arithmetic_shift = function(n1812, m1813) {
    if (integer_p(n1812) !== false) {
        var if_res970 = rvoid();
    } else {
        var if_res970 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("arithmetic-shift"), $rjs_core.UString.make("integer?"), n1812));
    }
    if_res970;
    if (integer_p(m1813) !== false) {
        var if_res971 = rvoid();
    } else {
        var if_res971 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("arithmetic-shift"), $rjs_core.UString.make("integer?"), m1813));
    }
    if_res971;
    if (negative_p(m1813) !== false) {
        var if_res972 = n1812 >> __(m1813);
    } else {
        var if_res972 = n1812 << m1813;
    }
    return if_res972;
};
var inexact__gt_exact = function(v1814) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1814;
};
var exact__gt_inexact = function(v1815) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1815;
};
var make_rectangular = function(x1816, y1817) {
    if (real_p(x1816) !== false) {
        var if_res973 = rvoid();
    } else {
        var if_res973 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-rectangular"), $rjs_core.UString.make("real?"), x1816));
    }
    if_res973;
    if (real_p(y1817) !== false) {
        var if_res974 = rvoid();
    } else {
        var if_res974 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-rectangular"), $rjs_core.UString.make("real?"), y1817));
    }
    if_res974;
    return M1.Core.Pair.make(x1816, y1817);
};
var make_polar = function(m1818, a1819) {
    if (real_p(m1818) !== false) {
        var if_res975 = rvoid();
    } else {
        var if_res975 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-polar"), $rjs_core.UString.make("real?"), m1818));
    }
    if_res975;
    if (real_p(a1819) !== false) {
        var if_res976 = rvoid();
    } else {
        var if_res976 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-polar"), $rjs_core.UString.make("real?"), a1819));
    }
    if_res976;
    return error($rjs_core.UString.make("Complex numbers not supported with JS numerber semantics"));
};
var real_part = function(z1820) {
    if (pair_p(z1820) !== false) {
        var if_res977 = rvoid();
    } else {
        var if_res977 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("real-part"), $rjs_core.UString.make("(if-scheme-numbers number? pair?)"), z1820));
    }
    if_res977;
    return z1820.hd(z1820);
};
var imag_part = function(z1821) {
    if (pair_p(z1821) !== false) {
        var if_res978 = rvoid();
    } else {
        var if_res978 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("imag-part"), $rjs_core.UString.make("(if-scheme-numbers number? pair?)"), z1821));
    }
    if_res978;
    return z1821.tl(z1821);
};
var magnitude = function(x1822) {
    if (number_p(x1822) !== false) {
        var if_res979 = rvoid();
    } else {
        var if_res979 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("magnitude"), $rjs_core.UString.make("number?"), x1822));
    }
    if_res979;
    return $rjs_core.attachProcedureArity(function(..._1823980) {
        var _1823 = $rjs_core.Pair.listFromArray(_1823980);
        return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
    });
};
var conjugate = function(x1824) {
    if (number_p(x1824) !== false) {
        var if_res981 = rvoid();
    } else {
        var if_res981 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("conjugate"), $rjs_core.UString.make("number?"), x1824));
    }
    if_res981;
    return $rjs_core.attachProcedureArity(function(..._1825982) {
        var _1825 = $rjs_core.Pair.listFromArray(_1825982);
        return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
    });
};
var angle = function(x1826) {
    if (number_p(x1826) !== false) {
        var if_res983 = rvoid();
    } else {
        var if_res983 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("angle"), $rjs_core.UString.make("number?"), x1826));
    }
    if_res983;
    return $rjs_core.attachProcedureArity(function(..._1827984) {
        var _1827 = $rjs_core.Pair.listFromArray(_1827984);
        return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
    });
};
var rational_p = Number.isInteger;
var numerator = function(x1828) {
    if (number_p(x1828) !== false) {
        var if_res985 = rvoid();
    } else {
        var if_res985 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("numerator"), $rjs_core.UString.make("number?"), x1828));
    }
    if_res985;
    return x1828;
};
var denominator = function(x1829) {
    if (number_p(x1829) !== false) {
        var if_res986 = rvoid();
    } else {
        var if_res986 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("denominator"), $rjs_core.UString.make("number?"), x1829));
    }
    if_res986;
    return 1;
};
var bitwise_and = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.JS.bitwiseAnd, 1), $rjs_core.UString.make("bitwise-and"));
var bitwise_ior = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.JS.bitwiseOr, 1), $rjs_core.UString.make("bitwise-ior"));
var bitwise_xor = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.JS.bitwiseXor, 1), $rjs_core.UString.make("bitwise-xor"));
var bitwise_not = function(v1830) {
    if (number_p(v1830) !== false) {
        var if_res987 = rvoid();
    } else {
        var if_res987 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bitwise-not"), $rjs_core.UString.make("number?"), v1830));
    }
    if_res987;
    return M1.Core.Number.JS.bitwiseNot(v1830);
};
var bitwise_bit_set_p = function(n1831, m1832) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return not(zero_p(bitwise_and(n1831, arithmetic_shift(1, m1832))));
};
var not = function(v1833) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return equal_p(v1833, false) || false;
};
var rfalse = false;
var rtrue = true;
var false_p = function(v1834) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1834 === false;
};
var boolean_p = function(v1835) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (v1835 === true) || (v1835 === false);
};
var car = function(pair1836) {
    if (pair_p(pair1836) !== false) {
        var if_res988 = rvoid();
    } else {
        var if_res988 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("car"), $rjs_core.UString.make("pair?"), pair1836));
    }
    if_res988;
    return pair1836.hd;
};
var cdr = function(pair1837) {
    if (pair_p(pair1837) !== false) {
        var if_res989 = rvoid();
    } else {
        var if_res989 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdr"), $rjs_core.UString.make("pair?"), pair1837));
    }
    if_res989;
    return pair1837.tl;
};
var cons = M1.Core.attachProcedureName(M1.Core.Pair.make, $rjs_core.UString.make("cons"));
var pair_p = M1.Core.attachProcedureName(M1.Core.Pair.check, $rjs_core.UString.make("pair?"));
var caar = function(v1838) {
    if ((function(v1839) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1839) && pair_p(v1839.hd);
        })(v1838) !== false) {
        var if_res990 = rvoid();
    } else {
        var if_res990 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("caar"), $rjs_core.UString.make("(check/pair-of? pair? #t)"), v1838));
    }
    if_res990;
    return v1838.hd.hd;
};
var cadr = function(v1840) {
    if ((function(v1841) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1841) && pair_p(v1841.tl);
        })(v1840) !== false) {
        var if_res991 = rvoid();
    } else {
        var if_res991 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cadr"), $rjs_core.UString.make("(check/pair-of? #t pair?)"), v1840));
    }
    if_res991;
    return v1840.tl.hd;
};
var cdar = function(v1842) {
    if ((function(v1843) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1843) && pair_p(v1843.hd);
        })(v1842) !== false) {
        var if_res992 = rvoid();
    } else {
        var if_res992 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdar"), $rjs_core.UString.make("(check/pair-of? pair? #t)"), v1842));
    }
    if_res992;
    return v1842.hd.tl;
};
var cddr = function(v1844) {
    if ((function(v1845) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1845) && pair_p(v1845.tl);
        })(v1844) !== false) {
        var if_res993 = rvoid();
    } else {
        var if_res993 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cddr"), $rjs_core.UString.make("(check/pair-of? #t pair?)"), v1844));
    }
    if_res993;
    return v1844.tl.tl;
};
var cdddr = function(v1846) {
    if ((function(v1847) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1847) && (function(v1848) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v1848) && pair_p(v1848.tl);
            })(v1847.tl);
        })(v1846) !== false) {
        var if_res994 = rvoid();
    } else {
        var if_res994 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t pair?))"), v1846));
    }
    if_res994;
    return v1846.tl.tl.tl;
};
var caddr = function(v1849) {
    if ((function(v1850) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1850) && (function(v1851) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v1851) && pair_p(v1851.tl);
            })(v1850.tl);
        })(v1849) !== false) {
        var if_res995 = rvoid();
    } else {
        var if_res995 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("caddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t pair?))"), v1849));
    }
    if_res995;
    return v1849.tl.tl.hd;
};
var cadddr = function(v1852) {
    if ((function(v1853) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1853) && (function(v1854) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v1854) && (function(v1855) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M1.Core.Pair.check(v1855) && pair_p(v1855.tl);
                })(v1854.tl);
            })(v1853.tl);
        })(v1852) !== false) {
        var if_res996 = rvoid();
    } else {
        var if_res996 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cadddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t (check/pair-of? #t pair?)))"), v1852));
    }
    if_res996;
    return v1852.tl.tl.tl.hd;
};
var cddddr = function(v1856) {
    if ((function(v1857) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1857) && (function(v1858) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v1858) && (function(v1859) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M1.Core.Pair.check(v1859) && pair_p(v1859.tl);
                })(v1858.tl);
            })(v1857.tl);
        })(v1856) !== false) {
        var if_res997 = rvoid();
    } else {
        var if_res997 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cddddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t (check/pair-of? #t pair?)))"), v1856));
    }
    if_res997;
    return v1856.tl.tl.tl.tl;
};
var rnull = M1.Core.Pair.EMPTY;
var list = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Pair.makeList, 0), $rjs_core.UString.make("list"));
var null_p = M1.Core.Pair.isEmpty;
var list_p = M1.Core.Pair.isList;
var length = function(v1860) {
    if (list_p(v1860) !== false) {
        var if_res998 = rvoid();
    } else {
        var if_res998 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("length"), $rjs_core.UString.make("list?"), v1860));
    }
    if_res998;
    return v1860.length;
};
var reverse = function(lst1861) {
    if (list_p(lst1861) !== false) {
        var if_res999 = rvoid();
    } else {
        var if_res999 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("reverse"), $rjs_core.UString.make("list?"), lst1861));
    }
    if_res999;
    var loop1862 = function(lst1863, result1864) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst1863) !== false) {
            var if_res1000 = result1864;
        } else {
            var if_res1000 = loop1862(lst1863.tl, M1.Core.Pair.make(lst1863.hd, result1864));
        }
        return if_res1000;
    };
    return loop1862(lst1861, $rjs_core.Pair.EMPTY);
};
var list_times_ = function() {
    var let_result1001 = values();
    var n_args1865 = arguments.length;
    var top_arguments1866 = arguments;
    var loop1867 = function(ii1868, result1869) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((ii1868 === 0) !== false) {
            var if_res1002 = result1869;
        } else {
            var next_ii1870 = ii1868 - 1;
            var if_res1002 = loop1867(next_ii1870, M1.Core.Pair.make(top_arguments1866[next_ii1870], result1869));
        }
        return if_res1002;
    };
    return loop1867(n_args1865 - 1, arguments[n_args1865 - 1]);
};
var append = function() {
    var let_result1003 = values();
    var result1871 = $rjs_core.Pair.EMPTY;
    var lsts1872 = arguments;
    var loop1873 = function(i1874) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1874 < lsts1872.length) !== false) {
            var lst1875 = lsts1872[i1874];
            result1871 = foldr(M1.Core.Pair.make, lst1875, result1871);
            var if_res1004 = loop1873(i1874 + 1);
        } else {
            var if_res1004 = rvoid();
        }
        return if_res1004;
    };
    loop1873(0);
    return result1871;
};
var for_each = function(lam1876) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1005 = null;
    } else {
        var if_res1005 = rvoid();
    }
    if_res1005;
    var let_result1006 = values();
    var lsts1877 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(lam1876) !== false) {
        var if_res1007 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), lam1876, $rjs_core.UString.make(", at:"), 0);
        var if_res1007 = null;
    }
    if_res1007;
    map.apply(null, [lam1876].concat(lsts1877));
    return null;
};
var mcons = function(hd1878, tl1879) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.MPair.make(hd1878, tl1879);
};
var mpair_p = function(v1880) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.MPair.check(v1880);
};
var mcar = function(p1881) {
    if (mpair_p(p1881) !== false) {
        var if_res1008 = rvoid();
    } else {
        var if_res1008 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("mcar"), $rjs_core.UString.make("mpair?"), p1881));
    }
    if_res1008;
    return p1881.car();
};
var mcdr = function(p1882) {
    if (mpair_p(p1882) !== false) {
        var if_res1009 = rvoid();
    } else {
        var if_res1009 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("mcdr"), $rjs_core.UString.make("mpair?"), p1882));
    }
    if_res1009;
    return p1882.cdr();
};
var set_mcar_bang_ = function(p1883, v1884) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (mpair_p(p1883) !== false) {
        var if_res1010 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("mpair?"), $rjs_core.UString.make(", given:"), p1883, $rjs_core.UString.make(", at:"), 0);
        var if_res1010 = null;
    }
    if_res1010;
    return p1883.setCar(v1884);
};
var set_mcdr_bang_ = function(p1885, v1886) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (mpair_p(p1885) !== false) {
        var if_res1011 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("mpair?"), $rjs_core.UString.make(", given:"), p1885, $rjs_core.UString.make(", at:"), 0);
        var if_res1011 = null;
    }
    if_res1011;
    return p1885.setCdr(v1886);
};
var make_struct_type = function(name1887, super_type1888, init_field_count1889, auto_field_count1890, auto_v1891, props1892, inspector1893, proc_spec1894, immutables1895, guard1896, constructor_name1897) {
    return M1.Core.Struct.makeStructType({
        'name': name1887.toString(),
        'superType': super_type1888,
        'initFieldCount': init_field_count1889,
        'autoFieldCount': auto_field_count1890,
        'autoV': auto_v1891,
        'props': props1892,
        'inspector': inspector1893,
        'procSpec': proc_spec1894,
        'immutables': immutables1895,
        'guard': guard1896,
        'constructorName': constructor_name1897
    });
};
var make_struct_field_accessor = function(ref1898, index1899, field_name1900) {
    return function(s1901) {
        if ((arguments.length !== 1) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res1012 = null;
        } else {
            var if_res1012 = rvoid();
        }
        if_res1012;
        return ref1898(s1901, index1899);
    };
};
var make_struct_field_mutator = function(set1902, index1903, fieldName1904) {
    return function(s1905, v1906) {
        if ((arguments.length !== 2) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res1013 = null;
        } else {
            var if_res1013 = rvoid();
        }
        if_res1013;
        return set1902(s1905, index1903, v1906);
    };
};
var make_struct_type_property = function(name1907, guard1908, supers1909, can_impersonate_p1910) {
    return M1.Core.Struct.makeStructTypeProperty({
        'name': name1907,
        'guard': guard1908,
        'supers': supers1909,
        'canImpersonate': can_impersonate_p1910
    });
};
var check_struct_type = function(name1911, what1912) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (what1912 !== false) {
        if (M1.Core.Struct.isStructType(what1912) !== false) {
            var if_res1014 = rvoid();
        } else {
            throw M1.Core.racketCoreError($rjs_core.UString.make("not a struct type"));
            var if_res1014 = null;
        }
        if_res1014;
        var if_res1015 = what1912;
    } else {
        var if_res1015 = rvoid();
    }
    return if_res1015;
};
var struct_type_p = function(v1913) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Struct.isStructType(v1913);
};
var struct_type_info = function(desc1914) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Values.make(M1.Core.Struct.structTypeInfo(desc1914));
};
var vector = function() {
    return M1.Core.Vector.make(M1.Core.argumentsToArray(arguments), true);
};
var make_vector = function(size1915, v1916) {
    if (integer_p(size1915) !== false) {
        var if_res1016 = rvoid();
    } else {
        var if_res1016 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-vector"), $rjs_core.UString.make("integer?"), size1915));
    }
    if_res1016;
    if (eq_p(v1916, undefined) !== false) {
        var if_res1017 = 0;
    } else {
        var if_res1017 = v1916;
    }
    return M1.Core.Vector.makeInit(size1915, if_res1017);
};
var vector_p = M1.Core.Vector.check;
var vector_length = function(v1917) {
    if (vector_p(v1917) !== false) {
        var if_res1018 = rvoid();
    } else {
        var if_res1018 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-length"), $rjs_core.UString.make("vector?"), v1917));
    }
    if_res1018;
    return v1917.length();
};
var vector_ref = function(vec1918, i1919) {
    if (vector_p(vec1918) !== false) {
        var if_res1019 = rvoid();
    } else {
        var if_res1019 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-ref"), $rjs_core.UString.make("vector?"), vec1918));
    }
    if_res1019;
    if (integer_p(i1919) !== false) {
        var if_res1020 = rvoid();
    } else {
        var if_res1020 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-ref"), $rjs_core.UString.make("integer?"), i1919));
    }
    if_res1020;
    return vec1918.ref(i1919);
};
var vector_set_bang_ = function(vec1920, i1921, v1922) {
    if (vector(vec1920) !== false) {
        var if_res1021 = rvoid();
    } else {
        var if_res1021 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-set!"), $rjs_core.UString.make("vector"), vec1920));
    }
    if_res1021;
    if (integer_p(i1921) !== false) {
        var if_res1022 = rvoid();
    } else {
        var if_res1022 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-set!"), $rjs_core.UString.make("integer?"), i1921));
    }
    if_res1022;
    return vec1920.set(i1921, v1922);
};
var vector__gt_list = function(vec1923) {
    if (vector_p(vec1923) !== false) {
        var if_res1023 = rvoid();
    } else {
        var if_res1023 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector->list"), $rjs_core.UString.make("vector?"), vec1923));
    }
    if_res1023;
    return M1.Core.Pair.listFromArray(vec1923.items);
};
var list__gt_vector = function(lst1924) {
    if (list_p(lst1924) !== false) {
        var if_res1024 = rvoid();
    } else {
        var if_res1024 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("list->vector"), $rjs_core.UString.make("list?"), lst1924));
    }
    if_res1024;
    return M1.Core.Vector.make(M1.Core.Pair.listToArray(lst1924), true);
};
var vector__gt_immutable_vector = function(vec1925) {
    if (vector_p(vec1925) !== false) {
        var if_res1025 = rvoid();
    } else {
        var if_res1025 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector->immutable-vector"), $rjs_core.UString.make("vector?"), vec1925));
    }
    if_res1025;
    return M1.Core.Vector.copy(vec1925, false);
};
var vector_copy = function(vec1926) {
    if (vector_p(vec1926) !== false) {
        var if_res1026 = rvoid();
    } else {
        var if_res1026 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy"), $rjs_core.UString.make("vector?"), vec1926));
    }
    if_res1026;
    return M1.Core.Vector.copy(vec1926, true);
};
var vector_copy_bang_ = function(dest1927, dest_start1928, src1929, src_start1930, src_end1931) {
    if (vector_p(dest1927) !== false) {
        var if_res1027 = rvoid();
    } else {
        var if_res1027 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("vector?"), dest1927));
    }
    if_res1027;
    if (integer_p(dest_start1928) !== false) {
        var if_res1028 = rvoid();
    } else {
        var if_res1028 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), dest_start1928));
    }
    if_res1028;
    if (vector_p(src1929) !== false) {
        var if_res1029 = rvoid();
    } else {
        var if_res1029 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("vector?"), src1929));
    }
    if_res1029;
    if (integer_p(src_start1930) !== false) {
        var if_res1030 = rvoid();
    } else {
        var if_res1030 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), src_start1930));
    }
    if_res1030;
    if (integer_p(src_end1931) !== false) {
        var if_res1031 = rvoid();
    } else {
        var if_res1031 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), src_end1931));
    }
    if_res1031;
    return dest1927.copy(dest_start1928, src1929, src_start1930, src_end1931);
};
var hash = function() {
    var let_result1032 = values();
    var kv_times_1932 = arguments;
    if (((kv_times_1932.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res1033 = null;
    } else {
        var if_res1033 = rvoid();
    }
    if_res1033;
    var items1933 = [];
    var loop1934 = function(i1935) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1935 < kv_times_1932.length) !== false) {
            items1933.push([kv_times_1932[i1935], kv_times_1932[__plus_(i1935, 1)]]);
            var if_res1034 = loop1934(i1935 + 2);
        } else {
            var if_res1034 = rvoid();
        }
        return if_res1034;
    };
    loop1934(0);
    return M1.Core.Hash.makeEqual(items1933, false);
};
var hasheqv = function() {
    var let_result1035 = values();
    var kv_times_1936 = arguments;
    if (((kv_times_1936.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res1036 = null;
    } else {
        var if_res1036 = rvoid();
    }
    if_res1036;
    var items1937 = [];
    var loop1938 = function(i1939) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1939 < kv_times_1936.length) !== false) {
            items1937.push([kv_times_1936[i1939], kv_times_1936[__plus_(i1939, 1)]]);
            var if_res1037 = loop1938(i1939 + 2);
        } else {
            var if_res1037 = rvoid();
        }
        return if_res1037;
    };
    loop1938(0);
    return M1.Core.Hash.makeEqv(items1937, false);
};
var hasheq = function() {
    var let_result1038 = values();
    var kv_times_1940 = arguments;
    if (((kv_times_1940.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res1039 = null;
    } else {
        var if_res1039 = rvoid();
    }
    if_res1039;
    var items1941 = [];
    var loop1942 = function(i1943) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1943 < kv_times_1940.length) !== false) {
            items1941.push([kv_times_1940[i1943], kv_times_1940[__plus_(i1943, 1)]]);
            var if_res1040 = loop1942(i1943 + 2);
        } else {
            var if_res1040 = rvoid();
        }
        return if_res1040;
    };
    loop1942(0);
    return M1.Core.Hash.makeEq(items1941, false);
};
var make_hash = function(assocs1944) {
    var let_result1041 = values();
    var assocs_times_1945 = assocs1944 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqualFromAssocs(assocs_times_1945, true);
};
var make_hasheqv = function(assocs1946) {
    var let_result1042 = values();
    var assocs_times_1947 = assocs1946 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqvFromAssocs(assocs_times_1947, true);
};
var make_hasheq = function(assocs1948) {
    var let_result1043 = values();
    var assocs_times_1949 = assocs1948 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqFromAssocs(assocs_times_1949, true);
};
var make_immutable_hash = function(assocs1950) {
    var let_result1044 = values();
    var assocs_times_1951 = assocs1950 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqualFromAssocs(assocs_times_1951, false);
};
var make_immutable_hasheqv = function(assocs1952) {
    var let_result1045 = values();
    var assocs_times_1953 = assocs1952 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqvFromAssocs(assocs_times_1953, false);
};
var make_immutable_hasheq = function(assocs1954) {
    var let_result1046 = values();
    var assocs_times_1955 = assocs1954 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqFromAssocs(assocs_times_1955, false);
};
var hash_p = M1.Core.Hash.check;
var hash_equal_p = M1.Core.Hash.isEqualHash;
var hash_eqv_p = M1.Core.Hash.isEqvHash;
var hash_eq_p = M1.Core.Hash.isEqHash;
var hash_weak_p = M1.Core.Hash.isWeakHash;
var cl1047 = function(h1956, k1957) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1956.hasKey(k1957) !== false) {
        var if_res1050 = h1956._h.get(k1957);
    } else {
        var if_res1050 = raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-ref"), $rjs_core.UString.make("no value found for key"), $rjs_core.UString.make("key"), k1957));
    }
    return if_res1050;
};
var cl1048 = function(h1958, k1959, fail1960) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1958.ref(k1959, fail1960);
};
var hash_ref = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1049 = {
        '2': cl1047,
        '3': cl1048
    } [arguments.length];
    if (fixed_lam1049 !== undefined) {
        return fixed_lam1049.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_has_key_p = function(h1961, k1962) {
    return h1961.hasKey(k1962);
};
var cl1051 = function(h1963, k1964) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1963.hasKey(k1964) !== false) {
        var if_res1054 = h1963.refKey(k1964);
    } else {
        var if_res1054 = raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-ref-key"), $rjs_core.UString.make("hash does not contain key"), $rjs_core.UString.make("key"), k1964));
    }
    return if_res1054;
};
var cl1052 = function(h1965, k1966, fail1967) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1965.refKey(k1966, fail1967);
};
var hash_ref_key = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1053 = {
        '2': cl1051,
        '3': cl1052
    } [arguments.length];
    if (fixed_lam1053 !== undefined) {
        return fixed_lam1053.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_set = function(h1968, k1969, v1970) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1968.isImmutable() !== false) {
        var if_res1055 = h1968.set(k1969, v1970);
    } else {
        var if_res1055 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-set"), $rjs_core.UString.make("(and/c hash? immutable?)"), 0, h1968, k1969, v1970));
    }
    return if_res1055;
};
var hash_remove = function(h1971, k1972) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1971.isImmutable() !== false) {
        var if_res1056 = h1971.remove(k1972);
    } else {
        var if_res1056 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-remove"), $rjs_core.UString.make("(and/c hash? immutable?)"), 0, h1971, k1972));
    }
    return if_res1056;
};
var cl1057 = function(h1973, proc1974) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Hash.map(h1973, proc1974);
};
var cl1058 = function(h1975, proc1976, try_order_p1977) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Hash.map(h1975, proc1976);
};
var hash_map = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1059 = {
        '2': cl1057,
        '3': cl1058
    } [arguments.length];
    if (fixed_lam1059 !== undefined) {
        return fixed_lam1059.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_count = function(h1978) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1978.size();
};
var hash_remove_bang_ = function(h1979, k1980) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1979.isImmutable(h1979) !== false) {
        var if_res1060 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-remove!"), $rjs_core.UString.make("(and/c hash? (not/c immutable?))"), 0, h1979, k1980));
    } else {
        var if_res1060 = h1979.doremove(k1980);
    }
    return if_res1060;
};
var hash_set_bang_ = function(h1981, k1982, v1983) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1981.isImmutable(h1981) !== false) {
        var if_res1061 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-set!"), $rjs_core.UString.make("(and/c hash? (not/c immutable?))"), 0, h1981, k1982, v1983));
    } else {
        var if_res1061 = h1981.doset(k1982, v1983);
    }
    return if_res1061;
};
var hash_iterate_first = function(h1984) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1984.iterateFirst();
};
var hash_iterate_next = function(h1985, i1986) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1985.iterateNext(i1986);
};
var hash_iterate_key = function(h1987, i1988) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1987.iterateKey(i1988);
};
var hash_iterate_value = function(h1989, i1990) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1989.iterateValue(i1990);
};
var hash_iterate_key_plus_value = function(h1991, i1992) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1991.iterateKeyValue(i1992);
};
var hash_iterate_pair = function(h1993, i1994) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1993.iteratePair(i1994);
};
var hash_keys_subset_p = function(h11995, h21996) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((M1.Core.Hash.check(h11995) && M1.Core.Hash.check(h21996)) !== false) {
        if (h11995.isSameType(h21996) !== false) {
            var if_res1062 = h11995.isKeysSubset(h21996);
        } else {
            var if_res1062 = raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-keys-subset?"), $rjs_core.UString.make("given hash tables do not use the same key comparison"), $rjs_core.UString.make("first table"), h11995, $rjs_core.UString.make("second table"), h21996));
        }
        var if_res1063 = if_res1062;
    } else {
        var if_res1063 = false;
    }
    return if_res1063;
};
var hash_union = function(h11997, h21998) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h11997.union(h21998);
};
var hash_strong_p = function(h1999) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return true;
};
var apply = function(lam2000) {
    var let_result1064 = values();
    var args2001 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(lam2000) !== false) {
        var if_res1065 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), lam2000, $rjs_core.UString.make(", at:"), 0);
        var if_res1065 = null;
    }
    if_res1065;
    var let_result1066 = values();
    if (zero_p(args2001.length) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1070 = null;
    } else {
        if (equal_p(args2001.length, 1) !== false) {
            if (null_p(args2001[0]) !== false) {
                var if_res1068 = rvoid();
            } else {
                if (M1.Core.Pair.check(args2001[0]) !== false) {
                    var if_res1067 = rvoid();
                } else {
                    throw M1.Core.racketContractError($rjs_core.UString.make("expected a"), M1.Core.Pair, $rjs_core.UString.make(", but given"), args2001[0]);
                    var if_res1067 = null;
                }
                var if_res1068 = if_res1067;
            }
            if_res1068;
            var if_res1069 = M1.Core.Pair.listToArray(args2001[0]);
        } else {
            var if_res1069 = args2001.concat(M1.Core.Pair.listToArray(args2001.pop()));
        }
        var if_res1070 = if_res1069;
    }
    var final_args2002 = if_res1070;
    return lam2000.apply(null, final_args2002);
};
var map = function(fn2003) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1071 = null;
    } else {
        var if_res1071 = rvoid();
    }
    if_res1071;
    var let_result1072 = values();
    var lists2004 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(fn2003) !== false) {
        var if_res1073 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn2003, $rjs_core.UString.make(", at:"), 0);
        var if_res1073 = null;
    }
    if_res1073;
    var let_result1074 = values();
    if (__lt__eq_(lists2004.length, 0) !== false) {
        var if_res1075 = error($rjs_core.PrimitiveSymbol.make("map"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res1075 = rvoid();
    }
    if_res1075;
    var let_result1076 = values();
    var lst_len2005 = length(lists2004[0]);
    var loop2006 = function(i2007) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i2007 < lists2004.length) !== false) {
            var v2008 = lists2004[i2007];
            if (eq_p(length(v2008), lst_len2005) !== false) {
                var if_res1077 = rvoid();
            } else {
                var if_res1077 = error($rjs_core.PrimitiveSymbol.make("map"), $rjs_core.UString.make("all input lists must have equal length"));
            }
            if_res1077;
            var if_res1078 = loop2006(i2007 + 1);
        } else {
            var if_res1078 = rvoid();
        }
        return if_res1078;
    };
    loop2006(1);
    var let_result1079 = values();
    var result2009 = Array(lst_len2005);
    var args2010 = Array(lists2004.length);
    var loop2011 = function(result_i2012) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((result_i2012 < lst_len2005) !== false) {
            var loop2013 = function(lst_j2014) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if ((lst_j2014 < lists2004.length) !== false) {
                    var lst2015 = lists2004[lst_j2014];
                    args2010[lst_j2014] = lst2015.hd;
                    lists2004[lst_j2014] = lst2015.tl;
                    var if_res1080 = loop2013(lst_j2014 + 1);
                } else {
                    var if_res1080 = rvoid();
                }
                return if_res1080;
            };
            loop2013(0);
            result2009[result_i2012] = fn2003.apply(null, args2010);
            var if_res1081 = loop2011(result_i2012 + 1);
        } else {
            var if_res1081 = rvoid();
        }
        return if_res1081;
    };
    loop2011(0);
    return M1.Core.Pair.listFromArray(result2009);
};
var foldl = function(fn2016, init2017) {
    if ((arguments.length < 2) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1082 = null;
    } else {
        var if_res1082 = rvoid();
    }
    if_res1082;
    var let_result1083 = values();
    var lists2018 = Array.prototype.slice.call(arguments, 2);
    if (procedure_p(fn2016) !== false) {
        var if_res1084 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn2016, $rjs_core.UString.make(", at:"), 0);
        var if_res1084 = null;
    }
    if_res1084;
    var let_result1085 = values();
    if (__lt__eq_(lists2018.length, 0) !== false) {
        var if_res1086 = error($rjs_core.PrimitiveSymbol.make("foldl"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res1086 = rvoid();
    }
    if_res1086;
    var let_result1087 = values();
    var lst_len2019 = length(lists2018[0]);
    var loop2020 = function(i2021) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i2021 < lists2018.length) !== false) {
            var v2022 = lists2018[i2021];
            if (eq_p(length(v2022), lst_len2019) !== false) {
                var if_res1088 = rvoid();
            } else {
                var if_res1088 = error($rjs_core.PrimitiveSymbol.make("foldl"), $rjs_core.UString.make("all input lists must have equal length"));
            }
            if_res1088;
            var if_res1089 = loop2020(i2021 + 1);
        } else {
            var if_res1089 = rvoid();
        }
        return if_res1089;
    };
    loop2020(1);
    var let_result1090 = values();
    var result2023 = init2017;
    var args2024 = Array(lists2018.length + 1);
    var loop2025 = function(result_i2026) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((result_i2026 < lst_len2019) !== false) {
            var loop2027 = function(lst_j2028) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if ((lst_j2028 < lists2018.length) !== false) {
                    var lst2029 = lists2018[lst_j2028];
                    args2024[lst_j2028] = lst2029.hd;
                    lists2018[lst_j2028] = lst2029.tl;
                    var if_res1091 = loop2027(lst_j2028 + 1);
                } else {
                    var if_res1091 = rvoid();
                }
                return if_res1091;
            };
            loop2027(0);
            args2024[lists2018.length] = result2023;
            result2023 = fn2016.apply(null, args2024);
            var if_res1092 = loop2025(result_i2026 + 1);
        } else {
            var if_res1092 = rvoid();
        }
        return if_res1092;
    };
    loop2025(0);
    return result2023;
};
var _foldr = function(fn2030, init2031, lists2032) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (null_p(lists2032[0]) !== false) {
        var if_res1094 = init2031;
    } else {
        var args2033 = Array(add1(lists2032.length));
        var loop2034 = function(ii2035) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((ii2035 < lists2032.length) !== false) {
                var lst2036 = lists2032[ii2035];
                args2033[ii2035] = lst2036.hd;
                lists2032[ii2035] = lst2036.tl;
                var if_res1093 = loop2034(ii2035 + 1);
            } else {
                var if_res1093 = rvoid();
            }
            return if_res1093;
        };
        loop2034(0);
        args2033[lists2032.length] = _foldr(fn2030, init2031, lists2032);
        var if_res1094 = fn2030.apply(null, args2033);
    }
    return if_res1094;
};
var foldr = function(fn2037, init2038) {
    if ((arguments.length < 2) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1095 = null;
    } else {
        var if_res1095 = rvoid();
    }
    if_res1095;
    var let_result1096 = values();
    var lists2039 = Array.prototype.slice.call(arguments, 2);
    if (procedure_p(fn2037) !== false) {
        var if_res1097 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn2037, $rjs_core.UString.make(", at:"), 0);
        var if_res1097 = null;
    }
    if_res1097;
    var let_result1098 = values();
    if (__lt__eq_(lists2039.length, 0) !== false) {
        var if_res1099 = error($rjs_core.PrimitiveSymbol.make("foldr"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res1099 = rvoid();
    }
    if_res1099;
    var let_result1100 = values();
    var lst_len2040 = length(lists2039[0]);
    var loop2041 = function(i2042) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i2042 < lists2039.length) !== false) {
            var v2043 = lists2039[i2042];
            if (eq_p(length(v2043), lst_len2040) !== false) {
                var if_res1101 = rvoid();
            } else {
                var if_res1101 = error($rjs_core.PrimitiveSymbol.make("foldr"), $rjs_core.UString.make("all input lists must have equal length"));
            }
            if_res1101;
            var if_res1102 = loop2041(i2042 + 1);
        } else {
            var if_res1102 = rvoid();
        }
        return if_res1102;
    };
    loop2041(1);
    return _foldr(fn2037, init2038, lists2039);
};
var cl1103 = function(end2044) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return range(0, end2044, 1);
};
var cl1104 = function(start2045, end2046) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (__lt_(start2045, end2046) !== false) {
        var if_res1107 = 1;
    } else {
        var if_res1107 = -1;
    }
    return range(start2045, end2046, if_res1107);
};
var cl1105 = function(start2047, end2048, step2049) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var result2050 = [];
    if ((__gt__eq_(step2049, 0) && __lt_(step2049, end2048)) !== false) {
        var loop2051 = function(i2052) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((i2052 < end2048) !== false) {
                result2050.push(i2052);
                var if_res1108 = loop2051(i2052 + step2049);
            } else {
                var if_res1108 = rvoid();
            }
            return if_res1108;
        };
        var if_res1111 = loop2051(start2047);
    } else {
        if ((__lt__eq_(step2049, 0) && __lt_(end2048, start2047)) !== false) {
            var loop2053 = function(i2054) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if ((i2054 < __(end2048)) !== false) {
                    result2050.push(__(i2054));
                    var if_res1109 = loop2053(i2054 + __(step2049));
                } else {
                    var if_res1109 = rvoid();
                }
                return if_res1109;
            };
            var if_res1110 = loop2053(__(start2047));
        } else {
            var if_res1110 = rvoid();
        }
        var if_res1111 = if_res1110;
    }
    if_res1111;
    return M1.Core.Pair.listFromArray(result2050);
};
var range = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1106 = {
        '1': cl1103,
        '2': cl1104,
        '3': cl1105
    } [arguments.length];
    if (fixed_lam1106 !== undefined) {
        return fixed_lam1106.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3]);
var remove = function(v2055, lst2056, proc2057) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(proc2057, undefined) !== false) {
        proc2057 = M1.Core.isEqual;
        var if_res1112 = null;
    } else {
        var if_res1112 = rvoid();
    }
    if_res1112;
    var loop2058 = function(result2059, lst2060) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst2060) !== false) {
            var if_res1114 = reverse(result2059);
        } else {
            if (proc2057(v2055, car(lst2060)) !== false) {
                var if_res1113 = append(reverse(result2059), cdr(lst2060));
            } else {
                var if_res1113 = rvoid();
            }
            if_res1113;
            var if_res1114 = loop2058(cons(car(lst2060), result2059), cdr(lst2060));
        }
        return if_res1114;
    };
    return loop2058($rjs_core.Pair.EMPTY, lst2056);
};
var filter = function(fn2061, lst2062) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2063 = function(result2064, lst2065) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst2065) !== false) {
            var if_res1116 = reverse(result2064);
        } else {
            if (fn2061(lst2065.hd) !== false) {
                var if_res1115 = loop2063(M1.Core.Pair.make(lst2065.hd, result2064), lst2065.tl);
            } else {
                var if_res1115 = loop2063(result2064, lst2065.tl);
            }
            var if_res1116 = if_res1115;
        }
        return if_res1116;
    };
    return loop2063($rjs_core.Pair.EMPTY, lst2062);
};
var ormap = function(fn2066) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1117 = null;
    } else {
        var if_res1117 = rvoid();
    }
    if_res1117;
    var let_result1118 = values();
    var lists2067 = Array.prototype.slice.call(arguments, 1);
    return foldl.apply(this, [function() {
        var args2068 = M1.Core.argumentsToArray(arguments);
        var final_arg2069 = args2068.pop();
        return (final_arg2069 || fn2066.apply(null, args2068)) && true;
    }, false].concat(lists2067));
};
var andmap = function(fn2070) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1119 = null;
    } else {
        var if_res1119 = rvoid();
    }
    if_res1119;
    var let_result1120 = values();
    var lists2071 = Array.prototype.slice.call(arguments, 1);
    return foldl.apply(this, [function() {
        var args2072 = M1.Core.argumentsToArray(arguments);
        var final_arg2073 = args2072.pop();
        return (final_arg2073 && fn2070.apply(null, args2072)) && true;
    }, true].concat(lists2071));
};
var member = function(v2074, lst2075) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2076 = function(lst2077) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst2077) !== false) {
            var if_res1122 = false;
        } else {
            if (M1.Core.isEqual(v2074, lst2077.hd) !== false) {
                var if_res1121 = lst2077;
            } else {
                var if_res1121 = loop2076(lst2077.tl);
            }
            var if_res1122 = if_res1121;
        }
        return if_res1122;
    };
    return loop2076(lst2075);
};
var compose = function() {
    var procs2078 = M1.Core.argumentsToArray(arguments);
    return function() {
        var let_result1123 = values();
        var result2079 = M1.Core.argumentsToArray(arguments);
        var procs_times_2080 = procs2078.reverse();
        var loop2081 = function(i2082) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((i2082 < procs_times_2080.length) !== false) {
                var p2083 = procs_times_2080[i2082];
                result2079 = p2083.apply(null, result2079);
                if (M1.Core.Values.check(result2079) !== false) {
                    result2079 = result2079.getAll();
                    var if_res1124 = null;
                } else {
                    result2079 = [result2079];
                    var if_res1124 = null;
                }
                if_res1124;
                var if_res1125 = loop2081(i2082 + 1);
            } else {
                var if_res1125 = rvoid();
            }
            return if_res1125;
        };
        loop2081(0);
        if ((result2079.length === 1) !== false) {
            var if_res1126 = result2079[0];
        } else {
            var if_res1126 = M1.Core.Values.make(result2079);
        }
        return if_res1126;
    };
};
var compose1 = function() {
    var procs2084 = M1.Core.argumentsToArray(arguments);
    return function(v2085) {
        var let_result1127 = values();
        var result2086 = v2085;
        var procs_times_2087 = procs2084.reverse();
        var loop2088 = function(i2089) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((i2089 < procs_times_2087.length) !== false) {
                var p2090 = procs_times_2087[i2089];
                result2086 = p2090(result2086);
                var if_res1128 = loop2088(i2089 + 1);
            } else {
                var if_res1128 = rvoid();
            }
            return if_res1128;
        };
        loop2088(0);
        return result2086;
    };
};
var list_ref = function(lst2091, pos2092) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2093 = function(i2094, lst2095) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst2095) !== false) {
            var if_res1130 = error($rjs_core.PrimitiveSymbol.make("list-ref?"), $rjs_core.UString.make("insufficient elements"));
        } else {
            if ((i2094 === pos2092) !== false) {
                var if_res1129 = lst2095.hd;
            } else {
                var if_res1129 = loop2093(i2094 + 1, lst2095.tl);
            }
            var if_res1130 = if_res1129;
        }
        return if_res1130;
    };
    return loop2093(0, lst2091);
};
var build_list = function(n2096, proc2097) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var arr2098 = Array(n2096);
    var loop2099 = function(i2100) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i2100 < n2096) !== false) {
            arr2098[i2100] = proc2097(i2100);
            var if_res1131 = loop2099(i2100 + 1);
        } else {
            var if_res1131 = rvoid();
        }
        return if_res1131;
    };
    loop2099(0);
    return M1.Core.Pair.listFromArray(arr2098);
};
var make_list = function(n2101, v2102) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2103 = function(result2104, i2105) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i2105 === n2101) !== false) {
            var if_res1132 = result2104;
        } else {
            var if_res1132 = loop2103(M1.Core.Pair.make(v2102, result2104), i2105 + 1);
        }
        return if_res1132;
    };
    return loop2103($rjs_core.Pair.EMPTY, 0);
};
var flatten = function(lst2106) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (null_p(lst2106) !== false) {
        var if_res1134 = lst2106;
    } else {
        if (pair_p(lst2106) !== false) {
            var if_res1133 = append(flatten(lst2106.hd), flatten(lst2106.tl));
        } else {
            var if_res1133 = list(lst2106);
        }
        var if_res1134 = if_res1133;
    }
    return if_res1134;
};
var assoc = function(k2107, lst2108) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2109 = function(lst2110) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst2110) !== false) {
            var if_res1136 = false;
        } else {
            if (M1.Core.isEqual(k2107, lst2110.hd.hd) !== false) {
                var if_res1135 = lst2110.hd;
            } else {
                var if_res1135 = loop2109(lst2110.tl);
            }
            var if_res1136 = if_res1135;
        }
        return if_res1136;
    };
    return loop2109(lst2108);
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
var string_ref = function(s2111, i2112) {
    if (string_p(s2111) !== false) {
        var if_res1137 = rvoid();
    } else {
        var if_res1137 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-ref"), $rjs_core.UString.make("string?"), s2111));
    }
    if_res1137;
    if (exact_nonnegative_integer_p(i2112) !== false) {
        var if_res1138 = rvoid();
    } else {
        var if_res1138 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-ref"), $rjs_core.UString.make("exact-nonnegative-integer?"), i2112));
    }
    if_res1138;
    if (s2111.isValidIndex(i2112) !== false) {
        var if_res1139 = s2111.charAt(i2112);
    } else {
        var if_res1139 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("string-ref"), $rjs_core.UString.make("string"), s2111, s2111.length, i2112));
    }
    return if_res1139;
};
var string_eq__p = function(sa2113, sb2114) {
    if (string_p(sa2113) !== false) {
        var if_res1140 = rvoid();
    } else {
        var if_res1140 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string=?"), $rjs_core.UString.make("string?"), sa2113));
    }
    if_res1140;
    if (string_p(sb2114) !== false) {
        var if_res1141 = rvoid();
    } else {
        var if_res1141 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string=?"), $rjs_core.UString.make("string?"), sb2114));
    }
    if_res1141;
    return M1.Core.UString.eq(sa2113, sb2114);
};
var string_lt__p = function(sa2115, sb2116) {
    if (string_p(sa2115) !== false) {
        var if_res1142 = rvoid();
    } else {
        var if_res1142 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<?"), $rjs_core.UString.make("string?"), sa2115));
    }
    if_res1142;
    if (string_p(sb2116) !== false) {
        var if_res1143 = rvoid();
    } else {
        var if_res1143 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<?"), $rjs_core.UString.make("string?"), sb2116));
    }
    if_res1143;
    return M1.Core.UString.lt(sa2115, sb2116);
};
var string_lt__eq__p = function(sa2117, sb2118) {
    if (string_p(sa2117) !== false) {
        var if_res1144 = rvoid();
    } else {
        var if_res1144 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<=?"), $rjs_core.UString.make("string?"), sa2117));
    }
    if_res1144;
    if (string_p(sb2118) !== false) {
        var if_res1145 = rvoid();
    } else {
        var if_res1145 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<=?"), $rjs_core.UString.make("string?"), sb2118));
    }
    if_res1145;
    return M1.Core.UString.lte(sa2117, sb2118);
};
var string_gt__p = function(sa2119, sb2120) {
    if (string_p(sa2119) !== false) {
        var if_res1146 = rvoid();
    } else {
        var if_res1146 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>?"), $rjs_core.UString.make("string?"), sa2119));
    }
    if_res1146;
    if (string_p(sb2120) !== false) {
        var if_res1147 = rvoid();
    } else {
        var if_res1147 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>?"), $rjs_core.UString.make("string?"), sb2120));
    }
    if_res1147;
    return M1.Core.UString.gt(sa2119, sb2120);
};
var string_gt__eq__p = function(sa2121, sb2122) {
    if (string_p(sa2121) !== false) {
        var if_res1148 = rvoid();
    } else {
        var if_res1148 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>=?"), $rjs_core.UString.make("string?"), sa2121));
    }
    if_res1148;
    if (string_p(sb2122) !== false) {
        var if_res1149 = rvoid();
    } else {
        var if_res1149 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>=?"), $rjs_core.UString.make("string?"), sb2122));
    }
    if_res1149;
    return M1.Core.UString.gte(sa2121, sb2122);
};
var string_p = M1.Core.attachProcedureName(M1.Core.UString.check, $rjs_core.UString.make("string?"));
var fprintf = $rjs_core.attachProcedureArity(function(out2123, form2124, ...args21251150) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2125 = $rjs_core.Pair.listFromArray(args21251150);
    return apply(M1.Kernel.fprintf, print_as_expression(), out2123, form2124, args2125);
});
var eprintf = $rjs_core.attachProcedureArity(function(form2126, ...args21271151) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2127 = $rjs_core.Pair.listFromArray(args21271151);
    return apply(M1.Kernel.fprintf, print_as_expression(), current_error_port(), form2126, args2127);
});
var printf = $rjs_core.attachProcedureArity(function(form2128, ...args21291152) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2129 = $rjs_core.Pair.listFromArray(args21291152);
    return apply(M1.Kernel.fprintf, print_as_expression(), current_output_port(), form2128, args2129);
});
var format = $rjs_core.attachProcedureArity(function(form2130, ...args21311153) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2131 = $rjs_core.Pair.listFromArray(args21311153);
    var out2132 = open_output_string();
    apply(fprintf, out2132, form2130, args2131);
    return get_output_string(out2132);
});
var symbol_p = M1.Core.PrimitiveSymbol.check;
var keyword_p = M1.Core.Keyword.check;
var make_string2133 = function(k22134, c12135) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var k2136 = k22134;
    if (false !== false) {
        var if_res1154 = $rjs_core.Char.charFromCodepoint(0);
    } else {
        var if_res1154 = c12135;
    }
    var c2137 = if_res1154;
    return M1.Core.UString.repeatChar(k2136, c2137);
};
var cl1155 = function(k2138) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_string2133(k2138, $rjs_core.Char.charFromCodepoint(0));
};
var cl1156 = function(k2139, c12140) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_string2133(k2139, c12140);
};
var make_string = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1157 = {
        '1': cl1155,
        '2': cl1156
    } [arguments.length];
    if (fixed_lam1157 !== undefined) {
        return fixed_lam1157.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var list__gt_string = function(lst2141) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Kernel.listToString(lst2141);
};
var string__gt_list2142 = function(str32143) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(str32143, M4.unsafe_undefined) !== false) {
        var if_res1158 = string_p;
    } else {
        var if_res1158 = str32143;
    }
    var str2144 = if_res1158;
    return M1.Core.Pair.listFromArray(M1.Core.UString.toArray(str2144));
};
var cl1159 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_list2142(M4.unsafe_undefined);
};
var cl1160 = function(str32145) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_list2142(str32145);
};
var string__gt_list = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1161 = {
        '0': cl1159,
        '1': cl1160
    } [arguments.length];
    if (fixed_lam1161 !== undefined) {
        return fixed_lam1161.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var string__gt_immutable_string2146 = function(s42147) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(s42147, M4.unsafe_undefined) !== false) {
        var if_res1162 = string_p;
    } else {
        var if_res1162 = s42147;
    }
    var s2148 = if_res1162;
    return M1.Core.UString.stringToImmutableString(s2148);
};
var cl1163 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_immutable_string2146(M4.unsafe_undefined);
};
var cl1164 = function(s42149) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_immutable_string2146(s42149);
};
var string__gt_immutable_string = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1165 = {
        '0': cl1163,
        '1': cl1164
    } [arguments.length];
    if (fixed_lam1165 !== undefined) {
        return fixed_lam1165.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var symbol__gt_string = function(v2150) {
    if (symbol_p(v2150) !== false) {
        var if_res1166 = rvoid();
    } else {
        var if_res1166 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("symbol->string"), $rjs_core.UString.make("symbol?"), v2150));
    }
    if_res1166;
    return M1.Core.UString.makeMutable(v2150.toString());
};
var string__gt_symbol = function(s2151) {
    if (string_p(s2151) !== false) {
        var if_res1167 = rvoid();
    } else {
        var if_res1167 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->symbol"), $rjs_core.UString.make("string?"), s2151));
    }
    if_res1167;
    return M1.Core.PrimitiveSymbol.make(s2151);
};
var string__gt_uninterned_symbol = function(s2152) {
    if (string_p(s2152) !== false) {
        var if_res1168 = rvoid();
    } else {
        var if_res1168 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->uninterned-symbol"), $rjs_core.UString.make("string?"), s2152));
    }
    if_res1168;
    return M1.Core.PrimitiveSymbol.makeUninterned(s2152);
};
var string__gt_unreadable_symbol = function(s2153) {
    if (string_p(s2153) !== false) {
        var if_res1169 = rvoid();
    } else {
        var if_res1169 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->unreadable-symbol"), $rjs_core.UString.make("string?"), s2153));
    }
    if_res1169;
    return M1.Core.PrimitiveSymbol.make(s2153);
};
var string__gt_number2154 = function(s62155, radix52156) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var s2157 = s62155;
    if (false !== false) {
        var if_res1170 = 10;
    } else {
        var if_res1170 = radix52156;
    }
    var radix2158 = if_res1170;
    var integer_in2159 = function(lo2160, hi2161) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return function(v2162) {
            return (exact_integer_p(v2162) && __gt__eq_(v2162, 2)) && __lt__eq_(v2162, 16);
        };
    };
    if (string_p(s2157) !== false) {
        var if_res1171 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("string?"), $rjs_core.UString.make(", given:"), s2157, $rjs_core.UString.make(", at:"), 0);
        var if_res1171 = null;
    }
    if_res1171;
    var let_result1172 = values();
    if (integer_in2159(2, 16)(radix2158) !== false) {
        var if_res1173 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("(integer-in 2 16)"), $rjs_core.UString.make(", given:"), radix2158, $rjs_core.UString.make(", at:"), 1);
        var if_res1173 = null;
    }
    if_res1173;
    var let_result1174 = values();
    var js_string__gt_number2163 = function() {
        if (arguments.length !== 0) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var result2164 = parseInt(s2157, radix2158);
        if ((isNaN(result2164) || not(s2157.isValidInteger(radix2158))) !== false) {
            var if_res1175 = false;
        } else {
            var if_res1175 = result2164;
        }
        return if_res1175;
    };
    return js_string__gt_number2163();
};
var cl1176 = function(s2166) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_number2154(s2166, 10);
};
var cl1177 = function(s2167, radix52168) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_number2154(s2167, radix52168);
};
var string__gt_number = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1178 = {
        '1': cl1176,
        '2': cl1177
    } [arguments.length];
    if (fixed_lam1178 !== undefined) {
        return fixed_lam1178.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var symbol_interned_p = function(sym2169) {
    if (symbol_p(sym2169) !== false) {
        var if_res1179 = rvoid();
    } else {
        var if_res1179 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("symbol-interned?"), $rjs_core.UString.make("symbol?"), sym2169));
    }
    if_res1179;
    return M1.Core.PrimitiveSymbol.isInterned(sym2169);
};
var symbol_eq__p = function(s2170, v2171) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s2170.equals(v2171);
};
var symbol_lt__p = function(s2172, v2173) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s2172.lt(v2173);
};
var keyword_lt__p = function(s2174, v2175) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s2174.lt(v2175);
};
var string_length = function(s2176) {
    if (string_p(s2176) !== false) {
        var if_res1180 = rvoid();
    } else {
        var if_res1180 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-length"), $rjs_core.UString.make("string?"), s2176));
    }
    if_res1180;
    return s2176.length;
};
var string_downcase = function(s2177) {
    if (string_p(s2177) !== false) {
        var if_res1181 = rvoid();
    } else {
        var if_res1181 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-downcase"), $rjs_core.UString.make("string?"), s2177));
    }
    if_res1181;
    return s2177.toLowerCase();
};
var string_upcase = function(s2178) {
    if (string_p(s2178) !== false) {
        var if_res1182 = rvoid();
    } else {
        var if_res1182 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-upcase"), $rjs_core.UString.make("string?"), s2178));
    }
    if_res1182;
    return s2178.toUpperCase();
};
var substring2179 = function(str82180, start92181, end72182) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var str2183 = str82180;
    var start2184 = start92181;
    if (false !== false) {
        var if_res1183 = false;
    } else {
        var if_res1183 = end72182;
    }
    var end2185 = if_res1183;
    if (not(M1.Core.UString.check(str2183)) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("expected a string"));
        var if_res1187 = null;
    } else {
        if ((start2184 < 0) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("invalid start index"));
            var if_res1186 = null;
        } else {
            if (((end2185 !== false) && (((end2185 < 0) || (end2185 > str2183.length)) || (end2185 < start2184))) !== false) {
                throw M1.Core.racketContractError($rjs_core.UString.make("invalid end index"));
                var if_res1185 = null;
            } else {
                if ((end2185 === false) !== false) {
                    end2185 = str2183.length;
                    var if_res1184 = null;
                } else {
                    var if_res1184 = rvoid();
                }
                var if_res1185 = if_res1184;
            }
            var if_res1186 = if_res1185;
        }
        var if_res1187 = if_res1186;
    }
    if_res1187;
    return str2183.substring(start2184, end2185);
};
var cl1188 = function(str2186, start2187) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return substring2179(str2186, start2187, false);
};
var cl1189 = function(str2188, start2189, end72190) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return substring2179(str2188, start2189, end72190);
};
var substring = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1190 = {
        '2': cl1188,
        '3': cl1189
    } [arguments.length];
    if (fixed_lam1190 !== undefined) {
        return fixed_lam1190.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var string_split = function(str2191, sep2192) {
    if (string_p(str2191) !== false) {
        var if_res1191 = rvoid();
    } else {
        var if_res1191 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-split"), $rjs_core.UString.make("string?"), str2191));
    }
    if_res1191;
    if ((function(v2193) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return string_p(v2193) || regexp_p(v2193);
        })(sep2192) !== false) {
        var if_res1192 = rvoid();
    } else {
        var if_res1192 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-split"), $rjs_core.UString.make("(check/or string? regexp?)"), sep2192));
    }
    if_res1192;
    return M1.Core.Pair.listFromArray(str2191.split(sep2192));
};
var string_set_bang_ = function(str2194, k2195, char2196) {
    if ((function(v2197) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return string_p(v2197) && (function(v2198) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return not(immutable_p(v2198));
            })(v2197);
        })(str2194) !== false) {
        var if_res1193 = rvoid();
    } else {
        var if_res1193 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("(check/and string? (check/not immutable?))"), str2194));
    }
    if_res1193;
    if (exact_nonnegative_integer_p(k2195) !== false) {
        var if_res1194 = rvoid();
    } else {
        var if_res1194 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("exact-nonnegative-integer?"), k2195));
    }
    if_res1194;
    if (char_p(char2196) !== false) {
        var if_res1195 = rvoid();
    } else {
        var if_res1195 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("char?"), char2196));
    }
    if_res1195;
    if (str2194.isValidIndex(k2195) !== false) {
        var if_res1196 = str2194.setCharAt(k2195, char2196);
    } else {
        var if_res1196 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("string-set!"), $rjs_core.UString.make("string"), str2194, str2194.length, k2195));
    }
    return if_res1196;
};
var char_p = function(c2199) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Char.check(c2199);
};
var char__gt_integer = function(c2200) {
    if (char_p(c2200) !== false) {
        var if_res1197 = rvoid();
    } else {
        var if_res1197 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char->integer"), $rjs_core.UString.make("char?"), c2200));
    }
    if_res1197;
    return M1.Core.Char.charToInteger(c2200);
};
var integer__gt_char = function(k2201) {
    if (exact_nonnegative_integer_p(k2201) !== false) {
        var if_res1198 = rvoid();
    } else {
        var if_res1198 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("integer->char"), $rjs_core.UString.make("exact-nonnegative-integer?"), k2201));
    }
    if_res1198;
    return M1.Core.Char.integerToChar(k2201);
};
var char_utf_8_length = function(c2202) {
    if (char_p(c2202) !== false) {
        var if_res1199 = rvoid();
    } else {
        var if_res1199 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-utf-8-length"), $rjs_core.UString.make("char?"), c2202));
    }
    if_res1199;
    return M1.Core.Char.charUtf8Length(c2202);
};
var char_upcase = function(c2203) {
    if (char_p(c2203) !== false) {
        var if_res1200 = rvoid();
    } else {
        var if_res1200 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-upcase"), $rjs_core.UString.make("char?"), c2203));
    }
    if_res1200;
    return M1.Core.Char.upcase(c2203);
};
var char_downcase = function(c2204) {
    if (char_p(c2204) !== false) {
        var if_res1201 = rvoid();
    } else {
        var if_res1201 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-downcase"), $rjs_core.UString.make("char?"), c2204));
    }
    if_res1201;
    return M1.Core.Char.downcase(c2204);
};
var char_alphabetic_p = function(c2205) {
    if (char_p(c2205) !== false) {
        var if_res1202 = rvoid();
    } else {
        var if_res1202 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-alphabetic?"), $rjs_core.UString.make("char?"), c2205));
    }
    if_res1202;
    return M1.Core.Char.isAlphabetic(c2205);
};
var char_lower_case_p = function(c2206) {
    if (char_p(c2206) !== false) {
        var if_res1203 = rvoid();
    } else {
        var if_res1203 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-lower-case?"), $rjs_core.UString.make("char?"), c2206));
    }
    if_res1203;
    return M1.Core.Char.isLowerCase(c2206);
};
var char_upper_case_p = function(c2207) {
    if (char_p(c2207) !== false) {
        var if_res1204 = rvoid();
    } else {
        var if_res1204 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-upper-case?"), $rjs_core.UString.make("char?"), c2207));
    }
    if_res1204;
    return M1.Core.Char.isUpperCase(c2207);
};
var char_title_case_p = function(c2208) {
    if (char_p(c2208) !== false) {
        var if_res1205 = rvoid();
    } else {
        var if_res1205 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-title-case?"), $rjs_core.UString.make("char?"), c2208));
    }
    if_res1205;
    return M1.Core.Char.isTitleCase(c2208);
};
var char_numeric_p = function(c2209) {
    if (char_p(c2209) !== false) {
        var if_res1206 = rvoid();
    } else {
        var if_res1206 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-numeric?"), $rjs_core.UString.make("char?"), c2209));
    }
    if_res1206;
    return M1.Core.Char.isNumeric(c2209);
};
var char_symbolic_p = function(c2210) {
    if (char_p(c2210) !== false) {
        var if_res1207 = rvoid();
    } else {
        var if_res1207 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-symbolic?"), $rjs_core.UString.make("char?"), c2210));
    }
    if_res1207;
    return M1.Core.Char.isSymbolic(c2210);
};
var char_punctuation_p = function(c2211) {
    if (char_p(c2211) !== false) {
        var if_res1208 = rvoid();
    } else {
        var if_res1208 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-punctuation?"), $rjs_core.UString.make("char?"), c2211));
    }
    if_res1208;
    return M1.Core.Char.isPunctuation(c2211);
};
var char_graphic_p = function(c2212) {
    if (char_p(c2212) !== false) {
        var if_res1209 = rvoid();
    } else {
        var if_res1209 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-graphic?"), $rjs_core.UString.make("char?"), c2212));
    }
    if_res1209;
    return M1.Core.Char.isGraphic(c2212);
};
var char_whitespace_p = function(c2213) {
    if (char_p(c2213) !== false) {
        var if_res1210 = rvoid();
    } else {
        var if_res1210 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-whitespace?"), $rjs_core.UString.make("char?"), c2213));
    }
    if_res1210;
    return M1.Core.Char.isWhitespace(c2213);
};
var char_blank_p = function(c2214) {
    if (char_p(c2214) !== false) {
        var if_res1211 = rvoid();
    } else {
        var if_res1211 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-blank?"), $rjs_core.UString.make("char?"), c2214));
    }
    if_res1211;
    return M1.Core.Char.isBlank(c2214);
};
var char_iso_control_p = function(c2215) {
    if (char_p(c2215) !== false) {
        var if_res1212 = rvoid();
    } else {
        var if_res1212 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-iso-control?"), $rjs_core.UString.make("char?"), c2215));
    }
    if_res1212;
    return M1.Core.Char.isIsoControl(c2215);
};
var char_lt__p = function(a2216, b2217) {
    if (char_p(a2216) !== false) {
        var if_res1213 = rvoid();
    } else {
        var if_res1213 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<?"), $rjs_core.UString.make("char?"), a2216));
    }
    if_res1213;
    if (char_p(b2217) !== false) {
        var if_res1214 = rvoid();
    } else {
        var if_res1214 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<?"), $rjs_core.UString.make("char?"), b2217));
    }
    if_res1214;
    return a2216 < b2217;
};
var char_lt__eq__p = function(a2218, b2219) {
    if (char_p(a2218) !== false) {
        var if_res1215 = rvoid();
    } else {
        var if_res1215 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<=?"), $rjs_core.UString.make("char?"), a2218));
    }
    if_res1215;
    if (char_p(b2219) !== false) {
        var if_res1216 = rvoid();
    } else {
        var if_res1216 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<=?"), $rjs_core.UString.make("char?"), b2219));
    }
    if_res1216;
    return a2218 <= b2219;
};
var char_gt__p = function(a2220, b2221) {
    if (char_p(a2220) !== false) {
        var if_res1217 = rvoid();
    } else {
        var if_res1217 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>?"), $rjs_core.UString.make("char?"), a2220));
    }
    if_res1217;
    if (char_p(b2221) !== false) {
        var if_res1218 = rvoid();
    } else {
        var if_res1218 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>?"), $rjs_core.UString.make("char?"), b2221));
    }
    if_res1218;
    return a2220 > b2221;
};
var char_gt__eq__p = function(a2222, b2223) {
    if (char_p(a2222) !== false) {
        var if_res1219 = rvoid();
    } else {
        var if_res1219 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>=?"), $rjs_core.UString.make("char?"), a2222));
    }
    if_res1219;
    if (char_p(b2223) !== false) {
        var if_res1220 = rvoid();
    } else {
        var if_res1220 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>=?"), $rjs_core.UString.make("char?"), b2223));
    }
    if_res1220;
    return a2222 >= b2223;
};
var char_eq__p = function(a2224, b2225) {
    if (char_p(a2224) !== false) {
        var if_res1221 = rvoid();
    } else {
        var if_res1221 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char=?"), $rjs_core.UString.make("char?"), a2224));
    }
    if_res1221;
    if (char_p(b2225) !== false) {
        var if_res1222 = rvoid();
    } else {
        var if_res1222 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char=?"), $rjs_core.UString.make("char?"), b2225));
    }
    if_res1222;
    return M1.Core.Char.eq(a2224, b2225);
};
var box = M1.Core.Box.make;
var unbox = function(v2226) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2226.get();
};
var set_box_bang_ = function(b2227, v2228) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b2227.set(v2228);
};
var box_p = M1.Core.Box.check;
var box_cas_bang_ = function(loc2229, old2230, new2231) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (eq_p(old2230, unbox(loc2229)) && set_box_bang_(loc2229, new2231)) && true;
};
var box_immutable = M1.Core.Box.make;
var make_weak_box = M1.Core.Box.make;
var weak_box_value = function(v2232) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2232.get();
};
var set_box_times__bang_ = function(b2233, v2234) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b2233.set(v2234);
};
var unbox_times_ = function(v2235) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2235.get();
};
var let_result1223 = M1.Core.Struct.makeStructTypeProperty({
    'name': $rjs_core.UString.make("prop:evt")
});
var prop_evt = let_result1223.getAt(0);
var evt_p = let_result1223.getAt(1);
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
var equal_hash_code = function(v2236) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return 0;
};
var equal_secondary_hash_code = function(v2237) {
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
var bytes_p = function(bs2238) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Bytes.check(bs2238);
};
var make_bytes2239 = function(len112240, b102241) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var len2242 = len112240;
    if (false !== false) {
        var if_res1224 = 0;
    } else {
        var if_res1224 = b102241;
    }
    var b2243 = if_res1224;
    return M1.Core.Bytes.make(len2242, b2243);
};
var cl1225 = function(len2244) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_bytes2239(len2244, 0);
};
var cl1226 = function(len2245, b102246) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_bytes2239(len2245, b102246);
};
var make_bytes = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1227 = {
        '1': cl1225,
        '2': cl1226
    } [arguments.length];
    if (fixed_lam1227 !== undefined) {
        return fixed_lam1227.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var bytes_ref = function(bs2247, i2248) {
    if (bytes_p(bs2247) !== false) {
        var if_res1228 = rvoid();
    } else {
        var if_res1228 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-ref"), $rjs_core.UString.make("bytes?"), bs2247));
    }
    if_res1228;
    if (integer_p(i2248) !== false) {
        var if_res1229 = rvoid();
    } else {
        var if_res1229 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-ref"), $rjs_core.UString.make("integer?"), i2248));
    }
    if_res1229;
    if ((__lt_(i2248, 0) || __gt_(i2248, bs2247.length)) !== false) {
        var if_res1230 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("bytes-ref"), $rjs_core.UString.make("byte string"), bs2247, bs2247.length, i2248));
    } else {
        var if_res1230 = M1.Core.Bytes.ref(bs2247, i2248);
    }
    return if_res1230;
};
var bytes_set_bang_ = function(bs2249, i2250, b2251) {
    if (bytes_p(bs2249) !== false) {
        var if_res1231 = rvoid();
    } else {
        var if_res1231 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("bytes?"), bs2249));
    }
    if_res1231;
    if (integer_p(i2250) !== false) {
        var if_res1232 = rvoid();
    } else {
        var if_res1232 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("integer?"), i2250));
    }
    if_res1232;
    if (integer_p(b2251) !== false) {
        var if_res1233 = rvoid();
    } else {
        var if_res1233 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("integer?"), b2251));
    }
    if_res1233;
    if ((__lt_(i2250, 0) || __gt_(i2250, bs2249.length)) !== false) {
        var if_res1234 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("bytes-set!"), $rjs_core.UString.make("byte string"), bs2249, bs2249.length, i2250));
    } else {
        var if_res1234 = M1.Core.Bytes.set(bs2249, i2250, b2251);
    }
    return if_res1234;
};
var bytes_append = function() {
    var bss2252 = M1.Core.argumentsToArray(arguments);
    return M1.Core.Bytes.append(bss2252);
};
var bytes__gt_string_by_utf_8 = function(bs2253) {
    if (bytes_p(bs2253) !== false) {
        var if_res1235 = rvoid();
    } else {
        var if_res1235 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes->string/utf-8"), $rjs_core.UString.make("bytes?"), bs2253));
    }
    if_res1235;
    return M1.Core.UString.fromBytesUtf8(bs2253);
};
var bytes__gt_string_by_latin_1 = function(bs2254) {
    if (bytes_p(bs2254) !== false) {
        var if_res1236 = rvoid();
    } else {
        var if_res1236 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes->string/latin-1"), $rjs_core.UString.make("bytes?"), bs2254));
    }
    if_res1236;
    return M1.Core.UString.fromBytesLatin1(bs2254);
};
var string__gt_bytes_by_utf_8 = function(str2255) {
    if (string_p(str2255) !== false) {
        var if_res1237 = rvoid();
    } else {
        var if_res1237 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->bytes/utf-8"), $rjs_core.UString.make("string?"), str2255));
    }
    if_res1237;
    return M1.Core.UString.toBytesUtf8(str2255);
};
var string__gt_bytes_by_locale2256 = function(str152257, err_byte122258, start132259, end142260) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var str2261 = str152257;
    if (false !== false) {
        var if_res1238 = true;
    } else {
        var if_res1238 = err_byte122258;
    }
    var err_byte2262 = if_res1238;
    if (false !== false) {
        var if_res1239 = 0;
    } else {
        var if_res1239 = start132259;
    }
    var start2263 = if_res1239;
    if (false !== false) {
        var if_res1240 = 0;
    } else {
        var if_res1240 = end142260;
    }
    var end2264 = if_res1240;
    return M1.Core.UString.toBytesUtf8(str2261);
};
var cl1241 = function(str2265) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale2256(str2265, true, 0, 0);
};
var cl1242 = function(str2266, err_byte2267, start2268, end142269) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale2256(str2266, err_byte2267, start2268, end142269);
};
var cl1243 = function(str2270, err_byte2271, start132272) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale2256(str2270, err_byte2271, start132272, 0);
};
var cl1244 = function(str2273, err_byte122274) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale2256(str2273, err_byte122274, 0, 0);
};
var string__gt_bytes_by_locale = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1245 = {
        '1': cl1241,
        '4': cl1242,
        '3': cl1243,
        '2': cl1244
    } [arguments.length];
    if (fixed_lam1245 !== undefined) {
        return fixed_lam1245.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3, 4]);
var bytes_eq__p = function(bstr12275, bstr22276) {
    if (bytes_p(bstr12275) !== false) {
        var if_res1246 = rvoid();
    } else {
        var if_res1246 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes=?"), $rjs_core.UString.make("bytes?"), bstr12275));
    }
    if_res1246;
    if (bytes_p(bstr22276) !== false) {
        var if_res1247 = rvoid();
    } else {
        var if_res1247 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes=?"), $rjs_core.UString.make("bytes?"), bstr22276));
    }
    if_res1247;
    return M1.Core.Bytes.eq(bstr12275, bstr22276);
};
var bytes_lt__p = function(bstr12277, bstr22278) {
    if (bytes_p(bstr12277) !== false) {
        var if_res1248 = rvoid();
    } else {
        var if_res1248 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes<?"), $rjs_core.UString.make("bytes?"), bstr12277));
    }
    if_res1248;
    if (bytes_p(bstr22278) !== false) {
        var if_res1249 = rvoid();
    } else {
        var if_res1249 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes<?"), $rjs_core.UString.make("bytes?"), bstr22278));
    }
    if_res1249;
    return M1.Core.Bytes.lt(bstr12277, bstr22278);
};
var bytes_gt__p = function(bstr12279, bstr22280) {
    if (bytes_p(bstr12279) !== false) {
        var if_res1250 = rvoid();
    } else {
        var if_res1250 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes>?"), $rjs_core.UString.make("bytes?"), bstr12279));
    }
    if_res1250;
    if (bytes_p(bstr22280) !== false) {
        var if_res1251 = rvoid();
    } else {
        var if_res1251 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes>?"), $rjs_core.UString.make("bytes?"), bstr22280));
    }
    if_res1251;
    return M1.Core.Bytes.gt(bstr12279, bstr22280);
};
var bytes_length = function(bs2281) {
    if (bytes_p(bs2281) !== false) {
        var if_res1252 = rvoid();
    } else {
        var if_res1252 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-length"), $rjs_core.UString.make("bytes?"), bs2281));
    }
    if_res1252;
    return bs2281.length;
};
var current_continuation_marks = M1.Core.Marks.getContinuationMarks;
var continuation_mark_set__gt_list = M1.Core.Marks.getMarks;
var continuation_mark_set_first = function(mark_set2282, key_v2283, none_v2284, prompt_tag2285) {
    var let_result1253 = values();
    var mark_set2286 = mark_set2286 || M1.Core.Marks.getContinuationMarks(prompt_tag2285);
    var marks2287 = M1.Core.Marks.getMarks(mark_set2286, key_v2283, prompt_tag2285);
    if (null_p(marks2287) !== false) {
        var if_res1254 = none_v2284;
    } else {
        var if_res1254 = marks2287.hd;
    }
    return if_res1254;
};
var make_parameter = M1.Paramz.makeParameter;
var call_with_continuation_prompt = M1.Core.Marks.callWithContinuationPrompt;
var abort_current_continuation = function(prompt_tag2288) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res1255 = null;
    } else {
        var if_res1255 = rvoid();
    }
    if_res1255;
    var let_result1256 = values();
    var args2289 = Array.prototype.slice.call(arguments, 1);
    throw new M1.Core.Marks.AbortCurrentContinuation(prompt_tag2288, args2289);
    return null;
};
var make_continuation_prompt_tag = M1.Core.Marks.makeContinuationPromptTag;
var default_continuation_prompt_tag = M1.Core.Marks.defaultContinuationPromptTag;
var raise = M1.Kernel.doraise;
var exn_fail_p = M1.Core.isErr;
var exn_fail_contract_p = M1.Core.isContractErr;
var exn_fail_contract_arity_p = M1.Core.isContractErr;
var exn_message = function(e2290) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.UString.makeMutable(M1.Core.errMsg(e2290));
};
var current_output_port = make_parameter(M1.Core.Ports.standardOutputPort);
var current_input_port = make_parameter(M1.Core.Ports.standardInputPort);
var current_error_port = make_parameter(M1.Core.Ports.standardErrorPort);
var current_print = make_parameter(function(p2291) {
    if (void_p(p2291) !== false) {
        var if_res1257 = rvoid();
    } else {
        print(p2291);
        var if_res1257 = newline();
    }
    return if_res1257;
});
var port_p = function(p2292) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.check(p2292);
};
var input_port_p = function(p2293) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.isInputPort(p2293);
};
var output_port_p = function(p2294) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.isOutputPort(p2294);
};
var string_port_p = function(p2295) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.isStringPort(p2295);
};
var open_output_string = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.openOutputString();
};
var get_output_string = function(p2296) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.getOutputString(p2296);
};
var print_as_expression = make_parameter(true);
var display2297 = function(datum172298, out162299) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2300 = datum172298;
    if (eq_p(out162299, M4.unsafe_undefined) !== false) {
        var if_res1258 = current_output_port();
    } else {
        var if_res1258 = out162299;
    }
    var out2301 = if_res1258;
    return M1.Core.display(out2301, datum2300);
};
var cl1259 = function(datum2302) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return display2297(datum2302, M4.unsafe_undefined);
};
var cl1260 = function(datum2303, out162304) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return display2297(datum2303, out162304);
};
var display = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1261 = {
        '1': cl1259,
        '2': cl1260
    } [arguments.length];
    if (fixed_lam1261 !== undefined) {
        return fixed_lam1261.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var displayln2305 = function(datum192306, out182307) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2308 = datum192306;
    if (eq_p(out182307, M4.unsafe_undefined) !== false) {
        var if_res1262 = current_output_port();
    } else {
        var if_res1262 = out182307;
    }
    var out2309 = if_res1262;
    display(datum2308, out2309);
    return newline(out2309);
};
var cl1263 = function(datum2310) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return displayln2305(datum2310, M4.unsafe_undefined);
};
var cl1264 = function(datum2311, out182312) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return displayln2305(datum2311, out182312);
};
var displayln = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1265 = {
        '1': cl1263,
        '2': cl1264
    } [arguments.length];
    if (fixed_lam1265 !== undefined) {
        return fixed_lam1265.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var write2313 = function(datum212314, out202315) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2316 = datum212314;
    if (eq_p(out202315, M4.unsafe_undefined) !== false) {
        var if_res1266 = current_output_port();
    } else {
        var if_res1266 = out202315;
    }
    var out2317 = if_res1266;
    return M1.Core.write(out2317, datum2316);
};
var cl1267 = function(datum2318) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return write2313(datum2318, M4.unsafe_undefined);
};
var cl1268 = function(datum2319, out202320) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return write2313(datum2319, out202320);
};
var write = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1269 = {
        '1': cl1267,
        '2': cl1268
    } [arguments.length];
    if (fixed_lam1269 !== undefined) {
        return fixed_lam1269.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var writeln2321 = function(datum232322, out222323) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2324 = datum232322;
    if (eq_p(out222323, M4.unsafe_undefined) !== false) {
        var if_res1270 = current_output_port();
    } else {
        var if_res1270 = out222323;
    }
    var out2325 = if_res1270;
    write(datum2324, out2325);
    return newline(out2325);
};
var cl1271 = function(datum2326) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return writeln2321(datum2326, M4.unsafe_undefined);
};
var cl1272 = function(datum2327, out222328) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return writeln2321(datum2327, out222328);
};
var writeln = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1273 = {
        '1': cl1271,
        '2': cl1272
    } [arguments.length];
    if (fixed_lam1273 !== undefined) {
        return fixed_lam1273.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var print2329 = function(datum262330, out242331, quote_depth252332) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2333 = datum262330;
    if (eq_p(out242331, M4.unsafe_undefined) !== false) {
        var if_res1274 = current_output_port();
    } else {
        var if_res1274 = out242331;
    }
    var out2334 = if_res1274;
    if (false !== false) {
        var if_res1275 = 0;
    } else {
        var if_res1275 = quote_depth252332;
    }
    var quote_depth2335 = if_res1275;
    return M1.Core.print(out2334, datum2333, print_as_expression(), quote_depth2335);
};
var cl1276 = function(datum2336) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return print2329(datum2336, M4.unsafe_undefined, 0);
};
var cl1277 = function(datum2337, out2338, quote_depth252339) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return print2329(datum2337, out2338, quote_depth252339);
};
var cl1278 = function(datum2340, out242341) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return print2329(datum2340, out242341, 0);
};
var print = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1279 = {
        '1': cl1276,
        '3': cl1277,
        '2': cl1278
    } [arguments.length];
    if (fixed_lam1279 !== undefined) {
        return fixed_lam1279.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3]);
var println2342 = function(datum282343, out272344) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2345 = datum282343;
    if (eq_p(out272344, M4.unsafe_undefined) !== false) {
        var if_res1280 = current_output_port();
    } else {
        var if_res1280 = out272344;
    }
    var out2346 = if_res1280;
    print(datum2345, out2346);
    return newline(out2346);
};
var cl1281 = function(datum2347) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return println2342(datum2347, M4.unsafe_undefined);
};
var cl1282 = function(datum2348, out272349) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return println2342(datum2348, out272349);
};
var println = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1283 = {
        '1': cl1281,
        '2': cl1282
    } [arguments.length];
    if (fixed_lam1283 !== undefined) {
        return fixed_lam1283.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var newline2350 = function(out292351) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(out292351, M4.unsafe_undefined) !== false) {
        var if_res1284 = current_output_port();
    } else {
        var if_res1284 = out292351;
    }
    var out2352 = if_res1284;
    return display($rjs_core.UString.make("\n"), out2352);
};
var cl1285 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return newline2350(M4.unsafe_undefined);
};
var cl1286 = function(out292353) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return newline2350(out292353);
};
var newline = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1287 = {
        '0': cl1285,
        '1': cl1286
    } [arguments.length];
    if (fixed_lam1287 !== undefined) {
        return fixed_lam1287.apply(null, arguments);
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
var make_inspector = $rjs_core.attachProcedureArity(function(..._23541288) {
    var _2354 = $rjs_core.Pair.listFromArray(_23541288);
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
var object_name = function(fn2355) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return fn2355.name;
};
var unquoted_printing_string = function(s2356) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s2356;
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
    return function(x2357, n2358) {
        if ((arguments.length !== 2) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res1289 = null;
        } else {
            var if_res1289 = rvoid();
        }
        if_res1289;
        return $rjs_core.UString.make("str");
    };
};
var procedure_extract_target = function(f2359) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var regexp_p = function(v2360) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Regexp.check(v2360);
};
var pregexp_p = regexp_p;
var byte_regexp_p = regexp_p;
var byte_pregexp_p = regexp_p;
var regexp = function(str2361) {
    if (string_p(str2361) !== false) {
        var if_res1290 = rvoid();
    } else {
        var if_res1290 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("regexp"), $rjs_core.UString.make("string?"), str2361));
    }
    if_res1290;
    return M1.Core.Regexp.fromString(str2361);
};
var pregexp = regexp;
var byte_regexp = function(bs2362) {
    if (bytes_p(bs2362) !== false) {
        var if_res1291 = rvoid();
    } else {
        var if_res1291 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("byte-regexp"), $rjs_core.UString.make("bytes?"), bs2362));
    }
    if_res1291;
    return M1.Core.Regexp.fromString(bytes__gt_string_by_utf_8(bs2362));
};
var byte_pregexp = byte_regexp;
var regexp_match2363 = function(pattern322364, input332365, start_pos302366, end_pos312367) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var pattern2368 = pattern322364;
    var input2369 = input332365;
    if (false !== false) {
        var if_res1292 = 0;
    } else {
        var if_res1292 = start_pos302366;
    }
    var start_pos2370 = if_res1292;
    if (false !== false) {
        var if_res1293 = false;
    } else {
        var if_res1293 = end_pos312367;
    }
    var end_pos2371 = if_res1293;
    return M1.Core.Regexp.match(pattern2368, input2369, start_pos2370, end_pos2371);
};
var cl1294 = function(pattern2372, input2373) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match2363(pattern2372, input2373, 0, false);
};
var cl1295 = function(pattern2374, input2375, start_pos2376, end_pos312377) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match2363(pattern2374, input2375, start_pos2376, end_pos312377);
};
var cl1296 = function(pattern2378, input2379, start_pos302380) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match2363(pattern2378, input2379, start_pos302380, false);
};
var regexp_match = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1297 = {
        '2': cl1294,
        '4': cl1295,
        '3': cl1296
    } [arguments.length];
    if (fixed_lam1297 !== undefined) {
        return fixed_lam1297.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var regexp_match_p2381 = function(pattern362382, input372383, start_pos342384, end_pos352385) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var pattern2386 = pattern362382;
    var input2387 = input372383;
    if (false !== false) {
        var if_res1298 = 0;
    } else {
        var if_res1298 = start_pos342384;
    }
    var start_pos2388 = if_res1298;
    if (false !== false) {
        var if_res1299 = false;
    } else {
        var if_res1299 = end_pos352385;
    }
    var end_pos2389 = if_res1299;
    if (M1.Core.Regexp.match(pattern2386, input2387, start_pos2388, end_pos2389) !== false) {
        var if_res1300 = true;
    } else {
        var if_res1300 = false;
    }
    return if_res1300;
};
var cl1301 = function(pattern2390, input2391) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match_p2381(pattern2390, input2391, 0, false);
};
var cl1302 = function(pattern2392, input2393, start_pos2394, end_pos352395) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match_p2381(pattern2392, input2393, start_pos2394, end_pos352395);
};
var cl1303 = function(pattern2396, input2397, start_pos342398) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match_p2381(pattern2396, input2397, start_pos342398, false);
};
var regexp_match_p = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1304 = {
        '2': cl1301,
        '4': cl1302,
        '3': cl1303
    } [arguments.length];
    if (fixed_lam1304 !== undefined) {
        return fixed_lam1304.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var let_result1305 = make_struct_type($rjs_core.PrimitiveSymbol.make("kernel:arity-at-least"), false, 1, 0, false, rnull, false, false, $rjs_core.Pair.makeList(0), false, $rjs_core.PrimitiveSymbol.make("kernel:arity-at-least"));
var struct_2399 = let_result1305.getAt(0);
var make_2400 = let_result1305.getAt(1);
var __p2401 = let_result1305.getAt(2);
var __ref2402 = let_result1305.getAt(3);
var __set_bang_2403 = let_result1305.getAt(4);
var let_result1306 = values(struct_2399, make_2400, __p2401, make_struct_field_accessor(__ref2402, 0, $rjs_core.PrimitiveSymbol.make("value")));
var struct_kernel_arity_at_least = let_result1306.getAt(0);
var make_arity_at_least = let_result1306.getAt(1);
var kernel_arity_at_least_p = let_result1306.getAt(2);
var kernel_arity_at_least_value = let_result1306.getAt(3);
var procedure_p = function(f2404) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return typeof(f2404) === "function";
};
var arity_at_least = make_arity_at_least;
var arity_at_least_p = function(p2405) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kernel_arity_at_least_p(p2405);
};
var arity_at_least_value = function(p2406) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kernel_arity_at_least_value(p2406);
};
var procedure_arity_includes_p = function(fn2407, n2408) {
    var ar2409 = procedure_arity(fn2407);
    if (kernel_arity_at_least_p(ar2409) !== false) {
        var if_res1308 = __lt__eq_(kernel_arity_at_least_value(ar2409), n2408);
    } else {
        if (list_p(ar2409) !== false) {
            var if_res1307 = member(n2408, ar2409);
        } else {
            var if_res1307 = n2408 === ar2409;
        }
        var if_res1308 = if_res1307;
    }
    return if_res1308;
};
var procedure_arity = function(fn2410) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (Array.isArray(fn2410.__rjs_arityValue) !== false) {
        if ((fn2410.__rjs_arityValue.length === 1) !== false) {
            var if_res1309 = fn2410.__rjs_arityValue[0];
        } else {
            var if_res1309 = M1.Core.Pair.listFromArray(fn2410.__rjs_arityValue);
        }
        var if_res1311 = if_res1309;
    } else {
        if ((fn2410.__rjs_arityValue === undefined) !== false) {
            var if_res1310 = fn2410.length;
        } else {
            var if_res1310 = make_arity_at_least(fn2410.__rjs_arityValue || fn2410.length);
        }
        var if_res1311 = if_res1310;
    }
    return if_res1311;
};
var procedure_arity_p = function(v2411) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (exact_nonnegative_integer_p(v2411) || kernel_arity_at_least_p(v2411)) || ormap(function(v2412) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return exact_nonnegative_integer_p(v2412) || kernel_arity_at_least_p(v2412);
    }, v2411);
};
var procedure_arity_mask = function(fn2413) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var ar2414 = procedure_arity(fn2413);
    if (integer_p(ar2414) !== false) {
        var if_res1313 = arithmetic_shift(1, ar2414);
    } else {
        if (kernel_arity_at_least_p(ar2414) !== false) {
            var if_res1312 = arithmetic_shift(-1, kernel_arity_at_least_value(ar2414));
        } else {
            var if_res1312 = rvoid();
        }
        var if_res1313 = if_res1312;
    }
    return if_res1313;
};
var checked_procedure_check_and_extract = function(type2415, v2416, proc2417, v12418, v22419) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((M1.Core.Struct.check(v2416, type2415) && type2415._findProperty(prop_checked_procedure)) !== false) {
        var fn2420 = v2416.getField(0);
        var r12421 = fn2420(v12418, v22419);
        if (r12421 !== false) {
            var if_res1314 = v2416.getField(1);
        } else {
            var if_res1314 = proc2417(v2416, v12418, v22419);
        }
        var if_res1315 = if_res1314;
    } else {
        var if_res1315 = proc2417(v2416, v12418, v22419);
    }
    return if_res1315;
};
var gensym = function(sym2422) {
    var s2423 = (sym2422 && sym2422.v) || $rjs_core.UString.make("");
    __count = __count + 1;
    return M1.Core.PrimitiveSymbol.makeUninterned(s2423 + __count);
};
var eval_jit_enabled = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference_constant_p = function(x2424) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference_from_unsafe_p = function(x2425) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference__gt_module_source = function(x2426) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference__gt_resolved_module_path = function(x2427) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var module_name_fixup = function(x2428) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var inspector_p = function(p2429) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return true;
};
var make_thread_cell = function(p2430) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return p2430;
};
var __count = 1000;
var system_type2431 = function(mode382432) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (false !== false) {
        var if_res1316 = $rjs_core.PrimitiveSymbol.make("os");
    } else {
        var if_res1316 = mode382432;
    }
    var mode2433 = if_res1316;
    var tmp2434 = mode2433;
    if (equal_p(tmp2434, $rjs_core.PrimitiveSymbol.make("os")) !== false) {
        var if_res1320 = $rjs_core.PrimitiveSymbol.make("unix");
    } else {
        if (equal_p(tmp2434, $rjs_core.PrimitiveSymbol.make("vm")) !== false) {
            var if_res1319 = $rjs_core.PrimitiveSymbol.make("javascript");
        } else {
            if (equal_p(tmp2434, $rjs_core.PrimitiveSymbol.make("gc")) !== false) {
                var if_res1318 = $rjs_core.PrimitiveSymbol.make("javascript");
            } else {
                if (equal_p(tmp2434, $rjs_core.PrimitiveSymbol.make("fs-change")) !== false) {
                    var if_res1317 = M1.Core.Vector.make([false, false, false, false], false);
                } else {
                    var if_res1317 = false;
                }
                var if_res1318 = if_res1317;
            }
            var if_res1319 = if_res1318;
        }
        var if_res1320 = if_res1319;
    }
    return if_res1320;
};
var cl1321 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return system_type2431($rjs_core.PrimitiveSymbol.make("os"));
};
var cl1322 = function(mode382435) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return system_type2431(mode382435);
};
var system_type = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1323 = {
        '0': cl1321,
        '1': cl1322
    } [arguments.length];
    if (fixed_lam1323 !== undefined) {
        return fixed_lam1323.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var find_system_path = function(kind2436) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.UString.make("");
};
var build_path = function(base2437) {
    return base2437;
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
var environment_variables_ref = function(e2438, n2439) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var environment_variables_set_bang_2440 = function(e402441, n412442, v422443, fail392444) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var e2445 = e402441;
    var n2446 = n412442;
    var v2447 = v422443;
    if (false !== false) {
        var if_res1324 = false;
    } else {
        var if_res1324 = fail392444;
    }
    var fail2448 = if_res1324;
    return rvoid();
};
var cl1325 = function(e2449, n2450, v2451) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return environment_variables_set_bang_2440(e2449, n2450, v2451, false);
};
var cl1326 = function(e2452, n2453, v2454, fail392455) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return environment_variables_set_bang_2440(e2452, n2453, v2454, fail392455);
};
var environment_variables_set_bang_ = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1327 = {
        '3': cl1325,
        '4': cl1326
    } [arguments.length];
    if (fixed_lam1327 !== undefined) {
        return fixed_lam1327.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [3, 4]);
var prefab_struct_key = function(v2456) {
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
var dynamic_wind = function(f2457, g2458, h2459) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    f2457();
    g2458();
    return h2459();
};
var datum_intern_literal = function(v2460) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2460;
};
var make_semaphore = function(x2461) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return x2461;
};
var semaphore_peek_evt = function(x2462) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return x2462;
};
var call_with_semaphore = function(s2463, f2464) {
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