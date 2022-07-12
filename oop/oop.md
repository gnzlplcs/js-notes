# object oriented programming

## basic javascript object

objects in JS are used to model real-world objects, giving them properties and behavior just like real-world objects.

```js
let duck = {
  name: "Aflac", // property: name
  numLegs: 2 // property: numLegs
};
```

dot notation is used on the object name:

```js
  console.log(duck.name) // Aflac
```

## methods on an object

methods are a type of property. methods are properties that are functions.

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};

duck.sayName();
```

## code more reusable with the `this` keyword

using the `this` keyword help to avoid losing the reference when the variable changes.

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

this is one way to use `this`. in this case, `this` refers to the object that the method is associated with: `duck`.

## constructor function

_constructors_ are functions that create new objects. they define properties and behaviors that will belong to the new object.

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

+ constructors are defined with a capitalized name to distinguish them from other cunctions that are not `constructors`.
+ constructors use the keyword `this` to set properties of the object they will create. this `this` refers to the new object it will create.
+ constructors define properties and methods instead of returninf a value, as regular functions.
