import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/unsafe.rkt.js";
var let_result533 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("keyword-impersonator"));
var prop_keyword_impersonator = let_result533.getAt(0);
var keyword_impersonator_p = let_result533.getAt(1);
var keyword_impersonator_ref = let_result533.getAt(2);
var keyword_procedure_impersonator_of = function(v1269) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_impersonator_p(v1269) !== false) {
        var if_res534 = keyword_impersonator_ref(v1269)(v1269);
    } else {
        var if_res534 = false;
    }
    return if_res534;
};
var let_result535 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("keyword-procedure"), false, 4, 0, false, M0.list(M0.cons(M0.prop_checked_procedure, true), M0.cons(M0.prop_impersonator_of, keyword_procedure_impersonator_of)), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2, 3));
var struct_keyword_procedure = let_result535.getAt(0);
var mk_kw_proc = let_result535.getAt(1);
var keyword_procedure_p = let_result535.getAt(2);
var keyword_procedure_ref = let_result535.getAt(3);
var keyword_procedure_set_bang_ = let_result535.getAt(4);
var keyword_procedure_checker = M0.make_struct_field_accessor(keyword_procedure_ref, 0);
var keyword_procedure_proc = M0.make_struct_field_accessor(keyword_procedure_ref, 1);
var keyword_procedure_required = M0.make_struct_field_accessor(keyword_procedure_ref, 2);
var keyword_procedure_allowed = M0.make_struct_field_accessor(keyword_procedure_ref, 3);
var let_result536 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 0, 0, false, M0.list(M0.cons(M0.prop_method_arity_error, true)));
var struct_keyword_method = let_result536.getAt(0);
var make_km = let_result536.getAt(1);
var keyword_method_p = let_result536.getAt(2);
var km_ref = let_result536.getAt(3);
var km_set_bang_ = let_result536.getAt(4);
var generate_arity_string = function(proc1270) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var let_result537 = procedure_keywords(proc1270);
    var req1271 = let_result537.getAt(0);
    var allowed1272 = let_result537.getAt(1);
    var a1273 = M0.procedure_arity(proc1270);
    var keywords_desc1274 = function(opt1276, req1277) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var temp543 = $rjs_core.UString.make("~a with keyword~a~a");
        if (M0.null_p(M0.cdr(req1277)) !== false) {
            var if_res542 = M0.format($rjs_core.UString.make("an ~aargument"), opt1276);
        } else {
            var if_res542 = M0.format($rjs_core.UString.make("~aarguments"), opt1276);
        }
        if (M0.null_p(M0.cdr(req1277)) !== false) {
            var if_res541 = $rjs_core.UString.make("");
        } else {
            var if_res541 = $rjs_core.UString.make("s");
        }
        var tmp1278 = M0.length(req1277);
        if (M0.equal_p(tmp1278, 1) !== false) {
            var if_res540 = M0.format($rjs_core.UString.make(" ~a"), M0.car(req1277));
        } else {
            if (M0.equal_p(tmp1278, 2) !== false) {
                var if_res539 = M0.format($rjs_core.UString.make(" ~a and ~a"), M0.car(req1277), M0.cadr(req1277));
            } else {
                var loop1279 = function(req1280) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.null_p(M0.cdr(req1280)) !== false) {
                        var if_res538 = M0.format($rjs_core.UString.make(" and ~a"), M0.car(req1280));
                    } else {
                        var if_res538 = M0.format($rjs_core.UString.make(" ~a,~a"), M0.car(req1280), loop1279(M0.cdr(req1280)));
                    }
                    return if_res538;
                };
                var if_res539 = loop1279(req1277);
            }
            var if_res540 = if_res539;
        }
        return M0.format(temp543, if_res542, if_res541, if_res540);
    };
    var method_adjust1275 = function(a1281) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var or_part1282 = okm_p(proc1270);
        if (or_part1282 !== false) {
            var if_res544 = or_part1282;
        } else {
            var if_res544 = keyword_method_p(proc1270);
        }
        if (if_res544 !== false) {
            if (M0.zero_p(a1281) !== false) {
                var if_res545 = 0;
            } else {
                var if_res545 = M0.sub1(a1281);
            }
            var if_res546 = if_res545;
        } else {
            var if_res546 = a1281;
        }
        return if_res546;
    };
    if (M0.number_p(a1273) !== false) {
        var a1283 = method_adjust1275(a1273);
        var if_res553 = M0.format($rjs_core.UString.make("~a"), a1283);
    } else {
        if (M0.arity_at_least_p(a1273) !== false) {
            var a1284 = method_adjust1275(M0.arity_at_least_value(a1273));
            var if_res552 = M0.format($rjs_core.UString.make("at least ~a"), a1284);
        } else {
            var if_res552 = $rjs_core.UString.make("a different number");
        }
        var if_res553 = if_res552;
    }
    if (M0.null_p(req1271) !== false) {
        var if_res551 = $rjs_core.UString.make("");
    } else {
        var if_res551 = M0.format($rjs_core.UString.make(" plus ~a"), keywords_desc1274($rjs_core.UString.make(""), req1271));
    }
    if (allowed1272 !== false) {
        var loop1286 = function(req1287, allowed1288) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.null_p(req1287) !== false) {
                var if_res548 = allowed1288;
            } else {
                if (M0.eq_p(M0.car(req1287), M0.car(allowed1288)) !== false) {
                    var if_res547 = loop1286(M0.cdr(req1287), M0.cdr(allowed1288));
                } else {
                    var if_res547 = M0.cons(M0.car(allowed1288), loop1286(req1287, M0.cdr(allowed1288)));
                }
                var if_res548 = if_res547;
            }
            return if_res548;
        };
        var others1285 = loop1286(req1271, allowed1272);
        if (M0.null_p(others1285) !== false) {
            var if_res549 = $rjs_core.UString.make("");
        } else {
            var if_res549 = M0.format($rjs_core.UString.make(" plus ~a"), keywords_desc1274($rjs_core.UString.make("optional "), others1285));
        }
        var if_res550 = if_res549;
    } else {
        var if_res550 = $rjs_core.UString.make(" plus arbitrary keyword arguments");
    }
    return M0.string_append(if_res553, if_res551, if_res550);
};
var let_result554 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 1, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string)), M0.current_inspector(), 0);
var struct_okp = let_result554.getAt(0);
var make_optional_keyword_procedure = let_result554.getAt(1);
var okp_p = let_result554.getAt(2);
var okp_ref = let_result554.getAt(3);
var okp_set_bang_ = let_result554.getAt(4);
var let_result555 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 0, 0, false, M0.list(M0.cons(M0.prop_method_arity_error, true)));
var struct_okm = let_result555.getAt(0);
var make_optional_keyword_method = let_result555.getAt(1);
var okm_p = let_result555.getAt(2);
var okm_ref = let_result555.getAt(3);
var okm_set_bang_ = let_result555.getAt(4);
var let_result556 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("named-keyword-procedure"));
var prop_named_keyword_procedure = let_result556.getAt(0);
var named_keyword_procedure_p = let_result556.getAt(1);
var keyword_procedure_name_plus_fail = let_result556.getAt(2);
var keyword_procedure_name_plus_fail_times_ = function(p1289) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var v1290 = keyword_procedure_name_plus_fail(p1289);
    if (M0.vector_p(v1290) !== false) {
        var if_res557 = v1290;
    } else {
        var if_res557 = v1290(p1289);
    }
    return if_res557;
};
var let_result559 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("procedure"), function(v1291, info_l1292) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.exact_integer_p(v1291) !== false) {
        var if_res558 = M0.make_struct_field_accessor(M0.list_ref(info_l1292, 3), v1291);
    } else {
        var if_res558 = false;
    }
    return if_res558;
});
var prop_procedure_accessor = let_result559.getAt(0);
var procedure_accessor_p = let_result559.getAt(1);
var procedure_accessor_ref = let_result559.getAt(2);
var let_result560 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("procedure"), false, M0.list(M0.cons(M0.prop_procedure, M0.values), M0.cons(prop_procedure_accessor, M0.values)), true);
var new_prop_procedure = let_result560.getAt(0);
var new_procedure_p = let_result560.getAt(1);
var new_procedure_ref = let_result560.getAt(2);
var let_result561 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v1293) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kpp_ref(v1293, 0);
})));
var struct_keyword_procedure_impersonator = let_result561.getAt(0);
var make_kpp = let_result561.getAt(1);
var keyword_procedure_impersonator_p = let_result561.getAt(2);
var kpp_ref = let_result561.getAt(3);
var kpp_set_bang_ = let_result561.getAt(4);
var let_result562 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v1294) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kmp_ref(v1294, 0);
})));
var struct_keyword_method_impersonator = let_result562.getAt(0);
var make_kmp = let_result562.getAt(1);
var keyword_method_impersonator_p = let_result562.getAt(2);
var kmp_ref = let_result562.getAt(3);
var kmp_set_bang_ = let_result562.getAt(4);
var let_result563 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v1295) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return okpp_ref(v1295, 0);
})));
var struct_okpp = let_result563.getAt(0);
var make_optional_keyword_procedure_impersonator = let_result563.getAt(1);
var okpp_p = let_result563.getAt(2);
var okpp_ref = let_result563.getAt(3);
var okpp_set_bang_ = let_result563.getAt(4);
var let_result564 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v1296) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return okmp_ref(v1296, 0);
})));
var struct_okmp = let_result564.getAt(0);
var make_optional_keyword_method_impersonator = let_result564.getAt(1);
var okmp_p = let_result564.getAt(2);
var okmp_ref = let_result564.getAt(3);
var okmp_set_bang_ = let_result564.getAt(4);
var let_result565 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_procedure_by_arity_error = let_result565.getAt(0);
var make_kp_by_ae = let_result565.getAt(1);
var kp_by_ae_p = let_result565.getAt(2);
var kp_by_ae_ref = let_result565.getAt(3);
var kp_by_ae_set_bang_ = let_result565.getAt(4);
var let_result566 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_method_by_arity_error = let_result566.getAt(0);
var make_km_by_ae = let_result566.getAt(1);
var km_by_ae_p = let_result566.getAt(2);
var km_by_ae_ref = let_result566.getAt(3);
var km_by_ae_set_bang_ = let_result566.getAt(4);
var let_result567 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_impersonator, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_procedure_impersonator_by_arity_error = let_result567.getAt(0);
var make_kpi_by_ae = let_result567.getAt(1);
var kpi_by_ae_p = let_result567.getAt(2);
var kpi_by_ae_ref = let_result567.getAt(3);
var kpi_by_ae_set_bang_ = let_result567.getAt(4);
var let_result568 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_impersonator, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_method_impersonator_by_arity_error = let_result568.getAt(0);
var make_kmi_by_ae = let_result568.getAt(1);
var kmi_by_ae_p = let_result568.getAt(2);
var kmi_by_ae_ref = let_result568.getAt(3);
var kmi_by_ae_set_bang_ = let_result568.getAt(4);
var let_result569 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r1297) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref(r1297, 1), rkp_by_ae_ref(r1297, 2), rkp_by_ae_ref(r1297, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae = let_result569.getAt(0);
var make_required_keyword_procedure_by_arity_error = let_result569.getAt(1);
var rkp_by_ae_p = let_result569.getAt(2);
var rkp_by_ae_ref = let_result569.getAt(3);
var rkp_by_ae_set_bang_ = let_result569.getAt(4);
var let_result570 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r1298) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref1259(r1298, 1), rkp_by_ae_ref1259(r1298, 2), rkp_by_ae_ref1259(r1298, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae1257 = let_result570.getAt(0);
var make_required_keyword_method_by_arity_error = let_result570.getAt(1);
var rkp_by_ae_p1258 = let_result570.getAt(2);
var rkp_by_ae_ref1259 = let_result570.getAt(3);
var rkp_by_ae_set_bang_1260 = let_result570.getAt(4);
var let_result571 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_impersonator_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r1299) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref1263(r1299, 1), rkp_by_ae_ref1263(r1299, 2), rkp_by_ae_ref1263(r1299, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae1261 = let_result571.getAt(0);
var make_required_keyword_procedure_impersonator_by_arity_error = let_result571.getAt(1);
var rkp_by_ae_p1262 = let_result571.getAt(2);
var rkp_by_ae_ref1263 = let_result571.getAt(3);
var rkp_by_ae_set_bang_1264 = let_result571.getAt(4);
var let_result572 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_impersonator_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r1300) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref1267(r1300, 1), rkp_by_ae_ref1267(r1300, 2), rkp_by_ae_ref1267(r1300, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae1265 = let_result572.getAt(0);
var make_required_keyword_method_impersonator_by_arity_error = let_result572.getAt(1);
var rkp_by_ae_p1266 = let_result572.getAt(2);
var rkp_by_ae_ref1267 = let_result572.getAt(3);
var rkp_by_ae_set_bang_1268 = let_result572.getAt(4);
var cl573 = function(proc1301) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var proc_name1302 = M0.object_name(proc1301);
    if (M0.procedure_p(proc1301) !== false) {
        var if_res576 = M0.__rjs_quoted__.procedure_realm(proc1301);
    } else {
        var if_res576 = false;
    }
    var proc_realm1303 = if_res576;
    var plain_proc1304 = $rjs_core.attachProcedureArity(function(...args1305577) {
        var args1305 = $rjs_core.Pair.listFromArray(args1305577);
        return M0.apply(proc1301, M0.rnull, M0.rnull, args1305);
    });
    if (M0.procedure_p(proc1301) !== false) {
        var if_res578 = M0.arithmetic_shift(M0.procedure_arity_mask(proc1301), -2);
    } else {
        var if_res578 = false;
    }
    var mask1306 = if_res578;
    if (M0.procedure_p(plain_proc1304) !== false) {
        if (M0.exact_integer_p(mask1306) !== false) {
            if (M0.symbol_p(proc_name1302) !== false) {
                if (M0.symbol_p(proc_realm1303) !== false) {
                    var if_res579 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc1304, mask1306, proc_name1302, proc_realm1303);
                } else {
                    var if_res579 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc1304, mask1306, false, $rjs_core.PrimitiveSymbol.make("ignored"));
                }
                var if_res580 = if_res579;
            } else {
                var if_res580 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc1304, mask1306, false, $rjs_core.PrimitiveSymbol.make("ignored"));
            }
            var if_res581 = if_res580;
        } else {
            var if_res581 = plain_proc1304;
        }
        var if_res582 = if_res581;
    } else {
        var if_res582 = plain_proc1304;
    }
    return make_keyword_procedure(proc1301, if_res582);
};
var cl574 = function(proc1307, plain_proc1308) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.procedure_p(proc1307) !== false) {
        var if_res583 = M0.procedure_arity_mask(proc1307);
    } else {
        var if_res583 = false;
    }
    return make_optional_keyword_procedure(make_keyword_checker(M0.rnull, false, if_res583), proc1307, M0.rnull, false, plain_proc1308);
};
var make_keyword_procedure = $rjs_core.attachProcedureArity(function() {
    var fixed_lam575 = {
        '1': cl573,
        '2': cl574
    } [arguments.length];
    if (fixed_lam575 !== undefined) {
        return fixed_lam575.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var keyword_apply = $rjs_core.attachProcedureArity(function(proc1309, kws1310, kw_vals1311, normal_args1312, ...normal_argss1313584) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var normal_argss1313 = $rjs_core.Pair.listFromArray(normal_argss1313584);
    var type_error1314 = function(what1315, which1316) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return M0.apply(M0.raise_argument_error, $rjs_core.PrimitiveSymbol.make("keyword-apply"), what1315, which1316, proc1309, kws1310, kw_vals1311, normal_args1312, normal_argss1313);
    };
    if (M0.procedure_p(proc1309) !== false) {
        var if_res585 = M0.rvoid();
    } else {
        var if_res585 = type_error1314($rjs_core.UString.make("procedure?"), 0);
    }
    if_res585;
    var loop1317 = function(ks1318) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(ks1318) !== false) {
            var if_res592 = M0.rvoid();
        } else {
            var or_part1319 = M0.not(M0.pair_p(ks1318));
            if (or_part1319 !== false) {
                var if_res586 = or_part1319;
            } else {
                var if_res586 = M0.not(M0.keyword_p(M0.car(ks1318)));
            }
            if (if_res586 !== false) {
                var if_res591 = type_error1314($rjs_core.UString.make("(listof keyword?)"), 1);
            } else {
                if (M0.null_p(M0.cdr(ks1318)) !== false) {
                    var if_res590 = M0.rvoid();
                } else {
                    var or_part1320 = M0.not(M0.pair_p(M0.cdr(ks1318)));
                    if (or_part1320 !== false) {
                        var if_res587 = or_part1320;
                    } else {
                        var if_res587 = M0.not(M0.keyword_p(M0.cadr(ks1318)));
                    }
                    if (if_res587 !== false) {
                        var if_res589 = loop1317(M0.cdr(ks1318));
                    } else {
                        if (M0.keyword_lt__p(M0.car(ks1318), M0.cadr(ks1318)) !== false) {
                            var if_res588 = loop1317(M0.cdr(ks1318));
                        } else {
                            var if_res588 = type_error1314($rjs_core.UString.make("(and/c (listof? keyword?) sorted? distinct?)"), 1);
                        }
                        var if_res589 = if_res588;
                    }
                    var if_res590 = if_res589;
                }
                var if_res591 = if_res590;
            }
            var if_res592 = if_res591;
        }
        return if_res592;
    };
    loop1317(kws1310);
    if (M0.list_p(kw_vals1311) !== false) {
        var if_res593 = M0.rvoid();
    } else {
        var if_res593 = type_error1314($rjs_core.UString.make("list?"), 2);
    }
    if_res593;
    if (M0.__eq_(M0.length(kws1310), M0.length(kw_vals1311)) !== false) {
        var if_res594 = M0.rvoid();
    } else {
        var if_res594 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword-apply"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("keyword list length does not match value list length"), $rjs_core.UString.make("keyword list length"), M0.length(kws1310), $rjs_core.UString.make("value list length"), M0.length(kw_vals1311), $rjs_core.UString.make("keyword list"), kws1310, $rjs_core.UString.make("value list"), kw_vals1311);
    }
    if_res594;
    var loop1322 = function(normal_argss1323, pos1324) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(M0.cdr(normal_argss1323)) !== false) {
            var l1325 = M0.car(normal_argss1323);
            if (M0.list_p(l1325) !== false) {
                var if_res595 = l1325;
            } else {
                var if_res595 = type_error1314($rjs_core.UString.make("list?"), pos1324);
            }
            var if_res596 = if_res595;
        } else {
            var if_res596 = M0.cons(M0.car(normal_argss1323), loop1322(M0.cdr(normal_argss1323), M0.add1(pos1324)));
        }
        return if_res596;
    };
    var normal_args1321 = loop1322(M0.cons(normal_args1312, normal_argss1313), 3);
    if (M0.null_p(kws1310) !== false) {
        var if_res597 = M0.apply(proc1309, normal_args1321);
    } else {
        var if_res597 = M0.apply(keyword_procedure_extract_by_method(kws1310, 2 + M0.length(normal_args1321), proc1309, 0), kws1310, kw_vals1311, normal_args1321);
    }
    return if_res597;
});
var procedure_keywords = function(p1326) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(p1326) !== false) {
        var if_res602 = M0.values(keyword_procedure_required(p1326), keyword_procedure_allowed(p1326));
    } else {
        if (M0.procedure_p(p1326) !== false) {
            if (new_procedure_p(p1326) !== false) {
                var v1327 = new_procedure_ref(p1326);
                if (M0.procedure_p(v1327) !== false) {
                    var if_res599 = procedure_keywords(v1327);
                } else {
                    var a1328 = procedure_accessor_ref(p1326);
                    if (a1328 !== false) {
                        var if_res598 = procedure_keywords(a1328(p1326));
                    } else {
                        var if_res598 = M0.values(M0.rnull, M0.rnull);
                    }
                    var if_res599 = if_res598;
                }
                var if_res600 = if_res599;
            } else {
                var if_res600 = M0.values(M0.rnull, M0.rnull);
            }
            var if_res601 = if_res600;
        } else {
            var if_res601 = M0.__rjs_quoted__.raise_argument_error_times_($rjs_core.PrimitiveSymbol.make("procedure-keywords"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure?"), p1326);
        }
        var if_res602 = if_res601;
    }
    return if_res602;
};
var extract_keyword_root = function(p1329) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(p1329) !== false) {
        var if_res606 = p1329;
    } else {
        if (M0.procedure_p(p1329) !== false) {
            var v1330 = new_procedure_ref(p1329, false);
            if (M0.procedure_p(v1330) !== false) {
                var if_res604 = extract_keyword_root(v1330);
            } else {
                var a1331 = procedure_accessor_ref(p1329, false);
                if (a1331 !== false) {
                    var if_res603 = extract_keyword_root(a1331(p1329));
                } else {
                    var if_res603 = false;
                }
                var if_res604 = if_res603;
            }
            var if_res605 = if_res604;
        } else {
            var if_res605 = false;
        }
        var if_res606 = if_res605;
    }
    return if_res606;
};
var missing_kw = $rjs_core.attachProcedureArity(function(proc1332, ...args1333607) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args1333 = $rjs_core.Pair.listFromArray(args1333607);
    return M0.apply(keyword_procedure_extract_by_method(M0.rnull, 0, proc1332, 0), M0.rnull, M0.rnull, args1333);
});
var raise_missing_kw = function(name1334, req_kws1335, args1336) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return raise_wrong_kws(name1334, true, true, false, M0.rnull, M0.rnull, req_kws1335, M0.rnull, args1336);
};
var check_kw_args = function(p1337, kws1338) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1339 = function(kws1340, required1341, allowed1342) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(kws1340) !== false) {
            if (M0.null_p(required1341) !== false) {
                var if_res608 = M0.values(false, false);
            } else {
                var if_res608 = M0.values(M0.car(required1341), false);
            }
            var if_res617 = if_res608;
        } else {
            if (M0.pair_p(required1341) !== false) {
                var if_res609 = M0.eq_p(M0.car(required1341), M0.car(kws1340));
            } else {
                var if_res609 = false;
            }
            if (if_res609 !== false) {
                var temp612 = M0.cdr(kws1340);
                var temp611 = M0.cdr(required1341);
                if (allowed1342 !== false) {
                    var if_res610 = M0.cdr(allowed1342);
                } else {
                    var if_res610 = false;
                }
                var if_res616 = loop1339(temp612, temp611, if_res610);
            } else {
                if (M0.not(allowed1342) !== false) {
                    var if_res615 = loop1339(M0.cdr(kws1340), required1341, false);
                } else {
                    if (M0.pair_p(allowed1342) !== false) {
                        if (M0.eq_p(M0.car(allowed1342), M0.car(kws1340)) !== false) {
                            var if_res613 = loop1339(M0.cdr(kws1340), required1341, M0.cdr(allowed1342));
                        } else {
                            var if_res613 = loop1339(kws1340, required1341, M0.cdr(allowed1342));
                        }
                        var if_res614 = if_res613;
                    } else {
                        var if_res614 = M0.values(false, M0.car(kws1340));
                    }
                    var if_res615 = if_res614;
                }
                var if_res616 = if_res615;
            }
            var if_res617 = if_res616;
        }
        return if_res617;
    };
    return loop1339(kws1338, keyword_procedure_required(p1337), keyword_procedure_allowed(p1337));
};
var make_keyword_checker = function(req_kws1343, allowed_kws1344, arity_mask1345) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.not(allowed_kws1344) !== false) {
        if (M0.null_p(req_kws1343) !== false) {
            var if_res620 = function(kws1346, a1347) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (true !== false) {
                    var if_res618 = M0.bitwise_bit_set_p(arity_mask1345, a1347);
                } else {
                    var if_res618 = false;
                }
                return if_res618;
            };
        } else {
            var if_res620 = function(kws1348, a1349) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (subset_p(req_kws1343, kws1348) !== false) {
                    var if_res619 = M0.bitwise_bit_set_p(arity_mask1345, a1349);
                } else {
                    var if_res619 = false;
                }
                return if_res619;
            };
        }
        var if_res633 = if_res620;
    } else {
        if (M0.null_p(allowed_kws1344) !== false) {
            var if_res632 = function(kws1350, a1351) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M0.null_p(kws1350) !== false) {
                    var if_res621 = M0.bitwise_bit_set_p(arity_mask1345, a1351);
                } else {
                    var if_res621 = false;
                }
                return if_res621;
            };
        } else {
            if (M0.null_p(req_kws1343) !== false) {
                var if_res631 = function(kws1352, a1353) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (subset_p(kws1352, allowed_kws1344) !== false) {
                        var if_res622 = M0.bitwise_bit_set_p(arity_mask1345, a1353);
                    } else {
                        var if_res622 = false;
                    }
                    return if_res622;
                };
            } else {
                if (M0.list_p(req_kws1343) !== false) {
                    if (M0.list_p(allowed_kws1344) !== false) {
                        var if_res623 = M0.eq_p(M0.length(req_kws1343), M0.length(allowed_kws1344));
                    } else {
                        var if_res623 = false;
                    }
                    var if_res624 = if_res623;
                } else {
                    var if_res624 = false;
                }
                if (if_res624 !== false) {
                    var if_res630 = function(kws1354, a1355) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var loop1356 = function(kws1357, req_kws1358) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            if (M0.null_p(req_kws1358) !== false) {
                                var if_res627 = M0.null_p(kws1357);
                            } else {
                                if (M0.null_p(kws1357) !== false) {
                                    var if_res626 = false;
                                } else {
                                    if (M0.eq_p(M0.car(kws1357), M0.car(req_kws1358)) !== false) {
                                        var if_res625 = loop1356(M0.cdr(kws1357), M0.cdr(req_kws1358));
                                    } else {
                                        var if_res625 = false;
                                    }
                                    var if_res626 = if_res625;
                                }
                                var if_res627 = if_res626;
                            }
                            return if_res627;
                        };
                        if (loop1356(kws1354, req_kws1343) !== false) {
                            var if_res628 = M0.bitwise_bit_set_p(arity_mask1345, a1355);
                        } else {
                            var if_res628 = false;
                        }
                        return if_res628;
                    };
                } else {
                    var if_res630 = function(kws1359, a1360) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (subsets_p(req_kws1343, kws1359, allowed_kws1344) !== false) {
                            var if_res629 = M0.bitwise_bit_set_p(arity_mask1345, a1360);
                        } else {
                            var if_res629 = false;
                        }
                        return if_res629;
                    };
                }
                var if_res631 = if_res630;
            }
            var if_res632 = if_res631;
        }
        var if_res633 = if_res632;
    }
    return if_res633;
};
var subset_p = function(l11361, l21362) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.null_p(l11361) !== false) {
        var if_res636 = true;
    } else {
        if (M0.null_p(l21362) !== false) {
            var if_res635 = false;
        } else {
            if (M0.eq_p(M0.car(l11361), M0.car(l21362)) !== false) {
                var if_res634 = subset_p(M0.cdr(l11361), M0.cdr(l21362));
            } else {
                var if_res634 = subset_p(l11361, M0.cdr(l21362));
            }
            var if_res635 = if_res634;
        }
        var if_res636 = if_res635;
    }
    return if_res636;
};
var subsets_p = function(l11363, l21364, l31365) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.null_p(l11363) !== false) {
        var if_res641 = subset_p(l21364, l31365);
    } else {
        if (M0.null_p(l21364) !== false) {
            var if_res640 = false;
        } else {
            if (M0.null_p(l31365) !== false) {
                var if_res639 = false;
            } else {
                var v21366 = M0.car(l21364);
                if (M0.eq_p(M0.car(l11363), v21366) !== false) {
                    var if_res638 = subsets_p(M0.cdr(l11363), M0.cdr(l21364), M0.cdr(l31365));
                } else {
                    if (M0.eq_p(v21366, M0.car(l31365)) !== false) {
                        var if_res637 = subsets_p(l11363, M0.cdr(l21364), M0.cdr(l31365));
                    } else {
                        var if_res637 = subsets_p(l11363, l21364, M0.cdr(l31365));
                    }
                    var if_res638 = if_res637;
                }
                var if_res639 = if_res638;
            }
            var if_res640 = if_res639;
        }
        var if_res641 = if_res640;
    }
    return if_res641;
};
var keyword_procedure_extract_by_method = function(kws1367, n1368, p1369, method_n1370) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(p1369) !== false) {
        var if_res642 = keyword_procedure_checker(p1369)(kws1367, n1368);
    } else {
        var if_res642 = false;
    }
    if (if_res642 !== false) {
        var if_res665 = keyword_procedure_proc(p1369);
    } else {
        if (M0.not(keyword_procedure_p(p1369)) !== false) {
            if (M0.procedure_p(p1369) !== false) {
                if (new_procedure_p(p1369) !== false) {
                    var a1373 = procedure_accessor_ref(p1369);
                    if (a1373 !== false) {
                        var if_res643 = a1373(p1369);
                    } else {
                        var if_res643 = false;
                    }
                    var if_res644 = if_res643;
                } else {
                    var if_res644 = false;
                }
                var or_part1372 = if_res644;
                if (or_part1372 !== false) {
                    var if_res647 = or_part1372;
                } else {
                    var or_part1374 = M0.procedure_extract_target(p1369);
                    if (or_part1374 !== false) {
                        var if_res646 = or_part1374;
                    } else {
                        if (new_procedure_p(p1369) !== false) {
                            var if_res645 = $rjs_core.PrimitiveSymbol.make("method");
                        } else {
                            var if_res645 = false;
                        }
                        var if_res646 = if_res645;
                    }
                    var if_res647 = if_res646;
                }
                var if_res648 = if_res647;
            } else {
                var if_res648 = false;
            }
            var if_res649 = if_res648;
        } else {
            var if_res649 = false;
        }
        var p21371 = if_res649;
        if (p21371 !== false) {
            if (M0.eq_p(p21371, $rjs_core.PrimitiveSymbol.make("method")) !== false) {
                var p31375 = keyword_procedure_extract_by_method(kws1367, M0.add1(n1368), new_procedure_ref(p1369), M0.add1(method_n1370));
                var if_res651 = $rjs_core.attachProcedureArity(function(kws1376, kw_args1377, ...args1378650) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var args1378 = $rjs_core.Pair.listFromArray(args1378650);
                    return M0.apply(p31375, kws1376, kw_args1377, M0.cons(p1369, args1378));
                });
            } else {
                var if_res651 = keyword_procedure_extract_by_method(kws1367, n1368, p21371, method_n1370);
            }
            var if_res664 = if_res651;
        } else {
            var if_res664 = $rjs_core.attachProcedureArity(function(kws1379, kw_args1380, ...args1381652) {
                if (arguments.length < 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var args1381 = $rjs_core.Pair.listFromArray(args1381652);
                if (keyword_procedure_p(p1369) !== false) {
                    var if_res653 = check_kw_args(p1369, kws1379);
                } else {
                    var if_res653 = M0.values(false, M0.car(kws1379));
                }
                var let_result654 = if_res653;
                var missing_kw1382 = let_result654.getAt(0);
                var extra_kw1383 = let_result654.getAt(1);
                var or_part1387 = keyword_method_p(p1369);
                if (or_part1387 !== false) {
                    var if_res655 = or_part1387;
                } else {
                    var if_res655 = okm_p(p1369);
                }
                if (if_res655 !== false) {
                    var if_res656 = 1;
                } else {
                    var if_res656 = 0;
                }
                var method_n1386 = method_n1370 + if_res656;
                if (M0.__gt__eq_(n1368, method_n1386) !== false) {
                    var if_res657 = n1368 - method_n1386;
                } else {
                    var if_res657 = n1368;
                }
                var n1384 = if_res657;
                var or_part1388 = keyword_procedure_p(p1369);
                if (or_part1388 !== false) {
                    var if_res659 = or_part1388;
                } else {
                    var or_part1389 = M0.procedure_p(p1369);
                    if (or_part1389 !== false) {
                        var if_res658 = or_part1389;
                    } else {
                        var if_res658 = M0.not(extra_kw1383);
                    }
                    var if_res659 = if_res658;
                }
                if (if_res659 !== false) {
                    if (named_keyword_procedure_p(p1369) !== false) {
                        var if_res660 = M0.vector_ref(keyword_procedure_name_plus_fail_times_(p1369), 0);
                    } else {
                        var if_res660 = false;
                    }
                    var or_part1390 = if_res660;
                    if (or_part1390 !== false) {
                        var if_res662 = or_part1390;
                    } else {
                        var or_part1391 = M0.object_name(p1369);
                        if (or_part1391 !== false) {
                            var if_res661 = or_part1391;
                        } else {
                            var if_res661 = p1369;
                        }
                        var if_res662 = if_res661;
                    }
                    var if_res663 = if_res662;
                } else {
                    var if_res663 = p1369;
                }
                var name_by_val1385 = if_res663;
                return raise_wrong_kws(name_by_val1385, keyword_procedure_p(p1369), M0.procedure_p(p1369), n1384, kws1379, kw_args1380, missing_kw1382, extra_kw1383, args1381);
            });
        }
        var if_res665 = if_res664;
    }
    return if_res665;
};
var raise_wrong_kws = function(name_by_val1392, kw_proc_p1393, proc_p1394, n1395, kws1396, kw_args1397, missing_kw1398, extra_kw1399, args1400) {
    if (arguments.length !== 9) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.null_p(args1400) !== false) {
        var if_res666 = M0.null_p(kws1396);
    } else {
        var if_res666 = false;
    }
    if (if_res666 !== false) {
        var if_res667 = $rjs_core.UString.make("");
    } else {
        var if_res667 = M0.apply(M0.string_append, $rjs_core.UString.make("\n  arguments...:"), M0.append(M0.map(function(v1402) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M0.format($rjs_core.UString.make("\n   ~e"), v1402);
        }, args1400), M0.map(function(kw1403, kw_arg1404) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M0.format($rjs_core.UString.make("\n   ~a ~e"), kw1403, kw_arg1404);
        }, kws1396, kw_args1397)));
    }
    var args_str1401 = if_res667;
    var application_message1405 = function(str1406) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return M0.__rjs_quoted__.error_message__gt_adjusted_string($rjs_core.PrimitiveSymbol.make("application"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), str1406, $rjs_core.PrimitiveSymbol.make("racket/primitive"));
    };
    var or_part1407 = extra_kw1399;
    if (or_part1407 !== false) {
        var if_res674 = or_part1407;
    } else {
        var if_res674 = missing_kw1398;
    }
    if (if_res674 !== false) {
        var if_res675 = M0.__rjs_quoted__.exn_fail_contract;
    } else {
        var if_res675 = M0.__rjs_quoted__.exn_fail_contract_arity;
    }
    if (extra_kw1399 !== false) {
        if (kw_proc_p1393 !== false) {
            var if_res669 = application_message1405(M0.format(M0.string_append($rjs_core.UString.make("procedure does not expect an argument with given keyword\n"), $rjs_core.UString.make("  procedure: ~a\n"), $rjs_core.UString.make("  given keyword: ~a"), $rjs_core.UString.make("~a")), name_by_val1392, extra_kw1399, args_str1401));
        } else {
            if (proc_p1394 !== false) {
                var if_res668 = application_message1405(M0.format(M0.string_append($rjs_core.UString.make("procedure does not accept keyword arguments\n"), $rjs_core.UString.make("  procedure: ~a"), $rjs_core.UString.make("~a")), name_by_val1392, args_str1401));
            } else {
                var if_res668 = application_message1405(M0.format(M0.string_append($rjs_core.UString.make("not a procedure;\n"), $rjs_core.UString.make(" expected a procedure that can be applied to arguments\n"), $rjs_core.UString.make("  given: ~e"), $rjs_core.UString.make("~a")), name_by_val1392, args_str1401));
            }
            var if_res669 = if_res668;
        }
        var if_res673 = if_res669;
    } else {
        if (missing_kw1398 !== false) {
            var if_res672 = application_message1405(M0.format(M0.string_append($rjs_core.UString.make("required keyword argument not supplied\n"), $rjs_core.UString.make("  procedure: ~a\n"), $rjs_core.UString.make("  required keyword: ~a"), $rjs_core.UString.make("~a")), name_by_val1392, missing_kw1398, args_str1401));
        } else {
            var temp671 = M0.string_append($rjs_core.UString.make("no case matching ~a non-keyword argument~a\n"), $rjs_core.UString.make("  procedure: ~a"), $rjs_core.UString.make("~a"));
            if (M0.__eq_(1, n1395 - 2) !== false) {
                var if_res670 = $rjs_core.UString.make("");
            } else {
                var if_res670 = $rjs_core.UString.make("s");
            }
            var if_res672 = application_message1405(M0.format(temp671, n1395 - 2, if_res670, name_by_val1392, args_str1401));
        }
        var if_res673 = if_res672;
    }
    return M0.raise(if_res675(if_res673, M0.current_continuation_marks()));
};
var keyword_procedure_extract = function(p1408, kws1409, n1410) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return keyword_procedure_extract_by_method(kws1409, n1410, p1408, 0);
};
var cl676 = function(proc1411, arity1412, req_kw1413, allowed_kw1414, name1415, realm1416) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc1411, arity1412, false, name1415, realm1416, req_kw1413, allowed_kw1414);
};
var cl677 = function(proc1417, arity1418, req_kw1419, allowed_kw1420, name1421) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc1417, arity1418, false, name1421, $rjs_core.PrimitiveSymbol.make("racket"), req_kw1419, allowed_kw1420);
};
var cl678 = function(proc1422, arity1423, req_kw1424, allowed_kw1425) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc1422, arity1423, false, false, $rjs_core.PrimitiveSymbol.make("racket"), req_kw1424, allowed_kw1425);
};
var procedure_reduce_keyword_arity = $rjs_core.attachProcedureArity(function() {
    var fixed_lam679 = {
        '6': cl676,
        '5': cl677,
        '4': cl678
    } [arguments.length];
    if (fixed_lam679 !== undefined) {
        return fixed_lam679.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 5, 6]);
var cl680 = function(proc1426, mask1427, req_kw1428, allowed_kw1429, name1430, realm1431) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc1426, false, mask1427, name1430, realm1431, req_kw1428, allowed_kw1429);
};
var cl681 = function(proc1432, mask1433, req_kw1434, allowed_kw1435, name1436) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc1432, false, mask1433, name1436, $rjs_core.PrimitiveSymbol.make("racket"), req_kw1434, allowed_kw1435);
};
var cl682 = function(proc1437, mask1438, req_kw1439, allowed_kw1440) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc1437, false, mask1438, false, $rjs_core.PrimitiveSymbol.make("racket"), req_kw1439, allowed_kw1440);
};
var procedure_reduce_keyword_arity_mask = $rjs_core.attachProcedureArity(function() {
    var fixed_lam683 = {
        '6': cl680,
        '5': cl681,
        '4': cl682
    } [arguments.length];
    if (fixed_lam683 !== undefined) {
        return fixed_lam683.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 5, 6]);
var do_procedure_reduce_keyword_arity = function(who1441, proc1442, arity1443, mask1444, name1445, realm1446, req_kw1447, allowed_kw1448) {
    if (arguments.length !== 8) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var or_part1450 = M0.null_p(allowed_kw1448);
    if (or_part1450 !== false) {
        var if_res684 = or_part1450;
    } else {
        var if_res684 = M0.null_p(req_kw1447);
    }
    if (if_res684 !== false) {
        if (okp_p(proc1442) !== false) {
            var if_res685 = okp_ref(proc1442, 0);
        } else {
            var if_res685 = proc1442;
        }
        var p1451 = if_res685;
        if (arity1443 !== false) {
            var if_res686 = M0.__rjs_quoted__.procedure_reduce_arity(p1451, arity1443, name1445, realm1446);
        } else {
            var if_res686 = M0.__rjs_quoted__.procedure_reduce_arity_mask(p1451, mask1444, name1445, realm1446);
        }
        var if_res687 = if_res686;
    } else {
        var if_res687 = false;
    }
    var plain_proc1449 = if_res687;
    var sorted_kws_p1452 = function(kws1453) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var loop1454 = function(kws1455) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.null_p(kws1455) !== false) {
                var if_res692 = true;
            } else {
                if (M0.not(M0.pair_p(kws1455)) !== false) {
                    var if_res691 = false;
                } else {
                    if (M0.not(M0.keyword_p(M0.car(kws1455))) !== false) {
                        var if_res690 = false;
                    } else {
                        if (M0.null_p(M0.cdr(kws1455)) !== false) {
                            var if_res689 = true;
                        } else {
                            if (M0.keyword_lt__p(M0.car(kws1455), M0.cadr(kws1455)) !== false) {
                                var if_res688 = loop1454(M0.cdr(kws1455));
                            } else {
                                var if_res688 = false;
                            }
                            var if_res689 = if_res688;
                        }
                        var if_res690 = if_res689;
                    }
                    var if_res691 = if_res690;
                }
                var if_res692 = if_res691;
            }
            return if_res692;
        };
        return loop1454(kws1453);
    };
    if (sorted_kws_p1452(req_kw1447) !== false) {
        var if_res696 = M0.rvoid();
    } else {
        var temp695 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
        var temp694 = $rjs_core.UString.make("(and/c (listof? keyword?) sorted? distinct?)");
        var or_part1456 = arity1443;
        if (or_part1456 !== false) {
            var if_res693 = or_part1456;
        } else {
            var if_res693 = mask1444;
        }
        var if_res696 = M0.__rjs_quoted__.raise_argument_error_times_(who1441, temp695, temp694, 2, proc1442, if_res693, req_kw1447, allowed_kw1448);
    }
    if_res696;
    if (allowed_kw1448 !== false) {
        if (sorted_kws_p1452(allowed_kw1448) !== false) {
            var if_res700 = M0.rvoid();
        } else {
            var temp699 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
            var temp698 = $rjs_core.UString.make("(or/c (and/c (listof? keyword?) sorted? distinct?) #f)");
            var or_part1457 = arity1443;
            if (or_part1457 !== false) {
                var if_res697 = or_part1457;
            } else {
                var if_res697 = mask1444;
            }
            var if_res700 = M0.__rjs_quoted__.raise_argument_error_times_(who1441, temp699, temp698, 3, proc1442, if_res697, req_kw1447, allowed_kw1448);
        }
        if_res700;
        if (subset_p(req_kw1447, allowed_kw1448) !== false) {
            var if_res701 = M0.rvoid();
        } else {
            var if_res701 = M0.__rjs_quoted__.raise_arguments_error_times_(who1441, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("allowed-keyword list does not include all required keywords"), $rjs_core.UString.make("allowed-keyword list"), allowed_kw1448, $rjs_core.UString.make("required keywords"), req_kw1447);
        }
        var if_res702 = if_res701;
    } else {
        var if_res702 = M0.rvoid();
    }
    if_res702;
    var let_result703 = procedure_keywords(proc1442);
    var old_req1458 = let_result703.getAt(0);
    var old_allowed1459 = let_result703.getAt(1);
    if (subset_p(old_req1458, req_kw1447) !== false) {
        var if_res704 = M0.rvoid();
    } else {
        var if_res704 = M0.__rjs_quoted__.raise_arguments_error_times_(who1441, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot reduce required keyword set"), $rjs_core.UString.make("required keywords"), old_req1458, $rjs_core.UString.make("requested required keywords"), req_kw1447);
    }
    if_res704;
    if (old_allowed1459 !== false) {
        if (subset_p(req_kw1447, old_allowed1459) !== false) {
            var if_res705 = M0.rvoid();
        } else {
            var if_res705 = M0.__rjs_quoted__.raise_arguments_error_times_(who1441, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot require keywords not in original allowed set"), $rjs_core.UString.make("original allowed keywords"), old_allowed1459, $rjs_core.UString.make("requested required keywords"), req_kw1447);
        }
        if_res705;
        var or_part1460 = M0.not(allowed_kw1448);
        if (or_part1460 !== false) {
            var if_res706 = or_part1460;
        } else {
            var if_res706 = subset_p(allowed_kw1448, old_allowed1459);
        }
        if (if_res706 !== false) {
            var if_res707 = M0.rvoid();
        } else {
            var if_res707 = M0.__rjs_quoted__.raise_arguments_error_times_(who1441, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot allow keywords not in original allowed set"), $rjs_core.UString.make("original allowed keywords"), old_allowed1459, $rjs_core.UString.make("requested allowed keywords"), allowed_kw1448);
        }
        var if_res708 = if_res707;
    } else {
        var if_res708 = M0.rvoid();
    }
    if_res708;
    if (M0.null_p(allowed_kw1448) !== false) {
        var if_res722 = plain_proc1449;
    } else {
        var or_part1462 = mask1444;
        if (or_part1462 !== false) {
            var if_res709 = or_part1462;
        } else {
            var if_res709 = arity__gt_mask(arity1443);
        }
        var mask1461 = if_res709;
        var new_mask1463 = M0.arithmetic_shift(mask1461, 2);
        var kw_checker1464 = make_keyword_checker(req_kw1447, allowed_kw1448, new_mask1463);
        var proc1465 = normalize_proc(proc1442);
        var new_kw_proc1466 = M0.__rjs_quoted__.procedure_reduce_arity_mask(keyword_procedure_proc(proc1465), new_mask1463);
        if (M0.null_p(req_kw1447) !== false) {
            if (okm_p(proc1465) !== false) {
                var if_res710 = make_optional_keyword_method;
            } else {
                var if_res710 = make_optional_keyword_procedure;
            }
            var if_res721 = if_res710(kw_checker1464, new_kw_proc1466, req_kw1447, allowed_kw1448, plain_proc1449);
        } else {
            var or_part1469 = name1445;
            if (or_part1469 !== false) {
                var if_res713 = or_part1469;
            } else {
                if (named_keyword_procedure_p(proc1465) !== false) {
                    var if_res711 = M0.vector_ref(keyword_procedure_name_plus_fail_times_(proc1465), 0);
                } else {
                    var if_res711 = false;
                }
                var or_part1470 = if_res711;
                if (or_part1470 !== false) {
                    var if_res712 = or_part1470;
                } else {
                    var if_res712 = M0.object_name(proc1465);
                }
                var if_res713 = if_res712;
            }
            var name1467 = if_res713;
            if (name1445 !== false) {
                var if_res714 = realm1446;
            } else {
                var if_res714 = false;
            }
            var or_part1471 = if_res714;
            if (or_part1471 !== false) {
                var if_res717 = or_part1471;
            } else {
                if (named_keyword_procedure_p(proc1465) !== false) {
                    var if_res715 = M0.vector_ref(keyword_procedure_name_plus_fail_times_(proc1465), 1);
                } else {
                    var if_res715 = false;
                }
                var or_part1472 = if_res715;
                if (or_part1472 !== false) {
                    var if_res716 = or_part1472;
                } else {
                    var if_res716 = M0.__rjs_quoted__.procedure_realm(proc1465);
                }
                var if_res717 = if_res716;
            }
            var realm1468 = if_res717;
            var or_part1473 = okm_p(proc1465);
            if (or_part1473 !== false) {
                var if_res719 = or_part1473;
            } else {
                var if_res719 = keyword_method_p(proc1465);
            }
            if (if_res719 !== false) {
                var if_res720 = make_required_keyword_method_by_arity_error;
            } else {
                var if_res720 = make_required_keyword_procedure_by_arity_error;
            }
            var if_res721 = if_res720(kw_checker1464, new_kw_proc1466, req_kw1447, allowed_kw1448, M0.__rjs_quoted__.procedure_reduce_arity_mask($rjs_core.attachProcedureArity(function(...args1474718) {
                var args1474 = $rjs_core.Pair.listFromArray(args1474718);
                return raise_missing_kw(name1467, req_kw1447);
            }), mask1461), name1467, realm1468);
        }
        var if_res722 = if_res721;
    }
    return if_res722;
};
var arity__gt_mask = function(a1475) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.exact_nonnegative_integer_p(a1475) !== false) {
        var if_res728 = M0.arithmetic_shift(1, a1475);
    } else {
        if (M0.arity_at_least_p(a1475) !== false) {
            var if_res727 = M0.bitwise_xor(-1, M0.sub1(M0.arithmetic_shift(1, M0.arity_at_least_value(a1475))));
        } else {
            if (M0.list_p(a1475) !== false) {
                var loop1476 = function(mask1477, l1478) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.null_p(l1478) !== false) {
                        var if_res725 = mask1477;
                    } else {
                        var a1479 = M0.car(l1478);
                        var or_part1480 = M0.exact_nonnegative_integer_p(a1479);
                        if (or_part1480 !== false) {
                            var if_res723 = or_part1480;
                        } else {
                            var if_res723 = M0.arity_at_least_p(a1479);
                        }
                        if (if_res723 !== false) {
                            var if_res724 = loop1476(M0.bitwise_ior(mask1477, arity__gt_mask(a1479)), M0.cdr(l1478));
                        } else {
                            var if_res724 = false;
                        }
                        var if_res725 = if_res724;
                    }
                    return if_res725;
                };
                var if_res726 = loop1476(0, a1475);
            } else {
                var if_res726 = false;
            }
            var if_res727 = if_res726;
        }
        var if_res728 = if_res727;
    }
    return if_res728;
};
var cl729 = function(proc1482, arity1483, name1484, realm1485) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.procedure_p(proc1482) !== false) {
        var let_result733 = procedure_keywords(proc1482);
        var req1486 = let_result733.getAt(0);
        var allows1487 = let_result733.getAt(1);
        if (M0.pair_p(req1486) !== false) {
            var if_res734 = M0.not(M0.null_p(arity1483));
        } else {
            var if_res734 = false;
        }
        var if_res735 = if_res734;
    } else {
        var if_res735 = false;
    }
    if (if_res735 !== false) {
        var if_res737 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("procedure-reduce-arity"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure has required keyword arguments"), $rjs_core.UString.make("procedure"), proc1482);
    } else {
        if (okm_p(proc1482) !== false) {
            var if_res736 = M0.__rjs_quoted__.procedure__gt_method(proc1482);
        } else {
            var if_res736 = proc1482;
        }
        var if_res737 = M0.__rjs_quoted__.procedure_reduce_arity(if_res736, arity1483, name1484, realm1485);
    }
    return if_res737;
};
var cl730 = function(proc1488, arity1489, name1490) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity(proc1488, arity1489, name1490, $rjs_core.PrimitiveSymbol.make("racket"));
};
var cl731 = function(proc1491, arity1492) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity(proc1491, arity1492, false, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_reduce_arity1481 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam732 = {
        '4': cl729,
        '3': cl730,
        '2': cl731
    } [arguments.length];
    if (fixed_lam732 !== undefined) {
        return fixed_lam732.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var new_procedure_reduce_arity = procedure_reduce_arity1481;
var cl738 = function(proc1494, mask1495, name1496, realm1497) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.procedure_p(proc1494) !== false) {
        var let_result742 = procedure_keywords(proc1494);
        var req1498 = let_result742.getAt(0);
        var allows1499 = let_result742.getAt(1);
        if (M0.pair_p(req1498) !== false) {
            var if_res743 = M0.not(M0.eqv_p(mask1495, 0));
        } else {
            var if_res743 = false;
        }
        var if_res744 = if_res743;
    } else {
        var if_res744 = false;
    }
    if (if_res744 !== false) {
        var if_res746 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("procedure-reduce-arity"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure has required keyword arguments"), $rjs_core.UString.make("procedure"), proc1494);
    } else {
        if (okm_p(proc1494) !== false) {
            var if_res745 = M0.__rjs_quoted__.procedure__gt_method(proc1494);
        } else {
            var if_res745 = proc1494;
        }
        var if_res746 = M0.__rjs_quoted__.procedure_reduce_arity_mask(if_res745, mask1495, name1496, realm1497);
    }
    return if_res746;
};
var cl739 = function(proc1500, mask1501, name1502) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity_mask(proc1500, mask1501, name1502, $rjs_core.PrimitiveSymbol.make("racket"));
};
var cl740 = function(proc1503, mask1504) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity_mask(proc1503, mask1504, false, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_reduce_arity1493 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam741 = {
        '4': cl738,
        '3': cl739,
        '2': cl740
    } [arguments.length];
    if (fixed_lam741 !== undefined) {
        return fixed_lam741.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var new_procedure_reduce_arity_mask = procedure_reduce_arity1493;
var procedure__gt_method1505 = function(proc1506) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var proc1507 = normalize_proc(proc1506);
    if (keyword_procedure_p(proc1507) !== false) {
        if (okm_p(proc1507) !== false) {
            var if_res755 = proc1507;
        } else {
            if (keyword_method_p(proc1507) !== false) {
                var if_res754 = proc1507;
            } else {
                if (okp_p(proc1507) !== false) {
                    var if_res753 = make_optional_keyword_method(keyword_procedure_checker(proc1507), keyword_procedure_proc(proc1507), keyword_procedure_required(proc1507), keyword_procedure_allowed(proc1507), okp_ref(proc1507, 0));
                } else {
                    var raw_name_plus_fail1508 = keyword_procedure_name_plus_fail(proc1507);
                    if (M0.vector_p(raw_name_plus_fail1508) !== false) {
                        var if_res747 = raw_name_plus_fail1508;
                    } else {
                        var if_res747 = raw_name_plus_fail1508(proc1507);
                    }
                    var name_plus_fail1509 = if_res747;
                    var name1510 = M0.vector_ref(name_plus_fail1509, 0);
                    var req_kw1511 = keyword_procedure_required(proc1507);
                    var temp752 = keyword_procedure_checker(proc1507);
                    var temp751 = keyword_procedure_proc(proc1507);
                    var temp750 = keyword_procedure_allowed(proc1507);
                    if (M0.vector_p(raw_name_plus_fail1508) !== false) {
                        var if_res749 = M0.__rjs_quoted__.procedure_reduce_arity_mask($rjs_core.attachProcedureArity(function(...args1512748) {
                            var args1512 = $rjs_core.Pair.listFromArray(args1512748);
                            return raise_missing_kw(name1510, req_kw1511);
                        }), M0.arithmetic_shift(M0.procedure_arity_mask(M0.vector_ref(name_plus_fail1509, 2)), -1));
                    } else {
                        var if_res749 = M0.vector_ref(name_plus_fail1509, 2);
                    }
                    var if_res753 = make_required_keyword_method_by_arity_error(temp752, temp751, req_kw1511, temp750, if_res749, name1510, M0.vector_ref(name_plus_fail1509, 1));
                }
                var if_res754 = if_res753;
            }
            var if_res755 = if_res754;
        }
        var if_res756 = if_res755;
    } else {
        var if_res756 = M0.__rjs_quoted__.procedure__gt_method(proc1507);
    }
    return if_res756;
};
var new_procedure__gt_method = procedure__gt_method1505;
var cl757 = function(proc1514, name1515, realm1516) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.symbol_p(name1515) !== false) {
        var if_res760 = M0.symbol_p(realm1516);
    } else {
        var if_res760 = false;
    }
    if (M0.not(if_res760) !== false) {
        var if_res762 = M0.__rjs_quoted__.procedure_rename(proc1514, name1515, realm1516);
    } else {
        var c11517 = extract_keyword_root(proc1514);
        if (c11517 !== false) {
            var if_res761 = (function(kw_p1518) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-rename"), proc1514, false, M0.procedure_arity_mask(proc1514), name1515, realm1516, keyword_procedure_required(kw_p1518), keyword_procedure_allowed(kw_p1518));
            })(c11517);
        } else {
            var if_res761 = M0.__rjs_quoted__.procedure_rename(proc1514, name1515, realm1516);
        }
        var if_res762 = if_res761;
    }
    return if_res762;
};
var cl758 = function(proc1519, name1520) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_rename(proc1519, name1520, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_rename1513 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam759 = {
        '3': cl757,
        '2': cl758
    } [arguments.length];
    if (fixed_lam759 !== undefined) {
        return fixed_lam759.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var new_procedure_rename = procedure_rename1513;
var procedure_realm1521 = function(proc1522) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(proc1522) !== false) {
        if (named_keyword_procedure_p(proc1522) !== false) {
            var name_plus_fail1523 = keyword_procedure_name_plus_fail_times_(proc1522);
            var or_part1524 = M0.vector_ref(name_plus_fail1523, 1);
            if (or_part1524 !== false) {
                var if_res763 = or_part1524;
            } else {
                var if_res763 = M0.__rjs_quoted__.procedure_realm(M0.vector_ref(name_plus_fail1523, 2));
            }
            var if_res765 = if_res763;
        } else {
            if (okp_p(proc1522) !== false) {
                var if_res764 = M0.__rjs_quoted__.procedure_realm(okp_ref(proc1522, 0));
            } else {
                var if_res764 = M0.__rjs_quoted__.procedure_realm(keyword_procedure_proc(proc1522));
            }
            var if_res765 = if_res764;
        }
        var if_res766 = if_res765;
    } else {
        var if_res766 = M0.__rjs_quoted__.procedure_realm(proc1522);
    }
    return if_res766;
};
var new_procedure_realm = procedure_realm1521;
var chaperone_procedure1525 = $rjs_core.attachProcedureArity(function(proc1526, wrap_proc1527, ...props1528767) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props1528 = $rjs_core.Pair.listFromArray(props1528767);
    return do_chaperone_procedure(false, false, M0.__rjs_quoted__.chaperone_procedure, $rjs_core.PrimitiveSymbol.make("chaperone-procedure"), proc1526, wrap_proc1527, props1528);
});
var new_chaperone_procedure = chaperone_procedure1525;
var unsafe_chaperone_procedure1529 = $rjs_core.attachProcedureArity(function(proc1530, wrap_proc1531, ...props1532768) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props1532 = $rjs_core.Pair.listFromArray(props1532768);
    return do_unsafe_chaperone_procedure(M1.__rjs_quoted__.unsafe_chaperone_procedure, $rjs_core.PrimitiveSymbol.make("unsafe-chaperone-procedure"), proc1530, wrap_proc1531, props1532);
});
var new_unsafe_chaperone_procedure = unsafe_chaperone_procedure1529;
var impersonate_procedure1533 = $rjs_core.attachProcedureArity(function(proc1534, wrap_proc1535, ...props1536769) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props1536 = $rjs_core.Pair.listFromArray(props1536769);
    return do_chaperone_procedure(true, false, M0.__rjs_quoted__.impersonate_procedure, $rjs_core.PrimitiveSymbol.make("impersonate-procedure"), proc1534, wrap_proc1535, props1536);
});
var new_impersonate_procedure = impersonate_procedure1533;
var unsafe_impersonate_procedure1537 = $rjs_core.attachProcedureArity(function(proc1538, wrap_proc1539, ...props1540770) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props1540 = $rjs_core.Pair.listFromArray(props1540770);
    return do_unsafe_chaperone_procedure(M1.__rjs_quoted__.unsafe_impersonate_procedure, $rjs_core.PrimitiveSymbol.make("unsafe-impersonate-procedure"), proc1538, wrap_proc1539, props1540);
});
var new_unsafe_impersonate_procedure = unsafe_impersonate_procedure1537;
var chaperone_procedure_times_1541 = $rjs_core.attachProcedureArity(function(proc1542, wrap_proc1543, ...props1544771) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props1544 = $rjs_core.Pair.listFromArray(props1544771);
    return do_chaperone_procedure(false, true, M0.__rjs_quoted__.chaperone_procedure_times_, $rjs_core.PrimitiveSymbol.make("chaperone-procedure"), proc1542, wrap_proc1543, props1544);
});
var new_chaperone_procedure_times_ = chaperone_procedure_times_1541;
var impersonate_procedure_times_1545 = $rjs_core.attachProcedureArity(function(proc1546, wrap_proc1547, ...props1548772) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props1548 = $rjs_core.Pair.listFromArray(props1548772);
    return do_chaperone_procedure(true, true, M0.__rjs_quoted__.impersonate_procedure_times_, $rjs_core.PrimitiveSymbol.make("impersonate-procedure"), proc1546, wrap_proc1547, props1548);
});
var new_impersonate_procedure_times_ = impersonate_procedure_times_1545;
var do_chaperone_procedure = function(is_impersonator_p1549, self_arg_p1550, chaperone_procedure1551, name1552, proc1553, wrap_proc1554, props1555) {
    if (arguments.length !== 7) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_proc1556 = normalize_proc(proc1553);
    var n_wrap_proc1557 = normalize_proc(wrap_proc1554);
    var or_part1558 = M0.not(keyword_procedure_p(n_proc1556));
    if (or_part1558 !== false) {
        var if_res774 = or_part1558;
    } else {
        var or_part1559 = M0.not(M0.procedure_p(wrap_proc1554));
        if (or_part1559 !== false) {
            var if_res773 = or_part1559;
        } else {
            var if_res773 = bad_props_p(props1555);
        }
        var if_res774 = if_res773;
    }
    if (if_res774 !== false) {
        var if_res863 = M0.apply(chaperone_procedure1551, proc1553, wrap_proc1554, props1555);
    } else {
        chaperone_arity_match_checking(self_arg_p1550, name1552, proc1553, wrap_proc1554, props1555);
        var loop1561 = function(props1562) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.null_p(props1562) !== false) {
                var if_res776 = false;
            } else {
                if (M0.eq_p(M0.car(props1562), M0.__rjs_quoted__.impersonator_prop_application_mark) !== false) {
                    var if_res775 = M0.cadr(props1562);
                } else {
                    var if_res775 = loop1561(M0.cddr(props1562));
                }
                var if_res776 = if_res775;
            }
            return if_res776;
        };
        var mark_prop1560 = loop1561(props1555);
        var chaperone_procedure_by_add_mark1563 = function(proc1564, wrap_proc1565) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (mark_prop1560 !== false) {
                var if_res777 = chaperone_procedure1551(proc1564, wrap_proc1565, M0.__rjs_quoted__.impersonator_prop_application_mark, mark_prop1560);
            } else {
                var if_res777 = chaperone_procedure1551(proc1564, wrap_proc1565);
            }
            return if_res777;
        };
        var p1567 = keyword_procedure_proc(n_wrap_proc1557);
        if (self_arg_p1550 !== false) {
            var cl778 = $rjs_core.attachProcedureArity(function(self_proc1568, kws1569, args1570, ...rest1571783) {
                if (arguments.length < 3) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var rest1571 = $rjs_core.Pair.listFromArray(rest1571783);
                return M0.call_with_values(function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M0.apply(p1567, kws1569, args1570, self_proc1568, rest1571);
                }, $rjs_core.attachProcedureArity(function(...results1572784) {
                    var results1572 = $rjs_core.Pair.listFromArray(results1572784);
                    var len1573 = M0.length(results1572);
                    var alen1574 = M0.length(rest1571);
                    if (M0.__lt_(len1573, alen1574 + 1) !== false) {
                        var if_res785 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrong number of results from wrapper procedure"), $rjs_core.UString.make("expected minimum number of results"), alen1574 + 1, $rjs_core.UString.make("received number of results"), len1573, $rjs_core.UString.make("wrapper procedure"), wrap_proc1554);
                    } else {
                        var if_res785 = M0.rvoid();
                    }
                    if_res785;
                    var num_extra1575 = len1573 - (alen1574 + 1);
                    var new_args1576 = M0.list_ref(results1572, num_extra1575);
                    if (M0.list_p(new_args1576) !== false) {
                        var if_res786 = M0.__eq_(M0.length(new_args1576), M0.length(args1570));
                    } else {
                        var if_res786 = false;
                    }
                    if (if_res786 !== false) {
                        var if_res791 = M0.rvoid();
                    } else {
                        var temp790 = $rjs_core.PrimitiveSymbol.make("keyword procedure chaperone");
                        var temp789 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
                        var temp788 = $rjs_core.UString.make("expected a list of keyword-argument values as first result~a from wrapper procedure");
                        if (M0.__eq_(len1573, alen1574) !== false) {
                            var if_res787 = $rjs_core.UString.make("");
                        } else {
                            var if_res787 = $rjs_core.UString.make(" (after the result-wrapper procedure or mark specifications)");
                        }
                        var if_res791 = M0.__rjs_quoted__.raise_arguments_error_times_(temp790, temp789, M0.format(temp788, if_res787), $rjs_core.UString.make("first result"), new_args1576, $rjs_core.UString.make("wrapper procedure"), wrap_proc1554);
                    }
                    if_res791;
                    M0.for_each(function(kw1577, new_arg1578, arg1579) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (is_impersonator_p1549 !== false) {
                            var if_res793 = M0.rvoid();
                        } else {
                            if (M0.__rjs_quoted__.chaperone_of_p(new_arg1578, arg1579) !== false) {
                                var if_res792 = M0.rvoid();
                            } else {
                                var if_res792 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), M0.format($rjs_core.UString.make("~a keyword result is not a chaperone of original argument from chaperoning procedure"), kw1577), $rjs_core.UString.make("result"), new_arg1578, $rjs_core.UString.make("wrapper procedure"), wrap_proc1554);
                            }
                            var if_res793 = if_res792;
                        }
                        return if_res793;
                    }, kws1569, new_args1576, args1570);
                    var tmp1580 = num_extra1575;
                    if (M0.equal_p(tmp1580, 0) !== false) {
                        var if_res796 = M0.apply(M0.values, kws1569, results1572);
                    } else {
                        if (M0.equal_p(tmp1580, 1) !== false) {
                            var if_res795 = M0.apply(M0.values, M0.car(results1572), kws1569, M0.cdr(results1572));
                        } else {
                            var loop1581 = function(results1582, c1583) {
                                if (arguments.length !== 2) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                if (M0.zero_p(c1583) !== false) {
                                    var if_res794 = M0.cons(kws1569, results1582);
                                } else {
                                    var if_res794 = M0.cons(M0.car(results1582), loop1581(M0.cdr(results1582), M0.sub1(c1583)));
                                }
                                return if_res794;
                            };
                            var if_res795 = M0.apply(M0.values, loop1581(results1572, num_extra1575));
                        }
                        var if_res796 = if_res795;
                    }
                    return if_res796;
                }));
            });
            var cl779 = $rjs_core.attachProcedureArity(function(...other1584797) {
                var other1584 = $rjs_core.Pair.listFromArray(other1584797);
                return M0.error($rjs_core.UString.make("shouldn't get here"));
            });
            var if_res818 = $rjs_core.attachProcedureArity(function() {
                var fixed_lam780 = {} [arguments.length];
                if (fixed_lam780 !== undefined) {
                    return fixed_lam780.apply(null, arguments);
                } else {
                    if (M0.__gt__eq_(cl778.length, 1) !== false) {
                        var if_res782 = cl778.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            var if_res781 = cl779.apply(null, arguments);
                        } else {
                            var if_res781 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                        var if_res782 = if_res781;
                    }
                    return if_res782;
                }
            }, [M0.make_arity_at_least(0)]);
        } else {
            var cl798 = $rjs_core.attachProcedureArity(function(kws1585, args1586, ...rest1587803) {
                if (arguments.length < 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var rest1587 = $rjs_core.Pair.listFromArray(rest1587803);
                return M0.call_with_values(function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M0.apply(p1567, kws1585, args1586, rest1587);
                }, $rjs_core.attachProcedureArity(function(...results1588804) {
                    var results1588 = $rjs_core.Pair.listFromArray(results1588804);
                    var len1589 = M0.length(results1588);
                    var alen1590 = M0.length(rest1587);
                    if (M0.__lt_(len1589, alen1590 + 1) !== false) {
                        var if_res805 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrong number of results from wrapper procedure"), $rjs_core.UString.make("expected minimum number of results"), alen1590 + 1, $rjs_core.UString.make("received number of results"), len1589, $rjs_core.UString.make("wrapper procedure"), wrap_proc1554);
                    } else {
                        var if_res805 = M0.rvoid();
                    }
                    if_res805;
                    var num_extra1591 = len1589 - (alen1590 + 1);
                    var new_args1592 = M0.list_ref(results1588, num_extra1591);
                    if (M0.list_p(new_args1592) !== false) {
                        var if_res806 = M0.__eq_(M0.length(new_args1592), M0.length(args1586));
                    } else {
                        var if_res806 = false;
                    }
                    if (if_res806 !== false) {
                        var if_res811 = M0.rvoid();
                    } else {
                        var temp810 = $rjs_core.PrimitiveSymbol.make("keyword procedure chaperone");
                        var temp809 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
                        var temp808 = $rjs_core.UString.make("expected a list of keyword-argument values as first result~a from wrapper procedure");
                        if (M0.__eq_(len1589, alen1590) !== false) {
                            var if_res807 = $rjs_core.UString.make("");
                        } else {
                            var if_res807 = $rjs_core.UString.make(" (after the result-wrapper procedure or mark specifications)");
                        }
                        var if_res811 = M0.__rjs_quoted__.raise_arguments_error_times_(temp810, temp809, M0.format(temp808, if_res807), $rjs_core.UString.make("first result"), new_args1592, $rjs_core.UString.make("wrapper procedure"), wrap_proc1554);
                    }
                    if_res811;
                    M0.for_each(function(kw1593, new_arg1594, arg1595) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (is_impersonator_p1549 !== false) {
                            var if_res813 = M0.rvoid();
                        } else {
                            if (M0.__rjs_quoted__.chaperone_of_p(new_arg1594, arg1595) !== false) {
                                var if_res812 = M0.rvoid();
                            } else {
                                var if_res812 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), M0.format($rjs_core.UString.make("~a keyword result is not a chaperone of original argument from chaperoning procedure"), kw1593), $rjs_core.UString.make("result"), new_arg1594, $rjs_core.UString.make("wrapper procedure"), wrap_proc1554);
                            }
                            var if_res813 = if_res812;
                        }
                        return if_res813;
                    }, kws1585, new_args1592, args1586);
                    var tmp1596 = num_extra1591;
                    if (M0.equal_p(tmp1596, 0) !== false) {
                        var if_res816 = M0.apply(M0.values, kws1585, results1588);
                    } else {
                        if (M0.equal_p(tmp1596, 1) !== false) {
                            var if_res815 = M0.apply(M0.values, M0.car(results1588), kws1585, M0.cdr(results1588));
                        } else {
                            var loop1597 = function(results1598, c1599) {
                                if (arguments.length !== 2) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                if (M0.zero_p(c1599) !== false) {
                                    var if_res814 = M0.cons(kws1585, results1598);
                                } else {
                                    var if_res814 = M0.cons(M0.car(results1598), loop1597(M0.cdr(results1598), M0.sub1(c1599)));
                                }
                                return if_res814;
                            };
                            var if_res815 = M0.apply(M0.values, loop1597(results1588, num_extra1591));
                        }
                        var if_res816 = if_res815;
                    }
                    return if_res816;
                }));
            });
            var cl799 = $rjs_core.attachProcedureArity(function(...other1600817) {
                var other1600 = $rjs_core.Pair.listFromArray(other1600817);
                return M0.error($rjs_core.UString.make("shouldn't get here"));
            });
            var if_res818 = $rjs_core.attachProcedureArity(function() {
                var fixed_lam800 = {} [arguments.length];
                if (fixed_lam800 !== undefined) {
                    return fixed_lam800.apply(null, arguments);
                } else {
                    if (M0.__gt__eq_(cl798.length, 1) !== false) {
                        var if_res802 = cl798.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            var if_res801 = cl799.apply(null, arguments);
                        } else {
                            var if_res801 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                        var if_res802 = if_res801;
                    }
                    return if_res802;
                }
            }, [M0.make_arity_at_least(0)]);
        }
        var kw_chaperone1566 = if_res818;
        var wrap1603 = function(proc1604, n_proc1605) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.not(M0.eq_p(n_proc1605, proc1604)) !== false) {
                var if_res819 = new_procedure_p(proc1604);
            } else {
                var if_res819 = false;
            }
            if (if_res819 !== false) {
                var v1606 = new_procedure_ref(proc1604);
                if (M0.exact_integer_p(v1606) !== false) {
                    var acc1607 = procedure_accessor_ref(proc1604);
                    var if_res847 = M0.values(M0.__rjs_quoted__.chaperone_struct(proc1604, acc1607, function(self1608, sub_proc1609) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var let_result820 = wrap1603(sub_proc1609, normalize_proc(sub_proc1609));
                        var f1610 = let_result820.getAt(0);
                        var acc1611 = let_result820.getAt(1);
                        return f1610;
                    }), acc1607);
                } else {
                    if (is_impersonator_p1549 !== false) {
                        var if_res846 = M0.__rjs_quoted__.impersonate_struct;
                    } else {
                        var if_res846 = M0.__rjs_quoted__.chaperone_struct;
                    }
                    if (okp_p(n_proc1605) !== false) {
                        var if_res845 = chaperone_procedure_by_add_mark1563(proc1604, wrap_proc1554);
                    } else {
                        var if_res845 = proc1604;
                    }
                    var new_kw_proc1612 = if_res846(if_res845, new_procedure_ref, function(self1613, proc1614) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (is_impersonator_p1549 !== false) {
                            var if_res844 = new_impersonate_procedure;
                        } else {
                            var if_res844 = new_chaperone_procedure;
                        }
                        if (self_arg_p1550 !== false) {
                            var cl821 = $rjs_core.attachProcedureArity(function(proc_self1615, kws1616, kw_args1617, self1618, ...args1619826) {
                                if (arguments.length < 4) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var args1619 = $rjs_core.Pair.listFromArray(args1619826);
                                var len1620 = M0.length(args1619);
                                return M0.call_with_values(function() {
                                    if (arguments.length !== 0) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    return M0.apply(kw_chaperone1566, proc_self1615, kws1616, kw_args1617, args1619);
                                }, $rjs_core.attachProcedureArity(function(...results1621827) {
                                    var results1621 = $rjs_core.Pair.listFromArray(results1621827);
                                    var r_len1622 = M0.length(results1621);
                                    var list_take1623 = function(l1624, n1625) {
                                        if (arguments.length !== 2) {
                                            throw $rjs_core.racketContractError("arity mismatch");
                                        } else {}
                                        if (M0.zero_p(n1625) !== false) {
                                            var if_res828 = M0.rnull;
                                        } else {
                                            var if_res828 = M0.cons(M0.car(l1624), list_take1623(M0.cdr(l1624), M0.sub1(n1625)));
                                        }
                                        return if_res828;
                                    };
                                    if (M0.null_p($rjs_core.Pair.makeList($rjs_core.PrimitiveSymbol.make("proc-self"))) !== false) {
                                        var if_res829 = M0.__eq_(r_len1622, 2 + len1620);
                                    } else {
                                        var if_res829 = false;
                                    }
                                    if (if_res829 !== false) {
                                        var if_res830 = M0.apply(M0.values, M0.cadr(results1621), self1618, M0.cddr(results1621));
                                    } else {
                                        var skip1626 = r_len1622 - len1620;
                                        var if_res830 = M0.apply(M0.values, M0.append(list_take1623(results1621, skip1626 - 2), M0.list(M0.list_ref(results1621, M0.sub1(skip1626)), self1618), M0.__rjs_quoted__.list_tail(results1621, skip1626)));
                                    }
                                    return if_res830;
                                }));
                            });
                            var cl822 = $rjs_core.attachProcedureArity(function(...args1627831) {
                                var args1627 = $rjs_core.Pair.listFromArray(args1627831);
                                return M0.rvoid();
                            });
                            var if_res843 = $rjs_core.attachProcedureArity(function() {
                                var fixed_lam823 = {} [arguments.length];
                                if (fixed_lam823 !== undefined) {
                                    return fixed_lam823.apply(null, arguments);
                                } else {
                                    if (M0.__gt__eq_(cl821.length, 1) !== false) {
                                        var if_res825 = cl821.apply(null, arguments);
                                    } else {
                                        if (true !== false) {
                                            var if_res824 = cl822.apply(null, arguments);
                                        } else {
                                            var if_res824 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                                        }
                                        var if_res825 = if_res824;
                                    }
                                    return if_res825;
                                }
                            }, [M0.make_arity_at_least(0)]);
                        } else {
                            var cl832 = $rjs_core.attachProcedureArity(function(kws1628, kw_args1629, self1630, ...args1631837) {
                                if (arguments.length < 3) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var args1631 = $rjs_core.Pair.listFromArray(args1631837);
                                var len1632 = M0.length(args1631);
                                return M0.call_with_values(function() {
                                    if (arguments.length !== 0) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    return M0.apply(kw_chaperone1566, kws1628, kw_args1629, args1631);
                                }, $rjs_core.attachProcedureArity(function(...results1633838) {
                                    var results1633 = $rjs_core.Pair.listFromArray(results1633838);
                                    var r_len1634 = M0.length(results1633);
                                    var list_take1635 = function(l1636, n1637) {
                                        if (arguments.length !== 2) {
                                            throw $rjs_core.racketContractError("arity mismatch");
                                        } else {}
                                        if (M0.zero_p(n1637) !== false) {
                                            var if_res839 = M0.rnull;
                                        } else {
                                            var if_res839 = M0.cons(M0.car(l1636), list_take1635(M0.cdr(l1636), M0.sub1(n1637)));
                                        }
                                        return if_res839;
                                    };
                                    if (M0.null_p($rjs_core.Pair.EMPTY) !== false) {
                                        var if_res840 = M0.__eq_(r_len1634, 2 + len1632);
                                    } else {
                                        var if_res840 = false;
                                    }
                                    if (if_res840 !== false) {
                                        var if_res841 = M0.apply(M0.values, M0.cadr(results1633), self1630, M0.cddr(results1633));
                                    } else {
                                        var skip1638 = r_len1634 - len1632;
                                        var if_res841 = M0.apply(M0.values, M0.append(list_take1635(results1633, skip1638 - 2), M0.list(M0.list_ref(results1633, M0.sub1(skip1638)), self1630), M0.__rjs_quoted__.list_tail(results1633, skip1638)));
                                    }
                                    return if_res841;
                                }));
                            });
                            var cl833 = $rjs_core.attachProcedureArity(function(...args1639842) {
                                var args1639 = $rjs_core.Pair.listFromArray(args1639842);
                                return M0.rvoid();
                            });
                            var if_res843 = $rjs_core.attachProcedureArity(function() {
                                var fixed_lam834 = {} [arguments.length];
                                if (fixed_lam834 !== undefined) {
                                    return fixed_lam834.apply(null, arguments);
                                } else {
                                    if (M0.__gt__eq_(cl832.length, 1) !== false) {
                                        var if_res836 = cl832.apply(null, arguments);
                                    } else {
                                        if (true !== false) {
                                            var if_res835 = cl833.apply(null, arguments);
                                        } else {
                                            var if_res835 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                                        }
                                        var if_res836 = if_res835;
                                    }
                                    return if_res836;
                                }
                            }, [M0.make_arity_at_least(0)]);
                        }
                        return if_res844(proc1614, make_keyword_procedure(if_res843));
                    });
                    var if_res847 = M0.values(new_kw_proc1612, new_procedure_ref);
                }
                var if_res860 = if_res847;
            } else {
                if (okp_p(n_proc1605) !== false) {
                    if (is_impersonator_p1549 !== false) {
                        if (okm_p(n_proc1605) !== false) {
                            var if_res848 = make_optional_keyword_method_impersonator;
                        } else {
                            var if_res848 = make_optional_keyword_procedure_impersonator;
                        }
                        var if_res849 = if_res848(keyword_procedure_checker(n_proc1605), chaperone_procedure_by_add_mark1563(keyword_procedure_proc(n_proc1605), kw_chaperone1566), keyword_procedure_required(n_proc1605), keyword_procedure_allowed(n_proc1605), chaperone_procedure_by_add_mark1563(okp_ref(n_proc1605, 0), okp_ref(n_wrap_proc1557, 0)), n_proc1605);
                    } else {
                        var if_res849 = M0.__rjs_quoted__.chaperone_struct(proc1604, keyword_procedure_proc, function(self1640, proc1641) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return chaperone_procedure_by_add_mark1563(proc1641, kw_chaperone1566);
                        }, M0.make_struct_field_accessor(okp_ref, 0), function(self1642, proc1643) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return chaperone_procedure_by_add_mark1563(proc1643, okp_ref(n_wrap_proc1557, 0));
                        });
                    }
                    var if_res859 = M0.values(if_res849, keyword_procedure_proc);
                } else {
                    if (is_impersonator_p1549 !== false) {
                        var raw_name_plus_fail1644 = keyword_procedure_name_plus_fail(proc1604);
                        if (M0.vector_p(raw_name_plus_fail1644) !== false) {
                            var if_res850 = raw_name_plus_fail1644;
                        } else {
                            var if_res850 = raw_name_plus_fail1644(proc1604);
                        }
                        var name_plus_fail1645 = if_res850;
                        var name1646 = M0.vector_ref(name_plus_fail1645, 0);
                        var req_kw1647 = keyword_procedure_required(proc1604);
                        if (keyword_method_p(n_proc1605) !== false) {
                            var if_res857 = make_required_keyword_method_impersonator_by_arity_error;
                        } else {
                            var if_res857 = make_required_keyword_procedure_impersonator_by_arity_error;
                        }
                        var temp856 = keyword_procedure_checker(n_proc1605);
                        var temp855 = chaperone_procedure_by_add_mark1563(keyword_procedure_proc(n_proc1605), kw_chaperone1566);
                        var temp854 = keyword_procedure_required(n_proc1605);
                        var temp853 = keyword_procedure_allowed(n_proc1605);
                        if (M0.vector_p(raw_name_plus_fail1644) !== false) {
                            var if_res852 = M0.__rjs_quoted__.procedure_reduce_arity_mask($rjs_core.attachProcedureArity(function(...args1648851) {
                                var args1648 = $rjs_core.Pair.listFromArray(args1648851);
                                return raise_missing_kw(name1646, req_kw1647);
                            }), M0.arithmetic_shift(M0.procedure_arity_mask(M0.vector_ref(name_plus_fail1645, 2)), -1));
                        } else {
                            var if_res852 = M0.vector_ref(name_plus_fail1645, 2);
                        }
                        var if_res858 = if_res857(temp856, temp855, temp854, temp853, n_proc1605, if_res852, M0.vector_ref(name_plus_fail1645, 0), M0.vector_ref(name_plus_fail1645, 1));
                    } else {
                        var if_res858 = M0.__rjs_quoted__.chaperone_struct(n_proc1605, keyword_procedure_proc, function(self1649, proc1650) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return chaperone_procedure_by_add_mark1563(proc1650, kw_chaperone1566);
                        });
                    }
                    var if_res859 = M0.values(if_res858, keyword_procedure_proc);
                }
                var if_res860 = if_res859;
            }
            return if_res860;
        };
        var let_result861 = wrap1603(proc1553, n_proc1556);
        var new_proc1601 = let_result861.getAt(0);
        var chap_accessor1602 = let_result861.getAt(1);
        if (M0.null_p(props1555) !== false) {
            var if_res862 = new_proc1601;
        } else {
            var if_res862 = M0.apply(M0.__rjs_quoted__.chaperone_struct, new_proc1601, chap_accessor1602, false, props1555);
        }
        var if_res863 = if_res862;
    }
    return if_res863;
};
var do_unsafe_chaperone_procedure = function(unsafe_chaperone_procedure1651, name1652, proc1653, wrap_proc1654, props1655) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_proc1656 = normalize_proc(proc1653);
    var n_wrap_proc1657 = normalize_proc(wrap_proc1654);
    var or_part1658 = M0.not(keyword_procedure_p(n_proc1656));
    if (or_part1658 !== false) {
        var if_res865 = or_part1658;
    } else {
        var or_part1659 = M0.not(M0.procedure_p(wrap_proc1654));
        if (or_part1659 !== false) {
            var if_res864 = or_part1659;
        } else {
            var if_res864 = bad_props_p(props1655);
        }
        var if_res865 = if_res864;
    }
    if (if_res865 !== false) {
        var if_res866 = M0.apply(unsafe_chaperone_procedure1651, proc1653, wrap_proc1654, props1655);
    } else {
        chaperone_arity_match_checking(false, name1652, proc1653, wrap_proc1654, props1655);
        var if_res866 = M0.apply(unsafe_chaperone_procedure1651, proc1653, wrap_proc1654, props1655);
    }
    return if_res866;
};
var bad_props_p = function(props1660) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1661 = function(props1662) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(props1662) !== false) {
            var if_res869 = false;
        } else {
            if (M0.__rjs_quoted__.impersonator_property_p(M0.car(props1662)) !== false) {
                var props1663 = M0.cdr(props1662);
                var or_part1664 = M0.null_p(props1663);
                if (or_part1664 !== false) {
                    var if_res867 = or_part1664;
                } else {
                    var if_res867 = loop1661(M0.cdr(props1663));
                }
                var if_res868 = if_res867;
            } else {
                var if_res868 = true;
            }
            var if_res869 = if_res868;
        }
        return if_res869;
    };
    return loop1661(props1660);
};
var chaperone_arity_match_checking = function(self_arg_p1665, name1666, proc1667, wrap_proc1668, props1669) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var a1670 = M0.procedure_arity(proc1667);
    var b1671 = M0.procedure_arity(wrap_proc1668);
    if (self_arg_p1665 !== false) {
        var if_res870 = 1;
    } else {
        var if_res870 = 0;
    }
    var d1672 = if_res870;
    var let_result871 = procedure_keywords(proc1667);
    var a_req1673 = let_result871.getAt(0);
    var a_allow1674 = let_result871.getAt(1);
    var let_result872 = procedure_keywords(wrap_proc1668);
    var b_req1675 = let_result872.getAt(0);
    var b_allow1676 = let_result872.getAt(1);
    var includes_p1677 = function(a1678, b1679) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.number_p(b1679) !== false) {
            if (M0.number_p(a1678) !== false) {
                var if_res874 = M0.__eq_(b1679, a1678 + d1672);
            } else {
                if (M0.arity_at_least_p(a1678) !== false) {
                    var if_res873 = M0.__gt__eq_(b1679, M0.arity_at_least_value(a1678) + d1672);
                } else {
                    var if_res873 = M0.ormap(function(a1680) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return includes_p1677(a1680, b1679);
                    }, a1678);
                }
                var if_res874 = if_res873;
            }
            var if_res878 = if_res874;
        } else {
            if (M0.arity_at_least_p(b1679) !== false) {
                if (M0.number_p(a1678) !== false) {
                    var if_res876 = false;
                } else {
                    if (M0.arity_at_least_p(a1678) !== false) {
                        var if_res875 = M0.__gt__eq_(M0.arity_at_least_value(b1679), M0.arity_at_least_value(a1678) + d1672);
                    } else {
                        var if_res875 = M0.ormap(function(a1681) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return includes_p1677(b1679, a1681);
                        }, a1678);
                    }
                    var if_res876 = if_res875;
                }
                var if_res877 = if_res876;
            } else {
                var if_res877 = M0.andmap(function(b1682) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return includes_p1677(a1678, b1682);
                }, b1679);
            }
            var if_res878 = if_res877;
        }
        return if_res878;
    };
    if (includes_p1677(b1671, a1670) !== false) {
        var if_res879 = M0.rvoid();
    } else {
        var if_res879 = M0.apply(M0.__rjs_quoted__.chaperone_procedure, proc1667, wrap_proc1668, props1669);
    }
    if_res879;
    if (subset_p(b_req1675, a_req1673) !== false) {
        var if_res880 = M0.rvoid();
    } else {
        var if_res880 = M0.__rjs_quoted__.raise_arguments_error_times_(name1666, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrapper procedure requires more keywords than original procedure"), $rjs_core.UString.make("wrapper procedure"), wrap_proc1668, $rjs_core.UString.make("original procedure"), proc1667);
    }
    if_res880;
    var or_part1683 = M0.not(b_allow1676);
    if (or_part1683 !== false) {
        var if_res882 = or_part1683;
    } else {
        if (a_allow1674 !== false) {
            var if_res881 = subset_p(a_allow1674, b_allow1676);
        } else {
            var if_res881 = false;
        }
        var if_res882 = if_res881;
    }
    if (if_res882 !== false) {
        var if_res883 = M0.rvoid();
    } else {
        var if_res883 = M0.__rjs_quoted__.raise_arguments_error_times_(name1666, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrapper procedure does not accept all keywords of original procedure"), $rjs_core.UString.make("wrapper procedure"), wrap_proc1668, $rjs_core.UString.make("original procedure"), proc1667);
    }
    if_res883;
    return M0.rvoid();
};
var normalize_proc = function(proc1684) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(proc1684) !== false) {
        var if_res891 = proc1684;
    } else {
        if (new_procedure_p(proc1684) !== false) {
            var let_result884 = procedure_keywords(proc1684);
            var req_kws1685 = let_result884.getAt(0);
            var allowed_kws1686 = let_result884.getAt(1);
            if (M0.null_p(allowed_kws1686) !== false) {
                var if_res889 = proc1684;
            } else {
                var if_res889 = make_optional_keyword_procedure(function(given_kws1687, given_argc1688) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.procedure_arity_includes_p(proc1684, given_argc1688 - 2, true) !== false) {
                        var or_part1689 = M0.not(allowed_kws1686);
                        if (or_part1689 !== false) {
                            var if_res886 = or_part1689;
                        } else {
                            var if_res886 = subset_p(given_kws1687, allowed_kws1686);
                        }
                        if (if_res886 !== false) {
                            var if_res887 = subset_p(req_kws1685, given_kws1687);
                        } else {
                            var if_res887 = false;
                        }
                        var if_res888 = if_res887;
                    } else {
                        var if_res888 = false;
                    }
                    return if_res888;
                }, $rjs_core.attachProcedureArity(function(kws1690, kw_args1691, ...vals1692885) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var vals1692 = $rjs_core.Pair.listFromArray(vals1692885);
                    return keyword_apply(proc1684, kws1690, kw_args1691, vals1692);
                }), req_kws1685, allowed_kws1686, proc1684);
            }
            var if_res890 = if_res889;
        } else {
            var if_res890 = proc1684;
        }
        var if_res891 = if_res890;
    }
    return if_res891;
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