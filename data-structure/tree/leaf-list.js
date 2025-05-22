/** 🔁 Iterative
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {Array} The values of all leaf nodes in left-to-right order.
 */
const leafList = (root) => {
  if (root == null) return [];

  const leaves = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    if (node.right == null && node.left == null) leaves.push(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return leaves;
};

leafList(a); // -> ['D', 'E', 'F']
leafList(g); // -> [4, -2, 1]
