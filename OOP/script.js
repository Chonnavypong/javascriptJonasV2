const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
  return this.speed;
};

Car.prototype.break = function () {
  return (this.speed -= 5);
};

// const c1 = new Car("Toyota", 120);
// const c2 = new Car("BMW", 95);

// console.log(c1.accelerate(), c1.break());
// console.log(c2.accelerate(), c2.break());
// c1.accelerate();
// c1.accelerate();

// // Challenge 2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make
//     this.speed = speed
//   }

//   accelerate(){
//     this.speed += 10
//     console.log(`${this.make} is going at ${this.speed} km/h`)
//   }

//   break() {
//     this.speed -= 5
//     console.log(`${this.make} is going at ${this.speed} km/h`)
//   }

//   get speedUS() {
//     return this.speed / 1.6
//   }

//   set speedUS(speed){
//     this.speed = speed * 1.6
//   }

// }

// const x = new CarCl('GM', 120)

// console.log(x.speedUS)
// x.accelerate()
// x.accelerate()
// x.accelerate()
// x.speedUS = 50
// console.log(x)

/// Challenge 3


const EV = function(make, speed, battery){
  Car.call(this, make, speed)
  this.battery = battery
}

EV.prototype = Object.create(Car.prototype)
EV.prototype.constructor = EV

EV.prototype.accelerate = function() {
  this.speed += 20
  console.log(`Speed is ${this.speed}`)
  return this.speed
}

EV.prototype.chargeBattery = function(chargeTo) {
  this.battery = chargeTo
  console.log(`Battery have to charge to ${this.battery}`)
}

const Tesla = new EV('Tesla', 120, 23)

console.dir(EV.prototype.constructor)
Tesla.accelerate()
Tesla.accelerate()
Tesla.accelerate()
Tesla.chargeBattery(90)
console.log(Tesla.accelerate())
