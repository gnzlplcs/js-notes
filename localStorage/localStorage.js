
// set an item
const myName = 'Gonzalo';
localStorage.setItem('userName', myName);

// get an item
const getFromLocalStorage = localStorage.getItem('userName');
console.log(`data from localStorage: ${getFromLocalStorage}`);

// remove an item
localStorage.removeItem('userName')
