/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./assets/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _motion = __webpack_require__(2);

	var _motion2 = _interopRequireDefault(_motion);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(function () {
	  var Libs = new libs();
	  var motion = new _motion2.default();
	});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _furikake2 = __webpack_require__(3);

	var _furikake3 = _interopRequireDefault(_furikake2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var stage = void 0;
	var ctx = void 0;
	var x = 0;
	var y = 0;
	var radius = 0;
	var center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
	var dpr = void 0;
	var furikakeNum = 15;
	var furikakeArr = [];
	var objW = 65;
	var imgLen = 3;
	var images = ['./img/1.png', './img/2.png', './img/3.png'];
	var imgArr = [];

	var Motion = function () {
	  ///////////////////////////
	  /// constructor
	  ////////////////////////////
	  function Motion() {
	    _classCallCheck(this, Motion);

	    this.initCanvas();
	  }

	  ///////////////////////////
	  ////////////////////////////


	  _createClass(Motion, [{
	    key: 'initCanvas',
	    value: function initCanvas() {

	      stage = document.getElementById('stage2');
	      if (!stage || !stage.getContext) return false;
	      ctx = stage.getContext('2d');
	      dpr = window.devicePixelRatio || 1;
	      stage.width = window.innerWidth * dpr;
	      stage.height = window.innerHeight * dpr;
	      ctx.scale(dpr, dpr);
	      stage.style.width = window.innerWidth + 'px';
	      stage.style.height = window.innerHeight + 'px';
	      var num = 0;

	      for (var i = 0; i < images.length; i++) {
	        var img = new Image();
	        img.src = images[i];
	        imgArr.push(img);
	      }

	      for (var _i = 0; _i < furikakeNum; _i++) {
	        num++;
	        if (num >= images.length) num = 0;
	        var degree = Math.floor(Math.random() * 360);
	        var _x = Math.floor(stage.width / furikakeNum) * _i + objW / 2 + 20;
	        var furikake = new _furikake3.default(_x, degree, imgArr[num]);
	        furikakeArr.push(furikake);
	      }

	      setTimeout(function () {
	        for (var _i2 = 0; _i2 < furikakeNum; _i2++) {
	          num++;
	          if (num >= images.length) num = 0;
	          var _degree = Math.floor(Math.random() * 360);
	          var _x2 = Math.floor(stage.width / furikakeNum) * _i2 + objW / 2 + 20;
	          var _furikake = new _furikake3.default(_x2, _degree, imgArr[num]);
	          furikakeArr.push(_furikake);
	        }
	        console.log(furikakeArr.length);
	      }, 10000);

	      this.renderFurikake();
	    }

	    ///////////////////////////
	    /// renderFurikake
	    ////////////////////////////

	  }, {
	    key: 'renderFurikake',
	    value: function renderFurikake() {

	      window.requestAnimationFrame(this.renderFurikake.bind(this));

	      ctx.clearRect(0, 0, stage.width, stage.height);

	      ctx.fillStyle = 'rgba(125,201,239,1)';

	      for (var i = 0, len = furikakeArr.length; i < len; i++) {
	        var furikake = furikakeArr[i];
	        if (furikake.dir == 1) {
	          furikake.dy = Math.floor(Math.cos(furikake.radius) * 30);
	        } else if (furikake.dir == 2) {
	          furikake.dy = Math.floor(Math.sin(furikake.radius) * 30);
	        } else {
	          furikake.dy = Math.floor(Math.cos(furikake.radius) * 30);
	        }
	        furikake.radius += furikake.speedX;
	        var _x3 = furikake.x + furikake.dy;
	        furikake.y = furikake.y + furikake.speedY;
	        var _y = furikake.y;
	        if (furikake.y > stage.height + objW) {
	          furikake.y = -objW;
	        }

	        // let degree = furikake.degree + furikake.speedY;
	        // furikake.degree = degree;
	        // let rad = degree * (Math.PI / 180);
	        // ctx.rotate(rad);


	        ctx.drawImage(furikakeArr[i].img, _x3, _y);
	      }
	    }
	  }]);

	  return Motion;
	}();

	exports.default = Motion;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Furikake =

	///////////////////////////
	/// constructor
	////////////////////////////
	function Furikake(x, degree, img) {
	  _classCallCheck(this, Furikake);

	  var radian = degree * (Math.PI / 180);
	  var radius = Math.floor(Math.random() * 10) + 5;
	  this.radius = radius;
	  this.degree = degree;
	  this.radian = radian;
	  this.x = x;
	  this.y = -Math.floor(Math.random() * 300) - 70;
	  this.dir = Math.floor(Math.random() * 3);
	  this.speedX = (Math.random() * 5 + 1) / 200;
	  this.speedY = (Math.floor(Math.random() * 8) + 2) / 10;
	  this.range = Math.floor(Math.random() * 10) + 2;
	  this.img = img;
	};

	exports.default = Furikake;

/***/ })
/******/ ]);