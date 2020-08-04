// function sum(a,b,c) {
//   return a+b+c;
// }

// function sum() {
//     return [].reduce.call(arguments, (a,b) => a+b)
// }

// function sum() {
//   return [...arguments].reduce((a, b) => a + b)
// }
//
// console.log(sum(1, 2)); // NaN
// console.log(sum(1, 2, 3)); // 6
// console.log(sum(1, 2, 3, 4)); // Error

function Car() {
  this.position = 0;
  this.length = 2;
  this['0'] = 4;
  this['1'] = 5;
}

Car.prototype.drive = function (distance) {
  console.log("I am driving");
  this.position += distance;
}

function Person() {
  this.position = 0;
}

Person.prototype.walk = function (distance) {
  console.log("I am walking");
  this.position += distance;
}

const car = new Car();

Person.prototype.walk.call(car, 10);

console.log([].reduce.call(car, (a,b) => a+b))

console.log(car);
