(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

var _inView = _interopRequireDefault(require("in-view"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Anima = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Anima, _Component);

  var _super = _createSuper(Anima);

  function Anima(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, Anima);
    _this = _super.call(this, "anima");
    site.components.mount((0, _assertThisInitialized2["default"])(_this));
    site.navigation.registerNavigationCallback(_this.enterPageWithDelay.bind((0, _assertThisInitialized2["default"])(_this), 300));
    _this.t = 100;
    _this.base = 200;
    _this.benter = _this.enter.bind((0, _assertThisInitialized2["default"])(_this));
    _this.bexit = _this.exit.bind((0, _assertThisInitialized2["default"])(_this));
    _this.bclear = _this.clear.bind((0, _assertThisInitialized2["default"])(_this));

    if (site.browser.state.isMobile) {
      _inView["default"].threshold(0);

      _inView["default"].offset(window.innerHeight * 0);
    } else {
      _inView["default"].threshold(0);

      _inView["default"].offset(window.innerHeight * 0.1);
    }

    if (site.edit) document.documentElement.classList.add("no-anima");
    return _this;
  }

  (0, _createClass2["default"])(Anima, [{
    key: "mount",
    value: function mount(site) {}
  }, {
    key: "enterPageWithDelay",
    value: function enterPageWithDelay(delay) {
      if (!delay || delay == 0) this.enterPage();else setTimeout(this.enterPage.bind(this), delay);
    }
  }, {
    key: "enterPage",
    value: function enterPage() {
      document.querySelectorAll(".entry").forEach(this.run.bind(this));
      (0, _inView["default"])('.scroll').on('enter', this.run.bind(this));
      (0, _inView["default"])('.scroll').check();
    }
  }, {
    key: "run",
    value: function run(el) {
      if (el.classList.contains("anima")) this.enter(el);
      el.querySelectorAll(".anima").forEach(this.benter);
      el.classList.remove("scroll");
    }
  }, {
    key: "enter",
    value: function enter(el) {
      el.classList.remove("out");
      var delay = Number(el.getAttribute("data-anima-delay")) || 0;
      setTimeout(function () {
        el.classList.add("in");
      }, delay * this.t + this.base);
    }
  }, {
    key: "exit",
    value: function exit(el) {
      el.classList.add("out");
    }
  }, {
    key: "clear",
    value: function clear(el) {
      el.classList.remove("out");
      el.classList.remove("in");
    }
  }, {
    key: "inChildren",
    value: function inChildren(el) {
      if (!el) return;
      var c = el.querySelectorAll(".anima");
      if (!c) return;
      c.forEach(this.benter);
    }
  }, {
    key: "outChildren",
    value: function outChildren(el) {
      if (!el) return;
      var c = el.querySelectorAll(".anima");
      if (!c) return;
      c.forEach(this.bexit);
    }
  }, {
    key: "clearChildren",
    value: function clearChildren(el) {
      if (!el) return;
      var c = el.querySelectorAll(".anima");
      if (!c) return;
      c.forEach(this.bclear);
    }
  }]);
  return Anima;
}(_component["default"]);

exports["default"] = Anima;

},{"./component":5,"@babel/runtime/helpers/assertThisInitialized":27,"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/getPrototypeOf":30,"@babel/runtime/helpers/inherits":31,"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/possibleConstructorReturn":33,"in-view":43}],2:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ArtistHeader = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ArtistHeader, _Component);

  var _super = _createSuper(ArtistHeader);

  function ArtistHeader(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, ArtistHeader);
    _this = _super.call(this, "artistheader");
    site.components.mount((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ArtistHeader, [{
    key: "mount",
    value: function mount(site) {
      document.addEventListener("click", this.onClick.bind(this));
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      var show = e.target.closest(".show-bio");
      var hide = e.target.closest(".hide-bio, .artistHeader__cover, .artistHeader .section__inner");
      if (!show && !hide) return;
      var header = document.querySelector(".artistHeader");
      if (show) header.classList.add("showbio");else if (hide) header.classList.remove("showbio");
    }
  }]);
  return ArtistHeader;
}(_component["default"]);

exports["default"] = ArtistHeader;

},{"./component":5,"@babel/runtime/helpers/assertThisInitialized":27,"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/getPrototypeOf":30,"@babel/runtime/helpers/inherits":31,"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/possibleConstructorReturn":33}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ArtistList = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ArtistList, _Component);

  var _super = _createSuper(ArtistList);

  function ArtistList(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, ArtistList);
    _this = _super.call(this, "artist-list");
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    _this.cat = "";
    _this.list = null;
    _this.artists = null;
    document.addEventListener("click", _this.onClick.bind((0, _assertThisInitialized2["default"])(_this)));
    return _this;
  }

  (0, _createClass2["default"])(ArtistList, [{
    key: "unmount",
    value: function unmount() {
      this.artist = "";
      this.cat = "";
      this.list = null;
    }
  }, {
    key: "mount",
    value: function mount(site) {
      var list = document.getElementById("artist-list");
      if (list) this.init(list);
    }
  }, {
    key: "init",
    value: function init(list) {
      this.list = list;
      this.artists = list.querySelectorAll(".artistList__artistLink");
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      if (this.list == null) return;
      var toggle = e.target.closest(".artistList__filter");

      if (toggle) {
        var option = e.target.closest("[data-cat-slug]");
        if (option) this.setOption(option);
      }
    }
  }, {
    key: "setOption",
    value: function setOption(option) {
      this.cat = option.getAttribute("data-cat-slug");
      var active = document.querySelector("[data-cat-slug].active");
      if (active) active.classList.remove("active");
      option.classList.add("active");
      this.filterArtists();
    }
  }, {
    key: "filterArtists",
    value: function filterArtists() {
      // console.log(this.cat);
      for (var i = 0; i < this.artists.length; i++) {
        var cats = this.artists[i].getAttribute("data-filter").split(",");
        this.artists[i].style.display = this.cat == "" || cats.indexOf(this.cat) >= 0 ? "block" : "none";
      }
    }
  }]);
  return ArtistList;
}(_component["default"]);

exports["default"] = ArtistList;

},{"./component":5,"@babel/runtime/helpers/assertThisInitialized":27,"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/getPrototypeOf":30,"@babel/runtime/helpers/inherits":31,"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/possibleConstructorReturn":33}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ArtistSlider = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ArtistSlider, _Component);

  var _super = _createSuper(ArtistSlider);

  function ArtistSlider(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, ArtistSlider);
    _this = _super.call(this, "artist-slider");
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    _this.slider = null;
    _this.rail = null;
    _this.browser = site.browser;
    site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
    _this.toMove = 0;
    return _this;
  }

  (0, _createClass2["default"])(ArtistSlider, [{
    key: "unmount",
    value: function unmount() {
      this.slider = null;
    }
  }, {
    key: "mount",
    value: function mount(site) {
      this.slider = document.getElementById("artist-slider");
      if (!this.slider) return;
      this.rail = this.slider.querySelector(".slider__rail");
      var prev = this.slider.querySelector(".prev");
      var next = this.slider.querySelector(".next");
      prev.addEventListener("click", this.moveSlider.bind(this, -1));
      next.addEventListener("click", this.moveSlider.bind(this, 1));
    }
  }, {
    key: "moveSlider",
    value: function moveSlider(pages) {
      var move = window.innerWidth * 0.85 * pages;
      this.toMove += move;

      if (this.rail.scrollLeft + this.toMove < 0) {
        this.toMove = -this.rail.scrollLeft;
      }

      if (this.rail.scrollLeft + this.toMove + window.innerWidth > this.rail.scrollWidth) {
        this.toMove = this.rail.scrollWidth - this.rail.scrollLeft - window.innerWidth;
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.slider || this.toMove == 0) return;
      var move = this.toMove * 0.05 * this.browser.state.rate;
      this.rail.scrollLeft = this.rail.scrollLeft + move;
      this.toMove -= move;
      if (Math.abs(this.toMove) < 1) this.toMove = 0;
    }
  }]);
  return ArtistSlider;
}(_component["default"]);

exports["default"] = ArtistSlider;

},{"./component":5,"@babel/runtime/helpers/assertThisInitialized":27,"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/getPrototypeOf":30,"@babel/runtime/helpers/inherits":31,"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/possibleConstructorReturn":33}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Component = /*#__PURE__*/function () {
  function Component() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    (0, _classCallCheck2["default"])(this, Component);
    this.name = name;
  }

  (0, _createClass2["default"])(Component, [{
    key: "mount",
    value: function mount() {}
  }, {
    key: "unmount",
    value: function unmount() {}
  }]);
  return Component;
}();

exports["default"] = Component;

},{"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/interopRequireDefault":32}],6:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

var _dcanvas = _interopRequireDefault(require("../utility/2dcanvas"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Cursors = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Cursors, _Component);

  var _super = _createSuper(Cursors);

  function Cursors(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, Cursors);
    _this = _super.call(this, "cursors");
    _this.showing = false;
    _this.browser = site.browser;
    _this.el = document.getElementById("cursor");

    _this.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));

    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this)); // document.addEventListener('swup:animationOutStart', this.showLoading.bind(this));
    // document.addEventListener('swup:animationInStart', this.hideLoading.bind(this));
    // document.addEventListener('swup:animationInDone', this.endLoading.bind(this));

    return _this;
  }

  (0, _createClass2["default"])(Cursors, [{
    key: "mount",
    value: function mount(site) {
      this.initPage();
    } // showLoading(){
    //   this.showing = "load";
    //   this.el.classList.add("cursor--show")
    // }
    // hideLoading(){
    //   this.el.classList.remove("cursor--show")
    // }
    // endLoading(){
    //   setTimeout( () => {
    //     this.showing = false;
    //     this.initPage();
    //   }, 300);
    // }

  }, {
    key: "initPage",
    value: function initPage() {
      var _this2 = this;

      document.querySelectorAll("[data-cursor]").forEach(function (item, i) {
        var cursor = item.getAttribute("data-cursor");

        if (cursor) {
          item.addEventListener("mouseenter", _this2.show.bind(_this2, cursor));
          item.addEventListener("mouseleave", _this2.hide.bind(_this2, cursor));
        }
      });
    }
  }, {
    key: "show",
    value: function show(cursor) {
      if (cursor) document.documentElement.classList.add("show-cursor-" + cursor);
      this.showing = cursor;
    }
  }, {
    key: "hide",
    value: function hide(cursor) {
      if (cursor) document.documentElement.classList.remove("show-cursor-" + cursor);
      this.showing = false;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.browser.isMobile) {
        this.el.style.transform = "translate3d(" + this.browser.state.mouse.xLag + "px, " + this.browser.state.mouse.yLag + "px, 0)";
      } // if(this.showing == "load"){
      //   //let ang = this.browser.state.t * 0.33 % 360;
      //   //this.loadIcon.style.transform = "rotate("+(ang)+"deg)";
      // }
      // if(this.showing == "drag"){
      //   //let diff = (this.browser.state.mouse.x - this.browser.state.mouse.xSlowLag) * (this.browser.state.mouse.down ? 0.5 : 0.25);
      //   //this.dragIcon.style.transform = "rotate("+(diff)+"deg)";
      // }

    }
  }]);
  return Cursors;
}(_component["default"]);

exports["default"] = Cursors;

},{"../utility/2dcanvas":22,"./component":5,"@babel/runtime/helpers/assertThisInitialized":27,"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/getPrototypeOf":30,"@babel/runtime/helpers/inherits":31,"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/possibleConstructorReturn":33}],7:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var HTMLClass = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(HTMLClass, _Component);

  var _super = _createSuper(HTMLClass);

  function HTMLClass(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, HTMLClass);
    _this = _super.call(this, "htmlclass");
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    _this.remove = ["plain-nav", "bg-black", "bg-pink", "dark-bg", "show-artist-link", "show-back-link", "image-zoom"];
    return _this;
  }

  (0, _createClass2["default"])(HTMLClass, [{
    key: "unmount",
    value: function unmount() {// document.documentElement.classList.remove(...this.remove);
    }
  }, {
    key: "mount",
    value: function mount(site) {
      var classEl = document.getElementById("htmlclass");

      if (classEl) {
        var classes = classEl.getAttribute("data-class");

        if (classes != null) {
          this.remove.forEach(function (c) {
            if (classes.indexOf(c) < 0 && c != "") document.documentElement.classList.remove(c);
          });
          var split = classes.split(" ");
          split.forEach(function (c) {
            if (c != "") document.documentElement.classList.add(c);
          }); // document.documentElement.className += " " + classes;
        }
      }
    }
  }]);
  return HTMLClass;
}(_component["default"]);

exports["default"] = HTMLClass;

},{"./component":5,"@babel/runtime/helpers/assertThisInitialized":27,"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/getPrototypeOf":30,"@babel/runtime/helpers/inherits":31,"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/possibleConstructorReturn":33}],8:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

var _dragUtil = _interopRequireDefault(require("../utility/drag-util"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ImageSlider = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ImageSlider, _Component);

  var _super = _createSuper(ImageSlider);

  function ImageSlider(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, ImageSlider);
    _this = _super.call(this, "image-slider");
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    _this.browser = site.browser;
    _this.drag = (0, _dragUtil["default"])();

    _this.drag.init(site.browser);

    document.addEventListener("click", _this.onClick.bind((0, _assertThisInitialized2["default"])(_this)));
    return _this;
  }

  (0, _createClass2["default"])(ImageSlider, [{
    key: "unmount",
    value: function unmount() {
      this.drag.clearDraggableElements();
    }
  }, {
    key: "mount",
    value: function mount(site) {
      var imageSlider = document.querySelector(".imageSlider");
      if (!imageSlider) return;
      var mainImage = imageSlider.querySelector(".imageSlider__mainImage");
      this.drag.registerDraggableElement(mainImage, this.onDrag.bind(this), {
        clearable: true
      });
      this.setLinks(imageSlider);
      document.getElementById("copy-link").addEventListener("click", this.copyLink.bind(this));
    }
  }, {
    key: "onDrag",
    value: function onDrag(state) {
      var moved = Math.abs(state.diff.x);

      if (state.dragging && moved > 200 || !state.dragging && moved > 30) {
        state.endDrag();
        var imageSlider = document.querySelector(".imageSlider");
        this.incrementSlide(Math.sign(state.diff.x * -1), imageSlider);
      }
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      var toggle = e.target.closest(".share-image");

      if (toggle) {
        toggle.classList.add("show");
      } else {
        var filter = document.querySelector(".share-image.show");
        if (filter) filter.classList.remove("show");
      }

      var imageSlider = e.target.closest(".imageSlider");
      if (!imageSlider) return;
      var thumb = e.target.closest(".imageSlider__slide");

      if (thumb) {
        var main = imageSlider.querySelector(".imageSlider__mainImage");
        this.replaceMainImage(main, thumb, imageSlider);
      }

      var button = e.target.closest(".imageSlider__button");

      if (button) {
        var move = button.classList.contains("imageSlider__button--prev") ? -1 : 1;
        this.incrementSlide(move, imageSlider);
      }

      var zoomIn = e.target.closest(".imageSlider__zoom");

      if (zoomIn) {
        document.documentElement.classList.add("image-zoom");
      }

      var zoomOut = e.target.closest(".imageSlider__zoomClose");

      if (zoomOut) {
        document.documentElement.classList.remove("image-zoom");
      }
    }
  }, {
    key: "incrementSlide",
    value: function incrementSlide(move, imageSlider) {
      if (move == 0 || !imageSlider) return;
      var active = Number(imageSlider.getAttribute("data-active"));
      var count = Number(imageSlider.getAttribute("data-count"));
      var newIndex = (active + move + count) % count;
      var thumb = imageSlider.querySelector(".imageSlider__slide:nth-child(" + (newIndex + 1) + ")");

      if (thumb) {
        var main = imageSlider.querySelector(".imageSlider__mainImage");
        this.replaceMainImage(main, thumb, imageSlider);
      }
    }
  }, {
    key: "replaceMainImage",
    value: function replaceMainImage(main, thumb, imageSlider) {
      // get index
      var count = imageSlider.querySelector(".imageSlider__count span");
      var index = Array.from(thumb.parentNode.children).indexOf(thumb);
      var active = imageSlider.querySelector(".imageSlider__slide.active"); // var video = thumb.classList.contains("imageSlider__slide--video");

      main.innerHTML = thumb.innerHTML; // if(!video){
      //   var img = thumb.querySelector(".img");
      //   // var lazy = img.querySelector(".lazy");
      //   // if(lazy.classList.contains("loaded")){
      //   //   var clone = img.cloneNode(true);
      //   //   var output = thumb.getAttribute("data-image-output");
      //   //   var outputNode = document.createElement("div");
      //   //   outputNode.innerHTML = output;
      //   //   clone.className = outputNode.children[0].className;
      //   //   main.appendChild(clone);
      //   // } else {
      //     main.innerHTML = thumb.getAttribute("data-image-output");
      //     // this.browser.lazy.update();
      //   // }
      // } else {
      //main.innerHTML = thumb.getAttribute("data-image-output");
      // }

      imageSlider.setAttribute("data-active", index);
      count.innerHTML = index + 1;
      if (active) active.classList.remove("active");
      thumb.classList.add("active");
      this.setLinks(imageSlider);
    }
  }, {
    key: "setLinks",
    value: function setLinks(imageSlider) {
      if ('URLSearchParams' in window) {
        var index = imageSlider.getAttribute("data-active", index);
        var searchParams = new URLSearchParams(window.location.search);
        searchParams.set("i", index);
        var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
        history.replaceState(null, '', newRelativePathQuery);
        var link = window.location;
        var copy = document.getElementById("copy-link");
        copy.setAttribute("data-copy", link);
        var email = document.getElementById("email-link");
        email.setAttribute("href", "mailto:?body=" + link);
      }
    }
  }, {
    key: "copyLink",
    value: function copyLink() {
      var copy = document.getElementById("copy-link");
      var text = copy.getAttribute("data-copy");
      var share = document.getElementById("share-label");
      var input = document.createElement('input');
      input.setAttribute('value', text);
      document.body.appendChild(input);
      input.select();
      var result = document.execCommand('copy');
      document.body.removeChild(input);
      share.innerHTML = "✓ Copied";
      setTimeout(function () {
        share.innerHTML = "share";
      }, 3000);
    }
  }]);
  return ImageSlider;
}(_component["default"]);

