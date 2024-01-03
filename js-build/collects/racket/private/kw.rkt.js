import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/unsafe.rkt.js";
var let_result1101 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("keyword-impersonator"));
var prop_keyword_impersonator = let_result1101.getAt(0);
var keyword_impersonator_p = let_result1101.getAt(1);
var keyword_impersonator_ref = let_result1101.getAt(2);
var keyword_procedure_impersonator_of = function(v2277) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_impersonator_p(v2277) !== false) {
        var if_res1102 = keyword_impersonator_ref(v2277)(v2277);
    } else {
        var if_res1102 = false;
    }
    return if_res1102;
};
var let_result1103 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("keyword-procedure"), false, 4, 0, false, M0.list(M0.cons(M0.prop_checked_procedure, true), M0.cons(M0.prop_impersonator_of, keyword_procedure_impersonator_of)), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2, 3));
var struct_keyword_procedure = let_result1103.getAt(0);
var mk_kw_proc = let_result1103.getAt(1);
var keyword_procedure_p = let_result1103.getAt(2);
var keyword_procedure_ref = let_result1103.getAt(3);
var keyword_procedure_set_bang_ = let_result1103.getAt(4);
var keyword_procedure_checker = M0.make_struct_field_accessor(keyword_procedure_ref, 0);
var keyword_procedure_proc = M0.make_struct_field_accessor(keyword_procedure_ref, 1);
var keyword_procedure_required = M0.make_struct_field_accessor(keyword_procedure_ref, 2);
var keyword_procedure_allowed = M0.make_struct_field_accessor(keyword_procedure_ref, 3);
var let_result1104 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 0, 0, false, M0.list(M0.cons(M0.prop_method_arity_error, true)));
var struct_keyword_method = let_result1104.getAt(0);
var make_km = let_result1104.getAt(1);
var keyword_method_p = let_result1104.getAt(2);
var km_ref = let_result1104.getAt(3);
var km_set_bang_ = let_result1104.getAt(4);
var generate_arity_string = function(proc2278) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var let_result1105 = procedure_keywords(proc2278);
    var req2279 = let_result1105.getAt(0);
    var allowed2280 = let_result1105.getAt(1);
    var a2281 = M0.procedure_arity(proc2278);
    var keywords_desc2282 = function(opt2284, req2285) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var temp1111 = $rjs_core.UString.make("~a with keyword~a~a");
        if (M0.null_p(M0.cdr(req2285)) !== false) {
            var if_res1110 = M0.format($rjs_core.UString.make("an ~aargument"), opt2284);
        } else {
            var if_res1110 = M0.format($rjs_core.UString.make("~aarguments"), opt2284);
        }
        if (M0.null_p(M0.cdr(req2285)) !== false) {
            var if_res1109 = $rjs_core.UString.make("");
        } else {
            var if_res1109 = $rjs_core.UString.make("s");
        }
        var tmp2286 = M0.length(req2285);
        if (M0.equal_p(tmp2286, 1) !== false) {
            var if_res1108 = M0.format($rjs_core.UString.make(" ~a"), M0.car(req2285));
        } else {
            if (M0.equal_p(tmp2286, 2) !== false) {
                var if_res1107 = M0.format($rjs_core.UString.make(" ~a and ~a"), M0.car(req2285), M0.cadr(req2285));
            } else {
                var loop2287 = function(req2288) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.null_p(M0.cdr(req2288)) !== false) {
                        var if_res1106 = M0.format($rjs_core.UString.make(" and ~a"), M0.car(req2288));
                    } else {
                        var if_res1106 = M0.format($rjs_core.UString.make(" ~a,~a"), M0.car(req2288), loop2287(M0.cdr(req2288)));
                    }
                    return if_res1106;
                };
                var if_res1107 = loop2287(req2285);
            }
            var if_res1108 = if_res1107;
        }
        return M0.format(temp1111, if_res1110, if_res1109, if_res1108);
    };
    var method_adjust2283 = function(a2289) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var or_part2290 = okm_p(proc2278);
        if (or_part2290 !== false) {
            var if_res1112 = or_part2290;
        } else {
            var if_res1112 = keyword_method_p(proc2278);
        }
        if (if_res1112 !== false) {
            if (M0.zero_p(a2289) !== false) {
                var if_res1113 = 0;
            } else {
                var if_res1113 = M0.sub1(a2289);
            }
            var if_res1114 = if_res1113;
        } else {
            var if_res1114 = a2289;
        }
        return if_res1114;
    };
    if (M0.number_p(a2281) !== false) {
        var a2291 = method_adjust2283(a2281);
        var if_res1121 = M0.format($rjs_core.UString.make("~a"), a2291);
    } else {
        if (M0.arity_at_least_p(a2281) !== false) {
            var a2292 = method_adjust2283(M0.arity_at_least_value(a2281));
            var if_res1120 = M0.format($rjs_core.UString.make("at least ~a"), a2292);
        } else {
            var if_res1120 = $rjs_core.UString.make("a different number");
        }
        var if_res1121 = if_res1120;
    }
    if (M0.null_p(req2279) !== false) {
        var if_res1119 = $rjs_core.UString.make("");
    } else {
        var if_res1119 = M0.format($rjs_core.UString.make(" plus ~a"), keywords_desc2282($rjs_core.UString.make(""), req2279));
    }
    if (allowed2280 !== false) {
        var loop2294 = function(req2295, allowed2296) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.null_p(req2295) !== false) {
                var if_res1116 = allowed2296;
            } else {
                if (M0.eq_p(M0.car(req2295), M0.car(allowed2296)) !== false) {
                    var if_res1115 = loop2294(M0.cdr(req2295), M0.cdr(allowed2296));
                } else {
                    var if_res1115 = M0.cons(M0.car(allowed2296), loop2294(req2295, M0.cdr(allowed2296)));
                }
                var if_res1116 = if_res1115;
            }
            return if_res1116;
        };
        var others2293 = loop2294(req2279, allowed2280);
        if (M0.null_p(others2293) !== false) {
            var if_res1117 = $rjs_core.UString.make("");
        } else {
            var if_res1117 = M0.format($rjs_core.UString.make(" plus ~a"), keywords_desc2282($rjs_core.UString.make("optional "), others2293));
        }
        var if_res1118 = if_res1117;
    } else {
        var if_res1118 = $rjs_core.UString.make(" plus arbitrary keyword arguments");
    }
    return M0.string_append(if_res1121, if_res1119, if_res1118);
};
var let_result1122 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 1, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string)), M0.current_inspector(), 0);
var struct_okp = let_result1122.getAt(0);
var make_optional_keyword_procedure = let_result1122.getAt(1);
var okp_p = let_result1122.getAt(2);
var okp_ref = let_result1122.getAt(3);
var okp_set_bang_ = let_result1122.getAt(4);
var let_result1123 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 0, 0, false, M0.list(M0.cons(M0.prop_method_arity_error, true)));
var struct_okm = let_result1123.getAt(0);
var make_optional_keyword_method = let_result1123.getAt(1);
var okm_p = let_result1123.getAt(2);
var okm_ref = let_result1123.getAt(3);
var okm_set_bang_ = let_result1123.getAt(4);
var let_result1124 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("named-keyword-procedure"));
var prop_named_keyword_procedure = let_result1124.getAt(0);
var named_keyword_procedure_p = let_result1124.getAt(1);
var keyword_procedure_name_plus_fail = let_result1124.getAt(2);
var keyword_procedure_name_plus_fail_times_ = function(p2297) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var v2298 = keyword_procedure_name_plus_fail(p2297);
    if (M0.vector_p(v2298) !== false) {
        var if_res1125 = v2298;
    } else {
        var if_res1125 = v2298(p2297);
    }
    return if_res1125;
};
var let_result1127 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("procedure"), function(v2299, info_l2300) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.exact_integer_p(v2299) !== false) {
        var if_res1126 = M0.make_struct_field_accessor(M0.list_ref(info_l2300, 3), v2299);
    } else {
        var if_res1126 = false;
    }
    return if_res1126;
});
var prop_procedure_accessor = let_result1127.getAt(0);
var procedure_accessor_p = let_result1127.getAt(1);
var procedure_accessor_ref = let_result1127.getAt(2);
var let_result1128 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("procedure"), false, M0.list(M0.cons(M0.prop_procedure, M0.values), M0.cons(prop_procedure_accessor, M0.values)), true);
var new_prop_procedure = let_result1128.getAt(0);
var new_procedure_p = let_result1128.getAt(1);
var new_procedure_ref = let_result1128.getAt(2);
var let_result1129 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v2301) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kpp_ref(v2301, 0);
})));
var struct_keyword_procedure_impersonator = let_result1129.getAt(0);
var make_kpp = let_result1129.getAt(1);
var keyword_procedure_impersonator_p = let_result1129.getAt(2);
var kpp_ref = let_result1129.getAt(3);
var kpp_set_bang_ = let_result1129.getAt(4);
var let_result1130 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v2302) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kmp_ref(v2302, 0);
})));
var struct_keyword_method_impersonator = let_result1130.getAt(0);
var make_kmp = let_result1130.getAt(1);
var keyword_method_impersonator_p = let_result1130.getAt(2);
var kmp_ref = let_result1130.getAt(3);
var kmp_set_bang_ = let_result1130.getAt(4);
var let_result1131 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v2303) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return okpp_ref(v2303, 0);
})));
var struct_okpp = let_result1131.getAt(0);
var make_optional_keyword_procedure_impersonator = let_result1131.getAt(1);
var okpp_p = let_result1131.getAt(2);
var okpp_ref = let_result1131.getAt(3);
var okpp_set_bang_ = let_result1131.getAt(4);
var let_result1132 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v2304) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return okmp_ref(v2304, 0);
})));
var struct_okmp = let_result1132.getAt(0);
var make_optional_keyword_method_impersonator = let_result1132.getAt(1);
var okmp_p = let_result1132.getAt(2);
var okmp_ref = let_result1132.getAt(3);
var okmp_set_bang_ = let_result1132.getAt(4);
var let_result1133 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_procedure_by_arity_error = let_result1133.getAt(0);
var make_kp_by_ae = let_result1133.getAt(1);
var kp_by_ae_p = let_result1133.getAt(2);
var kp_by_ae_ref = let_result1133.getAt(3);
var kp_by_ae_set_bang_ = let_result1133.getAt(4);
var let_result1134 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_method_by_arity_error = let_result1134.getAt(0);
var make_km_by_ae = let_result1134.getAt(1);
var km_by_ae_p = let_result1134.getAt(2);
var km_by_ae_ref = let_result1134.getAt(3);
var km_by_ae_set_bang_ = let_result1134.getAt(4);
var let_result1135 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_impersonator, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_procedure_impersonator_by_arity_error = let_result1135.getAt(0);
var make_kpi_by_ae = let_result1135.getAt(1);
var kpi_by_ae_p = let_result1135.getAt(2);
var kpi_by_ae_ref = let_result1135.getAt(3);
var kpi_by_ae_set_bang_ = let_result1135.getAt(4);
var let_result1136 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_impersonator, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_method_impersonator_by_arity_error = let_result1136.getAt(0);
var make_kmi_by_ae = let_result1136.getAt(1);
var kmi_by_ae_p = let_result1136.getAt(2);
var kmi_by_ae_ref = let_result1136.getAt(3);
var kmi_by_ae_set_bang_ = let_result1136.getAt(4);
var let_result1137 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r2305) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref(r2305, 1), rkp_by_ae_ref(r2305, 2), rkp_by_ae_ref(r2305, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae = let_result1137.getAt(0);
var make_required_keyword_procedure_by_arity_error = let_result1137.getAt(1);
var rkp_by_ae_p = let_result1137.getAt(2);
var rkp_by_ae_ref = let_result1137.getAt(3);
var rkp_by_ae_set_bang_ = let_result1137.getAt(4);
var let_result1138 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r2306) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref2267(r2306, 1), rkp_by_ae_ref2267(r2306, 2), rkp_by_ae_ref2267(r2306, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae2265 = let_result1138.getAt(0);
var make_required_keyword_method_by_arity_error = let_result1138.getAt(1);
var rkp_by_ae_p2266 = let_result1138.getAt(2);
var rkp_by_ae_ref2267 = let_result1138.getAt(3);
var rkp_by_ae_set_bang_2268 = let_result1138.getAt(4);
var let_result1139 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_impersonator_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r2307) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref2271(r2307, 1), rkp_by_ae_ref2271(r2307, 2), rkp_by_ae_ref2271(r2307, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae2269 = let_result1139.getAt(0);
var make_required_keyword_procedure_impersonator_by_arity_error = let_result1139.getAt(1);
var rkp_by_ae_p2270 = let_result1139.getAt(2);
var rkp_by_ae_ref2271 = let_result1139.getAt(3);
var rkp_by_ae_set_bang_2272 = let_result1139.getAt(4);
var let_result1140 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_impersonator_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r2308) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref2275(r2308, 1), rkp_by_ae_ref2275(r2308, 2), rkp_by_ae_ref2275(r2308, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae2273 = let_result1140.getAt(0);
var make_required_keyword_method_impersonator_by_arity_error = let_result1140.getAt(1);
var rkp_by_ae_p2274 = let_result1140.getAt(2);
var rkp_by_ae_ref2275 = let_result1140.getAt(3);
var rkp_by_ae_set_bang_2276 = let_result1140.getAt(4);
var cl1141 = function(proc2309) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var proc_name2310 = M0.object_name(proc2309);
    if (M0.procedure_p(proc2309) !== false) {
        var if_res1144 = M0.__rjs_quoted__.procedure_realm(proc2309);
    } else {
        var if_res1144 = false;
    }
    var proc_realm2311 = if_res1144;
    var plain_proc2312 = $rjs_core.attachProcedureArity(function(...args23131145) {
        var args2313 = $rjs_core.Pair.listFromArray(args23131145);
        return M0.apply(proc2309, M0.rnull, M0.rnull, args2313);
    });
    if (M0.procedure_p(proc2309) !== false) {
        var if_res1146 = M0.arithmetic_shift(M0.procedure_arity_mask(proc2309), -2);
    } else {
        var if_res1146 = false;
    }
    var mask2314 = if_res1146;
    if (M0.procedure_p(plain_proc2312) !== false) {
        if (M0.exact_integer_p(mask2314) !== false) {
            if (M0.symbol_p(proc_name2310) !== false) {
                if (M0.symbol_p(proc_realm2311) !== false) {
                    var if_res1147 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc2312, mask2314, proc_name2310, proc_realm2311);
                } else {
                    var if_res1147 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc2312, mask2314, false, $rjs_core.PrimitiveSymbol.make("ignored"));
                }
                var if_res1148 = if_res1147;
            } else {
                var if_res1148 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc2312, mask2314, false, $rjs_core.PrimitiveSymbol.make("ignored"));
            }
            var if_res1149 = if_res1148;
        } else {
            var if_res1149 = plain_proc2312;
        }
        var if_res1150 = if_res1149;
    } else {
        var if_res1150 = plain_proc2312;
    }
    return make_keyword_procedure(proc2309, if_res1150);
};
var cl1142 = function(proc2315, plain_proc2316) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.procedure_p(proc2315) !== false) {
        var if_res1151 = M0.procedure_arity_mask(proc2315);
    } else {
        var if_res1151 = false;
    }
    return make_optional_keyword_procedure(make_keyword_checker(M0.rnull, false, if_res1151), proc2315, M0.rnull, false, plain_proc2316);
};
var make_keyword_procedure = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1143 = {
        '1': cl1141,
        '2': cl1142
    } [arguments.length];
    if (fixed_lam1143 !== undefined) {
        return fixed_lam1143.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var keyword_apply = $rjs_core.attachProcedureArity(function(proc2317, kws2318, kw_vals2319, normal_args2320, ...normal_argss23211152) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var normal_argss2321 = $rjs_core.Pair.listFromArray(normal_argss23211152);
    var type_error2322 = function(what2323, which2324) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return M0.apply(M0.raise_argument_error, $rjs_core.PrimitiveSymbol.make("keyword-apply"), what2323, which2324, proc2317, kws2318, kw_vals2319, normal_args2320, normal_argss2321);
    };
    if (M0.procedure_p(proc2317) !== false) {
        var if_res1153 = M0.rvoid();
    } else {
        var if_res1153 = type_error2322($rjs_core.UString.make("procedure?"), 0);
    }
    if_res1153;
    var loop2325 = function(ks2326) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(ks2326) !== false) {
            var if_res1160 = M0.rvoid();
        } else {
            var or_part2327 = M0.not(M0.pair_p(ks2326));
            if (or_part2327 !== false) {
                var if_res1154 = or_part2327;
            } else {
                var if_res1154 = M0.not(M0.keyword_p(M0.car(ks2326)));
            }
            if (if_res1154 !== false) {
                var if_res1159 = type_error2322($rjs_core.UString.make("(listof keyword?)"), 1);
            } else {
                if (M0.null_p(M0.cdr(ks2326)) !== false) {
                    var if_res1158 = M0.rvoid();
                } else {
                    var or_part2328 = M0.not(M0.pair_p(M0.cdr(ks2326)));
                    if (or_part2328 !== false) {
                        var if_res1155 = or_part2328;
                    } else {
                        var if_res1155 = M0.not(M0.keyword_p(M0.cadr(ks2326)));
                    }
                    if (if_res1155 !== false) {
                        var if_res1157 = loop2325(M0.cdr(ks2326));
                    } else {
                        if (M0.keyword_lt__p(M0.car(ks2326), M0.cadr(ks2326)) !== false) {
                            var if_res1156 = loop2325(M0.cdr(ks2326));
                        } else {
                            var if_res1156 = type_error2322($rjs_core.UString.make("(and/c (listof? keyword?) sorted? distinct?)"), 1);
                        }
                        var if_res1157 = if_res1156;
                    }
                    var if_res1158 = if_res1157;
                }
                var if_res1159 = if_res1158;
            }
            var if_res1160 = if_res1159;
        }
        return if_res1160;
    };
    loop2325(kws2318);
    if (M0.list_p(kw_vals2319) !== false) {
        var if_res1161 = M0.rvoid();
    } else {
        var if_res1161 = type_error2322($rjs_core.UString.make("list?"), 2);
    }
    if_res1161;
    if (M0.__eq_(M0.length(kws2318), M0.length(kw_vals2319)) !== false) {
        var if_res1162 = M0.rvoid();
    } else {
        var if_res1162 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword-apply"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("keyword list length does not match value list length"), $rjs_core.UString.make("keyword list length"), M0.length(kws2318), $rjs_core.UString.make("value list length"), M0.length(kw_vals2319), $rjs_core.UString.make("keyword list"), kws2318, $rjs_core.UString.make("value list"), kw_vals2319);
    }
    if_res1162;
    var loop2330 = function(normal_argss2331, pos2332) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(M0.cdr(normal_argss2331)) !== false) {
            var l2333 = M0.car(normal_argss2331);
            if (M0.list_p(l2333) !== false) {
                var if_res1163 = l2333;
            } else {
                var if_res1163 = type_error2322($rjs_core.UString.make("list?"), pos2332);
            }
            var if_res1164 = if_res1163;
        } else {
            var if_res1164 = M0.cons(M0.car(normal_argss2331), loop2330(M0.cdr(normal_argss2331), M0.add1(pos2332)));
        }
        return if_res1164;
    };
    var normal_args2329 = loop2330(M0.cons(normal_args2320, normal_argss2321), 3);
    if (M0.null_p(kws2318) !== false) {
        var if_res1165 = M0.apply(proc2317, normal_args2329);
    } else {
        var if_res1165 = M0.apply(keyword_procedure_extract_by_method(kws2318, 2 + M0.length(normal_args2329), proc2317, 0), kws2318, kw_vals2319, normal_args2329);
    }
    return if_res1165;
});
var procedure_keywords = function(p2334) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(p2334) !== false) {
        var if_res1170 = M0.values(keyword_procedure_required(p2334), keyword_procedure_allowed(p2334));
    } else {
        if (M0.procedure_p(p2334) !== false) {
            if (new_procedure_p(p2334) !== false) {
                var v2335 = new_procedure_ref(p2334);
                if (M0.procedure_p(v2335) !== false) {
                    var if_res1167 = procedure_keywords(v2335);
                } else {
                    var a2336 = procedure_accessor_ref(p2334);
                    if (a2336 !== false) {
                        var if_res1166 = procedure_keywords(a2336(p2334));
                    } else {
                        var if_res1166 = M0.values(M0.rnull, M0.rnull);
                    }
                    var if_res1167 = if_res1166;
                }
                var if_res1168 = if_res1167;
            } else {
                var if_res1168 = M0.values(M0.rnull, M0.rnull);
            }
            var if_res1169 = if_res1168;
        } else {
            var if_res1169 = M0.__rjs_quoted__.raise_argument_error_times_($rjs_core.PrimitiveSymbol.make("procedure-keywords"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure?"), p2334);
        }
        var if_res1170 = if_res1169;
    }
    return if_res1170;
};
var extract_keyword_root = function(p2337) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(p2337) !== false) {
        var if_res1174 = p2337;
    } else {
        if (M0.procedure_p(p2337) !== false) {
            var v2338 = new_procedure_ref(p2337, false);
            if (M0.procedure_p(v2338) !== false) {
                var if_res1172 = extract_keyword_root(v2338);
            } else {
                var a2339 = procedure_accessor_ref(p2337, false);
                if (a2339 !== false) {
                    var if_res1171 = extract_keyword_root(a2339(p2337));
                } else {
                    var if_res1171 = false;
                }
                var if_res1172 = if_res1171;
            }
            var if_res1173 = if_res1172;
        } else {
            var if_res1173 = false;
        }
        var if_res1174 = if_res1173;
    }
    return if_res1174;
};
var missing_kw = $rjs_core.attachProcedureArity(function(proc2340, ...args23411175) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2341 = $rjs_core.Pair.listFromArray(args23411175);
    return M0.apply(keyword_procedure_extract_by_method(M0.rnull, 0, proc2340, 0), M0.rnull, M0.rnull, args2341);
});
var raise_missing_kw = function(name2342, req_kws2343, args2344) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return raise_wrong_kws(name2342, true, true, false, M0.rnull, M0.rnull, req_kws2343, M0.rnull, args2344);
};
var check_kw_args = function(p2345, kws2346) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2347 = function(kws2348, required2349, allowed2350) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(kws2348) !== false) {
            if (M0.null_p(required2349) !== false) {
                var if_res1176 = M0.values(false, false);
            } else {
                var if_res1176 = M0.values(M0.car(required2349), false);
            }
            var if_res1185 = if_res1176;
        } else {
            if (M0.pair_p(required2349) !== false) {
                var if_res1177 = M0.eq_p(M0.car(required2349), M0.car(kws2348));
            } else {
                var if_res1177 = false;
            }
            if (if_res1177 !== false) {
                var temp1180 = M0.cdr(kws2348);
                var temp1179 = M0.cdr(required2349);
                if (allowed2350 !== false) {
                    var if_res1178 = M0.cdr(allowed2350);
                } else {
                    var if_res1178 = false;
                }
                var if_res1184 = loop2347(temp1180, temp1179, if_res1178);
            } else {
                if (M0.not(allowed2350) !== false) {
                    var if_res1183 = loop2347(M0.cdr(kws2348), required2349, false);
                } else {
                    if (M0.pair_p(allowed2350) !== false) {
                        if (M0.eq_p(M0.car(allowed2350), M0.car(kws2348)) !== false) {
                            var if_res1181 = loop2347(M0.cdr(kws2348), required2349, M0.cdr(allowed2350));
                        } else {
                            var if_res1181 = loop2347(kws2348, required2349, M0.cdr(allowed2350));
                        }
                        var if_res1182 = if_res1181;
                    } else {
                        var if_res1182 = M0.values(false, M0.car(kws2348));
                    }
                    var if_res1183 = if_res1182;
                }
                var if_res1184 = if_res1183;
            }
            var if_res1185 = if_res1184;
        }
        return if_res1185;
    };
    return loop2347(kws2346, keyword_procedure_required(p2345), keyword_procedure_allowed(p2345));
};
var make_keyword_checker = function(req_kws2351, allowed_kws2352, arity_mask2353) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.not(allowed_kws2352) !== false) {
        if (M0.null_p(req_kws2351) !== false) {
            var if_res1188 = function(kws2354, a2355) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (true !== false) {
                    var if_res1186 = M0.bitwise_bit_set_p(arity_mask2353, a2355);
                } else {
                    var if_res1186 = false;
                }
                return if_res1186;
            };
        } else {
            var if_res1188 = function(kws2356, a2357) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (subset_p(req_kws2351, kws2356) !== false) {
                    var if_res1187 = M0.bitwise_bit_set_p(arity_mask2353, a2357);
                } else {
                    var if_res1187 = false;
                }
                return if_res1187;
            };
        }
        var if_res1201 = if_res1188;
    } else {
        if (M0.null_p(allowed_kws2352) !== false) {
            var if_res1200 = function(kws2358, a2359) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M0.null_p(kws2358) !== false) {
                    var if_res1189 = M0.bitwise_bit_set_p(arity_mask2353, a2359);
                } else {
                    var if_res1189 = false;
                }
                return if_res1189;
            };
        } else {
            if (M0.null_p(req_kws2351) !== false) {
                var if_res1199 = function(kws2360, a2361) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (subset_p(kws2360, allowed_kws2352) !== false) {
                        var if_res1190 = M0.bitwise_bit_set_p(arity_mask2353, a2361);
                    } else {
                        var if_res1190 = false;
                    }
                    return if_res1190;
                };
            } else {
                if (M0.list_p(req_kws2351) !== false) {
                    if (M0.list_p(allowed_kws2352) !== false) {
                        var if_res1191 = M0.eq_p(M0.length(req_kws2351), M0.length(allowed_kws2352));
                    } else {
                        var if_res1191 = false;
                    }
                    var if_res1192 = if_res1191;
                } else {
                    var if_res1192 = false;
                }
                if (if_res1192 !== false) {
                    var if_res1198 = function(kws2362, a2363) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var loop2364 = function(kws2365, req_kws2366) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            if (M0.null_p(req_kws2366) !== false) {
                                var if_res1195 = M0.null_p(kws2365);
                            } else {
                                if (M0.null_p(kws2365) !== false) {
                                    var if_res1194 = false;
                                } else {
                                    if (M0.eq_p(M0.car(kws2365), M0.car(req_kws2366)) !== false) {
                                        var if_res1193 = loop2364(M0.cdr(kws2365), M0.cdr(req_kws2366));
                                    } else {
                                        var if_res1193 = false;
                                    }
                                    var if_res1194 = if_res1193;
                                }
                                var if_res1195 = if_res1194;
                            }
                            return if_res1195;
                        };
                        if (loop2364(kws2362, req_kws2351) !== false) {
                            var if_res1196 = M0.bitwise_bit_set_p(arity_mask2353, a2363);
                        } else {
                            var if_res1196 = false;
                        }
                        return if_res1196;
                    };
                } else {
                    var if_res1198 = function(kws2367, a2368) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (subsets_p(req_kws2351, kws2367, allowed_kws2352) !== false) {
                            var if_res1197 = M0.bitwise_bit_set_p(arity_mask2353, a2368);
                        } else {
                            var if_res1197 = false;
                        }
                        return if_res1197;
                    };
                }
                var if_res1199 = if_res1198;
            }
            var if_res1200 = if_res1199;
        }
        var if_res1201 = if_res1200;
    }
    return if_res1201;
};
var subset_p = function(l12369, l22370) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.null_p(l12369) !== false) {
        var if_res1204 = true;
    } else {
        if (M0.null_p(l22370) !== false) {
            var if_res1203 = false;
        } else {
            if (M0.eq_p(M0.car(l12369), M0.car(l22370)) !== false) {
                var if_res1202 = subset_p(M0.cdr(l12369), M0.cdr(l22370));
            } else {
                var if_res1202 = subset_p(l12369, M0.cdr(l22370));
            }
            var if_res1203 = if_res1202;
        }
        var if_res1204 = if_res1203;
    }
    return if_res1204;
};
var subsets_p = function(l12371, l22372, l32373) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.null_p(l12371) !== false) {
        var if_res1209 = subset_p(l22372, l32373);
    } else {
        if (M0.null_p(l22372) !== false) {
            var if_res1208 = false;
        } else {
            if (M0.null_p(l32373) !== false) {
                var if_res1207 = false;
            } else {
                var v22374 = M0.car(l22372);
                if (M0.eq_p(M0.car(l12371), v22374) !== false) {
                    var if_res1206 = subsets_p(M0.cdr(l12371), M0.cdr(l22372), M0.cdr(l32373));
                } else {
                    if (M0.eq_p(v22374, M0.car(l32373)) !== false) {
                        var if_res1205 = subsets_p(l12371, M0.cdr(l22372), M0.cdr(l32373));
                    } else {
                        var if_res1205 = subsets_p(l12371, l22372, M0.cdr(l32373));
                    }
                    var if_res1206 = if_res1205;
                }
                var if_res1207 = if_res1206;
            }
            var if_res1208 = if_res1207;
        }
        var if_res1209 = if_res1208;
    }
    return if_res1209;
};
var keyword_procedure_extract_by_method = function(kws2375, n2376, p2377, method_n2378) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(p2377) !== false) {
        var if_res1210 = keyword_procedure_checker(p2377)(kws2375, n2376);
    } else {
        var if_res1210 = false;
    }
    if (if_res1210 !== false) {
        var if_res1233 = keyword_procedure_proc(p2377);
    } else {
        if (M0.not(keyword_procedure_p(p2377)) !== false) {
            if (M0.procedure_p(p2377) !== false) {
                if (new_procedure_p(p2377) !== false) {
                    var a2381 = procedure_accessor_ref(p2377);
                    if (a2381 !== false) {
                        var if_res1211 = a2381(p2377);
                    } else {
                        var if_res1211 = false;
                    }
                    var if_res1212 = if_res1211;
                } else {
                    var if_res1212 = false;
                }
                var or_part2380 = if_res1212;
                if (or_part2380 !== false) {
                    var if_res1215 = or_part2380;
                } else {
                    var or_part2382 = M0.procedure_extract_target(p2377);
                    if (or_part2382 !== false) {
                        var if_res1214 = or_part2382;
                    } else {
                        if (new_procedure_p(p2377) !== false) {
                            var if_res1213 = $rjs_core.PrimitiveSymbol.make("method");
                        } else {
                            var if_res1213 = false;
                        }
                        var if_res1214 = if_res1213;
                    }
                    var if_res1215 = if_res1214;
                }
                var if_res1216 = if_res1215;
            } else {
                var if_res1216 = false;
            }
            var if_res1217 = if_res1216;
        } else {
            var if_res1217 = false;
        }
        var p22379 = if_res1217;
        if (p22379 !== false) {
            if (M0.eq_p(p22379, $rjs_core.PrimitiveSymbol.make("method")) !== false) {
                var p32383 = keyword_procedure_extract_by_method(kws2375, M0.add1(n2376), new_procedure_ref(p2377), M0.add1(method_n2378));
                var if_res1219 = $rjs_core.attachProcedureArity(function(kws2384, kw_args2385, ...args23861218) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var args2386 = $rjs_core.Pair.listFromArray(args23861218);
                    return M0.apply(p32383, kws2384, kw_args2385, M0.cons(p2377, args2386));
                });
            } else {
                var if_res1219 = keyword_procedure_extract_by_method(kws2375, n2376, p22379, method_n2378);
            }
            var if_res1232 = if_res1219;
        } else {
            var if_res1232 = $rjs_core.attachProcedureArity(function(kws2387, kw_args2388, ...args23891220) {
                if (arguments.length < 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var args2389 = $rjs_core.Pair.listFromArray(args23891220);
                if (keyword_procedure_p(p2377) !== false) {
                    var if_res1221 = check_kw_args(p2377, kws2387);
                } else {
                    var if_res1221 = M0.values(false, M0.car(kws2387));
                }
                var let_result1222 = if_res1221;
                var missing_kw2390 = let_result1222.getAt(0);
                var extra_kw2391 = let_result1222.getAt(1);
                var or_part2395 = keyword_method_p(p2377);
                if (or_part2395 !== false) {
                    var if_res1223 = or_part2395;
                } else {
                    var if_res1223 = okm_p(p2377);
                }
                if (if_res1223 !== false) {
                    var if_res1224 = 1;
                } else {
                    var if_res1224 = 0;
                }
                var method_n2394 = method_n2378 + if_res1224;
                if (M0.__gt__eq_(n2376, method_n2394) !== false) {
                    var if_res1225 = n2376 - method_n2394;
                } else {
                    var if_res1225 = n2376;
                }
                var n2392 = if_res1225;
                var or_part2396 = keyword_procedure_p(p2377);
                if (or_part2396 !== false) {
                    var if_res1227 = or_part2396;
                } else {
                    var or_part2397 = M0.procedure_p(p2377);
                    if (or_part2397 !== false) {
                        var if_res1226 = or_part2397;
                    } else {
                        var if_res1226 = M0.not(extra_kw2391);
                    }
                    var if_res1227 = if_res1226;
                }
                if (if_res1227 !== false) {
                    if (named_keyword_procedure_p(p2377) !== false) {
                        var if_res1228 = M0.vector_ref(keyword_procedure_name_plus_fail_times_(p2377), 0);
                    } else {
                        var if_res1228 = false;
                    }
                    var or_part2398 = if_res1228;
                    if (or_part2398 !== false) {
                        var if_res1230 = or_part2398;
                    } else {
                        var or_part2399 = M0.object_name(p2377);
                        if (or_part2399 !== false) {
                            var if_res1229 = or_part2399;
                        } else {
                            var if_res1229 = p2377;
                        }
                        var if_res1230 = if_res1229;
                    }
                    var if_res1231 = if_res1230;
                } else {
                    var if_res1231 = p2377;
                }
                var name_by_val2393 = if_res1231;
                return raise_wrong_kws(name_by_val2393, keyword_procedure_p(p2377), M0.procedure_p(p2377), n2392, kws2387, kw_args2388, missing_kw2390, extra_kw2391, args2389);
            });
        }
        var if_res1233 = if_res1232;
    }
    return if_res1233;
};
var raise_wrong_kws = function(name_by_val2400, kw_proc_p2401, proc_p2402, n2403, kws2404, kw_args2405, missing_kw2406, extra_kw2407, args2408) {
    if (arguments.length !== 9) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.null_p(args2408) !== false) {
        var if_res1234 = M0.null_p(kws2404);
    } else {
        var if_res1234 = false;
    }
    if (if_res1234 !== false) {
        var if_res1235 = $rjs_core.UString.make("");
    } else {
        var if_res1235 = M0.apply(M0.string_append, $rjs_core.UString.make("\n  arguments...:"), M0.append(M0.map(function(v2410) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M0.format($rjs_core.UString.make("\n   ~e"), v2410);
        }, args2408), M0.map(function(kw2411, kw_arg2412) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M0.format($rjs_core.UString.make("\n   ~a ~e"), kw2411, kw_arg2412);
        }, kws2404, kw_args2405)));
    }
    var args_str2409 = if_res1235;
    var application_message2413 = function(str2414) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return M0.__rjs_quoted__.error_message__gt_adjusted_string($rjs_core.PrimitiveSymbol.make("application"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), str2414, $rjs_core.PrimitiveSymbol.make("racket/primitive"));
    };
    var or_part2415 = extra_kw2407;
    if (or_part2415 !== false) {
        var if_res1242 = or_part2415;
    } else {
        var if_res1242 = missing_kw2406;
    }
    if (if_res1242 !== false) {
        var if_res1243 = M0.__rjs_quoted__.exn_fail_contract;
    } else {
        var if_res1243 = M0.__rjs_quoted__.exn_fail_contract_arity;
    }
    if (extra_kw2407 !== false) {
        if (kw_proc_p2401 !== false) {
            var if_res1237 = application_message2413(M0.format(M0.string_append($rjs_core.UString.make("procedure does not expect an argument with given keyword\n"), $rjs_core.UString.make("  procedure: ~a\n"), $rjs_core.UString.make("  given keyword: ~a"), $rjs_core.UString.make("~a")), name_by_val2400, extra_kw2407, args_str2409));
        } else {
            if (proc_p2402 !== false) {
                var if_res1236 = application_message2413(M0.format(M0.string_append($rjs_core.UString.make("procedure does not accept keyword arguments\n"), $rjs_core.UString.make("  procedure: ~a"), $rjs_core.UString.make("~a")), name_by_val2400, args_str2409));
            } else {
                var if_res1236 = application_message2413(M0.format(M0.string_append($rjs_core.UString.make("not a procedure;\n"), $rjs_core.UString.make(" expected a procedure that can be applied to arguments\n"), $rjs_core.UString.make("  given: ~e"), $rjs_core.UString.make("~a")), name_by_val2400, args_str2409));
            }
            var if_res1237 = if_res1236;
        }
        var if_res1241 = if_res1237;
    } else {
        if (missing_kw2406 !== false) {
            var if_res1240 = application_message2413(M0.format(M0.string_append($rjs_core.UString.make("required keyword argument not supplied\n"), $rjs_core.UString.make("  procedure: ~a\n"), $rjs_core.UString.make("  required keyword: ~a"), $rjs_core.UString.make("~a")), name_by_val2400, missing_kw2406, args_str2409));
        } else {
            var temp1239 = M0.string_append($rjs_core.UString.make("no case matching ~a non-keyword argument~a\n"), $rjs_core.UString.make("  procedure: ~a"), $rjs_core.UString.make("~a"));
            if (M0.__eq_(1, n2403 - 2) !== false) {
                var if_res1238 = $rjs_core.UString.make("");
            } else {
                var if_res1238 = $rjs_core.UString.make("s");
            }
            var if_res1240 = application_message2413(M0.format(temp1239, n2403 - 2, if_res1238, name_by_val2400, args_str2409));
        }
        var if_res1241 = if_res1240;
    }
    return M0.raise(if_res1243(if_res1241, M0.current_continuation_marks()));
};
var keyword_procedure_extract = function(p2416, kws2417, n2418) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return keyword_procedure_extract_by_method(kws2417, n2418, p2416, 0);
};
var cl1244 = function(proc2419, arity2420, req_kw2421, allowed_kw2422, name2423, realm2424) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc2419, arity2420, false, name2423, realm2424, req_kw2421, allowed_kw2422);
};
var cl1245 = function(proc2425, arity2426, req_kw2427, allowed_kw2428, name2429) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc2425, arity2426, false, name2429, $rjs_core.PrimitiveSymbol.make("racket"), req_kw2427, allowed_kw2428);
};
var cl1246 = function(proc2430, arity2431, req_kw2432, allowed_kw2433) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc2430, arity2431, false, false, $rjs_core.PrimitiveSymbol.make("racket"), req_kw2432, allowed_kw2433);
};
var procedure_reduce_keyword_arity = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1247 = {
        '6': cl1244,
        '5': cl1245,
        '4': cl1246
    } [arguments.length];
    if (fixed_lam1247 !== undefined) {
        return fixed_lam1247.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 5, 6]);
