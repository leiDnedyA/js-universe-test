import * as $rjs_core from '../runtime/core.js';
import * as M0 from "../runtime/kernel.rkt.js";
import * as M1 from "../collects/racket/private/map.rkt.js";
import * as M2 from "../collects/racket/private/list-predicates.rkt.js";
import * as M3 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
var sexp_p = function(x1076) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M2.empty_p(x1076) !== false) {
        var if_res490 = true;
    } else {
        if (M0.string_p(x1076) !== false) {
            var if_res489 = true;
        } else {
            if (M0.bytes_p(x1076) !== false) {
                var if_res488 = true;
            } else {
                if (M0.symbol_p(x1076) !== false) {
                    var if_res487 = true;
                } else {
                    if (M0.number_p(x1076) !== false) {
                        var if_res486 = true;
                    } else {
                        if (M0.boolean_p(x1076) !== false) {
                            var if_res485 = true;
                        } else {
                            if (M0.char_p(x1076) !== false) {
                                var if_res484 = true;
                            } else {
                                if (M0.pair_p(x1076) !== false) {
                                    if (M0.list_p(x1076) !== false) {
                                        var if_res482 = M1.andmap(sexp_p, x1076);
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
var struct_1077 = let_result491.getAt(0);
var make_1078 = let_result491.getAt(1);
var __p1079 = let_result491.getAt(2);
var __ref1080 = let_result491.getAt(3);
var __set_bang_1081 = let_result491.getAt(4);
var let_result492 = M0.values(struct_1077, make_1078, __p1079, M0.make_struct_field_accessor(__ref1080, 0, $rjs_core.PrimitiveSymbol.make("world")), M0.make_struct_field_accessor(__ref1080, 1, $rjs_core.PrimitiveSymbol.make("message")));
var struct_u_package = let_result492.getAt(0);
var u_package1 = let_result492.getAt(1);
var u_package_p = let_result492.getAt(2);
var u_package_world = let_result492.getAt(3);
var u_package_message = let_result492.getAt(4);
var make_package = function(world1082, message1083) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_package1(world1082, message1083);
};
var package_p = function(p1084) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_package_p(p1084);
};
var package_world = function(p1085) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_package_world(p1085);
};
var package_message = function(p1086) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_package_message(p1086);
};
var let_result493 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("u-bundle"), false, 3, 0, false, M0.rnull, M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2), false, $rjs_core.PrimitiveSymbol.make("u-bundle"));
var struct_1087 = let_result493.getAt(0);
var make_1088 = let_result493.getAt(1);
var __p1089 = let_result493.getAt(2);
var __ref1090 = let_result493.getAt(3);
var __set_bang_1091 = let_result493.getAt(4);
var let_result494 = M0.values(struct_1087, make_1088, __p1089, M0.make_struct_field_accessor(__ref1090, 0, $rjs_core.PrimitiveSymbol.make("state")), M0.make_struct_field_accessor(__ref1090, 1, $rjs_core.PrimitiveSymbol.make("mails")), M0.make_struct_field_accessor(__ref1090, 2, $rjs_core.PrimitiveSymbol.make("low-to-remove")));
var struct_u_bundle = let_result494.getAt(0);
var u_bundle2 = let_result494.getAt(1);
var u_bundle_p = let_result494.getAt(2);
var u_bundle_state = let_result494.getAt(3);
var u_bundle_mails = let_result494.getAt(4);
var u_bundle_low_to_remove = let_result494.getAt(5);
var make_bundle = function(state1092, mails1093, low_to_remove1094) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_bundle2(state1092, mails1093, low_to_remove1094);
};
var bundle_p = function(bundle1095) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_bundle_p(bundle1095);
};
var bundle_state = function(b1096) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_bundle_state(b1096);
};
var bundle_mails = function(b1097) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_bundle_mails(b1097);
};
var bundle_low_to_remove = function(b1098) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_bundle_low_to_remove(b1098);
};
var let_result495 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("u-mail"), false, 2, 0, false, M0.rnull, M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1), false, $rjs_core.PrimitiveSymbol.make("u-mail"));
var struct_1099 = let_result495.getAt(0);
var make_1100 = let_result495.getAt(1);
var __p1101 = let_result495.getAt(2);
var __ref1102 = let_result495.getAt(3);
var __set_bang_1103 = let_result495.getAt(4);
var let_result496 = M0.values(struct_1099, make_1100, __p1101, M0.make_struct_field_accessor(__ref1102, 0, $rjs_core.PrimitiveSymbol.make("to")), M0.make_struct_field_accessor(__ref1102, 1, $rjs_core.PrimitiveSymbol.make("content")));
var struct_u_mail = let_result496.getAt(0);
var u_mail3 = let_result496.getAt(1);
var u_mail_p = let_result496.getAt(2);
var u_mail_to = let_result496.getAt(3);
var u_mail_content = let_result496.getAt(4);
var make_mail = function(to1104, content1105) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_mail3(to1104, content1105);
};
var mail_p = function(mail1106) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_mail_p(mail1106);
};
var mail_to = function(mail1107) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_mail_to(mail1107);
};
var mail_content = function(mail1108) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_mail_content(mail1108);
};
var let_result497 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("u-iworld"), false, 2, 0, false, M0.rnull, M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1), false, $rjs_core.PrimitiveSymbol.make("u-iworld"));
var struct_1109 = let_result497.getAt(0);
var make_1110 = let_result497.getAt(1);
var __p1111 = let_result497.getAt(2);
var __ref1112 = let_result497.getAt(3);
var __set_bang_1113 = let_result497.getAt(4);
var let_result498 = M0.values(struct_1109, make_1110, __p1111, M0.make_struct_field_accessor(__ref1112, 0, $rjs_core.PrimitiveSymbol.make("conn")), M0.make_struct_field_accessor(__ref1112, 1, $rjs_core.PrimitiveSymbol.make("name")));
var struct_u_iworld = let_result498.getAt(0);
var u_iworld4 = let_result498.getAt(1);
var u_iworld_p = let_result498.getAt(2);
var u_iworld_conn = let_result498.getAt(3);
var u_iworld_name = let_result498.getAt(4);
var iworld_name = function(iworld1114) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_iworld_name(iworld1114);
};
var iworld_p = function(iworld1115) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_iworld_p(iworld1115);
};
var iworld_eq__p = function(iw11116, iw21117) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var conn11118 = u_iworld_conn(iw11116);
    var conn21119 = u_iworld_conn(iw21117);
    return conn11118 === conn21119;
};
var make_iworld = function(conn1120, name1121) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_iworld4(conn1120, name1121);
};
var iworld_conn = function(iw1122) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_iworld_conn(iw1122);
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