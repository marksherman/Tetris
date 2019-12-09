/* globals fill rect  width */

var tetrisO = {
  color: [255, 200, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
    rect(x + 25, y + 25, this.size, this.size);
  }
};
var tetrisI = {
  color: [0, 255, 255],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x, y - 25, this.size, this.size);
    rect(x, y - 50, this.size, this.size);
  }
};
var tetrisT = {
  color: [160, 0, 255],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
    rect(x - 25, y, this.size, this.size);
  }
};
var tetrisL = {
  color: [0, 0, 255],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x, y - 25, this.size, this.size);
    rect(x + 25, y + 25, this.size, this.size);
  }
};
var tetrisJ = {
  color: [230, 130, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x, y - 25, this.size, this.size);
    rect(x - 25, y + 25, this.size, this.size);
  }
};
var tetrisS = {
  color: [0, 200, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x + 25, y, this.size, this.size);
    rect(x - 25, y + 25, this.size, this.size);
  }
};
var tetrisZ = {
  color: [255, 0, 0],
  size: 25,
  shape: function (x, y) {
    fill(this.color);
    rect(x, y, this.size, this.size);
    rect(x, y + 25, this.size, this.size);
    rect(x - 25, y, this.size, this.size);
    rect(x + 25, y + 25, this.size, this.size);
  }
};

var tetrominos = [tetrisO, tetrisI, tetrisT, tetrisL, tetrisJ, tetrisS, tetrisZ];

class Piece {
  // shape should be a number 0-7
  constructor (shapeNumber) {
    this.x = (width / 2) + 12;
    this.y = 0;
    this.shapeNumber = shapeNumber;
    this.template = tetrominos[shapeNumber];
    this.draw = function () {
      console.log('starting draw for shape ' + shapeNumber);
      this.template.shape(this.x, this.y);
    };
    this.shiftLeft = function () { this.x -= 25; };
    this.shiftRight = function () { this.x += 25; };
    this.shiftDown = function () { this.y += 1; };
    this.stop = function () { this.y += 0; };
  }
}
