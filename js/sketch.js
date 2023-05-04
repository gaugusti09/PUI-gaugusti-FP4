var cnv; // variable for the canvas size

// The following functions all set up the quiltBlock canvas and render it!
function positionCanvas() {
    var x = (windowWidth - width - 10) / 1.1;
    var y = (windowHeight - height - 50) / 1.1;
    cnv.position(x, y);
}

function setup() {
  cnv=createCanvas(350, 350);
  positionCanvas();
  background('white');
}

function draw() {
  stroke('#5C85FE');
  baseQuilt();
  noLoop();
}

// Resize the canvas to match the current window size
function windowResized() {
  resizeCanvas(windowWidth/2.47, windowHeight/2.87);
}


function baseQuilt(){
  simpleBlocks(); //Draw a base quilt to begin with
}

function makeQuilt() {
  background('white');
  let patterns = ['simple','geometric','miniGrid', 'complex','bCircle'];
  let pattern = random(patterns);
  if (pattern=='geometric') {
    geometric();
  }else if (pattern=='miniGrid') {
    miniGrid()
  } else if (pattern=='simple') {
    simpleBlocks();
  } else if (pattern=='complex') {
    complex();
  } else if (pattern=='bCircle') {
    bCircle();
  }  
}

//this function waits for a 
function mousePressed() { 
  clear();
  makeQuilt();
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
  line(0,0,width,width);
  line(width, 0, 0, width);
  line(width/2, width,width/2,0);
  line(width, width/2, 0, width/2);
}

//Creates a 4 square grid quilting pattern
function miniGrid(){
  line(width/2, width,width/2,0);
  line(width, width/2, 0, width/2);
}

//A more realistic, complex quilting block
function complex(){
  geometric();
  simpleBlocks();
}

//A bisected circle quilting block
function bCircle (){
  circle(width/2,width/2, width-5);
  miniGrid();
}