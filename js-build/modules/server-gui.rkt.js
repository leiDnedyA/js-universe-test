import * as $rjs_core from '../runtime/core.js';
import * as M0 from "../runtime/kernel.rkt.js";
import * as M1 from "../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../runtime/unsafe.rkt.js";
import * as M3 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
var DEFAULT_DISPLAY_MODE = "block";
var WIDTH = 500;
var HEIGHT = 300;
var ServerLogger = function(root2599, stop_callback2600, restart_callback2601) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this2602 = this;
    this2602.logs = [];
    this2602.autoscroll_p = true;
    this2602.container = document.createElement("div");
    this2602.textbox = document.createElement("textarea");
    this2602.checkbox_div = document.createElement("div");
    this2602.checkbox_label = document.createElement("label");
    this2602.checkbox = document.createElement("input");
    this2602.button_div = document.createElement("div");
    this2602.stop_button = document.createElement("button");
    this2602.restart_button = document.createElement("button");
    this2602.container.style.display = "none";
    this2602.container.style.width = M1.js_string(M0.format($rjs_core.UString.make("~apx"), WIDTH));
    this2602.container.style.height = M1.js_string(M0.format($rjs_core.UString.make("~apx"), HEIGHT));
    this2602.textbox.style.width = "inherit";
    this2602.textbox.style.height = "inherit";
    this2602.checkbox_label.for = "autoscroll";
    this2602.checkbox_label.innerHTML = "autoscroll with new input";
    this2602.checkbox.type = "checkbox";
    this2602.checkbox.onclick = function() {
        if (arguments.length !== 0) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        this2602.autoscroll_p = this2602.checkbox.checked;
        return null;
    };
    this2602.checkbox.checked = true;
    this2602.stop_button.innerHTML = "stop";
    this2602.stop_button.style.grid_area = "stop";
    this2602.stop_button.onclick = stop_callback2600;
    this2602.restart_button.innerHTML = "restart";
    this2602.restart_button.style.grid_area = "restart";
    this2602.restart_button.onclick = restart_callback2601;
    this2602.button_div.style.width = "100%";
    this2602.button_div.style.display = "grid";
    this2602.button_div.style.gridTemplateAreas = "'stop restart'";
    this2602.checkbox_div.appendChild(this2602.checkbox_label);
    this2602.checkbox_div.appendChild(this2602.checkbox);
    this2602.button_div.appendChild(this2602.stop_button);
    this2602.button_div.appendChild(this2602.restart_button);
    this2602.container.appendChild(this2602.textbox);
    this2602.container.appendChild(this2602.checkbox_div);
    if (restart_callback2601 !== false) {
        var if_res1447 = stop_callback2600;
    } else {
        var if_res1447 = false;
    }
    if (if_res1447 !== false) {
        var if_res1448 = this2602.container.appendChild(this2602.button_div);
    } else {
        var if_res1448 = M0.rvoid();
    }
    if_res1448;
    root2599.appendChild(this2602.container);
    return this2602;
};
ServerLogger.prototype.log = function(text2603) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this2604 = this;
    this2604.logs.push(M1.js_string(text2603));
    this2604.render();
    console.log(M1.js_string(text2603));
    return M0.rvoid();
};
ServerLogger.prototype.show = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this2605 = this;
    this2605.container.style.display = DEFAULT_DISPLAY_MODE;
    return M0.rvoid();
};
ServerLogger.prototype.hide = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this2606 = this;
    this2606.container.style.display = "none";
    return M0.rvoid();
};
ServerLogger.prototype.render = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this2607 = this;
    var log_string2608 = this2607.logs.reduce(function(res2609, curr2610) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((res2609 === "") !== false) {
            var if_res1449 = M1.js_string(curr2610);
        } else {
            var if_res1449 = res2609 + ("\n\n" + M1.js_string(curr2610));
        }
        return if_res1449;
    }, "");
    this2607.textbox.innerHTML = log_string2608;
    if (M0.equal_p(this2607.autoscroll_p, true) !== false) {
        this2607.textbox.scrollTop = this2607.textbox.scrollHeight;
        var if_res1450 = null;
    } else {
        var if_res1450 = M0.rvoid();
    }
    if_res1450;
    return M0.rvoid();
};
var make_gui = function(root2611, stop_callback2612, restart_callback2613) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new ServerLogger(root2611, stop_callback2612, restart_callback2613);
};
var server_gui2614 = function(root_element12615, stop_callback22616, restart_callback32617) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.eq_p(root_element12615, M2.unsafe_undefined) !== false) {
        var if_res1451 = document.body;
    } else {
        var if_res1451 = root_element12615;
    }
    var root_element2618 = if_res1451;
    if (false !== false) {
        var if_res1452 = false;
    } else {
        var if_res1452 = stop_callback22616;
    }
    var stop_callback2619 = if_res1452;
    if (false !== false) {
        var if_res1453 = false;
    } else {
        var if_res1453 = restart_callback32617;
    }
    var restart_callback2620 = if_res1453;
    return make_gui(root_element2618, stop_callback2619, restart_callback2620);
};
var cl1454 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return server_gui2614(M2.unsafe_undefined, false, false);
};
var cl1455 = function(root_element2621, stop_callback2622, restart_callback32623) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return server_gui2614(root_element2621, stop_callback2622, restart_callback32623);
};
var cl1456 = function(root_element2624, stop_callback22625) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return server_gui2614(root_element2624, stop_callback22625, false);
};
var cl1457 = function(root_element12626) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return server_gui2614(root_element12626, false, false);
};
var server_gui = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1458 = {
        '0': cl1454,
        '3': cl1455,
        '2': cl1456,
        '1': cl1457
    } [arguments.length];
    if (fixed_lam1458 !== undefined) {
        return fixed_lam1458.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1, 2, 3]);
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    server_gui
};