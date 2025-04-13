/** 🔁 Iterative
 *
 * @description Technique - Stack ⬆️
 *
 * - n = number of nodes
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns An array containing all values of the tree in depth-first order.
 */
const depthFirstValues = (root) => {
  if (root === null) return [];

  const result = [];

  // 1. Initialize a stack with root node.
  const stack = [root];

  while (stack.length > 0) {
    // 2. Track the current value with the top of the stack.
    const node = stack.pop();
    result.push(node.val);

    // 3. Push nodes on the right first, left second.
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
};

depthFirstValues(a); // -> ['A', 'B', 'D', 'E', 'C', 'F']

/** 🔄 Recursive
 *
 * ⏱️ Time: O(n^2) - 🚀 Space: O(n)
 */
// const depthFirstValues = (root) => {
//   if (root === null) return [];

//   // 1. Get the left and right values recursively.
//   const leftValues = depthFirstValues(root.left); // B, D, E
//   const rightValues = depthFirstValues(root.right); // C, F

//   // 2. Combine the current value with left and right values.
//   return [root.val, ...leftValues, ...rightValues];
// };
