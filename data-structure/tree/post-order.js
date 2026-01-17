/**
 * @description Post order: left, right, self
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {number} An array of values representing post-order traversal
 */
const postOrder = (root) => {
  const values = [];
  traverse(root, values);
  return values;
};

const traverse = (root, values) => {
  if (root == null) return;

  const left = traverse(root.left, values);
  if (left) values.push(left.value);

  const right = traverse(root.right, values);
  if (right) values.push(right.value);

  values.push(root.value);
};

postOrder(null); // -> []
postOrder(a); // -> ['D', 'E', 'B', 'F', 'C', 'A']
postOrder(g); // -> [4, -2, 11, 1, 4, 3]
