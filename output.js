//Fri Nov 28 2025 15:23:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("有赞");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(I) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (K) {
      return typeof K;
    } : function (K) {
      return K && "function" == typeof Symbol && K.constructor === Symbol && K !== Symbol.prototype ? "symbol" : typeof K;
    };
    return b(I);
  }
  function c(I, J) {
    var L = "undefined" != typeof Symbol && I[Symbol.iterator] || I["@@iterator"];
    if (!L) {
      if (Array.isArray(I) || (L = d(I)) || J && I && "number" == typeof I.length) {
        L && (I = L);
        var M = 0,
          N = function () {};
        return {
          s: N,
          n: function () {
            var S = {
              done: !0
            };
            return M >= I.length ? S : {
              done: !1,
              value: I[M++]
            };
          },
          e: function (S) {
            throw S;
          },
          f: N
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var O,
      P = !0,
      Q = !1;
    return {
      s: function () {
        L = L.call(I);
      },
      n: function () {
        var T = L.next();
        P = T.done;
        return T;
      },
      e: function (T) {
        Q = !0;
        O = T;
      },
      f: function () {
        try {
          P || null == L.return || L.return();
        } finally {
          if (Q) {
            throw O;
          }
        }
      }
    };
  }
  function d(I, J) {
    if (I) {
      if ("string" == typeof I) {
        return e(I, J);
      }
      var L = {}.toString.call(I).slice(8, -1);
      "Object" === L && I.constructor && (L = I.constructor.name);
      return "Map" === L || "Set" === L ? Array.from(I) : "Arguments" === L || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L) ? e(I, J) : void 0;
    }
  }
  function e(I, J) {
    (null == J || J > I.length) && (J = I.length);
    for (var K = 0, L = Array(J); K < J; K++) {
      L[K] = I[K];
    }
    return L;
  }
  function f() {
    'use strict';

    f = function () {
      return M;
    };
    var K,
      M = {},
      P = Object.prototype,
      Q = P.hasOwnProperty,
      T = Object.defineProperty || function (al, am, an) {
        al[am] = an.value;
      },
      U = "function" == typeof Symbol ? Symbol : {},
      V = U.iterator || "@@iterator",
      W = U.asyncIterator || "@@asyncIterator",
      X = U.toStringTag || "@@toStringTag";
    function Y(al, am, an) {
      var ao = {
        value: an,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(al, am, ao);
      return al[am];
    }
    try {
      Y({}, "");
    } catch (am) {
      Y = function (an, ao, ap) {
        return an[ao] = ap;
      };
    }
    function Z(ao, ap, aq, ar) {
      var at = ap && ap.prototype instanceof a6 ? ap : a6,
        au = Object.create(at.prototype),
        av = new aj(ar || []);
      T(au, "_invoke", {
        value: af(ao, aq, av)
      });
      return au;
    }
    function a0(ao, ap, aq) {
      try {
        return {
          type: "normal",
          arg: ao.call(ap, aq)
        };
      } catch (av) {
        var as = {
          type: "throw",
          arg: av
        };
        return as;
      }
    }
    M.wrap = Z;
    var a1 = "suspendedStart",
      a2 = "suspendedYield",
      a3 = "executing",
      a4 = "completed",
      a5 = {};
    function a6() {}
    function a7() {}
    function a8() {}
    var a9 = {};
    Y(a9, V, function () {
      return this;
    });
    var aa = Object.getPrototypeOf,
      ab = aa && aa(aa(ak([])));
    ab && ab !== P && Q.call(ab, V) && (a9 = ab);
    a8.prototype = a6.prototype = Object.create(a9);
    var ac = a8.prototype;
    function ad(ao) {
      ["next", "throw", "return"].forEach(function (as) {
        Y(ao, as, function (au) {
          return this._invoke(as, au);
        });
      });
    }
    function ae(ao, ap) {
      function as(at, au, av, aw) {
        var ay = a0(ao[at], ao, au);
        if ("throw" !== ay.type) {
          var az = ay.arg,
            aA = az.value;
          return aA && "object" == b(aA) && Q.call(aA, "__await") ? ap.resolve(aA.__await).then(function (aC) {
            as("next", aC, av, aw);
          }, function (aC) {
            as("throw", aC, av, aw);
          }) : ap.resolve(aA).then(function (aC) {
            az.value = aC;
            av(az);
          }, function (aC) {
            return as("throw", aC, av, aw);
          });
        }
        aw(ay.arg);
      }
      var ar;
      T(this, "_invoke", {
        value: function (at, au) {
          function aw() {
            return new ap(function (ay, az) {
              as(at, au, ay, az);
            });
          }
          return ar = ar ? ar.then(aw, aw) : aw();
        }
      });
    }
    function af(ao, ap, aq) {
      var as = a1;
      return function (au, av) {
        if (as === a3) {
          throw Error("Generator is already running");
        }
        if (as === a4) {
          if ("throw" === au) {
            throw av;
          }
          var ax = {
            value: K,
            done: !0
          };
          return ax;
        }
        for (aq.method = au, aq.arg = av;;) {
          var ay = aq.delegate;
          if (ay) {
            var az = ag(ay, aq);
            if (az) {
              if (az === a5) {
                continue;
              }
              return az;
            }
          }
          if ("next" === aq.method) {
            aq.sent = aq._sent = aq.arg;
          } else {
            if ("throw" === aq.method) {
              if (as === a1) {
                throw as = a4, aq.arg;
              }
              aq.dispatchException(aq.arg);
            } else {
              "return" === aq.method && aq.abrupt("return", aq.arg);
            }
          }
          as = a3;
          var aA = a0(ao, ap, aq);
          if ("normal" === aA.type) {
            if (as = aq.done ? a4 : a2, aA.arg === a5) {
              continue;
            }
            var aB = {};
            aB.value = aA.arg;
            aB.done = aq.done;
            return aB;
          }
          "throw" === aA.type && (as = a4, aq.method = "throw", aq.arg = aA.arg);
        }
      };
    }
    function ag(ao, ap) {
      var as = ap.method,
        at = ao.iterator[as];
      if (at === K) {
        ap.delegate = null;
        "throw" === as && ao.iterator.return && (ap.method = "return", ap.arg = K, ag(ao, ap), "throw" === ap.method) || "return" !== as && (ap.method = "throw", ap.arg = new TypeError("The iterator does not provide a '" + as + "' method"));
        return a5;
      }
      var au = a0(at, ao.iterator, ap.arg);
      if ("throw" === au.type) {
        ap.method = "throw";
        ap.arg = au.arg;
        ap.delegate = null;
        return a5;
      }
      var av = au.arg;
      return av ? av.done ? (ap[ao.resultName] = av.value, ap.next = ao.nextLoc, "return" !== ap.method && (ap.method = "next", ap.arg = K), ap.delegate = null, a5) : av : (ap.method = "throw", ap.arg = new TypeError("iterator result is not an object"), ap.delegate = null, a5);
    }
    function ah(ao) {
      var ap = {
        tryLoc: ao[0]
      };
      var aq = ap;
      1 in ao && (aq.catchLoc = ao[1]);
      2 in ao && (aq.finallyLoc = ao[2], aq.afterLoc = ao[3]);
      this.tryEntries.push(aq);
    }
    function ai(ao) {
      var ap = ao.completion || {};
      ap.type = "normal";
      delete ap.arg;
      ao.completion = ap;
    }
    function aj(ao) {
      var aq = {
        tryLoc: "root"
      };
      this.tryEntries = [aq];
      ao.forEach(ah, this);
      this.reset(!0);
    }
    function ak(ao) {
      if (ao || "" === ao) {
        var ap = ao[V];
        if (ap) {
          return ap.call(ao);
        }
        if ("function" == typeof ao.next) {
          return ao;
        }
        if (!isNaN(ao.length)) {
          var aq = -1,
            ar = function at() {
              for (; ++aq < ao.length;) {
                if (Q.call(ao, aq)) {
                  at.value = ao[aq];
                  at.done = !1;
                  return at;
                }
              }
              at.value = K;
              at.done = !0;
              return at;
            };
          return ar.next = ar;
        }
      }
      throw new TypeError(b(ao) + " is not iterable");
    }
    a7.prototype = a8;
    T(ac, "constructor", {
      value: a8,
      configurable: !0
    });
    T(a8, "constructor", {
      value: a7,
      configurable: !0
    });
    a7.displayName = Y(a8, X, "GeneratorFunction");
    M.isGeneratorFunction = function (ao) {
      var aq = "function" == typeof ao && ao.constructor;
      return !!aq && (aq === a7 || "GeneratorFunction" === (aq.displayName || aq.name));
    };
    M.mark = function (ao) {
      Object.setPrototypeOf ? Object.setPrototypeOf(ao, a8) : (ao.__proto__ = a8, Y(ao, X, "GeneratorFunction"));
      ao.prototype = Object.create(ac);
      return ao;
    };
    M.awrap = function (ao) {
      var aq = {
        __await: ao
      };
      return aq;
    };
    ad(ae.prototype);
    Y(ae.prototype, W, function () {
      return this;
    });
    M.AsyncIterator = ae;
    M.async = function (ao, ap, aq, ar, as) {
      void 0 === as && (as = Promise);
      var au = new ae(Z(ao, ap, aq, ar), as);
      return M.isGeneratorFunction(ap) ? au : au.next().then(function (aw) {
        return aw.done ? aw.value : au.next();
      });
    };
    ad(ac);
    Y(ac, X, "Generator");
    Y(ac, V, function () {
      return this;
    });
    Y(ac, "toString", function () {
      return "[object Generator]";
    });
    M.keys = function (ao) {
      var aq = Object(ao),
        ar = [];
      for (var as in aq) ar.push(as);
      ar.reverse();
      return function at() {
        for (; ar.length;) {
          var au = ar.pop();
          if (au in aq) {
            at.value = au;
            at.done = !1;
            return at;
          }
        }
        at.done = !0;
        return at;
      };
    };
    M.values = ak;
    aj.prototype = {
      constructor: aj,
      reset: function (ao) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = K, this.done = !1, this.delegate = null, this.method = "next", this.arg = K, this.tryEntries.forEach(ai), !ao) {
          for (var ap in this) "t" === ap.charAt(0) && Q.call(this, ap) && !isNaN(+ap.slice(1)) && (this[ap] = K);
        }
      },
      stop: function () {
        this.done = !0;
        var ao = this.tryEntries[0].completion;
        if ("throw" === ao.type) {
          throw ao.arg;
        }
        return this.rval;
      },
      dispatchException: function (ao) {
        if (this.done) {
          throw ao;
        }
        var aq = this;
        function aw(ax, ay) {
          at.type = "throw";
          at.arg = ao;
          aq.next = ax;
          ay && (aq.method = "next", aq.arg = K);
          return !!ay;
        }
        for (var ar = this.tryEntries.length - 1; ar >= 0; --ar) {
          var as = this.tryEntries[ar],
            at = as.completion;
          if ("root" === as.tryLoc) {
            return aw("end");
          }
          if (as.tryLoc <= this.prev) {
            var au = Q.call(as, "catchLoc"),
              av = Q.call(as, "finallyLoc");
            if (au && av) {
              if (this.prev < as.catchLoc) {
                return aw(as.catchLoc, !0);
              }
              if (this.prev < as.finallyLoc) {
                return aw(as.finallyLoc);
              }
            } else {
              if (au) {
                if (this.prev < as.catchLoc) {
                  return aw(as.catchLoc, !0);
                }
              } else {
                if (!av) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < as.finallyLoc) {
                  return aw(as.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (ao, ap) {
        for (var ar = this.tryEntries.length - 1; ar >= 0; --ar) {
          var as = this.tryEntries[ar];
          if (as.tryLoc <= this.prev && Q.call(as, "finallyLoc") && this.prev < as.finallyLoc) {
            var at = as;
            break;
          }
        }
        at && ("break" === ao || "continue" === ao) && at.tryLoc <= ap && ap <= at.finallyLoc && (at = null);
        var au = at ? at.completion : {};
        au.type = ao;
        au.arg = ap;
        return at ? (this.method = "next", this.next = at.finallyLoc, a5) : this.complete(au);
      },
      complete: function (ao, ap) {
        if ("throw" === ao.type) {
          throw ao.arg;
        }
        "break" === ao.type || "continue" === ao.type ? this.next = ao.arg : "return" === ao.type ? (this.rval = this.arg = ao.arg, this.method = "return", this.next = "end") : "normal" === ao.type && ap && (this.next = ap);
        return a5;
      },
      finish: function (ao) {
        for (var aq = this.tryEntries.length - 1; aq >= 0; --aq) {
          var ar = this.tryEntries[aq];
          if (ar.finallyLoc === ao) {
            this.complete(ar.completion, ar.afterLoc);
            ai(ar);
            return a5;
          }
        }
      },
      catch: function (ao) {
        for (var aq = this.tryEntries.length - 1; aq >= 0; --aq) {
          var ar = this.tryEntries[aq];
          if (ar.tryLoc === ao) {
            var as = ar.completion;
            if ("throw" === as.type) {
              var at = as.arg;
              ai(ar);
            }
            return at;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (ao, ap, aq) {
        this.delegate = {
          iterator: ak(ao),
          resultName: ap,
          nextLoc: aq
        };
        "next" === this.method && (this.arg = K);
        return a5;
      }
    };
    return M;
  }
  function g(I, J, K, L, M, N, O) {
    try {
      var Q = I[N](O),
        R = Q.value;
    } catch (T) {
      return void K(T);
    }
    Q.done ? J(R) : Promise.resolve(R).then(L, M);
  }
  function h(I) {
    return function () {
      var K = this,
        L = arguments;
      return new Promise(function (M, N) {
        var P = I.apply(K, L);
        function Q(S) {
          g(P, M, N, Q, R, "next", S);
        }
        function R(S) {
          g(P, M, N, Q, R, "throw", S);
        }
        Q(void 0);
      });
    };
  }
  var i = ($.isNode() ? process.env.YOUZAN : $.getdata("YOUZAN")) || "",
    j = ($.isNode() ? process.env.CAPTCHA_SERVER : $.getdata("CAPTCHA_SERVER")) || "https://captcha.fuckinghigh.eu.org",
    k = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top",
    l,
    m,
    n,
    o,
    p,
    q = "",
    r = ($.isNode() ? process.env.YOUZAN_QueryProduct : $.getdata("YOUZAN_QueryProduct")) || !1,
    s = ["checkinId=12063&kdt_id=18739377", "checkinId=2162835&kdt_id=44877243", "checkinId=99&kdt_id=41067901", "checkinId=3520910&kdt_id=129380009", "checkinId=2923467&kdt_id=109809208", "checkinId=2910869&kdt_id=43958855", "checkinId=2386563&kdt_id=42213767", "checkinId=1597464&kdt_id=100464643", "checkinId=3347128&kdt_id=117130552", "checkinId=2299510&kdt_id=107786737", "checkinId=18415&kdt_id=44694253", "checkinId=3549859&kdt_id=130177909", "checkinId=1820214&kdt_id=93457151", "checkinId=3997371&kdt_id=105036832", "checkinId=4804346&kdt_id=121810522", "checkinId=4296415&kdt_id=146288343", "checkinId=4806300&kdt_id=139827364", "checkinId=13736&kdt_id=16365465", "checkinId=9975&kdt_id=77770507", "checkinId=24630&kdt_id=43183730"];
  function u() {
    return v.apply(this, arguments);
  }
  function v() {
    v = h(f().mark(function K() {
      var M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, a0, a1, a2, a3;
      return f().wrap(function (a4) {
        for (;;) {
          switch (a4.prev = a4.next) {
            case 0:
              if (i) {
                a4.next = 5;
                break;
              }
              console.log("先填写账号token");
              a4.next = 4;
              return G("先填写账号token");
            case 4:
              return a4.abrupt("return");
            case 5:
              a4.next = 7;
              return C();
            case 7:
              Utils = a4.sent;
              p = Utils.createCryptoJS();
              M = i.split(" ");
              N = c(M.slice(0, 10));
              a4.prev = 11;
              N.s();
            case 13:
              if ((O = N.n()).done) {
                a4.next = 88;
                break;
              }
              P = O.value;
              a4.prev = 15;
              n = P.split("&")[0];
              o = P.split("&")[1];
              console.log("用户：".concat(n, "开始签到"));
              m = p.enc.Utf8.parse("youzan.com._key_");
              l = p.enc.Utf8.parse("youzan.com.aesiv");
              a4.next = 23;
              return y("https://passport.youzan.com/api/login/password.json", {
                countryCode: "+86",
                mobile: n,
                password: B(o),
                passwordLevel: A(o),
                passwordLength: o.length
              });
            case 23:
              if (Q = a4.sent, console.log(Q.msg), 40000310 != Q.code) {
                a4.next = 40;
                break;
              }
              a4.next = 28;
              return w("".concat(j, "/captcha?aidEncrypted=").concat(Q.data.decisionData.aidEncrypted));
            case 28:
              if (R = a4.sent, R) {
                a4.next = 31;
                break;
              }
              return a4.abrupt("continue", 86);
            case 31:
              console.log(R);
              a4.next = 34;
              return y("https://passport.youzan.com/api/login/password.json", {
                countryCode: "+86",
                mobile: n,
                password: B(o),
                passwordLevel: A(o),
                passwordLength: o.length,
                behavior: {
                  decisionCode: "TENCENT_LOW_RISK",
                  verifyResult: {
                    code: 0,
                    data: {
                      appid: Q.data.decisionData.captchaAppId,
                      ret: 0,
                      ticket: R.ticket,
                      randstr: R.randstr,
                      verifyDuration: R.verifyDuration,
                      actionDuration: R.actionDuration,
                      sid: R.sid
                    }
                  }
                }
              });
            case 34:
              if (Q = a4.sent, console.log(Q.msg), 0 == Q.code) {
                a4.next = 40;
                break;
              }
              a4.next = 39;
              return G("用户：".concat(n, " 登录失败：").concat(Q.msg));
            case 39:
              return a4.abrupt("continue", 86);
            case 40:
              S = c(s);
              a4.prev = 41;
              S.s();
            case 43:
              if ((T = S.n()).done) {
                a4.next = 71;
                break;
              }
              U = T.value;
              a4.next = 47;
              return w("https://h5.youzan.com/wscshopcore/extension/shop-info.json?".concat(U));
            case 47:
              V = a4.sent;
              console.log("店铺： ".concat(V.data.shop.shopName, " id：").concat(U));
              a4.next = 51;
              return w("https://h5.youzan.com/wscump/checkin/checkinV2.json?".concat(U));
            case 51:
              W = a4.sent;
              console.log("签到结果：" + W.msg);
              a4.next = 55;
              return $.wait(2000);
            case 55:
              a4.next = 57;
              return w("https://h5.youzan.com/wscuser/membercenter/pointsName.json?".concat(U));
            case 57:
              X = a4.sent;
              a4.next = 60;
              return w("https://h5.youzan.com/wscuser/membercenter/stats.json?".concat(U));
            case 60:
              if (Y = a4.sent, console.log("拥有".concat(X.data.pointsName, "：").concat(Y.data.stats.points)), !r) {
                a4.next = 68;
                break;
              }
              a4.next = 65;
              return w("https://h5.youzan.com/wscump/pointstore/listPointGoods.json?page_size=1000");
            case 65:
              Z = a4.sent;
              a0 = c(Z.data.items);
              try {
                for (a0.s(); !(a1 = a0.n()).done;) {
                  a2 = a1.value;
                  a3 = a2.couponGroupInfoDTO.groupName || a2.generalGoodsInfoDTO.generalGoodsTitle;
                  console.log("商品：".concat(a3, " 库存：").concat(a2.pointGoodsStockDTO.availableStock, " 需要").concat(X.data.pointsName, "：").concat(a2.pointGoodsExchangePriceDTO.points, " + ￥").concat(a2.pointGoodsExchangePriceDTO.cash / 100));
                }
              } catch (af) {
                a0.e(af);
              } finally {
                a0.f();
              }
            case 68:
              console.log("\n");
            case 69:
              a4.next = 43;
              break;
            case 71:
              a4.next = 76;
              break;
            case 73:
              a4.prev = 73;
              a4.t0 = a4.catch(41);
              S.e(a4.t0);
            case 76:
              a4.prev = 76;
              S.f();
              return a4.finish(76);
            case 79:
              console.log("用户：".concat(n, "签到结束\n"));
              q += "用户：".concat(n, " 签到已完成\n");
              a4.next = 86;
              break;
            case 83:
              a4.prev = 83;
              a4.t1 = a4.catch(15);
              console.log(a4.t1);
            case 86:
              a4.next = 13;
              break;
            case 88:
              a4.next = 93;
              break;
            case 90:
              a4.prev = 90;
              a4.t2 = a4.catch(11);
              N.e(a4.t2);
            case 93:
              a4.prev = 93;
              N.f();
              return a4.finish(93);
            case 96:
              if (!q) {
                a4.next = 99;
                break;
              }
              a4.next = 99;
              return G(q);
            case 99:
            case "end":
              return a4.stop();
          }
        }
      }, K, null, [[11, 90, 93, 96], [15, 83], [41, 73, 76, 79]]);
    }));
    return v.apply(this, arguments);
  }
  function w(I) {
    return x.apply(this, arguments);
  }
  function x() {
    x = h(f().mark(function J(K) {
      return f().wrap(function (L) {
        for (;;) {
          switch (L.prev = L.next) {
            case 0:
              return L.abrupt("return", new Promise(function (N) {
                var O = {
                  url: "".concat(K),
                  headers: {}
                };
                $.get(O, function () {
                  var Q = h(f().mark(function R(S, T, U) {
                    return f().wrap(function (X) {
                      for (;;) {
                        switch (X.prev = X.next) {
                          case 0:
                            try {
                              S ? (console.log("".concat(JSON.stringify(S))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : N(JSON.parse(U));
                            } catch (Z) {
                              $.logErr(Z, T);
                            } finally {
                              N();
                            }
                          case 1:
                          case "end":
                            return X.stop();
                        }
                      }
                    }, R);
                  }));
                  return function (S, T, U) {
                    return Q.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return L.stop();
          }
        }
      }, J);
    }));
    return x.apply(this, arguments);
  }
  function y(I, J) {
    return z.apply(this, arguments);
  }
  function z() {
    z = h(f().mark(function J(K, L) {
      return f().wrap(function (M) {
        for (;;) {
          switch (M.prev = M.next) {
            case 0:
              return M.abrupt("return", new Promise(function (O) {
                var Q = {
                  "content-type": "application/json"
                };
                var R = {
                  url: "".concat(K),
                  headers: Q,
                  body: JSON.stringify(L)
                };
                $.post(R, function () {
                  var S = h(f().mark(function T(U, V, W) {
                    return f().wrap(function (Y) {
                      for (;;) {
                        switch (Y.prev = Y.next) {
                          case 0:
                            try {
                              U ? (console.log("".concat(JSON.stringify(U))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : O(JSON.parse(W));
                            } catch (Z) {
                              $.logErr(Z, V);
                            } finally {
                              O();
                            }
                          case 1:
                          case "end":
                            return Y.stop();
                        }
                      }
                    }, T);
                  }));
                  return function (U, V, W) {
                    return S.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return M.stop();
          }
        }
      }, J);
    }));
    return z.apply(this, arguments);
  }
  function A(I) {
    var J = -1;
    /\d+/.test(I) && J++;
    /[a-zA-Z]+/.test(I) && J++;
    /[^A-Za-z0-9]+/.test(I) && J++;
    return J;
  }
  function B(I) {
    var J = p.enc.Utf8.parse(I),
      K = p.AES.encrypt(J, m, {
        mode: p.mode.CBC,
        padding: p.pad.Pkcs7,
        iv: l
      });
    return K.toString();
  }
  function C() {
    return D.apply(this, arguments);
  }
  function D() {
    D = h(f().mark(function I() {
      var K;
      return f().wrap(function L(M) {
        for (;;) {
          switch (M.prev = M.next) {
            case 0:
              if (K = $.getdata("Utils_Code") || "", !K || !Object.keys(K).length) {
                M.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(K);
              return M.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return M.abrupt("return", new Promise(function () {
                var O = h(f().mark(function P(Q) {
                  return f().wrap(function S(T) {
                    for (;;) {
                      switch (T.prev = T.next) {
                        case 0:
                          $.getScript("".concat(k, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (U) {
                            $.setdata(U, "Utils_Code");
                            eval(U);
                            console.log("✅ Utils加载成功, 请继续");
                            Q(creatUtils());
                          });
                        case 1:
                        case "end":
                          return T.stop();
                      }
                    }
                  }, P);
                }));
                return function (Q) {
                  return O.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return M.stop();
          }
        }
      }, I);
    }));
    return D.apply(this, arguments);
  }
  function E() {
    return F.apply(this, arguments);
  }
  function F() {
    F = h(f().mark(function J() {
      return f().wrap(function (M) {
        for (;;) {
          switch (M.prev = M.next) {
            case 0:
              return M.abrupt("return", new Promise(function (O) {
                var P = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(P, function () {
                  var R = h(f().mark(function S(T, U, V) {
                    return f().wrap(function (Y) {
                      for (;;) {
                        switch (Y.prev = Y.next) {
                          case 0:
                            try {
                              T ? (console.log("".concat(JSON.stringify(T))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(V).notice);
                            } catch (Z) {
                              $.logErr(Z, U);
                            } finally {
                              O();
                            }
                          case 1:
                          case "end":
                            return Y.stop();
                        }
                      }
                    }, S);
                  }));
                  return function (T, U, V) {
                    return R.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return M.stop();
          }
        }
      }, J);
    }));
    return F.apply(this, arguments);
  }
  function G(I) {
    return H.apply(this, arguments);
  }
  function H() {
    H = h(f().mark(function I(J) {
      return f().wrap(function (M) {
        for (;;) {
          switch (M.prev = M.next) {
            case 0:
              if (!$.isNode()) {
                M.next = 5;
                break;
              }
              M.next = 3;
              return notify.sendNotify($.name, J);
            case 3:
              M.next = 6;
              break;
            case 5:
              $.msg($.name, "", J);
            case 6:
            case "end":
              return M.stop();
          }
        }
      }, I);
    }));
    return H.apply(this, arguments);
  }
  h(f().mark(function I() {
    return f().wrap(function (K) {
      for (;;) {
        switch (K.prev = K.next) {
          case 0:
            K.next = 2;
            return E();
          case 2:
            K.next = 4;
            return u();
          case 4:
          case "end":
            return K.stop();
        }
      }
    }, I);
  }))().catch(function (J) {
    $.log(J);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, a) => {
        s.call(this, t, (t, s, r) => {
          t ? a(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const a = this.getdata(t);
      if (a) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, a) => e(a));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let a = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        a = a ? a.replace(/\n/g, "").trim() : a;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [i, o] = a.split("@"),
          n = {
            url: `http://${o}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": i,
              Accept: "*/*"
            },
            timeout: r
          };
        this.post(n, (t, e, a) => s(a));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          a = !s && this.fs.existsSync(e);
        if (!s && !a) {
          return {};
        }
        {
          const a = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(a));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          a = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : a ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const a = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of a) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, a) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[a + 1]) >> 0 == +e[a + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, a] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, a, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, a, r] = /^@(.*?)\.(.*?)$/.exec(e),
          i = this.getval(a),
          o = a ? "null" === i ? null : i || "{}" : "{}";
        try {
          const e = JSON.parse(o);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), a);
        } catch (e) {
          const i = {};
          this.lodash_set(i, r, t);
          s = this.setval(JSON.stringify(i), a);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: a,
                statusCode: r,
                headers: i,
                rawBody: o
              } = t,
              n = s.decode(o, this.encoding);
            e(null, {
              status: a,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: a,
              response: r
            } = t;
            e(a, r, r && s.decode(r.rawBody, this.encoding));
          });
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let a = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: r,
            ...i
          } = t;
          this.got[s](r, i).then(t => {
            const {
                statusCode: s,
                statusCode: r,
                headers: i,
                rawBody: o
              } = t,
              n = a.decode(o, this.encoding);
            e(null, {
              status: s,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: r
            } = t;
            e(s, r, r && a.decode(r.rawBody, this.encoding));
          });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let a = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in a) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[e] : ("00" + a[e]).substr(("" + a[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let a = t[s];
        null != a && "" !== a && ("object" == typeof a && (a = JSON.stringify(a)), e += `${s}=${a}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", a = "", r) {
      const i = t => {
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  let e = t.url || t.openUrl || t["open-url"];
                  return {
                    url: e
                  };
                }
              case "Loon":
                {
                  let e = t.openUrl || t.url || t["open-url"],
                    s = t.mediaUrl || t["media-url"];
                  return {
                    openUrl: e,
                    mediaUrl: s
                  };
                }
              case "Quantumult X":
                {
                  let e = t["open-url"] || t.url || t.openUrl,
                    s = t["media-url"] || t.mediaUrl,
                    a = t["update-pasteboard"] || t.updatePasteboard;
                  return {
                    "open-url": e,
                    "media-url": s,
                    "update-pasteboard": a
                  };
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, a, i(r));
            break;
          case "Quantumult X":
            $notify(e, s, a, i(r));
            break;
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        a && t.push(a);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, t.stack);
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}