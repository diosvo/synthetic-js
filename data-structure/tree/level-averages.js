/** 🔁 Iterative
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {Array<number>} The average value of each level.
 */
const levelAverages = (root) => {
  if (root === null) return [];

  const result = [];
  const stack = [{ node: root, level: 0 }];

  while (stack.length > 0) {
    const { node, level } = stack.pop();

    if (result.length === level) {
      result.push([node.value]);
    } else {
      result[level].push(node.value);
    }

    if (node.right !== null) stack.push({ node: node.right, level: level + 1 });
    if (node.left !== null) stack.push({ node: node.left, level: level + 1 });
  }

  return result.map(
    (level) => level.reduce((sum, value) => sum + value, 0) / level.length
  );
};

levelAverages(g); // [3, 7.5, 1]
