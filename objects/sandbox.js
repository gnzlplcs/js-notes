let objectSample = {
  propOne: false,
  sampleArr: ['elementOne', 'elementTwo', 'elementThree'],
}

console.log(objectSample.propOne) // false
console.log(objectSample.propTwo) // undefined

// assign a new property
objectSample.propTwo = true;
console.log(objectSample.propTwo) // true

// in operator
console.log('propOne' in objectSample) // true
console.log('propThree' in objectSample) // false

// Object.keys()
let propertiesArr = Object.keys(objectSample);
console.log(propertiesArr) // [ 'propOne', 'sampleArr', 'propTwo' ]

// Object.assign()
const objectSampleTwo = {
  propFour: 'string',
  propFive: 21
}

const newObj = Object.assign({}, objectSample, objectSampleTwo)
console.log(newObj)
/*
{
  propOne: false,
  sampleArr: [ 'elementOne', 'elementTwo', 'elementThree' ],
  propTwo: true,
  propFour: 'string',
  propFive: 21
}
*/

// mutability

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 == object2) // true
console.log(object1 == object3) // false

object1.value = 15
console.log(object2.value) // 15
console.log(object3.value) // 10

const score = { visitors: 0, home: 0 };
score.visitors = 1;
score = {visitors: 1, home: 0}
console.log(score) // TypeError: Assignment to constant variable