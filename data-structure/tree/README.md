# 🎯 Common Strategies

- Use iterative concrete

  ```javascript
  // [1] Initialize a stack with root node.
  const stack = [root];

  while (stack.length > 0) {
    // [2] Track the current value with the top of the stack.
    const node = stack.pop();

    <DO_SOMETHING>

    // [3] Push nodes on the right first, left second.
    // If we push left child first, it will be on top of the iteration.
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return <EXPECTED>;
  ```
