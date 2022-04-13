// use spread operator to push elements from one array to a second array

let sports = ['soccer', 'basketball']
let moreSports = ['tennis', 'baseball']

sports.push(...moreSports);
console.log(sports);