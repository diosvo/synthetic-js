/**
 * @description Patterns: Sum (recursive) + Min value
 * ✨ Execute top-down traversal but resolve values bottom-up
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {number} The maximum path sum in the tree
 */
const maxPathSum = (root) => {
  // (2.5) When left or right child is null
  if (root === null) return -Infinity;

  // (1) Base case: Destination is leaf node
  if (root.left === null && root.right === null) return root.value;
  // (2) Find max value of left and right subtrees
  const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right));

  return root.value + maxChild;
};

maxPathSum(g); // -> 18
