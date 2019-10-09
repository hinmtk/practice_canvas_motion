import $ from 'jquery';
import Sakura from './sakura.js';

let stage;
let ctx;
let center = {x:window.innerWidth / 2,y:window.innerHeight / 2};
let dpr;
let images = ['./img/mask.png'];
let imgArr = [];
let sakuraArr = [];
let sakuraNum = 35;
let objW = 50;
let imageLoaded = false;
let isOpen = false;

export default class Motion {
  ///////////////////////////
  /// constructor
  ////////////////////////////
  constructor(){

    this.initCanvas();
    isOpen = true;
    this.render();
    $('#stage').css({
      'display':'block'
    });

    $('.btn').on('click',(e) => {

      isOpen = true;

      $('.popup').css({
        'display':'block'
      }).animate({
        'margin-top':-335,
        'opacity':0.7
      },400,'swing',(e) => {
        $('.popup').animate({
          'margin-top':-315,
          'opacity':1
        },200,(e) => {

          $('.popup-front').css({
            'display':'block'
          });
          $('#stage').css({
            'display':'block'
          });
          if(imageLoaded){
            this.render();
          }

        });
      });

    });

    // $('#stage').on('click',(e) => {

    //   $('.popup, .popup-front').css({
    //     'opacity':0,
    //     'display':'none'
    //   });

    //   $('#stage').hide();
    //   isOpen = false;
    // });

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
    stage.style.width = stage.width + 'px';
    stage.style.height = stage.height + 'px';

    ctx.save();

    //サクラの花びらオブジェクト生成
    for(let i=0; i<sakuraNum; i++){

      let x = Math.floor(stage.width / sakuraNum) * i + (objW / 2) + 100;
      let y = Math.floor(Math.random() * (stage.height - 200)) + objW;
      let sakura = new Sakura(x,y);
      sakuraArr.push(sakura);

      if(i == sakuraNum-1){
        this.loadImage();
      }

    }

  }

  ///////////////////////////
  /// loadImage
  ////////////////////////////
  loadImage(){

    //画像のロード
    for(let i=0; i<images.length; i++){
      var img = new Image();
      img.onload = () =>{
        imgArr.push(img);
        if(i == images.length-1){
          imageLoaded = true;
        }
      }
      img.src = images[i];
    }
  }

  ///////////////////////////
  /// render
  ////////////////////////////
  render(){

    if(!isOpen) return;
    window.requestAnimationFrame(this.render.bind(this));

    ctx.clearRect(0, 0, stage.width, stage.height);
    ctx.save();

    for(let i=0; i<sakuraArr.length; i++){
      let sakura = sakuraArr[i];
      sakura.update(i);

      let color = 'rgba(251,231,230,0.8)';
      if(i % 2){
        color = 'rgba(248,205,210,0.8)';
      }
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(sakura.ax,sakura.ay);
      ctx.quadraticCurveTo(sakura.bx,sakura.by,sakura.cx,sakura.cy);
      ctx.lineTo(sakura.dx,sakura.dy);
      ctx.lineTo(sakura.ex,sakura.ey);
      ctx.quadraticCurveTo(sakura.fx,sakura.fy,sakura.ax,sakura.ay);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

    }

  }

}

