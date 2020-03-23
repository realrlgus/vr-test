!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e(require("clappr")))
    : "function" == typeof define && define.amd
    ? define(["clappr"], e)
    : (t.Video360 = e(t.Clappr));
})(this, function(h) {
  "use strict";
  function r(t, e) {
    for (var i = 0; i < e.length; i++) {
      var r = e[i];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function l(t) {
    return (l = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function n(t, e) {
    return (n =
      Object.setPrototypeOf ||
      function(t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function u(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  var e = function() {
      var t = /iphone.*(7|8|9)_[0-9]/i.test(navigator.userAgent),
        e = /(iPhone|iPod).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
      return t || e;
    },
    i = function() {
      return /trident|edge/i.test(navigator.userAgent);
    };
  function c(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(t, e) {
    for (var i = 0; i < e.length; i++) {
      var r = e[i];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function t(t, e, i) {
    return e && a(t.prototype, e), i && a(t, i), t;
  }
  function o(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 }
    })),
      e && p(t, e);
  }
  function s(t) {
    return (s = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function p(t, e) {
    return (p =
      Object.setPrototypeOf ||
      function(t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function d(t, e) {
    return !e || ("object" != typeof e && "function" != typeof e)
      ? (function(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        })(t)
      : e;
  }
  function f(t, e, i) {
    return (f =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function(t, e, i) {
            var r = (function(t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = s(t));

              );
              return t;
            })(t, e);
            if (r) {
              var n = Object.getOwnPropertyDescriptor(r, e);
              return n.get ? n.get.call(i) : n.value;
            }
          })(t, e, i || t);
  }
  var m,
    v,
    g,
    y,
    x,
    M,
    b,
    _,
    S,
    w,
    E,
    T,
    A,
    L,
    R,
    C,
    U,
    P,
    F,
    N,
    D,
    B,
    I,
    O,
    V,
    z,
    k,
    G,
    W,
    j,
    X,
    H,
    q,
    Y,
    Z,
    Q,
    J,
    K,
    $,
    tt,
    et,
    it,
    rt,
    nt,
    at,
    ot,
    st,
    ht,
    lt,
    ut,
    ct,
    pt,
    dt,
    ft,
    mt,
    vt,
    gt,
    yt,
    xt,
    Mt,
    bt,
    _t,
    St,
    wt,
    Et,
    Tt,
    At,
    Lt,
    Rt,
    Ct,
    Ut,
    Pt,
    Ft,
    Nt,
    Dt,
    Bt,
    It,
    Ot,
    Vt,
    zt,
    kt,
    Gt,
    Wt,
    jt,
    Xt,
    Ht,
    qt,
    Yt,
    Zt,
    Qt,
    Jt,
    Kt,
    $t,
    te,
    ee,
    ie,
    re,
    ne,
    ae,
    oe,
    se,
    he,
    le,
    ue,
    ce,
    pe,
    de,
    fe,
    me,
    ve,
    ge,
    ye,
    xe,
    Me,
    be,
    _e,
    Se,
    we,
    Ee,
    Te,
    Ae,
    Le,
    Re,
    Ce,
    Ue,
    Pe,
    Fe,
    Ne,
    De,
    Be,
    Ie,
    Oe = { REVISION: "75" },
    Ve = Oe;
  function ze(t, e, i) {
    return (
      i < 0 && (i += 1),
      1 < i && --i,
      i < 1 / 6
        ? t + 6 * (e - t) * i
        : i < 0.5
        ? e
        : i < 2 / 3
        ? t + 6 * (e - t) * (2 / 3 - i)
        : t
    );
  }
  function ke(t, e, i, r, n, a, o) {
    return (
      Oe.Triangle.barycoordFromPoint(t, e, i, r, Le),
      n.multiplyScalar(Le.x),
      a.multiplyScalar(Le.y),
      o.multiplyScalar(Le.z),
      n.add(a).add(o),
      n.clone()
    );
  }
  function Ge(t, e, i, r, n, a, o) {
    var s = t.material;
    if (
      null ===
      (s.side === Oe.BackSide
        ? i.intersectTriangle(a, n, r, !0, o)
        : i.intersectTriangle(r, n, a, s.side !== Oe.DoubleSide, o))
    )
      return null;
    Ce.copy(o), Ce.applyMatrix4(t.matrixWorld);
    var h = e.ray.origin.distanceTo(Ce);
    return h < e.near || h > e.far
      ? null
      : { distance: h, point: Ce.clone(), object: t };
  }
  function We(t, e, i, r, n, a, o, s) {
    xe.fromArray(r, 3 * a), Me.fromArray(r, 3 * o), be.fromArray(r, 3 * s);
    var h = Ge(t, e, i, xe, Me, be, Re);
    return (
      h &&
        (n &&
          (Ee.fromArray(n, 2 * a),
          Te.fromArray(n, 2 * o),
          Ae.fromArray(n, 2 * s),
          (h.uv = ke(Re, xe, Me, be, Ee, Te, Ae))),
        (h.face = new Oe.Face3(a, o, s, Oe.Triangle.normal(xe, Me, be))),
        (h.faceIndex = a)),
      h
    );
  }
  function je(t) {
    switch (t) {
      case Oe.LinearEncoding:
        return ["Linear", "( value )"];
      case Oe.sRGBEncoding:
        return ["sRGB", "( value )"];
      case Oe.RGBEEncoding:
        return ["RGBE", "( value )"];
      case Oe.RGBM7Encoding:
        return ["RGBM", "( value, 7.0 )"];
      case Oe.RGBM16Encoding:
        return ["RGBM", "( value, 16.0 )"];
      case Oe.RGBDEncoding:
        return ["RGBD", "( value, 256.0 )"];
      case Oe.GammaEncoding:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
      default:
        throw new Error("unsupported encoding: " + t);
    }
  }
  function Xe(t, e) {
    var i = je(e);
    return (
      "vec4 " +
      t +
      "( vec4 value ) { return " +
      i[0] +
      "ToLinear" +
      i[1] +
      "; }"
    );
  }
  function He(t) {
    return "" !== t;
  }
  function qe(t, e) {
    return t
      .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
      .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
      .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
      .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights);
  }
  function Ye(t) {
    return t.replace(/#include +<([\w\d.]+)>/g, function(t, e) {
      var i = Oe.ShaderChunk[e];
      if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
      return Ye(i);
    });
  }
  function Ze(t) {
    return t.replace(
      /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
      function(t, e, i, r) {
        for (var n = "", a = parseInt(e); a < parseInt(i); a++)
          n += r.replace(/\[ i \]/g, "[ " + a + " ]");
        return n;
      }
    );
  }
  void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
    void 0 === Math.sign &&
      (Math.sign = function(t) {
        return t < 0 ? -1 : 0 < t ? 1 : +t;
      }),
    void 0 === Function.prototype.name &&
      void 0 !== Object.defineProperty &&
      Object.defineProperty(Function.prototype, "name", {
        get: function() {
          return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];
        }
      }),
    void 0 === Object.assign &&
      Object.defineProperty(Object, "assign", {
        writable: !0,
        configurable: !0,
        value: function(t) {
          if (null == t)
            throw new TypeError("Cannot convert first argument to object");
          for (var e = Object(t), i = 1, r = arguments.length; i !== r; ++i) {
            var n = arguments[i];
            if (null != n) {
              n = Object(n);
              for (var a = Object.keys(n), o = 0, s = a.length; o !== s; ++o) {
                var h = a[o],
                  l = Object.getOwnPropertyDescriptor(n, h);
                void 0 !== l && l.enumerable && (e[h] = n[h]);
              }
            }
          }
          return e;
        }
      }),
    (Oe.MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2 }),
    (Oe.CullFaceNone = 0),
    (Oe.CullFaceBack = 1),
    (Oe.CullFaceFront = 2),
    (Oe.CullFaceFrontBack = 3),
    (Oe.FrontFaceDirectionCW = 0),
    (Oe.FrontFaceDirectionCCW = 1),
    (Oe.BasicShadowMap = 0),
    (Oe.PCFShadowMap = 1),
    (Oe.PCFSoftShadowMap = 2),
    (Oe.FrontSide = 0),
    (Oe.BackSide = 1),
    (Oe.DoubleSide = 2),
    (Oe.FlatShading = 1),
    (Oe.SmoothShading = 2),
    (Oe.NoColors = 0),
    (Oe.FaceColors = 1),
    (Oe.VertexColors = 2),
    (Oe.NoBlending = 0),
    (Oe.NormalBlending = 1),
    (Oe.AdditiveBlending = 2),
    (Oe.SubtractiveBlending = 3),
    (Oe.MultiplyBlending = 4),
    (Oe.CustomBlending = 5),
    (Oe.AddEquation = 100),
    (Oe.SubtractEquation = 101),
    (Oe.ReverseSubtractEquation = 102),
    (Oe.MinEquation = 103),
    (Oe.MaxEquation = 104),
    (Oe.ZeroFactor = 200),
    (Oe.OneFactor = 201),
    (Oe.SrcColorFactor = 202),
    (Oe.OneMinusSrcColorFactor = 203),
    (Oe.SrcAlphaFactor = 204),
    (Oe.OneMinusSrcAlphaFactor = 205),
    (Oe.DstAlphaFactor = 206),
    (Oe.OneMinusDstAlphaFactor = 207),
    (Oe.DstColorFactor = 208),
    (Oe.OneMinusDstColorFactor = 209),
    (Oe.SrcAlphaSaturateFactor = 210),
    (Oe.NeverDepth = 0),
    (Oe.AlwaysDepth = 1),
    (Oe.LessDepth = 2),
    (Oe.LessEqualDepth = 3),
    (Oe.EqualDepth = 4),
    (Oe.GreaterEqualDepth = 5),
    (Oe.GreaterDepth = 6),
    (Oe.NotEqualDepth = 7),
    (Oe.MultiplyOperation = 0),
    (Oe.MixOperation = 1),
    (Oe.AddOperation = 2),
    (Oe.NoToneMapping = 0),
    (Oe.LinearToneMapping = 1),
    (Oe.ReinhardToneMapping = 2),
    (Oe.Uncharted2ToneMapping = 3),
    (Oe.CineonToneMapping = 4),
    (Oe.UVMapping = 300),
    (Oe.CubeReflectionMapping = 301),
    (Oe.CubeRefractionMapping = 302),
    (Oe.EquirectangularReflectionMapping = 303),
    (Oe.EquirectangularRefractionMapping = 304),
    (Oe.SphericalReflectionMapping = 305),
    (Oe.CubeUVReflectionMapping = 306),
    (Oe.CubeUVRefractionMapping = 307),
    (Oe.RepeatWrapping = 1e3),
    (Oe.ClampToEdgeWrapping = 1001),
    (Oe.MirroredRepeatWrapping = 1002),
    (Oe.NearestFilter = 1003),
    (Oe.NearestMipMapNearestFilter = 1004),
    (Oe.NearestMipMapLinearFilter = 1005),
    (Oe.LinearFilter = 1006),
    (Oe.LinearMipMapNearestFilter = 1007),
    (Oe.LinearMipMapLinearFilter = 1008),
    (Oe.UnsignedByteType = 1009),
    (Oe.ByteType = 1010),
    (Oe.ShortType = 1011),
    (Oe.UnsignedShortType = 1012),
    (Oe.IntType = 1013),
    (Oe.UnsignedIntType = 1014),
    (Oe.FloatType = 1015),
    (Oe.HalfFloatType = 1025),
    (Oe.UnsignedShort4444Type = 1016),
    (Oe.UnsignedShort5551Type = 1017),
    (Oe.UnsignedShort565Type = 1018),
    (Oe.AlphaFormat = 1019),
    (Oe.RGBFormat = 1020),
    (Oe.RGBAFormat = 1021),
    (Oe.LuminanceFormat = 1022),
    (Oe.LuminanceAlphaFormat = 1023),
    (Oe.RGBEFormat = Oe.RGBAFormat),
    (Oe.RGB_S3TC_DXT1_Format = 2001),
    (Oe.RGBA_S3TC_DXT1_Format = 2002),
    (Oe.RGBA_S3TC_DXT3_Format = 2003),
    (Oe.RGBA_S3TC_DXT5_Format = 2004),
    (Oe.RGB_PVRTC_4BPPV1_Format = 2100),
    (Oe.RGB_PVRTC_2BPPV1_Format = 2101),
    (Oe.RGBA_PVRTC_4BPPV1_Format = 2102),
    (Oe.RGBA_PVRTC_2BPPV1_Format = 2103),
    (Oe.RGB_ETC1_Format = 2151),
    (Oe.LoopOnce = 2200),
    (Oe.LoopRepeat = 2201),
    (Oe.LoopPingPong = 2202),
    (Oe.InterpolateDiscrete = 2300),
    (Oe.InterpolateLinear = 2301),
    (Oe.InterpolateSmooth = 2302),
    (Oe.ZeroCurvatureEnding = 2400),
    (Oe.ZeroSlopeEnding = 2401),
    (Oe.WrapAroundEnding = 2402),
    (Oe.TrianglesDrawMode = 0),
    (Oe.TriangleStripDrawMode = 1),
    (Oe.TriangleFanDrawMode = 2),
    (Oe.LinearEncoding = 3e3),
    (Oe.sRGBEncoding = 3001),
    (Oe.GammaEncoding = 3007),
    (Oe.RGBEEncoding = 3002),
    (Oe.LogLuvEncoding = 3003),
    (Oe.RGBM7Encoding = 3004),
    (Oe.RGBM16Encoding = 3005),
    (Oe.RGBDEncoding = 3006),
    (Oe.Math = {
      generateUUID:
        ((y = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
          ""
        )),
        (x = new Array(36)),
        (M = 0),
        function() {
          for (var t = 0; t < 36; t++)
            8 === t || 13 === t || 18 === t || 23 === t
              ? (x[t] = "-")
              : 14 === t
              ? (x[t] = "4")
              : (M <= 2 && (M = (33554432 + 16777216 * Math.random()) | 0),
                (g = 15 & M),
                (M >>= 4),
                (x[t] = y[19 === t ? (3 & g) | 8 : g]));
          return x.join("");
        }),
      clamp: function(t, e, i) {
        return Math.max(e, Math.min(i, t));
      },
      euclideanModulo: function(t, e) {
        return ((t % e) + e) % e;
      },
      mapLinear: function(t, e, i, r, n) {
        return r + ((t - e) * (n - r)) / (i - e);
      },
      smoothstep: function(t, e, i) {
        return t <= e
          ? 0
          : i <= t
          ? 1
          : (t = (t - e) / (i - e)) * t * (3 - 2 * t);
      },
      smootherstep: function(t, e, i) {
        return t <= e
          ? 0
          : i <= t
          ? 1
          : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10);
      },
      random16: function() {
        return Math.random();
      },
      randInt: function(t, e) {
        return t + Math.floor(Math.random() * (e - t + 1));
      },
      randFloat: function(t, e) {
        return t + Math.random() * (e - t);
      },
      randFloatSpread: function(t) {
        return t * (0.5 - Math.random());
      },
      degToRad:
        ((v = Math.PI / 180),
        function(t) {
          return t * v;
        }),
      radToDeg:
        ((m = 180 / Math.PI),
        function(t) {
          return t * m;
        }),
      isPowerOfTwo: function(t) {
        return 0 == (t & (t - 1)) && 0 !== t;
      },
      nearestPowerOfTwo: function(t) {
        return Math.pow(2, Math.round(Math.log(t) / Math.LN2));
      },
      nextPowerOfTwo: function(t) {
        return (
          t--,
          (t |= t >> 1),
          (t |= t >> 2),
          (t |= t >> 4),
          (t |= t >> 8),
          (t |= t >> 16),
          ++t
        );
      }
    }),
    (Oe.Color = function(t) {
      return 3 === arguments.length ? this.fromArray(arguments) : this.set(t);
    }),
    (Oe.Color.prototype = {
      constructor: Oe.Color,
      r: 1,
      g: 1,
      b: 1,
      set: function(t) {
        return (
          t instanceof Oe.Color
            ? this.copy(t)
            : "number" == typeof t
            ? this.setHex(t)
            : "string" == typeof t && this.setStyle(t),
          this
        );
      },
      setScalar: function(t) {
        (this.r = t), (this.g = t), (this.b = t);
      },
      setHex: function(t) {
        return (
          (t = Math.floor(t)),
          (this.r = ((t >> 16) & 255) / 255),
          (this.g = ((t >> 8) & 255) / 255),
          (this.b = (255 & t) / 255),
          this
        );
      },
      setRGB: function(t, e, i) {
        return (this.r = t), (this.g = e), (this.b = i), this;
      },
      setHSL: function(t, e, i) {
        if (
          ((t = Oe.Math.euclideanModulo(t, 1)),
          (e = Oe.Math.clamp(e, 0, 1)),
          (i = Oe.Math.clamp(i, 0, 1)),
          0 === e)
        )
          this.r = this.g = this.b = i;
        else {
          var r = i <= 0.5 ? i * (1 + e) : i + e - i * e,
            n = 2 * i - r;
          (this.r = ze(n, r, t + 1 / 3)),
            (this.g = ze(n, r, t)),
            (this.b = ze(n, r, t - 1 / 3));
        }
        return this;
      },
      setStyle: function(t) {
        var e;
        if ((e = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t))) {
          var i,
            r = e[1],
            n = e[2];
          switch (r) {
            case "rgb":
            case "rgba":
              if (
                (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                  n
                ))
              )
                return (
                  (this.r = Math.min(255, parseInt(i[1], 10)) / 255),
                  (this.g = Math.min(255, parseInt(i[2], 10)) / 255),
                  (this.b = Math.min(255, parseInt(i[3], 10)) / 255),
                  i[5],
                  this
                );
              if (
                (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                  n
                ))
              )
                return (
                  (this.r = Math.min(100, parseInt(i[1], 10)) / 100),
                  (this.g = Math.min(100, parseInt(i[2], 10)) / 100),
                  (this.b = Math.min(100, parseInt(i[3], 10)) / 100),
                  i[5],
                  this
                );
              break;
            case "hsl":
            case "hsla":
              if (
                (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                  n
                ))
              ) {
                var a = parseFloat(i[1]) / 360,
                  o = parseInt(i[2], 10) / 100,
                  s = parseInt(i[3], 10) / 100;
                return i[5], this.setHSL(a, o, s);
              }
          }
        } else if ((e = /^\#([A-Fa-f0-9]+)$/.exec(t))) {
          var h,
            l = (h = e[1]).length;
          if (3 === l)
            return (
              (this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255),
              (this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255),
              (this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255),
              this
            );
          if (6 === l)
            return (
              (this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255),
              (this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255),
              (this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255),
              this
            );
        }
        t &&
          0 < t.length &&
          void 0 !== (h = Oe.ColorKeywords[t]) &&
          this.setHex(h);
        return this;
      },
      clone: function() {
        return new this.constructor(this.r, this.g, this.b);
      },
      copy: function(t) {
        return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
      },
      copyGammaToLinear: function(t, e) {
        return (
          void 0 === e && (e = 2),
          (this.r = Math.pow(t.r, e)),
          (this.g = Math.pow(t.g, e)),
          (this.b = Math.pow(t.b, e)),
          this
        );
      },
      copyLinearToGamma: function(t, e) {
        void 0 === e && (e = 2);
        var i = 0 < e ? 1 / e : 1;
        return (
          (this.r = Math.pow(t.r, i)),
          (this.g = Math.pow(t.g, i)),
          (this.b = Math.pow(t.b, i)),
          this
        );
      },
      convertGammaToLinear: function() {
        var t = this.r,
          e = this.g,
          i = this.b;
        return (this.r = t * t), (this.g = e * e), (this.b = i * i), this;
      },
      convertLinearToGamma: function() {
        return (
          (this.r = Math.sqrt(this.r)),
          (this.g = Math.sqrt(this.g)),
          (this.b = Math.sqrt(this.b)),
          this
        );
      },
      getHex: function() {
        return (
          ((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ ((255 * this.b) << 0)
        );
      },
      getHexString: function() {
        return ("000000" + this.getHex().toString(16)).slice(-6);
      },
      getHSL: function(t) {
        var e,
          i,
          r = t || { h: 0, s: 0, l: 0 },
          n = this.r,
          a = this.g,
          o = this.b,
          s = Math.max(n, a, o),
          h = Math.min(n, a, o),
          l = (h + s) / 2;
        if (h === s) i = e = 0;
        else {
          var u = s - h;
          switch (((i = l <= 0.5 ? u / (s + h) : u / (2 - s - h)), s)) {
            case n:
              e = (a - o) / u + (a < o ? 6 : 0);
              break;
            case a:
              e = (o - n) / u + 2;
              break;
            case o:
              e = (n - a) / u + 4;
          }
          e /= 6;
        }
        return (r.h = e), (r.s = i), (r.l = l), r;
      },
      getStyle: function() {
        return (
          "rgb(" +
          ((255 * this.r) | 0) +
          "," +
          ((255 * this.g) | 0) +
          "," +
          ((255 * this.b) | 0) +
          ")"
        );
      },
      offsetHSL: function(t, e, i) {
        var r = this.getHSL();
        return (
          (r.h += t), (r.s += e), (r.l += i), this.setHSL(r.h, r.s, r.l), this
        );
      },
      add: function(t) {
        return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
      },
      addColors: function(t, e) {
        return (
          (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
        );
      },
      addScalar: function(t) {
        return (this.r += t), (this.g += t), (this.b += t), this;
      },
      multiply: function(t) {
        return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
      },
      multiplyScalar: function(t) {
        return (this.r *= t), (this.g *= t), (this.b *= t), this;
      },
      lerp: function(t, e) {
        return (
          (this.r += (t.r - this.r) * e),
          (this.g += (t.g - this.g) * e),
          (this.b += (t.b - this.b) * e),
          this
        );
      },
      equals: function(t) {
        return t.r === this.r && t.g === this.g && t.b === this.b;
      },
      fromArray: function(t, e) {
        return (
          void 0 === e && (e = 0),
          (this.r = t[e]),
          (this.g = t[e + 1]),
          (this.b = t[e + 2]),
          this
        );
      },
      toArray: function(t, e) {
        return (
          void 0 === t && (t = []),
          void 0 === e && (e = 0),
          (t[e] = this.r),
          (t[e + 1] = this.g),
          (t[e + 2] = this.b),
          t
        );
      }
    }),
    (Oe.ColorKeywords = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    }),
    (Oe.Vector2 = function(t, e) {
      (this.x = t || 0), (this.y = e || 0);
    }),
    (Oe.Vector2.prototype = {
      constructor: Oe.Vector2,
      get width() {
        return this.x;
      },
      set width(t) {
        this.x = t;
      },
      get height() {
        return this.y;
      },
      set height(t) {
        this.y = t;
      },
      set: function(t, e) {
        return (this.x = t), (this.y = e), this;
      },
      setScalar: function(t) {
        return (this.x = t), (this.y = t), this;
      },
      setX: function(t) {
        return (this.x = t), this;
      },
      setY: function(t) {
        return (this.y = t), this;
      },
      setComponent: function(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;
          case 1:
            this.y = e;
            break;
          default:
            throw new Error("index is out of range: " + t);
        }
      },
      getComponent: function(t) {
        switch (t) {
          case 0:
            return this.x;
          case 1:
            return this.y;
          default:
            throw new Error("index is out of range: " + t);
        }
      },
      clone: function() {
        return new this.constructor(this.x, this.y);
      },
      copy: function(t) {
        return (this.x = t.x), (this.y = t.y), this;
      },
      add: function(t, e) {
        return void 0 !== e
          ? this.addVectors(t, e)
          : ((this.x += t.x), (this.y += t.y), this);
      },
      addScalar: function(t) {
        return (this.x += t), (this.y += t), this;
      },
      addVectors: function(t, e) {
        return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
      },
      addScaledVector: function(t, e) {
        return (this.x += t.x * e), (this.y += t.y * e), this;
      },
      sub: function(t, e) {
        return void 0 !== e
          ? this.subVectors(t, e)
          : ((this.x -= t.x), (this.y -= t.y), this);
      },
      subScalar: function(t) {
        return (this.x -= t), (this.y -= t), this;
      },
      subVectors: function(t, e) {
        return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
      },
      multiply: function(t) {
        return (this.x *= t.x), (this.y *= t.y), this;
      },
      multiplyScalar: function(t) {
        return (
          isFinite(t)
            ? ((this.x *= t), (this.y *= t))
            : ((this.x = 0), (this.y = 0)),
          this
        );
      },
      divide: function(t) {
        return (this.x /= t.x), (this.y /= t.y), this;
      },
      divideScalar: function(t) {
        return this.multiplyScalar(1 / t);
      },
      min: function(t) {
        return (
          (this.x = Math.min(this.x, t.x)),
          (this.y = Math.min(this.y, t.y)),
          this
        );
      },
      max: function(t) {
        return (
          (this.x = Math.max(this.x, t.x)),
          (this.y = Math.max(this.y, t.y)),
          this
        );
      },
      clamp: function(t, e) {
        return (
          (this.x = Math.max(t.x, Math.min(e.x, this.x))),
          (this.y = Math.max(t.y, Math.min(e.y, this.y))),
          this
        );
      },
      clampScalar: function(t, e) {
        return (
          void 0 === b && ((b = new Oe.Vector2()), (_ = new Oe.Vector2())),
          b.set(t, t),
          _.set(e, e),
          this.clamp(b, _)
        );
      },
      clampLength: function(t, e) {
        var i = this.length();
        return this.multiplyScalar(Math.max(t, Math.min(e, i)) / i), this;
      },
      floor: function() {
        return (
          (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
        );
      },
      ceil: function() {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
      },
      round: function() {
        return (
          (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
        );
      },
      roundToZero: function() {
        return (
          (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
          (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
          this
        );
      },
      negate: function() {
        return (this.x = -this.x), (this.y = -this.y), this;
      },
      dot: function(t) {
        return this.x * t.x + this.y * t.y;
      },
      lengthSq: function() {
        return this.x * this.x + this.y * this.y;
      },
      length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      },
      lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y);
      },
      normalize: function() {
        return this.divideScalar(this.length());
      },
      angle: function() {
        var t = Math.atan2(this.y, this.x);
        return t < 0 && (t += 2 * Math.PI), t;
      },
      distanceTo: function(t) {
        return Math.sqrt(this.distanceToSquared(t));
      },
      distanceToSquared: function(t) {
        var e = this.x - t.x,
          i = this.y - t.y;
        return e * e + i * i;
      },
      setLength: function(t) {
        return this.multiplyScalar(t / this.length());
      },
      lerp: function(t, e) {
        return (
          (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
        );
      },
      lerpVectors: function(t, e, i) {
        return (
          this.subVectors(e, t)
            .multiplyScalar(i)
            .add(t),
          this
        );
      },
      equals: function(t) {
        return t.x === this.x && t.y === this.y;
      },
      fromArray: function(t, e) {
        return (
          void 0 === e && (e = 0), (this.x = t[e]), (this.y = t[e + 1]), this
        );
      },
      toArray: function(t, e) {
        return (
          void 0 === t && (t = []),
          void 0 === e && (e = 0),
          (t[e] = this.x),
          (t[e + 1] = this.y),
          t
        );
      },
      fromAttribute: function(t, e, i) {
        return (
          void 0 === i && (i = 0),
          (e = e * t.itemSize + i),
          (this.x = t.array[e]),
          (this.y = t.array[e + 1]),
          this
        );
      },
      rotateAround: function(t, e) {
        var i = Math.cos(e),
          r = Math.sin(e),
          n = this.x - t.x,
          a = this.y - t.y;
        return (
          (this.x = n * i - a * r + t.x), (this.y = n * r + a * i + t.y), this
        );
      }
    }),
    (Oe.Vector3 = function(t, e, i) {
      (this.x = t || 0), (this.y = e || 0), (this.z = i || 0);
    }),
    (Oe.Vector3.prototype = {
      constructor: Oe.Vector3,
      set: function(t, e, i) {
        return (this.x = t), (this.y = e), (this.z = i), this;
      },
      setScalar: function(t) {
        return (this.x = t), (this.y = t), (this.z = t), this;
      },
      setX: function(t) {
        return (this.x = t), this;
      },
      setY: function(t) {
        return (this.y = t), this;
      },
      setZ: function(t) {
        return (this.z = t), this;
      },
      setComponent: function(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;
          case 1:
            this.y = e;
            break;
          case 2:
            this.z = e;
            break;
          default:
            throw new Error("index is out of range: " + t);
        }
      },
      getComponent: function(t) {
        switch (t) {
          case 0:
            return this.x;
          case 1:
            return this.y;
          case 2:
            return this.z;
          default:
            throw new Error("index is out of range: " + t);
        }
      },
      clone: function() {
        return new this.constructor(this.x, this.y, this.z);
      },
      copy: function(t) {
        return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
      },
      add: function(t, e) {
        return void 0 !== e
          ? this.addVectors(t, e)
          : ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
      },
      addScalar: function(t) {
        return (this.x += t), (this.y += t), (this.z += t), this;
      },
      addVectors: function(t, e) {
        return (
          (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this
        );
      },
      addScaledVector: function(t, e) {
        return (
          (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
        );
      },
      sub: function(t, e) {
        return void 0 !== e
          ? this.subVectors(t, e)
          : ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
      },
      subScalar: function(t) {
        return (this.x -= t), (this.y -= t), (this.z -= t), this;
      },
      subVectors: function(t, e) {
        return (
          (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this
        );
      },
      multiply: function(t, e) {
        return void 0 !== e
          ? this.multiplyVectors(t, e)
          : ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
      },
      multiplyScalar: function(t) {
        return (
          isFinite(t)
            ? ((this.x *= t), (this.y *= t), (this.z *= t))
            : ((this.x = 0), (this.y = 0), (this.z = 0)),
          this
        );
      },
      multiplyVectors: function(t, e) {
        return (
          (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this
        );
      },
      applyEuler: function(t) {
        return (
          void 0 === P && (P = new Oe.Quaternion()),
          this.applyQuaternion(P.setFromEuler(t)),
          this
        );
      },
      applyAxisAngle: function(t, e) {
        return (
          void 0 === U && (U = new Oe.Quaternion()),
          this.applyQuaternion(U.setFromAxisAngle(t, e)),
          this
        );
      },
      applyMatrix3: function(t) {
        var e = this.x,
          i = this.y,
          r = this.z,
          n = t.elements;
        return (
          (this.x = n[0] * e + n[3] * i + n[6] * r),
          (this.y = n[1] * e + n[4] * i + n[7] * r),
          (this.z = n[2] * e + n[5] * i + n[8] * r),
          this
        );
      },
      applyMatrix4: function(t) {
        var e = this.x,
          i = this.y,
          r = this.z,
          n = t.elements;
        return (
          (this.x = n[0] * e + n[4] * i + n[8] * r + n[12]),
          (this.y = n[1] * e + n[5] * i + n[9] * r + n[13]),
          (this.z = n[2] * e + n[6] * i + n[10] * r + n[14]),
          this
        );
      },
      applyProjection: function(t) {
        var e = this.x,
          i = this.y,
          r = this.z,
          n = t.elements,
          a = 1 / (n[3] * e + n[7] * i + n[11] * r + n[15]);
        return (
          (this.x = (n[0] * e + n[4] * i + n[8] * r + n[12]) * a),
          (this.y = (n[1] * e + n[5] * i + n[9] * r + n[13]) * a),
          (this.z = (n[2] * e + n[6] * i + n[10] * r + n[14]) * a),
          this
        );
      },
      applyQuaternion: function(t) {
        var e = this.x,
          i = this.y,
          r = this.z,
          n = t.x,
          a = t.y,
          o = t.z,
          s = t.w,
          h = s * e + a * r - o * i,
          l = s * i + o * e - n * r,
          u = s * r + n * i - a * e,
          c = -n * e - a * i - o * r;
        return (
          (this.x = h * s + c * -n + l * -o - u * -a),
          (this.y = l * s + c * -a + u * -n - h * -o),
          (this.z = u * s + c * -o + h * -a - l * -n),
          this
        );
      },
      project: function(t) {
        return (
          void 0 === C && (C = new Oe.Matrix4()),
          C.multiplyMatrices(t.projectionMatrix, C.getInverse(t.matrixWorld)),
          this.applyProjection(C)
        );
      },
      unproject: function(t) {
        return (
          void 0 === R && (R = new Oe.Matrix4()),
          R.multiplyMatrices(t.matrixWorld, R.getInverse(t.projectionMatrix)),
          this.applyProjection(R)
        );
      },
      transformDirection: function(t) {
        var e = this.x,
          i = this.y,
          r = this.z,
          n = t.elements;
        return (
          (this.x = n[0] * e + n[4] * i + n[8] * r),
          (this.y = n[1] * e + n[5] * i + n[9] * r),
          (this.z = n[2] * e + n[6] * i + n[10] * r),
          this.normalize(),
          this
        );
      },
      divide: function(t) {
        return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
      },
      divideScalar: function(t) {
        return this.multiplyScalar(1 / t);
      },
      min: function(t) {
        return (
          (this.x = Math.min(this.x, t.x)),
          (this.y = Math.min(this.y, t.y)),
          (this.z = Math.min(this.z, t.z)),
          this
        );
      },
      max: function(t) {
        return (
          (this.x = Math.max(this.x, t.x)),
          (this.y = Math.max(this.y, t.y)),
          (this.z = Math.max(this.z, t.z)),
          this
        );
      },
      clamp: function(t, e) {
        return (
          (this.x = Math.max(t.x, Math.min(e.x, this.x))),
          (this.y = Math.max(t.y, Math.min(e.y, this.y))),
          (this.z = Math.max(t.z, Math.min(e.z, this.z))),
          this
        );
      },
      clampScalar: function(t, e) {
        return (
          void 0 === A && ((A = new Oe.Vector3()), (L = new Oe.Vector3())),
          A.set(t, t, t),
          L.set(e, e, e),
          this.clamp(A, L)
        );
      },
      clampLength: function(t, e) {
        var i = this.length();
        return this.multiplyScalar(Math.max(t, Math.min(e, i)) / i), this;
      },
      floor: function() {
        return (
          (this.x = Math.floor(this.x)),
          (this.y = Math.floor(this.y)),
          (this.z = Math.floor(this.z)),
          this
        );
      },
      ceil: function() {
        return (
          (this.x = Math.ceil(this.x)),
          (this.y = Math.ceil(this.y)),
          (this.z = Math.ceil(this.z)),
          this
        );
      },
      round: function() {
        return (
          (this.x = Math.round(this.x)),
          (this.y = Math.round(this.y)),
          (this.z = Math.round(this.z)),
          this
        );
      },
      roundToZero: function() {
        return (
          (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
          (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
          (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
          this
        );
      },
      negate: function() {
        return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
      },
      dot: function(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z;
      },
      lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
      },
      length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      },
      lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
      },
      normalize: function() {
        return this.divideScalar(this.length());
      },
      setLength: function(t) {
        return this.multiplyScalar(t / this.length());
      },
      lerp: function(t, e) {
        return (
          (this.x += (t.x - this.x) * e),
          (this.y += (t.y - this.y) * e),
          (this.z += (t.z - this.z) * e),
          this
        );
      },
      lerpVectors: function(t, e, i) {
        return (
          this.subVectors(e, t)
            .multiplyScalar(i)
            .add(t),
          this
        );
      },
      cross: function(t, e) {
        if (void 0 !== e) return this.crossVectors(t, e);
        var i = this.x,
          r = this.y,
          n = this.z;
        return (
          (this.x = r * t.z - n * t.y),
          (this.y = n * t.x - i * t.z),
          (this.z = i * t.y - r * t.x),
          this
        );
      },
      crossVectors: function(t, e) {
        var i = t.x,
          r = t.y,
          n = t.z,
          a = e.x,
          o = e.y,
          s = e.z;
        return (
          (this.x = r * s - n * o),
          (this.y = n * a - i * s),
          (this.z = i * o - r * a),
          this
        );
      },
      projectOnVector: function(t) {
        return (
          void 0 === E && (E = new Oe.Vector3()),
          E.copy(t).normalize(),
          (T = this.dot(E)),
          this.copy(E).multiplyScalar(T)
        );
      },
      projectOnPlane: function(t) {
        return (
          void 0 === w && (w = new Oe.Vector3()),
          w.copy(this).projectOnVector(t),
          this.sub(w)
        );
      },
      reflect: function(t) {
        return (
          void 0 === S && (S = new Oe.Vector3()),
          this.sub(S.copy(t).multiplyScalar(2 * this.dot(t)))
        );
      },
      angleTo: function(t) {
        var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
        return Math.acos(Oe.Math.clamp(e, -1, 1));
      },
      distanceTo: function(t) {
        return Math.sqrt(this.distanceToSquared(t));
      },
      distanceToSquared: function(t) {
        var e = this.x - t.x,
          i = this.y - t.y,
          r = this.z - t.z;
        return e * e + i * i + r * r;
      },
      setFromSpherical: function(t) {
        var e = Math.sin(t.phi) * t.radius;
        return (
          (this.x = e * Math.sin(t.theta)),
          (this.y = Math.cos(t.phi) * t.radius),
          (this.z = e * Math.cos(t.theta)),
          this
        );
      },
      setFromMatrixPosition: function(t) {
        return this.setFromMatrixColumn(t, 3);
      },
      setFromMatrixScale: function(t) {
        var e = this.setFromMatrixColumn(t, 0).length(),
          i = this.setFromMatrixColumn(t, 1).length(),
          r = this.setFromMatrixColumn(t, 2).length();
        return (this.x = e), (this.y = i), (this.z = r), this;
      },
      setFromMatrixColumn: function(t, e) {
        return (
          "number" == typeof t && ((t = arguments[1]), (e = arguments[0])),
          this.fromArray(t.elements, 4 * e)
        );
      },
      equals: function(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z;
      },
      fromArray: function(t, e) {
        return (
          void 0 === e && (e = 0),
          (this.x = t[e]),
          (this.y = t[e + 1]),
          (this.z = t[e + 2]),
          this
        );
      },
      toArray: function(t, e) {
        return (
          void 0 === t && (t = []),
          void 0 === e && (e = 0),
          (t[e] = this.x),
          (t[e + 1] = this.y),
          (t[e + 2] = this.z),
          t
        );
      },
      fromAttribute: function(t, e, i) {
        return (
          void 0 === i && (i = 0),
          (e = e * t.itemSize + i),
          (this.x = t.array[e]),
          (this.y = t.array[e + 1]),
          (this.z = t.array[e + 2]),
          this
        );
      }
    }),
    (Oe.Vector4 = function(t, e, i, r) {
      (this.x = t || 0),
        (this.y = e || 0),
        (this.z = i || 0),
        (this.w = void 0 !== r ? r : 1);
    }),
    (Oe.Vector4.prototype = {
      constructor: Oe.Vector4,
      set: function(t, e, i, r) {
        return (this.x = t), (this.y = e), (this.z = i), (this.w = r), this;
      },
      setScalar: function(t) {
        return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
      },
      setX: function(t) {
        return (this.x = t), this;
      },
      setY: function(t) {
        return (this.y = t), this;
      },
      setZ: function(t) {
        return (this.z = t), this;
      },
      setW: function(t) {
        return (this.w = t), this;
      },
      setComponent: function(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;
          case 1:
            this.y = e;
            break;
          case 2:
            this.z = e;
            break;
          case 3:
            this.w = e;
            break;
          default:
            throw new Error("index is out of range: " + t);
        }
      },
      getComponent: function(t) {
        switch (t) {
          case 0:
            return this.x;
          case 1:
            return this.y;
          case 2:
            return this.z;
          case 3:
            return this.w;
          default:
            throw new Error("index is out of range: " + t);
        }
      },
      clone: function() {
        return new this.constructor(this.x, this.y, this.z, this.w);
      },
      copy: function(t) {
        return (
          (this.x = t.x),
          (this.y = t.y),
          (this.z = t.z),
          (this.w = void 0 !== t.w ? t.w : 1),
          this
        );
      },
      add: function(t, e) {
        return void 0 !== e
          ? this.addVectors(t, e)
          : ((this.x += t.x),
            (this.y += t.y),
            (this.z += t.z),
            (this.w += t.w),
            this);
      },
      addScalar: function(t) {
        return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
      },
      addVectors: function(t, e) {
        return (
          (this.x = t.x + e.x),
          (this.y = t.y + e.y),
          (this.z = t.z + e.z),
          (this.w = t.w + e.w),
          this
        );
      },
      addScaledVector: function(t, e) {
        return (
          (this.x += t.x * e),
          (this.y += t.y * e),
          (this.z += t.z * e),
          (this.w += t.w * e),
          this
        );
      },
      sub: function(t, e) {
        return void 0 !== e
          ? this.subVectors(t, e)
          : ((this.x -= t.x),
            (this.y -= t.y),
            (this.z -= t.z),
            (this.w -= t.w),
            this);
      },
      subScalar: function(t) {
        return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
      },
      subVectors: function(t, e) {
        return (
          (this.x = t.x - e.x),
          (this.y = t.y - e.y),
          (this.z = t.z - e.z),
          (this.w = t.w - e.w),
          this
        );
      },
      multiplyScalar: function(t) {
        return (
          isFinite(t)
            ? ((this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t))
            : ((this.x = 0), (this.y = 0), (this.z = 0), (this.w = 0)),
          this
        );
      },
      applyMatrix4: function(t) {
        var e = this.x,
          i = this.y,
          r = this.z,
          n = this.w,
          a = t.elements;
        return (
          (this.x = a[0] * e + a[4] * i + a[8] * r + a[12] * n),
          (this.y = a[1] * e + a[5] * i + a[9] * r + a[13] * n),
          (this.z = a[2] * e + a[6] * i + a[10] * r + a[14] * n),
          (this.w = a[3] * e + a[7] * i + a[11] * r + a[15] * n),
          this
        );
      },
      divideScalar: function(t) {
        return this.multiplyScalar(1 / t);
      },
      setAxisAngleFromQuaternion: function(t) {
        this.w = 2 * Math.acos(t.w);
        var e = Math.sqrt(1 - t.w * t.w);
        return (
          e < 1e-4
            ? ((this.x = 1), (this.y = 0), (this.z = 0))
            : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
          this
        );
      },
      setAxisAngleFromRotationMatrix: function(t) {
        var e,
          i,
          r,
          n,
          a = t.elements,
          o = a[0],
          s = a[4],
          h = a[8],
          l = a[1],
          u = a[5],
          c = a[9],
          p = a[2],
          d = a[6],
          f = a[10];
        if (
          Math.abs(s - l) < 0.01 &&
          Math.abs(h - p) < 0.01 &&
          Math.abs(c - d) < 0.01
        ) {
          if (
            Math.abs(s + l) < 0.1 &&
            Math.abs(h + p) < 0.1 &&
            Math.abs(c + d) < 0.1 &&
            Math.abs(o + u + f - 3) < 0.1
          )
            return this.set(1, 0, 0, 0), this;
          e = Math.PI;
          var m = (o + 1) / 2,
            v = (u + 1) / 2,
            g = (f + 1) / 2,
            y = (s + l) / 4,
            x = (h + p) / 4,
            M = (c + d) / 4;
          return (
            v < m && g < m
              ? (n =
                  m < 0.01
                    ? ((i = 0), (r = 0.707106781))
                    : ((r = y / (i = Math.sqrt(m))), x / i))
              : g < v
              ? (n =
                  v < 0.01
                    ? ((r = 0), (i = 0.707106781))
                    : ((i = y / (r = Math.sqrt(v))), M / r))
              : g < 0.01
              ? ((r = i = 0.707106781), (n = 0))
              : ((i = x / (n = Math.sqrt(g))), (r = M / n)),
            this.set(i, r, n, e),
            this
          );
        }
        var b = Math.sqrt(
          (d - c) * (d - c) + (h - p) * (h - p) + (l - s) * (l - s)
        );
        return (
          Math.abs(b) < 0.001 && (b = 1),
          (this.x = (d - c) / b),
          (this.y = (h - p) / b),
          (this.z = (l - s) / b),
          (this.w = Math.acos((o + u + f - 1) / 2)),
          this
        );
      },
      min: function(t) {
        return (
          (this.x = Math.min(this.x, t.x)),
          (this.y = Math.min(this.y, t.y)),
          (this.z = Math.min(this.z, t.z)),
          (this.w = Math.min(this.w, t.w)),
          this
        );
      },
      max: function(t) {
        return (
          (this.x = Math.max(this.x, t.x)),
          (this.y = Math.max(this.y, t.y)),
          (this.z = Math.max(this.z, t.z)),
          (this.w = Math.max(this.w, t.w)),
          this
        );
      },
      clamp: function(t, e) {
        return (
          (this.x = Math.max(t.x, Math.min(e.x, this.x))),
          (this.y = Math.max(t.y, Math.min(e.y, this.y))),
          (this.z = Math.max(t.z, Math.min(e.z, this.z))),
          (this.w = Math.max(t.w, Math.min(e.w, this.w))),
          this
        );
      },
      clampScalar: function(t, e) {
        return (
          void 0 === F && ((F = new Oe.Vector4()), (N = new Oe.Vector4())),
          F.set(t, t, t, t),
          N.set(e, e, e, e),
          this.clamp(F, N)
        );
      },
      floor: function() {
        return (
          (this.x = Math.floor(this.x)),
          (this.y = Math.floor(this.y)),
          (this.z = Math.floor(this.z)),
          (this.w = Math.floor(this.w)),
          this
        );
      },
      ceil: function() {
        return (
          (this.x = Math.ceil(this.x)),
          (this.y = Math.ceil(this.y)),
          (this.z = Math.ceil(this.z)),
          (this.w = Math.ceil(this.w)),
          this
        );
      },
      round: function() {
        return (
          (this.x = Math.round(this.x)),
          (this.y = Math.round(this.y)),
          (this.z = Math.round(this.z)),
          (this.w = Math.round(this.w)),
          this
        );
      },
      roundToZero: function() {
        return (
          (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
          (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
          (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
          (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
          this
        );
      },
      negate: function() {
        return (
          (this.x = -this.x),
          (this.y = -this.y),
          (this.z = -this.z),
          (this.w = -this.w),
          this
        );
      },
      dot: function(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
      },
      lengthSq: function() {
        return (
          this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        );
      },
      length: function() {
        return Math.sqrt(
          this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        );
      },
      lengthManhattan: function() {
        return (
          Math.abs(this.x) +
          Math.abs(this.y) +
          Math.abs(this.z) +
          Math.abs(this.w)
        );
      },
      normalize: function() {
        return this.divideScalar(this.length());
      },
      setLength: function(t) {
        return this.multiplyScalar(t / this.length());
      },
      lerp: function(t, e) {
        return (
          (this.x += (t.x - this.x) * e),
          (this.y += (t.y - this.y) * e),
          (this.z += (t.z - this.z) * e),
          (this.w += (t.w - this.w) * e),
          this
        );
      },
      lerpVectors: function(t, e, i) {
        return (
          this.subVectors(e, t)
            .multiplyScalar(i)
            .add(t),
          this
        );
      },
      equals: function(t) {
        return (
          t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        );
      },
      fromArray: function(t, e) {
        return (
          void 0 === e && (e = 0),
          (this.x = t[e]),
          (this.y = t[e + 1]),
          (this.z = t[e + 2]),
          (this.w = t[e + 3]),
          this
        );
      },
      toArray: function(t, e) {
        return (
          void 0 === t && (t = []),
          void 0 === e && (e = 0),
          (t[e] = this.x),
          (t[e + 1] = this.y),
          (t[e + 2] = this.z),
          (t[e + 3] = this.w),
          t
        );
      },
      fromAttribute: function(t, e, i) {
        return (
          void 0 === i && (i = 0),
          (e = e * t.itemSize + i),
          (this.x = t.array[e]),
          (this.y = t.array[e + 1]),
          (this.z = t.array[e + 2]),
          (this.w = t.array[e + 3]),
          this
        );
      }
    }),
    (Oe.Matrix3 = function() {
      this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    }),
    (Oe.Matrix3.prototype = {
      constructor: Oe.Matrix3,
      set: function(t, e, i, r, n, a, o, s, h) {
        var l = this.elements;
        return (
          (l[0] = t),
          (l[1] = r),
          (l[2] = o),
          (l[3] = e),
          (l[4] = n),
          (l[5] = s),
          (l[6] = i),
          (l[7] = a),
          (l[8] = h),
          this
        );
      },
      identity: function() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
      },
      clone: function() {
        return new this.constructor().fromArray(this.elements);
      },
      copy: function(t) {
        var e = t.elements;
        return (
          this.set(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]), this
        );
      },
      setFromMatrix4: function(t) {
        var e = t.elements;
        return (
          this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
        );
      },
      applyToVector3Array: function(t, e, i) {
        void 0 === B && (B = new Oe.Vector3()),
          void 0 === e && (e = 0),
          void 0 === i && (i = t.length);
        for (var r = 0, n = e; r < i; r += 3, n += 3)
          B.fromArray(t, n), B.applyMatrix3(this), B.toArray(t, n);
        return t;
      },
      applyToBuffer: function(t, e, i) {
        void 0 === D && (D = new Oe.Vector3()),
          void 0 === e && (e = 0),
          void 0 === i && (i = t.length / t.itemSize);
        for (var r = 0, n = e; r < i; r++, n++)
          (D.x = t.getX(n)),
            (D.y = t.getY(n)),
            (D.z = t.getZ(n)),
            D.applyMatrix3(this),
            t.setXYZ(D.x, D.y, D.z);
        return t;
      },
      multiplyScalar: function(t) {
        var e = this.elements;
        return (
          (e[0] *= t),
          (e[3] *= t),
          (e[6] *= t),
          (e[1] *= t),
          (e[4] *= t),
          (e[7] *= t),
          (e[2] *= t),
          (e[5] *= t),
          (e[8] *= t),
          this
        );
      },
      determinant: function() {
        var t = this.elements,
          e = t[0],
          i = t[1],
          r = t[2],
          n = t[3],
          a = t[4],
          o = t[5],
          s = t[6],
          h = t[7],
          l = t[8];
        return (
          e * a * l - e * o * h - i * n * l + i * o * s + r * n * h - r * a * s
        );
      },
      getInverse: function(t, e) {
        var i = t.elements,
          r = this.elements,
          n = i[0],
          a = i[1],
          o = i[2],
          s = i[3],
          h = i[4],
          l = i[5],
          u = i[6],
          c = i[7],
          p = i[8],
          d = p * h - l * c,
          f = l * u - p * s,
          m = c * s - h * u,
          v = n * d + a * f + o * m;
        if (0 != v)
          return (
            (r[0] = d),
            (r[1] = o * c - p * a),
            (r[2] = l * a - o * h),
            (r[3] = f),
            (r[4] = p * n - o * u),
            (r[5] = o * s - l * n),
            (r[6] = m),
            (r[7] = a * u - c * n),
            (r[8] = h * n - a * s),
            this.multiplyScalar(1 / v)
          );
        if (e)
          throw new Error(
            "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0"
          );
        return this.identity();
      },
      transpose: function() {
        var t,
          e = this.elements;
        return (
          (t = e[1]),
          (e[1] = e[3]),
          (e[3] = t),
          (t = e[2]),
          (e[2] = e[6]),
          (e[6] = t),
          (t = e[5]),
          (e[5] = e[7]),
          (e[7] = t),
          this
        );
      },
      flattenToArrayOffset: function(t, e) {
        var i = this.elements;
        return (
          (t[e] = i[0]),
          (t[e + 1] = i[1]),
          (t[e + 2] = i[2]),
          (t[e + 3] = i[3]),
          (t[e + 4] = i[4]),
          (t[e + 5] = i[5]),
          (t[e + 6] = i[6]),
          (t[e + 7] = i[7]),
          (t[e + 8] = i[8]),
          t
        );
      },
      getNormalMatrix: function(t) {
        return this.setFromMatrix4(t)
          .getInverse(this)
          .transpose();
      },
      transposeIntoArray: function(t) {
        var e = this.elements;
        return (
          (t[0] = e[0]),
          (t[1] = e[3]),
          (t[2] = e[6]),
          (t[3] = e[1]),
          (t[4] = e[4]),
          (t[5] = e[7]),
          (t[6] = e[2]),
          (t[7] = e[5]),
          (t[8] = e[8]),
          this
        );
      },
      fromArray: function(t) {
        return this.elements.set(t), this;
      },
      toArray: function() {
        var t = this.elements;
        return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]];
      }
    }),
    (Oe.Matrix4 = function() {
      this.elements = new Float32Array([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ]);
    }),
    (Oe.Matrix4.prototype = {
      constructor: Oe.Matrix4,
      set: function(t, e, i, r, n, a, o, s, h, l, u, c, p, d, f, m) {
        var v = this.elements;
        return (
          (v[0] = t),
          (v[4] = e),
          (v[8] = i),
          (v[12] = r),
          (v[1] = n),
          (v[5] = a),
          (v[9] = o),
          (v[13] = s),
          (v[2] = h),
          (v[6] = l),
          (v[10] = u),
          (v[14] = c),
          (v[3] = p),
          (v[7] = d),
          (v[11] = f),
          (v[15] = m),
          this
        );
      },
      identity: function() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
      },
      clone: function() {
        return new Oe.Matrix4().fromArray(this.elements);
      },
      copy: function(t) {
        return this.elements.set(t.elements), this;
      },
      copyPosition: function(t) {
        var e = this.elements,
          i = t.elements;
        return (e[12] = i[12]), (e[13] = i[13]), (e[14] = i[14]), this;
      },
      extractBasis: function(t, e, i) {
        return (
          t.setFromMatrixColumn(this, 0),
          e.setFromMatrixColumn(this, 1),
          i.setFromMatrixColumn(this, 2),
          this
        );
      },
      makeBasis: function(t, e, i) {
        return (
          this.set(
            t.x,
            e.x,
            i.x,
            0,
            t.y,
            e.y,
            i.y,
            0,
            t.z,
            e.z,
            i.z,
            0,
            0,
            0,
            0,
            1
          ),
          this
        );
      },
      extractRotation: function(t) {
        void 0 === X && (X = new Oe.Vector3());
        var e = this.elements,
          i = t.elements,
          r = 1 / X.setFromMatrixColumn(t, 0).length(),
          n = 1 / X.setFromMatrixColumn(t, 1).length(),
          a = 1 / X.setFromMatrixColumn(t, 2).length();
        return (
          (e[0] = i[0] * r),
          (e[1] = i[1] * r),
          (e[2] = i[2] * r),
          (e[4] = i[4] * n),
          (e[5] = i[5] * n),
          (e[6] = i[6] * n),
          (e[8] = i[8] * a),
          (e[9] = i[9] * a),
          (e[10] = i[10] * a),
          this
        );
      },
      makeRotationFromEuler: function(t) {
        var e = this.elements,
          i = t.x,
          r = t.y,
          n = t.z,
          a = Math.cos(i),
          o = Math.sin(i),
          s = Math.cos(r),
          h = Math.sin(r),
          l = Math.cos(n),
          u = Math.sin(n);
        if ("XYZ" === t.order) {
          var c = a * l,
            p = a * u,
            d = o * l,
            f = o * u;
          (e[0] = s * l),
            (e[4] = -s * u),
            (e[8] = h),
            (e[1] = p + d * h),
            (e[5] = c - f * h),
            (e[9] = -o * s),
            (e[2] = f - c * h),
            (e[6] = d + p * h),
            (e[10] = a * s);
        } else if ("YXZ" === t.order) {
          var m = s * l,
            v = s * u,
            g = h * l,
            y = h * u;
          (e[0] = m + y * o),
            (e[4] = g * o - v),
            (e[8] = a * h),
            (e[1] = a * u),
            (e[5] = a * l),
            (e[9] = -o),
            (e[2] = v * o - g),
            (e[6] = y + m * o),
            (e[10] = a * s);
        } else if ("ZXY" === t.order) {
          (m = s * l), (v = s * u), (g = h * l), (y = h * u);
          (e[0] = m - y * o),
            (e[4] = -a * u),
            (e[8] = g + v * o),
            (e[1] = v + g * o),
            (e[5] = a * l),
            (e[9] = y - m * o),
            (e[2] = -a * h),
            (e[6] = o),
            (e[10] = a * s);
        } else if ("ZYX" === t.order) {
          (c = a * l), (p = a * u), (d = o * l), (f = o * u);
          (e[0] = s * l),
            (e[4] = d * h - p),
            (e[8] = c * h + f),
            (e[1] = s * u),
            (e[5] = f * h + c),
            (e[9] = p * h - d),
            (e[2] = -h),
            (e[6] = o * s),
            (e[10] = a * s);
        } else if ("YZX" === t.order) {
          var x = a * s,
            M = a * h,
            b = o * s,
            _ = o * h;
          (e[0] = s * l),
            (e[4] = _ - x * u),
            (e[8] = b * u + M),
            (e[1] = u),
            (e[5] = a * l),
            (e[9] = -o * l),
            (e[2] = -h * l),
            (e[6] = M * u + b),
            (e[10] = x - _ * u);
        } else if ("XZY" === t.order) {
          (x = a * s), (M = a * h), (b = o * s), (_ = o * h);
          (e[0] = s * l),
            (e[4] = -u),
            (e[8] = h * l),
            (e[1] = x * u + _),
            (e[5] = a * l),
            (e[9] = M * u - b),
            (e[2] = b * u - M),
            (e[6] = o * l),
            (e[10] = _ * u + x);
        }
        return (
          (e[3] = 0),
          (e[7] = 0),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          this
        );
      },
      makeRotationFromQuaternion: function(t) {
        var e = this.elements,
          i = t.x,
          r = t.y,
          n = t.z,
          a = t.w,
          o = i + i,
          s = r + r,
          h = n + n,
          l = i * o,
          u = i * s,
          c = i * h,
          p = r * s,
          d = r * h,
          f = n * h,
          m = a * o,
          v = a * s,
          g = a * h;
        return (
          (e[0] = 1 - (p + f)),
          (e[4] = u - g),
          (e[8] = c + v),
          (e[1] = u + g),
          (e[5] = 1 - (l + f)),
          (e[9] = d - m),
          (e[2] = c - v),
          (e[6] = d + m),
          (e[10] = 1 - (l + p)),
          (e[3] = 0),
          (e[7] = 0),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          this
        );
      },
      lookAt: function(t, e, i) {
        void 0 === G && (G = new Oe.Vector3()),
          void 0 === W && (W = new Oe.Vector3()),
          void 0 === j && (j = new Oe.Vector3());
        var r = this.elements;
        return (
          j.subVectors(t, e).normalize(),
          0 === j.lengthSq() && (j.z = 1),
          G.crossVectors(i, j).normalize(),
          0 === G.lengthSq() &&
            ((j.x += 1e-4), G.crossVectors(i, j).normalize()),
          W.crossVectors(j, G),
          (r[0] = G.x),
          (r[4] = W.x),
          (r[8] = j.x),
          (r[1] = G.y),
          (r[5] = W.y),
          (r[9] = j.y),
          (r[2] = G.z),
          (r[6] = W.z),
          (r[10] = j.z),
          this
        );
      },
      multiply: function(t, e) {
        return void 0 !== e
          ? this.multiplyMatrices(t, e)
          : this.multiplyMatrices(this, t);
      },
      multiplyMatrices: function(t, e) {
        var i = t.elements,
          r = e.elements,
          n = this.elements,
          a = i[0],
          o = i[4],
          s = i[8],
          h = i[12],
          l = i[1],
          u = i[5],
          c = i[9],
          p = i[13],
          d = i[2],
          f = i[6],
          m = i[10],
          v = i[14],
          g = i[3],
          y = i[7],
          x = i[11],
          M = i[15],
          b = r[0],
          _ = r[4],
          S = r[8],
          w = r[12],
          E = r[1],
          T = r[5],
          A = r[9],
          L = r[13],
          R = r[2],
          C = r[6],
          U = r[10],
          P = r[14],
          F = r[3],
          N = r[7],
          D = r[11],
          B = r[15];
        return (
          (n[0] = a * b + o * E + s * R + h * F),
          (n[4] = a * _ + o * T + s * C + h * N),
          (n[8] = a * S + o * A + s * U + h * D),
          (n[12] = a * w + o * L + s * P + h * B),
          (n[1] = l * b + u * E + c * R + p * F),
          (n[5] = l * _ + u * T + c * C + p * N),
          (n[9] = l * S + u * A + c * U + p * D),
          (n[13] = l * w + u * L + c * P + p * B),
          (n[2] = d * b + f * E + m * R + v * F),
          (n[6] = d * _ + f * T + m * C + v * N),
          (n[10] = d * S + f * A + m * U + v * D),
          (n[14] = d * w + f * L + m * P + v * B),
          (n[3] = g * b + y * E + x * R + M * F),
          (n[7] = g * _ + y * T + x * C + M * N),
          (n[11] = g * S + y * A + x * U + M * D),
          (n[15] = g * w + y * L + x * P + M * B),
          this
        );
      },
      multiplyToArray: function(t, e, i) {
        var r = this.elements;
        return (
          this.multiplyMatrices(t, e),
          (i[0] = r[0]),
          (i[1] = r[1]),
          (i[2] = r[2]),
          (i[3] = r[3]),
          (i[4] = r[4]),
          (i[5] = r[5]),
          (i[6] = r[6]),
          (i[7] = r[7]),
          (i[8] = r[8]),
          (i[9] = r[9]),
          (i[10] = r[10]),
          (i[11] = r[11]),
          (i[12] = r[12]),
          (i[13] = r[13]),
          (i[14] = r[14]),
          (i[15] = r[15]),
          this
        );
      },
      multiplyScalar: function(t) {
        var e = this.elements;
        return (
          (e[0] *= t),
          (e[4] *= t),
          (e[8] *= t),
          (e[12] *= t),
          (e[1] *= t),
          (e[5] *= t),
          (e[9] *= t),
          (e[13] *= t),
          (e[2] *= t),
          (e[6] *= t),
          (e[10] *= t),
          (e[14] *= t),
          (e[3] *= t),
          (e[7] *= t),
          (e[11] *= t),
          (e[15] *= t),
          this
        );
      },
      applyToVector3Array: function(t, e, i) {
        void 0 === k && (k = new Oe.Vector3()),
          void 0 === e && (e = 0),
          void 0 === i && (i = t.length);
        for (var r = 0, n = e; r < i; r += 3, n += 3)
          k.fromArray(t, n), k.applyMatrix4(this), k.toArray(t, n);
        return t;
      },
      applyToBuffer: function(t, e, i) {
        void 0 === z && (z = new Oe.Vector3()),
          void 0 === e && (e = 0),
          void 0 === i && (i = t.length / t.itemSize);
        for (var r = 0, n = e; r < i; r++, n++)
          (z.x = t.getX(n)),
            (z.y = t.getY(n)),
            (z.z = t.getZ(n)),
            z.applyMatrix4(this),
            t.setXYZ(z.x, z.y, z.z);
        return t;
      },
      determinant: function() {
        var t = this.elements,
          e = t[0],
          i = t[4],
          r = t[8],
          n = t[12],
          a = t[1],
          o = t[5],
          s = t[9],
          h = t[13],
          l = t[2],
          u = t[6],
          c = t[10],
          p = t[14];
        return (
          t[3] *
            (n * s * u -
              r * h * u -
              n * o * c +
              i * h * c +
              r * o * p -
              i * s * p) +
          t[7] *
            (e * s * p -
              e * h * c +
              n * a * c -
              r * a * p +
              r * h * l -
              n * s * l) +
          t[11] *
            (e * h * u -
              e * o * p -
              n * a * u +
              i * a * p +
              n * o * l -
              i * h * l) +
          t[15] *
            (-r * o * l -
              e * s * u +
              e * o * c +
              r * a * u -
              i * a * c +
              i * s * l)
        );
      },
      transpose: function() {
        var t,
          e = this.elements;
        return (
          (t = e[1]),
          (e[1] = e[4]),
          (e[4] = t),
          (t = e[2]),
          (e[2] = e[8]),
          (e[8] = t),
          (t = e[6]),
          (e[6] = e[9]),
          (e[9] = t),
          (t = e[3]),
          (e[3] = e[12]),
          (e[12] = t),
          (t = e[7]),
          (e[7] = e[13]),
          (e[13] = t),
          (t = e[11]),
          (e[11] = e[14]),
          (e[14] = t),
          this
        );
      },
      flattenToArrayOffset: function(t, e) {
        var i = this.elements;
        return (
          (t[e] = i[0]),
          (t[e + 1] = i[1]),
          (t[e + 2] = i[2]),
          (t[e + 3] = i[3]),
          (t[e + 4] = i[4]),
          (t[e + 5] = i[5]),
          (t[e + 6] = i[6]),
          (t[e + 7] = i[7]),
          (t[e + 8] = i[8]),
          (t[e + 9] = i[9]),
          (t[e + 10] = i[10]),
          (t[e + 11] = i[11]),
          (t[e + 12] = i[12]),
          (t[e + 13] = i[13]),
          (t[e + 14] = i[14]),
          (t[e + 15] = i[15]),
          t
        );
      },
      getPosition: function() {
        return (
          void 0 === V && (V = new Oe.Vector3()), V.setFromMatrixColumn(this, 3)
        );
      },
      setPosition: function(t) {
        var e = this.elements;
        return (e[12] = t.x), (e[13] = t.y), (e[14] = t.z), this;
      },
      getInverse: function(t, e) {
        var i = this.elements,
          r = t.elements,
          n = r[0],
          a = r[1],
          o = r[2],
          s = r[3],
          h = r[4],
          l = r[5],
          u = r[6],
          c = r[7],
          p = r[8],
          d = r[9],
          f = r[10],
          m = r[11],
          v = r[12],
          g = r[13],
          y = r[14],
          x = r[15],
          M =
            d * y * c -
            g * f * c +
            g * u * m -
            l * y * m -
            d * u * x +
            l * f * x,
          b =
            v * f * c -
            p * y * c -
            v * u * m +
            h * y * m +
            p * u * x -
            h * f * x,
          _ =
            p * g * c -
            v * d * c +
            v * l * m -
            h * g * m -
            p * l * x +
            h * d * x,
          S =
            v * d * u -
            p * g * u -
            v * l * f +
            h * g * f +
            p * l * y -
            h * d * y,
          w = n * M + a * b + o * _ + s * S;
        if (0 != w)
          return (
            (i[0] = M),
            (i[1] =
              g * f * s -
              d * y * s -
              g * o * m +
              a * y * m +
              d * o * x -
              a * f * x),
            (i[2] =
              l * y * s -
              g * u * s +
              g * o * c -
              a * y * c -
              l * o * x +
              a * u * x),
            (i[3] =
              d * u * s -
              l * f * s -
              d * o * c +
              a * f * c +
              l * o * m -
              a * u * m),
            (i[4] = b),
            (i[5] =
              p * y * s -
              v * f * s +
              v * o * m -
              n * y * m -
              p * o * x +
              n * f * x),
            (i[6] =
              v * u * s -
              h * y * s -
              v * o * c +
              n * y * c +
              h * o * x -
              n * u * x),
            (i[7] =
              h * f * s -
              p * u * s +
              p * o * c -
              n * f * c -
              h * o * m +
              n * u * m),
            (i[8] = _),
            (i[9] =
              v * d * s -
              p * g * s -
              v * a * m +
              n * g * m +
              p * a * x -
              n * d * x),
            (i[10] =
              h * g * s -
              v * l * s +
              v * a * c -
              n * g * c -
              h * a * x +
              n * l * x),
            (i[11] =
              p * l * s -
              h * d * s -
              p * a * c +
              n * d * c +
              h * a * m -
              n * l * m),
            (i[12] = S),
            (i[13] =
              p * g * o -
              v * d * o +
              v * a * f -
              n * g * f -
              p * a * y +
              n * d * y),
            (i[14] =
              v * l * o -
              h * g * o -
              v * a * u +
              n * g * u +
              h * a * y -
              n * l * y),
            (i[15] =
              h * d * o -
              p * l * o +
              p * a * u -
              n * d * u -
              h * a * f +
              n * l * f),
            this.multiplyScalar(1 / w)
          );
        if (e)
          throw new Error(
            "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0"
          );
        return this.identity();
      },
      scale: function(t) {
        var e = this.elements,
          i = t.x,
          r = t.y,
          n = t.z;
        return (
          (e[0] *= i),
          (e[4] *= r),
          (e[8] *= n),
          (e[1] *= i),
          (e[5] *= r),
          (e[9] *= n),
          (e[2] *= i),
          (e[6] *= r),
          (e[10] *= n),
          (e[3] *= i),
          (e[7] *= r),
          (e[11] *= n),
          this
        );
      },
      getMaxScaleOnAxis: function() {
        var t = this.elements,
          e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
          i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
          r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
        return Math.sqrt(Math.max(e, i, r));
      },
      makeTranslation: function(t, e, i) {
        return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this;
      },
      makeRotationX: function(t) {
        var e = Math.cos(t),
          i = Math.sin(t);
        return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this;
      },
      makeRotationY: function(t) {
        var e = Math.cos(t),
          i = Math.sin(t);
        return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this;
      },
      makeRotationZ: function(t) {
        var e = Math.cos(t),
          i = Math.sin(t);
        return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
      },
      makeRotationAxis: function(t, e) {
        var i = Math.cos(e),
          r = Math.sin(e),
          n = 1 - i,
          a = t.x,
          o = t.y,
          s = t.z,
          h = n * a,
          l = n * o;
        return (
          this.set(
            h * a + i,
            h * o - r * s,
            h * s + r * o,
            0,
            h * o + r * s,
            l * o + i,
            l * s - r * a,
            0,
            h * s - r * o,
            l * s + r * a,
            n * s * s + i,
            0,
            0,
            0,
            0,
            1
          ),
          this
        );
      },
      makeScale: function(t, e, i) {
        return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
      },
      compose: function(t, e, i) {
        return (
          this.makeRotationFromQuaternion(e),
          this.scale(i),
          this.setPosition(t),
          this
        );
      },
      decompose: function(t, e, i) {
        void 0 === I && (I = new Oe.Vector3()),
          void 0 === O && (O = new Oe.Matrix4());
        var r = this.elements,
          n = I.set(r[0], r[1], r[2]).length(),
          a = I.set(r[4], r[5], r[6]).length(),
          o = I.set(r[8], r[9], r[10]).length();
        this.determinant() < 0 && (n = -n),
          (t.x = r[12]),
          (t.y = r[13]),
          (t.z = r[14]),
          O.elements.set(this.elements);
        var s = 1 / n,
          h = 1 / a,
          l = 1 / o;
        return (
          (O.elements[0] *= s),
          (O.elements[1] *= s),
          (O.elements[2] *= s),
          (O.elements[4] *= h),
          (O.elements[5] *= h),
          (O.elements[6] *= h),
          (O.elements[8] *= l),
          (O.elements[9] *= l),
          (O.elements[10] *= l),
          e.setFromRotationMatrix(O),
          (i.x = n),
          (i.y = a),
          (i.z = o),
          this
        );
      },
      makeFrustum: function(t, e, i, r, n, a) {
        var o = this.elements,
          s = (2 * n) / (e - t),
          h = (2 * n) / (r - i),
          l = (e + t) / (e - t),
          u = (r + i) / (r - i),
          c = -(a + n) / (a - n),
          p = (-2 * a * n) / (a - n);
        return (
          (o[0] = s),
          (o[4] = 0),
          (o[8] = l),
          (o[12] = 0),
          (o[1] = 0),
          (o[5] = h),
          (o[9] = u),
          (o[13] = 0),
          (o[2] = 0),
          (o[6] = 0),
          (o[10] = c),
          (o[14] = p),
          (o[3] = 0),
          (o[7] = 0),
          (o[11] = -1),
          (o[15] = 0),
          this
        );
      },
      makePerspective: function(t, e, i, r) {
        var n = i * Math.tan(Oe.Math.degToRad(0.5 * t)),
          a = -n,
          o = a * e,
          s = n * e;
        return this.makeFrustum(o, s, a, n, i, r);
      },
      makeOrthographic: function(t, e, i, r, n, a) {
        var o = this.elements,
          s = 1 / (e - t),
          h = 1 / (i - r),
          l = 1 / (a - n),
          u = (e + t) * s,
          c = (i + r) * h,
          p = (a + n) * l;
        return (
          (o[0] = 2 * s),
          (o[4] = 0),
          (o[8] = 0),
          (o[12] = -u),
          (o[1] = 0),
          (o[5] = 2 * h),
          (o[9] = 0),
          (o[13] = -c),
          (o[2] = 0),
          (o[6] = 0),
          (o[10] = -2 * l),
          (o[14] = -p),
          (o[3] = 0),
          (o[7] = 0),
          (o[11] = 0),
          (o[15] = 1),
          this
        );
      },
      equals: function(t) {
        for (var e = this.elements, i = t.elements, r = 0; r < 16; r++)
          if (e[r] !== i[r]) return !1;
        return !0;
      },
      fromArray: function(t) {
        return this.elements.set(t), this;
      },
      toArray: function() {
        var t = this.elements;
        return [
          t[0],
          t[1],
          t[2],
          t[3],
          t[4],
          t[5],
          t[6],
          t[7],
          t[8],
          t[9],
          t[10],
          t[11],
          t[12],
          t[13],
          t[14],
          t[15]
        ];
      }
    }),
    (Oe.Plane = function(t, e) {
      (this.normal = void 0 !== t ? t : new Oe.Vector3(1, 0, 0)),
        (this.constant = void 0 !== e ? e : 0);
    }),
    (Oe.Plane.prototype = {
      constructor: Oe.Plane,
      set: function(t, e) {
        return this.normal.copy(t), (this.constant = e), this;
      },
      setComponents: function(t, e, i, r) {
        return this.normal.set(t, e, i), (this.constant = r), this;
      },
      setFromNormalAndCoplanarPoint: function(t, e) {
        return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
      },
      setFromCoplanarPoints:
        ((Q = new Oe.Vector3()),
        (J = new Oe.Vector3()),
        function(t, e, i) {
          var r = Q.subVectors(i, e)
            .cross(J.subVectors(t, e))
            .normalize();
          return this.setFromNormalAndCoplanarPoint(r, t), this;
        }),
      clone: function() {
        return new this.constructor().copy(this);
      },
      copy: function(t) {
        return this.normal.copy(t.normal), (this.constant = t.constant), this;
      },
      normalize: function() {
        var t = 1 / this.normal.length();
        return this.normal.multiplyScalar(t), (this.constant *= t), this;
      },
      negate: function() {
        return (this.constant *= -1), this.normal.negate(), this;
      },
      distanceToPoint: function(t) {
        return this.normal.dot(t) + this.constant;
      },
      distanceToSphere: function(t) {
        return this.distanceToPoint(t.center) - t.radius;
      },
      projectPoint: function(t, e) {
        return this.orthoPoint(t, e)
          .sub(t)
          .negate();
      },
      orthoPoint: function(t, e) {
        var i = this.distanceToPoint(t);
        return (e || new Oe.Vector3()).copy(this.normal).multiplyScalar(i);
      },
      intersectLine:
        ((Z = new Oe.Vector3()),
        function(t, e) {
          var i = e || new Oe.Vector3(),
            r = t.delta(Z),
            n = this.normal.dot(r);
          if (0 === n)
            return 0 === this.distanceToPoint(t.start)
              ? i.copy(t.start)
              : void 0;
          var a = -(t.start.dot(this.normal) + this.constant) / n;
          return a < 0 || 1 < a
            ? void 0
            : i
                .copy(r)
                .multiplyScalar(a)
                .add(t.start);
        }),
      intersectsLine: function(t) {
        var e = this.distanceToPoint(t.start),
          i = this.distanceToPoint(t.end);
        return (e < 0 && 0 < i) || (i < 0 && 0 < e);
      },
      intersectsBox: function(t) {
        return t.intersectsPlane(this);
      },
      intersectsSphere: function(t) {
        return t.intersectsPlane(this);
      },
      coplanarPoint: function(t) {
        return (t || new Oe.Vector3())
          .copy(this.normal)
          .multiplyScalar(-this.constant);
      },
      applyMatrix4:
        ((H = new Oe.Vector3()),
        (q = new Oe.Vector3()),
        (Y = new Oe.Matrix3()),
        function(t, e) {
          var i = e || Y.getNormalMatrix(t),
            r = H.copy(this.normal).applyMatrix3(i),
            n = this.coplanarPoint(q);
          return (
            n.applyMatrix4(t), this.setFromNormalAndCoplanarPoint(r, n), this
          );
        }),
      translate: function(t) {
        return (this.constant = this.constant - t.dot(this.normal)), this;
      },
      equals: function(t) {
        return t.normal.equals(this.normal) && t.constant === this.constant;
      }
    }),
    (Oe.Quaternion = function(t, e, i, r) {
      (this._x = t || 0),
        (this._y = e || 0),
        (this._z = i || 0),
        (this._w = void 0 !== r ? r : 1);
    }),
    (Oe.Quaternion.prototype = {
      constructor: Oe.Quaternion,
      get x() {
        return this._x;
      },
      set x(t) {
        (this._x = t), this.onChangeCallback();
      },
      get y() {
        return this._y;
      },
      set y(t) {
        (this._y = t), this.onChangeCallback();
      },
      get z() {
        return this._z;
      },
      set z(t) {
        (this._z = t), this.onChangeCallback();
      },
      get w() {
        return this._w;
      },
      set w(t) {
        (this._w = t), this.onChangeCallback();
      },
      set: function(t, e, i, r) {
        return (
          (this._x = t),
          (this._y = e),
          (this._z = i),
          (this._w = r),
          this.onChangeCallback(),
          this
        );
      },
      clone: function() {
        return new this.constructor(this._x, this._y, this._z, this._w);
      },
      copy: function(t) {
        return (
          (this._x = t.x),
          (this._y = t.y),
          (this._z = t.z),
          (this._w = t.w),
          this.onChangeCallback(),
          this
        );
      },
      setFromEuler: function(t, e) {
        if (t instanceof Oe.Euler == !1)
          throw new Error(
            "THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order."
          );
        var i = Math.cos(t._x / 2),
          r = Math.cos(t._y / 2),
          n = Math.cos(t._z / 2),
          a = Math.sin(t._x / 2),
          o = Math.sin(t._y / 2),
          s = Math.sin(t._z / 2),
          h = t.order;
        return (
          "XYZ" === h
            ? ((this._x = a * r * n + i * o * s),
              (this._y = i * o * n - a * r * s),
              (this._z = i * r * s + a * o * n),
              (this._w = i * r * n - a * o * s))
            : "YXZ" === h
            ? ((this._x = a * r * n + i * o * s),
              (this._y = i * o * n - a * r * s),
              (this._z = i * r * s - a * o * n),
              (this._w = i * r * n + a * o * s))
            : "ZXY" === h
            ? ((this._x = a * r * n - i * o * s),
              (this._y = i * o * n + a * r * s),
              (this._z = i * r * s + a * o * n),
              (this._w = i * r * n - a * o * s))
            : "ZYX" === h
            ? ((this._x = a * r * n - i * o * s),
              (this._y = i * o * n + a * r * s),
              (this._z = i * r * s - a * o * n),
              (this._w = i * r * n + a * o * s))
            : "YZX" === h
            ? ((this._x = a * r * n + i * o * s),
              (this._y = i * o * n + a * r * s),
              (this._z = i * r * s - a * o * n),
              (this._w = i * r * n - a * o * s))
            : "XZY" === h &&
              ((this._x = a * r * n - i * o * s),
              (this._y = i * o * n - a * r * s),
              (this._z = i * r * s + a * o * n),
              (this._w = i * r * n + a * o * s)),
          !1 !== e && this.onChangeCallback(),
          this
        );
      },
      setFromAxisAngle: function(t, e) {
        var i = e / 2,
          r = Math.sin(i);
        return (
          (this._x = t.x * r),
          (this._y = t.y * r),
          (this._z = t.z * r),
          (this._w = Math.cos(i)),
          this.onChangeCallback(),
          this
        );
      },
      setFromRotationMatrix: function(t) {
        var e,
          i = t.elements,
          r = i[0],
          n = i[4],
          a = i[8],
          o = i[1],
          s = i[5],
          h = i[9],
          l = i[2],
          u = i[6],
          c = i[10],
          p = r + s + c;
        return (
          0 < p
            ? ((e = 0.5 / Math.sqrt(p + 1)),
              (this._w = 0.25 / e),
              (this._x = (u - h) * e),
              (this._y = (a - l) * e),
              (this._z = (o - n) * e))
            : s < r && c < r
            ? ((e = 2 * Math.sqrt(1 + r - s - c)),
              (this._w = (u - h) / e),
              (this._x = 0.25 * e),
              (this._y = (n + o) / e),
              (this._z = (a + l) / e))
            : c < s
            ? ((e = 2 * Math.sqrt(1 + s - r - c)),
              (this._w = (a - l) / e),
              (this._x = (n + o) / e),
              (this._y = 0.25 * e),
              (this._z = (h + u) / e))
            : ((e = 2 * Math.sqrt(1 + c - r - s)),
              (this._w = (o - n) / e),
              (this._x = (a + l) / e),
              (this._y = (h + u) / e),
              (this._z = 0.25 * e)),
          this.onChangeCallback(),
          this
        );
      },
      setFromUnitVectors: function(t, e) {
        return (
          void 0 === K && (K = new Oe.Vector3()),
          ($ = t.dot(e) + 1) < 1e-6
            ? (($ = 0),
              Math.abs(t.x) > Math.abs(t.z)
                ? K.set(-t.y, t.x, 0)
                : K.set(0, -t.z, t.y))
            : K.crossVectors(t, e),
          (this._x = K.x),
          (this._y = K.y),
          (this._z = K.z),
          (this._w = $),
          this.normalize(),
          this
        );
      },
      inverse: function() {
        return this.conjugate().normalize(), this;
      },
      conjugate: function() {
        return (
          (this._x *= -1),
          (this._y *= -1),
          (this._z *= -1),
          this.onChangeCallback(),
          this
        );
      },
      dot: function(t) {
        return (
          this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        );
      },
      lengthSq: function() {
        return (
          this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w
        );
      },
      length: function() {
        return Math.sqrt(
          this._x * this._x +
            this._y * this._y +
            this._z * this._z +
            this._w * this._w
        );
      },
      normalize: function() {
        var t = this.length();
        return (
          0 === t
            ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
            : ((t = 1 / t),
              (this._x = this._x * t),
              (this._y = this._y * t),
              (this._z = this._z * t),
              (this._w = this._w * t)),
          this.onChangeCallback(),
          this
        );
      },
      multiply: function(t, e) {
        return void 0 !== e
          ? this.multiplyQuaternions(t, e)
          : this.multiplyQuaternions(this, t);
      },
      multiplyQuaternions: function(t, e) {
        var i = t._x,
          r = t._y,
          n = t._z,
          a = t._w,
          o = e._x,
          s = e._y,
          h = e._z,
          l = e._w;
        return (
          (this._x = i * l + a * o + r * h - n * s),
          (this._y = r * l + a * s + n * o - i * h),
          (this._z = n * l + a * h + i * s - r * o),
          (this._w = a * l - i * o - r * s - n * h),
          this.onChangeCallback(),
          this
        );
      },
      slerp: function(t, e) {
        if (0 === e) return this;
        if (1 === e) return this.copy(t);
        var i = this._x,
          r = this._y,
          n = this._z,
          a = this._w,
          o = a * t._w + i * t._x + r * t._y + n * t._z;
        if (
          (o < 0
            ? ((this._w = -t._w),
              (this._x = -t._x),
              (this._y = -t._y),
              (this._z = -t._z),
              (o = -o))
            : this.copy(t),
          1 <= o)
        )
          return (
            (this._w = a), (this._x = i), (this._y = r), (this._z = n), this
          );
        var s = Math.sqrt(1 - o * o);
        if (Math.abs(s) < 0.001)
          return (
            (this._w = 0.5 * (a + this._w)),
            (this._x = 0.5 * (i + this._x)),
            (this._y = 0.5 * (r + this._y)),
            (this._z = 0.5 * (n + this._z)),
            this
          );
        var h = Math.atan2(s, o),
          l = Math.sin((1 - e) * h) / s,
          u = Math.sin(e * h) / s;
        return (
          (this._w = a * l + this._w * u),
          (this._x = i * l + this._x * u),
          (this._y = r * l + this._y * u),
          (this._z = n * l + this._z * u),
          this.onChangeCallback(),
          this
        );
      },
      equals: function(t) {
        return (
          t._x === this._x &&
          t._y === this._y &&
          t._z === this._z &&
          t._w === this._w
        );
      },
      fromArray: function(t, e) {
        return (
          void 0 === e && (e = 0),
          (this._x = t[e]),
          (this._y = t[e + 1]),
          (this._z = t[e + 2]),
          (this._w = t[e + 3]),
          this.onChangeCallback(),
          this
        );
      },
      toArray: function(t, e) {
        return (
          void 0 === t && (t = []),
          void 0 === e && (e = 0),
          (t[e] = this._x),
          (t[e + 1] = this._y),
          (t[e + 2] = this._z),
          (t[e + 3] = this._w),
          t
        );
      },
      onChange: function(t) {
        return (this.onChangeCallback = t), this;
      },
      onChangeCallback: function() {}
    }),
    Object.assign(Oe.Quaternion, {
      slerp: function(t, e, i, r) {
        return i.copy(t).slerp(e, r);
      },
      slerpFlat: function(t, e, i, r, n, a, o) {
        var s = i[r + 0],
          h = i[r + 1],
          l = i[r + 2],
          u = i[r + 3],
          c = n[a + 0],
          p = n[a + 1],
          d = n[a + 2],
          f = n[a + 3];
        if (u !== f || s !== c || h !== p || l !== d) {
          var m = 1 - o,
            v = s * c + h * p + l * d + u * f,
            g = 0 <= v ? 1 : -1,
            y = 1 - v * v;
          if (y > Number.EPSILON) {
            var x = Math.sqrt(y),
              M = Math.atan2(x, v * g);
            (m = Math.sin(m * M) / x), (o = Math.sin(o * M) / x);
          }
          var b = o * g;
          if (
            ((s = s * m + c * b),
            (h = h * m + p * b),
            (l = l * m + d * b),
            (u = u * m + f * b),
            m === 1 - o)
          ) {
            var _ = 1 / Math.sqrt(s * s + h * h + l * l + u * u);
            (s *= _), (h *= _), (l *= _), (u *= _);
          }
        }
        (t[e] = s), (t[e + 1] = h), (t[e + 2] = l), (t[e + 3] = u);
      }
    }),
    (Oe.Triangle = function(t, e, i) {
      (this.a = void 0 !== t ? t : new Oe.Vector3()),
        (this.b = void 0 !== e ? e : new Oe.Vector3()),
        (this.c = void 0 !== i ? i : new Oe.Vector3());
    }),
    (Oe.Triangle.normal =
      ((tt = new Oe.Vector3()),
      function(t, e, i, r) {
        var n = r || new Oe.Vector3();
        n.subVectors(i, e), tt.subVectors(t, e), n.cross(tt);
        var a = n.lengthSq();
        return 0 < a ? n.multiplyScalar(1 / Math.sqrt(a)) : n.set(0, 0, 0);
      })),
    (Oe.Triangle.barycoordFromPoint =
      ((et = new Oe.Vector3()),
      (it = new Oe.Vector3()),
      (rt = new Oe.Vector3()),
      function(t, e, i, r, n) {
        et.subVectors(r, e), it.subVectors(i, e), rt.subVectors(t, e);
        var a = et.dot(et),
          o = et.dot(it),
          s = et.dot(rt),
          h = it.dot(it),
          l = it.dot(rt),
          u = a * h - o * o,
          c = n || new Oe.Vector3();
        if (0 == u) return c.set(-2, -1, -1);
        var p = 1 / u,
          d = (h * s - o * l) * p,
          f = (a * l - o * s) * p;
        return c.set(1 - d - f, f, d);
      })),
    (Oe.Triangle.containsPoint =
      ((nt = new Oe.Vector3()),
      function(t, e, i, r) {
        var n = Oe.Triangle.barycoordFromPoint(t, e, i, r, nt);
        return 0 <= n.x && 0 <= n.y && n.x + n.y <= 1;
      })),
    (Oe.Triangle.prototype = {
      constructor: Oe.Triangle,
      set: function(t, e, i) {
        return this.a.copy(t), this.b.copy(e), this.c.copy(i), this;
      },
      setFromPointsAndIndices: function(t, e, i, r) {
        return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[r]), this;
      },
      clone: function() {
        return new this.constructor().copy(this);
      },
      copy: function(t) {
        return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
      },
      area:
        ((at = new Oe.Vector3()),
        (ot = new Oe.Vector3()),
        function() {
          return (
            at.subVectors(this.c, this.b),
            ot.subVectors(this.a, this.b),
            0.5 * at.cross(ot).length()
          );
        }),
      midpoint: function(t) {
        return (t || new Oe.Vector3())
          .addVectors(this.a, this.b)
          .add(this.c)
          .multiplyScalar(1 / 3);
      },
      normal: function(t) {
        return Oe.Triangle.normal(this.a, this.b, this.c, t);
      },
      plane: function(t) {
        return (t || new Oe.Plane()).setFromCoplanarPoints(
          this.a,
          this.b,
          this.c
        );
      },
      barycoordFromPoint: function(t, e) {
        return Oe.Triangle.barycoordFromPoint(t, this.a, this.b, this.c, e);
      },
      containsPoint: function(t) {
        return Oe.Triangle.containsPoint(t, this.a, this.b, this.c);
      },
      equals: function(t) {
        return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
      }
    }),
    (Oe.Box3 = function(t, e) {
      (this.min = void 0 !== t ? t : new Oe.Vector3(1 / 0, 1 / 0, 1 / 0)),
        (this.max = void 0 !== e ? e : new Oe.Vector3(-1 / 0, -1 / 0, -1 / 0));
    }),
    (Oe.Box3.prototype = {
      constructor: Oe.Box3,
      set: function(t, e) {
        return this.min.copy(t), this.max.copy(e), this;
      },
      setFromArray: function(t) {
        this.makeEmpty();
        for (
          var e = 1 / 0,
            i = 1 / 0,
            r = 1 / 0,
            n = -1 / 0,
            a = -1 / 0,
            o = -1 / 0,
            s = 0,
            h = t.length;
          s < h;
          s += 3
        ) {
          var l = t[s],
            u = t[s + 1],
            c = t[s + 2];
          l < e && (e = l),
            u < i && (i = u),
            c < r && (r = c),
            n < l && (n = l),
            a < u && (a = u),
            o < c && (o = c);
        }
        this.min.set(e, i, r), this.max.set(n, a, o);
      },
      setFromPoints: function(t) {
        this.makeEmpty();
        for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
        return this;
      },
      setFromCenterAndSize:
        ((pt = new Oe.Vector3()),
        function(t, e) {
          var i = pt.copy(e).multiplyScalar(0.5);
          return this.min.copy(t).sub(i), this.max.copy(t).add(i), this;
        }),
      setFromObject: function(t) {
        void 0 === ct && (ct = new Oe.Box3());
        var i = this;
        return (
          this.makeEmpty(),
          t.updateMatrixWorld(!0),
          t.traverse(function(t) {
            var e = t.geometry;
            void 0 !== e &&
              (null === e.boundingBox && e.computeBoundingBox(),
              !1 === e.boundingBox.isEmpty() &&
                (ct.copy(e.boundingBox),
                ct.applyMatrix4(t.matrixWorld),
                i.union(ct)));
          }),
          this
        );
      },
      clone: function() {
        return new this.constructor().copy(this);
      },
      copy: function(t) {
        return this.min.copy(t.min), this.max.copy(t.max), this;
      },
      makeEmpty: function() {
        return (
          (this.min.x = this.min.y = this.min.z = 1 / 0),
          (this.max.x = this.max.y = this.max.z = -1 / 0),
          this
        );
      },
      isEmpty: function() {
        return (
          this.max.x < this.min.x ||
          this.max.y < this.min.y ||
          this.max.z < this.min.z
        );
      },
      center: function(t) {
        return (t || new Oe.Vector3())
          .addVectors(this.min, this.max)
          .multiplyScalar(0.5);
      },
      size: function(t) {
        return (t || new Oe.Vector3()).subVectors(this.max, this.min);
      },
      expandByPoint: function(t) {
        return this.min.min(t), this.max.max(t), this;
      },
      expandByVector: function(t) {
        return this.min.sub(t), this.max.add(t), this;
      },
      expandByScalar: function(t) {
        return this.min.addScalar(-t), this.max.addScalar(t), this;
      },
      containsPoint: function(t) {
        return !(
          t.x < this.min.x ||
          t.x > this.max.x ||
          t.y < this.min.y ||
          t.y > this.max.y ||
          t.z < this.min.z ||
          t.z > this.max.z
        );
      },
      containsBox: function(t) {
        return (
          this.min.x <= t.min.x &&
          t.max.x <= this.max.x &&
          this.min.y <= t.min.y &&
          t.max.y <= this.max.y &&
          this.min.z <= t.min.z &&
          t.max.z <= this.max.z
        );
      },
      getParameter: function(t, e) {
        return (e || new Oe.Vector3()).set(
          (t.x - this.min.x) / (this.max.x - this.min.x),
          (t.y - this.min.y) / (this.max.y - this.min.y),
          (t.z - this.min.z) / (this.max.z - this.min.z)
        );
      },
      intersectsBox: function(t) {
        return !(
          t.max.x < this.min.x ||
          t.min.x > this.max.x ||
          t.max.y < this.min.y ||
          t.min.y > this.max.y ||
          t.max.z < this.min.z ||
          t.min.z > this.max.z
        );
      },
      intersectsSphere: function(t) {
        return (
          void 0 === ut && (ut = new Oe.Vector3()),
          this.clampPoint(t.center, ut),
          ut.distanceToSquared(t.center) <= t.radius * t.radius
        );
      },
      intersectsPlane: function(t) {
        var e, i;
        return (
          (i =
            0 < t.normal.x
              ? ((e = t.normal.x * this.min.x), t.normal.x * this.max.x)
              : ((e = t.normal.x * this.max.x), t.normal.x * this.min.x)),
          0 < t.normal.y
            ? ((e += t.normal.y * this.min.y), (i += t.normal.y * this.max.y))
            : ((e += t.normal.y * this.max.y), (i += t.normal.y * this.min.y)),
          0 < t.normal.z
            ? ((e += t.normal.z * this.min.z), (i += t.normal.z * this.max.z))
            : ((e += t.normal.z * this.max.z), (i += t.normal.z * this.min.z)),
          e <= t.constant && i >= t.constant
        );
      },
      clampPoint: function(t, e) {
        return (e || new Oe.Vector3()).copy(t).clamp(this.min, this.max);
      },
      distanceToPoint:
        ((lt = new Oe.Vector3()),
        function(t) {
          return lt
            .copy(t)
            .clamp(this.min, this.max)
            .sub(t)
            .length();
        }),
      getBoundingSphere:
        ((ht = new Oe.Vector3()),
        function(t) {
          var e = t || new Oe.Sphere();
          return (
            (e.center = this.center()),
            (e.radius = 0.5 * this.size(ht).length()),
            e
          );
        }),
      intersect: function(t) {
        return this.min.max(t.min), this.max.min(t.max), this;
      },
      union: function(t) {
        return this.min.min(t.min), this.max.max(t.max), this;
      },
      applyMatrix4:
        ((st = [
          new Oe.Vector3(),
          new Oe.Vector3(),
          new Oe.Vector3(),
          new Oe.Vector3(),
          new Oe.Vector3(),
          new Oe.Vector3(),
          new Oe.Vector3(),
          new Oe.Vector3()
        ]),
        function(t) {
          return (
            st[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
            st[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
            st[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
            st[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
            st[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
            st[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
            st[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
            st[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
            this.makeEmpty(),
            this.setFromPoints(st),
            this
          );
        }),
      translate: function(t) {
        return this.min.add(t), this.max.add(t), this;
      },
      equals: function(t) {
        return t.min.equals(this.min) && t.max.equals(this.max);
      }
    }),
    (Oe.Euler = function(t, e, i, r) {
      (this._x = t || 0),
        (this._y = e || 0),
        (this._z = i || 0),
        (this._order = r || Oe.Euler.DefaultOrder);
    }),
    (Oe.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]),
    (Oe.Euler.DefaultOrder = "XYZ"),
    (Oe.Euler.prototype = {
      constructor: Oe.Euler,
      get x() {
        return this._x;
      },
      set x(t) {
        (this._x = t), this.onChangeCallback();
      },
      get y() {
        return this._y;
      },
      set y(t) {
        (this._y = t), this.onChangeCallback();
      },
      get z() {
        return this._z;
      },
      set z(t) {
        (this._z = t), this.onChangeCallback();
      },
      get order() {
        return this._order;
      },
      set order(t) {
        (this._order = t), this.onChangeCallback();
      },
      set: function(t, e, i, r) {
        return (
          (this._x = t),
          (this._y = e),
          (this._z = i),
          (this._order = r || this._order),
          this.onChangeCallback(),
          this
        );
      },
      clone: function() {
        return new this.constructor(this._x, this._y, this._z, this._order);
      },
      copy: function(t) {
        return (
          (this._x = t._x),
          (this._y = t._y),
          (this._z = t._z),
          (this._order = t._order),
          this.onChangeCallback(),
          this
        );
      },
      setFromRotationMatrix: function(t, e, i) {
        var r = Oe.Math.clamp,
          n = t.elements,
          a = n[0],
          o = n[4],
          s = n[8],
          h = n[1],
          l = n[5],
          u = n[9],
          c = n[2],
          p = n[6],
          d = n[10];
        return (
          "XYZ" === (e = e || this._order)
            ? ((this._y = Math.asin(r(s, -1, 1))),
              Math.abs(s) < 0.99999
                ? ((this._x = Math.atan2(-u, d)), (this._z = Math.atan2(-o, a)))
                : ((this._x = Math.atan2(p, l)), (this._z = 0)))
            : "YXZ" === e
            ? ((this._x = Math.asin(-r(u, -1, 1))),
              Math.abs(u) < 0.99999
                ? ((this._y = Math.atan2(s, d)), (this._z = Math.atan2(h, l)))
                : ((this._y = Math.atan2(-c, a)), (this._z = 0)))
            : "ZXY" === e
            ? ((this._x = Math.asin(r(p, -1, 1))),
              Math.abs(p) < 0.99999
                ? ((this._y = Math.atan2(-c, d)), (this._z = Math.atan2(-o, l)))
                : ((this._y = 0), (this._z = Math.atan2(h, a))))
            : "ZYX" === e
            ? ((this._y = Math.asin(-r(c, -1, 1))),
              Math.abs(c) < 0.99999
                ? ((this._x = Math.atan2(p, d)), (this._z = Math.atan2(h, a)))
                : ((this._x = 0), (this._z = Math.atan2(-o, l))))
            : "YZX" === e
            ? ((this._z = Math.asin(r(h, -1, 1))),
              Math.abs(h) < 0.99999
                ? ((this._x = Math.atan2(-u, l)), (this._y = Math.atan2(-c, a)))
                : ((this._x = 0), (this._y = Math.atan2(s, d))))
            : "XZY" === e &&
              ((this._z = Math.asin(-r(o, -1, 1))),
              Math.abs(o) < 0.99999
                ? ((this._x = Math.atan2(p, l)), (this._y = Math.atan2(s, a)))
                : ((this._x = Math.atan2(-u, d)), (this._y = 0))),
          (this._order = e),
          !1 !== i && this.onChangeCallback(),
          this
        );
      },
      setFromQuaternion: function(t, e, i) {
        return (
          void 0 === ft && (ft = new Oe.Matrix4()),
          ft.makeRotationFromQuaternion(t),
          this.setFromRotationMatrix(ft, e, i),
          this
        );
      },
      setFromVector3: function(t, e) {
        return this.set(t.x, t.y, t.z, e || this._order);
      },
      reorder:
        ((dt = new Oe.Quaternion()),
        function(t) {
          dt.setFromEuler(this), this.setFromQuaternion(dt, t);
        }),
      equals: function(t) {
        return (
          t._x === this._x &&
          t._y === this._y &&
          t._z === this._z &&
          t._order === this._order
        );
      },
      fromArray: function(t) {
        return (
          (this._x = t[0]),
          (this._y = t[1]),
          (this._z = t[2]),
          void 0 !== t[3] && (this._order = t[3]),
          this.onChangeCallback(),
          this
        );
      },
      toArray: function(t, e) {
        return (
          void 0 === t && (t = []),
          void 0 === e && (e = 0),
          (t[e] = this._x),
          (t[e + 1] = this._y),
          (t[e + 2] = this._z),
          (t[e + 3] = this._order),
          t
        );
      },
      toVector3: function(t) {
        return t
          ? t.set(this._x, this._y, this._z)
          : new Oe.Vector3(this._x, this._y, this._z);
      },
      onChange: function(t) {
        return (this.onChangeCallback = t), this;
      },
      onChangeCallback: function() {}
    }),
    (Oe.Ray = function(t, e) {
      (this.origin = void 0 !== t ? t : new Oe.Vector3()),
        (this.direction = void 0 !== e ? e : new Oe.Vector3());
    }),
    (Oe.Ray.prototype = {
      constructor: Oe.Ray,
      set: function(t, e) {
        return this.origin.copy(t), this.direction.copy(e), this;
      },
      clone: function() {
        return new this.constructor().copy(this);
      },
      copy: function(t) {
        return (
          this.origin.copy(t.origin), this.direction.copy(t.direction), this
        );
      },
      at: function(t, e) {
        return (e || new Oe.Vector3())
          .copy(this.direction)
          .multiplyScalar(t)
          .add(this.origin);
      },
      lookAt: function(t) {
        this.direction
          .copy(t)
          .sub(this.origin)
          .normalize();
      },
      recast:
        ((Et = new Oe.Vector3()),
        function(t) {
          return this.origin.copy(this.at(t, Et)), this;
        }),
      closestPointToPoint: function(t, e) {
        var i = e || new Oe.Vector3();
        i.subVectors(t, this.origin);
        var r = i.dot(this.direction);
        return r < 0
          ? i.copy(this.origin)
          : i
              .copy(this.direction)
              .multiplyScalar(r)
              .add(this.origin);
      },
      distanceToPoint: function(t) {
        return Math.sqrt(this.distanceSqToPoint(t));
      },
      distanceSqToPoint:
        ((wt = new Oe.Vector3()),
        function(t) {
          var e = wt.subVectors(t, this.origin).dot(this.direction);
          return e < 0
            ? this.origin.distanceToSquared(t)
            : (wt
                .copy(this.direction)
                .multiplyScalar(e)
                .add(this.origin),
              wt.distanceToSquared(t));
        }),
      distanceSqToSegment:
        ((bt = new Oe.Vector3()),
        (_t = new Oe.Vector3()),
        (St = new Oe.Vector3()),
        function(t, e, i, r) {
          bt
            .copy(t)
            .add(e)
            .multiplyScalar(0.5),
            _t
              .copy(e)
              .sub(t)
              .normalize(),
            St.copy(this.origin).sub(bt);
          var n,
            a,
            o,
            s,
            h = 0.5 * t.distanceTo(e),
            l = -this.direction.dot(_t),
            u = St.dot(this.direction),
            c = -St.dot(_t),
            p = St.lengthSq(),
            d = Math.abs(1 - l * l);
          if (0 < d)
            if (((a = l * u - c), (s = h * d), 0 <= (n = l * c - u)))
              if (-s <= a)
                if (a <= s) {
                  var f = 1 / d;
                  o =
                    (n *= f) * (n + l * (a *= f) + 2 * u) +
                    a * (l * n + a + 2 * c) +
                    p;
                } else
                  (a = h),
                    (o =
                      -(n = Math.max(0, -(l * a + u))) * n +
                      a * (a + 2 * c) +
                      p);
              else
                (a = -h),
                  (o =
                    -(n = Math.max(0, -(l * a + u))) * n + a * (a + 2 * c) + p);
            else
              o =
                a <= -s
                  ? -(n = Math.max(0, -(-l * h + u))) * n +
                    (a = 0 < n ? -h : Math.min(Math.max(-h, -c), h)) *
                      (a + 2 * c) +
                    p
                  : a <= s
                  ? ((n = 0),
                    (a = Math.min(Math.max(-h, -c), h)) * (a + 2 * c) + p)
                  : -(n = Math.max(0, -(l * h + u))) * n +
                    (a = 0 < n ? h : Math.min(Math.max(-h, -c), h)) *
                      (a + 2 * c) +
                    p;
          else
            (a = 0 < l ? -h : h),
              (o = -(n = Math.max(0, -(l * a + u))) * n + a * (a + 2 * c) + p);
          return (
            i &&
              i
                .copy(this.direction)
                .multiplyScalar(n)
                .add(this.origin),
            r &&
              r
                .copy(_t)
                .multiplyScalar(a)
                .add(bt),
            o
          );
        }),
      intersectSphere:
        ((Mt = new Oe.Vector3()),
        function(t, e) {
          Mt.subVectors(t.center, this.origin);
          var i = Mt.dot(this.direction),
            r = Mt.dot(Mt) - i * i,
            n = t.radius * t.radius;
          if (n < r) return null;
          var a = Math.sqrt(n - r),
            o = i - a,
            s = i + a;
          return o < 0 && s < 0 ? null : o < 0 ? this.at(s, e) : this.at(o, e);
        }),
      intersectsSphere: function(t) {
        return this.distanceToPoint(t.center) <= t.radius;
      },
      distanceToPlane: function(t) {
        var e = t.normal.dot(this.direction);
        if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
        var i = -(this.origin.dot(t.normal) + t.constant) / e;
        return 0 <= i ? i : null;
      },
      intersectPlane: function(t, e) {
        var i = this.distanceToPlane(t);
        return null === i ? null : this.at(i, e);
      },
      intersectsPlane: function(t) {
        var e = t.distanceToPoint(this.origin);
        return 0 === e || t.normal.dot(this.direction) * e < 0;
      },
      intersectBox: function(t, e) {
        var i,
          r,
          n,
          a,
          o,
          s,
          h = 1 / this.direction.x,
          l = 1 / this.direction.y,
          u = 1 / this.direction.z,
          c = this.origin;
        return (
          (r =
            0 <= h
              ? ((i = (t.min.x - c.x) * h), (t.max.x - c.x) * h)
              : ((i = (t.max.x - c.x) * h), (t.min.x - c.x) * h)),
          (a =
            0 <= l
              ? ((n = (t.min.y - c.y) * l), (t.max.y - c.y) * l)
              : ((n = (t.max.y - c.y) * l), (t.min.y - c.y) * l)) < i || r < n
            ? null
            : ((i < n || i != i) && (i = n),
              (a < r || r != r) && (r = a),
              (s =
                0 <= u
                  ? ((o = (t.min.z - c.z) * u), (t.max.z - c.z) * u)
                  : ((o = (t.max.z - c.z) * u), (t.min.z - c.z) * u)) < i ||
              r < o
                ? null
                : ((i < o || i != i) && (i = o),
                  (s < r || r != r) && (r = s),
                  r < 0 ? null : this.at(0 <= i ? i : r, e)))
        );
      },
      intersectsBox:
        ((xt = new Oe.Vector3()),
        function(t) {
          return null !== this.intersectBox(t, xt);
        }),
      intersectTriangle:
        ((mt = new Oe.Vector3()),
        (vt = new Oe.Vector3()),
        (gt = new Oe.Vector3()),
        (yt = new Oe.Vector3()),
        function(t, e, i, r, n) {
          vt.subVectors(e, t), gt.subVectors(i, t), yt.crossVectors(vt, gt);
          var a,
            o = this.direction.dot(yt);
          if (0 < o) {
            if (r) return null;
            a = 1;
          } else {
            if (!(o < 0)) return null;
            (a = -1), (o = -o);
          }
          mt.subVectors(this.origin, t);
          var s = a * this.direction.dot(gt.crossVectors(mt, gt));
          if (s < 0) return null;
          var h = a * this.direction.dot(vt.cross(mt));
          if (h < 0) return null;
          if (o < s + h) return null;
          var l = -a * mt.dot(yt);
          return l < 0 ? null : this.at(l / o, n);
        }),
      applyMatrix4: function(t) {
        return (
          this.direction.add(this.origin).applyMatrix4(t),
          this.origin.applyMatrix4(t),
          this.direction.sub(this.origin),
          this.direction.normalize(),
          this
        );
      },
      equals: function(t) {
        return (
          t.origin.equals(this.origin) && t.direction.equals(this.direction)
        );
      }
    }),
    (Oe.Sphere = function(t, e) {
      (this.center = void 0 !== t ? t : new Oe.Vector3()),
        (this.radius = void 0 !== e ? e : 0);
    }),
    (Oe.Sphere.prototype = {
      constructor: Oe.Sphere,
      set: function(t, e) {
        return this.center.copy(t), (this.radius = e), this;
      },
      setFromPoints:
        ((Tt = new Oe.Box3()),
        function(t, e) {
          var i = this.center;
          void 0 !== e ? i.copy(e) : Tt.setFromPoints(t).center(i);
          for (var r = 0, n = 0, a = t.length; n < a; n++)
            r = Math.max(r, i.distanceToSquared(t[n]));
          return (this.radius = Math.sqrt(r)), this;
        }),
      clone: function() {
        return new this.constructor().copy(this);
      },
      copy: function(t) {
        return this.center.copy(t.center), (this.radius = t.radius), this;
      },
      empty: function() {
        return this.radius <= 0;
      },
      containsPoint: function(t) {
        return t.distanceToSquared(this.center) <= this.radius * this.radius;
      },
      distanceToPoint: function(t) {
        return t.distanceTo(this.center) - this.radius;
      },
      intersectsSphere: function(t) {
        var e = this.radius + t.radius;
        return t.center.distanceToSquared(this.center) <= e * e;
      },
      intersectsBox: function(t) {
        return t.intersectsSphere(this);
      },
      intersectsPlane: function(t) {
        return Math.abs(this.center.dot(t.normal) - t.constant) <= this.radius;
      },
      clampPoint: function(t, e) {
        var i = this.center.distanceToSquared(t),
          r = e || new Oe.Vector3();
        return (
          r.copy(t),
          i > this.radius * this.radius &&
            (r.sub(this.center).normalize(),
            r.multiplyScalar(this.radius).add(this.center)),
          r
        );
      },
      getBoundingBox: function(t) {
        var e = t || new Oe.Box3();
        return (
          e.set(this.center, this.center), e.expandByScalar(this.radius), e
        );
      },
      applyMatrix4: function(t) {
        return (
          this.center.applyMatrix4(t),
          (this.radius = this.radius * t.getMaxScaleOnAxis()),
          this
        );
      },
      translate: function(t) {
        return this.center.add(t), this;
      },
      equals: function(t) {
        return t.center.equals(this.center) && t.radius === this.radius;
      }
    }),
    (Oe.Frustum = function(t, e, i, r, n, a) {
      this.planes = [
        void 0 !== t ? t : new Oe.Plane(),
        void 0 !== e ? e : new Oe.Plane(),
        void 0 !== i ? i : new Oe.Plane(),
        void 0 !== r ? r : new Oe.Plane(),
        void 0 !== n ? n : new Oe.Plane(),
        void 0 !== a ? a : new Oe.Plane()
      ];
    }),
    (Oe.Frustum.prototype = {
      constructor: Oe.Frustum,
      set: function(t, e, i, r, n, a) {
        var o = this.planes;
        return (
          o[0].copy(t),
          o[1].copy(e),
          o[2].copy(i),
          o[3].copy(r),
          o[4].copy(n),
          o[5].copy(a),
          this
        );
      },
      clone: function() {
        return new this.constructor().copy(this);
      },
      copy: function(t) {
        for (var e = this.planes, i = 0; i < 6; i++) e[i].copy(t.planes[i]);
        return this;
      },
      setFromMatrix: function(t) {
        var e = this.planes,
          i = t.elements,
          r = i[0],
          n = i[1],
          a = i[2],
          o = i[3],
          s = i[4],
          h = i[5],
          l = i[6],
          u = i[7],
          c = i[8],
          p = i[9],
          d = i[10],
          f = i[11],
          m = i[12],
          v = i[13],
          g = i[14],
          y = i[15];
        return (
          e[0].setComponents(o - r, u - s, f - c, y - m).normalize(),
          e[1].setComponents(o + r, u + s, f + c, y + m).normalize(),
          e[2].setComponents(o + n, u + h, f + p, y + v).normalize(),
          e[3].setComponents(o - n, u - h, f - p, y - v).normalize(),
          e[4].setComponents(o - a, u - l, f - d, y - g).normalize(),
          e[5].setComponents(o + a, u + l, f + d, y + g).normalize(),
          this
        );
      },
      intersectsObject:
        ((Rt = new Oe.Sphere()),
        function(t) {
          var e = t.geometry;
          return (
            null === e.boundingSphere && e.computeBoundingSphere(),
            Rt.copy(e.boundingSphere),
            Rt.applyMatrix4(t.matrixWorld),
            this.intersectsSphere(Rt)
          );
        }),
      intersectsSphere: function(t) {
        for (
          var e = this.planes, i = t.center, r = -t.radius, n = 0;
          n < 6;
          n++
        ) {
          if (e[n].distanceToPoint(i) < r) return !1;
        }
        return !0;
      },
      intersectsBox:
        ((At = new Oe.Vector3()),
        (Lt = new Oe.Vector3()),
        function(t) {
          for (var e = this.planes, i = 0; i < 6; i++) {
            var r = e[i];
            (At.x = 0 < r.normal.x ? t.min.x : t.max.x),
              (Lt.x = 0 < r.normal.x ? t.max.x : t.min.x),
              (At.y = 0 < r.normal.y ? t.min.y : t.max.y),
              (Lt.y = 0 < r.normal.y ? t.max.y : t.min.y),
              (At.z = 0 < r.normal.z ? t.min.z : t.max.z),
              (Lt.z = 0 < r.normal.z ? t.max.z : t.min.z);
            var n = r.distanceToPoint(At),
              a = r.distanceToPoint(Lt);
            if (n < 0 && a < 0) return !1;
          }
          return !0;
        }),
      containsPoint: function(t) {
        for (var e = this.planes, i = 0; i < 6; i++)
          if (e[i].distanceToPoint(t) < 0) return !1;
        return !0;
      }
    }),
    (Oe.EventDispatcher = function() {}),
    (Oe.EventDispatcher.prototype = {
      constructor: Oe.EventDispatcher,
      apply: function(t) {
        (t.addEventListener = Oe.EventDispatcher.prototype.addEventListener),
          (t.hasEventListener = Oe.EventDispatcher.prototype.hasEventListener),
          (t.removeEventListener =
            Oe.EventDispatcher.prototype.removeEventListener),
          (t.dispatchEvent = Oe.EventDispatcher.prototype.dispatchEvent);
      },
      addEventListener: function(t, e) {
        void 0 === this._listeners && (this._listeners = {});
        var i = this._listeners;
        void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e);
      },
      hasEventListener: function(t, e) {
        if (void 0 === this._listeners) return !1;
        var i = this._listeners;
        return void 0 !== i[t] && -1 !== i[t].indexOf(e);
      },
      removeEventListener: function(t, e) {
        if (void 0 !== this._listeners) {
          var i = this._listeners[t];
          if (void 0 !== i) {
            var r = i.indexOf(e);
            -1 !== r && i.splice(r, 1);
          }
        }
      },
      dispatchEvent: function(t) {
        if (void 0 !== this._listeners) {
          var e = this._listeners[t.type];
          if (void 0 !== e) {
            t.target = this;
            for (var i = [], r = e.length, n = 0; n < r; n++) i[n] = e[n];
            for (n = 0; n < r; n++) i[n].call(this, t);
          }
        }
      }
    }),
    (Oe.Layers = function() {
      this.mask = 1;
    }),
    (Oe.Layers.prototype = {
      constructor: Oe.Layers,
      set: function(t) {
        this.mask = 1 << t;
      },
      enable: function(t) {
        this.mask |= 1 << t;
      },
      toggle: function(t) {
        this.mask ^= 1 << t;
      },
      disable: function(t) {
        this.mask &= ~(1 << t);
      },
      test: function(t) {
        return 0 != (this.mask & t.mask);
      }
    }),
    (Oe.Object3D = function() {
      Object.defineProperty(this, "id", { value: Oe.Object3DIdCount++ }),
        (this.uuid = Oe.Math.generateUUID()),
        (this.name = ""),
        (this.type = "Object3D"),
        (this.parent = null),
        (this.children = []),
        (this.up = Oe.Object3D.DefaultUp.clone());
      var t = new Oe.Vector3(),
        e = new Oe.Euler(),
        i = new Oe.Quaternion(),
        r = new Oe.Vector3(1, 1, 1);
      e.onChange(function() {
        i.setFromEuler(e, !1);
      }),
        i.onChange(function() {
          e.setFromQuaternion(i, void 0, !1);
        }),
        Object.defineProperties(this, {
          position: { enumerable: !0, value: t },
          rotation: { enumerable: !0, value: e },
          quaternion: { enumerable: !0, value: i },
          scale: { enumerable: !0, value: r },
          modelViewMatrix: { value: new Oe.Matrix4() },
          normalMatrix: { value: new Oe.Matrix3() }
        }),
        (this.rotationAutoUpdate = !0),
        (this.matrix = new Oe.Matrix4()),
        (this.matrixWorld = new Oe.Matrix4()),
        (this.matrixAutoUpdate = Oe.Object3D.DefaultMatrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = !1),
        (this.layers = new Oe.Layers()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.userData = {});
    }),
    (Oe.Object3D.DefaultUp = new Oe.Vector3(0, 1, 0)),
    (Oe.Object3D.DefaultMatrixAutoUpdate = !0),
    (Oe.Object3D.prototype = {
      constructor: Oe.Object3D,
      applyMatrix: function(t) {
        this.matrix.multiplyMatrices(t, this.matrix),
          this.matrix.decompose(this.position, this.quaternion, this.scale);
      },
      setRotationFromAxisAngle: function(t, e) {
        this.quaternion.setFromAxisAngle(t, e);
      },
      setRotationFromEuler: function(t) {
        this.quaternion.setFromEuler(t, !0);
      },
      setRotationFromMatrix: function(t) {
        this.quaternion.setFromRotationMatrix(t);
      },
      setRotationFromQuaternion: function(t) {
        this.quaternion.copy(t);
      },
      rotateOnAxis:
        ((Xt = new Oe.Quaternion()),
        function(t, e) {
          return Xt.setFromAxisAngle(t, e), this.quaternion.multiply(Xt), this;
        }),
      rotateX:
        ((jt = new Oe.Vector3(1, 0, 0)),
        function(t) {
          return this.rotateOnAxis(jt, t);
        }),
      rotateY:
        ((Wt = new Oe.Vector3(0, 1, 0)),
        function(t) {
          return this.rotateOnAxis(Wt, t);
        }),
      rotateZ:
        ((Gt = new Oe.Vector3(0, 0, 1)),
        function(t) {
          return this.rotateOnAxis(Gt, t);
        }),
      translateOnAxis:
        ((kt = new Oe.Vector3()),
        function(t, e) {
          return (
            kt.copy(t).applyQuaternion(this.quaternion),
            this.position.add(kt.multiplyScalar(e)),
            this
          );
        }),
      translateX:
        ((zt = new Oe.Vector3(1, 0, 0)),
        function(t) {
          return this.translateOnAxis(zt, t);
        }),
      translateY:
        ((Vt = new Oe.Vector3(0, 1, 0)),
        function(t) {
          return this.translateOnAxis(Vt, t);
        }),
      translateZ:
        ((Ot = new Oe.Vector3(0, 0, 1)),
        function(t) {
          return this.translateOnAxis(Ot, t);
        }),
      localToWorld: function(t) {
        return t.applyMatrix4(this.matrixWorld);
      },
      worldToLocal:
        ((It = new Oe.Matrix4()),
        function(t) {
          return t.applyMatrix4(It.getInverse(this.matrixWorld));
        }),
      lookAt:
        ((Bt = new Oe.Matrix4()),
        function(t) {
          Bt.lookAt(t, this.position, this.up),
            this.quaternion.setFromRotationMatrix(Bt);
        }),
      add: function(t) {
        if (1 < arguments.length) {
          for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
          return this;
        }
        return (
          t === this ||
            (t instanceof Oe.Object3D &&
              (null !== t.parent && t.parent.remove(t),
              (t.parent = this),
              t.dispatchEvent({ type: "added" }),
              this.children.push(t))),
          this
        );
      },
      remove: function(t) {
        if (1 < arguments.length)
          for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
        var i = this.children.indexOf(t);
        -1 !== i &&
          ((t.parent = null),
          t.dispatchEvent({ type: "removed" }),
          this.children.splice(i, 1));
      },
      getObjectById: function(t) {
        return this.getObjectByProperty("id", t);
      },
      getObjectByName: function(t) {
        return this.getObjectByProperty("name", t);
      },
      getObjectByProperty: function(t, e) {
        if (this[t] === e) return this;
        for (var i = 0, r = this.children.length; i < r; i++) {
          var n = this.children[i].getObjectByProperty(t, e);
          if (void 0 !== n) return n;
        }
      },
      getWorldPosition: function(t) {
        var e = t || new Oe.Vector3();
        return (
          this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
        );
      },
      getWorldQuaternion:
        ((Nt = new Oe.Vector3()),
        (Dt = new Oe.Vector3()),
        function(t) {
          var e = t || new Oe.Quaternion();
          return (
            this.updateMatrixWorld(!0), this.matrixWorld.decompose(Nt, e, Dt), e
          );
        }),
      getWorldRotation:
        ((Ft = new Oe.Quaternion()),
        function(t) {
          var e = t || new Oe.Euler();
          return (
            this.getWorldQuaternion(Ft),
            e.setFromQuaternion(Ft, this.rotation.order, !1)
          );
        }),
      getWorldScale:
        ((Ut = new Oe.Vector3()),
        (Pt = new Oe.Quaternion()),
        function(t) {
          var e = t || new Oe.Vector3();
          return (
            this.updateMatrixWorld(!0), this.matrixWorld.decompose(Ut, Pt, e), e
          );
        }),
      getWorldDirection:
        ((Ct = new Oe.Quaternion()),
        function(t) {
          var e = t || new Oe.Vector3();
          return (
            this.getWorldQuaternion(Ct), e.set(0, 0, 1).applyQuaternion(Ct)
          );
        }),
      raycast: function() {},
      traverse: function(t) {
        t(this);
        for (var e = this.children, i = 0, r = e.length; i < r; i++)
          e[i].traverse(t);
      },
      traverseVisible: function(t) {
        if (!1 !== this.visible) {
          t(this);
          for (var e = this.children, i = 0, r = e.length; i < r; i++)
            e[i].traverseVisible(t);
        }
      },
      traverseAncestors: function(t) {
        var e = this.parent;
        null !== e && (t(e), e.traverseAncestors(t));
      },
      updateMatrix: function() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
          (this.matrixWorldNeedsUpdate = !0);
      },
      updateMatrixWorld: function(t) {
        !0 === this.matrixAutoUpdate && this.updateMatrix(),
          (!0 !== this.matrixWorldNeedsUpdate && !0 !== t) ||
            (null === this.parent
              ? this.matrixWorld.copy(this.matrix)
              : this.matrixWorld.multiplyMatrices(
                  this.parent.matrixWorld,
                  this.matrix
                ),
            (t = !(this.matrixWorldNeedsUpdate = !1)));
        for (var e = 0, i = this.children.length; e < i; e++)
          this.children[e].updateMatrixWorld(t);
      },
      toJSON: function(t) {
        var e = void 0 === t,
          i = {};
        e &&
          ((t = { geometries: {}, materials: {}, textures: {}, images: {} }),
          (i.metadata = {
            version: 4.4,
            type: "Object",
            generator: "Object3D.toJSON"
          }));
        var r = {};
        if (
          ((r.uuid = this.uuid),
          (r.type = this.type),
          "" !== this.name && (r.name = this.name),
          "{}" !== JSON.stringify(this.userData) &&
            (r.userData = this.userData),
          !0 === this.castShadow && (r.castShadow = !0),
          !0 === this.receiveShadow && (r.receiveShadow = !0),
          !1 === this.visible && (r.visible = !1),
          (r.matrix = this.matrix.toArray()),
          void 0 !== this.geometry &&
            (void 0 === t.geometries[this.geometry.uuid] &&
              (t.geometries[this.geometry.uuid] = this.geometry.toJSON(t)),
            (r.geometry = this.geometry.uuid)),
          void 0 !== this.material &&
            (void 0 === t.materials[this.material.uuid] &&
              (t.materials[this.material.uuid] = this.material.toJSON(t)),
            (r.material = this.material.uuid)),
          0 < this.children.length)
        ) {
          r.children = [];
          for (var n = 0; n < this.children.length; n++)
            r.children.push(this.children[n].toJSON(t).object);
        }
        if (e) {
          var a = l(t.geometries),
            o = l(t.materials),
            s = l(t.textures),
            h = l(t.images);
          0 < a.length && (i.geometries = a),
            0 < o.length && (i.materials = o),
            0 < s.length && (i.textures = s),
            0 < h.length && (i.images = h);
        }
        return (i.object = r), i;
        function l(t) {
          var e = [];
          for (var i in t) {
            var r = t[i];
            delete r.metadata, e.push(r);
          }
          return e;
        }
      },
      clone: function(t) {
        return new this.constructor().copy(this, t);
      },
      copy: function(t, e) {
        if (
          (void 0 === e && (e = !0),
          (this.name = t.name),
          this.up.copy(t.up),
          this.position.copy(t.position),
          this.quaternion.copy(t.quaternion),
          this.scale.copy(t.scale),
          (this.rotationAutoUpdate = t.rotationAutoUpdate),
          this.matrix.copy(t.matrix),
          this.matrixWorld.copy(t.matrixWorld),
          (this.matrixAutoUpdate = t.matrixAutoUpdate),
          (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
          (this.visible = t.visible),
          (this.castShadow = t.castShadow),
          (this.receiveShadow = t.receiveShadow),
          (this.frustumCulled = t.frustumCulled),
          (this.renderOrder = t.renderOrder),
          (this.userData = JSON.parse(JSON.stringify(t.userData))),
          !0 === e)
        )
          for (var i = 0; i < t.children.length; i++) {
            var r = t.children[i];
            this.add(r.clone());
          }
        return this;
      }
    }),
    Oe.EventDispatcher.prototype.apply(Oe.Object3D.prototype),
    (Oe.Object3DIdCount = 0),
    (Oe.Face3 = function(t, e, i, r, n, a) {
      (this.a = t),
        (this.b = e),
        (this.c = i),
        (this.normal = r instanceof Oe.Vector3 ? r : new Oe.Vector3()),
        (this.vertexNormals = Array.isArray(r) ? r : []),
        (this.color = n instanceof Oe.Color ? n : new Oe.Color()),
        (this.vertexColors = Array.isArray(n) ? n : []),
        (this.materialIndex = void 0 !== a ? a : 0);
    }),
    (Oe.Face3.prototype = {
      constructor: Oe.Face3,
      clone: function() {
        return new this.constructor().copy(this);
      },
      copy: function(t) {
        (this.a = t.a),
          (this.b = t.b),
          (this.c = t.c),
          this.normal.copy(t.normal),
          this.color.copy(t.color),
          (this.materialIndex = t.materialIndex);
        for (var e = 0, i = t.vertexNormals.length; e < i; e++)
          this.vertexNormals[e] = t.vertexNormals[e].clone();
        for (e = 0, i = t.vertexColors.length; e < i; e++)
          this.vertexColors[e] = t.vertexColors[e].clone();
        return this;
      }
    }),
    (Oe.BufferAttribute = function(t, e) {
      (this.uuid = Oe.Math.generateUUID()),
        (this.array = t),
        (this.itemSize = e),
        (this.dynamic = !1),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.version = 0);
    }),
    (Oe.BufferAttribute.prototype = {
      constructor: Oe.BufferAttribute,
      get count() {
        return this.array.length / this.itemSize;
      },
      set needsUpdate(t) {
        !0 === t && this.version++;
      },
      setDynamic: function(t) {
        return (this.dynamic = t), this;
      },
      copy: function(t) {
        return (
          (this.array = new t.array.constructor(t.array)),
          (this.itemSize = t.itemSize),
          (this.dynamic = t.dynamic),
          this
        );
      },
      copyAt: function(t, e, i) {
        (t *= this.itemSize), (i *= e.itemSize);
        for (var r = 0, n = this.itemSize; r < n; r++)
          this.array[t + r] = e.array[i + r];
        return this;
      },
      copyArray: function(t) {
        return this.array.set(t), this;
      },
      copyColorsArray: function(t) {
        for (var e = this.array, i = 0, r = 0, n = t.length; r < n; r++) {
          var a = t[r];
          void 0 === a && (a = new Oe.Color()),
            (e[i++] = a.r),
            (e[i++] = a.g),
            (e[i++] = a.b);
        }
        return this;
      },
      copyIndicesArray: function(t) {
        for (var e = this.array, i = 0, r = 0, n = t.length; r < n; r++) {
          var a = t[r];
          (e[i++] = a.a), (e[i++] = a.b), (e[i++] = a.c);
        }
        return this;
      },
      copyVector2sArray: function(t) {
        for (var e = this.array, i = 0, r = 0, n = t.length; r < n; r++) {
          var a = t[r];
          void 0 === a && (a = new Oe.Vector2()),
            (e[i++] = a.x),
            (e[i++] = a.y);
        }
        return this;
      },
      copyVector3sArray: function(t) {
        for (var e = this.array, i = 0, r = 0, n = t.length; r < n; r++) {
          var a = t[r];
          void 0 === a && (a = new Oe.Vector3()),
            (e[i++] = a.x),
            (e[i++] = a.y),
            (e[i++] = a.z);
        }
        return this;
      },
      copyVector4sArray: function(t) {
        for (var e = this.array, i = 0, r = 0, n = t.length; r < n; r++) {
          var a = t[r];
          void 0 === a && (a = new Oe.Vector4()),
            (e[i++] = a.x),
            (e[i++] = a.y),
            (e[i++] = a.z),
            (e[i++] = a.w);
        }
        return this;
      },
      set: function(t, e) {
        return void 0 === e && (e = 0), this.array.set(t, e), this;
      },
      getX: function(t) {
        return this.array[t * this.itemSize];
      },
      setX: function(t, e) {
        return (this.array[t * this.itemSize] = e), this;
      },
      getY: function(t) {
        return this.array[t * this.itemSize + 1];
      },
      setY: function(t, e) {
        return (this.array[t * this.itemSize + 1] = e), this;
      },
      getZ: function(t) {
        return this.array[t * this.itemSize + 2];
      },
      setZ: function(t, e) {
        return (this.array[t * this.itemSize + 2] = e), this;
      },
      getW: function(t) {
        return this.array[t * this.itemSize + 3];
      },
      setW: function(t, e) {
        return (this.array[t * this.itemSize + 3] = e), this;
      },
      setXY: function(t, e, i) {
        return (
          (t *= this.itemSize),
          (this.array[t + 0] = e),
          (this.array[t + 1] = i),
          this
        );
      },
      setXYZ: function(t, e, i, r) {
        return (
          (t *= this.itemSize),
          (this.array[t + 0] = e),
          (this.array[t + 1] = i),
          (this.array[t + 2] = r),
          this
        );
      },
      setXYZW: function(t, e, i, r, n) {
        return (
          (t *= this.itemSize),
          (this.array[t + 0] = e),
          (this.array[t + 1] = i),
          (this.array[t + 2] = r),
          (this.array[t + 3] = n),
          this
        );
      },
      clone: function() {
        return new this.constructor().copy(this);
      }
    }),
    (Oe.Int8Attribute = function(t, e) {
      return new Oe.BufferAttribute(new Int8Array(t), e);
    }),
    (Oe.Uint8Attribute = function(t, e) {
      return new Oe.BufferAttribute(new Uint8Array(t), e);
    }),
    (Oe.Uint8ClampedAttribute = function(t, e) {
      return new Oe.BufferAttribute(new Uint8ClampedArray(t), e);
    }),
    (Oe.Int16Attribute = function(t, e) {
      return new Oe.BufferAttribute(new Int16Array(t), e);
    }),
    (Oe.Uint16Attribute = function(t, e) {
      return new Oe.BufferAttribute(new Uint16Array(t), e);
    }),
    (Oe.Int32Attribute = function(t, e) {
      return new Oe.BufferAttribute(new Int32Array(t), e);
    }),
    (Oe.Uint32Attribute = function(t, e) {
      return new Oe.BufferAttribute(new Uint32Array(t), e);
    }),
    (Oe.Float32Attribute = function(t, e) {
      return new Oe.BufferAttribute(new Float32Array(t), e);
    }),
    (Oe.Float64Attribute = function(t, e) {
      return new Oe.BufferAttribute(new Float64Array(t), e);
    }),
    (Oe.DynamicBufferAttribute = function(t, e) {
      return new Oe.BufferAttribute(t, e).setDynamic(!0);
    }),
    (Oe.InstancedBufferAttribute = function(t, e, i) {
      Oe.BufferAttribute.call(this, t, e), (this.meshPerAttribute = i || 1);
    }),
    (Oe.InstancedBufferAttribute.prototype = Object.create(
      Oe.BufferAttribute.prototype
    )),
    (Oe.InstancedBufferAttribute.prototype.constructor =
      Oe.InstancedBufferAttribute),
    (Oe.InstancedBufferAttribute.prototype.copy = function(t) {
      return (
        Oe.BufferAttribute.prototype.copy.call(this, t),
        (this.meshPerAttribute = t.meshPerAttribute),
        this
      );
    }),
    (Oe.BufferGeometry = function() {
      Object.defineProperty(this, "id", { value: Oe.GeometryIdCount++ }),
        (this.uuid = Oe.Math.generateUUID()),
        (this.name = ""),
        (this.type = "BufferGeometry"),
        (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 });
    }),
    (Oe.BufferGeometry.prototype = {
      constructor: Oe.BufferGeometry,
      getIndex: function() {
        return this.index;
      },
      setIndex: function(t) {
        this.index = t;
      },
      addAttribute: function(t, e) {
        if (
          e instanceof Oe.BufferAttribute != !1 ||
          e instanceof Oe.InterleavedBufferAttribute != !1
        ) {
          if ("index" !== t) return (this.attributes[t] = e), this;
          this.setIndex(e);
        } else this.addAttribute(t, new Oe.BufferAttribute(e, arguments[2]));
      },
      getAttribute: function(t) {
        return this.attributes[t];
      },
      removeAttribute: function(t) {
        return delete this.attributes[t], this;
      },
      addGroup: function(t, e, i) {
        this.groups.push({
          start: t,
          count: e,
          materialIndex: void 0 !== i ? i : 0
        });
      },
      clearGroups: function() {
        this.groups = [];
      },
      setDrawRange: function(t, e) {
        (this.drawRange.start = t), (this.drawRange.count = e);
      },
      applyMatrix: function(t) {
        var e = this.attributes.position;
        void 0 !== e && (t.applyToVector3Array(e.array), (e.needsUpdate = !0));
        var i = this.attributes.normal;
        void 0 !== i &&
          (new Oe.Matrix3().getNormalMatrix(t).applyToVector3Array(i.array),
          (i.needsUpdate = !0));
        return (
          null !== this.boundingBox && this.computeBoundingBox(),
          null !== this.boundingSphere && this.computeBoundingSphere(),
          this
        );
      },
      rotateX: function(t) {
        return (
          void 0 === $t && ($t = new Oe.Matrix4()),
          $t.makeRotationX(t),
          this.applyMatrix($t),
          this
        );
      },
      rotateY: function(t) {
        return (
          void 0 === Kt && (Kt = new Oe.Matrix4()),
          Kt.makeRotationY(t),
          this.applyMatrix(Kt),
          this
        );
      },
      rotateZ: function(t) {
        return (
          void 0 === Jt && (Jt = new Oe.Matrix4()),
          Jt.makeRotationZ(t),
          this.applyMatrix(Jt),
          this
        );
      },
      translate: function(t, e, i) {
        return (
          void 0 === Qt && (Qt = new Oe.Matrix4()),
          Qt.makeTranslation(t, e, i),
          this.applyMatrix(Qt),
          this
        );
      },
      scale: function(t, e, i) {
        return (
          void 0 === Zt && (Zt = new Oe.Matrix4()),
          Zt.makeScale(t, e, i),
          this.applyMatrix(Zt),
          this
        );
      },
      lookAt: function(t) {
        void 0 === Yt && (Yt = new Oe.Object3D()),
          Yt.lookAt(t),
          Yt.updateMatrix(),
          this.applyMatrix(Yt.matrix);
      },
      center: function() {
        this.computeBoundingBox();
        var t = this.boundingBox.center().negate();
        return this.translate(t.x, t.y, t.z), t;
      },
      setFromObject: function(t) {
        var e = t.geometry;
        if (t instanceof Oe.Points || t instanceof Oe.Line) {
          var i = new Oe.Float32Attribute(3 * e.vertices.length, 3),
            r = new Oe.Float32Attribute(3 * e.colors.length, 3);
          if (
            (this.addAttribute("position", i.copyVector3sArray(e.vertices)),
            this.addAttribute("color", r.copyColorsArray(e.colors)),
            e.lineDistances && e.lineDistances.length === e.vertices.length)
          ) {
            var n = new Oe.Float32Attribute(e.lineDistances.length, 1);
            this.addAttribute("lineDistance", n.copyArray(e.lineDistances));
          }
          null !== e.boundingSphere &&
            (this.boundingSphere = e.boundingSphere.clone()),
            null !== e.boundingBox &&
              (this.boundingBox = e.boundingBox.clone());
        } else
          t instanceof Oe.Mesh &&
            e instanceof Oe.Geometry &&
            this.fromGeometry(e);
        return this;
      },
      updateFromObject: function(t) {
        var e,
          i = t.geometry;
        if (t instanceof Oe.Mesh) {
          var r = i.__directGeometry;
          if (void 0 === r) return this.fromGeometry(i);
          (r.verticesNeedUpdate = i.verticesNeedUpdate),
            (r.normalsNeedUpdate = i.normalsNeedUpdate),
            (r.colorsNeedUpdate = i.colorsNeedUpdate),
            (r.uvsNeedUpdate = i.uvsNeedUpdate),
            (r.groupsNeedUpdate = i.groupsNeedUpdate),
            (i.verticesNeedUpdate = !1),
            (i.normalsNeedUpdate = !1),
            (i.colorsNeedUpdate = !1),
            (i.uvsNeedUpdate = !1),
            (i.groupsNeedUpdate = !1),
            (i = r);
        }
        !0 === i.verticesNeedUpdate &&
          (void 0 !== (e = this.attributes.position) &&
            (e.copyVector3sArray(i.vertices), (e.needsUpdate = !0)),
          (i.verticesNeedUpdate = !1));
        !0 === i.normalsNeedUpdate &&
          (void 0 !== (e = this.attributes.normal) &&
            (e.copyVector3sArray(i.normals), (e.needsUpdate = !0)),
          (i.normalsNeedUpdate = !1));
        !0 === i.colorsNeedUpdate &&
          (void 0 !== (e = this.attributes.color) &&
            (e.copyColorsArray(i.colors), (e.needsUpdate = !0)),
          (i.colorsNeedUpdate = !1));
        i.uvsNeedUpdate &&
          (void 0 !== (e = this.attributes.uv) &&
            (e.copyVector2sArray(i.uvs), (e.needsUpdate = !0)),
          (i.uvsNeedUpdate = !1));
        i.lineDistancesNeedUpdate &&
          (void 0 !== (e = this.attributes.lineDistance) &&
            (e.copyArray(i.lineDistances), (e.needsUpdate = !0)),
          (i.lineDistancesNeedUpdate = !1));
        return (
          i.groupsNeedUpdate &&
            (i.computeGroups(t.geometry),
            (this.groups = i.groups),
            (i.groupsNeedUpdate = !1)),
          this
        );
      },
      fromGeometry: function(t) {
        return (
          (t.__directGeometry = new Oe.DirectGeometry().fromGeometry(t)),
          this.fromDirectGeometry(t.__directGeometry)
        );
      },
      fromDirectGeometry: function(t) {
        var e = new Float32Array(3 * t.vertices.length);
        if (
          (this.addAttribute(
            "position",
            new Oe.BufferAttribute(e, 3).copyVector3sArray(t.vertices)
          ),
          0 < t.normals.length)
        ) {
          var i = new Float32Array(3 * t.normals.length);
          this.addAttribute(
            "normal",
            new Oe.BufferAttribute(i, 3).copyVector3sArray(t.normals)
          );
        }
        if (0 < t.colors.length) {
          var r = new Float32Array(3 * t.colors.length);
          this.addAttribute(
            "color",
            new Oe.BufferAttribute(r, 3).copyColorsArray(t.colors)
          );
        }
        if (0 < t.uvs.length) {
          var n = new Float32Array(2 * t.uvs.length);
          this.addAttribute(
            "uv",
            new Oe.BufferAttribute(n, 2).copyVector2sArray(t.uvs)
          );
        }
        if (0 < t.uvs2.length) {
          var a = new Float32Array(2 * t.uvs2.length);
          this.addAttribute(
            "uv2",
            new Oe.BufferAttribute(a, 2).copyVector2sArray(t.uvs2)
          );
        }
        if (0 < t.indices.length) {
          var o = new (65535 < t.vertices.length ? Uint32Array : Uint16Array)(
            3 * t.indices.length
          );
          this.setIndex(
            new Oe.BufferAttribute(o, 1).copyIndicesArray(t.indices)
          );
        }
        for (var s in ((this.groups = t.groups), t.morphTargets)) {
          for (
            var h = [], l = t.morphTargets[s], u = 0, c = l.length;
            u < c;
            u++
          ) {
            var p = l[u],
              d = new Oe.Float32Attribute(3 * p.length, 3);
            h.push(d.copyVector3sArray(p));
          }
          this.morphAttributes[s] = h;
        }
        if (0 < t.skinIndices.length) {
          var f = new Oe.Float32Attribute(4 * t.skinIndices.length, 4);
          this.addAttribute("skinIndex", f.copyVector4sArray(t.skinIndices));
        }
        if (0 < t.skinWeights.length) {
          var m = new Oe.Float32Attribute(4 * t.skinWeights.length, 4);
          this.addAttribute("skinWeight", m.copyVector4sArray(t.skinWeights));
        }
        return (
          null !== t.boundingSphere &&
            (this.boundingSphere = t.boundingSphere.clone()),
          null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
          this
        );
      },
      computeBoundingBox: (function() {
        new Oe.Vector3();
        return function() {
          null === this.boundingBox && (this.boundingBox = new Oe.Box3());
          var t = this.attributes.position.array;
          t && this.boundingBox.setFromArray(t),
            (void 0 !== t && 0 !== t.length) ||
              (this.boundingBox.min.set(0, 0, 0),
              this.boundingBox.max.set(0, 0, 0)),
            isNaN(this.boundingBox.min.x) ||
              isNaN(this.boundingBox.min.y) ||
              isNaN(this.boundingBox.min.z);
        };
      })(),
      computeBoundingSphere:
        ((Ht = new Oe.Box3()),
        (qt = new Oe.Vector3()),
        function() {
          null === this.boundingSphere &&
            (this.boundingSphere = new Oe.Sphere());
          var t = this.attributes.position.array;
          if (t) {
            var e = this.boundingSphere.center;
            Ht.setFromArray(t), Ht.center(e);
            for (var i = 0, r = 0, n = t.length; r < n; r += 3)
              qt.fromArray(t, r), (i = Math.max(i, e.distanceToSquared(qt)));
            (this.boundingSphere.radius = Math.sqrt(i)),
              isNaN(this.boundingSphere.radius);
          }
        }),
      computeFaceNormals: function() {},
      computeVertexNormals: function() {
        var t = this.index,
          e = this.attributes,
          i = this.groups;
        if (e.position) {
          var r = e.position.array;
          if (void 0 === e.normal)
            this.addAttribute(
              "normal",
              new Oe.BufferAttribute(new Float32Array(r.length), 3)
            );
          else
            for (var n = e.normal.array, a = 0, o = n.length; a < o; a++)
              n[a] = 0;
          var s,
            h,
            l,
            u = e.normal.array,
            c = new Oe.Vector3(),
            p = new Oe.Vector3(),
            d = new Oe.Vector3(),
            f = new Oe.Vector3(),
            m = new Oe.Vector3();
          if (t) {
            var v = t.array;
            0 === i.length && this.addGroup(0, v.length);
            for (var g = 0, y = i.length; g < y; ++g) {
              var x = i[g],
                M = x.start;
              for (a = M, o = M + x.count; a < o; a += 3)
                (s = 3 * v[a + 0]),
                  (h = 3 * v[a + 1]),
                  (l = 3 * v[a + 2]),
                  c.fromArray(r, s),
                  p.fromArray(r, h),
                  d.fromArray(r, l),
                  f.subVectors(d, p),
                  m.subVectors(c, p),
                  f.cross(m),
                  (u[s] += f.x),
                  (u[1 + s] += f.y),
                  (u[2 + s] += f.z),
                  (u[h] += f.x),
                  (u[1 + h] += f.y),
                  (u[2 + h] += f.z),
                  (u[l] += f.x),
                  (u[1 + l] += f.y),
                  (u[2 + l] += f.z);
            }
          } else
            for (a = 0, o = r.length; a < o; a += 9)
              c.fromArray(r, a),
                p.fromArray(r, a + 3),
                d.fromArray(r, a + 6),
                f.subVectors(d, p),
                m.subVectors(c, p),
                f.cross(m),
                (u[a] = f.x),
                (u[a + 1] = f.y),
                (u[a + 2] = f.z),
                (u[a + 3] = f.x),
                (u[a + 4] = f.y),
                (u[a + 5] = f.z),
                (u[a + 6] = f.x),
                (u[a + 7] = f.y),
                (u[a + 8] = f.z);
          this.normalizeNormals(), (e.normal.needsUpdate = !0);
        }
      },
      merge: function(t, e) {
        if (t instanceof Oe.BufferGeometry != !1) {
          void 0 === e && (e = 0);
          var i = this.attributes;
          for (var r in i)
            if (void 0 !== t.attributes[r])
              for (
                var n = i[r].array,
                  a = t.attributes[r],
                  o = a.array,
                  s = 0,
                  h = a.itemSize * e;
                s < o.length;
                s++, h++
              )
                n[h] = o[s];
          return this;
        }
      },
      normalizeNormals: function() {
        for (
          var t, e, i, r, n = this.attributes.normal.array, a = 0, o = n.length;
          a < o;
          a += 3
        )
          (t = n[a]),
            (e = n[a + 1]),
            (i = n[a + 2]),
            (r = 1 / Math.sqrt(t * t + e * e + i * i)),
            (n[a] *= r),
            (n[a + 1] *= r),
            (n[a + 2] *= r);
      },
      toNonIndexed: function() {
        if (null === this.index) return this;
        var t = new Oe.BufferGeometry(),
          e = this.index.array,
          i = this.attributes;
        for (var r in i) {
          for (
            var n = i[r],
              a = n.array,
              o = n.itemSize,
              s = new a.constructor(e.length * o),
              h = 0,
              l = 0,
              u = 0,
              c = e.length;
            u < c;
            u++
          ) {
            h = e[u] * o;
            for (var p = 0; p < o; p++) s[l++] = a[h++];
          }
          t.addAttribute(r, new Oe.BufferAttribute(s, o));
        }
        return t;
      },
      toJSON: function() {
        var t = {
          metadata: {
            version: 4.4,
            type: "BufferGeometry",
            generator: "BufferGeometry.toJSON"
          }
        };
        if (
          ((t.uuid = this.uuid),
          (t.type = this.type),
          "" !== this.name && (t.name = this.name),
          void 0 !== this.parameters)
        ) {
          var e = this.parameters;
          for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
          return t;
        }
        t.data = { attributes: {} };
        var r = this.index;
        if (null !== r) {
          var n = Array.prototype.slice.call(r.array);
          t.data.index = { type: r.array.constructor.name, array: n };
        }
        var a = this.attributes;
        for (var i in a) {
          var o = a[i];
          n = Array.prototype.slice.call(o.array);
          t.data.attributes[i] = {
            itemSize: o.itemSize,
            type: o.array.constructor.name,
            array: n
          };
        }
        var s = this.groups;
        0 < s.length && (t.data.groups = JSON.parse(JSON.stringify(s)));
        var h = this.boundingSphere;
        return (
          null !== h &&
            (t.data.boundingSphere = {
              center: h.center.toArray(),
              radius: h.radius
            }),
          t
        );
      },
      clone: function() {
        return new Oe.BufferGeometry().copy(this);
      },
      copy: function(t) {
        var e = t.index;
        null !== e && this.setIndex(e.clone());
        var i = t.attributes;
        for (var r in i) {
          var n = i[r];
          this.addAttribute(r, n.clone());
        }
        for (var a = t.groups, o = 0, s = a.length; o < s; o++) {
          var h = a[o];
          this.addGroup(h.start, h.count);
        }
        return this;
      },
      dispose: function() {
        this.dispatchEvent({ type: "dispose" });
      }
    }),
    Oe.EventDispatcher.prototype.apply(Oe.BufferGeometry.prototype),
    (Oe.BufferGeometry.MaxIndex = 65535),
    (Oe.InterleavedBufferAttribute = function(t, e, i) {
      (this.uuid = Oe.Math.generateUUID()),
        (this.data = t),
        (this.itemSize = e),
        (this.offset = i);
    }),
    (Oe.InterleavedBufferAttribute.prototype = {
      constructor: Oe.InterleavedBufferAttribute,
      get length() {
        return this.array.length;
      },
      get count() {
        return this.data.count;
      },
      setX: function(t, e) {
        return (this.data.array[t * this.data.stride + this.offset] = e), this;
      },
      setY: function(t, e) {
        return (
          (this.data.array[t * this.data.stride + this.offset + 1] = e), this
        );
      },
      setZ: function(t, e) {
        return (
          (this.data.array[t * this.data.stride + this.offset + 2] = e), this
        );
      },
      setW: function(t, e) {
        return (
          (this.data.array[t * this.data.stride + this.offset + 3] = e), this
        );
      },
      getX: function(t) {
        return this.data.array[t * this.data.stride + this.offset];
      },
      getY: function(t) {
        return this.data.array[t * this.data.stride + this.offset + 1];
      },
      getZ: function(t) {
        return this.data.array[t * this.data.stride + this.offset + 2];
      },
      getW: function(t) {
        return this.data.array[t * this.data.stride + this.offset + 3];
      },
      setXY: function(t, e, i) {
        return (
          (t = t * this.data.stride + this.offset),
          (this.data.array[t + 0] = e),
          (this.data.array[t + 1] = i),
          this
        );
      },
      setXYZ: function(t, e, i, r) {
        return (
          (t = t * this.data.stride + this.offset),
          (this.data.array[t + 0] = e),
          (this.data.array[t + 1] = i),
          (this.data.array[t + 2] = r),
          this
        );
      },
      setXYZW: function(t, e, i, r, n) {
        return (
          (t = t * this.data.stride + this.offset),
          (this.data.array[t + 0] = e),
          (this.data.array[t + 1] = i),
          (this.data.array[t + 2] = r),
          (this.data.array[t + 3] = n),
          this
        );
      }
    }),
    (Oe.InstancedBufferGeometry = function() {
      Oe.BufferGeometry.call(this),
        (this.type = "InstancedBufferGeometry"),
        (this.maxInstancedCount = void 0);
    }),
    (Oe.InstancedBufferGeometry.prototype = Object.create(
      Oe.BufferGeometry.prototype
    )),
    (Oe.InstancedBufferGeometry.prototype.constructor =
      Oe.InstancedBufferGeometry),
    (Oe.InstancedBufferGeometry.prototype.addGroup = function(t, e, i) {
      this.groups.push({ start: t, count: e, instances: i });
    }),
    (Oe.InstancedBufferGeometry.prototype.copy = function(t) {
      var e = t.index;
      null !== e && this.setIndex(e.clone());
      var i = t.attributes;
      for (var r in i) {
        var n = i[r];
        this.addAttribute(r, n.clone());
      }
      for (var a = t.groups, o = 0, s = a.length; o < s; o++) {
        var h = a[o];
        this.addGroup(h.start, h.count, h.instances);
      }
      return this;
    }),
    Oe.EventDispatcher.prototype.apply(Oe.InstancedBufferGeometry.prototype),
    (Oe.Geometry = function() {
      Object.defineProperty(this, "id", { value: Oe.GeometryIdCount++ }),
        (this.uuid = Oe.Math.generateUUID()),
        (this.name = ""),
        (this.type = "Geometry"),
        (this.vertices = []),
        (this.colors = []),
        (this.faces = []),
        (this.faceVertexUvs = [[]]),
        (this.morphTargets = []),
        (this.morphNormals = []),
        (this.skinWeights = []),
        (this.skinIndices = []),
        (this.lineDistances = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.verticesNeedUpdate = !1),
        (this.elementsNeedUpdate = !1),
        (this.uvsNeedUpdate = !1),
        (this.normalsNeedUpdate = !1),
        (this.colorsNeedUpdate = !1),
        (this.lineDistancesNeedUpdate = !1),
        (this.groupsNeedUpdate = !1);
    }),
    (Oe.Geometry.prototype = {
      constructor: Oe.Geometry,
      applyMatrix: function(t) {
        for (
          var e = new Oe.Matrix3().getNormalMatrix(t),
            i = 0,
            r = this.vertices.length;
          i < r;
          i++
        ) {
          this.vertices[i].applyMatrix4(t);
        }
        for (i = 0, r = this.faces.length; i < r; i++) {
          var n = this.faces[i];
          n.normal.applyMatrix3(e).normalize();
          for (var a = 0, o = n.vertexNormals.length; a < o; a++)
            n.vertexNormals[a].applyMatrix3(e).normalize();
        }
        return (
          null !== this.boundingBox && this.computeBoundingBox(),
          null !== this.boundingSphere && this.computeBoundingSphere(),
          (this.verticesNeedUpdate = !0),
          (this.normalsNeedUpdate = !0),
          this
        );
      },
      rotateX: function(t) {
        return (
          void 0 === ae && (ae = new Oe.Matrix4()),
          ae.makeRotationX(t),
          this.applyMatrix(ae),
          this
        );
      },
      rotateY: function(t) {
        return (
          void 0 === ne && (ne = new Oe.Matrix4()),
          ne.makeRotationY(t),
          this.applyMatrix(ne),
          this
        );
      },
      rotateZ: function(t) {
        return (
          void 0 === re && (re = new Oe.Matrix4()),
          re.makeRotationZ(t),
          this.applyMatrix(re),
          this
        );
      },
      translate: function(t, e, i) {
        return (
          void 0 === ie && (ie = new Oe.Matrix4()),
          ie.makeTranslation(t, e, i),
          this.applyMatrix(ie),
          this
        );
      },
      scale: function(t, e, i) {
        return (
          void 0 === ee && (ee = new Oe.Matrix4()),
          ee.makeScale(t, e, i),
          this.applyMatrix(ee),
          this
        );
      },
      lookAt: function(t) {
        void 0 === te && (te = new Oe.Object3D()),
          te.lookAt(t),
          te.updateMatrix(),
          this.applyMatrix(te.matrix);
      },
      fromBufferGeometry: function(t) {
        var s = this,
          e = null !== t.index ? t.index.array : void 0,
          i = t.attributes,
          r = i.position.array,
          h = void 0 !== i.normal ? i.normal.array : void 0,
          l = void 0 !== i.color ? i.color.array : void 0,
          u = void 0 !== i.uv ? i.uv.array : void 0,
          c = void 0 !== i.uv2 ? i.uv2.array : void 0;
        void 0 !== c && (this.faceVertexUvs[1] = []);
        for (
          var p = [], d = [], f = [], n = 0, a = 0;
          n < r.length;
          n += 3, a += 2
        )
          s.vertices.push(new Oe.Vector3(r[n], r[n + 1], r[n + 2])),
            void 0 !== h && p.push(new Oe.Vector3(h[n], h[n + 1], h[n + 2])),
            void 0 !== l &&
              s.colors.push(new Oe.Color(l[n], l[n + 1], l[n + 2])),
            void 0 !== u && d.push(new Oe.Vector2(u[a], u[a + 1])),
            void 0 !== c && f.push(new Oe.Vector2(c[a], c[a + 1]));
        function o(t, e, i, r) {
          var n =
              void 0 !== h ? [p[t].clone(), p[e].clone(), p[i].clone()] : [],
            a =
              void 0 !== l
                ? [
                    s.colors[t].clone(),
                    s.colors[e].clone(),
                    s.colors[i].clone()
                  ]
                : [],
            o = new Oe.Face3(t, e, i, n, a, r);
          s.faces.push(o),
            void 0 !== u &&
              s.faceVertexUvs[0].push([
                d[t].clone(),
                d[e].clone(),
                d[i].clone()
              ]),
            void 0 !== c &&
              s.faceVertexUvs[1].push([
                f[t].clone(),
                f[e].clone(),
                f[i].clone()
              ]);
        }
        if (void 0 !== e) {
          var m = t.groups;
          if (0 < m.length)
            for (n = 0; n < m.length; n++)
              for (
                var v = m[n], g = v.start, y = ((a = g), g + v.count);
                a < y;
                a += 3
              )
                o(e[a], e[a + 1], e[a + 2], v.materialIndex);
          else for (n = 0; n < e.length; n += 3) o(e[n], e[n + 1], e[n + 2]);
        } else for (n = 0; n < r.length / 3; n += 3) o(n, n + 1, n + 2);
        return (
          this.computeFaceNormals(),
          null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
          null !== t.boundingSphere &&
            (this.boundingSphere = t.boundingSphere.clone()),
          this
        );
      },
      center: function() {
        this.computeBoundingBox();
        var t = this.boundingBox.center().negate();
        return this.translate(t.x, t.y, t.z), t;
      },
      normalize: function() {
        this.computeBoundingSphere();
        var t = this.boundingSphere.center,
          e = this.boundingSphere.radius,
          i = 0 === e ? 1 : 1 / e,
          r = new Oe.Matrix4();
        return (
          r.set(
            i,
            0,
            0,
            -i * t.x,
            0,
            i,
            0,
            -i * t.y,
            0,
            0,
            i,
            -i * t.z,
            0,
            0,
            0,
            1
          ),
          this.applyMatrix(r),
          this
        );
      },
      computeFaceNormals: function() {
        for (
          var t = new Oe.Vector3(),
            e = new Oe.Vector3(),
            i = 0,
            r = this.faces.length;
          i < r;
          i++
        ) {
          var n = this.faces[i],
            a = this.vertices[n.a],
            o = this.vertices[n.b],
            s = this.vertices[n.c];
          t.subVectors(s, o),
            e.subVectors(a, o),
            t.cross(e),
            t.normalize(),
            n.normal.copy(t);
        }
      },
      computeVertexNormals: function(t) {
        var e, i, r, n, a, o;
        for (
          void 0 === t && (t = !0),
            o = new Array(this.vertices.length),
            e = 0,
            i = this.vertices.length;
          e < i;
          e++
        )
          o[e] = new Oe.Vector3();
        if (t) {
          var s,
            h,
            l,
            u = new Oe.Vector3(),
            c = new Oe.Vector3();
          for (r = 0, n = this.faces.length; r < n; r++)
            (a = this.faces[r]),
              (s = this.vertices[a.a]),
              (h = this.vertices[a.b]),
              (l = this.vertices[a.c]),
              u.subVectors(l, h),
              c.subVectors(s, h),
              u.cross(c),
              o[a.a].add(u),
              o[a.b].add(u),
              o[a.c].add(u);
        } else
          for (r = 0, n = this.faces.length; r < n; r++)
            o[(a = this.faces[r]).a].add(a.normal),
              o[a.b].add(a.normal),
              o[a.c].add(a.normal);
        for (e = 0, i = this.vertices.length; e < i; e++) o[e].normalize();
        for (r = 0, n = this.faces.length; r < n; r++) {
          var p = (a = this.faces[r]).vertexNormals;
          3 === p.length
            ? (p[0].copy(o[a.a]), p[1].copy(o[a.b]), p[2].copy(o[a.c]))
            : ((p[0] = o[a.a].clone()),
              (p[1] = o[a.b].clone()),
              (p[2] = o[a.c].clone()));
        }
        0 < this.faces.length && (this.normalsNeedUpdate = !0);
      },
      computeMorphNormals: function() {
        var t, e, i, r, n;
        for (i = 0, r = this.faces.length; i < r; i++)
          for (
            (n = this.faces[i]).__originalFaceNormal
              ? n.__originalFaceNormal.copy(n.normal)
              : (n.__originalFaceNormal = n.normal.clone()),
              n.__originalVertexNormals || (n.__originalVertexNormals = []),
              t = 0,
              e = n.vertexNormals.length;
            t < e;
            t++
          )
            n.__originalVertexNormals[t]
              ? n.__originalVertexNormals[t].copy(n.vertexNormals[t])
              : (n.__originalVertexNormals[t] = n.vertexNormals[t].clone());
        var a = new Oe.Geometry();
        for (
          a.faces = this.faces, t = 0, e = this.morphTargets.length;
          t < e;
          t++
        ) {
          if (!this.morphNormals[t]) {
            (this.morphNormals[t] = {}),
              (this.morphNormals[t].faceNormals = []),
              (this.morphNormals[t].vertexNormals = []);
            var o = this.morphNormals[t].faceNormals,
              s = this.morphNormals[t].vertexNormals;
            for (i = 0, r = this.faces.length; i < r; i++)
              (h = new Oe.Vector3()),
                (l = {
                  a: new Oe.Vector3(),
                  b: new Oe.Vector3(),
                  c: new Oe.Vector3()
                }),
                o.push(h),
                s.push(l);
          }
          var h,
            l,
            u = this.morphNormals[t];
          for (
            a.vertices = this.morphTargets[t].vertices,
              a.computeFaceNormals(),
              a.computeVertexNormals(),
              i = 0,
              r = this.faces.length;
            i < r;
            i++
          )
            (n = this.faces[i]),
              (h = u.faceNormals[i]),
              (l = u.vertexNormals[i]),
              h.copy(n.normal),
              l.a.copy(n.vertexNormals[0]),
              l.b.copy(n.vertexNormals[1]),
              l.c.copy(n.vertexNormals[2]);
        }
        for (i = 0, r = this.faces.length; i < r; i++)
          ((n = this.faces[i]).normal = n.__originalFaceNormal),
            (n.vertexNormals = n.__originalVertexNormals);
      },
      computeTangents: function() {},
      computeLineDistances: function() {
        for (var t = 0, e = this.vertices, i = 0, r = e.length; i < r; i++)
          0 < i && (t += e[i].distanceTo(e[i - 1])),
            (this.lineDistances[i] = t);
      },
      computeBoundingBox: function() {
        null === this.boundingBox && (this.boundingBox = new Oe.Box3()),
          this.boundingBox.setFromPoints(this.vertices);
      },
      computeBoundingSphere: function() {
        null === this.boundingSphere && (this.boundingSphere = new Oe.Sphere()),
          this.boundingSphere.setFromPoints(this.vertices);
      },
      merge: function(t, e, i) {
        if (t instanceof Oe.Geometry != !1) {
          var r,
            n = this.vertices.length,
            a = this.vertices,
            o = t.vertices,
            s = this.faces,
            h = t.faces,
            l = this.faceVertexUvs[0],
            u = t.faceVertexUvs[0];
          void 0 === i && (i = 0),
            void 0 !== e && (r = new Oe.Matrix3().getNormalMatrix(e));
          for (var c = 0, p = o.length; c < p; c++) {
            var d = o[c].clone();
            void 0 !== e && d.applyMatrix4(e), a.push(d);
          }
          for (c = 0, p = h.length; c < p; c++) {
            var f,
              m,
              v,
              g = h[c],
              y = g.vertexNormals,
              x = g.vertexColors;
            (f = new Oe.Face3(g.a + n, g.b + n, g.c + n)).normal.copy(g.normal),
              void 0 !== r && f.normal.applyMatrix3(r).normalize();
            for (var M = 0, b = y.length; M < b; M++)
              (m = y[M].clone()),
                void 0 !== r && m.applyMatrix3(r).normalize(),
                f.vertexNormals.push(m);
            f.color.copy(g.color);
            for (M = 0, b = x.length; M < b; M++)
              (v = x[M]), f.vertexColors.push(v.clone());
            (f.materialIndex = g.materialIndex + i), s.push(f);
          }
          for (c = 0, p = u.length; c < p; c++) {
            var _ = u[c],
              S = [];
            if (void 0 !== _) {
              for (M = 0, b = _.length; M < b; M++) S.push(_[M].clone());
              l.push(S);
            }
          }
        }
      },
      mergeMesh: function(t) {
        t instanceof Oe.Mesh != !1 &&
          (t.matrixAutoUpdate && t.updateMatrix(),
          this.merge(t.geometry, t.matrix));
      },
      mergeVertices: function() {
        var t,
          e,
          i,
          r,
          n,
          a,
          o,
          s,
          h = {},
          l = [],
          u = [],
          c = Math.pow(10, 4);
        for (i = 0, r = this.vertices.length; i < r; i++)
          (t = this.vertices[i]),
            void 0 ===
            h[
              (e =
                Math.round(t.x * c) +
                "_" +
                Math.round(t.y * c) +
                "_" +
                Math.round(t.z * c))
            ]
              ? ((h[e] = i), l.push(this.vertices[i]), (u[i] = l.length - 1))
              : (u[i] = u[h[e]]);
        var p = [];
        for (i = 0, r = this.faces.length; i < r; i++) {
          ((n = this.faces[i]).a = u[n.a]),
            (n.b = u[n.b]),
            (n.c = u[n.c]),
            (a = [n.a, n.b, n.c]);
          for (var d = 0; d < 3; d++)
            if (a[d] === a[(d + 1) % 3]) {
              p.push(i);
              break;
            }
        }
        for (i = p.length - 1; 0 <= i; i--) {
          var f = p[i];
          for (
            this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length;
            o < s;
            o++
          )
            this.faceVertexUvs[o].splice(f, 1);
        }
        var m = this.vertices.length - l.length;
        return (this.vertices = l), m;
      },
      sortFacesByMaterialIndex: function() {
        for (var t = this.faces, e = t.length, i = 0; i < e; i++) t[i]._id = i;
        t.sort(function(t, e) {
          return t.materialIndex - e.materialIndex;
        });
        var r,
          n,
          a = this.faceVertexUvs[0],
          o = this.faceVertexUvs[1];
        a && a.length === e && (r = []), o && o.length === e && (n = []);
        for (i = 0; i < e; i++) {
          var s = t[i]._id;
          r && r.push(a[s]), n && n.push(o[s]);
        }
        r && (this.faceVertexUvs[0] = r), n && (this.faceVertexUvs[1] = n);
      },
      toJSON: function() {
        var t = {
          metadata: {
            version: 4.4,
            type: "Geometry",
            generator: "Geometry.toJSON"
          }
        };
        if (
          ((t.uuid = this.uuid),
          (t.type = this.type),
          "" !== this.name && (t.name = this.name),
          void 0 !== this.parameters)
        ) {
          var e = this.parameters;
          for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
          return t;
        }
        for (var r = [], n = 0; n < this.vertices.length; n++) {
          var a = this.vertices[n];
          r.push(a.x, a.y, a.z);
        }
        var o = [],
          s = [],
          h = {},
          l = [],
          u = {},
          c = [],
          p = {};
        for (n = 0; n < this.faces.length; n++) {
          var d = this.faces[n],
            f = void 0 !== this.faceVertexUvs[0][n],
            m = 0 < d.normal.length(),
            v = 0 < d.vertexNormals.length,
            g = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
            y = 0 < d.vertexColors.length,
            x = 0;
          if (
            ((x = S(x, 0, 0)),
            (x = S(x, 1, !0)),
            (x = S(x, 2, !1)),
            (x = S(x, 3, f)),
            (x = S(x, 4, m)),
            (x = S(x, 5, v)),
            (x = S(x, 6, g)),
            (x = S(x, 7, y)),
            o.push(x),
            o.push(d.a, d.b, d.c),
            o.push(d.materialIndex),
            f)
          ) {
            var M = this.faceVertexUvs[0][n];
            o.push(T(M[0]), T(M[1]), T(M[2]));
          }
          if ((m && o.push(w(d.normal)), v)) {
            var b = d.vertexNormals;
            o.push(w(b[0]), w(b[1]), w(b[2]));
          }
          if ((g && o.push(E(d.color)), y)) {
            var _ = d.vertexColors;
            o.push(E(_[0]), E(_[1]), E(_[2]));
          }
        }
        function S(t, e, i) {
          return i ? t | (1 << e) : t & ~(1 << e);
        }
        function w(t) {
          var e = t.x.toString() + t.y.toString() + t.z.toString();
          return (
            void 0 !== h[e] || ((h[e] = s.length / 3), s.push(t.x, t.y, t.z)),
            h[e]
          );
        }
        function E(t) {
          var e = t.r.toString() + t.g.toString() + t.b.toString();
          return (
            void 0 !== u[e] || ((u[e] = l.length), l.push(t.getHex())), u[e]
          );
        }
        function T(t) {
          var e = t.x.toString() + t.y.toString();
          return (
            void 0 !== p[e] || ((p[e] = c.length / 2), c.push(t.x, t.y)), p[e]
          );
        }
        return (
          (t.data = {}),
          (t.data.vertices = r),
          (t.data.normals = s),
          0 < l.length && (t.data.colors = l),
          0 < c.length && (t.data.uvs = [c]),
          (t.data.faces = o),
          t
        );
      },
      clone: function() {
        return new Oe.Geometry().copy(this);
      },
      copy: function(t) {
        (this.vertices = []), (this.faces = []), (this.faceVertexUvs = [[]]);
        for (var e = t.vertices, i = 0, r = e.length; i < r; i++)
          this.vertices.push(e[i].clone());
        var n = t.faces;
        for (i = 0, r = n.length; i < r; i++) this.faces.push(n[i].clone());
        for (i = 0, r = t.faceVertexUvs.length; i < r; i++) {
          var a = t.faceVertexUvs[i];
          void 0 === this.faceVertexUvs[i] && (this.faceVertexUvs[i] = []);
          for (var o = 0, s = a.length; o < s; o++) {
            for (var h = a[o], l = [], u = 0, c = h.length; u < c; u++) {
              var p = h[u];
              l.push(p.clone());
            }
            this.faceVertexUvs[i].push(l);
          }
        }
        return this;
      },
      dispose: function() {
        this.dispatchEvent({ type: "dispose" });
      }
    }),
    Oe.EventDispatcher.prototype.apply(Oe.Geometry.prototype),
    (Oe.GeometryIdCount = 0),
    (Oe.DirectGeometry = function() {
      Object.defineProperty(this, "id", { value: Oe.GeometryIdCount++ }),
        (this.uuid = Oe.Math.generateUUID()),
        (this.name = ""),
        (this.type = "DirectGeometry"),
        (this.indices = []),
        (this.vertices = []),
        (this.normals = []),
        (this.colors = []),
        (this.uvs = []),
        (this.uvs2 = []),
        (this.groups = []),
        (this.morphTargets = {}),
        (this.skinWeights = []),
        (this.skinIndices = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.verticesNeedUpdate = !1),
        (this.normalsNeedUpdate = !1),
        (this.colorsNeedUpdate = !1),
        (this.uvsNeedUpdate = !1),
        (this.groupsNeedUpdate = !1);
    }),
    (Oe.DirectGeometry.prototype = {
      constructor: Oe.DirectGeometry,
      computeBoundingBox: Oe.Geometry.prototype.computeBoundingBox,
      computeBoundingSphere: Oe.Geometry.prototype.computeBoundingSphere,
      computeFaceNormals: function() {},
      computeVertexNormals: function() {},
      computeGroups: function(t) {
        for (var e, i, r = [], n = t.faces, a = 0; a < n.length; a++) {
          var o = n[a];
          o.materialIndex !== i &&
            ((i = o.materialIndex),
            void 0 !== e && ((e.count = 3 * a - e.start), r.push(e)),
            (e = { start: 3 * a, materialIndex: i }));
        }
        void 0 !== e && ((e.count = 3 * a - e.start), r.push(e)),
          (this.groups = r);
      },
      fromGeometry: function(t) {
        var e,
          i = t.faces,
          r = t.vertices,
          n = t.faceVertexUvs,
          a = n[0] && 0 < n[0].length,
          o = n[1] && 0 < n[1].length,
          s = t.morphTargets,
          h = s.length;
        if (0 < h) {
          e = [];
          for (var l = 0; l < h; l++) e[l] = [];
          this.morphTargets.position = e;
        }
        var u,
          c = t.morphNormals,
          p = c.length;
        if (0 < p) {
          u = [];
          for (l = 0; l < p; l++) u[l] = [];
          this.morphTargets.normal = u;
        }
        var d = t.skinIndices,
          f = t.skinWeights,
          m = d.length === r.length,
          v = f.length === r.length;
        for (l = 0; l < i.length; l++) {
          var g = i[l];
          this.vertices.push(r[g.a], r[g.b], r[g.c]);
          var y = g.vertexNormals;
          if (3 === y.length) this.normals.push(y[0], y[1], y[2]);
          else {
            var x = g.normal;
            this.normals.push(x, x, x);
          }
          var M,
            b = g.vertexColors;
          if (3 === b.length) this.colors.push(b[0], b[1], b[2]);
          else {
            var _ = g.color;
            this.colors.push(_, _, _);
          }
          if (!0 === a)
            void 0 !== (M = n[0][l])
              ? this.uvs.push(M[0], M[1], M[2])
              : this.uvs.push(
                  new Oe.Vector2(),
                  new Oe.Vector2(),
                  new Oe.Vector2()
                );
          if (!0 === o)
            void 0 !== (M = n[1][l])
              ? this.uvs2.push(M[0], M[1], M[2])
              : this.uvs2.push(
                  new Oe.Vector2(),
                  new Oe.Vector2(),
                  new Oe.Vector2()
                );
          for (var S = 0; S < h; S++) {
            var w = s[S].vertices;
            e[S].push(w[g.a], w[g.b], w[g.c]);
          }
          for (S = 0; S < p; S++) {
            var E = c[S].vertexNormals[l];
            u[S].push(E.a, E.b, E.c);
          }
          m && this.skinIndices.push(d[g.a], d[g.b], d[g.c]),
            v && this.skinWeights.push(f[g.a], f[g.b], f[g.c]);
        }
        return (
          this.computeGroups(t),
          (this.verticesNeedUpdate = t.verticesNeedUpdate),
          (this.normalsNeedUpdate = t.normalsNeedUpdate),
          (this.colorsNeedUpdate = t.colorsNeedUpdate),
          (this.uvsNeedUpdate = t.uvsNeedUpdate),
          (this.groupsNeedUpdate = t.groupsNeedUpdate),
          this
        );
      },
      dispose: function() {
        this.dispatchEvent({ type: "dispose" });
      }
    }),
    Oe.EventDispatcher.prototype.apply(Oe.DirectGeometry.prototype),
    (Oe.Camera = function() {
      Oe.Object3D.call(this),
        (this.type = "Camera"),
        (this.matrixWorldInverse = new Oe.Matrix4()),
        (this.projectionMatrix = new Oe.Matrix4());
    }),
    (Oe.Camera.prototype = Object.create(Oe.Object3D.prototype)),
    (Oe.Camera.prototype.constructor = Oe.Camera),
    (Oe.Camera.prototype.getWorldDirection =
      ((oe = new Oe.Quaternion()),
      function(t) {
        var e = t || new Oe.Vector3();
        return this.getWorldQuaternion(oe), e.set(0, 0, -1).applyQuaternion(oe);
      })),
    (Oe.Camera.prototype.lookAt =
      ((se = new Oe.Matrix4()),
      function(t) {
        se.lookAt(this.position, t, this.up),
          this.quaternion.setFromRotationMatrix(se);
      })),
    (Oe.Camera.prototype.clone = function() {
      return new this.constructor().copy(this);
    }),
    (Oe.Camera.prototype.copy = function(t) {
      return (
        Oe.Object3D.prototype.copy.call(this, t),
        this.matrixWorldInverse.copy(t.matrixWorldInverse),
        this.projectionMatrix.copy(t.projectionMatrix),
        this
      );
    }),
    (Oe.PerspectiveCamera = function(t, e, i, r) {
      Oe.Camera.call(this),
        (this.type = "PerspectiveCamera"),
        (this.focalLength = 10),
        (this.zoom = 1),
        (this.fov = void 0 !== t ? t : 50),
        (this.aspect = void 0 !== e ? e : 1),
        (this.near = void 0 !== i ? i : 0.1),
        (this.far = void 0 !== r ? r : 2e3),
        this.updateProjectionMatrix();
    }),
    (Oe.PerspectiveCamera.prototype = Object.create(Oe.Camera.prototype)),
    (Oe.PerspectiveCamera.prototype.constructor = Oe.PerspectiveCamera),
    (Oe.PerspectiveCamera.prototype.setLens = function(t, e) {
      void 0 === e && (e = 24),
        (this.fov = 2 * Oe.Math.radToDeg(Math.atan(e / (2 * t)))),
        this.updateProjectionMatrix();
    }),
    (Oe.PerspectiveCamera.prototype.setViewOffset = function(t, e, i, r, n, a) {
      (this.fullWidth = t),
        (this.fullHeight = e),
        (this.x = i),
        (this.y = r),
        (this.width = n),
        (this.height = a),
        this.updateProjectionMatrix();
    }),
    (Oe.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
      var t = Oe.Math.radToDeg(
        2 * Math.atan(Math.tan(0.5 * Oe.Math.degToRad(this.fov)) / this.zoom)
      );
      if (this.fullWidth) {
        var e = this.fullWidth / this.fullHeight,
          i = Math.tan(Oe.Math.degToRad(0.5 * t)) * this.near,
          r = -i,
          n = e * r,
          a = e * i,
          o = Math.abs(a - n),
          s = Math.abs(i - r);
        this.projectionMatrix.makeFrustum(
          n + (this.x * o) / this.fullWidth,
          n + ((this.x + this.width) * o) / this.fullWidth,
          i - ((this.y + this.height) * s) / this.fullHeight,
          i - (this.y * s) / this.fullHeight,
          this.near,
          this.far
        );
      } else
        this.projectionMatrix.makePerspective(
          t,
          this.aspect,
          this.near,
          this.far
        );
    }),
    (Oe.PerspectiveCamera.prototype.copy = function(t) {
      return (
        Oe.Camera.prototype.copy.call(this, t),
        (this.focalLength = t.focalLength),
        (this.zoom = t.zoom),
        (this.fov = t.fov),
        (this.aspect = t.aspect),
        (this.near = t.near),
        (this.far = t.far),
        this
      );
    }),
    (Oe.PerspectiveCamera.prototype.toJSON = function(t) {
      var e = Oe.Object3D.prototype.toJSON.call(this, t);
      return (
        (e.object.focalLength = this.focalLength),
        (e.object.zoom = this.zoom),
        (e.object.fov = this.fov),
        (e.object.aspect = this.aspect),
        (e.object.near = this.near),
        (e.object.far = this.far),
        e
      );
    }),
    (Oe.Light = function(t, e) {
      Oe.Object3D.call(this),
        (this.type = "Light"),
        (this.color = new Oe.Color(t)),
        (this.intensity = void 0 !== e ? e : 1),
        (this.receiveShadow = void 0);
    }),
    (Oe.Light.prototype = Object.create(Oe.Object3D.prototype)),
    (Oe.Light.prototype.constructor = Oe.Light),
    (Oe.Light.prototype.copy = function(t) {
      return (
        Oe.Object3D.prototype.copy.call(this, t),
        this.color.copy(t.color),
        (this.intensity = t.intensity),
        this
      );
    }),
    (Oe.Light.prototype.toJSON = function(t) {
      var e = Oe.Object3D.prototype.toJSON.call(this, t);
      return (
        (e.object.color = this.color.getHex()),
        (e.object.intensity = this.intensity),
        void 0 !== this.groundColor &&
          (e.object.groundColor = this.groundColor.getHex()),
        void 0 !== this.distance && (e.object.distance = this.distance),
        void 0 !== this.angle && (e.object.angle = this.angle),
        void 0 !== this.decay && (e.object.decay = this.decay),
        void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
        e
      );
    }),
    (Oe.Scene = function() {
      Oe.Object3D.call(this),
        (this.type = "Scene"),
        (this.fog = null),
        (this.overrideMaterial = null),
        (this.autoUpdate = !0);
    }),
    (Oe.Scene.prototype = Object.create(Oe.Object3D.prototype)),
    (Oe.Scene.prototype.constructor = Oe.Scene),
    (Oe.Scene.prototype.copy = function(t, e) {
      return (
        Oe.Object3D.prototype.copy.call(this, t, e),
        null !== t.fog && (this.fog = t.fog.clone()),
        null !== t.overrideMaterial &&
          (this.overrideMaterial = t.overrideMaterial.clone()),
        (this.autoUpdate = t.autoUpdate),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        this
      );
    }),
    (Oe.FogExp2 = function(t, e) {
      (this.name = ""),
        (this.color = new Oe.Color(t)),
        (this.density = void 0 !== e ? e : 25e-5);
    }),
    (Oe.FogExp2.prototype.clone = function() {
      return new Oe.FogExp2(this.color.getHex(), this.density);
    }),
    (Oe.ImmediateRenderObject = function(t) {
      Oe.Object3D.call(this),
        (this.material = t),
        (this.render = function(t) {});
    }),
    (Oe.ImmediateRenderObject.prototype = Object.create(Oe.Object3D.prototype)),
    (Oe.ImmediateRenderObject.prototype.constructor = Oe.ImmediateRenderObject),
    (Oe.SphereBufferGeometry = function(t, e, i, r, n, a, o) {
      Oe.BufferGeometry.call(this),
        (this.type = "SphereBufferGeometry"),
        (this.parameters = {
          radius: t,
          widthSegments: e,
          heightSegments: i,
          phiStart: r,
          phiLength: n,
          thetaStart: a,
          thetaLength: o
        }),
        (t = t || 50),
        (e = Math.max(3, Math.floor(e) || 8)),
        (i = Math.max(2, Math.floor(i) || 6)),
        (r = void 0 !== r ? r : 0),
        (n = void 0 !== n ? n : 2 * Math.PI);
      for (
        var s = (a = void 0 !== a ? a : 0) + (o = void 0 !== o ? o : Math.PI),
          h = (e + 1) * (i + 1),
          l = new Oe.BufferAttribute(new Float32Array(3 * h), 3),
          u = new Oe.BufferAttribute(new Float32Array(3 * h), 3),
          c = new Oe.BufferAttribute(new Float32Array(2 * h), 2),
          p = 0,
          d = [],
          f = new Oe.Vector3(),
          m = 0;
        m <= i;
        m++
      ) {
        for (var v = [], g = m / i, y = 0; y <= e; y++) {
          var x = y / e,
            M = -t * Math.cos(r + x * n) * Math.sin(a + g * o),
            b = t * Math.cos(a + g * o),
            _ = t * Math.sin(r + x * n) * Math.sin(a + g * o);
          f.set(M, b, _).normalize(),
            l.setXYZ(p, M, b, _),
            u.setXYZ(p, f.x, f.y, f.z),
            c.setXY(p, x, 1 - g),
            v.push(p),
            p++;
        }
        d.push(v);
      }
      var S = [];
      for (m = 0; m < i; m++)
        for (y = 0; y < e; y++) {
          var w = d[m][y + 1],
            E = d[m][y],
            T = d[m + 1][y],
            A = d[m + 1][y + 1];
          (0 !== m || 0 < a) && S.push(w, E, A),
            (m !== i - 1 || s < Math.PI) && S.push(E, T, A);
        }
      this.setIndex(
        new (65535 < l.count ? Oe.Uint32Attribute : Oe.Uint16Attribute)(S, 1)
      ),
        this.addAttribute("position", l),
        this.addAttribute("normal", u),
        this.addAttribute("uv", c),
        (this.boundingSphere = new Oe.Sphere(new Oe.Vector3(), t));
    }),
    (Oe.SphereBufferGeometry.prototype = Object.create(
      Oe.BufferGeometry.prototype
    )),
    (Oe.SphereBufferGeometry.prototype.constructor = Oe.SphereBufferGeometry),
    (Oe.SphereGeometry = function(t, e, i, r, n, a, o) {
      Oe.Geometry.call(this),
        (this.type = "SphereGeometry"),
        (this.parameters = {
          radius: t,
          widthSegments: e,
          heightSegments: i,
          phiStart: r,
          phiLength: n,
          thetaStart: a,
          thetaLength: o
        }),
        this.fromBufferGeometry(
          new Oe.SphereBufferGeometry(t, e, i, r, n, a, o)
        );
    }),
    (Oe.SphereGeometry.prototype = Object.create(Oe.Geometry.prototype)),
    (Oe.SphereGeometry.prototype.constructor = Oe.SphereGeometry),
    (Oe.Material = function() {
      Object.defineProperty(this, "id", { value: Oe.MaterialIdCount++ }),
        (this.uuid = Oe.Math.generateUUID()),
        (this.name = ""),
        (this.type = "Material"),
        (this.side = Oe.FrontSide),
        (this.opacity = 1),
        (this.transparent = !1),
        (this.blending = Oe.NormalBlending),
        (this.blendSrc = Oe.SrcAlphaFactor),
        (this.blendDst = Oe.OneMinusSrcAlphaFactor),
        (this.blendEquation = Oe.AddEquation),
        (this.blendSrcAlpha = null),
        (this.blendDstAlpha = null),
        (this.blendEquationAlpha = null),
        (this.depthFunc = Oe.LessEqualDepth),
        (this.depthTest = !0),
        (this.depthWrite = !0),
        (this.colorWrite = !0),
        (this.precision = null),
        (this.polygonOffset = !1),
        (this.polygonOffsetFactor = 0),
        (this.polygonOffsetUnits = 0),
        (this.alphaTest = 0),
        (this.premultipliedAlpha = !1),
        (this.overdraw = 0),
        (this.visible = !0),
        (this._needsUpdate = !0);
    }),
    (Oe.Material.prototype = {
      constructor: Oe.Material,
      get needsUpdate() {
        return this._needsUpdate;
      },
      set needsUpdate(t) {
        !0 === t && this.update(), (this._needsUpdate = t);
      },
      setValues: function(t) {
        if (void 0 !== t)
          for (var e in t) {
            var i = t[e];
            if (void 0 !== i) {
              var r = this[e];
              void 0 !== r &&
                (r instanceof Oe.Color
                  ? r.set(i)
                  : r instanceof Oe.Vector3 && i instanceof Oe.Vector3
                  ? r.copy(i)
                  : (this[e] = "overdraw" === e ? Number(i) : i));
            }
          }
      },
      toJSON: function(t) {
        var e = void 0 === t;
        e && (t = { textures: {}, images: {} });
        var i = {
          metadata: {
            version: 4.4,
            type: "Material",
            generator: "Material.toJSON"
          }
        };
        function r(t) {
          var e = [];
          for (var i in t) {
            var r = t[i];
            delete r.metadata, e.push(r);
          }
          return e;
        }
        if (
          ((i.uuid = this.uuid),
          (i.type = this.type),
          "" !== this.name && (i.name = this.name),
          this.color instanceof Oe.Color && (i.color = this.color.getHex()),
          0.5 !== this.roughness && (i.roughness = this.roughness),
          0.5 !== this.metalness && (i.metalness = this.metalness),
          this.emissive instanceof Oe.Color &&
            (i.emissive = this.emissive.getHex()),
          this.specular instanceof Oe.Color &&
            (i.specular = this.specular.getHex()),
          void 0 !== this.shininess && (i.shininess = this.shininess),
          this.map instanceof Oe.Texture && (i.map = this.map.toJSON(t).uuid),
          this.alphaMap instanceof Oe.Texture &&
            (i.alphaMap = this.alphaMap.toJSON(t).uuid),
          this.lightMap instanceof Oe.Texture &&
            (i.lightMap = this.lightMap.toJSON(t).uuid),
          this.bumpMap instanceof Oe.Texture &&
            ((i.bumpMap = this.bumpMap.toJSON(t).uuid),
            (i.bumpScale = this.bumpScale)),
          this.normalMap instanceof Oe.Texture &&
            ((i.normalMap = this.normalMap.toJSON(t).uuid),
            (i.normalScale = this.normalScale.toArray())),
          this.displacementMap instanceof Oe.Texture &&
            ((i.displacementMap = this.displacementMap.toJSON(t).uuid),
            (i.displacementScale = this.displacementScale),
            (i.displacementBias = this.displacementBias)),
          this.roughnessMap instanceof Oe.Texture &&
            (i.roughnessMap = this.roughnessMap.toJSON(t).uuid),
          this.metalnessMap instanceof Oe.Texture &&
            (i.metalnessMap = this.metalnessMap.toJSON(t).uuid),
          this.emissiveMap instanceof Oe.Texture &&
            (i.emissiveMap = this.emissiveMap.toJSON(t).uuid),
          this.specularMap instanceof Oe.Texture &&
            (i.specularMap = this.specularMap.toJSON(t).uuid),
          this.envMap instanceof Oe.Texture &&
            ((i.envMap = this.envMap.toJSON(t).uuid),
            (i.reflectivity = this.reflectivity)),
          void 0 !== this.size && (i.size = this.size),
          void 0 !== this.sizeAttenuation &&
            (i.sizeAttenuation = this.sizeAttenuation),
          void 0 !== this.vertexColors &&
            this.vertexColors !== Oe.NoColors &&
            (i.vertexColors = this.vertexColors),
          void 0 !== this.shading &&
            this.shading !== Oe.SmoothShading &&
            (i.shading = this.shading),
          void 0 !== this.blending &&
            this.blending !== Oe.NormalBlending &&
            (i.blending = this.blending),
          void 0 !== this.side &&
            this.side !== Oe.FrontSide &&
            (i.side = this.side),
          this.opacity < 1 && (i.opacity = this.opacity),
          !0 === this.transparent && (i.transparent = this.transparent),
          0 < this.alphaTest && (i.alphaTest = this.alphaTest),
          !0 === this.premultipliedAlpha &&
            (i.premultipliedAlpha = this.premultipliedAlpha),
          !0 === this.wireframe && (i.wireframe = this.wireframe),
          1 < this.wireframeLinewidth &&
            (i.wireframeLinewidth = this.wireframeLinewidth),
          e)
        ) {
          var n = r(t.textures),
            a = r(t.images);
          0 < n.length && (i.textures = n), 0 < a.length && (i.images = a);
        }
        return i;
      },
      clone: function() {
        return new this.constructor().copy(this);
      },
      copy: function(t) {
        return (
          (this.name = t.name),
          (this.side = t.side),
          (this.opacity = t.opacity),
          (this.transparent = t.transparent),
          (this.blending = t.blending),
          (this.blendSrc = t.blendSrc),
          (this.blendDst = t.blendDst),
          (this.blendEquation = t.blendEquation),
          (this.blendSrcAlpha = t.blendSrcAlpha),
          (this.blendDstAlpha = t.blendDstAlpha),
          (this.blendEquationAlpha = t.blendEquationAlpha),
          (this.depthFunc = t.depthFunc),
          (this.depthTest = t.depthTest),
          (this.depthWrite = t.depthWrite),
          (this.colorWrite = t.colorWrite),
          (this.precision = t.precision),
          (this.polygonOffset = t.polygonOffset),
          (this.polygonOffsetFactor = t.polygonOffsetFactor),
          (this.polygonOffsetUnits = t.polygonOffsetUnits),
          (this.alphaTest = t.alphaTest),
          (this.premultipliedAlpha = t.premultipliedAlpha),
          (this.overdraw = t.overdraw),
          (this.visible = t.visible),
          this
        );
      },
      update: function() {
        this.dispatchEvent({ type: "update" });
      },
      dispose: function() {
        this.dispatchEvent({ type: "dispose" });
      }
    }),
    Oe.EventDispatcher.prototype.apply(Oe.Material.prototype),
    (Oe.MaterialIdCount = 0),
    (Oe.LineBasicMaterial = function(t) {
      Oe.Material.call(this),
        (this.type = "LineBasicMaterial"),
        (this.color = new Oe.Color(16777215)),
        (this.linewidth = 1),
        (this.linecap = "round"),
        (this.linejoin = "round"),
        (this.blending = Oe.NormalBlending),
        (this.vertexColors = Oe.NoColors),
        (this.fog = !0),
        this.setValues(t);
    }),
    (Oe.LineBasicMaterial.prototype = Object.create(Oe.Material.prototype)),
    (Oe.LineBasicMaterial.prototype.constructor = Oe.LineBasicMaterial),
    (Oe.LineBasicMaterial.prototype.copy = function(t) {
      return (
        Oe.Material.prototype.copy.call(this, t),
        this.color.copy(t.color),
        (this.linewidth = t.linewidth),
        (this.linecap = t.linecap),
        (this.linejoin = t.linejoin),
        (this.vertexColors = t.vertexColors),
        (this.fog = t.fog),
        this
      );
    }),
    (Oe.LineDashedMaterial = function(t) {
      Oe.Material.call(this),
        (this.type = "LineDashedMaterial"),
        (this.color = new Oe.Color(16777215)),
        (this.linewidth = 1),
        (this.scale = 1),
        (this.dashSize = 3),
        (this.gapSize = 1),
        (this.blending = Oe.NormalBlending),
        (this.vertexColors = Oe.NoColors),
        (this.fog = !0),
        this.setValues(t);
    }),
    (Oe.LineDashedMaterial.prototype = Object.create(Oe.Material.prototype)),
    (Oe.LineDashedMaterial.prototype.constructor = Oe.LineDashedMaterial),
    (Oe.LineDashedMaterial.prototype.copy = function(t) {
      return (
        Oe.Material.prototype.copy.call(this, t),
        this.color.copy(t.color),
        (this.linewidth = t.linewidth),
        (this.scale = t.scale),
        (this.dashSize = t.dashSize),
        (this.gapSize = t.gapSize),
        (this.vertexColors = t.vertexColors),
        (this.fog = t.fog),
        this
      );
    }),
    (Oe.PointsMaterial = function(t) {
      Oe.Material.call(this),
        (this.type = "PointsMaterial"),
        (this.color = new Oe.Color(16777215)),
        (this.map = null),
        (this.size = 1),
        (this.sizeAttenuation = !0),
        (this.blending = Oe.NormalBlending),
        (this.vertexColors = Oe.NoColors),
        (this.fog = !0),
        this.setValues(t);
    }),
    (Oe.PointsMaterial.prototype = Object.create(Oe.Material.prototype)),
    (Oe.PointsMaterial.prototype.constructor = Oe.PointsMaterial),
    (Oe.PointsMaterial.prototype.copy = function(t) {
      return (
        Oe.Material.prototype.copy.call(this, t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.size = t.size),
        (this.sizeAttenuation = t.sizeAttenuation),
        (this.vertexColors = t.vertexColors),
        (this.fog = t.fog),
        this
      );
    }),
    (Oe.MeshDepthMaterial = function(t) {
      Oe.Material.call(this),
        (this.type = "MeshDepthMaterial"),
        (this.morphTargets = !1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        this.setValues(t);
    }),
    (Oe.MeshDepthMaterial.prototype = Object.create(Oe.Material.prototype)),
    (Oe.MeshDepthMaterial.prototype.constructor = Oe.MeshDepthMaterial),
    (Oe.MeshDepthMaterial.prototype.copy = function(t) {
      return (
        Oe.Material.prototype.copy.call(this, t),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        this
      );
    }),
    (Oe.MeshNormalMaterial = function(t) {
      Oe.Material.call(this, t),
        (this.type = "MeshNormalMaterial"),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.morphTargets = !1),
        this.setValues(t);
    }),
    (Oe.MeshNormalMaterial.prototype = Object.create(Oe.Material.prototype)),
    (Oe.MeshNormalMaterial.prototype.constructor = Oe.MeshNormalMaterial),
    (Oe.MeshNormalMaterial.prototype.copy = function(t) {
      return (
        Oe.Material.prototype.copy.call(this, t),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        this
      );
    }),
    (Oe.ShaderMaterial = function(t) {
      Oe.Material.call(this),
        (this.type = "ShaderMaterial"),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.vertexShader =
          "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
        (this.fragmentShader =
          "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
        (this.shading = Oe.SmoothShading),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.vertexColors = Oe.NoColors),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.morphNormals = !1),
        (this.extensions = {
          derivatives: !1,
          fragDepth: !1,
          drawBuffers: !1,
          shaderTextureLOD: !1
        }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv2: [0, 0]
        }),
        (this.index0AttributeName = void 0) !== t &&
          (t.attributes, this.setValues(t));
    }),
    (Oe.ShaderMaterial.prototype = Object.create(Oe.Material.prototype)),
    (Oe.ShaderMaterial.prototype.constructor = Oe.ShaderMaterial),
    (Oe.ShaderMaterial.prototype.copy = function(t) {
      return (
        Oe.Material.prototype.copy.call(this, t),
        (this.fragmentShader = t.fragmentShader),
        (this.vertexShader = t.vertexShader),
        (this.uniforms = Oe.UniformsUtils.clone(t.uniforms)),
        (this.defines = t.defines),
        (this.shading = t.shading),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.fog = t.fog),
        (this.lights = t.lights),
        (this.vertexColors = t.vertexColors),
        (this.skinning = t.skinning),
        (this.morphTargets = t.morphTargets),
        (this.morphNormals = t.morphNormals),
        (this.extensions = t.extensions),
        this
      );
    }),
    (Oe.ShaderMaterial.prototype.toJSON = function(t) {
      var e = Oe.Material.prototype.toJSON.call(this, t);
      return (
        (e.uniforms = this.uniforms),
        (e.vertexShader = this.vertexShader),
        (e.fragmentShader = this.fragmentShader),
        e
      );
    }),
    (Oe.MeshBasicMaterial = function(t) {
      Oe.Material.call(this),
        (this.type = "MeshBasicMaterial"),
        (this.color = new Oe.Color(16777215)),
        (this.map = null),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.combine = Oe.MultiplyOperation),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.fog = !0),
        (this.shading = Oe.SmoothShading),
        (this.blending = Oe.NormalBlending),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.vertexColors = Oe.NoColors),
        (this.skinning = !1),
        (this.morphTargets = !1),
        this.setValues(t);
    }),
    (Oe.MeshBasicMaterial.prototype = Object.create(Oe.Material.prototype)),
    (Oe.MeshBasicMaterial.prototype.constructor = Oe.MeshBasicMaterial),
    (Oe.MeshBasicMaterial.prototype.copy = function(t) {
      return (
        Oe.Material.prototype.copy.call(this, t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        (this.specularMap = t.specularMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        (this.combine = t.combine),
        (this.reflectivity = t.reflectivity),
        (this.refractionRatio = t.refractionRatio),
        (this.fog = t.fog),
        (this.shading = t.shading),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.vertexColors = t.vertexColors),
        (this.skinning = t.skinning),
        (this.morphTargets = t.morphTargets),
        this
      );
    }),
    (Oe.MeshLambertMaterial = function(t) {
      Oe.Material.call(this),
        (this.type = "MeshLambertMaterial"),
        (this.color = new Oe.Color(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new Oe.Color(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.combine = Oe.MultiplyOperation),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.fog = !0),
        (this.blending = Oe.NormalBlending),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.vertexColors = Oe.NoColors),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.morphNormals = !1),
        this.setValues(t);
    }),
    (Oe.MeshLambertMaterial.prototype = Object.create(Oe.Material.prototype)),
    (Oe.MeshLambertMaterial.prototype.constructor = Oe.MeshLambertMaterial),
    (Oe.MeshLambertMaterial.prototype.copy = function(t) {
      return (
        Oe.Material.prototype.copy.call(this, t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        this.emissive.copy(t.emissive),
        (this.emissiveMap = t.emissiveMap),
        (this.emissiveIntensity = t.emissiveIntensity),
        (this.specularMap = t.specularMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        (this.combine = t.combine),
        (this.reflectivity = t.reflectivity),
        (this.refractionRatio = t.refractionRatio),
        (this.fog = t.fog),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.vertexColors = t.vertexColors),
        (this.skinning = t.skinning),
        (this.morphTargets = t.morphTargets),
        (this.morphNormals = t.morphNormals),
        this
      );
    }),
    (Oe.MeshStandardMaterial = function(t) {
      Oe.Material.call(this),
        (this.type = "MeshStandardMaterial"),
        (this.color = new Oe.Color(16777215)),
        (this.roughness = 0.5),
        (this.metalness = 0.5),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new Oe.Color(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalScale = new Oe.Vector2(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.roughnessMap = null),
        (this.metalnessMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapIntensity = 1),
        (this.refractionRatio = 0.98),
        (this.fog = !0),
        (this.shading = Oe.SmoothShading),
        (this.blending = Oe.NormalBlending),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.vertexColors = Oe.NoColors),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.morphNormals = !1),
        this.setValues(t);
    }),
    (Oe.MeshStandardMaterial.prototype = Object.create(Oe.Material.prototype)),
    (Oe.MeshStandardMaterial.prototype.constructor = Oe.MeshStandardMaterial),
    (Oe.MeshStandardMaterial.prototype.copy = function(t) {
      return (
        Oe.Material.prototype.copy.call(this, t),
        this.color.copy(t.color),
        (this.roughness = t.roughness),
        (this.metalness = t.metalness),
        (this.map = t.map),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        this.emissive.copy(t.emissive),
        (this.emissiveMap = t.emissiveMap),
        (this.emissiveIntensity = t.emissiveIntensity),
        (this.bumpMap = t.bumpMap),
        (this.bumpScale = t.bumpScale),
        (this.normalMap = t.normalMap),
        this.normalScale.copy(t.normalScale),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.roughnessMap = t.roughnessMap),
        (this.metalnessMap = t.metalnessMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        (this.envMapIntensity = t.envMapIntensity),
        (this.refractionRatio = t.refractionRatio),
        (this.fog = t.fog),
        (this.shading = t.shading),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.vertexColors = t.vertexColors),
        (this.skinning = t.skinning),
        (this.morphTargets = t.morphTargets),
        (this.morphNormals = t.morphNormals),
        this
      );
    }),
    (Oe.MeshPhongMaterial = function(t) {
      Oe.Material.call(this),
        (this.type = "MeshPhongMaterial"),
        (this.color = new Oe.Color(16777215)),
        (this.specular = new Oe.Color(1118481)),
        (this.shininess = 30),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new Oe.Color(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalScale = new Oe.Vector2(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.combine = Oe.MultiplyOperation),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.fog = !0),
        (this.shading = Oe.SmoothShading),
        (this.blending = Oe.NormalBlending),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.vertexColors = Oe.NoColors),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.morphNormals = !1),
        this.setValues(t);
    }),
    (Oe.MeshPhongMaterial.prototype = Object.create(Oe.Material.prototype)),
    (Oe.MeshPhongMaterial.prototype.constructor = Oe.MeshPhongMaterial),
    (Oe.MeshPhongMaterial.prototype.copy = function(t) {
      return (
        Oe.Material.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.specular.copy(t.specular),
        (this.shininess = t.shininess),
        (this.map = t.map),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        this.emissive.copy(t.emissive),
        (this.emissiveMap = t.emissiveMap),
        (this.emissiveIntensity = t.emissiveIntensity),
        (this.bumpMap = t.bumpMap),
        (this.bumpScale = t.bumpScale),
        (this.normalMap = t.normalMap),
        this.normalScale.copy(t.normalScale),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.specularMap = t.specularMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        (this.combine = t.combine),
        (this.reflectivity = t.reflectivity),
        (this.refractionRatio = t.refractionRatio),
        (this.fog = t.fog),
        (this.shading = t.shading),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.vertexColors = t.vertexColors),
        (this.skinning = t.skinning),
        (this.morphTargets = t.morphTargets),
        (this.morphNormals = t.morphNormals),
        this
      );
    }),
    (Oe.MultiMaterial = function(t) {
      (this.uuid = Oe.Math.generateUUID()),
        (this.type = "MultiMaterial"),
        (this.materials = t instanceof Array ? t : []),
        (this.visible = !0);
    }),
    (Oe.MultiMaterial.prototype = {
      constructor: Oe.MultiMaterial,
      toJSON: function(t) {
        for (
          var e = {
              metadata: {
                version: 4.2,
                type: "material",
                generator: "MaterialExporter"
              },
              uuid: this.uuid,
              type: this.type,
              materials: []
            },
            i = this.materials,
            r = 0,
            n = i.length;
          r < n;
          r++
        ) {
          var a = i[r].toJSON(t);
          delete a.metadata, e.materials.push(a);
        }
        return (e.visible = this.visible), e;
      },
      clone: function() {
        for (
          var t = new this.constructor(), e = 0;
          e < this.materials.length;
          e++
        )
          t.materials.push(this.materials[e].clone());
        return (t.visible = this.visible), t;
      }
    }),
    (Oe.RawShaderMaterial = function(t) {
      Oe.ShaderMaterial.call(this, t), (this.type = "RawShaderMaterial");
    }),
    (Oe.RawShaderMaterial.prototype = Object.create(
      Oe.ShaderMaterial.prototype
    )),
    (Oe.RawShaderMaterial.prototype.constructor = Oe.RawShaderMaterial),
    (Oe.Texture = function(t, e, i, r, n, a, o, s, h) {
      Object.defineProperty(this, "id", { value: Oe.TextureIdCount++ }),
        (this.uuid = Oe.Math.generateUUID()),
        (this.name = ""),
        (this.sourceFile = ""),
        (this.image = void 0 !== t ? t : Oe.Texture.DEFAULT_IMAGE),
        (this.mipmaps = []),
        (this.mapping = void 0 !== e ? e : Oe.Texture.DEFAULT_MAPPING),
        (this.wrapS = void 0 !== i ? i : Oe.ClampToEdgeWrapping),
        (this.wrapT = void 0 !== r ? r : Oe.ClampToEdgeWrapping),
        (this.magFilter = void 0 !== n ? n : Oe.LinearFilter),
        (this.minFilter = void 0 !== a ? a : Oe.LinearMipMapLinearFilter),
        (this.anisotropy = void 0 !== h ? h : 1),
        (this.format = void 0 !== o ? o : Oe.RGBAFormat),
        (this.type = void 0 !== s ? s : Oe.UnsignedByteType),
        (this.offset = new Oe.Vector2(0, 0)),
        (this.repeat = new Oe.Vector2(1, 1)),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.encoding = Oe.LinearEncoding),
        (this.version = 0),
        (this.onUpdate = null);
    }),
    (Oe.Texture.DEFAULT_IMAGE = void 0),
    (Oe.Texture.DEFAULT_MAPPING = Oe.UVMapping),
    (Oe.Texture.prototype = {
      constructor: Oe.Texture,
      set needsUpdate(t) {
        !0 === t && this.version++;
      },
      clone: function() {
        return new this.constructor().copy(this);
      },
      copy: function(t) {
        return (
          (this.image = t.image),
          (this.mipmaps = t.mipmaps.slice(0)),
          (this.mapping = t.mapping),
          (this.wrapS = t.wrapS),
          (this.wrapT = t.wrapT),
          (this.magFilter = t.magFilter),
          (this.minFilter = t.minFilter),
          (this.anisotropy = t.anisotropy),
          (this.format = t.format),
          (this.type = t.type),
          this.offset.copy(t.offset),
          this.repeat.copy(t.repeat),
          (this.generateMipmaps = t.generateMipmaps),
          (this.premultiplyAlpha = t.premultiplyAlpha),
          (this.flipY = t.flipY),
          (this.unpackAlignment = t.unpackAlignment),
          (this.encoding = t.encoding),
          this
        );
      },
      toJSON: function(t) {
        if (void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
        var e,
          i,
          r = {
            metadata: {
              version: 4.4,
              type: "Texture",
              generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            wrap: [this.wrapS, this.wrapT],
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy
          };
        if (void 0 !== this.image) {
          var n = this.image;
          void 0 === n.uuid && (n.uuid = Oe.Math.generateUUID()),
            void 0 === t.images[n.uuid] &&
              (t.images[n.uuid] = {
                uuid: n.uuid,
                url:
                  (void 0 !== (e = n).toDataURL
                    ? (i = e)
                    : (((i = document.createElement("canvas")).width = e.width),
                      (i.height = e.height),
                      i.getContext("2d").drawImage(e, 0, 0, e.width, e.height)),
                  2048 < i.width || 2048 < i.height
                    ? i.toDataURL("image/jpeg", 0.6)
                    : i.toDataURL("image/png"))
              }),
            (r.image = n.uuid);
        }
        return (t.textures[this.uuid] = r);
      },
      dispose: function() {
        this.dispatchEvent({ type: "dispose" });
      },
      transformUv: function(t) {
        if (this.mapping === Oe.UVMapping) {
          if ((t.multiply(this.repeat), t.add(this.offset), t.x < 0 || 1 < t.x))
            switch (this.wrapS) {
              case Oe.RepeatWrapping:
                t.x = t.x - Math.floor(t.x);
                break;
              case Oe.ClampToEdgeWrapping:
                t.x = t.x < 0 ? 0 : 1;
                break;
              case Oe.MirroredRepeatWrapping:
                1 === Math.abs(Math.floor(t.x) % 2)
                  ? (t.x = Math.ceil(t.x) - t.x)
                  : (t.x = t.x - Math.floor(t.x));
            }
          if (t.y < 0 || 1 < t.y)
            switch (this.wrapT) {
              case Oe.RepeatWrapping:
                t.y = t.y - Math.floor(t.y);
                break;
              case Oe.ClampToEdgeWrapping:
                t.y = t.y < 0 ? 0 : 1;
                break;
              case Oe.MirroredRepeatWrapping:
                1 === Math.abs(Math.floor(t.y) % 2)
                  ? (t.y = Math.ceil(t.y) - t.y)
                  : (t.y = t.y - Math.floor(t.y));
            }
          this.flipY && (t.y = 1 - t.y);
        }
      }
    }),
    Oe.EventDispatcher.prototype.apply(Oe.Texture.prototype),
    (Oe.TextureIdCount = 0),
    (Oe.DataTexture = function(t, e, i, r, n, a, o, s, h, l, u) {
      Oe.Texture.call(this, null, a, o, s, h, l, r, n, u),
        (this.image = { data: t, width: e, height: i }),
        (this.magFilter = void 0 !== h ? h : Oe.NearestFilter),
        (this.minFilter = void 0 !== l ? l : Oe.NearestFilter),
        (this.flipY = !1),
        (this.generateMipmaps = !1);
    }),
    (Oe.DataTexture.prototype = Object.create(Oe.Texture.prototype)),
    (Oe.DataTexture.prototype.constructor = Oe.DataTexture),
    (Oe.CompressedTexture = function(t, e, i, r, n, a, o, s, h, l, u) {
      Oe.Texture.call(this, null, a, o, s, h, l, r, n, u),
        (this.image = { width: e, height: i }),
        (this.mipmaps = t),
        (this.flipY = !1),
        (this.generateMipmaps = !1);
    }),
    (Oe.CompressedTexture.prototype = Object.create(Oe.Texture.prototype)),
    (Oe.CompressedTexture.prototype.constructor = Oe.CompressedTexture),
    (Oe.CubeTexture = function(t, e, i, r, n, a, o, s, h) {
      (t = void 0 !== t ? t : []),
        (e = void 0 !== e ? e : Oe.CubeReflectionMapping),
        Oe.Texture.call(this, t, e, i, r, n, a, o, s, h),
        (this.flipY = !1);
    }),
    (Oe.CubeTexture.prototype = Object.create(Oe.Texture.prototype)),
    (Oe.CubeTexture.prototype.constructor = Oe.CubeTexture),
    Object.defineProperty(Oe.CubeTexture.prototype, "images", {
      get: function() {
        return this.image;
      },
      set: function(t) {
        this.image = t;
      }
    }),
    (Oe.VideoTexture = function(e, t, i, r, n, a, o, s, h) {
      Oe.Texture.call(this, e, t, i, r, n, a, o, s, h),
        (this.generateMipmaps = !1);
      var l = this;
      !(function t() {
        requestAnimationFrame(t),
          e.readyState >= e.HAVE_CURRENT_DATA && (l.needsUpdate = !0);
      })();
    }),
    (Oe.VideoTexture.prototype = Object.create(Oe.Texture.prototype)),
    (Oe.VideoTexture.prototype.constructor = Oe.VideoTexture),
    (Oe.Sprite =
      ((he = new Uint16Array([0, 1, 2, 0, 2, 3])),
      (le = new Float32Array([
        -0.5,
        -0.5,
        0,
        0.5,
        -0.5,
        0,
        0.5,
        0.5,
        0,
        -0.5,
        0.5,
        0
      ])),
      (ue = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
      (ce = new Oe.BufferGeometry()).setIndex(new Oe.BufferAttribute(he, 1)),
      ce.addAttribute("position", new Oe.BufferAttribute(le, 3)),
      ce.addAttribute("uv", new Oe.BufferAttribute(ue, 2)),
      function(t) {
        Oe.Object3D.call(this),
          (this.type = "Sprite"),
          (this.geometry = ce),
          (this.material = void 0 !== t ? t : new Oe.SpriteMaterial());
      })),
    (Oe.Sprite.prototype = Object.create(Oe.Object3D.prototype)),
    (Oe.Sprite.prototype.constructor = Oe.Sprite),
    (Oe.Sprite.prototype.raycast =
      ((pe = new Oe.Vector3()),
      function(t, e) {
        pe.setFromMatrixPosition(this.matrixWorld);
        var i = t.ray.distanceSqToPoint(pe);
        this.scale.x * this.scale.y < i ||
          e.push({
            distance: Math.sqrt(i),
            point: this.position,
            face: null,
            object: this
          });
      })),
    (Oe.Sprite.prototype.clone = function() {
      return new this.constructor(this.material).copy(this);
    }),
    (Oe.Particle = Oe.Sprite),
    (Oe.LensFlare = function(t, e, i, r, n) {
      Oe.Object3D.call(this),
        (this.lensFlares = []),
        (this.positionScreen = new Oe.Vector3()),
        (this.customUpdateCallback = void 0) !== t && this.add(t, e, i, r, n);
    }),
    (Oe.LensFlare.prototype = Object.create(Oe.Object3D.prototype)),
    (Oe.LensFlare.prototype.constructor = Oe.LensFlare),
    (Oe.LensFlare.prototype.add = function(t, e, i, r, n, a) {
      void 0 === e && (e = -1),
        void 0 === i && (i = 0),
        void 0 === a && (a = 1),
        void 0 === n && (n = new Oe.Color(16777215)),
        void 0 === r && (r = Oe.NormalBlending),
        (i = Math.min(i, Math.max(0, i))),
        this.lensFlares.push({
          texture: t,
          size: e,
          distance: i,
          x: 0,
          y: 0,
          z: 0,
          scale: 1,
          rotation: 0,
          opacity: a,
          color: n,
          blending: r
        });
    }),
    (Oe.LensFlare.prototype.updateLensFlares = function() {
      var t,
        e,
        i = this.lensFlares.length,
        r = 2 * -this.positionScreen.x,
        n = 2 * -this.positionScreen.y;
      for (t = 0; t < i; t++)
        ((e = this.lensFlares[t]).x = this.positionScreen.x + r * e.distance),
          (e.y = this.positionScreen.y + n * e.distance),
          (e.wantedRotation = e.x * Math.PI * 0.25),
          (e.rotation += 0.25 * (e.wantedRotation - e.rotation));
    }),
    (Oe.LensFlare.prototype.copy = function(t) {
      Oe.Object3D.prototype.copy.call(this, t),
        this.positionScreen.copy(t.positionScreen),
        (this.customUpdateCallback = t.customUpdateCallback);
      for (var e = 0, i = t.lensFlares.length; e < i; e++)
        this.lensFlares.push(t.lensFlares[e]);
      return this;
    }),
    (Oe.Line = function(t, e, i) {
      if (1 === i) return new Oe.LineSegments(t, e);
      Oe.Object3D.call(this),
        (this.type = "Line"),
        (this.geometry = void 0 !== t ? t : new Oe.Geometry()),
        (this.material =
          void 0 !== e
            ? e
            : new Oe.LineBasicMaterial({ color: 16777215 * Math.random() }));
    }),
    (Oe.Line.prototype = Object.create(Oe.Object3D.prototype)),
    (Oe.Line.prototype.constructor = Oe.Line),
    (Oe.Line.prototype.raycast =
      ((de = new Oe.Matrix4()),
      (fe = new Oe.Ray()),
      (me = new Oe.Sphere()),
      function(t, e) {
        var i = t.linePrecision,
          r = i * i,
          n = this.geometry,
          a = this.matrixWorld;
        if (
          (null === n.boundingSphere && n.computeBoundingSphere(),
          me.copy(n.boundingSphere),
          me.applyMatrix4(a),
          !1 !== t.ray.intersectsSphere(me))
        ) {
          de.getInverse(a), fe.copy(t.ray).applyMatrix4(de);
          var o = new Oe.Vector3(),
            s = new Oe.Vector3(),
            h = new Oe.Vector3(),
            l = new Oe.Vector3(),
            u = this instanceof Oe.LineSegments ? 2 : 1;
          if (n instanceof Oe.BufferGeometry) {
            var c = n.index,
              p = n.attributes.position.array;
            if (null !== c)
              for (var d = c.array, f = 0, m = d.length - 1; f < m; f += u) {
                var v = d[f],
                  g = d[f + 1];
                o.fromArray(p, 3 * v),
                  s.fromArray(p, 3 * g),
                  r < fe.distanceSqToSegment(o, s, l, h) ||
                    (l.applyMatrix4(this.matrixWorld),
                    (M = t.ray.origin.distanceTo(l)) < t.near ||
                      M > t.far ||
                      e.push({
                        distance: M,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: f,
                        face: null,
                        faceIndex: null,
                        object: this
                      }));
              }
            else
              for (f = 0, m = p.length / 3 - 1; f < m; f += u)
                o.fromArray(p, 3 * f),
                  s.fromArray(p, 3 * f + 3),
                  r < fe.distanceSqToSegment(o, s, l, h) ||
                    (l.applyMatrix4(this.matrixWorld),
                    (M = t.ray.origin.distanceTo(l)) < t.near ||
                      M > t.far ||
                      e.push({
                        distance: M,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: f,
                        face: null,
                        faceIndex: null,
                        object: this
                      }));
          } else if (n instanceof Oe.Geometry) {
            var y = n.vertices,
              x = y.length;
            for (f = 0; f < x - 1; f += u) {
              var M;
              r < fe.distanceSqToSegment(y[f], y[f + 1], l, h) ||
                (l.applyMatrix4(this.matrixWorld),
                (M = t.ray.origin.distanceTo(l)) < t.near ||
                  M > t.far ||
                  e.push({
                    distance: M,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: f,
                    face: null,
                    faceIndex: null,
                    object: this
                  }));
            }
          }
        }
      })),
    (Oe.Line.prototype.clone = function() {
      return new this.constructor(this.geometry, this.material).copy(this);
    }),
    (Oe.LineStrip = 0),
    (Oe.LinePieces = 1),
    (Oe.LineSegments = function(t, e) {
      Oe.Line.call(this, t, e), (this.type = "LineSegments");
    }),
    (Oe.LineSegments.prototype = Object.create(Oe.Line.prototype)),
    (Oe.LineSegments.prototype.constructor = Oe.LineSegments),
    (Oe.Mesh = function(t, e) {
      Oe.Object3D.call(this),
        (this.type = "Mesh"),
        (this.geometry = void 0 !== t ? t : new Oe.Geometry()),
        (this.material =
          void 0 !== e
            ? e
            : new Oe.MeshBasicMaterial({ color: 16777215 * Math.random() })),
        (this.drawMode = Oe.TrianglesDrawMode),
        this.updateMorphTargets();
    }),
    (Oe.Mesh.prototype = Object.create(Oe.Object3D.prototype)),
    (Oe.Mesh.prototype.constructor = Oe.Mesh),
    (Oe.Mesh.prototype.setDrawMode = function(t) {
      this.drawMode = t;
    }),
    (Oe.Mesh.prototype.updateMorphTargets = function() {
      if (
        void 0 !== this.geometry.morphTargets &&
        0 < this.geometry.morphTargets.length
      ) {
        (this.morphTargetBase = -1),
          (this.morphTargetInfluences = []),
          (this.morphTargetDictionary = {});
        for (var t = 0, e = this.geometry.morphTargets.length; t < e; t++)
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[
              this.geometry.morphTargets[t].name
            ] = t);
      }
    }),
    (Oe.Mesh.prototype.getMorphTargetIndexByName = function(t) {
      return void 0 !== this.morphTargetDictionary[t]
        ? this.morphTargetDictionary[t]
        : 0;
    }),
    (Oe.Mesh.prototype.raycast =
      ((ve = new Oe.Matrix4()),
      (ge = new Oe.Ray()),
      (ye = new Oe.Sphere()),
      (xe = new Oe.Vector3()),
      (Me = new Oe.Vector3()),
      (be = new Oe.Vector3()),
      (_e = new Oe.Vector3()),
      (Se = new Oe.Vector3()),
      (we = new Oe.Vector3()),
      (Ee = new Oe.Vector2()),
      (Te = new Oe.Vector2()),
      (Ae = new Oe.Vector2()),
      (Le = new Oe.Vector3()),
      (Re = new Oe.Vector3()),
      (Ce = new Oe.Vector3()),
      function(t, e) {
        var i,
          r,
          n = this.geometry,
          a = this.material,
          o = this.matrixWorld;
        if (
          void 0 !== a &&
          (null === n.boundingSphere && n.computeBoundingSphere(),
          ye.copy(n.boundingSphere),
          ye.applyMatrix4(o),
          !1 !== t.ray.intersectsSphere(ye) &&
            (ve.getInverse(o),
            ge.copy(t.ray).applyMatrix4(ve),
            null === n.boundingBox || !1 !== ge.intersectsBox(n.boundingBox)))
        )
          if (n instanceof Oe.BufferGeometry) {
            var s,
              h,
              l,
              u = n.index,
              c = n.attributes,
              p = c.position.array;
            if ((void 0 !== c.uv && (i = c.uv.array), null !== u))
              for (var d = u.array, f = 0, m = d.length; f < m; f += 3)
                (s = d[f]),
                  (h = d[f + 1]),
                  (l = d[f + 2]),
                  (r = We(this, t, ge, p, i, s, h, l)) &&
                    ((r.faceIndex = Math.floor(f / 3)), e.push(r));
            else
              for (f = 0, m = p.length; f < m; f += 9)
                (r = We(
                  this,
                  t,
                  ge,
                  p,
                  i,
                  (s = f / 3),
                  (h = s + 1),
                  (l = s + 2)
                )) && ((r.index = s), e.push(r));
          } else if (n instanceof Oe.Geometry) {
            var v,
              g,
              y,
              x = a instanceof Oe.MultiMaterial,
              M = 1 == x ? a.materials : null,
              b = n.vertices,
              _ = n.faces,
              S = n.faceVertexUvs[0];
            0 < S.length && (i = S);
            for (var w = 0, E = _.length; w < E; w++) {
              var T = _[w],
                A = 1 == x ? M[T.materialIndex] : a;
              if (void 0 !== A) {
                if (
                  ((v = b[T.a]),
                  (g = b[T.b]),
                  (y = b[T.c]),
                  !0 === A.morphTargets)
                ) {
                  var L = n.morphTargets,
                    R = this.morphTargetInfluences;
                  xe.set(0, 0, 0), Me.set(0, 0, 0), be.set(0, 0, 0);
                  for (var C = 0, U = L.length; C < U; C++) {
                    var P = R[C];
                    if (0 !== P) {
                      var F = L[C].vertices;
                      xe.addScaledVector(_e.subVectors(F[T.a], v), P),
                        Me.addScaledVector(Se.subVectors(F[T.b], g), P),
                        be.addScaledVector(we.subVectors(F[T.c], y), P);
                    }
                  }
                  xe.add(v), Me.add(g), be.add(y), (v = xe), (g = Me), (y = be);
                }
                if ((r = Ge(this, t, ge, v, g, y, Re))) {
                  if (i) {
                    var N = i[w];
                    Ee.copy(N[0]),
                      Te.copy(N[1]),
                      Ae.copy(N[2]),
                      (r.uv = ke(Re, v, g, y, Ee, Te, Ae));
                  }
                  (r.face = T), (r.faceIndex = w), e.push(r);
                }
              }
            }
          }
      })),
    (Oe.Mesh.prototype.clone = function() {
      return new this.constructor(this.geometry, this.material).copy(this);
    }),
    (Oe.SkinnedMesh = function(t, e, i) {
      Oe.Mesh.call(this, t, e),
        (this.type = "SkinnedMesh"),
        (this.bindMode = "attached"),
        (this.bindMatrix = new Oe.Matrix4()),
        (this.bindMatrixInverse = new Oe.Matrix4());
      var r = [];
      if (this.geometry && void 0 !== this.geometry.bones) {
        for (var n, a, o = 0, s = this.geometry.bones.length; o < s; ++o)
          (a = this.geometry.bones[o]),
            (n = new Oe.Bone(this)),
            r.push(n),
            (n.name = a.name),
            n.position.fromArray(a.pos),
            n.quaternion.fromArray(a.rotq),
            void 0 !== a.scl && n.scale.fromArray(a.scl);
        for (o = 0, s = this.geometry.bones.length; o < s; ++o)
          -1 !== (a = this.geometry.bones[o]).parent && null !== a.parent
            ? r[a.parent].add(r[o])
            : this.add(r[o]);
      }
      this.normalizeSkinWeights(),
        this.updateMatrixWorld(!0),
        this.bind(new Oe.Skeleton(r, void 0, i), this.matrixWorld);
    }),
    (Oe.SkinnedMesh.prototype = Object.create(Oe.Mesh.prototype)),
    (Oe.SkinnedMesh.prototype.constructor = Oe.SkinnedMesh),
    (Oe.SkinnedMesh.prototype.bind = function(t, e) {
      (this.skeleton = t),
        void 0 === e &&
          (this.updateMatrixWorld(!0),
          this.skeleton.calculateInverses(),
          (e = this.matrixWorld)),
        this.bindMatrix.copy(e),
        this.bindMatrixInverse.getInverse(e);
    }),
    (Oe.SkinnedMesh.prototype.pose = function() {
      this.skeleton.pose();
    }),
    (Oe.SkinnedMesh.prototype.normalizeSkinWeights = function() {
      if (this.geometry instanceof Oe.Geometry)
        for (var t = 0; t < this.geometry.skinWeights.length; t++) {
          var e = this.geometry.skinWeights[t];
          (n = 1 / e.lengthManhattan()) !== 1 / 0
            ? e.multiplyScalar(n)
            : e.set(1, 0, 0, 0);
        }
      else if (this.geometry instanceof Oe.BufferGeometry) {
        var i = new Oe.Vector4(),
          r = this.geometry.attributes.skinWeight;
        for (t = 0; t < r.count; t++) {
          var n;
          (i.x = r.getX(t)),
            (i.y = r.getY(t)),
            (i.z = r.getZ(t)),
            (i.w = r.getW(t)),
            (n = 1 / i.lengthManhattan()) !== 1 / 0
              ? i.multiplyScalar(n)
              : i.set(1, 0, 0, 0),
            r.setXYZW(t, i.x, i.y, i.z, i.w);
        }
      }
    }),
    (Oe.SkinnedMesh.prototype.updateMatrixWorld = function(t) {
      Oe.Mesh.prototype.updateMatrixWorld.call(this, !0),
        "attached" === this.bindMode
          ? this.bindMatrixInverse.getInverse(this.matrixWorld)
          : "detached" === this.bindMode &&
            this.bindMatrixInverse.getInverse(this.bindMatrix);
    }),
    (Oe.SkinnedMesh.prototype.clone = function() {
      return new this.constructor(
        this.geometry,
        this.material,
        this.useVertexTexture
      ).copy(this);
    }),
    (Oe.Points = function(t, e) {
      Oe.Object3D.call(this),
        (this.type = "Points"),
        (this.geometry = void 0 !== t ? t : new Oe.Geometry()),
        (this.material =
          void 0 !== e
            ? e
            : new Oe.PointsMaterial({ color: 16777215 * Math.random() }));
    }),
    (Oe.Points.prototype = Object.create(Oe.Object3D.prototype)),
    (Oe.Points.prototype.constructor = Oe.Points),
    (Oe.Points.prototype.raycast =
      ((Ue = new Oe.Matrix4()),
      (Pe = new Oe.Ray()),
      (Fe = new Oe.Sphere()),
      function(a, o) {
        var s = this,
          t = this.geometry,
          h = this.matrixWorld,
          e = a.params.Points.threshold;
        if (
          (null === t.boundingSphere && t.computeBoundingSphere(),
          Fe.copy(t.boundingSphere),
          Fe.applyMatrix4(h),
          !1 !== a.ray.intersectsSphere(Fe))
        ) {
          Ue.getInverse(h), Pe.copy(a.ray).applyMatrix4(Ue);
          var i = e / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            l = i * i,
            r = new Oe.Vector3();
          if (t instanceof Oe.BufferGeometry) {
            var n = t.index,
              u = t.attributes.position.array;
            if (null !== n)
              for (var c = n.array, p = 0, d = c.length; p < d; p++) {
                var f = c[p];
                r.fromArray(u, 3 * f), g(r, f);
              }
            else {
              p = 0;
              for (var m = u.length / 3; p < m; p++)
                r.fromArray(u, 3 * p), g(r, p);
            }
          } else {
            var v = t.vertices;
            for (p = 0, m = v.length; p < m; p++) g(v[p], p);
          }
        }
        function g(t, e) {
          var i = Pe.distanceSqToPoint(t);
          if (i < l) {
            var r = Pe.closestPointToPoint(t);
            r.applyMatrix4(h);
            var n = a.ray.origin.distanceTo(r);
            if (n < a.near || n > a.far) return;
            o.push({
              distance: n,
              distanceToRay: Math.sqrt(i),
              point: r.clone(),
              index: e,
              face: null,
              object: s
            });
          }
        }
      })),
    (Oe.Points.prototype.clone = function() {
      return new this.constructor(this.geometry, this.material).copy(this);
    }),
    (Oe.Light = function(t, e) {
      Oe.Object3D.call(this),
        (this.type = "Light"),
        (this.color = new Oe.Color(t)),
        (this.intensity = void 0 !== e ? e : 1),
        (this.receiveShadow = void 0);
    }),
    (Oe.Light.prototype = Object.create(Oe.Object3D.prototype)),
    (Oe.Light.prototype.constructor = Oe.Light),
    (Oe.Light.prototype.copy = function(t) {
      return (
        Oe.Object3D.prototype.copy.call(this, t),
        this.color.copy(t.color),
        (this.intensity = t.intensity),
        this
      );
    }),
    (Oe.Light.prototype.toJSON = function(t) {
      var e = Oe.Object3D.prototype.toJSON.call(this, t);
      return (
        (e.object.color = this.color.getHex()),
        (e.object.intensity = this.intensity),
        void 0 !== this.groundColor &&
          (e.object.groundColor = this.groundColor.getHex()),
        void 0 !== this.distance && (e.object.distance = this.distance),
        void 0 !== this.angle && (e.object.angle = this.angle),
        void 0 !== this.decay && (e.object.decay = this.decay),
        void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
        e
      );
    }),
    (Oe.ShaderChunk = {}),
    (Oe.ShaderChunk.alphamap_fragment =
      "#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n"),
    (Oe.ShaderChunk.alphamap_pars_fragment =
      "#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n"),
    (Oe.ShaderChunk.alphatest_fragment =
      "#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n"),
    (Oe.ShaderChunk.aomap_fragment =
      "#ifdef USE_AOMAP\n\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\n\t#endif\n\n#endif\n"),
    (Oe.ShaderChunk.aomap_pars_fragment =
      "#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif"),
    (Oe.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n"),
    (Oe.ShaderChunk.beginnormal_vertex =
      "\nvec3 objectNormal = vec3( normal );\n"),
    (Oe.ShaderChunk.color_fragment =
      "#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif"),
    (Oe.ShaderChunk.color_pars_fragment =
      "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n"),
    (Oe.ShaderChunk.color_pars_vertex =
      "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif"),
    (Oe.ShaderChunk.color_vertex =
      "#ifdef USE_COLOR\n\n\tvColor.xyz = color.xyz;\n\n#endif"),
    (Oe.ShaderChunk.common =
      "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\n\n\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\n\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\n\n\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n}\n\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\n\treturn - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n"),
    (Oe.ShaderChunk.defaultnormal_vertex =
      "#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n"),
    (Oe.ShaderChunk.encodings_fragment =
      "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n"),
    (Oe.ShaderChunk.encodings_pars_fragment =
      "// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/\n\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\n\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\n\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\n\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n//  return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\n\n// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html\n\n// M matrix, for encoding\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\n\n// Inverse M matrix, for decoding\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n"),
    (Oe.ShaderChunk.envmap_fragment =
      "#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\n\t#endif\n\n\tenvColor = envMapTexelToLinear( envColor );\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n"),
    (Oe.ShaderChunk.envmap_pars_fragment =
      "#if defined( USE_ENVMAP ) || defined( STANDARD )\n\tuniform float reflectivity;\n\tuniform float envMapIntenstiy;\n#endif\n\n#ifdef USE_ENVMAP\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( STANDARD )\n\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif\n"),
    (Oe.ShaderChunk.envmap_pars_vertex =
      "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\n#endif\n"),
    (Oe.ShaderChunk.envmap_vertex =
      "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t#else\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t#endif\n\n#endif\n"),
    (Oe.ShaderChunk.fog_fragment =
      "#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\n#endif\n"),
    (Oe.ShaderChunk.fog_pars_fragment =
      "#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif"),
    (Oe.ShaderChunk.logdepthbuf_fragment =
      "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif"),
    (Oe.ShaderChunk.logdepthbuf_pars_fragment =
      "#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif\n"),
    (Oe.ShaderChunk.logdepthbuf_pars_vertex =
      "#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif"),
    (Oe.ShaderChunk.logdepthbuf_vertex =
      "#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n\t#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif\n"),
    (Oe.ShaderChunk.map_fragment =
      "#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n\n#endif\n"),
    (Oe.ShaderChunk.map_pars_fragment =
      "#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n"),
    (Oe.ShaderChunk.morphnormal_vertex =
      "#ifdef USE_MORPHNORMALS\n\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n#endif\n"),
    (Oe.ShaderChunk.morphtarget_pars_vertex =
      "#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif"),
    (Oe.ShaderChunk.morphtarget_vertex =
      "#ifdef USE_MORPHTARGETS\n\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n#endif\n"),
    (Oe.ShaderChunk.premultiplied_alpha_fragment =
      "#ifdef PREMULTIPLIED_ALPHA\n\n\t// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\n\tgl_FragColor.rgb *= gl_FragColor.a;\n\n#endif\n"),
    (Oe.ShaderChunk.project_vertex =
      "#ifdef USE_SKINNING\n\n\tvec4 mvPosition = modelViewMatrix * skinned;\n\n#else\n\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n"),
    (Oe.ShaderChunk.skinbase_vertex =
      "#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif"),
    (Oe.ShaderChunk.skinning_pars_vertex =
      "#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n"),
    (Oe.ShaderChunk.skinning_vertex =
      "#ifdef USE_SKINNING\n\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n"),
    (Oe.ShaderChunk.skinnormal_vertex =
      "#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n#endif\n"),
    (Oe.ShaderChunk.specularmap_fragment =
      "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif"),
    (Oe.ShaderChunk.specularmap_pars_fragment =
      "#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif"),
    (Oe.ShaderChunk.tonemapping_fragment =
      "#if defined( TONE_MAPPING )\n\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n\n#endif\n"),
    (Oe.ShaderChunk.tonemapping_pars_fragment =
      "#define saturate(a) clamp( a, 0.0, 1.0 )\n\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\n\n// exposure only\nvec3 LinearToneMapping( vec3 color ) {\n\n  return toneMappingExposure * color;\n\n}\n\n// source: https://www.cs.utah.edu/~reinhard/cdrom/\nvec3 ReinhardToneMapping( vec3 color ) {\n\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n\n}\n\n// source: http://filmicgames.com/archives/75\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\n  // John Hable's filmic operator from Uncharted 2 video game\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n\n}\n\n// source: http://filmicgames.com/archives/75\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\n  // optimized filmic operator by Jim Hejl and Richard Burgess-Dawson\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n\n}\n"),
    (Oe.ShaderChunk.uv2_pars_fragment =
      "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvarying vec2 vUv2;\n\n#endif"),
    (Oe.ShaderChunk.uv2_pars_vertex =
      "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\n#endif"),
    (Oe.ShaderChunk.uv2_vertex =
      "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvUv2 = uv2;\n\n#endif"),
    (Oe.ShaderChunk.uv_pars_fragment =
      "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n\tvarying vec2 vUv;\n\n#endif"),
    (Oe.ShaderChunk.uv_pars_vertex =
      "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n"),
    (Oe.ShaderChunk.uv_vertex =
      "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif"),
    (Oe.ShaderChunk.worldpos_vertex =
      "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( STANDARD ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#else\n\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\n\t#endif\n\n#endif\n"),
    (Oe.ShaderChunk.meshbasic_frag =
      "uniform vec3 diffuse;\nuniform float opacity;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n\nvoid main() {\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\n\tReflectedLight reflectedLight;\n\treflectedLight.directDiffuse = vec3( 0.0 );\n\treflectedLight.directSpecular = vec3( 0.0 );\n\treflectedLight.indirectDiffuse = diffuseColor.rgb;\n\treflectedLight.indirectSpecular = vec3( 0.0 );\n\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n"),
    (Oe.ShaderChunk.meshbasic_vert =
      "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_ENVMAP\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\n}\n"),
    (Oe.UniformsUtils = {
      merge: function(t) {
        for (var e = {}, i = 0; i < t.length; i++) {
          var r = this.clone(t[i]);
          for (var n in r) e[n] = r[n];
        }
        return e;
      },
      clone: function(t) {
        var e = {};
        for (var i in t)
          for (var r in ((e[i] = {}), t[i])) {
            var n = t[i][r];
            n instanceof Oe.Color ||
            n instanceof Oe.Vector2 ||
            n instanceof Oe.Vector3 ||
            n instanceof Oe.Vector4 ||
            n instanceof Oe.Matrix3 ||
            n instanceof Oe.Matrix4 ||
            n instanceof Oe.Texture
              ? (e[i][r] = n.clone())
              : Array.isArray(n)
              ? (e[i][r] = n.slice())
              : (e[i][r] = n);
          }
        return e;
      }
    }),
    (Oe.UniformsLib = {
      common: {
        diffuse: { type: "c", value: new Oe.Color(15658734) },
        opacity: { type: "f", value: 1 },
        map: { type: "t", value: null },
        offsetRepeat: { type: "v4", value: new Oe.Vector4(0, 0, 1, 1) },
        specularMap: { type: "t", value: null },
        alphaMap: { type: "t", value: null },
        envMap: { type: "t", value: null },
        flipEnvMap: { type: "f", value: -1 },
        reflectivity: { type: "f", value: 1 },
        refractionRatio: { type: "f", value: 0.98 }
      },
      aomap: {
        aoMap: { type: "t", value: null },
        aoMapIntensity: { type: "f", value: 1 }
      },
      lightmap: {
        lightMap: { type: "t", value: null },
        lightMapIntensity: { type: "f", value: 1 }
      },
      emissivemap: { emissiveMap: { type: "t", value: null } },
      bumpmap: {
        bumpMap: { type: "t", value: null },
        bumpScale: { type: "f", value: 1 }
      },
      normalmap: {
        normalMap: { type: "t", value: null },
        normalScale: { type: "v2", value: new Oe.Vector2(1, 1) }
      },
      displacementmap: {
        displacementMap: { type: "t", value: null },
        displacementScale: { type: "f", value: 1 },
        displacementBias: { type: "f", value: 0 }
      },
      roughnessmap: { roughnessMap: { type: "t", value: null } },
      metalnessmap: { metalnessMap: { type: "t", value: null } },
      fog: {
        fogDensity: { type: "f", value: 25e-5 },
        fogNear: { type: "f", value: 1 },
        fogFar: { type: "f", value: 2e3 },
        fogColor: { type: "c", value: new Oe.Color(16777215) }
      },
      lights: {
        ambientLightColor: { type: "fv", value: [] },
        directionalLights: {
          type: "sa",
          value: [],
          properties: {
            direction: { type: "v3" },
            color: { type: "c" },
            shadow: { type: "i" },
            shadowBias: { type: "f" },
            shadowRadius: { type: "f" },
            shadowMapSize: { type: "v2" }
          }
        },
        directionalShadowMap: { type: "tv", value: [] },
        directionalShadowMatrix: { type: "m4v", value: [] },
        spotLights: {
          type: "sa",
          value: [],
          properties: {
            color: { type: "c" },
            position: { type: "v3" },
            direction: { type: "v3" },
            distance: { type: "f" },
            coneCos: { type: "f" },
            penumbraCos: { type: "f" },
            decay: { type: "f" },
            shadow: { type: "i" },
            shadowBias: { type: "f" },
            shadowRadius: { type: "f" },
            shadowMapSize: { type: "v2" }
          }
        },
        spotShadowMap: { type: "tv", value: [] },
        spotShadowMatrix: { type: "m4v", value: [] },
        pointLights: {
          type: "sa",
          value: [],
          properties: {
            color: { type: "c" },
            position: { type: "v3" },
            decay: { type: "f" },
            distance: { type: "f" },
            shadow: { type: "i" },
            shadowBias: { type: "f" },
            shadowRadius: { type: "f" },
            shadowMapSize: { type: "v2" }
          }
        },
        pointShadowMap: { type: "tv", value: [] },
        pointShadowMatrix: { type: "m4v", value: [] },
        hemisphereLights: {
          type: "sa",
          value: [],
          properties: {
            direction: { type: "v3" },
            skyColor: { type: "c" },
            groundColor: { type: "c" }
          }
        }
      },
      points: {
        diffuse: { type: "c", value: new Oe.Color(15658734) },
        opacity: { type: "f", value: 1 },
        size: { type: "f", value: 1 },
        scale: { type: "f", value: 1 },
        map: { type: "t", value: null },
        offsetRepeat: { type: "v4", value: new Oe.Vector4(0, 0, 1, 1) }
      }
    }),
    (Oe.ShaderLib = {
      basic: {
        uniforms: Oe.UniformsUtils.merge([
          Oe.UniformsLib.common,
          Oe.UniformsLib.aomap,
          Oe.UniformsLib.fog
        ]),
        vertexShader: Oe.ShaderChunk.meshbasic_vert,
        fragmentShader: Oe.ShaderChunk.meshbasic_frag
      },
      lambert: {
        uniforms: Oe.UniformsUtils.merge([
          Oe.UniformsLib.common,
          Oe.UniformsLib.aomap,
          Oe.UniformsLib.lightmap,
          Oe.UniformsLib.emissivemap,
          Oe.UniformsLib.fog,
          Oe.UniformsLib.lights,
          { emissive: { type: "c", value: new Oe.Color(0) } }
        ]),
        vertexShader: Oe.ShaderChunk.meshlambert_vert,
        fragmentShader: Oe.ShaderChunk.meshlambert_frag
      },
      phong: {
        uniforms: Oe.UniformsUtils.merge([
          Oe.UniformsLib.common,
          Oe.UniformsLib.aomap,
          Oe.UniformsLib.lightmap,
          Oe.UniformsLib.emissivemap,
          Oe.UniformsLib.bumpmap,
          Oe.UniformsLib.normalmap,
          Oe.UniformsLib.displacementmap,
          Oe.UniformsLib.fog,
          Oe.UniformsLib.lights,
          {
            emissive: { type: "c", value: new Oe.Color(0) },
            specular: { type: "c", value: new Oe.Color(1118481) },
            shininess: { type: "f", value: 30 }
          }
        ]),
        vertexShader: Oe.ShaderChunk.meshphong_vert,
        fragmentShader: Oe.ShaderChunk.meshphong_frag
      },
      standard: {
        uniforms: Oe.UniformsUtils.merge([
          Oe.UniformsLib.common,
          Oe.UniformsLib.aomap,
          Oe.UniformsLib.lightmap,
          Oe.UniformsLib.emissivemap,
          Oe.UniformsLib.bumpmap,
          Oe.UniformsLib.normalmap,
          Oe.UniformsLib.displacementmap,
          Oe.UniformsLib.roughnessmap,
          Oe.UniformsLib.metalnessmap,
          Oe.UniformsLib.fog,
          Oe.UniformsLib.lights,
          {
            emissive: { type: "c", value: new Oe.Color(0) },
            roughness: { type: "f", value: 0.5 },
            metalness: { type: "f", value: 0 },
            envMapIntensity: { type: "f", value: 1 }
          }
        ]),
        vertexShader: Oe.ShaderChunk.meshstandard_vert,
        fragmentShader: Oe.ShaderChunk.meshstandard_frag
      },
      points: {
        uniforms: Oe.UniformsUtils.merge([
          Oe.UniformsLib.points,
          Oe.UniformsLib.fog
        ]),
        vertexShader: Oe.ShaderChunk.points_vert,
        fragmentShader: Oe.ShaderChunk.points_frag
      },
      dashed: {
        uniforms: Oe.UniformsUtils.merge([
          Oe.UniformsLib.common,
          Oe.UniformsLib.fog,
          {
            scale: { type: "f", value: 1 },
            dashSize: { type: "f", value: 1 },
            totalSize: { type: "f", value: 2 }
          }
        ]),
        vertexShader: Oe.ShaderChunk.linedashed_vert,
        fragmentShader: Oe.ShaderChunk.linedashed_frag
      },
      depth: {
        uniforms: {
          mNear: { type: "f", value: 1 },
          mFar: { type: "f", value: 2e3 },
          opacity: { type: "f", value: 1 }
        },
        vertexShader: Oe.ShaderChunk.depth_vert,
        fragmentShader: Oe.ShaderChunk.depth_frag
      },
      normal: {
        uniforms: { opacity: { type: "f", value: 1 } },
        vertexShader: Oe.ShaderChunk.normal_vert,
        fragmentShader: Oe.ShaderChunk.normal_frag
      },
      cube: {
        uniforms: {
          tCube: { type: "t", value: null },
          tFlip: { type: "f", value: -1 }
        },
        vertexShader: Oe.ShaderChunk.cube_vert,
        fragmentShader: Oe.ShaderChunk.cube_frag
      },
      equirect: {
        uniforms: {
          tEquirect: { type: "t", value: null },
          tFlip: { type: "f", value: -1 }
        },
        vertexShader: Oe.ShaderChunk.equirect_vert,
        fragmentShader: Oe.ShaderChunk.equirect_frag
      },
      depthRGBA: {
        uniforms: {},
        vertexShader: Oe.ShaderChunk.depthRGBA_vert,
        fragmentShader: Oe.ShaderChunk.depthRGBA_frag
      },
      distanceRGBA: {
        uniforms: { lightPos: { type: "v3", value: new Oe.Vector3(0, 0, 0) } },
        vertexShader: Oe.ShaderChunk.distanceRGBA_vert,
        fragmentShader: Oe.ShaderChunk.distanceRGBA_frag
      }
    }),
    (Oe.WebGLRenderer = function(t) {
      var M =
          void 0 !== (t = t || {}).canvas
            ? t.canvas
            : document.createElement("canvas"),
        e = void 0 !== t.context ? t.context : null,
        i = void 0 !== t.alpha && t.alpha,
        r = void 0 === t.depth || t.depth,
        n = void 0 === t.stencil || t.stencil,
        a = void 0 !== t.antialias && t.antialias,
        o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
        s = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
        p = [],
        u = [],
        c = -1,
        d = [],
        f = -1,
        L = new Float32Array(8),
        m = [],
        v = [];
      (this.domElement = M),
        (this.context = null),
        (this.autoClear = !0),
        (this.autoClearColor = !0),
        (this.autoClearDepth = !0),
        (this.autoClearStencil = !0),
        (this.sortObjects = !0),
        (this.gammaFactor = 2),
        (this.gammaInput = !1),
        (this.gammaOutput = !1),
        (this.physicallyCorrectLights = !1),
        (this.toneMapping = Oe.LinearToneMapping),
        (this.toneMappingExposure = 1),
        (this.toneMappingWhitePoint = 1),
        (this.maxMorphTargets = 8),
        (this.maxMorphNormals = 4),
        (this.autoScaleCubemaps = !0);
      var R,
        b = this,
        _ = null,
        h = null,
        l = null,
        S = -1,
        C = "",
        w = null,
        g = new Oe.Vector4(),
        y = null,
        x = new Oe.Vector4(),
        E = 0,
        T = new Oe.Color(0),
        A = 0,
        U = M.width,
        P = M.height,
        F = 1,
        N = new Oe.Vector4(0, 0, U, P),
        D = !1,
        B = new Oe.Vector4(0, 0, U, P),
        I = new Oe.Frustum(),
        O = new Oe.Matrix4(),
        V = new Oe.Vector3(),
        z = {
          hash: "",
          ambient: [0, 0, 0],
          directional: [],
          directionalShadowMap: [],
          directionalShadowMatrix: [],
          spot: [],
          spotShadowMap: [],
          spotShadowMatrix: [],
          point: [],
          pointShadowMap: [],
          pointShadowMatrix: [],
          hemi: [],
          shadows: [],
          shadowsPointLight: 0
        },
        k = { geometries: 0, textures: 0 },
        G = { calls: 0, vertices: 0, faces: 0, points: 0 };
      this.info = { render: G, memory: k, programs: null };
      try {
        var W = {
          alpha: i,
          depth: r,
          stencil: n,
          antialias: a,
          premultipliedAlpha: o,
          preserveDrawingBuffer: s
        };
        if (
          null ===
          (R =
            e ||
            M.getContext("webgl", W) ||
            M.getContext("experimental-webgl", W))
        )
          throw null !== M.getContext("webgl")
            ? "Error creating WebGL context with your selected attributes."
            : "Error creating WebGL context.";
        void 0 === R.getShaderPrecisionFormat &&
          (R.getShaderPrecisionFormat = function() {
            return { rangeMin: 1, rangeMax: 1, precision: 1 };
          }),
          M.addEventListener("webglcontextlost", st, !1);
      } catch (t) {}
      var j = new Oe.WebGLExtensions(R);
      j.get("OES_texture_float"),
        j.get("OES_texture_float_linear"),
        j.get("OES_texture_half_float"),
        j.get("OES_texture_half_float_linear"),
        j.get("OES_standard_derivatives"),
        j.get("ANGLE_instanced_arrays"),
        j.get("OES_element_index_uint") &&
          (Oe.BufferGeometry.MaxIndex = 4294967296);
      var X = new Oe.WebGLCapabilities(R, j, t),
        H = new Oe.WebGLState(R, j, Ft),
        q = new Oe.WebGLProperties(),
        Y = new Oe.WebGLObjects(R, q, this.info),
        Z = new Oe.WebGLPrograms(this, X),
        Q = new Oe.WebGLLights();
      this.info.programs = Z.programs;
      var J = new Oe.WebGLBufferRenderer(R, j, G),
        K = new Oe.WebGLIndexedBufferRenderer(R, j, G);
      function $() {
        return null === h ? F : 1;
      }
      function tt(t, e, i, r) {
        !0 === o && ((t *= r), (e *= r), (i *= r)), H.clearColor(t, e, i, r);
      }
      function et() {
        H.init(),
          H.scissor(g.copy(N).multiplyScalar(F)),
          H.viewport(x.copy(B).multiplyScalar(F)),
          tt(T.r, T.g, T.b, A);
      }
      function it() {
        (w = _ = null), (C = ""), (S = -1), H.reset();
      }
      et(),
        (this.context = R),
        (this.capabilities = X),
        (this.extensions = j),
        (this.properties = q),
        (this.state = H);
      var rt = new Oe.WebGLShadowMap(this, z, Y);
      this.shadowMap = rt;
      var nt,
        at = new Oe.SpritePlugin(this, m),
        ot = new Oe.LensFlarePlugin(this, v);
      function st(t) {
        t.preventDefault(), it(), et(), q.clear();
      }
      function ht(t) {
        var e = t.target;
        e.removeEventListener("dispose", ht),
          (function(t) {
            var e = q.get(t);
            if (t.image && e.__image__webglTextureCube)
              R.deleteTexture(e.__image__webglTextureCube);
            else {
              if (void 0 === e.__webglInit) return;
              R.deleteTexture(e.__webglTexture);
            }
            q.delete(t);
          })(e),
          k.textures--;
      }
      function lt(t) {
        var e = t.target;
        e.removeEventListener("dispose", lt),
          (function(t) {
            var e = q.get(t),
              i = q.get(t.texture);
            if (!t || void 0 === i.__webglTexture) return;
            if (
              (R.deleteTexture(i.__webglTexture),
              t instanceof Oe.WebGLRenderTargetCube)
            )
              for (var r = 0; r < 6; r++)
                R.deleteFramebuffer(e.__webglFramebuffer[r]),
                  R.deleteRenderbuffer(e.__webglDepthbuffer[r]);
            else
              R.deleteFramebuffer(e.__webglFramebuffer),
                R.deleteRenderbuffer(e.__webglDepthbuffer);
            q.delete(t.texture), q.delete(t);
          })(e),
          k.textures--;
      }
      function ut(t) {
        var e,
          i = t.target;
        i.removeEventListener("dispose", ut), ct((e = i)), q.delete(e);
      }
      function ct(t) {
        var e = q.get(t).program;
        (t.program = void 0) !== e && Z.releaseProgram(e);
      }
      function pt(t, e) {
        return Math.abs(e[0]) - Math.abs(t[0]);
      }
      function dt(t, e) {
        return t.object.renderOrder !== e.object.renderOrder
          ? t.object.renderOrder - e.object.renderOrder
          : t.material.id !== e.material.id
          ? t.material.id - e.material.id
          : t.z !== e.z
          ? t.z - e.z
          : t.id - e.id;
      }
      function ft(t, e) {
        return t.object.renderOrder !== e.object.renderOrder
          ? t.object.renderOrder - e.object.renderOrder
          : t.z !== e.z
          ? e.z - t.z
          : t.id - e.id;
      }
      function mt(t, e, i, r, n) {
        var a, o;
        o = i.transparent ? ((a = d), ++f) : ((a = u), ++c);
        var s = a[o];
        void 0 !== s
          ? ((s.id = t.id),
            (s.object = t),
            (s.geometry = e),
            (s.material = i),
            (s.z = V.z),
            (s.group = n))
          : ((s = {
              id: t.id,
              object: t,
              geometry: e,
              material: i,
              z: V.z,
              group: n
            }),
            a.push(s));
      }
      function vt(t, e, i, r) {
        for (var n = 0, a = t.length; n < a; n++) {
          var o = t[n],
            s = o.object,
            h = o.geometry,
            l = void 0 === r ? o.material : r,
            u = o.group;
          if (
            (s.modelViewMatrix.multiplyMatrices(
              e.matrixWorldInverse,
              s.matrixWorld
            ),
            s.normalMatrix.getNormalMatrix(s.modelViewMatrix),
            s instanceof Oe.ImmediateRenderObject)
          ) {
            gt(l);
            var c = yt(e, i, l, s);
            (C = ""),
              s.render(function(t) {
                b.renderBufferImmediate(t, c, l);
              });
          } else b.renderBufferDirect(e, i, h, l, s, u);
        }
      }
      function gt(t) {
        var e;
        (e = t).side !== Oe.DoubleSide
          ? H.enable(R.CULL_FACE)
          : H.disable(R.CULL_FACE),
          H.setFlipSided(e.side === Oe.BackSide),
          !0 === t.transparent
            ? H.setBlending(
                t.blending,
                t.blendEquation,
                t.blendSrc,
                t.blendDst,
                t.blendEquationAlpha,
                t.blendSrcAlpha,
                t.blendDstAlpha,
                t.premultipliedAlpha
              )
            : H.setBlending(Oe.NoBlending),
          H.setDepthFunc(t.depthFunc),
          H.setDepthTest(t.depthTest),
          H.setDepthWrite(t.depthWrite),
          H.setColorWrite(t.colorWrite),
          H.setPolygonOffset(
            t.polygonOffset,
            t.polygonOffsetFactor,
            t.polygonOffsetUnits
          );
      }
      function yt(t, e, i, r) {
        E = 0;
        var n = q.get(i);
        void 0 === n.program && (i.needsUpdate = !0),
          void 0 !== n.lightsHash &&
            n.lightsHash !== z.hash &&
            (i.needsUpdate = !0),
          i.needsUpdate &&
            ((function(t, e, i) {
              var r = q.get(t),
                n = Z.getParameters(t, z, e, i),
                a = Z.getProgramCode(t, n),
                o = r.program,
                s = !0;
              if (void 0 === o) t.addEventListener("dispose", ut);
              else if (o.code !== a) ct(t);
              else {
                if (void 0 !== n.shaderID) return;
                s = !1;
              }
              if (s) {
                if (n.shaderID) {
                  var h = Oe.ShaderLib[n.shaderID];
                  r.__webglShader = {
                    name: t.type,
                    uniforms: Oe.UniformsUtils.clone(h.uniforms),
                    vertexShader: h.vertexShader,
                    fragmentShader: h.fragmentShader
                  };
                } else
                  r.__webglShader = {
                    name: t.type,
                    uniforms: t.uniforms,
                    vertexShader: t.vertexShader,
                    fragmentShader: t.fragmentShader
                  };
                (t.__webglShader = r.__webglShader),
                  (o = Z.acquireProgram(t, n, a)),
                  (r.program = o),
                  (t.program = o);
              }
              var l = o.getAttributes();
              if (t.morphTargets)
                for (
                  var u = (t.numSupportedMorphTargets = 0);
                  u < b.maxMorphTargets;
                  u++
                )
                  0 <= l["morphTarget" + u] && t.numSupportedMorphTargets++;
              if (t.morphNormals)
                for (
                  u = t.numSupportedMorphNormals = 0;
                  u < b.maxMorphNormals;
                  u++
                )
                  0 <= l["morphNormal" + u] && t.numSupportedMorphNormals++;
              r.uniformsList = [];
              var c = r.__webglShader.uniforms,
                p = r.program.getUniforms();
              for (var d in c) {
                var f = p[d];
                f && r.uniformsList.push([r.__webglShader.uniforms[d], f]);
              }
              (t instanceof Oe.MeshPhongMaterial ||
                t instanceof Oe.MeshLambertMaterial ||
                t instanceof Oe.MeshStandardMaterial ||
                t.lights) &&
                ((r.lightsHash = z.hash),
                (c.ambientLightColor.value = z.ambient),
                (c.directionalLights.value = z.directional),
                (c.spotLights.value = z.spot),
                (c.pointLights.value = z.point),
                (c.hemisphereLights.value = z.hemi),
                (c.directionalShadowMap.value = z.directionalShadowMap),
                (c.directionalShadowMatrix.value = z.directionalShadowMatrix),
                (c.spotShadowMap.value = z.spotShadowMap),
                (c.spotShadowMatrix.value = z.spotShadowMatrix),
                (c.pointShadowMap.value = z.pointShadowMap),
                (c.pointShadowMatrix.value = z.pointShadowMatrix)),
                (r.hasDynamicUniforms = !1);
              for (var m = 0, v = r.uniformsList.length; m < v; m++) {
                if (!0 === r.uniformsList[m][0].dynamic) {
                  r.hasDynamicUniforms = !0;
                  break;
                }
              }
            })(i, e, r),
            (i.needsUpdate = !1));
        var a,
          o,
          s,
          h,
          l,
          u,
          c,
          p,
          d = !1,
          f = !1,
          m = !1,
          v = n.program,
          g = v.getUniforms(),
          y = n.__webglShader.uniforms;
        if (
          (v.id !== _ &&
            (R.useProgram(v.program), (_ = v.id), (m = f = d = !0)),
          i.id !== S && ((S = i.id), (f = !0)),
          (!d && t === w) ||
            (R.uniformMatrix4fv(
              g.projectionMatrix,
              !1,
              t.projectionMatrix.elements
            ),
            X.logarithmicDepthBuffer &&
              R.uniform1f(
                g.logDepthBufFC,
                2 / (Math.log(t.far + 1) / Math.LN2)
              ),
            t !== w && ((w = t), (m = f = !0)),
            (i instanceof Oe.ShaderMaterial ||
              i instanceof Oe.MeshPhongMaterial ||
              i instanceof Oe.MeshStandardMaterial ||
              i.envMap) &&
              void 0 !== g.cameraPosition &&
              (V.setFromMatrixPosition(t.matrixWorld),
              R.uniform3f(g.cameraPosition, V.x, V.y, V.z)),
            (i instanceof Oe.MeshPhongMaterial ||
              i instanceof Oe.MeshLambertMaterial ||
              i instanceof Oe.MeshBasicMaterial ||
              i instanceof Oe.MeshStandardMaterial ||
              i instanceof Oe.ShaderMaterial ||
              i.skinning) &&
              void 0 !== g.viewMatrix &&
              R.uniformMatrix4fv(
                g.viewMatrix,
                !1,
                t.matrixWorldInverse.elements
              ),
            void 0 !== g.toneMappingExposure &&
              R.uniform1f(g.toneMappingExposure, b.toneMappingExposure),
            void 0 !== g.toneMappingWhitePoint &&
              R.uniform1f(g.toneMappingWhitePoint, b.toneMappingWhitePoint)),
          i.skinning)
        )
          if (
            (r.bindMatrix &&
              void 0 !== g.bindMatrix &&
              R.uniformMatrix4fv(g.bindMatrix, !1, r.bindMatrix.elements),
            r.bindMatrixInverse &&
              void 0 !== g.bindMatrixInverse &&
              R.uniformMatrix4fv(
                g.bindMatrixInverse,
                !1,
                r.bindMatrixInverse.elements
              ),
            X.floatVertexTextures && r.skeleton && r.skeleton.useVertexTexture)
          ) {
            if (void 0 !== g.boneTexture) {
              var x = Mt();
              R.uniform1i(g.boneTexture, x),
                b.setTexture(r.skeleton.boneTexture, x);
            }
            void 0 !== g.boneTextureWidth &&
              R.uniform1i(g.boneTextureWidth, r.skeleton.boneTextureWidth),
              void 0 !== g.boneTextureHeight &&
                R.uniform1i(g.boneTextureHeight, r.skeleton.boneTextureHeight);
          } else
            r.skeleton &&
              r.skeleton.boneMatrices &&
              void 0 !== g.boneGlobalMatrices &&
              R.uniformMatrix4fv(
                g.boneGlobalMatrices,
                !1,
                r.skeleton.boneMatrices
              );
        return (
          f &&
            ((i instanceof Oe.MeshPhongMaterial ||
              i instanceof Oe.MeshLambertMaterial ||
              i instanceof Oe.MeshStandardMaterial ||
              i.lights) &&
              ((u = m),
              ((l = y).ambientLightColor.needsUpdate = u),
              (l.directionalLights.needsUpdate = u),
              (l.pointLights.needsUpdate = u),
              (l.spotLights.needsUpdate = u),
              (l.hemisphereLights.needsUpdate = u)),
            e &&
              i.fog &&
              ((h = e),
              ((s = y).fogColor.value = h.color),
              h instanceof Oe.Fog
                ? ((s.fogNear.value = h.near), (s.fogFar.value = h.far))
                : h instanceof Oe.FogExp2 && (s.fogDensity.value = h.density)),
            (i instanceof Oe.MeshBasicMaterial ||
              i instanceof Oe.MeshLambertMaterial ||
              i instanceof Oe.MeshPhongMaterial ||
              i instanceof Oe.MeshStandardMaterial) &&
              (function(t, e) {
                (t.opacity.value = e.opacity),
                  (t.diffuse.value = e.color),
                  e.emissive &&
                    t.emissive.value
                      .copy(e.emissive)
                      .multiplyScalar(e.emissiveIntensity);
                (t.map.value = e.map),
                  (t.specularMap.value = e.specularMap),
                  (t.alphaMap.value = e.alphaMap),
                  e.aoMap &&
                    ((t.aoMap.value = e.aoMap),
                    (t.aoMapIntensity.value = e.aoMapIntensity));
                var i;
                e.map
                  ? (i = e.map)
                  : e.specularMap
                  ? (i = e.specularMap)
                  : e.displacementMap
                  ? (i = e.displacementMap)
                  : e.normalMap
                  ? (i = e.normalMap)
                  : e.bumpMap
                  ? (i = e.bumpMap)
                  : e.roughnessMap
                  ? (i = e.roughnessMap)
                  : e.metalnessMap
                  ? (i = e.metalnessMap)
                  : e.alphaMap
                  ? (i = e.alphaMap)
                  : e.emissiveMap && (i = e.emissiveMap);
                if (void 0 !== i) {
                  i instanceof Oe.WebGLRenderTarget && (i = i.texture);
                  var r = i.offset,
                    n = i.repeat;
                  t.offsetRepeat.value.set(r.x, r.y, n.x, n.y);
                }
                (t.envMap.value = e.envMap),
                  (t.flipEnvMap.value =
                    e.envMap instanceof Oe.WebGLRenderTargetCube ? 1 : -1),
                  (t.reflectivity.value = e.reflectivity),
                  (t.refractionRatio.value = e.refractionRatio);
              })(y, i),
            i instanceof Oe.LineBasicMaterial
              ? xt(y, i)
              : i instanceof Oe.LineDashedMaterial
              ? (xt(y, i),
                (o = i),
                ((a = y).dashSize.value = o.dashSize),
                (a.totalSize.value = o.dashSize + o.gapSize),
                (a.scale.value = o.scale))
              : i instanceof Oe.PointsMaterial
              ? (function(t, e) {
                  if (
                    ((t.diffuse.value = e.color),
                    (t.opacity.value = e.opacity),
                    (t.size.value = e.size * F),
                    (t.scale.value = M.clientHeight / 2),
                    (t.map.value = e.map),
                    null !== e.map)
                  ) {
                    var i = e.map.offset,
                      r = e.map.repeat;
                    t.offsetRepeat.value.set(i.x, i.y, r.x, r.y);
                  }
                })(y, i)
              : i instanceof Oe.MeshLambertMaterial
              ? (function(t, e) {
                  e.lightMap &&
                    ((t.lightMap.value = e.lightMap),
                    (t.lightMapIntensity.value = e.lightMapIntensity));
                  e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                })(y, i)
              : i instanceof Oe.MeshPhongMaterial
              ? (function(t, e) {
                  (t.specular.value = e.specular),
                    (t.shininess.value = Math.max(e.shininess, 1e-4)),
                    e.lightMap &&
                      ((t.lightMap.value = e.lightMap),
                      (t.lightMapIntensity.value = e.lightMapIntensity));
                  e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                  e.bumpMap &&
                    ((t.bumpMap.value = e.bumpMap),
                    (t.bumpScale.value = e.bumpScale));
                  e.normalMap &&
                    ((t.normalMap.value = e.normalMap),
                    t.normalScale.value.copy(e.normalScale));
                  e.displacementMap &&
                    ((t.displacementMap.value = e.displacementMap),
                    (t.displacementScale.value = e.displacementScale),
                    (t.displacementBias.value = e.displacementBias));
                })(y, i)
              : i instanceof Oe.MeshStandardMaterial
              ? (function(t, e) {
                  (t.roughness.value = e.roughness),
                    (t.metalness.value = e.metalness),
                    e.roughnessMap && (t.roughnessMap.value = e.roughnessMap);
                  e.metalnessMap && (t.metalnessMap.value = e.metalnessMap);
                  e.lightMap &&
                    ((t.lightMap.value = e.lightMap),
                    (t.lightMapIntensity.value = e.lightMapIntensity));
                  e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                  e.bumpMap &&
                    ((t.bumpMap.value = e.bumpMap),
                    (t.bumpScale.value = e.bumpScale));
                  e.normalMap &&
                    ((t.normalMap.value = e.normalMap),
                    t.normalScale.value.copy(e.normalScale));
                  e.displacementMap &&
                    ((t.displacementMap.value = e.displacementMap),
                    (t.displacementScale.value = e.displacementScale),
                    (t.displacementBias.value = e.displacementBias));
                  e.envMap && (t.envMapIntensity.value = e.envMapIntensity);
                })(y, i)
              : i instanceof Oe.MeshDepthMaterial
              ? ((y.mNear.value = t.near),
                (y.mFar.value = t.far),
                (y.opacity.value = i.opacity))
              : i instanceof Oe.MeshNormalMaterial &&
                (y.opacity.value = i.opacity),
            _t(n.uniformsList)),
          (c = g),
          (p = r),
          R.uniformMatrix4fv(c.modelViewMatrix, !1, p.modelViewMatrix.elements),
          c.normalMatrix &&
            R.uniformMatrix3fv(c.normalMatrix, !1, p.normalMatrix.elements),
          void 0 !== g.modelMatrix &&
            R.uniformMatrix4fv(g.modelMatrix, !1, r.matrixWorld.elements),
          !0 === n.hasDynamicUniforms &&
            (function(t, e, i) {
              for (var r = [], n = 0, a = t.length; n < a; n++) {
                var o = t[n][0],
                  s = o.onUpdateCallback;
                void 0 !== s && (s.bind(o)(e, i), r.push(t[n]));
              }
              _t(r);
            })(n.uniformsList, r, t),
          v
        );
      }
      function xt(t, e) {
        (t.diffuse.value = e.color), (t.opacity.value = e.opacity);
      }
      function Mt() {
        var t = E;
        return (E += 1), t;
      }
      function bt(t, e, i, r) {
        var n, a;
        if ("1i" === e) R.uniform1i(i, r);
        else if ("1f" === e) R.uniform1f(i, r);
        else if ("2f" === e) R.uniform2f(i, r[0], r[1]);
        else if ("3f" === e) R.uniform3f(i, r[0], r[1], r[2]);
        else if ("4f" === e) R.uniform4f(i, r[0], r[1], r[2], r[3]);
        else if ("1iv" === e) R.uniform1iv(i, r);
        else if ("3iv" === e) R.uniform3iv(i, r);
        else if ("1fv" === e) R.uniform1fv(i, r);
        else if ("2fv" === e) R.uniform2fv(i, r);
        else if ("3fv" === e) R.uniform3fv(i, r);
        else if ("4fv" === e) R.uniform4fv(i, r);
        else if ("Matrix2fv" === e) R.uniformMatrix2fv(i, !1, r);
        else if ("Matrix3fv" === e) R.uniformMatrix3fv(i, !1, r);
        else if ("Matrix4fv" === e) R.uniformMatrix4fv(i, !1, r);
        else if ("i" === e) R.uniform1i(i, r);
        else if ("f" === e) R.uniform1f(i, r);
        else if ("v2" === e) R.uniform2f(i, r.x, r.y);
        else if ("v3" === e) R.uniform3f(i, r.x, r.y, r.z);
        else if ("v4" === e) R.uniform4f(i, r.x, r.y, r.z, r.w);
        else if ("c" === e) R.uniform3f(i, r.r, r.g, r.b);
        else if ("s" === e) {
          var o = t.properties;
          for (var s in o) {
            var h = o[s],
              l = i[s],
              u = r[s];
            bt(h, h.type, l, u);
          }
        } else if ("sa" === e) {
          o = t.properties;
          for (var c = 0, p = r.length; c < p; c++)
            for (var s in o) {
              (h = o[s]), (l = i[c][s]), (u = r[c][s]);
              bt(h, h.type, l, u);
            }
        } else if ("iv1" === e) R.uniform1iv(i, r);
        else if ("iv" === e) R.uniform3iv(i, r);
        else if ("fv1" === e) R.uniform1fv(i, r);
        else if ("fv" === e) R.uniform3fv(i, r);
        else if ("v2v" === e) {
          void 0 === t._array && (t._array = new Float32Array(2 * r.length));
          c = 0;
          for (var d = 0, f = r.length; c < f; c++, d += 2)
            (t._array[d + 0] = r[c].x), (t._array[d + 1] = r[c].y);
          R.uniform2fv(i, t._array);
        } else if ("v3v" === e) {
          void 0 === t._array && (t._array = new Float32Array(3 * r.length));
          c = 0;
          var m = 0;
          for (f = r.length; c < f; c++, m += 3)
            (t._array[m + 0] = r[c].x),
              (t._array[m + 1] = r[c].y),
              (t._array[m + 2] = r[c].z);
          R.uniform3fv(i, t._array);
        } else if ("v4v" === e) {
          void 0 === t._array && (t._array = new Float32Array(4 * r.length));
          c = 0;
          var v = 0;
          for (f = r.length; c < f; c++, v += 4)
            (t._array[v + 0] = r[c].x),
              (t._array[v + 1] = r[c].y),
              (t._array[v + 2] = r[c].z),
              (t._array[v + 3] = r[c].w);
          R.uniform4fv(i, t._array);
        } else if ("m2" === e) R.uniformMatrix2fv(i, !1, r.elements);
        else if ("m3" === e) R.uniformMatrix3fv(i, !1, r.elements);
        else if ("m3v" === e) {
          void 0 === t._array && (t._array = new Float32Array(9 * r.length));
          for (c = 0, f = r.length; c < f; c++)
            r[c].flattenToArrayOffset(t._array, 9 * c);
          R.uniformMatrix3fv(i, !1, t._array);
        } else if ("m4" === e) R.uniformMatrix4fv(i, !1, r.elements);
        else if ("m4v" === e) {
          void 0 === t._array && (t._array = new Float32Array(16 * r.length));
          for (c = 0, f = r.length; c < f; c++)
            r[c].flattenToArrayOffset(t._array, 16 * c);
          R.uniformMatrix4fv(i, !1, t._array);
        } else if ("t" === e) {
          if (((n = r), (a = Mt()), R.uniform1i(i, a), !n)) return;
          n instanceof Oe.CubeTexture ||
          (Array.isArray(n.image) && 6 === n.image.length)
            ? At(n, a)
            : n instanceof Oe.WebGLRenderTargetCube
            ? Lt(n.texture, a)
            : n instanceof Oe.WebGLRenderTarget
            ? b.setTexture(n.texture, a)
            : b.setTexture(n, a);
        } else if ("tv" === e) {
          void 0 === t._array && (t._array = []);
          for (c = 0, f = t.value.length; c < f; c++) t._array[c] = Mt();
          R.uniform1iv(i, t._array);
          for (c = 0, f = t.value.length; c < f; c++)
            (n = t.value[c]),
              (a = t._array[c]),
              n &&
                (n instanceof Oe.CubeTexture ||
                (n.image instanceof Array && 6 === n.image.length)
                  ? At(n, a)
                  : n instanceof Oe.WebGLRenderTarget
                  ? b.setTexture(n.texture, a)
                  : n instanceof Oe.WebGLRenderTargetCube
                  ? Lt(n.texture, a)
                  : b.setTexture(n, a));
        }
      }
      function _t(t) {
        for (var e = 0, i = t.length; e < i; e++) {
          var r = t[e][0];
          if (!1 !== r.needsUpdate) bt(r, r.type, t[e][1], r.value);
        }
      }
      function St(t, e, i) {
        var r;
        if (
          (i
            ? (R.texParameteri(t, R.TEXTURE_WRAP_S, Ft(e.wrapS)),
              R.texParameteri(t, R.TEXTURE_WRAP_T, Ft(e.wrapT)),
              R.texParameteri(t, R.TEXTURE_MAG_FILTER, Ft(e.magFilter)),
              R.texParameteri(t, R.TEXTURE_MIN_FILTER, Ft(e.minFilter)))
            : (R.texParameteri(t, R.TEXTURE_WRAP_S, R.CLAMP_TO_EDGE),
              R.texParameteri(t, R.TEXTURE_WRAP_T, R.CLAMP_TO_EDGE),
              e.wrapS !== Oe.ClampToEdgeWrapping ||
                (e.wrapT, Oe.ClampToEdgeWrapping),
              R.texParameteri(t, R.TEXTURE_MAG_FILTER, Pt(e.magFilter)),
              R.texParameteri(t, R.TEXTURE_MIN_FILTER, Pt(e.minFilter)),
              e.minFilter !== Oe.NearestFilter &&
                (e.minFilter, Oe.LinearFilter)),
          (r = j.get("EXT_texture_filter_anisotropic")))
        ) {
          if (
            e.type === Oe.FloatType &&
            null === j.get("OES_texture_float_linear")
          )
            return;
          if (
            e.type === Oe.HalfFloatType &&
            null === j.get("OES_texture_half_float_linear")
          )
            return;
          (1 < e.anisotropy || q.get(e).__currentAnisotropy) &&
            (R.texParameterf(
              t,
              r.TEXTURE_MAX_ANISOTROPY_EXT,
              Math.min(e.anisotropy, b.getMaxAnisotropy())
            ),
            (q.get(e).__currentAnisotropy = e.anisotropy));
        }
      }
      function wt(t, e, i) {
        void 0 === t.__webglInit &&
          ((t.__webglInit = !0),
          e.addEventListener("dispose", ht),
          (t.__webglTexture = R.createTexture()),
          k.textures++),
          H.activeTexture(R.TEXTURE0 + i),
          H.bindTexture(R.TEXTURE_2D, t.__webglTexture),
          R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, e.flipY),
          R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha),
          R.pixelStorei(R.UNPACK_ALIGNMENT, e.unpackAlignment);
        var r,
          n = Et(e.image, X.maxTextureSize);
        ((r = e).wrapS !== Oe.ClampToEdgeWrapping ||
          r.wrapT !== Oe.ClampToEdgeWrapping ||
          (r.minFilter !== Oe.NearestFilter &&
            r.minFilter !== Oe.LinearFilter)) &&
          !1 === Tt(n) &&
          (n = (function(t) {
            if (
              t instanceof HTMLImageElement ||
              t instanceof HTMLCanvasElement
            ) {
              var e = document.createElement("canvas");
              return (
                (e.width = Oe.Math.nearestPowerOfTwo(t.width)),
                (e.height = Oe.Math.nearestPowerOfTwo(t.height)),
                e.getContext("2d").drawImage(t, 0, 0, e.width, e.height),
                e
              );
            }
            return t;
          })(n));
        var a = Tt(n),
          o = Ft(e.format),
          s = Ft(e.type);
        St(R.TEXTURE_2D, e, a);
        var h,
          l = e.mipmaps;
        if (e instanceof Oe.DataTexture)
          if (0 < l.length && a) {
            for (var u = 0, c = l.length; u < c; u++)
              (h = l[u]),
                H.texImage2D(
                  R.TEXTURE_2D,
                  u,
                  o,
                  h.width,
                  h.height,
                  0,
                  o,
                  s,
                  h.data
                );
            e.generateMipmaps = !1;
          } else
            H.texImage2D(
              R.TEXTURE_2D,
              0,
              o,
              n.width,
              n.height,
              0,
              o,
              s,
              n.data
            );
        else if (e instanceof Oe.CompressedTexture)
          for (u = 0, c = l.length; u < c; u++)
            (h = l[u]),
              e.format !== Oe.RGBAFormat && e.format !== Oe.RGBFormat
                ? -1 < H.getCompressedTextureFormats().indexOf(o) &&
                  H.compressedTexImage2D(
                    R.TEXTURE_2D,
                    u,
                    o,
                    h.width,
                    h.height,
                    0,
                    h.data
                  )
                : H.texImage2D(
                    R.TEXTURE_2D,
                    u,
                    o,
                    h.width,
                    h.height,
                    0,
                    o,
                    s,
                    h.data
                  );
        else if (0 < l.length && a) {
          for (u = 0, c = l.length; u < c; u++)
            (h = l[u]), H.texImage2D(R.TEXTURE_2D, u, o, o, s, h);
          e.generateMipmaps = !1;
        } else H.texImage2D(R.TEXTURE_2D, 0, o, o, s, n);
        e.generateMipmaps && a && R.generateMipmap(R.TEXTURE_2D),
          (t.__version = e.version),
          e.onUpdate && e.onUpdate(e);
      }
      function Et(t, e) {
        if (t.width > e || t.height > e) {
          var i = e / Math.max(t.width, t.height),
            r = document.createElement("canvas");
          return (
            (r.width = Math.floor(t.width * i)),
            (r.height = Math.floor(t.height * i)),
            r
              .getContext("2d")
              .drawImage(t, 0, 0, t.width, t.height, 0, 0, r.width, r.height),
            r
          );
        }
        return t;
      }
      function Tt(t) {
        return Oe.Math.isPowerOfTwo(t.width) && Oe.Math.isPowerOfTwo(t.height);
      }
      function At(t, e) {
        var i = q.get(t);
        if (6 === t.image.length)
          if (0 < t.version && i.__version !== t.version) {
            i.__image__webglTextureCube ||
              (t.addEventListener("dispose", ht),
              (i.__image__webglTextureCube = R.createTexture()),
              k.textures++),
              H.activeTexture(R.TEXTURE0 + e),
              H.bindTexture(R.TEXTURE_CUBE_MAP, i.__image__webglTextureCube),
              R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, t.flipY);
            for (
              var r = t instanceof Oe.CompressedTexture,
                n = t.image[0] instanceof Oe.DataTexture,
                a = [],
                o = 0;
              o < 6;
              o++
            )
              !b.autoScaleCubemaps || r || n
                ? (a[o] = n ? t.image[o].image : t.image[o])
                : (a[o] = Et(t.image[o], X.maxCubemapSize));
            var s = Tt(a[0]),
              h = Ft(t.format),
              l = Ft(t.type);
            St(R.TEXTURE_CUBE_MAP, t, s);
            for (o = 0; o < 6; o++)
              if (r)
                for (var u, c = a[o].mipmaps, p = 0, d = c.length; p < d; p++)
                  (u = c[p]),
                    t.format !== Oe.RGBAFormat && t.format !== Oe.RGBFormat
                      ? -1 < H.getCompressedTextureFormats().indexOf(h) &&
                        H.compressedTexImage2D(
                          R.TEXTURE_CUBE_MAP_POSITIVE_X + o,
                          p,
                          h,
                          u.width,
                          u.height,
                          0,
                          u.data
                        )
                      : H.texImage2D(
                          R.TEXTURE_CUBE_MAP_POSITIVE_X + o,
                          p,
                          h,
                          u.width,
                          u.height,
                          0,
                          h,
                          l,
                          u.data
                        );
              else
                n
                  ? H.texImage2D(
                      R.TEXTURE_CUBE_MAP_POSITIVE_X + o,
                      0,
                      h,
                      a[o].width,
                      a[o].height,
                      0,
                      h,
                      l,
                      a[o].data
                    )
                  : H.texImage2D(
                      R.TEXTURE_CUBE_MAP_POSITIVE_X + o,
                      0,
                      h,
                      h,
                      l,
                      a[o]
                    );
            t.generateMipmaps && s && R.generateMipmap(R.TEXTURE_CUBE_MAP),
              (i.__version = t.version),
              t.onUpdate && t.onUpdate(t);
          } else
            H.activeTexture(R.TEXTURE0 + e),
              H.bindTexture(R.TEXTURE_CUBE_MAP, i.__image__webglTextureCube);
      }
      function Lt(t, e) {
        H.activeTexture(R.TEXTURE0 + e),
          H.bindTexture(R.TEXTURE_CUBE_MAP, q.get(t).__webglTexture);
      }
      function Rt(t, e, i, r) {
        var n = Ft(e.texture.format),
          a = Ft(e.texture.type);
        H.texImage2D(r, 0, n, e.width, e.height, 0, n, a, null),
          R.bindFramebuffer(R.FRAMEBUFFER, t),
          R.framebufferTexture2D(
            R.FRAMEBUFFER,
            i,
            r,
            q.get(e.texture).__webglTexture,
            0
          ),
          R.bindFramebuffer(R.FRAMEBUFFER, null);
      }
      function Ct(t, e) {
        R.bindRenderbuffer(R.RENDERBUFFER, t),
          e.depthBuffer && !e.stencilBuffer
            ? (R.renderbufferStorage(
                R.RENDERBUFFER,
                R.DEPTH_COMPONENT16,
                e.width,
                e.height
              ),
              R.framebufferRenderbuffer(
                R.FRAMEBUFFER,
                R.DEPTH_ATTACHMENT,
                R.RENDERBUFFER,
                t
              ))
            : e.depthBuffer && e.stencilBuffer
            ? (R.renderbufferStorage(
                R.RENDERBUFFER,
                R.DEPTH_STENCIL,
                e.width,
                e.height
              ),
              R.framebufferRenderbuffer(
                R.FRAMEBUFFER,
                R.DEPTH_STENCIL_ATTACHMENT,
                R.RENDERBUFFER,
                t
              ))
            : R.renderbufferStorage(R.RENDERBUFFER, R.RGBA4, e.width, e.height),
          R.bindRenderbuffer(R.RENDERBUFFER, null);
      }
      function Ut(t) {
        var e = q.get(t),
          i = q.get(t.texture);
        t.addEventListener("dispose", lt),
          (i.__webglTexture = R.createTexture()),
          k.textures++;
        var r = t instanceof Oe.WebGLRenderTargetCube,
          n = Oe.Math.isPowerOfTwo(t.width) && Oe.Math.isPowerOfTwo(t.height);
        if (r) {
          e.__webglFramebuffer = [];
          for (var a = 0; a < 6; a++)
            e.__webglFramebuffer[a] = R.createFramebuffer();
        } else e.__webglFramebuffer = R.createFramebuffer();
        if (r) {
          H.bindTexture(R.TEXTURE_CUBE_MAP, i.__webglTexture),
            St(R.TEXTURE_CUBE_MAP, t.texture, n);
          for (a = 0; a < 6; a++)
            Rt(
              e.__webglFramebuffer[a],
              t,
              R.COLOR_ATTACHMENT0,
              R.TEXTURE_CUBE_MAP_POSITIVE_X + a
            );
          t.texture.generateMipmaps &&
            n &&
            R.generateMipmap(R.TEXTURE_CUBE_MAP),
            H.bindTexture(R.TEXTURE_CUBE_MAP, null);
        } else
          H.bindTexture(R.TEXTURE_2D, i.__webglTexture),
            St(R.TEXTURE_2D, t.texture, n),
            Rt(e.__webglFramebuffer, t, R.COLOR_ATTACHMENT0, R.TEXTURE_2D),
            t.texture.generateMipmaps && n && R.generateMipmap(R.TEXTURE_2D),
            H.bindTexture(R.TEXTURE_2D, null);
        t.depthBuffer &&
          (function(t) {
            var e = q.get(t);
            if (t instanceof Oe.WebGLRenderTargetCube) {
              e.__webglDepthbuffer = [];
              for (var i = 0; i < 6; i++)
                R.bindFramebuffer(R.FRAMEBUFFER, e.__webglFramebuffer[i]),
                  (e.__webglDepthbuffer[i] = R.createRenderbuffer()),
                  Ct(e.__webglDepthbuffer[i], t);
            } else
              R.bindFramebuffer(R.FRAMEBUFFER, e.__webglFramebuffer),
                (e.__webglDepthbuffer = R.createRenderbuffer()),
                Ct(e.__webglDepthbuffer, t);
            R.bindFramebuffer(R.FRAMEBUFFER, null);
          })(t);
      }
      function Pt(t) {
        return t === Oe.NearestFilter ||
          t === Oe.NearestMipMapNearestFilter ||
          t === Oe.NearestMipMapLinearFilter
          ? R.NEAREST
          : R.LINEAR;
      }
      function Ft(t) {
        var e;
        if (t === Oe.RepeatWrapping) return R.REPEAT;
        if (t === Oe.ClampToEdgeWrapping) return R.CLAMP_TO_EDGE;
        if (t === Oe.MirroredRepeatWrapping) return R.MIRRORED_REPEAT;
        if (t === Oe.NearestFilter) return R.NEAREST;
        if (t === Oe.NearestMipMapNearestFilter)
          return R.NEAREST_MIPMAP_NEAREST;
        if (t === Oe.NearestMipMapLinearFilter) return R.NEAREST_MIPMAP_LINEAR;
        if (t === Oe.LinearFilter) return R.LINEAR;
        if (t === Oe.LinearMipMapNearestFilter) return R.LINEAR_MIPMAP_NEAREST;
        if (t === Oe.LinearMipMapLinearFilter) return R.LINEAR_MIPMAP_LINEAR;
        if (t === Oe.UnsignedByteType) return R.UNSIGNED_BYTE;
        if (t === Oe.UnsignedShort4444Type) return R.UNSIGNED_SHORT_4_4_4_4;
        if (t === Oe.UnsignedShort5551Type) return R.UNSIGNED_SHORT_5_5_5_1;
        if (t === Oe.UnsignedShort565Type) return R.UNSIGNED_SHORT_5_6_5;
        if (t === Oe.ByteType) return R.BYTE;
        if (t === Oe.ShortType) return R.SHORT;
        if (t === Oe.UnsignedShortType) return R.UNSIGNED_SHORT;
        if (t === Oe.IntType) return R.INT;
        if (t === Oe.UnsignedIntType) return R.UNSIGNED_INT;
        if (t === Oe.FloatType) return R.FLOAT;
        if (
          null !== (e = j.get("OES_texture_half_float")) &&
          t === Oe.HalfFloatType
        )
          return e.HALF_FLOAT_OES;
        if (t === Oe.AlphaFormat) return R.ALPHA;
        if (t === Oe.RGBFormat) return R.RGB;
        if (t === Oe.RGBAFormat) return R.RGBA;
        if (t === Oe.LuminanceFormat) return R.LUMINANCE;
        if (t === Oe.LuminanceAlphaFormat) return R.LUMINANCE_ALPHA;
        if (t === Oe.AddEquation) return R.FUNC_ADD;
        if (t === Oe.SubtractEquation) return R.FUNC_SUBTRACT;
        if (t === Oe.ReverseSubtractEquation) return R.FUNC_REVERSE_SUBTRACT;
        if (t === Oe.ZeroFactor) return R.ZERO;
        if (t === Oe.OneFactor) return R.ONE;
        if (t === Oe.SrcColorFactor) return R.SRC_COLOR;
        if (t === Oe.OneMinusSrcColorFactor) return R.ONE_MINUS_SRC_COLOR;
        if (t === Oe.SrcAlphaFactor) return R.SRC_ALPHA;
        if (t === Oe.OneMinusSrcAlphaFactor) return R.ONE_MINUS_SRC_ALPHA;
        if (t === Oe.DstAlphaFactor) return R.DST_ALPHA;
        if (t === Oe.OneMinusDstAlphaFactor) return R.ONE_MINUS_DST_ALPHA;
        if (t === Oe.DstColorFactor) return R.DST_COLOR;
        if (t === Oe.OneMinusDstColorFactor) return R.ONE_MINUS_DST_COLOR;
        if (t === Oe.SrcAlphaSaturateFactor) return R.SRC_ALPHA_SATURATE;
        if (null !== (e = j.get("WEBGL_compressed_texture_s3tc"))) {
          if (t === Oe.RGB_S3TC_DXT1_Format)
            return e.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (t === Oe.RGBA_S3TC_DXT1_Format)
            return e.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (t === Oe.RGBA_S3TC_DXT3_Format)
            return e.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (t === Oe.RGBA_S3TC_DXT5_Format)
            return e.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
        if (null !== (e = j.get("WEBGL_compressed_texture_pvrtc"))) {
          if (t === Oe.RGB_PVRTC_4BPPV1_Format)
            return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (t === Oe.RGB_PVRTC_2BPPV1_Format)
            return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (t === Oe.RGBA_PVRTC_4BPPV1_Format)
            return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (t === Oe.RGBA_PVRTC_2BPPV1_Format)
            return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
        if (
          null !== (e = j.get("WEBGL_compressed_texture_etc1")) &&
          t === Oe.RGB_ETC1_Format
        )
          return e.COMPRESSED_RGB_ETC1_WEBGL;
        if (null !== (e = j.get("EXT_blend_minmax"))) {
          if (t === Oe.MinEquation) return e.MIN_EXT;
          if (t === Oe.MaxEquation) return e.MAX_EXT;
        }
        return 0;
      }
      (this.getContext = function() {
        return R;
      }),
        (this.getContextAttributes = function() {
          return R.getContextAttributes();
        }),
        (this.forceContextLoss = function() {
          j.get("WEBGL_lose_context").loseContext();
        }),
        (this.getMaxAnisotropy = function() {
          if (void 0 !== nt) return nt;
          var t = j.get("EXT_texture_filter_anisotropic");
          return (nt =
            null !== t ? R.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0);
        }),
        (this.getPrecision = function() {
          return X.precision;
        }),
        (this.getPixelRatio = function() {
          return F;
        }),
        (this.setPixelRatio = function(t) {
          void 0 !== t && ((F = t), this.setSize(B.z, B.w, !1));
        }),
        (this.getSize = function() {
          return { width: U, height: P };
        }),
        (this.setSize = function(t, e, i) {
          (U = t),
            (P = e),
            (M.width = t * F),
            (M.height = e * F),
            !1 !== i &&
              ((M.style.width = t + "px"), (M.style.height = e + "px")),
            this.setViewport(0, 0, t, e);
        }),
        (this.setViewport = function(t, e, i, r) {
          H.viewport(B.set(t, e, i, r));
        }),
        (this.setScissor = function(t, e, i, r) {
          H.scissor(N.set(t, e, i, r));
        }),
        (this.setScissorTest = function(t) {
          H.setScissorTest((D = t));
        }),
        (this.getClearColor = function() {
          return T;
        }),
        (this.setClearColor = function(t, e) {
          T.set(t), (A = void 0 !== e ? e : 1), tt(T.r, T.g, T.b, A);
        }),
        (this.getClearAlpha = function() {
          return A;
        }),
        (this.setClearAlpha = function(t) {
          (A = t), tt(T.r, T.g, T.b, A);
        }),
        (this.clear = function(t, e, i) {
          var r = 0;
          (void 0 !== t && !t) || (r |= R.COLOR_BUFFER_BIT),
            (void 0 !== e && !e) || (r |= R.DEPTH_BUFFER_BIT),
            (void 0 !== i && !i) || (r |= R.STENCIL_BUFFER_BIT),
            R.clear(r);
        }),
        (this.clearColor = function() {
          this.clear(!0, !1, !1);
        }),
        (this.clearDepth = function() {
          this.clear(!1, !0, !1);
        }),
        (this.clearStencil = function() {
          this.clear(!1, !1, !0);
        }),
        (this.clearTarget = function(t, e, i, r) {
          this.setRenderTarget(t), this.clear(e, i, r);
        }),
        (this.resetGLState = it),
        (this.dispose = function() {
          M.removeEventListener("webglcontextlost", st, !1);
        }),
        (this.renderBufferImmediate = function(t, e, i) {
          H.initAttributes();
          var r = q.get(t);
          t.hasPositions && !r.position && (r.position = R.createBuffer()),
            t.hasNormals && !r.normal && (r.normal = R.createBuffer()),
            t.hasUvs && !r.uv && (r.uv = R.createBuffer()),
            t.hasColors && !r.color && (r.color = R.createBuffer());
          var n = e.getAttributes();
          if (
            (t.hasPositions &&
              (R.bindBuffer(R.ARRAY_BUFFER, r.position),
              R.bufferData(R.ARRAY_BUFFER, t.positionArray, R.DYNAMIC_DRAW),
              H.enableAttribute(n.position),
              R.vertexAttribPointer(n.position, 3, R.FLOAT, !1, 0, 0)),
            t.hasNormals)
          ) {
            if (
              (R.bindBuffer(R.ARRAY_BUFFER, r.normal),
              "MeshPhongMaterial" !== i.type &&
                "MeshStandardMaterial" !== i.type &&
                i.shading === Oe.FlatShading)
            )
              for (var a = 0, o = 3 * t.count; a < o; a += 9) {
                var s = t.normalArray,
                  h = (s[a + 0] + s[a + 3] + s[a + 6]) / 3,
                  l = (s[a + 1] + s[a + 4] + s[a + 7]) / 3,
                  u = (s[a + 2] + s[a + 5] + s[a + 8]) / 3;
                (s[a + 0] = h),
                  (s[a + 1] = l),
                  (s[a + 2] = u),
                  (s[a + 3] = h),
                  (s[a + 4] = l),
                  (s[a + 5] = u),
                  (s[a + 6] = h),
                  (s[a + 7] = l),
                  (s[a + 8] = u);
              }
            R.bufferData(R.ARRAY_BUFFER, t.normalArray, R.DYNAMIC_DRAW),
              H.enableAttribute(n.normal),
              R.vertexAttribPointer(n.normal, 3, R.FLOAT, !1, 0, 0);
          }
          t.hasUvs &&
            i.map &&
            (R.bindBuffer(R.ARRAY_BUFFER, r.uv),
            R.bufferData(R.ARRAY_BUFFER, t.uvArray, R.DYNAMIC_DRAW),
            H.enableAttribute(n.uv),
            R.vertexAttribPointer(n.uv, 2, R.FLOAT, !1, 0, 0)),
            t.hasColors &&
              i.vertexColors !== Oe.NoColors &&
              (R.bindBuffer(R.ARRAY_BUFFER, r.color),
              R.bufferData(R.ARRAY_BUFFER, t.colorArray, R.DYNAMIC_DRAW),
              H.enableAttribute(n.color),
              R.vertexAttribPointer(n.color, 3, R.FLOAT, !1, 0, 0)),
            H.disableUnusedAttributes(),
            R.drawArrays(R.TRIANGLES, 0, t.count),
            (t.count = 0);
        }),
        (this.renderBufferDirect = function(t, e, i, r, n, a) {
          gt(r);
          var o = yt(t, e, r, n),
            s = !1,
            h = i.id + "_" + o.id + "_" + r.wireframe;
          h !== C && ((C = h), (s = !0));
          var l = n.morphTargetInfluences;
          if (void 0 !== l) {
            for (var u = [], c = 0, p = l.length; c < p; c++) {
              var d = l[c];
              u.push([d, c]);
            }
            u.sort(pt), 8 < u.length && (u.length = 8);
            var f = i.morphAttributes;
            for (c = 0, p = u.length; c < p; c++) {
              d = u[c];
              if (((L[c] = d[0]), 0 !== d[0])) {
                var m = d[1];
                !0 === r.morphTargets &&
                  f.position &&
                  i.addAttribute("morphTarget" + c, f.position[m]),
                  !0 === r.morphNormals &&
                    f.normal &&
                    i.addAttribute("morphNormal" + c, f.normal[m]);
              } else
                !0 === r.morphTargets && i.removeAttribute("morphTarget" + c),
                  !0 === r.morphNormals && i.removeAttribute("morphNormal" + c);
            }
            var v = o.getUniforms();
            null !== v.morphTargetInfluences &&
              R.uniform1fv(v.morphTargetInfluences, L),
              (s = !0);
          }
          m = i.index;
          var g,
            y = i.attributes.position;
          !0 === r.wireframe && (m = Y.getWireframeAttribute(i)),
            null !== m ? (g = K).setIndex(m) : (g = J),
            s &&
              ((function(t, e, i, r) {
                var n;
                if (
                  i instanceof Oe.InstancedBufferGeometry &&
                  null === (n = j.get("ANGLE_instanced_arrays"))
                )
                  return;
                void 0 === r && (r = 0);
                H.initAttributes();
                var a = i.attributes,
                  o = e.getAttributes(),
                  s = t.defaultAttributeValues;
                for (var h in o) {
                  var l = o[h];
                  if (0 <= l) {
                    var u = a[h];
                    if (void 0 !== u) {
                      var c = u.itemSize,
                        p = Y.getAttributeBuffer(u);
                      if (u instanceof Oe.InterleavedBufferAttribute) {
                        var d = u.data,
                          f = d.stride,
                          m = u.offset;
                        d instanceof Oe.InstancedInterleavedBuffer
                          ? (H.enableAttributeAndDivisor(
                              l,
                              d.meshPerAttribute,
                              n
                            ),
                            void 0 === i.maxInstancedCount &&
                              (i.maxInstancedCount =
                                d.meshPerAttribute * d.count))
                          : H.enableAttribute(l),
                          R.bindBuffer(R.ARRAY_BUFFER, p),
                          R.vertexAttribPointer(
                            l,
                            c,
                            R.FLOAT,
                            !1,
                            f * d.array.BYTES_PER_ELEMENT,
                            (r * f + m) * d.array.BYTES_PER_ELEMENT
                          );
                      } else
                        u instanceof Oe.InstancedBufferAttribute
                          ? (H.enableAttributeAndDivisor(
                              l,
                              u.meshPerAttribute,
                              n
                            ),
                            void 0 === i.maxInstancedCount &&
                              (i.maxInstancedCount =
                                u.meshPerAttribute * u.count))
                          : H.enableAttribute(l),
                          R.bindBuffer(R.ARRAY_BUFFER, p),
                          R.vertexAttribPointer(
                            l,
                            c,
                            R.FLOAT,
                            !1,
                            0,
                            r * c * 4
                          );
                    } else if (void 0 !== s) {
                      var v = s[h];
                      if (void 0 !== v)
                        switch (v.length) {
                          case 2:
                            R.vertexAttrib2fv(l, v);
                            break;
                          case 3:
                            R.vertexAttrib3fv(l, v);
                            break;
                          case 4:
                            R.vertexAttrib4fv(l, v);
                            break;
                          default:
                            R.vertexAttrib1fv(l, v);
                        }
                    }
                  }
                }
                H.disableUnusedAttributes();
              })(r, o, i),
              null !== m &&
                R.bindBuffer(R.ELEMENT_ARRAY_BUFFER, Y.getAttributeBuffer(m)));
          var x = 1 / 0;
          null !== m ? (x = m.count) : void 0 !== y && (x = y.count);
          var M = i.drawRange.start,
            b = i.drawRange.count,
            _ = null !== a ? a.start : 0,
            S = null !== a ? a.count : 1 / 0,
            w = Math.max(0, M, _),
            E = Math.min(0 + x, M + b, _ + S) - 1,
            T = Math.max(0, E - w + 1);
          if (n instanceof Oe.Mesh)
            if (!0 === r.wireframe)
              H.setLineWidth(r.wireframeLinewidth * $()), g.setMode(R.LINES);
            else
              switch (n.drawMode) {
                case Oe.TrianglesDrawMode:
                  g.setMode(R.TRIANGLES);
                  break;
                case Oe.TriangleStripDrawMode:
                  g.setMode(R.TRIANGLE_STRIP);
                  break;
                case Oe.TriangleFanDrawMode:
                  g.setMode(R.TRIANGLE_FAN);
              }
          else if (n instanceof Oe.Line) {
            var A = r.linewidth;
            void 0 === A && (A = 1),
              H.setLineWidth(A * $()),
              n instanceof Oe.LineSegments
                ? g.setMode(R.LINES)
                : g.setMode(R.LINE_STRIP);
          } else n instanceof Oe.Points && g.setMode(R.POINTS);
          i instanceof Oe.InstancedBufferGeometry
            ? 0 < i.maxInstancedCount && g.renderInstances(i, w, T)
            : g.render(w, T);
        }),
        (this.render = function(t, e, i, r) {
          if (e instanceof Oe.Camera != !1) {
            var n,
              a,
              o,
              s = t.fog;
            if (
              ((C = ""),
              (S = -1),
              !(w = null) === t.autoUpdate && t.updateMatrixWorld(),
              null === e.parent && e.updateMatrixWorld(),
              e.matrixWorldInverse.getInverse(e.matrixWorld),
              O.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
              I.setFromMatrix(O),
              (p.length = 0),
              (f = c = -1),
              (m.length = 0),
              (v.length = 0),
              (function t(e, i) {
                if (!1 === e.visible) return;
                if (e.layers.test(i.layers))
                  if (e instanceof Oe.Light) p.push(e);
                  else if (e instanceof Oe.Sprite)
                    (!1 !== e.frustumCulled && !0 !== I.intersectsObject(e)) ||
                      m.push(e);
                  else if (e instanceof Oe.LensFlare) v.push(e);
                  else if (e instanceof Oe.ImmediateRenderObject)
                    !0 === b.sortObjects &&
                      (V.setFromMatrixPosition(e.matrixWorld),
                      V.applyProjection(O)),
                      mt(e, null, e.material, V.z, null);
                  else if (
                    (e instanceof Oe.Mesh ||
                      e instanceof Oe.Line ||
                      e instanceof Oe.Points) &&
                    (e instanceof Oe.SkinnedMesh && e.skeleton.update(),
                    !1 === e.frustumCulled || !0 === I.intersectsObject(e))
                  ) {
                    var r = e.material;
                    if (!0 === r.visible) {
                      !0 === b.sortObjects &&
                        (V.setFromMatrixPosition(e.matrixWorld),
                        V.applyProjection(O));
                      var n = Y.update(e);
                      if (r instanceof Oe.MultiMaterial)
                        for (
                          var a = n.groups,
                            o = r.materials,
                            s = 0,
                            h = a.length;
                          s < h;
                          s++
                        ) {
                          var l = a[s],
                            u = o[l.materialIndex];
                          !0 === u.visible && mt(e, n, u, V.z, l);
                        }
                      else mt(e, n, r, V.z, null);
                    }
                  }
                var c = e.children;
                for (var s = 0, h = c.length; s < h; s++) t(c[s], i);
              })(t, e),
              (u.length = c + 1),
              (d.length = f + 1),
              !0 === b.sortObjects && (u.sort(dt), d.sort(ft)),
              (function(t, e) {
                var i,
                  r,
                  n,
                  a,
                  o,
                  s,
                  h = 0,
                  l = 0,
                  u = 0,
                  c = e.matrixWorldInverse,
                  p = 0,
                  d = 0,
                  f = 0,
                  m = 0,
                  v = 0;
                for (z.shadowsPointLight = 0, i = 0, r = t.length; i < r; i++)
                  if (
                    ((n = t[i]),
                    (a = n.color),
                    (o = n.intensity),
                    (s = n.distance),
                    n instanceof Oe.AmbientLight)
                  )
                    (h += a.r * o), (l += a.g * o), (u += a.b * o);
                  else if (n instanceof Oe.DirectionalLight) {
                    (g = Q.get(n)).color
                      .copy(n.color)
                      .multiplyScalar(n.intensity),
                      g.direction.setFromMatrixPosition(n.matrixWorld),
                      V.setFromMatrixPosition(n.target.matrixWorld),
                      g.direction.sub(V),
                      g.direction.transformDirection(c),
                      (g.shadow = n.castShadow),
                      n.castShadow &&
                        ((g.shadowBias = n.shadow.bias),
                        (g.shadowRadius = n.shadow.radius),
                        (g.shadowMapSize = n.shadow.mapSize),
                        (z.shadows[v++] = n)),
                      (z.directionalShadowMap[p] = n.shadow.map),
                      (z.directionalShadowMatrix[p] = n.shadow.matrix),
                      (z.directional[p++] = g);
                  } else if (n instanceof Oe.SpotLight) {
                    (g = Q.get(n)).position.setFromMatrixPosition(
                      n.matrixWorld
                    ),
                      g.position.applyMatrix4(c),
                      g.color.copy(a).multiplyScalar(o),
                      (g.distance = s),
                      g.direction.setFromMatrixPosition(n.matrixWorld),
                      V.setFromMatrixPosition(n.target.matrixWorld),
                      g.direction.sub(V),
                      g.direction.transformDirection(c),
                      (g.coneCos = Math.cos(n.angle)),
                      (g.penumbraCos = Math.cos(n.angle * (1 - n.penumbra))),
                      (g.decay = 0 === n.distance ? 0 : n.decay),
                      (g.shadow = n.castShadow),
                      n.castShadow &&
                        ((g.shadowBias = n.shadow.bias),
                        (g.shadowRadius = n.shadow.radius),
                        (g.shadowMapSize = n.shadow.mapSize),
                        (z.shadows[v++] = n)),
                      (z.spotShadowMap[f] = n.shadow.map),
                      (z.spotShadowMatrix[f] = n.shadow.matrix),
                      (z.spot[f++] = g);
                  } else if (n instanceof Oe.PointLight) {
                    (g = Q.get(n)).position.setFromMatrixPosition(
                      n.matrixWorld
                    ),
                      g.position.applyMatrix4(c),
                      g.color.copy(n.color).multiplyScalar(n.intensity),
                      (g.distance = n.distance),
                      (g.decay = 0 === n.distance ? 0 : n.decay),
                      (g.shadow = n.castShadow),
                      n.castShadow &&
                        ((g.shadowBias = n.shadow.bias),
                        (g.shadowRadius = n.shadow.radius),
                        (g.shadowMapSize = n.shadow.mapSize),
                        (z.shadows[v++] = n)),
                      (z.pointShadowMap[d] = n.shadow.map),
                      void 0 === z.pointShadowMatrix[d] &&
                        (z.pointShadowMatrix[d] = new Oe.Matrix4()),
                      V.setFromMatrixPosition(n.matrixWorld).negate(),
                      z.pointShadowMatrix[d].identity().setPosition(V),
                      (z.point[d++] = g);
                  } else if (n instanceof Oe.HemisphereLight) {
                    var g;
                    (g = Q.get(n)).direction.setFromMatrixPosition(
                      n.matrixWorld
                    ),
                      g.direction.transformDirection(c),
                      g.direction.normalize(),
                      g.skyColor.copy(n.color).multiplyScalar(o),
                      g.groundColor.copy(n.groundColor).multiplyScalar(o),
                      (z.hemi[m++] = g);
                  }
                (z.ambient[0] = h),
                  (z.ambient[1] = l),
                  (z.ambient[2] = u),
                  (z.directional.length = p),
                  (z.spot.length = f),
                  (z.point.length = d),
                  (z.hemi.length = m),
                  (z.shadows.length = v),
                  (z.hash = p + "," + d + "," + f + "," + m + "," + v);
              })(p, e),
              rt.render(t, e),
              (G.calls = 0),
              (G.vertices = 0),
              (G.faces = 0),
              void (G.points = 0) === i && (i = null),
              this.setRenderTarget(i),
              (this.autoClear || r) &&
                this.clear(
                  this.autoClearColor,
                  this.autoClearDepth,
                  this.autoClearStencil
                ),
              t.overrideMaterial)
            ) {
              var h = t.overrideMaterial;
              vt(u, e, s, h), vt(d, e, s, h);
            } else H.setBlending(Oe.NoBlending), vt(u, e, s), vt(d, e, s);
            if ((at.render(t, e), ot.render(t, e, x), i)) {
              var l = i.texture;
              l.generateMipmaps &&
                Tt(i) &&
                l.minFilter !== Oe.NearestFilter &&
                l.minFilter !== Oe.LinearFilter &&
                ((a =
                  (n = i) instanceof Oe.WebGLRenderTargetCube
                    ? R.TEXTURE_CUBE_MAP
                    : R.TEXTURE_2D),
                (o = q.get(n.texture).__webglTexture),
                H.bindTexture(a, o),
                R.generateMipmap(a),
                H.bindTexture(a, null));
            }
            H.setDepthTest(!0), H.setDepthWrite(!0), H.setColorWrite(!0);
          }
        }),
        (this.setFaceCulling = function(t, e) {
          t === Oe.CullFaceNone
            ? H.disable(R.CULL_FACE)
            : (e === Oe.FrontFaceDirectionCW
                ? R.frontFace(R.CW)
                : R.frontFace(R.CCW),
              t === Oe.CullFaceBack
                ? R.cullFace(R.BACK)
                : t === Oe.CullFaceFront
                ? R.cullFace(R.FRONT)
                : R.cullFace(R.FRONT_AND_BACK),
              H.enable(R.CULL_FACE));
        }),
        (this.setTexture = function(t, e) {
          var i = q.get(t);
          if (0 < t.version && i.__version !== t.version) {
            var r = t.image;
            if (void 0 === r) return;
            if (!1 === r.complete) return;
            wt(i, t, e);
          } else
            H.activeTexture(R.TEXTURE0 + e),
              H.bindTexture(R.TEXTURE_2D, i.__webglTexture);
        }),
        (this.getCurrentRenderTarget = function() {
          return h;
        }),
        (this.setRenderTarget = function(t) {
          (h = t) && void 0 === q.get(t).__webglFramebuffer && Ut(t);
          var e,
            i = t instanceof Oe.WebGLRenderTargetCube;
          if (t) {
            var r = q.get(t);
            (e = i
              ? r.__webglFramebuffer[t.activeCubeFace]
              : r.__webglFramebuffer),
              g.copy(t.scissor),
              (y = t.scissorTest),
              x.copy(t.viewport);
          } else
            (e = null),
              g.copy(N).multiplyScalar(F),
              (y = D),
              x.copy(B).multiplyScalar(F);
          if (
            (l !== e && (R.bindFramebuffer(R.FRAMEBUFFER, e), (l = e)),
            H.scissor(g),
            H.setScissorTest(y),
            H.viewport(x),
            i)
          ) {
            var n = q.get(t.texture);
            R.framebufferTexture2D(
              R.FRAMEBUFFER,
              R.COLOR_ATTACHMENT0,
              R.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace,
              n.__webglTexture,
              t.activeMipMapLevel
            );
          }
        }),
        (this.readRenderTargetPixels = function(t, e, i, r, n, a) {
          if (t instanceof Oe.WebGLRenderTarget != !1) {
            var o = q.get(t).__webglFramebuffer;
            if (o) {
              var s = !1;
              o !== l && (R.bindFramebuffer(R.FRAMEBUFFER, o), (s = !0));
              try {
                var h = t.texture;
                if (
                  h.format !== Oe.RGBAFormat &&
                  Ft(h.format) !==
                    R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)
                )
                  return;
                if (
                  !(
                    h.type === Oe.UnsignedByteType ||
                    Ft(h.type) ===
                      R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE) ||
                    (h.type === Oe.FloatType &&
                      j.get("WEBGL_color_buffer_float")) ||
                    (h.type === Oe.HalfFloatType &&
                      j.get("EXT_color_buffer_half_float"))
                  )
                )
                  return;
                R.checkFramebufferStatus(R.FRAMEBUFFER) ===
                  R.FRAMEBUFFER_COMPLETE &&
                  R.readPixels(e, i, r, n, Ft(h.format), Ft(h.type), a);
              } finally {
                s && R.bindFramebuffer(R.FRAMEBUFFER, l);
              }
            }
          }
        });
    }),
    (Oe.WebGLExtensions = function(i) {
      var r = {};
      this.get = function(t) {
        if (void 0 !== r[t]) return r[t];
        var e;
        switch (t) {
          case "EXT_texture_filter_anisotropic":
            e =
              i.getExtension("EXT_texture_filter_anisotropic") ||
              i.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
              i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
          case "WEBGL_compressed_texture_s3tc":
            e =
              i.getExtension("WEBGL_compressed_texture_s3tc") ||
              i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
              i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
          case "WEBGL_compressed_texture_pvrtc":
            e =
              i.getExtension("WEBGL_compressed_texture_pvrtc") ||
              i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
          case "WEBGL_compressed_texture_etc1":
            e = i.getExtension("WEBGL_compressed_texture_etc1");
            break;
          default:
            e = i.getExtension(t);
        }
        return (r[t] = e);
      };
    }),
    (Oe.WebGLCapabilities = function(e, t, i) {
      function r(t) {
        if ("highp" === t) {
          if (
            0 <
              e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT)
                .precision &&
            0 <
              e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT)
                .precision
          )
            return "highp";
          t = "mediump";
        }
        return "mediump" === t &&
          0 <
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT)
              .precision &&
          0 <
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT)
              .precision
          ? "mediump"
          : "lowp";
      }
      (this.getMaxPrecision = r),
        (this.precision = void 0 !== i.precision ? i.precision : "highp"),
        (this.logarithmicDepthBuffer =
          void 0 !== i.logarithmicDepthBuffer && i.logarithmicDepthBuffer),
        (this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),
        (this.maxVertexTextures = e.getParameter(
          e.MAX_VERTEX_TEXTURE_IMAGE_UNITS
        )),
        (this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE)),
        (this.maxCubemapSize = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),
        (this.maxAttributes = e.getParameter(e.MAX_VERTEX_ATTRIBS)),
        (this.maxVertexUniforms = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),
        (this.maxVaryings = e.getParameter(e.MAX_VARYING_VECTORS)),
        (this.maxFragmentUniforms = e.getParameter(
          e.MAX_FRAGMENT_UNIFORM_VECTORS
        )),
        (this.vertexTextures = 0 < this.maxVertexTextures),
        (this.floatFragmentTextures = !!t.get("OES_texture_float")),
        (this.floatVertexTextures =
          this.vertexTextures && this.floatFragmentTextures);
      var n = r(this.precision);
      n !== this.precision && (this.precision = n),
        this.logarithmicDepthBuffer &&
          (this.logarithmicDepthBuffer = !!t.get("EXT_frag_depth"));
    }),
    (Oe.WebGLProperties = function() {
      var r = {};
      (this.get = function(t) {
        var e = t.uuid,
          i = r[e];
        return void 0 === i && ((i = {}), (r[e] = i)), i;
      }),
        (this.delete = function(t) {
          delete r[t.uuid];
        }),
        (this.clear = function() {
          r = {};
        });
    }),
    (Oe.WebGLLights = function() {
      var i = {};
      this.get = function(t) {
        if (void 0 !== i[t.id]) return i[t.id];
        var e;
        switch (t.type) {
          case "DirectionalLight":
            e = {
              direction: new Oe.Vector3(),
              color: new Oe.Color(),
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new Oe.Vector2()
            };
            break;
          case "SpotLight":
            e = {
              position: new Oe.Vector3(),
              direction: new Oe.Vector3(),
              color: new Oe.Color(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new Oe.Vector2()
            };
            break;
          case "PointLight":
            e = {
              position: new Oe.Vector3(),
              color: new Oe.Color(),
              distance: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new Oe.Vector2()
            };
            break;
          case "HemisphereLight":
            e = {
              direction: new Oe.Vector3(),
              skyColor: new Oe.Color(),
              groundColor: new Oe.Color()
            };
        }
        return (i[t.id] = e);
      };
    }),
    (Oe.WebGLState = function(h, i, l) {
      var r = this,
        n = new Oe.Vector4(),
        a = new Uint8Array(16),
        o = new Uint8Array(16),
        s = new Uint8Array(16),
        e = {},
        u = null,
        c = null,
        p = null,
        d = null,
        f = null,
        m = null,
        v = null,
        g = null,
        y = !1,
        x = null,
        M = null,
        b = null,
        _ = null,
        S = null,
        w = null,
        E = null,
        T = null,
        A = null,
        L = null,
        R = null,
        C = null,
        U = null,
        P = null,
        F = null,
        N = h.getParameter(h.MAX_TEXTURE_IMAGE_UNITS),
        D = void 0,
        B = {},
        I = new Oe.Vector4(),
        O = null,
        V = null,
        z = new Oe.Vector4(),
        k = new Oe.Vector4(),
        G = h.createTexture();
      h.bindTexture(h.TEXTURE_2D, G),
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR),
        h.texImage2D(
          h.TEXTURE_2D,
          0,
          h.RGB,
          1,
          1,
          0,
          h.RGB,
          h.UNSIGNED_BYTE,
          new Uint8Array(3)
        ),
        (this.init = function() {
          this.clearColor(0, 0, 0, 1),
            this.clearDepth(1),
            this.clearStencil(0),
            this.enable(h.DEPTH_TEST),
            h.depthFunc(h.LEQUAL),
            h.frontFace(h.CCW),
            h.cullFace(h.BACK),
            this.enable(h.CULL_FACE),
            this.enable(h.BLEND),
            h.blendEquation(h.FUNC_ADD),
            h.blendFunc(h.SRC_ALPHA, h.ONE_MINUS_SRC_ALPHA);
        }),
        (this.initAttributes = function() {
          for (var t = 0, e = a.length; t < e; t++) a[t] = 0;
        }),
        (this.enableAttribute = function(t) {
          (a[t] = 1),
            0 === o[t] && (h.enableVertexAttribArray(t), (o[t] = 1)),
            0 !== s[t] &&
              (i.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(t, 0),
              (s[t] = 0));
        }),
        (this.enableAttributeAndDivisor = function(t, e, i) {
          (a[t] = 1),
            0 === o[t] && (h.enableVertexAttribArray(t), (o[t] = 1)),
            s[t] !== e && (i.vertexAttribDivisorANGLE(t, e), (s[t] = e));
        }),
        (this.disableUnusedAttributes = function() {
          for (var t = 0, e = o.length; t < e; t++)
            o[t] !== a[t] && (h.disableVertexAttribArray(t), (o[t] = 0));
        }),
        (this.enable = function(t) {
          !0 !== e[t] && (h.enable(t), (e[t] = !0));
        }),
        (this.disable = function(t) {
          !1 !== e[t] && (h.disable(t), (e[t] = !1));
        }),
        (this.getCompressedTextureFormats = function() {
          if (
            null === u &&
            ((u = []),
            i.get("WEBGL_compressed_texture_pvrtc") ||
              i.get("WEBGL_compressed_texture_s3tc") ||
              i.get("WEBGL_compressed_texture_etc1"))
          )
            for (
              var t = h.getParameter(h.COMPRESSED_TEXTURE_FORMATS), e = 0;
              e < t.length;
              e++
            )
              u.push(t[e]);
          return u;
        }),
        (this.setBlending = function(t, e, i, r, n, a, o, s) {
          t === Oe.NoBlending ? this.disable(h.BLEND) : this.enable(h.BLEND),
            (t === c && s === y) ||
              (t === Oe.AdditiveBlending
                ? s
                  ? (h.blendEquationSeparate(h.FUNC_ADD, h.FUNC_ADD),
                    h.blendFuncSeparate(h.ONE, h.ONE, h.ONE, h.ONE))
                  : (h.blendEquation(h.FUNC_ADD),
                    h.blendFunc(h.SRC_ALPHA, h.ONE))
                : t === Oe.SubtractiveBlending
                ? s
                  ? (h.blendEquationSeparate(h.FUNC_ADD, h.FUNC_ADD),
                    h.blendFuncSeparate(
                      h.ZERO,
                      h.ZERO,
                      h.ONE_MINUS_SRC_COLOR,
                      h.ONE_MINUS_SRC_ALPHA
                    ))
                  : (h.blendEquation(h.FUNC_ADD),
                    h.blendFunc(h.ZERO, h.ONE_MINUS_SRC_COLOR))
                : t === Oe.MultiplyBlending
                ? s
                  ? (h.blendEquationSeparate(h.FUNC_ADD, h.FUNC_ADD),
                    h.blendFuncSeparate(
                      h.ZERO,
                      h.ZERO,
                      h.SRC_COLOR,
                      h.SRC_ALPHA
                    ))
                  : (h.blendEquation(h.FUNC_ADD),
                    h.blendFunc(h.ZERO, h.SRC_COLOR))
                : s
                ? (h.blendEquationSeparate(h.FUNC_ADD, h.FUNC_ADD),
                  h.blendFuncSeparate(
                    h.ONE,
                    h.ONE_MINUS_SRC_ALPHA,
                    h.ONE,
                    h.ONE_MINUS_SRC_ALPHA
                  ))
                : (h.blendEquationSeparate(h.FUNC_ADD, h.FUNC_ADD),
                  h.blendFuncSeparate(
                    h.SRC_ALPHA,
                    h.ONE_MINUS_SRC_ALPHA,
                    h.ONE,
                    h.ONE_MINUS_SRC_ALPHA
                  )),
              (c = t),
              (y = s)),
            t === Oe.CustomBlending
              ? ((n = n || e),
                (a = a || i),
                (o = o || r),
                (e === p && n === m) ||
                  (h.blendEquationSeparate(l(e), l(n)), (p = e), (m = n)),
                (i === d && r === f && a === v && o === g) ||
                  (h.blendFuncSeparate(l(i), l(r), l(a), l(o)),
                  (d = i),
                  (f = r),
                  (v = a),
                  (g = o)))
              : (g = v = m = f = d = p = null);
        }),
        (this.setDepthFunc = function(t) {
          if (x !== t) {
            if (t)
              switch (t) {
                case Oe.NeverDepth:
                  h.depthFunc(h.NEVER);
                  break;
                case Oe.AlwaysDepth:
                  h.depthFunc(h.ALWAYS);
                  break;
                case Oe.LessDepth:
                  h.depthFunc(h.LESS);
                  break;
                case Oe.LessEqualDepth:
                  h.depthFunc(h.LEQUAL);
                  break;
                case Oe.EqualDepth:
                  h.depthFunc(h.EQUAL);
                  break;
                case Oe.GreaterEqualDepth:
                  h.depthFunc(h.GEQUAL);
                  break;
                case Oe.GreaterDepth:
                  h.depthFunc(h.GREATER);
                  break;
                case Oe.NotEqualDepth:
                  h.depthFunc(h.NOTEQUAL);
                  break;
                default:
                  h.depthFunc(h.LEQUAL);
              }
            else h.depthFunc(h.LEQUAL);
            x = t;
          }
        }),
        (this.setDepthTest = function(t) {
          t ? this.enable(h.DEPTH_TEST) : this.disable(h.DEPTH_TEST);
        }),
        (this.setDepthWrite = function(t) {
          M !== t && (h.depthMask(t), (M = t));
        }),
        (this.setColorWrite = function(t) {
          b !== t && (h.colorMask(t, t, t, t), (b = t));
        }),
        (this.setStencilFunc = function(t, e, i) {
          (S === t && w === e && E === i) ||
            (h.stencilFunc(t, e, i), (S = t), (w = e), (E = i));
        }),
        (this.setStencilOp = function(t, e, i) {
          (T === t && A === e && L === i) ||
            (h.stencilOp(t, e, i), (T = t), (A = e), (L = i));
        }),
        (this.setStencilTest = function(t) {
          t ? this.enable(h.STENCIL_TEST) : this.disable(h.STENCIL_TEST);
        }),
        (this.setStencilWrite = function(t) {
          _ !== t && (h.stencilMask(t), (_ = t));
        }),
        (this.setFlipSided = function(t) {
          R !== t && (t ? h.frontFace(h.CW) : h.frontFace(h.CCW), (R = t));
        }),
        (this.setLineWidth = function(t) {
          t !== C && (h.lineWidth(t), (C = t));
        }),
        (this.setPolygonOffset = function(t, e, i) {
          t
            ? this.enable(h.POLYGON_OFFSET_FILL)
            : this.disable(h.POLYGON_OFFSET_FILL),
            !t ||
              (U === e && P === i) ||
              (h.polygonOffset(e, i), (U = e), (P = i));
        }),
        (this.getScissorTest = function() {
          return F;
        }),
        (this.setScissorTest = function(t) {
          (F = t) ? this.enable(h.SCISSOR_TEST) : this.disable(h.SCISSOR_TEST);
        }),
        (this.activeTexture = function(t) {
          void 0 === t && (t = h.TEXTURE0 + N - 1),
            D !== t && (h.activeTexture(t), (D = t));
        }),
        (this.bindTexture = function(t, e) {
          void 0 === D && r.activeTexture();
          var i = B[D];
          void 0 === i && ((i = { type: void 0, texture: void 0 }), (B[D] = i)),
            (i.type === t && i.texture === e) ||
              (h.bindTexture(t, e || G), (i.type = t), (i.texture = e));
        }),
        (this.compressedTexImage2D = function() {
          try {
            h.compressedTexImage2D.apply(h, arguments);
          } catch (t) {}
        }),
        (this.texImage2D = function() {
          try {
            h.texImage2D.apply(h, arguments);
          } catch (t) {}
        }),
        (this.clearColor = function(t, e, i, r) {
          n.set(t, e, i, r),
            !1 === I.equals(n) && (h.clearColor(t, e, i, r), I.copy(n));
        }),
        (this.clearDepth = function(t) {
          O !== t && (h.clearDepth(t), (O = t));
        }),
        (this.clearStencil = function(t) {
          V !== t && (h.clearStencil(t), (V = t));
        }),
        (this.scissor = function(t) {
          !1 === z.equals(t) && (h.scissor(t.x, t.y, t.z, t.w), z.copy(t));
        }),
        (this.viewport = function(t) {
          !1 === k.equals(t) && (h.viewport(t.x, t.y, t.z, t.w), k.copy(t));
        }),
        (this.reset = function() {
          for (var t = 0; t < o.length; t++)
            1 === o[t] && (h.disableVertexAttribArray(t), (o[t] = 0));
          (e = {}), (D = void 0), (B = {}), (R = _ = M = b = c = u = null);
        });
    }),
    (Oe.WebGLGeometries = function(n, a, o) {
      var s = {};
      function h(t) {
        var e = t.target,
          i = s[e.id];
        null !== i.index && l(i.index),
          (function(t) {
            for (var e in t) l(t[e]);
          })(i.attributes),
          e.removeEventListener("dispose", h),
          delete s[e.id];
        var r = a.get(e);
        r.wireframe && l(r.wireframe), a.delete(e);
        var n = a.get(i);
        n.wireframe && l(n.wireframe), a.delete(i), o.memory.geometries--;
      }
      function l(t) {
        var e,
          i,
          r =
            (e = t) instanceof Oe.InterleavedBufferAttribute
              ? a.get(e.data).__webglBuffer
              : a.get(e).__webglBuffer;
        void 0 !== r &&
          (n.deleteBuffer(r),
          (i = t) instanceof Oe.InterleavedBufferAttribute
            ? a.delete(i.data)
            : a.delete(i));
      }
      this.get = function(t) {
        var e,
          i = t.geometry;
        return void 0 !== s[i.id]
          ? s[i.id]
          : (i.addEventListener("dispose", h),
            i instanceof Oe.BufferGeometry
              ? (e = i)
              : i instanceof Oe.Geometry &&
                (void 0 === i._bufferGeometry &&
                  (i._bufferGeometry = new Oe.BufferGeometry().setFromObject(
                    t
                  )),
                (e = i._bufferGeometry)),
            (s[i.id] = e),
            o.memory.geometries++,
            e);
      };
    }),
    (Oe.WebGLBufferRenderer = function(n, a, o) {
      var s;
      (this.setMode = function(t) {
        s = t;
      }),
        (this.render = function(t, e) {
          n.drawArrays(s, t, e),
            o.calls++,
            (o.vertices += e),
            s === n.TRIANGLES && (o.faces += e / 3);
        }),
        (this.renderInstances = function(t) {
          var e = a.get("ANGLE_instanced_arrays");
          if (null !== e) {
            var i = t.attributes.position,
              r = 0;
            (r =
              i instanceof Oe.InterleavedBufferAttribute
                ? i.data.count
                : i.count),
              e.drawArraysInstancedANGLE(s, 0, r, t.maxInstancedCount),
              o.calls++,
              (o.vertices += r * t.maxInstancedCount),
              s === n.TRIANGLES && (o.faces += (t.maxInstancedCount * r) / 3);
          }
        });
    }),
    (Oe.WebGLIndexedBufferRenderer = function(n, a, o) {
      var s, h, l;
      (this.setMode = function(t) {
        s = t;
      }),
        (this.setIndex = function(t) {
          l =
            t.array instanceof Uint32Array && a.get("OES_element_index_uint")
              ? ((h = n.UNSIGNED_INT), 4)
              : ((h = n.UNSIGNED_SHORT), 2);
        }),
        (this.render = function(t, e) {
          n.drawElements(s, e, h, t * l),
            o.calls++,
            (o.vertices += e),
            s === n.TRIANGLES && (o.faces += e / 3);
        }),
        (this.renderInstances = function(t, e, i) {
          var r = a.get("ANGLE_instanced_arrays");
          null !== r &&
            (r.drawElementsInstancedANGLE(s, i, h, e * l, t.maxInstancedCount),
            o.calls++,
            (o.vertices += i * t.maxInstancedCount),
            s === n.TRIANGLES && (o.faces += (t.maxInstancedCount * i) / 3));
        });
    }),
    (Oe.WebGLShader = function(t, e, i) {
      var r = t.createShader(e);
      return (
        t.shaderSource(r, i),
        t.compileShader(r),
        t.getShaderParameter(r, t.COMPILE_STATUS),
        t.getShaderInfoLog(r),
        r
      );
    }),
    (Oe.WebGLShadowMap = function(U, P, F) {
      for (
        var N = U.context,
          D = U.state,
          B = new Oe.Frustum(),
          I = new Oe.Matrix4(),
          O = new Oe.Vector2(),
          V = new Oe.Vector3(),
          z = new Oe.Vector3(),
          k = [],
          c = 1,
          p = 2,
          t = 1 + (c | p),
          d = new Array(t),
          f = new Array(t),
          G = [
            new Oe.Vector3(1, 0, 0),
            new Oe.Vector3(-1, 0, 0),
            new Oe.Vector3(0, 0, 1),
            new Oe.Vector3(0, 0, -1),
            new Oe.Vector3(0, 1, 0),
            new Oe.Vector3(0, -1, 0)
          ],
          W = [
            new Oe.Vector3(0, 1, 0),
            new Oe.Vector3(0, 1, 0),
            new Oe.Vector3(0, 1, 0),
            new Oe.Vector3(0, 1, 0),
            new Oe.Vector3(0, 0, 1),
            new Oe.Vector3(0, 0, -1)
          ],
          j = [
            new Oe.Vector4(),
            new Oe.Vector4(),
            new Oe.Vector4(),
            new Oe.Vector4(),
            new Oe.Vector4(),
            new Oe.Vector4()
          ],
          e = Oe.ShaderLib.depthRGBA,
          i = Oe.UniformsUtils.clone(e.uniforms),
          r = Oe.ShaderLib.distanceRGBA,
          n = Oe.UniformsUtils.clone(r.uniforms),
          a = 0;
        a !== t;
        ++a
      ) {
        var o = 0 != (a & c),
          s = 0 != (a & p),
          h = new Oe.ShaderMaterial({
            uniforms: i,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader,
            morphTargets: o,
            skinning: s
          });
        d[a] = h;
        var l = new Oe.ShaderMaterial({
          defines: { USE_SHADOWMAP: "" },
          uniforms: n,
          vertexShader: r.vertexShader,
          fragmentShader: r.fragmentShader,
          morphTargets: o,
          skinning: s
        });
        f[a] = l;
      }
      var X = this;
      function H(t, e, i, r) {
        var n = t.geometry,
          a = null,
          o = d,
          s = t.customDepthMaterial;
        if ((i && ((o = f), (s = t.customDistanceMaterial)), s)) a = s;
        else {
          var h =
              void 0 !== n.morphTargets &&
              0 < n.morphTargets.length &&
              e.morphTargets,
            l = t instanceof Oe.SkinnedMesh && e.skinning,
            u = 0;
          h && (u |= c), l && (u |= p), (a = o[u]);
        }
        return (
          (a.visible = e.visible),
          (a.wireframe = e.wireframe),
          (a.wireframeLinewidth = e.wireframeLinewidth),
          i &&
            void 0 !== a.uniforms.lightPos &&
            a.uniforms.lightPos.value.copy(r),
          a
        );
      }
      function q(t, e, i) {
        if (!1 !== t.visible) {
          if (
            t.layers.test(e.layers) &&
            (t instanceof Oe.Mesh ||
              t instanceof Oe.Line ||
              t instanceof Oe.Points)
          )
            if (
              t.castShadow &&
              (!1 === t.frustumCulled || !0 === B.intersectsObject(t))
            )
              !0 === t.material.visible &&
                (t.modelViewMatrix.multiplyMatrices(
                  i.matrixWorldInverse,
                  t.matrixWorld
                ),
                k.push(t));
          for (var r = t.children, n = 0, a = r.length; n < a; n++)
            q(r[n], e, i);
        }
      }
      (this.enabled = !1),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this.type = Oe.PCFShadowMap),
        (this.cullFace = Oe.CullFaceFront),
        (this.render = function(t, e) {
          var i,
            r,
            n = P.shadows;
          if (
            0 !== n.length &&
            !1 !== X.enabled &&
            (!1 !== X.autoUpdate || !1 !== X.needsUpdate)
          ) {
            D.clearColor(1, 1, 1, 1),
              D.disable(N.BLEND),
              D.enable(N.CULL_FACE),
              N.frontFace(N.CCW),
              N.cullFace(X.cullFace === Oe.CullFaceFront ? N.FRONT : N.BACK),
              D.setDepthTest(!0),
              D.setScissorTest(!1);
            for (var a = 0, o = n.length; a < o; a++) {
              var s = n[a],
                h = s.shadow,
                l = h.camera;
              if ((O.copy(h.mapSize), s instanceof Oe.PointLight)) {
                (i = 6), (r = !0);
                var u = O.x,
                  c = O.y;
                j[0].set(2 * u, c, u, c),
                  j[1].set(0, c, u, c),
                  j[2].set(3 * u, c, u, c),
                  j[3].set(u, c, u, c),
                  j[4].set(3 * u, 0, u, c),
                  j[5].set(u, 0, u, c),
                  (O.x *= 4),
                  (O.y *= 2);
              } else r = !(i = 1);
              if (null === h.map) {
                var p = {
                  minFilter: Oe.NearestFilter,
                  magFilter: Oe.NearestFilter,
                  format: Oe.RGBAFormat
                };
                (h.map = new Oe.WebGLRenderTarget(O.x, O.y, p)),
                  s instanceof Oe.SpotLight && (l.aspect = O.x / O.y),
                  l.updateProjectionMatrix();
              }
              var d = h.map,
                f = h.matrix;
              z.setFromMatrixPosition(s.matrixWorld),
                l.position.copy(z),
                U.setRenderTarget(d),
                U.clear();
              for (var m = 0; m < i; m++) {
                if (r) {
                  V.copy(l.position), V.add(G[m]), l.up.copy(W[m]), l.lookAt(V);
                  var v = j[m];
                  D.viewport(v);
                } else
                  V.setFromMatrixPosition(s.target.matrixWorld), l.lookAt(V);
                l.updateMatrixWorld(),
                  l.matrixWorldInverse.getInverse(l.matrixWorld),
                  f.set(
                    0.5,
                    0,
                    0,
                    0.5,
                    0,
                    0.5,
                    0,
                    0.5,
                    0,
                    0,
                    0.5,
                    0.5,
                    0,
                    0,
                    0,
                    1
                  ),
                  f.multiply(l.projectionMatrix),
                  f.multiply(l.matrixWorldInverse),
                  I.multiplyMatrices(l.projectionMatrix, l.matrixWorldInverse),
                  B.setFromMatrix(I),
                  (k.length = 0),
                  q(t, e, l);
                for (var g = 0, y = k.length; g < y; g++) {
                  var x = k[g],
                    M = F.update(x),
                    b = x.material;
                  if (b instanceof Oe.MultiMaterial)
                    for (
                      var _ = M.groups, S = b.materials, w = 0, E = _.length;
                      w < E;
                      w++
                    ) {
                      var T = _[w],
                        A = S[T.materialIndex];
                      if (!0 === A.visible) {
                        var L = H(x, A, r, z);
                        U.renderBufferDirect(l, null, M, L, x, T);
                      }
                    }
                  else {
                    L = H(x, b, r, z);
                    U.renderBufferDirect(l, null, M, L, x, null);
                  }
                }
              }
            }
            var R = U.getClearColor(),
              C = U.getClearAlpha();
            U.setClearColor(R, C),
              D.enable(N.BLEND),
              X.cullFace === Oe.CullFaceFront && N.cullFace(N.BACK),
              (X.needsUpdate = !1);
          }
        });
    }),
    (Oe.SpritePlugin = function(c, p) {
      var d,
        f,
        m,
        v,
        g,
        y,
        x = c.context,
        M = c.state,
        b = new Oe.Vector3(),
        _ = new Oe.Quaternion(),
        S = new Oe.Vector3();
      function w() {
        var t,
          e,
          i,
          r = new Float32Array([
            -0.5,
            -0.5,
            0,
            0,
            0.5,
            -0.5,
            1,
            0,
            0.5,
            0.5,
            1,
            1,
            -0.5,
            0.5,
            0,
            1
          ]),
          n = new Uint16Array([0, 1, 2, 0, 2, 3]);
        (d = x.createBuffer()),
          (f = x.createBuffer()),
          x.bindBuffer(x.ARRAY_BUFFER, d),
          x.bufferData(x.ARRAY_BUFFER, r, x.STATIC_DRAW),
          x.bindBuffer(x.ELEMENT_ARRAY_BUFFER, f),
          x.bufferData(x.ELEMENT_ARRAY_BUFFER, n, x.STATIC_DRAW),
          (t = x.createProgram()),
          (e = x.createShader(x.VERTEX_SHADER)),
          (i = x.createShader(x.FRAGMENT_SHADER)),
          x.shaderSource(
            e,
            [
              "precision " + c.getPrecision() + " float;",
              "uniform mat4 modelViewMatrix;",
              "uniform mat4 projectionMatrix;",
              "uniform float rotation;",
              "uniform vec2 scale;",
              "uniform vec2 uvOffset;",
              "uniform vec2 uvScale;",
              "attribute vec2 position;",
              "attribute vec2 uv;",
              "varying vec2 vUV;",
              "void main() {",
              "vUV = uvOffset + uv * uvScale;",
              "vec2 alignedPosition = position * scale;",
              "vec2 rotatedPosition;",
              "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;",
              "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;",
              "vec4 finalPosition;",
              "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );",
              "finalPosition.xy += rotatedPosition;",
              "finalPosition = projectionMatrix * finalPosition;",
              "gl_Position = finalPosition;",
              "}"
            ].join("\n")
          ),
          x.shaderSource(
            i,
            [
              "precision " + c.getPrecision() + " float;",
              "uniform vec3 color;",
              "uniform sampler2D map;",
              "uniform float opacity;",
              "uniform int fogType;",
              "uniform vec3 fogColor;",
              "uniform float fogDensity;",
              "uniform float fogNear;",
              "uniform float fogFar;",
              "uniform float alphaTest;",
              "varying vec2 vUV;",
              "void main() {",
              "vec4 texture = texture2D( map, vUV );",
              "if ( texture.a < alphaTest ) discard;",
              "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );",
              "if ( fogType > 0 ) {",
              "float depth = gl_FragCoord.z / gl_FragCoord.w;",
              "float fogFactor = 0.0;",
              "if ( fogType == 1 ) {",
              "fogFactor = smoothstep( fogNear, fogFar, depth );",
              "} else {",
              "const float LOG2 = 1.442695;",
              "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );",
              "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );",
              "}",
              "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );",
              "}",
              "}"
            ].join("\n")
          ),
          x.compileShader(e),
          x.compileShader(i),
          x.attachShader(t, e),
          x.attachShader(t, i),
          x.linkProgram(t),
          (m = t),
          (v = {
            position: x.getAttribLocation(m, "position"),
            uv: x.getAttribLocation(m, "uv")
          }),
          (g = {
            uvOffset: x.getUniformLocation(m, "uvOffset"),
            uvScale: x.getUniformLocation(m, "uvScale"),
            rotation: x.getUniformLocation(m, "rotation"),
            scale: x.getUniformLocation(m, "scale"),
            color: x.getUniformLocation(m, "color"),
            map: x.getUniformLocation(m, "map"),
            opacity: x.getUniformLocation(m, "opacity"),
            modelViewMatrix: x.getUniformLocation(m, "modelViewMatrix"),
            projectionMatrix: x.getUniformLocation(m, "projectionMatrix"),
            fogType: x.getUniformLocation(m, "fogType"),
            fogDensity: x.getUniformLocation(m, "fogDensity"),
            fogNear: x.getUniformLocation(m, "fogNear"),
            fogFar: x.getUniformLocation(m, "fogFar"),
            fogColor: x.getUniformLocation(m, "fogColor"),
            alphaTest: x.getUniformLocation(m, "alphaTest")
          });
        var a = document.createElement("canvas");
        (a.width = 8), (a.height = 8);
        var o = a.getContext("2d");
        (o.fillStyle = "white"),
          o.fillRect(0, 0, 8, 8),
          ((y = new Oe.Texture(a)).needsUpdate = !0);
      }
      function E(t, e) {
        return t.renderOrder !== e.renderOrder
          ? t.renderOrder - e.renderOrder
          : t.z !== e.z
          ? e.z - t.z
          : e.id - t.id;
      }
      this.render = function(t, e) {
        if (0 !== p.length) {
          void 0 === m && w(),
            x.useProgram(m),
            M.initAttributes(),
            M.enableAttribute(v.position),
            M.enableAttribute(v.uv),
            M.disableUnusedAttributes(),
            M.disable(x.CULL_FACE),
            M.enable(x.BLEND),
            x.bindBuffer(x.ARRAY_BUFFER, d),
            x.vertexAttribPointer(v.position, 2, x.FLOAT, !1, 16, 0),
            x.vertexAttribPointer(v.uv, 2, x.FLOAT, !1, 16, 8),
            x.bindBuffer(x.ELEMENT_ARRAY_BUFFER, f),
            x.uniformMatrix4fv(
              g.projectionMatrix,
              !1,
              e.projectionMatrix.elements
            ),
            M.activeTexture(x.TEXTURE0),
            x.uniform1i(g.map, 0);
          var i = 0,
            r = 0,
            n = t.fog;
          n
            ? (x.uniform3f(g.fogColor, n.color.r, n.color.g, n.color.b),
              n instanceof Oe.Fog
                ? (x.uniform1f(g.fogNear, n.near),
                  x.uniform1f(g.fogFar, n.far),
                  x.uniform1i(g.fogType, 1),
                  (r = i = 1))
                : n instanceof Oe.FogExp2 &&
                  (x.uniform1f(g.fogDensity, n.density),
                  x.uniform1i(g.fogType, 2),
                  (r = i = 2)))
            : (x.uniform1i(g.fogType, 0), (r = i = 0));
          for (var a = 0, o = p.length; a < o; a++) {
            (h = p[a]).modelViewMatrix.multiplyMatrices(
              e.matrixWorldInverse,
              h.matrixWorld
            ),
              (h.z = -h.modelViewMatrix.elements[14]);
          }
          p.sort(E);
          var s = [];
          for (a = 0, o = p.length; a < o; a++) {
            var h,
              l = (h = p[a]).material;
            x.uniform1f(g.alphaTest, l.alphaTest),
              x.uniformMatrix4fv(
                g.modelViewMatrix,
                !1,
                h.modelViewMatrix.elements
              ),
              h.matrixWorld.decompose(b, _, S),
              (s[0] = S.x),
              (s[1] = S.y);
            var u = 0;
            t.fog && l.fog && (u = r),
              i !== u && (x.uniform1i(g.fogType, u), (i = u)),
              null !== l.map
                ? (x.uniform2f(g.uvOffset, l.map.offset.x, l.map.offset.y),
                  x.uniform2f(g.uvScale, l.map.repeat.x, l.map.repeat.y))
                : (x.uniform2f(g.uvOffset, 0, 0), x.uniform2f(g.uvScale, 1, 1)),
              x.uniform1f(g.opacity, l.opacity),
              x.uniform3f(g.color, l.color.r, l.color.g, l.color.b),
              x.uniform1f(g.rotation, l.rotation),
              x.uniform2fv(g.scale, s),
              M.setBlending(
                l.blending,
                l.blendEquation,
                l.blendSrc,
                l.blendDst
              ),
              M.setDepthTest(l.depthTest),
              M.setDepthWrite(l.depthWrite),
              l.map && l.map.image && l.map.image.width
                ? c.setTexture(l.map, 0)
                : c.setTexture(y, 0),
              x.drawElements(x.TRIANGLES, 6, x.UNSIGNED_SHORT, 0);
          }
          M.enable(x.CULL_FACE), c.resetGLState();
        }
      };
    }),
    (Oe.LensFlarePlugin = function(g, y) {
      var x,
        M,
        b,
        _,
        S,
        w,
        E,
        T,
        A = g.context,
        L = g.state;
      function R() {
        var t,
          e,
          i,
          r,
          n,
          a,
          o = new Float32Array([
            -1,
            -1,
            0,
            0,
            1,
            -1,
            1,
            0,
            1,
            1,
            1,
            1,
            -1,
            1,
            0,
            1
          ]),
          s = new Uint16Array([0, 1, 2, 0, 2, 3]);
        (x = A.createBuffer()),
          (M = A.createBuffer()),
          A.bindBuffer(A.ARRAY_BUFFER, x),
          A.bufferData(A.ARRAY_BUFFER, o, A.STATIC_DRAW),
          A.bindBuffer(A.ELEMENT_ARRAY_BUFFER, M),
          A.bufferData(A.ELEMENT_ARRAY_BUFFER, s, A.STATIC_DRAW),
          (E = A.createTexture()),
          (T = A.createTexture()),
          L.bindTexture(A.TEXTURE_2D, E),
          A.texImage2D(
            A.TEXTURE_2D,
            0,
            A.RGB,
            16,
            16,
            0,
            A.RGB,
            A.UNSIGNED_BYTE,
            null
          ),
          A.texParameteri(A.TEXTURE_2D, A.TEXTURE_WRAP_S, A.CLAMP_TO_EDGE),
          A.texParameteri(A.TEXTURE_2D, A.TEXTURE_WRAP_T, A.CLAMP_TO_EDGE),
          A.texParameteri(A.TEXTURE_2D, A.TEXTURE_MAG_FILTER, A.NEAREST),
          A.texParameteri(A.TEXTURE_2D, A.TEXTURE_MIN_FILTER, A.NEAREST),
          L.bindTexture(A.TEXTURE_2D, T),
          A.texImage2D(
            A.TEXTURE_2D,
            0,
            A.RGBA,
            16,
            16,
            0,
            A.RGBA,
            A.UNSIGNED_BYTE,
            null
          ),
          A.texParameteri(A.TEXTURE_2D, A.TEXTURE_WRAP_S, A.CLAMP_TO_EDGE),
          A.texParameteri(A.TEXTURE_2D, A.TEXTURE_WRAP_T, A.CLAMP_TO_EDGE),
          A.texParameteri(A.TEXTURE_2D, A.TEXTURE_MAG_FILTER, A.NEAREST),
          A.texParameteri(A.TEXTURE_2D, A.TEXTURE_MIN_FILTER, A.NEAREST),
          (t = (w = 0 < A.getParameter(A.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
            ? {
                vertexShader: [
                  "uniform lowp int renderType;",
                  "uniform vec3 screenPosition;",
                  "uniform vec2 scale;",
                  "uniform float rotation;",
                  "uniform sampler2D occlusionMap;",
                  "attribute vec2 position;",
                  "attribute vec2 uv;",
                  "varying vec2 vUV;",
                  "varying float vVisibility;",
                  "void main() {",
                  "vUV = uv;",
                  "vec2 pos = position;",
                  "if ( renderType == 2 ) {",
                  "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );",
                  "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );",
                  "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );",
                  "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );",
                  "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );",
                  "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );",
                  "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );",
                  "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );",
                  "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );",
                  "vVisibility =        visibility.r / 9.0;",
                  "vVisibility *= 1.0 - visibility.g / 9.0;",
                  "vVisibility *=       visibility.b / 9.0;",
                  "vVisibility *= 1.0 - visibility.a / 9.0;",
                  "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;",
                  "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;",
                  "}",
                  "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );",
                  "}"
                ].join("\n"),
                fragmentShader: [
                  "uniform lowp int renderType;",
                  "uniform sampler2D map;",
                  "uniform float opacity;",
                  "uniform vec3 color;",
                  "varying vec2 vUV;",
                  "varying float vVisibility;",
                  "void main() {",
                  "if ( renderType == 0 ) {",
                  "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );",
                  "} else if ( renderType == 1 ) {",
                  "gl_FragColor = texture2D( map, vUV );",
                  "} else {",
                  "vec4 texture = texture2D( map, vUV );",
                  "texture.a *= opacity * vVisibility;",
                  "gl_FragColor = texture;",
                  "gl_FragColor.rgb *= color;",
                  "}",
                  "}"
                ].join("\n")
              }
            : {
                vertexShader: [
                  "uniform lowp int renderType;",
                  "uniform vec3 screenPosition;",
                  "uniform vec2 scale;",
                  "uniform float rotation;",
                  "attribute vec2 position;",
                  "attribute vec2 uv;",
                  "varying vec2 vUV;",
                  "void main() {",
                  "vUV = uv;",
                  "vec2 pos = position;",
                  "if ( renderType == 2 ) {",
                  "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;",
                  "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;",
                  "}",
                  "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );",
                  "}"
                ].join("\n"),
                fragmentShader: [
                  "precision mediump float;",
                  "uniform lowp int renderType;",
                  "uniform sampler2D map;",
                  "uniform sampler2D occlusionMap;",
                  "uniform float opacity;",
                  "uniform vec3 color;",
                  "varying vec2 vUV;",
                  "void main() {",
                  "if ( renderType == 0 ) {",
                  "gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );",
                  "} else if ( renderType == 1 ) {",
                  "gl_FragColor = texture2D( map, vUV );",
                  "} else {",
                  "float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;",
                  "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;",
                  "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;",
                  "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;",
                  "visibility = ( 1.0 - visibility / 4.0 );",
                  "vec4 texture = texture2D( map, vUV );",
                  "texture.a *= opacity * visibility;",
                  "gl_FragColor = texture;",
                  "gl_FragColor.rgb *= color;",
                  "}",
                  "}"
                ].join("\n")
              }),
          (e = t),
          (i = A.createProgram()),
          (r = A.createShader(A.FRAGMENT_SHADER)),
          (n = A.createShader(A.VERTEX_SHADER)),
          (a = "precision " + g.getPrecision() + " float;\n"),
          A.shaderSource(r, a + e.fragmentShader),
          A.shaderSource(n, a + e.vertexShader),
          A.compileShader(r),
          A.compileShader(n),
          A.attachShader(i, r),
          A.attachShader(i, n),
          A.linkProgram(i),
          (b = i),
          (_ = {
            vertex: A.getAttribLocation(b, "position"),
            uv: A.getAttribLocation(b, "uv")
          }),
          (S = {
            renderType: A.getUniformLocation(b, "renderType"),
            map: A.getUniformLocation(b, "map"),
            occlusionMap: A.getUniformLocation(b, "occlusionMap"),
            opacity: A.getUniformLocation(b, "opacity"),
            color: A.getUniformLocation(b, "color"),
            scale: A.getUniformLocation(b, "scale"),
            rotation: A.getUniformLocation(b, "rotation"),
            screenPosition: A.getUniformLocation(b, "screenPosition")
          });
      }
      this.render = function(t, e, i) {
        if (0 !== y.length) {
          var r = new Oe.Vector3(),
            n = i.w / i.z,
            a = 0.5 * i.z,
            o = 0.5 * i.w,
            s = 16 / i.w,
            h = new Oe.Vector2(s * n, s),
            l = new Oe.Vector3(1, 1, 0),
            u = new Oe.Vector2(1, 1);
          void 0 === b && R(),
            A.useProgram(b),
            L.initAttributes(),
            L.enableAttribute(_.vertex),
            L.enableAttribute(_.uv),
            L.disableUnusedAttributes(),
            A.uniform1i(S.occlusionMap, 0),
            A.uniform1i(S.map, 1),
            A.bindBuffer(A.ARRAY_BUFFER, x),
            A.vertexAttribPointer(_.vertex, 2, A.FLOAT, !1, 16, 0),
            A.vertexAttribPointer(_.uv, 2, A.FLOAT, !1, 16, 8),
            A.bindBuffer(A.ELEMENT_ARRAY_BUFFER, M),
            L.disable(A.CULL_FACE),
            L.setDepthWrite(!1);
          for (var c = 0, p = y.length; c < p; c++) {
            (s = 16 / i.w), h.set(s * n, s);
            var d = y[c];
            if (
              (r.set(
                d.matrixWorld.elements[12],
                d.matrixWorld.elements[13],
                d.matrixWorld.elements[14]
              ),
              r.applyMatrix4(e.matrixWorldInverse),
              r.applyProjection(e.projectionMatrix),
              l.copy(r),
              (u.x = l.x * a + a),
              (u.y = l.y * o + o),
              w || (0 < u.x && u.x < i.z && 0 < u.y && u.y < i.w))
            ) {
              L.activeTexture(A.TEXTURE0),
                L.bindTexture(A.TEXTURE_2D, null),
                L.activeTexture(A.TEXTURE1),
                L.bindTexture(A.TEXTURE_2D, E),
                A.copyTexImage2D(
                  A.TEXTURE_2D,
                  0,
                  A.RGB,
                  i.x + u.x - 8,
                  i.y + u.y - 8,
                  16,
                  16,
                  0
                ),
                A.uniform1i(S.renderType, 0),
                A.uniform2f(S.scale, h.x, h.y),
                A.uniform3f(S.screenPosition, l.x, l.y, l.z),
                L.disable(A.BLEND),
                L.enable(A.DEPTH_TEST),
                A.drawElements(A.TRIANGLES, 6, A.UNSIGNED_SHORT, 0),
                L.activeTexture(A.TEXTURE0),
                L.bindTexture(A.TEXTURE_2D, T),
                A.copyTexImage2D(
                  A.TEXTURE_2D,
                  0,
                  A.RGBA,
                  i.x + u.x - 8,
                  i.y + u.y - 8,
                  16,
                  16,
                  0
                ),
                A.uniform1i(S.renderType, 1),
                L.disable(A.DEPTH_TEST),
                L.activeTexture(A.TEXTURE1),
                L.bindTexture(A.TEXTURE_2D, E),
                A.drawElements(A.TRIANGLES, 6, A.UNSIGNED_SHORT, 0),
                d.positionScreen.copy(l),
                d.customUpdateCallback
                  ? d.customUpdateCallback(d)
                  : d.updateLensFlares(),
                A.uniform1i(S.renderType, 2),
                L.enable(A.BLEND);
              for (var f = 0, m = d.lensFlares.length; f < m; f++) {
                var v = d.lensFlares[f];
                0.001 < v.opacity &&
                  0.001 < v.scale &&
                  ((l.x = v.x),
                  (l.y = v.y),
                  (l.z = v.z),
                  (s = (v.size * v.scale) / i.w),
                  (h.x = s * n),
                  (h.y = s),
                  A.uniform3f(S.screenPosition, l.x, l.y, l.z),
                  A.uniform2f(S.scale, h.x, h.y),
                  A.uniform1f(S.rotation, v.rotation),
                  A.uniform1f(S.opacity, v.opacity),
                  A.uniform3f(S.color, v.color.r, v.color.g, v.color.b),
                  L.setBlending(
                    v.blending,
                    v.blendEquation,
                    v.blendSrc,
                    v.blendDst
                  ),
                  g.setTexture(v.texture, 1),
                  A.drawElements(A.TRIANGLES, 6, A.UNSIGNED_SHORT, 0));
              }
            }
          }
          L.enable(A.CULL_FACE),
            L.enable(A.DEPTH_TEST),
            L.setDepthWrite(!0),
            g.resetGLState();
        }
      };
    }),
    (Oe.WebGLObjects = function(m, v, t) {
      var l = new Oe.WebGLGeometries(m, v, t);
      function g(t, e) {
        var i = t instanceof Oe.InterleavedBufferAttribute ? t.data : t,
          r = v.get(i);
        void 0 === r.__webglBuffer
          ? (function(t, e, i) {
              (t.__webglBuffer = m.createBuffer()),
                m.bindBuffer(i, t.__webglBuffer);
              var r = e.dynamic ? m.DYNAMIC_DRAW : m.STATIC_DRAW;
              m.bufferData(i, e.array, r), (t.version = e.version);
            })(r, i, e)
          : r.version !== i.version &&
            (function(t, e, i) {
              m.bindBuffer(i, t.__webglBuffer),
                !1 === e.dynamic || -1 === e.updateRange.count
                  ? m.bufferSubData(i, 0, e.array)
                  : 0 === e.updateRange.count ||
                    (m.bufferSubData(
                      i,
                      e.updateRange.offset * e.array.BYTES_PER_ELEMENT,
                      e.array.subarray(
                        e.updateRange.offset,
                        e.updateRange.offset + e.updateRange.count
                      )
                    ),
                    (e.updateRange.count = 0));
              t.version = e.version;
            })(r, i, e);
      }
      function y(t, e, i) {
        if (i < e) {
          var r = e;
          (e = i), (i = r);
        }
        var n = t[e];
        return void 0 === n
          ? ((t[e] = [i]), !0)
          : -1 === n.indexOf(i) && (n.push(i), !0);
      }
      (this.getAttributeBuffer = function(t) {
        return t instanceof Oe.InterleavedBufferAttribute
          ? v.get(t.data).__webglBuffer
          : v.get(t).__webglBuffer;
      }),
        (this.getWireframeAttribute = function(t) {
          var e = v.get(t);
          if (void 0 !== e.wireframe) return e.wireframe;
          var i,
            r = [],
            n = t.index,
            a = t.attributes,
            o = a.position;
          if (null !== n)
            for (var s = {}, h = 0, l = (i = n.array).length; h < l; h += 3) {
              var u = i[h + 0],
                c = i[h + 1],
                p = i[h + 2];
              y(s, u, c) && r.push(u, c),
                y(s, c, p) && r.push(c, p),
                y(s, p, u) && r.push(p, u);
            }
          else
            for (
              h = 0, l = (i = a.position.array).length / 3 - 1;
              h < l;
              h += 3
            ) {
              (u = h + 0), (c = h + 1), (p = h + 2);
              r.push(u, c, c, p, p, u);
            }
          var d = 65535 < o.count ? Uint32Array : Uint16Array,
            f = new Oe.BufferAttribute(new d(r), 1);
          return g(f, m.ELEMENT_ARRAY_BUFFER), (e.wireframe = f);
        }),
        (this.update = function(t) {
          var e = l.get(t);
          t.geometry instanceof Oe.Geometry && e.updateFromObject(t);
          var i = e.index,
            r = e.attributes;
          for (var n in (null !== i && g(i, m.ELEMENT_ARRAY_BUFFER), r))
            g(r[n], m.ARRAY_BUFFER);
          var a = e.morphAttributes;
          for (var n in a)
            for (var o = a[n], s = 0, h = o.length; s < h; s++)
              g(o[s], m.ARRAY_BUFFER);
          return e;
        });
    }),
    (Oe.WebGLProgram =
      ((Ne = 0),
      (De = /^([\w\d_]+)\.([\w\d_]+)$/),
      (Be = /^([\w\d_]+)\[(\d+)\]\.([\w\d_]+)$/),
      (Ie = /^([\w\d_]+)\[0\]$/),
      function(t, e, i, r) {
        var n = t.context,
          a = i.extensions,
          o = i.defines,
          s = i.__webglShader.vertexShader,
          h = i.__webglShader.fragmentShader,
          l = "SHADOWMAP_TYPE_BASIC";
        r.shadowMapType === Oe.PCFShadowMap
          ? (l = "SHADOWMAP_TYPE_PCF")
          : r.shadowMapType === Oe.PCFSoftShadowMap &&
            (l = "SHADOWMAP_TYPE_PCF_SOFT");
        var u = "ENVMAP_TYPE_CUBE",
          c = "ENVMAP_MODE_REFLECTION",
          p = "ENVMAP_BLENDING_MULTIPLY";
        if (r.envMap) {
          switch (i.envMap.mapping) {
            case Oe.CubeReflectionMapping:
            case Oe.CubeRefractionMapping:
              u = "ENVMAP_TYPE_CUBE";
              break;
            case Oe.CubeUVReflectionMapping:
            case Oe.CubeUVRefractionMapping:
              u = "ENVMAP_TYPE_CUBE_UV";
              break;
            case Oe.EquirectangularReflectionMapping:
            case Oe.EquirectangularRefractionMapping:
              u = "ENVMAP_TYPE_EQUIREC";
              break;
            case Oe.SphericalReflectionMapping:
              u = "ENVMAP_TYPE_SPHERE";
          }
          switch (i.envMap.mapping) {
            case Oe.CubeRefractionMapping:
            case Oe.EquirectangularRefractionMapping:
              c = "ENVMAP_MODE_REFRACTION";
          }
          switch (i.combine) {
            case Oe.MultiplyOperation:
              p = "ENVMAP_BLENDING_MULTIPLY";
              break;
            case Oe.MixOperation:
              p = "ENVMAP_BLENDING_MIX";
              break;
            case Oe.AddOperation:
              p = "ENVMAP_BLENDING_ADD";
          }
        }
        var d,
          f,
          m,
          v,
          g,
          y,
          x,
          M,
          b = 0 < t.gammaFactor ? t.gammaFactor : 1,
          _ =
            ((d = a),
            (f = r),
            (m = t.extensions),
            [
              (d = d || {}).derivatives ||
              f.envMapCubeUV ||
              f.bumpMap ||
              f.normalMap ||
              f.flatShading
                ? "#extension GL_OES_standard_derivatives : enable"
                : "",
              (d.fragDepth || f.logarithmicDepthBuffer) &&
              m.get("EXT_frag_depth")
                ? "#extension GL_EXT_frag_depth : enable"
                : "",
              d.drawBuffers && m.get("WEBGL_draw_buffers")
                ? "#extension GL_EXT_draw_buffers : require"
                : "",
              (d.shaderTextureLOD || f.envMap) &&
              m.get("EXT_shader_texture_lod")
                ? "#extension GL_EXT_shader_texture_lod : enable"
                : ""
            ]
              .filter(He)
              .join("\n")),
          S = (function(t) {
            var e = [];
            for (var i in t) {
              var r = t[i];
              !1 !== r && e.push("#define " + i + " " + r);
            }
            return e.join("\n");
          })(o),
          w = n.createProgram();
        (g =
          i instanceof Oe.RawShaderMaterial
            ? (v = "")
            : ((v = [
                "precision " + r.precision + " float;",
                "precision " + r.precision + " int;",
                "#define SHADER_NAME " + i.__webglShader.name,
                S,
                r.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
                "#define GAMMA_FACTOR " + b,
                "#define MAX_BONES " + r.maxBones,
                r.map ? "#define USE_MAP" : "",
                r.envMap ? "#define USE_ENVMAP" : "",
                r.envMap ? "#define " + c : "",
                r.lightMap ? "#define USE_LIGHTMAP" : "",
                r.aoMap ? "#define USE_AOMAP" : "",
                r.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
                r.bumpMap ? "#define USE_BUMPMAP" : "",
                r.normalMap ? "#define USE_NORMALMAP" : "",
                r.displacementMap && r.supportsVertexTextures
                  ? "#define USE_DISPLACEMENTMAP"
                  : "",
                r.specularMap ? "#define USE_SPECULARMAP" : "",
                r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
                r.metalnessMap ? "#define USE_METALNESSMAP" : "",
                r.alphaMap ? "#define USE_ALPHAMAP" : "",
                r.vertexColors ? "#define USE_COLOR" : "",
                r.flatShading ? "#define FLAT_SHADED" : "",
                r.skinning ? "#define USE_SKINNING" : "",
                r.useVertexTexture ? "#define BONE_TEXTURE" : "",
                r.morphTargets ? "#define USE_MORPHTARGETS" : "",
                r.morphNormals && !1 === r.flatShading
                  ? "#define USE_MORPHNORMALS"
                  : "",
                r.doubleSided ? "#define DOUBLE_SIDED" : "",
                r.flipSided ? "#define FLIP_SIDED" : "",
                r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
                r.shadowMapEnabled ? "#define " + l : "",
                0 < r.pointLightShadows ? "#define POINT_LIGHT_SHADOWS" : "",
                r.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
                r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
                r.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth")
                  ? "#define USE_LOGDEPTHBUF_EXT"
                  : "",
                "uniform mat4 modelMatrix;",
                "uniform mat4 modelViewMatrix;",
                "uniform mat4 projectionMatrix;",
                "uniform mat4 viewMatrix;",
                "uniform mat3 normalMatrix;",
                "uniform vec3 cameraPosition;",
                "attribute vec3 position;",
                "attribute vec3 normal;",
                "attribute vec2 uv;",
                "#ifdef USE_COLOR",
                "\tattribute vec3 color;",
                "#endif",
                "#ifdef USE_MORPHTARGETS",
                "\tattribute vec3 morphTarget0;",
                "\tattribute vec3 morphTarget1;",
                "\tattribute vec3 morphTarget2;",
                "\tattribute vec3 morphTarget3;",
                "\t#ifdef USE_MORPHNORMALS",
                "\t\tattribute vec3 morphNormal0;",
                "\t\tattribute vec3 morphNormal1;",
                "\t\tattribute vec3 morphNormal2;",
                "\t\tattribute vec3 morphNormal3;",
                "\t#else",
                "\t\tattribute vec3 morphTarget4;",
                "\t\tattribute vec3 morphTarget5;",
                "\t\tattribute vec3 morphTarget6;",
                "\t\tattribute vec3 morphTarget7;",
                "\t#endif",
                "#endif",
                "#ifdef USE_SKINNING",
                "\tattribute vec4 skinIndex;",
                "\tattribute vec4 skinWeight;",
                "#endif",
                "\n"
              ]
                .filter(He)
                .join("\n")),
              [
                _,
                "precision " + r.precision + " float;",
                "precision " + r.precision + " int;",
                "#define SHADER_NAME " + i.__webglShader.name,
                S,
                r.alphaTest ? "#define ALPHATEST " + r.alphaTest : "",
                "#define GAMMA_FACTOR " + b,
                r.useFog && r.fog ? "#define USE_FOG" : "",
                r.useFog && r.fogExp ? "#define FOG_EXP2" : "",
                r.map ? "#define USE_MAP" : "",
                r.envMap ? "#define USE_ENVMAP" : "",
                r.envMap ? "#define " + u : "",
                r.envMap ? "#define " + c : "",
                r.envMap ? "#define " + p : "",
                r.lightMap ? "#define USE_LIGHTMAP" : "",
                r.aoMap ? "#define USE_AOMAP" : "",
                r.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
                r.bumpMap ? "#define USE_BUMPMAP" : "",
                r.normalMap ? "#define USE_NORMALMAP" : "",
                r.specularMap ? "#define USE_SPECULARMAP" : "",
                r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
                r.metalnessMap ? "#define USE_METALNESSMAP" : "",
                r.alphaMap ? "#define USE_ALPHAMAP" : "",
                r.vertexColors ? "#define USE_COLOR" : "",
                r.flatShading ? "#define FLAT_SHADED" : "",
                r.doubleSided ? "#define DOUBLE_SIDED" : "",
                r.flipSided ? "#define FLIP_SIDED" : "",
                r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
                r.shadowMapEnabled ? "#define " + l : "",
                0 < r.pointLightShadows ? "#define POINT_LIGHT_SHADOWS" : "",
                r.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
                r.physicallyCorrectLights
                  ? "#define PHYSICALLY_CORRECT_LIGHTS"
                  : "",
                r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
                r.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth")
                  ? "#define USE_LOGDEPTHBUF_EXT"
                  : "",
                r.envMap && t.extensions.get("EXT_shader_texture_lod")
                  ? "#define TEXTURE_LOD_EXT"
                  : "",
                "uniform mat4 viewMatrix;",
                "uniform vec3 cameraPosition;",
                r.toneMapping !== Oe.NoToneMapping
                  ? "#define TONE_MAPPING"
                  : "",
                r.toneMapping !== Oe.NoToneMapping
                  ? Oe.ShaderChunk.tonemapping_pars_fragment
                  : "",
                r.toneMapping !== Oe.NoToneMapping
                  ? (function(t, e) {
                      var i;
                      switch (e) {
                        case Oe.LinearToneMapping:
                          i = "Linear";
                          break;
                        case Oe.ReinhardToneMapping:
                          i = "Reinhard";
                          break;
                        case Oe.Uncharted2ToneMapping:
                          i = "Uncharted2";
                          break;
                        case Oe.CineonToneMapping:
                          i = "OptimizedCineon";
                          break;
                        default:
                          throw new Error("unsupported toneMapping: " + e);
                      }
                      return (
                        "vec3 " +
                        t +
                        "( vec3 color ) { return " +
                        i +
                        "ToneMapping( color ); }"
                      );
                    })("toneMapping", r.toneMapping)
                  : "",
                r.outputEncoding ||
                r.mapEncoding ||
                r.envMapEncoding ||
                r.emissiveMapEncoding
                  ? Oe.ShaderChunk.encodings_pars_fragment
                  : "",
                r.mapEncoding ? Xe("mapTexelToLinear", r.mapEncoding) : "",
                r.envMapEncoding
                  ? Xe("envMapTexelToLinear", r.envMapEncoding)
                  : "",
                r.emissiveMapEncoding
                  ? Xe("emissiveMapTexelToLinear", r.emissiveMapEncoding)
                  : "",
                r.outputEncoding
                  ? ((y = "linearToOutputTexel"),
                    (x = r.outputEncoding),
                    (M = je(x)),
                    "vec4 " +
                      y +
                      "( vec4 value ) { return LinearTo" +
                      M[0] +
                      M[1] +
                      "; }")
                  : "",
                "\n"
              ]
                .filter(He)
                .join("\n"))),
          (s = qe((s = Ye(s)), r)),
          (h = qe((h = Ye(h)), r)),
          i instanceof Oe.ShaderMaterial == 0 && ((s = Ze(s)), (h = Ze(h)));
        var E = v + s,
          T = g + h,
          A = Oe.WebGLShader(n, n.VERTEX_SHADER, E),
          L = Oe.WebGLShader(n, n.FRAGMENT_SHADER, T);
        n.attachShader(w, A),
          n.attachShader(w, L),
          void 0 !== i.index0AttributeName
            ? n.bindAttribLocation(w, 0, i.index0AttributeName)
            : !0 === r.morphTargets && n.bindAttribLocation(w, 0, "position"),
          n.linkProgram(w);
        var R,
          C,
          U = n.getProgramInfoLog(w),
          P = n.getShaderInfoLog(A),
          F = n.getShaderInfoLog(L),
          N = !0,
          D = !0;
        return (
          !1 === n.getProgramParameter(w, n.LINK_STATUS)
            ? (N = !1)
            : "" !== U || ("" !== P && "" !== F) || (D = !1),
          D &&
            (this.diagnostics = {
              runnable: N,
              material: i,
              programLog: U,
              vertexShader: { log: P, prefix: v },
              fragmentShader: { log: F, prefix: g }
            }),
          n.deleteShader(A),
          n.deleteShader(L),
          (this.getUniforms = function() {
            return (
              void 0 === R &&
                (R = (function(t, e) {
                  for (
                    var i = {},
                      r = t.getProgramParameter(e, t.ACTIVE_UNIFORMS),
                      n = 0;
                    n < r;
                    n++
                  ) {
                    var a = t.getActiveUniform(e, n).name,
                      o = t.getUniformLocation(e, a),
                      s = De.exec(a);
                    if (s) {
                      var h = s[1],
                        l = s[2],
                        u = i[h];
                      (u = u || (i[h] = {}))[l] = o;
                    } else if ((s = Be.exec(a))) {
                      var c = s[1],
                        p = s[2],
                        d = s[3],
                        f = i[c],
                        m = (f = f || (i[c] = []))[p];
                      (m = m || (f[p] = {}))[d] = o;
                    } else (s = Ie.exec(a)) ? (i[(c = s[1])] = o) : (i[a] = o);
                  }
                  return i;
                })(n, w)),
              R
            );
          }),
          (this.getAttributes = function() {
            return (
              void 0 === C &&
                (C = (function(t, e) {
                  for (
                    var i = {},
                      r = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES),
                      n = 0;
                    n < r;
                    n++
                  ) {
                    var a = t.getActiveAttrib(e, n).name;
                    i[a] = t.getAttribLocation(e, a);
                  }
                  return i;
                })(n, w)),
              C
            );
          }),
          (this.destroy = function() {
            n.deleteProgram(w), (this.program = void 0);
          }),
          Object.defineProperties(this, {
            uniforms: {
              get: function() {
                return this.getUniforms();
              }
            },
            attributes: {
              get: function() {
                return this.getAttributes();
              }
            }
          }),
          (this.id = Ne++),
          (this.code = e),
          (this.usedTimes = 1),
          (this.program = w),
          (this.vertexShader = A),
          (this.fragmentShader = L),
          this
        );
      })),
    (Oe.WebGLRenderTarget = function(t, e, i) {
      (this.uuid = Oe.Math.generateUUID()),
        (this.width = t),
        (this.height = e),
        (this.scissor = new Oe.Vector4(0, 0, t, e)),
        (this.scissorTest = !1),
        (this.viewport = new Oe.Vector4(0, 0, t, e)),
        void 0 === (i = i || {}).minFilter && (i.minFilter = Oe.LinearFilter),
        (this.texture = new Oe.Texture(
          void 0,
          void 0,
          i.wrapS,
          i.wrapT,
          i.magFilter,
          i.minFilter,
          i.format,
          i.type,
          i.anisotropy
        )),
        (this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer),
        (this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer);
    }),
    (Oe.WebGLRenderTarget.prototype = {
      constructor: Oe.WebGLRenderTarget,
      setSize: function(t, e) {
        (this.width === t && this.height === e) ||
          ((this.width = t), (this.height = e), this.dispose()),
          this.viewport.set(0, 0, t, e),
          this.scissor.set(0, 0, t, e);
      },
      clone: function() {
        return new this.constructor().copy(this);
      },
      copy: function(t) {
        return (
          (this.width = t.width),
          (this.height = t.height),
          this.viewport.copy(t.viewport),
          (this.texture = t.texture.clone()),
          (this.depthBuffer = t.depthBuffer),
          (this.stencilBuffer = t.stencilBuffer),
          this
        );
      },
      dispose: function() {
        this.dispatchEvent({ type: "dispose" });
      }
    }),
    Oe.EventDispatcher.prototype.apply(Oe.WebGLRenderTarget.prototype),
    (Oe.WebGLRenderTargetCube = function(t, e, i) {
      Oe.WebGLRenderTarget.call(this, t, e, i),
        (this.activeCubeFace = 0),
        (this.activeMipMapLevel = 0);
    }),
    (Oe.WebGLRenderTargetCube.prototype = Object.create(
      Oe.WebGLRenderTarget.prototype
    )),
    (Oe.WebGLRenderTargetCube.prototype.constructor = Oe.WebGLRenderTargetCube),
    (Oe.WebGLPrograms = function(s, h) {
      var l = [],
        u = {
          MeshDepthMaterial: "depth",
          MeshNormalMaterial: "normal",
          MeshBasicMaterial: "basic",
          MeshLambertMaterial: "lambert",
          MeshPhongMaterial: "phong",
          MeshStandardMaterial: "standard",
          LineBasicMaterial: "basic",
          LineDashedMaterial: "dashed",
          PointsMaterial: "points"
        },
        o = [
          "precision",
          "supportsVertexTextures",
          "map",
          "mapEncoding",
          "envMap",
          "envMapMode",
          "envMapEncoding",
          "lightMap",
          "aoMap",
          "emissiveMap",
          "emissiveMapEncoding",
          "bumpMap",
          "normalMap",
          "displacementMap",
          "specularMap",
          "roughnessMap",
          "metalnessMap",
          "alphaMap",
          "combine",
          "vertexColors",
          "fog",
          "useFog",
          "fogExp",
          "flatShading",
          "sizeAttenuation",
          "logarithmicDepthBuffer",
          "skinning",
          "maxBones",
          "useVertexTexture",
          "morphTargets",
          "morphNormals",
          "maxMorphTargets",
          "maxMorphNormals",
          "premultipliedAlpha",
          "numDirLights",
          "numPointLights",
          "numSpotLights",
          "numHemiLights",
          "shadowMapEnabled",
          "pointLightShadows",
          "toneMapping",
          "physicallyCorrectLights",
          "shadowMapType",
          "alphaTest",
          "doubleSided",
          "flipSided"
        ];
      function c(t, e) {
        var i;
        return (
          t
            ? t instanceof Oe.Texture
              ? (i = t.encoding)
              : t instanceof Oe.WebGLRenderTarget && (i = t.texture.encoding)
            : (i = Oe.LinearEncoding),
          i === Oe.LinearEncoding && e && (i = Oe.GammaEncoding),
          i
        );
      }
      (this.getParameters = function(t, e, i, r) {
        var n = u[t.type],
          a = (function(t) {
            if (
              h.floatVertexTextures &&
              t &&
              t.skeleton &&
              t.skeleton.useVertexTexture
            )
              return 1024;
            var e = h.maxVertexUniforms,
              i = Math.floor((e - 20) / 4);
            return (
              void 0 !== t &&
                t instanceof Oe.SkinnedMesh &&
                ((i = Math.min(t.skeleton.bones.length, i)),
                t.skeleton.bones.length),
              i
            );
          })(r),
          o = s.getPrecision();
        return (
          null !== t.precision &&
            ((o = h.getMaxPrecision(t.precision)), t.precision),
          {
            shaderID: n,
            precision: o,
            supportsVertexTextures: h.vertexTextures,
            outputEncoding: c(s.getCurrentRenderTarget(), s.gammaOutput),
            map: !!t.map,
            mapEncoding: c(t.map, s.gammaInput),
            envMap: !!t.envMap,
            envMapMode: t.envMap && t.envMap.mapping,
            envMapEncoding: c(t.envMap, s.gammaInput),
            envMapCubeUV:
              !!t.envMap &&
              (t.envMap.mapping === Oe.CubeUVReflectionMapping ||
                t.envMap.mapping === Oe.CubeUVRefractionMapping),
            lightMap: !!t.lightMap,
            aoMap: !!t.aoMap,
            emissiveMap: !!t.emissiveMap,
            emissiveMapEncoding: c(t.emissiveMap, s.gammaInput),
            bumpMap: !!t.bumpMap,
            normalMap: !!t.normalMap,
            displacementMap: !!t.displacementMap,
            roughnessMap: !!t.roughnessMap,
            metalnessMap: !!t.metalnessMap,
            specularMap: !!t.specularMap,
            alphaMap: !!t.alphaMap,
            combine: t.combine,
            vertexColors: t.vertexColors,
            fog: i,
            useFog: t.fog,
            fogExp: i instanceof Oe.FogExp2,
            flatShading: t.shading === Oe.FlatShading,
            sizeAttenuation: t.sizeAttenuation,
            logarithmicDepthBuffer: h.logarithmicDepthBuffer,
            skinning: t.skinning,
            maxBones: a,
            useVertexTexture:
              h.floatVertexTextures &&
              r &&
              r.skeleton &&
              r.skeleton.useVertexTexture,
            morphTargets: t.morphTargets,
            morphNormals: t.morphNormals,
            maxMorphTargets: s.maxMorphTargets,
            maxMorphNormals: s.maxMorphNormals,
            numDirLights: e.directional.length,
            numPointLights: e.point.length,
            numSpotLights: e.spot.length,
            numHemiLights: e.hemi.length,
            pointLightShadows: e.shadowsPointLight,
            shadowMapEnabled:
              s.shadowMap.enabled && r.receiveShadow && 0 < e.shadows.length,
            shadowMapType: s.shadowMap.type,
            toneMapping: s.toneMapping,
            physicallyCorrectLights: s.physicallyCorrectLights,
            premultipliedAlpha: t.premultipliedAlpha,
            alphaTest: t.alphaTest,
            doubleSided: t.side === Oe.DoubleSide,
            flipSided: t.side === Oe.BackSide
          }
        );
      }),
        (this.getProgramCode = function(t, e) {
          var i = [];
          if (
            (e.shaderID
              ? i.push(e.shaderID)
              : (i.push(t.fragmentShader), i.push(t.vertexShader)),
            void 0 !== t.defines)
          )
            for (var r in t.defines) i.push(r), i.push(t.defines[r]);
          for (var n = 0; n < o.length; n++) {
            var a = o[n];
            i.push(a), i.push(e[a]);
          }
          return i.join();
        }),
        (this.acquireProgram = function(t, e, i) {
          for (var r, n = 0, a = l.length; n < a; n++) {
            var o = l[n];
            if (o.code === i) {
              ++(r = o).usedTimes;
              break;
            }
          }
          return (
            void 0 === r && ((r = new Oe.WebGLProgram(s, i, t, e)), l.push(r)),
            r
          );
        }),
        (this.releaseProgram = function(t) {
          if (0 == --t.usedTimes) {
            var e = l.indexOf(t);
            (l[e] = l[l.length - 1]), l.pop(), t.destroy();
          }
        }),
        (this.programs = l);
    });
  function Qe(t) {
    return --t * t * (2.70158 * t + 1.70158) + 1;
  }
  function Je(t) {
    return new (e() ? ri : i() ? ii : ei)(t);
  }
  var Ke = (function() {
      function e(t) {
        c(this, e),
          Object.assign(this, t),
          (this.renderer = new Ve.WebGLRenderer()),
          this.renderer.setClearColor(0, 0),
          this.renderer.setSize(this.width, this.height),
          this.renderer.setPixelRatio(window.devicePixelRatio),
          (this.el = this.renderer.domElement);
      }
      return (
        t(e, [
          {
            key: "setTexture",
            value: function(t) {
              (this.texture = t), (this.mesh = this.createMesh());
            }
          },
          {
            key: "setSize",
            value: function(t) {
              var e = t.height,
                i = t.width;
              (this.height = e), (this.width = i), this.renderer.setSize(i, e);
            }
          },
          {
            key: "createMesh",
            value: function() {
              return (
                (this.material = new Ve.MeshBasicMaterial({
                  map: this.texture
                })),
                (this.geometry = new Ve.SphereGeometry(1, 50, 50)),
                this.geometry.scale(-1, 1, 1),
                new Ve.Mesh(this.geometry, this.material)
              );
            }
          },
          {
            key: "destroy",
            value: function() {
              this.geometry.dispose(),
                this.material.dispose(),
                this.renderer.dispose();
            }
          },
          {
            key: "render",
            value: function(t, e, i) {
              i && this.renderer.render(t, e);
            }
          }
        ]),
        e
      );
    })(),
    $e = (function() {
      function i(t) {
        var e = this;
        c(this, i),
          Object.assign(this, t),
          (this.el = this.renderer.el),
          (this.theta = (this.initialYaw * Math.PI) / 180),
          (this.phi = 0),
          (this.velo = 0.02),
          (this.rotateStart = new Ve.Vector2()),
          (this.rotateEnd = new Ve.Vector2()),
          (this.rotateDelta = new Ve.Vector2()),
          (this.orientation = new Ve.Quaternion()),
          (this.euler = new Ve.Euler()),
          (this.momentum = !1),
          (this.isUserInteracting = !1),
          this.addDraggableStyle(),
          (this.onMouseMove = this.onMouseMove.bind(this)),
          (this.onMouseDown = this.onMouseDown.bind(this)),
          (this.onMouseUp = this.onMouseUp.bind(this)),
          (this.onTouchStart = function(t) {
            return e.onMouseDown({
              clientX: t.touches[0].pageX,
              clientY: t.touches[0].pageY
            });
          }),
          (this.onTouchMove = function(t) {
            return e.onMouseMove({
              clientX: t.touches[0].pageX,
              clientY: t.touches[0].pageY
            });
          }),
          (this.onTouchEnd = function(t) {
            return e.onMouseUp();
          }),
          (this.onDeviceMotion = this.onDeviceMotion.bind(this)),
          (this.onMessage = this.onMessage.bind(this)),
          this.bindEvents();
      }
      return (
        t(i, [
          {
            key: "bindEvents",
            value: function() {
              this.el.addEventListener("mouseleave", this.onMouseUp),
                this.el.addEventListener("mousemove", this.onMouseMove),
                this.el.addEventListener("mousedown", this.onMouseDown),
                this.el.addEventListener("mouseup", this.onMouseUp),
                this.el.addEventListener("touchstart", this.onTouchStart),
                this.el.addEventListener("touchmove", this.onTouchMove),
                this.el.addEventListener("touchend", this.onTouchEnd),
                this.isInIframe() ||
                  window.addEventListener("devicemotion", this.onDeviceMotion),
                window.addEventListener("message", this.onMessage);
            }
          },
          {
            key: "centralize",
            value: function() {
              var r = this,
                n = (this.initialYaw * Math.PI) / 180,
                a = this.theta,
                o = this.phi,
                s = Date.now(),
                h = (function t() {
                  var e = Date.now() - s,
                    i = e / 750;
                  return (
                    (i = 1 < i ? 1 : i),
                    750 <= e
                      ? cancelAnimationFrame(h)
                      : ((r.theta = a + (n - a) * Qe(i)),
                        (r.phi = o + (0 - o) * Qe(i)),
                        requestAnimationFrame(t))
                  );
                })();
            }
          },
          {
            key: "isInIframe",
            value: function() {
              try {
                return window.self !== window.top;
              } catch (t) {
                return !0;
              }
            }
          },
          {
            key: "destroy",
            value: function() {
              this.el.removeEventListener("mouseleave", this.onMouseUp),
                this.el.removeEventListener("mousemove", this.onMouseMove),
                this.el.removeEventListener("mousedown", this.onMouseDown),
                this.el.removeEventListener("mouseup", this.onMouseUp),
                this.el.removeEventListener("touchstart", this.onTouchStart),
                this.el.removeEventListener("touchmove", this.onTouchMove),
                this.el.removeEventListener("touchend", this.onTouchEnd),
                window.removeEventListener("devicemotion", this.onDeviceMotion),
                window.removeEventListener("message", this.onMessage);
            }
          },
          {
            key: "getCurrentStyle",
            value: function() {
              return "height: "
                .concat(parseInt(this.el.style.height, 10), "px; width: ")
                .concat(
                  parseInt(this.el.style.width, 10),
                  "px; user-select: none; -webkit-user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: rgba(0,0,0,0);"
                );
            }
          },
          {
            key: "addDraggingStyle",
            value: function() {
              this.el.setAttribute(
                "style",
                "".concat(
                  this.getCurrentStyle(),
                  " cursor: -webkit-grabbing; cursor: -moz-grabbing; cursor: grabbing;"
                )
              );
            }
          },
          {
            key: "addDraggableStyle",
            value: function() {
              this.el.setAttribute(
                "style",
                "".concat(
                  this.getCurrentStyle(),
                  " cursor: -webkit-grab; cursor: -moz-grab; cursor: grab;"
                )
              );
            }
          },
          {
            key: "onMessage",
            value: function(t) {
              var e = t.data,
                i = e.orientation,
                r = e.portrait,
                n = e.rotationRate;
              n &&
                this.onDeviceMotion({
                  orientation: i,
                  portrait: r,
                  rotationRate: n
                });
            }
          },
          {
            key: "onDeviceMotion",
            value: function(t) {
              var e,
                i =
                  void 0 !== t.portrait
                    ? t.portrait
                    : window.matchMedia("(orientation: portrait)").matches;
              e =
                void 0 !== t.orientation
                  ? t.orientation
                  : void 0 !== window.orientation
                  ? window.orientation
                  : -90;
              var r = Ve.Math.degToRad(t.rotationRate.alpha),
                n = Ve.Math.degToRad(t.rotationRate.beta);
              i
                ? ((this.phi = this.verticalPanning
                    ? this.phi + r * this.velo
                    : this.phi),
                  (this.theta = this.theta - n * this.velo * -1))
                : (this.verticalPanning &&
                    (this.phi =
                      -90 === e
                        ? this.phi + n * this.velo
                        : this.phi - n * this.velo),
                  (this.theta =
                    -90 === e
                      ? this.theta - r * this.velo
                      : this.theta + r * this.velo)),
                this.adjustPhi();
            }
          },
          {
            key: "onMouseMove",
            value: function(t) {
              this.isUserInteracting &&
                (this.rotateEnd.set(t.clientX, t.clientY),
                this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart),
                this.rotateStart.copy(this.rotateEnd),
                (this.phi = this.verticalPanning
                  ? this.phi +
                    ((2 * Math.PI * this.rotateDelta.y) /
                      this.renderer.height) *
                      0.3
                  : this.phi),
                (this.theta +=
                  ((2 * Math.PI * this.rotateDelta.x) / this.renderer.width) *
                  0.5),
                this.adjustPhi());
            }
          },
          {
            key: "adjustPhi",
            value: function() {
              this.phi = Ve.Math.clamp(
                this.phi,
                -Math.PI / 1.95,
                Math.PI / 1.95
              );
            }
          },
          {
            key: "onMouseDown",
            value: function(t) {
              this.addDraggingStyle(),
                this.rotateStart.set(t.clientX, t.clientY),
                (this.isUserInteracting = !0),
                (this.momentum = !1),
                this.onDragStart && this.onDragStart();
            }
          },
          {
            key: "inertia",
            value: function() {
              this.momentum &&
                ((this.rotateDelta.y *= 0.9),
                (this.rotateDelta.x *= 0.9),
                (this.theta += 0.005 * this.rotateDelta.x),
                (this.phi = this.verticalPanning
                  ? this.phi + 0.005 * this.rotateDelta.y
                  : this.phi),
                this.adjustPhi());
            }
          },
          {
            key: "onMouseUp",
            value: function() {
              this.isUserInteracting && this.onDragStop && this.onDragStop(),
                this.addDraggableStyle(),
                (this.isUserInteracting = !1),
                (this.momentum = !0),
                this.inertia();
            }
          },
          {
            key: "update",
            value: function() {
              return (
                (this.phi !== this.previousPhi ||
                  this.theta !== this.previousTheta) &&
                ((this.previousPhi = this.phi),
                (this.previousTheta = this.theta),
                this.euler.set(this.phi, this.theta, 0, "YXZ"),
                this.orientation.setFromEuler(this.euler),
                this.camera.quaternion.copy(this.orientation),
                this.inertia(),
                !0)
              );
            }
          }
        ]),
        i
      );
    })(),
    ti = (function() {
      function s() {
        var t =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        c(this, s),
          Object.assign(
            this,
            { height: 360, width: 640, initialYaw: 90, verticalPanning: !0 },
            t
          );
        var e = this.height,
          i = this.width,
          r = (this.container, this.containerId, this.initialYaw),
          n = this.verticalPanning,
          a = this.onDragStart,
          o = this.onDragStop;
        (this.renderer = new Ke({ height: e, width: i })),
          (this.camera = new Ve.PerspectiveCamera(
            80,
            this.width / this.height,
            0.1,
            100
          )),
          (this.controls = new $e({
            camera: this.camera,
            renderer: this.renderer,
            initialYaw: r,
            verticalPanning: n,
            onDragStart: a,
            onDragStop: o
          })),
          (this.stopVideoLoop = this.stopVideoLoop.bind(this)),
          (this.onError = this.onError.bind(this)),
          (this.startVideoLoop = this.startVideoLoop.bind(this)),
          (this.needsUpdate = !1),
          (this.scene = this.createScene()),
          this.scene.add(this.camera),
          (this.element = this.getElement()),
          (this.elementReady = !1),
          this.element.addEventListener("playing", this.startVideoLoop),
          this.element.addEventListener("pause", this.stopVideoLoop),
          this.element.addEventListener("ended", this.stopVideoLoop),
          this.element.addEventListener(
            "loadedmetadata",
            this.initAfterLoadedMetadata.bind(this)
          ),
          (this.target = this.container
            ? this.container
            : document.querySelector(this.containerId));
      }
      return (
        t(s, [
          {
            key: "initAfterLoadedMetadata",
            value: function() {
              1 <= this.element.readyState &&
                !this.elementReady &&
                ((this.texture = this.createTexture()),
                this.renderer.setTexture(this.texture),
                (this.scene.getObjectByName("photo").children = [
                  this.renderer.mesh
                ]),
                (this.elementReady = !0));
            }
          },
          {
            key: "play",
            value: function() {
              this.element.play && this.element.play();
            }
          },
          {
            key: "pause",
            value: function() {
              this.element.pause && this.element.pause();
            }
          },
          {
            key: "centralize",
            value: function() {
              this.controls.centralize();
            }
          },
          {
            key: "stopVideoLoop",
            value: function() {
              clearTimeout(this.videoLoopId),
                (this.videoLoopId = null),
                (this.needsUpdate = !1);
            }
          },
          {
            key: "destroy",
            value: function() {
              (this.element.style.display = ""),
                clearTimeout(this.videoLoopId),
                cancelAnimationFrame(this.animationFrameId),
                this.element.pause && this.element.pause(),
                this.target.removeChild(this.renderer.el),
                this.controls.destroy(),
                this.renderer.destroy();
            }
          },
          {
            key: "setSize",
            value: function(t) {
              var e = t.height,
                i = t.width;
              (this.camera.aspect = i / e),
                this.camera.updateProjectionMatrix(),
                this.renderer.setSize({ height: e, width: i });
            }
          },
          {
            key: "getElement",
            value: function() {
              if (this.source && this.source.tagName) return this.source;
              var t = document.createElement("video");
              return (
                (t.loop = this.loop || !1),
                (t.muted = this.muted || !1),
                t.setAttribute("crossorigin", "anonymous"),
                t.setAttribute("webkit-playsinline", "true"),
                t.setAttribute("playsinline", "true"),
                t.setAttribute("src", this.source),
                (t.autoplay = void 0 === this.autoplay || this.autoplay),
                t.addEventListener("error", this.onError),
                t
              );
            }
          },
          {
            key: "createTexture",
            value: function() {
              var t = new Ve.Texture(this.element);
              return (
                (t.minFilter = Ve.LinearFilter),
                (t.magFilter = Ve.LinearFilter),
                (t.format = Ve.RGBFormat),
                (t.generateMipmaps = !1),
                (t.needsUpdate = !0),
                t
              );
            }
          },
          {
            key: "createScene",
            value: function() {
              var t = new Ve.Scene(),
                e = new Ve.Object3D();
              return (e.name = "photo"), t.add(e), t;
            }
          },
          { key: "onError", value: function() {} },
          {
            key: "startVideoLoop",
            value: function() {
              var e = this;
              this.videoLoopId &&
                (clearTimeout(this.videoLoopId), (this.videoLoopId = null));
              !(function t() {
                (e.needsUpdate = !0), (e.videoLoopId = setTimeout(t, 40));
              })();
            }
          },
          {
            key: "render",
            value: function() {
              var i = this;
              this.target.appendChild(this.renderer.el),
                (this.element.style.display = "none");
              this.startVideoLoop(),
                (function t() {
                  i.animationFrameId = requestAnimationFrame(t);
                  var e = i.controls.update();
                  i.renderer.render(i.scene, i.camera, i.needsUpdate || e),
                    (i.needsUpdate = !1);
                })();
            }
          }
        ]),
        s
      );
    })(),
    ei = (function() {
      function e(t) {
        return c(this, e), d(this, s(e).call(this, t));
      }
      return (
        o(e, ti),
        t(e, [
          {
            key: "createTexture",
            value: function() {
              var t = new Ve.VideoTexture(this.element);
              return (
                (t.minFilter = Ve.LinearFilter),
                (t.magFilter = Ve.LinearFilter),
                (t.format = Ve.RGBFormat),
                (t.generateMipmaps = !1),
                (t.needsUpdate = !0),
                t
              );
            }
          }
        ]),
        e
      );
    })(),
    ii = (function() {
      function i(t) {
        var e;
        return (
          c(this, i),
          ((e = d(this, s(i).call(this, t))).context = e.element.getContext(
            "2d"
          )),
          e
        );
      }
      return (
        o(i, ti),
        t(i, [
          {
            key: "play",
            value: function() {
              this.video.play && this.video.play();
            }
          },
          {
            key: "pause",
            value: function() {
              this.video.pause && this.video.pause();
            }
          },
          {
            key: "destroy",
            value: function() {
              (this.video.style.display = ""),
                f(s(i.prototype), "destroy", this).call(this);
            }
          },
          {
            key: "getElement",
            value: function() {
              (this.video = f(s(i.prototype), "getElement", this).call(this)),
                this.video.addEventListener("playing", this.startVideoLoop),
                this.video.addEventListener("pause", this.stopVideoLoop),
                this.video.addEventListener("ended", this.stopVideoLoop);
              var t = document.createElement("canvas");
              return (
                (t.height = this.video.videoHeight),
                (t.width = this.video.videoWidth),
                t
              );
            }
          },
          {
            key: "render",
            value: function() {
              var n = this;
              this.target.appendChild(this.renderer.el),
                (this.video.style.display = "none");
              this.startVideoLoop(),
                (function t() {
                  n.animationFrameId = requestAnimationFrame(t);
                  var e = n.video.videoHeight,
                    i = n.video.videoWidth;
                  n.element.height != e && (n.element.height = e),
                    n.element.width != i && (n.element.width = i),
                    n.context.clearRect(0, 0, i, e),
                    n.context.drawImage(n.video, 0, 0, i, e);
                  var r = n.controls.update();
                  n.renderer.render(n.scene, n.camera, n.needsUpdate || r),
                    (n.renderer.mesh.material.map.needsUpdate = !0),
                    (n.needsUpdate = !1);
                })();
            }
          }
        ]),
        i
      );
    })(),
    ri = (function() {
      function i(t) {
        var e;
        return (
          c(this, i),
          (e = d(this, s(i).call(this, t))).driver.addEventListener(
            "playing",
            e.startVideoLoop
          ),
          e.driver.addEventListener("pause", e.stopVideoLoop),
          e.driver.addEventListener("ended", e.stopVideoLoop),
          e.driver.addEventListener("stalled", e.stopVideoLoop),
          (e.driverInitialized = !1),
          e
        );
      }
      return (
        o(i, ti),
        t(i, [
          {
            key: "play",
            value: function() {
              this.driver.play();
            }
          },
          {
            key: "pause",
            value: function() {
              this.driver.pause();
            }
          },
          {
            key: "getElement",
            value: function() {
              this.source && this.source.tagName
                ? (this.driver = this.source)
                : ((this.driver = document.createElement("audio")),
                  (this.driver.src = this.source),
                  (this.driver.loop = this.loop || !1),
                  (this.driver.muted = this.muted || !1),
                  this.driver.setAttribute("crossorigin", "anonymous"),
                  (this.driver.autoplay = this.autoplay || !0)),
                (this.source = this.driver.src),
                (this.driver.src = ""),
                this.driver.load();
              var t = document.createElement("video");
              return (
                t.setAttribute("crossorigin", "anonymous"),
                (t.src = this.source),
                t.load(),
                t.addEventListener("error", this.onError),
                t
              );
            }
          },
          {
            key: "createTexture",
            value: function() {
              var t = new Ve.VideoTexture(this.element);
              return (
                (t.minFilter = Ve.LinearFilter),
                (t.magFilter = Ve.LinearFilter),
                (t.format = Ve.RGBFormat),
                (t.generateMipmaps = !1),
                (t.needsUpdate = !0),
                t
              );
            }
          },
          {
            key: "startVideoLoop",
            value: function() {
              var e = this;
              this.videoLoopId &&
                (clearTimeout(this.videoLoopId), (this.videoLoopId = null));
              !(function t() {
                (e.element.currentTime = e.driver.currentTime),
                  (e.needsUpdate = !0),
                  (e.videoLoopId = setTimeout(t, 40));
              })();
            }
          },
          {
            key: "destroy",
            value: function() {
              (this.driver.style.display = ""),
                f(s(i.prototype), "destroy", this).call(this);
            }
          },
          {
            key: "render",
            value: function() {
              var i = this;
              this.target.appendChild(this.renderer.el),
                (this.element.style.display = "none"),
                (this.driver.style.display = "none");
              !(function t() {
                var e = i.controls.update();
                i.renderer.render(i.scene, i.camera, i.needsUpdate || e),
                  (i.needsUpdate = !1),
                  (i.animationFrameId = requestAnimationFrame(t)),
                  i.element.readyState >= i.element.HAVE_FUTURE_DATA &&
                    !i.driverInitialized &&
                    ((i.driver.src = i.source),
                    i.driver.load(),
                    i.onDriverReady && i.onDriverReady(),
                    (i.driverInitialized = !0));
              })();
            }
          }
        ]),
        i
      );
    })();
  return (function() {
    function s(t) {
      var e, i, r;
      (function(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, s),
        (i = this),
        (e =
          !(r = l(s).call(this, t)) ||
          ("object" != typeof r && "function" != typeof r)
            ? u(i)
            : r),
        h.Mediator.on(
          "".concat(e.options.playerId, ":").concat(h.Events.PLAYER_RESIZE),
          e.updateSize,
          u(e)
        );
      var n = t.options,
        a = n.height,
        o = n.width;
      n.autoplay;
      return (
        t.playback.el.setAttribute("crossorigin", "anonymous"),
        t.playback.el.setAttribute("preload", "metadata"),
        t.playback.el.setAttribute("playsinline", "true"),
        (t.el.style.touchAction = "none"),
        t.el.addEventListener(
          "touchmove",
          function(t) {
            t.preventDefault();
          },
          !1
        ),
        (e.viewer = new Je({
          height: isNaN(a) ? 300 : a,
          width: isNaN(o) ? 400 : o,
          container: e.container.el,
          source: e.container.playback.el
        })),
        e.viewer.render(),
        e
      );
    }
    return (
      (function(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 }
        })),
          e && n(t, e);
      })(s, h.ContainerPlugin),
      (t = s),
      (e = [
        {
          key: "updateSize",
          value: function() {
            var t = this;
            setTimeout(function() {
              return t.viewer.setSize({
                height: t.container.$el.height(),
                width: t.container.$el.width()
              });
            }, 250);
          }
        },
        {
          key: "name",
          get: function() {
            return "Video360";
          }
        }
      ]) && r(t.prototype, e),
      i && r(t, i),
      s
    );
    var t, e, i;
  })();
});
