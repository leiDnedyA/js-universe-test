import * as $rjs_core from '../runtime/core.js';
import * as M0 from "../runtime/kernel.rkt.js";
import * as M1 from "../collects/racket/private/map.rkt.js";
import * as M2 from "../collects/racket/private/list-predicates.rkt.js";
import * as M3 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
var sexp_p = function(x1114) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M2.empty_p(x1114) !== false) {
        var if_res510 = true;
    } else {
        if (M0.string_p(x1114) !== false) {
            var if_res509 = true;
        } else {
            if (M0.bytes_p(x1114) !== false) {
                var if_res508 = true;
            } else {
                if (M0.symbol_p(x1114) !== false) {
                    var if_res507 = true;
                } else {
                    if (M0.number_p(x1114) !== false) {
                        var if_res506 = true;
                    } else {
                        if (M0.boolean_p(x1114) !== false) {
                            var if_res505 = true;
                        } else {
                            if (M0.char_p(x1114) !== false) {
                                var if_res504 = true;
                            } else {
                                if (M0.pair_p(x1114) !== false) {
                                    if (M0.list_p(x1114) !== false) {
                                        var if_res502 = M1.andmap(sexp_p, x1114);
                                    } else {
                                        var if_res502 = false;
                                    }
                                    var if_res503 = if_res502;
                                } else {
                                    var if_res503 = false;
                                }
                                var if_res504 = if_res503;
                            }
                            var if_res505 = if_res504;
                        }
                        var if_res506 = if_res505;
                    }
                    var if_res507 = if_res506;
                }
                var if_res508 = if_res507;
            }
            var if_res509 = if_res508;
        }
        var if_res510 = if_res509;
    }
    return if_res510;
};
var let_result511 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("u-package"), false, 2, 0, false, M0.rnull, M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1), false, $rjs_core.PrimitiveSymbol.make("u-package"));
var struct_1115 = let_result511.getAt(0);
var make_1116 = let_result511.getAt(1);
var __p1117 = let_result511.getAt(2);
var __ref1118 = let_result511.getAt(3);
var __set_bang_1119 = let_result511.getAt(4);
var let_result512 = M0.values(struct_1115, make_1116, __p1117, M0.make_struct_field_accessor(__ref1118, 0, $rjs_core.PrimitiveSymbol.make("world")), M0.make_struct_field_accessor(__ref1118, 1, $rjs_core.PrimitiveSymbol.make("message")));
var struct_u_package = let_result512.getAt(0);
var u_package1 = let_result512.getAt(1);
var u_package_p = let_result512.getAt(2);
var u_package_world = let_result512.getAt(3);
var u_package_message = let_result512.getAt(4);
var make_package = function(world1120, message1121) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_package1(world1120, message1121);
};
var package_p = function(p1122) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_package_p(p1122);
};
var package_world = function(p1123) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_package_world(p1123);
};
var package_message = function(p1124) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_package_message(p1124);
};
var let_result513 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("u-bundle"), false, 3, 0, false, M0.rnull, M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2), false, $rjs_core.PrimitiveSymbol.make("u-bundle"));
var struct_1125 = let_result513.getAt(0);
var make_1126 = let_result513.getAt(1);
var __p1127 = let_result513.getAt(2);
var __ref1128 = let_result513.getAt(3);
var __set_bang_1129 = let_result513.getAt(4);
var let_result514 = M0.values(struct_1125, make_1126, __p1127, M0.make_struct_field_accessor(__ref1128, 0, $rjs_core.PrimitiveSymbol.make("state")), M0.make_struct_field_accessor(__ref1128, 1, $rjs_core.PrimitiveSymbol.make("mails")), M0.make_struct_field_accessor(__ref1128, 2, $rjs_core.PrimitiveSymbol.make("low-to-remove")));
var struct_u_bundle = let_result514.getAt(0);
var u_bundle2 = let_result514.getAt(1);
var u_bundle_p = let_result514.getAt(2);
var u_bundle_state = let_result514.getAt(3);
var u_bundle_mails = let_result514.getAt(4);
var u_bundle_low_to_remove = let_result514.getAt(5);
var make_bundle = function(state1130, mails1131, low_to_remove1132) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_bundle2(state1130, mails1131, low_to_remove1132);
};
var bundle_p = function(bundle1133) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_bundle_p(bundle1133);
};
var bundle_state = function(b1134) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_bundle_state(b1134);
};
var bundle_mails = function(b1135) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_bundle_mails(b1135);
};
var bundle_low_to_remove = function(b1136) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_bundle_low_to_remove(b1136);
};
var let_result515 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("u-mail"), false, 2, 0, false, M0.rnull, M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1), false, $rjs_core.PrimitiveSymbol.make("u-mail"));
var struct_1137 = let_result515.getAt(0);
var make_1138 = let_result515.getAt(1);
var __p1139 = let_result515.getAt(2);
var __ref1140 = let_result515.getAt(3);
var __set_bang_1141 = let_result515.getAt(4);
var let_result516 = M0.values(struct_1137, make_1138, __p1139, M0.make_struct_field_accessor(__ref1140, 0, $rjs_core.PrimitiveSymbol.make("to")), M0.make_struct_field_accessor(__ref1140, 1, $rjs_core.PrimitiveSymbol.make("content")));
var struct_u_mail = let_result516.getAt(0);
var u_mail3 = let_result516.getAt(1);
var u_mail_p = let_result516.getAt(2);
var u_mail_to = let_result516.getAt(3);
var u_mail_content = let_result516.getAt(4);
var make_mail = function(to1142, content1143) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_mail3(to1142, content1143);
};
var mail_p = function(mail1144) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_mail_p(mail1144);
};
var mail_to = function(mail1145) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_mail_to(mail1145);
};
var mail_content = function(mail1146) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_mail_content(mail1146);
};
var let_result517 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("u-iworld"), false, 2, 0, false, M0.rnull, M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1), false, $rjs_core.PrimitiveSymbol.make("u-iworld"));
var struct_1147 = let_result517.getAt(0);
var make_1148 = let_result517.getAt(1);
var __p1149 = let_result517.getAt(2);
var __ref1150 = let_result517.getAt(3);
var __set_bang_1151 = let_result517.getAt(4);
var let_result518 = M0.values(struct_1147, make_1148, __p1149, M0.make_struct_field_accessor(__ref1150, 0, $rjs_core.PrimitiveSymbol.make("conn")), M0.make_struct_field_accessor(__ref1150, 1, $rjs_core.PrimitiveSymbol.make("name")));
var struct_u_iworld = let_result518.getAt(0);
var u_iworld4 = let_result518.getAt(1);
var u_iworld_p = let_result518.getAt(2);
var u_iworld_conn = let_result518.getAt(3);
var u_iworld_name = let_result518.getAt(4);
var iworld_name = function(iworld1152) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_iworld_name(iworld1152);
};
var iworld_p = function(iworld1153) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_iworld_p(iworld1153);
};
var iworld_eq__p = function(iw11154, iw21155) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var conn11156 = u_iworld_conn(iw11154);
    var conn21157 = u_iworld_conn(iw21155);
    return conn11156 === conn21157;
};
var make_iworld = function(conn1158, name1159) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_iworld4(conn1158, name1159);
};
var iworld_conn = function(iw1160) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return u_iworld_conn(iw1160);
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