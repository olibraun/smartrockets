function Lane(orientation,position){
  this.orientation = orientation;
  this.pos = position;

  this.show = function(){
    noStroke();
    fill(120);
    if(this.orientation == "horizontal"){
      rect(0,this.pos,width,25);
      stroke(251);
    }else if (this.orientation == "vertical"){
      rect(this.pos,0,25,height);
    }
  }
}
