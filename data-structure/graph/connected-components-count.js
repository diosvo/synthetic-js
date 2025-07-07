/**
 * ⏱️ Time: O(e) - 🚀 Space: O(n)
 *
 * @returns {number} The number of connected components in an undirected graph.
 */
function connectedComponentsCount(graph) {
  const visited = new Set();
  let count = 0;

  for (const node in graph) {
    // If the connection is found
    if (explore(graph, node, visited)) count += 1;
  }

  return count;
}

const explore = (graph, current, visited) => {
  const node = current.toString();

  // 2. Base case
  if (visited.has(node)) return false;

  // 3. Mark the node as visited
  visited.add(node);

  // 1. Visit each neighbor
  for (const neighbor of graph[node]) {
    explore(graph, neighbor, visited);
  }

  // 4. Explore all neighbors
  return true;
};

connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}); // -> 2

connectedComponentsCount({
  1: [2],
  2: [1, 8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2],
}); // -> 1
connectedComponentsCount({}); // -> 0
