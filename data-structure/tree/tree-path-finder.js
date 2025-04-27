/** 🔄 Recursive
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {Array} Reprensent the path from the root to the target node
 */
const pathFinder = (root, target) => {
  const path = [];

  if (findPath(root, target, path)) {
    return path;
  }

  // Target not found
  return null;
};

const findPath = (node, target, path) => {
  if (!node) return false;

  // Add current node
  path.push(node.value);

  // Found target
  if (node.value === target) return true;

  // Check subtrees
  if (findPath(node.left, target, path) || findPath(node.right, target, path))
    return true;

  // Remove current node (backtrack)
  path.pop();

  return false;
};
