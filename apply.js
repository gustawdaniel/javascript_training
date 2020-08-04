function Rectangle() {
  this.heigth = 0
}

Rectangle.prototype.volume = function (a,b) {
  return this.heigth * a * b;
}

function Cube (h) {
  this.heigth = h;
}

const c = new Cube(1);

console.log(Rectangle.prototype.volume.call(c, 2, 4));
console.log(Rectangle.prototype.volume.apply(c, [2, 4]));
