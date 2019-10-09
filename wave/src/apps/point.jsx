export default class Point {

  ///////////////////////////
  /// constructor
  ////////////////////////////
  constructor(center,radius,degree){
    var radian = degree * (Math.PI / 180);
    var cos = Math.cos(radian) * radius;
    var sin = Math.sin(radian) * radius;
    this.x = cos + center.x;
    this.y = sin + center.y;
    this.radius = radius;
    this.degree = degree;
    this.radian = radian;
    this.speed = ((Math.random() * 5) + 1) / 500;
  }

}