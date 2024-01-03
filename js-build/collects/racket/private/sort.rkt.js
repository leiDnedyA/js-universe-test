import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/unsafe.rkt.js";
var generic_sort3335 = function(A3336, less_than_p3337, n3338) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_by_2_3339 = M1.unsafe_fxrshift(n3338, 1);
    var n_by_2_plus_3340 = M1.unsafe_fx_(n3338, n_by_2_3339);
    var copying_mergesort3341 = function(Alo3342, Blo3343, n3344) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.unsafe_fx_eq_(n3344, 1) !== false) {
            var if_res1819 = M1.unsafe_vector_set_bang_(A3336, Blo3343, M1.unsafe_vector_ref(A3336, Alo3342));
        } else {
            if (M1.unsafe_fx_eq_(n3344, 2) !== false) {
                var x3345 = M1.unsafe_vector_ref(A3336, Alo3342);
                var y3346 = M1.unsafe_vector_ref(A3336, M1.unsafe_fx_plus_(Alo3342, 1));
                if (false !== false) {
                    var if_res1804 = less_than_p3337(false(y3346), false(x3345));
                } else {
                    var if_res1804 = less_than_p3337(y3346, x3345);
                }
                if (if_res1804 !== false) {
                    M1.unsafe_vector_set_bang_(A3336, Blo3343, y3346);
                    var if_res1805 = M1.unsafe_vector_set_bang_(A3336, M1.unsafe_fx_plus_(Blo3343, 1), x3345);
                } else {
                    M1.unsafe_vector_set_bang_(A3336, Blo3343, x3345);
                    var if_res1805 = M1.unsafe_vector_set_bang_(A3336, M1.unsafe_fx_plus_(Blo3343, 1), y3346);
                }
                var if_res1818 = if_res1805;
            } else {
                if (M1.unsafe_fx_lt_(n3344, 16) !== false) {
                    M1.unsafe_vector_set_bang_(A3336, Blo3343, M1.unsafe_vector_ref(A3336, Alo3342));
                    var iloop3347 = function(i3348) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (M1.unsafe_fx_lt_(i3348, n3344) !== false) {
                            var ref_i3349 = M1.unsafe_vector_ref(A3336, M1.unsafe_fx_plus_(Alo3342, i3348));
                            var jloop3350 = function(j3351) {
                                if (arguments.length !== 1) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var ref_j_13352 = M1.unsafe_vector_ref(A3336, M1.unsafe_fx_(j3351, 1));
                                if (M1.unsafe_fx_lt_(Blo3343, j3351) !== false) {
                                    if (false !== false) {
                                        var if_res1806 = less_than_p3337(false(ref_i3349), false(ref_j_13352));
                                    } else {
                                        var if_res1806 = less_than_p3337(ref_i3349, ref_j_13352);
                                    }
                                    var if_res1807 = if_res1806;
                                } else {
                                    var if_res1807 = false;
                                }
                                if (if_res1807 !== false) {
                                    M1.unsafe_vector_set_bang_(A3336, j3351, ref_j_13352);
                                    var if_res1808 = jloop3350(M1.unsafe_fx_(j3351, 1));
                                } else {
                                    M1.unsafe_vector_set_bang_(A3336, j3351, ref_i3349);
                                    var if_res1808 = iloop3347(M1.unsafe_fx_plus_(i3348, 1));
                                }
                                return if_res1808;
                            };
                            var if_res1809 = jloop3350(M1.unsafe_fx_plus_(Blo3343, i3348));
                        } else {
                            var if_res1809 = M0.rvoid();
                        }
                        return if_res1809;
                    };
                    var if_res1817 = iloop3347(1);
                } else {
                    var n_by_2_3353 = M1.unsafe_fxrshift(n3344, 1);
                    var n_by_2_plus_3354 = M1.unsafe_fx_(n3344, n_by_2_3353);
                    var Amid13355 = M1.unsafe_fx_plus_(Alo3342, n_by_2_3353);
                    var Amid23356 = M1.unsafe_fx_plus_(Alo3342, n_by_2_plus_3354);
                    var Bmid13357 = M1.unsafe_fx_plus_(Blo3343, n_by_2_3353);
                    copying_mergesort3341(Amid13355, Bmid13357, n_by_2_plus_3354);
                    copying_mergesort3341(Alo3342, Amid23356, n_by_2_3353);
                    var b23358 = M1.unsafe_fx_plus_(Blo3343, n3344);
                    var loop3359 = function(a13360, b13361, c13362) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var x3363 = M1.unsafe_vector_ref(A3336, a13360);
                        var y3364 = M1.unsafe_vector_ref(A3336, b13361);
                        if (true !== false) {
                            if (false !== false) {
                                var if_res1810 = less_than_p3337(false(y3364), false(x3363));
                            } else {
                                var if_res1810 = less_than_p3337(y3364, x3363);
                            }
                            var if_res1812 = M0.not(if_res1810);
                        } else {
                            if (false !== false) {
                                var if_res1811 = less_than_p3337(false(x3363), false(y3364));
                            } else {
                                var if_res1811 = less_than_p3337(x3363, y3364);
                            }
                            var if_res1812 = if_res1811;
                        }
                        if (if_res1812 !== false) {
                            M1.unsafe_vector_set_bang_(A3336, c13362, x3363);
                            var a13365 = M1.unsafe_fx_plus_(a13360, 1);
                            var c13366 = M1.unsafe_fx_plus_(c13362, 1);
                            if (M1.unsafe_fx_lt_(c13366, b13361) !== false) {
                                var if_res1813 = loop3359(a13365, b13361, c13366);
                            } else {
                                var if_res1813 = M0.rvoid();
                            }
                            var if_res1816 = if_res1813;
                        } else {
                            M1.unsafe_vector_set_bang_(A3336, c13362, y3364);
                            var b13367 = M1.unsafe_fx_plus_(b13361, 1);
                            var c13368 = M1.unsafe_fx_plus_(c13362, 1);
                            if (M1.unsafe_fx_lt__eq_(b23358, b13367) !== false) {
                                var loop3369 = function(a13370, c13371) {
                                    if (arguments.length !== 2) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    if (M1.unsafe_fx_lt_(c13371, b13367) !== false) {
                                        M1.unsafe_vector_set_bang_(A3336, c13371, M1.unsafe_vector_ref(A3336, a13370));
                                        var if_res1814 = loop3369(M1.unsafe_fx_plus_(a13370, 1), M1.unsafe_fx_plus_(c13371, 1));
                                    } else {
                                        var if_res1814 = M0.rvoid();
                                    }
                                    return if_res1814;
                                };
                                var if_res1815 = loop3369(a13360, c13368);
                            } else {
                                var if_res1815 = loop3359(a13360, b13367, c13368);
                            }
                            var if_res1816 = if_res1815;
                        }
                        return if_res1816;
                    };
                    var if_res1817 = loop3359(Amid23356, Bmid13357, Blo3343);
                }
                var if_res1818 = if_res1817;
            }
            var if_res1819 = if_res1818;
        }
        return if_res1819;
    };
    var Alo3372 = 0;
    var Amid13373 = n_by_2_3339;
    var Amid23374 = n_by_2_plus_3340;
    var Ahi3375 = n3338;
    var B1lo3376 = n3338;
    copying_mergesort3341(Amid13373, B1lo3376, n_by_2_plus_3340);
    if (M0.zero_p(n_by_2_3339) !== false) {
        var if_res1820 = M0.rvoid();
    } else {
        var if_res1820 = copying_mergesort3341(Alo3372, Amid23374, n_by_2_3339);
    }
    if_res1820;
    var b23377 = Ahi3375;
    var loop3378 = function(a13379, b13380, c13381) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var x3382 = M1.unsafe_vector_ref(A3336, a13379);
        var y3383 = M1.unsafe_vector_ref(A3336, b13380);
        if (false !== false) {
            if (false !== false) {
                var if_res1821 = less_than_p3337(false(y3383), false(x3382));
            } else {
                var if_res1821 = less_than_p3337(y3383, x3382);
            }
            var if_res1823 = M0.not(if_res1821);
        } else {
            if (false !== false) {
                var if_res1822 = less_than_p3337(false(x3382), false(y3383));
            } else {
                var if_res1822 = less_than_p3337(x3382, y3383);
            }
            var if_res1823 = if_res1822;
        }
        if (if_res1823 !== false) {
            M1.unsafe_vector_set_bang_(A3336, c13381, x3382);
            var a13384 = M1.unsafe_fx_plus_(a13379, 1);
            var c13385 = M1.unsafe_fx_plus_(c13381, 1);
            if (M1.unsafe_fx_lt_(c13385, b13380) !== false) {
                var if_res1824 = loop3378(a13384, b13380, c13385);
            } else {
                var if_res1824 = M0.rvoid();
            }
            var if_res1827 = if_res1824;
        } else {
            M1.unsafe_vector_set_bang_(A3336, c13381, y3383);
            var b13386 = M1.unsafe_fx_plus_(b13380, 1);
            var c13387 = M1.unsafe_fx_plus_(c13381, 1);
            if (M1.unsafe_fx_lt__eq_(b23377, b13386) !== false) {
                var loop3388 = function(a13389, c13390) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(c13390, b13386) !== false) {
                        M1.unsafe_vector_set_bang_(A3336, c13390, M1.unsafe_vector_ref(A3336, a13389));
                        var if_res1825 = loop3388(M1.unsafe_fx_plus_(a13389, 1), M1.unsafe_fx_plus_(c13390, 1));
                    } else {
                        var if_res1825 = M0.rvoid();
                    }
                    return if_res1825;
                };
                var if_res1826 = loop3388(a13379, c13387);
            } else {
                var if_res1826 = loop3378(a13379, b13386, c13387);
            }
            var if_res1827 = if_res1826;
        }
        return if_res1827;
    };
    return loop3378(B1lo3376, Amid23374, Alo3372);
};
var generic_sort_by_key3391 = function(A3392, less_than_p3393, n3394, key3395) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_by_2_3396 = M1.unsafe_fxrshift(n3394, 1);
    var n_by_2_plus_3397 = M1.unsafe_fx_(n3394, n_by_2_3396);
    var copying_mergesort3398 = function(Alo3399, Blo3400, n3401) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.unsafe_fx_eq_(n3401, 1) !== false) {
            var if_res1843 = M1.unsafe_vector_set_bang_(A3392, Blo3400, M1.unsafe_vector_ref(A3392, Alo3399));
        } else {
            if (M1.unsafe_fx_eq_(n3401, 2) !== false) {
                var x3402 = M1.unsafe_vector_ref(A3392, Alo3399);
                var y3403 = M1.unsafe_vector_ref(A3392, M1.unsafe_fx_plus_(Alo3399, 1));
                if (key3395 !== false) {
                    var if_res1828 = less_than_p3393(key3395(y3403), key3395(x3402));
                } else {
                    var if_res1828 = less_than_p3393(y3403, x3402);
                }
                if (if_res1828 !== false) {
                    M1.unsafe_vector_set_bang_(A3392, Blo3400, y3403);
                    var if_res1829 = M1.unsafe_vector_set_bang_(A3392, M1.unsafe_fx_plus_(Blo3400, 1), x3402);
                } else {
                    M1.unsafe_vector_set_bang_(A3392, Blo3400, x3402);
                    var if_res1829 = M1.unsafe_vector_set_bang_(A3392, M1.unsafe_fx_plus_(Blo3400, 1), y3403);
                }
                var if_res1842 = if_res1829;
            } else {
                if (M1.unsafe_fx_lt_(n3401, 16) !== false) {
                    M1.unsafe_vector_set_bang_(A3392, Blo3400, M1.unsafe_vector_ref(A3392, Alo3399));
                    var iloop3404 = function(i3405) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (M1.unsafe_fx_lt_(i3405, n3401) !== false) {
                            var ref_i3406 = M1.unsafe_vector_ref(A3392, M1.unsafe_fx_plus_(Alo3399, i3405));
                            var jloop3407 = function(j3408) {
                                if (arguments.length !== 1) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var ref_j_13409 = M1.unsafe_vector_ref(A3392, M1.unsafe_fx_(j3408, 1));
                                if (M1.unsafe_fx_lt_(Blo3400, j3408) !== false) {
                                    if (key3395 !== false) {
                                        var if_res1830 = less_than_p3393(key3395(ref_i3406), key3395(ref_j_13409));
                                    } else {
                                        var if_res1830 = less_than_p3393(ref_i3406, ref_j_13409);
                                    }
                                    var if_res1831 = if_res1830;
                                } else {
                                    var if_res1831 = false;
                                }
                                if (if_res1831 !== false) {
                                    M1.unsafe_vector_set_bang_(A3392, j3408, ref_j_13409);
                                    var if_res1832 = jloop3407(M1.unsafe_fx_(j3408, 1));
                                } else {
                                    M1.unsafe_vector_set_bang_(A3392, j3408, ref_i3406);
                                    var if_res1832 = iloop3404(M1.unsafe_fx_plus_(i3405, 1));
                                }
                                return if_res1832;
                            };
                            var if_res1833 = jloop3407(M1.unsafe_fx_plus_(Blo3400, i3405));
                        } else {
                            var if_res1833 = M0.rvoid();
                        }
                        return if_res1833;
                    };
                    var if_res1841 = iloop3404(1);
                } else {
                    var n_by_2_3410 = M1.unsafe_fxrshift(n3401, 1);
                    var n_by_2_plus_3411 = M1.unsafe_fx_(n3401, n_by_2_3410);
                    var Amid13412 = M1.unsafe_fx_plus_(Alo3399, n_by_2_3410);
                    var Amid23413 = M1.unsafe_fx_plus_(Alo3399, n_by_2_plus_3411);
                    var Bmid13414 = M1.unsafe_fx_plus_(Blo3400, n_by_2_3410);
                    copying_mergesort3398(Amid13412, Bmid13414, n_by_2_plus_3411);
                    copying_mergesort3398(Alo3399, Amid23413, n_by_2_3410);
                    var b23415 = M1.unsafe_fx_plus_(Blo3400, n3401);
                    var loop3416 = function(a13417, b13418, c13419) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var x3420 = M1.unsafe_vector_ref(A3392, a13417);
                        var y3421 = M1.unsafe_vector_ref(A3392, b13418);
                        if (true !== false) {
                            if (key3395 !== false) {
                                var if_res1834 = less_than_p3393(key3395(y3421), key3395(x3420));
                            } else {
                                var if_res1834 = less_than_p3393(y3421, x3420);
                            }
                            var if_res1836 = M0.not(if_res1834);
                        } else {
                            if (key3395 !== false) {
                                var if_res1835 = less_than_p3393(key3395(x3420), key3395(y3421));
                            } else {
                                var if_res1835 = less_than_p3393(x3420, y3421);
                            }
                            var if_res1836 = if_res1835;
                        }
                        if (if_res1836 !== false) {
                            M1.unsafe_vector_set_bang_(A3392, c13419, x3420);
                            var a13422 = M1.unsafe_fx_plus_(a13417, 1);
                            var c13423 = M1.unsafe_fx_plus_(c13419, 1);
                            if (M1.unsafe_fx_lt_(c13423, b13418) !== false) {
                                var if_res1837 = loop3416(a13422, b13418, c13423);
                            } else {
                                var if_res1837 = M0.rvoid();
                            }
                            var if_res1840 = if_res1837;
                        } else {
                            M1.unsafe_vector_set_bang_(A3392, c13419, y3421);
                            var b13424 = M1.unsafe_fx_plus_(b13418, 1);
                            var c13425 = M1.unsafe_fx_plus_(c13419, 1);
                            if (M1.unsafe_fx_lt__eq_(b23415, b13424) !== false) {
                                var loop3426 = function(a13427, c13428) {
                                    if (arguments.length !== 2) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    if (M1.unsafe_fx_lt_(c13428, b13424) !== false) {
                                        M1.unsafe_vector_set_bang_(A3392, c13428, M1.unsafe_vector_ref(A3392, a13427));
                                        var if_res1838 = loop3426(M1.unsafe_fx_plus_(a13427, 1), M1.unsafe_fx_plus_(c13428, 1));
                                    } else {
                                        var if_res1838 = M0.rvoid();
                                    }
                                    return if_res1838;
                                };
                                var if_res1839 = loop3426(a13417, c13425);
                            } else {
                                var if_res1839 = loop3416(a13417, b13424, c13425);
                            }
                            var if_res1840 = if_res1839;
                        }
                        return if_res1840;
                    };
                    var if_res1841 = loop3416(Amid23413, Bmid13414, Blo3400);
                }
                var if_res1842 = if_res1841;
            }
            var if_res1843 = if_res1842;
        }
        return if_res1843;
    };
    var Alo3429 = 0;
    var Amid13430 = n_by_2_3396;
    var Amid23431 = n_by_2_plus_3397;
    var Ahi3432 = n3394;
    var B1lo3433 = n3394;
    copying_mergesort3398(Amid13430, B1lo3433, n_by_2_plus_3397);
    if (M0.zero_p(n_by_2_3396) !== false) {
        var if_res1844 = M0.rvoid();
    } else {
        var if_res1844 = copying_mergesort3398(Alo3429, Amid23431, n_by_2_3396);
    }
    if_res1844;
    var b23434 = Ahi3432;
    var loop3435 = function(a13436, b13437, c13438) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var x3439 = M1.unsafe_vector_ref(A3392, a13436);
        var y3440 = M1.unsafe_vector_ref(A3392, b13437);
        if (false !== false) {
            if (key3395 !== false) {
                var if_res1845 = less_than_p3393(key3395(y3440), key3395(x3439));
            } else {
                var if_res1845 = less_than_p3393(y3440, x3439);
            }
            var if_res1847 = M0.not(if_res1845);
        } else {
            if (key3395 !== false) {
                var if_res1846 = less_than_p3393(key3395(x3439), key3395(y3440));
            } else {
                var if_res1846 = less_than_p3393(x3439, y3440);
            }
            var if_res1847 = if_res1846;
        }
        if (if_res1847 !== false) {
            M1.unsafe_vector_set_bang_(A3392, c13438, x3439);
            var a13441 = M1.unsafe_fx_plus_(a13436, 1);
            var c13442 = M1.unsafe_fx_plus_(c13438, 1);
            if (M1.unsafe_fx_lt_(c13442, b13437) !== false) {
                var if_res1848 = loop3435(a13441, b13437, c13442);
            } else {
                var if_res1848 = M0.rvoid();
            }
            var if_res1851 = if_res1848;
        } else {
            M1.unsafe_vector_set_bang_(A3392, c13438, y3440);
            var b13443 = M1.unsafe_fx_plus_(b13437, 1);
            var c13444 = M1.unsafe_fx_plus_(c13438, 1);
            if (M1.unsafe_fx_lt__eq_(b23434, b13443) !== false) {
                var loop3445 = function(a13446, c13447) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(c13447, b13443) !== false) {
                        M1.unsafe_vector_set_bang_(A3392, c13447, M1.unsafe_vector_ref(A3392, a13446));
                        var if_res1849 = loop3445(M1.unsafe_fx_plus_(a13446, 1), M1.unsafe_fx_plus_(c13447, 1));
                    } else {
                        var if_res1849 = M0.rvoid();
                    }
                    return if_res1849;
                };
                var if_res1850 = loop3445(a13436, c13444);
            } else {
                var if_res1850 = loop3435(a13436, b13443, c13444);
            }
            var if_res1851 = if_res1850;
        }
        return if_res1851;
    };
    return loop3435(B1lo3433, Amid23431, Alo3429);
};
var cl1959 = function(lst3448, less_than_p3449) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n3450 = M0.length(lst3448);
    if (M1.unsafe_fx_eq_(n3450, 0) !== false) {
        var if_res1983 = lst3448;
    } else {
        if (false !== false) {
            var vec3451 = M0.make_vector(n3450 + M0.ceiling(n3450 / 2));
            var loop3452 = function(i3453, lst3454) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M0.pair_p(lst3454) !== false) {
                    var x3455 = M0.car(lst3454);
                    M1.unsafe_vector_set_bang_(vec3451, i3453, M0.cons(false(x3455), x3455));
                    var if_res1963 = loop3452(M1.unsafe_fx_plus_(i3453, 1), M0.cdr(lst3454));
                } else {
                    var if_res1963 = M0.rvoid();
                }
                return if_res1963;
            };
            loop3452(0, lst3448);
            generic_sort_by_key3391(vec3451, less_than_p3449, n3450, M1.unsafe_car);
            var loop3456 = function(i3457, r3458) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var i3459 = M1.unsafe_fx_(i3457, 1);
                if (M1.unsafe_fx_lt_(i3459, 0) !== false) {
                    var if_res1964 = r3458;
                } else {
                    var if_res1964 = loop3456(i3459, M0.cons(M1.unsafe_cdr(M1.unsafe_vector_ref(vec3451, i3459)), r3458));
                }
                return if_res1964;
            };
            var if_res1982 = loop3456(n3450, $rjs_core.Pair.EMPTY);
        } else {
            var loop3460 = function(last3461, next3462) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var or_part3463 = M0.null_p(next3462);
                if (or_part3463 !== false) {
                    var if_res1967 = or_part3463;
                } else {
                    if (false !== false) {
                        var if_res1965 = less_than_p3449(false(M1.unsafe_car(next3462)), false(last3461));
                    } else {
                        var if_res1965 = less_than_p3449(M1.unsafe_car(next3462), last3461);
                    }
                    if (M0.not(if_res1965) !== false) {
                        var if_res1966 = loop3460(M1.unsafe_car(next3462), M1.unsafe_cdr(next3462));
                    } else {
                        var if_res1966 = false;
                    }
                    var if_res1967 = if_res1966;
                }
                return if_res1967;
            };
            if (loop3460(M0.car(lst3448), M0.cdr(lst3448)) !== false) {
                var if_res1981 = lst3448;
            } else {
                if (M1.unsafe_fx_lt__eq_(n3450, 3) !== false) {
                    if (M1.unsafe_fx_eq_(n3450, 1) !== false) {
                        var if_res1977 = lst3448;
                    } else {
                        if (M1.unsafe_fx_eq_(n3450, 2) !== false) {
                            var if_res1976 = M0.list(M0.cadr(lst3448), M0.car(lst3448));
                        } else {
                            var a3464 = M0.car(lst3448);
                            var b3465 = M0.cadr(lst3448);
                            var c3466 = M0.caddr(lst3448);
                            if (false !== false) {
                                var if_res1968 = less_than_p3449(false(b3465), false(a3464));
                            } else {
                                var if_res1968 = less_than_p3449(b3465, a3464);
                            }
                            if (if_res1968 !== false) {
                                if (false !== false) {
                                    var if_res1969 = less_than_p3449(false(c3466), false(b3465));
                                } else {
                                    var if_res1969 = less_than_p3449(c3466, b3465);
                                }
                                if (if_res1969 !== false) {
                                    var if_res1972 = M0.list(c3466, b3465, a3464);
                                } else {
                                    if (false !== false) {
                                        var if_res1970 = less_than_p3449(false(c3466), false(a3464));
                                    } else {
                                        var if_res1970 = less_than_p3449(c3466, a3464);
                                    }
                                    if (if_res1970 !== false) {
                                        var if_res1971 = M0.list(b3465, c3466, a3464);
                                    } else {
                                        var if_res1971 = M0.list(b3465, a3464, c3466);
                                    }
                                    var if_res1972 = if_res1971;
                                }
                                var if_res1975 = if_res1972;
                            } else {
                                if (false !== false) {
                                    var if_res1973 = less_than_p3449(false(c3466), false(a3464));
                                } else {
                                    var if_res1973 = less_than_p3449(c3466, a3464);
                                }
                                if (if_res1973 !== false) {
                                    var if_res1974 = M0.list(c3466, a3464, b3465);
                                } else {
                                    var if_res1974 = M0.list(a3464, c3466, b3465);
                                }
                                var if_res1975 = if_res1974;
                            }
                            var if_res1976 = if_res1975;
                        }
                        var if_res1977 = if_res1976;
                    }
                    var if_res1980 = if_res1977;
                } else {
                    var vec3467 = M0.make_vector(n3450 + M0.ceiling(n3450 / 2));
                    var loop3468 = function(i3469, lst3470) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (M0.pair_p(lst3470) !== false) {
                            M0.vector_set_bang_(vec3467, i3469, M0.car(lst3470));
                            var if_res1978 = loop3468(M0.add1(i3469), M0.cdr(lst3470));
                        } else {
                            var if_res1978 = M0.rvoid();
                        }
                        return if_res1978;
                    };
                    loop3468(0, lst3448);
                    generic_sort3335(vec3467, less_than_p3449, n3450);
                    var loop3471 = function(i3472, r3473) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var i3474 = M0.sub1(i3472);
                        if (M0.__lt_(i3474, 0) !== false) {
                            var if_res1979 = r3473;
                        } else {
                            var if_res1979 = loop3471(i3474, M0.cons(M0.vector_ref(vec3467, i3474), r3473));
                        }
                        return if_res1979;
                    };
                    var if_res1980 = loop3471(n3450, $rjs_core.Pair.EMPTY);
                }
                var if_res1981 = if_res1980;
            }
            var if_res1982 = if_res1981;
        }
        var if_res1983 = if_res1982;
    }
    return if_res1983;
};
var cl1960 = function(lst3475, less_than_p3476, getkey3477) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3477 !== false) {
        var if_res1984 = M0.not(M0.eq_p(M0.values, getkey3477));
    } else {
        var if_res1984 = false;
    }
    if (if_res1984 !== false) {
        var if_res1985 = sort(lst3475, less_than_p3476, getkey3477, false);
    } else {
        var if_res1985 = sort(lst3475, less_than_p3476);
    }
    return if_res1985;
};
var cl1961 = function(lst3478, less_than_p3479, getkey3480, cache_keys_p3481) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3480 !== false) {
        var if_res1986 = M0.not(M0.eq_p(M0.values, getkey3480));
    } else {
        var if_res1986 = false;
    }
    if (if_res1986 !== false) {
        var n3482 = M0.length(lst3478);
        if (M1.unsafe_fx_eq_(n3482, 0) !== false) {
            var if_res2007 = lst3478;
        } else {
            if (cache_keys_p3481 !== false) {
                var vec3483 = M0.make_vector(n3482 + M0.ceiling(n3482 / 2));
                var loop3484 = function(i3485, lst3486) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.pair_p(lst3486) !== false) {
                        var x3487 = M0.car(lst3486);
                        M1.unsafe_vector_set_bang_(vec3483, i3485, M0.cons(getkey3480(x3487), x3487));
                        var if_res1987 = loop3484(M1.unsafe_fx_plus_(i3485, 1), M0.cdr(lst3486));
                    } else {
                        var if_res1987 = M0.rvoid();
                    }
                    return if_res1987;
                };
                loop3484(0, lst3478);
                generic_sort_by_key3391(vec3483, less_than_p3479, n3482, M1.unsafe_car);
                var loop3488 = function(i3489, r3490) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var i3491 = M1.unsafe_fx_(i3489, 1);
                    if (M1.unsafe_fx_lt_(i3491, 0) !== false) {
                        var if_res1988 = r3490;
                    } else {
                        var if_res1988 = loop3488(i3491, M0.cons(M1.unsafe_cdr(M1.unsafe_vector_ref(vec3483, i3491)), r3490));
                    }
                    return if_res1988;
                };
                var if_res2006 = loop3488(n3482, $rjs_core.Pair.EMPTY);
            } else {
                var loop3492 = function(last3493, next3494) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var or_part3495 = M0.null_p(next3494);
                    if (or_part3495 !== false) {
                        var if_res1991 = or_part3495;
                    } else {
                        if (getkey3480 !== false) {
                            var if_res1989 = less_than_p3479(getkey3480(M1.unsafe_car(next3494)), getkey3480(last3493));
                        } else {
                            var if_res1989 = less_than_p3479(M1.unsafe_car(next3494), last3493);
                        }
                        if (M0.not(if_res1989) !== false) {
                            var if_res1990 = loop3492(M1.unsafe_car(next3494), M1.unsafe_cdr(next3494));
                        } else {
                            var if_res1990 = false;
                        }
                        var if_res1991 = if_res1990;
                    }
                    return if_res1991;
                };
                if (loop3492(M0.car(lst3478), M0.cdr(lst3478)) !== false) {
                    var if_res2005 = lst3478;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n3482, 3) !== false) {
                        if (M1.unsafe_fx_eq_(n3482, 1) !== false) {
                            var if_res2001 = lst3478;
                        } else {
                            if (M1.unsafe_fx_eq_(n3482, 2) !== false) {
                                var if_res2000 = M0.list(M0.cadr(lst3478), M0.car(lst3478));
                            } else {
                                var a3496 = M0.car(lst3478);
                                var b3497 = M0.cadr(lst3478);
                                var c3498 = M0.caddr(lst3478);
                                if (getkey3480 !== false) {
                                    var if_res1992 = less_than_p3479(getkey3480(b3497), getkey3480(a3496));
                                } else {
                                    var if_res1992 = less_than_p3479(b3497, a3496);
                                }
                                if (if_res1992 !== false) {
                                    if (getkey3480 !== false) {
                                        var if_res1993 = less_than_p3479(getkey3480(c3498), getkey3480(b3497));
                                    } else {
                                        var if_res1993 = less_than_p3479(c3498, b3497);
                                    }
                                    if (if_res1993 !== false) {
                                        var if_res1996 = M0.list(c3498, b3497, a3496);
                                    } else {
                                        if (getkey3480 !== false) {
                                            var if_res1994 = less_than_p3479(getkey3480(c3498), getkey3480(a3496));
                                        } else {
                                            var if_res1994 = less_than_p3479(c3498, a3496);
                                        }
                                        if (if_res1994 !== false) {
                                            var if_res1995 = M0.list(b3497, c3498, a3496);
                                        } else {
                                            var if_res1995 = M0.list(b3497, a3496, c3498);
                                        }
                                        var if_res1996 = if_res1995;
                                    }
                                    var if_res1999 = if_res1996;
                                } else {
                                    if (getkey3480 !== false) {
                                        var if_res1997 = less_than_p3479(getkey3480(c3498), getkey3480(a3496));
                                    } else {
                                        var if_res1997 = less_than_p3479(c3498, a3496);
                                    }
                                    if (if_res1997 !== false) {
                                        var if_res1998 = M0.list(c3498, a3496, b3497);
                                    } else {
                                        var if_res1998 = M0.list(a3496, c3498, b3497);
                                    }
                                    var if_res1999 = if_res1998;
                                }
                                var if_res2000 = if_res1999;
                            }
                            var if_res2001 = if_res2000;
                        }
                        var if_res2004 = if_res2001;
                    } else {
                        var vec3499 = M0.make_vector(n3482 + M0.ceiling(n3482 / 2));
                        var loop3500 = function(i3501, lst3502) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            if (M0.pair_p(lst3502) !== false) {
                                M0.vector_set_bang_(vec3499, i3501, M0.car(lst3502));
                                var if_res2002 = loop3500(M0.add1(i3501), M0.cdr(lst3502));
                            } else {
                                var if_res2002 = M0.rvoid();
                            }
                            return if_res2002;
                        };
                        loop3500(0, lst3478);
                        generic_sort_by_key3391(vec3499, less_than_p3479, n3482, getkey3480);
                        var loop3503 = function(i3504, r3505) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            var i3506 = M0.sub1(i3504);
                            if (M0.__lt_(i3506, 0) !== false) {
                                var if_res2003 = r3505;
                            } else {
                                var if_res2003 = loop3503(i3506, M0.cons(M0.vector_ref(vec3499, i3506), r3505));
                            }
                            return if_res2003;
                        };
                        var if_res2004 = loop3503(n3482, $rjs_core.Pair.EMPTY);
                    }
                    var if_res2005 = if_res2004;
                }
                var if_res2006 = if_res2005;
            }
            var if_res2007 = if_res2006;
        }
        var if_res2008 = if_res2007;
    } else {
        var if_res2008 = sort(lst3478, less_than_p3479);
    }
    return if_res2008;
};
var temp2009 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1962 = {
        '2': cl1959,
        '3': cl1960,
        '4': cl1961
    } [arguments.length];
    if (fixed_lam1962 !== undefined) {
        return fixed_lam1962.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var cl1905 = function(vec3507, less_than_p3508, start3509, end3510) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n3511 = end3510 - start3509;
    if (true !== false) {
        var if_res1908 = M0.make_vector(n3511);
    } else {
        var if_res1908 = vec3507;
    }
    var dst_vec3512 = if_res1908;
    if (true !== false) {
        var if_res1909 = 0;
    } else {
        var if_res1909 = start3509;
    }
    var dst_start3513 = if_res1909;
    if (M1.unsafe_fx_eq_(n3511, 0) !== false) {
        var if_res1930 = M0.rvoid();
    } else {
        if (false !== false) {
            var work_vec3514 = M0.make_vector(n3511 + M0.ceiling(n3511 / 2), true);
            var loop3515 = function(i3516) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3516, n3511) !== false) {
                    var x3517 = M1.unsafe_vector_ref(vec3507, M1.unsafe_fx_plus_(i3516, start3509));
                    M1.unsafe_vector_set_bang_(work_vec3514, i3516, M0.cons(false(x3517), x3517));
                    var if_res1910 = loop3515(M1.unsafe_fx_plus_(i3516, 1));
                } else {
                    var if_res1910 = M0.rvoid();
                }
                return if_res1910;
            };
            loop3515(0);
            generic_sort_by_key3391(work_vec3514, less_than_p3508, n3511, M1.unsafe_car);
            var loop3518 = function(i3519) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3519, n3511) !== false) {
                    M1.unsafe_vector_set_bang_(dst_vec3512, M1.unsafe_fx_plus_(i3519, dst_start3513), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3514, i3519)));
                    var if_res1911 = loop3518(M1.unsafe_fx_plus_(i3519, 1));
                } else {
                    var if_res1911 = M0.rvoid();
                }
                return if_res1911;
            };
            var if_res1929 = loop3518(0);
        } else {
            var loop3520 = function(prev_val3521, next_index3522) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var or_part3523 = M1.unsafe_fx_eq_(next_index3522, end3510);
                if (or_part3523 !== false) {
                    var if_res1914 = or_part3523;
                } else {
                    var next_val3524 = M1.unsafe_vector_ref(vec3507, next_index3522);
                    if (false !== false) {
                        var if_res1912 = less_than_p3508(false(next_val3524), false(prev_val3521));
                    } else {
                        var if_res1912 = less_than_p3508(next_val3524, prev_val3521);
                    }
                    if (M0.not(if_res1912) !== false) {
                        var if_res1913 = loop3520(next_val3524, M1.unsafe_fx_plus_(next_index3522, 1));
                    } else {
                        var if_res1913 = false;
                    }
                    var if_res1914 = if_res1913;
                }
                return if_res1914;
            };
            if (loop3520(M1.unsafe_vector_ref(vec3507, start3509), M1.unsafe_fx_plus_(start3509, 1)) !== false) {
                if (true !== false) {
                    var if_res1915 = M0.vector_copy_bang_(dst_vec3512, dst_start3513, vec3507, start3509, end3510);
                } else {
                    var if_res1915 = M0.rvoid();
                }
                var if_res1928 = if_res1915;
            } else {
                if (M1.unsafe_fx_lt__eq_(n3511, 3) !== false) {
                    if (true !== false) {
                        var if_res1916 = M0.vector_copy_bang_(dst_vec3512, dst_start3513, vec3507, start3509, end3510);
                    } else {
                        var if_res1916 = M0.rvoid();
                    }
                    if_res1916;
                    if (M1.unsafe_fx_eq_(n3511, 1) !== false) {
                        var if_res1926 = M0.rvoid();
                    } else {
                        if (M1.unsafe_fx_eq_(n3511, 2) !== false) {
                            var tmp3525 = M1.unsafe_vector_ref(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 0));
                            M1.unsafe_vector_set_bang_(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 0), M1.unsafe_vector_ref(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 1)));
                            var if_res1925 = M1.unsafe_vector_set_bang_(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 1), tmp3525);
                        } else {
                            var a3526 = M1.unsafe_vector_ref(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 0));
                            var b3527 = M1.unsafe_vector_ref(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 1));
                            var c3528 = M1.unsafe_vector_ref(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 2));
                            if (false !== false) {
                                var if_res1917 = less_than_p3508(false(b3527), false(a3526));
                            } else {
                                var if_res1917 = less_than_p3508(b3527, a3526);
                            }
                            if (if_res1917 !== false) {
                                if (false !== false) {
                                    var if_res1918 = less_than_p3508(false(c3528), false(b3527));
                                } else {
                                    var if_res1918 = less_than_p3508(c3528, b3527);
                                }
                                if (if_res1918 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 0), c3528);
                                    var if_res1921 = M1.unsafe_vector_set_bang_(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 2), a3526);
                                } else {
                                    if (false !== false) {
                                        var if_res1919 = less_than_p3508(false(c3528), false(a3526));
                                    } else {
                                        var if_res1919 = less_than_p3508(c3528, a3526);
                                    }
                                    if (if_res1919 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 0), b3527);
                                        M1.unsafe_vector_set_bang_(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 1), c3528);
                                        var if_res1920 = M1.unsafe_vector_set_bang_(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 2), a3526);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 0), b3527);
                                        var if_res1920 = M1.unsafe_vector_set_bang_(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 1), a3526);
                                    }
                                    var if_res1921 = if_res1920;
                                }
                                var if_res1924 = if_res1921;
                            } else {
                                if (false !== false) {
                                    var if_res1922 = less_than_p3508(false(c3528), false(a3526));
                                } else {
                                    var if_res1922 = less_than_p3508(c3528, a3526);
                                }
                                if (if_res1922 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 0), c3528);
                                    M1.unsafe_vector_set_bang_(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 1), a3526);
                                    var if_res1923 = M1.unsafe_vector_set_bang_(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 2), b3527);
                                } else {
                                    M1.unsafe_vector_set_bang_(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 1), c3528);
                                    var if_res1923 = M1.unsafe_vector_set_bang_(dst_vec3512, M1.unsafe_fx_plus_(dst_start3513, 2), b3527);
                                }
                                var if_res1924 = if_res1923;
                            }
                            var if_res1925 = if_res1924;
                        }
                        var if_res1926 = if_res1925;
                    }
                    var if_res1927 = if_res1926;
                } else {
                    var work_vec3529 = M0.make_vector(n3511 + M0.ceiling(n3511 / 2), false);
                    M0.vector_copy_bang_(work_vec3529, 0, vec3507, start3509, end3510);
                    generic_sort3335(work_vec3529, less_than_p3508, n3511);
                    var if_res1927 = M0.vector_copy_bang_(dst_vec3512, dst_start3513, work_vec3529, 0, n3511);
                }
                var if_res1928 = if_res1927;
            }
            var if_res1929 = if_res1928;
        }
        var if_res1930 = if_res1929;
    }
    if_res1930;
    if (true !== false) {
        var if_res1931 = dst_vec3512;
    } else {
        var if_res1931 = M0.rvoid();
    }
    return if_res1931;
};
var cl1906 = function(vec3530, less_than_p3531, start3532, end3533, getkey3534, cache_keys_p3535) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3534 !== false) {
        var if_res1932 = M0.not(M0.eq_p(M0.values, getkey3534));
    } else {
        var if_res1932 = false;
    }
    if (if_res1932 !== false) {
        var n3536 = end3533 - start3532;
        if (true !== false) {
            var if_res1933 = M0.make_vector(n3536);
        } else {
            var if_res1933 = vec3530;
        }
        var dst_vec3537 = if_res1933;
        if (true !== false) {
            var if_res1934 = 0;
        } else {
            var if_res1934 = start3532;
        }
        var dst_start3538 = if_res1934;
        if (M1.unsafe_fx_eq_(n3536, 0) !== false) {
            var if_res1955 = M0.rvoid();
        } else {
            if (cache_keys_p3535 !== false) {
                var work_vec3539 = M0.make_vector(n3536 + M0.ceiling(n3536 / 2), true);
                var loop3540 = function(i3541) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3541, n3536) !== false) {
                        var x3542 = M1.unsafe_vector_ref(vec3530, M1.unsafe_fx_plus_(i3541, start3532));
                        M1.unsafe_vector_set_bang_(work_vec3539, i3541, M0.cons(getkey3534(x3542), x3542));
                        var if_res1935 = loop3540(M1.unsafe_fx_plus_(i3541, 1));
                    } else {
                        var if_res1935 = M0.rvoid();
                    }
                    return if_res1935;
                };
                loop3540(0);
                generic_sort_by_key3391(work_vec3539, less_than_p3531, n3536, M1.unsafe_car);
                var loop3543 = function(i3544) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3544, n3536) !== false) {
                        M1.unsafe_vector_set_bang_(dst_vec3537, M1.unsafe_fx_plus_(i3544, dst_start3538), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3539, i3544)));
                        var if_res1936 = loop3543(M1.unsafe_fx_plus_(i3544, 1));
                    } else {
                        var if_res1936 = M0.rvoid();
                    }
                    return if_res1936;
                };
                var if_res1954 = loop3543(0);
            } else {
                var loop3545 = function(prev_val3546, next_index3547) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var or_part3548 = M1.unsafe_fx_eq_(next_index3547, end3533);
                    if (or_part3548 !== false) {
                        var if_res1939 = or_part3548;
                    } else {
                        var next_val3549 = M1.unsafe_vector_ref(vec3530, next_index3547);
                        if (getkey3534 !== false) {
                            var if_res1937 = less_than_p3531(getkey3534(next_val3549), getkey3534(prev_val3546));
                        } else {
                            var if_res1937 = less_than_p3531(next_val3549, prev_val3546);
                        }
                        if (M0.not(if_res1937) !== false) {
                            var if_res1938 = loop3545(next_val3549, M1.unsafe_fx_plus_(next_index3547, 1));
                        } else {
                            var if_res1938 = false;
                        }
                        var if_res1939 = if_res1938;
                    }
                    return if_res1939;
                };
                if (loop3545(M1.unsafe_vector_ref(vec3530, start3532), M1.unsafe_fx_plus_(start3532, 1)) !== false) {
                    if (true !== false) {
                        var if_res1940 = M0.vector_copy_bang_(dst_vec3537, dst_start3538, vec3530, start3532, end3533);
                    } else {
                        var if_res1940 = M0.rvoid();
                    }
                    var if_res1953 = if_res1940;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n3536, 3) !== false) {
                        if (true !== false) {
                            var if_res1941 = M0.vector_copy_bang_(dst_vec3537, dst_start3538, vec3530, start3532, end3533);
                        } else {
                            var if_res1941 = M0.rvoid();
                        }
                        if_res1941;
                        if (M1.unsafe_fx_eq_(n3536, 1) !== false) {
                            var if_res1951 = M0.rvoid();
                        } else {
                            if (M1.unsafe_fx_eq_(n3536, 2) !== false) {
                                var tmp3550 = M1.unsafe_vector_ref(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 0));
                                M1.unsafe_vector_set_bang_(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 0), M1.unsafe_vector_ref(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 1)));
                                var if_res1950 = M1.unsafe_vector_set_bang_(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 1), tmp3550);
                            } else {
                                var a3551 = M1.unsafe_vector_ref(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 0));
                                var b3552 = M1.unsafe_vector_ref(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 1));
                                var c3553 = M1.unsafe_vector_ref(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 2));
                                if (getkey3534 !== false) {
                                    var if_res1942 = less_than_p3531(getkey3534(b3552), getkey3534(a3551));
                                } else {
                                    var if_res1942 = less_than_p3531(b3552, a3551);
                                }
                                if (if_res1942 !== false) {
                                    if (getkey3534 !== false) {
                                        var if_res1943 = less_than_p3531(getkey3534(c3553), getkey3534(b3552));
                                    } else {
                                        var if_res1943 = less_than_p3531(c3553, b3552);
                                    }
                                    if (if_res1943 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 0), c3553);
                                        var if_res1946 = M1.unsafe_vector_set_bang_(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 2), a3551);
                                    } else {
                                        if (getkey3534 !== false) {
                                            var if_res1944 = less_than_p3531(getkey3534(c3553), getkey3534(a3551));
                                        } else {
                                            var if_res1944 = less_than_p3531(c3553, a3551);
                                        }
                                        if (if_res1944 !== false) {
                                            M1.unsafe_vector_set_bang_(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 0), b3552);
                                            M1.unsafe_vector_set_bang_(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 1), c3553);
                                            var if_res1945 = M1.unsafe_vector_set_bang_(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 2), a3551);
                                        } else {
                                            M1.unsafe_vector_set_bang_(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 0), b3552);
                                            var if_res1945 = M1.unsafe_vector_set_bang_(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 1), a3551);
                                        }
                                        var if_res1946 = if_res1945;
                                    }
                                    var if_res1949 = if_res1946;
                                } else {
                                    if (getkey3534 !== false) {
                                        var if_res1947 = less_than_p3531(getkey3534(c3553), getkey3534(a3551));
                                    } else {
                                        var if_res1947 = less_than_p3531(c3553, a3551);
                                    }
                                    if (if_res1947 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 0), c3553);
                                        M1.unsafe_vector_set_bang_(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 1), a3551);
                                        var if_res1948 = M1.unsafe_vector_set_bang_(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 2), b3552);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 1), c3553);
                                        var if_res1948 = M1.unsafe_vector_set_bang_(dst_vec3537, M1.unsafe_fx_plus_(dst_start3538, 2), b3552);
                                    }
                                    var if_res1949 = if_res1948;
                                }
                                var if_res1950 = if_res1949;
                            }
                            var if_res1951 = if_res1950;
                        }
                        var if_res1952 = if_res1951;
                    } else {
                        var work_vec3554 = M0.make_vector(n3536 + M0.ceiling(n3536 / 2), false);
                        M0.vector_copy_bang_(work_vec3554, 0, vec3530, start3532, end3533);
                        generic_sort_by_key3391(work_vec3554, less_than_p3531, n3536, getkey3534);
                        var if_res1952 = M0.vector_copy_bang_(dst_vec3537, dst_start3538, work_vec3554, 0, n3536);
                    }
                    var if_res1953 = if_res1952;
                }
                var if_res1954 = if_res1953;
            }
            var if_res1955 = if_res1954;
        }
        if_res1955;
        if (true !== false) {
            var if_res1956 = dst_vec3537;
        } else {
            var if_res1956 = M0.rvoid();
        }
        var if_res1957 = if_res1956;
    } else {
        var if_res1957 = vector_sort(vec3530, less_than_p3531, start3532, end3533);
    }
    return if_res1957;
};
var temp1958 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1907 = {
        '4': cl1905,
        '6': cl1906
    } [arguments.length];
    if (fixed_lam1907 !== undefined) {
        return fixed_lam1907.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 6]);
