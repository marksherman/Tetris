/* globals print */
// Field is 10 wide and 20 tall

// the orientations
const S = 0;
const R = 1;
const L = 3;
const U = 2;
function left (orientation) {
  if (orientation === S) return L;
  else return orientation - 1;
}
function right (orientation) {
  if (orientation === L) return S;
  else return orientation + 1;
}

const shapes = [
  [
    // bar
    [2, 7, 12, 17], // S
    [6, 7, 8, 9], // R
    [2, 7, 12, 17], // U
    [5, 6, 7, 8] // L
  ],
  [
    // reverse L
    [2, 7, 11, 12], // S
    [1, 6, 7, 8], // R
    [2, 3, 7, 12], // U
    [6, 7, 8, 13] // L
  ],
  [
    // normal L
    [2, 7, 12, 13], // S
    [6, 7, 8, 11], // R
    [1, 2, 7, 12], // U
    [3, 6, 7, 8] // L
  ],
  [
    // T
    [2, 6, 7, 8], // S
    [2, 7, 8, 12], // R
    [6, 7, 8, 12], // U
    [2, 6, 7, 12] // L
  ],
  [
    // normal Z
    [6, 7, 12, 13], // S
    [2, 6, 7, 11], // R
    [1, 2, 7, 8], // U
    [3, 7, 8, 12] // L
  ],
  [
    // reverse Z
    [7, 8, 11, 12], // S
    [1, 6, 7, 12], // R
    [2, 3, 6, 7], // U
    [2, 7, 8, 13] // L
  ],
  [
    // ball
    [7, 8, 12, 13], // S
    [7, 8, 12, 13], // R
    [7, 8, 12, 13], // U
    [7, 8, 12, 13] // L
  ]
];
const limits = [
  [
    // bar
    { left: 2, right: 2, bot: 3 }, // S
    { left: 1, right: 4, bot: 1 }, // R
    { left: 2, right: 2, bot: 3 }, // U
    { left: 0, right: 3, bot: 1 } // L
  ],
  [
    // reverse L
    { left: 1, right: 2, bot: 2 }, // S
    { left: 1, right: 3, bot: 1 }, // R
    { left: 2, right: 3, bot: 3 }, // U
    { left: 1, right: 3, bot: 2 } // L
  ],
  [
    // normal L
    { left: 2, right: 3, bot: 2 }, // S
    { left: 1, right: 3, bot: 2 }, // R
    { left: 1, right: 2, bot: 2 }, // U
    { left: 1, right: 3, bot: 1 } // L
  ],
  [
    // T
    { left: 1, right: 3, bot: 1 }, // S
    { left: 2, right: 3, bot: 2 }, // R
    { left: 1, right: 3, bot: 2 }, // U
    { left: 1, right: 2, bot: 2 } // L
  ],
  [
    // normal Z
    { left: 1, right: 3, bot: 2 }, // S
    { left: 1, right: 2, bot: 2 }, // R
    { left: 1, right: 3, bot: 1 }, // U
    { left: 2, right: 3, bot: 2 } // L
  ],
  [
    // reverse Z
    { left: 1, right: 3, bot: 2 }, // S
    { left: 1, right: 2, bot: 2 }, // R
    { left: 1, right: 3, bot: 1 }, // U
    { left: 2, right: 3, bot: 2 } // L
  ],
  [
    // ball
    { left: 2, right: 3, bot: 2 }, // S
    { left: 2, right: 3, bot: 2 }, // R
    { left: 2, right: 3, bot: 2 }, // U
    { left: 2, right: 3, bot: 2 } // L
  ]
];
const colors = [
  [
    // bar
    108, 237, 239
  ],
  [
    // reverse L
    0, 37, 231
  ],
  [
    // normal L
    229, 162, 57
  ],
  [
    // T
    146, 48, 231
  ],
  [
    // normal Z
    221, 47, 33
  ],
  [
    // reverse Z
    110, 234, 71
  ],
  [
    // ball
    241, 238, 79
  ]
];
const nextColor = (() => {
  let next = 0;
  return () => {
    next += 1;
    if (next >= colors.length) next = 0;
    return colors[next];
  };
})();

class Piece {
  // shape should be a number 0-7
  constructor (shapeNumber) {
    this.shapeNumber = shapeNumber;
    this.orientation = S;
    this.col = 0; // column: 0-9
    this.row = 0; // row: 0-19
    this.color = colors[shapeNumber];
    this.updateShape();
  }

  updateShape () {
    this.grid = shapes[this.shapeNumber][this.orientation];
    this.limits = limits[this.shapeNumber][this.orientation];
    this.checkLimits();
  }

  checkLimits () {
    // width of play field goes from 0 - 9
    // if a piece's left limit is 0, that means it can go to col 0, no less
    // if a piece's left limit is 1, that means it can go to col -1
    const realColLeft = this.col + this.limits.left;
    if (realColLeft < 0) {
      this.col -= realColLeft;
      print('shifting right');
    }

    // if left limit is 4 (the max) then the max col is 5
    //  this is based on the field being 10 wide and the piece being 5 wide
    const realColRight = this.col + this.limits.right;
    if (realColRight > 9) {
      this.col -= (realColRight - 9);
      print('shifting left');
    }
  }

  checkDropLimit (field) {
    // Checks the given field list against the global field (passed as arg)
    // if any block of the piece has a block in the field immediately below it,
    //  returns TRUE otherwise false
    const pieceFieldList = this.toField();
    return pieceFieldList.reduce((result, pieceBlock) => {
      const blockBelow = pieceBlock.n + 10; // keep in mind +10 is one row down
      if (blockBelow > 199) { // we're on the bottom of the screen!
        return true;
      }
      let found = field.find((fieldBlock) => {
        return (fieldBlock.n === blockBelow);
      });
      found = found !== undefined;
      return (result || found);
    }, false);
  }

  // translates into game Field coordinate list
  toField () {
    return this.grid.map((n) => {
      let row = Math.floor(n / 5);
      let col = n % 5;

      row += this.row;
      col += this.col;

      return {
        n: (row * 10) + col,
        color: this.color
      };
    });
  }

  shiftLeft () {
    this.col--;
    this.checkLimits();
  }

  shiftRight () {
    this.col++;
    this.checkLimits();
  }

  shiftDown () {
    this.row++;
    this.checkLimits();
  }

  rotateLeft () {
    const old = this.orientation;
    const newo = left(this.orientation);
    this.orientation = newo;
    print(old + ' -L-> ' + newo);
    this.updateShape();
  }

  rotateRight () {
    const old = this.orientation;
    const newo = right(this.orientation);
    this.orientation = newo;
    print(old + ' -R-> ' + newo);
    this.updateShape();
  }
}
