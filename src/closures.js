// closures это когда функция имеет доступ до вышестоящего scope
// function sayHelloTo(name) {
//     const message = 'Hello ' + name;

//     return function() {
//         console.log(message);
//     }
// }

// const helloToElena = sayHelloTo('Elena');

// console.log(helloToElena);
// console.log(helloToElena());

// helloToElena();

//----------------------------------------------------------------------------------------

// function createFrameworkManager() {
//     const fw = ['Angular', 'React'];

//     return {
//         print: function() {console.log(fw)},
//         add: function(framework) {fw.push(framework)}
//     };
// }

// const manager = createFrameworkManager()
// console.log(manager);
// manager.add('VueJS');
// manager.print();

//----------------------------------------------------------------------------------------

//settimeout

const fib = [1,2,3,5,8,13];

// In js must write 6 times fib[index] = undefined
// solution change var to let
// for (var index = 0; index < fib.length; index++) {
//     setTimeout(() => {
//         console.log(`fib[${index}] = ${fib[index]}`)
//     }, 1500);
// }

for (var index = 0; index < fib.length; index++) {
    (function(j) {
        setTimeout(() => {
            console.log(`fib[${j}] = ${fib[j]}`)
        }, 1500);
    })(index);

}