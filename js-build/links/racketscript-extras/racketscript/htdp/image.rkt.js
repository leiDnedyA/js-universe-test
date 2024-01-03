import * as $rjs_core from '../../../../runtime/core.js';
import * as M0 from "./private/color.rkt.js";
import * as M1 from "../../../racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../../../../collects/racket/private/list.rkt.js";
import * as M3 from "../private/jscommon.rkt.js";
import * as M4 from "../../../../runtime/kernel.rkt.js";
import * as M5 from "../../../../collects/racket/private/map.rkt.js";
import * as M6 from "../../../racketscript-compiler/racketscript/private/interop.rkt.js";
var let_result813 = M4.make_struct_type($rjs_core.PrimitiveSymbol.make("posn"), false, 2, 0, false, M4.rnull, false, false, $rjs_core.Pair.makeList(0, 1), false, $rjs_core.PrimitiveSymbol.make("posn"));
var struct_1649 = let_result813.getAt(0);
var make_1650 = let_result813.getAt(1);
var __p1651 = let_result813.getAt(2);
var __ref1652 = let_result813.getAt(3);
var __set_bang_1653 = let_result813.getAt(4);
var let_result814 = M4.values(struct_1649, make_1650, __p1651, M4.make_struct_field_accessor(__ref1652, 0, $rjs_core.PrimitiveSymbol.make("x")), M4.make_struct_field_accessor(__ref1652, 1, $rjs_core.PrimitiveSymbol.make("y")));
var struct_posn = let_result814.getAt(0);
var make_posn = let_result814.getAt(1);
var posn_p = let_result814.getAt(2);
var posn_x = let_result814.getAt(3);
var posn_y = let_result814.getAt(4);
var ___gt_web_color = function(p1654) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M4.string_p(p1654) !== false) {
        var if_res817 = M0.string__gt_web_color(p1654);
    } else {
        if (M0.color_p(p1654) !== false) {
            var if_res816 = M0.color__gt_web_color(p1654);
        } else {
            if (M4.symbol_p(p1654) !== false) {
                var if_res815 = M0.string__gt_web_color(M4.symbol__gt_string(p1654));
            } else {
                var if_res815 = M4.error($rjs_core.PrimitiveSymbol.make("color"), $rjs_core.UString.make("invalid color"));
            }
            var if_res816 = if_res815;
        }
        var if_res817 = if_res816;
    }
    return if_res817;
};
var print_image = function(d1655) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var canvas1656 = M3.document.createElement("canvas");
    var ctx1657 = canvas1656.getContext("2d");
    M3.document.body.appendChild(canvas1656);
    M3.document.body.appendChild(M3.document.createElement("br"));
    canvas1656.width = d1655.width;
    canvas1656.height = d1655.height;
    ctx1657.save();
    ctx1657.translate(d1655.width / 2, d1655.height / 2);
    d1655.render(ctx1657, 0, 0);
    return ctx1657.restore();
};
var canvas1658 = M3.document.createElement("canvas");
var __times_invisible_canvas_context_times_ = canvas1658.getContext("2d");
var empty_image = {
    'type': $rjs_core.UString.make("empty-image"),
    'width': 0,
    'height': 0,
    'render': function(ctx1659, x1660, y1661) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return M4.rvoid();
    }
};
var image_height = function(i1662) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return i1662.height;
};
var image_width = function(i1663) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return i1663.width;
};
var Text = function(text1664, size1665, color1666, face1667, family1668, style1669, weight1670, underline_p1671) {
    if (arguments.length !== 8) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1672 = this;
    this1672.type = $rjs_core.UString.make("text");
    this1672.text = text1664;
    this1672.size = size1665;
    this1672.color = ___gt_web_color(color1666);
    this1672.face = face1667;
    this1672.family = family1668;
    this1672.style = style1669;
    this1672.weight = weight1670;
    this1672.underline = underline_p1671;
    return this1672._updateMetrics();
};
Text.prototype._updateMetrics = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1673 = this;
    var font1674 = M4.string_append(this1673.weight, $rjs_core.UString.make(" "), this1673.style, $rjs_core.UString.make(" "), M4.number__gt_string(this1673.size), $rjs_core.UString.make("px "), this1673.face, $rjs_core.UString.make(" "), this1673.family);
    __times_invisible_canvas_context_times_.font = M1.js_string(font1674);
    var let_result818 = M4.values();
    var metrics1675 = __times_invisible_canvas_context_times_.measureText(M1.js_string(this1673.text));
    this1673.font = font1674;
    this1673.width = metrics1675.width;
    this1673.height = this1673.size;
    return null;
};
Text.prototype.render = function(ctx1676, x1677, y1678) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1679 = this;
    ctx1676.save();
    ctx1676.translate(x1677, y1678);
    ctx1676.font = M1.js_string(this1679.font);
    ctx1676.textAlign = "center";
    ctx1676.textBaseline = "middle";
    ctx1676.fillStyle = M1.js_string(this1679.color);
    ctx1676.fillText(M1.js_string(this1679.text), 0, 0);
    return ctx1676.restore();
};
var Line = function(x1680, y1681, pen_or_color1682) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1683 = this;
    this1683.type = $rjs_core.UString.make("line");
    this1683.width = M3.abs_plus_ceil(x1680);
    this1683.height = M3.abs_plus_ceil(y1681);
    this1683.mode = false;
    this1683.pen = pen_or_color1682;
    return null;
};
Line.prototype.render = function(ctx1684, x1685, y1686) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1687 = this;
    ctx1684.save();
    var let_result819 = M4.values();
    ctx1684.translate(x1685, y1686);
    var let_result820 = M4.values();
    ctx1684.beginPath();
    var let_result821 = M4.values();
    var sx1688 = M4.__(M4.abs(this1687.x / 2));
    var sy1689 = M4.__(M4.abs(this1687.y / 2));
    if (M4.__gt__eq_(x1685, 0) !== false) {
        var if_res822 = M4.__gt__eq_(y1686, 0);
    } else {
        var if_res822 = false;
    }
    if (if_res822 !== false) {
        ctx1684.moveTo(sx1688, sy1689);
        var if_res829 = ctx1684.lineTo(sx1688 + x1685, sy1689 + y1686);
    } else {
        if (M4.__gt__eq_(x1685, 0) !== false) {
            var if_res823 = M4.__lt_(y1686, 0);
        } else {
            var if_res823 = false;
        }
        if (if_res823 !== false) {
            ctx1684.moveTo(sx1688 + x1685, sy1689);
            var if_res828 = ctx1684.lineTo(sx1688, sy1689 - y1686);
        } else {
            if (M4.__lt_(x1685, 0) !== false) {
                var if_res824 = M4.__gt__eq_(y1686, 0);
            } else {
                var if_res824 = false;
            }
            if (if_res824 !== false) {
                ctx1684.moveTo(sx1688, sy1689 + y1686);
                var if_res827 = ctx1684.lineTo(sx1688 - x1685, sy1689);
            } else {
                if (M4.__lt_(x1685, 0) !== false) {
                    var if_res825 = M4.__lt_(y1686, 0);
                } else {
                    var if_res825 = false;
                }
                if (if_res825 !== false) {
                    ctx1684.moveTo(sx1688 - x1685, sy1689 - y1686);
                    var if_res826 = ctx1684.lineTo(sx1688, sy1689);
                } else {
                    var if_res826 = M4.rvoid();
                }
                var if_res827 = if_res826;
            }
            var if_res828 = if_res827;
        }
        var if_res829 = if_res828;
    }
    if_res829;
    var or_part1690 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1690 !== false) {
        var if_res830 = or_part1690;
    } else {
        var if_res830 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.UString.make("outline"));
    }
    if (if_res830 !== false) {
        ctx1684.strokeStyle = M1.js_string(___gt_web_color(this1687.pen));
        var if_res833 = ctx1684.stroke();
    } else {
        var or_part1691 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1691 !== false) {
            var if_res831 = or_part1691;
        } else {
            var if_res831 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.UString.make("solid"));
        }
        if (if_res831 !== false) {
            ctx1684.fillStyle = M1.js_string(___gt_web_color(this1687.pen));
            var if_res832 = ctx1684.fill();
        } else {
            var if_res832 = M4.rvoid();
        }
        var if_res833 = if_res832;
    }
    if_res833;
    ctx1684.closePath();
    return ctx1684.restore();
};
var Rectangle = function(width1692, height1693, mode1694, pen_or_color1695) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1696 = this;
    this1696.type = $rjs_core.UString.make("rectangle");
    this1696.width = width1692;
    this1696.height = height1693;
    this1696.mode = mode1694;
    this1696.pen = pen_or_color1695;
    return null;
};
Rectangle.prototype.render = function(ctx1697, x1698, y1699) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1700 = this;
    ctx1697.save();
    ctx1697.translate(x1698, y1699);
    ctx1697.beginPath();
    var width1701 = this1700.width;
    var height1702 = this1700.height;
    var start_x1703 = M4.__(width1701 / 2);
    var start_y1704 = M4.__(height1702 / 2);
    ctx1697.rect(start_x1703, start_y1704, width1701, height1702);
    var or_part1705 = M4.equal_p(this1700.mode, $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1705 !== false) {
        var if_res834 = or_part1705;
    } else {
        var if_res834 = M4.equal_p(this1700.mode, $rjs_core.UString.make("outline"));
    }
    if (if_res834 !== false) {
        ctx1697.strokeStyle = M1.js_string(___gt_web_color(this1700.pen));
        var if_res837 = ctx1697.stroke();
    } else {
        var or_part1706 = M4.equal_p(this1700.mode, $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1706 !== false) {
            var if_res835 = or_part1706;
        } else {
            var if_res835 = M4.equal_p(this1700.mode, $rjs_core.UString.make("solid"));
        }
        if (if_res835 !== false) {
            ctx1697.fillStyle = M1.js_string(___gt_web_color(this1700.pen));
            var if_res836 = ctx1697.fill();
        } else {
            var if_res836 = M4.rvoid();
        }
        var if_res837 = if_res836;
    }
    if_res837;
    ctx1697.closePath();
    return ctx1697.restore();
};
var Circle = function(radius1707, mode1708, pen_or_color1709) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1710 = this;
    var diameter1711 = radius1707 * 2;
    this1710.type = $rjs_core.UString.make("circle");
    this1710.radius = radius1707;
    this1710.width = diameter1711;
    this1710.height = diameter1711;
    this1710.mode = mode1708;
    this1710.pen = pen_or_color1709;
    return null;
};
Circle.prototype.render = function(ctx1712, x1713, y1714) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1715 = this;
    var radius1716 = this1715.radius;
    ctx1712.save();
    ctx1712.translate(x1713, y1714);
    ctx1712.beginPath();
    ctx1712.ellipse(0, 0, radius1716, radius1716, 0, 0, M3.Math.PI * 2);
    var or_part1717 = M4.equal_p(this1715.mode, $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1717 !== false) {
        var if_res838 = or_part1717;
    } else {
        var if_res838 = M4.equal_p(this1715.mode, $rjs_core.UString.make("outline"));
    }
    if (if_res838 !== false) {
        ctx1712.strokeStyle = M1.js_string(___gt_web_color(this1715.pen));
        var if_res841 = ctx1712.stroke();
    } else {
        var or_part1718 = M4.equal_p(this1715.mode, $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1718 !== false) {
            var if_res839 = or_part1718;
        } else {
            var if_res839 = M4.equal_p(this1715.mode, $rjs_core.UString.make("solid"));
        }
        if (if_res839 !== false) {
            ctx1712.fillStyle = M1.js_string(___gt_web_color(this1715.pen));
            var if_res840 = ctx1712.fill();
        } else {
            var if_res840 = M4.rvoid();
        }
        var if_res841 = if_res840;
    }
    if_res841;
    ctx1712.closePath();
    return ctx1712.restore();
};
var Polygon = function(vertices1719, mode1720, pen_or_color1721) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1722 = this;
    var xs1723 = M5.map(posn_x, vertices1719);
    var ys1724 = M5.map(posn_y, vertices1719);
    var width1725 = M4.apply(M4.max, xs1723) - M4.apply(M4.min, xs1723);
    var height1726 = M4.apply(M4.max, ys1724) - M4.apply(M4.min, xs1723);
    this1722.type = $rjs_core.UString.make("polygon");
    this1722.vertices = vertices1719;
    this1722.width = width1725;
    this1722.height = height1726;
    this1722.mode = mode1720;
    this1722.pen = pen_or_color1721;
    return null;
};
Polygon.prototype.render = function(ctx1727, x1728, y1729) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1730 = this;
    var first_point1731 = M4.car(this1730.vertices);
    var rest_points1732 = M4.cdr(this1730.vertices);
    var radius1733 = this1730.radius;
    ctx1727.save();
    ctx1727.translate(x1728, y1729);
    ctx1727.beginPath();
    ctx1727.moveTo(posn_x(first_point1731), posn_y(first_point1731));
    var loop1734 = function(points1735) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.null_p(points1735) !== false) {
            var if_res842 = M4.rvoid();
        } else {
            var pt1736 = M4.car(points1735);
            ctx1727.lineTo(posn_x(pt1736), posn_y(pt1736));
            var if_res842 = loop1734(M4.cdr(points1735));
        }
        return if_res842;
    };
    loop1734(rest_points1732);
    var or_part1737 = M4.equal_p(this1730.mode, $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1737 !== false) {
        var if_res843 = or_part1737;
    } else {
        var if_res843 = M4.equal_p(this1730.mode, $rjs_core.UString.make("outline"));
    }
    if (if_res843 !== false) {
        ctx1727.strokeStyle = M1.js_string(___gt_web_color(this1730.pen));
        var if_res846 = ctx1727.stroke();
    } else {
        var or_part1738 = M4.equal_p(this1730.mode, $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1738 !== false) {
            var if_res844 = or_part1738;
        } else {
            var if_res844 = M4.equal_p(this1730.mode, $rjs_core.UString.make("solid"));
        }
        if (if_res844 !== false) {
            ctx1727.fillStyle = M1.js_string(___gt_web_color(this1730.pen));
            var if_res845 = ctx1727.fill();
        } else {
            var if_res845 = M4.rvoid();
        }
        var if_res846 = if_res845;
    }
    if_res846;
    ctx1727.closePath();
    return ctx1727.restore();
};
var empty_scene1739 = function(width21740, height31741, color11742) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var width1743 = width21740;
    var height1744 = height31741;
    if (false !== false) {
        var if_res847 = $rjs_core.UString.make("white");
    } else {
        var if_res847 = color11742;
    }
    var color1745 = if_res847;
    return overlay(rectangle(width1743, height1744, $rjs_core.UString.make("solid"), color1745), rectangle(width1743, height1744, $rjs_core.UString.make("outline"), $rjs_core.UString.make("black")));
};
var cl848 = function(width1746, height1747) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return empty_scene1739(width1746, height1747, $rjs_core.UString.make("white"));
};
var cl849 = function(width1748, height1749, color11750) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return empty_scene1739(width1748, height1749, color11750);
};
var empty_scene = $rjs_core.attachProcedureArity(function() {
    var fixed_lam850 = {
        '2': cl848,
        '3': cl849
    } [arguments.length];
    if (fixed_lam850 !== undefined) {
        return fixed_lam850.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var text = function(txt1751, size1752, color1753) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Text(txt1751, size1752, color1753, $rjs_core.UString.make(""), $rjs_core.UString.make("serif"), $rjs_core.UString.make("normal"), $rjs_core.UString.make("normal"), false);
};
var text_by_font = function(txt1754, size1755, color1756, face1757, family1758, style1759, weight1760, underline_p1761) {
    if (arguments.length !== 8) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var or_part1762 = face1757;
    if (or_part1762 !== false) {
        var if_res854 = or_part1762;
    } else {
        var if_res854 = $rjs_core.UString.make("");
    }
    if (M4.symbol_p(family1758) !== false) {
        var if_res853 = M4.symbol__gt_string(family1758);
    } else {
        var if_res853 = family1758;
    }
    if (M4.symbol_p(style1759) !== false) {
        var if_res852 = M4.symbol__gt_string(style1759);
    } else {
        var if_res852 = style1759;
    }
    if (M4.symbol_p(weight1760) !== false) {
        var if_res851 = M4.symbol__gt_string(weight1760);
    } else {
        var if_res851 = weight1760;
    }
    return new Text(txt1754, size1755, color1756, if_res854, if_res853, if_res852, if_res851, underline_p1761);
};
var line = function(x1763, y1764, pen_or_color1765) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Line(x1763, y1764, pen_or_color1765);
};
var rectangle = function(w1766, h1767, m1768, p1769) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Rectangle(w1766, h1767, m1768, p1769);
};
var square = function(s1770, m1771, p1772) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Rectangle(s1770, s1770, m1771, p1772);
};
var circle = function(r1773, m1774, p1775) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Circle(r1773, m1774, p1775);
};
var triangle = function(side1776, mode1777, color1778) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var height1779 = side1776 * (M4.sqrt(3) / 2);
    return new Polygon(M4.list(make_posn(M4.__(side1776 / 2), height1779 / 2), make_posn(0, M4.__(height1779 / 2)), make_posn(side1776 / 2, height1779 / 2)), mode1777, color1778);
};
var Overlay = function(x_place1780, y_place1781, ima1782, imb1783) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1784 = this;
    var ima_cx1785 = ima1782.width / 2;
    var ima_cy1786 = ima1782.height / 2;
    var imb_cx1787 = imb1783.width / 2;
    var imb_cy1788 = imb1783.height / 2;
    var tmp1790 = x_place1780;
    if (M4.equal_p(tmp1790, $rjs_core.UString.make("beside")) !== false) {
        var if_res857 = ima1782.width + imb1783.width;
    } else {
        if (M4.number_p(x_place1780) !== false) {
            if (M4.positive_p(x_place1780) !== false) {
                var if_res855 = M4.max(ima1782.width, imb1783.width + x_place1780);
            } else {
                var if_res855 = M4.max(imb1783.width, ima1782.width - x_place1780);
            }
            var if_res856 = if_res855;
        } else {
            var if_res856 = M4.max(ima1782.width, imb1783.width);
        }
        var if_res857 = if_res856;
    }
    var width1789 = if_res857;
    var tmp1792 = y_place1781;
    if (M4.equal_p(tmp1792, $rjs_core.UString.make("above")) !== false) {
        var if_res860 = ima1782.height + imb1783.height;
    } else {
        if (M4.number_p(y_place1781) !== false) {
            if (M4.positive_p(y_place1781) !== false) {
                var if_res858 = M4.max(ima1782.height, imb1783.height + y_place1781);
            } else {
                var if_res858 = M4.max(imb1783.height, ima1782.height - y_place1781);
            }
            var if_res859 = if_res858;
        } else {
            var if_res859 = M4.max(ima1782.height, imb1783.height);
        }
        var if_res860 = if_res859;
    }
    var height1791 = if_res860;
    var δ_edge_x1793 = width1789 / 2;
    var δ_edge_y1794 = height1791 / 2;
    var tmp1797 = x_place1780;
    if (M4.equal_p(tmp1797, $rjs_core.UString.make("left")) !== false) {
        var if_res867 = M4.values(ima_cx1785 - δ_edge_x1793, imb_cx1787 - δ_edge_x1793);
    } else {
        if (M4.equal_p(tmp1797, $rjs_core.UString.make("right")) !== false) {
            var if_res866 = M4.values(δ_edge_x1793 - ima_cx1785, δ_edge_x1793 - imb_cx1787);
        } else {
            if (M4.equal_p(tmp1797, $rjs_core.UString.make("beside")) !== false) {
                var if_res865 = M4.values(ima_cx1785 - δ_edge_x1793, δ_edge_x1793 - imb_cx1787);
            } else {
                if (M4.equal_p(tmp1797, $rjs_core.UString.make("middle")) !== false) {
                    var if_res861 = true;
                } else {
                    var if_res861 = M4.equal_p(tmp1797, $rjs_core.UString.make("center"));
                }
                if (if_res861 !== false) {
                    var if_res864 = M4.values(0, 0);
                } else {
                    if (M4.number_p(x_place1780) !== false) {
                        var local_width1798 = M4.max(ima1782.width, imb1783.width);
                        var local_acx1799 = ima_cx1785 - (local_width1798 / 2);
                        var local_bcx1800 = imb_cx1787 - (local_width1798 / 2);
                        var acx_bcx1801 = δ_edge_x1793 - (local_width1798 / 2);
                        if (M4.positive_p(x_place1780) !== false) {
                            var if_res862 = M4.values(local_acx1799 - acx_bcx1801, x_place1780 + (local_bcx1800 - acx_bcx1801));
                        } else {
                            var if_res862 = M4.values(local_acx1799 - x_place1780 - acx_bcx1801, local_bcx1800 - acx_bcx1801);
                        }
                        var if_res863 = if_res862;
                    } else {
                        var if_res863 = M4.error($rjs_core.UString.make("invalid x-place align"));
                    }
                    var if_res864 = if_res863;
                }
                var if_res865 = if_res864;
            }
            var if_res866 = if_res865;
        }
        var if_res867 = if_res866;
    }
    var let_result868 = if_res867;
    var δ_a_x1795 = let_result868.getAt(0);
    var δ_b_x1796 = let_result868.getAt(1);
    var tmp1804 = y_place1781;
    if (M4.equal_p(tmp1804, $rjs_core.UString.make("top")) !== false) {
        var if_res875 = M4.values(ima_cy1786 - δ_edge_y1794, imb_cy1788 - δ_edge_y1794);
    } else {
        if (M4.equal_p(tmp1804, $rjs_core.UString.make("bottom")) !== false) {
            var if_res874 = M4.values(δ_edge_y1794 - ima_cy1786, δ_edge_y1794 - imb_cy1788);
        } else {
            if (M4.equal_p(tmp1804, $rjs_core.UString.make("above")) !== false) {
                var if_res873 = M4.values(ima_cy1786 - δ_edge_y1794, δ_edge_y1794 - imb_cy1788);
            } else {
                if (M4.equal_p(tmp1804, $rjs_core.UString.make("middle")) !== false) {
                    var if_res869 = true;
                } else {
                    var if_res869 = M4.equal_p(tmp1804, $rjs_core.UString.make("center"));
                }
                if (if_res869 !== false) {
                    var if_res872 = M4.values(0, 0);
                } else {
                    if (M4.number_p(y_place1781) !== false) {
                        var local_height1805 = M4.max(ima1782.height, imb1783.height);
                        var local_acy1806 = ima_cy1786 - (local_height1805 / 2);
                        var local_bcy1807 = imb_cy1788 - (local_height1805 / 2);
                        var acy_bcy1808 = δ_edge_y1794 - (local_height1805 / 2);
                        if (M4.positive_p(y_place1781) !== false) {
                            var if_res870 = M4.values(local_acy1806 - acy_bcy1808, y_place1781 + (local_bcy1807 - acy_bcy1808));
                        } else {
                            var if_res870 = M4.values(local_acy1806 - y_place1781 - acy_bcy1808, local_bcy1807 - acy_bcy1808);
                        }
                        var if_res871 = if_res870;
                    } else {
                        var if_res871 = M4.error($rjs_core.UString.make("invalid y-place align"));
                    }
                    var if_res872 = if_res871;
                }
                var if_res873 = if_res872;
            }
            var if_res874 = if_res873;
        }
        var if_res875 = if_res874;
    }
    var let_result876 = if_res875;
    var δ_a_y1802 = let_result876.getAt(0);
    var δ_b_y1803 = let_result876.getAt(1);
    this1784.type = $rjs_core.UString.make("overlay");
    this1784.ima = ima1782;
    this1784.imb = imb1783;
    this1784.width = width1789;
    this1784.height = height1791;
    this1784.aDx = δ_a_x1795;
    this1784.aDy = δ_a_y1802;
    this1784.bDx = δ_b_x1796;
    this1784.bDy = δ_b_y1803;
    return null;
};
Overlay.prototype.render = function(ctx1809, x1810, y1811) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1812 = this;
    var ima1813 = this1812.ima;
    var imb1814 = this1812.imb;
    ctx1809.save();
    ctx1809.translate(x1810, y1811);
    imb1814.render(ctx1809, this1812.bDx, this1812.bDy);
    ima1813.render(ctx1809, this1812.aDx, this1812.aDy);
    return ctx1809.restore();
};
var Container = function(childs1815, posns1816, width1817, height1818) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1819 = this;
    this1819.type = $rjs_core.UString.make("container");
    this1819.childs = childs1815;
    this1819.posns = posns1816;
    this1819.width = width1817;
    this1819.height = height1818;
    return null;
};
Container.prototype.render = function(ctx1820, x1821, y1822) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1823 = this;
    var width1824 = this1823.width;
    var height1825 = this1823.height;
    ctx1820.save();
    ctx1820.translate(x1821 - (width1824 / 2), y1822 - (height1825 / 2));
    ctx1820.beginPath();
    ctx1820.rect(0, 0, M4.sub1(width1824), M4.sub1(height1825));
    ctx1820.clip();
    var loop1826 = function(childs1827, posns1828) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.null_p(childs1827) !== false) {
            var if_res877 = M4.rvoid();
        } else {
            var child1829 = M4.car(childs1827);
            var posn1830 = M4.car(posns1828);
            child1829.render(ctx1820, posn_x(posn1830), posn_y(posn1830));
            var if_res877 = loop1826(M4.cdr(childs1827), M4.cdr(posns1828));
        }
        return if_res877;
    };
    loop1826(this1823.childs, this1823.posns);
    return ctx1820.restore();
};
var Bitmap = function(data1831) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1832 = this;
    var image1833 = new Image;
    image1833.crossOrigin = "anonymous";
    image1833.src = M1.js_string(data1831);
    this1832.image = image1833;
    this1832.width = image1833.width;
    this1832.height = image1833.height;
    return null;
};
Bitmap.prototype.render = function(ctx1834, x1835, y1836) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1837 = this;
    var image1838 = this1837.image;
    ctx1834.save();
    ctx1834.translate(x1835, y1836);
    ctx1834.drawImage(image1838, M4.__(image1838.width / 2), M4.__(image1838.height / 2));
    return ctx1834.restore();
};
var Freeze = function(img1839) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1840 = this;
    var canvas1841 = M3.document.createElement("canvas");
    var ctx1842 = canvas1841.getContext("2d");
    var width1843 = img1839.width;
    var height1844 = img1839.height;
    canvas1841.width = width1843;
    canvas1841.height = height1844;
    ctx1842.save();
    ctx1842.translate(width1843 / 2, height1844 / 2);
    img1839.render(ctx1842, 0, 0);
    ctx1842.restore();
    this1840.width = width1843;
    this1840.height = height1844;
    this1840.canvas = canvas1841;
    return null;
};
Freeze.prototype.render = function(ctx1845, x1846, y1847) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1848 = this;
    var width1849 = this1848.width;
    var height1850 = this1848.height;
    ctx1845.save();
    ctx1845.translate(x1846, y1847);
    ctx1845.drawImage(this1848.canvas, M4.__(width1849 / 2), M4.__(height1850 / 2));
    return ctx1845.restore();
};
var Rotate = function(image1851, angle1852) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1853 = this;
    var width1854 = image1851.width;
    var height1855 = image1851.height;
    var θ1856 = (M3.Math.PI * angle1852) / 180.0;
    var sin_θ1857 = M4.sin(θ1856);
    var cos_θ1858 = M4.cos(θ1856);
    var x11859 = cos_θ1858 * width1854;
    var y11860 = sin_θ1857 * width1854;
    var x21861 = M4.__(sin_θ1857) * height1855;
    var y21862 = cos_θ1858 * height1855;
    var x31863 = x11859 + x21861;
    var y31864 = y11860 + y21862;
    var min_x1865 = M4.min(0, x11859, x21861, x31863);
    var max_x1866 = M4.max(0, x11859, x21861, x31863);
    var min_y1867 = M4.min(0, y11860, y21862, y31864);
    var max_y1868 = M4.max(0, y11860, y21862, y31864);
    var rotated_width1869 = M4.floor(max_x1866 - min_x1865);
    var rotated_height1870 = M4.floor(max_y1868 - min_y1867);
    this1853.image = image1851;
    this1853.width = rotated_width1869;
    this1853.height = rotated_height1870;
    this1853.degrees = angle1852;
    this1853.radians = θ1856;
    return null;
};
Rotate.prototype.render = function(ctx1871, x1872, y1873) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1874 = this;
    ctx1871.save();
    ctx1871.translate(x1872, y1873);
    ctx1871.rotate(this1874.radians);
    this1874.image.render(ctx1871, 0, 0);
    return ctx1871.restore();
};
var Scale = function(image1875, x_factor1876, y_factor1877) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1878 = this;
    this1878.image = image1875;
    this1878.x_factor = x_factor1876;
    this1878.y_factor = y_factor1877;
    this1878.width = M4.abs(M4.floor(image1875.width * x_factor1876));
    this1878.height = M4.abs(M4.floor(image1875.height * y_factor1877));
    return null;
};
Scale.prototype.render = function(ctx1879, x1880, y1881) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1882 = this;
    ctx1879.save();
    ctx1879.translate(x1880, y1881);
    ctx1879.scale(this1882.x_factor, this1882.y_factor);
    this1882.image.render(ctx1879, 0, 0);
    return ctx1879.restore();
};
var container = function(childs1883, posns1884, width1885, height1886) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Container(childs1883, posns1884, width1885, height1886);
};
var place_image = function(child1887, cx1888, cy1889, base1890) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var width1891 = base1890.width;
    var height1892 = base1890.height;
    return container(M4.list(base1890, child1887), M4.list(make_posn(width1891 / 2, height1892 / 2), make_posn(cx1888, cy1889)), width1891, height1892);
};
var place_images = function(images1893, posns1894, scene1895) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var width1896 = scene1895.width;
    var height1897 = scene1895.height;
    return container(M4.cons(scene1895, images1893), M4.cons(make_posn(width1896 / 2, height1897 / 2), posns1894), width1896, height1897);
};
var __align_image_pos = function(image1898, pos1899, x_place1900, y_place1901) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var x1902 = posn_x(pos1899);
    var y1903 = posn_y(pos1899);
    var tmp1905 = x_place1900;
    if (M4.equal_p(tmp1905, $rjs_core.UString.make("left")) !== false) {
        var if_res881 = (image1898.width / 2) + x1902;
    } else {
        if (M4.equal_p(tmp1905, $rjs_core.UString.make("right")) !== false) {
            var if_res880 = x1902 - (image1898.width / 2);
        } else {
            if (M4.equal_p(tmp1905, $rjs_core.UString.make("center")) !== false) {
                var if_res878 = true;
            } else {
                var if_res878 = M4.equal_p(tmp1905, $rjs_core.UString.make("middle"));
            }
            if (if_res878 !== false) {
                var if_res879 = x1902;
            } else {
                var if_res879 = M4.rvoid();
            }
            var if_res880 = if_res879;
        }
        var if_res881 = if_res880;
    }
    var new_x1904 = if_res881;
    var tmp1907 = y_place1901;
    if (M4.equal_p(tmp1907, $rjs_core.UString.make("top")) !== false) {
        var if_res885 = (image1898.height / 2) + y1903;
    } else {
        if (M4.equal_p(tmp1907, $rjs_core.UString.make("bottom")) !== false) {
            var if_res884 = y1903 - (image1898.height / 2);
        } else {
            if (M4.equal_p(tmp1907, $rjs_core.UString.make("center")) !== false) {
                var if_res882 = true;
            } else {
                var if_res882 = M4.equal_p(tmp1907, $rjs_core.UString.make("middle"));
            }
            if (if_res882 !== false) {
                var if_res883 = y1903;
            } else {
                var if_res883 = M4.rvoid();
            }
            var if_res884 = if_res883;
        }
        var if_res885 = if_res884;
    }
    var new_y1906 = if_res885;
    return make_posn(new_x1904, new_y1906);
};
var place_image_by_align = function(image1908, x1909, y1910, x_place1911, y_place1912, scene1913) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var new_pos1914 = __align_image_pos(image1908, make_posn(x1909, y1910), x_place1911, y_place1912);
    return place_image(image1908, posn_x(new_pos1914), posn_y(new_pos1914), scene1913);
};
var place_images_by_align = function(images1915, posns1916, x_place1917, y_place1918, scene1919) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var new_posns1920 = M5.map(function(i1921, p1922) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __align_image_pos(i1921, p1922, x_place1917, y_place1918);
    }, images1915, posns1916);
    return place_images(images1915, new_posns1920, scene1919);
};
var __single_overlay = function(x_place1923, y_place1924, ima1925, imb1926) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(x_place1923, y_place1924, ima1925, imb1926);
};
var __single_underlay = function(x_place1927, y_place1928, ima1929, imb1930) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(x_place1927, y_place1928, imb1930, ima1929);
};
var overlay_by_align = $rjs_core.attachProcedureArity(function(x_place1931, y_place1932, ima1933, imb1934, ...imn1935886) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1935 = $rjs_core.Pair.listFromArray(imn1935886);
    return M2.foldl(function(img1936, acc1937) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay(x_place1931, y_place1932, acc1937, img1936);
    }, empty_image, M4.cons(ima1933, M4.cons(imb1934, imn1935)));
});
var overlay = $rjs_core.attachProcedureArity(function(ima1938, imb1939, ...imn1940887) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1940 = $rjs_core.Pair.listFromArray(imn1940887);
    return M2.foldl(function(img1941, acc1942) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("middle"), $rjs_core.UString.make("middle"), acc1942, img1941);
    }, empty_image, M4.cons(ima1938, M4.cons(imb1939, imn1940)));
});
var overlay_by_xy = function(ima1943, x1944, y1945, imb1946) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(x1944, y1945, ima1943, imb1946);
};
var underlay = $rjs_core.attachProcedureArity(function(ima1947, imb1948, ...imn1949888) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1949 = $rjs_core.Pair.listFromArray(imn1949888);
    return M2.foldl(function(img1950, acc1951) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_underlay($rjs_core.UString.make("middle"), $rjs_core.UString.make("middle"), acc1951, img1950);
    }, empty_image, M4.cons(ima1947, M4.cons(imb1948, imn1949)));
});
var underlay_by_align = $rjs_core.attachProcedureArity(function(x_place1952, y_place1953, ima1954, imb1955, ...imn1956889) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1956 = $rjs_core.Pair.listFromArray(imn1956889);
    return M2.foldl(function(img1957, acc1958) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_underlay(x_place1952, y_place1953, acc1958, img1957);
    }, empty_image, M4.cons(ima1954, M4.cons(imb1955, imn1956)));
});
var underlay_by_xy = function(ima1959, x1960, y1961, imb1962) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(M4.__(x1960), M4.__(y1961), imb1962, ima1959);
};
var above_by_align = $rjs_core.attachProcedureArity(function(x_place1963, i11964, i21965, ...is1966890) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1966 = $rjs_core.Pair.listFromArray(is1966890);
    return M2.foldl(function(img1967, acc1968) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay(x_place1963, $rjs_core.UString.make("above"), acc1968, img1967);
    }, empty_image, M4.cons(i11964, M4.cons(i21965, is1966)));
});
var above = $rjs_core.attachProcedureArity(function(i11969, i21970, ...is1971891) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1971 = $rjs_core.Pair.listFromArray(is1971891);
    return M2.foldl(function(img1972, acc1973) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("middle"), $rjs_core.UString.make("above"), acc1973, img1972);
    }, empty_image, M4.cons(i11969, M4.cons(i21970, is1971)));
});
var beside_by_align = $rjs_core.attachProcedureArity(function(y_place1974, i11975, i21976, ...is1977892) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1977 = $rjs_core.Pair.listFromArray(is1977892);
    return M2.foldl(function(img1978, acc1979) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("beside"), y_place1974, acc1979, img1978);
    }, empty_image, M4.cons(i11975, M4.cons(i21976, is1977)));
});
var beside = $rjs_core.attachProcedureArity(function(i11980, i21981, ...is1982893) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1982 = $rjs_core.Pair.listFromArray(is1982893);
    return M2.foldl(function(img1983, acc1984) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("beside"), $rjs_core.UString.make("middle"), acc1984, img1983);
    }, empty_image, M4.cons(i11980, M4.cons(i21981, is1982)));
});
var rotate = function(angle1985, image1986) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Rotate(image1986, M4.__(angle1985));
};
var scale = function(factor1987, image1988) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Scale(image1988, factor1987, factor1987);
};
var flip_horizontal = function(image1989) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Scale(image1989, -1, 1);
};
var flip_vertical = function(image1990) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Scale(image1990, 1, -1);
};
var bitmap_by_data = function(data1991) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Bitmap(data1991);
};
var bitmap_by_url = function(url1992) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Bitmap(url1992);
};
var frame = function(img1993) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return color_frame($rjs_core.UString.make("black"), img1993);
};
var color_frame = function(color1994, img1995) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return overlay(rectangle(image_width(img1995), image_height(img1995), $rjs_core.PrimitiveSymbol.make("outline"), color1994), img1995);
};
var freeze = function(img1996) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Freeze(img1996);
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