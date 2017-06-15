Car = function(lane,pos){
  this.lane = lane;
  this.pos = pos;

  this.speed = 5;

  this.update = function(){
    this.pos += this.speed;
  }

  this.show = function(){
    noStroke();
    fill(0,200,0);
    var x = this.pos;
    var y = this.lane.pos;
    rect(x,y,10,10);
  }
}
