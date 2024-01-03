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
var make_universe = function(init_state1489, handlers1490, gui_root1491) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((gui_root1491 != null) !== false) {
        var if_res768 = gui_root1491;
    } else {
        var if_res768 = document.body;
    }
    return new Universe(init_state1489, handlers1490, if_res768);
};
var universe = function(dom_root11492, init_state31493, new_rest1494) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var init_state1495 = init_state31493;
    if (M4.eq_p(dom_root11492, M10.unsafe_undefined) !== false) {
        var if_res769 = null;
    } else {
        var if_res769 = dom_root11492;
    }
    var gui_root1496 = if_res769;
    var handlers1497 = new_rest1494;
    return make_universe(init_state1495, handlers1497, gui_root1496).setup().start();
};
var universe1488 = function(given_kws1498, given_args1499, init_state31500, new_rest1501) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var dom_root21502 = M4.pair_p(given_kws1498);
    if (dom_root21502 !== false) {
        var if_res770 = M4.car(given_args1499);
    } else {
        var if_res770 = M10.unsafe_undefined;
    }
    var dom_root11503 = if_res770;
    return universe(dom_root11503, init_state31500, new_rest1501);
};
var cl776 = $rjs_core.attachProcedureArity(function(given_kws1508, given_args1509, init_state1510, ...handlers1511779) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers1511 = $rjs_core.Pair.listFromArray(handlers1511779);
    return universe1488(given_kws1508, given_args1509, init_state1510, handlers1511);
});
var temp780 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam777 = {} [arguments.length];
    if (fixed_lam777 !== undefined) {
        return fixed_lam777.apply(null, arguments);
    } else {
        if (M4.__gt__eq_(cl776.length, 1) !== false) {
            var if_res778 = cl776.apply(null, arguments);
        } else {
            var if_res778 = M4.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res778;
    }
}, [M4.make_arity_at_least(3)]);
var temp775 = $rjs_core.Pair.makeList($rjs_core.Keyword.make("dom-root"));
var cl771 = $rjs_core.attachProcedureArity(function(init_state1512, ...handlers1513774) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers1513 = $rjs_core.Pair.listFromArray(handlers1513774);
    return universe1488(M4.rnull, M4.rnull, init_state1512, handlers1513);
});
var universe4 = M2.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws1504, given_argc1505) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M4.__gt__eq_(given_argc1505, 3) !== false) {
        var l11372461506 = given_kws1504;
        if (M4.null_p(l11372461506) !== false) {
            var if_res782 = l11372461506;
        } else {
            if (M4.eq_p(M4.car(l11372461506), $rjs_core.Keyword.make("dom-root")) !== false) {
                var if_res781 = M4.cdr(l11372461506);
            } else {
                var if_res781 = l11372461506;
            }
            var if_res782 = if_res781;
        }
        var l11372461507 = if_res782;
        var if_res783 = M4.null_p(l11372461507);
    } else {
        var if_res783 = false;
    }
    return if_res783;
}, temp780, M4.rnull, temp775, $rjs_core.attachProcedureArity(function() {
    var fixed_lam772 = {} [arguments.length];
    if (fixed_lam772 !== undefined) {
        return fixed_lam772.apply(null, arguments);
    } else {
        if (M4.__gt__eq_(cl771.length, 1) !== false) {
            var if_res773 = cl771.apply(null, arguments);
        } else {
            var if_res773 = M4.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res773;
    }
}, [M4.make_arity_at_least(1)]));
var Universe = function(init_state1514, handlers1515, gui_root1516) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1517 = this;
    this1517.state = init_state1514;
    this1517.interval = 1000 / __times_default_frames_per_second_times_;
    this1517.handlers = handlers1515;
    this1517.is_universe_p = true;
    this1517.gui = M6.server_gui(gui_root1516);
    this1517.__active_handlers = {};
    this1517.__state_change_listeners = [];
    this1517.__message_listeners = [];
    this1517.__peer = undefined;
    this1517.__peer_init_tasks = [];
    this1517.__active_iworlds = [];
    this1517.__disconnect_tasks = [];
    this1517.__peer_id = DEFAULT_UNIVERSE_ID;
    this1517.__idle = true;
    this1517.__stopped = true;
    this1517.__events = [];
    return null;
};
Universe.prototype.setup = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1518 = this;
    this1518.register_handlers();
    var let_result784 = M4.values();
    this1518.gui.show();
    var let_result785 = M4.values();
    var log_connection1519 = function(conn1520) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return this1518.gui.log(M4.format($rjs_core.UString.make("~a signed up"), M1.js_string__gt_string(conn1520.label)));
    };
    var log_new_msg1521 = function(iw1522, data1523) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return this1518.gui.log(M4.format($rjs_core.UString.make("~a --> universe:\n<~a>"), M9.iworld_name(iw1522), M3.msg__gt_string(M0.decode_data(data1523))));
    };
    this1518.add_peer_init_task(function(peer1524) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return peer1524.on("connection", log_connection1519);
    });
    this1518.__message_listeners.push(log_new_msg1521);
    return this1518;
};
Universe.prototype.start = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1525 = this;
    this1525.init_peer_connection();
    this1525.gui.log(M4.format($rjs_core.UString.make("a new universe is up and running with id ~s"), M1.js_string__gt_string(this1525.__peer.id)));
    return this1525;
};
Universe.prototype.register_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1526 = this;
    var active_handlers1527 = this1526.__active_handlers;
    var loop1528 = function(handlers1529) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.pair_p(handlers1529) !== false) {
            var h1530 = M4.car(handlers1529)(this1526);
            h1530.register();
            active_handlers1527[h1530.name] = h1530;
            var if_res786 = loop1528(M4.cdr(handlers1529));
        } else {
            var if_res786 = M4.rvoid();
        }
        return if_res786;
    };
    return loop1528(this1526.handlers);
};
Universe.prototype.deregister_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1531 = this;
    var active_handlers1532 = this1531.__active_handlers;
    return Object.keys(active_handlers1532).forEach(function(key1533) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var h1534 = active_handlers1532[key1533];
        h1534.deregister();
        active_handlers1532[h1534.name] = undefined;
        return null;
    });
};
Universe.prototype.stop = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1535 = this;
    this1535.gui.log($rjs_core.UString.make("stopping the universe\n----------------------------------"));
    return M4.rvoid();
};
Universe.prototype.clear_event_queue = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1536 = this;
    return this1536.__events.splice(0, this1536.__events.length);
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
Universe.prototype.queue_event = function(e1537) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1538 = this;
    this1538.__events.push(e1537);
    if (this1538.__idle !== false) {
        var self1539 = this1538;
        var if_res787 = window.requestAnimationFrame(function() {
            if (arguments.length !== 0) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return self1539.process_events();
        });
    } else {
        var if_res787 = M4.rvoid();
    }
    return if_res787;
};
Universe.prototype.process_events = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1540 = this;
    var events1541 = this1540.__events;
    this1540.__idle = false;
    var loop1542 = function(state_changed_p1543) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.__gt_(events1541.length, 0) !== false) {
            var evt1544 = events1541.shift();
            var handler1545 = this1540.__active_handlers[evt1544.type];
            if (M4.equal_p(evt1544.type, "raw") !== false) {
                var if_res789 = evt1544.invoke(this1540.state, evt1544);
            } else {
                if (M4.not(typeof(handler1545) === "undefined") !== false) {
                    var if_res788 = handler1545.invoke(this1540.state, evt1544);
                } else {
                    var if_res788 = M7.console.warn($rjs_core.UString.make("ignoring unknown/unregistered event type: "), evt1544);
                }
                var if_res789 = if_res788;
            }
            var changed_p1546 = if_res789;
            var or_part1547 = state_changed_p1543;
            if (or_part1547 !== false) {
                var if_res790 = or_part1547;
            } else {
                var if_res790 = changed_p1546;
            }
            var if_res791 = loop1542(if_res790);
        } else {
            var if_res791 = M4.rvoid();
        }
        return if_res791;
    };
    loop1542(false);
    this1540.__idle = true;
    return null;
};
Universe.prototype.change_state = function(result_bundle1548) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1549 = this;
    var new_state1550 = M9.bundle_state(result_bundle1548);
    var mails1551 = M9.bundle_mails(result_bundle1548);
    var low_to_remove1552 = M9.bundle_low_to_remove(result_bundle1548);
    M5.for_each(function(curr_mail1553) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var iworld1554 = M9.mail_to(curr_mail1553);
        var conn1555 = M9.iworld_conn(iworld1554);
        conn1555.send(M0.encode_data(M9.mail_content(curr_mail1553)));
        return this1549.gui.log(M4.format($rjs_core.UString.make("universe --> ~a:\n<~a>"), M9.iworld_name(iworld1554), M9.mail_content(curr_mail1553)));
    }, mails1551);
    var let_result792 = M4.values();
    M5.for_each(function(iw1556) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var conn1557 = M9.iworld_conn(iw1556);
        var index1558 = this1549.__active_iworlds.indexOf(iw1556);
        conn1557.close();
        if (M4.__gt_(index1558, -1) !== false) {
            var if_res793 = this1549.__active_iworlds.splice(index1558, 1);
        } else {
            var if_res793 = M4.rvoid();
        }
        return if_res793;
    }, low_to_remove1552);
    var let_result794 = M4.values();
    var listeners1559 = this1549.__state_change_listeners;
    var loop1560 = function(i1561) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.__lt_(i1561, listeners1559.length) !== false) {
            var listener1562 = listeners1559[i1561];
            listener1562(new_state1550);
            var if_res795 = loop1560(M4.add1(i1561));
        } else {
            var if_res795 = M4.rvoid();
        }
        return if_res795;
    };
    loop1560(0);
    this1549.state = new_state1550;
    return null;
};
Universe.prototype.init_peer_connection = function(id1563) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1564 = this;
    var peer1565 = new Peer(this1564.__peer_id);
    this1564.__peer = peer1565;
    return peer1565.on("open", function() {
        if (arguments.length !== 0) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var init_tasks1566 = this1564.__peer_init_tasks;
        var loop1567 = function(i1568) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M4.__lt_(i1568, init_tasks1566.length) !== false) {
                var task1569 = init_tasks1566[i1568];
                task1569(peer1565);
                var if_res796 = loop1567(M4.add1(i1568));
            } else {
                var if_res796 = M4.rvoid();
            }
            return if_res796;
        };
        return loop1567(0);
    });
};
Universe.prototype.add_peer_init_task = function(cb1570) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1571 = this;
    var peer1572 = this1571.__peer;
    var peer_started_p1573 = M4.not(typeof(peer1572) === "undefined");
    if (peer_started_p1573 !== false) {
        var if_res797 = cb1570(peer1572);
    } else {
        var if_res797 = this1571.__peer_init_tasks.push(cb1570);
    }
    return if_res797;
};
Universe.prototype.pass_message = function(sender_iw1574, data1575) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1576 = this;
    return this1576.__message_listeners.forEach(function(cb1577) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return cb1577(sender_iw1574, data1575);
    });
};
Universe.prototype.handle_disconnect = function(iw1578) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1579 = this;
    var tasks1580 = this1579.__disconnect_tasks;
    var loop1581 = function(i1582) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.__lt_(i1582, tasks1580.length) !== false) {
            var task1583 = tasks1580[i1582];
            task1583(iw1578);
            var if_res798 = loop1581(M4.add1(i1582));
        } else {
            var if_res798 = M4.rvoid();
        }
        return if_res798;
    };
    loop1581(0);
    this1579.gui.log(M4.format($rjs_core.UString.make("~a !! closed port"), M9.iworld_name(iw1578)));
    return M4.rvoid();
};
var on_new = function(cb1584) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(u1585) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_new_evt1586 = {
            'type': "on-new"
        };
        return {
            'name': "on-new",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1587 = this;
                var init_task1588 = function(peer1589) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var handle_connection1590 = function(conn1591) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var name1592 = $rjs_core.UString.make("client name");
                        if (conn1591.label !== false) {
                            name1592 = M1.js_string__gt_string(conn1591.label);
                            var if_res799 = null;
                        } else {
                            var if_res799 = M4.rvoid();
                        }
                        if_res799;
                        var let_result800 = M4.values();
                        var iw1593 = M9.make_iworld(conn1591, name1592);
                        u1585.__active_iworlds.push(iw1593);
                        u1585.queue_event({
                            'type': "on-new",
                            'iWorld': iw1593
                        });
                        conn1591.on("close", function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return u1585.handle_disconnect(iw1593);
                        });
                        return conn1591.on("data", function(data1594) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return u1585.pass_message(iw1593, data1594);
                        });
                    };
                    return peer1589.on("connection", handle_connection1590);
                };
                u1585.add_peer_init_task(init_task1588);
                return M4.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1595 = this;
                return M4.rvoid();
            },
            'invoke': function(state1596, evt1597) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1598 = this;
                var conn1599 = M9.iworld_conn(evt1597.iWorld);
                conn1599.on("open", function(_1600) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return u1585.change_state(cb1584(state1596, evt1597.iWorld));
                });
                return true;
            }
        };
    };
};
var on_disconnect = function(cb1601) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(u1602) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_disconnect_evt1603 = {
            'type': "on-disconnect"
        };
        return {
            'name': "on-disconnect",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1604 = this;
                u1602.__disconnect_tasks.push(function(iworld1605) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return u1602.queue_event({
                        'type': "on-disconnect",
                        'iWorld': iworld1605
                    });
                });
                return M4.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1606 = this;
                return M4.rvoid();
            },
            'invoke': function(state1607, evt1608) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1609 = this;
                u1602.change_state(cb1601(state1607, evt1608.iWorld));
                return M4.rvoid();
            }
        };
    };
};
var server_id = function(id1610) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(u1611) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "server-id",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1612 = this;
                u1611.__peer_id = M1.js_string(id1610);
                return M4.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1613 = this;
                return M4.rvoid();
            }
        };
    };
};
var on_msg = function(cb1614) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(u1615) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_msg_evt1616 = {
            'type': "on-msg"
        };
        return {
            'name': "on-msg",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1617 = this;
                var handle_msg1618 = function(sender1619, data1620) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return u1615.queue_event({
                        'type': "on-msg",
                        'iWorld': sender1619,
                        'msg': data1620
                    });
                };
                u1615.__message_listeners.push(handle_msg1618);
                return M4.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1621 = this;
                return M4.rvoid();
            },
            'invoke': function(state1622, evt1623) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                u1615.change_state(cb1614(state1622, evt1623.iWorld, M0.decode_data(evt1623.msg)));
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