import * as $rjs_core from '../runtime/core.js';
import * as M0 from "./encode-decode.rkt.js";
import * as M1 from "../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../collects/racket/private/kw.rkt.js";
import * as M3 from "../runtime/kernel.rkt.js";
import * as M4 from "./jscommon.rkt.js";
import * as M5 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
import * as M6 from "./universe-server.rkt.js";
import * as M7 from "../links/racketscript-extras/racketscript/htdp/image.rkt.js";
import * as M8 from "./universe-primitives.rkt.js";
import * as M9 from "../runtime/unsafe.rkt.js";
var __times_default_frames_per_second_times_ = 70;
var text0 = function(txt2, size3, color4) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M7.text(M1.js_string__gt_string(txt2), size3, M1.js_string__gt_string(color4));
};
var rkt_list = function(element5) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M3.list(element5);
};
var make_big_bang = function(init_world6, handlers7, dom_root8) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((dom_root8 != null) !== false) {
        var if_res1 = dom_root8;
    } else {
        var if_res1 = document.body;
    }
    return new BigBang(init_world6, handlers7, if_res1);
};
var big_bang = function(dom_root19, init_world310, new_rest11) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var init_world12 = init_world310;
    if (M3.eq_p(dom_root19, M9.unsafe_undefined) !== false) {
        var if_res2 = null;
    } else {
        var if_res2 = dom_root19;
    }
    var dom_root13 = if_res2;
    var handlers14 = new_rest11;
    return make_big_bang(init_world12, handlers14, dom_root13).setup().start();
};
var big_bang1 = function(given_kws15, given_args16, init_world317, new_rest18) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var dom_root219 = M3.pair_p(given_kws15);
    if (dom_root219 !== false) {
        var if_res3 = M3.car(given_args16);
    } else {
        var if_res3 = M9.unsafe_undefined;
    }
    var dom_root120 = if_res3;
    return big_bang(dom_root120, init_world317, new_rest18);
};
var cl9 = $rjs_core.attachProcedureArity(function(given_kws25, given_args26, init_world27, ...handlers2812) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers28 = $rjs_core.Pair.listFromArray(handlers2812);
    return big_bang1(given_kws25, given_args26, init_world27, handlers28);
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
var cl4 = $rjs_core.attachProcedureArity(function(init_world29, ...handlers307) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers30 = $rjs_core.Pair.listFromArray(handlers307);
    return big_bang1(M3.rnull, M3.rnull, init_world29, handlers30);
});
var big_bang4 = M2.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws21, given_argc22) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M3.__gt__eq_(given_argc22, 3) !== false) {
        var l13050423 = given_kws21;
        if (M3.null_p(l13050423) !== false) {
            var if_res15 = l13050423;
        } else {
            if (M3.eq_p(M3.car(l13050423), $rjs_core.Keyword.make("dom-root")) !== false) {
                var if_res14 = M3.cdr(l13050423);
            } else {
                var if_res14 = l13050423;
            }
            var if_res15 = if_res14;
        }
        var l13050424 = if_res15;
        var if_res16 = M3.null_p(l13050424);
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
var BigBang = function(init_world31, handlers32, dom_root33) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this34 = this;
    this34.world = init_world31;
    var let_result17 = M3.values();
    this34.interval = 1000 / __times_default_frames_per_second_times_;
    var let_result18 = M3.values();
    this34.handlers = handlers32;
    var let_result19 = M3.values();
    this34.is_universe_p = false;
    var let_result20 = M3.values();
    this34.dom_root = dom_root33;
    var let_result21 = M3.values();
    this34.__active_handlers = {};
    var let_result22 = M3.values();
    this34.__world_change_listeners = [];
    var let_result23 = M3.values();
    this34.__package_listeners = [];
    var let_result24 = M3.values();
    this34.__uses_peer = false;
    var let_result25 = M3.values();
    this34.__peer_name = "client";
    var let_result26 = M3.values();
    this34.__server_id = "server";
    var let_result27 = M3.values();
    this34.__peer = undefined;
    var let_result28 = M3.values();
    this34.__conn = undefined;
    var let_result29 = M3.values();
    this34.__peer_init_tasks = [];
    var let_result30 = M3.values();
    this34.__idle = true;
    var let_result31 = M3.values();
    this34.__stopped = true;
    var let_result32 = M3.values();
    this34.__events = [];
    var let_result33 = M3.values();
    var canvas35 = M4.document.createElement("canvas");
    var ctx36 = canvas35.getContext("2d");
    canvas35.setAttribute("tabindex", 1);
    canvas35.setAttribute("style", "outline: none");
    this34.__canvas = canvas35;
    this34.__context = ctx36;
    return null;
};
BigBang.prototype.setup = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this37 = this;
    var canvas38 = this37.__canvas;
    this37.dom_root.appendChild(canvas38);
    var let_result34 = M3.values();
    canvas38.focus();
    var let_result35 = M3.values();
    this37.register_handlers();
    var let_result36 = M3.values();
    if (this37.__uses_peer !== false) {
        var if_res37 = this37.init_peer_connection();
    } else {
        var if_res37 = M3.rvoid();
    }
    if_res37;
    var let_result38 = M3.values();
    var draw_handler39 = this37.__active_handlers["to-draw"];
    if (draw_handler39 !== false) {
        var if_res39 = M3.rvoid();
    } else {
        var if_res39 = M3.error($rjs_core.PrimitiveSymbol.make("big-bang"), $rjs_core.UString.make("to-draw handle not provided"));
    }
    if_res39;
    var let_result40 = M3.values();
    var img40 = draw_handler39.callback(this37.world);
    canvas38.width = img40.width;
    canvas38.height = img40.height;
    this37.change_world(this37.world);
    return this37;
};
BigBang.prototype.register_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this41 = this;
    var active_handlers42 = this41.__active_handlers;
    var loop43 = function(handlers44) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M3.pair_p(handlers44) !== false) {
            var h45 = M3.car(handlers44)(this41);
            h45.register();
            active_handlers42[h45.name] = h45;
            var if_res41 = loop43(M3.cdr(handlers44));
        } else {
            var if_res41 = M3.rvoid();
        }
        return if_res41;
    };
    return loop43(this41.handlers);
};
BigBang.prototype.deregister_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this46 = this;
    var active_handlers47 = this46.__active_handlers;
    return Object.keys(active_handlers47).forEach(function(key48) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var h49 = active_handlers47[key48];
        h49.deregister();
        active_handlers47[h49.name] = undefined;
        return null;
    });
};
BigBang.prototype.start = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this50 = this;
    this50.__stopped = false;
    this50.queue_event({
        'type': "to-draw"
    });
    return this50.process_events();
};
BigBang.prototype.stop = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this51 = this;
    this51.clear_event_queue();
    this51.__stopped = true;
    this51.__idle = true;
    this51.deregister_handlers();
    this51.__canvas.remove();
    this51.__active_handlers = {};
    this51.handlers = $rjs_core.Pair.EMPTY;
    return null;
};
BigBang.prototype.clear_event_queue = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this52 = this;
    return this52.__events.splice(0, this52.__events.length);
};
BigBang.prototype.queue_event = function(e53) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this54 = this;
    this54.__events.push(e53);
    if (this54.__idle !== false) {
        var self55 = this54;
        var if_res42 = window.requestAnimationFrame(function() {
            if (arguments.length !== 0) {
              console.log(arguments[0])
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return self55.process_events();
        });
    } else {
        var if_res42 = M3.rvoid();
    }
    return if_res42;
};
BigBang.prototype.change_world = function(handler_result56) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this57 = this;
    var new_world58 = handler_result56;
    if (M8.package_p(handler_result56) !== false) {
        new_world58 = M8.package_world(handler_result56);
        var if_res43 = this57.handle_package(handler_result56);
    } else {
        var if_res43 = M3.rvoid();
    }
    if_res43;
    var let_result44 = M3.values();
    var listeners59 = this57.__world_change_listeners;
    var loop60 = function(i61) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M3.__lt_(i61, listeners59.length) !== false) {
            var listener62 = listeners59[i61];
            listener62(new_world58);
            var if_res45 = loop60(M3.add1(i61));
        } else {
            var if_res45 = M3.rvoid();
        }
        return if_res45;
    };
    loop60(0);
    this57.world = new_world58;
    return null;
};
BigBang.prototype.add_world_change_listener = function(cb63) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this64 = this;
    return this64.__world_change_listeners.push(cb63);
};
BigBang.prototype.remove_world_change_listener = function(cb65) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this66 = this;
    var index67 = this66.__world_change_listeners.indexOf(cb65);
    return this66.__world_change_listeners.splice(index67, 1);
};
BigBang.prototype.handle_package = function(pkg68) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this69 = this;
    var message70 = M8.package_message(pkg68);
    var listeners71 = this69.__package_listeners;
    var loop72 = function(i73) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M3.__lt_(i73, listeners71.length) !== false) {
            var listener74 = listeners71[i73];
            listener74(message70);
            var if_res46 = loop72(M3.add1(i73));
        } else {
            var if_res46 = M3.rvoid();
        }
        return if_res46;
    };
    return loop72(0);
};
BigBang.prototype.add_package_listener = function(cb75) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this76 = this;
    return this76.__package_listeners.push(cb75);
};
BigBang.prototype.remove_package_listener = function(cb77) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this78 = this;
    var index79 = this78.__package_listeners.indexOf(cb77);
    return this78.__package_listeners.splice(index79, 1);
};
BigBang.prototype.process_events = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this80 = this;
    var events81 = this80.__events;
    this80.__idle = false;
    var loop82 = function(world_changed_p83) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M3.__gt_(events81.length, 0) !== false) {
            var evt84 = events81.shift();
            var handler85 = this80.__active_handlers[evt84.type];
            if (M3.equal_p(evt84.type, "raw") !== false) {
                var if_res49 = evt84.invoke(this80.world, evt84);
            } else {
                if ((handler85 === undefined) !== false) {
                    console.warn("WARNING: processing event w/ undefined handler.");
                    var if_res48 = M3.rvoid();
                } else {
                    if (handler85 !== false) {
                        var if_res47 = handler85.invoke(this80.world, evt84);
                    } else {
                        var if_res47 = M4.console.warn($rjs_core.UString.make("ignoring unknown/unregistered event type: "), evt84);
                    }
                    var if_res48 = if_res47;
                }
                var if_res49 = if_res48;
            }
            var changed_p86 = if_res49;
            var or_part87 = world_changed_p83;
            if (or_part87 !== false) {
                var if_res50 = or_part87;
            } else {
                var if_res50 = changed_p86;
            }
            var if_res53 = loop82(if_res50);
        } else {
            if (world_changed_p83 !== false) {
                var if_res51 = M3.not(this80.__stopped);
            } else {
                var if_res51 = false;
            }
            if (if_res51 !== false) {
                this80.queue_event({
                    'type': "to-draw"
                });
                var if_res52 = loop82(false);
            } else {
                var if_res52 = M3.rvoid();
            }
            var if_res53 = if_res52;
        }
        return if_res53;
    };
    loop82(false);
    this80.__idle = true;
    return null;
};
BigBang.prototype.init_peer_connection = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this88 = this;
    var peer89 = new M6.Peer();
    this88.__peer = peer89;
    return peer89.on("open", function() {
        if (arguments.length !== 0) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var conn90 = peer89.connect(M1.js_string(this88.__server_id), {
            'label': this88.__peer_name
        });
        this88.__conn = conn90;
        var let_result54 = M3.values();
        var init_tasks91 = this88.__peer_init_tasks;
        var on_conn_open92 = function() {
            if (arguments.length !== 0) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            var loop93 = function(i94) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M3.__lt_(i94, init_tasks91.length) !== false) {
                    var task95 = init_tasks91[i94];
                    task95(peer89, conn90);
                    var if_res55 = loop93(M3.add1(i94));
                } else {
                    var if_res55 = M3.rvoid();
                }
                return if_res55;
            };
            loop93(0);
            window.addEventListener("beforeunload", function(_96) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return conn90.close();
            });
            return window.addEventListener("unload", function(_97) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return conn90.close();
            });
        };
        conn90.on("open", on_conn_open92);
        return conn90.on("close", function(_98) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            console.log("conn closed");
            return alert("Client has been disconnected by the server or the connection has been lost.");
        });
    });
};
BigBang.prototype.add_peer_init_task = function(cb99) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this100 = this;
    var conn101 = this100.__conn;
    var peer102 = this100.__peer;
    if ((typeof(conn101) === "undefined") !== false) {
        var if_res56 = false;
    } else {
        var if_res56 = conn101.open;
    }
    var conn_open_p103 = if_res56;
    if (conn_open_p103 !== false) {
        var if_res57 = cb99(peer102, conn101);
    } else {
        var if_res57 = this100.__peer_init_tasks.push(cb99);
    }
    return if_res57;
};
var to_draw = function(cb104) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb105) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_tick_evt106 = {
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
            'callback': cb104,
            'invoke': function(world107, evt108) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var ctx109 = bb105.__context;
                var img110 = cb104(bb105.world);
                var height111 = img110.height;
                var width112 = img110.width;
                ctx109.clearRect(0, 0, width112, height111);
                img110.render(ctx109, width112 / 2, height111 / 2);
                return false;
            }
        };
    };
};
var on_tick = function(cb113, rate114) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb_u115) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_tick_evt116 = {
            'type': "on-tick"
        };
        return {
            'name': "on-tick",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this117 = this;
                bb_u115.queue_event(on_tick_evt116);
                if (rate114 !== false) {
                    rate114 = 1000 * rate114;
                    var if_res58 = null;
                } else {
                    rate114 = bb_u115.interval;
                    var if_res58 = null;
                }
                return if_res58;
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this118 = this;
                var last_cb119 = this118.last_cb;
                if (last_cb119 !== false) {
                    var if_res59 = window.clearTimeout(last_cb119);
                } else {
                    var if_res59 = M3.rvoid();
                }
                return if_res59;
            },
            'invoke': function(state120, _121) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this122 = this;
                if (bb_u115.is_universe_p !== false) {
                    var if_res60 = bb_u115.change_state(cb113(state120));
                } else {
                    var if_res60 = bb_u115.change_world(cb113(state120));
                }
                if_res60;
                this122.last_cb = setTimeout(function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return bb_u115.queue_event(on_tick_evt116);
                }, rate114);
                return true;
            }
        };
    };
};
var on_mouse = function(cb123) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb124) {
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
                var this125 = this;
                var canvas126 = bb124.__canvas;
                var make_listener127 = function(r_evt_name128) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return function(evt129) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var posn130 = canvas_posn_δ(canvas126, evt129);
                        return bb124.queue_event({
                            'type': "on-mouse",
                            'evt': M1.js_string__gt_string(r_evt_name128),
                            'x': posn130.x,
                            'y': posn130.y
                        });
                    };
                };
                var register_listener131 = function(evt_name132, r_evt_name133) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var cb134 = make_listener127(r_evt_name133);
                    canvas126.addEventListener(evt_name132, cb134);
                    this125.listeners[evt_name132] = cb134;
                    return null;
                };
                register_listener131("mousemove", "move");
                register_listener131("mousedown", "button-down");
                register_listener131("mouseup", "button-up");
                register_listener131("mouseout", "leave");
                register_listener131("mouseover", "enter");
                return register_listener131("drag", "drag");
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this135 = this;
                var remove_listener136 = function(evt_name137) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var cb138 = this135.listeners[evt_name137];
                    return bb124.__canvas.removeEventListener(evt_name137, cb138);
                };
                remove_listener136("mousemove");
                remove_listener136("mousedown");
                remove_listener136("mouseup");
                remove_listener136("mouseout");
                remove_listener136("mouseover");
                return remove_listener136("drag");
            },
            'invoke': function(world139, evt140) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var new_world141 = cb123(world139, evt140.x, evt140.y, evt140.evt);
                bb124.change_world(new_world141);
                return true;
            }
        };
    };
};
var on_key = function(cb142) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb143) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "on-key",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this144 = this;
                var canvas145 = bb143.__canvas;
                this144.listener = function(evt146) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    evt146.preventDefault();
                    evt146.stopPropagation();
                    return bb143.queue_event({
                        'type': "on-key",
                        'key': key_event__gt_key_name(evt146)
                    });
                };
                return canvas145.addEventListener("keydown", this144.listener);
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this147 = this;
                bb143.__canvas.removeEventListener("keydown", this147.listener);
                this147.listener = undefined;
                return null;
            },
            'invoke': function(world148, evt149) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var new_world150 = cb142(world148, evt149.key);
                bb143.change_world(new_world150);
                return true;
            }
        };
    };
};
var on_release = function(cb151) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb152) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "on-release",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this153 = this;
                var canvas154 = bb152.__canvas;
                this153.listener = function(evt155) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    evt155.preventDefault();
                    evt155.stopPropagation();
                    return bb152.queue_event({
                        'type': "on-release",
                        'key': key_event__gt_key_name(evt155)
                    });
                };
                return canvas154.addEventListener("keyup", this153.listener);
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this156 = this;
                bb152.__canvas.removeEventListener("keyup", this156.listener);
                this156.listener = undefined;
                return null;
            },
            'invoke': function(world157, evt158) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var new_world159 = cb151(world157, evt158.key);
                bb152.change_world(new_world159);
                return true;
            }
        };
    };
};
var stop_when160 = function(last_world_p6161, last_picture5162) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var last_world_p163 = last_world_p6161;
    if (false !== false) {
        var if_res61 = false;
    } else {
        var if_res61 = last_picture5162;
    }
    var last_picture164 = if_res61;
    return function(bb165) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "stop-when",
            'predicate': last_world_p163,
            'lastpicture': last_picture164,
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this166 = this;
                return bb165.add_world_change_listener(this166.invoke);
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this167 = this;
                return bb165.remove_world_change_listener(this167.invoke);
            },
            'invoke': function(w168) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (last_world_p163(w168) !== false) {
                    bb165.stop();
                    if (last_picture164 !== false) {
                        var handler169 = to_draw(last_picture164)(bb165);
                        var if_res62 = bb165.queue_event({
                            'type': "raw",
                            'invoke': handler169.invoke
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
var cl64 = function(last_world_p170) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return stop_when160(last_world_p170, false);
};
var cl65 = function(last_world_p171, last_picture5172) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return stop_when160(last_world_p171, last_picture5172);
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
var key_event__gt_key_name = function(e173) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var k174 = e173.key;
    var or_part176 = k174 === "Shift";
    if (or_part176 !== false) {
        var if_res68 = or_part176;
    } else {
        var or_part177 = k174 === "Control";
        if (or_part177 !== false) {
            var if_res67 = or_part177;
        } else {
            var if_res67 = k174 === "Alt";
        }
        var if_res68 = if_res67;
    }
    if (if_res68 !== false) {
        var if_res69 = e173.code;
    } else {
        var if_res69 = k174;
    }
    var code175 = if_res69;
    var key_table_code178 = key_table[code175];
    if (M3.void_p(key_table_code178) !== false) {
        var if_res70 = M1.js_string__gt_string(code175);
    } else {
        var if_res70 = key_table_code178;
    }
    return if_res70;
};
var canvas_posn_δ = function(canvas179, evt180) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var rect181 = canvas179.getBoundingClientRect();
    return {
        'x': evt180.clientX - rect181.left,
        'y': evt180.clientY - rect181.top
    };
};
var key_eq__p = function(k1182, k2183) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M3.equal_p(k1182, k2183);
};
var mouse_eq__p = function(m1184, m2185) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M3.equal_p(m1184, m2185);
};
var on_receive = function(cb186) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb187) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_receive_evt188 = {
            'type': "on-receive"
        };
        return {
            'name': "on-receive",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this189 = this;
                bb187.add_peer_init_task(function(peer190, conn191) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    this189.conn_data_listener = function(data192) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return bb187.queue_event({
                            'type': on_receive_evt188.type,
                            'msg': data192
                        });
                    };
                    conn191.on("data", this189.conn_data_listener);
                    this189.package_listener = function(message193) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var this194 = this;
                        conn191.send(M0.encode_data(message193));
                        return 0;
                    };
                    return bb187.add_package_listener(this189.package_listener);
                });
                return 0;
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this195 = this;
                var peer196 = bb187.__peer;
                if ((typeof(peer196) === "undefined") !== false) {
                    var if_res71 = false;
                } else {
                    var if_res71 = M3.not(peer196.disconnected);
                }
                var should_destroy_peer_p197 = if_res71;
                if (should_destroy_peer_p197 !== false) {
                    peer196.disconnect();
                    var if_res72 = peer196.destroy();
                } else {
                    var if_res72 = M3.rvoid();
                }
                if_res72;
                bb187.remove_package_listener(this195.package_listener);
                return 0;
            },
            'invoke': function(world198, evt199) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this200 = this;
                bb187.change_world(cb186(world198, M0.decode_data(evt199.msg)));
                return true;
            }
        };
    };
};
var register = function(server_id201) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb202) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "register",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this203 = this;
                bb202.__server_id = server_id201;
                bb202.__uses_peer = true;
                return 0;
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this204 = this;
                var conn205 = bb202.__conn;
                if ((typeof(conn205) === "undefined") !== false) {
                    var if_res73 = false;
                } else {
                    var if_res73 = conn205.open;
                }
                var conn_open_p206 = if_res73;
                console.log(conn_open_p206);
                if (conn_open_p206 !== false) {
                    var if_res74 = conn205.close();
                } else {
                    var if_res74 = M3.rvoid();
                }
                if_res74;
                return 0;
            },
            'invoke': function(world207, evt208) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this209 = this;
                return true;
            }
        };
    };
};
var name = function(name210) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb211) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "name",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this212 = this;
                bb211.__peer_name = M1.js_string(name210);
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
    rkt_list,
    text0 as text,
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
