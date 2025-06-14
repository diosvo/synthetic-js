function buildGraph(edges) {
  const result = {};

  for (const edge of edges) {
    const [nodeA, nodeB] = edge;

    if (!(nodeA in result)) result[nodeA] = [];
    if (!(nodeB in result)) result[nodeB] = [];

    // 2-dimensional
    result[nodeA].push(nodeB);
    result[nodeB].push(nodeA);
  }

  return result;
}

/**
 * ⏱️ Time: O(e) - 🚀 Space: O(e)
 */
function undirectedPath(edges, nodeA, nodeB) {
  const graph = buildGraph(edges);
  const stack = [nodeA];
  const visited = new Set();

  while (stack.length > 0) {
    const current = stack.pop();
    if (current === nodeB) return true;

    if (!visited.has(current)) {
      // Mark the current node as visited
      visited.add(current);
      for (const neighbor of graph[current]) {
        stack.push(neighbor);
      }
    }
  }

  return false;
}
