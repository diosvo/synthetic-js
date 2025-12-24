/** 🔄 Recursive
 *
 * @description The height is defined as the maximal number of edges from the root node to any leaf node.
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {number} A number representing the height of the tree.
 */
const howHigh = (node) => {
  if (node === null) return -1;

  const leftHeight = howHigh(node.left);
  const rightHeight = howHigh(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
};

/** 🔁 Iterative
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
function howHigh(root) {
  const queue = [];

  if (root !== null) queue.push([root, 0]);

  let maxDepth = -1;

  while (queue.length > 0) {
    const [node, depth] = queue.shift();
    maxDepth = Math.max(depth, maxDepth);

    if (node.left !== null) queue.push([node.left, depth + 1]);
    if (node.right !== null) queue.push([node.right, depth + 1]);
  }

  return maxDepth;
}

howHigh(a); // -> 2
howHigh(null); // -> -1
