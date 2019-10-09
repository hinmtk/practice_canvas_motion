let stage;
let ctx;
let x = 0;
let y = 0;
let radius = 0;
let center = {x:window.innerWidth / 2,y:window.innerHeight / 2};
let dpr;
let point1 = { x:0, y:0, speed:0.03, angle:0 };
let point1_2 = { x:0, y:0, speed:0.01, angle:0 };
let point2 = { x:Math.floor(window.innerWidth / 3) * 1, y:0, speed:0.02, angle:0 };
let point3 = { x:Math.floor(window.innerWidth / 3) * 2, y:0, speed:0.03, angle:0 };
let point3_2 = { x:Math.floor(window.innerWidth / 3) * 2, y:0, speed:0.02, angle:0 };
let point4 = { x:window.innerWidth, y:0, speed:0.04, angle:0 };
let point5 = { x:Math.floor(window.innerWidth / 3) * 4, y:0, speed:0.03, angle:0 };

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

    this.renderWave();

  }

  ///////////////////////////
  /// renderWave
  ////////////////////////////
  renderWave(){
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
    var grad  = ctx.createLinearGradient(0,0,0,stage.height);
    grad.addColorStop(0,'rgba(248,229,233,0.4)');
    grad.addColorStop(0.8,'rgba(248,229,233,0.7)');
    grad.addColorStop(1,'rgba(248,229,233,0.9)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(point1.x,stage.height - 100 + point1.y);
    ctx.bezierCurveTo(
      (point2.x - point1.x) / 2 + point1.x,(point2.y - point1.y) / 2 + point1.y + stage.height - 100,
      (point3.x - point2.x) / 2 + point2.x,(point3.y - point2.y) / 2 + point2.y + stage.height - 100,
      point4.x , stage.height - 100 + point4.y
    );
    ctx.lineTo(stage.width,stage.height);
    ctx.lineTo(0,stage.height);
    ctx.fill();

    //2つめの波
    var grad  = ctx.createLinearGradient(0,0,0,stage.height);
    grad.addColorStop(0,'rgba(240,219,223,0.3)');
    grad.addColorStop(0.4,'rgba(240,219,223,0.3)');
    grad.addColorStop(1,'rgba(240,219,223,0.8)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(point1_2.x,stage.height - 100 + point1_2.y);
    ctx.bezierCurveTo(
      (point3_2.x - point2.x) / 2 + point2.x,(point3_2.y - point2.y) / 2 + point2.y + stage.height - 100,
      (point4.x - point3.x) / 2 + point3.x,(point4.y - point3.y) / 2 + point3.y + stage.height - 100,
      point5.x , stage.height - 100 + point5.y
    );
    ctx.lineTo(stage.width,stage.height);
    ctx.lineTo(0,stage.height);
    ctx.fill();

    //arc
    ctx.fillStyle = 'rgba(241,229,241,1)';
    ctx.beginPath();
    ctx.arc((point2.x - point1.x) / 2 + point1.x,(point2.y - point1.y) / 2 + point1.y + stage.height - 100,10,0,Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc((point3.x - point2.x) / 2 + point2.x,(point3.y - point2.y) / 2 + point2.y + stage.height - 100,10,0,Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc((point4.x - point3.x) / 2 + point3.x,(point4.y - point3.y) / 2 + point3.y + stage.height - 100,10,0,Math.PI * 2, true);
    ctx.fill();

  }

}

