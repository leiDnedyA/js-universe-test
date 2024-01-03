import * as $rjs_core from '../runtime/core.js';
import * as M0 from "../collects/racket/private/list.rkt.js";
import * as M1 from "./util.rkt.js";
import * as M2 from "../runtime/kernel.rkt.js";
import * as M3 from "../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M4 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
var DATA_TYPE_WARNING = "racketscript/htdp/universe: Unsupported datatype being passed to/from server.";
var encode_array = function(arr1729) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return arr1729.map(function(elem1730) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return encode_data(elem1730);
    });
};
var decode_array = function(arr1731) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return arr1731.map(function(elem1732) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return decode_data(elem1732);
    });
};
var encode_object = function(obj1733) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var keys1734 = Object.keys(obj1733);
    return keys1734.reduce(function(res1735, key1736) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        res1735[key1736] = encode_data(obj1733[key1736]);
        return res1735;
    }, {});
};
var decode_object = function(obj1737) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var keys1738 = Object.keys(obj1737);
    return keys1738.reduce(function(res1739, key1740) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        res1739[key1740] = decode_data(obj1737[key1740]);
        return res1739;
    }, {});
};
var encode_data = function(data1741) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M2.list_p(data1741) !== false) {
        var if_res917 = M0.foldl(function(curr1742, result1743) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            result1743.push(encode_data(curr1742));
            return result1743;
        }, [], data1741);
    } else {
        if (M1.null_p(data1741) !== false) {
            var if_res916 = {
                'type': "null"
            };
        } else {
            if (M1.undefined_p(data1741) !== false) {
                var if_res915 = {
                    'type': "undefined"
                };
            } else {
                if (M2.number_p(data1741) !== false) {
                    var if_res914 = {
                        'type': "number",
                        'val': data1741
                    };
                } else {
                    if (M2.string_p(data1741) !== false) {
                        var if_res913 = {
                            'type': "string",
                            'val': M3.js_string(data1741)
                        };
                    } else {
                        if (M2.symbol_p(data1741) !== false) {
                            var if_res912 = {
                                'type': "symbol",
                                'val': M3.js_string(M2.symbol__gt_string(data1741))
                            };
                        } else {
                            if (M2.boolean_p(data1741) !== false) {
                                var if_res911 = {
                                    'type': "boolean",
                                    'val': data1741
                                };
                            } else {
                                if (M1.js_string_p(data1741) !== false) {
                                    var if_res910 = {
                                        'type': "js-string",
                                        'val': data1741
                                    };
                                } else {
                                    if (M1.js_array_p(data1741) !== false) {
                                        var if_res909 = {
                                            'type': "js-array",
                                            'val': encode_array(data1741)
                                        };
                                    } else {
                                        if (M1.js_object_p(data1741) !== false) {
                                            var if_res908 = {
                                                'type': "js-object",
                                                'val': encode_object(data1741)
                                            };
                                        } else {
                                            console.warn([DATA_TYPE_WARNING, data1741]);
                                            var if_res908 = {
                                                'type': "unknown",
                                                'val': data1741
                                            };
                                        }
                                        var if_res909 = if_res908;
                                    }
                                    var if_res910 = if_res909;
                                }
                                var if_res911 = if_res910;
                            }
                            var if_res912 = if_res911;
                        }
                        var if_res913 = if_res912;
                    }
                    var if_res914 = if_res913;
                }
                var if_res915 = if_res914;
            }
            var if_res916 = if_res915;
        }
        var if_res917 = if_res916;
    }
    return if_res917;
};
var decode_data = function(data1744) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (Array.isArray(data1744) !== false) {
        var if_res928 = data1744.reduce(function(result1745, curr1746) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M2.append(result1745, M2.list(decode_data(curr1746)));
        }, $rjs_core.Pair.EMPTY);
    } else {
        if ((data1744.type == "null") !== false) {
            var if_res927 = null;
        } else {
            if ((data1744.type == "undefined") !== false) {
                var if_res926 = undefined;
            } else {
                if ((data1744.type == "number") !== false) {
                    var if_res925 = data1744.val;
                } else {
                    if ((data1744.type == "string") !== false) {
                        var if_res924 = M3.js_string__gt_string(data1744.val);
                    } else {
                        if ((data1744.type == "symbol") !== false) {
                            var if_res923 = M2.string__gt_symbol(M3.js_string__gt_string(data1744.val));
                        } else {
                            if ((data1744.type == "boolean") !== false) {
                                var if_res922 = data1744.val;
                            } else {
                                if ((data1744.type == "js-string") !== false) {
                                    var if_res921 = data1744.val;
                                } else {
                                    if ((data1744.type == "js-array") !== false) {
                                        var if_res920 = decode_array(data1744.val);
                                    } else {
                                        if ((data1744.type == "js-object") !== false) {
                                            var if_res919 = decode_object(data1744.val);
                                        } else {
                                            if ((data1744.type == "unknown") !== false) {
                                                console.warn(DATA_TYPE_WARNING);
                                                var if_res918 = data1744.val;
                                            } else {
                                                var if_res918 = M2.rvoid();
                                            }
                                            var if_res919 = if_res918;
                                        }
                                        var if_res920 = if_res919;
                                    }
                                    var if_res921 = if_res920;
                                }
                                var if_res922 = if_res921;
                            }
                            var if_res923 = if_res922;
                        }
                        var if_res924 = if_res923;
                    }
                    var if_res925 = if_res924;
                }
                var if_res926 = if_res925;
            }
            var if_res927 = if_res926;
        }
        var if_res928 = if_res927;
    }
    return if_res928;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    decode_data,
    encode_data
};