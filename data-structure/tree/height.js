/** 🔄 Recursive
 *
 * @description The height is defined as the maximal number of edges from the root node to any leaf node.
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {Number} A number representing the height of the tree.
 */
const howHigh = (node) => {
  if (node === null) return -1;

  const leftHeight = howHigh(node.left);
  const rightHeight = howHigh(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
};

howHigh(a); // -> 2
