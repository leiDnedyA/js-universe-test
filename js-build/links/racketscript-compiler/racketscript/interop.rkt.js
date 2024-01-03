import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./private/interop.rkt.js";
import * as M1 from "../../../collects/racket/private/reverse.rkt.js";
import * as M2 from "../../../runtime/kernel.rkt.js";
var __eq__gt_$ = function(lam_expr1693) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.Marks.wrapWithContext(lam_expr1693);
};
var js_string = function(e1694) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return e1694.toString();
};
var js_string__gt_string = function(e1695) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.UString.makeImmutable(e1695);
};
var js_array__gt_list = function(e1696) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.Pair.listFromArray(e1696);
};
var assoc__gt_object = function(pairs1697) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var result1698 = {};
    var loop1699 = function(pairs1700) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M2.null_p(pairs1700) !== false) {
            var if_res895 = result1698;
        } else {
            var p1701 = M2.car(pairs1700);
            var k1703 = M2.car(p1701);
            var or_part1704 = typeof(k1703) === "string";
            if (or_part1704 !== false) {
                var if_res892 = or_part1704;
            } else {
                var if_res892 = M2.string_p(k1703);
            }
            if (if_res892 !== false) {
                var if_res894 = k1703;
            } else {
                if (M2.symbol_p(k1703) !== false) {
                    var if_res893 = M2.symbol__gt_string(k1703);
                } else {
                    var if_res893 = M2.error($rjs_core.PrimitiveSymbol.make("assoc->object"), $rjs_core.UString.make("invalid key value"));
                }
                var if_res894 = if_res893;
            }
            var key1702 = if_res894;
            result1698[key1702] = M2.car(M2.cdr(p1701));
            var if_res895 = loop1699(M2.cdr(pairs1700));
        }
        return if_res895;
    };
    return loop1699(pairs1697);
};
var js_array_p = function(v1705) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Array.isArray(v1705);
};
var in_js_array = function(arr1706) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_array(arr1706);
    var arr1707 = arr1706;
    if (js_array_p(arr1707) !== false) {
        var if_res896 = M2.rvoid();
    } else {
        var if_res896 = in_js_array(arr1707);
    }
    if_res896;
    var for_loop1708 = function(fold_var1709, i1710) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M2.__lt_(i1710, arr1707.length) !== false) {
            var v1711 = arr1707[i1710];
            if (true !== false) {
                var fold_var1713 = fold_var1709;
                var fold_var1714 = M2.cons(v1711, fold_var1713);
                var fold_var1712 = M2.values(fold_var1714);
                if (true !== false) {
                    var if_res897 = M2.not(false);
                } else {
                    var if_res897 = false;
                }
                if (if_res897 !== false) {
                    var if_res898 = for_loop1708(fold_var1712, i1710 + 1);
                } else {
                    var if_res898 = fold_var1712;
                }
                var if_res899 = if_res898;
            } else {
                var if_res899 = fold_var1709;
            }
            var if_res900 = if_res899;
        } else {
            var if_res900 = fold_var1709;
        }
        return if_res900;
    };
    return M1.alt_reverse(for_loop1708(M2.rnull, 0));
};
var check_array = function(v1715) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (js_array_p(v1715) !== false) {
        var if_res901 = M2.rvoid();
    } else {
        var if_res901 = M2.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-js-array"), $rjs_core.UString.make("js-array?"), v1715);
    }
    return if_res901;
};
var in_js_obect = function(obj1716) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_object(obj1716);
    var obj1717 = obj1716;
    var keys1718 = Object.keys(obj1716);
    if (js_object_p(obj1717) !== false) {
        var if_res902 = M2.rvoid();
    } else {
        var if_res902 = in_js_array(obj1717);
    }
    if_res902;
    var for_loop1719 = function(fold_var1720, i1721) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M2.__lt_(i1721, keys1718.length) !== false) {
            var k1722 = keys1718[i1721];
            var v1723 = obj1717[keys1718[i1721]];
            if (true !== false) {
                var fold_var1725 = fold_var1720;
                var fold_var1726 = M2.cons(M2.values(k1722, v1723), fold_var1725);
                var fold_var1724 = M2.values(fold_var1726);
                if (true !== false) {
                    var if_res903 = M2.not(false);
                } else {
                    var if_res903 = false;
                }
                if (if_res903 !== false) {
                    var if_res904 = for_loop1719(fold_var1724, i1721 + 1);
                } else {
                    var if_res904 = fold_var1724;
                }
                var if_res905 = if_res904;
            } else {
                var if_res905 = fold_var1720;
            }
            var if_res906 = if_res905;
        } else {
            var if_res906 = fold_var1720;
        }
        return if_res906;
    };
    return M1.alt_reverse(for_loop1719(M2.rnull, 0));
};
var js_object_p = function(v1727) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return ((typeof(v1727) === "object") && (v1727 !== null)) && M2.not($rjs_core.Primitive.check(v1727));
};
var check_object = function(v1728) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (js_object_p(v1728) !== false) {
        var if_res907 = M2.rvoid();
    } else {
        var if_res907 = M2.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-js-object"), $rjs_core.UString.make("js-object?"), v1728);
    }
    return if_res907;
};
var __rjs_quoted__ = {};
__rjs_quoted__.js_object_p = js_object_p;
__rjs_quoted__.js_array_p = js_array_p;
__rjs_quoted__.in_js_array = in_js_array;
__rjs_quoted__.js_string = js_string;
export {
    __rjs_quoted__,
    js_object_p,
    js_array_p,
    assoc__gt_object,
    js_array__gt_list,
    js_string__gt_string,
    js_string,
    __eq__gt_$
};