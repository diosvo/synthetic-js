/**
 * ⏱️ Time: O(n^2) - 🚀 Space: O(n^2)
 *
 * @returns {number} The root of the constructed tree.
 */
const buildTreeInPre = (inOrder, preOrder) => {
  if (inOrder.length === 0) return null;

  const value = preOrder[0];
  const root = new Node(value);

  const mid = inOrder.indexOf(value);
  const leftInOrder = inOrder.slice(0, mid);
  const rightInOrder = inOrder.slice(mid + 1);

  // Make sure the length is equal with inOrder
  const leftSize = leftInOrder.length;
  const leftPreOrder = preOrder.slice(1, leftSize + 1);
  const rightPreOrder = preOrder.slice(leftSize + 1);

  root.left = buildTreeInPre(leftInOrder, leftPreOrder);
  root.right = buildTreeInPre(rightInOrder, rightPreOrder);

  return root;
};

buildTreeInPre(
  [ 'z', 'y', 'x' ],
  [ 'y', 'z', 'x' ] 
);
//      y
//    /   \
//   z     x

buildTreeInPre(
  [ 'y', 'z', 'x' ],
  [ 'y', 'x', 'z' ] 
);
//       y
//        \
//         x
//        / 
//       z

buildTreeInPre(
  [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
  [ 'a', 'b', 'd', 'e', 'g', 'h', 'c', 'f' ] 
);
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    / \
//    g  h

buildTreeInPre(
  [ 't', 'u', 's', 'q', 'r', 'p' ],
  [ 'u', 't', 's', 'r', 'q', 'p' ] 
);
//    u
//  /   \
// t     s
//        \
//         r
//        / \
//        q  p

buildTreeInPre(
  [ 'm', 'l', 'q', 'o', 'r', 'n', 's', 'p', 't' ],
  [ 'l', 'm', 'n', 'o', 'q', 'r', 'p', 's', 't' ] 
);
//        l
//     /     \
//    m       n
//         /    \
//         o     p
//        / \   / \
//       q   r s   t
