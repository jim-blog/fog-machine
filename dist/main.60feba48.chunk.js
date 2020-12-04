"use strict";

((void 0)["webpackJsonpfog-controller"] = (void 0)["webpackJsonpfog-controller"] || []).push([[0], {
  107: function _(e) {
    e.exports = JSON.parse('{"Fog Machine":"Fog Machine","Power":"Power","Fog":"Fog","Power ON":"Power ON","Power OFF":"Power OFF","Fog ON":"Fog ON","Fog OFF":"Fog OFF"}');
  },
  108: function _(e) {
    e.exports = JSON.parse('{"Fog Machine":"Machine \xe0 brume","Power":"Courant 220V","Fog":"Brume","Power ON":"Marche","Power OFF":"Arr\xeat","Fog ON":"Brume ouverte","Fog OFF":"Brume ferm\xe9e"}');
  },
  112: function _(e, t, a) {
    e.exports = a.p + "static/media/led-circle-grey.48ced89a.svg";
  },
  113: function _(e, t, a) {
    e.exports = a.p + "static/media/led-circle-yellow.05ba57aa.svg";
  },
  136: function _(e, t, a) {
    e.exports = a(214);
  },
  141: function _(e, t, a) {},
  167: function _(e, t) {
    e.exports = require("tty");
  },
  170: function _(e, t) {
    e.exports = require("zlib");
  },
  176: function _(e, t) {
    e.exports = require("constants");
  },
  207: function _(e, t, a) {},
  21: function _(e, t) {
    e.exports = require("path");
  },
  214: function _(e, t, a) {
    "use strict";

    a.r(t);
    var n = a(0),
        s = a.n(n),
        i = a(9),
        r = a.n(i),
        o = (a(141), a(77)),
        l = a(50),
        c = a(106),
        u = a(107),
        d = a(108);
    o.a.use(c.a).use(l.e).init({
      debug: !0,
      react: {
        useSuspense: !1
      },
      lng: "en",
      fallbackLng: "en",
      whitelist: ["en", "fr"],
      interpolation: {
        escapeValue: !1
      },
      resources: {
        en: {
          translation: u
        },
        fr: {
          translation: d
        }
      }
    });
    o.a;

    var p = a(23),
        m = a(24),
        h = a(29),
        g = a(26),
        f = a(262),
        v = a(258),
        E = a(259),
        b = a(116),
        C = a(4),
        O = a(260),
        A = Object(C.a)(function (e) {
      return {
        tooltip: {
          backgroundColor: "#f5f5f9",
          color: "rgba(0, 0, 0, 0.87)",
          maxWidth: 220,
          fontSize: e.typography.pxToRem(12),
          border: "1px solid #dadde9"
        }
      };
    })(O.a),
        k = function (e) {
      Object(h.a)(a, e);
      var t = Object(g.a)(a);

      function a() {
        return Object(p.a)(this, a), t.apply(this, arguments);
      }

      return Object(m.a)(a, [{
        key: "render",
        value: function value() {
          var e = this.props,
              t = e.onClick,
              a = e.className,
              n = void 0 === a ? "" : a,
              i = e.tooltip,
              r = void 0 === i ? "" : i,
              o = e.children;
          return "tooltip" in this.props ? s.a.createElement(A, {
            arrow: !0,
            title: r
          }, s.a.createElement(E.a, {
            onClick: t,
            className: n,
            variant: "contained",
            color: "primary"
          }, o)) : s.a.createElement(E.a, {
            onClick: t,
            className: n,
            variant: "contained",
            color: "primary"
          }, o);
        }
      }]), a;
    }(n.Component),
        x = a(34),
        I = a(263),
        y = a(251),
        T = a(252),
        w = a(253),
        F = a(256),
        N = a(254),
        R = a(111),
        S = a.n(R),
        j = a(248),
        q = a(265),
        P = a(249),
        M = function (e) {
      Object(h.a)(a, e);
      var t = Object(g.a)(a);

      function a(e) {
        var n;
        return Object(p.a)(this, a), (n = t.call(this, e)).value = e.value, n.state = {
          value: e.value
        }, n.setState(n.state), n;
      }

      return Object(m.a)(a, [{
        key: "handleSliderChange",
        value: function value(e, t) {
          this.value = t, this.setState({
            value: t
          });
        }
      }, {
        key: "handleInputChange",
        value: function value(e) {
          this.value = "" === e.target.value ? "" : Number(e.target.value), this.setState({
            value: "" === e.target.value ? "" : Number(e.target.value)
          });
        }
      }, {
        key: "handleBlur",
        value: function value() {
          this.value < this.props.min ? this.value = this.props.min : this.value > this.props.max && (this.value = this.props.max);
        }
      }, {
        key: "render",
        value: function value() {
          this.props.onChange(this);
          var e = this.props.classes;
          return s.a.createElement("div", {
            className: e.root
          }, s.a.createElement(b.a, {
            id: "input-slider",
            gutterBottom: !0
          }, this.props.title), s.a.createElement(j.a, {
            container: !0,
            spacing: 2,
            alignItems: "center"
          }, s.a.createElement(j.a, {
            item: !0,
            xs: 10
          }, s.a.createElement(q.a, {
            value: "number" === typeof this.value ? this.value : 0,
            onChange: this.handleSliderChange.bind(this),
            "aria-labelledby": "input-slider",
            step: this.props.step,
            min: this.props.min,
            max: this.props.max
          })), s.a.createElement(j.a, {
            item: !0,
            xs: 2
          }, s.a.createElement(P.a, {
            className: e.input,
            value: this.value,
            margin: "dense",
            onChange: this.handleInputChange.bind(this),
            onBlur: this.handleBlur.bind(this),
            type: "number",
            inputProps: {
              step: 1,
              min: this.props.min,
              max: this.props.max,
              type: "number",
              "aria-labelledby": "input-slider"
            }
          }))));
        }
      }]), a;
    }(n.Component),
        B = Object(C.a)(function (e) {
      return {
        root: {
          width: 400
        },
        input: {
          width: 40
        }
      };
    })(M),
        L = a(60),
        W = a.n(L),
        D = a(97),
        J = a(71),
        V = function (e) {
      Object(h.a)(a, e);
      var t = Object(g.a)(a);

      function a(e) {
        var n;
        return Object(p.a)(this, a), (n = t.call(this, e)).state = {
          settings: n.props.settings,
          open: !1
        }, n.setState(n.state), n.handleClickOpen = n.handleClickOpen.bind(Object(x.a)(n)), n.handleClose = n.handleClose.bind(Object(x.a)(n)), n.handleSave = n.handleSave.bind(Object(x.a)(n)), n.NameRef = n.props.settings.name, n.ArduinoIpAddressRef = n.props.settings.arduinoIpAddress, n.T1Ref = n.props.settings.T1, n.NRef = n.props.settings.N, n.T2Ref = n.props.settings.T2, n.T3Ref = n.props.settings.T3, n;
      }

      return Object(m.a)(a, [{
        key: "handleClickOpen",
        value: function value() {
          nw.Window.get().resizeTo(520, 660), this.NameRef = this.props.settings.name, this.ArduinoIpAddressRef = this.props.settings.arduinoIpAddress, this.T1Ref = this.props.settings.T1, this.NRef = this.props.settings.N, this.T2Ref = this.props.settings.T2, this.T3Ref = this.props.settings.T3, this.setState({
            open: !0
          });
        }
      }, {
        key: "handleClose",
        value: function value() {
          this.setState({
            open: !1
          });
        }
      }, {
        key: "handleSave",
        value: function value() {
          var e = this.state;
          e.settings.name = this.NameRef, e.settings.arduinoIpAddress = this.ArduinoIpAddressRef, e.settings.T1 = this.T1Ref, e.settings.N = this.NRef, e.settings.T2 = this.T2Ref, e.settings.T3 = this.T3Ref, e.open = !1;
          var t = J.homedir() + "\\AppData\\Local\\fog_settings.json";
          D.writeJsonSync(t, e.settings), this.setState(e), this.props.onChange(this.props.open);
          var a = "".concat(this.T1Ref, ",").concat(this.NRef, ",").concat(this.T2Ref, ",").concat(this.T3Ref);
          this.requestArduinoApi("settings", a);
        }
      }, {
        key: "requestArduinoApi",
        value: function value() {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = this.props.t;
          console.log("requestArduinoApi", t, a), W.a.get(String(a).length > 0 ? "//".concat(this.state.settings.arduinoIpAddress, "/").concat(t, "/").concat(a) : "//".concat(this.state.settings.arduinoIpAddress, "/").concat(t), {
            timeout: 3e3
          }).then(function (t) {
            console.log(t);
            var a = e.state;

            if (200 === t.status) {
              var s = t.data.match(/(\d+)\|(\d+)\|(\d+)\|(\d+)\|(\d+)\|(\d+)/);
              s && 7 === s.length ? (a.settings.t1 = parseInt(s[1]), a.settings.n = parseInt(s[2]), a.settings.t2 = parseInt(s[3]), a.settings.t3 = parseInt(s[4]), a.status = "") : a.status = n("Error: unexpected answer @") + e.state.settings.arduinoIpAddress;
            } else a.status = n("Error: ") + t.status + t.statusText + " @" + e.state.settings.arduinoIpAddress;

            e.setState(a);
          }, function (t) {
            console.log(t);
            var a = e.state;
            a.status = n("Network error: ") + t.message + " @" + e.state.settings.arduinoIpAddress, alert(a.status), e.setState(a);
          });
        }
      }, {
        key: "render",
        value: function value() {
          var e = this,
              t = this.props.t;
          return s.a.createElement("div", {
            className: "TuneDialog"
          }, s.a.createElement(E.a, {
            startIcon: s.a.createElement(S.a, null),
            color: "secondary",
            "aria-label": "tune",
            onClick: this.handleClickOpen
          }, "Settings"), s.a.createElement(I.a, {
            open: this.state.open,
            onClose: this.handleClose,
            "aria-labelledby": "form-dialog-title"
          }, s.a.createElement(y.a, {
            id: "form-dialog-title"
          }, t("Settings")), s.a.createElement(T.a, null, s.a.createElement("div", null, s.a.createElement(F.a, {
            autoFocus: !0,
            margin: "dense",
            id: "Name",
            label: t("Name"),
            type: "text",
            defaultValue: this.NameRef,
            onChange: function onChange(t) {
              e.NameRef = t.target.value;
            }
          })), s.a.createElement("div", null, s.a.createElement(F.a, {
            autoFocus: !0,
            margin: "dense",
            id: "ArduinoIpAddress",
            label: t("Arduino Prop IP Address"),
            type: "text",
            defaultValue: this.ArduinoIpAddressRef,
            onChange: function onChange(t) {
              e.ArduinoIpAddressRef = t.target.value;
            }
          })), s.a.createElement("p", null), s.a.createElement(B, {
            title: t("Fog program: T1 (minutes)"),
            step: 1,
            min: 1,
            max: 60,
            value: this.T1Ref,
            onChange: function onChange(t) {
              e.T1Ref = t.value;
            }
          }), s.a.createElement(B, {
            title: t("Fog program: N (times)"),
            step: 1,
            min: 1,
            max: 10,
            value: this.NRef,
            onChange: function onChange(t) {
              e.NRef = t.value;
            }
          }), s.a.createElement(B, {
            title: t("Fog program: T2 (seconds)"),
            step: 1,
            min: 1,
            max: 60,
            value: this.T2Ref,
            onChange: function onChange(t) {
              e.T2Ref = t.value;
            }
          }), s.a.createElement(B, {
            title: t("Fog program: T3 (seconds)"),
            step: 1,
            min: 1,
            max: 60,
            value: this.T3Ref,
            ref: this.T3Ref,
            onChange: function onChange(t) {
              e.T3Ref = t.value;
            }
          }), s.a.createElement(w.a, null, "Fog program: spit fog every ", s.a.createElement("em", null, "T1"), " seconds, ", s.a.createElement("em", null, "N"), " times for ", s.a.createElement("em", null, "T2"), " seconds, pausing ", s.a.createElement("em", null, "T3"), " seconds.")), s.a.createElement(N.a, null, s.a.createElement(E.a, {
            onClick: this.handleClose,
            color: "primary"
          }, "Cancel"), s.a.createElement(E.a, {
            onClick: this.handleSave,
            color: "primary"
          }, "Save"))));
        }
      }]), a;
    }(n.Component),
        z = a(255),
        _ = s.a.forwardRef(function (e, t) {
      return s.a.createElement(z.a, Object.assign({
        direction: "up",
        ref: t
      }, e));
    }),
        U = function (e) {
      Object(h.a)(a, e);
      var t = Object(g.a)(a);

      function a(e) {
        var n;
        return Object(p.a)(this, a), (n = t.call(this, e)).state = {
          open: !1,
          title: "Alert",
          text: "A problem has arisen."
        }, n.setState(n.state), n.handleClickOpen = n.handleClickOpen.bind(Object(x.a)(n)), n.handleClose = n.handleClose.bind(Object(x.a)(n)), n;
      }

      return Object(m.a)(a, [{
        key: "handleClickOpen",
        value: function value(e, t) {
          this.setState({
            open: !0,
            title: e,
            text: t
          });
        }
      }, {
        key: "handleClose",
        value: function value() {
          this.setState({
            open: !1
          });
        }
      }, {
        key: "render",
        value: function value() {
          return s.a.createElement("div", null, s.a.createElement(I.a, {
            open: this.state.open,
            TransitionComponent: _,
            keepMounted: !0,
            onClose: this.handleClose,
            "aria-labelledby": "alert-dialog-slide-title",
            "aria-describedby": "alert-dialog-slide-description"
          }, s.a.createElement(y.a, {
            id: "alert-dialog-slide-title"
          }, this.state.title), s.a.createElement(T.a, null, s.a.createElement(w.a, {
            id: "alert-dialog-slide-description"
          }, this.state.text)), s.a.createElement(N.a, null, s.a.createElement(E.a, {
            onClick: this.handleClose,
            color: "primary"
          }, "Dismiss"))));
        }
      }]), a;
    }(n.Component),
        $ = a(112),
        G = a.n($),
        H = a(113),
        K = a.n(H),
        Q = function (e) {
      Object(h.a)(a, e);
      var t = Object(g.a)(a);

      function a() {
        return Object(p.a)(this, a), t.apply(this, arguments);
      }

      return Object(m.a)(a, [{
        key: "render",
        value: function value() {
          var e = this.props,
              t = e.state,
              a = e.alt,
              n = e.label,
              i = e.className,
              r = void 0 === i ? "" : i;
          return s.a.createElement(j.a, {
            container: !0,
            spacing: 2,
            alignItems: "center"
          }, s.a.createElement(j.a, {
            item: !0,
            xs: !0
          }, s.a.createElement(b.a, null, n)), s.a.createElement(j.a, {
            item: !0
          }, s.a.createElement("img", {
            className: r,
            alt: a,
            src: 1 === t ? K.a : G.a
          })));
        }
      }]), a;
    }(n.Component),
        X = (a(207), a(97)),
        Y = a(71),
        Z = function (e) {
      Object(h.a)(a, e);
      var t = Object(g.a)(a);

      function a(e) {
        var s;
        Object(p.a)(this, a), (s = t.call(this, e)).props.i18n.changeLanguage("fr");
        var i = s.props.t;
        s.state = {
          settings: {
            name: i("Fog Machine"),
            arduinoIpAddress: "",
            T1: 10,
            N: 2,
            T2: 5,
            T3: 5
          },
          machine: {
            power: 1,
            fog: 0
          },
          status: ""
        }, s.alertRef = Object(n.createRef)(), s.timer = null;
        var r = Y.homedir() + "\\AppData\\Local\\fog_settings.json";

        if (X.existsSync(r)) {
          var o = X.readJsonSync(r, {
            throws: !1
          });
          o && (s.state.settings = o);
        }

        return s.state.settings.arduinoIpAddress || (s.state.status = i("Arduino IP address is missing")), s;
      }

      return Object(m.a)(a, [{
        key: "componentDidMount",
        value: function value() {
          var e = this;
          nw.Window.get().showDevTools(), this.state.settings.arduinoIpAddress && (this.requestArduinoApi(), console.log("CREATE TIMER"), this.timer = setInterval(function () {
            e.requestArduinoApi();
          }, 3e4));
        }
      }, {
        key: "componentWillUnmount",
        value: function value() {
          clearInterval(this.timer);
        }
      }, {
        key: "handleFogOffClicked",
        value: function value(e) {
          console.log("handlePowerOffClicked"), this.requestArduinoApi("fog", 0);
        }
      }, {
        key: "handleFogOnClicked",
        value: function value(e) {
          console.log("handlePowerOnClicked"), this.requestArduinoApi("fog", 1);
        }
      }, {
        key: "handlePowerOffClicked",
        value: function value(e) {
          console.log("handlePowerOffClicked"), this.requestArduinoApi("power", 0);
        }
      }, {
        key: "handlePowerOnClicked",
        value: function value(e) {
          console.log("handlePowerOnClicked"), this.requestArduinoApi("power", 1);
        }
      }, {
        key: "requestArduinoApi",
        value: function value() {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = this.props.t;
          console.log("requestArduinoApi", t, a), W.a.get(String(a).length > 0 ? "//".concat(this.state.settings.arduinoIpAddress, "/").concat(t, "/").concat(a) : "//".concat(this.state.settings.arduinoIpAddress, "/").concat(t), {
            timeout: 3e3
          }).then(function (t) {
            console.log(t);
            var a = e.state;

            if (200 === t.status) {
              var s = t.data.match(/(\d+)\|(\d+)\|(\d+)\|(\d+)\|(\d+)\|(\d+)/);
              s && 7 === s.length ? (a.settings.T1 = parseInt(s[1]), a.settings.N = parseInt(s[2]), a.settings.T2 = parseInt(s[3]), a.settings.T3 = parseInt(s[4]), a.machine.power = parseInt(s[5]), a.machine.fog = parseInt(s[6]), a.status = "") : a.status = n("Error: unexpected answer @") + e.state.settings.arduinoIpAddress;
            } else a.status = n("Error: ") + t.status + t.statusText + " @" + e.state.settings.arduinoIpAddress;

            e.setState(a);
          }, function (t) {
            console.log(t);
            var a = e.state;
            a.status = n("Network error: ") + t.message + " @" + e.state.settings.arduinoIpAddress, e.alertRef.current.handleClickOpen(n("Warning"), a.status), e.setState(a);
          });
        }
      }, {
        key: "render",
        value: function value() {
          var e = this,
              t = this.props.t;
          return s.a.createElement("div", {
            className: "App"
          }, s.a.createElement("header", {
            className: "App-header"
          }, this.state.settings.name, s.a.createElement(v.a, {
            className: "App-status-box"
          }, this.state.status)), s.a.createElement("div", {
            className: "App-panel"
          }, s.a.createElement(j.a, {
            container: !0,
            spacing: 2,
            alignItems: "center"
          }, s.a.createElement(j.a, {
            item: !0,
            xs: 6
          }, s.a.createElement(Q, {
            className: "Led",
            alt: t("Power Led"),
            label: t("Power"),
            state: this.state.machine.power
          })), s.a.createElement(j.a, {
            item: !0,
            xs: 6
          }, s.a.createElement(Q, {
            className: "Led",
            alt: t("Fog Led"),
            label: t("Fog"),
            state: this.state.machine.fog
          }))), s.a.createElement(j.a, {
            container: !0,
            spacing: 2,
            alignItems: "center"
          }, s.a.createElement(j.a, {
            item: !0,
            xs: 6
          }, s.a.createElement("p", null))), s.a.createElement(j.a, {
            container: !0,
            spacing: 2,
            alignItems: "center"
          }, s.a.createElement(j.a, {
            item: !0,
            xs: 6
          }, s.a.createElement(k, {
            state: this.state,
            onClick: this.handlePowerOnClicked.bind(this)
          }, t("Power ON"))), s.a.createElement(j.a, {
            item: !0,
            xs: 6
          }, s.a.createElement(k, {
            state: this.state,
            onClick: this.handlePowerOffClicked.bind(this)
          }, t("Power OFF")))), s.a.createElement(j.a, {
            container: !0,
            spacing: 2,
            alignItems: "center"
          }, s.a.createElement(j.a, {
            item: !0,
            xs: 6
          }, s.a.createElement("p", null))), s.a.createElement(j.a, {
            container: !0,
            spacing: 2,
            padding: 10,
            alignItems: "center"
          }, s.a.createElement(j.a, {
            item: !0,
            xs: 6
          }, s.a.createElement(k, {
            state: this.state,
            onClick: this.handleFogOnClicked.bind(this)
          }, t("Fog ON"))), s.a.createElement(j.a, {
            item: !0,
            xs: 6
          }, s.a.createElement(k, {
            state: this.state,
            onClick: this.handleFogOffClicked.bind(this)
          }, t("Fog OFF")))), s.a.createElement(j.a, {
            container: !0,
            spacing: 2,
            alignItems: "center"
          }, s.a.createElement(j.a, {
            item: !0,
            xs: 6
          }, s.a.createElement("p", null))), s.a.createElement(j.a, {
            container: !0,
            spacing: 2,
            padding: 10,
            alignItems: "center"
          }, s.a.createElement(j.a, {
            item: !0,
            xs: 9
          }, s.a.createElement(k, {
            tooltip: s.a.createElement(s.a.Fragment, null, s.a.createElement(b.a, {
              color: "inherit"
            }, t("Start Arduino fog sequence")), s.a.createElement("hr", null), t("The fog sequence is controlled by the Arduino <em>onboard</em> sketch")),
            state: this.state,
            onClick: this.handleFogOnClicked.bind(this)
          }, t("Start arduino fog program"))), s.a.createElement(j.a, {
            item: !0,
            xs: 3
          }, s.a.createElement(k, {
            tooltip: s.a.createElement(s.a.Fragment, null, s.a.createElement(b.a, {
              color: "inherit"
            }, t("Stop Arduino fog sequence"))),
            state: this.state,
            onClick: this.handleFogOffClicked.bind(this)
          }, t("Stop")))), s.a.createElement(j.a, {
            container: !0,
            spacing: 2,
            alignItems: "center"
          }, s.a.createElement(j.a, {
            item: !0,
            xs: 6
          }, s.a.createElement("p", null))), s.a.createElement(j.a, {
            container: !0,
            spacing: 2,
            padding: 10,
            alignItems: "center"
          }, s.a.createElement(j.a, {
            item: !0,
            xs: 9
          }, s.a.createElement(E.a, {
            state: this.state,
            color: "primary",
            onClick: this.handleFogOnClicked.bind(this)
          }, t("Start fog program"))), s.a.createElement(j.a, {
            item: !0,
            xs: 3
          }, s.a.createElement(E.a, {
            state: this.state,
            color: "primary",
            onClick: this.handleFogOffClicked.bind(this)
          }, t("Stop")))), s.a.createElement(j.a, {
            container: !0,
            spacing: 2,
            alignItems: "center"
          }, s.a.createElement(j.a, {
            item: !0,
            xs: 6
          }, s.a.createElement("p", null))), s.a.createElement(j.a, {
            container: !0,
            spacing: 2,
            padding: 10,
            alignItems: "center"
          }, s.a.createElement(j.a, {
            item: !0,
            xs: 6
          }, s.a.createElement(V, {
            t: t,
            settings: this.state.settings,
            onChange: function onChange(a) {
              var n = e.state;
              e.state.settings.arduinoIpAddress ? (n.status = "", e.requestArduinoApi(), console.log("RECREATE TIMER"), clearInterval(e.timer), e.timer = setInterval(function () {
                e.requestArduinoApi();
              }, 3e4)) : n.status = t("Arduino IP address is missing"), e.setState(n);
            }
          })), s.a.createElement(j.a, {
            item: !0,
            xs: 6
          }, s.a.createElement(U, {
            ref: this.alertRef,
            "aria-labelledby": "alert-dialog-title",
            "aria-describedby": "alert-dialog-description"
          })))));
        }
      }]), a;
    }(n.Component),
        ee = Object(f.a)()(Z);

    Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    r.a.render(s.a.createElement(s.a.StrictMode, null, s.a.createElement(ee, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (e) {
      e.unregister();
    }).catch(function (e) {
      console.error(e.message);
    });
  },
  69: function _(e, t) {
    e.exports = require("assert");
  },
  70: function _(e, t) {
    e.exports = require("util");
  },
  71: function _(e, t) {
    e.exports = require("os");
  },
  72: function _(e, t) {
    e.exports = require("fs");
  },
  87: function _(e, t) {
    e.exports = require("http");
  },
  88: function _(e, t) {
    e.exports = require("https");
  },
  90: function _(e, t) {
    e.exports = require("url");
  },
  91: function _(e, t) {
    e.exports = require("stream");
  }
}, [[136, 1, 2]]]);
//# sourceMappingURL=main.60feba48.chunk.js.map