import * as $rjs_core from '../../../../runtime/core.js';
import * as M0 from "./private/color.rkt.js";
import * as M1 from "../../../racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../../../../collects/racket/private/list.rkt.js";
import * as M3 from "../private/jscommon.rkt.js";
import * as M4 from "../../../../runtime/kernel.rkt.js";
import * as M5 from "../../../../collects/racket/private/map.rkt.js";
import * as M6 from "../../../racketscript-compiler/racketscript/private/interop.rkt.js";
var let_result499 = M4.make_struct_type($rjs_core.PrimitiveSymbol.make("posn"), false, 2, 0, false, M4.rnull, false, false, $rjs_core.Pair.makeList(0, 1), false, $rjs_core.PrimitiveSymbol.make("posn"));
var struct_1123 = let_result499.getAt(0);
var make_1124 = let_result499.getAt(1);
var __p1125 = let_result499.getAt(2);
var __ref1126 = let_result499.getAt(3);
var __set_bang_1127 = let_result499.getAt(4);
var let_result500 = M4.values(struct_1123, make_1124, __p1125, M4.make_struct_field_accessor(__ref1126, 0, $rjs_core.PrimitiveSymbol.make("x")), M4.make_struct_field_accessor(__ref1126, 1, $rjs_core.PrimitiveSymbol.make("y")));
var struct_posn = let_result500.getAt(0);
var make_posn = let_result500.getAt(1);
var posn_p = let_result500.getAt(2);
var posn_x = let_result500.getAt(3);
var posn_y = let_result500.getAt(4);
var ___gt_web_color = function(p1128) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M4.string_p(p1128) !== false) {
        var if_res503 = M0.string__gt_web_color(p1128);
    } else {
        if (M0.color_p(p1128) !== false) {
            var if_res502 = M0.color__gt_web_color(p1128);
        } else {
            if (M4.symbol_p(p1128) !== false) {
                var if_res501 = M0.string__gt_web_color(M4.symbol__gt_string(p1128));
            } else {
                var if_res501 = M4.error($rjs_core.PrimitiveSymbol.make("color"), $rjs_core.UString.make("invalid color"));
            }
            var if_res502 = if_res501;
        }
        var if_res503 = if_res502;
    }
    return if_res503;
};
var print_image = function(d1129) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var canvas1130 = M3.document.createElement("canvas");
    var ctx1131 = canvas1130.getContext("2d");
    M3.document.body.appendChild(canvas1130);
    M3.document.body.appendChild(M3.document.createElement("br"));
    canvas1130.width = d1129.width;
    canvas1130.height = d1129.height;
    ctx1131.save();
    ctx1131.translate(d1129.width / 2, d1129.height / 2);
    d1129.render(ctx1131, 0, 0);
    return ctx1131.restore();
};
var canvas1132 = M3.document.createElement("canvas");
var __times_invisible_canvas_context_times_ = canvas1132.getContext("2d");
var empty_image = {
    'type': $rjs_core.UString.make("empty-image"),
    'width': 0,
    'height': 0,
    'render': function(ctx1133, x1134, y1135) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return M4.rvoid();
    }
};
var image_height = function(i1136) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return i1136.height;
};
var image_width = function(i1137) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return i1137.width;
};
var Text = function(text1138, size1139, color1140, face1141, family1142, style1143, weight1144, underline_p1145) {
    if (arguments.length !== 8) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1146 = this;
    this1146.type = $rjs_core.UString.make("text");
    this1146.text = text1138;
    this1146.size = size1139;
    this1146.color = ___gt_web_color(color1140);
    this1146.face = face1141;
    this1146.family = family1142;
    this1146.style = style1143;
    this1146.weight = weight1144;
    this1146.underline = underline_p1145;
    return this1146._updateMetrics();
};
Text.prototype._updateMetrics = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1147 = this;
    var font1148 = M4.string_append(this1147.weight, $rjs_core.UString.make(" "), this1147.style, $rjs_core.UString.make(" "), M4.number__gt_string(this1147.size), $rjs_core.UString.make("px "), this1147.face, $rjs_core.UString.make(" "), this1147.family);
    __times_invisible_canvas_context_times_.font = M1.js_string(font1148);
    var let_result504 = M4.values();
    var metrics1149 = __times_invisible_canvas_context_times_.measureText(M1.js_string(this1147.text));
    this1147.font = font1148;
    this1147.width = metrics1149.width;
    this1147.height = this1147.size;
    return null;
};
Text.prototype.render = function(ctx1150, x1151, y1152) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1153 = this;
    ctx1150.save();
    ctx1150.translate(x1151, y1152);
    ctx1150.font = M1.js_string(this1153.font);
    ctx1150.textAlign = "center";
    ctx1150.textBaseline = "middle";
    ctx1150.fillStyle = M1.js_string(this1153.color);
    ctx1150.fillText(M1.js_string(this1153.text), 0, 0);
    return ctx1150.restore();
};
var Line = function(x1154, y1155, pen_or_color1156) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1157 = this;
    this1157.type = $rjs_core.UString.make("line");
    this1157.width = M3.abs_plus_ceil(x1154);
    this1157.height = M3.abs_plus_ceil(y1155);
    this1157.mode = false;
    this1157.pen = pen_or_color1156;
    return null;
};
Line.prototype.render = function(ctx1158, x1159, y1160) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1161 = this;
    ctx1158.save();
    var let_result505 = M4.values();
    ctx1158.translate(x1159, y1160);
    var let_result506 = M4.values();
    ctx1158.beginPath();
    var let_result507 = M4.values();
    var sx1162 = M4.__(M4.abs(this1161.x / 2));
    var sy1163 = M4.__(M4.abs(this1161.y / 2));
    if (M4.__gt__eq_(x1159, 0) !== false) {
        var if_res508 = M4.__gt__eq_(y1160, 0);
    } else {
        var if_res508 = false;
    }
    if (if_res508 !== false) {
        ctx1158.moveTo(sx1162, sy1163);
        var if_res515 = ctx1158.lineTo(sx1162 + x1159, sy1163 + y1160);
    } else {
        if (M4.__gt__eq_(x1159, 0) !== false) {
            var if_res509 = M4.__lt_(y1160, 0);
        } else {
            var if_res509 = false;
        }
        if (if_res509 !== false) {
            ctx1158.moveTo(sx1162 + x1159, sy1163);
            var if_res514 = ctx1158.lineTo(sx1162, sy1163 - y1160);
        } else {
            if (M4.__lt_(x1159, 0) !== false) {
                var if_res510 = M4.__gt__eq_(y1160, 0);
            } else {
                var if_res510 = false;
            }
            if (if_res510 !== false) {
                ctx1158.moveTo(sx1162, sy1163 + y1160);
                var if_res513 = ctx1158.lineTo(sx1162 - x1159, sy1163);
            } else {
                if (M4.__lt_(x1159, 0) !== false) {
                    var if_res511 = M4.__lt_(y1160, 0);
                } else {
                    var if_res511 = false;
                }
                if (if_res511 !== false) {
                    ctx1158.moveTo(sx1162 - x1159, sy1163 - y1160);
                    var if_res512 = ctx1158.lineTo(sx1162, sy1163);
                } else {
                    var if_res512 = M4.rvoid();
                }
                var if_res513 = if_res512;
            }
            var if_res514 = if_res513;
        }
        var if_res515 = if_res514;
    }
    if_res515;
    var or_part1164 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1164 !== false) {
        var if_res516 = or_part1164;
    } else {
        var if_res516 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.UString.make("outline"));
    }
    if (if_res516 !== false) {
        ctx1158.strokeStyle = M1.js_string(___gt_web_color(this1161.pen));
        var if_res519 = ctx1158.stroke();
    } else {
        var or_part1165 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1165 !== false) {
            var if_res517 = or_part1165;
        } else {
            var if_res517 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.UString.make("solid"));
        }
        if (if_res517 !== false) {
            ctx1158.fillStyle = M1.js_string(___gt_web_color(this1161.pen));
            var if_res518 = ctx1158.fill();
        } else {
            var if_res518 = M4.rvoid();
        }
        var if_res519 = if_res518;
    }
    if_res519;
    ctx1158.closePath();
    return ctx1158.restore();
};
var Rectangle = function(width1166, height1167, mode1168, pen_or_color1169) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1170 = this;
    this1170.type = $rjs_core.UString.make("rectangle");
    this1170.width = width1166;
    this1170.height = height1167;
    this1170.mode = mode1168;
    this1170.pen = pen_or_color1169;
    return null;
};
Rectangle.prototype.render = function(ctx1171, x1172, y1173) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1174 = this;
    ctx1171.save();
    ctx1171.translate(x1172, y1173);
    ctx1171.beginPath();
    var width1175 = this1174.width;
    var height1176 = this1174.height;
    var start_x1177 = M4.__(width1175 / 2);
    var start_y1178 = M4.__(height1176 / 2);
    ctx1171.rect(start_x1177, start_y1178, width1175, height1176);
    var or_part1179 = M4.equal_p(this1174.mode, $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1179 !== false) {
        var if_res520 = or_part1179;
    } else {
        var if_res520 = M4.equal_p(this1174.mode, $rjs_core.UString.make("outline"));
    }
    if (if_res520 !== false) {
        ctx1171.strokeStyle = M1.js_string(___gt_web_color(this1174.pen));
        var if_res523 = ctx1171.stroke();
    } else {
        var or_part1180 = M4.equal_p(this1174.mode, $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1180 !== false) {
            var if_res521 = or_part1180;
        } else {
            var if_res521 = M4.equal_p(this1174.mode, $rjs_core.UString.make("solid"));
        }
        if (if_res521 !== false) {
            ctx1171.fillStyle = M1.js_string(___gt_web_color(this1174.pen));
            var if_res522 = ctx1171.fill();
        } else {
            var if_res522 = M4.rvoid();
        }
        var if_res523 = if_res522;
    }
    if_res523;
    ctx1171.closePath();
    return ctx1171.restore();
};
var Circle = function(radius1181, mode1182, pen_or_color1183) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1184 = this;
    var diameter1185 = radius1181 * 2;
    this1184.type = $rjs_core.UString.make("circle");
    this1184.radius = radius1181;
    this1184.width = diameter1185;
    this1184.height = diameter1185;
    this1184.mode = mode1182;
    this1184.pen = pen_or_color1183;
    return null;
};
Circle.prototype.render = function(ctx1186, x1187, y1188) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1189 = this;
    var radius1190 = this1189.radius;
    ctx1186.save();
    ctx1186.translate(x1187, y1188);
    ctx1186.beginPath();
    ctx1186.ellipse(0, 0, radius1190, radius1190, 0, 0, M3.Math.PI * 2);
    var or_part1191 = M4.equal_p(this1189.mode, $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1191 !== false) {
        var if_res524 = or_part1191;
    } else {
        var if_res524 = M4.equal_p(this1189.mode, $rjs_core.UString.make("outline"));
    }
    if (if_res524 !== false) {
        ctx1186.strokeStyle = M1.js_string(___gt_web_color(this1189.pen));
        var if_res527 = ctx1186.stroke();
    } else {
        var or_part1192 = M4.equal_p(this1189.mode, $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1192 !== false) {
            var if_res525 = or_part1192;
        } else {
            var if_res525 = M4.equal_p(this1189.mode, $rjs_core.UString.make("solid"));
        }
        if (if_res525 !== false) {
            ctx1186.fillStyle = M1.js_string(___gt_web_color(this1189.pen));
            var if_res526 = ctx1186.fill();
        } else {
            var if_res526 = M4.rvoid();
        }
        var if_res527 = if_res526;
    }
    if_res527;
    ctx1186.closePath();
    return ctx1186.restore();
};
var Polygon = function(vertices1193, mode1194, pen_or_color1195) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1196 = this;
    var xs1197 = M5.map(posn_x, vertices1193);
    var ys1198 = M5.map(posn_y, vertices1193);
    var width1199 = M4.apply(M4.max, xs1197) - M4.apply(M4.min, xs1197);
    var height1200 = M4.apply(M4.max, ys1198) - M4.apply(M4.min, xs1197);
    this1196.type = $rjs_core.UString.make("polygon");
    this1196.vertices = vertices1193;
    this1196.width = width1199;
    this1196.height = height1200;
    this1196.mode = mode1194;
    this1196.pen = pen_or_color1195;
    return null;
};
Polygon.prototype.render = function(ctx1201, x1202, y1203) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1204 = this;
    var first_point1205 = M4.car(this1204.vertices);
    var rest_points1206 = M4.cdr(this1204.vertices);
    var radius1207 = this1204.radius;
    ctx1201.save();
    ctx1201.translate(x1202, y1203);
    ctx1201.beginPath();
    ctx1201.moveTo(posn_x(first_point1205), posn_y(first_point1205));
    var loop1208 = function(points1209) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.null_p(points1209) !== false) {
            var if_res528 = M4.rvoid();
        } else {
            var pt1210 = M4.car(points1209);
            ctx1201.lineTo(posn_x(pt1210), posn_y(pt1210));
            var if_res528 = loop1208(M4.cdr(points1209));
        }
        return if_res528;
    };
    loop1208(rest_points1206);
    var or_part1211 = M4.equal_p(this1204.mode, $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1211 !== false) {
        var if_res529 = or_part1211;
    } else {
        var if_res529 = M4.equal_p(this1204.mode, $rjs_core.UString.make("outline"));
    }
    if (if_res529 !== false) {
        ctx1201.strokeStyle = M1.js_string(___gt_web_color(this1204.pen));
        var if_res532 = ctx1201.stroke();
    } else {
        var or_part1212 = M4.equal_p(this1204.mode, $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1212 !== false) {
            var if_res530 = or_part1212;
        } else {
            var if_res530 = M4.equal_p(this1204.mode, $rjs_core.UString.make("solid"));
        }
        if (if_res530 !== false) {
            ctx1201.fillStyle = M1.js_string(___gt_web_color(this1204.pen));
            var if_res531 = ctx1201.fill();
        } else {
            var if_res531 = M4.rvoid();
        }
        var if_res532 = if_res531;
    }
    if_res532;
    ctx1201.closePath();
    return ctx1201.restore();
};
var empty_scene1213 = function(width21214, height31215, color11216) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var width1217 = width21214;
    var height1218 = height31215;
    if (false !== false) {
        var if_res533 = $rjs_core.UString.make("white");
    } else {
        var if_res533 = color11216;
    }
    var color1219 = if_res533;
    return overlay(rectangle(width1217, height1218, $rjs_core.UString.make("solid"), color1219), rectangle(width1217, height1218, $rjs_core.UString.make("outline"), $rjs_core.UString.make("black")));
};
var cl534 = function(width1220, height1221) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return empty_scene1213(width1220, height1221, $rjs_core.UString.make("white"));
};
var cl535 = function(width1222, height1223, color11224) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return empty_scene1213(width1222, height1223, color11224);
};
var empty_scene = $rjs_core.attachProcedureArity(function() {
    var fixed_lam536 = {
        '2': cl534,
        '3': cl535
    } [arguments.length];
    if (fixed_lam536 !== undefined) {
        return fixed_lam536.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var text = function(txt1225, size1226, color1227) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Text(txt1225, size1226, color1227, $rjs_core.UString.make(""), $rjs_core.UString.make("serif"), $rjs_core.UString.make("normal"), $rjs_core.UString.make("normal"), false);
};
var text_by_font = function(txt1228, size1229, color1230, face1231, family1232, style1233, weight1234, underline_p1235) {
    if (arguments.length !== 8) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var or_part1236 = face1231;
    if (or_part1236 !== false) {
        var if_res540 = or_part1236;
    } else {
        var if_res540 = $rjs_core.UString.make("");
    }
    if (M4.symbol_p(family1232) !== false) {
        var if_res539 = M4.symbol__gt_string(family1232);
    } else {
        var if_res539 = family1232;
    }
    if (M4.symbol_p(style1233) !== false) {
        var if_res538 = M4.symbol__gt_string(style1233);
    } else {
        var if_res538 = style1233;
    }
    if (M4.symbol_p(weight1234) !== false) {
        var if_res537 = M4.symbol__gt_string(weight1234);
    } else {
        var if_res537 = weight1234;
    }
    return new Text(txt1228, size1229, color1230, if_res540, if_res539, if_res538, if_res537, underline_p1235);
};
var line = function(x1237, y1238, pen_or_color1239) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Line(x1237, y1238, pen_or_color1239);
};
var rectangle = function(w1240, h1241, m1242, p1243) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Rectangle(w1240, h1241, m1242, p1243);
};
var square = function(s1244, m1245, p1246) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Rectangle(s1244, s1244, m1245, p1246);
};
var circle = function(r1247, m1248, p1249) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Circle(r1247, m1248, p1249);
};
var triangle = function(side1250, mode1251, color1252) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var height1253 = side1250 * (M4.sqrt(3) / 2);
    return new Polygon(M4.list(make_posn(M4.__(side1250 / 2), height1253 / 2), make_posn(0, M4.__(height1253 / 2)), make_posn(side1250 / 2, height1253 / 2)), mode1251, color1252);
};
var Overlay = function(x_place1254, y_place1255, ima1256, imb1257) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1258 = this;
    var ima_cx1259 = ima1256.width / 2;
    var ima_cy1260 = ima1256.height / 2;
    var imb_cx1261 = imb1257.width / 2;
    var imb_cy1262 = imb1257.height / 2;
    var tmp1264 = x_place1254;
    if (M4.equal_p(tmp1264, $rjs_core.UString.make("beside")) !== false) {
        var if_res543 = ima1256.width + imb1257.width;
    } else {
        if (M4.number_p(x_place1254) !== false) {
            if (M4.positive_p(x_place1254) !== false) {
                var if_res541 = M4.max(ima1256.width, imb1257.width + x_place1254);
            } else {
                var if_res541 = M4.max(imb1257.width, ima1256.width - x_place1254);
            }
            var if_res542 = if_res541;
        } else {
            var if_res542 = M4.max(ima1256.width, imb1257.width);
        }
        var if_res543 = if_res542;
    }
    var width1263 = if_res543;
    var tmp1266 = y_place1255;
    if (M4.equal_p(tmp1266, $rjs_core.UString.make("above")) !== false) {
        var if_res546 = ima1256.height + imb1257.height;
    } else {
        if (M4.number_p(y_place1255) !== false) {
            if (M4.positive_p(y_place1255) !== false) {
                var if_res544 = M4.max(ima1256.height, imb1257.height + y_place1255);
            } else {
                var if_res544 = M4.max(imb1257.height, ima1256.height - y_place1255);
            }
            var if_res545 = if_res544;
        } else {
            var if_res545 = M4.max(ima1256.height, imb1257.height);
        }
        var if_res546 = if_res545;
    }
    var height1265 = if_res546;
    var δ_edge_x1267 = width1263 / 2;
    var δ_edge_y1268 = height1265 / 2;
    var tmp1271 = x_place1254;
    if (M4.equal_p(tmp1271, $rjs_core.UString.make("left")) !== false) {
        var if_res553 = M4.values(ima_cx1259 - δ_edge_x1267, imb_cx1261 - δ_edge_x1267);
    } else {
        if (M4.equal_p(tmp1271, $rjs_core.UString.make("right")) !== false) {
            var if_res552 = M4.values(δ_edge_x1267 - ima_cx1259, δ_edge_x1267 - imb_cx1261);
        } else {
            if (M4.equal_p(tmp1271, $rjs_core.UString.make("beside")) !== false) {
                var if_res551 = M4.values(ima_cx1259 - δ_edge_x1267, δ_edge_x1267 - imb_cx1261);
            } else {
                if (M4.equal_p(tmp1271, $rjs_core.UString.make("middle")) !== false) {
                    var if_res547 = true;
                } else {
                    var if_res547 = M4.equal_p(tmp1271, $rjs_core.UString.make("center"));
                }
                if (if_res547 !== false) {
                    var if_res550 = M4.values(0, 0);
                } else {
                    if (M4.number_p(x_place1254) !== false) {
                        var local_width1272 = M4.max(ima1256.width, imb1257.width);
                        var local_acx1273 = ima_cx1259 - (local_width1272 / 2);
                        var local_bcx1274 = imb_cx1261 - (local_width1272 / 2);
                        var acx_bcx1275 = δ_edge_x1267 - (local_width1272 / 2);
                        if (M4.positive_p(x_place1254) !== false) {
                            var if_res548 = M4.values(local_acx1273 - acx_bcx1275, x_place1254 + (local_bcx1274 - acx_bcx1275));
                        } else {
                            var if_res548 = M4.values(local_acx1273 - x_place1254 - acx_bcx1275, local_bcx1274 - acx_bcx1275);
                        }
                        var if_res549 = if_res548;
                    } else {
                        var if_res549 = M4.error($rjs_core.UString.make("invalid x-place align"));
                    }
                    var if_res550 = if_res549;
                }
                var if_res551 = if_res550;
            }
            var if_res552 = if_res551;
        }
        var if_res553 = if_res552;
    }
    var let_result554 = if_res553;
    var δ_a_x1269 = let_result554.getAt(0);
    var δ_b_x1270 = let_result554.getAt(1);
    var tmp1278 = y_place1255;
    if (M4.equal_p(tmp1278, $rjs_core.UString.make("top")) !== false) {
        var if_res561 = M4.values(ima_cy1260 - δ_edge_y1268, imb_cy1262 - δ_edge_y1268);
    } else {
        if (M4.equal_p(tmp1278, $rjs_core.UString.make("bottom")) !== false) {
            var if_res560 = M4.values(δ_edge_y1268 - ima_cy1260, δ_edge_y1268 - imb_cy1262);
        } else {
            if (M4.equal_p(tmp1278, $rjs_core.UString.make("above")) !== false) {
                var if_res559 = M4.values(ima_cy1260 - δ_edge_y1268, δ_edge_y1268 - imb_cy1262);
            } else {
                if (M4.equal_p(tmp1278, $rjs_core.UString.make("middle")) !== false) {
                    var if_res555 = true;
                } else {
                    var if_res555 = M4.equal_p(tmp1278, $rjs_core.UString.make("center"));
                }
                if (if_res555 !== false) {
                    var if_res558 = M4.values(0, 0);
                } else {
                    if (M4.number_p(y_place1255) !== false) {
                        var local_height1279 = M4.max(ima1256.height, imb1257.height);
                        var local_acy1280 = ima_cy1260 - (local_height1279 / 2);
                        var local_bcy1281 = imb_cy1262 - (local_height1279 / 2);
                        var acy_bcy1282 = δ_edge_y1268 - (local_height1279 / 2);
                        if (M4.positive_p(y_place1255) !== false) {
                            var if_res556 = M4.values(local_acy1280 - acy_bcy1282, y_place1255 + (local_bcy1281 - acy_bcy1282));
                        } else {
                            var if_res556 = M4.values(local_acy1280 - y_place1255 - acy_bcy1282, local_bcy1281 - acy_bcy1282);
                        }
                        var if_res557 = if_res556;
                    } else {
                        var if_res557 = M4.error($rjs_core.UString.make("invalid y-place align"));
                    }
                    var if_res558 = if_res557;
                }
                var if_res559 = if_res558;
            }
            var if_res560 = if_res559;
        }
        var if_res561 = if_res560;
    }
    var let_result562 = if_res561;
    var δ_a_y1276 = let_result562.getAt(0);
    var δ_b_y1277 = let_result562.getAt(1);
    this1258.type = $rjs_core.UString.make("overlay");
    this1258.ima = ima1256;
    this1258.imb = imb1257;
    this1258.width = width1263;
    this1258.height = height1265;
    this1258.aDx = δ_a_x1269;
    this1258.aDy = δ_a_y1276;
    this1258.bDx = δ_b_x1270;
    this1258.bDy = δ_b_y1277;
    return null;
};
Overlay.prototype.render = function(ctx1283, x1284, y1285) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1286 = this;
    var ima1287 = this1286.ima;
    var imb1288 = this1286.imb;
    ctx1283.save();
    ctx1283.translate(x1284, y1285);
    imb1288.render(ctx1283, this1286.bDx, this1286.bDy);
    ima1287.render(ctx1283, this1286.aDx, this1286.aDy);
    return ctx1283.restore();
};
var Container = function(childs1289, posns1290, width1291, height1292) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1293 = this;
    this1293.type = $rjs_core.UString.make("container");
    this1293.childs = childs1289;
    this1293.posns = posns1290;
    this1293.width = width1291;
    this1293.height = height1292;
    return null;
};
Container.prototype.render = function(ctx1294, x1295, y1296) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1297 = this;
    var width1298 = this1297.width;
    var height1299 = this1297.height;
    ctx1294.save();
    ctx1294.translate(x1295 - (width1298 / 2), y1296 - (height1299 / 2));
    ctx1294.beginPath();
    ctx1294.rect(0, 0, M4.sub1(width1298), M4.sub1(height1299));
    ctx1294.clip();
    var loop1300 = function(childs1301, posns1302) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.null_p(childs1301) !== false) {
            var if_res563 = M4.rvoid();
        } else {
            var child1303 = M4.car(childs1301);
            var posn1304 = M4.car(posns1302);
            child1303.render(ctx1294, posn_x(posn1304), posn_y(posn1304));
            var if_res563 = loop1300(M4.cdr(childs1301), M4.cdr(posns1302));
        }
        return if_res563;
    };
    loop1300(this1297.childs, this1297.posns);
    return ctx1294.restore();
};
var Bitmap = function(data1305) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1306 = this;
    var image1307 = new Image;
    image1307.crossOrigin = "anonymous";
    image1307.src = M1.js_string(data1305);
    this1306.image = image1307;
    this1306.width = image1307.width;
    this1306.height = image1307.height;
    return null;
};
Bitmap.prototype.render = function(ctx1308, x1309, y1310) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1311 = this;
    var image1312 = this1311.image;
    ctx1308.save();
    ctx1308.translate(x1309, y1310);
    ctx1308.drawImage(image1312, M4.__(image1312.width / 2), M4.__(image1312.height / 2));
    return ctx1308.restore();
};
var Freeze = function(img1313) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1314 = this;
    var canvas1315 = M3.document.createElement("canvas");
    var ctx1316 = canvas1315.getContext("2d");
    var width1317 = img1313.width;
    var height1318 = img1313.height;
    canvas1315.width = width1317;
    canvas1315.height = height1318;
    ctx1316.save();
    ctx1316.translate(width1317 / 2, height1318 / 2);
    img1313.render(ctx1316, 0, 0);
    ctx1316.restore();
    this1314.width = width1317;
    this1314.height = height1318;
    this1314.canvas = canvas1315;
    return null;
};
Freeze.prototype.render = function(ctx1319, x1320, y1321) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1322 = this;
    var width1323 = this1322.width;
    var height1324 = this1322.height;
    ctx1319.save();
    ctx1319.translate(x1320, y1321);
    ctx1319.drawImage(this1322.canvas, M4.__(width1323 / 2), M4.__(height1324 / 2));
    return ctx1319.restore();
};
var Rotate = function(image1325, angle1326) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1327 = this;
    var width1328 = image1325.width;
    var height1329 = image1325.height;
    var θ1330 = (M3.Math.PI * angle1326) / 180.0;
    var sin_θ1331 = M4.sin(θ1330);
    var cos_θ1332 = M4.cos(θ1330);
    var x11333 = cos_θ1332 * width1328;
    var y11334 = sin_θ1331 * width1328;
    var x21335 = M4.__(sin_θ1331) * height1329;
    var y21336 = cos_θ1332 * height1329;
    var x31337 = x11333 + x21335;
    var y31338 = y11334 + y21336;
    var min_x1339 = M4.min(0, x11333, x21335, x31337);
    var max_x1340 = M4.max(0, x11333, x21335, x31337);
    var min_y1341 = M4.min(0, y11334, y21336, y31338);
    var max_y1342 = M4.max(0, y11334, y21336, y31338);
    var rotated_width1343 = M4.floor(max_x1340 - min_x1339);
    var rotated_height1344 = M4.floor(max_y1342 - min_y1341);
    this1327.image = image1325;
    this1327.width = rotated_width1343;
    this1327.height = rotated_height1344;
    this1327.degrees = angle1326;
    this1327.radians = θ1330;
    return null;
};
Rotate.prototype.render = function(ctx1345, x1346, y1347) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1348 = this;
    ctx1345.save();
    ctx1345.translate(x1346, y1347);
    ctx1345.rotate(this1348.radians);
    this1348.image.render(ctx1345, 0, 0);
    return ctx1345.restore();
};
var Scale = function(image1349, x_factor1350, y_factor1351) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1352 = this;
    this1352.image = image1349;
    this1352.x_factor = x_factor1350;
    this1352.y_factor = y_factor1351;
    this1352.width = M4.abs(M4.floor(image1349.width * x_factor1350));
    this1352.height = M4.abs(M4.floor(image1349.height * y_factor1351));
    return null;
};
Scale.prototype.render = function(ctx1353, x1354, y1355) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1356 = this;
    ctx1353.save();
    ctx1353.translate(x1354, y1355);
    ctx1353.scale(this1356.x_factor, this1356.y_factor);
    this1356.image.render(ctx1353, 0, 0);
    return ctx1353.restore();
};
var container = function(childs1357, posns1358, width1359, height1360) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Container(childs1357, posns1358, width1359, height1360);
};
var place_image = function(child1361, cx1362, cy1363, base1364) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var width1365 = base1364.width;
    var height1366 = base1364.height;
    return container(M4.list(base1364, child1361), M4.list(make_posn(width1365 / 2, height1366 / 2), make_posn(cx1362, cy1363)), width1365, height1366);
};
var place_images = function(images1367, posns1368, scene1369) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var width1370 = scene1369.width;
    var height1371 = scene1369.height;
    return container(M4.cons(scene1369, images1367), M4.cons(make_posn(width1370 / 2, height1371 / 2), posns1368), width1370, height1371);
};
var __align_image_pos = function(image1372, pos1373, x_place1374, y_place1375) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var x1376 = posn_x(pos1373);
    var y1377 = posn_y(pos1373);
    var tmp1379 = x_place1374;
    if (M4.equal_p(tmp1379, $rjs_core.UString.make("left")) !== false) {
        var if_res567 = (image1372.width / 2) + x1376;
    } else {
        if (M4.equal_p(tmp1379, $rjs_core.UString.make("right")) !== false) {
            var if_res566 = x1376 - (image1372.width / 2);
        } else {
            if (M4.equal_p(tmp1379, $rjs_core.UString.make("center")) !== false) {
                var if_res564 = true;
            } else {
                var if_res564 = M4.equal_p(tmp1379, $rjs_core.UString.make("middle"));
            }
            if (if_res564 !== false) {
                var if_res565 = x1376;
            } else {
                var if_res565 = M4.rvoid();
            }
            var if_res566 = if_res565;
        }
        var if_res567 = if_res566;
    }
    var new_x1378 = if_res567;
    var tmp1381 = y_place1375;
    if (M4.equal_p(tmp1381, $rjs_core.UString.make("top")) !== false) {
        var if_res571 = (image1372.height / 2) + y1377;
    } else {
        if (M4.equal_p(tmp1381, $rjs_core.UString.make("bottom")) !== false) {
            var if_res570 = y1377 - (image1372.height / 2);
        } else {
            if (M4.equal_p(tmp1381, $rjs_core.UString.make("center")) !== false) {
                var if_res568 = true;
            } else {
                var if_res568 = M4.equal_p(tmp1381, $rjs_core.UString.make("middle"));
            }
            if (if_res568 !== false) {
                var if_res569 = y1377;
            } else {
                var if_res569 = M4.rvoid();
            }
            var if_res570 = if_res569;
        }
        var if_res571 = if_res570;
    }
    var new_y1380 = if_res571;
    return make_posn(new_x1378, new_y1380);
};
var place_image_by_align = function(image1382, x1383, y1384, x_place1385, y_place1386, scene1387) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var new_pos1388 = __align_image_pos(image1382, make_posn(x1383, y1384), x_place1385, y_place1386);
    return place_image(image1382, posn_x(new_pos1388), posn_y(new_pos1388), scene1387);
};
var place_images_by_align = function(images1389, posns1390, x_place1391, y_place1392, scene1393) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var new_posns1394 = M5.map(function(i1395, p1396) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __align_image_pos(i1395, p1396, x_place1391, y_place1392);
    }, images1389, posns1390);
    return place_images(images1389, new_posns1394, scene1393);
};
var __single_overlay = function(x_place1397, y_place1398, ima1399, imb1400) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(x_place1397, y_place1398, ima1399, imb1400);
};
var __single_underlay = function(x_place1401, y_place1402, ima1403, imb1404) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(x_place1401, y_place1402, imb1404, ima1403);
};
var overlay_by_align = $rjs_core.attachProcedureArity(function(x_place1405, y_place1406, ima1407, imb1408, ...imn1409572) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1409 = $rjs_core.Pair.listFromArray(imn1409572);
    return M2.foldl(function(img1410, acc1411) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay(x_place1405, y_place1406, acc1411, img1410);
    }, empty_image, M4.cons(ima1407, M4.cons(imb1408, imn1409)));
});
var overlay = $rjs_core.attachProcedureArity(function(ima1412, imb1413, ...imn1414573) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1414 = $rjs_core.Pair.listFromArray(imn1414573);
    return M2.foldl(function(img1415, acc1416) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("middle"), $rjs_core.UString.make("middle"), acc1416, img1415);
    }, empty_image, M4.cons(ima1412, M4.cons(imb1413, imn1414)));
});
var overlay_by_xy = function(ima1417, x1418, y1419, imb1420) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(x1418, y1419, ima1417, imb1420);
};
var underlay = $rjs_core.attachProcedureArity(function(ima1421, imb1422, ...imn1423574) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1423 = $rjs_core.Pair.listFromArray(imn1423574);
    return M2.foldl(function(img1424, acc1425) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_underlay($rjs_core.UString.make("middle"), $rjs_core.UString.make("middle"), acc1425, img1424);
    }, empty_image, M4.cons(ima1421, M4.cons(imb1422, imn1423)));
});
var underlay_by_align = $rjs_core.attachProcedureArity(function(x_place1426, y_place1427, ima1428, imb1429, ...imn1430575) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1430 = $rjs_core.Pair.listFromArray(imn1430575);
    return M2.foldl(function(img1431, acc1432) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_underlay(x_place1426, y_place1427, acc1432, img1431);
    }, empty_image, M4.cons(ima1428, M4.cons(imb1429, imn1430)));
});
var underlay_by_xy = function(ima1433, x1434, y1435, imb1436) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(M4.__(x1434), M4.__(y1435), imb1436, ima1433);
};
var above_by_align = $rjs_core.attachProcedureArity(function(x_place1437, i11438, i21439, ...is1440576) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1440 = $rjs_core.Pair.listFromArray(is1440576);
    return M2.foldl(function(img1441, acc1442) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay(x_place1437, $rjs_core.UString.make("above"), acc1442, img1441);
    }, empty_image, M4.cons(i11438, M4.cons(i21439, is1440)));
});
var above = $rjs_core.attachProcedureArity(function(i11443, i21444, ...is1445577) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1445 = $rjs_core.Pair.listFromArray(is1445577);
    return M2.foldl(function(img1446, acc1447) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("middle"), $rjs_core.UString.make("above"), acc1447, img1446);
    }, empty_image, M4.cons(i11443, M4.cons(i21444, is1445)));
});
var beside_by_align = $rjs_core.attachProcedureArity(function(y_place1448, i11449, i21450, ...is1451578) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1451 = $rjs_core.Pair.listFromArray(is1451578);
    return M2.foldl(function(img1452, acc1453) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("beside"), y_place1448, acc1453, img1452);
    }, empty_image, M4.cons(i11449, M4.cons(i21450, is1451)));
});
var beside = $rjs_core.attachProcedureArity(function(i11454, i21455, ...is1456579) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1456 = $rjs_core.Pair.listFromArray(is1456579);
    return M2.foldl(function(img1457, acc1458) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("beside"), $rjs_core.UString.make("middle"), acc1458, img1457);
    }, empty_image, M4.cons(i11454, M4.cons(i21455, is1456)));
});
var rotate = function(angle1459, image1460) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Rotate(image1460, M4.__(angle1459));
};
var scale = function(factor1461, image1462) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Scale(image1462, factor1461, factor1461);
};
var flip_horizontal = function(image1463) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Scale(image1463, -1, 1);
};
var flip_vertical = function(image1464) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Scale(image1464, 1, -1);
};
var bitmap_by_data = function(data1465) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Bitmap(data1465);
};
var bitmap_by_url = function(url1466) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Bitmap(url1466);
};
var frame = function(img1467) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return color_frame($rjs_core.UString.make("black"), img1467);
};
var color_frame = function(color1468, img1469) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return overlay(rectangle(image_width(img1469), image_height(img1469), $rjs_core.PrimitiveSymbol.make("outline"), color1468), img1469);
};
var freeze = function(img1470) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Freeze(img1470);
};
var __rjs_quoted__ = {};
__rjs_quoted__.empty_image = empty_image;
__rjs_quoted__.posn_p = posn_p;
__rjs_quoted__.make_posn = make_posn;
__rjs_quoted__.posn_y = posn_y;
__rjs_quoted__.posn_x = posn_x;
__rjs_quoted__.___gt_web_color = ___gt_web_color;
__rjs_quoted__.struct_posn = struct_posn;
export {
    __rjs_quoted__,
    posn_x,
    posn_y,
    posn_p,
    make_posn,
    struct_posn,
    print_image,
    freeze,
    bitmap_by_url,
    bitmap_by_data,
    flip_horizontal,
    flip_vertical,
    scale,
    rotate,
    beside,
    beside_by_align,
    above,
    above_by_align,
    underlay_by_xy,
    underlay,
    overlay,
    overlay_by_xy,
    overlay_by_align,
    place_images_by_align,
    place_image_by_align,
    place_images,
    place_image,
    color_frame,
    frame,
    triangle,
    text_by_font,
    text,
    circle,
    square,
    rectangle,
    line,
    image_width,
    image_height,
    empty_scene,
    empty_image
};