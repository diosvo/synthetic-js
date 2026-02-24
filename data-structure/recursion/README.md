# Recursion

## Definition

A technique in programming where a function calls itself in order to solve a problem (can be **divided into smaller**).

- Base case: stops calling itself, preventing an infinite loop.
- Recursive case: calls itself with a modified argument, moving towards the base case.

## Exaustive Recursion

Include generating all permutations and combinations of a given set of elements.

### Intuition

- Smaller input → Easier problem.
- Reduce input size → Solve problem.

### Tail Recursion

The recursion call is the last operation in the function

## ✅ Use cases

- Tree traversal: DOM or binary tree, ...
- Divide and conquer algorithms: quick sort, merge sort, ...
- Dynamic programming: knapsack problem and certain graph algorithms, ...

### 👾 Practices

[Beginner Recursion](./warm-up.js)

- [sum](./sum.js)
- [factorial](./factorial.js)
- [sum of length](./sum-of-length.js)
- [reverse string](./reverse-string.js)
- [palindrome](./palindrome.js)
- [fibonacci](./fibonacci.js)

Exaustive Recursion

- [subsets](./exhaustive/subsets.js) - 2^n
- [permutations](./exhaustive/permutations.js) - n!

#### 📍 NOTEs

- `n` in time and space is the number of elements.
