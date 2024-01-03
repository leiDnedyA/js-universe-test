import * as $rjs_core from '../runtime/core.js';
import * as M0 from "../collects/racket/private/list.rkt.js";
import * as M1 from "./util.rkt.js";
import * as M2 from "../runtime/kernel.rkt.js";
import * as M3 from "../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M4 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
var DATA_TYPE_WARNING = "racketscript/htdp/universe: Unsupported datatype being passed to/from server.";
var encode_array = function(arr2763) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return arr2763.map(function(elem2764) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return encode_data(elem2764);
    });
};
var decode_array = function(arr2765) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return arr2765.map(function(elem2766) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return decode_data(elem2766);
    });
};
var encode_object = function(obj2767) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var keys2768 = Object.keys(obj2767);
    return keys2768.reduce(function(res2769, key2770) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        res2769[key2770] = encode_data(obj2767[key2770]);
        return res2769;
    }, {});
};
var decode_object = function(obj2771) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var keys2772 = Object.keys(obj2771);
    return keys2772.reduce(function(res2773, key2774) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        res2773[key2774] = decode_data(obj2771[key2774]);
        return res2773;
    }, {});
};
var encode_data = function(data2775) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M2.list_p(data2775) !== false) {
        var if_res1508 = M0.foldl(function(curr2776, result2777) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            result2777.push(encode_data(curr2776));
            return result2777;
        }, [], data2775);
    } else {
        if (M1.null_p(data2775) !== false) {
            var if_res1507 = {
                'type': "null"
            };
        } else {
            if (M1.undefined_p(data2775) !== false) {
                var if_res1506 = {
                    'type': "undefined"
                };
            } else {
                if (M2.number_p(data2775) !== false) {
                    var if_res1505 = {
                        'type': "number",
                        'val': data2775
                    };
                } else {
                    if (M2.string_p(data2775) !== false) {
                        var if_res1504 = {
                            'type': "string",
                            'val': M3.js_string(data2775)
                        };
                    } else {
                        if (M2.symbol_p(data2775) !== false) {
                            var if_res1503 = {
                                'type': "symbol",
                                'val': M3.js_string(M2.symbol__gt_string(data2775))
                            };
                        } else {
                            if (M2.boolean_p(data2775) !== false) {
                                var if_res1502 = {
                                    'type': "boolean",
                                    'val': data2775
                                };
                            } else {
                                if (M1.js_string_p(data2775) !== false) {
                                    var if_res1501 = {
                                        'type': "js-string",
                                        'val': data2775
                                    };
                                } else {
                                    if (M1.js_array_p(data2775) !== false) {
                                        var if_res1500 = {
                                            'type': "js-array",
                                            'val': encode_array(data2775)
                                        };
                                    } else {
                                        if (M1.js_object_p(data2775) !== false) {
                                            var if_res1499 = {
                                                'type': "js-object",
                                                'val': encode_object(data2775)
                                            };
                                        } else {
                                            console.warn([DATA_TYPE_WARNING, data2775]);
                                            var if_res1499 = {
                                                'type': "unknown",
                                                'val': data2775
                                            };
                                        }
                                        var if_res1500 = if_res1499;
                                    }
                                    var if_res1501 = if_res1500;
                                }
                                var if_res1502 = if_res1501;
                            }
                            var if_res1503 = if_res1502;
                        }
                        var if_res1504 = if_res1503;
                    }
                    var if_res1505 = if_res1504;
                }
                var if_res1506 = if_res1505;
            }
            var if_res1507 = if_res1506;
        }
        var if_res1508 = if_res1507;
    }
    return if_res1508;
};
var decode_data = function(data2778) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (Array.isArray(data2778) !== false) {
        var if_res1519 = data2778.reduce(function(result2779, curr2780) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M2.append(result2779, M2.list(decode_data(curr2780)));
        }, $rjs_core.Pair.EMPTY);
    } else {
        if ((data2778.type == "null") !== false) {
            var if_res1518 = null;
        } else {
            if ((data2778.type == "undefined") !== false) {
                var if_res1517 = undefined;
            } else {
                if ((data2778.type == "number") !== false) {
                    var if_res1516 = data2778.val;
                } else {
                    if ((data2778.type == "string") !== false) {
                        var if_res1515 = M3.js_string__gt_string(data2778.val);
                    } else {
                        if ((data2778.type == "symbol") !== false) {
                            var if_res1514 = M2.string__gt_symbol(M3.js_string__gt_string(data2778.val));
                        } else {
                            if ((data2778.type == "boolean") !== false) {
                                var if_res1513 = data2778.val;
                            } else {
                                if ((data2778.type == "js-string") !== false) {
                                    var if_res1512 = data2778.val;
                                } else {
                                    if ((data2778.type == "js-array") !== false) {
                                        var if_res1511 = decode_array(data2778.val);
                                    } else {
                                        if ((data2778.type == "js-object") !== false) {
                                            var if_res1510 = decode_object(data2778.val);
                                        } else {
                                            if ((data2778.type == "unknown") !== false) {
                                                console.warn(DATA_TYPE_WARNING);
                                                var if_res1509 = data2778.val;
                                            } else {
                                                var if_res1509 = M2.rvoid();
                                            }
                                            var if_res1510 = if_res1509;
                                        }
                                        var if_res1511 = if_res1510;
                                    }
                                    var if_res1512 = if_res1511;
                                }
                                var if_res1513 = if_res1512;
                            }
                            var if_res1514 = if_res1513;
                        }
                        var if_res1515 = if_res1514;
                    }
                    var if_res1516 = if_res1515;
                }
                var if_res1517 = if_res1516;
            }
            var if_res1518 = if_res1517;
        }
        var if_res1519 = if_res1518;
    }
    return if_res1519;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    decode_data,
    encode_data
};