exports["default"] = ImageSlider;

},{"../utility/drag-util":25,"./component":5,"@babel/runtime/helpers/assertThisInitialized":27,"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/getPrototypeOf":30,"@babel/runtime/helpers/inherits":31,"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/possibleConstructorReturn":33}],9:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

var _access = require("../utility/access");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Menu = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Menu, _Component);

  var _super = _createSuper(Menu);

  function Menu(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, Menu);
    _this = _super.call(this, "menu");
    document.addEventListener('swup:animationOutStart', _this.closeMenu.bind((0, _assertThisInitialized2["default"])(_this)));
    document.addEventListener('swup:samePage', _this.closeMenu.bind((0, _assertThisInitialized2["default"])(_this))); //site.navigation.registerNavigationCallback(this.highlightActivePage.bind(this));
    //site.navigation.registerNavigationCallback(this.checkBgColor.bind(this));

    _this.browser = site.browser;
    _this.nav = document.getElementById("nav");
    _this.navLinks = document.querySelectorAll(".nav__link");
    _this.scrolled = false;
    _this.scrollCache = site.browser.state.scrollTop;
    _this.navHeight = 0;
    _this.nav = document.getElementById("nav");
    _this.menu = document.getElementById("menu");
    _this.inner = document.getElementById("menu-inner");
    _this.offset = 0;
    site.components.mount((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Menu, [{
    key: "mount",
    value: function mount(site) {
      this.initMenuToggle();
      site.browser.addToResizeLoop(this.resize.bind(this));
      site.browser.addToRenderLoop(this.render.bind(this));
      this.initMenuLinks();
    }
  }, {
    key: "render",
    value: function render() {
      this.handleScroll();
    }
  }, {
    key: "resize",
    value: function resize() {
      this.navHeight = nav.getBoundingClientRect().height;
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      if (this.navHeight == 0) return;
      var diff = this.browser.state.scrollTop - this.scrollCache;
      var speed = diff > 0 ? 0.3 : 0.5;
      var min = Math.min(this.browser.state.scrollTop, this.browser.state.rem * 2);
      if (this.browser.state.isTablet) min = 0;
      this.offset = Math.min(this.navHeight, Math.max(min, this.offset + diff * speed)); //nav.style.transform = "translateY("+(this.offset * -1)+"px)";
      // if (!this.scrolled && this.browser.state.scrollTop > 10 && (this.offset == this.navHeight * -1 || diff < 0)){
      //   document.documentElement.classList.add("scrolled");
      //   this.scrolled = true;
      // }
      // if(this.scrolled && this.browser.state.scrollTop < 10) {
      //   document.documentElement.classList.remove("scrolled");
      //   this.scrolled = false;
      // }

      this.scrollCache = this.browser.state.scrollTop;
    }
  }, {
    key: "initMenuToggle",
    value: function initMenuToggle() {
      var toggle = document.getElementById("menu-toggle");
      if (toggle) (0, _access.addConfirmListeners)(toggle, this.toggleMenu.bind(this));
      var overlay = document.getElementById("menu-overlay");
      if (overlay) overlay.addEventListener("click", this.closeMenu.bind(this));
      var showSub = document.getElementById("show-submenu");
      if (showSub) (0, _access.addConfirmListeners)(showSub, this.showSubMenu.bind(this));
      var hideSub = document.getElementById("hide-submenu");
      if (hideSub) (0, _access.addConfirmListeners)(hideSub, this.hideSubMenu.bind(this));
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      if (!document.documentElement.classList.contains("menu-open")) {
        this.openMenu();
      } else {
        this.closeMenu();
      }
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      this.inner.scrollTop = -10000;
      document.documentElement.classList.add("menu-open");
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      document.documentElement.classList.remove("menu-open");
      this.hideSubMenu();
    }
  }, {
    key: "showSubMenu",
    value: function showSubMenu() {
      document.documentElement.classList.add("submenu-open");
    }
  }, {
    key: "hideSubMenu",
    value: function hideSubMenu() {
      document.documentElement.classList.remove("submenu-open");
    }
  }, {
    key: "initMenuLinks",
    value: function initMenuLinks() {
      var _this2 = this;

      document.addEventListener("click", function (e) {
        var menuLink = e.target.closest("#nav a:not(.ignore-nav-close)");

        if (menuLink) {
          _this2.closeMenu();
        }
      });
    }
  }, {
    key: "highlightActivePage",
    value: function highlightActivePage() {
      var active = this.findActivePage();
      this.navLinks.forEach(function (item, i) {
        item.classList.remove("nav__link--wasActive");

        if (item == active) {
          item.classList.add("nav__link--active");
        } else {
          if (item.classList.contains("nav__link--active")) {
            item.classList.add("nav__link--wasActive");
          }

          item.classList.remove("nav__link--active");
        }
      });
    }
  }, {
    key: "findActivePage",
    value: function findActivePage() {
      if (window.location.pathname == "/") return null;
      var workLink;
      var originalLink;
      var output;
      this.navLinks.forEach(function (item, i) {
        if (item.href.includes(window.location.href)) output = item;
        if (/work/.test(item.href) || /collections/.test(item.href)) workLink = item;
        if (/originals/.test(item.href)) originalLink = item;
      });
      if (/work/.test(window.location.pathname) || /collections/.test(window.location.pathname)) output = workLink;
      return output;
    }
  }, {
    key: "checkBgColor",
    value: function checkBgColor() {
      if (document.querySelector(".darknav, .header.section--yellow")) {
        document.documentElement.classList.add("menu-dark");
      } else {
        document.documentElement.classList.remove("menu-dark");
      }
    }
  }]);
  return Menu;
}(_component["default"]);

exports["default"] = Menu;

},{"../utility/access":23,"./component":5,"@babel/runtime/helpers/assertThisInitialized":27,"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/getPrototypeOf":30,"@babel/runtime/helpers/inherits":31,"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/possibleConstructorReturn":33}],10:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

var _ajax = require("../utility/ajax");

var _access = require("../utility/access");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Popup = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Popup, _Component);

  var _super = _createSuper(Popup);

  function Popup(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, Popup);
    _this = _super.call(this, "popup");
    _this.browser = site.browser;
    _this.popup = document.getElementById("popup");
    _this.inner = document.getElementById("popup-inner");
    _this.close = document.getElementById("popup-close");
    _this.overlay = document.getElementById("popup-overlay");
    _this.parser = new DOMParser();
    site.components.mount((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Popup, [{
    key: "mount",
    value: function mount(site) {
      var _this2 = this;

      (0, _access.addConfirmListeners)(this.close, this.hidePopup.bind(this), document.body);
      (0, _access.addConfirmListeners)(this.overlay, this.hidePopup.bind(this), document.body);
      document.addEventListener("click", function (e) {
        var popupLink = e.target.closest("#popup a");

        if (popupLink) {
          if (popupLink.getAttribute("data-popup-url") != undefined) {
            _this2.clearPopup();

            _this2.scrollToTop();
          } else {
            _this2.hidePopup();
          }
        }

        var link = e.target.closest("a[data-popup-url]");

        if (link) {
          e.preventDefault();
          var href = link.getAttribute("data-popup-url");

          _this2.loadInPopup(href);
        }
      });
    }
  }, {
    key: "loadInPopup",
    value: function loadInPopup(url) {
      var _this3 = this;

      this.showPopup();
      (0, _ajax.getAjax)(url, function (response) {
        var doc = _this3.parser.parseFromString(response, "text/html");

        var main = doc.getElementById("main");

        if (main) {
          _this3.inner.innerHTML = main.innerHTML;
        } else {
          hidePopup();
        }
      }, function (response) {
        hidePopup();
      });
    }
  }, {
    key: "showPopup",
    value: function showPopup() {
      document.documentElement.classList.add("show-popup");
    }
  }, {
    key: "hidePopup",
    value: function hidePopup() {
      document.documentElement.classList.remove("show-popup");
      this.inner.innerHTML = "";
    }
  }, {
    key: "clearPopup",
    value: function clearPopup() {
      this.inner.innerHTML = "";
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      this.popup.scrollTop = this.browser.state.rem * 12; //this.popup.scrollTop = 0;
    }
  }]);
  return Popup;
}(_component["default"]);

exports["default"] = Popup;

},{"../utility/access":23,"../utility/ajax":24,"./component":5,"@babel/runtime/helpers/assertThisInitialized":27,"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/getPrototypeOf":30,"@babel/runtime/helpers/inherits":31,"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/possibleConstructorReturn":33}],11:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

var _ajax = require("../utility/ajax");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PortfolioGrid = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(PortfolioGrid, _Component);

  var _super = _createSuper(PortfolioGrid);

  function PortfolioGrid(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, PortfolioGrid);
    _this = _super.call(this, "portfolio-grid");
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    _this.artist = "";
    _this.cat = "";
    _this.grid = null;
    _this.catWrap = null;
    _this.count = null;
    _this.inner = null;
    _this.browser = site.browser;
    _this.isIdle = false;
    _this.moreToLoad = false;
    _this.currentPage = 0;
    _this.bottomHeight = 0;
    site.browser.addToResizeLoop(_this.resize.bind((0, _assertThisInitialized2["default"])(_this)));
    site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
    document.addEventListener("click", _this.onClick.bind((0, _assertThisInitialized2["default"])(_this)));
    return _this;
  }

  (0, _createClass2["default"])(PortfolioGrid, [{
    key: "unmount",
    value: function unmount() {
      this.artist = "";
      this.cat = "";
      this.grid = null;
      this.catWrap = null;
      this.count = null;
      this.inner = null;
      this.isIdle = false;
      this.moreToLoad = false;
      this.currentPage = 0;
    }
  }, {
    key: "mount",
    value: function mount(site) {
      var grid = document.getElementById("portfolio-grid");
      if (grid) this.init(grid);
    }
  }, {
    key: "init",
    value: function init(grid) {
      this.artist = grid.getAttribute("data-artist");
      this.grid = grid;
      this.catWrap = grid.querySelector(".cat-here");
      this.count = grid.querySelector(".count-here");
      this.inner = grid.querySelector(".cards-here"); // Load in cards

      this.loadProjects();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.inner.innerHTML = "";
      this.count.innerHTML = "";
      this.currentPage = 0;
      this.isIdle = false;
      this.moreToLoad = false;
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      if (this.grid == null) return;
      var toggle = e.target.closest(".portfolioGrid__filter");

      if (toggle) {
        toggle.classList.add("show"); // check options

        var option = e.target.closest("[data-cat-slug]");
        if (option) this.setOption(option);
      } else {
        var filter = document.querySelector(".portfolioGrid__filter.show");
        if (filter) filter.classList.remove("show");
      }
    }
  }, {
    key: "setOption",
    value: function setOption(option) {
      this.cat = option.getAttribute("data-cat-slug");
      var active = document.querySelector("[data-cat-slug].active");
      if (active) active.classList.remove("active");
      option.classList.add("active");
      this.catWrap.innerHTML = option.innerHTML;
      this.reset(); // scroll to top;

      this.loadProjects();
    }
  }, {
    key: "startLoading",
    value: function startLoading() {
      this.grid.classList.add("loading");
    }
  }, {
    key: "stopLoading",
    value: function stopLoading() {
      var _this2 = this;

      if (this.grid == null) return;
      this.grid.classList.remove("loading");
      setTimeout(function () {
        _this2.bottomHeight = _this2.grid.getBoundingClientRect().bottom + _this2.browser.state.scrollTop;
        _this2.isIdle = true;
      }, 100);
    }
  }, {
    key: "loadProjects",
    value: function loadProjects() {
      var _this3 = this;

      // Creaate URL
      var artist = this.artist;
      var cat = this.cat;
      var page = this.currentPage;
      var request = "/api/projects?artist=".concat(artist, "&cat=").concat(cat, "&page=").concat(page);
      this.isIdle = false;
      this.startLoading();
      (0, _ajax.getAjax)(request, function (response) {
        var data = JSON.parse(response);

        _this3.outputProjects(data);

        _this3.stopLoading();

        _this3.currentPage++;
        _this3.moreToLoad = _this3.currentPage < Number(data.pages);
      }, function (error) {
        console.log(error);
      });
    }
  }, {
    key: "outputProjects",
    value: function outputProjects(data) {
      var _this4 = this;

      if (this.grid == null) return;
      this.count.innerHTML = "(" + data.count + ")";
      data.items.forEach(function (project) {
        var card = _this4.createPGI(project);

        _this4.inner.appendChild(card);
      }); // this.browser.lazy.update();
      //this.browser.lazy.loadAll();
    }
  }, {
    key: "createPGI",
    value: function createPGI(project) {
      var card = document.createElement("a");
      card.classList.add("pgi");
      card.classList.add("hoverTrigger");
      card.href = project.url;
      var inner = "<div class=\"pgi__media maskedImage\">\n                    <div class=\"img\">";

      if (project.image != null) {
        inner += "<picture>\n                        <source srcset=\"".concat(project.image.mwds, "\" type=\"image/webp\"/>\n                        <source srcset=\"").concat(project.image.mjds, "\" media=\"(max-width: 800px)\" />\n                        <source srcset=\"").concat(project.image.dwds, "\" media=\"(min-width: 800px)\" type=\"image/webp\"/>\n                        <source srcset=\"").concat(project.image.djds, "\" media=\"(min-width: 800px)\" />\n                        <img\n                          src=\"").concat(project.image.imds, "\"\n                          width=\"").concat(project.image.w, "\"\n                          height=\"").concat(project.image.h, "\"\n                          alt=\"\"\n                          {{attributes}}\n                        />\n                      </picture>");
      }

      inner += "<div class=\"img-spinner\"></div>\n                    </div>\n                  </div>\n                  <div class=\"pgi__content\">\n                    <div class=\"pgi__left\">\n                      <h2 class=\"pgi__title\">".concat(project.title, "</h2>\n                    </div>\n                    <span class=\"pgi__count\">(").concat(project.count, ")</span>\n                  </div>");
      card.innerHTML = inner;
      return card;
    }
  }, {
    key: "resize",
    value: function resize() {
      if (this.grid == null) return;
      this.bottomHeight = this.grid.getBoundingClientRect().top + this.grid.offsetHeight;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.grid == null || !this.isIdle || !this.moreToLoad) return; // get distance to bottom;

      var distToBottom = this.bottomHeight - (this.browser.state.scrollTop + window.innerHeight);
      var remToBottom = distToBottom / this.browser.state.rem; // load more if close to bottom

      if (remToBottom < 200 && remToBottom > -130) {
        this.loadProjects();
      }
    }
  }]);
  return PortfolioGrid;
}(_component["default"]);

