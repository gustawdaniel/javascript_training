// console.log(this);

function Car() {
  this.name = 'Car';
  this.position = 0;
  this.counter = 0;
}

// Car.prototype.drive = async function (distance) {
//   this.position += distance;
//
//   console.log("THIS 1", this);
//
//   return new Promise(resolve=> {
//     setTimeout(function () {
//
//       console.log("THIS 2", this);
//
//       this.counter ++;
//
//       console.log("NAN", this.counter);
//
//       resolve();
//
//
//
//     }.bind(this), 1000)
//   })
//
// }


Car.prototype.drive = async function (distance) {
  this.position += distance;

  console.log("THIS 1", this);

  return new Promise(resolve=> {
    setTimeout(() => {

      console.log("THIS 2", this);

      this.counter ++;

      console.log("NAN", this.counter);

      resolve();



    }, 1000)
  })

}

const car = new Car();

(async () => {
  console.log("X");

  await car.drive(20);

  console.log(car);
})()
