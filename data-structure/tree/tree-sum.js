/** 🔄 Recursive
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {boolean} Indicate whether or not the value is contained in the tree
 */
const treeSum = (root) => {
  if (root === null) return 0;

  return root.value + treeSum(root.left) + treeSum(root.right);
};

/** 🔁 Iterative
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
function treeSum(root) {
  if (root === null) return 0;

  const queue = [root];
  let totalSum = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    totalSum += node.val;

    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }

  return totalSum;
}

treeSum(g); // -> 21
treeSum(null); // -> 0
