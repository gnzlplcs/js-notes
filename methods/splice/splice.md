# `.splice()` method

method | returns | apply on
---|---|---
`.splice()` | new array with removed items | arrays. it modifies the original array.

`.splice()` changes the contents of an array by removing or replacing items and/or adding new items in place.

this method allows to remove any number of consecutive elements from anywhere in an array.

## syntax

`.splice()` takes three parameters:

1. **first parameter (start)**: represents the index or position from which to begin removing items.
2. **second parameter (deleteCount)**: indicates the number of items to delete.
3. **third parameter (item or items)**: items to add to the array.

```plain
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, itemN)
```
