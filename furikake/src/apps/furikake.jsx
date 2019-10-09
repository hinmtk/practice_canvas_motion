export default class Furikake {

  ///////////////////////////
  /// constructor
  ////////////////////////////
  constructor(x,degree,color,order,stage){
    var radian = degree * (Math.PI / 180);
    var radius = Math.floor(Math.random() * 10) + 10;
    this.radius = radius;
    this.degree = degree;
    this.radian = radian;
    this.x = x;
    if(order > 1){
      this.y = (-(Math.floor(Math.random() * stage.height)));
    }else{
      this.y = ((Math.floor(Math.random() * stage.height)));
    }
    this.dir = Math.floor(Math.random() * 3);
    this.speedX = ((Math.random() * 5) + 1) / 200;
    var speed = 7;
    this.speedY = Math.floor((Math.floor(Math.random() * 8) + 2) / speed * 100) / 50;
    this.range1 = Math.floor(Math.random() * 8) + 8;
    this.range2 = Math.floor(Math.random() * 8) + 8;
    this.color = color;
    this.rotateSpeed = (Math.floor(Math.random() * 5) + 1) / 2;
    this.rotate = 0;
    this.effectW = (Math.floor(Math.random() * 10)) + 10;
  }

}