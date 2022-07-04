'use strict';

const Person = function (firstName, Dob) {
  this.firstName = firstName;
  this.DateOfBirth = Dob;
  const calcAge = function () {
    2022 - this.DateOfBirth;
  };
};
const leela = new Person('Leela', 3001);
const fry = new Person('Fry', 1980);
const bender = new Person('Bender', 2869);

console.log(leela, fry, bender);
//absolute limit of prototype, returns null. End of prototype scope/range
console.log(leela.__proto__.__proto__.__proto__);
console.log(`------Br-----`);
console.log(Person.prototype);
