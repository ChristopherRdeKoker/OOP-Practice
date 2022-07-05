'use strict';

const part1 = function () {
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
};
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

ford.accelerate();
ford.accelerate();
ford.brake();
ford.accelerate();
//aced it
