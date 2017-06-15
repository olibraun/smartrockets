var road;
var car;
var light;

function setup() {
  createCanvas(400,400);
  background(51);
  road = new Lane("horizontal",width/2);
  car = new Car(road,20);
  light = new Light(road,width/2,height/2);
}

function draw() {
  road.show();
  car.update();
  car.show();
  light.show();
}

function mousePressed(){
  light.switchState();
}
