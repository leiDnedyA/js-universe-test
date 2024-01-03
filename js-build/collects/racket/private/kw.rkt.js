import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/unsafe.rkt.js";
var let_result614 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("keyword-impersonator"));
var prop_keyword_impersonator = let_result614.getAt(0);
var keyword_impersonator_p = let_result614.getAt(1);
var keyword_impersonator_ref = let_result614.getAt(2);
var keyword_procedure_impersonator_of = function(v1621) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_impersonator_p(v1621) !== false) {
        var if_res615 = keyword_impersonator_ref(v1621)(v1621);
    } else {
        var if_res615 = false;
    }
    return if_res615;
};
var let_result616 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("keyword-procedure"), false, 4, 0, false, M0.list(M0.cons(M0.prop_checked_procedure, true), M0.cons(M0.prop_impersonator_of, keyword_procedure_impersonator_of)), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2, 3));
var struct_keyword_procedure = let_result616.getAt(0);
var mk_kw_proc = let_result616.getAt(1);
var keyword_procedure_p = let_result616.getAt(2);
var keyword_procedure_ref = let_result616.getAt(3);
var keyword_procedure_set_bang_ = let_result616.getAt(4);
var keyword_procedure_checker = M0.make_struct_field_accessor(keyword_procedure_ref, 0);
var keyword_procedure_proc = M0.make_struct_field_accessor(keyword_procedure_ref, 1);
var keyword_procedure_required = M0.make_struct_field_accessor(keyword_procedure_ref, 2);
var keyword_procedure_allowed = M0.make_struct_field_accessor(keyword_procedure_ref, 3);
var let_result617 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 0, 0, false, M0.list(M0.cons(M0.prop_method_arity_error, true)));
var struct_keyword_method = let_result617.getAt(0);
var make_km = let_result617.getAt(1);
var keyword_method_p = let_result617.getAt(2);
var km_ref = let_result617.getAt(3);
var km_set_bang_ = let_result617.getAt(4);
var generate_arity_string = function(proc1622) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var let_result618 = procedure_keywords(proc1622);
    var req1623 = let_result618.getAt(0);
    var allowed1624 = let_result618.getAt(1);
    var a1625 = M0.procedure_arity(proc1622);
    var keywords_desc1626 = function(opt1628, req1629) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var temp624 = $rjs_core.UString.make("~a with keyword~a~a");
        if (M0.null_p(M0.cdr(req1629)) !== false) {
            var if_res623 = M0.format($rjs_core.UString.make("an ~aargument"), opt1628);
        } else {
            var if_res623 = M0.format($rjs_core.UString.make("~aarguments"), opt1628);
        }
        if (M0.null_p(M0.cdr(req1629)) !== false) {
            var if_res622 = $rjs_core.UString.make("");
        } else {
            var if_res622 = $rjs_core.UString.make("s");
        }
        var tmp1630 = M0.length(req1629);
        if (M0.equal_p(tmp1630, 1) !== false) {
            var if_res621 = M0.format($rjs_core.UString.make(" ~a"), M0.car(req1629));
        } else {
            if (M0.equal_p(tmp1630, 2) !== false) {
                var if_res620 = M0.format($rjs_core.UString.make(" ~a and ~a"), M0.car(req1629), M0.cadr(req1629));
            } else {
                var loop1631 = function(req1632) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.null_p(M0.cdr(req1632)) !== false) {
                        var if_res619 = M0.format($rjs_core.UString.make(" and ~a"), M0.car(req1632));
                    } else {
                        var if_res619 = M0.format($rjs_core.UString.make(" ~a,~a"), M0.car(req1632), loop1631(M0.cdr(req1632)));
                    }
                    return if_res619;
                };
                var if_res620 = loop1631(req1629);
            }
            var if_res621 = if_res620;
        }
        return M0.format(temp624, if_res623, if_res622, if_res621);
    };
    var method_adjust1627 = function(a1633) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var or_part1634 = okm_p(proc1622);
        if (or_part1634 !== false) {
            var if_res625 = or_part1634;
        } else {
            var if_res625 = keyword_method_p(proc1622);
        }
        if (if_res625 !== false) {
            if (M0.zero_p(a1633) !== false) {
                var if_res626 = 0;
            } else {
                var if_res626 = M0.sub1(a1633);
            }
            var if_res627 = if_res626;
        } else {
            var if_res627 = a1633;
        }
        return if_res627;
    };
    if (M0.number_p(a1625) !== false) {
        var a1635 = method_adjust1627(a1625);
        var if_res634 = M0.format($rjs_core.UString.make("~a"), a1635);
    } else {
        if (M0.arity_at_least_p(a1625) !== false) {
            var a1636 = method_adjust1627(M0.arity_at_least_value(a1625));
            var if_res633 = M0.format($rjs_core.UString.make("at least ~a"), a1636);
        } else {
            var if_res633 = $rjs_core.UString.make("a different number");
        }
        var if_res634 = if_res633;
    }
    if (M0.null_p(req1623) !== false) {
        var if_res632 = $rjs_core.UString.make("");
    } else {
        var if_res632 = M0.format($rjs_core.UString.make(" plus ~a"), keywords_desc1626($rjs_core.UString.make(""), req1623));
    }
    if (allowed1624 !== false) {
        var loop1638 = function(req1639, allowed1640) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.null_p(req1639) !== false) {
                var if_res629 = allowed1640;
            } else {
                if (M0.eq_p(M0.car(req1639), M0.car(allowed1640)) !== false) {
                    var if_res628 = loop1638(M0.cdr(req1639), M0.cdr(allowed1640));
                } else {
                    var if_res628 = M0.cons(M0.car(allowed1640), loop1638(req1639, M0.cdr(allowed1640)));
                }
                var if_res629 = if_res628;
            }
            return if_res629;
        };
        var others1637 = loop1638(req1623, allowed1624);
        if (M0.null_p(others1637) !== false) {
            var if_res630 = $rjs_core.UString.make("");
        } else {
            var if_res630 = M0.format($rjs_core.UString.make(" plus ~a"), keywords_desc1626($rjs_core.UString.make("optional "), others1637));
        }
        var if_res631 = if_res630;
    } else {
        var if_res631 = $rjs_core.UString.make(" plus arbitrary keyword arguments");
    }
    return M0.string_append(if_res634, if_res632, if_res631);
};
var let_result635 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 1, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string)), M0.current_inspector(), 0);
var struct_okp = let_result635.getAt(0);
var make_optional_keyword_procedure = let_result635.getAt(1);
var okp_p = let_result635.getAt(2);
var okp_ref = let_result635.getAt(3);
var okp_set_bang_ = let_result635.getAt(4);
var let_result636 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 0, 0, false, M0.list(M0.cons(M0.prop_method_arity_error, true)));
var struct_okm = let_result636.getAt(0);
var make_optional_keyword_method = let_result636.getAt(1);
var okm_p = let_result636.getAt(2);
var okm_ref = let_result636.getAt(3);
var okm_set_bang_ = let_result636.getAt(4);
var let_result637 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("named-keyword-procedure"));
var prop_named_keyword_procedure = let_result637.getAt(0);
var named_keyword_procedure_p = let_result637.getAt(1);
var keyword_procedure_name_plus_fail = let_result637.getAt(2);
var keyword_procedure_name_plus_fail_times_ = function(p1641) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var v1642 = keyword_procedure_name_plus_fail(p1641);
    if (M0.vector_p(v1642) !== false) {
        var if_res638 = v1642;
    } else {
        var if_res638 = v1642(p1641);
    }
    return if_res638;
};
var let_result640 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("procedure"), function(v1643, info_l1644) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.exact_integer_p(v1643) !== false) {
        var if_res639 = M0.make_struct_field_accessor(M0.list_ref(info_l1644, 3), v1643);
    } else {
        var if_res639 = false;
    }
    return if_res639;
});
var prop_procedure_accessor = let_result640.getAt(0);
var procedure_accessor_p = let_result640.getAt(1);
var procedure_accessor_ref = let_result640.getAt(2);
var let_result641 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("procedure"), false, M0.list(M0.cons(M0.prop_procedure, M0.values), M0.cons(prop_procedure_accessor, M0.values)), true);
var new_prop_procedure = let_result641.getAt(0);
var new_procedure_p = let_result641.getAt(1);
var new_procedure_ref = let_result641.getAt(2);
var let_result642 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v1645) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kpp_ref(v1645, 0);
})));
var struct_keyword_procedure_impersonator = let_result642.getAt(0);
var make_kpp = let_result642.getAt(1);
var keyword_procedure_impersonator_p = let_result642.getAt(2);
var kpp_ref = let_result642.getAt(3);
var kpp_set_bang_ = let_result642.getAt(4);
var let_result643 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v1646) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kmp_ref(v1646, 0);
})));
var struct_keyword_method_impersonator = let_result643.getAt(0);
var make_kmp = let_result643.getAt(1);
var keyword_method_impersonator_p = let_result643.getAt(2);
var kmp_ref = let_result643.getAt(3);
var kmp_set_bang_ = let_result643.getAt(4);
var let_result644 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v1647) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return okpp_ref(v1647, 0);
})));
var struct_okpp = let_result644.getAt(0);
var make_optional_keyword_procedure_impersonator = let_result644.getAt(1);
var okpp_p = let_result644.getAt(2);
var okpp_ref = let_result644.getAt(3);
var okpp_set_bang_ = let_result644.getAt(4);
var let_result645 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v1648) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return okmp_ref(v1648, 0);
})));
var struct_okmp = let_result645.getAt(0);
var make_optional_keyword_method_impersonator = let_result645.getAt(1);
var okmp_p = let_result645.getAt(2);
var okmp_ref = let_result645.getAt(3);
var okmp_set_bang_ = let_result645.getAt(4);
var let_result646 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_procedure_by_arity_error = let_result646.getAt(0);
var make_kp_by_ae = let_result646.getAt(1);
var kp_by_ae_p = let_result646.getAt(2);
var kp_by_ae_ref = let_result646.getAt(3);
var kp_by_ae_set_bang_ = let_result646.getAt(4);
var let_result647 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_method_by_arity_error = let_result647.getAt(0);
var make_km_by_ae = let_result647.getAt(1);
var km_by_ae_p = let_result647.getAt(2);
var km_by_ae_ref = let_result647.getAt(3);
var km_by_ae_set_bang_ = let_result647.getAt(4);
var let_result648 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_impersonator, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_procedure_impersonator_by_arity_error = let_result648.getAt(0);
var make_kpi_by_ae = let_result648.getAt(1);
var kpi_by_ae_p = let_result648.getAt(2);
var kpi_by_ae_ref = let_result648.getAt(3);
var kpi_by_ae_set_bang_ = let_result648.getAt(4);
var let_result649 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_impersonator, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_method_impersonator_by_arity_error = let_result649.getAt(0);
var make_kmi_by_ae = let_result649.getAt(1);
var kmi_by_ae_p = let_result649.getAt(2);
var kmi_by_ae_ref = let_result649.getAt(3);
var kmi_by_ae_set_bang_ = let_result649.getAt(4);
var let_result650 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r1649) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref(r1649, 1), rkp_by_ae_ref(r1649, 2), rkp_by_ae_ref(r1649, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae = let_result650.getAt(0);
var make_required_keyword_procedure_by_arity_error = let_result650.getAt(1);
var rkp_by_ae_p = let_result650.getAt(2);
var rkp_by_ae_ref = let_result650.getAt(3);
var rkp_by_ae_set_bang_ = let_result650.getAt(4);
var let_result651 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r1650) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref1611(r1650, 1), rkp_by_ae_ref1611(r1650, 2), rkp_by_ae_ref1611(r1650, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae1609 = let_result651.getAt(0);
var make_required_keyword_method_by_arity_error = let_result651.getAt(1);
var rkp_by_ae_p1610 = let_result651.getAt(2);
var rkp_by_ae_ref1611 = let_result651.getAt(3);
var rkp_by_ae_set_bang_1612 = let_result651.getAt(4);
var let_result652 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_impersonator_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r1651) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref1615(r1651, 1), rkp_by_ae_ref1615(r1651, 2), rkp_by_ae_ref1615(r1651, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae1613 = let_result652.getAt(0);
var make_required_keyword_procedure_impersonator_by_arity_error = let_result652.getAt(1);
var rkp_by_ae_p1614 = let_result652.getAt(2);
var rkp_by_ae_ref1615 = let_result652.getAt(3);
var rkp_by_ae_set_bang_1616 = let_result652.getAt(4);
var let_result653 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_impersonator_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r1652) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref1619(r1652, 1), rkp_by_ae_ref1619(r1652, 2), rkp_by_ae_ref1619(r1652, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae1617 = let_result653.getAt(0);
var make_required_keyword_method_impersonator_by_arity_error = let_result653.getAt(1);
var rkp_by_ae_p1618 = let_result653.getAt(2);
var rkp_by_ae_ref1619 = let_result653.getAt(3);
var rkp_by_ae_set_bang_1620 = let_result653.getAt(4);
var cl654 = function(proc1653) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var proc_name1654 = M0.object_name(proc1653);
    if (M0.procedure_p(proc1653) !== false) {
        var if_res657 = M0.__rjs_quoted__.procedure_realm(proc1653);
    } else {
        var if_res657 = false;
    }
    var proc_realm1655 = if_res657;
    var plain_proc1656 = $rjs_core.attachProcedureArity(function(...args1657658) {
        var args1657 = $rjs_core.Pair.listFromArray(args1657658);
        return M0.apply(proc1653, M0.rnull, M0.rnull, args1657);
    });
    if (M0.procedure_p(proc1653) !== false) {
        var if_res659 = M0.arithmetic_shift(M0.procedure_arity_mask(proc1653), -2);
    } else {
        var if_res659 = false;
    }
    var mask1658 = if_res659;
    if (M0.procedure_p(plain_proc1656) !== false) {
        if (M0.exact_integer_p(mask1658) !== false) {
            if (M0.symbol_p(proc_name1654) !== false) {
                if (M0.symbol_p(proc_realm1655) !== false) {
                    var if_res660 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc1656, mask1658, proc_name1654, proc_realm1655);
                } else {
                    var if_res660 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc1656, mask1658, false, $rjs_core.PrimitiveSymbol.make("ignored"));
                }
                var if_res661 = if_res660;
            } else {
                var if_res661 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc1656, mask1658, false, $rjs_core.PrimitiveSymbol.make("ignored"));
            }
            var if_res662 = if_res661;
        } else {
            var if_res662 = plain_proc1656;
        }
        var if_res663 = if_res662;
    } else {
        var if_res663 = plain_proc1656;
    }
    return make_keyword_procedure(proc1653, if_res663);
};
var cl655 = function(proc1659, plain_proc1660) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.procedure_p(proc1659) !== false) {
        var if_res664 = M0.procedure_arity_mask(proc1659);
    } else {
        var if_res664 = false;
    }
    return make_optional_keyword_procedure(make_keyword_checker(M0.rnull, false, if_res664), proc1659, M0.rnull, false, plain_proc1660);
};
var make_keyword_procedure = $rjs_core.attachProcedureArity(function() {
    var fixed_lam656 = {
        '1': cl654,
        '2': cl655
    } [arguments.length];
    if (fixed_lam656 !== undefined) {
        return fixed_lam656.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var keyword_apply = $rjs_core.attachProcedureArity(function(proc1661, kws1662, kw_vals1663, normal_args1664, ...normal_argss1665665) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var normal_argss1665 = $rjs_core.Pair.listFromArray(normal_argss1665665);
    var type_error1666 = function(what1667, which1668) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return M0.apply(M0.raise_argument_error, $rjs_core.PrimitiveSymbol.make("keyword-apply"), what1667, which1668, proc1661, kws1662, kw_vals1663, normal_args1664, normal_argss1665);
    };
    if (M0.procedure_p(proc1661) !== false) {
        var if_res666 = M0.rvoid();
    } else {
        var if_res666 = type_error1666($rjs_core.UString.make("procedure?"), 0);
    }
    if_res666;
    var loop1669 = function(ks1670) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(ks1670) !== false) {
            var if_res673 = M0.rvoid();
        } else {
            var or_part1671 = M0.not(M0.pair_p(ks1670));
            if (or_part1671 !== false) {
                var if_res667 = or_part1671;
            } else {
                var if_res667 = M0.not(M0.keyword_p(M0.car(ks1670)));
            }
            if (if_res667 !== false) {
                var if_res672 = type_error1666($rjs_core.UString.make("(listof keyword?)"), 1);
            } else {
                if (M0.null_p(M0.cdr(ks1670)) !== false) {
                    var if_res671 = M0.rvoid();
                } else {
                    var or_part1672 = M0.not(M0.pair_p(M0.cdr(ks1670)));
                    if (or_part1672 !== false) {
                        var if_res668 = or_part1672;
                    } else {
                        var if_res668 = M0.not(M0.keyword_p(M0.cadr(ks1670)));
                    }
                    if (if_res668 !== false) {
                        var if_res670 = loop1669(M0.cdr(ks1670));
                    } else {
                        if (M0.keyword_lt__p(M0.car(ks1670), M0.cadr(ks1670)) !== false) {
                            var if_res669 = loop1669(M0.cdr(ks1670));
                        } else {
                            var if_res669 = type_error1666($rjs_core.UString.make("(and/c (listof? keyword?) sorted? distinct?)"), 1);
                        }
                        var if_res670 = if_res669;
                    }
                    var if_res671 = if_res670;
                }
                var if_res672 = if_res671;
            }
            var if_res673 = if_res672;
        }
        return if_res673;
    };
    loop1669(kws1662);
    if (M0.list_p(kw_vals1663) !== false) {
        var if_res674 = M0.rvoid();
    } else {
        var if_res674 = type_error1666($rjs_core.UString.make("list?"), 2);
    }
    if_res674;
    if (M0.__eq_(M0.length(kws1662), M0.length(kw_vals1663)) !== false) {
        var if_res675 = M0.rvoid();
    } else {
        var if_res675 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword-apply"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("keyword list length does not match value list length"), $rjs_core.UString.make("keyword list length"), M0.length(kws1662), $rjs_core.UString.make("value list length"), M0.length(kw_vals1663), $rjs_core.UString.make("keyword list"), kws1662, $rjs_core.UString.make("value list"), kw_vals1663);
    }
    if_res675;
    var loop1674 = function(normal_argss1675, pos1676) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(M0.cdr(normal_argss1675)) !== false) {
            var l1677 = M0.car(normal_argss1675);
            if (M0.list_p(l1677) !== false) {
                var if_res676 = l1677;
            } else {
                var if_res676 = type_error1666($rjs_core.UString.make("list?"), pos1676);
            }
            var if_res677 = if_res676;
        } else {
            var if_res677 = M0.cons(M0.car(normal_argss1675), loop1674(M0.cdr(normal_argss1675), M0.add1(pos1676)));
        }
        return if_res677;
    };
    var normal_args1673 = loop1674(M0.cons(normal_args1664, normal_argss1665), 3);
    if (M0.null_p(kws1662) !== false) {
        var if_res678 = M0.apply(proc1661, normal_args1673);
    } else {
        var if_res678 = M0.apply(keyword_procedure_extract_by_method(kws1662, 2 + M0.length(normal_args1673), proc1661, 0), kws1662, kw_vals1663, normal_args1673);
    }
    return if_res678;
});
var procedure_keywords = function(p1678) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(p1678) !== false) {
        var if_res683 = M0.values(keyword_procedure_required(p1678), keyword_procedure_allowed(p1678));
    } else {
        if (M0.procedure_p(p1678) !== false) {
            if (new_procedure_p(p1678) !== false) {
                var v1679 = new_procedure_ref(p1678);
                if (M0.procedure_p(v1679) !== false) {
                    var if_res680 = procedure_keywords(v1679);
                } else {
                    var a1680 = procedure_accessor_ref(p1678);
                    if (a1680 !== false) {
                        var if_res679 = procedure_keywords(a1680(p1678));
                    } else {
                        var if_res679 = M0.values(M0.rnull, M0.rnull);
                    }
                    var if_res680 = if_res679;
                }
                var if_res681 = if_res680;
            } else {
                var if_res681 = M0.values(M0.rnull, M0.rnull);
            }
            var if_res682 = if_res681;
        } else {
            var if_res682 = M0.__rjs_quoted__.raise_argument_error_times_($rjs_core.PrimitiveSymbol.make("procedure-keywords"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure?"), p1678);
        }
        var if_res683 = if_res682;
    }
    return if_res683;
};
var extract_keyword_root = function(p1681) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(p1681) !== false) {
        var if_res687 = p1681;
    } else {
        if (M0.procedure_p(p1681) !== false) {
            var v1682 = new_procedure_ref(p1681, false);
            if (M0.procedure_p(v1682) !== false) {
                var if_res685 = extract_keyword_root(v1682);
            } else {
                var a1683 = procedure_accessor_ref(p1681, false);
                if (a1683 !== false) {
                    var if_res684 = extract_keyword_root(a1683(p1681));
                } else {
                    var if_res684 = false;
                }
                var if_res685 = if_res684;
            }
            var if_res686 = if_res685;
        } else {
            var if_res686 = false;
        }
        var if_res687 = if_res686;
    }
    return if_res687;
};
var missing_kw = $rjs_core.attachProcedureArity(function(proc1684, ...args1685688) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args1685 = $rjs_core.Pair.listFromArray(args1685688);
    return M0.apply(keyword_procedure_extract_by_method(M0.rnull, 0, proc1684, 0), M0.rnull, M0.rnull, args1685);
});
var raise_missing_kw = function(name1686, req_kws1687, args1688) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return raise_wrong_kws(name1686, true, true, false, M0.rnull, M0.rnull, req_kws1687, M0.rnull, args1688);
};
var check_kw_args = function(p1689, kws1690) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1691 = function(kws1692, required1693, allowed1694) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(kws1692) !== false) {
            if (M0.null_p(required1693) !== false) {
                var if_res689 = M0.values(false, false);
            } else {
                var if_res689 = M0.values(M0.car(required1693), false);
            }
            var if_res698 = if_res689;
        } else {
            if (M0.pair_p(required1693) !== false) {
                var if_res690 = M0.eq_p(M0.car(required1693), M0.car(kws1692));
            } else {
                var if_res690 = false;
            }
            if (if_res690 !== false) {
                var temp693 = M0.cdr(kws1692);
                var temp692 = M0.cdr(required1693);
                if (allowed1694 !== false) {
                    var if_res691 = M0.cdr(allowed1694);
                } else {
                    var if_res691 = false;
                }
                var if_res697 = loop1691(temp693, temp692, if_res691);
            } else {
                if (M0.not(allowed1694) !== false) {
                    var if_res696 = loop1691(M0.cdr(kws1692), required1693, false);
                } else {
                    if (M0.pair_p(allowed1694) !== false) {
                        if (M0.eq_p(M0.car(allowed1694), M0.car(kws1692)) !== false) {
                            var if_res694 = loop1691(M0.cdr(kws1692), required1693, M0.cdr(allowed1694));
                        } else {
                            var if_res694 = loop1691(kws1692, required1693, M0.cdr(allowed1694));
                        }
                        var if_res695 = if_res694;
                    } else {
                        var if_res695 = M0.values(false, M0.car(kws1692));
                    }
                    var if_res696 = if_res695;
                }
                var if_res697 = if_res696;
            }
            var if_res698 = if_res697;
        }
        return if_res698;
    };
    return loop1691(kws1690, keyword_procedure_required(p1689), keyword_procedure_allowed(p1689));
};
var make_keyword_checker = function(req_kws1695, allowed_kws1696, arity_mask1697) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.not(allowed_kws1696) !== false) {
        if (M0.null_p(req_kws1695) !== false) {
            var if_res701 = function(kws1698, a1699) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (true !== false) {
                    var if_res699 = M0.bitwise_bit_set_p(arity_mask1697, a1699);
                } else {
                    var if_res699 = false;
                }
                return if_res699;
            };
        } else {
            var if_res701 = function(kws1700, a1701) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (subset_p(req_kws1695, kws1700) !== false) {
                    var if_res700 = M0.bitwise_bit_set_p(arity_mask1697, a1701);
                } else {
                    var if_res700 = false;
                }
                return if_res700;
            };
        }
        var if_res714 = if_res701;
    } else {
        if (M0.null_p(allowed_kws1696) !== false) {
            var if_res713 = function(kws1702, a1703) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M0.null_p(kws1702) !== false) {
                    var if_res702 = M0.bitwise_bit_set_p(arity_mask1697, a1703);
                } else {
                    var if_res702 = false;
                }
                return if_res702;
            };
        } else {
            if (M0.null_p(req_kws1695) !== false) {
                var if_res712 = function(kws1704, a1705) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (subset_p(kws1704, allowed_kws1696) !== false) {
                        var if_res703 = M0.bitwise_bit_set_p(arity_mask1697, a1705);
                    } else {
                        var if_res703 = false;
                    }
                    return if_res703;
                };
            } else {
                if (M0.list_p(req_kws1695) !== false) {
                    if (M0.list_p(allowed_kws1696) !== false) {
                        var if_res704 = M0.eq_p(M0.length(req_kws1695), M0.length(allowed_kws1696));
                    } else {
                        var if_res704 = false;
                    }
                    var if_res705 = if_res704;
                } else {
                    var if_res705 = false;
                }
                if (if_res705 !== false) {
                    var if_res711 = function(kws1706, a1707) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var loop1708 = function(kws1709, req_kws1710) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            if (M0.null_p(req_kws1710) !== false) {
                                var if_res708 = M0.null_p(kws1709);
                            } else {
                                if (M0.null_p(kws1709) !== false) {
                                    var if_res707 = false;
                                } else {
                                    if (M0.eq_p(M0.car(kws1709), M0.car(req_kws1710)) !== false) {
                                        var if_res706 = loop1708(M0.cdr(kws1709), M0.cdr(req_kws1710));
                                    } else {
                                        var if_res706 = false;
                                    }
                                    var if_res707 = if_res706;
                                }
                                var if_res708 = if_res707;
                            }
                            return if_res708;
                        };
                        if (loop1708(kws1706, req_kws1695) !== false) {
                            var if_res709 = M0.bitwise_bit_set_p(arity_mask1697, a1707);
                        } else {
                            var if_res709 = false;
                        }
                        return if_res709;
                    };
                } else {
                    var if_res711 = function(kws1711, a1712) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (subsets_p(req_kws1695, kws1711, allowed_kws1696) !== false) {
                            var if_res710 = M0.bitwise_bit_set_p(arity_mask1697, a1712);
                        } else {
                            var if_res710 = false;
                        }
                        return if_res710;
                    };
                }
                var if_res712 = if_res711;
            }
            var if_res713 = if_res712;
        }
        var if_res714 = if_res713;
    }
    return if_res714;
};
var subset_p = function(l11713, l21714) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.null_p(l11713) !== false) {
        var if_res717 = true;
    } else {
        if (M0.null_p(l21714) !== false) {
            var if_res716 = false;
        } else {
            if (M0.eq_p(M0.car(l11713), M0.car(l21714)) !== false) {
                var if_res715 = subset_p(M0.cdr(l11713), M0.cdr(l21714));
            } else {
                var if_res715 = subset_p(l11713, M0.cdr(l21714));
            }
            var if_res716 = if_res715;
        }
        var if_res717 = if_res716;
    }
    return if_res717;
};
var subsets_p = function(l11715, l21716, l31717) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.null_p(l11715) !== false) {
        var if_res722 = subset_p(l21716, l31717);
    } else {
        if (M0.null_p(l21716) !== false) {
            var if_res721 = false;
        } else {
            if (M0.null_p(l31717) !== false) {
                var if_res720 = false;
            } else {
                var v21718 = M0.car(l21716);
                if (M0.eq_p(M0.car(l11715), v21718) !== false) {
                    var if_res719 = subsets_p(M0.cdr(l11715), M0.cdr(l21716), M0.cdr(l31717));
                } else {
                    if (M0.eq_p(v21718, M0.car(l31717)) !== false) {
                        var if_res718 = subsets_p(l11715, M0.cdr(l21716), M0.cdr(l31717));
                    } else {
                        var if_res718 = subsets_p(l11715, l21716, M0.cdr(l31717));
                    }
                    var if_res719 = if_res718;
                }
                var if_res720 = if_res719;
            }
            var if_res721 = if_res720;
        }
        var if_res722 = if_res721;
    }
    return if_res722;
};
var keyword_procedure_extract_by_method = function(kws1719, n1720, p1721, method_n1722) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(p1721) !== false) {
        var if_res723 = keyword_procedure_checker(p1721)(kws1719, n1720);
    } else {
        var if_res723 = false;
    }
    if (if_res723 !== false) {
        var if_res746 = keyword_procedure_proc(p1721);
    } else {
        if (M0.not(keyword_procedure_p(p1721)) !== false) {
            if (M0.procedure_p(p1721) !== false) {
                if (new_procedure_p(p1721) !== false) {
                    var a1725 = procedure_accessor_ref(p1721);
                    if (a1725 !== false) {
                        var if_res724 = a1725(p1721);
                    } else {
                        var if_res724 = false;
                    }
                    var if_res725 = if_res724;
                } else {
                    var if_res725 = false;
                }
                var or_part1724 = if_res725;
                if (or_part1724 !== false) {
                    var if_res728 = or_part1724;
                } else {
                    var or_part1726 = M0.procedure_extract_target(p1721);
                    if (or_part1726 !== false) {
                        var if_res727 = or_part1726;
                    } else {
                        if (new_procedure_p(p1721) !== false) {
                            var if_res726 = $rjs_core.PrimitiveSymbol.make("method");
                        } else {
                            var if_res726 = false;
                        }
                        var if_res727 = if_res726;
                    }
                    var if_res728 = if_res727;
                }
                var if_res729 = if_res728;
            } else {
                var if_res729 = false;
            }
            var if_res730 = if_res729;
        } else {
            var if_res730 = false;
        }
        var p21723 = if_res730;
        if (p21723 !== false) {
            if (M0.eq_p(p21723, $rjs_core.PrimitiveSymbol.make("method")) !== false) {
                var p31727 = keyword_procedure_extract_by_method(kws1719, M0.add1(n1720), new_procedure_ref(p1721), M0.add1(method_n1722));
                var if_res732 = $rjs_core.attachProcedureArity(function(kws1728, kw_args1729, ...args1730731) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var args1730 = $rjs_core.Pair.listFromArray(args1730731);
                    return M0.apply(p31727, kws1728, kw_args1729, M0.cons(p1721, args1730));
                });
            } else {
                var if_res732 = keyword_procedure_extract_by_method(kws1719, n1720, p21723, method_n1722);
            }
            var if_res745 = if_res732;
        } else {
            var if_res745 = $rjs_core.attachProcedureArity(function(kws1731, kw_args1732, ...args1733733) {
                if (arguments.length < 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var args1733 = $rjs_core.Pair.listFromArray(args1733733);
                if (keyword_procedure_p(p1721) !== false) {
                    var if_res734 = check_kw_args(p1721, kws1731);
                } else {
                    var if_res734 = M0.values(false, M0.car(kws1731));
                }
                var let_result735 = if_res734;
                var missing_kw1734 = let_result735.getAt(0);
                var extra_kw1735 = let_result735.getAt(1);
                var or_part1739 = keyword_method_p(p1721);
                if (or_part1739 !== false) {
                    var if_res736 = or_part1739;
                } else {
                    var if_res736 = okm_p(p1721);
                }
                if (if_res736 !== false) {
                    var if_res737 = 1;
                } else {
                    var if_res737 = 0;
                }
                var method_n1738 = method_n1722 + if_res737;
                if (M0.__gt__eq_(n1720, method_n1738) !== false) {
                    var if_res738 = n1720 - method_n1738;
                } else {
                    var if_res738 = n1720;
                }
                var n1736 = if_res738;
                var or_part1740 = keyword_procedure_p(p1721);
                if (or_part1740 !== false) {
                    var if_res740 = or_part1740;
                } else {
                    var or_part1741 = M0.procedure_p(p1721);
                    if (or_part1741 !== false) {
                        var if_res739 = or_part1741;
                    } else {
                        var if_res739 = M0.not(extra_kw1735);
                    }
                    var if_res740 = if_res739;
                }
                if (if_res740 !== false) {
                    if (named_keyword_procedure_p(p1721) !== false) {
                        var if_res741 = M0.vector_ref(keyword_procedure_name_plus_fail_times_(p1721), 0);
                    } else {
                        var if_res741 = false;
                    }
                    var or_part1742 = if_res741;
                    if (or_part1742 !== false) {
                        var if_res743 = or_part1742;
                    } else {
                        var or_part1743 = M0.object_name(p1721);
                        if (or_part1743 !== false) {
                            var if_res742 = or_part1743;
                        } else {
                            var if_res742 = p1721;
                        }
                        var if_res743 = if_res742;
                    }
                    var if_res744 = if_res743;
                } else {
                    var if_res744 = p1721;
                }
                var name_by_val1737 = if_res744;
                return raise_wrong_kws(name_by_val1737, keyword_procedure_p(p1721), M0.procedure_p(p1721), n1736, kws1731, kw_args1732, missing_kw1734, extra_kw1735, args1733);
            });
        }
        var if_res746 = if_res745;
    }
    return if_res746;
};
var raise_wrong_kws = function(name_by_val1744, kw_proc_p1745, proc_p1746, n1747, kws1748, kw_args1749, missing_kw1750, extra_kw1751, args1752) {
    if (arguments.length !== 9) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.null_p(args1752) !== false) {
        var if_res747 = M0.null_p(kws1748);
    } else {
        var if_res747 = false;
    }
    if (if_res747 !== false) {
        var if_res748 = $rjs_core.UString.make("");
    } else {
        var if_res748 = M0.apply(M0.string_append, $rjs_core.UString.make("\n  arguments...:"), M0.append(M0.map(function(v1754) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M0.format($rjs_core.UString.make("\n   ~e"), v1754);
        }, args1752), M0.map(function(kw1755, kw_arg1756) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M0.format($rjs_core.UString.make("\n   ~a ~e"), kw1755, kw_arg1756);
        }, kws1748, kw_args1749)));
    }
    var args_str1753 = if_res748;
    var application_message1757 = function(str1758) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return M0.__rjs_quoted__.error_message__gt_adjusted_string($rjs_core.PrimitiveSymbol.make("application"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), str1758, $rjs_core.PrimitiveSymbol.make("racket/primitive"));
    };
    var or_part1759 = extra_kw1751;
    if (or_part1759 !== false) {
        var if_res755 = or_part1759;
    } else {
        var if_res755 = missing_kw1750;
    }
    if (if_res755 !== false) {
        var if_res756 = M0.__rjs_quoted__.exn_fail_contract;
    } else {
        var if_res756 = M0.__rjs_quoted__.exn_fail_contract_arity;
    }
    if (extra_kw1751 !== false) {
        if (kw_proc_p1745 !== false) {
            var if_res750 = application_message1757(M0.format(M0.string_append($rjs_core.UString.make("procedure does not expect an argument with given keyword\n"), $rjs_core.UString.make("  procedure: ~a\n"), $rjs_core.UString.make("  given keyword: ~a"), $rjs_core.UString.make("~a")), name_by_val1744, extra_kw1751, args_str1753));
        } else {
            if (proc_p1746 !== false) {
                var if_res749 = application_message1757(M0.format(M0.string_append($rjs_core.UString.make("procedure does not accept keyword arguments\n"), $rjs_core.UString.make("  procedure: ~a"), $rjs_core.UString.make("~a")), name_by_val1744, args_str1753));
            } else {
                var if_res749 = application_message1757(M0.format(M0.string_append($rjs_core.UString.make("not a procedure;\n"), $rjs_core.UString.make(" expected a procedure that can be applied to arguments\n"), $rjs_core.UString.make("  given: ~e"), $rjs_core.UString.make("~a")), name_by_val1744, args_str1753));
            }
            var if_res750 = if_res749;
        }
        var if_res754 = if_res750;
    } else {
        if (missing_kw1750 !== false) {
            var if_res753 = application_message1757(M0.format(M0.string_append($rjs_core.UString.make("required keyword argument not supplied\n"), $rjs_core.UString.make("  procedure: ~a\n"), $rjs_core.UString.make("  required keyword: ~a"), $rjs_core.UString.make("~a")), name_by_val1744, missing_kw1750, args_str1753));
        } else {
            var temp752 = M0.string_append($rjs_core.UString.make("no case matching ~a non-keyword argument~a\n"), $rjs_core.UString.make("  procedure: ~a"), $rjs_core.UString.make("~a"));
            if (M0.__eq_(1, n1747 - 2) !== false) {
                var if_res751 = $rjs_core.UString.make("");
            } else {
                var if_res751 = $rjs_core.UString.make("s");
            }
            var if_res753 = application_message1757(M0.format(temp752, n1747 - 2, if_res751, name_by_val1744, args_str1753));
        }
        var if_res754 = if_res753;
    }
    return M0.raise(if_res756(if_res754, M0.current_continuation_marks()));
};
var keyword_procedure_extract = function(p1760, kws1761, n1762) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return keyword_procedure_extract_by_method(kws1761, n1762, p1760, 0);
};
var cl757 = function(proc1763, arity1764, req_kw1765, allowed_kw1766, name1767, realm1768) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc1763, arity1764, false, name1767, realm1768, req_kw1765, allowed_kw1766);
};
var cl758 = function(proc1769, arity1770, req_kw1771, allowed_kw1772, name1773) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc1769, arity1770, false, name1773, $rjs_core.PrimitiveSymbol.make("racket"), req_kw1771, allowed_kw1772);
};
var cl759 = function(proc1774, arity1775, req_kw1776, allowed_kw1777) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc1774, arity1775, false, false, $rjs_core.PrimitiveSymbol.make("racket"), req_kw1776, allowed_kw1777);
};
var procedure_reduce_keyword_arity = $rjs_core.attachProcedureArity(function() {
    var fixed_lam760 = {
        '6': cl757,
        '5': cl758,
        '4': cl759
    } [arguments.length];
    if (fixed_lam760 !== undefined) {
        return fixed_lam760.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 5, 6]);
var cl761 = function(proc1778, mask1779, req_kw1780, allowed_kw1781, name1782, realm1783) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc1778, false, mask1779, name1782, realm1783, req_kw1780, allowed_kw1781);
};
var cl762 = function(proc1784, mask1785, req_kw1786, allowed_kw1787, name1788) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc1784, false, mask1785, name1788, $rjs_core.PrimitiveSymbol.make("racket"), req_kw1786, allowed_kw1787);
};
var cl763 = function(proc1789, mask1790, req_kw1791, allowed_kw1792) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc1789, false, mask1790, false, $rjs_core.PrimitiveSymbol.make("racket"), req_kw1791, allowed_kw1792);
};
var procedure_reduce_keyword_arity_mask = $rjs_core.attachProcedureArity(function() {
    var fixed_lam764 = {
        '6': cl761,
        '5': cl762,
        '4': cl763
    } [arguments.length];
    if (fixed_lam764 !== undefined) {
        return fixed_lam764.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 5, 6]);
var do_procedure_reduce_keyword_arity = function(who1793, proc1794, arity1795, mask1796, name1797, realm1798, req_kw1799, allowed_kw1800) {
    if (arguments.length !== 8) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var or_part1802 = M0.null_p(allowed_kw1800);
    if (or_part1802 !== false) {
        var if_res765 = or_part1802;
    } else {
        var if_res765 = M0.null_p(req_kw1799);
    }
    if (if_res765 !== false) {
        if (okp_p(proc1794) !== false) {
            var if_res766 = okp_ref(proc1794, 0);
        } else {
            var if_res766 = proc1794;
        }
        var p1803 = if_res766;
        if (arity1795 !== false) {
            var if_res767 = M0.__rjs_quoted__.procedure_reduce_arity(p1803, arity1795, name1797, realm1798);
        } else {
            var if_res767 = M0.__rjs_quoted__.procedure_reduce_arity_mask(p1803, mask1796, name1797, realm1798);
        }
        var if_res768 = if_res767;
    } else {
        var if_res768 = false;
    }
    var plain_proc1801 = if_res768;
    var sorted_kws_p1804 = function(kws1805) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var loop1806 = function(kws1807) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.null_p(kws1807) !== false) {
                var if_res773 = true;
            } else {
                if (M0.not(M0.pair_p(kws1807)) !== false) {
                    var if_res772 = false;
                } else {
                    if (M0.not(M0.keyword_p(M0.car(kws1807))) !== false) {
                        var if_res771 = false;
                    } else {
                        if (M0.null_p(M0.cdr(kws1807)) !== false) {
                            var if_res770 = true;
                        } else {
                            if (M0.keyword_lt__p(M0.car(kws1807), M0.cadr(kws1807)) !== false) {
                                var if_res769 = loop1806(M0.cdr(kws1807));
                            } else {
                                var if_res769 = false;
                            }
                            var if_res770 = if_res769;
                        }
                        var if_res771 = if_res770;
                    }
                    var if_res772 = if_res771;
                }
                var if_res773 = if_res772;
            }
            return if_res773;
        };
        return loop1806(kws1805);
    };
    if (sorted_kws_p1804(req_kw1799) !== false) {
        var if_res777 = M0.rvoid();
    } else {
        var temp776 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
        var temp775 = $rjs_core.UString.make("(and/c (listof? keyword?) sorted? distinct?)");
        var or_part1808 = arity1795;
        if (or_part1808 !== false) {
            var if_res774 = or_part1808;
        } else {
            var if_res774 = mask1796;
        }
        var if_res777 = M0.__rjs_quoted__.raise_argument_error_times_(who1793, temp776, temp775, 2, proc1794, if_res774, req_kw1799, allowed_kw1800);
    }
    if_res777;
    if (allowed_kw1800 !== false) {
        if (sorted_kws_p1804(allowed_kw1800) !== false) {
            var if_res781 = M0.rvoid();
        } else {
            var temp780 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
            var temp779 = $rjs_core.UString.make("(or/c (and/c (listof? keyword?) sorted? distinct?) #f)");
            var or_part1809 = arity1795;
            if (or_part1809 !== false) {
                var if_res778 = or_part1809;
            } else {
                var if_res778 = mask1796;
            }
            var if_res781 = M0.__rjs_quoted__.raise_argument_error_times_(who1793, temp780, temp779, 3, proc1794, if_res778, req_kw1799, allowed_kw1800);
        }
        if_res781;
        if (subset_p(req_kw1799, allowed_kw1800) !== false) {
            var if_res782 = M0.rvoid();
        } else {
            var if_res782 = M0.__rjs_quoted__.raise_arguments_error_times_(who1793, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("allowed-keyword list does not include all required keywords"), $rjs_core.UString.make("allowed-keyword list"), allowed_kw1800, $rjs_core.UString.make("required keywords"), req_kw1799);
        }
        var if_res783 = if_res782;
    } else {
        var if_res783 = M0.rvoid();
    }
    if_res783;
    var let_result784 = procedure_keywords(proc1794);
    var old_req1810 = let_result784.getAt(0);
    var old_allowed1811 = let_result784.getAt(1);
    if (subset_p(old_req1810, req_kw1799) !== false) {
        var if_res785 = M0.rvoid();
    } else {
        var if_res785 = M0.__rjs_quoted__.raise_arguments_error_times_(who1793, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot reduce required keyword set"), $rjs_core.UString.make("required keywords"), old_req1810, $rjs_core.UString.make("requested required keywords"), req_kw1799);
    }
    if_res785;
    if (old_allowed1811 !== false) {
        if (subset_p(req_kw1799, old_allowed1811) !== false) {
            var if_res786 = M0.rvoid();
        } else {
            var if_res786 = M0.__rjs_quoted__.raise_arguments_error_times_(who1793, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot require keywords not in original allowed set"), $rjs_core.UString.make("original allowed keywords"), old_allowed1811, $rjs_core.UString.make("requested required keywords"), req_kw1799);
        }
        if_res786;
        var or_part1812 = M0.not(allowed_kw1800);
        if (or_part1812 !== false) {
            var if_res787 = or_part1812;
        } else {
            var if_res787 = subset_p(allowed_kw1800, old_allowed1811);
        }
        if (if_res787 !== false) {
            var if_res788 = M0.rvoid();
        } else {
            var if_res788 = M0.__rjs_quoted__.raise_arguments_error_times_(who1793, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot allow keywords not in original allowed set"), $rjs_core.UString.make("original allowed keywords"), old_allowed1811, $rjs_core.UString.make("requested allowed keywords"), allowed_kw1800);
        }
        var if_res789 = if_res788;
    } else {
        var if_res789 = M0.rvoid();
    }
    if_res789;
    if (M0.null_p(allowed_kw1800) !== false) {
        var if_res803 = plain_proc1801;
    } else {
        var or_part1814 = mask1796;
        if (or_part1814 !== false) {
            var if_res790 = or_part1814;
        } else {
            var if_res790 = arity__gt_mask(arity1795);
        }
        var mask1813 = if_res790;
        var new_mask1815 = M0.arithmetic_shift(mask1813, 2);
        var kw_checker1816 = make_keyword_checker(req_kw1799, allowed_kw1800, new_mask1815);
        var proc1817 = normalize_proc(proc1794);
        var new_kw_proc1818 = M0.__rjs_quoted__.procedure_reduce_arity_mask(keyword_procedure_proc(proc1817), new_mask1815);
        if (M0.null_p(req_kw1799) !== false) {
            if (okm_p(proc1817) !== false) {
                var if_res791 = make_optional_keyword_method;
            } else {
                var if_res791 = make_optional_keyword_procedure;
            }
            var if_res802 = if_res791(kw_checker1816, new_kw_proc1818, req_kw1799, allowed_kw1800, plain_proc1801);
        } else {
            var or_part1821 = name1797;
            if (or_part1821 !== false) {
                var if_res794 = or_part1821;
            } else {
                if (named_keyword_procedure_p(proc1817) !== false) {
                    var if_res792 = M0.vector_ref(keyword_procedure_name_plus_fail_times_(proc1817), 0);
                } else {
                    var if_res792 = false;
                }
                var or_part1822 = if_res792;
                if (or_part1822 !== false) {
                    var if_res793 = or_part1822;
                } else {
                    var if_res793 = M0.object_name(proc1817);
                }
                var if_res794 = if_res793;
            }
            var name1819 = if_res794;
            if (name1797 !== false) {
                var if_res795 = realm1798;
            } else {
                var if_res795 = false;
            }
            var or_part1823 = if_res795;
            if (or_part1823 !== false) {
                var if_res798 = or_part1823;
            } else {
                if (named_keyword_procedure_p(proc1817) !== false) {
                    var if_res796 = M0.vector_ref(keyword_procedure_name_plus_fail_times_(proc1817), 1);
                } else {
                    var if_res796 = false;
                }
                var or_part1824 = if_res796;
                if (or_part1824 !== false) {
                    var if_res797 = or_part1824;
                } else {
                    var if_res797 = M0.__rjs_quoted__.procedure_realm(proc1817);
                }
                var if_res798 = if_res797;
            }
            var realm1820 = if_res798;
            var or_part1825 = okm_p(proc1817);
            if (or_part1825 !== false) {
                var if_res800 = or_part1825;
            } else {
                var if_res800 = keyword_method_p(proc1817);
            }
            if (if_res800 !== false) {
                var if_res801 = make_required_keyword_method_by_arity_error;
            } else {
                var if_res801 = make_required_keyword_procedure_by_arity_error;
            }
            var if_res802 = if_res801(kw_checker1816, new_kw_proc1818, req_kw1799, allowed_kw1800, M0.__rjs_quoted__.procedure_reduce_arity_mask($rjs_core.attachProcedureArity(function(...args1826799) {
                var args1826 = $rjs_core.Pair.listFromArray(args1826799);
                return raise_missing_kw(name1819, req_kw1799);
            }), mask1813), name1819, realm1820);
        }
        var if_res803 = if_res802;
    }
    return if_res803;
};
var arity__gt_mask = function(a1827) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.exact_nonnegative_integer_p(a1827) !== false) {
        var if_res809 = M0.arithmetic_shift(1, a1827);
    } else {
        if (M0.arity_at_least_p(a1827) !== false) {
            var if_res808 = M0.bitwise_xor(-1, M0.sub1(M0.arithmetic_shift(1, M0.arity_at_least_value(a1827))));
        } else {
            if (M0.list_p(a1827) !== false) {
                var loop1828 = function(mask1829, l1830) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.null_p(l1830) !== false) {
                        var if_res806 = mask1829;
                    } else {
                        var a1831 = M0.car(l1830);
                        var or_part1832 = M0.exact_nonnegative_integer_p(a1831);
                        if (or_part1832 !== false) {
                            var if_res804 = or_part1832;
                        } else {
                            var if_res804 = M0.arity_at_least_p(a1831);
                        }
                        if (if_res804 !== false) {
                            var if_res805 = loop1828(M0.bitwise_ior(mask1829, arity__gt_mask(a1831)), M0.cdr(l1830));
                        } else {
                            var if_res805 = false;
                        }
                        var if_res806 = if_res805;
                    }
                    return if_res806;
                };
                var if_res807 = loop1828(0, a1827);
            } else {
                var if_res807 = false;
            }
            var if_res808 = if_res807;
        }
        var if_res809 = if_res808;
    }
    return if_res809;
};
var cl810 = function(proc1834, arity1835, name1836, realm1837) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.procedure_p(proc1834) !== false) {
        var let_result814 = procedure_keywords(proc1834);
        var req1838 = let_result814.getAt(0);
        var allows1839 = let_result814.getAt(1);
        if (M0.pair_p(req1838) !== false) {
            var if_res815 = M0.not(M0.null_p(arity1835));
        } else {
            var if_res815 = false;
        }
        var if_res816 = if_res815;
    } else {
        var if_res816 = false;
    }
    if (if_res816 !== false) {
        var if_res818 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("procedure-reduce-arity"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure has required keyword arguments"), $rjs_core.UString.make("procedure"), proc1834);
    } else {
        if (okm_p(proc1834) !== false) {
            var if_res817 = M0.__rjs_quoted__.procedure__gt_method(proc1834);
        } else {
            var if_res817 = proc1834;
        }
        var if_res818 = M0.__rjs_quoted__.procedure_reduce_arity(if_res817, arity1835, name1836, realm1837);
    }
    return if_res818;
};
var cl811 = function(proc1840, arity1841, name1842) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity(proc1840, arity1841, name1842, $rjs_core.PrimitiveSymbol.make("racket"));
};
var cl812 = function(proc1843, arity1844) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity(proc1843, arity1844, false, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_reduce_arity1833 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam813 = {
        '4': cl810,
        '3': cl811,
        '2': cl812
    } [arguments.length];
    if (fixed_lam813 !== undefined) {
        return fixed_lam813.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var new_procedure_reduce_arity = procedure_reduce_arity1833;
var cl819 = function(proc1846, mask1847, name1848, realm1849) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.procedure_p(proc1846) !== false) {
        var let_result823 = procedure_keywords(proc1846);
        var req1850 = let_result823.getAt(0);
        var allows1851 = let_result823.getAt(1);
        if (M0.pair_p(req1850) !== false) {
            var if_res824 = M0.not(M0.eqv_p(mask1847, 0));
        } else {
            var if_res824 = false;
        }
        var if_res825 = if_res824;
    } else {
        var if_res825 = false;
    }
    if (if_res825 !== false) {
        var if_res827 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("procedure-reduce-arity"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure has required keyword arguments"), $rjs_core.UString.make("procedure"), proc1846);
    } else {
        if (okm_p(proc1846) !== false) {
            var if_res826 = M0.__rjs_quoted__.procedure__gt_method(proc1846);
        } else {
            var if_res826 = proc1846;
        }
        var if_res827 = M0.__rjs_quoted__.procedure_reduce_arity_mask(if_res826, mask1847, name1848, realm1849);
    }
    return if_res827;
};
var cl820 = function(proc1852, mask1853, name1854) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity_mask(proc1852, mask1853, name1854, $rjs_core.PrimitiveSymbol.make("racket"));
};
var cl821 = function(proc1855, mask1856) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity_mask(proc1855, mask1856, false, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_reduce_arity1845 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam822 = {
        '4': cl819,
        '3': cl820,
        '2': cl821
    } [arguments.length];
    if (fixed_lam822 !== undefined) {
        return fixed_lam822.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var new_procedure_reduce_arity_mask = procedure_reduce_arity1845;
var procedure__gt_method1857 = function(proc1858) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var proc1859 = normalize_proc(proc1858);
    if (keyword_procedure_p(proc1859) !== false) {
        if (okm_p(proc1859) !== false) {
            var if_res836 = proc1859;
        } else {
            if (keyword_method_p(proc1859) !== false) {
                var if_res835 = proc1859;
            } else {
                if (okp_p(proc1859) !== false) {
                    var if_res834 = make_optional_keyword_method(keyword_procedure_checker(proc1859), keyword_procedure_proc(proc1859), keyword_procedure_required(proc1859), keyword_procedure_allowed(proc1859), okp_ref(proc1859, 0));
                } else {
                    var raw_name_plus_fail1860 = keyword_procedure_name_plus_fail(proc1859);
                    if (M0.vector_p(raw_name_plus_fail1860) !== false) {
                        var if_res828 = raw_name_plus_fail1860;
                    } else {
                        var if_res828 = raw_name_plus_fail1860(proc1859);
                    }
                    var name_plus_fail1861 = if_res828;
                    var name1862 = M0.vector_ref(name_plus_fail1861, 0);
                    var req_kw1863 = keyword_procedure_required(proc1859);
                    var temp833 = keyword_procedure_checker(proc1859);
                    var temp832 = keyword_procedure_proc(proc1859);
                    var temp831 = keyword_procedure_allowed(proc1859);
                    if (M0.vector_p(raw_name_plus_fail1860) !== false) {
                        var if_res830 = M0.__rjs_quoted__.procedure_reduce_arity_mask($rjs_core.attachProcedureArity(function(...args1864829) {
                            var args1864 = $rjs_core.Pair.listFromArray(args1864829);
                            return raise_missing_kw(name1862, req_kw1863);
                        }), M0.arithmetic_shift(M0.procedure_arity_mask(M0.vector_ref(name_plus_fail1861, 2)), -1));
                    } else {
                        var if_res830 = M0.vector_ref(name_plus_fail1861, 2);
                    }
                    var if_res834 = make_required_keyword_method_by_arity_error(temp833, temp832, req_kw1863, temp831, if_res830, name1862, M0.vector_ref(name_plus_fail1861, 1));
                }
                var if_res835 = if_res834;
            }
            var if_res836 = if_res835;
        }
        var if_res837 = if_res836;
    } else {
        var if_res837 = M0.__rjs_quoted__.procedure__gt_method(proc1859);
    }
    return if_res837;
};
var new_procedure__gt_method = procedure__gt_method1857;
var cl838 = function(proc1866, name1867, realm1868) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.symbol_p(name1867) !== false) {
        var if_res841 = M0.symbol_p(realm1868);
    } else {
        var if_res841 = false;
    }
    if (M0.not(if_res841) !== false) {
        var if_res843 = M0.__rjs_quoted__.procedure_rename(proc1866, name1867, realm1868);
    } else {
        var c11869 = extract_keyword_root(proc1866);
        if (c11869 !== false) {
            var if_res842 = (function(kw_p1870) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-rename"), proc1866, false, M0.procedure_arity_mask(proc1866), name1867, realm1868, keyword_procedure_required(kw_p1870), keyword_procedure_allowed(kw_p1870));
            })(c11869);
        } else {
            var if_res842 = M0.__rjs_quoted__.procedure_rename(proc1866, name1867, realm1868);
        }
        var if_res843 = if_res842;
    }
    return if_res843;
};
var cl839 = function(proc1871, name1872) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_rename(proc1871, name1872, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_rename1865 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam840 = {
        '3': cl838,
        '2': cl839
    } [arguments.length];
    if (fixed_lam840 !== undefined) {
        return fixed_lam840.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var new_procedure_rename = procedure_rename1865;
var procedure_realm1873 = function(proc1874) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(proc1874) !== false) {
        if (named_keyword_procedure_p(proc1874) !== false) {
            var name_plus_fail1875 = keyword_procedure_name_plus_fail_times_(proc1874);
            var or_part1876 = M0.vector_ref(name_plus_fail1875, 1);
            if (or_part1876 !== false) {
                var if_res844 = or_part1876;
            } else {
                var if_res844 = M0.__rjs_quoted__.procedure_realm(M0.vector_ref(name_plus_fail1875, 2));
            }
            var if_res846 = if_res844;
        } else {
            if (okp_p(proc1874) !== false) {
                var if_res845 = M0.__rjs_quoted__.procedure_realm(okp_ref(proc1874, 0));
            } else {
                var if_res845 = M0.__rjs_quoted__.procedure_realm(keyword_procedure_proc(proc1874));
            }
            var if_res846 = if_res845;
        }
        var if_res847 = if_res846;
    } else {
        var if_res847 = M0.__rjs_quoted__.procedure_realm(proc1874);
    }
    return if_res847;
};
var new_procedure_realm = procedure_realm1873;
var chaperone_procedure1877 = $rjs_core.attachProcedureArity(function(proc1878, wrap_proc1879, ...props1880848) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props1880 = $rjs_core.Pair.listFromArray(props1880848);
    return do_chaperone_procedure(false, false, M0.__rjs_quoted__.chaperone_procedure, $rjs_core.PrimitiveSymbol.make("chaperone-procedure"), proc1878, wrap_proc1879, props1880);
});
var new_chaperone_procedure = chaperone_procedure1877;
var unsafe_chaperone_procedure1881 = $rjs_core.attachProcedureArity(function(proc1882, wrap_proc1883, ...props1884849) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props1884 = $rjs_core.Pair.listFromArray(props1884849);
    return do_unsafe_chaperone_procedure(M1.__rjs_quoted__.unsafe_chaperone_procedure, $rjs_core.PrimitiveSymbol.make("unsafe-chaperone-procedure"), proc1882, wrap_proc1883, props1884);
});
var new_unsafe_chaperone_procedure = unsafe_chaperone_procedure1881;
var impersonate_procedure1885 = $rjs_core.attachProcedureArity(function(proc1886, wrap_proc1887, ...props1888850) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props1888 = $rjs_core.Pair.listFromArray(props1888850);
    return do_chaperone_procedure(true, false, M0.__rjs_quoted__.impersonate_procedure, $rjs_core.PrimitiveSymbol.make("impersonate-procedure"), proc1886, wrap_proc1887, props1888);
});
var new_impersonate_procedure = impersonate_procedure1885;
var unsafe_impersonate_procedure1889 = $rjs_core.attachProcedureArity(function(proc1890, wrap_proc1891, ...props1892851) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props1892 = $rjs_core.Pair.listFromArray(props1892851);
    return do_unsafe_chaperone_procedure(M1.__rjs_quoted__.unsafe_impersonate_procedure, $rjs_core.PrimitiveSymbol.make("unsafe-impersonate-procedure"), proc1890, wrap_proc1891, props1892);
});
var new_unsafe_impersonate_procedure = unsafe_impersonate_procedure1889;
var chaperone_procedure_times_1893 = $rjs_core.attachProcedureArity(function(proc1894, wrap_proc1895, ...props1896852) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props1896 = $rjs_core.Pair.listFromArray(props1896852);
    return do_chaperone_procedure(false, true, M0.__rjs_quoted__.chaperone_procedure_times_, $rjs_core.PrimitiveSymbol.make("chaperone-procedure"), proc1894, wrap_proc1895, props1896);
});
var new_chaperone_procedure_times_ = chaperone_procedure_times_1893;
var impersonate_procedure_times_1897 = $rjs_core.attachProcedureArity(function(proc1898, wrap_proc1899, ...props1900853) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props1900 = $rjs_core.Pair.listFromArray(props1900853);
    return do_chaperone_procedure(true, true, M0.__rjs_quoted__.impersonate_procedure_times_, $rjs_core.PrimitiveSymbol.make("impersonate-procedure"), proc1898, wrap_proc1899, props1900);
});
var new_impersonate_procedure_times_ = impersonate_procedure_times_1897;
var do_chaperone_procedure = function(is_impersonator_p1901, self_arg_p1902, chaperone_procedure1903, name1904, proc1905, wrap_proc1906, props1907) {
    if (arguments.length !== 7) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_proc1908 = normalize_proc(proc1905);
    var n_wrap_proc1909 = normalize_proc(wrap_proc1906);
    var or_part1910 = M0.not(keyword_procedure_p(n_proc1908));
    if (or_part1910 !== false) {
        var if_res855 = or_part1910;
    } else {
        var or_part1911 = M0.not(M0.procedure_p(wrap_proc1906));
        if (or_part1911 !== false) {
            var if_res854 = or_part1911;
        } else {
            var if_res854 = bad_props_p(props1907);
        }
        var if_res855 = if_res854;
    }
    if (if_res855 !== false) {
        var if_res944 = M0.apply(chaperone_procedure1903, proc1905, wrap_proc1906, props1907);
    } else {
        chaperone_arity_match_checking(self_arg_p1902, name1904, proc1905, wrap_proc1906, props1907);
        var loop1913 = function(props1914) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.null_p(props1914) !== false) {
                var if_res857 = false;
            } else {
                if (M0.eq_p(M0.car(props1914), M0.__rjs_quoted__.impersonator_prop_application_mark) !== false) {
                    var if_res856 = M0.cadr(props1914);
                } else {
                    var if_res856 = loop1913(M0.cddr(props1914));
                }
                var if_res857 = if_res856;
            }
            return if_res857;
        };
        var mark_prop1912 = loop1913(props1907);
        var chaperone_procedure_by_add_mark1915 = function(proc1916, wrap_proc1917) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (mark_prop1912 !== false) {
                var if_res858 = chaperone_procedure1903(proc1916, wrap_proc1917, M0.__rjs_quoted__.impersonator_prop_application_mark, mark_prop1912);
            } else {
                var if_res858 = chaperone_procedure1903(proc1916, wrap_proc1917);
            }
            return if_res858;
        };
        var p1919 = keyword_procedure_proc(n_wrap_proc1909);
        if (self_arg_p1902 !== false) {
            var cl859 = $rjs_core.attachProcedureArity(function(self_proc1920, kws1921, args1922, ...rest1923864) {
                if (arguments.length < 3) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var rest1923 = $rjs_core.Pair.listFromArray(rest1923864);
                return M0.call_with_values(function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M0.apply(p1919, kws1921, args1922, self_proc1920, rest1923);
                }, $rjs_core.attachProcedureArity(function(...results1924865) {
                    var results1924 = $rjs_core.Pair.listFromArray(results1924865);
                    var len1925 = M0.length(results1924);
                    var alen1926 = M0.length(rest1923);
                    if (M0.__lt_(len1925, alen1926 + 1) !== false) {
                        var if_res866 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrong number of results from wrapper procedure"), $rjs_core.UString.make("expected minimum number of results"), alen1926 + 1, $rjs_core.UString.make("received number of results"), len1925, $rjs_core.UString.make("wrapper procedure"), wrap_proc1906);
                    } else {
                        var if_res866 = M0.rvoid();
                    }
                    if_res866;
                    var num_extra1927 = len1925 - (alen1926 + 1);
                    var new_args1928 = M0.list_ref(results1924, num_extra1927);
                    if (M0.list_p(new_args1928) !== false) {
                        var if_res867 = M0.__eq_(M0.length(new_args1928), M0.length(args1922));
                    } else {
                        var if_res867 = false;
                    }
                    if (if_res867 !== false) {
                        var if_res872 = M0.rvoid();
                    } else {
                        var temp871 = $rjs_core.PrimitiveSymbol.make("keyword procedure chaperone");
                        var temp870 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
                        var temp869 = $rjs_core.UString.make("expected a list of keyword-argument values as first result~a from wrapper procedure");
                        if (M0.__eq_(len1925, alen1926) !== false) {
                            var if_res868 = $rjs_core.UString.make("");
                        } else {
                            var if_res868 = $rjs_core.UString.make(" (after the result-wrapper procedure or mark specifications)");
                        }
                        var if_res872 = M0.__rjs_quoted__.raise_arguments_error_times_(temp871, temp870, M0.format(temp869, if_res868), $rjs_core.UString.make("first result"), new_args1928, $rjs_core.UString.make("wrapper procedure"), wrap_proc1906);
                    }
                    if_res872;
                    M0.for_each(function(kw1929, new_arg1930, arg1931) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (is_impersonator_p1901 !== false) {
                            var if_res874 = M0.rvoid();
                        } else {
                            if (M0.__rjs_quoted__.chaperone_of_p(new_arg1930, arg1931) !== false) {
                                var if_res873 = M0.rvoid();
                            } else {
                                var if_res873 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), M0.format($rjs_core.UString.make("~a keyword result is not a chaperone of original argument from chaperoning procedure"), kw1929), $rjs_core.UString.make("result"), new_arg1930, $rjs_core.UString.make("wrapper procedure"), wrap_proc1906);
                            }
                            var if_res874 = if_res873;
                        }
                        return if_res874;
                    }, kws1921, new_args1928, args1922);
                    var tmp1932 = num_extra1927;
                    if (M0.equal_p(tmp1932, 0) !== false) {
                        var if_res877 = M0.apply(M0.values, kws1921, results1924);
                    } else {
                        if (M0.equal_p(tmp1932, 1) !== false) {
                            var if_res876 = M0.apply(M0.values, M0.car(results1924), kws1921, M0.cdr(results1924));
                        } else {
                            var loop1933 = function(results1934, c1935) {
                                if (arguments.length !== 2) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                if (M0.zero_p(c1935) !== false) {
                                    var if_res875 = M0.cons(kws1921, results1934);
                                } else {
                                    var if_res875 = M0.cons(M0.car(results1934), loop1933(M0.cdr(results1934), M0.sub1(c1935)));
                                }
                                return if_res875;
                            };
                            var if_res876 = M0.apply(M0.values, loop1933(results1924, num_extra1927));
                        }
                        var if_res877 = if_res876;
                    }
                    return if_res877;
                }));
            });
            var cl860 = $rjs_core.attachProcedureArity(function(...other1936878) {
                var other1936 = $rjs_core.Pair.listFromArray(other1936878);
                return M0.error($rjs_core.UString.make("shouldn't get here"));
            });
            var if_res899 = $rjs_core.attachProcedureArity(function() {
                var fixed_lam861 = {} [arguments.length];
                if (fixed_lam861 !== undefined) {
                    return fixed_lam861.apply(null, arguments);
                } else {
                    if (M0.__gt__eq_(cl859.length, 1) !== false) {
                        var if_res863 = cl859.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            var if_res862 = cl860.apply(null, arguments);
                        } else {
                            var if_res862 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                        var if_res863 = if_res862;
                    }
                    return if_res863;
                }
            }, [M0.make_arity_at_least(0)]);
        } else {
            var cl879 = $rjs_core.attachProcedureArity(function(kws1937, args1938, ...rest1939884) {
                if (arguments.length < 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var rest1939 = $rjs_core.Pair.listFromArray(rest1939884);
                return M0.call_with_values(function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M0.apply(p1919, kws1937, args1938, rest1939);
                }, $rjs_core.attachProcedureArity(function(...results1940885) {
                    var results1940 = $rjs_core.Pair.listFromArray(results1940885);
                    var len1941 = M0.length(results1940);
                    var alen1942 = M0.length(rest1939);
                    if (M0.__lt_(len1941, alen1942 + 1) !== false) {
                        var if_res886 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrong number of results from wrapper procedure"), $rjs_core.UString.make("expected minimum number of results"), alen1942 + 1, $rjs_core.UString.make("received number of results"), len1941, $rjs_core.UString.make("wrapper procedure"), wrap_proc1906);
                    } else {
                        var if_res886 = M0.rvoid();
                    }
                    if_res886;
                    var num_extra1943 = len1941 - (alen1942 + 1);
                    var new_args1944 = M0.list_ref(results1940, num_extra1943);
                    if (M0.list_p(new_args1944) !== false) {
                        var if_res887 = M0.__eq_(M0.length(new_args1944), M0.length(args1938));
                    } else {
                        var if_res887 = false;
                    }
                    if (if_res887 !== false) {
                        var if_res892 = M0.rvoid();
                    } else {
                        var temp891 = $rjs_core.PrimitiveSymbol.make("keyword procedure chaperone");
                        var temp890 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
                        var temp889 = $rjs_core.UString.make("expected a list of keyword-argument values as first result~a from wrapper procedure");
                        if (M0.__eq_(len1941, alen1942) !== false) {
                            var if_res888 = $rjs_core.UString.make("");
                        } else {
                            var if_res888 = $rjs_core.UString.make(" (after the result-wrapper procedure or mark specifications)");
                        }
                        var if_res892 = M0.__rjs_quoted__.raise_arguments_error_times_(temp891, temp890, M0.format(temp889, if_res888), $rjs_core.UString.make("first result"), new_args1944, $rjs_core.UString.make("wrapper procedure"), wrap_proc1906);
                    }
                    if_res892;
                    M0.for_each(function(kw1945, new_arg1946, arg1947) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (is_impersonator_p1901 !== false) {
                            var if_res894 = M0.rvoid();
                        } else {
                            if (M0.__rjs_quoted__.chaperone_of_p(new_arg1946, arg1947) !== false) {
                                var if_res893 = M0.rvoid();
                            } else {
                                var if_res893 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), M0.format($rjs_core.UString.make("~a keyword result is not a chaperone of original argument from chaperoning procedure"), kw1945), $rjs_core.UString.make("result"), new_arg1946, $rjs_core.UString.make("wrapper procedure"), wrap_proc1906);
                            }
                            var if_res894 = if_res893;
                        }
                        return if_res894;
                    }, kws1937, new_args1944, args1938);
                    var tmp1948 = num_extra1943;
                    if (M0.equal_p(tmp1948, 0) !== false) {
                        var if_res897 = M0.apply(M0.values, kws1937, results1940);
                    } else {
                        if (M0.equal_p(tmp1948, 1) !== false) {
                            var if_res896 = M0.apply(M0.values, M0.car(results1940), kws1937, M0.cdr(results1940));
                        } else {
                            var loop1949 = function(results1950, c1951) {
                                if (arguments.length !== 2) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                if (M0.zero_p(c1951) !== false) {
                                    var if_res895 = M0.cons(kws1937, results1950);
                                } else {
                                    var if_res895 = M0.cons(M0.car(results1950), loop1949(M0.cdr(results1950), M0.sub1(c1951)));
                                }
                                return if_res895;
                            };
                            var if_res896 = M0.apply(M0.values, loop1949(results1940, num_extra1943));
                        }
                        var if_res897 = if_res896;
                    }
                    return if_res897;
                }));
            });
            var cl880 = $rjs_core.attachProcedureArity(function(...other1952898) {
                var other1952 = $rjs_core.Pair.listFromArray(other1952898);
                return M0.error($rjs_core.UString.make("shouldn't get here"));
            });
            var if_res899 = $rjs_core.attachProcedureArity(function() {
                var fixed_lam881 = {} [arguments.length];
                if (fixed_lam881 !== undefined) {
                    return fixed_lam881.apply(null, arguments);
                } else {
                    if (M0.__gt__eq_(cl879.length, 1) !== false) {
                        var if_res883 = cl879.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            var if_res882 = cl880.apply(null, arguments);
                        } else {
                            var if_res882 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                        var if_res883 = if_res882;
                    }
                    return if_res883;
                }
            }, [M0.make_arity_at_least(0)]);
        }
        var kw_chaperone1918 = if_res899;
        var wrap1955 = function(proc1956, n_proc1957) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.not(M0.eq_p(n_proc1957, proc1956)) !== false) {
                var if_res900 = new_procedure_p(proc1956);
            } else {
                var if_res900 = false;
            }
            if (if_res900 !== false) {
                var v1958 = new_procedure_ref(proc1956);
                if (M0.exact_integer_p(v1958) !== false) {
                    var acc1959 = procedure_accessor_ref(proc1956);
                    var if_res928 = M0.values(M0.__rjs_quoted__.chaperone_struct(proc1956, acc1959, function(self1960, sub_proc1961) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var let_result901 = wrap1955(sub_proc1961, normalize_proc(sub_proc1961));
                        var f1962 = let_result901.getAt(0);
                        var acc1963 = let_result901.getAt(1);
                        return f1962;
                    }), acc1959);
                } else {
                    if (is_impersonator_p1901 !== false) {
                        var if_res927 = M0.__rjs_quoted__.impersonate_struct;
                    } else {
                        var if_res927 = M0.__rjs_quoted__.chaperone_struct;
                    }
                    if (okp_p(n_proc1957) !== false) {
                        var if_res926 = chaperone_procedure_by_add_mark1915(proc1956, wrap_proc1906);
                    } else {
                        var if_res926 = proc1956;
                    }
                    var new_kw_proc1964 = if_res927(if_res926, new_procedure_ref, function(self1965, proc1966) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (is_impersonator_p1901 !== false) {
                            var if_res925 = new_impersonate_procedure;
                        } else {
                            var if_res925 = new_chaperone_procedure;
                        }
                        if (self_arg_p1902 !== false) {
                            var cl902 = $rjs_core.attachProcedureArity(function(proc_self1967, kws1968, kw_args1969, self1970, ...args1971907) {
                                if (arguments.length < 4) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var args1971 = $rjs_core.Pair.listFromArray(args1971907);
                                var len1972 = M0.length(args1971);
                                return M0.call_with_values(function() {
                                    if (arguments.length !== 0) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    return M0.apply(kw_chaperone1918, proc_self1967, kws1968, kw_args1969, args1971);
                                }, $rjs_core.attachProcedureArity(function(...results1973908) {
                                    var results1973 = $rjs_core.Pair.listFromArray(results1973908);
                                    var r_len1974 = M0.length(results1973);
                                    var list_take1975 = function(l1976, n1977) {
                                        if (arguments.length !== 2) {
                                            throw $rjs_core.racketContractError("arity mismatch");
                                        } else {}
                                        if (M0.zero_p(n1977) !== false) {
                                            var if_res909 = M0.rnull;
                                        } else {
                                            var if_res909 = M0.cons(M0.car(l1976), list_take1975(M0.cdr(l1976), M0.sub1(n1977)));
                                        }
                                        return if_res909;
                                    };
                                    if (M0.null_p($rjs_core.Pair.makeList($rjs_core.PrimitiveSymbol.make("proc-self"))) !== false) {
                                        var if_res910 = M0.__eq_(r_len1974, 2 + len1972);
                                    } else {
                                        var if_res910 = false;
                                    }
                                    if (if_res910 !== false) {
                                        var if_res911 = M0.apply(M0.values, M0.cadr(results1973), self1970, M0.cddr(results1973));
                                    } else {
                                        var skip1978 = r_len1974 - len1972;
                                        var if_res911 = M0.apply(M0.values, M0.append(list_take1975(results1973, skip1978 - 2), M0.list(M0.list_ref(results1973, M0.sub1(skip1978)), self1970), M0.__rjs_quoted__.list_tail(results1973, skip1978)));
                                    }
                                    return if_res911;
                                }));
                            });
                            var cl903 = $rjs_core.attachProcedureArity(function(...args1979912) {
                                var args1979 = $rjs_core.Pair.listFromArray(args1979912);
                                return M0.rvoid();
                            });
                            var if_res924 = $rjs_core.attachProcedureArity(function() {
                                var fixed_lam904 = {} [arguments.length];
                                if (fixed_lam904 !== undefined) {
                                    return fixed_lam904.apply(null, arguments);
                                } else {
                                    if (M0.__gt__eq_(cl902.length, 1) !== false) {
                                        var if_res906 = cl902.apply(null, arguments);
                                    } else {
                                        if (true !== false) {
                                            var if_res905 = cl903.apply(null, arguments);
                                        } else {
                                            var if_res905 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                                        }
                                        var if_res906 = if_res905;
                                    }
                                    return if_res906;
                                }
                            }, [M0.make_arity_at_least(0)]);
                        } else {
                            var cl913 = $rjs_core.attachProcedureArity(function(kws1980, kw_args1981, self1982, ...args1983918) {
                                if (arguments.length < 3) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var args1983 = $rjs_core.Pair.listFromArray(args1983918);
                                var len1984 = M0.length(args1983);
                                return M0.call_with_values(function() {
                                    if (arguments.length !== 0) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    return M0.apply(kw_chaperone1918, kws1980, kw_args1981, args1983);
                                }, $rjs_core.attachProcedureArity(function(...results1985919) {
                                    var results1985 = $rjs_core.Pair.listFromArray(results1985919);
                                    var r_len1986 = M0.length(results1985);
                                    var list_take1987 = function(l1988, n1989) {
                                        if (arguments.length !== 2) {
                                            throw $rjs_core.racketContractError("arity mismatch");
                                        } else {}
                                        if (M0.zero_p(n1989) !== false) {
                                            var if_res920 = M0.rnull;
                                        } else {
                                            var if_res920 = M0.cons(M0.car(l1988), list_take1987(M0.cdr(l1988), M0.sub1(n1989)));
                                        }
                                        return if_res920;
                                    };
                                    if (M0.null_p($rjs_core.Pair.EMPTY) !== false) {
                                        var if_res921 = M0.__eq_(r_len1986, 2 + len1984);
                                    } else {
                                        var if_res921 = false;
                                    }
                                    if (if_res921 !== false) {
                                        var if_res922 = M0.apply(M0.values, M0.cadr(results1985), self1982, M0.cddr(results1985));
                                    } else {
                                        var skip1990 = r_len1986 - len1984;
                                        var if_res922 = M0.apply(M0.values, M0.append(list_take1987(results1985, skip1990 - 2), M0.list(M0.list_ref(results1985, M0.sub1(skip1990)), self1982), M0.__rjs_quoted__.list_tail(results1985, skip1990)));
                                    }
                                    return if_res922;
                                }));
                            });
                            var cl914 = $rjs_core.attachProcedureArity(function(...args1991923) {
                                var args1991 = $rjs_core.Pair.listFromArray(args1991923);
                                return M0.rvoid();
                            });
                            var if_res924 = $rjs_core.attachProcedureArity(function() {
                                var fixed_lam915 = {} [arguments.length];
                                if (fixed_lam915 !== undefined) {
                                    return fixed_lam915.apply(null, arguments);
                                } else {
                                    if (M0.__gt__eq_(cl913.length, 1) !== false) {
                                        var if_res917 = cl913.apply(null, arguments);
                                    } else {
                                        if (true !== false) {
                                            var if_res916 = cl914.apply(null, arguments);
                                        } else {
                                            var if_res916 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                                        }
                                        var if_res917 = if_res916;
                                    }
                                    return if_res917;
                                }
                            }, [M0.make_arity_at_least(0)]);
                        }
                        return if_res925(proc1966, make_keyword_procedure(if_res924));
                    });
                    var if_res928 = M0.values(new_kw_proc1964, new_procedure_ref);
                }
                var if_res941 = if_res928;
            } else {
                if (okp_p(n_proc1957) !== false) {
                    if (is_impersonator_p1901 !== false) {
                        if (okm_p(n_proc1957) !== false) {
                            var if_res929 = make_optional_keyword_method_impersonator;
                        } else {
                            var if_res929 = make_optional_keyword_procedure_impersonator;
                        }
                        var if_res930 = if_res929(keyword_procedure_checker(n_proc1957), chaperone_procedure_by_add_mark1915(keyword_procedure_proc(n_proc1957), kw_chaperone1918), keyword_procedure_required(n_proc1957), keyword_procedure_allowed(n_proc1957), chaperone_procedure_by_add_mark1915(okp_ref(n_proc1957, 0), okp_ref(n_wrap_proc1909, 0)), n_proc1957);
                    } else {
                        var if_res930 = M0.__rjs_quoted__.chaperone_struct(proc1956, keyword_procedure_proc, function(self1992, proc1993) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return chaperone_procedure_by_add_mark1915(proc1993, kw_chaperone1918);
                        }, M0.make_struct_field_accessor(okp_ref, 0), function(self1994, proc1995) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return chaperone_procedure_by_add_mark1915(proc1995, okp_ref(n_wrap_proc1909, 0));
                        });
                    }
                    var if_res940 = M0.values(if_res930, keyword_procedure_proc);
                } else {
                    if (is_impersonator_p1901 !== false) {
                        var raw_name_plus_fail1996 = keyword_procedure_name_plus_fail(proc1956);
                        if (M0.vector_p(raw_name_plus_fail1996) !== false) {
                            var if_res931 = raw_name_plus_fail1996;
                        } else {
                            var if_res931 = raw_name_plus_fail1996(proc1956);
                        }
                        var name_plus_fail1997 = if_res931;
                        var name1998 = M0.vector_ref(name_plus_fail1997, 0);
                        var req_kw1999 = keyword_procedure_required(proc1956);
                        if (keyword_method_p(n_proc1957) !== false) {
                            var if_res938 = make_required_keyword_method_impersonator_by_arity_error;
                        } else {
                            var if_res938 = make_required_keyword_procedure_impersonator_by_arity_error;
                        }
                        var temp937 = keyword_procedure_checker(n_proc1957);
                        var temp936 = chaperone_procedure_by_add_mark1915(keyword_procedure_proc(n_proc1957), kw_chaperone1918);
                        var temp935 = keyword_procedure_required(n_proc1957);
                        var temp934 = keyword_procedure_allowed(n_proc1957);
                        if (M0.vector_p(raw_name_plus_fail1996) !== false) {
                            var if_res933 = M0.__rjs_quoted__.procedure_reduce_arity_mask($rjs_core.attachProcedureArity(function(...args2000932) {
                                var args2000 = $rjs_core.Pair.listFromArray(args2000932);
                                return raise_missing_kw(name1998, req_kw1999);
                            }), M0.arithmetic_shift(M0.procedure_arity_mask(M0.vector_ref(name_plus_fail1997, 2)), -1));
                        } else {
                            var if_res933 = M0.vector_ref(name_plus_fail1997, 2);
                        }
                        var if_res939 = if_res938(temp937, temp936, temp935, temp934, n_proc1957, if_res933, M0.vector_ref(name_plus_fail1997, 0), M0.vector_ref(name_plus_fail1997, 1));
                    } else {
                        var if_res939 = M0.__rjs_quoted__.chaperone_struct(n_proc1957, keyword_procedure_proc, function(self2001, proc2002) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return chaperone_procedure_by_add_mark1915(proc2002, kw_chaperone1918);
                        });
                    }
                    var if_res940 = M0.values(if_res939, keyword_procedure_proc);
                }
                var if_res941 = if_res940;
            }
            return if_res941;
        };
        var let_result942 = wrap1955(proc1905, n_proc1908);
        var new_proc1953 = let_result942.getAt(0);
        var chap_accessor1954 = let_result942.getAt(1);
        if (M0.null_p(props1907) !== false) {
            var if_res943 = new_proc1953;
        } else {
            var if_res943 = M0.apply(M0.__rjs_quoted__.chaperone_struct, new_proc1953, chap_accessor1954, false, props1907);
        }
        var if_res944 = if_res943;
    }
    return if_res944;
};
var do_unsafe_chaperone_procedure = function(unsafe_chaperone_procedure2003, name2004, proc2005, wrap_proc2006, props2007) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_proc2008 = normalize_proc(proc2005);
    var n_wrap_proc2009 = normalize_proc(wrap_proc2006);
    var or_part2010 = M0.not(keyword_procedure_p(n_proc2008));
    if (or_part2010 !== false) {
        var if_res946 = or_part2010;
    } else {
        var or_part2011 = M0.not(M0.procedure_p(wrap_proc2006));
        if (or_part2011 !== false) {
            var if_res945 = or_part2011;
        } else {
            var if_res945 = bad_props_p(props2007);
        }
        var if_res946 = if_res945;
    }
    if (if_res946 !== false) {
        var if_res947 = M0.apply(unsafe_chaperone_procedure2003, proc2005, wrap_proc2006, props2007);
    } else {
        chaperone_arity_match_checking(false, name2004, proc2005, wrap_proc2006, props2007);
        var if_res947 = M0.apply(unsafe_chaperone_procedure2003, proc2005, wrap_proc2006, props2007);
    }
    return if_res947;
};
var bad_props_p = function(props2012) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2013 = function(props2014) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(props2014) !== false) {
            var if_res950 = false;
        } else {
            if (M0.__rjs_quoted__.impersonator_property_p(M0.car(props2014)) !== false) {
                var props2015 = M0.cdr(props2014);
                var or_part2016 = M0.null_p(props2015);
                if (or_part2016 !== false) {
                    var if_res948 = or_part2016;
                } else {
                    var if_res948 = loop2013(M0.cdr(props2015));
                }
                var if_res949 = if_res948;
            } else {
                var if_res949 = true;
            }
            var if_res950 = if_res949;
        }
        return if_res950;
    };
    return loop2013(props2012);
};
var chaperone_arity_match_checking = function(self_arg_p2017, name2018, proc2019, wrap_proc2020, props2021) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var a2022 = M0.procedure_arity(proc2019);
    var b2023 = M0.procedure_arity(wrap_proc2020);
    if (self_arg_p2017 !== false) {
        var if_res951 = 1;
    } else {
        var if_res951 = 0;
    }
    var d2024 = if_res951;
    var let_result952 = procedure_keywords(proc2019);
    var a_req2025 = let_result952.getAt(0);
    var a_allow2026 = let_result952.getAt(1);
    var let_result953 = procedure_keywords(wrap_proc2020);
    var b_req2027 = let_result953.getAt(0);
    var b_allow2028 = let_result953.getAt(1);
    var includes_p2029 = function(a2030, b2031) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.number_p(b2031) !== false) {
            if (M0.number_p(a2030) !== false) {
                var if_res955 = M0.__eq_(b2031, a2030 + d2024);
            } else {
                if (M0.arity_at_least_p(a2030) !== false) {
                    var if_res954 = M0.__gt__eq_(b2031, M0.arity_at_least_value(a2030) + d2024);
                } else {
                    var if_res954 = M0.ormap(function(a2032) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return includes_p2029(a2032, b2031);
                    }, a2030);
                }
                var if_res955 = if_res954;
            }
            var if_res959 = if_res955;
        } else {
            if (M0.arity_at_least_p(b2031) !== false) {
                if (M0.number_p(a2030) !== false) {
                    var if_res957 = false;
                } else {
                    if (M0.arity_at_least_p(a2030) !== false) {
                        var if_res956 = M0.__gt__eq_(M0.arity_at_least_value(b2031), M0.arity_at_least_value(a2030) + d2024);
                    } else {
                        var if_res956 = M0.ormap(function(a2033) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return includes_p2029(b2031, a2033);
                        }, a2030);
                    }
                    var if_res957 = if_res956;
                }
                var if_res958 = if_res957;
            } else {
                var if_res958 = M0.andmap(function(b2034) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return includes_p2029(a2030, b2034);
                }, b2031);
            }
            var if_res959 = if_res958;
        }
        return if_res959;
    };
    if (includes_p2029(b2023, a2022) !== false) {
        var if_res960 = M0.rvoid();
    } else {
        var if_res960 = M0.apply(M0.__rjs_quoted__.chaperone_procedure, proc2019, wrap_proc2020, props2021);
    }
    if_res960;
    if (subset_p(b_req2027, a_req2025) !== false) {
        var if_res961 = M0.rvoid();
    } else {
        var if_res961 = M0.__rjs_quoted__.raise_arguments_error_times_(name2018, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrapper procedure requires more keywords than original procedure"), $rjs_core.UString.make("wrapper procedure"), wrap_proc2020, $rjs_core.UString.make("original procedure"), proc2019);
    }
    if_res961;
    var or_part2035 = M0.not(b_allow2028);
    if (or_part2035 !== false) {
        var if_res963 = or_part2035;
    } else {
        if (a_allow2026 !== false) {
            var if_res962 = subset_p(a_allow2026, b_allow2028);
        } else {
            var if_res962 = false;
        }
        var if_res963 = if_res962;
    }
    if (if_res963 !== false) {
        var if_res964 = M0.rvoid();
    } else {
        var if_res964 = M0.__rjs_quoted__.raise_arguments_error_times_(name2018, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrapper procedure does not accept all keywords of original procedure"), $rjs_core.UString.make("wrapper procedure"), wrap_proc2020, $rjs_core.UString.make("original procedure"), proc2019);
    }
    if_res964;
    return M0.rvoid();
};
var normalize_proc = function(proc2036) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(proc2036) !== false) {
        var if_res972 = proc2036;
    } else {
        if (new_procedure_p(proc2036) !== false) {
            var let_result965 = procedure_keywords(proc2036);
            var req_kws2037 = let_result965.getAt(0);
            var allowed_kws2038 = let_result965.getAt(1);
            if (M0.null_p(allowed_kws2038) !== false) {
                var if_res970 = proc2036;
            } else {
                var if_res970 = make_optional_keyword_procedure(function(given_kws2039, given_argc2040) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.procedure_arity_includes_p(proc2036, given_argc2040 - 2, true) !== false) {
                        var or_part2041 = M0.not(allowed_kws2038);
                        if (or_part2041 !== false) {
                            var if_res967 = or_part2041;
                        } else {
                            var if_res967 = subset_p(given_kws2039, allowed_kws2038);
                        }
                        if (if_res967 !== false) {
                            var if_res968 = subset_p(req_kws2037, given_kws2039);
                        } else {
                            var if_res968 = false;
                        }
                        var if_res969 = if_res968;
                    } else {
                        var if_res969 = false;
                    }
                    return if_res969;
                }, $rjs_core.attachProcedureArity(function(kws2042, kw_args2043, ...vals2044966) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var vals2044 = $rjs_core.Pair.listFromArray(vals2044966);
                    return keyword_apply(proc2036, kws2042, kw_args2043, vals2044);
                }), req_kws2037, allowed_kws2038, proc2036);
            }
            var if_res971 = if_res970;
        } else {
            var if_res971 = proc2036;
        }
        var if_res972 = if_res971;
    }
    return if_res972;
};
var __rjs_quoted__ = {};
__rjs_quoted__.make_optional_keyword_method = make_optional_keyword_method;
__rjs_quoted__.struct_keyword_procedure_by_arity_error = struct_keyword_procedure_by_arity_error;
__rjs_quoted__.prop_named_keyword_procedure = prop_named_keyword_procedure;
__rjs_quoted__.make_optional_keyword_procedure = make_optional_keyword_procedure;
__rjs_quoted__.struct_keyword_procedure = struct_keyword_procedure;
__rjs_quoted__.struct_keyword_method_by_arity_error = struct_keyword_method_by_arity_error;
__rjs_quoted__.subset_p = subset_p;
__rjs_quoted__.missing_kw = missing_kw;
__rjs_quoted__.subsets_p = subsets_p;
__rjs_quoted__.keyword_procedure_extract = keyword_procedure_extract;
export {
    __rjs_quoted__,
    new_impersonate_procedure_times_,
    new_chaperone_procedure_times_,
    new_unsafe_impersonate_procedure,
    new_impersonate_procedure,
    new_unsafe_chaperone_procedure,
    new_chaperone_procedure,
    new_procedure_realm,
    new_procedure_rename,
    new_procedure__gt_method,
    new_prop_procedure,
    procedure_reduce_keyword_arity_mask,
    procedure_reduce_keyword_arity,
    new_procedure_reduce_arity_mask,
    new_procedure_reduce_arity,
    procedure_keywords,
    keyword_apply,
    make_keyword_procedure
};