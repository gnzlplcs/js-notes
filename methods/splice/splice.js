// .splice() method example
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);

console.log(array) // [ 'I', 'am', 'feeling' ]
console.log(newArray) // [ 'really', 'happy' ]

// challenge (remove): We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4) // this removes 4 item, starting from index 1

console.log(arr);

// challenge (add): We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// [
//   'DarkSalmon',
//   'BlanchedAlmond',
//   'LavenderBlush',
//   'PaleTurquoise',
//   'FireBrick'
// ]