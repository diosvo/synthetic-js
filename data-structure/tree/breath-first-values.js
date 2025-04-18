/** 🔁 Iterative
 *
 * @description Technique - Queue ➡️
 *
 * - n = number of nodes
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns An array containing all values of the tree in breath-first order.
 */
const breathFirstValues = (root) => {
  if (root === null) return [];

  const result = [];

  // 1. Initialize a queue with root node.
  const queue = [root];

  while (queue.length > 0) {
    // 2. Track the current value with the first node.
    const node = queue.shift();
    result.push(node.val);

    // 3. Push nodes from the left to right
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
};

breathFirstValues(a); // -> ['A', 'B', 'C', 'D', 'E', 'F']
