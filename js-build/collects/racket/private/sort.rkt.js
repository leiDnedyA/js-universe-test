import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/unsafe.rkt.js";
var generic_sort1997 = function(A1998, less_than_p1999, n2000) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_by_2_2001 = M1.unsafe_fxrshift(n2000, 1);
    var n_by_2_plus_2002 = M1.unsafe_fx_(n2000, n_by_2_2001);
    var copying_mergesort2003 = function(Alo2004, Blo2005, n2006) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.unsafe_fx_eq_(n2006, 1) !== false) {
            var if_res909 = M1.unsafe_vector_set_bang_(A1998, Blo2005, M1.unsafe_vector_ref(A1998, Alo2004));
        } else {
            if (M1.unsafe_fx_eq_(n2006, 2) !== false) {
                var x2007 = M1.unsafe_vector_ref(A1998, Alo2004);
                var y2008 = M1.unsafe_vector_ref(A1998, M1.unsafe_fx_plus_(Alo2004, 1));
                if (false !== false) {
                    var if_res894 = less_than_p1999(false(y2008), false(x2007));
                } else {
                    var if_res894 = less_than_p1999(y2008, x2007);
                }
                if (if_res894 !== false) {
                    M1.unsafe_vector_set_bang_(A1998, Blo2005, y2008);
                    var if_res895 = M1.unsafe_vector_set_bang_(A1998, M1.unsafe_fx_plus_(Blo2005, 1), x2007);
                } else {
                    M1.unsafe_vector_set_bang_(A1998, Blo2005, x2007);
                    var if_res895 = M1.unsafe_vector_set_bang_(A1998, M1.unsafe_fx_plus_(Blo2005, 1), y2008);
                }
                var if_res908 = if_res895;
            } else {
                if (M1.unsafe_fx_lt_(n2006, 16) !== false) {
                    M1.unsafe_vector_set_bang_(A1998, Blo2005, M1.unsafe_vector_ref(A1998, Alo2004));
                    var iloop2009 = function(i2010) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (M1.unsafe_fx_lt_(i2010, n2006) !== false) {
                            var ref_i2011 = M1.unsafe_vector_ref(A1998, M1.unsafe_fx_plus_(Alo2004, i2010));
                            var jloop2012 = function(j2013) {
                                if (arguments.length !== 1) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var ref_j_12014 = M1.unsafe_vector_ref(A1998, M1.unsafe_fx_(j2013, 1));
                                if (M1.unsafe_fx_lt_(Blo2005, j2013) !== false) {
                                    if (false !== false) {
                                        var if_res896 = less_than_p1999(false(ref_i2011), false(ref_j_12014));
                                    } else {
                                        var if_res896 = less_than_p1999(ref_i2011, ref_j_12014);
                                    }
                                    var if_res897 = if_res896;
                                } else {
                                    var if_res897 = false;
                                }
                                if (if_res897 !== false) {
                                    M1.unsafe_vector_set_bang_(A1998, j2013, ref_j_12014);
                                    var if_res898 = jloop2012(M1.unsafe_fx_(j2013, 1));
                                } else {
                                    M1.unsafe_vector_set_bang_(A1998, j2013, ref_i2011);
                                    var if_res898 = iloop2009(M1.unsafe_fx_plus_(i2010, 1));
                                }
                                return if_res898;
                            };
                            var if_res899 = jloop2012(M1.unsafe_fx_plus_(Blo2005, i2010));
                        } else {
                            var if_res899 = M0.rvoid();
                        }
                        return if_res899;
                    };
                    var if_res907 = iloop2009(1);
                } else {
                    var n_by_2_2015 = M1.unsafe_fxrshift(n2006, 1);
                    var n_by_2_plus_2016 = M1.unsafe_fx_(n2006, n_by_2_2015);
                    var Amid12017 = M1.unsafe_fx_plus_(Alo2004, n_by_2_2015);
                    var Amid22018 = M1.unsafe_fx_plus_(Alo2004, n_by_2_plus_2016);
                    var Bmid12019 = M1.unsafe_fx_plus_(Blo2005, n_by_2_2015);
                    copying_mergesort2003(Amid12017, Bmid12019, n_by_2_plus_2016);
                    copying_mergesort2003(Alo2004, Amid22018, n_by_2_2015);
                    var b22020 = M1.unsafe_fx_plus_(Blo2005, n2006);
                    var loop2021 = function(a12022, b12023, c12024) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var x2025 = M1.unsafe_vector_ref(A1998, a12022);
                        var y2026 = M1.unsafe_vector_ref(A1998, b12023);
                        if (true !== false) {
                            if (false !== false) {
                                var if_res900 = less_than_p1999(false(y2026), false(x2025));
                            } else {
                                var if_res900 = less_than_p1999(y2026, x2025);
                            }
                            var if_res902 = M0.not(if_res900);
                        } else {
                            if (false !== false) {
                                var if_res901 = less_than_p1999(false(x2025), false(y2026));
                            } else {
                                var if_res901 = less_than_p1999(x2025, y2026);
                            }
                            var if_res902 = if_res901;
                        }
                        if (if_res902 !== false) {
                            M1.unsafe_vector_set_bang_(A1998, c12024, x2025);
                            var a12027 = M1.unsafe_fx_plus_(a12022, 1);
                            var c12028 = M1.unsafe_fx_plus_(c12024, 1);
                            if (M1.unsafe_fx_lt_(c12028, b12023) !== false) {
                                var if_res903 = loop2021(a12027, b12023, c12028);
                            } else {
                                var if_res903 = M0.rvoid();
                            }
                            var if_res906 = if_res903;
                        } else {
                            M1.unsafe_vector_set_bang_(A1998, c12024, y2026);
                            var b12029 = M1.unsafe_fx_plus_(b12023, 1);
                            var c12030 = M1.unsafe_fx_plus_(c12024, 1);
                            if (M1.unsafe_fx_lt__eq_(b22020, b12029) !== false) {
                                var loop2031 = function(a12032, c12033) {
                                    if (arguments.length !== 2) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    if (M1.unsafe_fx_lt_(c12033, b12029) !== false) {
                                        M1.unsafe_vector_set_bang_(A1998, c12033, M1.unsafe_vector_ref(A1998, a12032));
                                        var if_res904 = loop2031(M1.unsafe_fx_plus_(a12032, 1), M1.unsafe_fx_plus_(c12033, 1));
                                    } else {
                                        var if_res904 = M0.rvoid();
                                    }
                                    return if_res904;
                                };
                                var if_res905 = loop2031(a12022, c12030);
                            } else {
                                var if_res905 = loop2021(a12022, b12029, c12030);
                            }
                            var if_res906 = if_res905;
                        }
                        return if_res906;
                    };
                    var if_res907 = loop2021(Amid22018, Bmid12019, Blo2005);
                }
                var if_res908 = if_res907;
            }
            var if_res909 = if_res908;
        }
        return if_res909;
    };
    var Alo2034 = 0;
    var Amid12035 = n_by_2_2001;
    var Amid22036 = n_by_2_plus_2002;
    var Ahi2037 = n2000;
    var B1lo2038 = n2000;
    copying_mergesort2003(Amid12035, B1lo2038, n_by_2_plus_2002);
    if (M0.zero_p(n_by_2_2001) !== false) {
        var if_res910 = M0.rvoid();
    } else {
        var if_res910 = copying_mergesort2003(Alo2034, Amid22036, n_by_2_2001);
    }
    if_res910;
    var b22039 = Ahi2037;
    var loop2040 = function(a12041, b12042, c12043) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var x2044 = M1.unsafe_vector_ref(A1998, a12041);
        var y2045 = M1.unsafe_vector_ref(A1998, b12042);
        if (false !== false) {
            if (false !== false) {
                var if_res911 = less_than_p1999(false(y2045), false(x2044));
            } else {
                var if_res911 = less_than_p1999(y2045, x2044);
            }
            var if_res913 = M0.not(if_res911);
        } else {
            if (false !== false) {
                var if_res912 = less_than_p1999(false(x2044), false(y2045));
            } else {
                var if_res912 = less_than_p1999(x2044, y2045);
            }
            var if_res913 = if_res912;
        }
        if (if_res913 !== false) {
            M1.unsafe_vector_set_bang_(A1998, c12043, x2044);
            var a12046 = M1.unsafe_fx_plus_(a12041, 1);
            var c12047 = M1.unsafe_fx_plus_(c12043, 1);
            if (M1.unsafe_fx_lt_(c12047, b12042) !== false) {
                var if_res914 = loop2040(a12046, b12042, c12047);
            } else {
                var if_res914 = M0.rvoid();
            }
            var if_res917 = if_res914;
        } else {
            M1.unsafe_vector_set_bang_(A1998, c12043, y2045);
            var b12048 = M1.unsafe_fx_plus_(b12042, 1);
            var c12049 = M1.unsafe_fx_plus_(c12043, 1);
            if (M1.unsafe_fx_lt__eq_(b22039, b12048) !== false) {
                var loop2050 = function(a12051, c12052) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(c12052, b12048) !== false) {
                        M1.unsafe_vector_set_bang_(A1998, c12052, M1.unsafe_vector_ref(A1998, a12051));
                        var if_res915 = loop2050(M1.unsafe_fx_plus_(a12051, 1), M1.unsafe_fx_plus_(c12052, 1));
                    } else {
                        var if_res915 = M0.rvoid();
                    }
                    return if_res915;
                };
                var if_res916 = loop2050(a12041, c12049);
            } else {
                var if_res916 = loop2040(a12041, b12048, c12049);
            }
            var if_res917 = if_res916;
        }
        return if_res917;
    };
    return loop2040(B1lo2038, Amid22036, Alo2034);
};
var generic_sort_by_key2053 = function(A2054, less_than_p2055, n2056, key2057) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_by_2_2058 = M1.unsafe_fxrshift(n2056, 1);
    var n_by_2_plus_2059 = M1.unsafe_fx_(n2056, n_by_2_2058);
    var copying_mergesort2060 = function(Alo2061, Blo2062, n2063) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.unsafe_fx_eq_(n2063, 1) !== false) {
            var if_res933 = M1.unsafe_vector_set_bang_(A2054, Blo2062, M1.unsafe_vector_ref(A2054, Alo2061));
        } else {
            if (M1.unsafe_fx_eq_(n2063, 2) !== false) {
                var x2064 = M1.unsafe_vector_ref(A2054, Alo2061);
                var y2065 = M1.unsafe_vector_ref(A2054, M1.unsafe_fx_plus_(Alo2061, 1));
                if (key2057 !== false) {
                    var if_res918 = less_than_p2055(key2057(y2065), key2057(x2064));
                } else {
                    var if_res918 = less_than_p2055(y2065, x2064);
                }
                if (if_res918 !== false) {
                    M1.unsafe_vector_set_bang_(A2054, Blo2062, y2065);
                    var if_res919 = M1.unsafe_vector_set_bang_(A2054, M1.unsafe_fx_plus_(Blo2062, 1), x2064);
                } else {
                    M1.unsafe_vector_set_bang_(A2054, Blo2062, x2064);
                    var if_res919 = M1.unsafe_vector_set_bang_(A2054, M1.unsafe_fx_plus_(Blo2062, 1), y2065);
                }
                var if_res932 = if_res919;
            } else {
                if (M1.unsafe_fx_lt_(n2063, 16) !== false) {
                    M1.unsafe_vector_set_bang_(A2054, Blo2062, M1.unsafe_vector_ref(A2054, Alo2061));
                    var iloop2066 = function(i2067) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (M1.unsafe_fx_lt_(i2067, n2063) !== false) {
                            var ref_i2068 = M1.unsafe_vector_ref(A2054, M1.unsafe_fx_plus_(Alo2061, i2067));
                            var jloop2069 = function(j2070) {
                                if (arguments.length !== 1) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var ref_j_12071 = M1.unsafe_vector_ref(A2054, M1.unsafe_fx_(j2070, 1));
                                if (M1.unsafe_fx_lt_(Blo2062, j2070) !== false) {
                                    if (key2057 !== false) {
                                        var if_res920 = less_than_p2055(key2057(ref_i2068), key2057(ref_j_12071));
                                    } else {
                                        var if_res920 = less_than_p2055(ref_i2068, ref_j_12071);
                                    }
                                    var if_res921 = if_res920;
                                } else {
                                    var if_res921 = false;
                                }
                                if (if_res921 !== false) {
                                    M1.unsafe_vector_set_bang_(A2054, j2070, ref_j_12071);
                                    var if_res922 = jloop2069(M1.unsafe_fx_(j2070, 1));
                                } else {
                                    M1.unsafe_vector_set_bang_(A2054, j2070, ref_i2068);
                                    var if_res922 = iloop2066(M1.unsafe_fx_plus_(i2067, 1));
                                }
                                return if_res922;
                            };
                            var if_res923 = jloop2069(M1.unsafe_fx_plus_(Blo2062, i2067));
                        } else {
                            var if_res923 = M0.rvoid();
                        }
                        return if_res923;
                    };
                    var if_res931 = iloop2066(1);
                } else {
                    var n_by_2_2072 = M1.unsafe_fxrshift(n2063, 1);
                    var n_by_2_plus_2073 = M1.unsafe_fx_(n2063, n_by_2_2072);
                    var Amid12074 = M1.unsafe_fx_plus_(Alo2061, n_by_2_2072);
                    var Amid22075 = M1.unsafe_fx_plus_(Alo2061, n_by_2_plus_2073);
                    var Bmid12076 = M1.unsafe_fx_plus_(Blo2062, n_by_2_2072);
                    copying_mergesort2060(Amid12074, Bmid12076, n_by_2_plus_2073);
                    copying_mergesort2060(Alo2061, Amid22075, n_by_2_2072);
                    var b22077 = M1.unsafe_fx_plus_(Blo2062, n2063);
                    var loop2078 = function(a12079, b12080, c12081) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var x2082 = M1.unsafe_vector_ref(A2054, a12079);
                        var y2083 = M1.unsafe_vector_ref(A2054, b12080);
                        if (true !== false) {
                            if (key2057 !== false) {
                                var if_res924 = less_than_p2055(key2057(y2083), key2057(x2082));
                            } else {
                                var if_res924 = less_than_p2055(y2083, x2082);
                            }
                            var if_res926 = M0.not(if_res924);
                        } else {
                            if (key2057 !== false) {
                                var if_res925 = less_than_p2055(key2057(x2082), key2057(y2083));
                            } else {
                                var if_res925 = less_than_p2055(x2082, y2083);
                            }
                            var if_res926 = if_res925;
                        }
                        if (if_res926 !== false) {
                            M1.unsafe_vector_set_bang_(A2054, c12081, x2082);
                            var a12084 = M1.unsafe_fx_plus_(a12079, 1);
                            var c12085 = M1.unsafe_fx_plus_(c12081, 1);
                            if (M1.unsafe_fx_lt_(c12085, b12080) !== false) {
                                var if_res927 = loop2078(a12084, b12080, c12085);
                            } else {
                                var if_res927 = M0.rvoid();
                            }
                            var if_res930 = if_res927;
                        } else {
                            M1.unsafe_vector_set_bang_(A2054, c12081, y2083);
                            var b12086 = M1.unsafe_fx_plus_(b12080, 1);
                            var c12087 = M1.unsafe_fx_plus_(c12081, 1);
                            if (M1.unsafe_fx_lt__eq_(b22077, b12086) !== false) {
                                var loop2088 = function(a12089, c12090) {
                                    if (arguments.length !== 2) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    if (M1.unsafe_fx_lt_(c12090, b12086) !== false) {
                                        M1.unsafe_vector_set_bang_(A2054, c12090, M1.unsafe_vector_ref(A2054, a12089));
                                        var if_res928 = loop2088(M1.unsafe_fx_plus_(a12089, 1), M1.unsafe_fx_plus_(c12090, 1));
                                    } else {
                                        var if_res928 = M0.rvoid();
                                    }
                                    return if_res928;
                                };
                                var if_res929 = loop2088(a12079, c12087);
                            } else {
                                var if_res929 = loop2078(a12079, b12086, c12087);
                            }
                            var if_res930 = if_res929;
                        }
                        return if_res930;
                    };
                    var if_res931 = loop2078(Amid22075, Bmid12076, Blo2062);
                }
                var if_res932 = if_res931;
            }
            var if_res933 = if_res932;
        }
        return if_res933;
    };
    var Alo2091 = 0;
    var Amid12092 = n_by_2_2058;
    var Amid22093 = n_by_2_plus_2059;
    var Ahi2094 = n2056;
    var B1lo2095 = n2056;
    copying_mergesort2060(Amid12092, B1lo2095, n_by_2_plus_2059);
    if (M0.zero_p(n_by_2_2058) !== false) {
        var if_res934 = M0.rvoid();
    } else {
        var if_res934 = copying_mergesort2060(Alo2091, Amid22093, n_by_2_2058);
    }
    if_res934;
    var b22096 = Ahi2094;
    var loop2097 = function(a12098, b12099, c12100) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var x2101 = M1.unsafe_vector_ref(A2054, a12098);
        var y2102 = M1.unsafe_vector_ref(A2054, b12099);
        if (false !== false) {
            if (key2057 !== false) {
                var if_res935 = less_than_p2055(key2057(y2102), key2057(x2101));
            } else {
                var if_res935 = less_than_p2055(y2102, x2101);
            }
            var if_res937 = M0.not(if_res935);
        } else {
            if (key2057 !== false) {
                var if_res936 = less_than_p2055(key2057(x2101), key2057(y2102));
            } else {
                var if_res936 = less_than_p2055(x2101, y2102);
            }
            var if_res937 = if_res936;
        }
        if (if_res937 !== false) {
            M1.unsafe_vector_set_bang_(A2054, c12100, x2101);
            var a12103 = M1.unsafe_fx_plus_(a12098, 1);
            var c12104 = M1.unsafe_fx_plus_(c12100, 1);
            if (M1.unsafe_fx_lt_(c12104, b12099) !== false) {
                var if_res938 = loop2097(a12103, b12099, c12104);
            } else {
                var if_res938 = M0.rvoid();
            }
            var if_res941 = if_res938;
        } else {
            M1.unsafe_vector_set_bang_(A2054, c12100, y2102);
            var b12105 = M1.unsafe_fx_plus_(b12099, 1);
            var c12106 = M1.unsafe_fx_plus_(c12100, 1);
            if (M1.unsafe_fx_lt__eq_(b22096, b12105) !== false) {
                var loop2107 = function(a12108, c12109) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(c12109, b12105) !== false) {
                        M1.unsafe_vector_set_bang_(A2054, c12109, M1.unsafe_vector_ref(A2054, a12108));
                        var if_res939 = loop2107(M1.unsafe_fx_plus_(a12108, 1), M1.unsafe_fx_plus_(c12109, 1));
                    } else {
                        var if_res939 = M0.rvoid();
                    }
                    return if_res939;
                };
                var if_res940 = loop2107(a12098, c12106);
            } else {
                var if_res940 = loop2097(a12098, b12105, c12106);
            }
            var if_res941 = if_res940;
        }
        return if_res941;
    };
    return loop2097(B1lo2095, Amid22093, Alo2091);
};
var cl1049 = function(lst2110, less_than_p2111) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n2112 = M0.length(lst2110);
    if (M1.unsafe_fx_eq_(n2112, 0) !== false) {
        var if_res1073 = lst2110;
    } else {
        if (false !== false) {
            var vec2113 = M0.make_vector(n2112 + M0.ceiling(n2112 / 2));
            var loop2114 = function(i2115, lst2116) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M0.pair_p(lst2116) !== false) {
                    var x2117 = M0.car(lst2116);
                    M1.unsafe_vector_set_bang_(vec2113, i2115, M0.cons(false(x2117), x2117));
                    var if_res1053 = loop2114(M1.unsafe_fx_plus_(i2115, 1), M0.cdr(lst2116));
                } else {
                    var if_res1053 = M0.rvoid();
                }
                return if_res1053;
            };
            loop2114(0, lst2110);
            generic_sort_by_key2053(vec2113, less_than_p2111, n2112, M1.unsafe_car);
            var loop2118 = function(i2119, r2120) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var i2121 = M1.unsafe_fx_(i2119, 1);
                if (M1.unsafe_fx_lt_(i2121, 0) !== false) {
                    var if_res1054 = r2120;
                } else {
                    var if_res1054 = loop2118(i2121, M0.cons(M1.unsafe_cdr(M1.unsafe_vector_ref(vec2113, i2121)), r2120));
                }
                return if_res1054;
            };
            var if_res1072 = loop2118(n2112, $rjs_core.Pair.EMPTY);
        } else {
            var loop2122 = function(last2123, next2124) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var or_part2125 = M0.null_p(next2124);
                if (or_part2125 !== false) {
                    var if_res1057 = or_part2125;
                } else {
                    if (false !== false) {
                        var if_res1055 = less_than_p2111(false(M1.unsafe_car(next2124)), false(last2123));
                    } else {
                        var if_res1055 = less_than_p2111(M1.unsafe_car(next2124), last2123);
                    }
                    if (M0.not(if_res1055) !== false) {
                        var if_res1056 = loop2122(M1.unsafe_car(next2124), M1.unsafe_cdr(next2124));
                    } else {
                        var if_res1056 = false;
                    }
                    var if_res1057 = if_res1056;
                }
                return if_res1057;
            };
            if (loop2122(M0.car(lst2110), M0.cdr(lst2110)) !== false) {
                var if_res1071 = lst2110;
            } else {
                if (M1.unsafe_fx_lt__eq_(n2112, 3) !== false) {
                    if (M1.unsafe_fx_eq_(n2112, 1) !== false) {
                        var if_res1067 = lst2110;
                    } else {
                        if (M1.unsafe_fx_eq_(n2112, 2) !== false) {
                            var if_res1066 = M0.list(M0.cadr(lst2110), M0.car(lst2110));
                        } else {
                            var a2126 = M0.car(lst2110);
                            var b2127 = M0.cadr(lst2110);
                            var c2128 = M0.caddr(lst2110);
                            if (false !== false) {
                                var if_res1058 = less_than_p2111(false(b2127), false(a2126));
                            } else {
                                var if_res1058 = less_than_p2111(b2127, a2126);
                            }
                            if (if_res1058 !== false) {
                                if (false !== false) {
                                    var if_res1059 = less_than_p2111(false(c2128), false(b2127));
                                } else {
                                    var if_res1059 = less_than_p2111(c2128, b2127);
                                }
                                if (if_res1059 !== false) {
                                    var if_res1062 = M0.list(c2128, b2127, a2126);
                                } else {
                                    if (false !== false) {
                                        var if_res1060 = less_than_p2111(false(c2128), false(a2126));
                                    } else {
                                        var if_res1060 = less_than_p2111(c2128, a2126);
                                    }
                                    if (if_res1060 !== false) {
                                        var if_res1061 = M0.list(b2127, c2128, a2126);
                                    } else {
                                        var if_res1061 = M0.list(b2127, a2126, c2128);
                                    }
                                    var if_res1062 = if_res1061;
                                }
                                var if_res1065 = if_res1062;
                            } else {
                                if (false !== false) {
                                    var if_res1063 = less_than_p2111(false(c2128), false(a2126));
                                } else {
                                    var if_res1063 = less_than_p2111(c2128, a2126);
                                }
                                if (if_res1063 !== false) {
                                    var if_res1064 = M0.list(c2128, a2126, b2127);
                                } else {
                                    var if_res1064 = M0.list(a2126, c2128, b2127);
                                }
                                var if_res1065 = if_res1064;
                            }
                            var if_res1066 = if_res1065;
                        }
                        var if_res1067 = if_res1066;
                    }
                    var if_res1070 = if_res1067;
                } else {
                    var vec2129 = M0.make_vector(n2112 + M0.ceiling(n2112 / 2));
                    var loop2130 = function(i2131, lst2132) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (M0.pair_p(lst2132) !== false) {
                            M0.vector_set_bang_(vec2129, i2131, M0.car(lst2132));
                            var if_res1068 = loop2130(M0.add1(i2131), M0.cdr(lst2132));
                        } else {
                            var if_res1068 = M0.rvoid();
                        }
                        return if_res1068;
                    };
                    loop2130(0, lst2110);
                    generic_sort1997(vec2129, less_than_p2111, n2112);
                    var loop2133 = function(i2134, r2135) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var i2136 = M0.sub1(i2134);
                        if (M0.__lt_(i2136, 0) !== false) {
                            var if_res1069 = r2135;
                        } else {
                            var if_res1069 = loop2133(i2136, M0.cons(M0.vector_ref(vec2129, i2136), r2135));
                        }
                        return if_res1069;
                    };
                    var if_res1070 = loop2133(n2112, $rjs_core.Pair.EMPTY);
                }
                var if_res1071 = if_res1070;
            }
            var if_res1072 = if_res1071;
        }
        var if_res1073 = if_res1072;
    }
    return if_res1073;
};
var cl1050 = function(lst2137, less_than_p2138, getkey2139) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey2139 !== false) {
        var if_res1074 = M0.not(M0.eq_p(M0.values, getkey2139));
    } else {
        var if_res1074 = false;
    }
    if (if_res1074 !== false) {
        var if_res1075 = sort(lst2137, less_than_p2138, getkey2139, false);
    } else {
        var if_res1075 = sort(lst2137, less_than_p2138);
    }
    return if_res1075;
};
var cl1051 = function(lst2140, less_than_p2141, getkey2142, cache_keys_p2143) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey2142 !== false) {
        var if_res1076 = M0.not(M0.eq_p(M0.values, getkey2142));
    } else {
        var if_res1076 = false;
    }
    if (if_res1076 !== false) {
        var n2144 = M0.length(lst2140);
        if (M1.unsafe_fx_eq_(n2144, 0) !== false) {
            var if_res1097 = lst2140;
        } else {
            if (cache_keys_p2143 !== false) {
                var vec2145 = M0.make_vector(n2144 + M0.ceiling(n2144 / 2));
                var loop2146 = function(i2147, lst2148) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.pair_p(lst2148) !== false) {
                        var x2149 = M0.car(lst2148);
                        M1.unsafe_vector_set_bang_(vec2145, i2147, M0.cons(getkey2142(x2149), x2149));
                        var if_res1077 = loop2146(M1.unsafe_fx_plus_(i2147, 1), M0.cdr(lst2148));
                    } else {
                        var if_res1077 = M0.rvoid();
                    }
                    return if_res1077;
                };
                loop2146(0, lst2140);
                generic_sort_by_key2053(vec2145, less_than_p2141, n2144, M1.unsafe_car);
                var loop2150 = function(i2151, r2152) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var i2153 = M1.unsafe_fx_(i2151, 1);
                    if (M1.unsafe_fx_lt_(i2153, 0) !== false) {
                        var if_res1078 = r2152;
                    } else {
                        var if_res1078 = loop2150(i2153, M0.cons(M1.unsafe_cdr(M1.unsafe_vector_ref(vec2145, i2153)), r2152));
                    }
                    return if_res1078;
                };
                var if_res1096 = loop2150(n2144, $rjs_core.Pair.EMPTY);
            } else {
                var loop2154 = function(last2155, next2156) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var or_part2157 = M0.null_p(next2156);
                    if (or_part2157 !== false) {
                        var if_res1081 = or_part2157;
                    } else {
                        if (getkey2142 !== false) {
                            var if_res1079 = less_than_p2141(getkey2142(M1.unsafe_car(next2156)), getkey2142(last2155));
                        } else {
                            var if_res1079 = less_than_p2141(M1.unsafe_car(next2156), last2155);
                        }
                        if (M0.not(if_res1079) !== false) {
                            var if_res1080 = loop2154(M1.unsafe_car(next2156), M1.unsafe_cdr(next2156));
                        } else {
                            var if_res1080 = false;
                        }
                        var if_res1081 = if_res1080;
                    }
                    return if_res1081;
                };
                if (loop2154(M0.car(lst2140), M0.cdr(lst2140)) !== false) {
                    var if_res1095 = lst2140;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n2144, 3) !== false) {
                        if (M1.unsafe_fx_eq_(n2144, 1) !== false) {
                            var if_res1091 = lst2140;
                        } else {
                            if (M1.unsafe_fx_eq_(n2144, 2) !== false) {
                                var if_res1090 = M0.list(M0.cadr(lst2140), M0.car(lst2140));
                            } else {
                                var a2158 = M0.car(lst2140);
                                var b2159 = M0.cadr(lst2140);
                                var c2160 = M0.caddr(lst2140);
                                if (getkey2142 !== false) {
                                    var if_res1082 = less_than_p2141(getkey2142(b2159), getkey2142(a2158));
                                } else {
                                    var if_res1082 = less_than_p2141(b2159, a2158);
                                }
                                if (if_res1082 !== false) {
                                    if (getkey2142 !== false) {
                                        var if_res1083 = less_than_p2141(getkey2142(c2160), getkey2142(b2159));
                                    } else {
                                        var if_res1083 = less_than_p2141(c2160, b2159);
                                    }
                                    if (if_res1083 !== false) {
                                        var if_res1086 = M0.list(c2160, b2159, a2158);
                                    } else {
                                        if (getkey2142 !== false) {
                                            var if_res1084 = less_than_p2141(getkey2142(c2160), getkey2142(a2158));
                                        } else {
                                            var if_res1084 = less_than_p2141(c2160, a2158);
                                        }
                                        if (if_res1084 !== false) {
                                            var if_res1085 = M0.list(b2159, c2160, a2158);
                                        } else {
                                            var if_res1085 = M0.list(b2159, a2158, c2160);
                                        }
                                        var if_res1086 = if_res1085;
                                    }
                                    var if_res1089 = if_res1086;
                                } else {
                                    if (getkey2142 !== false) {
                                        var if_res1087 = less_than_p2141(getkey2142(c2160), getkey2142(a2158));
                                    } else {
                                        var if_res1087 = less_than_p2141(c2160, a2158);
                                    }
                                    if (if_res1087 !== false) {
                                        var if_res1088 = M0.list(c2160, a2158, b2159);
                                    } else {
                                        var if_res1088 = M0.list(a2158, c2160, b2159);
                                    }
                                    var if_res1089 = if_res1088;
                                }
                                var if_res1090 = if_res1089;
                            }
                            var if_res1091 = if_res1090;
                        }
                        var if_res1094 = if_res1091;
                    } else {
                        var vec2161 = M0.make_vector(n2144 + M0.ceiling(n2144 / 2));
                        var loop2162 = function(i2163, lst2164) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            if (M0.pair_p(lst2164) !== false) {
                                M0.vector_set_bang_(vec2161, i2163, M0.car(lst2164));
                                var if_res1092 = loop2162(M0.add1(i2163), M0.cdr(lst2164));
                            } else {
                                var if_res1092 = M0.rvoid();
                            }
                            return if_res1092;
                        };
                        loop2162(0, lst2140);
                        generic_sort_by_key2053(vec2161, less_than_p2141, n2144, getkey2142);
                        var loop2165 = function(i2166, r2167) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            var i2168 = M0.sub1(i2166);
                            if (M0.__lt_(i2168, 0) !== false) {
                                var if_res1093 = r2167;
                            } else {
                                var if_res1093 = loop2165(i2168, M0.cons(M0.vector_ref(vec2161, i2168), r2167));
                            }
                            return if_res1093;
                        };
                        var if_res1094 = loop2165(n2144, $rjs_core.Pair.EMPTY);
                    }
                    var if_res1095 = if_res1094;
                }
                var if_res1096 = if_res1095;
            }
            var if_res1097 = if_res1096;
        }
        var if_res1098 = if_res1097;
    } else {
        var if_res1098 = sort(lst2140, less_than_p2141);
    }
    return if_res1098;
};
var temp1099 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1052 = {
        '2': cl1049,
        '3': cl1050,
        '4': cl1051
    } [arguments.length];
    if (fixed_lam1052 !== undefined) {
        return fixed_lam1052.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var cl995 = function(vec2169, less_than_p2170, start2171, end2172) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n2173 = end2172 - start2171;
    if (true !== false) {
        var if_res998 = M0.make_vector(n2173);
    } else {
        var if_res998 = vec2169;
    }
    var dst_vec2174 = if_res998;
    if (true !== false) {
        var if_res999 = 0;
    } else {
        var if_res999 = start2171;
    }
    var dst_start2175 = if_res999;
    if (M1.unsafe_fx_eq_(n2173, 0) !== false) {
        var if_res1020 = M0.rvoid();
    } else {
        if (false !== false) {
            var work_vec2176 = M0.make_vector(n2173 + M0.ceiling(n2173 / 2), true);
            var loop2177 = function(i2178) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i2178, n2173) !== false) {
                    var x2179 = M1.unsafe_vector_ref(vec2169, M1.unsafe_fx_plus_(i2178, start2171));
                    M1.unsafe_vector_set_bang_(work_vec2176, i2178, M0.cons(false(x2179), x2179));
                    var if_res1000 = loop2177(M1.unsafe_fx_plus_(i2178, 1));
                } else {
                    var if_res1000 = M0.rvoid();
                }
                return if_res1000;
            };
            loop2177(0);
            generic_sort_by_key2053(work_vec2176, less_than_p2170, n2173, M1.unsafe_car);
            var loop2180 = function(i2181) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i2181, n2173) !== false) {
                    M1.unsafe_vector_set_bang_(dst_vec2174, M1.unsafe_fx_plus_(i2181, dst_start2175), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec2176, i2181)));
                    var if_res1001 = loop2180(M1.unsafe_fx_plus_(i2181, 1));
                } else {
                    var if_res1001 = M0.rvoid();
                }
                return if_res1001;
            };
            var if_res1019 = loop2180(0);
        } else {
            var loop2182 = function(prev_val2183, next_index2184) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var or_part2185 = M1.unsafe_fx_eq_(next_index2184, end2172);
                if (or_part2185 !== false) {
                    var if_res1004 = or_part2185;
                } else {
                    var next_val2186 = M1.unsafe_vector_ref(vec2169, next_index2184);
                    if (false !== false) {
                        var if_res1002 = less_than_p2170(false(next_val2186), false(prev_val2183));
                    } else {
                        var if_res1002 = less_than_p2170(next_val2186, prev_val2183);
                    }
                    if (M0.not(if_res1002) !== false) {
                        var if_res1003 = loop2182(next_val2186, M1.unsafe_fx_plus_(next_index2184, 1));
                    } else {
                        var if_res1003 = false;
                    }
                    var if_res1004 = if_res1003;
                }
                return if_res1004;
            };
            if (loop2182(M1.unsafe_vector_ref(vec2169, start2171), M1.unsafe_fx_plus_(start2171, 1)) !== false) {
                if (true !== false) {
                    var if_res1005 = M0.vector_copy_bang_(dst_vec2174, dst_start2175, vec2169, start2171, end2172);
                } else {
                    var if_res1005 = M0.rvoid();
                }
                var if_res1018 = if_res1005;
            } else {
                if (M1.unsafe_fx_lt__eq_(n2173, 3) !== false) {
                    if (true !== false) {
                        var if_res1006 = M0.vector_copy_bang_(dst_vec2174, dst_start2175, vec2169, start2171, end2172);
                    } else {
                        var if_res1006 = M0.rvoid();
                    }
                    if_res1006;
                    if (M1.unsafe_fx_eq_(n2173, 1) !== false) {
                        var if_res1016 = M0.rvoid();
                    } else {
                        if (M1.unsafe_fx_eq_(n2173, 2) !== false) {
                            var tmp2187 = M1.unsafe_vector_ref(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 0));
                            M1.unsafe_vector_set_bang_(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 0), M1.unsafe_vector_ref(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 1)));
                            var if_res1015 = M1.unsafe_vector_set_bang_(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 1), tmp2187);
                        } else {
                            var a2188 = M1.unsafe_vector_ref(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 0));
                            var b2189 = M1.unsafe_vector_ref(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 1));
                            var c2190 = M1.unsafe_vector_ref(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 2));
                            if (false !== false) {
                                var if_res1007 = less_than_p2170(false(b2189), false(a2188));
                            } else {
                                var if_res1007 = less_than_p2170(b2189, a2188);
                            }
                            if (if_res1007 !== false) {
                                if (false !== false) {
                                    var if_res1008 = less_than_p2170(false(c2190), false(b2189));
                                } else {
                                    var if_res1008 = less_than_p2170(c2190, b2189);
                                }
                                if (if_res1008 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 0), c2190);
                                    var if_res1011 = M1.unsafe_vector_set_bang_(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 2), a2188);
                                } else {
                                    if (false !== false) {
                                        var if_res1009 = less_than_p2170(false(c2190), false(a2188));
                                    } else {
                                        var if_res1009 = less_than_p2170(c2190, a2188);
                                    }
                                    if (if_res1009 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 0), b2189);
                                        M1.unsafe_vector_set_bang_(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 1), c2190);
                                        var if_res1010 = M1.unsafe_vector_set_bang_(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 2), a2188);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 0), b2189);
                                        var if_res1010 = M1.unsafe_vector_set_bang_(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 1), a2188);
                                    }
                                    var if_res1011 = if_res1010;
                                }
                                var if_res1014 = if_res1011;
                            } else {
                                if (false !== false) {
                                    var if_res1012 = less_than_p2170(false(c2190), false(a2188));
                                } else {
                                    var if_res1012 = less_than_p2170(c2190, a2188);
                                }
                                if (if_res1012 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 0), c2190);
                                    M1.unsafe_vector_set_bang_(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 1), a2188);
                                    var if_res1013 = M1.unsafe_vector_set_bang_(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 2), b2189);
                                } else {
                                    M1.unsafe_vector_set_bang_(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 1), c2190);
                                    var if_res1013 = M1.unsafe_vector_set_bang_(dst_vec2174, M1.unsafe_fx_plus_(dst_start2175, 2), b2189);
                                }
                                var if_res1014 = if_res1013;
                            }
                            var if_res1015 = if_res1014;
                        }
                        var if_res1016 = if_res1015;
                    }
                    var if_res1017 = if_res1016;
                } else {
                    var work_vec2191 = M0.make_vector(n2173 + M0.ceiling(n2173 / 2), false);
                    M0.vector_copy_bang_(work_vec2191, 0, vec2169, start2171, end2172);
                    generic_sort1997(work_vec2191, less_than_p2170, n2173);
                    var if_res1017 = M0.vector_copy_bang_(dst_vec2174, dst_start2175, work_vec2191, 0, n2173);
                }
                var if_res1018 = if_res1017;
            }
            var if_res1019 = if_res1018;
        }
        var if_res1020 = if_res1019;
    }
    if_res1020;
    if (true !== false) {
        var if_res1021 = dst_vec2174;
    } else {
        var if_res1021 = M0.rvoid();
    }
    return if_res1021;
};
var cl996 = function(vec2192, less_than_p2193, start2194, end2195, getkey2196, cache_keys_p2197) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey2196 !== false) {
        var if_res1022 = M0.not(M0.eq_p(M0.values, getkey2196));
    } else {
        var if_res1022 = false;
    }
    if (if_res1022 !== false) {
        var n2198 = end2195 - start2194;
        if (true !== false) {
            var if_res1023 = M0.make_vector(n2198);
        } else {
            var if_res1023 = vec2192;
        }
        var dst_vec2199 = if_res1023;
        if (true !== false) {
            var if_res1024 = 0;
        } else {
            var if_res1024 = start2194;
        }
        var dst_start2200 = if_res1024;
        if (M1.unsafe_fx_eq_(n2198, 0) !== false) {
            var if_res1045 = M0.rvoid();
        } else {
            if (cache_keys_p2197 !== false) {
                var work_vec2201 = M0.make_vector(n2198 + M0.ceiling(n2198 / 2), true);
                var loop2202 = function(i2203) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i2203, n2198) !== false) {
                        var x2204 = M1.unsafe_vector_ref(vec2192, M1.unsafe_fx_plus_(i2203, start2194));
                        M1.unsafe_vector_set_bang_(work_vec2201, i2203, M0.cons(getkey2196(x2204), x2204));
                        var if_res1025 = loop2202(M1.unsafe_fx_plus_(i2203, 1));
                    } else {
                        var if_res1025 = M0.rvoid();
                    }
                    return if_res1025;
                };
                loop2202(0);
                generic_sort_by_key2053(work_vec2201, less_than_p2193, n2198, M1.unsafe_car);
                var loop2205 = function(i2206) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i2206, n2198) !== false) {
                        M1.unsafe_vector_set_bang_(dst_vec2199, M1.unsafe_fx_plus_(i2206, dst_start2200), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec2201, i2206)));
                        var if_res1026 = loop2205(M1.unsafe_fx_plus_(i2206, 1));
                    } else {
                        var if_res1026 = M0.rvoid();
                    }
                    return if_res1026;
                };
                var if_res1044 = loop2205(0);
            } else {
                var loop2207 = function(prev_val2208, next_index2209) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var or_part2210 = M1.unsafe_fx_eq_(next_index2209, end2195);
                    if (or_part2210 !== false) {
                        var if_res1029 = or_part2210;
                    } else {
                        var next_val2211 = M1.unsafe_vector_ref(vec2192, next_index2209);
                        if (getkey2196 !== false) {
                            var if_res1027 = less_than_p2193(getkey2196(next_val2211), getkey2196(prev_val2208));
                        } else {
                            var if_res1027 = less_than_p2193(next_val2211, prev_val2208);
                        }
                        if (M0.not(if_res1027) !== false) {
                            var if_res1028 = loop2207(next_val2211, M1.unsafe_fx_plus_(next_index2209, 1));
                        } else {
                            var if_res1028 = false;
                        }
                        var if_res1029 = if_res1028;
                    }
                    return if_res1029;
                };
                if (loop2207(M1.unsafe_vector_ref(vec2192, start2194), M1.unsafe_fx_plus_(start2194, 1)) !== false) {
                    if (true !== false) {
                        var if_res1030 = M0.vector_copy_bang_(dst_vec2199, dst_start2200, vec2192, start2194, end2195);
                    } else {
                        var if_res1030 = M0.rvoid();
                    }
                    var if_res1043 = if_res1030;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n2198, 3) !== false) {
                        if (true !== false) {
                            var if_res1031 = M0.vector_copy_bang_(dst_vec2199, dst_start2200, vec2192, start2194, end2195);
                        } else {
                            var if_res1031 = M0.rvoid();
                        }
                        if_res1031;
                        if (M1.unsafe_fx_eq_(n2198, 1) !== false) {
                            var if_res1041 = M0.rvoid();
                        } else {
                            if (M1.unsafe_fx_eq_(n2198, 2) !== false) {
                                var tmp2212 = M1.unsafe_vector_ref(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 0));
                                M1.unsafe_vector_set_bang_(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 0), M1.unsafe_vector_ref(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 1)));
                                var if_res1040 = M1.unsafe_vector_set_bang_(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 1), tmp2212);
                            } else {
                                var a2213 = M1.unsafe_vector_ref(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 0));
                                var b2214 = M1.unsafe_vector_ref(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 1));
                                var c2215 = M1.unsafe_vector_ref(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 2));
                                if (getkey2196 !== false) {
                                    var if_res1032 = less_than_p2193(getkey2196(b2214), getkey2196(a2213));
                                } else {
                                    var if_res1032 = less_than_p2193(b2214, a2213);
                                }
                                if (if_res1032 !== false) {
                                    if (getkey2196 !== false) {
                                        var if_res1033 = less_than_p2193(getkey2196(c2215), getkey2196(b2214));
                                    } else {
                                        var if_res1033 = less_than_p2193(c2215, b2214);
                                    }
                                    if (if_res1033 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 0), c2215);
                                        var if_res1036 = M1.unsafe_vector_set_bang_(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 2), a2213);
                                    } else {
                                        if (getkey2196 !== false) {
                                            var if_res1034 = less_than_p2193(getkey2196(c2215), getkey2196(a2213));
                                        } else {
                                            var if_res1034 = less_than_p2193(c2215, a2213);
                                        }
                                        if (if_res1034 !== false) {
                                            M1.unsafe_vector_set_bang_(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 0), b2214);
                                            M1.unsafe_vector_set_bang_(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 1), c2215);
                                            var if_res1035 = M1.unsafe_vector_set_bang_(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 2), a2213);
                                        } else {
                                            M1.unsafe_vector_set_bang_(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 0), b2214);
                                            var if_res1035 = M1.unsafe_vector_set_bang_(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 1), a2213);
                                        }
                                        var if_res1036 = if_res1035;
                                    }
                                    var if_res1039 = if_res1036;
                                } else {
                                    if (getkey2196 !== false) {
                                        var if_res1037 = less_than_p2193(getkey2196(c2215), getkey2196(a2213));
                                    } else {
                                        var if_res1037 = less_than_p2193(c2215, a2213);
                                    }
                                    if (if_res1037 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 0), c2215);
                                        M1.unsafe_vector_set_bang_(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 1), a2213);
                                        var if_res1038 = M1.unsafe_vector_set_bang_(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 2), b2214);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 1), c2215);
                                        var if_res1038 = M1.unsafe_vector_set_bang_(dst_vec2199, M1.unsafe_fx_plus_(dst_start2200, 2), b2214);
                                    }
                                    var if_res1039 = if_res1038;
                                }
                                var if_res1040 = if_res1039;
                            }
                            var if_res1041 = if_res1040;
                        }
                        var if_res1042 = if_res1041;
                    } else {
                        var work_vec2216 = M0.make_vector(n2198 + M0.ceiling(n2198 / 2), false);
                        M0.vector_copy_bang_(work_vec2216, 0, vec2192, start2194, end2195);
                        generic_sort_by_key2053(work_vec2216, less_than_p2193, n2198, getkey2196);
                        var if_res1042 = M0.vector_copy_bang_(dst_vec2199, dst_start2200, work_vec2216, 0, n2198);
                    }
                    var if_res1043 = if_res1042;
                }
                var if_res1044 = if_res1043;
            }
            var if_res1045 = if_res1044;
        }
        if_res1045;
        if (true !== false) {
            var if_res1046 = dst_vec2199;
        } else {
            var if_res1046 = M0.rvoid();
        }
        var if_res1047 = if_res1046;
    } else {
        var if_res1047 = vector_sort(vec2192, less_than_p2193, start2194, end2195);
    }
    return if_res1047;
};
var temp1048 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam997 = {
        '4': cl995,
        '6': cl996
    } [arguments.length];
    if (fixed_lam997 !== undefined) {
        return fixed_lam997.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 6]);
