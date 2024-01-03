import * as $rjs_core from '../runtime/core.js';
import * as M0 from "../runtime/kernel.rkt.js";
import * as M1 from "../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../runtime/unsafe.rkt.js";
import * as M3 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
var DEFAULT_DISPLAY_MODE = "block";
var WIDTH = 500;
var HEIGHT = 300;
var ServerLogger = function(root3294, stop_callback3295, restart_callback3296) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this3297 = this;
    this3297.logs = [];
    this3297.autoscroll_p = true;
    this3297.container = document.createElement("div");
    this3297.textbox = document.createElement("textarea");
    this3297.checkbox_div = document.createElement("div");
    this3297.checkbox_label = document.createElement("label");
    this3297.checkbox = document.createElement("input");
    this3297.button_div = document.createElement("div");
    this3297.stop_button = document.createElement("button");
    this3297.restart_button = document.createElement("button");
    this3297.container.style.display = "none";
    this3297.container.style.width = M1.js_string(M0.format($rjs_core.UString.make("~apx"), WIDTH));
    this3297.container.style.height = M1.js_string(M0.format($rjs_core.UString.make("~apx"), HEIGHT));
    this3297.textbox.style.width = "inherit";
    this3297.textbox.style.height = "inherit";
    this3297.checkbox_label.for = "autoscroll";
    this3297.checkbox_label.innerHTML = "autoscroll with new input";
    this3297.checkbox.type = "checkbox";
    this3297.checkbox.onclick = function() {
        if (arguments.length !== 0) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        this3297.autoscroll_p = this3297.checkbox.checked;
        return null;
    };
    this3297.checkbox.checked = true;
    this3297.stop_button.innerHTML = "stop";
    this3297.stop_button.style.grid_area = "stop";
    this3297.stop_button.onclick = stop_callback3295;
    this3297.restart_button.innerHTML = "restart";
    this3297.restart_button.style.grid_area = "restart";
    this3297.restart_button.onclick = restart_callback3296;
    this3297.button_div.style.width = "100%";
    this3297.button_div.style.display = "grid";
    this3297.button_div.style.gridTemplateAreas = "'stop restart'";
    this3297.checkbox_div.appendChild(this3297.checkbox_label);
    this3297.checkbox_div.appendChild(this3297.checkbox);
    this3297.button_div.appendChild(this3297.stop_button);
    this3297.button_div.appendChild(this3297.restart_button);
    this3297.container.appendChild(this3297.textbox);
    this3297.container.appendChild(this3297.checkbox_div);
    if (restart_callback3296 !== false) {
        var if_res1782 = stop_callback3295;
    } else {
        var if_res1782 = false;
    }
    if (if_res1782 !== false) {
        var if_res1783 = this3297.container.appendChild(this3297.button_div);
    } else {
        var if_res1783 = M0.rvoid();
    }
    if_res1783;
    root3294.appendChild(this3297.container);
    return this3297;
};
ServerLogger.prototype.log = function(text3298) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this3299 = this;
    this3299.logs.push(M1.js_string(text3298));
    this3299.render();
    console.log(M1.js_string(text3298));
    return M0.rvoid();
};
ServerLogger.prototype.show = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this3300 = this;
    this3300.container.style.display = DEFAULT_DISPLAY_MODE;
    return M0.rvoid();
};
ServerLogger.prototype.hide = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this3301 = this;
    this3301.container.style.display = "none";
    return M0.rvoid();
};
ServerLogger.prototype.render = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this3302 = this;
    var log_string3303 = this3302.logs.reduce(function(res3304, curr3305) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((res3304 === "") !== false) {
            var if_res1784 = M1.js_string(curr3305);
        } else {
            var if_res1784 = res3304 + ("\n\n" + M1.js_string(curr3305));
        }
        return if_res1784;
    }, "");
    this3302.textbox.innerHTML = log_string3303;
    if (M0.equal_p(this3302.autoscroll_p, true) !== false) {
        this3302.textbox.scrollTop = this3302.textbox.scrollHeight;
        var if_res1785 = null;
    } else {
        var if_res1785 = M0.rvoid();
    }
    if_res1785;
    return M0.rvoid();
};
var make_gui = function(root3306, stop_callback3307, restart_callback3308) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new ServerLogger(root3306, stop_callback3307, restart_callback3308);
};
var server_gui3309 = function(root_element13310, stop_callback23311, restart_callback33312) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.eq_p(root_element13310, M2.unsafe_undefined) !== false) {
        var if_res1786 = document.body;
    } else {
        var if_res1786 = root_element13310;
    }
    var root_element3313 = if_res1786;
    if (false !== false) {
        var if_res1787 = false;
    } else {
        var if_res1787 = stop_callback23311;
    }
    var stop_callback3314 = if_res1787;
    if (false !== false) {
        var if_res1788 = false;
    } else {
        var if_res1788 = restart_callback33312;
    }
    var restart_callback3315 = if_res1788;
    return make_gui(root_element3313, stop_callback3314, restart_callback3315);
};
var cl1789 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return server_gui3309(M2.unsafe_undefined, false, false);
};
var cl1790 = function(root_element3316, stop_callback3317, restart_callback33318) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return server_gui3309(root_element3316, stop_callback3317, restart_callback33318);
};
var cl1791 = function(root_element3319, stop_callback23320) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return server_gui3309(root_element3319, stop_callback23320, false);
};
var cl1792 = function(root_element13321) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return server_gui3309(root_element13321, false, false);
};
var server_gui = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1793 = {
        '0': cl1789,
        '3': cl1790,
        '2': cl1791,
        '1': cl1792
    } [arguments.length];
    if (fixed_lam1793 !== undefined) {
        return fixed_lam1793.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1, 2, 3]);
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    server_gui
};