exports["default"] = PortfolioGrid;

},{"../utility/ajax":24,"./component":5,"@babel/runtime/helpers/assertThisInitialized":27,"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/getPrototypeOf":30,"@babel/runtime/helpers/inherits":31,"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/possibleConstructorReturn":33}],12:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ScrollTrigger = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ScrollTrigger, _Component);

  var _super = _createSuper(ScrollTrigger);

  function ScrollTrigger(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, ScrollTrigger);
    _this = _super.call(this, "scroll-trigger"); // This component handles triggering of events when an element scrolls into view.

    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    _this.triggers = [];
    _this.added = [];
    _this.browser = site.browser;
    _this.st = _this.browser.state.scrollTop;
    site.browser.addToResizeLoop(_this.resize.bind((0, _assertThisInitialized2["default"])(_this)));
    site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
    _this.bindCheck = _this.check.bind((0, _assertThisInitialized2["default"])(_this));
    _this.offsetInterval = null;
    return _this;
  }

  (0, _createClass2["default"])(ScrollTrigger, [{
    key: "unmount",
    value: function unmount() {
      this.added.forEach(function (item, i) {
        document.documentElement.classList.remove(item);
      });
      this.added = [];
      this.triggers = [];
      clearInterval(this.offsetInterval);
    }
  }, {
    key: "mount",
    value: function mount(site) {
      var triggers = document.querySelectorAll("[data-st-after], [data-st-before]");

      for (var i = 0; i < triggers.length; i++) {
        this.initOne(triggers[i]);
      }

      this.offsetInterval = setInterval(this.calcOffsets.bind(this), 250);
    }
  }, {
    key: "initOne",
    value: function initOne(el) {
      var trigger = {};
      trigger.el = el;

      if (el.getAttribute("data-st-after") != undefined) {
        trigger["class"] = el.getAttribute("data-st-after");
        trigger.mode = "after";
      }

      if (el.getAttribute("data-st-before") != undefined) {
        trigger["class"] = el.getAttribute("data-st-before");
        trigger.mode = "before";
      }

      trigger.push = 0;

      if (el.getAttribute("data-st-offset") != undefined) {
        trigger.push = Number(el.getAttribute("data-st-offset"));
      }

      trigger.offset = this.getOffset(el);
      trigger.state = "";
      this.check(trigger);
      this.triggers.push(trigger);
      this.added.push(trigger["class"]);
    }
  }, {
    key: "calcOffsets",
    value: function calcOffsets() {
      var _this2 = this;

      this.triggers.forEach(function (item, i) {
        item.offset = _this2.getOffset(item.el);
      });
    }
  }, {
    key: "getOffset",
    value: function getOffset(el) {
      return el.offsetTop;
    }
  }, {
    key: "render",
    value: function render() {
      this.st = this.browser.state.scrollTop + window.innerHeight;
      this.triggers.forEach(this.bindCheck);
    }
  }, {
    key: "check",
    value: function check(trigger) {
      var offset = trigger.offset + trigger.push * this.browser.state.rem; // console.log(offset);
      // if(this.browser.state.isMobile){
      //   offset = trigger.offset;
      // }

      if (this.st < offset) {
        if (trigger.mode == "before" && trigger.state != "on") {
          document.documentElement.classList.add(trigger["class"]);
          trigger.state = "on";
        }

        if (trigger.mode == "after" && trigger.state != "off") {
          document.documentElement.classList.remove(trigger["class"]);
          trigger.state = "off";
        }
      } else {
        if (trigger.mode == "after" && trigger.state != "on") {
          document.documentElement.classList.add(trigger["class"]);
          trigger.state = "on";
        }

        if (trigger.mode == "before" && trigger.state != "off") {
          document.documentElement.classList.remove(trigger["class"]);
          trigger.state = "off";
        }
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      this.calcOffsets();
    }
  }]);
  return ScrollTrigger;
}(_component["default"]);

exports["default"] = ScrollTrigger;

},{"./component":5,"@babel/runtime/helpers/assertThisInitialized":27,"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/getPrototypeOf":30,"@babel/runtime/helpers/inherits":31,"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/possibleConstructorReturn":33}],13:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

var _inView = _interopRequireDefault(require("in-view"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ScrollPal = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ScrollPal, _Component);

  var _super = _createSuper(ScrollPal);

  function ScrollPal(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, ScrollPal);
    _this = _super.call(this, "scrollpal");
    _this.browser = site.browser;
    _this.images = [];
    site.browser.addToRenderLoop(_this.render.bind((0, _assertThisInitialized2["default"])(_this)));
    site.browser.addToResizeLoop(_this.resize.bind((0, _assertThisInitialized2["default"])(_this)));
    _this.pals = [];
    _this.center = 0;
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ScrollPal, [{
    key: "unmount",
    value: function unmount(site) {
      this.pals.forEach(function (pal, i) {
        clearInterval(pal.interval);
      });
      this.pals = [];
    }
  }, {
    key: "mount",
    value: function mount(site) {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      document.querySelectorAll(".pal").forEach(this.initEl.bind(this));
      (0, _inView["default"])('.pal').on('enter', this.show.bind(this));
      (0, _inView["default"])('.pal').on('exit', this.hide.bind(this));
      setTimeout(function () {
        _this2.pals.forEach(function (pal) {
          _this2.getOffset.bind(_this2, pal);
        });
      }, 100);
      setTimeout(function () {
        _this2.pals.forEach(function (pal) {
          _this2.getOffset.bind(_this2, pal);
        });
      }, 500);
      setTimeout(function () {
        _this2.pals.forEach(function (pal) {
          _this2.getOffset.bind(_this2, pal);
        });
      }, 1000);
      setTimeout(function () {
        _this2.pals.forEach(function (pal) {
          _this2.getOffset.bind(_this2, pal);
        });
      }, 2000);
    }
  }, {
    key: "show",
    value: function show(el) {
      var pal = this.find(el);
      if (pal) pal.showing = true;
    }
  }, {
    key: "hide",
    value: function hide(el) {
      var pal = this.find(el);
      if (pal) pal.showing = false;
    }
  }, {
    key: "find",
    value: function find(el) {
      return this.pals.find(function (o) {
        return o.el == el;
      });
    }
  }, {
    key: "initEl",
    value: function initEl(el) {
      var pal = {
        el: el,
        offset: 0,
        ratio: 0.5,
        // ability to set this.
        moves: []
      };
      el.querySelectorAll("[data-pal]").forEach(function (item, i) {
        pal.moves.push({
          el: item,
          speed: Number(item.getAttribute("data-pal")) || 1,
          offset: 0,
          rotate: item.classList.contains("pal-rotate"),
          moveX: item.classList.contains("pal-moveX"),
          moveY: item.classList.contains("pal-moveY")
        });
      });
      this.getOffset(pal);
      pal.interval = setInterval(this.getOffset.bind(this, pal), 3000);
      this.pals.push(pal);
      if (!this.browser.state.isMobile) this.renderOne(pal);
    }
  }, {
    key: "getOffset",
    value: function getOffset(pal) {
      var bounds = pal.el.getBoundingClientRect();
      pal.offset = bounds.top + this.browser.state.scrollTop + bounds.height * pal.ratio;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.browser.state.isMobile) return;
      this.center = this.browser.state.scrollLag + window.innerHeight / 2;
      this.pals.forEach(this.renderOne.bind(this));
    }
  }, {
    key: "renderOne",
    value: function renderOne(pal) {
      //if(!pal.showing) return;
      // Base move amount on center of parent pal section (less calcs + better alignment)
      // get scroll offset from center (based on screen height?? / set a max on this of a header height??)
      var offset = this.center - pal.offset;
      var move = offset / window.innerWidth * 100;
      pal.moves.forEach(function (item, i) {
        var y = item.speed * move;
        var x = y * 0.1;
        var deg = y * 0.5;
        var transform = "";

        if (item.moveY) {
          transform += (transform == "" ? "" : " ") + "translateY(" + y + "%)";
        }

        if (item.moveX) {
          transform += (transform == "" ? "" : " ") + "translateX(" + x + "%)";
        }

        if (item.rotate) {
          transform += (transform == "" ? "" : " ") + "rotate(" + deg + "deg)";
        }

        item.el.style.transform = transform;
      });
    }
  }, {
    key: "resize",
    value: function resize() {}
  }]);
  return ScrollPal;
}(_component["default"]);

exports["default"] = ScrollPal;

},{"./component":5,"@babel/runtime/helpers/assertThisInitialized":27,"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/getPrototypeOf":30,"@babel/runtime/helpers/inherits":31,"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/possibleConstructorReturn":33,"in-view":43}],14:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

var _ajax = require("../utility/ajax");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Subscribe = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Subscribe, _Component);

  var _super = _createSuper(Subscribe);

  function Subscribe(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, Subscribe);
    _this = _super.call(this, "subscribe");
    site.components.attachToPages(["all"], (0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Subscribe, [{
    key: "mount",
    value: function mount(site) {
      this.initSubscribeForms();
    }
  }, {
    key: "initSubscribeForms",
    value: function initSubscribeForms() {
      var subs = document.querySelectorAll("form.subscribe");
      subs.forEach(function (sub) {
        var success = sub.querySelector(".subscribe__success");
        var error = sub.querySelector(".subscribe__error");
        sub.addEventListener("submit", function (e) {
          e.preventDefault();
          sub.classList.add("loading");
          sub.classList.remove("error");
          var data = (0, _ajax.serializeObject)(sub);
          (0, _ajax.postAjax)('/actions/mailchimp-subscribe/audience/subscribe', data, function (response) {
            if (response.success) {
              success.innerHTML = response.message;
              sub.classList.add("success");
            } else {
              error.innerHTML = response.message;
              sub.classList.add("error");
            }

            sub.classList.remove("loading");
          }); // if (ga != undefined){
          //   ga("send", "event", "Form", "Submit", "Subscribe", "1");
          // }
        });
      });
    }
  }]);
  return Subscribe;
}(_component["default"]);

exports["default"] = Subscribe;

},{"../utility/ajax":24,"./component":5,"@babel/runtime/helpers/assertThisInitialized":27,"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/getPrototypeOf":30,"@babel/runtime/helpers/inherits":31,"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/possibleConstructorReturn":33}],15:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _component = _interopRequireDefault(require("./component"));

var _ajax = require("../utility/ajax");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Transitions = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Transitions, _Component);

  var _super = _createSuper(Transitions);

  function Transitions(site) {
    var _this;

    (0, _classCallCheck2["default"])(this, Transitions);
    _this = _super.call(this, "transitions");
    _this.navigation = site.navigation;
    _this.addedClass = "";
    _this.images = {};
    _this.lazy = site.browser.lazy;
    document.addEventListener('swup:animationOutStart', _this.navigate.bind((0, _assertThisInitialized2["default"])(_this)));
    document.addEventListener('swup:animationInDone', _this.finish.bind((0, _assertThisInitialized2["default"])(_this))); // setTimeout(() => {
    //   this.getImages();
    // }, 2000);

    return _this;
  }

  (0, _createClass2["default"])(Transitions, [{
    key: "navigate",
    value: function navigate(e) {
      if (!this.navigation.swup) return; //this.parseImage(this.navigation.swup.transition.to);

      var clss = this.parseClass(this.navigation.swup.transition.to);

      if (clss != "") {
        document.documentElement.classList.add(clss);
        this.addedClass = clss;
      }
    }
  }, {
    key: "getImages",
    value: function getImages() {
      var _this2 = this;

      (0, _ajax.getAjax)("/api/swipeimages", function (response) {
        var data = JSON.parse(response);

        _this2.processImages(data);
      }, function (error) {
        console.log(error);
      });
    }
  }, {
    key: "processImages",
    value: function processImages(data) {
      var _this3 = this;

      data.forEach(function (item, i) {
        var image = new Image();
        image.src = item.image.src; // switch based on situation;

        _this3.images["/" + item.url] = image;
      });
    }
  }, {
    key: "parseClass",
    value: function parseClass(path) {
      if (!path) return "";
      var output = "";
      if (path == "/contact" || path == "/artists") output = "swipe-black";
      if (/portfolio/.test(path) && path.split("/").length >= 4) output = "swipe-black";
      var isBlack = document.documentElement.classList.contains("bg-black");
      if (isBlack && output == "swipe-black") output = ""; // output = (output == "swipe-black") ? "" : "swipe-black";

      return output;
    }
  }, {
    key: "parseImage",
    value: function parseImage(path) {
      if (path != undefined && this.images[path] != undefined) {
        var wrap = document.createElement("div");
        wrap.classList.add("swipe-image");
        wrap.appendChild(this.images[path]);
        document.getElementById("swipe-inner").appendChild(wrap);
      }
    }
  }, {
    key: "finish",
    value: function finish() {
      if (this.addedClass != "") {
        document.documentElement.classList.remove(this.addedClass);
        this.addedClass = "";
      }

      document.getElementById("swipe-inner").innerHTML = "";
    }
  }]);
  return Transitions;
}(_component["default"]);

exports["default"] = Transitions;

},{"../utility/ajax":24,"./component":5,"@babel/runtime/helpers/assertThisInitialized":27,"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/getPrototypeOf":30,"@babel/runtime/helpers/inherits":31,"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/possibleConstructorReturn":33}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _vanillaLazyload = _interopRequireDefault(require("vanilla-lazyload"));

var BrowserController = /*#__PURE__*/function () {
  function BrowserController(site) {
    (0, _classCallCheck2["default"])(this, BrowserController);
    this.state = {
      scrollTop: this.getScroll(),
      scrollLag: this.getScroll(),
      scrollDiff: 0,
      lag: 15,
      toRender: [],
      toResize: [],
      resizeTimeout: null,
      mouse: {
        x: 0,
        y: 0,
        xLag: 0,
        yLag: 0,
        xSlowLag: 0,
        ySlowLag: 0,
        lag: 8,
        down: false
      },
      dpi: Math.min(2, window.devicePixelRatio || 1),
      t: 0,
      d: Date.now(),
      delta: 0,
      rate: 0,
      rem: 0,
      isTablet: false,
      isMobile: false
    };
    this.site = site; // this.lazy = new LazyLoad({
    //   "threshold": 1200,
    //   //"cancel_on_exit": false,
    //   //"unobserve_entered": true,
    //   "callback_loaded": (el)=>{ el.parentNode.classList.add("loaded"); }
    //   // "use_native": true,
    // })

    if (site.edit) {// setInterval(() => {
      //   this.lazy.update()
      // }, 2000);
    }

    this.init();
  }

  (0, _createClass2["default"])(BrowserController, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.resizeBaseWork(); //window.addEventListener("scroll", this.onScroll.bind(this));

      window.addEventListener('mousemove', this.onMouseMove.bind(this));
      window.addEventListener('mousedown', this.onMouseDown.bind(this));
      window.addEventListener('mouseup', this.onMouseUp.bind(this));
      window.addEventListener("mouseout", function (e) {
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;

        if (!from || from.nodeName == "HTML") {
          _this.onMouseUp();
        }
      });
      window.addEventListener('resize', this.onResize.bind(this));
      this.boundRender = this.renderLoop.bind(this);
      this.renderLoop();
    }
  }, {
    key: "initLazy",
    value: function initLazy() {// this.lazy = new LazyLoad({
      //   "threshold": 1200,
      //   //"cancel_on_exit": false,
      //   //"unobserve_entered": true,
      //   "callback_loaded": (el)=>{ el.parentNode.classList.add("loaded"); }
      //   // "use_native": true,
      // })
    }
  }, {
    key: "onScroll",
    value: function onScroll(e) {
      var s = this.getScroll();
      this.state.scrollDiff = s - this.state.scrollTop;
      this.state.scrollTop = s;
    }
  }, {
    key: "getScroll",
    value: function getScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {
      this.state.mouse.x = e.clientX;
      this.state.mouse.y = e.clientY;
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(e) {
      this.state.mouse.down = true;
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(e) {
      this.state.mouse.down = false;
    }
  }, {
    key: "addToRenderLoop",
    value: function addToRenderLoop(callback) {
      this.state.toRender.push(callback);
    }
  }, {
    key: "renderBaseWork",
    value: function renderBaseWork() {
      this.onScroll();
      this.state.delta = Date.now() - this.state.d;
      this.state.t += this.state.delta;
      this.state.d = Date.now();
      this.state.rate = this.state.delta / 16;
      this.state.mouse.xLag += (this.state.mouse.x - this.state.mouse.xLag) / this.state.mouse.lag;
      this.state.mouse.yLag += (this.state.mouse.y - this.state.mouse.yLag) / this.state.mouse.lag;
      this.state.mouse.xSlowLag += (this.state.mouse.x - this.state.mouse.xSlowLag) / this.state.mouse.lag / 2;
      this.state.mouse.ySlowLag += (this.state.mouse.y - this.state.mouse.ySlowLag) / this.state.mouse.lag / 2;
      this.state.scrollLag += (this.state.scrollTop - this.state.scrollLag) / this.state.lag;
    }
  }, {
    key: "renderLoop",
    value: function renderLoop(e) {
      var _this2 = this;

      this.renderBaseWork();
      this.state.toRender.forEach(function (callback) {
        callback(_this2.state.rate);
      });
      requestAnimationFrame(this.boundRender);
    }
  }, {
    key: "addToResizeLoop",
    value: function addToResizeLoop(callback) {
      this.state.toResize.push(callback);
      callback();
    }
  }, {
    key: "resizeBaseWork",
    value: function resizeBaseWork() {
      this.state.rem = window.innerWidth / 100 * (1000 / 1680); // this.state.isTablet = (window.innerWidth <= 1000);
      // if(this.state.isTablet) this.state.rem = window.innerWidth/100 * (1000/834);

      this.state.isMobile = window.innerWidth <= 1000;
      if (this.state.isMobile) this.state.rem = window.innerWidth / 100 * (1000 / 375);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      clearTimeout(this.state.resizeTimeout);
      this.state.resizeTimeout = setTimeout(this.resizeLoop.bind(this), 100);
    }
  }, {
    key: "resizeLoop",
    value: function resizeLoop(e) {
      this.resizeBaseWork();
      this.state.toResize.forEach(function (callback) {
        callback();
      });
    }
  }]);
  return BrowserController;
}();

