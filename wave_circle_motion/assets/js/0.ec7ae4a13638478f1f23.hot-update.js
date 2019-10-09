webpackHotUpdate(0,{

/***/ 78:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var stage = void 0;
	var ctx = void 0;
	var motion = void 0;
	var x = 0;
	var y = 0;
	var radius = 0;
	var center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
	var dpr = void 0;
	var angle = 0;
	var speed = 0.1;

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

	      stage = document.getElementById('stage1');
	      if (!stage || !stage.getContext) return false;
	      ctx = stage.getContext('2d');
	      dpr = window.devicePixelRatio || 1;
	      stage.width = window.innerWidth * dpr;
	      stage.height = window.innerHeight * dpr;
	      ctx.scale(dpr, dpr);
	      stage.style.width = window.innerWidth + 'px';
	      stage.style.height = window.innerHeight + 'px';

	      this.renderCtx();
	    }

	    ///////////////////////////
	    /// renderCtx
	    ////////////////////////////

	  }, {
	    key: 'renderCtx',
	    value: function renderCtx() {

	      center.x = stage.width / 2;
	      center.y = stage.height / 2;
	      this.stageUpdate();
	    }

	    ///////////////////////////
	    /// stageUpdate
	    ////////////////////////////

	  }, {
	    key: 'stageUpdate',
	    value: function stageUpdate() {
	      window.requestAnimationFrame(this.stageUpdate.bind(this));

	      ctx.clearRect(0, 0, stage.width, stage.height);

	      y = Math.floor(100 + Math.sin(angle) * 50);
	      x = Math.floor(Math.cos(y));
	      console.log(x);
	      //console.log(100 + Math.sin(angle) * 50);
	      angle += speed;
	      if (angle > 360) angle = 0;

	      ctx.beginPath();
	      ctx.fillStyle = 'rgba(255,255,255,0.7)';
	      ctx.arc(center.x, center.y + y, 20, 0, Math.PI * 2, true);
	      ctx.fill();
	    }
	  }]);

	  return Motion;
	}();

	exports.default = Motion;

/***/ })

})