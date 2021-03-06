// (function(window) {
//   function Parallaxer(stage, options) {
//       var opts = options || {};

//       this._stage = stage;
//       this._range = {
//           x: opts.xRange || Parallaxer.X_RANGE,
//           y: opts.yRange || Parallaxer.Y_RANGE
//       };
//       this._inversion = opts.invert ? -1 : 1;
//       this._smoothing = opts.smoothing || false;
//       this._transitioning = false;
//       this._lastCursor = null;

//       var self = this;

//       /*
//       TODO: Improve device motion support
//       if (window.DeviceMotionEvent) {
//           this._ax = this._ay = 0.0;
//           setInterval(this._onDeviceMotionRender.bind(this));
//           window.addEventListener('devicemotion', function(e) {self._onDeviceMotion(e);}, true);
//       }
//       else {
//       }*/
//       window.addEventListener('mousemove', function(e) {self._onMouseMove(e);}, true);
//   }

//   Parallaxer.X_RANGE = 50; // Max distance in x direction
//   Parallaxer.Y_RANGE = 100; // Max distance in y direction
//   Parallaxer.SENSITIVITY = 0.01;
//   Parallaxer.TRANSITION = 'all .01s linear';
//   Parallaxer.TRANSITION_DIST_SQ = 200 * 200; // Minimum distance before applying a transition effect

//   Parallaxer.prototype = {
//       _onDeviceMotion: function(e) {
//           var accel = e.accelerationIncludingGravity, ax, ay;

//           if (window.innerHeight > window.innerWidth) {
//               ax = accel.x,
//               ay = accel.y;
//           }
//           else {
//               ax = accel.y;
//               ay = accel.x;
//           }

//           // Normalize acceleration
//           this._ax = ax / 9.81;
//           this._ay = ay / 9.81;
//       },

//       _onDeviceMotionRender: function() {
//           var x = this._inversion * this._ax * this._range.x,
//               y = this._inversion * this._ay * this._range.y;

//           this._stage.style.transform = 'translate3d(' + x + 'px,' + y + 'px, 0)';
//           this._stage.style.WebkitTransform = 'translate3d(' + x + 'px,' + y + 'px, 0)';
//           this._stage.style.MozTransform = 'translate3d(' + x + 'px,' + y + 'px, 0)';
//       },

//       _transition: function() {
//           this._transitioning = true;
//           this._stage.style.transition = Parallaxer.TRANSITION;
//           this._stage.style.WebkitTransition = Parallaxer.TRANSITION;
//           this._stage.style.MozTransition = Parallaxer.TRANSITION;
//           var self = this;
//           window.addEventListener('transitionEnd', function(e) {self._onEndTransition(e);}, true);
//           window.addEventListener('webkitTransitionEnd', function(e) {self._onEndTransition(e);}, true);
//           window.addEventListener('mozTransitionEnd', function(e) {self._onEndTransition(e);}, true);
//       },

//       _onEndTransition: function() {
//           this._stage.style.transition = '';
//           this._stage.style.WebkitTransition = '';
//           this._stage.style.MozTransition = '';
//           this._transitioning = false;
//       },

//       _onMouseMove: function(e) {
//           if (this._smoothing) {
//               if (!this._lastCursor) { // Transition to initial mouse coordinates
//                   this._transition();
//               }
//               else if (!this._transitioning) {
//                   var dx = e.clientX - this._lastCursor.x,
//                       dy = e.clientY - this._lastCursor.y;

//                   // Transition if distance between mouse events is large
//                   if (dx * dx + dy * dy > Parallaxer.TRANSITION_DIST_SQ) {
//                       this._transition();
//                   }
//               }
//           }

//           var x = this._inversion * (2 * e.clientX / window.innerWidth - 1.0) * this._range.x,
//               y = this._inversion * (2 * e.clientY / window.innerHeight - 1.0) * this._range.y;

