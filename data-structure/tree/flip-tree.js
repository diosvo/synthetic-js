/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {Node} The flipped binary tree
 */
const flipTree = (root) => {
  // Base case
  if (root == null) return null;

  const right = flipTree(root.right);
  const left = flipTree(root.left);

  // Replace in-place
  root.left = right;
  root.right = left;

  return root;
};

function flipTree(root) {
  if (!root) return null;

  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    if (current) {
      // Swap left and right children
      [current.left, current.right] = [current.right, current.left];

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  return root;
}

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
//   g   h

flipTree(a);

//      a
//    /   \
//   c     b
//  /     / \
// f     e   d
//      / \
//     h   g

const n = new Node('n');
const y = new Node('y');
const c = new Node('c');

n.left = y;
n.right = c;

//      n
//     / \
//    y   c

flipTree(n);

//      n
//     / \
//    c   y
