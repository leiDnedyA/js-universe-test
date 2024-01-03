import * as $rjs_core from './core.js';
import * as Core from "./core.js";
var unsafe_fx_plus_ = function(a210, b211) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a210 + b211) | 0;
};
var unsafe_fx_ = function(a212, b213) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a212 - b213) | 0;
};
var unsafe_fx_times_ = function(a214, b215) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a214 * b215) | 0;
};
var unsafe_fxquotient = function(a216, b217) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a216 / b217) | 0;
};
var unsafe_fxremainder = function(a218, b219) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a218 % b219) | 0;
};
var unsafe_fxmodulo = function(a220, b221) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var remainder222 = a220 % b221;
    if ((remainder222 >= 0) !== false) {
        var if_res76 = remainder222;
    } else {
        var if_res76 = remainder222 + b221;
    }
    return Math.floor(if_res76);
};
var unsafe_fxabs = function(a223) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.abs(a223);
};
var unsafe_fx_eq_ = function(a224, b225) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a224 === b225;
};
var unsafe_fx_lt_ = function(a226, b227) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a226 < b227;
};
var unsafe_fx_lt__eq_ = function(a228, b229) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a228 <= b229;
};
var unsafe_fx_gt_ = function(a230, b231) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a230 > b231;
};
var unsafe_fx_gt__eq_ = function(a232, b233) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a232 >= b233;
};
var unsafe_fxmin = function(a234, b235) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a234 < b235) !== false) {
        var if_res77 = a234;
    } else {
        var if_res77 = b235;
    }
    return if_res77;
};
var unsafe_fxmax = function(a236, b237) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a236 > b237) !== false) {
        var if_res78 = b237;
    } else {
        var if_res78 = a236;
    }
    return if_res78;
};
var unsafe_fl_eq_ = function(a238, b239) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a238 === b239;
};
var unsafe_fl_lt_ = function(a240, b241) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a240 < b241;
};
var unsafe_fl_lt__eq_ = function(a242, b243) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a242 <= b243;
};
var unsafe_fl_gt_ = function(a244, b245) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a244 > b245;
};
var unsafe_fl_gt__eq_ = function(a246, b247) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a246 >= b247;
};
var unsafe_flmin = function(a248, b249) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a248 < b249) !== false) {
        var if_res79 = a248;
    } else {
        var if_res79 = b249;
    }
    return if_res79;
};
var unsafe_flmax = function(a250, b251) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a250 > b251) !== false) {
        var if_res80 = b251;
    } else {
        var if_res80 = a250;
    }
    return if_res80;
};
var unsafe_fxrshift = function(a252, b253) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a252 >> b253) | 0;
};
var unsafe_fxlshift = function(a254, b255) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a254 << b255) | 0;
};
var unsafe_fxand = function(a256, b257) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a256 && b257) | 0;
};
var unsafe_fxior = function(a258, b259) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a258 || b259) | 0;
};
var unsafe_fxxor = function(a260, b261) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a260 ^ b261) | 0;
};
var unsafe_fxnot = Core.bitwiseNot;
var unsafe_car = function(v262) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v262.hd;
};
var unsafe_cdr = function(v263) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v263.tl;
};
var unsafe_mcar = function(v264) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v264.hd;
};
var unsafe_mcdr = function(v265) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v265.tl;
};
var unsafe_set_mcar_bang_ = function(p266, v267) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return p266.setCar(v267);
};
var unsafe_set_mcdr_bang_ = function(p268, v269) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return p268.setCdr(v269);
};
var unsafe_cons_list = function(v270, rest271) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Core.Pair.make(v270, rest271);
};
var unsafe_struct_ref = function(v272, k273) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v272._fields[k273];
};
var unsafe_vector_ref = function(v274, k275) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v274.ref(k275);
};
var unsafe_vector_set_bang_ = function(v276, k277, val278) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v276.set(k277, val278);
};
var unsafe_vector_length = function(v279) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v279.length();
};
var unsafe_vector_times__ref = function(v280, k281) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v280.ref(k281);
};
var unsafe_vector_times__set_bang_ = function(v282, k283, val284) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v282.set(k283, val284);
};
var unsafe_vector_times__length = function(v285) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v285.length();
};
var unsafe_immutable_hash_iterate_first = function(h286) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h286.iterateFirst();
};
var unsafe_immutable_hash_iterate_next = function(h287, i288) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h287.iterateNext(i288);
};
var unsafe_immutable_hash_iterate_key = function(h289, i290) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h289.iterateKey(i290);
};
var unsafe_immutable_hash_iterate_value = function(h291, i292) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h291.iterateValue(i292);
};
var unsafe_immutable_hash_iterate_key_plus_value = function(h293, i294) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h293.iterateKeyValue(i294);
};
var unsafe_immutable_hash_iterate_pair = function(h295, i296) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h295.iteratePair(i296);
};
var unsafe_mutable_hash_iterate_first = function(h297) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h297.iterateFirst();
};
var unsafe_mutable_hash_iterate_next = function(h298, i299) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h298.iterateNext(i299);
};
var unsafe_mutable_hash_iterate_key = function(h300, i301) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h300.iterateKey(i301);
};
var unsafe_mutable_hash_iterate_value = function(h302, i303) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h302.iterateValue(i303);
};
var unsafe_mutable_hash_iterate_key_plus_value = function(h304, i305) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h304.iterateKeyValue(i305);
};
var unsafe_mutable_hash_iterate_pair = function(h306, i307) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h306.iteratePair(i307);
};
var unsafe_undefined = Core.theUnsafeUndefined;
var unsafe_make_place_local = Core.Box.make;
var unsafe_place_local_set_bang_ = function(b308, v309) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b308.set(v309);
};
var unsafe_place_local_ref = function(b310) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b310.get();
};
var variable_reference_from_unsafe_p = function(v311) {
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
var unsafe_string_length = function(s312) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s312.length;
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