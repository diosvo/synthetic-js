/** 🔄 Recursive
 *
 * - n = number of nodes
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {boolean} Indicate whether or not the value is contained in the tree
 */
const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;

  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

treeIncludes(a, 'A'); // -> true
treeIncludes(a, 'Z'); // -> false

/** 🔁 Iterative
 *
 * - n = number of nodes
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {boolean} Indicate whether or not the value is contained in the tree
 */
function treeIncludes(root, target) {
  if (root === null) return false;

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node.val === target) return true;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return false;
}
