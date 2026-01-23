/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {boolean} Whether the binary tree is balanced.
 */
const checkHeightBalance = (root) => {
  if (root === null) return 0;

  const leftHeight = checkHeightBalance(root.left);
  if (leftHeight === -1) return -1;

  const rightHeight = checkHeightBalance(root.right);
  if (rightHeight === -1) return -1;

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  } else {
    return 1 + Math.max(leftHeight, rightHeight);
  }
};

const isTreeBalanced = (root) => {
  return checkHeightBalance(root) > -1;
};

isTreeBalanced(null); // -> true
isTreeBalanced(g); // -> true

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
c.right = e;
d.left = f;

//       a
//      / \
//     b   c
//    /     \
//   d       e
//  /
// f

isTreeBalanced(a); // -> false
