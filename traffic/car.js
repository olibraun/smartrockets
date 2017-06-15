Car = function(lane,pos){
  this.lane = lane;
  this.pos = pos;
  this.orientation = this.lane.orientation;

  this.speed = 5;

  this.update = function(){
    this.edges();
    //Traffic light behavior
    var d = abs(this.pos-light.pos.x);
    if(light.red && light.lane == this.lane && d < 25){
      this.speed--;
    }else{
      this.speed++;
    }
    this.speed = constrain(this.speed,0,6);
    this.pos += this.speed;
  }

  this.edges = function(){
    if(this.orientation == "horizontal"){
      // console.log("if1");
      if(this.pos > width){
        // console.log("if2");
        this.pos = -50;
      }
      if(this.pos < -50){
        this.pos = width;
      }
    }
  }

  this.show = function(){
    stroke(0);
    fill(0,200,0);
    if(this.orientation == "horizontal"){
      var x = this.pos;
      var y = this.lane.pos + 2;
      rect(x,y,50,21);
      line(x+10,y,x+10,y+21);
      line(x+40,y,x+40,y+21);
    }
  }
}
