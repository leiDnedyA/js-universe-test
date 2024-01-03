import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/core.rkt.js";
M1.__rjs_quoted__.___declare;
$rjs_core.Keyword.make("cross-phase-persistent");
var reverse = function(l2636) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1467 = M0.rvoid();
    } else {
        if (M0.list_p(l2636) !== false) {
            var if_res1466 = M0.rvoid();
        } else {
            var if_res1466 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("reverse"), $rjs_core.UString.make("list?"), l2636);
        }
        var if_res1467 = if_res1466;
    }
    if_res1467;
    var loop2637 = function(a2638, l2639) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(l2639) !== false) {
            var if_res1468 = a2638;
        } else {
            var if_res1468 = loop2637(M0.cons(M0.car(l2639), a2638), M0.cdr(l2639));
        }
        return if_res1468;
    };
    return loop2637(M0.rnull, l2636);
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    reverse as alt_reverse
};