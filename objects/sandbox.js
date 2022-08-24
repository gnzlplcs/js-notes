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