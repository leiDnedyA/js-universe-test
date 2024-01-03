import * as $rjs_core from '../runtime/core.js';
import * as M0 from "../runtime/kernel.rkt.js";
import * as M1 from "../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../runtime/unsafe.rkt.js";
import * as M3 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
var DEFAULT_DISPLAY_MODE = "block";
var WIDTH = 500;
var HEIGHT = 300;
var ServerLogger = function(root2735, stop_callback2736, restart_callback2737) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this2738 = this;
    this2738.logs = [];
    this2738.autoscroll_p = true;
    this2738.container = document.createElement("div");
    this2738.textbox = document.createElement("textarea");
    this2738.checkbox_div = document.createElement("div");
    this2738.checkbox_label = document.createElement("label");
    this2738.checkbox = document.createElement("input");
    this2738.button_div = document.createElement("div");
    this2738.stop_button = document.createElement("button");
    this2738.restart_button = document.createElement("button");
    this2738.container.style.display = "none";
    this2738.container.style.width = M1.js_string(M0.format($rjs_core.UString.make("~apx"), WIDTH));
    this2738.container.style.height = M1.js_string(M0.format($rjs_core.UString.make("~apx"), HEIGHT));
    this2738.textbox.style.width = "inherit";
    this2738.textbox.style.height = "inherit";
    this2738.checkbox_label.for = "autoscroll";
    this2738.checkbox_label.innerHTML = "autoscroll with new input";
    this2738.checkbox.type = "checkbox";
    this2738.checkbox.onclick = function() {
        if (arguments.length !== 0) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        this2738.autoscroll_p = this2738.checkbox.checked;
        return null;
    };
    this2738.checkbox.checked = true;
    this2738.stop_button.innerHTML = "stop";
    this2738.stop_button.style.grid_area = "stop";
    this2738.stop_button.onclick = stop_callback2736;
    this2738.restart_button.innerHTML = "restart";
    this2738.restart_button.style.grid_area = "restart";
    this2738.restart_button.onclick = restart_callback2737;
    this2738.button_div.style.width = "100%";
    this2738.button_div.style.display = "grid";
    this2738.button_div.style.gridTemplateAreas = "'stop restart'";
    this2738.checkbox_div.appendChild(this2738.checkbox_label);
    this2738.checkbox_div.appendChild(this2738.checkbox);
    this2738.button_div.appendChild(this2738.stop_button);
    this2738.button_div.appendChild(this2738.restart_button);
    this2738.container.appendChild(this2738.textbox);
    this2738.container.appendChild(this2738.checkbox_div);
    if (restart_callback2737 !== false) {
        var if_res1487 = stop_callback2736;
    } else {
        var if_res1487 = false;
    }
    if (if_res1487 !== false) {
        var if_res1488 = this2738.container.appendChild(this2738.button_div);
    } else {
        var if_res1488 = M0.rvoid();
    }
    if_res1488;
    root2735.appendChild(this2738.container);
    return this2738;
};
ServerLogger.prototype.log = function(text2739) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this2740 = this;
    this2740.logs.push(M1.js_string(text2739));
    this2740.render();
    console.log(M1.js_string(text2739));
    return M0.rvoid();
};
ServerLogger.prototype.show = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this2741 = this;
    this2741.container.style.display = DEFAULT_DISPLAY_MODE;
    return M0.rvoid();
};
ServerLogger.prototype.hide = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this2742 = this;
    this2742.container.style.display = "none";
    return M0.rvoid();
};
ServerLogger.prototype.render = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this2743 = this;
    var log_string2744 = this2743.logs.reduce(function(res2745, curr2746) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((res2745 === "") !== false) {
            var if_res1489 = M1.js_string(curr2746);
        } else {
            var if_res1489 = res2745 + ("\n\n" + M1.js_string(curr2746));
        }
        return if_res1489;
    }, "");
    this2743.textbox.innerHTML = log_string2744;
    if (M0.equal_p(this2743.autoscroll_p, true) !== false) {
        this2743.textbox.scrollTop = this2743.textbox.scrollHeight;
        var if_res1490 = null;
    } else {
        var if_res1490 = M0.rvoid();
    }
    if_res1490;
    return M0.rvoid();
};
var make_gui = function(root2747, stop_callback2748, restart_callback2749) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new ServerLogger(root2747, stop_callback2748, restart_callback2749);
};
var server_gui2750 = function(root_element12751, stop_callback22752, restart_callback32753) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.eq_p(root_element12751, M2.unsafe_undefined) !== false) {
        var if_res1491 = document.body;
    } else {
        var if_res1491 = root_element12751;
    }
    var root_element2754 = if_res1491;
    if (false !== false) {
        var if_res1492 = false;
    } else {
        var if_res1492 = stop_callback22752;
    }
    var stop_callback2755 = if_res1492;
    if (false !== false) {
        var if_res1493 = false;
    } else {
        var if_res1493 = restart_callback32753;
    }
    var restart_callback2756 = if_res1493;
    return make_gui(root_element2754, stop_callback2755, restart_callback2756);
};
var cl1494 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return server_gui2750(M2.unsafe_undefined, false, false);
};
var cl1495 = function(root_element2757, stop_callback2758, restart_callback32759) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return server_gui2750(root_element2757, stop_callback2758, restart_callback32759);
};
var cl1496 = function(root_element2760, stop_callback22761) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return server_gui2750(root_element2760, stop_callback22761, false);
};
var cl1497 = function(root_element12762) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return server_gui2750(root_element12762, false, false);
};
var server_gui = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1498 = {
        '0': cl1494,
        '3': cl1495,
        '2': cl1496,
        '1': cl1497
    } [arguments.length];
    if (fixed_lam1498 !== undefined) {
        return fixed_lam1498.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1, 2, 3]);
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    server_gui
};