'use strict';

// const part1 = function () {
const Person = function (firstName, Dob) {
  this.firstName = firstName;
  this.DateOfBirth = Dob;
};

const leela = new Person('Leela', 3001);
const fry = new Person('Fry', 1980);
const bender = new Person('Bender', 2869);

console.log(leela, fry, bender);
//absolute limit of prototype, returns null. End of prototype scope/range
console.log(leela.__proto__.__proto__.__proto__);
console.log(`------Br-----`);
console.log(Person.prototype);

// console.log(fry.calcAge());

Person.prototype.calcAge = function () {
  console.log(`${Math.abs(2022 - this.DateOfBirth)}`);
};

leela.calcAge();
bender.calcAge();

Person.prototype.GreetMessageMr = function () {
  console.log(`Good morning Mr.${this.firstName[0]}`);
};
Person.prototype.GreetMessageMs = function () {
  console.log(`Good morning Ms.${this.firstName[0]}`);
};

leela.GreetMessageMs();
fry.GreetMessageMr();
// };
///////////////////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  //speed = curSpeed in km/h
  this.make = make;
  this.speed = speed;
  console.log(`${make} going at ${speed}km/h`);
};

const bMW = new Car(`BMW`, 120);
const Mercedes = new Car(`Mercedes`, 95);

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  //this.speed +=;
  console.log(`${this.make} going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  //this.speed -=;
  console.log(`${this.make} going at ${this.speed}km/h`);
};

bMW.accelerate();

const ford = new Car(`Ford`, 80);
// console.log(ford);

// ford.accelerate();
// // ford.accelerate();
// ford.brake();
// ford.accelerate();
//aced it
//////////////////////////////
//get + set playaround

//ES6
class Personzl {
  constructor(name, dateOB) {
    this.name = name;
    this.dateOB = dateOB;
  }

  get age() {
    return 2022 - this.dateOB;
  }
}
console.log(`---------BR------------`);
const dave = new Personzl('Dave', 1980);
const jess = new Personzl('Jess', 1985);
const joe = new Personzl('Joe', 2001);
const chris = new Personzl('Chris', 1990);

// console.log(dave, chris, jess);
// console.log(chris.age);
////////////////////////////

// //Coding challenge #2
// class Car1 {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
//   accelerate() {
//     this.speed = this.speed + 10;
//     //this.speed +=;
//     console.log(`${this.make} going at ${this.speed}km/h`);
//   }

//   brake() {
//     this.speed = this.speed - 5;
//     //this.speed -=;
//     console.log(`${this.make} going at ${this.speed}km/h`);
//   }
// }

// const bmw1 = new Car1('bmw1', 120);
// const mercedes1 = new Car1('merc1', 95);
// const ford1 = new Car1('ford1', 120);
// console.log(bmw1);

// ford1.brake();
// ford1.brake();
// ford1.accelerate();

// ford1.speedUS = 50;

// console.log(ford1);
// //gg
////////////////
//inheritance practice

const Person123 = function (firstName, birth) {
  this.firstName = firstName;
  this.birth = birth;
};

Person123.prototype.calcAge = function () {
  console.log(2037 - this.birth);
};

const Studentz = function (firstName, birth, course) {
  Person123.call(this, firstName, birth);
  this.course = course;
};

Studentz.prototype.introduce = function () {
  console.log(
    `My name is ${this.firstName} and I aim to become a ${this.course}.`
  );
};

const mike = new Studentz('Mike', 2002, 'Chef');
console.log(mike);
mike.introduce();
///////////////////////////////////////////////////////
//Code challenge #3

// const NewCar = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const EV = function (make, speed, charge) {
//   NewCar.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(NewCar.prototype);

// EV.prototype.accelerate = function () {
//   this.speed += 10;
//   this.charge -= 1;
//   console.log(
//     `'${this.make}' going at ${this.speed} km/h, with a charge of ${this.charge}%.`
//   );
// };

// EV.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(
//     `'${this.make}' going at ${this.speed} km/h, with a charge of ${this.charge}%.`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);

// // console.log(tesla.__proto__);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(`'${this.make}' charged to ${chargeTo}% battery again.`);
// };
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.brake();
// tesla.brake();
// tesla.brake();
// tesla.brake();
// tesla.brake();
// tesla.accelerate();
// tesla.chargeBattery(90);
// tesla.accelerate();
//////////////////////////////////////////////////
//Summary using ES6 classes + encapsulation(private)

class Student extends Person {
  university = 'University of DZ';
  #studyHours = 0;
  #course;
  static numSubjects = 10;

  constructor(Fullname, birthYear, startYear, course) {
    super(Fullname, birthYear);
    this.startYear = startYear;
    this.#course = course;
  }

  introduce() {
    console.log(`I study ${this.course} at ${this.university}`);
  }

  study(h) {
    this.#studyHours += h;
    this.#makeCoffee();
  }

  #makeCoffee() {
    console.log(`One Cuppo Joe right up ☕`);
  }

  set testScore(score) {
    this._testScore = score <= 20 ? score : 0;
  }

  get testScore() {
    return this._testScore;
  }

  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects`);
  }
}

const maeve = new Student('Maeve Jones', 2002, 2030, 'Marine Biology');
console.log(maeve);
////////////////////////////
///////////////////////////
////////////////////////////
//Coding challenge #4
class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// const tesla4 = new CarCL('tesla', 120);
// console.log(tesla4);
// tesla4.accelerate();

class EVCL extends CarCL {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 10;
    this.#charge -= 1;
    console.log(
      `'${this.make}' going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%.`
    );
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(
      `'${this.make}' going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%.`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`'${this.make}' charged to ${this.#charge}% battery again.`);
    return this;
  }
}

const rivian = new EVCL('Rivian', 120, 23);
rivian
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(55)
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(70);
