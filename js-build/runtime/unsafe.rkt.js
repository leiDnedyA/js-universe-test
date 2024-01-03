import * as $rjs_core from './core.js';
import * as Core from "./core.js";
var unsafe_fx_plus_ = function(a214, b215) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a214 + b215) | 0;
};
var unsafe_fx_ = function(a216, b217) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a216 - b217) | 0;
};
var unsafe_fx_times_ = function(a218, b219) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a218 * b219) | 0;
};
var unsafe_fxquotient = function(a220, b221) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a220 / b221) | 0;
};
var unsafe_fxremainder = function(a222, b223) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a222 % b223) | 0;
};
var unsafe_fxmodulo = function(a224, b225) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var remainder226 = a224 % b225;
    if ((remainder226 >= 0) !== false) {
        var if_res76 = remainder226;
    } else {
        var if_res76 = remainder226 + b225;
    }
    return Math.floor(if_res76);
};
var unsafe_fxabs = function(a227) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.abs(a227);
};
var unsafe_fx_eq_ = function(a228, b229) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a228 === b229;
};
var unsafe_fx_lt_ = function(a230, b231) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a230 < b231;
};
var unsafe_fx_lt__eq_ = function(a232, b233) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a232 <= b233;
};
var unsafe_fx_gt_ = function(a234, b235) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a234 > b235;
};
var unsafe_fx_gt__eq_ = function(a236, b237) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a236 >= b237;
};
var unsafe_fxmin = function(a238, b239) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a238 < b239) !== false) {
        var if_res77 = a238;
    } else {
        var if_res77 = b239;
    }
    return if_res77;
};
var unsafe_fxmax = function(a240, b241) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a240 > b241) !== false) {
        var if_res78 = b241;
    } else {
        var if_res78 = a240;
    }
    return if_res78;
};
var unsafe_fl_eq_ = function(a242, b243) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a242 === b243;
};
var unsafe_fl_lt_ = function(a244, b245) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a244 < b245;
};
var unsafe_fl_lt__eq_ = function(a246, b247) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a246 <= b247;
};
var unsafe_fl_gt_ = function(a248, b249) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a248 > b249;
};
var unsafe_fl_gt__eq_ = function(a250, b251) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a250 >= b251;
};
var unsafe_flmin = function(a252, b253) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a252 < b253) !== false) {
        var if_res79 = a252;
    } else {
        var if_res79 = b253;
    }
    return if_res79;
};
var unsafe_flmax = function(a254, b255) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a254 > b255) !== false) {
        var if_res80 = b255;
    } else {
        var if_res80 = a254;
    }
    return if_res80;
};
var unsafe_fxrshift = function(a256, b257) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a256 >> b257) | 0;
};
var unsafe_fxlshift = function(a258, b259) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a258 << b259) | 0;
};
var unsafe_fxand = function(a260, b261) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a260 && b261) | 0;
};
var unsafe_fxior = function(a262, b263) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a262 || b263) | 0;
};
var unsafe_fxxor = function(a264, b265) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a264 ^ b265) | 0;
};
var unsafe_fxnot = Core.bitwiseNot;
var unsafe_car = function(v266) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v266.hd;
};
var unsafe_cdr = function(v267) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v267.tl;
};
var unsafe_mcar = function(v268) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v268.hd;
};
var unsafe_mcdr = function(v269) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v269.tl;
};
var unsafe_set_mcar_bang_ = function(p270, v271) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return p270.setCar(v271);
};
var unsafe_set_mcdr_bang_ = function(p272, v273) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return p272.setCdr(v273);
};
var unsafe_cons_list = function(v274, rest275) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Core.Pair.make(v274, rest275);
};
var unsafe_struct_ref = function(v276, k277) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v276._fields[k277];
};
var unsafe_vector_ref = function(v278, k279) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v278.ref(k279);
};
var unsafe_vector_set_bang_ = function(v280, k281, val282) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v280.set(k281, val282);
};
var unsafe_vector_length = function(v283) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v283.length();
};
var unsafe_vector_times__ref = function(v284, k285) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v284.ref(k285);
};
var unsafe_vector_times__set_bang_ = function(v286, k287, val288) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v286.set(k287, val288);
};
var unsafe_vector_times__length = function(v289) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v289.length();
};
var unsafe_immutable_hash_iterate_first = function(h290) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h290.iterateFirst();
};
var unsafe_immutable_hash_iterate_next = function(h291, i292) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h291.iterateNext(i292);
};
var unsafe_immutable_hash_iterate_key = function(h293, i294) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h293.iterateKey(i294);
};
var unsafe_immutable_hash_iterate_value = function(h295, i296) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h295.iterateValue(i296);
};
var unsafe_immutable_hash_iterate_key_plus_value = function(h297, i298) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h297.iterateKeyValue(i298);
};
var unsafe_immutable_hash_iterate_pair = function(h299, i300) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h299.iteratePair(i300);
};
var unsafe_mutable_hash_iterate_first = function(h301) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h301.iterateFirst();
};
var unsafe_mutable_hash_iterate_next = function(h302, i303) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h302.iterateNext(i303);
};
var unsafe_mutable_hash_iterate_key = function(h304, i305) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h304.iterateKey(i305);
};
var unsafe_mutable_hash_iterate_value = function(h306, i307) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h306.iterateValue(i307);
};
var unsafe_mutable_hash_iterate_key_plus_value = function(h308, i309) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h308.iterateKeyValue(i309);
};
var unsafe_mutable_hash_iterate_pair = function(h310, i311) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h310.iteratePair(i311);
};
var unsafe_undefined = Core.theUnsafeUndefined;
var unsafe_make_place_local = Core.Box.make;
var unsafe_place_local_set_bang_ = function(b312, v313) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b312.set(v313);
};
var unsafe_place_local_ref = function(b314) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b314.get();
};
var variable_reference_from_unsafe_p = function(v315) {
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
var unsafe_string_length = function(s316) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s316.length;
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