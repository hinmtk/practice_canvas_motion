import Point from './point.jsx';

let stage;
let ctx;
let motion;
let x = 0;
let y = 0;
let friction = 0.02;
let radius = 0;
let center = {x:window.innerWidth / 2,y:window.innerHeight / 2};
let dpr;
let particles = [];
let particleNum = 10;
let targetPos = 500;
let dx = 1;
let isOver = false;

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

    stage = document.getElementById('stage1');
    if(!stage || !stage.getContext ) return false;
    ctx = stage.getContext('2d');
    dpr = window.devicePixelRatio || 1;
    stage.width = window.innerWidth * dpr;
    stage.height = window.innerHeight * dpr;
    ctx.scale(dpr,dpr);
    stage.style.width = window.innerWidth + 'px';
    stage.style.height = window.innerHeight + 'px';

    this.renderCtx();

  }

  ///////////////////////////
  /// renderCtx
  ////////////////////////////
  renderCtx(){

    center.x = stage.width / 2;
    center.y = stage.height / 2;

    for(let i=0,len=particleNum; i<len; i++){
      let degree = Math.floor(360 / particleNum) * i;
      let r = Math.floor(Math.random() * 100 + 105);
      let b = Math.floor(Math.random() * 125 + 130);
      let point = new Point(center,radius,degree,r,b);
      particles.push(point);
    }

    for(let i=0,len=particleNum; i<len; i++){
      ctx.beginPath();
      ctx.fillStyle = particles[i].fillStyle;
      ctx.arc(particles[i].x,particles[i].y,particles[i].size,0,Math.PI * 2, true);
      ctx.fill();
    }
    this.stageUpdate();

  }

  ///////////////////////////
  /// stageUpdate
  ////////////////////////////
  stageUpdate(){
    window.requestAnimationFrame(this.stageUpdate.bind(this));
    if(isOver){
      ctx.clearRect(0, 0, stage.width, stage.height);
      return;
    }

    ctx.clearRect(0, 0, stage.width, stage.height);

    for(let i=0,len=particleNum; i<len; i++){
      ctx.beginPath();
      //透明度の計算
      let opacity = (targetPos - particles[i].radius) / targetPos;

      if(Math.floor(opacity * 100) < 40){
        opacity = 0;
      }
      particles[i].opacity = opacity;
      let fillStyle='rgba('+ particles[i].r +',' + particles[i].g +','+ particles[i].b +','+ particles[i].opacity +')';
      particles[i].fillStyle = fillStyle;
      ctx.fillStyle = particles[i].fillStyle;

      //x,y軸の計算
      dx = Math.floor((targetPos - particles[i].radius) / 40);
      let radius = particles[i].radius + dx;

      //▼ここ効いて無い
      if(Math.round(radius) >= targetPos){
        isOver = true;
      }

      particles[i].radius = radius;
      let cos = Math.cos(particles[i].radian) * radius;
      let sin = Math.sin(particles[i].radian) * radius;
      particles[i].x = cos + center.x;
      particles[i].y = sin + center.y;
      let size = particles[i].size - 0.2;
      if(size < 1){
        return;
      }
      particles[i].size = size;

      ctx.arc(particles[i].x,particles[i].y,particles[i].size,0,Math.PI * 2, true);
      ctx.fill();
    }
  }

}

