# Dynamic Programming

We recognize dyprog because it presents overlapping subproblems.

⛑️ **Solution**:

Just do with Brute-Force first:

- Determine the base case
- Write the recursive function
- Test it with small inputs

If it works, optimize it with:

- Tabulation (bottom-up)
- Memoization (top-down) 📌 - Base case is the last node.

🌳 Visualize the problem as a tree.

🤔 Memoization like a stack, it remembers node within a value.

## Common Patterns

### One-dimensional

1. [fib](./fib.js)
2. [tribonacci](./tribonacci.js)
3. [sum possible](./sum-possible.js)

### Two-dimensional

#### Basic approach

Do it step by step:

<u>Step 1</u> Base case: Out of bounds check.

```js
if (row === grid.length || column === grid[0].length) return <base_case_value>;
```

<u>Step 2</u> Target: Last cell reached.

```js
if (row === grid.length - 1 && column === grid[0].length - 1) return <target_value>;
```

<u>Step 3</u> Movement: Down or right.

```js
const down = func(grid, row + 1, column);
const right = func(grid, row, column + 1);
```

Calculate and return result using recursive logic.

<u>Step 4</u> Memoization: Add after brute-force works.

```js
const position = row + ',' + column;
if (position in memo) return memo[position];
// Store result: memo[position] = result;
```

#### 👾 Practices

4. [count paths](./count-paths.js)
