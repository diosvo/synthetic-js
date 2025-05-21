/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {Array<Node>} A 2-Dimensional array where each subarray represents a level of the tree.
 */
const treeLevels = (root) => {
  if (root === null) return [];
  const stack = [{ node: root, level: 0 }];
  const levels = [];

  while (stack.length > 0) {
    const { node, level } = stack.pop();

    /* [
      [A],
      [B],
      [D]
    ] */

    // Final steps to check
    // Initialize the subarray if it doesn't exist
    if (levels.length === level) {
      levels.push([node.val]);
    } else {
      // Add the value to the existing subarray
      levels[level].push(node.val);
    }

    // Each node is added to the stack with level + 1
    if (node.right !== null) stack.push({ node: node.right, level: level + 1 });
    if (node.left !== null) stack.push({ node: node.left, level: level + 1 });
  }

  return levels;
};

treeLevels(a); // -> [['A'], ['B', 'C'], ['D', 'E', 'F']]
treeLevels(g); // -> [[3], [11, 4], [4, -2, 1]]
