/* globals noLoop print redraw square key fill keyPressed rotate createCanvas CENTER angleMode rectMode DEGREES random background int height Piece */

/* Field is 10 wide and 20 tall
    so with 5px each: 50 wide and 1000 tall */
const squareSize = 20;

var activePiece = {}; // the piece that is falling
var field = [];

function setup () {
  // for debugging. Uncomment next line to pick EXACTLY that piece.
  // const pieceType = 6;
  let pieceType;
  // Field is 10 wide and 20 tall
  createCanvas(squareSize * 10, squareSize * 20);
  if (pieceType === undefined) activePiece = new Piece(int(random(0, 7)));
  else activePiece = new Piece(pieceType);
  noLoop();
}

function render (fieldList) {
  fieldList.forEach((block) => {
    const row = Math.floor(block.n / 10);
    const col = block.n % 10;
    fill(block.color);
    square(col * squareSize, row * squareSize, squareSize);
  });
}

function draw () {
  print(millis());
  background(0);
  render(activePiece.toField());
}

//  setting the left and right limit
function keyPressed () {
  if (key === 'ArrowLeft') {
    activePiece.shiftLeft();
  } else if (key === 'ArrowRight') {
    activePiece.shiftRight();
  } else if (key === 'ArrowDown') {
    activePiece.shiftDown();
  } else if (key === 'a') {
    activePiece.rotateLeft();
  } else if (key === 'd') {
    activePiece.rotateRight();
  } else if (key === ' ') {
    redraw();
  } else {
    print(key);
  }
}
