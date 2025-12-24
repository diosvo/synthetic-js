/** 🔄 Recursive
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {number} The number of times that the target occurs in the tree.
 */
const treeValueCount = (root, target) => {
  if (root === null) return 0;
  const match = root.val === target ? 1 : 0;

  return (
    match +
    treeValueCount(root.left, target) +
    treeValueCount(root.right, target)
  );
};

/** 🔁 Iterative
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
function treeValueCount(root, target) {
  if (root === null) return 0;

  let counter = 0;
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node.val === target) counter += 1;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return counter;
}

treeValueCount(a, 'A'); // -> 1
treeValueCount(g, 4); // -> 2
treeValueCount(null, 42); // -> 0
