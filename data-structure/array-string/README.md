# Array

## Easy

- [Find Duplicates](./find-dup.js) - Check if there are any duplicate numbers in the array
- [Find Missing Number in Sequence](./find-missing-num.js) - Find the missing element in a sorted array

## Patterns / Problem Solving Techniques

### ✚ Prefix Sum

- [Running Sum](./technique/running-sum.js)
- [Has Subarray Sum](./technique/has-subarray-sum.js)

### ✌🏻 Two pointers

Usually used to keep track of array or string <u>indices</u>.

#### When to use?

Have to analyze each element of the collection compared to its other elements.

Common patterns in the approach entail:

1. Start from the beginning and the end until they both meet.
2. One moves slow, another moves fast (e.g. cycle in Linked list).

#### Real-world application

- Transmission errors
- Product suggestions

#### Practices

- [Has Subarray Sum](./technique/has-subarray-sum.js) w/ Bruce Force Nested Loop

### 🧮 Hash-map

> _Improve the efficiency_

- [Has Subarray Sum](./technique/has-subarray-sum.js) w/ Prefix Sum and Hash map ✔️
- [Sub Array Sum Count](./technique/subarray-sum-count.js)

### 📍 NOTEs

- `n` in time and space is the length of array or a input value.
