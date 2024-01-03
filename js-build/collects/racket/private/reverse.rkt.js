import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/core.rkt.js";
M1.__rjs_quoted__.___declare;
$rjs_core.Keyword.make("cross-phase-persistent");
var reverse = function(l1073) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res483 = M0.rvoid();
    } else {
        if (M0.list_p(l1073) !== false) {
            var if_res482 = M0.rvoid();
        } else {
            var if_res482 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("reverse"), $rjs_core.UString.make("list?"), l1073);
        }
        var if_res483 = if_res482;
    }
    if_res483;
    var loop1074 = function(a1075, l1076) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(l1076) !== false) {
            var if_res484 = a1075;
        } else {
            var if_res484 = loop1074(M0.cons(M0.car(l1076), a1075), M0.cdr(l1076));
        }
        return if_res484;
    };
    return loop1074(M0.rnull, l1073);
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    reverse as alt_reverse
};