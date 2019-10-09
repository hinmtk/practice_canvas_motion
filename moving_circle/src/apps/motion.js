let stage;
let ctx;
let x = 0;
let y = 0;
let speed = 1;
let radius = 300;
let center = {x:window.innerWidth / 2,y:window.innerHeight / 2};
let dpr;

import $ from 'jquery';

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

    stage = document.getElementById('stage');
    if(!stage || !stage.getContext ) return false;
    ctx = stage.getContext('2d');
    dpr = window.devicePixelRatio || 1;
    stage.width = window.innerWidth * dpr;
    stage.height = window.innerHeight * dpr;
    ctx.scale(dpr,dpr);
    stage.style.width = window.innerWidth + 'px';
    stage.style.height = window.innerHeight + 'px';
    let num = 0

    this.render();

  }

  ///////////////////////////
  /// render
  ////////////////////////////
  render(){

    window.requestAnimationFrame(this.render.bind(this));

    ctx.clearRect(0, 0, stage.width, stage.height);

    ctx.fillStyle = 'rgba(125,201,239,1)';
    ctx.beginPath();
    let x = radius * Math.cos(speed) + center.x;
    let y = radius * Math.sin(speed) + center.y;
    speed += 0.08;
    ctx.arc(x,y,10,0,Math.PI * 2, true);
    ctx.fill();


  }

}

