# Tetris
var tetrominos = [];

tetrisO = {
  color: (255, 200, 0),
  width: 100,
  length: 400 - altitude,
  size: 25,
  shape: function makeShape(width, length, size) {
    fill(this.color);
    rect(this.width, this.length, this.size, this.size);
    rect(this.width, this.length + 25, this.size, this.size);
    rect(this.width + 25, this.length, this.size, this.size);
    rect(this.width + 25, this.length + 25, this.size, this.size);
  },
  move: function shift() {
    if (key === 'ArrowLeft') {
      this.width -= 25;
    }
    if (key === 'ArrowRight') {
      this.width += 25;
    }
  },
  rotate: function turn90() {
    if (keyIsPressed) {
      if (key === ' ') {
        rotate(90);
      }
    }
  }
}

tetrisI = {
  color: (0, 255, 255),
  width: 100,
  length: 400 - altitude,
  size: 25,
  shape: function makeShape(width, length, size) {
    fill(this.color);
    rect(this.width, this.length, this.size, this.size);
    rect(this.width, this.length + 25, this.size, this.size);
    rect(this.width, this.length + 50, this.size, this.size);
    rect(this.width, this.length - 25, this.size, this.size);
  },
  move: function shift() {
    if (key === 'ArrowLeft') {
      this.width -= 25;
    }
    if (key === 'ArrowRight') {
      this.width += 25;
    }
  },
  rotate: function turn90() {
    if (keyIsPressed) {
      if (key === ' ') {
        rotate(90);
      }
    }
  }
}
tetrisT = {
  color: (160, 0, 255),
  width: 100,
  length: 400 - altitude,
  size: 25,
  shape: function makeShape(width, length, size) {
    fill(this.color);
    rect(this.width, this.length, this.size, this.size);
    rect(this.width, this.length + 25, this.size, this.size);
    rect(this.width + 25, this.length, this.size, this.size);
    rect(this.width - 25, this.length, this.size, this.size);
  },
  move: function shift() {
    if (key === 'ArrowLeft') {
      this.width -= 25;
    }
    if (key === 'ArrowRight') {
      this.width += 25;
    }
  },
  rotate: function turn90() {
    if (keyIsPressed) {
      if (key === ' ') {
        rotate(90);
      }
    }
  }
}
tetrisL = {
  color: (0, 0, 255),
  width: 100,
  length: 400 - altitude,
  size: 25,
  shape: function makeShape(width, length, size) {
    fill(this.color);
    rect(this.width, this.length, this.size, this.size);
    rect(this.width, this.length + 25, this.size, this.size);
    rect(this.width, this.length - 25, this.size, this.size);
    rect(this.width + 25, this.length + 25, this.size, this.size);
  },
  move: function shift() {
    if (key === 'ArrowLeft') {
      this.width -= 25;
    }
    if (key === 'ArrowRight') {
      this.width += 25;
    }
  },
  rotate: function turn90() {
    if (keyIsPressed) {
      if (key === ' ') {
        rotate(90);
      }
    }
  }
}
tetrisJ = {
  color: (230, 130, 0),
  width: 100,
  length: 400 - altitude,
  size: 25,
  shape: function makeShape(width, length, size) {
    fill(this.color);
    rect(this.width, this.length, this.size, this.size);
    rect(this.width, this.length + 25, this.size, this.size);
    rect(this.width, this.length - 25, this.size, this.size);
    rect(this.width - 25, this.length + 25, this.size, this.size);
  },
  move: function shift() {
    if (key === 'ArrowLeft') {
      this.width -= 25;
    }
    if (key === 'ArrowRight') {
      this.width += 25;
    }
  },
  rotate: function turn90() {
    if (keyIsPressed) {
      if (key === ' ') {
        rotate(90);
      }
    }
  }
}
tetrisS = {
  color: (0, 200, 0),
  width: 100,
  length: 400 - altitude,
  size: 25,
  shape: function makeShape(width, length, size) {
    fill(this.color)
    rect(this.width, this.length, this.size, this.size);
    rect(this.width, this.length + 25, this.size, this.size);
    rect(this.width + 25, this.length, this.size, this.size);
    rect(this.width - 25, this.length + 25, this.size, this.size);
  },
  move: function shift() {
    if (key === 'ArrowLeft') {
      this.width -= 25;
    }
    if (key === 'ArrowRight') {
      this.width += 25;
    }
  },
  rotate: function turn90() {
    if (keyIsPressed) {
      if (key === ' ') {
        rotate(90);
      }
    }
  }
}
tetrisZ = {
  color: (255, 0, 0),
  width: 100,
  length: 400 - altitude,
  size: 25,
  shape: function makeShape(width, length, size) {
    fill(this.color)
    rect(this.width, this.length, this.size, this.size);
    rect(this.width, this.length + 25, this.size, this.size);
    rect(this.width - 25, this.length, this.size, this.size);
    rect(this.width + 25, this.length + 25, this.size, this.size);
  },

  move: function shift() {
    if (key === 'ArrowLeft') {
      this.width -= 25;
    }
    if (key === 'ArrowRight') {
      this.width += 25;
    }
  },
  rotate: function turn90() {
    if (keyIsPressed) {
      if (key === ' ') {
        rotate(90);
      }
    }
  }
}

tetrominos.push(tetrisO, tetrisI, tetrisT, tetrisL, tetrisJ, tetrisS, tetrisZ);

function setup() {
  createCanvas(250, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
}

var altitude = 500
var gravity = 1

function randomBlock() {
  var tetromino = int(random(0, 8))
  //print(tetromino);
  return tetromino;
}

function draw() {
  background(0);

  if (altitude < height) {
    altitude -= gravity;
    tetrominos[randomBlock()];
  } else {
    gravity = 0;
  }

  /* var hit = false;
   hit = collideRectRect();

   if (hit === true) {
     gravity = 0;
     tetrominos[randomBlock()](x, y, size);
   } */
}
