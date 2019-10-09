let stage;
let ctx;
let motion;
let x = 0;
let y = 0;
let radius = 0;
let center = {x:window.innerWidth / 2,y:window.innerHeight / 2};
let dpr;
let angle = 0;
let speed = 0.1;

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

    this.stageUpdate();

  }

  ///////////////////////////
  /// stageUpdate
  ////////////////////////////
  stageUpdate(){
    window.requestAnimationFrame(this.stageUpdate.bind(this));

    ctx.clearRect(0, 0, stage.width, stage.height);

    y = Math.floor(100 + Math.sin(angle) * 50);
    //console.log(100 + Math.sin(angle) * 50);
    angle += speed;
    x += 5;
    if(angle > 360) angle = 0;
    if(x > window.innerWidth){
      x = 0;
    }

    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.arc(x,center.y + y,20,0,Math.PI * 2, true);
    ctx.fill();
  }

}

