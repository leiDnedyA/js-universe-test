import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/core.rkt.js";
M1.__rjs_quoted__.___declare;
$rjs_core.Keyword.make("cross-phase-persistent");
var reverse = function(l3331) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1802 = M0.rvoid();
    } else {
        if (M0.list_p(l3331) !== false) {
            var if_res1801 = M0.rvoid();
        } else {
            var if_res1801 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("reverse"), $rjs_core.UString.make("list?"), l3331);
        }
        var if_res1802 = if_res1801;
    }
    if_res1802;
    var loop3332 = function(a3333, l3334) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(l3334) !== false) {
            var if_res1803 = a3333;
        } else {
            var if_res1803 = loop3332(M0.cons(M0.car(l3334), a3333), M0.cdr(l3334));
        }
        return if_res1803;
    };
    return loop3332(M0.rnull, l3331);
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    reverse as alt_reverse
};