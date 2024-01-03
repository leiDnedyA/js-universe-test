import * as $rjs_core from '../runtime/core.js';
import * as M0 from "../collects/racket/private/list.rkt.js";
import * as M1 from "./util.rkt.js";
import * as M2 from "../runtime/kernel.rkt.js";
import * as M3 from "../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M4 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
var DATA_TYPE_WARNING = "racketscript/htdp/universe: Unsupported datatype being passed to/from server.";
var encode_array = function(arr2081) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return arr2081.map(function(elem2082) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return encode_data(elem2082);
    });
};
var decode_array = function(arr2083) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return arr2083.map(function(elem2084) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return decode_data(elem2084);
    });
};
var encode_object = function(obj2085) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var keys2086 = Object.keys(obj2085);
    return keys2086.reduce(function(res2087, key2088) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        res2087[key2088] = encode_data(obj2085[key2088]);
        return res2087;
    }, {});
};
var decode_object = function(obj2089) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var keys2090 = Object.keys(obj2089);
    return keys2090.reduce(function(res2091, key2092) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        res2091[key2092] = decode_data(obj2089[key2092]);
        return res2091;
    }, {});
};
var encode_data = function(data2093) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M2.list_p(data2093) !== false) {
        var if_res998 = M0.foldl(function(curr2094, result2095) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            result2095.push(encode_data(curr2094));
            return result2095;
        }, [], data2093);
    } else {
        if (M1.null_p(data2093) !== false) {
            var if_res997 = {
                'type': "null"
            };
        } else {
            if (M1.undefined_p(data2093) !== false) {
                var if_res996 = {
                    'type': "undefined"
                };
            } else {
                if (M2.number_p(data2093) !== false) {
                    var if_res995 = {
                        'type': "number",
                        'val': data2093
                    };
                } else {
                    if (M2.string_p(data2093) !== false) {
                        var if_res994 = {
                            'type': "string",
                            'val': M3.js_string(data2093)
                        };
                    } else {
                        if (M2.symbol_p(data2093) !== false) {
                            var if_res993 = {
                                'type': "symbol",
                                'val': M3.js_string(M2.symbol__gt_string(data2093))
                            };
                        } else {
                            if (M2.boolean_p(data2093) !== false) {
                                var if_res992 = {
                                    'type': "boolean",
                                    'val': data2093
                                };
                            } else {
                                if (M1.js_string_p(data2093) !== false) {
                                    var if_res991 = {
                                        'type': "js-string",
                                        'val': data2093
                                    };
                                } else {
                                    if (M1.js_array_p(data2093) !== false) {
                                        var if_res990 = {
                                            'type': "js-array",
                                            'val': encode_array(data2093)
                                        };
                                    } else {
                                        if (M1.js_object_p(data2093) !== false) {
                                            var if_res989 = {
                                                'type': "js-object",
                                                'val': encode_object(data2093)
                                            };
                                        } else {
                                            console.warn([DATA_TYPE_WARNING, data2093]);
                                            var if_res989 = {
                                                'type': "unknown",
                                                'val': data2093
                                            };
                                        }
                                        var if_res990 = if_res989;
                                    }
                                    var if_res991 = if_res990;
                                }
                                var if_res992 = if_res991;
                            }
                            var if_res993 = if_res992;
                        }
                        var if_res994 = if_res993;
                    }
                    var if_res995 = if_res994;
                }
                var if_res996 = if_res995;
            }
            var if_res997 = if_res996;
        }
        var if_res998 = if_res997;
    }
    return if_res998;
};
var decode_data = function(data2096) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (Array.isArray(data2096) !== false) {
        var if_res1009 = data2096.reduce(function(result2097, curr2098) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M2.append(result2097, M2.list(decode_data(curr2098)));
        }, $rjs_core.Pair.EMPTY);
    } else {
        if ((data2096.type == "null") !== false) {
            var if_res1008 = null;
        } else {
            if ((data2096.type == "undefined") !== false) {
                var if_res1007 = undefined;
            } else {
                if ((data2096.type == "number") !== false) {
                    var if_res1006 = data2096.val;
                } else {
                    if ((data2096.type == "string") !== false) {
                        var if_res1005 = M3.js_string__gt_string(data2096.val);
                    } else {
                        if ((data2096.type == "symbol") !== false) {
                            var if_res1004 = M2.string__gt_symbol(M3.js_string__gt_string(data2096.val));
                        } else {
                            if ((data2096.type == "boolean") !== false) {
                                var if_res1003 = data2096.val;
                            } else {
                                if ((data2096.type == "js-string") !== false) {
                                    var if_res1002 = data2096.val;
                                } else {
                                    if ((data2096.type == "js-array") !== false) {
                                        var if_res1001 = decode_array(data2096.val);
                                    } else {
                                        if ((data2096.type == "js-object") !== false) {
                                            var if_res1000 = decode_object(data2096.val);
                                        } else {
                                            if ((data2096.type == "unknown") !== false) {
                                                console.warn(DATA_TYPE_WARNING);
                                                var if_res999 = data2096.val;
                                            } else {
                                                var if_res999 = M2.rvoid();
                                            }
                                            var if_res1000 = if_res999;
                                        }
                                        var if_res1001 = if_res1000;
                                    }
                                    var if_res1002 = if_res1001;
                                }
                                var if_res1003 = if_res1002;
                            }
                            var if_res1004 = if_res1003;
                        }
                        var if_res1005 = if_res1004;
                    }
                    var if_res1006 = if_res1005;
                }
                var if_res1007 = if_res1006;
            }
            var if_res1008 = if_res1007;
        }
        var if_res1009 = if_res1008;
    }
    return if_res1009;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    decode_data,
    encode_data
};