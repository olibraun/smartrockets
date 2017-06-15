var particles = [];
var gravity;
var wind;

function setup() {
  createCanvas(400,400);
  gravity = createVector(0,1);
}

function draw() {
  background(51);
  wind = p5.Vector.random2D();
  wind.setMag(1);
  for(var i=0; i<particles.length; i++){
    var friction = particles[i].vel.copy();
    friction.mult(-1);
    friction.mult(0.1);
    particles[i].applyForce(gravity);
    particles[i].applyForce(friction);
    particles[i].edges();
    particles[i].update();
    particles[i].show();
    if(mouseIsPressed){
      particles[i].applyForce(wind);
    }
  }
}

function mousePressed(){
  var p = new Particle(mouseX,mouseY);
  particles.push(p);
}