var cl1852 = function(vec3555, less_than_p3556, start3557, end3558) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n3559 = end3558 - start3557;
    if (false !== false) {
        var if_res1855 = M0.make_vector(n3559);
    } else {
        var if_res1855 = vec3555;
    }
    var dst_vec3560 = if_res1855;
    if (false !== false) {
        var if_res1856 = 0;
    } else {
        var if_res1856 = start3557;
    }
    var dst_start3561 = if_res1856;
    if (M1.unsafe_fx_eq_(n3559, 0) !== false) {
        var if_res1877 = M0.rvoid();
    } else {
        if (false !== false) {
            var work_vec3562 = M0.make_vector(n3559 + M0.ceiling(n3559 / 2), true);
            var loop3563 = function(i3564) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3564, n3559) !== false) {
                    var x3565 = M1.unsafe_vector_ref(vec3555, M1.unsafe_fx_plus_(i3564, start3557));
                    M1.unsafe_vector_set_bang_(work_vec3562, i3564, M0.cons(false(x3565), x3565));
                    var if_res1857 = loop3563(M1.unsafe_fx_plus_(i3564, 1));
                } else {
                    var if_res1857 = M0.rvoid();
                }
                return if_res1857;
            };
            loop3563(0);
            generic_sort_by_key3391(work_vec3562, less_than_p3556, n3559, M1.unsafe_car);
            var loop3566 = function(i3567) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3567, n3559) !== false) {
                    M1.unsafe_vector_set_bang_(dst_vec3560, M1.unsafe_fx_plus_(i3567, dst_start3561), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3562, i3567)));
                    var if_res1858 = loop3566(M1.unsafe_fx_plus_(i3567, 1));
                } else {
                    var if_res1858 = M0.rvoid();
                }
                return if_res1858;
            };
            var if_res1876 = loop3566(0);
        } else {
            var loop3568 = function(prev_val3569, next_index3570) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var or_part3571 = M1.unsafe_fx_eq_(next_index3570, end3558);
                if (or_part3571 !== false) {
                    var if_res1861 = or_part3571;
                } else {
                    var next_val3572 = M1.unsafe_vector_ref(vec3555, next_index3570);
                    if (false !== false) {
                        var if_res1859 = less_than_p3556(false(next_val3572), false(prev_val3569));
                    } else {
                        var if_res1859 = less_than_p3556(next_val3572, prev_val3569);
                    }
                    if (M0.not(if_res1859) !== false) {
                        var if_res1860 = loop3568(next_val3572, M1.unsafe_fx_plus_(next_index3570, 1));
                    } else {
                        var if_res1860 = false;
                    }
                    var if_res1861 = if_res1860;
                }
                return if_res1861;
            };
            if (loop3568(M1.unsafe_vector_ref(vec3555, start3557), M1.unsafe_fx_plus_(start3557, 1)) !== false) {
                if (false !== false) {
                    var if_res1862 = M0.vector_copy_bang_(dst_vec3560, dst_start3561, vec3555, start3557, end3558);
                } else {
                    var if_res1862 = M0.rvoid();
                }
                var if_res1875 = if_res1862;
            } else {
                if (M1.unsafe_fx_lt__eq_(n3559, 3) !== false) {
                    if (false !== false) {
                        var if_res1863 = M0.vector_copy_bang_(dst_vec3560, dst_start3561, vec3555, start3557, end3558);
                    } else {
                        var if_res1863 = M0.rvoid();
                    }
                    if_res1863;
                    if (M1.unsafe_fx_eq_(n3559, 1) !== false) {
                        var if_res1873 = M0.rvoid();
                    } else {
                        if (M1.unsafe_fx_eq_(n3559, 2) !== false) {
                            var tmp3573 = M1.unsafe_vector_ref(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 0));
                            M1.unsafe_vector_set_bang_(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 0), M1.unsafe_vector_ref(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 1)));
                            var if_res1872 = M1.unsafe_vector_set_bang_(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 1), tmp3573);
                        } else {
                            var a3574 = M1.unsafe_vector_ref(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 0));
                            var b3575 = M1.unsafe_vector_ref(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 1));
                            var c3576 = M1.unsafe_vector_ref(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 2));
                            if (false !== false) {
                                var if_res1864 = less_than_p3556(false(b3575), false(a3574));
                            } else {
                                var if_res1864 = less_than_p3556(b3575, a3574);
                            }
                            if (if_res1864 !== false) {
                                if (false !== false) {
                                    var if_res1865 = less_than_p3556(false(c3576), false(b3575));
                                } else {
                                    var if_res1865 = less_than_p3556(c3576, b3575);
                                }
                                if (if_res1865 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 0), c3576);
                                    var if_res1868 = M1.unsafe_vector_set_bang_(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 2), a3574);
                                } else {
                                    if (false !== false) {
                                        var if_res1866 = less_than_p3556(false(c3576), false(a3574));
                                    } else {
                                        var if_res1866 = less_than_p3556(c3576, a3574);
                                    }
                                    if (if_res1866 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 0), b3575);
                                        M1.unsafe_vector_set_bang_(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 1), c3576);
                                        var if_res1867 = M1.unsafe_vector_set_bang_(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 2), a3574);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 0), b3575);
                                        var if_res1867 = M1.unsafe_vector_set_bang_(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 1), a3574);
                                    }
                                    var if_res1868 = if_res1867;
                                }
                                var if_res1871 = if_res1868;
                            } else {
                                if (false !== false) {
                                    var if_res1869 = less_than_p3556(false(c3576), false(a3574));
                                } else {
                                    var if_res1869 = less_than_p3556(c3576, a3574);
                                }
                                if (if_res1869 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 0), c3576);
                                    M1.unsafe_vector_set_bang_(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 1), a3574);
                                    var if_res1870 = M1.unsafe_vector_set_bang_(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 2), b3575);
                                } else {
                                    M1.unsafe_vector_set_bang_(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 1), c3576);
                                    var if_res1870 = M1.unsafe_vector_set_bang_(dst_vec3560, M1.unsafe_fx_plus_(dst_start3561, 2), b3575);
                                }
                                var if_res1871 = if_res1870;
                            }
                            var if_res1872 = if_res1871;
                        }
                        var if_res1873 = if_res1872;
                    }
                    var if_res1874 = if_res1873;
                } else {
                    var work_vec3577 = M0.make_vector(n3559 + M0.ceiling(n3559 / 2), false);
                    M0.vector_copy_bang_(work_vec3577, 0, vec3555, start3557, end3558);
                    generic_sort3335(work_vec3577, less_than_p3556, n3559);
                    var if_res1874 = M0.vector_copy_bang_(dst_vec3560, dst_start3561, work_vec3577, 0, n3559);
                }
                var if_res1875 = if_res1874;
            }
            var if_res1876 = if_res1875;
        }
        var if_res1877 = if_res1876;
    }
    if_res1877;
    if (false !== false) {
        var if_res1878 = dst_vec3560;
    } else {
        var if_res1878 = M0.rvoid();
    }
    return if_res1878;
};
var cl1853 = function(vec3578, less_than_p3579, start3580, end3581, getkey3582, cache_keys_p3583) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3582 !== false) {
        var if_res1879 = M0.not(M0.eq_p(M0.values, getkey3582));
    } else {
        var if_res1879 = false;
    }
    if (if_res1879 !== false) {
        var n3584 = end3581 - start3580;
        if (false !== false) {
            var if_res1880 = M0.make_vector(n3584);
        } else {
            var if_res1880 = vec3578;
        }
        var dst_vec3585 = if_res1880;
        if (false !== false) {
            var if_res1881 = 0;
        } else {
            var if_res1881 = start3580;
        }
        var dst_start3586 = if_res1881;
        if (M1.unsafe_fx_eq_(n3584, 0) !== false) {
            var if_res1902 = M0.rvoid();
        } else {
            if (cache_keys_p3583 !== false) {
                var work_vec3587 = M0.make_vector(n3584 + M0.ceiling(n3584 / 2), true);
                var loop3588 = function(i3589) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3589, n3584) !== false) {
                        var x3590 = M1.unsafe_vector_ref(vec3578, M1.unsafe_fx_plus_(i3589, start3580));
                        M1.unsafe_vector_set_bang_(work_vec3587, i3589, M0.cons(getkey3582(x3590), x3590));
                        var if_res1882 = loop3588(M1.unsafe_fx_plus_(i3589, 1));
                    } else {
                        var if_res1882 = M0.rvoid();
                    }
                    return if_res1882;
                };
                loop3588(0);
                generic_sort_by_key3391(work_vec3587, less_than_p3579, n3584, M1.unsafe_car);
                var loop3591 = function(i3592) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3592, n3584) !== false) {
                        M1.unsafe_vector_set_bang_(dst_vec3585, M1.unsafe_fx_plus_(i3592, dst_start3586), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3587, i3592)));
                        var if_res1883 = loop3591(M1.unsafe_fx_plus_(i3592, 1));
                    } else {
                        var if_res1883 = M0.rvoid();
                    }
                    return if_res1883;
                };
                var if_res1901 = loop3591(0);
            } else {
                var loop3593 = function(prev_val3594, next_index3595) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var or_part3596 = M1.unsafe_fx_eq_(next_index3595, end3581);
                    if (or_part3596 !== false) {
                        var if_res1886 = or_part3596;
                    } else {
                        var next_val3597 = M1.unsafe_vector_ref(vec3578, next_index3595);
                        if (getkey3582 !== false) {
                            var if_res1884 = less_than_p3579(getkey3582(next_val3597), getkey3582(prev_val3594));
                        } else {
                            var if_res1884 = less_than_p3579(next_val3597, prev_val3594);
                        }
                        if (M0.not(if_res1884) !== false) {
                            var if_res1885 = loop3593(next_val3597, M1.unsafe_fx_plus_(next_index3595, 1));
                        } else {
                            var if_res1885 = false;
                        }
                        var if_res1886 = if_res1885;
                    }
                    return if_res1886;
                };
                if (loop3593(M1.unsafe_vector_ref(vec3578, start3580), M1.unsafe_fx_plus_(start3580, 1)) !== false) {
                    if (false !== false) {
                        var if_res1887 = M0.vector_copy_bang_(dst_vec3585, dst_start3586, vec3578, start3580, end3581);
                    } else {
                        var if_res1887 = M0.rvoid();
                    }
                    var if_res1900 = if_res1887;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n3584, 3) !== false) {
                        if (false !== false) {
                            var if_res1888 = M0.vector_copy_bang_(dst_vec3585, dst_start3586, vec3578, start3580, end3581);
                        } else {
                            var if_res1888 = M0.rvoid();
                        }
                        if_res1888;
                        if (M1.unsafe_fx_eq_(n3584, 1) !== false) {
                            var if_res1898 = M0.rvoid();
                        } else {
                            if (M1.unsafe_fx_eq_(n3584, 2) !== false) {
                                var tmp3598 = M1.unsafe_vector_ref(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 0));
                                M1.unsafe_vector_set_bang_(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 0), M1.unsafe_vector_ref(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 1)));
                                var if_res1897 = M1.unsafe_vector_set_bang_(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 1), tmp3598);
                            } else {
                                var a3599 = M1.unsafe_vector_ref(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 0));
                                var b3600 = M1.unsafe_vector_ref(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 1));
                                var c3601 = M1.unsafe_vector_ref(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 2));
                                if (getkey3582 !== false) {
                                    var if_res1889 = less_than_p3579(getkey3582(b3600), getkey3582(a3599));
                                } else {
                                    var if_res1889 = less_than_p3579(b3600, a3599);
                                }
                                if (if_res1889 !== false) {
                                    if (getkey3582 !== false) {
                                        var if_res1890 = less_than_p3579(getkey3582(c3601), getkey3582(b3600));
                                    } else {
                                        var if_res1890 = less_than_p3579(c3601, b3600);
                                    }
                                    if (if_res1890 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 0), c3601);
                                        var if_res1893 = M1.unsafe_vector_set_bang_(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 2), a3599);
                                    } else {
                                        if (getkey3582 !== false) {
                                            var if_res1891 = less_than_p3579(getkey3582(c3601), getkey3582(a3599));
                                        } else {
                                            var if_res1891 = less_than_p3579(c3601, a3599);
                                        }
                                        if (if_res1891 !== false) {
                                            M1.unsafe_vector_set_bang_(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 0), b3600);
                                            M1.unsafe_vector_set_bang_(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 1), c3601);
                                            var if_res1892 = M1.unsafe_vector_set_bang_(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 2), a3599);
                                        } else {
                                            M1.unsafe_vector_set_bang_(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 0), b3600);
                                            var if_res1892 = M1.unsafe_vector_set_bang_(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 1), a3599);
                                        }
                                        var if_res1893 = if_res1892;
                                    }
                                    var if_res1896 = if_res1893;
                                } else {
                                    if (getkey3582 !== false) {
                                        var if_res1894 = less_than_p3579(getkey3582(c3601), getkey3582(a3599));
                                    } else {
                                        var if_res1894 = less_than_p3579(c3601, a3599);
                                    }
                                    if (if_res1894 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 0), c3601);
                                        M1.unsafe_vector_set_bang_(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 1), a3599);
                                        var if_res1895 = M1.unsafe_vector_set_bang_(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 2), b3600);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 1), c3601);
                                        var if_res1895 = M1.unsafe_vector_set_bang_(dst_vec3585, M1.unsafe_fx_plus_(dst_start3586, 2), b3600);
                                    }
                                    var if_res1896 = if_res1895;
                                }
                                var if_res1897 = if_res1896;
                            }
                            var if_res1898 = if_res1897;
                        }
                        var if_res1899 = if_res1898;
                    } else {
                        var work_vec3602 = M0.make_vector(n3584 + M0.ceiling(n3584 / 2), false);
                        M0.vector_copy_bang_(work_vec3602, 0, vec3578, start3580, end3581);
                        generic_sort_by_key3391(work_vec3602, less_than_p3579, n3584, getkey3582);
                        var if_res1899 = M0.vector_copy_bang_(dst_vec3585, dst_start3586, work_vec3602, 0, n3584);
                    }
                    var if_res1900 = if_res1899;
                }
                var if_res1901 = if_res1900;
            }
            var if_res1902 = if_res1901;
        }
        if_res1902;
        if (false !== false) {
            var if_res1903 = dst_vec3585;
        } else {
            var if_res1903 = M0.rvoid();
        }
        var if_res1904 = if_res1903;
    } else {
        var if_res1904 = vector_sort_bang_(vec3578, less_than_p3579, start3580, end3581);
    }
    return if_res1904;
};
var let_result2010 = M0.values(temp2009, temp1958, $rjs_core.attachProcedureArity(function() {
    var fixed_lam1854 = {
        '4': cl1852,
        '6': cl1853
    } [arguments.length];
    if (fixed_lam1854 !== undefined) {
        return fixed_lam1854.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 6]));
var sort = let_result2010.getAt(0);
var vector_sort = let_result2010.getAt(1);
var vector_sort_bang_ = let_result2010.getAt(2);
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    vector_sort_bang_,
    vector_sort,
    sort
};