import Furikake from './furikake.jsx';

let stage;
let ctx;
let x = 0;
let y = 0;
let radius = 0;
let center = {x:window.innerWidth / 2,y:window.innerHeight / 2};
let dpr;
let furikakeNum = 30;
let furikakeArr = [];
let objW = 65;
// let colors = [
//               'rgba(181,112,157,1)',
//               'rgba(222,187,64,1)',
//               'rgba(196,198,195,1)',
//               'rgba(109,111,168,1)',
//               'rgba(104,181,176,1)',
//               'rgba(238,146,162,1)'
//               ];
let colors = [
              'rgba(213,195,109,1)',
              'rgba(247,247,247,1)'
              ];

export default class Motion {
  ///////////////////////////
  /// constructor
  ////////////////////////////
  constructor(){
    this.initCanvas();
  }

  ///////////////////////////
  ////////////////////////////
  initCanvas(){

    stage = document.getElementById('stage2');
    if(!stage || !stage.getContext ) return false;
    ctx = stage.getContext('2d');
    dpr = window.devicePixelRatio || 1;
    stage.width = window.innerWidth * dpr;
    stage.height = window.innerHeight * dpr;
    ctx.scale(dpr,dpr);
    stage.style.width = window.innerWidth + 'px';
    stage.style.height = window.innerHeight + 'px';
    let num = 0

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

    for(let i=0; i<furikakeNum; i++){
      let degree = Math.floor(Math.random() * 360);
      let x = Math.floor(stage.width / furikakeNum) * i + (objW / 2) + 20;
      let color = Math.floor(Math.random() * colors.length);
      color = colors[num];
      num++;
      if(num >= colors.length) num = 0;
      let furikake = new Furikake(x,degree,color,1,stage);
      furikakeArr.push(furikake);
    }

    setTimeout(function(){
      for(let i=0; i<furikakeNum; i++){
        let degree = Math.floor(Math.random() * 360);
        let x = Math.floor(stage.width / furikakeNum) * i + (objW / 2) + 20;
        let color = Math.floor(Math.random() * colors.length);
        color = colors[num];
        num++;
        if(num >= colors.length) num = 0;
        let furikake = new Furikake(x,degree,color,2,stage);
        furikakeArr.push(furikake);
      }
    },10000);

    this.renderFurikake();

  }

  ///////////////////////////
  /// renderFurikake
  ////////////////////////////
  renderFurikake(){

    window.requestAnimationFrame(this.renderFurikake.bind(this));

    ctx.clearRect(0, 0, stage.width, stage.height);

    ctx.fillStyle = 'rgba(125,201,239,1)';

    for(let i=0,len=furikakeArr.length; i<len; i++){
      let furikake = furikakeArr[i];
      if(furikake.dir == 1){
        furikake.dy = Math.floor(Math.cos(furikake.radius) * furikake.effectW);
      }else if(furikake.dir == 2){
        furikake.dy = Math.floor(Math.sin(furikake.radius) * furikake.effectW);
      }else{
        furikake.dy = Math.floor(Math.cos(furikake.radius) * furikake.effectW);
      }
      furikake.radius += furikake.speedX;
      let x = furikake.x + furikake.dy;
      furikake.y  = furikake.y + furikake.speedY;
      let y = furikake.y;
      if(furikake.y > (stage.height + objW)){
        furikake.y = -objW;
      }
      furikake.rotate += furikake.rotateSpeed;

      //頂点座標を計算
      let aDegree = 45 + furikake.rotate;
      let _aDegree = 90 + furikake.rotate;
      let bDegree = 130 + furikake.rotate;
      let _bDegree = 175 + furikake.rotate;
      let cDegree = 215 + furikake.rotate;
      let _cDegree = 260 + furikake.rotate;
      let dDegree = 315 + furikake.rotate;
      let _dDegree = 360 + furikake.rotate;
      //頂点A
      let radian = aDegree * (Math.PI / 180);
      let radius = furikake.range1;
      let cos = Math.cos(radian) * radius;
      let sin = Math.sin(radian) * radius;
      let ax = cos + x;
      let ay = sin + y;
      //頂点B
      radian = bDegree * (Math.PI / 180);
      radius = furikake.range2;
      cos = Math.cos(radian) * radius;
      sin = Math.sin(radian) * radius;
      let bx = cos + x;
      let by = sin + y;
      //頂点C
      radian = cDegree * (Math.PI / 180);
      radius = furikake.range1;
      cos = Math.cos(radian) * radius;
      sin = Math.sin(radian) * radius;
      let cx = cos + x;
      let cy = sin + y;
      //頂点D
      radian = dDegree * (Math.PI / 180);
      radius = furikake.range2;
      cos = Math.cos(radian) * radius;
      sin = Math.sin(radian) * radius;
      let dx = cos + x;
      let dy = sin + y;

      //中間ポイントA
      radian = aDegree * (Math.PI / 180);
      radius = furikake.range1 / 2;
      cos = Math.cos(radian) * radius;
      sin = Math.sin(radian) * radius;
      let _ax = cos + x;
      let _ay = sin + y;
      //中間ポイントB
      radian = bDegree * (Math.PI / 180);
      radius = furikake.range2 / 2;
      cos = Math.cos(radian) * radius;
      sin = Math.sin(radian) * radius;
      let _bx = cos + x;
      let _by = sin + y;
      //中間ポイントC
      radian = cDegree * (Math.PI / 180);
      radius = furikake.range1 / 2;
      cos = Math.cos(radian) * radius;
      sin = Math.sin(radian) * radius;
      let _cx = cos + x;
      let _cy = sin + y;
      //中間ポイントD
      radian = dDegree * (Math.PI / 180);
      radius = furikake.range2 / 2;
      cos = Math.cos(radian) * radius;
      sin = Math.sin(radian) * radius;
      let _dx = cos + x;
      let _dy = sin + y;

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

}

