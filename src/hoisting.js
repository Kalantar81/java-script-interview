// hoisting, когда JS берет и перемещает некоторые вещи, functions например, в начало файла,
// тем самым позволяя нам обращаться к ним до их определени

// console.log(sum(1, 7));

// function sum(a, b) {
//     return a + b;
// }

// console.log(i); // we will get undifined, couse it know, that later variable will appear
// var i = 42;
// console.log(i);

// const, let - не подверженны хостингу!
// console.log(aaa); 
// const aaa = 42;
// console.log(aaa);

// function expression and function declaration

// function declaration
function square(num) {
    return num * num;
}

// function expression
// In expression, it works like in const
var square = function(num) {
    return num * num;
}

console.log(square(25));