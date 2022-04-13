# `.push()` method

method | returns | apply
---|---|---
`.push()` | new length of the array | array

the `.push()` method allow us to add one or more items to the end of an array.

```jsx
let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4
```

## merging two arrays

it's possible to merge to arrays using the spread operatod (`...`):

```jsx
let sports = ['soccer', 'basketball']
let moreSports = ['tennis', 'baseball']

sports.push(...moreSports);
console.log(sports); // [ 'soccer', 'basketball', 'tennis', 'baseball' ]
```
