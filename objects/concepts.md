# objects

+ _objects_ are arbitrary collections of properties.

  ```javascript
  // objects can be created with braces as an expression
  let objectSample = {
    propOne: false,
    sampleArr: ['elementOne', 'elementTwo', 'elementThree'],
  }

  console.log(objectSample.propOne) // false
  console.log(objectSample.propTwo) // undefined

  objectSample.propTwo = true;
  console.log(objectSample.propTwo) // true
  ```

+ reading a property that doen's t exist will give us the value `undefined`.
+ the binary in operator returns a boolean result: true is the property (in string form) exists in the object.

  ```javascript
  console.log('propOne' in objectSample) // true
  console.log('propThree' in objectSample) // false
  ```

## `Object.keys()` function

+ this function returns an array of string with the names of the object's properties.

  ```javascript
  let propertiesArr = Object.keys(objectSample);
  console.log(propertiesArr) // [ 'propOne', 'sampleArr', 'propTwo' ]
  ```

## `Object.assign()` function

+ this function copies all properties from one object into another.
+ it needs to initialize with an empty or existing object, and pass in args.

  ```javascript
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
  ```
  