/** 🔄 Recursive
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {number} The minimum value in the tree
 */
const treeMinValue = (root) => {
  if (root === null) return Infinity;

  const leftMin = treeMinValue(root.left);
  const rightMin = treeMinValue(root.right);

  return Math.min(root.value, leftMin, rightMin);
};

/** 🔁 Iterative
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
function treeMinValue(root) {
  if (root === null) return 0;

  const queue = [root];
  let smallest = Infinity;

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.value < smallest) smallest = current.value;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return minValue;
}

treeMinValue(g); // -> -2
