// __proto__ - gives a prototype of object or class in ES6
// Object.getPrototypeOf() - ES5 syntax

// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }

// Cat.prototype.voice = function() {
//     console.log(`Cat ${this.name} says myay`);
// }

// const cat = new Cat('Kot', 'white');

// console.log(Cat.prototype);
// console.log(cat);
// console.log(cat.__proto__);
// console.log(cat.__proto__ === Cat.prototype);
// cat.voice();


// ------------------------------------------------------------------------

function Person() {}

Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
person.name = 'Vlad';

// checks if property skin exists in class Person()
// console.log('skin' in person);
// console.log(person.legs);

// How define which properties exists in class and which comes from prototype:
// console.log(person.hasOwnProperty('name'));
// console.log(person.hasOwnProperty('skin'));

// Object.create()
const proto = {year: 2019};
const myYear = Object.create(proto);

console.log(myYear.year);

proto.year = 2200;
// with let it will NOT be changed
console.log(myYear.year);

// console.log(myYear.hasOwnProperty('year'));
// console.log(myYear.__proto__ === proto);
