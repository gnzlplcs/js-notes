# `for` loop

the typical `for` loop includes an _iterator variable_ that usually appears in all three expressions.

1. the iterator variable is initialized
2. checked against the stopping condition
3. assigned a new value on each loop iteration

a `for` loop contains three expressions:

1. an _initialization_ starts the loop and can also be used to declare the iterator variable
2. a _stopping condition_ is the condition that the iterator variable is evaluated against
3. an _iteration statement_ is used to update the iterator variable on each loop

```jsx
for (let counter = 0; counter < 4; counter++>) {
  console.log(counter);
}
```
