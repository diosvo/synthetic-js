# Binary Tree

❓ What term is used to describe:

- The single node that has no parent → Root
- The node that has no children → Leaves

❓ What is the least number of nodes a binary tree may have → Zero. The empty is considered a binary tree; this is a useful thinking for recursive alogorithms.

❓ What does the word "binary" mean in the context of "binary tree" → Each node has at most two children.

# 🎯 Strategies

## [Depth First Values](./0-depth-first-values.js) (Stack - LIFO)

There are 2 ways to implement:

- Iteratively using an explicit stack.
- Recursively using the underlying call stack.

```javascript
if (root === null) return [];

const result = [];

// [1] Initialize a stack with root node.
const stack = [root];

while (stack.length > 0) {
  // [2] Track the current value with the top of the stack.
  const node = stack.pop();

  <PROCESSING_OUTPUT>

  // [3] Push nodes on the right first, left second.
  // If we push left child first, it will be on top of the iteration.
  if (node.right) stack.push(node.right);
  if (node.left) stack.push(node.left);
}

return <EXPECTED>;
```

### 👾 Practices

- [max root to leaf path sum](./max-root-to-leaf-path-sum.js)
- [tree path finder](./tree-path-finder.js)
- [all tree paths](./all-tree-paths.js)
- [leaf list](./leaf-list.js)

## [Breath First Values](./1-breath-first-values.js) (Queue - FIFO)

```javascript
if (root === null) return [];

const result = [];

// [1] Initialize a queue with root node.
const queue = [root];

while (queue.length > 0) {
  // [2] Track the current value with the first node.
  const node = queue.shift();

  <PROCESSING_OUTPUT>

  // [3] Push nodes from the left to right
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
}

return <EXPECTED>;
```

### 👾 Practices

- [bottom right value](./bottom-right-value.js)
- [level averages](./level-averages.js)

## 👾 Practices

Can be implemented with both strategies.

- [tree sum](./tree-sum.js)
- [tree includes](./tree-includes.js)
- [tree min value](./tree-min-value.js)
- [tree value count](./tree-value-count.js)
- [how height](./how-height.js)
- [tree levels](./tree-levels.js)

### 📍 NOTEs

- `n` in time and space is the number of nodes.

- The solution should really be considered O(n²) runtime if we use JS `shift()` methods runs in O(n).

- Travel to the leaf node

  ```js
  if (root.left === null && root.right === null) return root.value;
  ```
