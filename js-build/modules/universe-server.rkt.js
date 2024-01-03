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
var make_universe = function(init_state1472, handlers1473, gui_root1474) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((gui_root1474 != null) !== false) {
        var if_res580 = gui_root1474;
    } else {
        var if_res580 = document.body;
    }
    return new Universe(init_state1472, handlers1473, if_res580);
};
var universe = function(dom_root11475, init_state31476, new_rest1477) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var init_state1478 = init_state31476;
    if (M4.eq_p(dom_root11475, M10.unsafe_undefined) !== false) {
        var if_res581 = null;
    } else {
        var if_res581 = dom_root11475;
    }
    var gui_root1479 = if_res581;
    var handlers1480 = new_rest1477;
    return make_universe(init_state1478, handlers1480, gui_root1479).setup().start();
};
var universe1471 = function(given_kws1481, given_args1482, init_state31483, new_rest1484) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var dom_root21485 = M4.pair_p(given_kws1481);
    if (dom_root21485 !== false) {
        var if_res582 = M4.car(given_args1482);
    } else {
        var if_res582 = M10.unsafe_undefined;
    }
    var dom_root11486 = if_res582;
    return universe(dom_root11486, init_state31483, new_rest1484);
};
var cl588 = $rjs_core.attachProcedureArity(function(given_kws1491, given_args1492, init_state1493, ...handlers1494591) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers1494 = $rjs_core.Pair.listFromArray(handlers1494591);
    return universe1471(given_kws1491, given_args1492, init_state1493, handlers1494);
});
var temp592 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam589 = {} [arguments.length];
    if (fixed_lam589 !== undefined) {
        return fixed_lam589.apply(null, arguments);
    } else {
        if (M4.__gt__eq_(cl588.length, 1) !== false) {
            var if_res590 = cl588.apply(null, arguments);
        } else {
            var if_res590 = M4.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res590;
    }
}, [M4.make_arity_at_least(3)]);
var temp587 = $rjs_core.Pair.makeList($rjs_core.Keyword.make("dom-root"));
var cl583 = $rjs_core.attachProcedureArity(function(init_state1495, ...handlers1496586) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers1496 = $rjs_core.Pair.listFromArray(handlers1496586);
    return universe1471(M4.rnull, M4.rnull, init_state1495, handlers1496);
});
var universe4 = M2.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws1487, given_argc1488) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M4.__gt__eq_(given_argc1488, 3) !== false) {
        var l11168221489 = given_kws1487;
        if (M4.null_p(l11168221489) !== false) {
            var if_res594 = l11168221489;
        } else {
            if (M4.eq_p(M4.car(l11168221489), $rjs_core.Keyword.make("dom-root")) !== false) {
                var if_res593 = M4.cdr(l11168221489);
            } else {
                var if_res593 = l11168221489;
            }
            var if_res594 = if_res593;
        }
        var l11168221490 = if_res594;
        var if_res595 = M4.null_p(l11168221490);
    } else {
        var if_res595 = false;
    }
    return if_res595;
}, temp592, M4.rnull, temp587, $rjs_core.attachProcedureArity(function() {
    var fixed_lam584 = {} [arguments.length];
    if (fixed_lam584 !== undefined) {
        return fixed_lam584.apply(null, arguments);
    } else {
        if (M4.__gt__eq_(cl583.length, 1) !== false) {
            var if_res585 = cl583.apply(null, arguments);
        } else {
            var if_res585 = M4.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res585;
    }
}, [M4.make_arity_at_least(1)]));
var Universe = function(init_state1497, handlers1498, gui_root1499) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1500 = this;
    this1500.state = init_state1497;
    this1500.interval = 1000 / __times_default_frames_per_second_times_;
    this1500.handlers = handlers1498;
    this1500.is_universe_p = true;
    this1500.gui = M6.server_gui(gui_root1499);
    this1500.__active_handlers = {};
    this1500.__state_change_listeners = [];
    this1500.__message_listeners = [];
    this1500.__peer = undefined;
    this1500.__peer_init_tasks = [];
    this1500.__active_iworlds = [];
    this1500.__disconnect_tasks = [];
    this1500.__peer_id = DEFAULT_UNIVERSE_ID;
    this1500.__idle = true;
    this1500.__stopped = true;
    this1500.__events = [];
    return null;
};
Universe.prototype.setup = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1501 = this;
    this1501.register_handlers();
    var let_result596 = M4.values();
    this1501.gui.show();
    var let_result597 = M4.values();
    var log_connection1502 = function(conn1503) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return this1501.gui.log(M4.format($rjs_core.UString.make("~a signed up"), M1.js_string__gt_string(conn1503.label)));
    };
    var log_new_msg1504 = function(iw1505, data1506) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return this1501.gui.log(M4.format($rjs_core.UString.make("~a --> universe:\n<~a>"), M9.iworld_name(iw1505), M3.msg__gt_string(M0.decode_data(data1506))));
    };
    this1501.add_peer_init_task(function(peer1507) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return peer1507.on("connection", log_connection1502);
    });
    this1501.__message_listeners.push(log_new_msg1504);
    return this1501;
};
Universe.prototype.start = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1508 = this;
    this1508.init_peer_connection();
    this1508.gui.log(M4.format($rjs_core.UString.make("a new universe is up and running with id ~s"), M1.js_string__gt_string(this1508.__peer.id)));
    return this1508;
};
Universe.prototype.register_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1509 = this;
    var active_handlers1510 = this1509.__active_handlers;
    var loop1511 = function(handlers1512) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.pair_p(handlers1512) !== false) {
            var h1513 = M4.car(handlers1512)(this1509);
            h1513.register();
            active_handlers1510[h1513.name] = h1513;
            var if_res598 = loop1511(M4.cdr(handlers1512));
        } else {
            var if_res598 = M4.rvoid();
        }
        return if_res598;
    };
    return loop1511(this1509.handlers);
};
Universe.prototype.deregister_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1514 = this;
    var active_handlers1515 = this1514.__active_handlers;
    return Object.keys(active_handlers1515).forEach(function(key1516) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var h1517 = active_handlers1515[key1516];
        h1517.deregister();
        active_handlers1515[h1517.name] = undefined;
        return null;
    });
};
Universe.prototype.stop = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1518 = this;
    this1518.gui.log($rjs_core.UString.make("stopping the universe\n----------------------------------"));
    return M4.rvoid();
};
Universe.prototype.clear_event_queue = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1519 = this;
    return this1519.__events.splice(0, this1519.__events.length);
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
Universe.prototype.queue_event = function(e1520) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1521 = this;
    this1521.__events.push(e1520);
    if (this1521.__idle !== false) {
        var self1522 = this1521;
        var if_res599 = window.requestAnimationFrame(function() {
            if (arguments.length !== 0) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return self1522.process_events();
        });
    } else {
        var if_res599 = M4.rvoid();
    }
    return if_res599;
};
Universe.prototype.process_events = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1523 = this;
    var events1524 = this1523.__events;
    this1523.__idle = false;
    var loop1525 = function(state_changed_p1526) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.__gt_(events1524.length, 0) !== false) {
            var evt1527 = events1524.shift();
            var handler1528 = this1523.__active_handlers[evt1527.type];
            if (M4.equal_p(evt1527.type, "raw") !== false) {
                var if_res601 = evt1527.invoke(this1523.state, evt1527);
            } else {
                if (M4.not(typeof(handler1528) === "undefined") !== false) {
                    var if_res600 = handler1528.invoke(this1523.state, evt1527);
                } else {
                    var if_res600 = M7.console.warn($rjs_core.UString.make("ignoring unknown/unregistered event type: "), evt1527);
                }
                var if_res601 = if_res600;
            }
            var changed_p1529 = if_res601;
            var or_part1530 = state_changed_p1526;
            if (or_part1530 !== false) {
                var if_res602 = or_part1530;
            } else {
                var if_res602 = changed_p1529;
            }
            var if_res603 = loop1525(if_res602);
        } else {
            var if_res603 = M4.rvoid();
        }
        return if_res603;
    };
    loop1525(false);
    this1523.__idle = true;
    return null;
};
Universe.prototype.change_state = function(result_bundle1531) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1532 = this;
    var new_state1533 = M9.bundle_state(result_bundle1531);
    var mails1534 = M9.bundle_mails(result_bundle1531);
    var low_to_remove1535 = M9.bundle_low_to_remove(result_bundle1531);
    M5.for_each(function(curr_mail1536) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var iworld1537 = M9.mail_to(curr_mail1536);
        var conn1538 = M9.iworld_conn(iworld1537);
        conn1538.send(M0.encode_data(M9.mail_content(curr_mail1536)));
        return this1532.gui.log(M4.format($rjs_core.UString.make("universe --> ~a:\n<~a>"), M9.iworld_name(iworld1537), M9.mail_content(curr_mail1536)));
    }, mails1534);
    var let_result604 = M4.values();
    M5.for_each(function(iw1539) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var conn1540 = M9.iworld_conn(iw1539);
        var index1541 = this1532.__active_iworlds.indexOf(iw1539);
        conn1540.close();
        if (M4.__gt_(index1541, -1) !== false) {
            var if_res605 = this1532.__active_iworlds.splice(index1541, 1);
        } else {
            var if_res605 = M4.rvoid();
        }
        return if_res605;
    }, low_to_remove1535);
    var let_result606 = M4.values();
    var listeners1542 = this1532.__state_change_listeners;
    var loop1543 = function(i1544) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.__lt_(i1544, listeners1542.length) !== false) {
            var listener1545 = listeners1542[i1544];
            listener1545(new_state1533);
            var if_res607 = loop1543(M4.add1(i1544));
        } else {
            var if_res607 = M4.rvoid();
        }
        return if_res607;
    };
    loop1543(0);
    this1532.state = new_state1533;
    return null;
};
Universe.prototype.init_peer_connection = function(id1546) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1547 = this;
    var peer1548 = new Peer(this1547.__peer_id);
    this1547.__peer = peer1548;
    return peer1548.on("open", function() {
        if (arguments.length !== 0) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var init_tasks1549 = this1547.__peer_init_tasks;
        var loop1550 = function(i1551) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M4.__lt_(i1551, init_tasks1549.length) !== false) {
                var task1552 = init_tasks1549[i1551];
                task1552(peer1548);
                var if_res608 = loop1550(M4.add1(i1551));
            } else {
                var if_res608 = M4.rvoid();
            }
            return if_res608;
        };
        return loop1550(0);
    });
};
Universe.prototype.add_peer_init_task = function(cb1553) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1554 = this;
    var peer1555 = this1554.__peer;
    var peer_started_p1556 = M4.not(typeof(peer1555) === "undefined");
    if (peer_started_p1556 !== false) {
        var if_res609 = cb1553(peer1555);
    } else {
        var if_res609 = this1554.__peer_init_tasks.push(cb1553);
    }
    return if_res609;
};
Universe.prototype.pass_message = function(sender_iw1557, data1558) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1559 = this;
    return this1559.__message_listeners.forEach(function(cb1560) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return cb1560(sender_iw1557, data1558);
    });
};
Universe.prototype.handle_disconnect = function(iw1561) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1562 = this;
    var tasks1563 = this1562.__disconnect_tasks;
    var loop1564 = function(i1565) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.__lt_(i1565, tasks1563.length) !== false) {
            var task1566 = tasks1563[i1565];
            task1566(iw1561);
            var if_res610 = loop1564(M4.add1(i1565));
        } else {
            var if_res610 = M4.rvoid();
        }
        return if_res610;
    };
    loop1564(0);
    this1562.gui.log(M4.format($rjs_core.UString.make("~a !! closed port"), M9.iworld_name(iw1561)));
    return M4.rvoid();
};
var on_new = function(cb1567) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(u1568) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_new_evt1569 = {
            'type': "on-new"
        };
        return {
            'name': "on-new",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1570 = this;
                var init_task1571 = function(peer1572) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var handle_connection1573 = function(conn1574) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var name1575 = $rjs_core.UString.make("client name");
                        if (conn1574.label !== false) {
                            name1575 = M1.js_string__gt_string(conn1574.label);
                            var if_res611 = null;
                        } else {
                            var if_res611 = M4.rvoid();
                        }
                        if_res611;
                        var let_result612 = M4.values();
                        var iw1576 = M9.make_iworld(conn1574, name1575);
                        u1568.__active_iworlds.push(iw1576);
                        u1568.queue_event({
                            'type': "on-new",
                            'iWorld': iw1576
                        });
                        conn1574.on("close", function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return u1568.handle_disconnect(iw1576);
                        });
                        return conn1574.on("data", function(data1577) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return u1568.pass_message(iw1576, data1577);
                        });
                    };
                    return peer1572.on("connection", handle_connection1573);
                };
                u1568.add_peer_init_task(init_task1571);
                return M4.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1578 = this;
                return M4.rvoid();
            },
            'invoke': function(state1579, evt1580) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1581 = this;
                var conn1582 = M9.iworld_conn(evt1580.iWorld);
                conn1582.on("open", function(_1583) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return u1568.change_state(cb1567(state1579, evt1580.iWorld));
                });
                return true;
            }
        };
    };
};
var on_disconnect = function(cb1584) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(u1585) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_disconnect_evt1586 = {
            'type': "on-disconnect"
        };
        return {
            'name': "on-disconnect",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1587 = this;
                u1585.__disconnect_tasks.push(function(iworld1588) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return u1585.queue_event({
                        'type': "on-disconnect",
                        'iWorld': iworld1588
                    });
                });
                return M4.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1589 = this;
                return M4.rvoid();
            },
            'invoke': function(state1590, evt1591) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1592 = this;
                u1585.change_state(cb1584(state1590, evt1591.iWorld));
                return M4.rvoid();
            }
        };
    };
};
var server_id = function(id1593) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(u1594) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "server-id",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1595 = this;
                u1594.__peer_id = M1.js_string(id1593);
                return M4.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1596 = this;
                return M4.rvoid();
            }
        };
    };
};
var on_msg = function(cb1597) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(u1598) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_msg_evt1599 = {
            'type': "on-msg"
        };
        return {
            'name': "on-msg",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1600 = this;
                var handle_msg1601 = function(sender1602, data1603) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return u1598.queue_event({
                        'type': "on-msg",
                        'iWorld': sender1602,
                        'msg': data1603
                    });
                };
                u1598.__message_listeners.push(handle_msg1601);
                return M4.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1604 = this;
                return M4.rvoid();
            },
            'invoke': function(state1605, evt1606) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                u1598.change_state(cb1597(state1605, evt1606.iWorld, M0.decode_data(evt1606.msg)));
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