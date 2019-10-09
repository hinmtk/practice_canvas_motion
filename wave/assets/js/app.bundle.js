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

	var _circle = __webpack_require__(3);

	var _circle2 = _interopRequireDefault(_circle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(function () {
	  var Libs = new libs();
	  var motion = new _motion2.default();
	  var circle = new _circle2.default();
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var stage = void 0;
	var ctx = void 0;
	var x = 0;
	var y = 0;
	var radius = 0;
	var center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
	var dpr = void 0;
	var point1 = { x: 0, y: 0, speed: 0.03, angle: 0 };
	var point1_2 = { x: 0, y: 0, speed: 0.01, angle: 0 };
	var point2 = { x: Math.floor(window.innerWidth / 3) * 1, y: 0, speed: 0.02, angle: 0 };
	var point3 = { x: Math.floor(window.innerWidth / 3) * 2, y: 0, speed: 0.03, angle: 0 };
	var point3_2 = { x: Math.floor(window.innerWidth / 3) * 2, y: 0, speed: 0.02, angle: 0 };
	var point4 = { x: window.innerWidth, y: 0, speed: 0.04, angle: 0 };
	var point5 = { x: Math.floor(window.innerWidth / 3) * 4, y: 0, speed: 0.03, angle: 0 };

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

	            this.renderWave();
	        }

	        ///////////////////////////
	        /// renderWave
	        ////////////////////////////

	    }, {
	        key: 'renderWave',
	        value: function renderWave() {
	            window.requestAnimationFrame(this.renderWave.bind(this));

	            ctx.clearRect(0, 0, stage.width, stage.height);

	            point1.y = Math.floor(Math.sin(point1.angle) * 30);
	            point1_2.y = Math.floor(Math.cos(point1.angle) * 30);
	            point2.y = Math.floor(Math.cos(point2.angle) * 30);
	            point3.y = Math.floor(Math.cos(point3.angle) * 30);
	            point3_2.y = Math.floor(Math.cos(point3.angle) * 30);
	            point4.y = Math.floor(Math.sin(point4.angle) * 30);
	            point5.y = Math.floor(Math.sin(point5.angle) * 30);
	            point1.angle += point1.speed;
	            point1_2.angle += point1_2.speed;
	            point2.angle += point2.speed;
	            point3.angle += point3.speed;
	            point3_2.angle += point3_2.speed;
	            point4.angle += point4.speed;
	            point5.angle += point5.speed;
	            //if(point1.angle > 360) angle = 0;

	            // ctx.fillStyle = 'rgba(255,255,255,0.7)';
	            // ctx.strokeStyle = 'rgba(255,255,255,0.7)';
	            // ctx.beginPath();
	            // ctx.arc(point1.x,stage.height - 100 + point1.y,20,0,Math.PI * 2, true);
	            // ctx.fill();

	            // ctx.beginPath();
	            // ctx.arc(point2.x,stage.height - 100 + point2.y,20,0,Math.PI * 2, true);
	            // ctx.fill();

	            // ctx.beginPath();
	            // ctx.arc(point3.x,stage.height - 100 + point3.y,20,0,Math.PI * 2, true);
	            // ctx.fill();

	            // ctx.beginPath();
	            // ctx.arc(point4.x,stage.height - 100 + point4.y,20,0,Math.PI * 2, true);
	            // ctx.fill();

	            //1つめの波
	            var grad = ctx.createLinearGradient(0, 0, 0, stage.height);
	            grad.addColorStop(0, 'rgba(248,229,233,0.4)');
	            grad.addColorStop(0.8, 'rgba(248,229,233,0.7)');
	            grad.addColorStop(1, 'rgba(248,229,233,0.9)');
	            ctx.fillStyle = grad;
	            ctx.beginPath();
	            ctx.moveTo(point1.x, stage.height - 100 + point1.y);
	            ctx.bezierCurveTo((point2.x - point1.x) / 2 + point1.x, (point2.y - point1.y) / 2 + point1.y + stage.height - 100, (point3.x - point2.x) / 2 + point2.x, (point3.y - point2.y) / 2 + point2.y + stage.height - 100, point4.x, stage.height - 100 + point4.y);
	            ctx.lineTo(stage.width, stage.height);
	            ctx.lineTo(0, stage.height);
	            ctx.fill();

	            //2つめの波
	            var grad = ctx.createLinearGradient(0, 0, 0, stage.height);
	            grad.addColorStop(0, 'rgba(240,219,223,0.3)');
	            grad.addColorStop(0.4, 'rgba(240,219,223,0.3)');
	            grad.addColorStop(1, 'rgba(240,219,223,0.8)');
	            ctx.fillStyle = grad;
	            ctx.beginPath();
	            ctx.moveTo(point1_2.x, stage.height - 100 + point1_2.y);
	            ctx.bezierCurveTo((point3_2.x - point2.x) / 2 + point2.x, (point3_2.y - point2.y) / 2 + point2.y + stage.height - 100, (point4.x - point3.x) / 2 + point3.x, (point4.y - point3.y) / 2 + point3.y + stage.height - 100, point5.x, stage.height - 100 + point5.y);
	            ctx.lineTo(stage.width, stage.height);
	            ctx.lineTo(0, stage.height);
	            ctx.fill();

	            //arc
	            ctx.fillStyle = 'rgba(241,229,241,1)';
	            ctx.beginPath();
	            ctx.arc((point2.x - point1.x) / 2 + point1.x, (point2.y - point1.y) / 2 + point1.y + stage.height - 100, 10, 0, Math.PI * 2, true);
	            ctx.fill();

	            ctx.beginPath();
	            ctx.arc((point3.x - point2.x) / 2 + point2.x, (point3.y - point2.y) / 2 + point2.y + stage.height - 100, 10, 0, Math.PI * 2, true);
	            ctx.fill();

	            ctx.beginPath();
	            ctx.arc((point4.x - point3.x) / 2 + point3.x, (point4.y - point3.y) / 2 + point3.y + stage.height - 100, 10, 0, Math.PI * 2, true);
	            ctx.fill();
	        }
	    }]);

	    return Motion;
	}();

	exports.default = Motion;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _point = __webpack_require__(4);

	var _point2 = _interopRequireDefault(_point);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var stage = void 0;
	var ctx = void 0;
	var x = 0;
	var y = 0;
	var center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
	var dpr = void 0;
	var particleNum = 4;
	var radius = window.innerWidth / 3;
	var particles = [];
	var point1 = { x: 0, y: 0, speed: 0.04, radius: 0 };
	var point2 = { x: x, y: y, speed: 0.03, radius: 0 };
	var point3 = { x: x, y: y, speed: 0.04, radius: 0 };
	var kappa = 0.5522848;
	var o = radius * kappa;
	var controlPoint1 = {};
	var controlPoint2 = {};
	var controlPoint3 = {};
	var controlPoint4 = {};
	var controlPoint5 = {};
	var controlPoint6 = {};
	var controlPoint7 = {};
	var controlPoint8 = {};

	var Circle = function () {
	    ///////////////////////////
	    /// constructor
	    ////////////////////////////
	    function Circle() {
	        _classCallCheck(this, Circle);

	        this.initCanvas();
	    }

	    ///////////////////////////
	    ////////////////////////////


	    _createClass(Circle, [{
	        key: 'initCanvas',
	        value: function initCanvas() {

	            stage = document.getElementById('stage1');
	            if (!stage || !stage.getContext) return false;
	            ctx = stage.getContext('2d');
	            dpr = window.devicePixelRatio || 1;
	            stage.width = window.innerWidth * dpr;
	            stage.height = window.innerHeight * dpr;
	            ctx.scale(dpr, dpr);
	            stage.style.width = window.innerWidth + 'px';
	            stage.style.height = window.innerHeight + 'px';

	            ctx.fillStyle = 'rgba(232,206,213,1)';

	            for (var i = 0, len = particleNum; i < len; i++) {
	                var degree = Math.floor(360 / particleNum) * i;
	                var point = new _point2.default(center, radius, degree);
	                particles.push(point);
	            }

	            for (var _i = 0, _len = particleNum; _i < _len; _i++) {

	                // ctx.fillStyle = 'rgba(255,255,255,1)';
	                // ctx.strokeStyle = 'rgba(255,255,255,0.7)';
	                ctx.beginPath();
	                ctx.arc(particles[_i].x, particles[_i].y, 10, 0, Math.PI * 2, true);
	                ctx.fill();
	            }

	            this.renderCircle();
	        }

	        ///////////////////////////
	        /// renderCircle
	        ////////////////////////////

	    }, {
	        key: 'renderCircle',
	        value: function renderCircle() {
	            window.requestAnimationFrame(this.renderCircle.bind(this));

	            ctx.clearRect(0, 0, stage.width, stage.height);

	            particles[0].dy = Math.floor(Math.sin(particles[0].radius) * 60);
	            particles[1].dy = Math.floor(Math.cos(particles[1].radius) * 55);
	            particles[2].dy = Math.floor(Math.sin(particles[2].radius) * 60);
	            particles[3].dy = Math.floor(Math.cos(particles[3].radius) * 40);
	            particles[0].radius += particles[0].speed;
	            particles[1].radius += particles[1].speed;
	            particles[2].radius += particles[2].speed;
	            particles[3].radius += particles[3].speed;

	            ctx.fillStyle = 'rgba(255,255,255,1)';
	            ctx.strokeStyle = 'rgba(181,136,199,1)';
	            ctx.lineWidth = 5;

	            ctx.beginPath();
	            var point1x = particles[0].x + particles[0].dy;
	            var point1y = particles[0].y + particles[0].dy;
	            var point2x = particles[1].x + particles[1].dy;
	            var point2y = particles[1].y + particles[1].dy;
	            var point3x = particles[2].x + particles[2].dy;
	            var point3y = particles[2].y + particles[2].dy;
	            var point4x = particles[3].x + particles[3].dy;
	            var point4y = particles[3].y + particles[3].dy;

	            controlPoint1.x = point1x + o * Math.cos(90 * Math.PI / 180);
	            controlPoint1.y = point1y + o * Math.sin(90 * Math.PI / 180);
	            controlPoint2.x = point1x + o * Math.cos(270 * Math.PI / 180);
	            controlPoint2.y = point1y + o * Math.sin(270 * Math.PI / 180);
	            //
	            controlPoint3.x = point2x + o * Math.cos(0 * Math.PI / 180);
	            controlPoint3.y = point2y + o * Math.sin(0 * Math.PI / 180);
	            controlPoint4.x = point2x + o * Math.cos(180 * Math.PI / 180);
	            controlPoint4.y = point2y + o * Math.sin(180 * Math.PI / 180);
	            //
	            controlPoint5.x = point3x + o * Math.cos(90 * Math.PI / 180);
	            controlPoint5.y = point3y + o * Math.sin(90 * Math.PI / 180);
	            controlPoint6.x = point3x + o * Math.cos(270 * Math.PI / 180);
	            controlPoint6.y = point3y + o * Math.sin(270 * Math.PI / 180);
	            //
	            controlPoint7.x = point4x + o * Math.cos(0 * Math.PI / 180);
	            controlPoint7.y = point4y + o * Math.sin(0 * Math.PI / 180);
	            controlPoint8.x = point4x + o * Math.cos(180 * Math.PI / 180);
	            controlPoint8.y = point4y + o * Math.sin(180 * Math.PI / 180);

	            ctx.moveTo(point1x, point1y);
	            ctx.bezierCurveTo(controlPoint2.x, controlPoint2.y, controlPoint7.x, controlPoint7.y, point4x, point4y);
	            ctx.bezierCurveTo(controlPoint8.x, controlPoint8.y, controlPoint6.x, controlPoint6.y, point3x, point3y);
	            ctx.bezierCurveTo(controlPoint5.x, controlPoint5.y, controlPoint4.x, controlPoint4.y, point2x, point2y);
	            ctx.bezierCurveTo(controlPoint3.x, controlPoint3.y, controlPoint1.x, controlPoint1.y, point1x, point1y);
	            ctx.fill();

	            // for(let i=0,len=particleNum; i<len; i++){
	            //   ctx.beginPath();
	            //   ctx.arc(particles[i].x + particles[i].dy,particles[i].y + particles[i].dy,10,0,Math.PI * 2, true);
	            //   ctx.fill();
	            // }

	            ctx.fillStyle = 'rgba(255,19,113,1)';
	            ctx.beginPath();
	            ctx.arc(controlPoint1.x, controlPoint1.y, 10, 0, Math.PI * 2, true);
	            ctx.fill();
	            ctx.fillStyle = 'rgba(255,255,255,1)';
	            ctx.beginPath();
	            ctx.arc(controlPoint2.x, controlPoint2.y, 10, 0, Math.PI * 2, true);
	            ctx.fill();

	            ctx.fillStyle = 'rgba(181,219,241,1)';
	            ctx.beginPath();
	            ctx.arc(controlPoint3.x, controlPoint3.y, 10, 0, Math.PI * 2, true);
	            ctx.fill();
	            ctx.fillStyle = 'rgba(255,255,255,1)';
	            ctx.beginPath();
	            ctx.arc(controlPoint4.x, controlPoint4.y, 10, 0, Math.PI * 2, true);
	            ctx.fill();

	            ctx.fillStyle = 'rgba(255,255,255,1)';
	            ctx.beginPath();
	            ctx.arc(controlPoint5.x, controlPoint5.y, 10, 0, Math.PI * 2, true);
	            ctx.fill();
	            ctx.fillStyle = 'rgba(255,255,255,1)';
	            ctx.beginPath();
	            ctx.arc(controlPoint6.x, controlPoint6.y, 10, 0, Math.PI * 2, true);
	            ctx.fill();

	            ctx.fillStyle = 'rgba(255,255,255,1)';
	            ctx.beginPath();
	            ctx.arc(controlPoint7.x, controlPoint7.y, 10, 0, Math.PI * 2, true);
	            ctx.fill();
	            ctx.fillStyle = 'rgba(255,255,255,1)';
	            ctx.beginPath();
	            ctx.arc(controlPoint8.x, controlPoint8.y, 10, 0, Math.PI * 2, true);
	            ctx.fill();
	        }
	    }]);

	    return Circle;
	}();

	exports.default = Circle;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Point =

	///////////////////////////
	/// constructor
	////////////////////////////
	function Point(center, radius, degree) {
	  _classCallCheck(this, Point);

	  var radian = degree * (Math.PI / 180);
	  var cos = Math.cos(radian) * radius;
	  var sin = Math.sin(radian) * radius;
	  this.x = cos + center.x;
	  this.y = sin + center.y;
	  this.radius = radius;
	  this.degree = degree;
	  this.radian = radian;
	  this.speed = (Math.random() * 5 + 1) / 500;
	};

	exports.default = Point;

/***/ })
/******/ ]);