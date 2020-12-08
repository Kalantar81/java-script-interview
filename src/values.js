// let a = 42;
// let b = a; // b get the numeric value of a
// console.log('a: ' + a + ' b: ' + b);

let a = [1, 2, 3];
let b = a; // מצביע לאותו מקום
b.push(4);
console.log('a: ' + a);
console.log('b: ' + b);

let d =a.concat();
d.push(5);

console.log('a: ' + a);
console.log('d: ' + d);

let c = [1, 2, 3, 4];
console.log(a === b); // true
console.log(a === c); //false