var cl942 = function(vec2217, less_than_p2218, start2219, end2220) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n2221 = end2220 - start2219;
    if (false !== false) {
        var if_res945 = M0.make_vector(n2221);
    } else {
        var if_res945 = vec2217;
    }
    var dst_vec2222 = if_res945;
    if (false !== false) {
        var if_res946 = 0;
    } else {
        var if_res946 = start2219;
    }
    var dst_start2223 = if_res946;
    if (M1.unsafe_fx_eq_(n2221, 0) !== false) {
        var if_res967 = M0.rvoid();
    } else {
        if (false !== false) {
            var work_vec2224 = M0.make_vector(n2221 + M0.ceiling(n2221 / 2), true);
            var loop2225 = function(i2226) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i2226, n2221) !== false) {
                    var x2227 = M1.unsafe_vector_ref(vec2217, M1.unsafe_fx_plus_(i2226, start2219));
                    M1.unsafe_vector_set_bang_(work_vec2224, i2226, M0.cons(false(x2227), x2227));
                    var if_res947 = loop2225(M1.unsafe_fx_plus_(i2226, 1));
                } else {
                    var if_res947 = M0.rvoid();
                }
                return if_res947;
            };
            loop2225(0);
            generic_sort_by_key2053(work_vec2224, less_than_p2218, n2221, M1.unsafe_car);
            var loop2228 = function(i2229) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i2229, n2221) !== false) {
                    M1.unsafe_vector_set_bang_(dst_vec2222, M1.unsafe_fx_plus_(i2229, dst_start2223), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec2224, i2229)));
                    var if_res948 = loop2228(M1.unsafe_fx_plus_(i2229, 1));
                } else {
                    var if_res948 = M0.rvoid();
                }
                return if_res948;
            };
            var if_res966 = loop2228(0);
        } else {
            var loop2230 = function(prev_val2231, next_index2232) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var or_part2233 = M1.unsafe_fx_eq_(next_index2232, end2220);
                if (or_part2233 !== false) {
                    var if_res951 = or_part2233;
                } else {
                    var next_val2234 = M1.unsafe_vector_ref(vec2217, next_index2232);
                    if (false !== false) {
                        var if_res949 = less_than_p2218(false(next_val2234), false(prev_val2231));
                    } else {
                        var if_res949 = less_than_p2218(next_val2234, prev_val2231);
                    }
                    if (M0.not(if_res949) !== false) {
                        var if_res950 = loop2230(next_val2234, M1.unsafe_fx_plus_(next_index2232, 1));
                    } else {
                        var if_res950 = false;
                    }
                    var if_res951 = if_res950;
                }
                return if_res951;
            };
            if (loop2230(M1.unsafe_vector_ref(vec2217, start2219), M1.unsafe_fx_plus_(start2219, 1)) !== false) {
                if (false !== false) {
                    var if_res952 = M0.vector_copy_bang_(dst_vec2222, dst_start2223, vec2217, start2219, end2220);
                } else {
                    var if_res952 = M0.rvoid();
                }
                var if_res965 = if_res952;
            } else {
                if (M1.unsafe_fx_lt__eq_(n2221, 3) !== false) {
                    if (false !== false) {
                        var if_res953 = M0.vector_copy_bang_(dst_vec2222, dst_start2223, vec2217, start2219, end2220);
                    } else {
                        var if_res953 = M0.rvoid();
                    }
                    if_res953;
                    if (M1.unsafe_fx_eq_(n2221, 1) !== false) {
                        var if_res963 = M0.rvoid();
                    } else {
                        if (M1.unsafe_fx_eq_(n2221, 2) !== false) {
                            var tmp2235 = M1.unsafe_vector_ref(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 0));
                            M1.unsafe_vector_set_bang_(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 0), M1.unsafe_vector_ref(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 1)));
                            var if_res962 = M1.unsafe_vector_set_bang_(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 1), tmp2235);
                        } else {
                            var a2236 = M1.unsafe_vector_ref(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 0));
                            var b2237 = M1.unsafe_vector_ref(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 1));
                            var c2238 = M1.unsafe_vector_ref(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 2));
                            if (false !== false) {
                                var if_res954 = less_than_p2218(false(b2237), false(a2236));
                            } else {
                                var if_res954 = less_than_p2218(b2237, a2236);
                            }
                            if (if_res954 !== false) {
                                if (false !== false) {
                                    var if_res955 = less_than_p2218(false(c2238), false(b2237));
                                } else {
                                    var if_res955 = less_than_p2218(c2238, b2237);
                                }
                                if (if_res955 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 0), c2238);
                                    var if_res958 = M1.unsafe_vector_set_bang_(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 2), a2236);
                                } else {
                                    if (false !== false) {
                                        var if_res956 = less_than_p2218(false(c2238), false(a2236));
                                    } else {
                                        var if_res956 = less_than_p2218(c2238, a2236);
                                    }
                                    if (if_res956 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 0), b2237);
                                        M1.unsafe_vector_set_bang_(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 1), c2238);
                                        var if_res957 = M1.unsafe_vector_set_bang_(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 2), a2236);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 0), b2237);
                                        var if_res957 = M1.unsafe_vector_set_bang_(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 1), a2236);
                                    }
                                    var if_res958 = if_res957;
                                }
                                var if_res961 = if_res958;
                            } else {
                                if (false !== false) {
                                    var if_res959 = less_than_p2218(false(c2238), false(a2236));
                                } else {
                                    var if_res959 = less_than_p2218(c2238, a2236);
                                }
                                if (if_res959 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 0), c2238);
                                    M1.unsafe_vector_set_bang_(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 1), a2236);
                                    var if_res960 = M1.unsafe_vector_set_bang_(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 2), b2237);
                                } else {
                                    M1.unsafe_vector_set_bang_(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 1), c2238);
                                    var if_res960 = M1.unsafe_vector_set_bang_(dst_vec2222, M1.unsafe_fx_plus_(dst_start2223, 2), b2237);
                                }
                                var if_res961 = if_res960;
                            }
                            var if_res962 = if_res961;
                        }
                        var if_res963 = if_res962;
                    }
                    var if_res964 = if_res963;
                } else {
                    var work_vec2239 = M0.make_vector(n2221 + M0.ceiling(n2221 / 2), false);
                    M0.vector_copy_bang_(work_vec2239, 0, vec2217, start2219, end2220);
                    generic_sort1997(work_vec2239, less_than_p2218, n2221);
                    var if_res964 = M0.vector_copy_bang_(dst_vec2222, dst_start2223, work_vec2239, 0, n2221);
                }
                var if_res965 = if_res964;
            }
            var if_res966 = if_res965;
        }
        var if_res967 = if_res966;
    }
    if_res967;
    if (false !== false) {
        var if_res968 = dst_vec2222;
    } else {
        var if_res968 = M0.rvoid();
    }
    return if_res968;
};
var cl943 = function(vec2240, less_than_p2241, start2242, end2243, getkey2244, cache_keys_p2245) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey2244 !== false) {
        var if_res969 = M0.not(M0.eq_p(M0.values, getkey2244));
    } else {
        var if_res969 = false;
    }
    if (if_res969 !== false) {
        var n2246 = end2243 - start2242;
        if (false !== false) {
            var if_res970 = M0.make_vector(n2246);
        } else {
            var if_res970 = vec2240;
        }
        var dst_vec2247 = if_res970;
        if (false !== false) {
            var if_res971 = 0;
        } else {
            var if_res971 = start2242;
        }
        var dst_start2248 = if_res971;
        if (M1.unsafe_fx_eq_(n2246, 0) !== false) {
            var if_res992 = M0.rvoid();
        } else {
            if (cache_keys_p2245 !== false) {
                var work_vec2249 = M0.make_vector(n2246 + M0.ceiling(n2246 / 2), true);
                var loop2250 = function(i2251) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i2251, n2246) !== false) {
                        var x2252 = M1.unsafe_vector_ref(vec2240, M1.unsafe_fx_plus_(i2251, start2242));
                        M1.unsafe_vector_set_bang_(work_vec2249, i2251, M0.cons(getkey2244(x2252), x2252));
                        var if_res972 = loop2250(M1.unsafe_fx_plus_(i2251, 1));
                    } else {
                        var if_res972 = M0.rvoid();
                    }
                    return if_res972;
                };
                loop2250(0);
                generic_sort_by_key2053(work_vec2249, less_than_p2241, n2246, M1.unsafe_car);
                var loop2253 = function(i2254) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i2254, n2246) !== false) {
                        M1.unsafe_vector_set_bang_(dst_vec2247, M1.unsafe_fx_plus_(i2254, dst_start2248), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec2249, i2254)));
                        var if_res973 = loop2253(M1.unsafe_fx_plus_(i2254, 1));
                    } else {
                        var if_res973 = M0.rvoid();
                    }
                    return if_res973;
                };
                var if_res991 = loop2253(0);
            } else {
                var loop2255 = function(prev_val2256, next_index2257) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var or_part2258 = M1.unsafe_fx_eq_(next_index2257, end2243);
                    if (or_part2258 !== false) {
                        var if_res976 = or_part2258;
                    } else {
                        var next_val2259 = M1.unsafe_vector_ref(vec2240, next_index2257);
                        if (getkey2244 !== false) {
                            var if_res974 = less_than_p2241(getkey2244(next_val2259), getkey2244(prev_val2256));
                        } else {
                            var if_res974 = less_than_p2241(next_val2259, prev_val2256);
                        }
                        if (M0.not(if_res974) !== false) {
                            var if_res975 = loop2255(next_val2259, M1.unsafe_fx_plus_(next_index2257, 1));
                        } else {
                            var if_res975 = false;
                        }
                        var if_res976 = if_res975;
                    }
                    return if_res976;
                };
                if (loop2255(M1.unsafe_vector_ref(vec2240, start2242), M1.unsafe_fx_plus_(start2242, 1)) !== false) {
                    if (false !== false) {
                        var if_res977 = M0.vector_copy_bang_(dst_vec2247, dst_start2248, vec2240, start2242, end2243);
                    } else {
                        var if_res977 = M0.rvoid();
                    }
                    var if_res990 = if_res977;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n2246, 3) !== false) {
                        if (false !== false) {
                            var if_res978 = M0.vector_copy_bang_(dst_vec2247, dst_start2248, vec2240, start2242, end2243);
                        } else {
                            var if_res978 = M0.rvoid();
                        }
                        if_res978;
                        if (M1.unsafe_fx_eq_(n2246, 1) !== false) {
                            var if_res988 = M0.rvoid();
                        } else {
                            if (M1.unsafe_fx_eq_(n2246, 2) !== false) {
                                var tmp2260 = M1.unsafe_vector_ref(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 0));
                                M1.unsafe_vector_set_bang_(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 0), M1.unsafe_vector_ref(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 1)));
                                var if_res987 = M1.unsafe_vector_set_bang_(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 1), tmp2260);
                            } else {
                                var a2261 = M1.unsafe_vector_ref(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 0));
                                var b2262 = M1.unsafe_vector_ref(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 1));
                                var c2263 = M1.unsafe_vector_ref(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 2));
                                if (getkey2244 !== false) {
                                    var if_res979 = less_than_p2241(getkey2244(b2262), getkey2244(a2261));
                                } else {
                                    var if_res979 = less_than_p2241(b2262, a2261);
                                }
                                if (if_res979 !== false) {
                                    if (getkey2244 !== false) {
                                        var if_res980 = less_than_p2241(getkey2244(c2263), getkey2244(b2262));
                                    } else {
                                        var if_res980 = less_than_p2241(c2263, b2262);
                                    }
                                    if (if_res980 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 0), c2263);
                                        var if_res983 = M1.unsafe_vector_set_bang_(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 2), a2261);
                                    } else {
                                        if (getkey2244 !== false) {
                                            var if_res981 = less_than_p2241(getkey2244(c2263), getkey2244(a2261));
                                        } else {
                                            var if_res981 = less_than_p2241(c2263, a2261);
                                        }
                                        if (if_res981 !== false) {
                                            M1.unsafe_vector_set_bang_(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 0), b2262);
                                            M1.unsafe_vector_set_bang_(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 1), c2263);
                                            var if_res982 = M1.unsafe_vector_set_bang_(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 2), a2261);
                                        } else {
                                            M1.unsafe_vector_set_bang_(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 0), b2262);
                                            var if_res982 = M1.unsafe_vector_set_bang_(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 1), a2261);
                                        }
                                        var if_res983 = if_res982;
                                    }
                                    var if_res986 = if_res983;
                                } else {
                                    if (getkey2244 !== false) {
                                        var if_res984 = less_than_p2241(getkey2244(c2263), getkey2244(a2261));
                                    } else {
                                        var if_res984 = less_than_p2241(c2263, a2261);
                                    }
                                    if (if_res984 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 0), c2263);
                                        M1.unsafe_vector_set_bang_(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 1), a2261);
                                        var if_res985 = M1.unsafe_vector_set_bang_(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 2), b2262);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 1), c2263);
                                        var if_res985 = M1.unsafe_vector_set_bang_(dst_vec2247, M1.unsafe_fx_plus_(dst_start2248, 2), b2262);
                                    }
                                    var if_res986 = if_res985;
                                }
                                var if_res987 = if_res986;
                            }
                            var if_res988 = if_res987;
                        }
                        var if_res989 = if_res988;
                    } else {
                        var work_vec2264 = M0.make_vector(n2246 + M0.ceiling(n2246 / 2), false);
                        M0.vector_copy_bang_(work_vec2264, 0, vec2240, start2242, end2243);
                        generic_sort_by_key2053(work_vec2264, less_than_p2241, n2246, getkey2244);
                        var if_res989 = M0.vector_copy_bang_(dst_vec2247, dst_start2248, work_vec2264, 0, n2246);
                    }
                    var if_res990 = if_res989;
                }
                var if_res991 = if_res990;
            }
            var if_res992 = if_res991;
        }
        if_res992;
        if (false !== false) {
            var if_res993 = dst_vec2247;
        } else {
            var if_res993 = M0.rvoid();
        }
        var if_res994 = if_res993;
    } else {
        var if_res994 = vector_sort_bang_(vec2240, less_than_p2241, start2242, end2243);
    }
    return if_res994;
};
var let_result1100 = M0.values(temp1099, temp1048, $rjs_core.attachProcedureArity(function() {
    var fixed_lam944 = {
        '4': cl942,
        '6': cl943
    } [arguments.length];
    if (fixed_lam944 !== undefined) {
        return fixed_lam944.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 6]));
var sort = let_result1100.getAt(0);
var vector_sort = let_result1100.getAt(1);
var vector_sort_bang_ = let_result1100.getAt(2);
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    vector_sort_bang_,
    vector_sort,
    sort
};