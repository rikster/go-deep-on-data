//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
//checks EVERY el to see if it returns true
let numbers = [1, 30, 39, 29, 10, 13];

let graterThan29 = numbers.every(function(num, index, array) {
    return num > 20;
})

console.log(graterThan29);

// function isBigEnough(element, index, array) {
//     return element >= 10;
// }
// [12, 5, 8, 130, 44].every(isBigEnough);   // false
// [12, 54, 18, 130, 44].every(isBigEnough); // true
