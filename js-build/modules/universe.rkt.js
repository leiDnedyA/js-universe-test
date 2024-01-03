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
var text0 = M7.text;
var rkt_list = function(element2) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M3.list(element2);
};
var make_big_bang = function(init_world3, handlers4, dom_root5) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((dom_root5 != null) !== false) {
        var if_res1 = dom_root5;
    } else {
        var if_res1 = document.body;
    }
    return new BigBang(init_world3, handlers4, if_res1);
};
var big_bang = function(dom_root16, init_world37, new_rest8) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var init_world9 = init_world37;
    if (M3.eq_p(dom_root16, M9.unsafe_undefined) !== false) {
        var if_res2 = null;
    } else {
        var if_res2 = dom_root16;
    }
    var dom_root10 = if_res2;
    var handlers11 = new_rest8;
    return make_big_bang(init_world9, handlers11, dom_root10).setup().start();
};
var big_bang1 = function(given_kws12, given_args13, init_world314, new_rest15) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var dom_root216 = M3.pair_p(given_kws12);
    if (dom_root216 !== false) {
        var if_res3 = M3.car(given_args13);
    } else {
        var if_res3 = M9.unsafe_undefined;
    }
    var dom_root117 = if_res3;
    return big_bang(dom_root117, init_world314, new_rest15);
};
var cl9 = $rjs_core.attachProcedureArity(function(given_kws22, given_args23, init_world24, ...handlers2512) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers25 = $rjs_core.Pair.listFromArray(handlers2512);
    return big_bang1(given_kws22, given_args23, init_world24, handlers25);
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
var cl4 = $rjs_core.attachProcedureArity(function(init_world26, ...handlers277) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers27 = $rjs_core.Pair.listFromArray(handlers277);
    return big_bang1(M3.rnull, M3.rnull, init_world26, handlers27);
});
var big_bang4 = M2.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws18, given_argc19) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M3.__gt__eq_(given_argc19, 3) !== false) {
        var l13050420 = given_kws18;
        if (M3.null_p(l13050420) !== false) {
            var if_res15 = l13050420;
        } else {
            if (M3.eq_p(M3.car(l13050420), $rjs_core.Keyword.make("dom-root")) !== false) {
                var if_res14 = M3.cdr(l13050420);
            } else {
                var if_res14 = l13050420;
            }
            var if_res15 = if_res14;
        }
        var l13050421 = if_res15;
        var if_res16 = M3.null_p(l13050421);
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
var BigBang = function(init_world28, handlers29, dom_root30) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this31 = this;
    this31.world = init_world28;
    var let_result17 = M3.values();
    this31.interval = 1000 / __times_default_frames_per_second_times_;
    var let_result18 = M3.values();
    this31.handlers = handlers29;
    var let_result19 = M3.values();
    this31.is_universe_p = false;
    var let_result20 = M3.values();
    this31.dom_root = dom_root30;
    var let_result21 = M3.values();
    this31.__active_handlers = {};
    var let_result22 = M3.values();
    this31.__world_change_listeners = [];
    var let_result23 = M3.values();
    this31.__package_listeners = [];
    var let_result24 = M3.values();
    this31.__uses_peer = false;
    var let_result25 = M3.values();
    this31.__peer_name = "client";
    var let_result26 = M3.values();
    this31.__server_id = "server";
    var let_result27 = M3.values();
    this31.__peer = undefined;
    var let_result28 = M3.values();
    this31.__conn = undefined;
    var let_result29 = M3.values();
    this31.__peer_init_tasks = [];
    var let_result30 = M3.values();
    this31.__idle = true;
    var let_result31 = M3.values();
    this31.__stopped = true;
    var let_result32 = M3.values();
    this31.__events = [];
    var let_result33 = M3.values();
    var canvas32 = M4.document.createElement("canvas");
    var ctx33 = canvas32.getContext("2d");
    canvas32.setAttribute("tabindex", 1);
    canvas32.setAttribute("style", "outline: none");
    this31.__canvas = canvas32;
    this31.__context = ctx33;
    return null;
};
BigBang.prototype.setup = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this34 = this;
    var canvas35 = this34.__canvas;
    this34.dom_root.appendChild(canvas35);
    var let_result34 = M3.values();
    canvas35.focus();
    var let_result35 = M3.values();
    this34.register_handlers();
    var let_result36 = M3.values();
    if (this34.__uses_peer !== false) {
        var if_res37 = this34.init_peer_connection();
    } else {
        var if_res37 = M3.rvoid();
    }
    if_res37;
    var let_result38 = M3.values();
    var draw_handler36 = this34.__active_handlers["to-draw"];
    if (draw_handler36 !== false) {
        var if_res39 = M3.rvoid();
    } else {
        var if_res39 = M3.error($rjs_core.PrimitiveSymbol.make("big-bang"), $rjs_core.UString.make("to-draw handle not provided"));
    }
    if_res39;
    var let_result40 = M3.values();
    var img37 = draw_handler36.callback(this34.world);
    canvas35.width = img37.width;
    canvas35.height = img37.height;
    this34.change_world(this34.world);
    return this34;
};
BigBang.prototype.register_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this38 = this;
    var active_handlers39 = this38.__active_handlers;
    var loop40 = function(handlers41) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M3.pair_p(handlers41) !== false) {
            var h42 = M3.car(handlers41)(this38);
            h42.register();
            active_handlers39[h42.name] = h42;
            var if_res41 = loop40(M3.cdr(handlers41));
        } else {
            var if_res41 = M3.rvoid();
        }
        return if_res41;
    };
    return loop40(this38.handlers);
};
BigBang.prototype.deregister_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this43 = this;
    var active_handlers44 = this43.__active_handlers;
    return Object.keys(active_handlers44).forEach(function(key45) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var h46 = active_handlers44[key45];
        h46.deregister();
        active_handlers44[h46.name] = undefined;
        return null;
    });
};
BigBang.prototype.start = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this47 = this;
    this47.__stopped = false;
    this47.queue_event({
        'type': "to-draw"
    });
    return this47.process_events();
};
BigBang.prototype.stop = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this48 = this;
    this48.clear_event_queue();
    this48.__stopped = true;
    this48.__idle = true;
    this48.deregister_handlers();
    this48.__canvas.remove();
    this48.__active_handlers = {};
    this48.handlers = $rjs_core.Pair.EMPTY;
    return null;
};
BigBang.prototype.clear_event_queue = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this49 = this;
    return this49.__events.splice(0, this49.__events.length);
};
BigBang.prototype.queue_event = function(e50) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this51 = this;
    this51.__events.push(e50);
    if (this51.__idle !== false) {
        var self52 = this51;
        var if_res42 = window.requestAnimationFrame(function() {
            if (arguments.length !== 0) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return self52.process_events();
        });
    } else {
        var if_res42 = M3.rvoid();
    }
    return if_res42;
};
BigBang.prototype.change_world = function(handler_result53) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this54 = this;
    var new_world55 = handler_result53;
    if (M8.package_p(handler_result53) !== false) {
        new_world55 = M8.package_world(handler_result53);
        var if_res43 = this54.handle_package(handler_result53);
    } else {
        var if_res43 = M3.rvoid();
    }
    if_res43;
    var let_result44 = M3.values();
    var listeners56 = this54.__world_change_listeners;
    var loop57 = function(i58) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M3.__lt_(i58, listeners56.length) !== false) {
            var listener59 = listeners56[i58];
            listener59(new_world55);
            var if_res45 = loop57(M3.add1(i58));
        } else {
            var if_res45 = M3.rvoid();
        }
        return if_res45;
    };
    loop57(0);
    this54.world = new_world55;
    return null;
};
BigBang.prototype.add_world_change_listener = function(cb60) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this61 = this;
    return this61.__world_change_listeners.push(cb60);
};
BigBang.prototype.remove_world_change_listener = function(cb62) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this63 = this;
    var index64 = this63.__world_change_listeners.indexOf(cb62);
    return this63.__world_change_listeners.splice(index64, 1);
};
BigBang.prototype.handle_package = function(pkg65) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this66 = this;
    var message67 = M8.package_message(pkg65);
    var listeners68 = this66.__package_listeners;
    var loop69 = function(i70) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M3.__lt_(i70, listeners68.length) !== false) {
            var listener71 = listeners68[i70];
            listener71(message67);
            var if_res46 = loop69(M3.add1(i70));
        } else {
            var if_res46 = M3.rvoid();
        }
        return if_res46;
    };
    return loop69(0);
};
BigBang.prototype.add_package_listener = function(cb72) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this73 = this;
    return this73.__package_listeners.push(cb72);
};
BigBang.prototype.remove_package_listener = function(cb74) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this75 = this;
    var index76 = this75.__package_listeners.indexOf(cb74);
    return this75.__package_listeners.splice(index76, 1);
};
BigBang.prototype.process_events = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this77 = this;
    var events78 = this77.__events;
    this77.__idle = false;
    var loop79 = function(world_changed_p80) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M3.__gt_(events78.length, 0) !== false) {
            var evt81 = events78.shift();
            var handler82 = this77.__active_handlers[evt81.type];
            if (M3.equal_p(evt81.type, "raw") !== false) {
                var if_res49 = evt81.invoke(this77.world, evt81);
            } else {
                if ((handler82 === undefined) !== false) {
                    console.warn("WARNING: processing event w/ undefined handler.");
                    var if_res48 = M3.rvoid();
                } else {
                    if (handler82 !== false) {
                        var if_res47 = handler82.invoke(this77.world, evt81);
                    } else {
                        var if_res47 = M4.console.warn($rjs_core.UString.make("ignoring unknown/unregistered event type: "), evt81);
                    }
                    var if_res48 = if_res47;
                }
                var if_res49 = if_res48;
            }
            var changed_p83 = if_res49;
            var or_part84 = world_changed_p80;
            if (or_part84 !== false) {
                var if_res50 = or_part84;
            } else {
                var if_res50 = changed_p83;
            }
            var if_res53 = loop79(if_res50);
        } else {
            if (world_changed_p80 !== false) {
                var if_res51 = M3.not(this77.__stopped);
            } else {
                var if_res51 = false;
            }
            if (if_res51 !== false) {
                this77.queue_event({
                    'type': "to-draw"
                });
                var if_res52 = loop79(false);
            } else {
                var if_res52 = M3.rvoid();
            }
            var if_res53 = if_res52;
        }
        return if_res53;
    };
    loop79(false);
    this77.__idle = true;
    return null;
};
BigBang.prototype.init_peer_connection = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this85 = this;
    var peer86 = new M6.Peer();
    this85.__peer = peer86;
    return peer86.on("open", function() {
        if (arguments.length !== 0) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var conn87 = peer86.connect(M1.js_string(this85.__server_id), {
            'label': this85.__peer_name
        });
        this85.__conn = conn87;
        var let_result54 = M3.values();
        var init_tasks88 = this85.__peer_init_tasks;
        var on_conn_open89 = function() {
            if (arguments.length !== 0) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            var loop90 = function(i91) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M3.__lt_(i91, init_tasks88.length) !== false) {
                    var task92 = init_tasks88[i91];
                    task92(peer86, conn87);
                    var if_res55 = loop90(M3.add1(i91));
                } else {
                    var if_res55 = M3.rvoid();
                }
                return if_res55;
            };
            loop90(0);
            window.addEventListener("beforeunload", function(_93) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return conn87.close();
            });
            return window.addEventListener("unload", function(_94) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return conn87.close();
            });
        };
        conn87.on("open", on_conn_open89);
        return conn87.on("close", function(_95) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            console.log("conn closed");
            return alert("Client has been disconnected by the server or the connection has been lost.");
        });
    });
};
BigBang.prototype.add_peer_init_task = function(cb96) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this97 = this;
    var conn98 = this97.__conn;
    var peer99 = this97.__peer;
    if ((typeof(conn98) === "undefined") !== false) {
        var if_res56 = false;
    } else {
        var if_res56 = conn98.open;
    }
    var conn_open_p100 = if_res56;
    if (conn_open_p100 !== false) {
        var if_res57 = cb96(peer99, conn98);
    } else {
        var if_res57 = this97.__peer_init_tasks.push(cb96);
    }
    return if_res57;
};
var to_draw = function(cb101) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb102) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_tick_evt103 = {
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
            'callback': cb101,
            'invoke': function(world104, evt105) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var ctx106 = bb102.__context;
                var img107 = cb101(bb102.world);
                var height108 = img107.height;
                var width109 = img107.width;
                ctx106.clearRect(0, 0, width109, height108);
                img107.render(ctx106, width109 / 2, height108 / 2);
                return false;
            }
        };
    };
};
var on_tick = function(cb110, rate111) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb_u112) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_tick_evt113 = {
            'type': "on-tick"
        };
        return {
            'name': "on-tick",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this114 = this;
                bb_u112.queue_event(on_tick_evt113);
                if (rate111 !== false) {
                    rate111 = 1000 * rate111;
                    var if_res58 = null;
                } else {
                    rate111 = bb_u112.interval;
                    var if_res58 = null;
                }
                return if_res58;
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this115 = this;
                var last_cb116 = this115.last_cb;
                if (last_cb116 !== false) {
                    var if_res59 = window.clearTimeout(last_cb116);
                } else {
                    var if_res59 = M3.rvoid();
                }
                return if_res59;
            },
            'invoke': function(state117, _118) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this119 = this;
                if (bb_u112.is_universe_p !== false) {
                    var if_res60 = bb_u112.change_state(cb110(state117));
                } else {
                    var if_res60 = bb_u112.change_world(cb110(state117));
                }
                if_res60;
                this119.last_cb = setTimeout(function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return bb_u112.queue_event(on_tick_evt113);
                }, rate111);
                return true;
            }
        };
    };
};
var on_mouse = function(cb120) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb121) {
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
                var this122 = this;
                var canvas123 = bb121.__canvas;
                var make_listener124 = function(r_evt_name125) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return function(evt126) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var posn127 = canvas_posn_δ(canvas123, evt126);
                        return bb121.queue_event({
                            'type': "on-mouse",
                            'evt': M1.js_string__gt_string(r_evt_name125),
                            'x': posn127.x,
                            'y': posn127.y
                        });
                    };
                };
                var register_listener128 = function(evt_name129, r_evt_name130) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var cb131 = make_listener124(r_evt_name130);
                    canvas123.addEventListener(evt_name129, cb131);
                    this122.listeners[evt_name129] = cb131;
                    return null;
                };
                register_listener128("mousemove", "move");
                register_listener128("mousedown", "button-down");
                register_listener128("mouseup", "button-up");
                register_listener128("mouseout", "leave");
                register_listener128("mouseover", "enter");
                return register_listener128("drag", "drag");
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this132 = this;
                var remove_listener133 = function(evt_name134) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var cb135 = this132.listeners[evt_name134];
                    return bb121.__canvas.removeEventListener(evt_name134, cb135);
                };
                remove_listener133("mousemove");
                remove_listener133("mousedown");
                remove_listener133("mouseup");
                remove_listener133("mouseout");
                remove_listener133("mouseover");
                return remove_listener133("drag");
            },
            'invoke': function(world136, evt137) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var new_world138 = cb120(world136, evt137.x, evt137.y, evt137.evt);
                bb121.change_world(new_world138);
                return true;
            }
        };
    };
};
var on_key = function(cb139) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb140) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "on-key",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this141 = this;
                var canvas142 = bb140.__canvas;
                this141.listener = function(evt143) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    evt143.preventDefault();
                    evt143.stopPropagation();
                    return bb140.queue_event({
                        'type': "on-key",
                        'key': key_event__gt_key_name(evt143)
                    });
                };
                return canvas142.addEventListener("keydown", this141.listener);
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this144 = this;
                bb140.__canvas.removeEventListener("keydown", this144.listener);
                this144.listener = undefined;
                return null;
            },
            'invoke': function(world145, evt146) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var new_world147 = cb139(world145, evt146.key);
                bb140.change_world(new_world147);
                return true;
            }
        };
    };
};
var on_release = function(cb148) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb149) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "on-release",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this150 = this;
                var canvas151 = bb149.__canvas;
                this150.listener = function(evt152) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    evt152.preventDefault();
                    evt152.stopPropagation();
                    return bb149.queue_event({
                        'type': "on-release",
                        'key': key_event__gt_key_name(evt152)
                    });
                };
                return canvas151.addEventListener("keyup", this150.listener);
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this153 = this;
                bb149.__canvas.removeEventListener("keyup", this153.listener);
                this153.listener = undefined;
                return null;
            },
            'invoke': function(world154, evt155) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var new_world156 = cb148(world154, evt155.key);
                bb149.change_world(new_world156);
                return true;
            }
        };
    };
};
var stop_when157 = function(last_world_p6158, last_picture5159) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var last_world_p160 = last_world_p6158;
    if (false !== false) {
        var if_res61 = false;
    } else {
        var if_res61 = last_picture5159;
    }
    var last_picture161 = if_res61;
    return function(bb162) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "stop-when",
            'predicate': last_world_p160,
            'lastpicture': last_picture161,
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this163 = this;
                return bb162.add_world_change_listener(this163.invoke);
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this164 = this;
                return bb162.remove_world_change_listener(this164.invoke);
            },
            'invoke': function(w165) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (last_world_p160(w165) !== false) {
                    bb162.stop();
                    if (last_picture161 !== false) {
                        var handler166 = to_draw(last_picture161)(bb162);
                        var if_res62 = bb162.queue_event({
                            'type': "raw",
                            'invoke': handler166.invoke
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
var cl64 = function(last_world_p167) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return stop_when157(last_world_p167, false);
};
var cl65 = function(last_world_p168, last_picture5169) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return stop_when157(last_world_p168, last_picture5169);
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
var key_event__gt_key_name = function(e170) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var k171 = e170.key;
    var or_part173 = k171 === "Shift";
    if (or_part173 !== false) {
        var if_res68 = or_part173;
    } else {
        var or_part174 = k171 === "Control";
        if (or_part174 !== false) {
            var if_res67 = or_part174;
        } else {
            var if_res67 = k171 === "Alt";
        }
        var if_res68 = if_res67;
    }
    if (if_res68 !== false) {
        var if_res69 = e170.code;
    } else {
        var if_res69 = k171;
    }
    var code172 = if_res69;
    var key_table_code175 = key_table[code172];
    if (M3.void_p(key_table_code175) !== false) {
        var if_res70 = M1.js_string__gt_string(code172);
    } else {
        var if_res70 = key_table_code175;
    }
    return if_res70;
};
var canvas_posn_δ = function(canvas176, evt177) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var rect178 = canvas176.getBoundingClientRect();
    return {
        'x': evt177.clientX - rect178.left,
        'y': evt177.clientY - rect178.top
    };
};
var key_eq__p = function(k1179, k2180) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M3.equal_p(k1179, k2180);
};
var mouse_eq__p = function(m1181, m2182) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M3.equal_p(m1181, m2182);
};
var on_receive = function(cb183) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb184) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_receive_evt185 = {
            'type': "on-receive"
        };
        return {
            'name': "on-receive",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this186 = this;
                bb184.add_peer_init_task(function(peer187, conn188) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    this186.conn_data_listener = function(data189) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return bb184.queue_event({
                            'type': on_receive_evt185.type,
                            'msg': data189
                        });
                    };
                    conn188.on("data", this186.conn_data_listener);
                    this186.package_listener = function(message190) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var this191 = this;
                        conn188.send(M0.encode_data(message190));
                        return 0;
                    };
                    return bb184.add_package_listener(this186.package_listener);
                });
                return 0;
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this192 = this;
                var peer193 = bb184.__peer;
                if ((typeof(peer193) === "undefined") !== false) {
                    var if_res71 = false;
                } else {
                    var if_res71 = M3.not(peer193.disconnected);
                }
                var should_destroy_peer_p194 = if_res71;
                if (should_destroy_peer_p194 !== false) {
                    peer193.disconnect();
                    var if_res72 = peer193.destroy();
                } else {
                    var if_res72 = M3.rvoid();
                }
                if_res72;
                bb184.remove_package_listener(this192.package_listener);
                return 0;
            },
            'invoke': function(world195, evt196) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this197 = this;
                bb184.change_world(cb183(world195, M0.decode_data(evt196.msg)));
                return true;
            }
        };
    };
};
var register = function(server_id198) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb199) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "register",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this200 = this;
                bb199.__server_id = server_id198;
                bb199.__uses_peer = true;
                return 0;
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this201 = this;
                var conn202 = bb199.__conn;
                if ((typeof(conn202) === "undefined") !== false) {
                    var if_res73 = false;
                } else {
                    var if_res73 = conn202.open;
                }
                var conn_open_p203 = if_res73;
                console.log(conn_open_p203);
                if (conn_open_p203 !== false) {
                    var if_res74 = conn202.close();
                } else {
                    var if_res74 = M3.rvoid();
                }
                if_res74;
                return 0;
            },
            'invoke': function(world204, evt205) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this206 = this;
                return true;
            }
        };
    };
};
var name = function(name207) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb208) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "name",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this209 = this;
                bb208.__peer_name = M1.js_string(name207);
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