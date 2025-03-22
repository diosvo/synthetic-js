# What is recursion and how is it used?

## Definition

A technique in programming where a function calls itself in order to solve a problem (can be divided into smaller).

- Base case: stops calling itself, preventing an infinite loop.
- Recursive case: calls itself with a modified argument, moving towards the base case.

## ✍ Example

### Factorial

- Input: n = 4
- Output: 24
- Explanation: 4! = 4 \* 3 \* 2 \* 1 = 24

```javascript
function factorial(n) {
  if (n === 0) {
    // base case
    return 1;
  }
  return n * factorial(n - 1); // recursive case
}
```

### Fibonacci

- Input: n = 5
- Output: 8
- The first few Fibonacci number are 0, 1, 1, 2, 3, 5, 8.....

```javascript
function fibonacci(n) {
  if (n === 0) {
    // base case
    return 0;
  }
  if (n === 1) {
    // base case
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
}
```

## Tail Recursion

The recursion call is the last operation in the function

```javascript
function factorial(n, acc = 1) {
  if (n === 0) {
    return acc;
  }
  return factorial(n - 1, n * acc);
}
```

## ✅ Use cases

- Tree traversal: DOM or binary tree, ...
- Divide and conquer algorithms: quick sort, merge sort, ...
- Dynamic programming: knapsack problem and certain graph algorithms, ...
