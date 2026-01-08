/** 🔄 Recursive
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {Array} An array of lefty node values on every level of the tree.
 */
const leftyNodes = (root) => {
  const values = [];

  // Populate the array based on level
  traverse(root, 0, values);

  return values;
};

const traverse = (root, level, values) => {
  if (root === null) return null;

  // If there is no value stored for this level yet.
  if (values.length === level) values.push(root.val);

  // Traverse left first to ensure leftmost nodes are processed first
  traverse(root.left, level + 1, values);
  traverse(root.right, level + 1, values);
};

leftyNodes(a); // ['a', 'b', 'd', 'g']
leftyNodes(null); // []

// Refer Node from example.js in this folder
const n = new Node('n');
const y = new Node('y');
const c = new Node('c');

n.left = y;
n.right = c;

//       n
//     /   \
//    y     c

leftyNodes(n); // ['n', 'y']
