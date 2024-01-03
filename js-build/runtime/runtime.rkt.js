import * as $rjs_core from './core.js';
import * as M1 from "./lib.rkt.js";
var values = function() {
    var vals209 = M1.Core.argumentsToArray(arguments);
    if ((vals209.length === 1) !== false) {
        var if_res75 = vals209[0];
    } else {
        var if_res75 = M1.Values.make(vals209);
    }
    return if_res75;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    values
};