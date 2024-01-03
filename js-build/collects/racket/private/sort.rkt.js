import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/unsafe.rkt.js";
var generic_sort2967 = function(A2968, less_than_p2969, n2970) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_by_2_2971 = M1.unsafe_fxrshift(n2970, 1);
    var n_by_2_plus_2972 = M1.unsafe_fx_(n2970, n_by_2_2971);
    var copying_mergesort2973 = function(Alo2974, Blo2975, n2976) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.unsafe_fx_eq_(n2976, 1) !== false) {
            var if_res1733 = M1.unsafe_vector_set_bang_(A2968, Blo2975, M1.unsafe_vector_ref(A2968, Alo2974));
        } else {
            if (M1.unsafe_fx_eq_(n2976, 2) !== false) {
                var x2977 = M1.unsafe_vector_ref(A2968, Alo2974);
                var y2978 = M1.unsafe_vector_ref(A2968, M1.unsafe_fx_plus_(Alo2974, 1));
                if (false !== false) {
                    var if_res1718 = less_than_p2969(false(y2978), false(x2977));
                } else {
                    var if_res1718 = less_than_p2969(y2978, x2977);
                }
                if (if_res1718 !== false) {
                    M1.unsafe_vector_set_bang_(A2968, Blo2975, y2978);
                    var if_res1719 = M1.unsafe_vector_set_bang_(A2968, M1.unsafe_fx_plus_(Blo2975, 1), x2977);
                } else {
                    M1.unsafe_vector_set_bang_(A2968, Blo2975, x2977);
                    var if_res1719 = M1.unsafe_vector_set_bang_(A2968, M1.unsafe_fx_plus_(Blo2975, 1), y2978);
                }
                var if_res1732 = if_res1719;
            } else {
                if (M1.unsafe_fx_lt_(n2976, 16) !== false) {
                    M1.unsafe_vector_set_bang_(A2968, Blo2975, M1.unsafe_vector_ref(A2968, Alo2974));
                    var iloop2979 = function(i2980) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (M1.unsafe_fx_lt_(i2980, n2976) !== false) {
                            var ref_i2981 = M1.unsafe_vector_ref(A2968, M1.unsafe_fx_plus_(Alo2974, i2980));
                            var jloop2982 = function(j2983) {
                                if (arguments.length !== 1) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var ref_j_12984 = M1.unsafe_vector_ref(A2968, M1.unsafe_fx_(j2983, 1));
                                if (M1.unsafe_fx_lt_(Blo2975, j2983) !== false) {
                                    if (false !== false) {
                                        var if_res1720 = less_than_p2969(false(ref_i2981), false(ref_j_12984));
                                    } else {
                                        var if_res1720 = less_than_p2969(ref_i2981, ref_j_12984);
                                    }
                                    var if_res1721 = if_res1720;
                                } else {
                                    var if_res1721 = false;
                                }
                                if (if_res1721 !== false) {
                                    M1.unsafe_vector_set_bang_(A2968, j2983, ref_j_12984);
                                    var if_res1722 = jloop2982(M1.unsafe_fx_(j2983, 1));
                                } else {
                                    M1.unsafe_vector_set_bang_(A2968, j2983, ref_i2981);
                                    var if_res1722 = iloop2979(M1.unsafe_fx_plus_(i2980, 1));
                                }
                                return if_res1722;
                            };
                            var if_res1723 = jloop2982(M1.unsafe_fx_plus_(Blo2975, i2980));
                        } else {
                            var if_res1723 = M0.rvoid();
                        }
                        return if_res1723;
                    };
                    var if_res1731 = iloop2979(1);
                } else {
                    var n_by_2_2985 = M1.unsafe_fxrshift(n2976, 1);
                    var n_by_2_plus_2986 = M1.unsafe_fx_(n2976, n_by_2_2985);
                    var Amid12987 = M1.unsafe_fx_plus_(Alo2974, n_by_2_2985);
                    var Amid22988 = M1.unsafe_fx_plus_(Alo2974, n_by_2_plus_2986);
                    var Bmid12989 = M1.unsafe_fx_plus_(Blo2975, n_by_2_2985);
                    copying_mergesort2973(Amid12987, Bmid12989, n_by_2_plus_2986);
                    copying_mergesort2973(Alo2974, Amid22988, n_by_2_2985);
                    var b22990 = M1.unsafe_fx_plus_(Blo2975, n2976);
                    var loop2991 = function(a12992, b12993, c12994) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var x2995 = M1.unsafe_vector_ref(A2968, a12992);
                        var y2996 = M1.unsafe_vector_ref(A2968, b12993);
                        if (true !== false) {
                            if (false !== false) {
                                var if_res1724 = less_than_p2969(false(y2996), false(x2995));
                            } else {
                                var if_res1724 = less_than_p2969(y2996, x2995);
                            }
                            var if_res1726 = M0.not(if_res1724);
                        } else {
                            if (false !== false) {
                                var if_res1725 = less_than_p2969(false(x2995), false(y2996));
                            } else {
                                var if_res1725 = less_than_p2969(x2995, y2996);
                            }
                            var if_res1726 = if_res1725;
                        }
                        if (if_res1726 !== false) {
                            M1.unsafe_vector_set_bang_(A2968, c12994, x2995);
                            var a12997 = M1.unsafe_fx_plus_(a12992, 1);
                            var c12998 = M1.unsafe_fx_plus_(c12994, 1);
                            if (M1.unsafe_fx_lt_(c12998, b12993) !== false) {
                                var if_res1727 = loop2991(a12997, b12993, c12998);
                            } else {
                                var if_res1727 = M0.rvoid();
                            }
                            var if_res1730 = if_res1727;
                        } else {
                            M1.unsafe_vector_set_bang_(A2968, c12994, y2996);
                            var b12999 = M1.unsafe_fx_plus_(b12993, 1);
                            var c13000 = M1.unsafe_fx_plus_(c12994, 1);
                            if (M1.unsafe_fx_lt__eq_(b22990, b12999) !== false) {
                                var loop3001 = function(a13002, c13003) {
                                    if (arguments.length !== 2) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    if (M1.unsafe_fx_lt_(c13003, b12999) !== false) {
                                        M1.unsafe_vector_set_bang_(A2968, c13003, M1.unsafe_vector_ref(A2968, a13002));
                                        var if_res1728 = loop3001(M1.unsafe_fx_plus_(a13002, 1), M1.unsafe_fx_plus_(c13003, 1));
                                    } else {
                                        var if_res1728 = M0.rvoid();
                                    }
                                    return if_res1728;
                                };
                                var if_res1729 = loop3001(a12992, c13000);
                            } else {
                                var if_res1729 = loop2991(a12992, b12999, c13000);
                            }
                            var if_res1730 = if_res1729;
                        }
                        return if_res1730;
                    };
                    var if_res1731 = loop2991(Amid22988, Bmid12989, Blo2975);
                }
                var if_res1732 = if_res1731;
            }
            var if_res1733 = if_res1732;
        }
        return if_res1733;
    };
    var Alo3004 = 0;
    var Amid13005 = n_by_2_2971;
    var Amid23006 = n_by_2_plus_2972;
    var Ahi3007 = n2970;
    var B1lo3008 = n2970;
    copying_mergesort2973(Amid13005, B1lo3008, n_by_2_plus_2972);
    if (M0.zero_p(n_by_2_2971) !== false) {
        var if_res1734 = M0.rvoid();
    } else {
        var if_res1734 = copying_mergesort2973(Alo3004, Amid23006, n_by_2_2971);
    }
    if_res1734;
    var b23009 = Ahi3007;
    var loop3010 = function(a13011, b13012, c13013) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var x3014 = M1.unsafe_vector_ref(A2968, a13011);
        var y3015 = M1.unsafe_vector_ref(A2968, b13012);
        if (false !== false) {
            if (false !== false) {
                var if_res1735 = less_than_p2969(false(y3015), false(x3014));
            } else {
                var if_res1735 = less_than_p2969(y3015, x3014);
            }
            var if_res1737 = M0.not(if_res1735);
        } else {
            if (false !== false) {
                var if_res1736 = less_than_p2969(false(x3014), false(y3015));
            } else {
                var if_res1736 = less_than_p2969(x3014, y3015);
            }
            var if_res1737 = if_res1736;
        }
        if (if_res1737 !== false) {
            M1.unsafe_vector_set_bang_(A2968, c13013, x3014);
            var a13016 = M1.unsafe_fx_plus_(a13011, 1);
            var c13017 = M1.unsafe_fx_plus_(c13013, 1);
            if (M1.unsafe_fx_lt_(c13017, b13012) !== false) {
                var if_res1738 = loop3010(a13016, b13012, c13017);
            } else {
                var if_res1738 = M0.rvoid();
            }
            var if_res1741 = if_res1738;
        } else {
            M1.unsafe_vector_set_bang_(A2968, c13013, y3015);
            var b13018 = M1.unsafe_fx_plus_(b13012, 1);
            var c13019 = M1.unsafe_fx_plus_(c13013, 1);
            if (M1.unsafe_fx_lt__eq_(b23009, b13018) !== false) {
                var loop3020 = function(a13021, c13022) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(c13022, b13018) !== false) {
                        M1.unsafe_vector_set_bang_(A2968, c13022, M1.unsafe_vector_ref(A2968, a13021));
                        var if_res1739 = loop3020(M1.unsafe_fx_plus_(a13021, 1), M1.unsafe_fx_plus_(c13022, 1));
                    } else {
                        var if_res1739 = M0.rvoid();
                    }
                    return if_res1739;
                };
                var if_res1740 = loop3020(a13011, c13019);
            } else {
                var if_res1740 = loop3010(a13011, b13018, c13019);
            }
            var if_res1741 = if_res1740;
        }
        return if_res1741;
    };
    return loop3010(B1lo3008, Amid23006, Alo3004);
};
var generic_sort_by_key3023 = function(A3024, less_than_p3025, n3026, key3027) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_by_2_3028 = M1.unsafe_fxrshift(n3026, 1);
    var n_by_2_plus_3029 = M1.unsafe_fx_(n3026, n_by_2_3028);
    var copying_mergesort3030 = function(Alo3031, Blo3032, n3033) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.unsafe_fx_eq_(n3033, 1) !== false) {
            var if_res1757 = M1.unsafe_vector_set_bang_(A3024, Blo3032, M1.unsafe_vector_ref(A3024, Alo3031));
        } else {
            if (M1.unsafe_fx_eq_(n3033, 2) !== false) {
                var x3034 = M1.unsafe_vector_ref(A3024, Alo3031);
                var y3035 = M1.unsafe_vector_ref(A3024, M1.unsafe_fx_plus_(Alo3031, 1));
                if (key3027 !== false) {
                    var if_res1742 = less_than_p3025(key3027(y3035), key3027(x3034));
                } else {
                    var if_res1742 = less_than_p3025(y3035, x3034);
                }
                if (if_res1742 !== false) {
                    M1.unsafe_vector_set_bang_(A3024, Blo3032, y3035);
                    var if_res1743 = M1.unsafe_vector_set_bang_(A3024, M1.unsafe_fx_plus_(Blo3032, 1), x3034);
                } else {
                    M1.unsafe_vector_set_bang_(A3024, Blo3032, x3034);
                    var if_res1743 = M1.unsafe_vector_set_bang_(A3024, M1.unsafe_fx_plus_(Blo3032, 1), y3035);
                }
                var if_res1756 = if_res1743;
            } else {
                if (M1.unsafe_fx_lt_(n3033, 16) !== false) {
                    M1.unsafe_vector_set_bang_(A3024, Blo3032, M1.unsafe_vector_ref(A3024, Alo3031));
                    var iloop3036 = function(i3037) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (M1.unsafe_fx_lt_(i3037, n3033) !== false) {
                            var ref_i3038 = M1.unsafe_vector_ref(A3024, M1.unsafe_fx_plus_(Alo3031, i3037));
                            var jloop3039 = function(j3040) {
                                if (arguments.length !== 1) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var ref_j_13041 = M1.unsafe_vector_ref(A3024, M1.unsafe_fx_(j3040, 1));
                                if (M1.unsafe_fx_lt_(Blo3032, j3040) !== false) {
                                    if (key3027 !== false) {
                                        var if_res1744 = less_than_p3025(key3027(ref_i3038), key3027(ref_j_13041));
                                    } else {
                                        var if_res1744 = less_than_p3025(ref_i3038, ref_j_13041);
                                    }
                                    var if_res1745 = if_res1744;
                                } else {
                                    var if_res1745 = false;
                                }
                                if (if_res1745 !== false) {
                                    M1.unsafe_vector_set_bang_(A3024, j3040, ref_j_13041);
                                    var if_res1746 = jloop3039(M1.unsafe_fx_(j3040, 1));
                                } else {
                                    M1.unsafe_vector_set_bang_(A3024, j3040, ref_i3038);
                                    var if_res1746 = iloop3036(M1.unsafe_fx_plus_(i3037, 1));
                                }
                                return if_res1746;
                            };
                            var if_res1747 = jloop3039(M1.unsafe_fx_plus_(Blo3032, i3037));
                        } else {
                            var if_res1747 = M0.rvoid();
                        }
                        return if_res1747;
                    };
                    var if_res1755 = iloop3036(1);
                } else {
                    var n_by_2_3042 = M1.unsafe_fxrshift(n3033, 1);
                    var n_by_2_plus_3043 = M1.unsafe_fx_(n3033, n_by_2_3042);
                    var Amid13044 = M1.unsafe_fx_plus_(Alo3031, n_by_2_3042);
                    var Amid23045 = M1.unsafe_fx_plus_(Alo3031, n_by_2_plus_3043);
                    var Bmid13046 = M1.unsafe_fx_plus_(Blo3032, n_by_2_3042);
                    copying_mergesort3030(Amid13044, Bmid13046, n_by_2_plus_3043);
                    copying_mergesort3030(Alo3031, Amid23045, n_by_2_3042);
                    var b23047 = M1.unsafe_fx_plus_(Blo3032, n3033);
                    var loop3048 = function(a13049, b13050, c13051) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var x3052 = M1.unsafe_vector_ref(A3024, a13049);
                        var y3053 = M1.unsafe_vector_ref(A3024, b13050);
                        if (true !== false) {
                            if (key3027 !== false) {
                                var if_res1748 = less_than_p3025(key3027(y3053), key3027(x3052));
                            } else {
                                var if_res1748 = less_than_p3025(y3053, x3052);
                            }
                            var if_res1750 = M0.not(if_res1748);
                        } else {
                            if (key3027 !== false) {
                                var if_res1749 = less_than_p3025(key3027(x3052), key3027(y3053));
                            } else {
                                var if_res1749 = less_than_p3025(x3052, y3053);
                            }
                            var if_res1750 = if_res1749;
                        }
                        if (if_res1750 !== false) {
                            M1.unsafe_vector_set_bang_(A3024, c13051, x3052);
                            var a13054 = M1.unsafe_fx_plus_(a13049, 1);
                            var c13055 = M1.unsafe_fx_plus_(c13051, 1);
                            if (M1.unsafe_fx_lt_(c13055, b13050) !== false) {
                                var if_res1751 = loop3048(a13054, b13050, c13055);
                            } else {
                                var if_res1751 = M0.rvoid();
                            }
                            var if_res1754 = if_res1751;
                        } else {
                            M1.unsafe_vector_set_bang_(A3024, c13051, y3053);
                            var b13056 = M1.unsafe_fx_plus_(b13050, 1);
                            var c13057 = M1.unsafe_fx_plus_(c13051, 1);
                            if (M1.unsafe_fx_lt__eq_(b23047, b13056) !== false) {
                                var loop3058 = function(a13059, c13060) {
                                    if (arguments.length !== 2) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    if (M1.unsafe_fx_lt_(c13060, b13056) !== false) {
                                        M1.unsafe_vector_set_bang_(A3024, c13060, M1.unsafe_vector_ref(A3024, a13059));
                                        var if_res1752 = loop3058(M1.unsafe_fx_plus_(a13059, 1), M1.unsafe_fx_plus_(c13060, 1));
                                    } else {
                                        var if_res1752 = M0.rvoid();
                                    }
                                    return if_res1752;
                                };
                                var if_res1753 = loop3058(a13049, c13057);
                            } else {
                                var if_res1753 = loop3048(a13049, b13056, c13057);
                            }
                            var if_res1754 = if_res1753;
                        }
                        return if_res1754;
                    };
                    var if_res1755 = loop3048(Amid23045, Bmid13046, Blo3032);
                }
                var if_res1756 = if_res1755;
            }
            var if_res1757 = if_res1756;
        }
        return if_res1757;
    };
    var Alo3061 = 0;
    var Amid13062 = n_by_2_3028;
    var Amid23063 = n_by_2_plus_3029;
    var Ahi3064 = n3026;
    var B1lo3065 = n3026;
    copying_mergesort3030(Amid13062, B1lo3065, n_by_2_plus_3029);
    if (M0.zero_p(n_by_2_3028) !== false) {
        var if_res1758 = M0.rvoid();
    } else {
        var if_res1758 = copying_mergesort3030(Alo3061, Amid23063, n_by_2_3028);
    }
    if_res1758;
    var b23066 = Ahi3064;
    var loop3067 = function(a13068, b13069, c13070) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var x3071 = M1.unsafe_vector_ref(A3024, a13068);
        var y3072 = M1.unsafe_vector_ref(A3024, b13069);
        if (false !== false) {
            if (key3027 !== false) {
                var if_res1759 = less_than_p3025(key3027(y3072), key3027(x3071));
            } else {
                var if_res1759 = less_than_p3025(y3072, x3071);
            }
            var if_res1761 = M0.not(if_res1759);
        } else {
            if (key3027 !== false) {
                var if_res1760 = less_than_p3025(key3027(x3071), key3027(y3072));
            } else {
                var if_res1760 = less_than_p3025(x3071, y3072);
            }
            var if_res1761 = if_res1760;
        }
        if (if_res1761 !== false) {
            M1.unsafe_vector_set_bang_(A3024, c13070, x3071);
            var a13073 = M1.unsafe_fx_plus_(a13068, 1);
            var c13074 = M1.unsafe_fx_plus_(c13070, 1);
            if (M1.unsafe_fx_lt_(c13074, b13069) !== false) {
                var if_res1762 = loop3067(a13073, b13069, c13074);
            } else {
                var if_res1762 = M0.rvoid();
            }
            var if_res1765 = if_res1762;
        } else {
            M1.unsafe_vector_set_bang_(A3024, c13070, y3072);
            var b13075 = M1.unsafe_fx_plus_(b13069, 1);
            var c13076 = M1.unsafe_fx_plus_(c13070, 1);
            if (M1.unsafe_fx_lt__eq_(b23066, b13075) !== false) {
                var loop3077 = function(a13078, c13079) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(c13079, b13075) !== false) {
                        M1.unsafe_vector_set_bang_(A3024, c13079, M1.unsafe_vector_ref(A3024, a13078));
                        var if_res1763 = loop3077(M1.unsafe_fx_plus_(a13078, 1), M1.unsafe_fx_plus_(c13079, 1));
                    } else {
                        var if_res1763 = M0.rvoid();
                    }
                    return if_res1763;
                };
                var if_res1764 = loop3077(a13068, c13076);
            } else {
                var if_res1764 = loop3067(a13068, b13075, c13076);
            }
            var if_res1765 = if_res1764;
        }
        return if_res1765;
    };
    return loop3067(B1lo3065, Amid23063, Alo3061);
};
var cl1873 = function(lst3080, less_than_p3081) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n3082 = M0.length(lst3080);
    if (M1.unsafe_fx_eq_(n3082, 0) !== false) {
        var if_res1897 = lst3080;
    } else {
        if (false !== false) {
            var vec3083 = M0.make_vector(n3082 + M0.ceiling(n3082 / 2));
            var loop3084 = function(i3085, lst3086) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M0.pair_p(lst3086) !== false) {
                    var x3087 = M0.car(lst3086);
                    M1.unsafe_vector_set_bang_(vec3083, i3085, M0.cons(false(x3087), x3087));
                    var if_res1877 = loop3084(M1.unsafe_fx_plus_(i3085, 1), M0.cdr(lst3086));
                } else {
                    var if_res1877 = M0.rvoid();
                }
                return if_res1877;
            };
            loop3084(0, lst3080);
            generic_sort_by_key3023(vec3083, less_than_p3081, n3082, M1.unsafe_car);
            var loop3088 = function(i3089, r3090) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var i3091 = M1.unsafe_fx_(i3089, 1);
                if (M1.unsafe_fx_lt_(i3091, 0) !== false) {
                    var if_res1878 = r3090;
                } else {
                    var if_res1878 = loop3088(i3091, M0.cons(M1.unsafe_cdr(M1.unsafe_vector_ref(vec3083, i3091)), r3090));
                }
                return if_res1878;
            };
            var if_res1896 = loop3088(n3082, $rjs_core.Pair.EMPTY);
        } else {
            var loop3092 = function(last3093, next3094) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var or_part3095 = M0.null_p(next3094);
                if (or_part3095 !== false) {
                    var if_res1881 = or_part3095;
                } else {
                    if (false !== false) {
                        var if_res1879 = less_than_p3081(false(M1.unsafe_car(next3094)), false(last3093));
                    } else {
                        var if_res1879 = less_than_p3081(M1.unsafe_car(next3094), last3093);
                    }
                    if (M0.not(if_res1879) !== false) {
                        var if_res1880 = loop3092(M1.unsafe_car(next3094), M1.unsafe_cdr(next3094));
                    } else {
                        var if_res1880 = false;
                    }
                    var if_res1881 = if_res1880;
                }
                return if_res1881;
            };
            if (loop3092(M0.car(lst3080), M0.cdr(lst3080)) !== false) {
                var if_res1895 = lst3080;
            } else {
                if (M1.unsafe_fx_lt__eq_(n3082, 3) !== false) {
                    if (M1.unsafe_fx_eq_(n3082, 1) !== false) {
                        var if_res1891 = lst3080;
                    } else {
                        if (M1.unsafe_fx_eq_(n3082, 2) !== false) {
                            var if_res1890 = M0.list(M0.cadr(lst3080), M0.car(lst3080));
                        } else {
                            var a3096 = M0.car(lst3080);
                            var b3097 = M0.cadr(lst3080);
                            var c3098 = M0.caddr(lst3080);
                            if (false !== false) {
                                var if_res1882 = less_than_p3081(false(b3097), false(a3096));
                            } else {
                                var if_res1882 = less_than_p3081(b3097, a3096);
                            }
                            if (if_res1882 !== false) {
                                if (false !== false) {
                                    var if_res1883 = less_than_p3081(false(c3098), false(b3097));
                                } else {
                                    var if_res1883 = less_than_p3081(c3098, b3097);
                                }
                                if (if_res1883 !== false) {
                                    var if_res1886 = M0.list(c3098, b3097, a3096);
                                } else {
                                    if (false !== false) {
                                        var if_res1884 = less_than_p3081(false(c3098), false(a3096));
                                    } else {
                                        var if_res1884 = less_than_p3081(c3098, a3096);
                                    }
                                    if (if_res1884 !== false) {
                                        var if_res1885 = M0.list(b3097, c3098, a3096);
                                    } else {
                                        var if_res1885 = M0.list(b3097, a3096, c3098);
                                    }
                                    var if_res1886 = if_res1885;
                                }
                                var if_res1889 = if_res1886;
                            } else {
                                if (false !== false) {
                                    var if_res1887 = less_than_p3081(false(c3098), false(a3096));
                                } else {
                                    var if_res1887 = less_than_p3081(c3098, a3096);
                                }
                                if (if_res1887 !== false) {
                                    var if_res1888 = M0.list(c3098, a3096, b3097);
                                } else {
                                    var if_res1888 = M0.list(a3096, c3098, b3097);
                                }
                                var if_res1889 = if_res1888;
                            }
                            var if_res1890 = if_res1889;
                        }
                        var if_res1891 = if_res1890;
                    }
                    var if_res1894 = if_res1891;
                } else {
                    var vec3099 = M0.make_vector(n3082 + M0.ceiling(n3082 / 2));
                    var loop3100 = function(i3101, lst3102) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (M0.pair_p(lst3102) !== false) {
                            M0.vector_set_bang_(vec3099, i3101, M0.car(lst3102));
                            var if_res1892 = loop3100(M0.add1(i3101), M0.cdr(lst3102));
                        } else {
                            var if_res1892 = M0.rvoid();
                        }
                        return if_res1892;
                    };
                    loop3100(0, lst3080);
                    generic_sort2967(vec3099, less_than_p3081, n3082);
                    var loop3103 = function(i3104, r3105) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var i3106 = M0.sub1(i3104);
                        if (M0.__lt_(i3106, 0) !== false) {
                            var if_res1893 = r3105;
                        } else {
                            var if_res1893 = loop3103(i3106, M0.cons(M0.vector_ref(vec3099, i3106), r3105));
                        }
                        return if_res1893;
                    };
                    var if_res1894 = loop3103(n3082, $rjs_core.Pair.EMPTY);
                }
                var if_res1895 = if_res1894;
            }
            var if_res1896 = if_res1895;
        }
        var if_res1897 = if_res1896;
    }
    return if_res1897;
};
var cl1874 = function(lst3107, less_than_p3108, getkey3109) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3109 !== false) {
        var if_res1898 = M0.not(M0.eq_p(M0.values, getkey3109));
    } else {
        var if_res1898 = false;
    }
    if (if_res1898 !== false) {
        var if_res1899 = sort(lst3107, less_than_p3108, getkey3109, false);
    } else {
        var if_res1899 = sort(lst3107, less_than_p3108);
    }
    return if_res1899;
};
var cl1875 = function(lst3110, less_than_p3111, getkey3112, cache_keys_p3113) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3112 !== false) {
        var if_res1900 = M0.not(M0.eq_p(M0.values, getkey3112));
    } else {
        var if_res1900 = false;
    }
    if (if_res1900 !== false) {
        var n3114 = M0.length(lst3110);
        if (M1.unsafe_fx_eq_(n3114, 0) !== false) {
            var if_res1921 = lst3110;
        } else {
            if (cache_keys_p3113 !== false) {
                var vec3115 = M0.make_vector(n3114 + M0.ceiling(n3114 / 2));
                var loop3116 = function(i3117, lst3118) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.pair_p(lst3118) !== false) {
                        var x3119 = M0.car(lst3118);
                        M1.unsafe_vector_set_bang_(vec3115, i3117, M0.cons(getkey3112(x3119), x3119));
                        var if_res1901 = loop3116(M1.unsafe_fx_plus_(i3117, 1), M0.cdr(lst3118));
                    } else {
                        var if_res1901 = M0.rvoid();
                    }
                    return if_res1901;
                };
                loop3116(0, lst3110);
                generic_sort_by_key3023(vec3115, less_than_p3111, n3114, M1.unsafe_car);
                var loop3120 = function(i3121, r3122) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var i3123 = M1.unsafe_fx_(i3121, 1);
                    if (M1.unsafe_fx_lt_(i3123, 0) !== false) {
                        var if_res1902 = r3122;
                    } else {
                        var if_res1902 = loop3120(i3123, M0.cons(M1.unsafe_cdr(M1.unsafe_vector_ref(vec3115, i3123)), r3122));
                    }
                    return if_res1902;
                };
                var if_res1920 = loop3120(n3114, $rjs_core.Pair.EMPTY);
            } else {
                var loop3124 = function(last3125, next3126) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var or_part3127 = M0.null_p(next3126);
                    if (or_part3127 !== false) {
                        var if_res1905 = or_part3127;
                    } else {
                        if (getkey3112 !== false) {
                            var if_res1903 = less_than_p3111(getkey3112(M1.unsafe_car(next3126)), getkey3112(last3125));
                        } else {
                            var if_res1903 = less_than_p3111(M1.unsafe_car(next3126), last3125);
                        }
                        if (M0.not(if_res1903) !== false) {
                            var if_res1904 = loop3124(M1.unsafe_car(next3126), M1.unsafe_cdr(next3126));
                        } else {
                            var if_res1904 = false;
                        }
                        var if_res1905 = if_res1904;
                    }
                    return if_res1905;
                };
                if (loop3124(M0.car(lst3110), M0.cdr(lst3110)) !== false) {
                    var if_res1919 = lst3110;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n3114, 3) !== false) {
                        if (M1.unsafe_fx_eq_(n3114, 1) !== false) {
                            var if_res1915 = lst3110;
                        } else {
                            if (M1.unsafe_fx_eq_(n3114, 2) !== false) {
                                var if_res1914 = M0.list(M0.cadr(lst3110), M0.car(lst3110));
                            } else {
                                var a3128 = M0.car(lst3110);
                                var b3129 = M0.cadr(lst3110);
                                var c3130 = M0.caddr(lst3110);
                                if (getkey3112 !== false) {
                                    var if_res1906 = less_than_p3111(getkey3112(b3129), getkey3112(a3128));
                                } else {
                                    var if_res1906 = less_than_p3111(b3129, a3128);
                                }
                                if (if_res1906 !== false) {
                                    if (getkey3112 !== false) {
                                        var if_res1907 = less_than_p3111(getkey3112(c3130), getkey3112(b3129));
                                    } else {
                                        var if_res1907 = less_than_p3111(c3130, b3129);
                                    }
                                    if (if_res1907 !== false) {
                                        var if_res1910 = M0.list(c3130, b3129, a3128);
                                    } else {
                                        if (getkey3112 !== false) {
                                            var if_res1908 = less_than_p3111(getkey3112(c3130), getkey3112(a3128));
                                        } else {
                                            var if_res1908 = less_than_p3111(c3130, a3128);
                                        }
                                        if (if_res1908 !== false) {
                                            var if_res1909 = M0.list(b3129, c3130, a3128);
                                        } else {
                                            var if_res1909 = M0.list(b3129, a3128, c3130);
                                        }
                                        var if_res1910 = if_res1909;
                                    }
                                    var if_res1913 = if_res1910;
                                } else {
                                    if (getkey3112 !== false) {
                                        var if_res1911 = less_than_p3111(getkey3112(c3130), getkey3112(a3128));
                                    } else {
                                        var if_res1911 = less_than_p3111(c3130, a3128);
                                    }
                                    if (if_res1911 !== false) {
                                        var if_res1912 = M0.list(c3130, a3128, b3129);
                                    } else {
                                        var if_res1912 = M0.list(a3128, c3130, b3129);
                                    }
                                    var if_res1913 = if_res1912;
                                }
                                var if_res1914 = if_res1913;
                            }
                            var if_res1915 = if_res1914;
                        }
                        var if_res1918 = if_res1915;
                    } else {
                        var vec3131 = M0.make_vector(n3114 + M0.ceiling(n3114 / 2));
                        var loop3132 = function(i3133, lst3134) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            if (M0.pair_p(lst3134) !== false) {
                                M0.vector_set_bang_(vec3131, i3133, M0.car(lst3134));
                                var if_res1916 = loop3132(M0.add1(i3133), M0.cdr(lst3134));
                            } else {
                                var if_res1916 = M0.rvoid();
                            }
                            return if_res1916;
                        };
                        loop3132(0, lst3110);
                        generic_sort_by_key3023(vec3131, less_than_p3111, n3114, getkey3112);
                        var loop3135 = function(i3136, r3137) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            var i3138 = M0.sub1(i3136);
                            if (M0.__lt_(i3138, 0) !== false) {
                                var if_res1917 = r3137;
                            } else {
                                var if_res1917 = loop3135(i3138, M0.cons(M0.vector_ref(vec3131, i3138), r3137));
                            }
                            return if_res1917;
                        };
                        var if_res1918 = loop3135(n3114, $rjs_core.Pair.EMPTY);
                    }
                    var if_res1919 = if_res1918;
                }
                var if_res1920 = if_res1919;
            }
            var if_res1921 = if_res1920;
        }
        var if_res1922 = if_res1921;
    } else {
        var if_res1922 = sort(lst3110, less_than_p3111);
    }
    return if_res1922;
};
var temp1923 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1876 = {
        '2': cl1873,
        '3': cl1874,
        '4': cl1875
    } [arguments.length];
    if (fixed_lam1876 !== undefined) {
        return fixed_lam1876.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var cl1819 = function(vec3139, less_than_p3140, start3141, end3142) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n3143 = end3142 - start3141;
    if (true !== false) {
        var if_res1822 = M0.make_vector(n3143);
    } else {
        var if_res1822 = vec3139;
    }
    var dst_vec3144 = if_res1822;
    if (true !== false) {
        var if_res1823 = 0;
    } else {
        var if_res1823 = start3141;
    }
    var dst_start3145 = if_res1823;
    if (M1.unsafe_fx_eq_(n3143, 0) !== false) {
        var if_res1844 = M0.rvoid();
    } else {
        if (false !== false) {
            var work_vec3146 = M0.make_vector(n3143 + M0.ceiling(n3143 / 2), true);
            var loop3147 = function(i3148) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3148, n3143) !== false) {
                    var x3149 = M1.unsafe_vector_ref(vec3139, M1.unsafe_fx_plus_(i3148, start3141));
                    M1.unsafe_vector_set_bang_(work_vec3146, i3148, M0.cons(false(x3149), x3149));
                    var if_res1824 = loop3147(M1.unsafe_fx_plus_(i3148, 1));
                } else {
                    var if_res1824 = M0.rvoid();
                }
                return if_res1824;
            };
            loop3147(0);
            generic_sort_by_key3023(work_vec3146, less_than_p3140, n3143, M1.unsafe_car);
            var loop3150 = function(i3151) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3151, n3143) !== false) {
                    M1.unsafe_vector_set_bang_(dst_vec3144, M1.unsafe_fx_plus_(i3151, dst_start3145), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3146, i3151)));
                    var if_res1825 = loop3150(M1.unsafe_fx_plus_(i3151, 1));
                } else {
                    var if_res1825 = M0.rvoid();
                }
                return if_res1825;
            };
            var if_res1843 = loop3150(0);
        } else {
            var loop3152 = function(prev_val3153, next_index3154) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var or_part3155 = M1.unsafe_fx_eq_(next_index3154, end3142);
                if (or_part3155 !== false) {
                    var if_res1828 = or_part3155;
                } else {
                    var next_val3156 = M1.unsafe_vector_ref(vec3139, next_index3154);
                    if (false !== false) {
                        var if_res1826 = less_than_p3140(false(next_val3156), false(prev_val3153));
                    } else {
                        var if_res1826 = less_than_p3140(next_val3156, prev_val3153);
                    }
                    if (M0.not(if_res1826) !== false) {
                        var if_res1827 = loop3152(next_val3156, M1.unsafe_fx_plus_(next_index3154, 1));
                    } else {
                        var if_res1827 = false;
                    }
                    var if_res1828 = if_res1827;
                }
                return if_res1828;
            };
            if (loop3152(M1.unsafe_vector_ref(vec3139, start3141), M1.unsafe_fx_plus_(start3141, 1)) !== false) {
                if (true !== false) {
                    var if_res1829 = M0.vector_copy_bang_(dst_vec3144, dst_start3145, vec3139, start3141, end3142);
                } else {
                    var if_res1829 = M0.rvoid();
                }
                var if_res1842 = if_res1829;
            } else {
                if (M1.unsafe_fx_lt__eq_(n3143, 3) !== false) {
                    if (true !== false) {
                        var if_res1830 = M0.vector_copy_bang_(dst_vec3144, dst_start3145, vec3139, start3141, end3142);
                    } else {
                        var if_res1830 = M0.rvoid();
                    }
                    if_res1830;
                    if (M1.unsafe_fx_eq_(n3143, 1) !== false) {
                        var if_res1840 = M0.rvoid();
                    } else {
                        if (M1.unsafe_fx_eq_(n3143, 2) !== false) {
                            var tmp3157 = M1.unsafe_vector_ref(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 0));
                            M1.unsafe_vector_set_bang_(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 0), M1.unsafe_vector_ref(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 1)));
                            var if_res1839 = M1.unsafe_vector_set_bang_(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 1), tmp3157);
                        } else {
                            var a3158 = M1.unsafe_vector_ref(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 0));
                            var b3159 = M1.unsafe_vector_ref(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 1));
                            var c3160 = M1.unsafe_vector_ref(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 2));
                            if (false !== false) {
                                var if_res1831 = less_than_p3140(false(b3159), false(a3158));
                            } else {
                                var if_res1831 = less_than_p3140(b3159, a3158);
                            }
                            if (if_res1831 !== false) {
                                if (false !== false) {
                                    var if_res1832 = less_than_p3140(false(c3160), false(b3159));
                                } else {
                                    var if_res1832 = less_than_p3140(c3160, b3159);
                                }
                                if (if_res1832 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 0), c3160);
                                    var if_res1835 = M1.unsafe_vector_set_bang_(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 2), a3158);
                                } else {
                                    if (false !== false) {
                                        var if_res1833 = less_than_p3140(false(c3160), false(a3158));
                                    } else {
                                        var if_res1833 = less_than_p3140(c3160, a3158);
                                    }
                                    if (if_res1833 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 0), b3159);
                                        M1.unsafe_vector_set_bang_(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 1), c3160);
                                        var if_res1834 = M1.unsafe_vector_set_bang_(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 2), a3158);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 0), b3159);
                                        var if_res1834 = M1.unsafe_vector_set_bang_(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 1), a3158);
                                    }
                                    var if_res1835 = if_res1834;
                                }
                                var if_res1838 = if_res1835;
                            } else {
                                if (false !== false) {
                                    var if_res1836 = less_than_p3140(false(c3160), false(a3158));
                                } else {
                                    var if_res1836 = less_than_p3140(c3160, a3158);
                                }
                                if (if_res1836 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 0), c3160);
                                    M1.unsafe_vector_set_bang_(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 1), a3158);
                                    var if_res1837 = M1.unsafe_vector_set_bang_(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 2), b3159);
                                } else {
                                    M1.unsafe_vector_set_bang_(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 1), c3160);
                                    var if_res1837 = M1.unsafe_vector_set_bang_(dst_vec3144, M1.unsafe_fx_plus_(dst_start3145, 2), b3159);
                                }
                                var if_res1838 = if_res1837;
                            }
                            var if_res1839 = if_res1838;
                        }
                        var if_res1840 = if_res1839;
                    }
                    var if_res1841 = if_res1840;
                } else {
                    var work_vec3161 = M0.make_vector(n3143 + M0.ceiling(n3143 / 2), false);
                    M0.vector_copy_bang_(work_vec3161, 0, vec3139, start3141, end3142);
                    generic_sort2967(work_vec3161, less_than_p3140, n3143);
                    var if_res1841 = M0.vector_copy_bang_(dst_vec3144, dst_start3145, work_vec3161, 0, n3143);
                }
                var if_res1842 = if_res1841;
            }
            var if_res1843 = if_res1842;
        }
        var if_res1844 = if_res1843;
    }
    if_res1844;
    if (true !== false) {
        var if_res1845 = dst_vec3144;
    } else {
        var if_res1845 = M0.rvoid();
    }
    return if_res1845;
};
var cl1820 = function(vec3162, less_than_p3163, start3164, end3165, getkey3166, cache_keys_p3167) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3166 !== false) {
        var if_res1846 = M0.not(M0.eq_p(M0.values, getkey3166));
    } else {
        var if_res1846 = false;
    }
    if (if_res1846 !== false) {
        var n3168 = end3165 - start3164;
        if (true !== false) {
            var if_res1847 = M0.make_vector(n3168);
        } else {
            var if_res1847 = vec3162;
        }
        var dst_vec3169 = if_res1847;
        if (true !== false) {
            var if_res1848 = 0;
        } else {
            var if_res1848 = start3164;
        }
        var dst_start3170 = if_res1848;
        if (M1.unsafe_fx_eq_(n3168, 0) !== false) {
            var if_res1869 = M0.rvoid();
        } else {
            if (cache_keys_p3167 !== false) {
                var work_vec3171 = M0.make_vector(n3168 + M0.ceiling(n3168 / 2), true);
                var loop3172 = function(i3173) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3173, n3168) !== false) {
                        var x3174 = M1.unsafe_vector_ref(vec3162, M1.unsafe_fx_plus_(i3173, start3164));
                        M1.unsafe_vector_set_bang_(work_vec3171, i3173, M0.cons(getkey3166(x3174), x3174));
                        var if_res1849 = loop3172(M1.unsafe_fx_plus_(i3173, 1));
                    } else {
                        var if_res1849 = M0.rvoid();
                    }
                    return if_res1849;
                };
                loop3172(0);
                generic_sort_by_key3023(work_vec3171, less_than_p3163, n3168, M1.unsafe_car);
                var loop3175 = function(i3176) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3176, n3168) !== false) {
                        M1.unsafe_vector_set_bang_(dst_vec3169, M1.unsafe_fx_plus_(i3176, dst_start3170), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3171, i3176)));
                        var if_res1850 = loop3175(M1.unsafe_fx_plus_(i3176, 1));
                    } else {
                        var if_res1850 = M0.rvoid();
                    }
                    return if_res1850;
                };
                var if_res1868 = loop3175(0);
            } else {
                var loop3177 = function(prev_val3178, next_index3179) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var or_part3180 = M1.unsafe_fx_eq_(next_index3179, end3165);
                    if (or_part3180 !== false) {
                        var if_res1853 = or_part3180;
                    } else {
                        var next_val3181 = M1.unsafe_vector_ref(vec3162, next_index3179);
                        if (getkey3166 !== false) {
                            var if_res1851 = less_than_p3163(getkey3166(next_val3181), getkey3166(prev_val3178));
                        } else {
                            var if_res1851 = less_than_p3163(next_val3181, prev_val3178);
                        }
                        if (M0.not(if_res1851) !== false) {
                            var if_res1852 = loop3177(next_val3181, M1.unsafe_fx_plus_(next_index3179, 1));
                        } else {
                            var if_res1852 = false;
                        }
                        var if_res1853 = if_res1852;
                    }
                    return if_res1853;
                };
                if (loop3177(M1.unsafe_vector_ref(vec3162, start3164), M1.unsafe_fx_plus_(start3164, 1)) !== false) {
                    if (true !== false) {
                        var if_res1854 = M0.vector_copy_bang_(dst_vec3169, dst_start3170, vec3162, start3164, end3165);
                    } else {
                        var if_res1854 = M0.rvoid();
                    }
                    var if_res1867 = if_res1854;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n3168, 3) !== false) {
                        if (true !== false) {
                            var if_res1855 = M0.vector_copy_bang_(dst_vec3169, dst_start3170, vec3162, start3164, end3165);
                        } else {
                            var if_res1855 = M0.rvoid();
                        }
                        if_res1855;
                        if (M1.unsafe_fx_eq_(n3168, 1) !== false) {
                            var if_res1865 = M0.rvoid();
                        } else {
                            if (M1.unsafe_fx_eq_(n3168, 2) !== false) {
                                var tmp3182 = M1.unsafe_vector_ref(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 0));
                                M1.unsafe_vector_set_bang_(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 0), M1.unsafe_vector_ref(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 1)));
                                var if_res1864 = M1.unsafe_vector_set_bang_(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 1), tmp3182);
                            } else {
                                var a3183 = M1.unsafe_vector_ref(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 0));
                                var b3184 = M1.unsafe_vector_ref(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 1));
                                var c3185 = M1.unsafe_vector_ref(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 2));
                                if (getkey3166 !== false) {
                                    var if_res1856 = less_than_p3163(getkey3166(b3184), getkey3166(a3183));
                                } else {
                                    var if_res1856 = less_than_p3163(b3184, a3183);
                                }
                                if (if_res1856 !== false) {
                                    if (getkey3166 !== false) {
                                        var if_res1857 = less_than_p3163(getkey3166(c3185), getkey3166(b3184));
                                    } else {
                                        var if_res1857 = less_than_p3163(c3185, b3184);
                                    }
                                    if (if_res1857 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 0), c3185);
                                        var if_res1860 = M1.unsafe_vector_set_bang_(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 2), a3183);
                                    } else {
                                        if (getkey3166 !== false) {
                                            var if_res1858 = less_than_p3163(getkey3166(c3185), getkey3166(a3183));
                                        } else {
                                            var if_res1858 = less_than_p3163(c3185, a3183);
                                        }
                                        if (if_res1858 !== false) {
                                            M1.unsafe_vector_set_bang_(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 0), b3184);
                                            M1.unsafe_vector_set_bang_(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 1), c3185);
                                            var if_res1859 = M1.unsafe_vector_set_bang_(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 2), a3183);
                                        } else {
                                            M1.unsafe_vector_set_bang_(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 0), b3184);
                                            var if_res1859 = M1.unsafe_vector_set_bang_(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 1), a3183);
                                        }
                                        var if_res1860 = if_res1859;
                                    }
                                    var if_res1863 = if_res1860;
                                } else {
                                    if (getkey3166 !== false) {
                                        var if_res1861 = less_than_p3163(getkey3166(c3185), getkey3166(a3183));
                                    } else {
                                        var if_res1861 = less_than_p3163(c3185, a3183);
                                    }
                                    if (if_res1861 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 0), c3185);
                                        M1.unsafe_vector_set_bang_(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 1), a3183);
                                        var if_res1862 = M1.unsafe_vector_set_bang_(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 2), b3184);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 1), c3185);
                                        var if_res1862 = M1.unsafe_vector_set_bang_(dst_vec3169, M1.unsafe_fx_plus_(dst_start3170, 2), b3184);
                                    }
                                    var if_res1863 = if_res1862;
                                }
                                var if_res1864 = if_res1863;
                            }
                            var if_res1865 = if_res1864;
                        }
                        var if_res1866 = if_res1865;
                    } else {
                        var work_vec3186 = M0.make_vector(n3168 + M0.ceiling(n3168 / 2), false);
                        M0.vector_copy_bang_(work_vec3186, 0, vec3162, start3164, end3165);
                        generic_sort_by_key3023(work_vec3186, less_than_p3163, n3168, getkey3166);
                        var if_res1866 = M0.vector_copy_bang_(dst_vec3169, dst_start3170, work_vec3186, 0, n3168);
                    }
                    var if_res1867 = if_res1866;
                }
                var if_res1868 = if_res1867;
            }
            var if_res1869 = if_res1868;
        }
        if_res1869;
        if (true !== false) {
            var if_res1870 = dst_vec3169;
        } else {
            var if_res1870 = M0.rvoid();
        }
        var if_res1871 = if_res1870;
    } else {
        var if_res1871 = vector_sort(vec3162, less_than_p3163, start3164, end3165);
    }
    return if_res1871;
};
var temp1872 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1821 = {
        '4': cl1819,
        '6': cl1820
    } [arguments.length];
    if (fixed_lam1821 !== undefined) {
        return fixed_lam1821.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 6]);
