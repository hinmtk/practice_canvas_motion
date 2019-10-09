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
	var furikakeNum = 30;
	var furikakeArr = [];
	var objW = 65;
	// let colors = [
	//               'rgba(181,112,157,1)',
	//               'rgba(222,187,64,1)',
	//               'rgba(196,198,195,1)',
	//               'rgba(109,111,168,1)',
	//               'rgba(104,181,176,1)',
	//               'rgba(238,146,162,1)'
	//               ];
	var colors = ['rgba(213,195,109,1)', 'rgba(247,247,247,1)'];

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

	            // let aDegree = 45;
	            // let _aDegree = 90;
	            // let bDegree = 130;
	            // let _bDegree = 175;
	            // let cDegree = 215;
	            // let _cDegree = 260;
	            // let dDegree = 315;
	            // let _dDegree = 360;
	            // let radius = 300;
	            // let radian = aDegree * (Math.PI / 180);
	            // let cos = Math.cos(radian) * radius;
	            // let sin = Math.sin(radian) * radius;
	            // let center = {x:stage.width/2,y:stage.height/2};
	            // //a
	            // let ax = cos + x + center.x;    let ay = sin + y + center.y;
	            // //b
	            // radian = bDegree * (Math.PI / 180);
	            // cos = Math.cos(radian) * radius;
	            // sin = Math.sin(radian) * radius;
	            // let bx = cos + x + center.x;
	            // let by = sin + y + center.y;
	            // //c
	            // radian = cDegree * (Math.PI / 180);
	            // cos = Math.cos(radian) * radius;
	            // sin = Math.sin(radian) * radius;
	            // let cx = cos + x + center.x;
	            // let cy = sin + y + center.y;
	            // //d
	            // radian = dDegree * (Math.PI / 180);
	            // cos = Math.cos(radian) * radius;
	            // sin = Math.sin(radian) * radius;
	            // let dx = cos + x + center.x;
	            // let dy = sin + y + center.y;

	            // //中間ポイントa
	            // radius = 80;
	            // radian = _aDegree * (Math.PI / 180);
	            // cos = Math.cos(radian) * radius;
	            // sin = Math.sin(radian) * radius;
	            // let _ax = cos + x + center.x;
	            // let _ay = sin + y + center.y;

	            // //中間ポイントb
	            // radian = _bDegree * (Math.PI / 180);
	            // cos = Math.cos(radian) * radius;
	            // sin = Math.sin(radian) * radius;
	            // let _bx = cos + x + center.x;
	            // let _by = sin + y + center.y;

	            // //中間ポイントc
	            // radian = _cDegree * (Math.PI / 180);
	            // cos = Math.cos(radian) * radius;
	            // sin = Math.sin(radian) * radius;
	            // let _cx = cos + x + center.x;
	            // let _cy = sin + y + center.y;

	            // //中間ポイントd
	            // radian = _dDegree * (Math.PI / 180);
	            // cos = Math.cos(radian) * radius;
	            // sin = Math.sin(radian) * radius;
	            // let _dx = cos + x + center.x;
	            // let _dy = sin + y + center.y;

	            // let color = 'rgba(128,128,142,1)';
	            // ctx.fillStyle = color;
	            // ctx.beginPath();
	            // ctx.moveTo(ax, ay);
	            // ctx.quadraticCurveTo(_ax, _ay, bx, by);
	            // ctx.quadraticCurveTo(_bx, _by, cx, cy);
	            // ctx.quadraticCurveTo(_cx, _cy, dx, dy);
	            // ctx.quadraticCurveTo(_dx, _dy, ax, ay);

	            // ctx.closePath();
	            // ctx.stroke();

	            for (var i = 0; i < furikakeNum; i++) {
	                var degree = Math.floor(Math.random() * 360);
	                var _x = Math.floor(stage.width / furikakeNum) * i + objW / 2 + 20;
	                var color = Math.floor(Math.random() * colors.length);
	                color = colors[num];
	                num++;
	                if (num >= colors.length) num = 0;
	                var furikake = new _furikake3.default(_x, degree, color, 1, stage);
	                furikakeArr.push(furikake);
	            }

	            setTimeout(function () {
	                for (var _i = 0; _i < furikakeNum; _i++) {
	                    var _degree = Math.floor(Math.random() * 360);
	                    var _x2 = Math.floor(stage.width / furikakeNum) * _i + objW / 2 + 20;
	                    var _color = Math.floor(Math.random() * colors.length);
	                    _color = colors[num];
	                    num++;
	                    if (num >= colors.length) num = 0;
	                    var _furikake = new _furikake3.default(_x2, _degree, _color, 2, stage);
	                    furikakeArr.push(_furikake);
	                }
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
	                    furikake.dy = Math.floor(Math.cos(furikake.radius) * furikake.effectW);
	                } else if (furikake.dir == 2) {
	                    furikake.dy = Math.floor(Math.sin(furikake.radius) * furikake.effectW);
	                } else {
	                    furikake.dy = Math.floor(Math.cos(furikake.radius) * furikake.effectW);
	                }
	                furikake.radius += furikake.speedX;
	                var _x3 = furikake.x + furikake.dy;
	                furikake.y = furikake.y + furikake.speedY;
	                var _y = furikake.y;
	                if (furikake.y > stage.height + objW) {
	                    furikake.y = -objW;
	                }
	                furikake.rotate += furikake.rotateSpeed;

	                //頂点座標を計算
	                var aDegree = 45 + furikake.rotate;
	                var _aDegree = 90 + furikake.rotate;
	                var bDegree = 130 + furikake.rotate;
	                var _bDegree = 175 + furikake.rotate;
	                var cDegree = 215 + furikake.rotate;
	                var _cDegree = 260 + furikake.rotate;
	                var dDegree = 315 + furikake.rotate;
	                var _dDegree = 360 + furikake.rotate;
	                //頂点A
	                var radian = aDegree * (Math.PI / 180);
	                var _radius = furikake.range1;
	                var cos = Math.cos(radian) * _radius;
	                var sin = Math.sin(radian) * _radius;
	                var ax = cos + _x3;
	                var ay = sin + _y;
	                //頂点B
	                radian = bDegree * (Math.PI / 180);
	                _radius = furikake.range2;
	                cos = Math.cos(radian) * _radius;
	                sin = Math.sin(radian) * _radius;
	                var bx = cos + _x3;
	                var by = sin + _y;
	                //頂点C
	                radian = cDegree * (Math.PI / 180);
	                _radius = furikake.range1;
	                cos = Math.cos(radian) * _radius;
	                sin = Math.sin(radian) * _radius;
	                var cx = cos + _x3;
	                var cy = sin + _y;
	                //頂点D
	                radian = dDegree * (Math.PI / 180);
	                _radius = furikake.range2;
	                cos = Math.cos(radian) * _radius;
	                sin = Math.sin(radian) * _radius;
	                var dx = cos + _x3;
	                var dy = sin + _y;

	                //中間ポイントA
	                radian = aDegree * (Math.PI / 180);
	                _radius = furikake.range1 / 2;
	                cos = Math.cos(radian) * _radius;
	                sin = Math.sin(radian) * _radius;
	                var _ax = cos + _x3;
	                var _ay = sin + _y;
	                //中間ポイントB
	                radian = bDegree * (Math.PI / 180);
	                _radius = furikake.range2 / 2;
	                cos = Math.cos(radian) * _radius;
	                sin = Math.sin(radian) * _radius;
	                var _bx = cos + _x3;
	                var _by = sin + _y;
	                //中間ポイントC
	                radian = cDegree * (Math.PI / 180);
	                _radius = furikake.range1 / 2;
	                cos = Math.cos(radian) * _radius;
	                sin = Math.sin(radian) * _radius;
	                var _cx = cos + _x3;
	                var _cy = sin + _y;
	                //中間ポイントD
	                radian = dDegree * (Math.PI / 180);
	                _radius = furikake.range2 / 2;
	                cos = Math.cos(radian) * _radius;
	                sin = Math.sin(radian) * _radius;
	                var _dx = cos + _x3;
	                var _dy = sin + _y;

	                ctx.fillStyle = furikake.color;
	                ctx.beginPath();
	                ctx.moveTo(ax, ay);
	                ctx.quadraticCurveTo(_ax, _ay, bx, by);
	                ctx.quadraticCurveTo(_bx, _by, cx, cy);
	                ctx.quadraticCurveTo(_cx, _cy, dx, dy);
	                ctx.quadraticCurveTo(_dx, _dy, ax, ay);
	                ctx.closePath();
	                ctx.fill();

	                // let degree = furikake.degree + furikake.speedY;
	                // furikake.degree = degree;
	                // let rad = degree * (Math.PI / 180);
	                // ctx.rotate(rad);
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
	function Furikake(x, degree, color, order, stage) {
	  _classCallCheck(this, Furikake);

	  var radian = degree * (Math.PI / 180);
	  var radius = Math.floor(Math.random() * 10) + 10;
	  this.radius = radius;
	  this.degree = degree;
	  this.radian = radian;
	  this.x = x;
	  if (order > 1) {
	    this.y = -Math.floor(Math.random() * stage.height);
	  } else {
	    this.y = Math.floor(Math.random() * stage.height);
	  }
	  this.dir = Math.floor(Math.random() * 3);
	  this.speedX = (Math.random() * 5 + 1) / 200;
	  var speed = 7;
	  this.speedY = Math.floor((Math.floor(Math.random() * 8) + 2) / speed * 100) / 50;
	  this.range1 = Math.floor(Math.random() * 8) + 8;
	  this.range2 = Math.floor(Math.random() * 8) + 8;
	  this.color = color;
	  this.rotateSpeed = (Math.floor(Math.random() * 5) + 1) / 2;
	  this.rotate = 0;
	  this.effectW = Math.floor(Math.random() * 10) + 10;
	};

	exports.default = Furikake;

/***/ })
/******/ ]);