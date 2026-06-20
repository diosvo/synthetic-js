import { TreeNode } from '../tree-node.ts';

/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {boolean} - true if the two binary trees are equal, false otherwise
 */
function binaryTreeEqual(a: TreeNode | null, b: TreeNode | null): boolean {
  // Check if both a & b are null
  if (a == null && b == null) return true;

  // If one of a or b is null
  if (a == null || b == null) return false;

  // If the values of the current nodes are different
  if (a.val != b.val) return false;

  // Recursively check if the right and left subtrees are the same
  return binaryTreeEqual(a.right, b.right) && binaryTreeEqual(a.left, b.left);
}

binaryTreeEqual(
  new TreeNode(1, new TreeNode(2), new TreeNode(3)),
  new TreeNode(1, new TreeNode(2), new TreeNode(3)),
); // -> true
binaryTreeEqual(
  new TreeNode(1, new TreeNode(2), new TreeNode(3)),
  new TreeNode(1, new TreeNode(2), new TreeNode(4)),
); // -> false
