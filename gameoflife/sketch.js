var xsize = 12;
var ysize = 12;
var cells;

var cbox;
var clearButton;
var stepButton;

function make2DArray(cols,rows){
  var arr = new Array(cols);
  for(var i=0;i<arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

function mousePressed() {
  var ncols = floor((width-1)/xsize);
  var nrows = floor((height-1)/xsize);
  for(var i=0;i<ncols;i++){
    for(var j=0;j<nrows;j++){
      if(cells[i][j].contains(mouseX,mouseY)){
        console.log(cells[i][j].neighborCount)
        if(cells[i][j].alive){
          cells[i][j].alive = false;
        }else{
          cells[i][j].alive = true;
        }
        console.log(i,j);
      }
    }
  }
}

function setup() {
  createCanvas(721,721);
  background(51);
  var ncols = floor((width-1)/xsize);
  var nrows = floor((height-1)/xsize);
  cells = make2DArray(ncols,nrows);
  for(var i=0; i<ncols; i++){
    for(var j=0; j<nrows; j++){
      cells[i][j] = new Cell(i,j);
    }
  }
  for(var i=0; i<ncols; i++){
    for(var j=0; j<nrows; j++){
      cells[i][j].countNeighbors();
      cells[i][j].show();
    }
  }
  cbox = createCheckbox('Running');
  clearButton = createButton('Clear all');
  clearButton.mousePressed(clearall);
  stepButton = createButton('Simulate one step.')
  stepButton.mousePressed(step);
}

function clearall(){
  var ncols = floor((width-1)/xsize);
  var nrows = floor((height-1)/xsize);
  for(var i=0; i<ncols; i++){
    for(var j=0; j<nrows; j++){
      cells[i][j].alive = false;
      cells[i][j].nextalive = false;
    }
  }
}

function step(){
  var ncols = floor((width-1)/xsize);
  var nrows = floor((height-1)/xsize);
  for(var i=0; i<ncols; i++){
    for(var j=0; j<nrows; j++){
      cells[i][j].prepare();
    }
  }
  for(var i=0; i<ncols; i++){
    for(var j=0; j<nrows; j++){
      cells[i][j].update();
    }
  }
}

function draw() {
  var ncols = floor((width-1)/xsize);
  var nrows = floor((height-1)/xsize);
  for(var i=0; i<ncols; i++){
    for(var j=0; j<nrows; j++){
      cells[i][j].prepare();
      cells[i][j].show();
    }
  }
  if(cbox.checked()){
    for(var i=0; i<ncols; i++){
      for(var j=0; j<nrows; j++){
        cells[i][j].update();
        //cells[i][j].show();
      }
    }
  }
}
