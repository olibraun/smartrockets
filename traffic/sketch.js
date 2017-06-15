var road;
var car;

function setup() {
  createCanvas(400,400);
  background(51);
  road = new Lane("horizontal",width/2);
  car = new Car(road,20);
}

function draw() {
  road.show();
  car.update();
  car.show();
}
