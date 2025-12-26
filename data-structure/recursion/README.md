# Recursion

## Definition

A technique in programming where a function calls itself in order to solve a problem (can be divided into smaller).

- Base case: stops calling itself, preventing an infinite loop.
- Recursive case: calls itself with a modified argument, moving towards the base case.

### Intuition

- Smaller input → Easier problem.
- Reduce input size → Solve problem.

## Tail Recursion

The recursion call is the last operation in the function

```javascript
function factorial(n, acc = 1) {
  if (n === 0) return acc;
  return factorial(n - 1, n * acc);
}
```

## ✅ Use cases

- Tree traversal: DOM or binary tree, ...
- Divide and conquer algorithms: quick sort, merge sort, ...
- Dynamic programming: knapsack problem and certain graph algorithms, ...

### 📍 NOTEs

- `n` in time and space is the number of elements.