//           this._stage.style.transform = 'translate3d(' + x + 'px,' + y + 'px, 0)';
//           this._stage.style.WebkitTransform = 'translate3d(' + x + 'px,' + y + 'px, 0)';
//           this._stage.style.MozTransform = 'translate3d(' + x + 'px,' + y + 'px, 0)';
//           this._lastCursor = {x: e.clientX, y: e.clientY};
//       }
//   };

//   window.Parallaxer = Parallaxer;
// })(window);

/*!
 * Parallaxify.js v0.0.2
 * http://hwthorn.github.io/parallaxify
 *
 * Copyright 2013, Felix Pflaum
 * Released under the MIT license
 * http://hwthorn.mit-license.org
 */
(function (f, g, v, d) {
  function m(a, c) {
    this.element = a;
    this.options = f.extend({}, t, c);
    this._defaults = t;
    this._name = h;
    this.init();
  }
  var h = "parallaxify",
    t = {
      positionProperty: "position",
      horizontalParallax: !0,
      verticalParallax: !0,
      parallaxBackgrounds: !0,
      parallaxElements: !0,
      responsive: !1,
      useMouseMove: !0,
      useGyroscope: !0,
      alphaFilter: 0.9,
      motionType: "natural",
      mouseMotionType: "gaussian",
      inputPriority: "mouse",
      motionAngleX: 80,
      motionAngleY: 80,
      adjustBasePosition: !0,
      alphaPosition: 0.05,
    },
    u = {
      position: {
        setLeft: function (a, c) {
          a.css("left", c);
        },
        setTop: function (a, c) {
          a.css("top", c);
        },
      },
      transform: {
        setPosition: function (a, c, b, e, d) {
          a[0].style[w] =
            "translate3d(" + (c - b) + "px, " + (e - d) + "px, 0)";
        },
      },
    },
    j = function (a, c, b) {
      if (null === c) return a;
      "undefined" === typeof b && (b = 0.5);
      return b * a + (1 - b) * c;
    },
    k = [],
    p = {
      linear: function (a, c) {
        return a <= -c ? 1 : a >= c ? -1 : -a / c;
      },
      natural: function (a, c) {
        if (a <= -c) return 1;
        if (a >= c) return -1;
        k["n" + c] === d && (k["n" + c] = Math.tan(0.01745 * c));
        return -Math.tan(0.01745 * a) / k["n" + c];
      },
      performance: function (a, c) {
        if (a <= -c) return 1;
        if (a >= c) return -1;
        k["p" + c] === d && (k["p" + c] = c / 90 + 4.2 * Math.pow(c / 90, 7));
        return -(a / 90 + 4.2 * Math.pow(a / 90, 7)) / k["p" + c];
      },
      gaussian: function (a, c) {
        return (
          1 -
          2 *
            (1 /
              (1 +
                Math.exp(
                  -(0.07056 * (135 / c) * ((a / 90) ^ 3)) -
                    1.5976 * (135 / c) * (a / 90)
                )))
        );
      },
    },
    n = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
    q = f("script")[0].style,
    l = "",
    r;
  for (r in q)
    if (n.test(r)) {
      l = r.match(n)[0];
      break;
    }
  "WebkitOpacity" in q && (l = "Webkit");
  "KhtmlOpacity" in q && (l = "Khtml");
  var w = l + (0 < l.length ? "T" + "transform".slice(1) : "transform"),
    s = (n =
      f("<div />", { style: "background:#fff" }).css(
        "background-position-x"
      ) !== d)
      ? function (a, c, b) {
          a.css({ "background-position-x": c, "background-position-y": b });
        }
      : function (a, c, b) {
          a.css("background-position", c + " " + b);
        },
    x = n
      ? function (a) {
          return [
            a.css("background-position-x"),
            a.css("background-position-y"),
          ];
        }
      : function (a) {
          return a.css("background-position").split(" ");
        },
    y =
      g.requestAnimationFrame ||
      g.webkitRequestAnimationFrame ||
      g.mozRequestAnimationFrame ||
      g.oRequestAnimationFrame ||
      g.msRequestAnimationFrame ||
      function (a) {
        setTimeout(a, 1e3 / 30);
      };
  m.prototype = {
    init: function () {
      this.options.name = h + "_" + Math.floor(1e9 * Math.random());
      this.tilt = { beta: 0, gamma: 0 };
      this._defineElements();
      this._defineGetters();
      this._defineSetters();
      this._detectMobile();
      this._detectMotionType();
      this._detectViewport();
      this._handleWindowLoadAndResize();
      this.refresh({ firstLoad: !0 });
      this._startAnimation();
      console.log('start animation');
    },
    _defineElements: function () {
      this.$element =
        this.element === v.body || this.element === g
          ? f("body")
          : f(this.element);
      this.$viewportElement = f(g);
    },
    _defineGetters: function () {
      var a = p[this.options.motionType],
        c = p[this.options.mouseMotionType];
      this._getMoveHorizontal = function () {
        if (
          this.useMouseMove &&
          null !== this.clientX &&
          this.clientX !== this.oldClientX
        )
          return c(
            this.options.motionAngleX *
              (1 - (2 * this.clientX) / this.viewportWidth),
            this.options.motionAngleX
          );
        if (this.useSensor && null !== this.beta && null !== this.gamma) {
          var b = this.tilt;
          return this.viewportLandscape
            ? this.viewportFlipped
              ? a(-b.beta, this.options.motionAngleX)
              : a(b.beta, this.options.motionAngleX)
            : this.viewportFlipped
            ? a(-b.gamma, this.options.motionAngleX)
            : a(b.gamma, this.options.motionAngleX);
        }
        this.useSensor = !1;
        return c(
          this.options.motionAngleX *
            (1 - (2 * this.oldClientX) / this.viewportWidth),
          this.options.motionAngleX
        );
      };
      this._getMoveVertical = function () {
        if (
          this.options.useMouseMove &&
          null !== this.clientY &&
          this.clientY !== this.oldClientY
        )
          return c(
            this.options.motionAngleY *
              (1 - (2 * this.clientY) / this.viewportHeight),
            this.options.motionAngleY
          );
        if (this.useSensor && null !== this.beta && null !== this.gamma) {
          var b = this.tilt;
          return this.viewportLandscape
            ? this.viewportFlipped
              ? a(-b.gamma, this.options.motionAngleY)
              : a(b.gamma, this.options.motionAngleY)
            : this.viewportFlipped
            ? a(-b.beta, this.options.motionAngleY)
            : a(b.beta, this.options.motionAngleY);
        }
        this.useSensor = !1;
        return c(
          this.options.motionAngleY *
            (1 - (2 * this.oldClientY) / this.viewportHeight),
          this.options.motionAngleY
        );
      };
    },
    _defineSetters: function () {
      var a = this,
        c = u[a.options.positionProperty];
      this._setPosition =
        c.setPosition ||
        function (b, e, d, f, g) {
          a.options.horizontalParallax && c.setLeft(b, e, d);
          a.options.verticalParallax && c.setTop(b, f, g);
        };
    },
    refresh: function (a) {
      (!a || !a.firstLoad) && this._reset();
      this._findElements();
      this._findBackgrounds();
      a &&
        a.firstLoad &&
        /WebKit/.test(navigator.userAgent) &&
        f(g).load(function () {
          var a = f("body");
          oldLeft = a.scrollLeft();
          oldTop = a.scrollTop();
          a.scrollLeft(oldLeft + 1);
          a.scrollTop(oldTop + 1);
          a.scrollLeft(oldLeft);
          a.scrollTop(oldTop);
        });
    },
    _detectViewport: function () {
      this.viewportWidth = this.$viewportElement.width();
      this.viewportHeight = this.$viewportElement.height();
      this.useSensor &&
        ((this.viewportFlipped = 180 === g.orientation),
        (this.viewportLandscape = 90 === Math.abs(g.orientation)));
    },
    _detectMobile: function () {
      var a = navigator.userAgent || navigator.vendor || g.opera;
      this.isMobile =
        /(bb\d+|meego).+mobile|android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|playbook|plucker|pocket|psp|series(4|6)0|silk|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        );
    },
    _detectMotionType: function () {
      this.useMouseMove = this.useSensorMoz = this.useSensorWebkit = this.useSensor = !1;
      if (
        this.options.useGyroscope &&
        (this.isMobile || "gyroscope" === this.options.inputPriority)
      )
        (this.useSensorWebkit = g.DeviceOrientationEvent !== d),
          (this.useSensorMoz = g.OrientationEvent !== d),
          (this.useSensor = this.useSensorWebkit || this.useSensorMoz);
      this.options.useMouseMove &&
        !this.isMobile &&
        (this.useMouseMove = this.$viewportElement.mousemove !== d);
    },
    _findElements: function () {
      var a = this;
      if (this.elements !== d)
        for (var c = this.elements.length - 1; 0 <= c; c--)
          this.elements[c].$element.data("parallaxify-ElementIsActive", d);
      this.elements = [];
      this.options.parallaxElements &&
        this.$element
          .find(
            "[data-parallaxify-range],[data-parallaxify-range-x],[data-parallaxify-range-y]"
          )
          .each(function () {
            var b = f(this);
            if (b.data("parallaxify-ElementIsActive")) {
              if (b.data("parallaxify-ElementIsActive") !== this) return;
            } else b.data("parallaxify-ElementIsActive", this);
            b.data("parralaxify-originalLeft")
              ? (b.css("left", b.data("parallaxify-originalLeft")),
                b.css("top", b.data("parallaxify-originalTop")))
              : (b.data("parallaxify-originalLeft", b.css("left")),
                b.data("parallaxify-originalTop", b.css("top")));
            a.elements.push({
              $element: b,
              originalPositionLeft: b.position().left,
              originalPositionTop: b.position().top,
              parallaxDistanceX:
                b.data("parallaxify-range-x") !== d
                  ? b.data("parallaxify-range-x")
                  : b.data("parallaxify-range") !== d
                  ? b.data("parallaxify-range")
                  : 0,
              parallaxDistanceY:
                b.data("parallaxify-range-y") !== d
                  ? b.data("parallaxify-range-y")
                  : b.data("parallaxify-range") !== d
                  ? b.data("parallaxify-range")
                  : 0,
              width: b.outerWidth(!0),
              height: b.outerHeight(!0),
            });
          });
    },
    _findBackgrounds: function () {
      var a = this,
        c;
      this.backgrounds = [];
      if (this.options.parallaxBackgrounds) {
        c = this.$element.find(
          "[data-parallaxify-background-range],[data-parallaxify-background-range-x],[data-parallaxify-background-range-y]"
        );
        if (
          this.$element.data("parallaxify-background-range") ||
          this.$element.data("parallaxify-background-range-x") ||
          this.$element.data("parallaxify-background-range-y")
        )
          c = c.add(this.$element);
        c.each(function () {
          var b = f(this),
            c = x(b);
          if (b.data("parallaxify-backgroundIsActive")) {
            if (b.data("parallaxify-backgroundIsActive") !== this) return;
          } else b.data("parallaxify-backgroundIsActive", this);
          b.data("parralaxify-backgroundOriginalLeft")
            ? s(
                b,
                b.data("parallaxify-backgroundOriginalLeft"),
                b.data("parallaxify-backgroundOriginalTop")
              )
            : (b.data("parallaxify-backgroundOriginalLeft", c[0]),
              b.data("parallaxify-backgroundOriginalTop", c[1]));
          a.backgrounds.push({
            $element: b,
            originalValueLeft: c[0],
            originalValueTop: c[1],
            originalBackgroundPositionLeft: isNaN(parseInt(c[0], 10))
              ? 0
              : parseInt(c[0], 10),
            originalBackgroundPositionTop: isNaN(parseInt(c[1], 10))
              ? 0
              : parseInt(c[1], 10),
            originalPositionLeft: b.position().left,
            originalPositionTop: b.position().top,
            parallaxDistanceX:
              b.data("parallaxify-background-range-x") !== d
                ? b.data("parallaxify-background-range-x")
                : b.data("parallaxify-background-range") !== d
                ? b.data("parallaxify-background-range")
                : 0,
            parallaxDistanceY:
              b.data("parallaxify-background-range-y") !== d
                ? b.data("parallaxify-background-range-y")
                : b.data("parallaxify-background-range") !== d
                ? b.data("parallaxify-background-range")
                : 0,
          });
        });
      }
    },
    _reset: function () {
      var a, c, b, e;
      for (e = this.elements.length - 1; 0 <= e; e--)
        (a = this.elements[e]),
          (c = a.$element.data("parallaxify-originalLeft")),
          (b = a.$element.data("parallaxify-originalTop")),
          this._setPosition(a.$element, c, c, b, b),
          a.$element
            .data("parallaxify-originalLeft", null)
            .data("parallaxify-originalLeft", null)
            .data("parallaxify-elementIsActive", null)
            .data("parallaxify-backgroundIsActive", null);
      for (e = this.backgrounds.length - 1; 0 <= e; e--)
        (a = this.backgrounds[e]),
          a.$element
            .data("parallaxify-backgroundOriginalLeft", null)
            .data("parallaxify-backgroundOriginalTop", null)
            .data("parallaxify-backgroundIsActive", null),
          s(a.$element, a.originalValueLeft, a.originalValueTop);
    },
    destroy: function () {
      this._reset();
      this.useMouseMove &&
        this.$viewportElement.unbind("mousemove." + this.name);
      this.useSensorWebkit &&
        g.removeEventListener(
          "deviceorientation",
          this._handleSensorWebkit,
          !1
        );
      this.useSensorMoz &&
        g.removeEventListener("MozOrientation", this._handleSensorMoz, !1);
      f(g)
        .unbind("load." + this.name)
        .unbind("resize." + this.name)
        .unbind("orientationchange." + this.name);
      console.log('destroy animation');
    },
    _processSensorData: function () {
      if (this.useSensor) {
        var a = this.beta,
          c = this.gamma,
          b = 0,
          e = 0;
        90 < a && (a -= 180);
        180 < c && (c -= 360);
        this.initialBeta === d &&
          null !== a &&
          ((this.initialBeta = a),
          this.useSensor &&
            "gyroscope" === this.options.inputPriority &&
            (this.useMouseMove = !1));
        this.initialGamma === d &&
          null !== c &&
          ((this.initialGamma = c),
          this.useSensor &&
            "gyroscope" === this.options.inputPriority &&
            (this.useMouseMove = !1));
        this.options.adjustBasePosition &&
          this.initialGamma !== d &&
          this.initialBeta !== d &&
          ((this.initialGamma =
            -180 > c - this.initialGamma
              ? j(c + 360, this.initialGamma, this.options.alphaPosition)
              : 180 < c - this.initialGamma
              ? j(c - 360, this.initialGamma, this.options.alphaPosition)
              : j(c, this.initialGamma, this.options.alphaPosition)),
          (this.initialBeta =
            -90 > a - this.initialBeta
              ? j(a + 180, this.initialBeta, this.options.alphaPosition)
              : 90 < a - this.initialBeta
              ? j(a - 180, this.initialBeta, this.options.alphaPosition)
              : j(a, this.initialBeta, this.options.alphaPosition)));
        b = this.initialBeta !== d ? a - this.initialBeta : a;
        e = this.initialGamma !== d ? c - this.initialGamma : c;
        100 < b ? (b -= 180) : -100 > b && (b += 180);
        200 < e ? (e -= 360) : -200 > e && (e += 360);
        b = j(b, this.tilt.beta, this.options.alphaFilter);
        e = j(e, this.tilt.gamma, this.options.alphaFilter);
        this.tilt.beta = b;
        this.tilt.gamma = e;
      }
    },
    _repositionElements: function () {
      var a = this._getMoveHorizontal(),
        c = this._getMoveVertical(),
        b,
        e,
        d,
        f;
      if (
        !(
          this.currentMoveHorizontal === a &&
          this.currentMoveVertical === c &&
          this.currentWidth === this.viewportWidth &&
          this.currentHeight === this.viewportHeight
        )
      ) {
        this.currentMoveHorizontal = a;
        this.currentMoveVertical = c;
        this.currentWidth = this.viewportWidth;
        this.currentHeight = this.viewportHeight;
        for (f = this.elements.length - 1; 0 <= f; f--)
          (b = this.elements[f]),
            (e = this.options.horizontalParallax
              ? Math.floor((a * b.parallaxDistanceX) / 2) +
                b.originalPositionLeft
              : b.originalPositionLeft),
            (d = this.options.verticalParallax
              ? Math.floor((c * b.parallaxDistanceY) / 2) +
                b.originalPositionTop
              : b.originalPositionTop),
            this._setPosition(
              b.$element,
              e,
              b.originalPositionLeft,
              d,
              b.originalPositionTop
            );
        for (f = this.backgrounds.length - 1; 0 <= f; f--)
          (b = this.backgrounds[f]),
            (e = this.options.horizontalParallax
              ? Math.floor((a * b.parallaxDistanceX) / 2) +
                b.originalBackgroundPositionLeft +
                "px"
              : b.originalValueLeft),
            (d = this.options.verticalParallax
              ? Math.floor((c * b.parallaxDistanceY) / 2) +
                b.originalBackgroundPositionTop +
                "px"
              : b.originalValueTop),
            s(b.$element, e, d);
      }
    },
    _handleWindowLoadAndResize: function () {
      var a = this,
        c = f(g);
      a.options.responsive &&
        c.bind("load." + this.name, function () {
          a.refresh();
        });
      c.bind("resize." + this.name, function () {
        a._detectViewport();
        a.options.responsive && a.refresh();
      });
      c.bind("orientationchange." + this.name, function () {
        a._detectViewport();
        a.options.responsive && a.refresh();
      });
    },
    _startAnimation: function () {
      var a = this,
        c = !1;
      this.gamma = this.beta = 0;
      this.clientX = this.oldClientX = Math.round(a.viewportWidth / 2);
      this.clientY = this.oldClientY = Math.round(a.viewportHeight / 2);
      var b = function () {
          a._processSensorData();
          a._repositionElements();
          c = !1;
        },
        e = function () {
          c || (y(b), (c = !0));
        };
      this._handleSensorWebkit = function (b) {
        a.gamma = b.gamma;
        a.beta = b.beta;
        e();
      };
      this._handleSensorMoz = function (b) {
        a.gamma = 180 * b.x;
        a.beta = -90 * b.y;
        e();
      };
      this._handleMouseMove = function (b) {
        a.oldClientX = a.clientX;
        a.oldClientY = a.clientY;
        b.clientX !== d ? (a.clientX = b.clientX) : (a.clientX = b.pageX);
        b.clientY !== d ? (a.clientY = b.clientY) : (a.clientY = b.pageY);
        e();
      };
      this.useSensorWebkit
        ? g.addEventListener("deviceorientation", a._handleSensorWebkit, !1)
        : this.useSensorMoz &&
          g.addEventListener("MozOrientation", a._handleSensorMoz, !1);
      this.useMouseMove &&
        this.$viewportElement.bind(
          "mousemove." + this.name,
          a._handleMouseMove
        );
      e();
    },
  };
  f.fn[h] = function (a) {
    var c = arguments;
    if (a === d || "object" === typeof a)
      return this.each(function () {
        f.data(this, "plugin_" + h) ||
          f.data(this, "plugin_" + h, new m(this, a));
      });
    if ("string" === typeof a && "_" !== a[0] && "init" !== a)
      return this.each(function () {
        var b = f.data(this, "plugin_" + h);
        b instanceof m &&
          "function" === typeof b[a] &&
          b[a].apply(b, Array.prototype.slice.call(c, 1));
        "destroy" === a && f.data(this, "plugin_" + h, null);
      });
  };
  f[h] = function (a) {
    var c = f(g);
    return c[h].apply(c, Array.prototype.slice.call(arguments, 0));
  };
  f[h].positionProperty = u;
  f[h].motionType = p;
  g[h] = m;
})(jQuery, this, document);
