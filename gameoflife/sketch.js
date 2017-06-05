var xsize = 15;
var ysize = 15;
var cells;

function make2DArray(cols,rows){
  var arr = new Array(cols);
  for(var i=0;i<arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas(601,601);
  background(51);
  var ncols = floor((width-1)/xsize);
  var nrows = floor((height-1)/xsize);
  cells = make2DArray(ncols,nrows);
  for(var i=0; i<ncols; i++){
    for(var j=0; j<nrows; j++){
      cells[i][j] = new Cell(i,j);
    }
  }
}

function draw() {
  var ncols = floor((width-1)/xsize);
  var nrows = floor((height-1)/xsize);
  for(var i=0; i<ncols; i++){
    for(var j=0; j<nrows; j++){
      cells[i][j].show();
    }
  }
}
