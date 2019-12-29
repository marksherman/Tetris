/* globals noLoop print redraw square key fill createCanvas random background int Piece millis */

/* Field is 10 wide and 20 tall
    so with 5px each: 50 wide and 1000 tall */
const squareSize = 20;

let activePiece = {}; // the piece that is falling
let field = [];

function setup () {
  // Field is 10 wide and 20 tall
  createCanvas(squareSize * 10, squareSize * 20);
  newPiece();
  noLoop();
}

function newPiece () {
  // Creates a new activePiece
  activePiece = new Piece(int(random(0, 7)));
}

// takes the activePiece and adds its blocks to the global field
function addPieceToField () {
  field = field.concat(activePiece.toField());

  newPiece();
  redraw();
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
  render(field);
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
    addPieceToField();
  } else {
    print(key);
  }
}
