/* globals fill rect key keyIsPressed rotate createCanvas CENTER angleMode rectMode DEGREES random background int height Piece */
console.log('5');
var activePiece = {}; // the piece that is falling
var inactivePieces = []; // all the pieces on the screen that are done falling

// calls a random piece in the array
function newActivePiece () {
  activePiece = new Piece(int(random(0, 7)));
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
} */

function draw () {
  background(0);
  activePiece.draw();

  if (activePiece.y < (height - 36)) {
    activePiece.shiftDown();
  } else {
    activePiece.stop();
  }
  if (activePiece.y >= (height - 36)) {
    return newActivePiece();
    // inactivePieces.push(activePiece);
  }
  // inactivePieces.draw;
}

//  setting the left and right limit
/* var boundary = true;
function checkBoundary () {
  if (activePiece.x < 0 || activePiece.x > 250)
    return false;
}
function keyPressed () {
  print('key pressed: ' + key);
  if (key === 'ArrowLeft' && boundary === true) activePiece.shiftLeft();
  if (key === 'ArrowRight' && boundary === true) activePiece.shiftRight();
} */
