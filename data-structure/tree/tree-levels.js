/** 🔄 Recursive
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
const treeLevels = (root) => {
  const levels = [];
  _treeLevels(root, levels, 0);
  return levels;
};

const _treeLevels = (root, levels, levelNum) => {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels[levelNum] = [root.val];
  } else {
    levels[levelNum].push(root.val);
  }

  _treeLevels(root.left, levels, levelNum + 1);
  _treeLevels(root.right, levels, levelNum + 1);
};

/** 🔁 Iterative
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {Array<Node>} A 2-Dimensional array where each subarray represents a level of the tree.
 */
function treeLevels(root) {
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
}

treeLevels(a); // -> [['A'], ['B', 'C'], ['D', 'E', 'F']]
treeLevels(g); // -> [[3], [11, 4], [4, -2, 1]]
treeLevels(null); // -> []
