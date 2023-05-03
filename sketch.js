var space = 50;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  stroke('#5C85FE');
  makeQuilt()
  noLoop()
}

function makeQuilt() {
  let patterns = ['simple','geometric','miniGrid', 'complex','bCircle'];
  let pattern = random(patterns);
  if (pattern=='geometric') {
    geometric();
  }else if (pattern=='miniGrid') {
    miniGrid()
  } else if (pattern=='simple') {
    simpleBlocks();
  } else if (pattern=='complex') {
    complex()
  } else if (pattern=='bCircle') {
    bCircle();
  }  
}

function mousePressed() { 
  clear()
  makeQuilt()
}

//Creates a Simple Block quilting pattern
function simpleBlocks(){
  var space = width/3
  for (x=0;x<width+50;x+=space){
    for (y=0;y<height+50;y+=space){
      line(x,y,x+space,y);
      line(x,y,x,y+space);
    }
  }
}

//Creates a geometric quilting pattern
function geometric(){
  line(0,0,500,500);
  line(500, 0, 0, 500);
  line(width/2, 500,width/2,0);
  line(500, width/2, 0, width/2);
}

//Creates a 4 square grid quilting pattern
function miniGrid(){
  line(width/2, 500,width/2,0);
  line(500, width/2, 0, width/2);
}

//A more realistic, complex quilting block
function complex(){
  geometric();
  simpleBlocks();
}

//A bisected circle quilting block
function bCircle (){
  circle(width/2,height/2, 495);
  miniGrid();
}