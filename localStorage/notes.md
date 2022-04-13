# `localStorage` property

`localStorage` stores string on the user browser. `localStorage` stores data in an object way, it means in _key: value_ pattern.

This property has three methods: `setItem()`, `getItem()`, and `removeItem()`.

## `setItem()`

```jsx
const myName = 'Gonzalo';
localStorage.setItem('userName', myName);
```

## `getItem()`

To get data from `localStorage` we need to use `getItem()` which receive as parameter the key.

```jsx
localStorage.getItem('userName');
```

## `removeItem()`

```jsx
localStorage.removeItem('userName');
```

_Note_: in all methods the parameters are strings.
