/**
 * ⏱️ Time: O(n^2) - 🚀 Space: O(n^2)
 *
 * @returns {number} The root of the constructed tree.
 */
const buildTreeInPost = (inOrder, postOrder) => {
  if (inOrder.length === 0) return null;

  const value = postOrder[postOrder.length - 1];
  const root = new Node(value);

  const mid = inOrder.indexOf(value);
  const leftInOrder = inOrder.slice(0, mid);
  const rightInOrder = inOrder.slice(mid + 1);

  // Make sure the length is equal with inOrder
  const leftPostOrder = postOrder.slice(0, leftInOrder.length);
  const rightPostOrder = postOrder.slice(leftInOrder.length, -1);

  root.left = buildTreeInPost(leftInOrder, leftPostOrder);
  root.right = buildTreeInPost(rightInOrder, rightPostOrder);

  return root;
};

buildTreeInPost(['y', 'x', 'z'], ['y', 'z', 'x']);
//     x
//    / \
//   y   z

buildTreeInPost(
  ['d', 'b', 'e', 'a', 'f', 'c', 'g'],
  ['d', 'e', 'b', 'f', 'g', 'c', 'a'],
);
//      a
//    /   \
//   b     c
//  / \   / \
// d   e f   g

buildTreeInPost(
  ['d', 'b', 'g', 'e', 'h', 'a', 'c', 'f'],
  ['d', 'g', 'h', 'e', 'b', 'f', 'c', 'a'],
);
//     a
//    / \
//   b   c
//  / \   \
// d   e   f
//    / \
//    g  h

buildTreeInPost(['m', 'n'], ['m', 'n']);
//      n
//     /
//    m

buildTreeInPost(['n', 'm'], ['m', 'n']);
//     n
//      \
//       m
