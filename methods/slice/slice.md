# `.slice()` method

method | returns | apply on
---|---|---
`.slice()` | a new array with extracted items | arrays. original array does not change

the `.slice()` makes a shallow copy or extracts a given number of elements to a new array, and the original array remains untouched.

## syntax

1. **start**: the index at which to begin extraction. if `start` is omitted, `.slice()` starts from zero index.
2. **end**: the index at which to stop extraction (up to, but not including the element in this index). if `end` is omitted, `.slice()` returns all elements from `start` index.

```plain
slice()
slice(start)
slice(start, end)
```

both parameters, `start` and `end`, are optional.

if `.slice()` is used to make a exact copy from the original array it should be built without parameters.

negative indices can be used at `start` parameter, which indicate an offset from the end of the array.

negative indeices can also be used at `end` parameter, indicating the offset from the end of the array.
