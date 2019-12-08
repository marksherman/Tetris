/* globals fill rect key keyIsPressed rotate createCanvas CENTER angleMode rectMode DEGREES random background int height Piece */

var activePiece = {}; // the piece that is falling
var inactivePieces = []; // all the pieces on the screen that are done falling

// calls a random piece in the array
function newActivePiece () {
  activePiece = new Piece(int(random(0, 7)))
}

function setup () {
  createCanvas(250, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  newActivePiece();
}

/* returns a random tetromino type
function randomBlock () {
  var tetromino = int(random(0, 7));
   print(tetromino);
}*/

function draw () {
  background(0);
  activePiece.draw();
  activePiece.shiftDown();

  if ( activePiece.y === (height - 36)) {
    activePiece.stop()
  }
}

function keyPressed () {
  print("key pressed: " + key);
  if (key === 'ArrowLeft') activePiece.shiftLeft();
  if (key === 'ArrowRight') activePiece.shiftRight();
}
