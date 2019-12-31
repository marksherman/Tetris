/* globals Timer resizeCanvas noLoop print redraw square key fill createCanvas random background int Piece millis */

/* Field is 10 wide and 20 tall
    so with 5px each: 50 wide and 1000 tall */
let squareSize = 20;

let activePiece = {}; // the piece that is falling
let field = [];

const timer = new Timer();

function setup () {
  // Field is 10 wide and 20 tall
  createCanvas(squareSize * 10, squareSize * 20);
  newPiece();
  render();
  // noLoop();
}

function newPiece () {
  // Creates a new activePiece
  activePiece = new Piece(int(random(0, 7)));
}

function checkDropLimit () {
  if (activePiece.checkDropLimit(field)) {
    console.log('Piece hit bottom');
    addPieceToField();
    newPiece();
  } else {
    console.log('Piece did NOT hit');
  }
}

// takes the activePiece and adds its blocks to the global field
function addPieceToField () {
  field = field.concat(activePiece.toField());
}

function render () {
  print(Date.now());
  checkDropLimit();
  background(0);
  const fieldList = field.concat(activePiece.toField());
  fieldList.forEach((block) => {
    const row = Math.floor(block.n / 10);
    const col = block.n % 10;
    fill(block.color);
    square(col * squareSize, row * squareSize, squareSize);
  });
}

function draw () {
  if (timer.tick()) {
    activePiece.shiftDown();
    render();
  }
}

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
    checkDropLimit();
  } else if (key === '+' || key === '=') {
    squareSize += 1;
    resizeCanvas(squareSize * 10, squareSize * 20);
  } else if (key === '-' || key === '_') {
    squareSize -= 1;
    resizeCanvas(squareSize * 10, squareSize * 20);
  } else {
    print(key);
  }
  render();
}
