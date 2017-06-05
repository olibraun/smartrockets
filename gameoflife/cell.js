function Cell(i,j){
  this.i=i;
  this.j=j;
  this.pos = createVector(this.i*xsize,this.j*ysize);
  this.alive = false;
  //Test
  if(random(1)<0.5){
    this.alive = true;
  }

  this.show = function(){
    stroke(51);
    strokeWeight(2);
    if(this.alive){
      fill(255);
    }else{
      fill(0);
    }
    rect(this.pos.x,this.pos.y,xsize,ysize);
  }
}
