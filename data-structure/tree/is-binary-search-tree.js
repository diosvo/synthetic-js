/**
 * @description Binary Search Tree:
 * - All values within a node's left subtree <  the node's value
 * - All values in a node's right subtree are > the node's value.
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {number} A boolean representing whether the tree is a BST.
 */
const isBinarySearchTree = (root) => {
  const values = [];
  traverse(root, values);

  return isSorted(values);
};

const traverse = (root, values) => {
  // Base cases
  if (root === null) return;

  // left
  traverse(root.left, values);
  // self
  values.push(root.value);
  // right
  traverse(root.right, values);
};

const isSorted = (nums) => {
  // Ensure length is not out of bounds
  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];
    const next = nums[i + 1];

    if (next < current) return false;
  }

  return true;
};

isBinarySearchTree(g); // -> false

const a = new Node(12);
const b = new Node(5);
const c = new Node(15);
const d = new Node(3);
const e = new Node(9);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//     12
//    /  \
//   5   15
//  / \    \
// 3   9    19

isBinarySearchTree(a); // -> true
