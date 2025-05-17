/**
 * ⏱️ Time: O(n*log(n)) - 🚀 Space: O(n*log(n))
 *
 * @returns {Array<Node>} A 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.
 */
function basic(root) {
  // 1. Base case
  if (root === null) return [];

  // 2.1. Handle leaf nodes (nodes without children).
  // Inject root value
  if (root.left === null && root.right === null) {
    return [[root.value]];
  }

  // 2.0. Get all nodes in left/right paths
  const allPaths = []; // The final result

  const leftPaths = allTreePaths(root.left); // [[B,D], [B,E]]
  for (path of leftPaths) {
    // 2.2. Add root to each path
    path.unshift(root.value);
    allPaths.push(path);
  }

  const rightPaths = allTreePaths(root.right); // [[C,F]]
  for (path of rightPaths) {
    // 2.3. Add root to each path
    path.unshift(root.value);
    allPaths.push(path);
  }

  return allPaths;
}

function optimized(root) {
  // Base cases
  if (root === null) return [];
  if (root.left === null && root.right === null) {
    return [[root.value]];
  }

  const leftPaths = allTreePaths(root.left);
  const rightPaths = allTreePaths(root.right);

  // Combine paths from both subtrees with current root value
  return [...leftPaths, ...rightPaths].map((path) => [root.value, ...path]);
}

const allTreePaths = (root) => {
  return basic(root) || optimized(root);
};

allTreePaths(a); // [[A, B, D], [A, B, E], [A, C, F]]
