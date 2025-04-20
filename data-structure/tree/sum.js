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

treeSum(g); // -> 21
