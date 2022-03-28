/*
  EXAMPLE 1
*/

// callback function
function isBigEnough(value) {
  return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

console.log(filtered); // [12, 130, 44]

// same function with arrow function
let filtered2 = [12, 5, 8, 130, 44].filter((value) => value >= 10);

console.log(filtered2); // [12, 130, 44]
