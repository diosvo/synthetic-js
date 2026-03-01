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

Tips: Exclude and/or include the first item and then recursively solve the rest of the items.

- [subsets](./exhaustive/subsets.js) - `2^n`
  - For each item we decide whether to include or exclude it. There are 2 choices for each of the `n` items, so we have 2 \* 2 \* ... \* 2 (n times)
- [permutations](./exhaustive/permutations.js) - `n!`
  - For each position we decide which item to place there, and we have `n` choices for the first position, `n-1` for the second, and so on..
- [create-combinations](./exhaustive/create-combinations.js) - `(n! / (k! * (n-k)!))`
- [grocery-budget](./exhaustive/grocery-budget.js) - `2^n`

→ The main difference is: Subsets are unordered, but Permutations are ordered.

#### 📍 NOTEs

- `n` in time and space is the number of elements.
