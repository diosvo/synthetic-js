const treeSum = (root) => {
  if (root === null) return 0;

  return root.value + treeSum(root.left) + treeSum(root.right);
};

treeSum(g); // -> 21

// 🔆 Use depth or breadth-first search to solve this problem, initialising total sum to 0.
