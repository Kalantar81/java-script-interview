// Immediate Invoked Function Expression
let result = [];

// for (var index = 0; index < 5; index++) {
//     result.push(function() {console.log(index)});
// }

// result[2]();
// result[4]();

for (var index = 0; index < 5; index++) {
    (function() {
        var j = index;
        result.push(function() {console.log(j)});
    })();
}

result[2]();
result[4]();
console.log(result);