/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {Array} Reprensent the path from the root to the target node
 */
const pathFinder = (root, target) => {
  const path = [];

  if (findPath(root, target, path)) {
    return path;
  }

  // Target not found
  return null;
};

const findPath = (node, target, path) => {
  if (!node) return false;

  // Add current node
  path.push(node.value);

  // Found target
  if (node.value === target) return true;

  // Check subtrees
  const leftPath = findPath(node.left, target, path);
  const rightPath = findPath(node.right, target, path);
  if (leftPath || rightPath) return true;

  // Backtrack: Remove current node (both children are null)
  path.pop();
  return false;
};

pathFinder(a, 'D'); // -> ['A', 'B', 'D']
pathFinder(null, 'x'); // -> null

const root = new Node(0);
let curr = root;
for (let i = 1; i <= 6000; i += 1) {
  curr.right = new Node(i);
  curr = curr.right;
}

//      0
//       \
//        1
//         \
//          2
//           \
//            3
//             .
//              .
//               .
//              5999
//                \
//                6000

pathFinder(root, 3451); // -> [0, 1, 2, 3, ..., 3450, 3451]