exports["default"] = BrowserController;

},{"@babel/runtime/helpers/classCallCheck":28,"@babel/runtime/helpers/createClass":29,"@babel/runtime/helpers/interopRequireDefault":32,"vanilla-lazyload":68}],17:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initComponents;

var _componentRegister = _interopRequireDefault(require("./componentRegister"));

function initComponents(site) {
  site.components = {
    site: site,
    debug: site.debug,
    all: [],
    mounted: [],
    attachedToPages: []
  };
  window.components = site.components;
  site.components.getComponent = getComponent.bind(site.components);
  site.components.mount = mount.bind(site.components);
  site.components.unmount = unmount.bind(site.components);
  site.components.attachToPages = attachToPages.bind(site.components);
  site.components.mountPage = mountPage.bind(site.components);
  site.components.unmountPage = unmountPage.bind(site.components);
  (0, _componentRegister["default"])(site);
}

function getComponent(name) {
  return this.all.find(function (c) {
    return c.name == name;
  });
}

function mount(component) {
  this.mounted.push({
    component: component
  });
  component.mount(this.site);
}

function unmount(component) {//loop through and remove
}

function attachToPages(pages, component) {
  var _this = this;

  pages.forEach(function (path) {
    _this.attachedToPages.push({
      component: component,
      path: path
    });
  });
}

function mountPage(path) {
  var _this2 = this;

  this.attachedToPages.forEach(function (attach) {
    if (attach.path == path || attach.path == "all") {
      _this2.mounted.push({
        component: attach.component,
        trigger: {
          path: attach.path
        }
      });

      attach.component.mount(_this2.site);
    }
  });
}

function unmountPage(path) {
  var mount;

  for (var i = this.mounted.length - 1; i >= 0; i--) {
    mount = this.mounted[i];

    if (mount.trigger && (mount.trigger.path == path || mount.trigger.path == "all")) {
      mount.component.unmount(this.site);
      this.mounted.splice(i, 1);
    }
  }
}

},{"./componentRegister":18,"@babel/runtime/helpers/interopRequireDefault":32}],18:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerComponents;

var _menu = _interopRequireDefault(require("../components/menu"));

var _popup = _interopRequireDefault(require("../components/popup"));

var _scrollTrigger = _interopRequireDefault(require("../components/scroll-trigger"));

var _anima = _interopRequireDefault(require("../components/anima"));

var _imageSlider = _interopRequireDefault(require("../components/image-slider"));

var _portfolioGrid = _interopRequireDefault(require("../components/portfolio-grid"));

var _artistList = _interopRequireDefault(require("../components/artist-list"));

var _artistHeader = _interopRequireDefault(require("../components/artist-header"));

var _artistSlider = _interopRequireDefault(require("../components/artist-slider"));

var _htmlClass = _interopRequireDefault(require("../components/html-class"));

var _transitions = _interopRequireDefault(require("../components/transitions"));

var _scrollpal = _interopRequireDefault(require("../components/scrollpal"));

var _cursors = _interopRequireDefault(require("../components/cursors"));

var _subscribe = _interopRequireDefault(require("../components/subscribe.js"));

function registerComponents(site) {
  site.components.all.push(new _menu["default"](site)); // site.components.all.push(new Popup(site));

  site.components.all.push(new _scrollTrigger["default"](site));
  site.components.all.push(new _anima["default"](site));
  site.components.all.push(new _imageSlider["default"](site));
  site.components.all.push(new _artistSlider["default"](site));
  site.components.all.push(new _portfolioGrid["default"](site));
  site.components.all.push(new _artistList["default"](site));
  site.components.all.push(new _artistHeader["default"](site));
  site.components.all.push(new _htmlClass["default"](site));
  site.components.all.push(new _transitions["default"](site));
  site.components.all.push(new _scrollpal["default"](site));
  site.components.all.push(new _cursors["default"](site));
  site.components.all.push(new _subscribe["default"](site));
}

},{"../components/anima":1,"../components/artist-header":2,"../components/artist-list":3,"../components/artist-slider":4,"../components/cursors":6,"../components/html-class":7,"../components/image-slider":8,"../components/menu":9,"../components/popup":10,"../components/portfolio-grid":11,"../components/scroll-trigger":12,"../components/scrollpal":13,"../components/subscribe.js":14,"../components/transitions":15,"@babel/runtime/helpers/interopRequireDefault":32}],19:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initNavigation;

var _swupPage = _interopRequireDefault(require("../utility/swup-page"));

function initNavigation(site) {
  site.navigation = {
    site: site,
    debug: site.debug,
    callbacks: [],
    exitCallbacks: []
  };
  site.navigation.enter = enter.bind(site.navigation);
  site.navigation.exit = exit.bind(site.navigation);
  site.navigation.runExitCallbacks = runExitCallbacks.bind(site.navigation);
  site.navigation.runCallbacks = runCallbacks.bind(site.navigation);
  site.navigation.showPreloader = showPreloader.bind(site.navigation);
  site.navigation.navigateTo = navigateTo.bind(site.navigation);
  site.navigation.registerNavigationCallback = registerNavigationCallback.bind(site.navigation);
  site.navigation.registerExitCallback = registerExitCallback.bind(site.navigation);
  if (!site.edit) site.navigation.swup = (0, _swupPage["default"])(site.navigation);
}

function exit() {
  //window.scrollTo(0, 0);
  // this.site.browser.lazy.destroy();
  this.site.components.unmountPage(this.path);
  this.runExitCallbacks();
}

function runExitCallbacks() {
  this.exitCallbacks.forEach(function (callback, i) {
    if (callback) callback();
  });
}

function runCallbacks() {
  this.callbacks.forEach(function (callback, i) {
    if (callback) callback();
  });

  if (this.callback) {
    this.callback();
    this.callback = null;
  }
}

function enter(runCallbacks) {
  window.scrollTo(0, 0);
  if (runCallbacks) this.runCallbacks();
  this.site.browser.state.scrollTop = 0;
  this.site.browser.state.scrollLag = 0;
  this.path = parseLocation(); //console.log("enter", this.path);
  //this.site.browser.lazy.update();
  // this.site.browser.initLazy();
  // setTimeout(() => this.site.browser.lazy.loadAll(), 1000);

  this.site.components.mountPage(this.path);
}

function parseLocation(path) {
  if (!path) path = window.location.pathname;
  if (path == "/") return "home"; // if (path == "/portfolio") return "portfolio";
  // if (/portfolio/.test(path) && path != "/portfolio") return "case-study";
  // TODO: Portfolio, artist, project, image

  return "default";
}

function navigateTo(url) {
  var transition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  if (callback) this.callback = callback;
  this.swup.loadPage({
    url: url,
    method: 'GET',
    customTransition: transition
  });
}

function registerExitCallback(callback) {
  this.exitCallbacks.push(callback);
}

function registerNavigationCallback(callback) {
  this.callbacks.push(callback);
}

function showPreloader(site) {
  site.navigation.enter(false); // let preload = document.getElementById("preload");
  // let message = document.getElementById("preload-message");
  // setTimeout(()=> {
  //   message.classList.add("out");
  // }, 1200);

  setTimeout(function () {
    document.documentElement.classList.remove("is-animating");
    site.navigation.runCallbacks();
    setTimeout(function () {
      document.documentElement.classList.remove("is-starting");
    }, 500);
  }, 1000); // setTimeout(() => {
  //   preload.remove();
  // }, 10000);
}

},{"../utility/swup-page":26,"@babel/runtime/helpers/interopRequireDefault":32}],20:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initSite;

var _browserController = _interopRequireDefault(require("./browserController"));

var _navigationController = _interopRequireDefault(require("./navigationController"));

var _componentController = _interopRequireDefault(require("./componentController"));

function initSite() {
  var site = {
    debug: true,
    edit: window.location !== window.parent.location
  };
  site.browser = new _browserController["default"](site);
  (0, _navigationController["default"])(site);
  (0, _componentController["default"])(site);
  site.navigation.showPreloader(site);
}

},{"./browserController":16,"./componentController":17,"./navigationController":19,"@babel/runtime/helpers/interopRequireDefault":32}],21:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _siteController = _interopRequireDefault(require("./core/siteController"));

window.addEventListener('DOMContentLoaded', _siteController["default"]);

},{"./core/siteController":20,"@babel/runtime/helpers/interopRequireDefault":32}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = init2dCanvas;

function init2dCanvas(canvas, browser) {
  var bounds = canvas.getBoundingClientRect();
  var data = {
    canvas: canvas,
    ctx: canvas.getContext('2d'),
    browser: browser,
    // left: bounds.left,
    // top: bounds.top + browser.state.scrollTop,
    // width: bounds.width,
    // height: bounds.height,
    mouse: {
      x: 0,
      y: 0
    }
  };
  data.resize = sizeCanvas.bind(data);
  data.resize();
  browser.addToResizeLoop(data.resize);
  data.updateMouse = updateMouse.bind(data);
  return data;
}

function sizeCanvas() {
  this.cw = this.canvas.offsetWidth * this.browser.state.dpi;
  this.ch = this.canvas.offsetHeight * this.browser.state.dpi;
  this.canvas.width = this.cw;
  this.canvas.height = this.ch;
}

function updateMouse() {
  var bounds = this.canvas.getBoundingClientRect();
  var rate = this.browser.state.rate;
  var top = this.browser.state.mouse.yLag - bounds.top;
  var left = this.browser.state.mouse.xLag - bounds.left;
  this.mouse.x = left * this.browser.state.dpi;
  this.mouse.y = top * this.browser.state.dpi;
}

},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addConfirmListeners = addConfirmListeners;

function addConfirmListeners(el, callback, newFocus) {
  if (!el) return;
  el.addEventListener("click", callback);
  el.addEventListener("keydown", function (e) {
    if (e.keyCode == 13 || e.keyCode == 32) {
      callback();

      if (newFocus) {
        e.preventDefault();
        newFocus.focus();
      }
    }
  });
}

},{}],24:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAjax = getAjax;
exports.postAjax = postAjax;
exports.serializeArray = serializeArray;
exports.serializeObject = serializeObject;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function getAjax(url, success, error) {
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  xhr.open('GET', url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState > 3 && xhr.status == 200) success(xhr.responseText);
  };

  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.send();
  return xhr;
}

function postAjax(url, data, success, error) {
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open('POST', url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState > 3 && xhr.status == 200) {
      success(JSON.parse(xhr.responseText));
    }
  };

  var params = JSON.stringify(data);
  xhr.send(params);
  return xhr;
}

function serializeArray(form) {
  var field, l;
  var s = {};

  if ((0, _typeof2["default"])(form) == 'object' && form.nodeName == "FORM") {
    var len = form.elements.length;

    for (var i = 0; i < len; i++) {
      field = form.elements[i];

      if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
        if (field.type == 'select-multiple') {
          l = form.elements[i].options.length;

          for (j = 0; j < l; j++) {
            if (field.options[j].selected) s[field.name] = field.options[j].value;
          }
        } else if (field.type != 'checkbox' && field.type != 'radio' || field.checked) {
          s[field.name] = field.value;
        }
      }
    }
  }

  return s;
}

function serializeObject(form) {
  var field,
      l,
      s = [];

  if ((0, _typeof2["default"])(form) == 'object' && form.nodeName == "FORM") {
    var len = form.elements.length;

    for (var i = 0; i < len; i++) {
      field = form.elements[i];

      if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
        if (field.type == 'select-multiple') {
          l = form.elements[i].options.length;

          for (j = 0; j < l; j++) {
            if (field.options[j].selected) s[s.length] = {
              name: field.name,
              value: field.options[j].value
            };
          }
        } else if (field.type != 'checkbox' && field.type != 'radio' || field.checked) {
          s[s.length] = {
            name: field.name,
            value: field.value
          };
        }
      }
    }
  }

  var indexed_array = {};
  s.forEach(function (n) {
    indexed_array[n['name']] = n['value'];
  });
  return indexed_array;
}

},{"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/typeof":35}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createDragUtil;

function createDragUtil() {
  var dragUtil = {
    state: {
      draggableElements: []
    },
    init: function init(browserController) {
      browserController.addToRenderLoop(dragUtil.render);
      window.addEventListener("mouseout", function (e) {
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;

        if (!from || from.nodeName == "HTML") {
          dragUtil.endAllDrags();
        }
      });
    },
    registerDraggableElement: function registerDraggableElement(el, callback, options) {
      var de = {
        el: el,
        callback: callback,
        dragging: false,
        startPos: {
          x: 0,
          y: 0
        },
        currentPos: {
          x: 0,
          y: 0
        },
        diff: {
          x: 0,
          y: 0
        },
        thisDiff: {
          x: 0,
          y: 0
        },
        endDrag: function endDrag() {
          this.dragging = false;
        },
        getDist: function getDist() {
          return Math.sqrt(Math.pow(this.diff.x, 2) + Math.pow(this.diff.y, 2));
        },
        clearable: !(options && !options.clearable)
      };
      el.addEventListener("mousedown", dragUtil.onDragStart.bind(dragUtil, de));
      el.addEventListener("mousemove", dragUtil.onDragMove.bind(dragUtil, de));
      el.addEventListener("mouseup", dragUtil.onDragEnd.bind(dragUtil, de));
      el.addEventListener("mouseout", dragUtil.onDragEnd.bind(dragUtil, de));
      el.addEventListener("touchstart", dragUtil.onDragStart.bind(dragUtil, de));
      el.addEventListener("touchmove", dragUtil.onDragMove.bind(dragUtil, de));
      el.addEventListener("touchend", dragUtil.onDragEnd.bind(dragUtil, de));
      dragUtil.state.draggableElements.push(de);
    },
    normalizeEvent: function normalizeEvent(e) {
      if (e.touches && e.touches.length > 0) {
        e.clientX = e.touches[0].clientX;
        e.clientY = e.touches[0].clientY;
      } else if (!!!e.clientX) {
        return null;
      }

      return e;
    },
    onDragStart: function onDragStart(de, e) {
      de.dragging = true;
      e = dragUtil.normalizeEvent(e);

      if (e) {
        de.startPos.x = de.currentPos.x = e.clientX;
        de.startPos.y = de.currentPos.y = e.clientY;
        de.diff.x = 0;
        de.diff.y = 0;
        de.thisDiff.x = 0;
        de.thisDiff.y = 0;
      }
    },
    onDragMove: function onDragMove(de, e) {
      if (de.dragging) {
        e = dragUtil.normalizeEvent(e);

        if (e) {
          de.currentPos.x = e.clientX;
          de.currentPos.y = e.clientY;
          var dx = de.currentPos.x - de.startPos.x;
          var dy = de.currentPos.y - de.startPos.y;
          de.thisDiff.x = dx - de.diff.x;
          de.thisDiff.y = dy - de.diff.y;
          de.diff.x = dx;
          de.diff.y = dy;
        }

        de.callback(de);
      }
    },
    onDragEnd: function onDragEnd(de, e) {
      if (de.dragging) {
        de.endDrag();
        de.callback(de);
      }
    },
    endAllDrags: function endAllDrags() {
      dragUtil.state.draggableElements.forEach(function (de) {
        dragUtil.onDragEnd(de);
      });
    },
    clearDraggableElements: function clearDraggableElements() {
      dragUtil.state.draggableElements = dragUtil.state.draggableElements.filter(function (de) {
        return !de.clearable;
      });
    },
    render: function render() {
      dragUtil.state.draggableElements.forEach(function (de) {
        if (de.dragging) de.callback(de);
      });
    }
  };
  return dragUtil;
}

},{}],26:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initSwup;

