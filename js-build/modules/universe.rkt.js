import * as $rjs_core from '../runtime/core.js';
import * as M0 from "./encode-decode.rkt.js";
import * as M1 from "../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../collects/racket/private/kw.rkt.js";
import * as M3 from "../runtime/kernel.rkt.js";
import * as M4 from "./jscommon.rkt.js";
import * as M5 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
import * as M6 from "./universe-server.rkt.js";
import * as M7 from "./universe-primitives.rkt.js";
import * as M8 from "../runtime/unsafe.rkt.js";
var __times_default_frames_per_second_times_ = 70;
var make_big_bang = function(init_world2, handlers3, dom_root4) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((dom_root4 != null) !== false) {
        var if_res1 = dom_root4;
    } else {
        var if_res1 = document.body;
    }
    return new BigBang(init_world2, handlers3, if_res1);
};
var big_bang = function(dom_root15, init_world36, new_rest7) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var init_world8 = init_world36;
    if (M3.eq_p(dom_root15, M8.unsafe_undefined) !== false) {
        var if_res2 = null;
    } else {
        var if_res2 = dom_root15;
    }
    var dom_root9 = if_res2;
    var handlers10 = new_rest7;
    return make_big_bang(init_world8, handlers10, dom_root9).setup().start();
};
var big_bang1 = function(given_kws11, given_args12, init_world313, new_rest14) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var dom_root215 = M3.pair_p(given_kws11);
    if (dom_root215 !== false) {
        var if_res3 = M3.car(given_args12);
    } else {
        var if_res3 = M8.unsafe_undefined;
    }
    var dom_root116 = if_res3;
    return big_bang(dom_root116, init_world313, new_rest14);
};
var cl9 = $rjs_core.attachProcedureArity(function(given_kws21, given_args22, init_world23, ...handlers2412) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers24 = $rjs_core.Pair.listFromArray(handlers2412);
    return big_bang1(given_kws21, given_args22, init_world23, handlers24);
});
var temp13 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam10 = {} [arguments.length];
    if (fixed_lam10 !== undefined) {
        return fixed_lam10.apply(null, arguments);
    } else {
        if (M3.__gt__eq_(cl9.length, 1) !== false) {
            var if_res11 = cl9.apply(null, arguments);
        } else {
            var if_res11 = M3.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res11;
    }
}, [M3.make_arity_at_least(3)]);
var temp8 = $rjs_core.Pair.makeList($rjs_core.Keyword.make("dom-root"));
var cl4 = $rjs_core.attachProcedureArity(function(init_world25, ...handlers267) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers26 = $rjs_core.Pair.listFromArray(handlers267);
    return big_bang1(M3.rnull, M3.rnull, init_world25, handlers26);
});
var big_bang4 = M2.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws17, given_argc18) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M3.__gt__eq_(given_argc18, 3) !== false) {
        var l13050419 = given_kws17;
        if (M3.null_p(l13050419) !== false) {
            var if_res15 = l13050419;
        } else {
            if (M3.eq_p(M3.car(l13050419), $rjs_core.Keyword.make("dom-root")) !== false) {
                var if_res14 = M3.cdr(l13050419);
            } else {
                var if_res14 = l13050419;
            }
            var if_res15 = if_res14;
        }
        var l13050420 = if_res15;
        var if_res16 = M3.null_p(l13050420);
    } else {
        var if_res16 = false;
    }
    return if_res16;
}, temp13, M3.rnull, temp8, $rjs_core.attachProcedureArity(function() {
    var fixed_lam5 = {} [arguments.length];
    if (fixed_lam5 !== undefined) {
        return fixed_lam5.apply(null, arguments);
    } else {
        if (M3.__gt__eq_(cl4.length, 1) !== false) {
            var if_res6 = cl4.apply(null, arguments);
        } else {
            var if_res6 = M3.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res6;
    }
}, [M3.make_arity_at_least(1)]));
var BigBang = function(init_world27, handlers28, dom_root29) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this30 = this;
    this30.world = init_world27;
    var let_result17 = M3.values();
    this30.interval = 1000 / __times_default_frames_per_second_times_;
    var let_result18 = M3.values();
    this30.handlers = handlers28;
    var let_result19 = M3.values();
    this30.is_universe_p = false;
    var let_result20 = M3.values();
    this30.dom_root = dom_root29;
    var let_result21 = M3.values();
    this30.__active_handlers = {};
    var let_result22 = M3.values();
    this30.__world_change_listeners = [];
    var let_result23 = M3.values();
    this30.__package_listeners = [];
    var let_result24 = M3.values();
    this30.__uses_peer = false;
    var let_result25 = M3.values();
    this30.__peer_name = "client";
    var let_result26 = M3.values();
    this30.__server_id = "server";
    var let_result27 = M3.values();
    this30.__peer = undefined;
    var let_result28 = M3.values();
    this30.__conn = undefined;
    var let_result29 = M3.values();
    this30.__peer_init_tasks = [];
    var let_result30 = M3.values();
    this30.__idle = true;
    var let_result31 = M3.values();
    this30.__stopped = true;
    var let_result32 = M3.values();
    this30.__events = [];
    var let_result33 = M3.values();
    var canvas31 = M4.document.createElement("canvas");
    var ctx32 = canvas31.getContext("2d");
    canvas31.setAttribute("tabindex", 1);
    canvas31.setAttribute("style", "outline: none");
    this30.__canvas = canvas31;
    this30.__context = ctx32;
    return null;
};
BigBang.prototype.setup = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this33 = this;
    var canvas34 = this33.__canvas;
    this33.dom_root.appendChild(canvas34);
    var let_result34 = M3.values();
    canvas34.focus();
    var let_result35 = M3.values();
    this33.register_handlers();
    var let_result36 = M3.values();
    if (this33.__uses_peer !== false) {
        var if_res37 = this33.init_peer_connection();
    } else {
        var if_res37 = M3.rvoid();
    }
    if_res37;
    var let_result38 = M3.values();
    var draw_handler35 = this33.__active_handlers["to-draw"];
    if (draw_handler35 !== false) {
        var if_res39 = M3.rvoid();
    } else {
        var if_res39 = M3.error($rjs_core.PrimitiveSymbol.make("big-bang"), $rjs_core.UString.make("to-draw handle not provided"));
    }
    if_res39;
    var let_result40 = M3.values();
    var img36 = draw_handler35.callback(this33.world);
    canvas34.width = img36.width;
    canvas34.height = img36.height;
    this33.change_world(this33.world);
    return this33;
};
BigBang.prototype.register_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this37 = this;
    var active_handlers38 = this37.__active_handlers;
    var loop39 = function(handlers40) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M3.pair_p(handlers40) !== false) {
            var h41 = M3.car(handlers40)(this37);
            h41.register();
            active_handlers38[h41.name] = h41;
            var if_res41 = loop39(M3.cdr(handlers40));
        } else {
            var if_res41 = M3.rvoid();
        }
        return if_res41;
    };
    return loop39(this37.handlers);
};
BigBang.prototype.deregister_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this42 = this;
    var active_handlers43 = this42.__active_handlers;
    return Object.keys(active_handlers43).forEach(function(key44) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var h45 = active_handlers43[key44];
        h45.deregister();
        active_handlers43[h45.name] = undefined;
        return null;
    });
};
BigBang.prototype.start = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this46 = this;
    this46.__stopped = false;
    this46.queue_event({
        'type': "to-draw"
    });
    return this46.process_events();
};
BigBang.prototype.stop = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this47 = this;
    this47.clear_event_queue();
    this47.__stopped = true;
    this47.__idle = true;
    this47.deregister_handlers();
    this47.__canvas.remove();
    this47.__active_handlers = {};
    this47.handlers = $rjs_core.Pair.EMPTY;
    return null;
};
BigBang.prototype.clear_event_queue = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this48 = this;
    return this48.__events.splice(0, this48.__events.length);
};
BigBang.prototype.queue_event = function(e49) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this50 = this;
    this50.__events.push(e49);
    if (this50.__idle !== false) {
        var self51 = this50;
        var if_res42 = window.requestAnimationFrame(function() {
            if (arguments.length !== 0) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return self51.process_events();
        });
    } else {
        var if_res42 = M3.rvoid();
    }
    return if_res42;
};
BigBang.prototype.change_world = function(handler_result52) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this53 = this;
    var new_world54 = handler_result52;
    if (M7.package_p(handler_result52) !== false) {
        new_world54 = M7.package_world(handler_result52);
        var if_res43 = this53.handle_package(handler_result52);
    } else {
        var if_res43 = M3.rvoid();
    }
    if_res43;
    var let_result44 = M3.values();
    var listeners55 = this53.__world_change_listeners;
    var loop56 = function(i57) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M3.__lt_(i57, listeners55.length) !== false) {
            var listener58 = listeners55[i57];
            listener58(new_world54);
            var if_res45 = loop56(M3.add1(i57));
        } else {
            var if_res45 = M3.rvoid();
        }
        return if_res45;
    };
    loop56(0);
    this53.world = new_world54;
    return null;
};
BigBang.prototype.add_world_change_listener = function(cb59) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this60 = this;
    return this60.__world_change_listeners.push(cb59);
};
BigBang.prototype.remove_world_change_listener = function(cb61) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this62 = this;
    var index63 = this62.__world_change_listeners.indexOf(cb61);
    return this62.__world_change_listeners.splice(index63, 1);
};
BigBang.prototype.handle_package = function(pkg64) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this65 = this;
    var message66 = M7.package_message(pkg64);
    var listeners67 = this65.__package_listeners;
    var loop68 = function(i69) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M3.__lt_(i69, listeners67.length) !== false) {
            var listener70 = listeners67[i69];
            listener70(message66);
            var if_res46 = loop68(M3.add1(i69));
        } else {
            var if_res46 = M3.rvoid();
        }
        return if_res46;
    };
    return loop68(0);
};
BigBang.prototype.add_package_listener = function(cb71) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this72 = this;
    return this72.__package_listeners.push(cb71);
};
BigBang.prototype.remove_package_listener = function(cb73) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this74 = this;
    var index75 = this74.__package_listeners.indexOf(cb73);
    return this74.__package_listeners.splice(index75, 1);
};
BigBang.prototype.process_events = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this76 = this;
    var events77 = this76.__events;
    this76.__idle = false;
    var loop78 = function(world_changed_p79) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M3.__gt_(events77.length, 0) !== false) {
            var evt80 = events77.shift();
            var handler81 = this76.__active_handlers[evt80.type];
            if (M3.equal_p(evt80.type, "raw") !== false) {
                var if_res49 = evt80.invoke(this76.world, evt80);
            } else {
                if ((handler81 === undefined) !== false) {
                    console.warn("WARNING: processing event w/ undefined handler.");
                    var if_res48 = M3.rvoid();
                } else {
                    if (handler81 !== false) {
                        var if_res47 = handler81.invoke(this76.world, evt80);
                    } else {
                        var if_res47 = M4.console.warn($rjs_core.UString.make("ignoring unknown/unregistered event type: "), evt80);
                    }
                    var if_res48 = if_res47;
                }
                var if_res49 = if_res48;
            }
            var changed_p82 = if_res49;
            var or_part83 = world_changed_p79;
            if (or_part83 !== false) {
                var if_res50 = or_part83;
            } else {
                var if_res50 = changed_p82;
            }
            var if_res53 = loop78(if_res50);
        } else {
            if (world_changed_p79 !== false) {
                var if_res51 = M3.not(this76.__stopped);
            } else {
                var if_res51 = false;
            }
            if (if_res51 !== false) {
                this76.queue_event({
                    'type': "to-draw"
                });
                var if_res52 = loop78(false);
            } else {
                var if_res52 = M3.rvoid();
            }
            var if_res53 = if_res52;
        }
        return if_res53;
    };
    loop78(false);
    this76.__idle = true;
    return null;
};
BigBang.prototype.init_peer_connection = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this84 = this;
    var peer85 = new M6.Peer();
    this84.__peer = peer85;
    return peer85.on("open", function() {
        if (arguments.length !== 0) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var conn86 = peer85.connect(M1.js_string(this84.__server_id), {
            'label': this84.__peer_name
        });
        this84.__conn = conn86;
        var let_result54 = M3.values();
        var init_tasks87 = this84.__peer_init_tasks;
        var on_conn_open88 = function() {
            if (arguments.length !== 0) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            var loop89 = function(i90) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M3.__lt_(i90, init_tasks87.length) !== false) {
                    var task91 = init_tasks87[i90];
                    task91(peer85, conn86);
                    var if_res55 = loop89(M3.add1(i90));
                } else {
                    var if_res55 = M3.rvoid();
                }
                return if_res55;
            };
            loop89(0);
            window.addEventListener("beforeunload", function(_92) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return conn86.close();
            });
            return window.addEventListener("unload", function(_93) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return conn86.close();
            });
        };
        conn86.on("open", on_conn_open88);
        return conn86.on("close", function(_94) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            console.log("conn closed");
            return alert("Client has been disconnected by the server or the connection has been lost.");
        });
    });
};
BigBang.prototype.add_peer_init_task = function(cb95) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this96 = this;
    var conn97 = this96.__conn;
    var peer98 = this96.__peer;
    if ((typeof(conn97) === "undefined") !== false) {
        var if_res56 = false;
    } else {
        var if_res56 = conn97.open;
    }
    var conn_open_p99 = if_res56;
    if (conn_open_p99 !== false) {
        var if_res57 = cb95(peer98, conn97);
    } else {
        var if_res57 = this96.__peer_init_tasks.push(cb95);
    }
    return if_res57;
};
var to_draw = function(cb100) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb101) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_tick_evt102 = {
            'type': "to-draw"
        };
        return {
            'name': "to-draw",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M3.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M3.rvoid();
            },
            'callback': cb100,
            'invoke': function(world103, evt104) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var ctx105 = bb101.__context;
                var img106 = cb100(bb101.world);
                var height107 = img106.height;
                var width108 = img106.width;
                ctx105.clearRect(0, 0, width108, height107);
                img106.render(ctx105, width108 / 2, height107 / 2);
                return false;
            }
        };
    };
};
var on_tick = function(cb109, rate110) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb_u111) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_tick_evt112 = {
            'type': "on-tick"
        };
        return {
            'name': "on-tick",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this113 = this;
                bb_u111.queue_event(on_tick_evt112);
                if (rate110 !== false) {
                    rate110 = 1000 * rate110;
                    var if_res58 = null;
                } else {
                    rate110 = bb_u111.interval;
                    var if_res58 = null;
                }
                return if_res58;
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this114 = this;
                var last_cb115 = this114.last_cb;
                if (last_cb115 !== false) {
                    var if_res59 = window.clearTimeout(last_cb115);
                } else {
                    var if_res59 = M3.rvoid();
                }
                return if_res59;
            },
            'invoke': function(state116, _117) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this118 = this;
                if (bb_u111.is_universe_p !== false) {
                    var if_res60 = bb_u111.change_state(cb109(state116));
                } else {
                    var if_res60 = bb_u111.change_world(cb109(state116));
                }
                if_res60;
                this118.last_cb = setTimeout(function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return bb_u111.queue_event(on_tick_evt112);
                }, rate110);
                return true;
            }
        };
    };
};
var on_mouse = function(cb119) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb120) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "on-mouse",
            'listeners': {},
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this121 = this;
                var canvas122 = bb120.__canvas;
                var make_listener123 = function(r_evt_name124) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return function(evt125) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var posn126 = canvas_posn_δ(canvas122, evt125);
                        return bb120.queue_event({
                            'type': "on-mouse",
                            'evt': M1.js_string__gt_string(r_evt_name124),
                            'x': posn126.x,
                            'y': posn126.y
                        });
                    };
                };
                var register_listener127 = function(evt_name128, r_evt_name129) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var cb130 = make_listener123(r_evt_name129);
                    canvas122.addEventListener(evt_name128, cb130);
                    this121.listeners[evt_name128] = cb130;
                    return null;
                };
                register_listener127("mousemove", "move");
                register_listener127("mousedown", "button-down");
                register_listener127("mouseup", "button-up");
                register_listener127("mouseout", "leave");
                register_listener127("mouseover", "enter");
                return register_listener127("drag", "drag");
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this131 = this;
                var remove_listener132 = function(evt_name133) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var cb134 = this131.listeners[evt_name133];
                    return bb120.__canvas.removeEventListener(evt_name133, cb134);
                };
                remove_listener132("mousemove");
                remove_listener132("mousedown");
                remove_listener132("mouseup");
                remove_listener132("mouseout");
                remove_listener132("mouseover");
                return remove_listener132("drag");
            },
            'invoke': function(world135, evt136) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var new_world137 = cb119(world135, evt136.x, evt136.y, evt136.evt);
                bb120.change_world(new_world137);
                return true;
            }
        };
    };
};
var on_key = function(cb138) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb139) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "on-key",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this140 = this;
                var canvas141 = bb139.__canvas;
                this140.listener = function(evt142) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    evt142.preventDefault();
                    evt142.stopPropagation();
                    return bb139.queue_event({
                        'type': "on-key",
                        'key': key_event__gt_key_name(evt142)
                    });
                };
                return canvas141.addEventListener("keydown", this140.listener);
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this143 = this;
                bb139.__canvas.removeEventListener("keydown", this143.listener);
                this143.listener = undefined;
                return null;
            },
            'invoke': function(world144, evt145) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var new_world146 = cb138(world144, evt145.key);
                bb139.change_world(new_world146);
                return true;
            }
        };
    };
};
var on_release = function(cb147) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb148) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "on-release",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this149 = this;
                var canvas150 = bb148.__canvas;
                this149.listener = function(evt151) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    evt151.preventDefault();
                    evt151.stopPropagation();
                    return bb148.queue_event({
                        'type': "on-release",
                        'key': key_event__gt_key_name(evt151)
                    });
                };
                return canvas150.addEventListener("keyup", this149.listener);
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this152 = this;
                bb148.__canvas.removeEventListener("keyup", this152.listener);
                this152.listener = undefined;
                return null;
            },
            'invoke': function(world153, evt154) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var new_world155 = cb147(world153, evt154.key);
                bb148.change_world(new_world155);
                return true;
            }
        };
    };
};
var stop_when156 = function(last_world_p6157, last_picture5158) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var last_world_p159 = last_world_p6157;
    if (false !== false) {
        var if_res61 = false;
    } else {
        var if_res61 = last_picture5158;
    }
    var last_picture160 = if_res61;
    return function(bb161) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "stop-when",
            'predicate': last_world_p159,
            'lastpicture': last_picture160,
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this162 = this;
                return bb161.add_world_change_listener(this162.invoke);
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this163 = this;
                return bb161.remove_world_change_listener(this163.invoke);
            },
            'invoke': function(w164) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (last_world_p159(w164) !== false) {
                    bb161.stop();
                    if (last_picture160 !== false) {
                        var handler165 = to_draw(last_picture160)(bb161);
                        var if_res62 = bb161.queue_event({
                            'type': "raw",
                            'invoke': handler165.invoke
                        });
                    } else {
                        var if_res62 = M3.rvoid();
                    }
                    var if_res63 = if_res62;
                } else {
                    var if_res63 = M3.rvoid();
                }
                return if_res63;
            }
        };
    };
};
var cl64 = function(last_world_p166) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return stop_when156(last_world_p166, false);
};
var cl65 = function(last_world_p167, last_picture5168) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return stop_when156(last_world_p167, last_picture5168);
};
var stop_when = $rjs_core.attachProcedureArity(function() {
    var fixed_lam66 = {
        '1': cl64,
        '2': cl65
    } [arguments.length];
    if (fixed_lam66 !== undefined) {
        return fixed_lam66.apply(null, arguments);
    } else {
        return M3.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var key_table = {
    'Backspace': $rjs_core.UString.make("\b"),
    'Enter': $rjs_core.UString.make("\r"),
    'Tab': $rjs_core.UString.make("\t"),
    'ArrowLeft': $rjs_core.UString.make("left"),
    'ArrowRight': $rjs_core.UString.make("right"),
    'ArrowDown': $rjs_core.UString.make("down"),
    'ArrowUp': $rjs_core.UString.make("up"),
    'Shift': $rjs_core.UString.make("shift"),
    'Control': $rjs_core.UString.make("control"),
    'ControlRight': $rjs_core.UString.make("rcontrol"),
    'ControlLeft': $rjs_core.UString.make("control"),
    'ShiftRight': $rjs_core.UString.make("rshift"),
    'ShiftLeft': $rjs_core.UString.make("shift"),
    'Escape': $rjs_core.UString.make("escape"),
    'Home': $rjs_core.UString.make("home"),
    'End': $rjs_core.UString.make("end"),
    'Insert': $rjs_core.UString.make("insert"),
    'Delete': $rjs_core.UString.make("\u007F"),
    'Pause': $rjs_core.UString.make("pause"),
    'NumLock': $rjs_core.UString.make("numlock"),
    'F1': $rjs_core.UString.make("f1"),
    'F2': $rjs_core.UString.make("f2"),
    'F3': $rjs_core.UString.make("f3"),
    'F4': $rjs_core.UString.make("f4"),
    'F5': $rjs_core.UString.make("f5"),
    'F6': $rjs_core.UString.make("f6"),
    'F7': $rjs_core.UString.make("f7"),
    'F8': $rjs_core.UString.make("f8"),
    'F9': $rjs_core.UString.make("f9"),
    'F10': $rjs_core.UString.make("f10"),
    'F11': $rjs_core.UString.make("f11"),
    'F12': $rjs_core.UString.make("f12")
};
var key_event__gt_key_name = function(e169) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var k170 = e169.key;
    var or_part172 = k170 === "Shift";
    if (or_part172 !== false) {
        var if_res68 = or_part172;
    } else {
        var or_part173 = k170 === "Control";
        if (or_part173 !== false) {
            var if_res67 = or_part173;
        } else {
            var if_res67 = k170 === "Alt";
        }
        var if_res68 = if_res67;
    }
    if (if_res68 !== false) {
        var if_res69 = e169.code;
    } else {
        var if_res69 = k170;
    }
    var code171 = if_res69;
    var key_table_code174 = key_table[code171];
    if (M3.void_p(key_table_code174) !== false) {
        var if_res70 = M1.js_string__gt_string(code171);
    } else {
        var if_res70 = key_table_code174;
    }
    return if_res70;
};
var canvas_posn_δ = function(canvas175, evt176) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var rect177 = canvas175.getBoundingClientRect();
    return {
        'x': evt176.clientX - rect177.left,
        'y': evt176.clientY - rect177.top
    };
};
var key_eq__p = function(k1178, k2179) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M3.equal_p(k1178, k2179);
};
var mouse_eq__p = function(m1180, m2181) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M3.equal_p(m1180, m2181);
};
var on_receive = function(cb182) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb183) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_receive_evt184 = {
            'type': "on-receive"
        };
        return {
            'name': "on-receive",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this185 = this;
                bb183.add_peer_init_task(function(peer186, conn187) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    this185.conn_data_listener = function(data188) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return bb183.queue_event({
                            'type': on_receive_evt184.type,
                            'msg': data188
                        });
                    };
                    conn187.on("data", this185.conn_data_listener);
                    this185.package_listener = function(message189) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var this190 = this;
                        conn187.send(M0.encode_data(message189));
                        return 0;
                    };
                    return bb183.add_package_listener(this185.package_listener);
                });
                return 0;
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this191 = this;
                var peer192 = bb183.__peer;
                if ((typeof(peer192) === "undefined") !== false) {
                    var if_res71 = false;
                } else {
                    var if_res71 = M3.not(peer192.disconnected);
                }
                var should_destroy_peer_p193 = if_res71;
                if (should_destroy_peer_p193 !== false) {
                    peer192.disconnect();
                    var if_res72 = peer192.destroy();
                } else {
                    var if_res72 = M3.rvoid();
                }
                if_res72;
                bb183.remove_package_listener(this191.package_listener);
                return 0;
            },
            'invoke': function(world194, evt195) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this196 = this;
                bb183.change_world(cb182(world194, M0.decode_data(evt195.msg)));
                return true;
            }
        };
    };
};
var register = function(server_id197) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb198) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "register",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this199 = this;
                bb198.__server_id = server_id197;
                bb198.__uses_peer = true;
                return 0;
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this200 = this;
                var conn201 = bb198.__conn;
                if ((typeof(conn201) === "undefined") !== false) {
                    var if_res73 = false;
                } else {
                    var if_res73 = conn201.open;
                }
                var conn_open_p202 = if_res73;
                console.log(conn_open_p202);
                if (conn_open_p202 !== false) {
                    var if_res74 = conn201.close();
                } else {
                    var if_res74 = M3.rvoid();
                }
                if_res74;
                return 0;
            },
            'invoke': function(world203, evt204) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this205 = this;
                return true;
            }
        };
    };
};
var name = function(name206) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb207) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "name",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this208 = this;
                bb207.__peer_name = M1.js_string(name206);
                return M3.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M3.rvoid();
            }
        };
    };
};
var __rjs_quoted__ = {};
__rjs_quoted__.big_bang = big_bang;
__rjs_quoted__.key_event__gt_key_name = key_event__gt_key_name;
__rjs_quoted__.name = name;
__rjs_quoted__.big_bang4 = big_bang4;
__rjs_quoted__.register = register;
export {
    __rjs_quoted__,
    mouse_eq__p,
    key_eq__p,
    big_bang,
    stop_when,
    to_draw,
    name,
    register,
    on_receive,
    on_release,
    on_key,
    on_tick,
    on_mouse
};