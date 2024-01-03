import * as $rjs_core from '../runtime/core.js';
import * as M0 from "./encode-decode.rkt.js";
import * as M1 from "../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../collects/racket/private/kw.rkt.js";
import * as M3 from "./util.rkt.js";
import * as M4 from "../runtime/kernel.rkt.js";
import * as M5 from "../collects/racket/private/map.rkt.js";
import * as M6 from "./server-gui.rkt.js";
import * as M7 from "./jscommon.rkt.js";
import * as M8 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
import * as M9 from "./universe-primitives.rkt.js";
import * as M10 from "../runtime/unsafe.rkt.js";
import * as peerjs from "https://cdnjs.cloudflare.com/ajax/libs/peerjs/1.4.7/peerjs.min.js";
var Peer = window.Peer;
var DEFAULT_UNIVERSE_ID = $rjs_core.UString.make("server");
var __times_default_frames_per_second_times_ = 70;
var make_universe = function(init_state1120, handlers1121, gui_root1122) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((gui_root1122 != null) !== false) {
        var if_res499 = gui_root1122;
    } else {
        var if_res499 = document.body;
    }
    return new Universe(init_state1120, handlers1121, if_res499);
};
var universe = function(dom_root11123, init_state31124, new_rest1125) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var init_state1126 = init_state31124;
    if (M4.eq_p(dom_root11123, M10.unsafe_undefined) !== false) {
        var if_res500 = null;
    } else {
        var if_res500 = dom_root11123;
    }
    var gui_root1127 = if_res500;
    var handlers1128 = new_rest1125;
    return make_universe(init_state1126, handlers1128, gui_root1127).setup().start();
};
var universe1119 = function(given_kws1129, given_args1130, init_state31131, new_rest1132) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var dom_root21133 = M4.pair_p(given_kws1129);
    if (dom_root21133 !== false) {
        var if_res501 = M4.car(given_args1130);
    } else {
        var if_res501 = M10.unsafe_undefined;
    }
    var dom_root11134 = if_res501;
    return universe(dom_root11134, init_state31131, new_rest1132);
};
var cl507 = $rjs_core.attachProcedureArity(function(given_kws1139, given_args1140, init_state1141, ...handlers1142510) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers1142 = $rjs_core.Pair.listFromArray(handlers1142510);
    return universe1119(given_kws1139, given_args1140, init_state1141, handlers1142);
});
var temp511 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam508 = {} [arguments.length];
    if (fixed_lam508 !== undefined) {
        return fixed_lam508.apply(null, arguments);
    } else {
        if (M4.__gt__eq_(cl507.length, 1) !== false) {
            var if_res509 = cl507.apply(null, arguments);
        } else {
            var if_res509 = M4.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res509;
    }
}, [M4.make_arity_at_least(3)]);
var temp506 = $rjs_core.Pair.makeList($rjs_core.Keyword.make("dom-root"));
var cl502 = $rjs_core.attachProcedureArity(function(init_state1143, ...handlers1144505) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers1144 = $rjs_core.Pair.listFromArray(handlers1144505);
    return universe1119(M4.rnull, M4.rnull, init_state1143, handlers1144);
});
var universe4 = M2.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws1135, given_argc1136) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M4.__gt__eq_(given_argc1136, 3) !== false) {
        var l11077461137 = given_kws1135;
        if (M4.null_p(l11077461137) !== false) {
            var if_res513 = l11077461137;
        } else {
            if (M4.eq_p(M4.car(l11077461137), $rjs_core.Keyword.make("dom-root")) !== false) {
                var if_res512 = M4.cdr(l11077461137);
            } else {
                var if_res512 = l11077461137;
            }
            var if_res513 = if_res512;
        }
        var l11077461138 = if_res513;
        var if_res514 = M4.null_p(l11077461138);
    } else {
        var if_res514 = false;
    }
    return if_res514;
}, temp511, M4.rnull, temp506, $rjs_core.attachProcedureArity(function() {
    var fixed_lam503 = {} [arguments.length];
    if (fixed_lam503 !== undefined) {
        return fixed_lam503.apply(null, arguments);
    } else {
        if (M4.__gt__eq_(cl502.length, 1) !== false) {
            var if_res504 = cl502.apply(null, arguments);
        } else {
            var if_res504 = M4.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res504;
    }
}, [M4.make_arity_at_least(1)]));
var Universe = function(init_state1145, handlers1146, gui_root1147) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1148 = this;
    this1148.state = init_state1145;
    this1148.interval = 1000 / __times_default_frames_per_second_times_;
    this1148.handlers = handlers1146;
    this1148.is_universe_p = true;
    this1148.gui = M6.server_gui(gui_root1147);
    this1148.__active_handlers = {};
    this1148.__state_change_listeners = [];
    this1148.__message_listeners = [];
    this1148.__peer = undefined;
    this1148.__peer_init_tasks = [];
    this1148.__active_iworlds = [];
    this1148.__disconnect_tasks = [];
    this1148.__peer_id = DEFAULT_UNIVERSE_ID;
    this1148.__idle = true;
    this1148.__stopped = true;
    this1148.__events = [];
    return null;
};
Universe.prototype.setup = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1149 = this;
    this1149.register_handlers();
    var let_result515 = M4.values();
    this1149.gui.show();
    var let_result516 = M4.values();
    var log_connection1150 = function(conn1151) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return this1149.gui.log(M4.format($rjs_core.UString.make("~a signed up"), M1.js_string__gt_string(conn1151.label)));
    };
    var log_new_msg1152 = function(iw1153, data1154) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return this1149.gui.log(M4.format($rjs_core.UString.make("~a --> universe:\n<~a>"), M9.iworld_name(iw1153), M3.msg__gt_string(M0.decode_data(data1154))));
    };
    this1149.add_peer_init_task(function(peer1155) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return peer1155.on("connection", log_connection1150);
    });
    this1149.__message_listeners.push(log_new_msg1152);
    return this1149;
};
Universe.prototype.start = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1156 = this;
    this1156.init_peer_connection();
    this1156.gui.log(M4.format($rjs_core.UString.make("a new universe is up and running with id ~s"), M1.js_string__gt_string(this1156.__peer.id)));
    return this1156;
};
Universe.prototype.register_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1157 = this;
    var active_handlers1158 = this1157.__active_handlers;
    var loop1159 = function(handlers1160) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.pair_p(handlers1160) !== false) {
            var h1161 = M4.car(handlers1160)(this1157);
            h1161.register();
            active_handlers1158[h1161.name] = h1161;
            var if_res517 = loop1159(M4.cdr(handlers1160));
        } else {
            var if_res517 = M4.rvoid();
        }
        return if_res517;
    };
    return loop1159(this1157.handlers);
};
Universe.prototype.deregister_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1162 = this;
    var active_handlers1163 = this1162.__active_handlers;
    return Object.keys(active_handlers1163).forEach(function(key1164) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var h1165 = active_handlers1163[key1164];
        h1165.deregister();
        active_handlers1163[h1165.name] = undefined;
        return null;
    });
};
Universe.prototype.stop = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1166 = this;
    this1166.gui.log($rjs_core.UString.make("stopping the universe\n----------------------------------"));
    return M4.rvoid();
};
Universe.prototype.clear_event_queue = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1167 = this;
    return this1167.__events.splice(0, this1167.__events.length);
};
Universe.prototype.add_state_change_listener = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return 0;
};
Universe.prototype.remove_state_change_listener = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return 0;
};
Universe.prototype.queue_event = function(e1168) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1169 = this;
    this1169.__events.push(e1168);
    if (this1169.__idle !== false) {
        var self1170 = this1169;
        var if_res518 = window.requestAnimationFrame(function() {
            if (arguments.length !== 0) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return self1170.process_events();
        });
    } else {
        var if_res518 = M4.rvoid();
    }
    return if_res518;
};
Universe.prototype.process_events = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1171 = this;
    var events1172 = this1171.__events;
    this1171.__idle = false;
    var loop1173 = function(state_changed_p1174) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.__gt_(events1172.length, 0) !== false) {
            var evt1175 = events1172.shift();
            var handler1176 = this1171.__active_handlers[evt1175.type];
            if (M4.equal_p(evt1175.type, "raw") !== false) {
                var if_res520 = evt1175.invoke(this1171.state, evt1175);
            } else {
                if (M4.not(typeof(handler1176) === "undefined") !== false) {
                    var if_res519 = handler1176.invoke(this1171.state, evt1175);
                } else {
                    var if_res519 = M7.console.warn($rjs_core.UString.make("ignoring unknown/unregistered event type: "), evt1175);
                }
                var if_res520 = if_res519;
            }
            var changed_p1177 = if_res520;
            var or_part1178 = state_changed_p1174;
            if (or_part1178 !== false) {
                var if_res521 = or_part1178;
            } else {
                var if_res521 = changed_p1177;
            }
            var if_res522 = loop1173(if_res521);
        } else {
            var if_res522 = M4.rvoid();
        }
        return if_res522;
    };
    loop1173(false);
    this1171.__idle = true;
    return null;
};
Universe.prototype.change_state = function(result_bundle1179) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1180 = this;
    var new_state1181 = M9.bundle_state(result_bundle1179);
    var mails1182 = M9.bundle_mails(result_bundle1179);
    var low_to_remove1183 = M9.bundle_low_to_remove(result_bundle1179);
    M5.for_each(function(curr_mail1184) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var iworld1185 = M9.mail_to(curr_mail1184);
        var conn1186 = M9.iworld_conn(iworld1185);
        conn1186.send(M0.encode_data(M9.mail_content(curr_mail1184)));
        return this1180.gui.log(M4.format($rjs_core.UString.make("universe --> ~a:\n<~a>"), M9.iworld_name(iworld1185), M9.mail_content(curr_mail1184)));
    }, mails1182);
    var let_result523 = M4.values();
    M5.for_each(function(iw1187) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var conn1188 = M9.iworld_conn(iw1187);
        var index1189 = this1180.__active_iworlds.indexOf(iw1187);
        conn1188.close();
        if (M4.__gt_(index1189, -1) !== false) {
            var if_res524 = this1180.__active_iworlds.splice(index1189, 1);
        } else {
            var if_res524 = M4.rvoid();
        }
        return if_res524;
    }, low_to_remove1183);
    var let_result525 = M4.values();
    var listeners1190 = this1180.__state_change_listeners;
    var loop1191 = function(i1192) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.__lt_(i1192, listeners1190.length) !== false) {
            var listener1193 = listeners1190[i1192];
            listener1193(new_state1181);
            var if_res526 = loop1191(M4.add1(i1192));
        } else {
            var if_res526 = M4.rvoid();
        }
        return if_res526;
    };
    loop1191(0);
    this1180.state = new_state1181;
    return null;
};
Universe.prototype.init_peer_connection = function(id1194) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1195 = this;
    var peer1196 = new Peer(this1195.__peer_id);
    this1195.__peer = peer1196;
    return peer1196.on("open", function() {
        if (arguments.length !== 0) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var init_tasks1197 = this1195.__peer_init_tasks;
        var loop1198 = function(i1199) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M4.__lt_(i1199, init_tasks1197.length) !== false) {
                var task1200 = init_tasks1197[i1199];
                task1200(peer1196);
                var if_res527 = loop1198(M4.add1(i1199));
            } else {
                var if_res527 = M4.rvoid();
            }
            return if_res527;
        };
        return loop1198(0);
    });
};
Universe.prototype.add_peer_init_task = function(cb1201) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1202 = this;
    var peer1203 = this1202.__peer;
    var peer_started_p1204 = M4.not(typeof(peer1203) === "undefined");
    if (peer_started_p1204 !== false) {
        var if_res528 = cb1201(peer1203);
    } else {
        var if_res528 = this1202.__peer_init_tasks.push(cb1201);
    }
    return if_res528;
};
Universe.prototype.pass_message = function(sender_iw1205, data1206) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1207 = this;
    return this1207.__message_listeners.forEach(function(cb1208) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return cb1208(sender_iw1205, data1206);
    });
};
Universe.prototype.handle_disconnect = function(iw1209) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1210 = this;
    var tasks1211 = this1210.__disconnect_tasks;
    var loop1212 = function(i1213) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.__lt_(i1213, tasks1211.length) !== false) {
            var task1214 = tasks1211[i1213];
            task1214(iw1209);
            var if_res529 = loop1212(M4.add1(i1213));
        } else {
            var if_res529 = M4.rvoid();
        }
        return if_res529;
    };
    loop1212(0);
    this1210.gui.log(M4.format($rjs_core.UString.make("~a !! closed port"), M9.iworld_name(iw1209)));
    return M4.rvoid();
};
var on_new = function(cb1215) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(u1216) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_new_evt1217 = {
            'type': "on-new"
        };
        return {
            'name': "on-new",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1218 = this;
                var init_task1219 = function(peer1220) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var handle_connection1221 = function(conn1222) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var name1223 = $rjs_core.UString.make("client name");
                        if (conn1222.label !== false) {
                            name1223 = M1.js_string__gt_string(conn1222.label);
                            var if_res530 = null;
                        } else {
                            var if_res530 = M4.rvoid();
                        }
                        if_res530;
                        var let_result531 = M4.values();
                        var iw1224 = M9.make_iworld(conn1222, name1223);
                        u1216.__active_iworlds.push(iw1224);
                        u1216.queue_event({
                            'type': "on-new",
                            'iWorld': iw1224
                        });
                        conn1222.on("close", function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return u1216.handle_disconnect(iw1224);
                        });
                        return conn1222.on("data", function(data1225) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return u1216.pass_message(iw1224, data1225);
                        });
                    };
                    return peer1220.on("connection", handle_connection1221);
                };
                u1216.add_peer_init_task(init_task1219);
                return M4.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1226 = this;
                return M4.rvoid();
            },
            'invoke': function(state1227, evt1228) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1229 = this;
                var conn1230 = M9.iworld_conn(evt1228.iWorld);
                conn1230.on("open", function(_1231) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return u1216.change_state(cb1215(state1227, evt1228.iWorld));
                });
                return true;
            }
        };
    };
};
var on_disconnect = function(cb1232) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(u1233) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_disconnect_evt1234 = {
            'type': "on-disconnect"
        };
        return {
            'name': "on-disconnect",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1235 = this;
                u1233.__disconnect_tasks.push(function(iworld1236) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return u1233.queue_event({
                        'type': "on-disconnect",
                        'iWorld': iworld1236
                    });
                });
                return M4.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1237 = this;
                return M4.rvoid();
            },
            'invoke': function(state1238, evt1239) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1240 = this;
                u1233.change_state(cb1232(state1238, evt1239.iWorld));
                return M4.rvoid();
            }
        };
    };
};
var server_id = function(id1241) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(u1242) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "server-id",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1243 = this;
                u1242.__peer_id = M1.js_string(id1241);
                return M4.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1244 = this;
                return M4.rvoid();
            }
        };
    };
};
var on_msg = function(cb1245) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(u1246) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_msg_evt1247 = {
            'type': "on-msg"
        };
        return {
            'name': "on-msg",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1248 = this;
                var handle_msg1249 = function(sender1250, data1251) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return u1246.queue_event({
                        'type': "on-msg",
                        'iWorld': sender1250,
                        'msg': data1251
                    });
                };
                u1246.__message_listeners.push(handle_msg1249);
                return M4.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1252 = this;
                return M4.rvoid();
            },
            'invoke': function(state1253, evt1254) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                u1246.change_state(cb1245(state1253, evt1254.iWorld, M0.decode_data(evt1254.msg)));
                return true;
            }
        };
    };
};
var __rjs_quoted__ = {};
__rjs_quoted__.universe = universe;
__rjs_quoted__.universe4 = universe4;
export {
    __rjs_quoted__,
    Peer,
    server_id,
    on_disconnect,
    on_msg,
    on_new,
    universe
};