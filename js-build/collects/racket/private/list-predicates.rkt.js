import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
var empty_p = function(l2839) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.null_p(l2839);
};
var cons_p = function(l2840) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.pair_p(l2840);
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    cons_p,
    empty_p
};