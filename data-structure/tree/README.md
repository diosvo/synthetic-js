# Wrap up

❓ What term is used to describe:

- The single node that has no parent → Root
- The node that has no children → Leaves

❓ What is the least number of nodes a binary tree may have → Zero. The empty is considered a binary tree; this is a useful thinking for recursive alogorithms.

❓ What does the word "binary" mean in the context of "binary tree" → Each node has at most two children.

# 🎯 Common Strategies

## [Depth First Values](./depth-first-values.js) (Stack - LIFO)

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

## [Breath First Values](./breath-first-values.js) (Queue - FIFO)

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

### 📍 NOTEs

- `n` in time and space is the number of nodes.

- The solution should really be considered O(n²) runtime if we use JS `shift()` methods runs in O(n).

- Travel to the leaf node

  ```js
  if (root.left === null && root.right === null) return root.value;
  ```