var cl1248 = function(proc2434, mask2435, req_kw2436, allowed_kw2437, name2438, realm2439) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc2434, false, mask2435, name2438, realm2439, req_kw2436, allowed_kw2437);
};
var cl1249 = function(proc2440, mask2441, req_kw2442, allowed_kw2443, name2444) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc2440, false, mask2441, name2444, $rjs_core.PrimitiveSymbol.make("racket"), req_kw2442, allowed_kw2443);
};
var cl1250 = function(proc2445, mask2446, req_kw2447, allowed_kw2448) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc2445, false, mask2446, false, $rjs_core.PrimitiveSymbol.make("racket"), req_kw2447, allowed_kw2448);
};
var procedure_reduce_keyword_arity_mask = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1251 = {
        '6': cl1248,
        '5': cl1249,
        '4': cl1250
    } [arguments.length];
    if (fixed_lam1251 !== undefined) {
        return fixed_lam1251.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 5, 6]);
var do_procedure_reduce_keyword_arity = function(who2449, proc2450, arity2451, mask2452, name2453, realm2454, req_kw2455, allowed_kw2456) {
    if (arguments.length !== 8) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var or_part2458 = M0.null_p(allowed_kw2456);
    if (or_part2458 !== false) {
        var if_res1252 = or_part2458;
    } else {
        var if_res1252 = M0.null_p(req_kw2455);
    }
    if (if_res1252 !== false) {
        if (okp_p(proc2450) !== false) {
            var if_res1253 = okp_ref(proc2450, 0);
        } else {
            var if_res1253 = proc2450;
        }
        var p2459 = if_res1253;
        if (arity2451 !== false) {
            var if_res1254 = M0.__rjs_quoted__.procedure_reduce_arity(p2459, arity2451, name2453, realm2454);
        } else {
            var if_res1254 = M0.__rjs_quoted__.procedure_reduce_arity_mask(p2459, mask2452, name2453, realm2454);
        }
        var if_res1255 = if_res1254;
    } else {
        var if_res1255 = false;
    }
    var plain_proc2457 = if_res1255;
    var sorted_kws_p2460 = function(kws2461) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var loop2462 = function(kws2463) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.null_p(kws2463) !== false) {
                var if_res1260 = true;
            } else {
                if (M0.not(M0.pair_p(kws2463)) !== false) {
                    var if_res1259 = false;
                } else {
                    if (M0.not(M0.keyword_p(M0.car(kws2463))) !== false) {
                        var if_res1258 = false;
                    } else {
                        if (M0.null_p(M0.cdr(kws2463)) !== false) {
                            var if_res1257 = true;
                        } else {
                            if (M0.keyword_lt__p(M0.car(kws2463), M0.cadr(kws2463)) !== false) {
                                var if_res1256 = loop2462(M0.cdr(kws2463));
                            } else {
                                var if_res1256 = false;
                            }
                            var if_res1257 = if_res1256;
                        }
                        var if_res1258 = if_res1257;
                    }
                    var if_res1259 = if_res1258;
                }
                var if_res1260 = if_res1259;
            }
            return if_res1260;
        };
        return loop2462(kws2461);
    };
    if (sorted_kws_p2460(req_kw2455) !== false) {
        var if_res1264 = M0.rvoid();
    } else {
        var temp1263 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
        var temp1262 = $rjs_core.UString.make("(and/c (listof? keyword?) sorted? distinct?)");
        var or_part2464 = arity2451;
        if (or_part2464 !== false) {
            var if_res1261 = or_part2464;
        } else {
            var if_res1261 = mask2452;
        }
        var if_res1264 = M0.__rjs_quoted__.raise_argument_error_times_(who2449, temp1263, temp1262, 2, proc2450, if_res1261, req_kw2455, allowed_kw2456);
    }
    if_res1264;
    if (allowed_kw2456 !== false) {
        if (sorted_kws_p2460(allowed_kw2456) !== false) {
            var if_res1268 = M0.rvoid();
        } else {
            var temp1267 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
            var temp1266 = $rjs_core.UString.make("(or/c (and/c (listof? keyword?) sorted? distinct?) #f)");
            var or_part2465 = arity2451;
            if (or_part2465 !== false) {
                var if_res1265 = or_part2465;
            } else {
                var if_res1265 = mask2452;
            }
            var if_res1268 = M0.__rjs_quoted__.raise_argument_error_times_(who2449, temp1267, temp1266, 3, proc2450, if_res1265, req_kw2455, allowed_kw2456);
        }
        if_res1268;
        if (subset_p(req_kw2455, allowed_kw2456) !== false) {
            var if_res1269 = M0.rvoid();
        } else {
            var if_res1269 = M0.__rjs_quoted__.raise_arguments_error_times_(who2449, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("allowed-keyword list does not include all required keywords"), $rjs_core.UString.make("allowed-keyword list"), allowed_kw2456, $rjs_core.UString.make("required keywords"), req_kw2455);
        }
        var if_res1270 = if_res1269;
    } else {
        var if_res1270 = M0.rvoid();
    }
    if_res1270;
    var let_result1271 = procedure_keywords(proc2450);
    var old_req2466 = let_result1271.getAt(0);
    var old_allowed2467 = let_result1271.getAt(1);
    if (subset_p(old_req2466, req_kw2455) !== false) {
        var if_res1272 = M0.rvoid();
    } else {
        var if_res1272 = M0.__rjs_quoted__.raise_arguments_error_times_(who2449, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot reduce required keyword set"), $rjs_core.UString.make("required keywords"), old_req2466, $rjs_core.UString.make("requested required keywords"), req_kw2455);
    }
    if_res1272;
    if (old_allowed2467 !== false) {
        if (subset_p(req_kw2455, old_allowed2467) !== false) {
            var if_res1273 = M0.rvoid();
        } else {
            var if_res1273 = M0.__rjs_quoted__.raise_arguments_error_times_(who2449, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot require keywords not in original allowed set"), $rjs_core.UString.make("original allowed keywords"), old_allowed2467, $rjs_core.UString.make("requested required keywords"), req_kw2455);
        }
        if_res1273;
        var or_part2468 = M0.not(allowed_kw2456);
        if (or_part2468 !== false) {
            var if_res1274 = or_part2468;
        } else {
            var if_res1274 = subset_p(allowed_kw2456, old_allowed2467);
        }
        if (if_res1274 !== false) {
            var if_res1275 = M0.rvoid();
        } else {
            var if_res1275 = M0.__rjs_quoted__.raise_arguments_error_times_(who2449, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot allow keywords not in original allowed set"), $rjs_core.UString.make("original allowed keywords"), old_allowed2467, $rjs_core.UString.make("requested allowed keywords"), allowed_kw2456);
        }
        var if_res1276 = if_res1275;
    } else {
        var if_res1276 = M0.rvoid();
    }
    if_res1276;
    if (M0.null_p(allowed_kw2456) !== false) {
        var if_res1290 = plain_proc2457;
    } else {
        var or_part2470 = mask2452;
        if (or_part2470 !== false) {
            var if_res1277 = or_part2470;
        } else {
            var if_res1277 = arity__gt_mask(arity2451);
        }
        var mask2469 = if_res1277;
        var new_mask2471 = M0.arithmetic_shift(mask2469, 2);
        var kw_checker2472 = make_keyword_checker(req_kw2455, allowed_kw2456, new_mask2471);
        var proc2473 = normalize_proc(proc2450);
        var new_kw_proc2474 = M0.__rjs_quoted__.procedure_reduce_arity_mask(keyword_procedure_proc(proc2473), new_mask2471);
        if (M0.null_p(req_kw2455) !== false) {
            if (okm_p(proc2473) !== false) {
                var if_res1278 = make_optional_keyword_method;
            } else {
                var if_res1278 = make_optional_keyword_procedure;
            }
            var if_res1289 = if_res1278(kw_checker2472, new_kw_proc2474, req_kw2455, allowed_kw2456, plain_proc2457);
        } else {
            var or_part2477 = name2453;
            if (or_part2477 !== false) {
                var if_res1281 = or_part2477;
            } else {
                if (named_keyword_procedure_p(proc2473) !== false) {
                    var if_res1279 = M0.vector_ref(keyword_procedure_name_plus_fail_times_(proc2473), 0);
                } else {
                    var if_res1279 = false;
                }
                var or_part2478 = if_res1279;
                if (or_part2478 !== false) {
                    var if_res1280 = or_part2478;
                } else {
                    var if_res1280 = M0.object_name(proc2473);
                }
                var if_res1281 = if_res1280;
            }
            var name2475 = if_res1281;
            if (name2453 !== false) {
                var if_res1282 = realm2454;
            } else {
                var if_res1282 = false;
            }
            var or_part2479 = if_res1282;
            if (or_part2479 !== false) {
                var if_res1285 = or_part2479;
            } else {
                if (named_keyword_procedure_p(proc2473) !== false) {
                    var if_res1283 = M0.vector_ref(keyword_procedure_name_plus_fail_times_(proc2473), 1);
                } else {
                    var if_res1283 = false;
                }
                var or_part2480 = if_res1283;
                if (or_part2480 !== false) {
                    var if_res1284 = or_part2480;
                } else {
                    var if_res1284 = M0.__rjs_quoted__.procedure_realm(proc2473);
                }
                var if_res1285 = if_res1284;
            }
            var realm2476 = if_res1285;
            var or_part2481 = okm_p(proc2473);
            if (or_part2481 !== false) {
                var if_res1287 = or_part2481;
            } else {
                var if_res1287 = keyword_method_p(proc2473);
            }
            if (if_res1287 !== false) {
                var if_res1288 = make_required_keyword_method_by_arity_error;
            } else {
                var if_res1288 = make_required_keyword_procedure_by_arity_error;
            }
            var if_res1289 = if_res1288(kw_checker2472, new_kw_proc2474, req_kw2455, allowed_kw2456, M0.__rjs_quoted__.procedure_reduce_arity_mask($rjs_core.attachProcedureArity(function(...args24821286) {
                var args2482 = $rjs_core.Pair.listFromArray(args24821286);
                return raise_missing_kw(name2475, req_kw2455);
            }), mask2469), name2475, realm2476);
        }
        var if_res1290 = if_res1289;
    }
    return if_res1290;
};
var arity__gt_mask = function(a2483) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.exact_nonnegative_integer_p(a2483) !== false) {
        var if_res1296 = M0.arithmetic_shift(1, a2483);
    } else {
        if (M0.arity_at_least_p(a2483) !== false) {
            var if_res1295 = M0.bitwise_xor(-1, M0.sub1(M0.arithmetic_shift(1, M0.arity_at_least_value(a2483))));
        } else {
            if (M0.list_p(a2483) !== false) {
                var loop2484 = function(mask2485, l2486) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.null_p(l2486) !== false) {
                        var if_res1293 = mask2485;
                    } else {
                        var a2487 = M0.car(l2486);
                        var or_part2488 = M0.exact_nonnegative_integer_p(a2487);
                        if (or_part2488 !== false) {
                            var if_res1291 = or_part2488;
                        } else {
                            var if_res1291 = M0.arity_at_least_p(a2487);
                        }
                        if (if_res1291 !== false) {
                            var if_res1292 = loop2484(M0.bitwise_ior(mask2485, arity__gt_mask(a2487)), M0.cdr(l2486));
                        } else {
                            var if_res1292 = false;
                        }
                        var if_res1293 = if_res1292;
                    }
                    return if_res1293;
                };
                var if_res1294 = loop2484(0, a2483);
            } else {
                var if_res1294 = false;
            }
            var if_res1295 = if_res1294;
        }
        var if_res1296 = if_res1295;
    }
    return if_res1296;
};
var cl1297 = function(proc2490, arity2491, name2492, realm2493) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.procedure_p(proc2490) !== false) {
        var let_result1301 = procedure_keywords(proc2490);
        var req2494 = let_result1301.getAt(0);
        var allows2495 = let_result1301.getAt(1);
        if (M0.pair_p(req2494) !== false) {
            var if_res1302 = M0.not(M0.null_p(arity2491));
        } else {
            var if_res1302 = false;
        }
        var if_res1303 = if_res1302;
    } else {
        var if_res1303 = false;
    }
    if (if_res1303 !== false) {
        var if_res1305 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("procedure-reduce-arity"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure has required keyword arguments"), $rjs_core.UString.make("procedure"), proc2490);
    } else {
        if (okm_p(proc2490) !== false) {
            var if_res1304 = M0.__rjs_quoted__.procedure__gt_method(proc2490);
        } else {
            var if_res1304 = proc2490;
        }
        var if_res1305 = M0.__rjs_quoted__.procedure_reduce_arity(if_res1304, arity2491, name2492, realm2493);
    }
    return if_res1305;
};
var cl1298 = function(proc2496, arity2497, name2498) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity(proc2496, arity2497, name2498, $rjs_core.PrimitiveSymbol.make("racket"));
};
var cl1299 = function(proc2499, arity2500) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity(proc2499, arity2500, false, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_reduce_arity2489 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1300 = {
        '4': cl1297,
        '3': cl1298,
        '2': cl1299
    } [arguments.length];
    if (fixed_lam1300 !== undefined) {
        return fixed_lam1300.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var new_procedure_reduce_arity = procedure_reduce_arity2489;
var cl1306 = function(proc2502, mask2503, name2504, realm2505) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.procedure_p(proc2502) !== false) {
        var let_result1310 = procedure_keywords(proc2502);
        var req2506 = let_result1310.getAt(0);
        var allows2507 = let_result1310.getAt(1);
        if (M0.pair_p(req2506) !== false) {
            var if_res1311 = M0.not(M0.eqv_p(mask2503, 0));
        } else {
            var if_res1311 = false;
        }
        var if_res1312 = if_res1311;
    } else {
        var if_res1312 = false;
    }
    if (if_res1312 !== false) {
        var if_res1314 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("procedure-reduce-arity"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure has required keyword arguments"), $rjs_core.UString.make("procedure"), proc2502);
    } else {
        if (okm_p(proc2502) !== false) {
            var if_res1313 = M0.__rjs_quoted__.procedure__gt_method(proc2502);
        } else {
            var if_res1313 = proc2502;
        }
        var if_res1314 = M0.__rjs_quoted__.procedure_reduce_arity_mask(if_res1313, mask2503, name2504, realm2505);
    }
    return if_res1314;
};
var cl1307 = function(proc2508, mask2509, name2510) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity_mask(proc2508, mask2509, name2510, $rjs_core.PrimitiveSymbol.make("racket"));
};
var cl1308 = function(proc2511, mask2512) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity_mask(proc2511, mask2512, false, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_reduce_arity2501 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1309 = {
        '4': cl1306,
        '3': cl1307,
        '2': cl1308
    } [arguments.length];
    if (fixed_lam1309 !== undefined) {
        return fixed_lam1309.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var new_procedure_reduce_arity_mask = procedure_reduce_arity2501;
var procedure__gt_method2513 = function(proc2514) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var proc2515 = normalize_proc(proc2514);
    if (keyword_procedure_p(proc2515) !== false) {
        if (okm_p(proc2515) !== false) {
            var if_res1323 = proc2515;
        } else {
            if (keyword_method_p(proc2515) !== false) {
                var if_res1322 = proc2515;
            } else {
                if (okp_p(proc2515) !== false) {
                    var if_res1321 = make_optional_keyword_method(keyword_procedure_checker(proc2515), keyword_procedure_proc(proc2515), keyword_procedure_required(proc2515), keyword_procedure_allowed(proc2515), okp_ref(proc2515, 0));
                } else {
                    var raw_name_plus_fail2516 = keyword_procedure_name_plus_fail(proc2515);
                    if (M0.vector_p(raw_name_plus_fail2516) !== false) {
                        var if_res1315 = raw_name_plus_fail2516;
                    } else {
                        var if_res1315 = raw_name_plus_fail2516(proc2515);
                    }
                    var name_plus_fail2517 = if_res1315;
                    var name2518 = M0.vector_ref(name_plus_fail2517, 0);
                    var req_kw2519 = keyword_procedure_required(proc2515);
                    var temp1320 = keyword_procedure_checker(proc2515);
                    var temp1319 = keyword_procedure_proc(proc2515);
                    var temp1318 = keyword_procedure_allowed(proc2515);
                    if (M0.vector_p(raw_name_plus_fail2516) !== false) {
                        var if_res1317 = M0.__rjs_quoted__.procedure_reduce_arity_mask($rjs_core.attachProcedureArity(function(...args25201316) {
                            var args2520 = $rjs_core.Pair.listFromArray(args25201316);
                            return raise_missing_kw(name2518, req_kw2519);
                        }), M0.arithmetic_shift(M0.procedure_arity_mask(M0.vector_ref(name_plus_fail2517, 2)), -1));
                    } else {
                        var if_res1317 = M0.vector_ref(name_plus_fail2517, 2);
                    }
                    var if_res1321 = make_required_keyword_method_by_arity_error(temp1320, temp1319, req_kw2519, temp1318, if_res1317, name2518, M0.vector_ref(name_plus_fail2517, 1));
                }
                var if_res1322 = if_res1321;
            }
            var if_res1323 = if_res1322;
        }
        var if_res1324 = if_res1323;
    } else {
        var if_res1324 = M0.__rjs_quoted__.procedure__gt_method(proc2515);
    }
    return if_res1324;
};
var new_procedure__gt_method = procedure__gt_method2513;
var cl1325 = function(proc2522, name2523, realm2524) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.symbol_p(name2523) !== false) {
        var if_res1328 = M0.symbol_p(realm2524);
    } else {
        var if_res1328 = false;
    }
    if (M0.not(if_res1328) !== false) {
        var if_res1330 = M0.__rjs_quoted__.procedure_rename(proc2522, name2523, realm2524);
    } else {
        var c12525 = extract_keyword_root(proc2522);
        if (c12525 !== false) {
            var if_res1329 = (function(kw_p2526) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-rename"), proc2522, false, M0.procedure_arity_mask(proc2522), name2523, realm2524, keyword_procedure_required(kw_p2526), keyword_procedure_allowed(kw_p2526));
            })(c12525);
        } else {
            var if_res1329 = M0.__rjs_quoted__.procedure_rename(proc2522, name2523, realm2524);
        }
        var if_res1330 = if_res1329;
    }
    return if_res1330;
};
var cl1326 = function(proc2527, name2528) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_rename(proc2527, name2528, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_rename2521 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1327 = {
        '3': cl1325,
        '2': cl1326
    } [arguments.length];
    if (fixed_lam1327 !== undefined) {
        return fixed_lam1327.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var new_procedure_rename = procedure_rename2521;
var procedure_realm2529 = function(proc2530) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(proc2530) !== false) {
        if (named_keyword_procedure_p(proc2530) !== false) {
            var name_plus_fail2531 = keyword_procedure_name_plus_fail_times_(proc2530);
            var or_part2532 = M0.vector_ref(name_plus_fail2531, 1);
            if (or_part2532 !== false) {
                var if_res1331 = or_part2532;
            } else {
                var if_res1331 = M0.__rjs_quoted__.procedure_realm(M0.vector_ref(name_plus_fail2531, 2));
            }
            var if_res1333 = if_res1331;
        } else {
            if (okp_p(proc2530) !== false) {
                var if_res1332 = M0.__rjs_quoted__.procedure_realm(okp_ref(proc2530, 0));
            } else {
                var if_res1332 = M0.__rjs_quoted__.procedure_realm(keyword_procedure_proc(proc2530));
            }
            var if_res1333 = if_res1332;
        }
        var if_res1334 = if_res1333;
    } else {
        var if_res1334 = M0.__rjs_quoted__.procedure_realm(proc2530);
    }
    return if_res1334;
};
var new_procedure_realm = procedure_realm2529;
var chaperone_procedure2533 = $rjs_core.attachProcedureArity(function(proc2534, wrap_proc2535, ...props25361335) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2536 = $rjs_core.Pair.listFromArray(props25361335);
    return do_chaperone_procedure(false, false, M0.__rjs_quoted__.chaperone_procedure, $rjs_core.PrimitiveSymbol.make("chaperone-procedure"), proc2534, wrap_proc2535, props2536);
});
var new_chaperone_procedure = chaperone_procedure2533;
var unsafe_chaperone_procedure2537 = $rjs_core.attachProcedureArity(function(proc2538, wrap_proc2539, ...props25401336) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2540 = $rjs_core.Pair.listFromArray(props25401336);
    return do_unsafe_chaperone_procedure(M1.__rjs_quoted__.unsafe_chaperone_procedure, $rjs_core.PrimitiveSymbol.make("unsafe-chaperone-procedure"), proc2538, wrap_proc2539, props2540);
});
var new_unsafe_chaperone_procedure = unsafe_chaperone_procedure2537;
var impersonate_procedure2541 = $rjs_core.attachProcedureArity(function(proc2542, wrap_proc2543, ...props25441337) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2544 = $rjs_core.Pair.listFromArray(props25441337);
    return do_chaperone_procedure(true, false, M0.__rjs_quoted__.impersonate_procedure, $rjs_core.PrimitiveSymbol.make("impersonate-procedure"), proc2542, wrap_proc2543, props2544);
});
var new_impersonate_procedure = impersonate_procedure2541;
var unsafe_impersonate_procedure2545 = $rjs_core.attachProcedureArity(function(proc2546, wrap_proc2547, ...props25481338) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2548 = $rjs_core.Pair.listFromArray(props25481338);
    return do_unsafe_chaperone_procedure(M1.__rjs_quoted__.unsafe_impersonate_procedure, $rjs_core.PrimitiveSymbol.make("unsafe-impersonate-procedure"), proc2546, wrap_proc2547, props2548);
});
var new_unsafe_impersonate_procedure = unsafe_impersonate_procedure2545;
var chaperone_procedure_times_2549 = $rjs_core.attachProcedureArity(function(proc2550, wrap_proc2551, ...props25521339) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2552 = $rjs_core.Pair.listFromArray(props25521339);
    return do_chaperone_procedure(false, true, M0.__rjs_quoted__.chaperone_procedure_times_, $rjs_core.PrimitiveSymbol.make("chaperone-procedure"), proc2550, wrap_proc2551, props2552);
});
var new_chaperone_procedure_times_ = chaperone_procedure_times_2549;
var impersonate_procedure_times_2553 = $rjs_core.attachProcedureArity(function(proc2554, wrap_proc2555, ...props25561340) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2556 = $rjs_core.Pair.listFromArray(props25561340);
    return do_chaperone_procedure(true, true, M0.__rjs_quoted__.impersonate_procedure_times_, $rjs_core.PrimitiveSymbol.make("impersonate-procedure"), proc2554, wrap_proc2555, props2556);
});
var new_impersonate_procedure_times_ = impersonate_procedure_times_2553;
var do_chaperone_procedure = function(is_impersonator_p2557, self_arg_p2558, chaperone_procedure2559, name2560, proc2561, wrap_proc2562, props2563) {
    if (arguments.length !== 7) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_proc2564 = normalize_proc(proc2561);
    var n_wrap_proc2565 = normalize_proc(wrap_proc2562);
    var or_part2566 = M0.not(keyword_procedure_p(n_proc2564));
    if (or_part2566 !== false) {
        var if_res1342 = or_part2566;
    } else {
        var or_part2567 = M0.not(M0.procedure_p(wrap_proc2562));
        if (or_part2567 !== false) {
            var if_res1341 = or_part2567;
        } else {
            var if_res1341 = bad_props_p(props2563);
        }
        var if_res1342 = if_res1341;
    }
    if (if_res1342 !== false) {
        var if_res1431 = M0.apply(chaperone_procedure2559, proc2561, wrap_proc2562, props2563);
    } else {
        chaperone_arity_match_checking(self_arg_p2558, name2560, proc2561, wrap_proc2562, props2563);
        var loop2569 = function(props2570) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.null_p(props2570) !== false) {
                var if_res1344 = false;
            } else {
                if (M0.eq_p(M0.car(props2570), M0.__rjs_quoted__.impersonator_prop_application_mark) !== false) {
                    var if_res1343 = M0.cadr(props2570);
                } else {
                    var if_res1343 = loop2569(M0.cddr(props2570));
                }
                var if_res1344 = if_res1343;
            }
            return if_res1344;
        };
        var mark_prop2568 = loop2569(props2563);
        var chaperone_procedure_by_add_mark2571 = function(proc2572, wrap_proc2573) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (mark_prop2568 !== false) {
                var if_res1345 = chaperone_procedure2559(proc2572, wrap_proc2573, M0.__rjs_quoted__.impersonator_prop_application_mark, mark_prop2568);
            } else {
                var if_res1345 = chaperone_procedure2559(proc2572, wrap_proc2573);
            }
            return if_res1345;
        };
        var p2575 = keyword_procedure_proc(n_wrap_proc2565);
        if (self_arg_p2558 !== false) {
            var cl1346 = $rjs_core.attachProcedureArity(function(self_proc2576, kws2577, args2578, ...rest25791351) {
                if (arguments.length < 3) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var rest2579 = $rjs_core.Pair.listFromArray(rest25791351);
                return M0.call_with_values(function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M0.apply(p2575, kws2577, args2578, self_proc2576, rest2579);
                }, $rjs_core.attachProcedureArity(function(...results25801352) {
                    var results2580 = $rjs_core.Pair.listFromArray(results25801352);
                    var len2581 = M0.length(results2580);
                    var alen2582 = M0.length(rest2579);
                    if (M0.__lt_(len2581, alen2582 + 1) !== false) {
                        var if_res1353 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrong number of results from wrapper procedure"), $rjs_core.UString.make("expected minimum number of results"), alen2582 + 1, $rjs_core.UString.make("received number of results"), len2581, $rjs_core.UString.make("wrapper procedure"), wrap_proc2562);
                    } else {
                        var if_res1353 = M0.rvoid();
                    }
                    if_res1353;
                    var num_extra2583 = len2581 - (alen2582 + 1);
                    var new_args2584 = M0.list_ref(results2580, num_extra2583);
                    if (M0.list_p(new_args2584) !== false) {
                        var if_res1354 = M0.__eq_(M0.length(new_args2584), M0.length(args2578));
                    } else {
                        var if_res1354 = false;
                    }
                    if (if_res1354 !== false) {
                        var if_res1359 = M0.rvoid();
                    } else {
                        var temp1358 = $rjs_core.PrimitiveSymbol.make("keyword procedure chaperone");
                        var temp1357 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
                        var temp1356 = $rjs_core.UString.make("expected a list of keyword-argument values as first result~a from wrapper procedure");
                        if (M0.__eq_(len2581, alen2582) !== false) {
                            var if_res1355 = $rjs_core.UString.make("");
                        } else {
                            var if_res1355 = $rjs_core.UString.make(" (after the result-wrapper procedure or mark specifications)");
                        }
                        var if_res1359 = M0.__rjs_quoted__.raise_arguments_error_times_(temp1358, temp1357, M0.format(temp1356, if_res1355), $rjs_core.UString.make("first result"), new_args2584, $rjs_core.UString.make("wrapper procedure"), wrap_proc2562);
                    }
                    if_res1359;
                    M0.for_each(function(kw2585, new_arg2586, arg2587) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (is_impersonator_p2557 !== false) {
                            var if_res1361 = M0.rvoid();
                        } else {
                            if (M0.__rjs_quoted__.chaperone_of_p(new_arg2586, arg2587) !== false) {
                                var if_res1360 = M0.rvoid();
                            } else {
                                var if_res1360 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), M0.format($rjs_core.UString.make("~a keyword result is not a chaperone of original argument from chaperoning procedure"), kw2585), $rjs_core.UString.make("result"), new_arg2586, $rjs_core.UString.make("wrapper procedure"), wrap_proc2562);
                            }
                            var if_res1361 = if_res1360;
                        }
                        return if_res1361;
                    }, kws2577, new_args2584, args2578);
                    var tmp2588 = num_extra2583;
                    if (M0.equal_p(tmp2588, 0) !== false) {
                        var if_res1364 = M0.apply(M0.values, kws2577, results2580);
                    } else {
                        if (M0.equal_p(tmp2588, 1) !== false) {
                            var if_res1363 = M0.apply(M0.values, M0.car(results2580), kws2577, M0.cdr(results2580));
                        } else {
                            var loop2589 = function(results2590, c2591) {
                                if (arguments.length !== 2) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                if (M0.zero_p(c2591) !== false) {
                                    var if_res1362 = M0.cons(kws2577, results2590);
                                } else {
                                    var if_res1362 = M0.cons(M0.car(results2590), loop2589(M0.cdr(results2590), M0.sub1(c2591)));
                                }
                                return if_res1362;
                            };
                            var if_res1363 = M0.apply(M0.values, loop2589(results2580, num_extra2583));
                        }
                        var if_res1364 = if_res1363;
                    }
                    return if_res1364;
                }));
            });
            var cl1347 = $rjs_core.attachProcedureArity(function(...other25921365) {
                var other2592 = $rjs_core.Pair.listFromArray(other25921365);
                return M0.error($rjs_core.UString.make("shouldn't get here"));
            });
            var if_res1386 = $rjs_core.attachProcedureArity(function() {
                var fixed_lam1348 = {} [arguments.length];
                if (fixed_lam1348 !== undefined) {
                    return fixed_lam1348.apply(null, arguments);
                } else {
                    if (M0.__gt__eq_(cl1346.length, 1) !== false) {
                        var if_res1350 = cl1346.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            var if_res1349 = cl1347.apply(null, arguments);
                        } else {
                            var if_res1349 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                        var if_res1350 = if_res1349;
                    }
                    return if_res1350;
                }
            }, [M0.make_arity_at_least(0)]);
        } else {
            var cl1366 = $rjs_core.attachProcedureArity(function(kws2593, args2594, ...rest25951371) {
                if (arguments.length < 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var rest2595 = $rjs_core.Pair.listFromArray(rest25951371);
                return M0.call_with_values(function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M0.apply(p2575, kws2593, args2594, rest2595);
                }, $rjs_core.attachProcedureArity(function(...results25961372) {
                    var results2596 = $rjs_core.Pair.listFromArray(results25961372);
                    var len2597 = M0.length(results2596);
                    var alen2598 = M0.length(rest2595);
                    if (M0.__lt_(len2597, alen2598 + 1) !== false) {
                        var if_res1373 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrong number of results from wrapper procedure"), $rjs_core.UString.make("expected minimum number of results"), alen2598 + 1, $rjs_core.UString.make("received number of results"), len2597, $rjs_core.UString.make("wrapper procedure"), wrap_proc2562);
                    } else {
                        var if_res1373 = M0.rvoid();
                    }
                    if_res1373;
                    var num_extra2599 = len2597 - (alen2598 + 1);
                    var new_args2600 = M0.list_ref(results2596, num_extra2599);
                    if (M0.list_p(new_args2600) !== false) {
                        var if_res1374 = M0.__eq_(M0.length(new_args2600), M0.length(args2594));
                    } else {
                        var if_res1374 = false;
                    }
                    if (if_res1374 !== false) {
                        var if_res1379 = M0.rvoid();
                    } else {
                        var temp1378 = $rjs_core.PrimitiveSymbol.make("keyword procedure chaperone");
                        var temp1377 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
                        var temp1376 = $rjs_core.UString.make("expected a list of keyword-argument values as first result~a from wrapper procedure");
                        if (M0.__eq_(len2597, alen2598) !== false) {
                            var if_res1375 = $rjs_core.UString.make("");
                        } else {
                            var if_res1375 = $rjs_core.UString.make(" (after the result-wrapper procedure or mark specifications)");
                        }
                        var if_res1379 = M0.__rjs_quoted__.raise_arguments_error_times_(temp1378, temp1377, M0.format(temp1376, if_res1375), $rjs_core.UString.make("first result"), new_args2600, $rjs_core.UString.make("wrapper procedure"), wrap_proc2562);
                    }
                    if_res1379;
                    M0.for_each(function(kw2601, new_arg2602, arg2603) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (is_impersonator_p2557 !== false) {
                            var if_res1381 = M0.rvoid();
                        } else {
                            if (M0.__rjs_quoted__.chaperone_of_p(new_arg2602, arg2603) !== false) {
                                var if_res1380 = M0.rvoid();
                            } else {
                                var if_res1380 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), M0.format($rjs_core.UString.make("~a keyword result is not a chaperone of original argument from chaperoning procedure"), kw2601), $rjs_core.UString.make("result"), new_arg2602, $rjs_core.UString.make("wrapper procedure"), wrap_proc2562);
                            }
                            var if_res1381 = if_res1380;
                        }
                        return if_res1381;
                    }, kws2593, new_args2600, args2594);
                    var tmp2604 = num_extra2599;
                    if (M0.equal_p(tmp2604, 0) !== false) {
                        var if_res1384 = M0.apply(M0.values, kws2593, results2596);
                    } else {
                        if (M0.equal_p(tmp2604, 1) !== false) {
                            var if_res1383 = M0.apply(M0.values, M0.car(results2596), kws2593, M0.cdr(results2596));
                        } else {
                            var loop2605 = function(results2606, c2607) {
                                if (arguments.length !== 2) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                if (M0.zero_p(c2607) !== false) {
                                    var if_res1382 = M0.cons(kws2593, results2606);
                                } else {
                                    var if_res1382 = M0.cons(M0.car(results2606), loop2605(M0.cdr(results2606), M0.sub1(c2607)));
                                }
                                return if_res1382;
                            };
                            var if_res1383 = M0.apply(M0.values, loop2605(results2596, num_extra2599));
                        }
                        var if_res1384 = if_res1383;
                    }
                    return if_res1384;
                }));
            });
            var cl1367 = $rjs_core.attachProcedureArity(function(...other26081385) {
                var other2608 = $rjs_core.Pair.listFromArray(other26081385);
                return M0.error($rjs_core.UString.make("shouldn't get here"));
            });
            var if_res1386 = $rjs_core.attachProcedureArity(function() {
                var fixed_lam1368 = {} [arguments.length];
                if (fixed_lam1368 !== undefined) {
                    return fixed_lam1368.apply(null, arguments);
                } else {
                    if (M0.__gt__eq_(cl1366.length, 1) !== false) {
                        var if_res1370 = cl1366.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            var if_res1369 = cl1367.apply(null, arguments);
                        } else {
                            var if_res1369 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                        var if_res1370 = if_res1369;
                    }
                    return if_res1370;
                }
            }, [M0.make_arity_at_least(0)]);
        }
        var kw_chaperone2574 = if_res1386;
        var wrap2611 = function(proc2612, n_proc2613) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.not(M0.eq_p(n_proc2613, proc2612)) !== false) {
                var if_res1387 = new_procedure_p(proc2612);
            } else {
                var if_res1387 = false;
            }
            if (if_res1387 !== false) {
                var v2614 = new_procedure_ref(proc2612);
                if (M0.exact_integer_p(v2614) !== false) {
                    var acc2615 = procedure_accessor_ref(proc2612);
                    var if_res1415 = M0.values(M0.__rjs_quoted__.chaperone_struct(proc2612, acc2615, function(self2616, sub_proc2617) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var let_result1388 = wrap2611(sub_proc2617, normalize_proc(sub_proc2617));
                        var f2618 = let_result1388.getAt(0);
                        var acc2619 = let_result1388.getAt(1);
                        return f2618;
                    }), acc2615);
                } else {
                    if (is_impersonator_p2557 !== false) {
                        var if_res1414 = M0.__rjs_quoted__.impersonate_struct;
                    } else {
                        var if_res1414 = M0.__rjs_quoted__.chaperone_struct;
                    }
                    if (okp_p(n_proc2613) !== false) {
                        var if_res1413 = chaperone_procedure_by_add_mark2571(proc2612, wrap_proc2562);
                    } else {
                        var if_res1413 = proc2612;
                    }
                    var new_kw_proc2620 = if_res1414(if_res1413, new_procedure_ref, function(self2621, proc2622) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (is_impersonator_p2557 !== false) {
                            var if_res1412 = new_impersonate_procedure;
                        } else {
                            var if_res1412 = new_chaperone_procedure;
                        }
                        if (self_arg_p2558 !== false) {
                            var cl1389 = $rjs_core.attachProcedureArity(function(proc_self2623, kws2624, kw_args2625, self2626, ...args26271394) {
                                if (arguments.length < 4) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var args2627 = $rjs_core.Pair.listFromArray(args26271394);
                                var len2628 = M0.length(args2627);
                                return M0.call_with_values(function() {
                                    if (arguments.length !== 0) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    return M0.apply(kw_chaperone2574, proc_self2623, kws2624, kw_args2625, args2627);
                                }, $rjs_core.attachProcedureArity(function(...results26291395) {
                                    var results2629 = $rjs_core.Pair.listFromArray(results26291395);
                                    var r_len2630 = M0.length(results2629);
                                    var list_take2631 = function(l2632, n2633) {
                                        if (arguments.length !== 2) {
                                            throw $rjs_core.racketContractError("arity mismatch");
                                        } else {}
                                        if (M0.zero_p(n2633) !== false) {
                                            var if_res1396 = M0.rnull;
                                        } else {
                                            var if_res1396 = M0.cons(M0.car(l2632), list_take2631(M0.cdr(l2632), M0.sub1(n2633)));
                                        }
                                        return if_res1396;
                                    };
                                    if (M0.null_p($rjs_core.Pair.makeList($rjs_core.PrimitiveSymbol.make("proc-self"))) !== false) {
                                        var if_res1397 = M0.__eq_(r_len2630, 2 + len2628);
                                    } else {
                                        var if_res1397 = false;
                                    }
                                    if (if_res1397 !== false) {
                                        var if_res1398 = M0.apply(M0.values, M0.cadr(results2629), self2626, M0.cddr(results2629));
                                    } else {
                                        var skip2634 = r_len2630 - len2628;
                                        var if_res1398 = M0.apply(M0.values, M0.append(list_take2631(results2629, skip2634 - 2), M0.list(M0.list_ref(results2629, M0.sub1(skip2634)), self2626), M0.__rjs_quoted__.list_tail(results2629, skip2634)));
                                    }
                                    return if_res1398;
                                }));
                            });
                            var cl1390 = $rjs_core.attachProcedureArity(function(...args26351399) {
                                var args2635 = $rjs_core.Pair.listFromArray(args26351399);
                                return M0.rvoid();
                            });
                            var if_res1411 = $rjs_core.attachProcedureArity(function() {
                                var fixed_lam1391 = {} [arguments.length];
                                if (fixed_lam1391 !== undefined) {
                                    return fixed_lam1391.apply(null, arguments);
                                } else {
                                    if (M0.__gt__eq_(cl1389.length, 1) !== false) {
                                        var if_res1393 = cl1389.apply(null, arguments);
                                    } else {
                                        if (true !== false) {
                                            var if_res1392 = cl1390.apply(null, arguments);
                                        } else {
                                            var if_res1392 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                                        }
                                        var if_res1393 = if_res1392;
                                    }
                                    return if_res1393;
                                }
                            }, [M0.make_arity_at_least(0)]);
                        } else {
                            var cl1400 = $rjs_core.attachProcedureArity(function(kws2636, kw_args2637, self2638, ...args26391405) {
                                if (arguments.length < 3) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var args2639 = $rjs_core.Pair.listFromArray(args26391405);
                                var len2640 = M0.length(args2639);
                                return M0.call_with_values(function() {
                                    if (arguments.length !== 0) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    return M0.apply(kw_chaperone2574, kws2636, kw_args2637, args2639);
                                }, $rjs_core.attachProcedureArity(function(...results26411406) {
                                    var results2641 = $rjs_core.Pair.listFromArray(results26411406);
                                    var r_len2642 = M0.length(results2641);
                                    var list_take2643 = function(l2644, n2645) {
                                        if (arguments.length !== 2) {
                                            throw $rjs_core.racketContractError("arity mismatch");
                                        } else {}
                                        if (M0.zero_p(n2645) !== false) {
                                            var if_res1407 = M0.rnull;
                                        } else {
                                            var if_res1407 = M0.cons(M0.car(l2644), list_take2643(M0.cdr(l2644), M0.sub1(n2645)));
                                        }
                                        return if_res1407;
                                    };
                                    if (M0.null_p($rjs_core.Pair.EMPTY) !== false) {
                                        var if_res1408 = M0.__eq_(r_len2642, 2 + len2640);
                                    } else {
                                        var if_res1408 = false;
                                    }
                                    if (if_res1408 !== false) {
                                        var if_res1409 = M0.apply(M0.values, M0.cadr(results2641), self2638, M0.cddr(results2641));
                                    } else {
                                        var skip2646 = r_len2642 - len2640;
                                        var if_res1409 = M0.apply(M0.values, M0.append(list_take2643(results2641, skip2646 - 2), M0.list(M0.list_ref(results2641, M0.sub1(skip2646)), self2638), M0.__rjs_quoted__.list_tail(results2641, skip2646)));
                                    }
                                    return if_res1409;
                                }));
                            });
                            var cl1401 = $rjs_core.attachProcedureArity(function(...args26471410) {
                                var args2647 = $rjs_core.Pair.listFromArray(args26471410);
                                return M0.rvoid();
                            });
                            var if_res1411 = $rjs_core.attachProcedureArity(function() {
                                var fixed_lam1402 = {} [arguments.length];
                                if (fixed_lam1402 !== undefined) {
                                    return fixed_lam1402.apply(null, arguments);
                                } else {
                                    if (M0.__gt__eq_(cl1400.length, 1) !== false) {
                                        var if_res1404 = cl1400.apply(null, arguments);
                                    } else {
                                        if (true !== false) {
                                            var if_res1403 = cl1401.apply(null, arguments);
                                        } else {
                                            var if_res1403 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                                        }
                                        var if_res1404 = if_res1403;
                                    }
                                    return if_res1404;
                                }
                            }, [M0.make_arity_at_least(0)]);
                        }
                        return if_res1412(proc2622, make_keyword_procedure(if_res1411));
                    });
                    var if_res1415 = M0.values(new_kw_proc2620, new_procedure_ref);
                }
                var if_res1428 = if_res1415;
            } else {
                if (okp_p(n_proc2613) !== false) {
                    if (is_impersonator_p2557 !== false) {
                        if (okm_p(n_proc2613) !== false) {
                            var if_res1416 = make_optional_keyword_method_impersonator;
                        } else {
                            var if_res1416 = make_optional_keyword_procedure_impersonator;
                        }
                        var if_res1417 = if_res1416(keyword_procedure_checker(n_proc2613), chaperone_procedure_by_add_mark2571(keyword_procedure_proc(n_proc2613), kw_chaperone2574), keyword_procedure_required(n_proc2613), keyword_procedure_allowed(n_proc2613), chaperone_procedure_by_add_mark2571(okp_ref(n_proc2613, 0), okp_ref(n_wrap_proc2565, 0)), n_proc2613);
                    } else {
                        var if_res1417 = M0.__rjs_quoted__.chaperone_struct(proc2612, keyword_procedure_proc, function(self2648, proc2649) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return chaperone_procedure_by_add_mark2571(proc2649, kw_chaperone2574);
                        }, M0.make_struct_field_accessor(okp_ref, 0), function(self2650, proc2651) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return chaperone_procedure_by_add_mark2571(proc2651, okp_ref(n_wrap_proc2565, 0));
                        });
                    }
                    var if_res1427 = M0.values(if_res1417, keyword_procedure_proc);
                } else {
                    if (is_impersonator_p2557 !== false) {
                        var raw_name_plus_fail2652 = keyword_procedure_name_plus_fail(proc2612);
                        if (M0.vector_p(raw_name_plus_fail2652) !== false) {
                            var if_res1418 = raw_name_plus_fail2652;
                        } else {
                            var if_res1418 = raw_name_plus_fail2652(proc2612);
                        }
                        var name_plus_fail2653 = if_res1418;
                        var name2654 = M0.vector_ref(name_plus_fail2653, 0);
                        var req_kw2655 = keyword_procedure_required(proc2612);
                        if (keyword_method_p(n_proc2613) !== false) {
                            var if_res1425 = make_required_keyword_method_impersonator_by_arity_error;
                        } else {
                            var if_res1425 = make_required_keyword_procedure_impersonator_by_arity_error;
                        }
                        var temp1424 = keyword_procedure_checker(n_proc2613);
                        var temp1423 = chaperone_procedure_by_add_mark2571(keyword_procedure_proc(n_proc2613), kw_chaperone2574);
                        var temp1422 = keyword_procedure_required(n_proc2613);
                        var temp1421 = keyword_procedure_allowed(n_proc2613);
                        if (M0.vector_p(raw_name_plus_fail2652) !== false) {
                            var if_res1420 = M0.__rjs_quoted__.procedure_reduce_arity_mask($rjs_core.attachProcedureArity(function(...args26561419) {
                                var args2656 = $rjs_core.Pair.listFromArray(args26561419);
                                return raise_missing_kw(name2654, req_kw2655);
                            }), M0.arithmetic_shift(M0.procedure_arity_mask(M0.vector_ref(name_plus_fail2653, 2)), -1));
                        } else {
                            var if_res1420 = M0.vector_ref(name_plus_fail2653, 2);
                        }
                        var if_res1426 = if_res1425(temp1424, temp1423, temp1422, temp1421, n_proc2613, if_res1420, M0.vector_ref(name_plus_fail2653, 0), M0.vector_ref(name_plus_fail2653, 1));
                    } else {
                        var if_res1426 = M0.__rjs_quoted__.chaperone_struct(n_proc2613, keyword_procedure_proc, function(self2657, proc2658) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return chaperone_procedure_by_add_mark2571(proc2658, kw_chaperone2574);
                        });
                    }
                    var if_res1427 = M0.values(if_res1426, keyword_procedure_proc);
                }
                var if_res1428 = if_res1427;
            }
            return if_res1428;
        };
        var let_result1429 = wrap2611(proc2561, n_proc2564);
        var new_proc2609 = let_result1429.getAt(0);
        var chap_accessor2610 = let_result1429.getAt(1);
        if (M0.null_p(props2563) !== false) {
            var if_res1430 = new_proc2609;
        } else {
            var if_res1430 = M0.apply(M0.__rjs_quoted__.chaperone_struct, new_proc2609, chap_accessor2610, false, props2563);
        }
        var if_res1431 = if_res1430;
    }
    return if_res1431;
};
var do_unsafe_chaperone_procedure = function(unsafe_chaperone_procedure2659, name2660, proc2661, wrap_proc2662, props2663) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_proc2664 = normalize_proc(proc2661);
    var n_wrap_proc2665 = normalize_proc(wrap_proc2662);
    var or_part2666 = M0.not(keyword_procedure_p(n_proc2664));
    if (or_part2666 !== false) {
        var if_res1433 = or_part2666;
    } else {
        var or_part2667 = M0.not(M0.procedure_p(wrap_proc2662));
        if (or_part2667 !== false) {
            var if_res1432 = or_part2667;
        } else {
            var if_res1432 = bad_props_p(props2663);
        }
        var if_res1433 = if_res1432;
    }
    if (if_res1433 !== false) {
        var if_res1434 = M0.apply(unsafe_chaperone_procedure2659, proc2661, wrap_proc2662, props2663);
    } else {
        chaperone_arity_match_checking(false, name2660, proc2661, wrap_proc2662, props2663);
        var if_res1434 = M0.apply(unsafe_chaperone_procedure2659, proc2661, wrap_proc2662, props2663);
    }
    return if_res1434;
};
var bad_props_p = function(props2668) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2669 = function(props2670) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(props2670) !== false) {
            var if_res1437 = false;
        } else {
            if (M0.__rjs_quoted__.impersonator_property_p(M0.car(props2670)) !== false) {
                var props2671 = M0.cdr(props2670);
                var or_part2672 = M0.null_p(props2671);
                if (or_part2672 !== false) {
                    var if_res1435 = or_part2672;
                } else {
                    var if_res1435 = loop2669(M0.cdr(props2671));
                }
                var if_res1436 = if_res1435;
            } else {
                var if_res1436 = true;
            }
            var if_res1437 = if_res1436;
        }
        return if_res1437;
    };
    return loop2669(props2668);
};
var chaperone_arity_match_checking = function(self_arg_p2673, name2674, proc2675, wrap_proc2676, props2677) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var a2678 = M0.procedure_arity(proc2675);
    var b2679 = M0.procedure_arity(wrap_proc2676);
    if (self_arg_p2673 !== false) {
        var if_res1438 = 1;
    } else {
        var if_res1438 = 0;
    }
    var d2680 = if_res1438;
    var let_result1439 = procedure_keywords(proc2675);
    var a_req2681 = let_result1439.getAt(0);
    var a_allow2682 = let_result1439.getAt(1);
    var let_result1440 = procedure_keywords(wrap_proc2676);
    var b_req2683 = let_result1440.getAt(0);
    var b_allow2684 = let_result1440.getAt(1);
    var includes_p2685 = function(a2686, b2687) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.number_p(b2687) !== false) {
            if (M0.number_p(a2686) !== false) {
                var if_res1442 = M0.__eq_(b2687, a2686 + d2680);
            } else {
                if (M0.arity_at_least_p(a2686) !== false) {
                    var if_res1441 = M0.__gt__eq_(b2687, M0.arity_at_least_value(a2686) + d2680);
                } else {
                    var if_res1441 = M0.ormap(function(a2688) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return includes_p2685(a2688, b2687);
                    }, a2686);
                }
                var if_res1442 = if_res1441;
            }
            var if_res1446 = if_res1442;
        } else {
            if (M0.arity_at_least_p(b2687) !== false) {
                if (M0.number_p(a2686) !== false) {
                    var if_res1444 = false;
                } else {
                    if (M0.arity_at_least_p(a2686) !== false) {
                        var if_res1443 = M0.__gt__eq_(M0.arity_at_least_value(b2687), M0.arity_at_least_value(a2686) + d2680);
                    } else {
                        var if_res1443 = M0.ormap(function(a2689) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return includes_p2685(b2687, a2689);
                        }, a2686);
                    }
                    var if_res1444 = if_res1443;
                }
                var if_res1445 = if_res1444;
            } else {
                var if_res1445 = M0.andmap(function(b2690) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return includes_p2685(a2686, b2690);
                }, b2687);
            }
            var if_res1446 = if_res1445;
        }
        return if_res1446;
    };
    if (includes_p2685(b2679, a2678) !== false) {
        var if_res1447 = M0.rvoid();
    } else {
        var if_res1447 = M0.apply(M0.__rjs_quoted__.chaperone_procedure, proc2675, wrap_proc2676, props2677);
    }
    if_res1447;
    if (subset_p(b_req2683, a_req2681) !== false) {
        var if_res1448 = M0.rvoid();
    } else {
        var if_res1448 = M0.__rjs_quoted__.raise_arguments_error_times_(name2674, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrapper procedure requires more keywords than original procedure"), $rjs_core.UString.make("wrapper procedure"), wrap_proc2676, $rjs_core.UString.make("original procedure"), proc2675);
    }
    if_res1448;
    var or_part2691 = M0.not(b_allow2684);
    if (or_part2691 !== false) {
        var if_res1450 = or_part2691;
    } else {
        if (a_allow2682 !== false) {
            var if_res1449 = subset_p(a_allow2682, b_allow2684);
        } else {
            var if_res1449 = false;
        }
        var if_res1450 = if_res1449;
    }
    if (if_res1450 !== false) {
        var if_res1451 = M0.rvoid();
    } else {
        var if_res1451 = M0.__rjs_quoted__.raise_arguments_error_times_(name2674, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrapper procedure does not accept all keywords of original procedure"), $rjs_core.UString.make("wrapper procedure"), wrap_proc2676, $rjs_core.UString.make("original procedure"), proc2675);
    }
    if_res1451;
    return M0.rvoid();
};
var normalize_proc = function(proc2692) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(proc2692) !== false) {
        var if_res1459 = proc2692;
    } else {
        if (new_procedure_p(proc2692) !== false) {
            var let_result1452 = procedure_keywords(proc2692);
            var req_kws2693 = let_result1452.getAt(0);
            var allowed_kws2694 = let_result1452.getAt(1);
            if (M0.null_p(allowed_kws2694) !== false) {
                var if_res1457 = proc2692;
            } else {
                var if_res1457 = make_optional_keyword_procedure(function(given_kws2695, given_argc2696) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.procedure_arity_includes_p(proc2692, given_argc2696 - 2, true) !== false) {
                        var or_part2697 = M0.not(allowed_kws2694);
                        if (or_part2697 !== false) {
                            var if_res1454 = or_part2697;
                        } else {
                            var if_res1454 = subset_p(given_kws2695, allowed_kws2694);
                        }
                        if (if_res1454 !== false) {
                            var if_res1455 = subset_p(req_kws2693, given_kws2695);
                        } else {
                            var if_res1455 = false;
                        }
                        var if_res1456 = if_res1455;
                    } else {
                        var if_res1456 = false;
                    }
                    return if_res1456;
                }, $rjs_core.attachProcedureArity(function(kws2698, kw_args2699, ...vals27001453) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var vals2700 = $rjs_core.Pair.listFromArray(vals27001453);
                    return keyword_apply(proc2692, kws2698, kw_args2699, vals2700);
                }), req_kws2693, allowed_kws2694, proc2692);
            }
            var if_res1458 = if_res1457;
        } else {
            var if_res1458 = proc2692;
        }
        var if_res1459 = if_res1458;
    }
    return if_res1459;
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