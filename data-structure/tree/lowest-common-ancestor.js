/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {Array} The lowest common ancestor value of the two target nodes
 */
const lowestCommonAncestor = (root, value1, value2) => {
  const path1 = findPath(root, value1);
  const path2 = findPath(root, value2);

  const found = path1.find((p1) => path2.includes(p1));

  return found;
};

const findPath = (root, target) => {
  // Base case
  if (root === null) return null;

  // Found target: leaf→root order
  if (root.value === target) return [root.value];

  const leftPath = findPath(root.left, target);
  if (leftPath != null) {
    leftPath.push(root.value);
    return leftPath;
  }

  const rightPath = findPath(root.right, target);
  if (rightPath != null) {
    rightPath.push(root.value);
    return rightPath;
  }

  return null;
};

// Refer Node from example.js in this folder
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    / \
//    g  h

lowestCommonAncestor(a, 'd', 'h'); // -> b
lowestCommonAncestor(a, 'd', 'g'); // -> b
lowestCommonAncestor(a, 'g', 'c'); // -> a
lowestCommonAncestor(a, 'b', 'g'); // -> b
lowestCommonAncestor(a, 'f', 'c'); // -> c
