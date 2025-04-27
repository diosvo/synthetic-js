# Maximum Path Sum Result

Apply the `maxPathSum` algorithm to this tree:

```
     3
   /   \
  11    4
 / \     \
4   -2    1
```

## Execution Order

When `maxPathSum(g)` is called, JavaScript executes in a **top-down traversal** but **resolves values bottom-up**.

1. JavaScript **starts execution from the root node** (level 1, node with value 3)
2. But it can't complete the calculation at the root until it knows the max path values of its children
3. This creates a series of pending calculations that go down the tree

## Step-by-Step Calculation

### Leaf Nodes (Base Cases):

- `maxPathSum(4) = 4` (left leaf)
- `maxPathSum(-2) = -2` (middle leaf)
- `maxPathSum(1) = 1` (right leaf)

### Internal Nodes:

- `maxPathSum(11) = 11 + Math.max(maxPathSum(4), maxPathSum(-2))`
  = `11 + Math.max(4, -2)`
  = `11 + 4`
  = `15`

- `maxPathSum(4) = 4 + Math.max(maxPathSum(1), -Infinity)`
  = `4 + Math.max(1, -Infinity)`
  = `4 + 1`
  = `5`

### Root Node:

- `maxPathSum(3) = 3 + Math.max(maxPathSum(11), maxPathSum(4))`
  = `3 + Math.max(15, 5)`
  = `3 + 15`
  = `18`

## Result

The maximum path sum is `18`, found by following the path: `3 → 11 → 4`

This is the optimal path from root to leaf that maximizes the sum of node values.
