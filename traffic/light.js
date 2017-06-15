function Light(lane,x,y){
  this.lane = lane;
  this.red = false;
  this.pos = createVector(x,y);

  this.switchState = function(){
    this.red = !this.red;
  }

  this.show = function(){
    if(this.red){
      fill(255,0,0);
    }else{
      fill(0,255,0);
    }
    rect(this.pos.x,this.pos.y,10,10);
  }
}
