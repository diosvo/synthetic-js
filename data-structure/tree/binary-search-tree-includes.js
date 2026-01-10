/**
 * Balanced Tree - ⏱️ Time: O(log(n)) - 🚀 Space: O(log(n))
 * Worst Case - ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {boolean} Whether the target value exists in the BST
 */
const binarySearchTreeIncludes = (root, target) => {
  // Base cases
  if (root === null) return false;
  if (root.val === target) return true;

  if (target > root.val) {
    return binarySearchTreeIncludes(root.right, target);
  } else {
    return binarySearchTreeIncludes(root.left, target);
  }
};

// Refer Node from example.js in this folder
binarySearchTreeIncludes(g, 4); // -> true
binarySearchTreeIncludes(g, 6); // -> false
