# Tetris
var tetrominos = [

tetrisO = function(x, y, size) {
  fill(255, 200, 0)
  rect(x, y, size, size);
  rect(x, y + 25, size, size);
  rect(x + 25, y, size, size);
  rect(x + 25, y + 25, size, size);
},

tetrisI = function(x, y, size) {
  fill(0, 255, 255)
  rect(x, y, size, size);
  rect(x, y - 25, size, size);
  rect(x, y - 50, size, size);
  rect(x, y - 75, size, size);
},

tetrisT = function(x, y, size) {
  fill(160, 0, 255)
  rect(x, y, size, size);
  rect(x, y + 25, size, size);
  rect(x + 25, y, size, size);
  rect(x - 25, y, size, size);
},

tetrisL = function(x, y, size) {
  fill(0, 0, 255)
  rect(x, y, size, size);
  rect(x, y + 25, size, size);
  rect(x, y - 25, size, size);
  rect(x + 25, y + 25, size, size);
},

tetrisJ = function(x, y, size) {
  fill(230, 130, 0)
  rect(x, y, size, size);
  rect(x, y + 25, size, size);
  rect(x, y - 25, size, size);
  rect(x - 25, y + 25, size, size);
},

tetrisS = function(x, y, size) {
  fill(0, 200, 0)
  rect(x, y, size, size);
  rect(x, y + 25, size, size);
  rect(x + 25, y, size, size);
  rect(x - 25, y + 25, size, size);
},

tetrisZ = function(x, y, size) {
  fill(255, 0, 0)
  rect(x, y, size, size);
  rect(x, y + 25, size, size);
  rect(x - 25, y, size, size);
  rect(x + 25, y + 25, size, size);
}

];

function setup() {
  createCanvas(250, 500);
  rectMode(CENTER);
}


var altitude = 500

var randomBlock = Math.floor(Math.random() * 7);


function draw() {
  background(255);

  if(altitude > 25) {
    tetrominos[randomBlock](100, height - altitude, 25);
    altitude -= 1
    } else {
      tetrominos[randomBlock](100, height + 25, 25);
  }
}
