/*
THE FOREACH() METHOD
the forEach() method will execute the same code for each element of an array.
forEach() admits a function as a parameter, or arrow function, or a callback function.
*/

const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts']

// function as parameter
groceries.forEach(function(grocery) {
  console.log(`- ${grocery}`)
});

// arrow function as parameter
groceries.forEach((grocery) => {
  console.log(`- ${grocery}`)
});

// callback function as parameter
function printGrocery(grocery) {
  console.log(`- ${grocery}`)
}

groceries.forEach(printGrocery);