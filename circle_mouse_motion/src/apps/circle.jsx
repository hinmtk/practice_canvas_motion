import Point from './point.jsx';

let stage;
let ctx;
let x = 0;
let y = 0;
let center = {x:window.innerWidth / 2,y:window.innerHeight / 2};
let dpr;
let particleNum = 4;
let radius = window.innerWidth / 3;
let particles = [];
let point1 = { x:0, y:0, speed:0.04, radius:0 };
let point2 = { x, y, speed:0.03, radius:0 };
let point3 = { x, y, speed:0.04, radius:0 };
let kappa = 0.5522848;
let o = radius * kappa;
let controlPoint1 = {};
let controlPoint2 = {};
let controlPoint3 = {};
let controlPoint4 = {};
let controlPoint5 = {};
let controlPoint6 = {};
let controlPoint7 = {};
let controlPoint8 = {};

export default class Circle {
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

    ctx.fillStyle = 'rgba(232,206,213,1)';

    for(let i=0,len=particleNum; i<len; i++){
      let degree = Math.floor(360 / particleNum) * i;
      let point = new Point(center,radius,degree);
      particles.push(point);
    }

    for(let i=0,len=particleNum; i<len; i++){

      // ctx.fillStyle = 'rgba(255,255,255,1)';
      // ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.beginPath();
      ctx.arc(particles[i].x,particles[i].y,10,0,Math.PI * 2, true);
      ctx.fill();

    }

    this.renderCircle();

  }

  ///////////////////////////
  /// renderCircle
  ////////////////////////////
  renderCircle(){
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
    let point1x = particles[0].x + particles[0].dy;
    let point1y = particles[0].y + particles[0].dy;
    let point2x = particles[1].x + particles[1].dy;
    let point2y = particles[1].y + particles[1].dy;
    let point3x = particles[2].x + particles[2].dy;
    let point3y = particles[2].y + particles[2].dy;
    let point4x = particles[3].x + particles[3].dy;
    let point4y = particles[3].y + particles[3].dy;

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
    ctx.bezierCurveTo(
      controlPoint2.x, controlPoint2.y,
      controlPoint7.x, controlPoint7.y,
      point4x , point4y
    );
    ctx.bezierCurveTo(
      controlPoint8.x, controlPoint8.y,
      controlPoint6.x, controlPoint6.y,
      point3x , point3y
    );
    ctx.bezierCurveTo(
      controlPoint5.x, controlPoint5.y,
      controlPoint4.x, controlPoint4.y,
      point2x , point2y
    );
    ctx.bezierCurveTo(
      controlPoint3.x, controlPoint3.y,
      controlPoint1.x, controlPoint1.y,
      point1x , point1y
    );
    ctx.fill();

    // for(let i=0,len=particleNum; i<len; i++){
    //   ctx.beginPath();
    //   ctx.arc(particles[i].x + particles[i].dy,particles[i].y + particles[i].dy,10,0,Math.PI * 2, true);
    //   ctx.fill();
    // }

    ctx.fillStyle = 'rgba(255,19,113,1)';
    ctx.beginPath();
    ctx.arc(controlPoint1.x,controlPoint1.y,10,0,Math.PI * 2, true);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.beginPath();
    ctx.arc(controlPoint2.x,controlPoint2.y,10,0,Math.PI * 2, true);
    ctx.fill();

    ctx.fillStyle = 'rgba(181,219,241,1)';
    ctx.beginPath();
    ctx.arc(controlPoint3.x,controlPoint3.y,10,0,Math.PI * 2, true);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.beginPath();
    ctx.arc(controlPoint4.x,controlPoint4.y,10,0,Math.PI * 2, true);
    ctx.fill();

    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.beginPath();
    ctx.arc(controlPoint5.x,controlPoint5.y,10,0,Math.PI * 2, true);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.beginPath();
    ctx.arc(controlPoint6.x,controlPoint6.y,10,0,Math.PI * 2, true);
    ctx.fill();

    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.beginPath();
    ctx.arc(controlPoint7.x,controlPoint7.y,10,0,Math.PI * 2, true);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.beginPath();
    ctx.arc(controlPoint8.x,controlPoint8.y,10,0,Math.PI * 2, true);
    ctx.fill();

  }

}