var _swup = _interopRequireDefault(require("swup"));

var _preloadPlugin = _interopRequireDefault(require("@swup/preload-plugin"));

var _scriptsPlugin = _interopRequireDefault(require("@swup/scripts-plugin"));

var _scrollPlugin = _interopRequireDefault(require("@swup/scroll-plugin"));

var _gaPlugin = _interopRequireDefault(require("@swup/ga-plugin"));

function initSwup(navigation) {
  var swup = null;
  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  var isEdge = /Edge/.test(navigator.userAgent);

  if (!isIE11 && !isEdge) {
    swup = new _swup["default"]({
      linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]):not([data-popup-url]), a[href^="/"]:not([data-no-swup]):not([data-popup-url]), a[href^="#"]:not([data-no-swup]):not([data-popup-url])',
      containers: ['#main'],
      plugins: [// new SwupPreloadPlugin(),
      new _scriptsPlugin["default"]({
        optin: true
      }), new _gaPlugin["default"](), new _scrollPlugin["default"]({
        doScrollingRightAway: false,
        animateScroll: true,
        scrollFriction: 0.1,
        scrollAcceleration: 0.1
      })]
    });
    document.addEventListener('swup:willReplaceContent', navigation.exit.bind(navigation));
    document.addEventListener('swup:contentReplaced', navigation.enter.bind(navigation));
  } else {
    document.querySelectorAll("a").forEach(function (el) {
      var href = el.getAttribute("href");

      if (href && href != "#" && href != "" && !/mailto/.test(href) && !/tel/.test(href) && el.getAttribute("target") != "_blank") {
        el.addEventListener("click", function () {
          document.documentElement.classList.add("is-animating");
        });
      }
    });
  }

  return swup;
}

},{"@babel/runtime/helpers/interopRequireDefault":32,"@swup/ga-plugin":36,"@swup/preload-plugin":38,"@swup/scripts-plugin":39,"@swup/scroll-plugin":40,"swup":54}],27:[function(require,module,exports){
"use strict";

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

},{}],28:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

},{}],29:[function(require,module,exports){
"use strict";

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

},{}],30:[function(require,module,exports){
"use strict";

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

},{}],31:[function(require,module,exports){
"use strict";

var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

},{"./setPrototypeOf":34}],32:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

},{}],33:[function(require,module,exports){
"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

},{"./assertThisInitialized":27,"@babel/runtime/helpers/typeof":35}],34:[function(require,module,exports){
"use strict";

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

},{}],35:[function(require,module,exports){
"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

},{}],36:[function(require,module,exports){
'use strict';

var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault2(require("@babel/runtime/helpers/typeof"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _plugin = require('@swup/plugin');

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((0, _typeof2["default"])(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (0, _typeof2["default"])(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var GaPlugin = function (_Plugin) {
  _inherits(GaPlugin, _Plugin);

  function GaPlugin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GaPlugin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GaPlugin.__proto__ || Object.getPrototypeOf(GaPlugin)).call.apply(_ref, [this].concat(args))), _this), _this.name = "GaPlugin", _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GaPlugin, [{
    key: 'mount',
    value: function mount() {
      var _this2 = this;

      this.swup.on('contentReplaced', function (event) {
        if (typeof window.ga === 'function') {
          var title = document.title;
          var url = window.location.pathname + window.location.search;
          window.ga('set', 'title', title);
          window.ga('set', 'page', url);
          window.ga('send', 'pageview');

          _this2.swup.log('GA pageview (url \'' + url + '\').');
        } else {
          console.warn('GA is not loaded.');
        }
      });
    }
  }]);

  return GaPlugin;
}(_plugin2["default"]);

exports["default"] = GaPlugin;

},{"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/typeof":35,"@swup/plugin":37}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Plugin = function () {
  function Plugin() {
    _classCallCheck(this, Plugin);

    this.isSwupPlugin = true;
  }

  _createClass(Plugin, [{
    key: "mount",
    value: function mount() {// this is mount method rewritten by class extending
      // and is executed when swup is enabled with plugin
    }
  }, {
    key: "unmount",
    value: function unmount() {// this is unmount method rewritten by class extending
      // and is executed when swup with plugin is disabled
    }
  }, {
    key: "_beforeMount",
    value: function _beforeMount() {// here for any future hidden auto init
    }
  }, {
    key: "_afterUnmount",
    value: function _afterUnmount() {} // here for any future hidden auto-cleanup
    // this is here so we can tell if plugin was created by extending this class

  }]);

  return Plugin;
}();

exports["default"] = Plugin;

},{}],38:[function(require,module,exports){
'use strict';

var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault2(require("@babel/runtime/helpers/typeof"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _plugin = require('@swup/plugin');

var _plugin2 = _interopRequireDefault(_plugin);

var _delegate = require('delegate');

var _delegate2 = _interopRequireDefault(_delegate);

var _utils = require('swup/lib/utils');

var _helpers = require('swup/lib/helpers');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((0, _typeof2["default"])(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (0, _typeof2["default"])(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var PreloadPlugin = function (_Plugin) {
  _inherits(PreloadPlugin, _Plugin);

  function PreloadPlugin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PreloadPlugin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PreloadPlugin.__proto__ || Object.getPrototypeOf(PreloadPlugin)).call.apply(_ref, [this].concat(args))), _this), _this.name = "PreloadPlugin", _this.onContentReplaced = function () {
      _this.swup.preloadPages();
    }, _this.onMouseover = function (event) {
      var swup = _this.swup;
      swup.triggerEvent('hoverLink', event);
      var link = new _helpers.Link(event.delegateTarget);

      if (link.getAddress() !== (0, _helpers.getCurrentUrl)() && !swup.cache.exists(link.getAddress()) && swup.preloadPromise == null) {
        swup.preloadPromise = swup.preloadPage(link.getAddress());
        swup.preloadPromise.route = link.getAddress();
        swup.preloadPromise["finally"](function () {
          swup.preloadPromise = null;
        });
      }
    }, _this.preloadPage = function (pathname) {
      var swup = _this.swup;
      var link = new _helpers.Link(pathname);
      return new Promise(function (resolve, reject) {
        if (link.getAddress() != (0, _helpers.getCurrentUrl)() && !swup.cache.exists(link.getAddress())) {
          (0, _helpers.fetch)({
            url: link.getAddress(),
            headers: swup.options.requestHeaders
          }, function (response) {
            if (response.status === 500) {
              swup.triggerEvent('serverError');
              reject();
            } else {
              // get json data
              var page = swup.getPageData(response);

              if (page != null) {
                page.url = link.getAddress();
                swup.cache.cacheUrl(page, swup.options.debugMode);
                swup.triggerEvent('pagePreloaded');
              } else {
                reject(link.getAddress());
                return;
              }

              resolve(swup.cache.getPage(link.getAddress()));
            }
          });
        } else {
          resolve(swup.cache.getPage(link.getAddress()));
        }
      });
    }, _this.preloadPages = function () {
      (0, _utils.queryAll)('[data-swup-preload]').forEach(function (element) {
        _this.swup.preloadPage(element.href);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PreloadPlugin, [{
    key: 'mount',
    value: function mount() {
      var swup = this.swup;
      swup._handlers.pagePreloaded = [];
      swup._handlers.hoverLink = [];
      swup.preloadPage = this.preloadPage;
      swup.preloadPages = this.preloadPages; // register mouseover handler

      swup.delegatedListeners.mouseover = (0, _delegate2["default"])(document.body, swup.options.linkSelector, 'mouseover', this.onMouseover.bind(this)); // initial preload of page form links with [data-swup-preload]

      swup.preloadPages(); // do the same on every content replace

      swup.on('contentReplaced', this.onContentReplaced);
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      var swup = this.swup;
      swup._handlers.pagePreloaded = null;
      swup._handlers.hoverLink = null;
      swup.preloadPage = null;
      swup.preloadPages = null;
      swup.delegatedListeners.mouseover.destroy();
      swup.off('contentReplaced', this.onContentReplaced);
    }
  }]);

  return PreloadPlugin;
}(_plugin2["default"]);

exports["default"] = PreloadPlugin;

},{"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/typeof":35,"@swup/plugin":37,"delegate":42,"swup/lib/helpers":51,"swup/lib/utils":65}],39:[function(require,module,exports){
'use strict';

var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault2(require("@babel/runtime/helpers/typeof"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _plugin = require('@swup/plugin');

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((0, _typeof2["default"])(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (0, _typeof2["default"])(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var arrayify = function arrayify(list) {
  return Array.prototype.slice.call(list);
};

var ScriptsPlugin = function (_Plugin) {
  _inherits(ScriptsPlugin, _Plugin);

  function ScriptsPlugin(options) {
    _classCallCheck(this, ScriptsPlugin);

    var _this = _possibleConstructorReturn(this, (ScriptsPlugin.__proto__ || Object.getPrototypeOf(ScriptsPlugin)).call(this));

    _this.name = 'ScriptsPlugin';

    _this.runScripts = function () {
      var scope = _this.options.head && _this.options.body ? document : _this.options.head ? document.head : document.body;
      var selector = _this.options.optin ? 'script[data-swup-reload-script]' : 'script:not([data-swup-ignore-script])';
      var scripts = arrayify(scope.querySelectorAll(selector));
      scripts.forEach(function (script) {
        return _this.runScript(script);
      });

      _this.swup.log('Executed ' + scripts.length + ' scripts.');
    };

    _this.runScript = function (originalElement) {
      var element = document.createElement('script');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = arrayify(originalElement.attributes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref2 = _step.value;
          var name = _ref2.name,
              value = _ref2.value;
          element.setAttribute(name, value);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      element.textContent = originalElement.textContent;
      element.setAttribute('async', 'false');
      originalElement.replaceWith(element);
      return element;
    };

    var defaultOptions = {
      head: true,
      body: true,
      optin: false
    };
    _this.options = _extends({}, defaultOptions, options);
    return _this;
  }

  _createClass(ScriptsPlugin, [{
    key: 'mount',
    value: function mount() {
      this.swup.on('contentReplaced', this.runScripts);
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.swup.off('contentReplaced', this.runScripts);
    }
  }]);

  return ScriptsPlugin;
}(_plugin2["default"]);

exports["default"] = ScriptsPlugin;

},{"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/typeof":35,"@swup/plugin":37}],40:[function(require,module,exports){
'use strict';

var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault2(require("@babel/runtime/helpers/typeof"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _plugin = require('@swup/plugin');

var _plugin2 = _interopRequireDefault(_plugin);

var _scrl = require('scrl');

var _scrl2 = _interopRequireDefault(_scrl);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((0, _typeof2["default"])(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (0, _typeof2["default"])(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ScrollPlugin = function (_Plugin) {
  _inherits(ScrollPlugin, _Plugin);

  function ScrollPlugin(options) {
    _classCallCheck(this, ScrollPlugin);

    var _this = _possibleConstructorReturn(this, (ScrollPlugin.__proto__ || Object.getPrototypeOf(ScrollPlugin)).call(this));

    _this.name = "ScrollPlugin";

    _this.onSamePage = function () {
      _this.swup.scrollTo(0);
    };

    _this.onSamePageWithHash = function (event) {
      var link = event.delegateTarget;
      var element = document.querySelector(link.hash);
      var top = element.getBoundingClientRect().top + window.pageYOffset;

      _this.swup.scrollTo(top);
    };

    _this.onTransitionStart = function (popstate) {
      if (_this.options.doScrollingRightAway && !_this.swup.scrollToElement) {
        _this.doScrolling(popstate);
      }
    };

    _this.onContentReplaced = function (popstate) {
      if (!_this.options.doScrollingRightAway || _this.swup.scrollToElement) {
        _this.doScrolling(popstate);
      }
    };

    _this.doScrolling = function (popstate) {
      var swup = _this.swup;

      if (!popstate || swup.options.animateHistoryBrowsing) {
        if (swup.scrollToElement != null) {
          var element = document.querySelector(swup.scrollToElement);

          if (element != null) {
            var top = element.getBoundingClientRect().top + window.pageYOffset;
            swup.scrollTo(top);
          } else {
            console.warn('Element ' + swup.scrollToElement + ' not found');
          }

          swup.scrollToElement = null;
        } else {
          swup.scrollTo(0);
        }
      }
    };

    var defaultOptions = {
      doScrollingRightAway: false,
      animateScroll: true,
      scrollFriction: 0.3,
      scrollAcceleration: 0.04
    };
    _this.options = _extends({}, defaultOptions, options);
    return _this;
  }

  _createClass(ScrollPlugin, [{
    key: 'mount',
    value: function mount() {
      var _this2 = this;

      var swup = this.swup; // add empty handlers array for submitForm event

      swup._handlers.scrollDone = [];
      swup._handlers.scrollStart = [];
      this.scrl = new _scrl2["default"]({
        onStart: function onStart() {
          return swup.triggerEvent('scrollStart');
        },
        onEnd: function onEnd() {
          return swup.triggerEvent('scrollDone');
        },
        onCancel: function onCancel() {
          return swup.triggerEvent('scrollDone');
        },
        friction: this.options.scrollFriction,
        acceleration: this.options.scrollAcceleration
      }); // set scrollTo method of swup and animate based on current animateScroll option

      swup.scrollTo = function (offset) {
        if (_this2.options.animateScroll) {
          _this2.scrl.scrollTo(offset);
        } else {
          swup.triggerEvent('scrollStart');
          window.scrollTo(0, offset);
          swup.triggerEvent('scrollDone');
        }
      }; // disable browser scroll control on popstates when
      // animateHistoryBrowsing option is enabled in swup


      if (swup.options.animateHistoryBrowsing) {
        window.history.scrollRestoration = 'manual';
      } // scroll to the top of the page


      swup.on('samePage', this.onSamePage); // scroll to referenced element on the same page

      swup.on('samePageWithHash', this.onSamePageWithHash); // scroll to the referenced element

      swup.on('transitionStart', this.onTransitionStart); // scroll to the referenced element when it's in the page (after render)

      swup.on('contentReplaced', this.onContentReplaced);
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.swup.scrollTo = null;
      delete this.scrl;
      this.scrl = null;
      this.swup.off('samePage', this.onSamePage);
      this.swup.off('samePageWithHash', this.onSamePageWithHash);
      this.swup.off('transitionStart', this.onTransitionStart);
      this.swup.off('contentReplaced', this.onContentReplaced);
      this.swup._handlers.scrollDone = null;
      this.swup._handlers.scrollStart = null;
      window.history.scrollRestoration = 'auto';
    }
  }]);

  return ScrollPlugin;
}(_plugin2["default"]);

exports["default"] = ScrollPlugin;

},{"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/typeof":35,"@swup/plugin":37,"scrl":44}],41:[function(require,module,exports){
"use strict";

var DOCUMENT_NODE_TYPE = 9;
/**
 * A polyfill for Element.matches()
 */

if (typeof Element !== 'undefined' && !Element.prototype.matches) {
  var proto = Element.prototype;
  proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
}
/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */


function closest(element, selector) {
  while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
    if (typeof element.matches === 'function' && element.matches(selector)) {
      return element;
    }

    element = element.parentNode;
  }
}

module.exports = closest;

},{}],42:[function(require,module,exports){
"use strict";

var closest = require('./closest');
/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */


function _delegate(element, selector, type, callback, useCapture) {
  var listenerFn = listener.apply(this, arguments);
  element.addEventListener(type, listenerFn, useCapture);
  return {
    destroy: function destroy() {
      element.removeEventListener(type, listenerFn, useCapture);
    }
  };
}
/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */


function delegate(elements, selector, type, callback, useCapture) {
  // Handle the regular Element usage
  if (typeof elements.addEventListener === 'function') {
    return _delegate.apply(null, arguments);
  } // Handle Element-less usage, it defaults to global delegation


  if (typeof type === 'function') {
    // Use `document` as the first parameter, then apply arguments
    // This is a short way to .unshift `arguments` without running into deoptimizations
    return _delegate.bind(null, document).apply(null, arguments);
  } // Handle Selector-based usage


  if (typeof elements === 'string') {
    elements = document.querySelectorAll(elements);
  } // Handle Array-like based usage


  return Array.prototype.map.call(elements, function (element) {
    return _delegate(element, selector, type, callback, useCapture);
  });
}
/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */


function listener(element, selector, type, callback) {
  return function (e) {
    e.delegateTarget = closest(e.target, selector);

    if (e.delegateTarget) {
      callback.call(element, e);
    }
  };
}

module.exports = delegate;

},{"./closest":41}],43:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/*!
 * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
 * License: MIT
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) && "object" == (typeof module === "undefined" ? "undefined" : (0, _typeof2["default"])(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) ? exports.inView = e() : t.inView = e();
}(void 0, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        exports: {},
        id: r,
        loaded: !1
      };
      return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0);
  }([function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    var i = n(2),
        o = r(i);
    t.exports = o["default"];
  }, function (t, e) {
    function n(t) {
      var e = (0, _typeof2["default"])(t);
      return null != t && ("object" == e || "function" == e);
    }

    t.exports = n;
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var i = n(9),
        o = r(i),
        u = n(3),
        f = r(u),
        s = n(4),
        c = function c() {
      if ("undefined" != typeof window) {
        var t = 100,
            e = ["scroll", "resize", "load"],
            n = {
          history: []
        },
            r = {
          offset: {},
          threshold: 0,
          test: s.inViewport
        },
            i = (0, o["default"])(function () {
          n.history.forEach(function (t) {
            n[t].check();
          });
        }, t);
        e.forEach(function (t) {
          return addEventListener(t, i);
        }), window.MutationObserver && addEventListener("DOMContentLoaded", function () {
          new MutationObserver(i).observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0
          });
        });

        var u = function u(t) {
          if ("string" == typeof t) {
            var e = [].slice.call(document.querySelectorAll(t));
            return n.history.indexOf(t) > -1 ? n[t].elements = e : (n[t] = (0, f["default"])(e, r), n.history.push(t)), n[t];
          }
        };

        return u.offset = function (t) {
          if (void 0 === t) return r.offset;

          var e = function e(t) {
            return "number" == typeof t;
          };

          return ["top", "right", "bottom", "left"].forEach(e(t) ? function (e) {
            return r.offset[e] = t;
          } : function (n) {
            return e(t[n]) ? r.offset[n] = t[n] : null;
          }), r.offset;
        }, u.threshold = function (t) {
          return "number" == typeof t && t >= 0 && t <= 1 ? r.threshold = t : r.threshold;
        }, u.test = function (t) {
          return "function" == typeof t ? r.test = t : r.test;
        }, u.is = function (t) {
          return r.test(t, r);
        }, u.offset(0), u;
      }
    };

    e["default"] = c();
  }, function (t, e) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        i = function () {
      function t(e, r) {
        n(this, t), this.options = r, this.elements = e, this.current = [], this.handlers = {
          enter: [],
          exit: []
        }, this.singles = {
          enter: [],
          exit: []
        };
      }

      return r(t, [{
        key: "check",
        value: function value() {
          var t = this;
          return this.elements.forEach(function (e) {
            var n = t.options.test(e, t.options),
                r = t.current.indexOf(e),
                i = r > -1,
                o = n && !i,
                u = !n && i;
            o && (t.current.push(e), t.emit("enter", e)), u && (t.current.splice(r, 1), t.emit("exit", e));
          }), this;
        }
      }, {
        key: "on",
        value: function value(t, e) {
          return this.handlers[t].push(e), this;
        }
      }, {
        key: "once",
        value: function value(t, e) {
          return this.singles[t].unshift(e), this;
        }
      }, {
        key: "emit",
        value: function value(t, e) {
          for (; this.singles[t].length;) {
            this.singles[t].pop()(e);
          }

          for (var n = this.handlers[t].length; --n > -1;) {
            this.handlers[t][n](e);
          }

          return this;
        }
      }]), t;
    }();

    e["default"] = function (t, e) {
      return new i(t, e);
    };
  }, function (t, e) {
    "use strict";

    function n(t, e) {
      var n = t.getBoundingClientRect(),
          r = n.top,
          i = n.right,
          o = n.bottom,
          u = n.left,
          f = n.width,
          s = n.height,
          c = {
        t: o,
        r: window.innerWidth - u,
        b: window.innerHeight - r,
        l: i
      },
          a = {
        x: e.threshold * f,
        y: e.threshold * s
      };
      return c.t > e.offset.top + a.y && c.r > e.offset.right + a.x && c.b > e.offset.bottom + a.y && c.l > e.offset.left + a.x;
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.inViewport = n;
  }, function (t, e) {
    (function (e) {
      var n = "object" == (0, _typeof2["default"])(e) && e && e.Object === Object && e;
      t.exports = n;
    }).call(e, function () {
      return this;
    }());
  }, function (t, e, n) {
    var r = n(5),
        i = "object" == (typeof self === "undefined" ? "undefined" : (0, _typeof2["default"])(self)) && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o;
  }, function (t, e, n) {
    function r(t, e, n) {
      function r(e) {
        var n = x,
            r = m;
        return x = m = void 0, E = e, w = t.apply(r, n);
      }

      function a(t) {
        return E = t, j = setTimeout(h, e), M ? r(t) : w;
      }

      function l(t) {
        var n = t - O,
            r = t - E,
            i = e - n;
        return _ ? c(i, g - r) : i;
      }

      function d(t) {
        var n = t - O,
            r = t - E;
        return void 0 === O || n >= e || n < 0 || _ && r >= g;
      }

      function h() {
        var t = o();
        return d(t) ? p(t) : void (j = setTimeout(h, l(t)));
      }

      function p(t) {
        return j = void 0, T && x ? r(t) : (x = m = void 0, w);
      }

      function v() {
        void 0 !== j && clearTimeout(j), E = 0, x = O = m = j = void 0;
      }

      function y() {
        return void 0 === j ? w : p(o());
      }

      function b() {
        var t = o(),
            n = d(t);

        if (x = arguments, m = this, O = t, n) {
          if (void 0 === j) return a(O);
          if (_) return j = setTimeout(h, e), r(O);
        }

        return void 0 === j && (j = setTimeout(h, e)), w;
      }

      var x,
          m,
          g,
          w,
          j,
          O,
          E = 0,
          M = !1,
          _ = !1,
          T = !0;

      if ("function" != typeof t) throw new TypeError(f);
      return e = u(e) || 0, i(n) && (M = !!n.leading, _ = "maxWait" in n, g = _ ? s(u(n.maxWait) || 0, e) : g, T = "trailing" in n ? !!n.trailing : T), b.cancel = v, b.flush = y, b;
    }

    var i = n(1),
        o = n(8),
        u = n(10),
        f = "Expected a function",
        s = Math.max,
        c = Math.min;
    t.exports = r;
  }, function (t, e, n) {
    var r = n(6),
        i = function i() {
      return r.Date.now();
    };

    t.exports = i;
  }, function (t, e, n) {
    function r(t, e, n) {
      var r = !0,
          f = !0;
      if ("function" != typeof t) throw new TypeError(u);
      return o(n) && (r = "leading" in n ? !!n.leading : r, f = "trailing" in n ? !!n.trailing : f), i(t, e, {
        leading: r,
        maxWait: e,
        trailing: f
      });
    }

    var i = n(7),
        o = n(1),
        u = "Expected a function";
    t.exports = r;
  }, function (t, e) {
    function n(t) {
      return t;
    }

    t.exports = n;
  }]);
});

},{"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/typeof":35}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Scrl = function Scrl(options) {
  var _this = this;

  _classCallCheck(this, Scrl);

  this._raf = null;
  this._positionY = 0;
  this._velocityY = 0;
  this._targetPositionY = 0;
  this._targetPositionYWithOffset = 0;
  this._direction = 0;

  this.scrollTo = function (offset) {
    if (offset && offset.nodeType) {
      // the offset is element
      _this._targetPositionY = Math.round(offset.getBoundingClientRect().top + window.pageYOffset);
    } else if (parseInt(_this._targetPositionY) === _this._targetPositionY) {
      // the offset is a number
      _this._targetPositionY = Math.round(offset);
    } else {
      console.error('Argument must be a number or an element.');
      return;
    } // don't animate beyond the document height


    if (_this._targetPositionY > document.documentElement.scrollHeight - window.innerHeight) {
      _this._targetPositionY = document.documentElement.scrollHeight - window.innerHeight;
    } // calculated required values


    _this._positionY = document.body.scrollTop || document.documentElement.scrollTop;
    _this._direction = _this._positionY > _this._targetPositionY ? -1 : 1;
    _this._targetPositionYWithOffset = _this._targetPositionY + _this._direction;
    _this._velocityY = 0;

    if (_this._positionY !== _this._targetPositionY) {
      // start animation
      _this.options.onStart();

      _this._animate();
    } else {
      // page is already at the position
      _this.options.onAlreadyAtPositions();
    }
  };

  this._animate = function () {
    var distance = _this._update();

    _this._render();

    if (_this._direction === 1 && _this._targetPositionY > _this._positionY || _this._direction === -1 && _this._targetPositionY < _this._positionY) {
      // calculate next position
      _this._raf = requestAnimationFrame(_this._animate);

      _this.options.onTick();
    } else {
      // finish and set position to the final position
      _this._positionY = _this._targetPositionY;

      _this._render();

      _this._raf = null;

      _this.options.onTick();

      _this.options.onEnd(); // this.triggerEvent('scrollDone')

    }
  };

  this._update = function () {
    var distance = _this._targetPositionYWithOffset - _this._positionY;
    var attraction = distance * _this.options.acceleration;
    _this._velocityY += attraction;
    _this._velocityY *= _this.options.friction;
    _this._positionY += _this._velocityY;
    return Math.abs(distance);
  };

  this._render = function () {
    window.scrollTo(0, _this._positionY);
  }; // default options


  var defaults = {
    onAlreadyAtPositions: function onAlreadyAtPositions() {},
    onCancel: function onCancel() {},
    onEnd: function onEnd() {},
    onStart: function onStart() {},
    onTick: function onTick() {},
    friction: .7,
    // 1 - .3
    acceleration: .04 // merge options

  };
  this.options = _extends({}, defaults, options); // set reverse friction

  if (options && options.friction) {
    this.options.friction = 1 - options.friction;
  } // register listener for cancel on wheel event


  window.addEventListener('mousewheel', function (event) {
    if (_this._raf) {
      _this.options.onCancel();

      cancelAnimationFrame(_this._raf);
      _this._raf = null;
    }
  }, {
    passive: true
  });
};

exports["default"] = Scrl;

},{}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Link = function () {
  function Link(elementOrUrl) {
    _classCallCheck(this, Link);

    if (elementOrUrl instanceof Element || elementOrUrl instanceof SVGElement) {
      this.link = elementOrUrl;
    } else {
      this.link = document.createElement('a');
      this.link.href = elementOrUrl;
    }
  }

  _createClass(Link, [{
    key: 'getPath',
    value: function getPath() {
      var path = this.link.pathname;

      if (path[0] !== '/') {
        path = '/' + path;
      }

      return path;
    }
  }, {
    key: 'getAddress',
    value: function getAddress() {
      var path = this.link.pathname + this.link.search;

      if (this.link.getAttribute('xlink:href')) {
        path = this.link.getAttribute('xlink:href');
      }

      if (path[0] !== '/') {
        path = '/' + path;
      }

      return path;
    }
  }, {
    key: 'getHash',
    value: function getHash() {
      return this.link.hash;
    }
  }]);

  return Link;
}();

exports["default"] = Link;

},{}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var classify = function classify(text) {
  var output = text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
  .replace(/\//g, '-') // Replace / with -
  .replace(/[^\w\-]+/g, '') // Remove all non-word chars
  .replace(/\-\-+/g, '-') // Replace multiple - with single -
  .replace(/^-+/, '') // Trim - from start of text
  .replace(/-+$/, ''); // Trim - from end of text

  if (output[0] === '/') output = output.splice(1);
  if (output === '') output = 'homepage';
  return output;
};

exports["default"] = classify;

},{}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHistoryRecord = function createHistoryRecord(url) {
  window.history.pushState({
    url: url || window.location.href.split(window.location.hostname)[1],
    random: Math.random(),
    source: 'swup'
  }, document.getElementsByTagName('title')[0].innerText, url || window.location.href.split(window.location.hostname)[1]);
};

exports["default"] = createHistoryRecord;

},{}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var fetch = function fetch(setOptions) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var defaults = {
    url: window.location.pathname + window.location.search,
    method: 'GET',
    data: null,
    headers: {}
  };

  var options = _extends({}, defaults, setOptions);

  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status !== 500) {
        callback(request);
      } else {
        callback(request);
      }
    }
  };

  request.open(options.method, options.url, true);
  Object.keys(options.headers).forEach(function (key) {
    request.setRequestHeader(key, options.headers[key]);
  });
  request.send(options.data);
  return request;
};

exports["default"] = fetch;

},{}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getCurrentUrl = function getCurrentUrl() {
  return window.location.pathname + window.location.search;
};

exports["default"] = getCurrentUrl;

},{}],50:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && (0, _typeof3["default"])(Symbol.iterator) === "symbol" ? function (obj) {
  return (0, _typeof3["default"])(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : (0, _typeof3["default"])(obj);
};

var _utils = require('../utils');

var getDataFromHtml = function getDataFromHtml(html, containers) {
  var fakeDom = document.createElement('html');
  fakeDom.innerHTML = html;
  var blocks = [];

  var _loop = function _loop(i) {
    if (fakeDom.querySelector(containers[i]) == null) {
      // page in invalid
      return {
        v: null
      };
    } else {
      (0, _utils.queryAll)(containers[i]).forEach(function (item, index) {
        (0, _utils.queryAll)(containers[i], fakeDom)[index].setAttribute('data-swup', blocks.length); // marks element with data-swup

        blocks.push((0, _utils.queryAll)(containers[i], fakeDom)[index].outerHTML);
      });
    }
  };

  for (var i = 0; i < containers.length; i++) {
    var _ret = _loop(i);

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }

  var json = {
    title: fakeDom.querySelector('title').innerText,
    pageClass: fakeDom.querySelector('body').className,
    originalContent: html,
    blocks: blocks
  }; // to prevent memory leaks

  fakeDom.innerHTML = '';
  fakeDom = null;
  return json;
};

exports["default"] = getDataFromHtml;

},{"../utils":65,"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/typeof":35}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.markSwupElements = exports.getCurrentUrl = exports.transitionEnd = exports.fetch = exports.getDataFromHtml = exports.createHistoryRecord = exports.classify = undefined;

var _classify = require('./classify');

var _classify2 = _interopRequireDefault(_classify);

var _createHistoryRecord = require('./createHistoryRecord');

var _createHistoryRecord2 = _interopRequireDefault(_createHistoryRecord);

var _getDataFromHtml = require('./getDataFromHtml');

var _getDataFromHtml2 = _interopRequireDefault(_getDataFromHtml);

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _transitionEnd = require('./transitionEnd');

var _transitionEnd2 = _interopRequireDefault(_transitionEnd);

var _getCurrentUrl = require('./getCurrentUrl');

var _getCurrentUrl2 = _interopRequireDefault(_getCurrentUrl);

var _markSwupElements = require('./markSwupElements');

var _markSwupElements2 = _interopRequireDefault(_markSwupElements);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var classify = exports.classify = _classify2["default"];
var createHistoryRecord = exports.createHistoryRecord = _createHistoryRecord2["default"];
var getDataFromHtml = exports.getDataFromHtml = _getDataFromHtml2["default"];
var fetch = exports.fetch = _fetch2["default"];
var transitionEnd = exports.transitionEnd = _transitionEnd2["default"];
var getCurrentUrl = exports.getCurrentUrl = _getCurrentUrl2["default"];
var markSwupElements = exports.markSwupElements = _markSwupElements2["default"];
var Link = exports.Link = _Link2["default"];

},{"./Link":45,"./classify":46,"./createHistoryRecord":47,"./fetch":48,"./getCurrentUrl":49,"./getDataFromHtml":50,"./markSwupElements":52,"./transitionEnd":53}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var markSwupElements = function markSwupElements(element, containers) {
  var blocks = 0;

  var _loop = function _loop(i) {
    if (element.querySelector(containers[i]) == null) {
      console.warn('Element ' + containers[i] + ' is not in current page.');
    } else {
      (0, _utils.queryAll)(containers[i]).forEach(function (item, index) {
        (0, _utils.queryAll)(containers[i], element)[index].setAttribute('data-swup', blocks);
        blocks++;
      });
    }
  };

  for (var i = 0; i < containers.length; i++) {
    _loop(i);
  }
};

exports["default"] = markSwupElements;

},{"../utils":65}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var transitionEnd = function transitionEnd() {
  var el = document.createElement('div');
  var transEndEventNames = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };

  for (var name in transEndEventNames) {
    if (el.style[name] !== undefined) {
      return transEndEventNames[name];
    }
  }

  return false;
};

exports["default"] = transitionEnd;

},{}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}(); // modules


var _delegate = require('delegate');

var _delegate2 = _interopRequireDefault(_delegate);

var _Cache = require('./modules/Cache');

var _Cache2 = _interopRequireDefault(_Cache);

var _loadPage = require('./modules/loadPage');

var _loadPage2 = _interopRequireDefault(_loadPage);

var _renderPage = require('./modules/renderPage');

var _renderPage2 = _interopRequireDefault(_renderPage);

var _triggerEvent = require('./modules/triggerEvent');

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

var _on = require('./modules/on');

var _on2 = _interopRequireDefault(_on);

var _off = require('./modules/off');

var _off2 = _interopRequireDefault(_off);

var _updateTransition = require('./modules/updateTransition');

var _updateTransition2 = _interopRequireDefault(_updateTransition);

var _getAnimationPromises = require('./modules/getAnimationPromises');

var _getAnimationPromises2 = _interopRequireDefault(_getAnimationPromises);

var _getPageData = require('./modules/getPageData');

var _getPageData2 = _interopRequireDefault(_getPageData);

var _plugins = require('./modules/plugins');

var _utils = require('./utils');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Swup = function () {
  function Swup(setOptions) {
    _classCallCheck(this, Swup); // default options


    var defaults = {
      animateHistoryBrowsing: false,
      animationSelector: '[class*="transition-"]',
      linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
      cache: true,
      containers: ['#swup'],
      requestHeaders: {
        'X-Requested-With': 'swup',
        Accept: 'text/html, application/xhtml+xml'
      },
      plugins: [],
      skipPopStateHandling: function skipPopStateHandling(event) {
        return !(event.state && event.state.source === 'swup');
      }
    }; // merge options

    var options = _extends({}, defaults, setOptions); // handler arrays


    this._handlers = {
      animationInDone: [],
      animationInStart: [],
      animationOutDone: [],
      animationOutStart: [],
      animationSkipped: [],
      clickLink: [],
      contentReplaced: [],
      disabled: [],
      enabled: [],
      openPageInNewTab: [],
      pageLoaded: [],
      pageRetrievedFromCache: [],
      pageView: [],
      popState: [],
      samePage: [],
      samePageWithHash: [],
      serverError: [],
      transitionStart: [],
      transitionEnd: [],
      willReplaceContent: []
    }; // variable for id of element to scroll to after render

    this.scrollToElement = null; // variable for promise used for preload, so no new loading of the same page starts while page is loading

    this.preloadPromise = null; // variable for save options

    this.options = options; // variable for plugins array

    this.plugins = []; // variable for current transition object

    this.transition = {}; // variable for keeping event listeners from "delegate"

    this.delegatedListeners = {}; // so we are able to remove the listener

    this.boundPopStateHandler = this.popStateHandler.bind(this); // make modules accessible in instance

    this.cache = new _Cache2["default"]();
    this.cache.swup = this;
    this.loadPage = _loadPage2["default"];
    this.renderPage = _renderPage2["default"];
    this.triggerEvent = _triggerEvent2["default"];
    this.on = _on2["default"];
    this.off = _off2["default"];
    this.updateTransition = _updateTransition2["default"];
    this.getAnimationPromises = _getAnimationPromises2["default"];
    this.getPageData = _getPageData2["default"];

    this.log = function () {}; // here so it can be used by plugins


    this.use = _plugins.use;
    this.unuse = _plugins.unuse;
    this.findPlugin = _plugins.findPlugin; // enable swup

    this.enable();
  }

  _createClass(Swup, [{
    key: 'enable',
    value: function enable() {
      var _this = this; // check for Promise support


      if (typeof Promise === 'undefined') {
        console.warn('Promise is not supported');
        return;
      } // add event listeners


      this.delegatedListeners.click = (0, _delegate2["default"])(document, this.options.linkSelector, 'click', this.linkClickHandler.bind(this));
      window.addEventListener('popstate', this.boundPopStateHandler); // initial save to cache

      var page = (0, _helpers.getDataFromHtml)(document.documentElement.outerHTML, this.options.containers);
      page.url = page.responseURL = (0, _helpers.getCurrentUrl)();

      if (this.options.cache) {
        this.cache.cacheUrl(page);
      } // mark swup blocks in html


      (0, _helpers.markSwupElements)(document.documentElement, this.options.containers); // mount plugins

      this.options.plugins.forEach(function (plugin) {
        _this.use(plugin);
      }); // modify initial history record

      window.history.replaceState(Object.assign({}, window.history.state, {
        url: window.location.href,
        random: Math.random(),
        source: 'swup'
      }), document.title, window.location.href); // trigger enabled event

      this.triggerEvent('enabled'); // add swup-enabled class to html tag

      document.documentElement.classList.add('swup-enabled'); // trigger page view event

      this.triggerEvent('pageView');
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this2 = this; // remove delegated listeners


      this.delegatedListeners.click.destroy(); // remove popstate listener

      window.removeEventListener('popstate', this.boundPopStateHandler); // empty cache

      this.cache.empty(); // unmount plugins

      this.options.plugins.forEach(function (plugin) {
        _this2.unuse(plugin);
      }); // remove swup data atributes from blocks

      (0, _utils.queryAll)('[data-swup]').forEach(function (element) {
        element.removeAttribute('data-swup');
      }); // remove handlers

      this.off(); // trigger disable event

      this.triggerEvent('disabled'); // remove swup-enabled class from html tag

      document.documentElement.classList.remove('swup-enabled');
    }
  }, {
    key: 'linkClickHandler',
    value: function linkClickHandler(event) {
      // no control key pressed
      if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
        // index of pressed button needs to be checked because Firefox triggers click on all mouse buttons
        if (event.button === 0) {
          this.triggerEvent('clickLink', event);
          event.preventDefault();
          var link = new _helpers.Link(event.delegateTarget);

          if (link.getAddress() == (0, _helpers.getCurrentUrl)() || link.getAddress() == '') {
            // link to the same URL
            if (link.getHash() != '') {
              // link to the same URL with hash
              this.triggerEvent('samePageWithHash', event);
              var element = document.querySelector(link.getHash());

              if (element != null) {
                history.replaceState({
                  url: link.getAddress() + link.getHash(),
                  random: Math.random(),
                  source: 'swup'
                }, document.title, link.getAddress() + link.getHash());
              } else {
                // referenced element not found
                console.warn('Element for offset not found (' + link.getHash() + ')');
              }
            } else {
              // link to the same URL without hash
              this.triggerEvent('samePage', event);
            }
          } else {
            // link to different url
            if (link.getHash() != '') {
              this.scrollToElement = link.getHash();
            } // get custom transition from data


            var customTransition = event.delegateTarget.getAttribute('data-swup-transition'); // load page

            this.loadPage({
              url: link.getAddress(),
              customTransition: customTransition
            }, false);
          }
        }
      } else {
        // open in new tab (do nothing)
        this.triggerEvent('openPageInNewTab', event);
      }
    }
  }, {
    key: 'popStateHandler',
    value: function popStateHandler(event) {
      if (this.options.skipPopStateHandling(event)) return;
      var link = new _helpers.Link(event.state ? event.state.url : window.location.pathname);

      if (link.getHash() !== '') {
        this.scrollToElement = link.getHash();
      } else {
        event.preventDefault();
      }

      this.triggerEvent('popState', event);
      this.loadPage({
        url: link.getAddress()
      }, event);
    }
  }]);

  return Swup;
}();

exports["default"] = Swup;

},{"./helpers":51,"./modules/Cache":55,"./modules/getAnimationPromises":56,"./modules/getPageData":57,"./modules/loadPage":58,"./modules/off":59,"./modules/on":60,"./modules/plugins":61,"./modules/renderPage":62,"./modules/triggerEvent":63,"./modules/updateTransition":64,"./utils":65,"delegate":67}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Cache = exports.Cache = function () {
  function Cache() {
    _classCallCheck(this, Cache);

    this.pages = {};
    this.last = null;
  }

  _createClass(Cache, [{
    key: 'cacheUrl',
    value: function cacheUrl(page) {
      if (page.url in this.pages === false) {
        this.pages[page.url] = page;
      }

      this.last = this.pages[page.url];
      this.swup.log('Cache (' + Object.keys(this.pages).length + ')', this.pages);
    }
  }, {
    key: 'getPage',
    value: function getPage(url) {
      return this.pages[url];
    }
  }, {
    key: 'getCurrentPage',
    value: function getCurrentPage() {
      return this.getPage(window.location.pathname + window.location.search);
    }
  }, {
    key: 'exists',
    value: function exists(url) {
      return url in this.pages;
    }
  }, {
    key: 'empty',
    value: function empty() {
      this.pages = {};
      this.last = null;
      this.swup.log('Cache cleared');
    }
  }, {
    key: 'remove',
    value: function remove(url) {
      delete this.pages[url];
    }
  }]);

  return Cache;
}();

exports["default"] = Cache;

},{}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _helpers = require('../helpers');

var getAnimationPromises = function getAnimationPromises() {
  var promises = [];
  var animatedElements = (0, _utils.queryAll)(this.options.animationSelector);
  animatedElements.forEach(function (element) {
    var promise = new Promise(function (resolve) {
      element.addEventListener((0, _helpers.transitionEnd)(), function (event) {
        if (element == event.target) {
          resolve();
        }
      });
    });
    promises.push(promise);
  });
  return promises;
};

exports["default"] = getAnimationPromises;

},{"../helpers":51,"../utils":65}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

var getPageData = function getPageData(request) {
  // this method can be replaced in case other content than html is expected to be received from server
  // this function should always return {title, pageClass, originalContent, blocks, responseURL}
  // in case page has invalid structure - return null
  var html = request.responseText;
  var pageObject = (0, _helpers.getDataFromHtml)(html, this.options.containers);

  if (pageObject) {
    pageObject.responseURL = request.responseURL ? request.responseURL : window.location.href;
  } else {
    console.warn('Received page is invalid.');
    return null;
  }

  return pageObject;
};

exports["default"] = getPageData;

},{"../helpers":51}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _helpers = require('../helpers');

var loadPage = function loadPage(data, popstate) {
  var _this = this; // create array for storing animation promises


  var animationPromises = [],
      xhrPromise = void 0;

  var animateOut = function animateOut() {
    _this.triggerEvent('animationOutStart'); // handle classes


    document.documentElement.classList.add('is-changing');
    document.documentElement.classList.add('is-leaving');
    document.documentElement.classList.add('is-animating');

    if (popstate) {
      document.documentElement.classList.add('is-popstate');
    }

    document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.url)); // animation promise stuff

    animationPromises = _this.getAnimationPromises('out');
    Promise.all(animationPromises).then(function () {
      _this.triggerEvent('animationOutDone');
    }); // create history record if this is not a popstate call

    if (!popstate) {
      // create pop element with or without anchor
      var state = void 0;

      if (_this.scrollToElement != null) {
        state = data.url + _this.scrollToElement;
      } else {
        state = data.url;
      }

      (0, _helpers.createHistoryRecord)(state);
    }
  };

  this.triggerEvent('transitionStart', popstate); // set transition object

  if (data.customTransition != null) {
    this.updateTransition(window.location.pathname, data.url, data.customTransition);
    document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.customTransition));
  } else {
    this.updateTransition(window.location.pathname, data.url);
  } // start/skip animation


  if (!popstate || this.options.animateHistoryBrowsing) {
    animateOut();
  } else {
    this.triggerEvent('animationSkipped');
  } // start/skip loading of page


  if (this.cache.exists(data.url)) {
    xhrPromise = new Promise(function (resolve) {
      resolve();
    });
    this.triggerEvent('pageRetrievedFromCache');
  } else {
    if (!this.preloadPromise || this.preloadPromise.route != data.url) {
      xhrPromise = new Promise(function (resolve, reject) {
        (0, _helpers.fetch)(_extends({}, data, {
          headers: _this.options.requestHeaders
        }), function (response) {
          if (response.status === 500) {
            _this.triggerEvent('serverError');

            reject(data.url);
            return;
          } else {
            // get json data
            var page = _this.getPageData(response);

            if (page != null) {
              page.url = data.url;
            } else {
              reject(data.url);
              return;
            } // render page


            _this.cache.cacheUrl(page);

            _this.triggerEvent('pageLoaded');
          }

          resolve();
        });
      });
    } else {
      xhrPromise = this.preloadPromise;
    }
  } // when everything is ready, handle the outcome


  Promise.all(animationPromises.concat([xhrPromise])).then(function () {
    // render page
    _this.renderPage(_this.cache.getPage(data.url), popstate);

    _this.preloadPromise = null;
  })["catch"](function (errorUrl) {
    // rewrite the skipPopStateHandling function to redirect manually when the history.go is processed
    _this.options.skipPopStateHandling = function () {
      window.location = errorUrl;
      return true;
    }; // go back to the actual page were still at


    window.history.go(-1);
  });
};

exports["default"] = loadPage;

},{"../helpers":51}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var off = function off(event, handler) {
  var _this = this;

  if (event != null) {
    if (handler != null) {
      if (this._handlers[event] && this._handlers[event].filter(function (savedHandler) {
        return savedHandler === handler;
      }).length) {
        var toRemove = this._handlers[event].filter(function (savedHandler) {
          return savedHandler === handler;
        })[0];

        var index = this._handlers[event].indexOf(toRemove);

        if (index > -1) {
          this._handlers[event].splice(index, 1);
        }
      } else {
        console.warn("Handler for event '" + event + "' no found.");
      }
    } else {
      this._handlers[event] = [];
    }
  } else {
    Object.keys(this._handlers).forEach(function (keys) {
      _this._handlers[keys] = [];
    });
  }
};

exports["default"] = off;

},{}],60:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var on = function on(event, handler) {
  if (this._handlers[event]) {
    this._handlers[event].push(handler);
  } else {
    console.warn("Unsupported event " + event + ".");
  }
};

exports["default"] = on;

},{}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var use = exports.use = function use(plugin) {
  if (!plugin.isSwupPlugin) {
    console.warn('Not swup plugin instance ' + plugin + '.');
    return;
  }

  this.plugins.push(plugin);
  plugin.swup = this;

  if (typeof plugin._beforeMount === 'function') {
    plugin._beforeMount();
  }

  plugin.mount();
  return this.plugins;
};

var unuse = exports.unuse = function unuse(plugin) {
  var pluginReference = void 0;

  if (typeof plugin === 'string') {
    pluginReference = this.plugins.find(function (p) {
      return plugin === p.name;
    });
  } else {
    pluginReference = plugin;
  }

  if (!pluginReference) {
    console.warn('No such plugin.');
    return;
  }

  pluginReference.unmount();

  if (typeof pluginReference._afterUnmount === 'function') {
    pluginReference._afterUnmount();
  }

  var index = this.plugins.indexOf(pluginReference);
  this.plugins.splice(index, 1);
  return this.plugins;
};

var findPlugin = exports.findPlugin = function findPlugin(pluginName) {
  return this.plugins.find(function (p) {
    return pluginName === p.name;
  });
};

},{}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _utils = require('../utils');

var _helpers = require('../helpers');

var renderPage = function renderPage(page, popstate) {
  var _this = this;

  document.documentElement.classList.remove('is-leaving'); // replace state in case the url was redirected

  var link = new _helpers.Link(page.responseURL);

  if (window.location.pathname !== link.getPath()) {
    window.history.replaceState({
      url: link.getPath(),
      random: Math.random(),
      source: 'swup'
    }, document.title, link.getPath()); // save new record for redirected url

    this.cache.cacheUrl(_extends({}, page, {
      url: link.getPath()
    }));
  } // only add for non-popstate transitions


  if (!popstate || this.options.animateHistoryBrowsing) {
    document.documentElement.classList.add('is-rendering');
  }

  this.triggerEvent('willReplaceContent', popstate); // replace blocks

  for (var i = 0; i < page.blocks.length; i++) {
    document.body.querySelector('[data-swup="' + i + '"]').outerHTML = page.blocks[i];
  } // set title


  document.title = page.title;
  this.triggerEvent('contentReplaced', popstate);
  this.triggerEvent('pageView', popstate); // empty cache if it's disabled (because pages could be preloaded and stuff)

  if (!this.options.cache) {
    this.cache.empty();
  } // start animation IN


  setTimeout(function () {
    if (!popstate || _this.options.animateHistoryBrowsing) {
      _this.triggerEvent('animationInStart');

      document.documentElement.classList.remove('is-animating');
    }
  }, 10); // handle end of animation

  if (!popstate || this.options.animateHistoryBrowsing) {
    var animationPromises = this.getAnimationPromises('in');
    Promise.all(animationPromises).then(function () {
      _this.triggerEvent('animationInDone');

      _this.triggerEvent('transitionEnd', popstate); // remove "to-{page}" classes


      document.documentElement.className.split(' ').forEach(function (classItem) {
        if (new RegExp('^to-').test(classItem) || classItem === 'is-changing' || classItem === 'is-rendering' || classItem === 'is-popstate') {
          document.documentElement.classList.remove(classItem);
        }
      });
    });
  } else {
    this.triggerEvent('transitionEnd', popstate);
  } // reset scroll-to element


  this.scrollToElement = null;
};

exports["default"] = renderPage;

},{"../helpers":51,"../utils":65}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var triggerEvent = function triggerEvent(eventName, originalEvent) {
  // call saved handlers with "on" method and pass originalEvent object if available
  this._handlers[eventName].forEach(function (handler) {
    try {
      handler(originalEvent);
    } catch (error) {
      console.error(error);
    }
  }); // trigger event on document with prefix "swup:"


  var event = new CustomEvent('swup:' + eventName, {
    detail: eventName
  });
  document.dispatchEvent(event);
};

exports["default"] = triggerEvent;

},{}],64:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var updateTransition = function updateTransition(from, to, custom) {
  // transition routes
  this.transition = {
    from: from,
    to: to,
    custom: custom
  };
};

exports["default"] = updateTransition;

},{}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var query = exports.query = function query(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  if (typeof selector !== 'string') {
    return selector;
  }

  return context.querySelector(selector);
};

var queryAll = exports.queryAll = function queryAll(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  if (typeof selector !== 'string') {
    return selector;
  }

  return Array.prototype.slice.call(context.querySelectorAll(selector));
};

},{}],66:[function(require,module,exports){
arguments[4][41][0].apply(exports,arguments)
},{"dup":41}],67:[function(require,module,exports){
"use strict";

var closest = require('./closest');
/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */


function delegate(element, selector, type, callback, useCapture) {
  var listenerFn = listener.apply(this, arguments);
  element.addEventListener(type, listenerFn, useCapture);
  return {
    destroy: function destroy() {
      element.removeEventListener(type, listenerFn, useCapture);
    }
  };
}
/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */


function listener(element, selector, type, callback) {
  return function (e) {
    e.delegateTarget = closest(e.target, selector);

    if (e.delegateTarget) {
      callback.call(element, e);
    }
  };
}

module.exports = delegate;

},{"./closest":66}],68:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

!function (t, n) {
  "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = "undefined" != typeof globalThis ? globalThis : t || self).LazyLoad = n();
}(void 0, function () {
  "use strict";

  function t() {
    return (t = Object.assign || function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var e = arguments[n];

        for (var i in e) {
          Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  var n = "undefined" != typeof window,
      e = n && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
      i = n && "IntersectionObserver" in window,
      o = n && "classList" in document.createElement("p"),
      r = n && window.devicePixelRatio > 1,
      a = {
    elements_selector: ".lazy",
    container: e || n ? document : null,
    threshold: 300,
    thresholds: null,
    data_src: "src",
    data_srcset: "srcset",
    data_sizes: "sizes",
    data_bg: "bg",
    data_bg_hidpi: "bg-hidpi",
    data_bg_multi: "bg-multi",
    data_bg_multi_hidpi: "bg-multi-hidpi",
    data_poster: "poster",
    class_applied: "applied",
    class_loading: "loading",
    class_loaded: "loaded",
    class_error: "error",
    class_entered: "entered",
    class_exited: "exited",
    unobserve_completed: !0,
    unobserve_entered: !1,
    cancel_on_exit: !0,
    callback_enter: null,
    callback_exit: null,
    callback_applied: null,
    callback_loading: null,
    callback_loaded: null,
    callback_error: null,
    callback_finish: null,
    callback_cancel: null,
    use_native: !1
  },
      c = function c(n) {
    return t({}, a, n);
  },
      s = function s(t, n) {
    var e,
        i = "LazyLoad::Initialized",
        o = new t(n);

    try {
      e = new CustomEvent(i, {
        detail: {
          instance: o
        }
      });
    } catch (t) {
      (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
        instance: o
      });
    }

    window.dispatchEvent(e);
  },
      l = "loading",
      u = "loaded",
      d = "applied",
      f = "error",
      _ = "native",
      g = "data-",
      v = "ll-status",
      b = function b(t, n) {
    return t.getAttribute(g + n);
  },
      p = function p(t) {
    return b(t, v);
  },
      h = function h(t, n) {
    return function (t, n, e) {
      var i = "data-ll-status";
      null !== e ? t.setAttribute(i, e) : t.removeAttribute(i);
    }(t, 0, n);
  },
      m = function m(t) {
    return h(t, null);
  },
      E = function E(t) {
    return null === p(t);
  },
      y = function y(t) {
    return p(t) === _;
  },
      I = [l, u, d, f],
      A = function A(t, n, e, i) {
    t && (void 0 === i ? void 0 === e ? t(n) : t(n, e) : t(n, e, i));
  },
      L = function L(t, n) {
    o ? t.classList.add(n) : t.className += (t.className ? " " : "") + n;
  },
      w = function w(t, n) {
    o ? t.classList.remove(n) : t.className = t.className.replace(new RegExp("(^|\\s+)" + n + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
  },
      k = function k(t) {
    return t.llTempImage;
  },
      O = function O(t, n) {
    if (n) {
      var e = n._observer;
      e && e.unobserve(t);
    }
  },
      x = function x(t, n) {
    t && (t.loadingCount += n);
  },
      z = function z(t, n) {
    t && (t.toLoadCount = n);
  },
      C = function C(t) {
    for (var n, e = [], i = 0; n = t.children[i]; i += 1) {
      "SOURCE" === n.tagName && e.push(n);
    }

    return e;
  },
      N = function N(t, n, e) {
    e && t.setAttribute(n, e);
  },
      M = function M(t, n) {
    t.removeAttribute(n);
  },
      R = function R(t) {
    return !!t.llOriginalAttrs;
  },
      T = function T(t) {
    if (!R(t)) {
      var n = {};
      n.src = t.getAttribute("src"), n.srcset = t.getAttribute("srcset"), n.sizes = t.getAttribute("sizes"), t.llOriginalAttrs = n;
    }
  },
      G = function G(t) {
    if (R(t)) {
      var n = t.llOriginalAttrs;
      N(t, "src", n.src), N(t, "srcset", n.srcset), N(t, "sizes", n.sizes);
    }
  },
      D = function D(t, n) {
    N(t, "sizes", b(t, n.data_sizes)), N(t, "srcset", b(t, n.data_srcset)), N(t, "src", b(t, n.data_src));
  },
      V = function V(t) {
    M(t, "src"), M(t, "srcset"), M(t, "sizes");
  },
      j = function j(t, n) {
    var e = t.parentNode;
    e && "PICTURE" === e.tagName && C(e).forEach(n);
  },
      F = {
    IMG: function IMG(t, n) {
      j(t, function (t) {
        T(t), D(t, n);
      }), T(t), D(t, n);
    },
    IFRAME: function IFRAME(t, n) {
      N(t, "src", b(t, n.data_src));
    },
    VIDEO: function VIDEO(t, n) {
      !function (t, e) {
        C(t).forEach(function (t) {
          N(t, "src", b(t, n.data_src));
        });
      }(t), N(t, "poster", b(t, n.data_poster)), N(t, "src", b(t, n.data_src)), t.load();
    }
  },
      P = function P(t, n) {
    var e = F[t.tagName];
    e && e(t, n);
  },
      S = function S(t, n, e) {
    x(e, 1), L(t, n.class_loading), h(t, l), A(n.callback_loading, t, e);
  },
      U = ["IMG", "IFRAME", "VIDEO"],
      $ = function $(t, n) {
    !n || function (t) {
      return t.loadingCount > 0;
    }(n) || function (t) {
      return t.toLoadCount > 0;
    }(n) || A(t.callback_finish, n);
  },
      q = function q(t, n, e) {
    t.addEventListener(n, e), t.llEvLisnrs[n] = e;
  },
      H = function H(t, n, e) {
    t.removeEventListener(n, e);
  },
      B = function B(t) {
    return !!t.llEvLisnrs;
  },
      J = function J(t) {
    if (B(t)) {
      var n = t.llEvLisnrs;

      for (var e in n) {
        var i = n[e];
        H(t, e, i);
      }

      delete t.llEvLisnrs;
    }
  },
      K = function K(t, n, e) {
    !function (t) {
      delete t.llTempImage;
    }(t), x(e, -1), function (t) {
      t && (t.toLoadCount -= 1);
    }(e), w(t, n.class_loading), n.unobserve_completed && O(t, e);
  },
      Q = function Q(t, n, e) {
    var i = k(t) || t;
    B(i) || function (t, n, e) {
      B(t) || (t.llEvLisnrs = {});
      var i = "VIDEO" === t.tagName ? "loadeddata" : "load";
      q(t, i, n), q(t, "error", e);
    }(i, function (o) {
      !function (t, n, e, i) {
        var o = y(n);
        K(n, e, i), L(n, e.class_loaded), h(n, u), A(e.callback_loaded, n, i), o || $(e, i);
      }(0, t, n, e), J(i);
    }, function (o) {
      !function (t, n, e, i) {
        var o = y(n);
        K(n, e, i), L(n, e.class_error), h(n, f), A(e.callback_error, n, i), o || $(e, i);
      }(0, t, n, e), J(i);
    });
  },
      W = function W(t, n, e) {
    !function (t) {
      t.llTempImage = document.createElement("IMG");
    }(t), Q(t, n, e), function (t, n, e) {
      var i = b(t, n.data_bg),
          o = b(t, n.data_bg_hidpi),
          a = r && o ? o : i;
      a && (t.style.backgroundImage = 'url("'.concat(a, '")'), k(t).setAttribute("src", a), S(t, n, e));
    }(t, n, e), function (t, n, e) {
      var i = b(t, n.data_bg_multi),
          o = b(t, n.data_bg_multi_hidpi),
          a = r && o ? o : i;
      a && (t.style.backgroundImage = a, function (t, n, e) {
        L(t, n.class_applied), h(t, d), n.unobserve_completed && O(t, n), A(n.callback_applied, t, e);
      }(t, n, e));
    }(t, n, e);
  },
      X = function X(t, n, e) {
    !function (t) {
      return U.indexOf(t.tagName) > -1;
    }(t) ? W(t, n, e) : function (t, n, e) {
      Q(t, n, e), P(t, n), S(t, n, e);
    }(t, n, e);
  },
      Y = ["IMG", "IFRAME", "VIDEO"],
      Z = function Z(t) {
    return t.use_native && "loading" in HTMLImageElement.prototype;
  },
      tt = function tt(t, n, e) {
    t.forEach(function (t) {
      return function (t) {
        return t.isIntersecting || t.intersectionRatio > 0;
      }(t) ? function (t, n, e, i) {
        var o = function (t) {
          return I.indexOf(p(t)) >= 0;
        }(t);

        h(t, "entered"), L(t, e.class_entered), w(t, e.class_exited), function (t, n, e) {
          n.unobserve_entered && O(t, e);
        }(t, e, i), A(e.callback_enter, t, n, i), o || X(t, e, i);
      }(t.target, t, n, e) : function (t, n, e, i) {
        E(t) || (L(t, e.class_exited), function (t, n, e, i) {
          e.cancel_on_exit && function (t) {
            return p(t) === l;
          }(t) && "IMG" === t.tagName && (J(t), function (t) {
            j(t, function (t) {
              V(t);
            }), V(t);
          }(t), function (t) {
            j(t, function (t) {
              G(t);
            }), G(t);
          }(t), w(t, e.class_loading), x(i, -1), m(t), A(e.callback_cancel, t, n, i));
        }(t, n, e, i), A(e.callback_exit, t, n, i));
      }(t.target, t, n, e);
    });
  },
      nt = function nt(t) {
    return Array.prototype.slice.call(t);
  },
      et = function et(t) {
    return t.container.querySelectorAll(t.elements_selector);
  },
      it = function it(t) {
    return function (t) {
      return p(t) === f;
    }(t);
  },
      ot = function ot(t, n) {
    return function (t) {
      return nt(t).filter(E);
    }(t || et(n));
  },
      rt = function rt(t, e) {
    var o = c(t);
    this._settings = o, this.loadingCount = 0, function (t, n) {
      i && !Z(t) && (n._observer = new IntersectionObserver(function (e) {
        tt(e, t, n);
      }, function (t) {
        return {
          root: t.container === document ? null : t.container,
          rootMargin: t.thresholds || t.threshold + "px"
        };
      }(t)));
    }(o, this), function (t, e) {
      n && window.addEventListener("online", function () {
        !function (t, n) {
          var e;
          (e = et(t), nt(e).filter(it)).forEach(function (n) {
            w(n, t.class_error), m(n);
          }), n.update();
        }(t, e);
      });
    }(o, this), this.update(e);
  };

  return rt.prototype = {
    update: function update(t) {
      var n,
          o,
          r = this._settings,
          a = ot(t, r);
      z(this, a.length), !e && i ? Z(r) ? function (t, n, e) {
        t.forEach(function (t) {
          -1 !== Y.indexOf(t.tagName) && function (t, n, e) {
            t.setAttribute("loading", "lazy"), Q(t, n, e), P(t, n), h(t, _);
          }(t, n, e);
        }), z(e, 0);
      }(a, r, this) : (o = a, function (t) {
        t.disconnect();
      }(n = this._observer), function (t, n) {
        n.forEach(function (n) {
          t.observe(n);
        });
      }(n, o)) : this.loadAll(a);
    },
    destroy: function destroy() {
      this._observer && this._observer.disconnect(), et(this._settings).forEach(function (t) {
        delete t.llOriginalAttrs;
      }), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount;
    },
    loadAll: function loadAll(t) {
      var n = this,
          e = this._settings;
      ot(t, e).forEach(function (t) {
        O(t, n), X(t, e, n);
      });
    }
  }, rt.load = function (t, n) {
    var e = c(n);
    X(t, e);
  }, rt.resetStatus = function (t) {
    m(t);
  }, n && function (t, n) {
    if (n) if (n.length) for (var e, i = 0; e = n[i]; i += 1) {
      s(t, e);
    } else s(t, n);
  }(rt, window.lazyLoadOptions), rt;
});

},{"@babel/runtime/helpers/interopRequireDefault":32,"@babel/runtime/helpers/typeof":35}]},{},[21]);
