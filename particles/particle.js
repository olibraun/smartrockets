function Particle(x,y){
  this.pos = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.mass = 1;

  this.applyForce = function(v){
    var vv = v.copy();
    vv.div(this.mass);
    this.acc.add(vv);
  }

  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function(){
    fill(251);
    ellipse(this.pos.x,this.pos.y,10,10);
  }

  this.edges = function(){
    if(this.pos.x > width){
      this.pos.x = width;
      this.vel.x *= -1;
    }else if(this.pos.x < 0){
      this.pos.x = 0;
      this.vel.x *= -1;
    }
    if(this.pos.y>height){
      this.pos.y = height;
      this.vel.y *= -1;
    }
  }
}
