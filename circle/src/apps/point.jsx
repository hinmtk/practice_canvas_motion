export default class Point {

  ///////////////////////////
  /// constructor
  ////////////////////////////
  constructor(center,radius,degree,r,b){
    var radian = degree * (Math.PI / 180);
    var cos = Math.cos(radian) * radius;
    var sin = Math.sin(radian) * radius;
    this.x = cos + center.x;
    this.y = sin + center.y;
    this.radius = radius;
    this.degree = degree;
    this.radian = radian;
    this.size = Math.floor(Math.random() * 15 + 5);
    //this.size = 8;
    this.opacity = 1;
    this.r = r;
    this.g = 225;
    this.b = b;
    this.fillStyle='rgba('+ this.r +',' + this.g +','+ this.b +','+ this.opacity +')';
    this.speed = Math.random() * 5 + 1;
  }

}