// context определяет как функция была вызвана. Work with 'this'

// const person = {
//     surname: 'Stark',
//     knows: function(what, name) {
//         console.log(`You know ${what}, ${name} ${this.surname}`) // 'this' belongs to person
//     }
// };

// const john = {surname: 'Snow'};

// person.knows('all', 'Bran');

// // call method knows() in the context of 'john'
// // method call make a rewriting to function knows()
// // First param, is a new context(john), and then other params, that function needs
// // 'this' in this call will be Object john
// person.knows.call(john, 'nothing', 'John');

// // syntax for ES6
// person.knows.call(john, ...['nothing', 'John']);

// // the difference between call() and apply, is that apply get only two params:
// // 1 - new context, 2 - array of params for function
// person.knows.apply(john,['nothing', 'John']);

// // bind not call a knows() function, it returns a new function, 
// // that you can call emidiatly or later
// person.knows.bind(john, 'nothing', 'John')();

// const newFunc = person.knows.bind(john, 'nothing', 'John');
// newFunc();

//--------------------------------------------------------------------------------------------

// function Person(name, age) { 
//     this.name = name;
//     this.age = age;

//     console.log(this);
//  }

 // Instance of class Person()
//  const elena = new Person('Elena', 20);

 function logThis() {
     console.log(this);
 }

// явная передача context
//  const obj = {num: 30};

//  logThis.apply(obj);
//  logThis.call(obj);
//  logThis.bind(obj)();

//  // Emplicive - не явная передача context
//  const animal = {
//      legs: 4,
//      logThis:  function() {
//         console.log(this);
//     }
//  }

//  animal.logThis();

// --------------------------------------------------------------------------

// arrow functions not create its own context

function Cat(color) {
    this.color = color;
    console.log('This ', this);
    (() => {console.log('From arrow func():', this)})();
}

new Cat('red');