var cl1766 = function(vec3187, less_than_p3188, start3189, end3190) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n3191 = end3190 - start3189;
    if (false !== false) {
        var if_res1769 = M0.make_vector(n3191);
    } else {
        var if_res1769 = vec3187;
    }
    var dst_vec3192 = if_res1769;
    if (false !== false) {
        var if_res1770 = 0;
    } else {
        var if_res1770 = start3189;
    }
    var dst_start3193 = if_res1770;
    if (M1.unsafe_fx_eq_(n3191, 0) !== false) {
        var if_res1791 = M0.rvoid();
    } else {
        if (false !== false) {
            var work_vec3194 = M0.make_vector(n3191 + M0.ceiling(n3191 / 2), true);
            var loop3195 = function(i3196) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3196, n3191) !== false) {
                    var x3197 = M1.unsafe_vector_ref(vec3187, M1.unsafe_fx_plus_(i3196, start3189));
                    M1.unsafe_vector_set_bang_(work_vec3194, i3196, M0.cons(false(x3197), x3197));
                    var if_res1771 = loop3195(M1.unsafe_fx_plus_(i3196, 1));
                } else {
                    var if_res1771 = M0.rvoid();
                }
                return if_res1771;
            };
            loop3195(0);
            generic_sort_by_key3023(work_vec3194, less_than_p3188, n3191, M1.unsafe_car);
            var loop3198 = function(i3199) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3199, n3191) !== false) {
                    M1.unsafe_vector_set_bang_(dst_vec3192, M1.unsafe_fx_plus_(i3199, dst_start3193), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3194, i3199)));
                    var if_res1772 = loop3198(M1.unsafe_fx_plus_(i3199, 1));
                } else {
                    var if_res1772 = M0.rvoid();
                }
                return if_res1772;
            };
            var if_res1790 = loop3198(0);
        } else {
            var loop3200 = function(prev_val3201, next_index3202) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var or_part3203 = M1.unsafe_fx_eq_(next_index3202, end3190);
                if (or_part3203 !== false) {
                    var if_res1775 = or_part3203;
                } else {
                    var next_val3204 = M1.unsafe_vector_ref(vec3187, next_index3202);
                    if (false !== false) {
                        var if_res1773 = less_than_p3188(false(next_val3204), false(prev_val3201));
                    } else {
                        var if_res1773 = less_than_p3188(next_val3204, prev_val3201);
                    }
                    if (M0.not(if_res1773) !== false) {
                        var if_res1774 = loop3200(next_val3204, M1.unsafe_fx_plus_(next_index3202, 1));
                    } else {
                        var if_res1774 = false;
                    }
                    var if_res1775 = if_res1774;
                }
                return if_res1775;
            };
            if (loop3200(M1.unsafe_vector_ref(vec3187, start3189), M1.unsafe_fx_plus_(start3189, 1)) !== false) {
                if (false !== false) {
                    var if_res1776 = M0.vector_copy_bang_(dst_vec3192, dst_start3193, vec3187, start3189, end3190);
                } else {
                    var if_res1776 = M0.rvoid();
                }
                var if_res1789 = if_res1776;
            } else {
                if (M1.unsafe_fx_lt__eq_(n3191, 3) !== false) {
                    if (false !== false) {
                        var if_res1777 = M0.vector_copy_bang_(dst_vec3192, dst_start3193, vec3187, start3189, end3190);
                    } else {
                        var if_res1777 = M0.rvoid();
                    }
                    if_res1777;
                    if (M1.unsafe_fx_eq_(n3191, 1) !== false) {
                        var if_res1787 = M0.rvoid();
                    } else {
                        if (M1.unsafe_fx_eq_(n3191, 2) !== false) {
                            var tmp3205 = M1.unsafe_vector_ref(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 0));
                            M1.unsafe_vector_set_bang_(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 0), M1.unsafe_vector_ref(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 1)));
                            var if_res1786 = M1.unsafe_vector_set_bang_(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 1), tmp3205);
                        } else {
                            var a3206 = M1.unsafe_vector_ref(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 0));
                            var b3207 = M1.unsafe_vector_ref(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 1));
                            var c3208 = M1.unsafe_vector_ref(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 2));
                            if (false !== false) {
                                var if_res1778 = less_than_p3188(false(b3207), false(a3206));
                            } else {
                                var if_res1778 = less_than_p3188(b3207, a3206);
                            }
                            if (if_res1778 !== false) {
                                if (false !== false) {
                                    var if_res1779 = less_than_p3188(false(c3208), false(b3207));
                                } else {
                                    var if_res1779 = less_than_p3188(c3208, b3207);
                                }
                                if (if_res1779 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 0), c3208);
                                    var if_res1782 = M1.unsafe_vector_set_bang_(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 2), a3206);
                                } else {
                                    if (false !== false) {
                                        var if_res1780 = less_than_p3188(false(c3208), false(a3206));
                                    } else {
                                        var if_res1780 = less_than_p3188(c3208, a3206);
                                    }
                                    if (if_res1780 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 0), b3207);
                                        M1.unsafe_vector_set_bang_(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 1), c3208);
                                        var if_res1781 = M1.unsafe_vector_set_bang_(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 2), a3206);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 0), b3207);
                                        var if_res1781 = M1.unsafe_vector_set_bang_(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 1), a3206);
                                    }
                                    var if_res1782 = if_res1781;
                                }
                                var if_res1785 = if_res1782;
                            } else {
                                if (false !== false) {
                                    var if_res1783 = less_than_p3188(false(c3208), false(a3206));
                                } else {
                                    var if_res1783 = less_than_p3188(c3208, a3206);
                                }
                                if (if_res1783 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 0), c3208);
                                    M1.unsafe_vector_set_bang_(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 1), a3206);
                                    var if_res1784 = M1.unsafe_vector_set_bang_(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 2), b3207);
                                } else {
                                    M1.unsafe_vector_set_bang_(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 1), c3208);
                                    var if_res1784 = M1.unsafe_vector_set_bang_(dst_vec3192, M1.unsafe_fx_plus_(dst_start3193, 2), b3207);
                                }
                                var if_res1785 = if_res1784;
                            }
                            var if_res1786 = if_res1785;
                        }
                        var if_res1787 = if_res1786;
                    }
                    var if_res1788 = if_res1787;
                } else {
                    var work_vec3209 = M0.make_vector(n3191 + M0.ceiling(n3191 / 2), false);
                    M0.vector_copy_bang_(work_vec3209, 0, vec3187, start3189, end3190);
                    generic_sort2967(work_vec3209, less_than_p3188, n3191);
                    var if_res1788 = M0.vector_copy_bang_(dst_vec3192, dst_start3193, work_vec3209, 0, n3191);
                }
                var if_res1789 = if_res1788;
            }
            var if_res1790 = if_res1789;
        }
        var if_res1791 = if_res1790;
    }
    if_res1791;
    if (false !== false) {
        var if_res1792 = dst_vec3192;
    } else {
        var if_res1792 = M0.rvoid();
    }
    return if_res1792;
};
var cl1767 = function(vec3210, less_than_p3211, start3212, end3213, getkey3214, cache_keys_p3215) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3214 !== false) {
        var if_res1793 = M0.not(M0.eq_p(M0.values, getkey3214));
    } else {
        var if_res1793 = false;
    }
    if (if_res1793 !== false) {
        var n3216 = end3213 - start3212;
        if (false !== false) {
            var if_res1794 = M0.make_vector(n3216);
        } else {
            var if_res1794 = vec3210;
        }
        var dst_vec3217 = if_res1794;
        if (false !== false) {
            var if_res1795 = 0;
        } else {
            var if_res1795 = start3212;
        }
        var dst_start3218 = if_res1795;
        if (M1.unsafe_fx_eq_(n3216, 0) !== false) {
            var if_res1816 = M0.rvoid();
        } else {
            if (cache_keys_p3215 !== false) {
                var work_vec3219 = M0.make_vector(n3216 + M0.ceiling(n3216 / 2), true);
                var loop3220 = function(i3221) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3221, n3216) !== false) {
                        var x3222 = M1.unsafe_vector_ref(vec3210, M1.unsafe_fx_plus_(i3221, start3212));
                        M1.unsafe_vector_set_bang_(work_vec3219, i3221, M0.cons(getkey3214(x3222), x3222));
                        var if_res1796 = loop3220(M1.unsafe_fx_plus_(i3221, 1));
                    } else {
                        var if_res1796 = M0.rvoid();
                    }
                    return if_res1796;
                };
                loop3220(0);
                generic_sort_by_key3023(work_vec3219, less_than_p3211, n3216, M1.unsafe_car);
                var loop3223 = function(i3224) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3224, n3216) !== false) {
                        M1.unsafe_vector_set_bang_(dst_vec3217, M1.unsafe_fx_plus_(i3224, dst_start3218), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3219, i3224)));
                        var if_res1797 = loop3223(M1.unsafe_fx_plus_(i3224, 1));
                    } else {
                        var if_res1797 = M0.rvoid();
                    }
                    return if_res1797;
                };
                var if_res1815 = loop3223(0);
            } else {
                var loop3225 = function(prev_val3226, next_index3227) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var or_part3228 = M1.unsafe_fx_eq_(next_index3227, end3213);
                    if (or_part3228 !== false) {
                        var if_res1800 = or_part3228;
                    } else {
                        var next_val3229 = M1.unsafe_vector_ref(vec3210, next_index3227);
                        if (getkey3214 !== false) {
                            var if_res1798 = less_than_p3211(getkey3214(next_val3229), getkey3214(prev_val3226));
                        } else {
                            var if_res1798 = less_than_p3211(next_val3229, prev_val3226);
                        }
                        if (M0.not(if_res1798) !== false) {
                            var if_res1799 = loop3225(next_val3229, M1.unsafe_fx_plus_(next_index3227, 1));
                        } else {
                            var if_res1799 = false;
                        }
                        var if_res1800 = if_res1799;
                    }
                    return if_res1800;
                };
                if (loop3225(M1.unsafe_vector_ref(vec3210, start3212), M1.unsafe_fx_plus_(start3212, 1)) !== false) {
                    if (false !== false) {
                        var if_res1801 = M0.vector_copy_bang_(dst_vec3217, dst_start3218, vec3210, start3212, end3213);
                    } else {
                        var if_res1801 = M0.rvoid();
                    }
                    var if_res1814 = if_res1801;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n3216, 3) !== false) {
                        if (false !== false) {
                            var if_res1802 = M0.vector_copy_bang_(dst_vec3217, dst_start3218, vec3210, start3212, end3213);
                        } else {
                            var if_res1802 = M0.rvoid();
                        }
                        if_res1802;
                        if (M1.unsafe_fx_eq_(n3216, 1) !== false) {
                            var if_res1812 = M0.rvoid();
                        } else {
                            if (M1.unsafe_fx_eq_(n3216, 2) !== false) {
                                var tmp3230 = M1.unsafe_vector_ref(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 0));
                                M1.unsafe_vector_set_bang_(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 0), M1.unsafe_vector_ref(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 1)));
                                var if_res1811 = M1.unsafe_vector_set_bang_(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 1), tmp3230);
                            } else {
                                var a3231 = M1.unsafe_vector_ref(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 0));
                                var b3232 = M1.unsafe_vector_ref(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 1));
                                var c3233 = M1.unsafe_vector_ref(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 2));
                                if (getkey3214 !== false) {
                                    var if_res1803 = less_than_p3211(getkey3214(b3232), getkey3214(a3231));
                                } else {
                                    var if_res1803 = less_than_p3211(b3232, a3231);
                                }
                                if (if_res1803 !== false) {
                                    if (getkey3214 !== false) {
                                        var if_res1804 = less_than_p3211(getkey3214(c3233), getkey3214(b3232));
                                    } else {
                                        var if_res1804 = less_than_p3211(c3233, b3232);
                                    }
                                    if (if_res1804 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 0), c3233);
                                        var if_res1807 = M1.unsafe_vector_set_bang_(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 2), a3231);
                                    } else {
                                        if (getkey3214 !== false) {
                                            var if_res1805 = less_than_p3211(getkey3214(c3233), getkey3214(a3231));
                                        } else {
                                            var if_res1805 = less_than_p3211(c3233, a3231);
                                        }
                                        if (if_res1805 !== false) {
                                            M1.unsafe_vector_set_bang_(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 0), b3232);
                                            M1.unsafe_vector_set_bang_(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 1), c3233);
                                            var if_res1806 = M1.unsafe_vector_set_bang_(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 2), a3231);
                                        } else {
                                            M1.unsafe_vector_set_bang_(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 0), b3232);
                                            var if_res1806 = M1.unsafe_vector_set_bang_(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 1), a3231);
                                        }
                                        var if_res1807 = if_res1806;
                                    }
                                    var if_res1810 = if_res1807;
                                } else {
                                    if (getkey3214 !== false) {
                                        var if_res1808 = less_than_p3211(getkey3214(c3233), getkey3214(a3231));
                                    } else {
                                        var if_res1808 = less_than_p3211(c3233, a3231);
                                    }
                                    if (if_res1808 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 0), c3233);
                                        M1.unsafe_vector_set_bang_(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 1), a3231);
                                        var if_res1809 = M1.unsafe_vector_set_bang_(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 2), b3232);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 1), c3233);
                                        var if_res1809 = M1.unsafe_vector_set_bang_(dst_vec3217, M1.unsafe_fx_plus_(dst_start3218, 2), b3232);
                                    }
                                    var if_res1810 = if_res1809;
                                }
                                var if_res1811 = if_res1810;
                            }
                            var if_res1812 = if_res1811;
                        }
                        var if_res1813 = if_res1812;
                    } else {
                        var work_vec3234 = M0.make_vector(n3216 + M0.ceiling(n3216 / 2), false);
                        M0.vector_copy_bang_(work_vec3234, 0, vec3210, start3212, end3213);
                        generic_sort_by_key3023(work_vec3234, less_than_p3211, n3216, getkey3214);
                        var if_res1813 = M0.vector_copy_bang_(dst_vec3217, dst_start3218, work_vec3234, 0, n3216);
                    }
                    var if_res1814 = if_res1813;
                }
                var if_res1815 = if_res1814;
            }
            var if_res1816 = if_res1815;
        }
        if_res1816;
        if (false !== false) {
            var if_res1817 = dst_vec3217;
        } else {
            var if_res1817 = M0.rvoid();
        }
        var if_res1818 = if_res1817;
    } else {
        var if_res1818 = vector_sort_bang_(vec3210, less_than_p3211, start3212, end3213);
    }
    return if_res1818;
};
var let_result1924 = M0.values(temp1923, temp1872, $rjs_core.attachProcedureArity(function() {
    var fixed_lam1768 = {
        '4': cl1766,
        '6': cl1767
    } [arguments.length];
    if (fixed_lam1768 !== undefined) {
        return fixed_lam1768.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 6]));
var sort = let_result1924.getAt(0);
var vector_sort = let_result1924.getAt(1);
var vector_sort_bang_ = let_result1924.getAt(2);
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    vector_sort_bang_,
    vector_sort,
    sort
};