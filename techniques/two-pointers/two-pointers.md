# Two Pointers

Usually used to keep track of array or string <u>indices</u>.

### When to use?

Have to analyze each element of the collection compared to its other elements.

Common patterns in the approach entail:

1. Start from the beginning and the end until they both meet.
2. One moves slow, another moves fast (e.g. cycle in Linked list).

#### 🗒️ Templates

Ensure the pointers are inbound of strings/arrays.

<details>
<summary>one input, opposite ends</summary>

```javascript
let fn = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  let ans = null;

  while (left < right) {
    // Do something with left and right

    if (CONDITION) {
      left++;
    } else {
      right--;
    }
  }

  return ans;
};
```

</details>

<details>
<summary> two inputs, exhaust both</summary>

```javascript
let fn = (arr1, arr2) => {
  let left = 0;
  let right = 0;

  let ans = null;

  while (left < arr1.length && right < arr2.length) {
    // Do some logic here

    if (CONDITION) {
      left++;
    } else {
      right++;
    }
  }

  while (left < arr1.length) {
    // Do logic
    left++;
  }

  while (right < arr2.length) {
    // Do logic
    right++;
  }

  return ans;
};
```

</details>

### 👾 Practices

#### Structy

- [Polidrome](./palindrome.js)
- [Uncompress](./uncompress.js)
- [Compress](./compress.js)

#### LeetCode

- [Move Zeroes](../../leet-code/0-array/1-move-zeroes.js)

### Real-world applications

- Transmission errors
- Product suggestions
