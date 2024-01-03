import * as $rjs_core from './core.js';
import * as Core from "./core.js";
var unsafe_fx_plus_ = function(a211, b212) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a211 + b212) | 0;
};
var unsafe_fx_ = function(a213, b214) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a213 - b214) | 0;
};
var unsafe_fx_times_ = function(a215, b216) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a215 * b216) | 0;
};
var unsafe_fxquotient = function(a217, b218) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a217 / b218) | 0;
};
var unsafe_fxremainder = function(a219, b220) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a219 % b220) | 0;
};
var unsafe_fxmodulo = function(a221, b222) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var remainder223 = a221 % b222;
    if ((remainder223 >= 0) !== false) {
        var if_res76 = remainder223;
    } else {
        var if_res76 = remainder223 + b222;
    }
    return Math.floor(if_res76);
};
var unsafe_fxabs = function(a224) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.abs(a224);
};
var unsafe_fx_eq_ = function(a225, b226) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a225 === b226;
};
var unsafe_fx_lt_ = function(a227, b228) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a227 < b228;
};
var unsafe_fx_lt__eq_ = function(a229, b230) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a229 <= b230;
};
var unsafe_fx_gt_ = function(a231, b232) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a231 > b232;
};
var unsafe_fx_gt__eq_ = function(a233, b234) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a233 >= b234;
};
var unsafe_fxmin = function(a235, b236) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a235 < b236) !== false) {
        var if_res77 = a235;
    } else {
        var if_res77 = b236;
    }
    return if_res77;
};
var unsafe_fxmax = function(a237, b238) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a237 > b238) !== false) {
        var if_res78 = b238;
    } else {
        var if_res78 = a237;
    }
    return if_res78;
};
var unsafe_fl_eq_ = function(a239, b240) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a239 === b240;
};
var unsafe_fl_lt_ = function(a241, b242) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a241 < b242;
};
var unsafe_fl_lt__eq_ = function(a243, b244) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a243 <= b244;
};
var unsafe_fl_gt_ = function(a245, b246) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a245 > b246;
};
var unsafe_fl_gt__eq_ = function(a247, b248) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a247 >= b248;
};
var unsafe_flmin = function(a249, b250) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a249 < b250) !== false) {
        var if_res79 = a249;
    } else {
        var if_res79 = b250;
    }
    return if_res79;
};
var unsafe_flmax = function(a251, b252) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a251 > b252) !== false) {
        var if_res80 = b252;
    } else {
        var if_res80 = a251;
    }
    return if_res80;
};
var unsafe_fxrshift = function(a253, b254) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a253 >> b254) | 0;
};
var unsafe_fxlshift = function(a255, b256) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a255 << b256) | 0;
};
var unsafe_fxand = function(a257, b258) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a257 && b258) | 0;
};
var unsafe_fxior = function(a259, b260) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a259 || b260) | 0;
};
var unsafe_fxxor = function(a261, b262) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a261 ^ b262) | 0;
};
var unsafe_fxnot = Core.bitwiseNot;
var unsafe_car = function(v263) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v263.hd;
};
var unsafe_cdr = function(v264) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v264.tl;
};
var unsafe_mcar = function(v265) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v265.hd;
};
var unsafe_mcdr = function(v266) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v266.tl;
};
var unsafe_set_mcar_bang_ = function(p267, v268) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return p267.setCar(v268);
};
var unsafe_set_mcdr_bang_ = function(p269, v270) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return p269.setCdr(v270);
};
var unsafe_cons_list = function(v271, rest272) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Core.Pair.make(v271, rest272);
};
var unsafe_struct_ref = function(v273, k274) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v273._fields[k274];
};
var unsafe_vector_ref = function(v275, k276) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v275.ref(k276);
};
var unsafe_vector_set_bang_ = function(v277, k278, val279) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v277.set(k278, val279);
};
var unsafe_vector_length = function(v280) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v280.length();
};
var unsafe_vector_times__ref = function(v281, k282) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v281.ref(k282);
};
var unsafe_vector_times__set_bang_ = function(v283, k284, val285) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v283.set(k284, val285);
};
var unsafe_vector_times__length = function(v286) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v286.length();
};
var unsafe_immutable_hash_iterate_first = function(h287) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h287.iterateFirst();
};
var unsafe_immutable_hash_iterate_next = function(h288, i289) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h288.iterateNext(i289);
};
var unsafe_immutable_hash_iterate_key = function(h290, i291) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h290.iterateKey(i291);
};
var unsafe_immutable_hash_iterate_value = function(h292, i293) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h292.iterateValue(i293);
};
var unsafe_immutable_hash_iterate_key_plus_value = function(h294, i295) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h294.iterateKeyValue(i295);
};
var unsafe_immutable_hash_iterate_pair = function(h296, i297) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h296.iteratePair(i297);
};
var unsafe_mutable_hash_iterate_first = function(h298) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h298.iterateFirst();
};
var unsafe_mutable_hash_iterate_next = function(h299, i300) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h299.iterateNext(i300);
};
var unsafe_mutable_hash_iterate_key = function(h301, i302) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h301.iterateKey(i302);
};
var unsafe_mutable_hash_iterate_value = function(h303, i304) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h303.iterateValue(i304);
};
var unsafe_mutable_hash_iterate_key_plus_value = function(h305, i306) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h305.iterateKeyValue(i306);
};
var unsafe_mutable_hash_iterate_pair = function(h307, i308) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h307.iteratePair(i308);
};
var unsafe_undefined = Core.theUnsafeUndefined;
var unsafe_make_place_local = Core.Box.make;
var unsafe_place_local_set_bang_ = function(b309, v310) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b309.set(v310);
};
var unsafe_place_local_ref = function(b311) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b311.get();
};
var variable_reference_from_unsafe_p = function(v312) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var unsafe_root_continuation_prompt_tag = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Core.Marks.defaultContinuationPromptTag();
};
var unsafe_string_length = function(s313) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s313.length;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    unsafe_fx_plus_,
    unsafe_fx_,
    unsafe_fx_times_,
    unsafe_fxquotient,
    unsafe_fxremainder,
    unsafe_fxmodulo,
    unsafe_fxabs,
    unsafe_fx_eq_,
    unsafe_fx_lt_,
    unsafe_fx_lt__eq_,
    unsafe_fx_gt_,
    unsafe_fx_gt__eq_,
    unsafe_fxmin,
    unsafe_fxmax,
    unsafe_fl_eq_,
    unsafe_fl_lt_,
    unsafe_fl_lt__eq_,
    unsafe_fl_gt_,
    unsafe_fl_gt__eq_,
    unsafe_flmin,
    unsafe_flmax,
    unsafe_fxrshift,
    unsafe_fxlshift,
    unsafe_fxand,
    unsafe_fxior,
    unsafe_fxxor,
    unsafe_fxnot,
    unsafe_car,
    unsafe_cdr,
    unsafe_mcar,
    unsafe_mcdr,
    unsafe_set_mcar_bang_,
    unsafe_set_mcdr_bang_,
    unsafe_cons_list,
    unsafe_struct_ref,
    unsafe_vector_ref,
    unsafe_vector_set_bang_,
    unsafe_vector_length,
    unsafe_vector_times__ref,
    unsafe_vector_times__set_bang_,
    unsafe_vector_times__length,
    unsafe_immutable_hash_iterate_first,
    unsafe_immutable_hash_iterate_next,
    unsafe_immutable_hash_iterate_key,
    unsafe_immutable_hash_iterate_value,
    unsafe_immutable_hash_iterate_key_plus_value,
    unsafe_immutable_hash_iterate_pair,
    unsafe_mutable_hash_iterate_first,
    unsafe_mutable_hash_iterate_next,
    unsafe_mutable_hash_iterate_key,
    unsafe_mutable_hash_iterate_value,
    unsafe_mutable_hash_iterate_key_plus_value,
    unsafe_mutable_hash_iterate_pair,
    unsafe_undefined,
    unsafe_make_place_local,
    unsafe_place_local_set_bang_,
    unsafe_place_local_ref,
    variable_reference_from_unsafe_p,
    unsafe_root_continuation_prompt_tag,
    unsafe_string_length
};