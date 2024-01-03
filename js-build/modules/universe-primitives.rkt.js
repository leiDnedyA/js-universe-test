import * as $rjs_core from '../runtime/core.js';
import * as M0 from "../runtime/kernel.rkt.js";
import * as M1 from "../collects/racket/private/map.rkt.js";
import * as M2 from "../collects/racket/private/list-predicates.rkt.js";
import * as M3 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
var sexp_p = function(x1072) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M2.empty_p(x1072) !== false) {
        var if_res490 = true;
    } else {
        if (M0.string_p(x1072) !== false) {
            var if_res489 = true;
        } else {
            if (M0.bytes_p(x1072) !== false) {
                var if_res488 = true;
            } else {
                if (M0.symbol_p(x1072) !== false) {
                    var if_res487 = true;
                } else {
                    if (M0.number_p(x1072) !== false) {
                        var if_res486 = true;
                    } else {
                        if (M0.boolean_p(x1072) !== false) {
                            var if_res485 = true;
                        } else {
                            if (M0.char_p(x1072) !== false) {
                                var if_res484 = true;
                            } else {
                                if (M0.pair_p(x1072) !== false) {
                                    if (M0.list_p(x1072) !== false) {
                                        var if_res482 = M1.andmap(sexp_p, x1072);
                                    } else {
                                        var if_res482 = false;
                                    }
                                    var if_res483 = if_res482;
                                } else {
                                    var if_res483 = false;
                                }
                                var if_res484 = if_res483;
                            }
                            var if_res485 = if_res484;
                        }
                        var if_res486 = if_res485;
                    }
                    var if_res487 = if_res486;
                }
                var if_res488 = if_res487;
            }
            var if_res489 = if_res488;
        }
        var if_res490 = if_res489;
    }
    return if_res490;
};
var let_result491 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("u-package"), false, 2, 0, false, M0.rnull, M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1), false, $rjs_core.PrimitiveSymbol.make("u-package"));
var struct_1073 = let_result491.getAt(0);
var make_1074 = let_result491.getAt(1);
var __p1075 = let_result491.getAt(2);
var __ref1076 = let_result491.getAt(3);
var __set_bang_1077 = let_result491.getAt(4);
var let_result492 = M0.values(struct_1073, make_1074, __p1075, M0.make_struct_field_accessor(__ref1076, 0, $rjs_core.PrimitiveSymbol.make("world")), M0.make_struct_field_accessor(__ref1076, 1, $rjs_core.PrimitiveSymbol.make("message")));
var struct_u_package = let_result492.getAt(0);
var u_package1 = let_result492.getAt(1);
var u_package_p = let_result492.getAt(2);
var u_package_world = let_result492.getAt(3);
var u_package_message = let_result492.getAt(4);
var make_package = function(world1078, message1079) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_package1(world1078, message1079);
};
var package_p = function(p1080) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_package_p(p1080);
};
var package_world = function(p1081) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_package_world(p1081);
};
var package_message = function(p1082) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_package_message(p1082);
};
var let_result493 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("u-bundle"), false, 3, 0, false, M0.rnull, M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2), false, $rjs_core.PrimitiveSymbol.make("u-bundle"));
var struct_1083 = let_result493.getAt(0);
var make_1084 = let_result493.getAt(1);
var __p1085 = let_result493.getAt(2);
var __ref1086 = let_result493.getAt(3);
var __set_bang_1087 = let_result493.getAt(4);
var let_result494 = M0.values(struct_1083, make_1084, __p1085, M0.make_struct_field_accessor(__ref1086, 0, $rjs_core.PrimitiveSymbol.make("state")), M0.make_struct_field_accessor(__ref1086, 1, $rjs_core.PrimitiveSymbol.make("mails")), M0.make_struct_field_accessor(__ref1086, 2, $rjs_core.PrimitiveSymbol.make("low-to-remove")));
var struct_u_bundle = let_result494.getAt(0);
var u_bundle2 = let_result494.getAt(1);
var u_bundle_p = let_result494.getAt(2);
var u_bundle_state = let_result494.getAt(3);
var u_bundle_mails = let_result494.getAt(4);
var u_bundle_low_to_remove = let_result494.getAt(5);
var make_bundle = function(state1088, mails1089, low_to_remove1090) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_bundle2(state1088, mails1089, low_to_remove1090);
};
var bundle_p = function(bundle1091) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_bundle_p(bundle1091);
};
var bundle_state = function(b1092) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_bundle_state(b1092);
};
var bundle_mails = function(b1093) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_bundle_mails(b1093);
};
var bundle_low_to_remove = function(b1094) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_bundle_low_to_remove(b1094);
};
var let_result495 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("u-mail"), false, 2, 0, false, M0.rnull, M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1), false, $rjs_core.PrimitiveSymbol.make("u-mail"));
var struct_1095 = let_result495.getAt(0);
var make_1096 = let_result495.getAt(1);
var __p1097 = let_result495.getAt(2);
var __ref1098 = let_result495.getAt(3);
var __set_bang_1099 = let_result495.getAt(4);
var let_result496 = M0.values(struct_1095, make_1096, __p1097, M0.make_struct_field_accessor(__ref1098, 0, $rjs_core.PrimitiveSymbol.make("to")), M0.make_struct_field_accessor(__ref1098, 1, $rjs_core.PrimitiveSymbol.make("content")));
var struct_u_mail = let_result496.getAt(0);
var u_mail3 = let_result496.getAt(1);
var u_mail_p = let_result496.getAt(2);
var u_mail_to = let_result496.getAt(3);
var u_mail_content = let_result496.getAt(4);
var make_mail = function(to1100, content1101) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_mail3(to1100, content1101);
};
var mail_p = function(mail1102) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_mail_p(mail1102);
};
var mail_to = function(mail1103) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_mail_to(mail1103);
};
var mail_content = function(mail1104) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_mail_content(mail1104);
};
var let_result497 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("u-iworld"), false, 2, 0, false, M0.rnull, M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1), false, $rjs_core.PrimitiveSymbol.make("u-iworld"));
var struct_1105 = let_result497.getAt(0);
var make_1106 = let_result497.getAt(1);
var __p1107 = let_result497.getAt(2);
var __ref1108 = let_result497.getAt(3);
var __set_bang_1109 = let_result497.getAt(4);
var let_result498 = M0.values(struct_1105, make_1106, __p1107, M0.make_struct_field_accessor(__ref1108, 0, $rjs_core.PrimitiveSymbol.make("conn")), M0.make_struct_field_accessor(__ref1108, 1, $rjs_core.PrimitiveSymbol.make("name")));
var struct_u_iworld = let_result498.getAt(0);
var u_iworld4 = let_result498.getAt(1);
var u_iworld_p = let_result498.getAt(2);
var u_iworld_conn = let_result498.getAt(3);
var u_iworld_name = let_result498.getAt(4);
var iworld_name = function(iworld1110) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_iworld_name(iworld1110);
};
var iworld_p = function(iworld1111) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_iworld_p(iworld1111);
};
var iworld_eq__p = function(iw11112, iw21113) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var conn11114 = u_iworld_conn(iw11112);
    var conn21115 = u_iworld_conn(iw21113);
    return conn11114 === conn21115;
};
var make_iworld = function(conn1116, name1117) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_iworld4(conn1116, name1117);
};
var iworld_conn = function(iw1118) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_iworld_conn(iw1118);
};
var __rjs_quoted__ = {};
__rjs_quoted__.u_mail3 = u_mail3;
__rjs_quoted__.struct_u_mail = struct_u_mail;
__rjs_quoted__.u_iworld4 = u_iworld4;
__rjs_quoted__.u_iworld_p = u_iworld_p;
__rjs_quoted__.u_package_message = u_package_message;
__rjs_quoted__.u_mail_p = u_mail_p;
__rjs_quoted__.struct_u_package = struct_u_package;
__rjs_quoted__.u_package_p = u_package_p;
__rjs_quoted__.u_bundle_state = u_bundle_state;
__rjs_quoted__.u_mail_content = u_mail_content;
__rjs_quoted__.u_bundle_mails = u_bundle_mails;
__rjs_quoted__.u_iworld_name = u_iworld_name;
__rjs_quoted__.u_package_world = u_package_world;
__rjs_quoted__.struct_u_bundle = struct_u_bundle;
__rjs_quoted__.u_mail_to = u_mail_to;
__rjs_quoted__.u_iworld_conn = u_iworld_conn;
__rjs_quoted__.u_bundle_low_to_remove = u_bundle_low_to_remove;
__rjs_quoted__.u_package1 = u_package1;
__rjs_quoted__.u_bundle_p = u_bundle_p;
__rjs_quoted__.struct_u_iworld = struct_u_iworld;
__rjs_quoted__.u_bundle2 = u_bundle2;
export {
    __rjs_quoted__,
    iworld_conn,
    make_iworld,
    mail_content,
    mail_to,
    bundle_low_to_remove,
    bundle_mails,
    bundle_state,
    iworld_eq__p,
    iworld_p,
    iworld_name,
    mail_p,
    make_mail,
    bundle_p,
    make_bundle,
    package_message,
    package_world,
    package_p,
    make_package,
    sexp_p
};