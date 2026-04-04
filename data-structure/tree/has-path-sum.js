/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {number} A boolean indicating whether or not there is a path through the tree that sums to the target.
 */
const hasPathSum = (root, target) => {
  // Base cases:
  // 1. No path
  if (root === null) return false;
  // 2. At the leaf node
  if (root.left === null && root.right === null && root.val === target)
    return true;

  const leftSubTree = hasPathSum(root.left, target - root.val);
  const rightSubTree = hasPathSum(root.right, target - root.val);

  return leftSubTree || rightSubTree;
};

hasPathSum(g, 8); // -> true
hasPathSum(g, 7); // -> false
