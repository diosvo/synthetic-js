/**
 * ⏱️ Time: O(n) - 🚀 Space: O(e)
 *
 * @returns {boolean} true if there is a directed path from source to destination, false otherwise.
 */
const hasPath = (graph, source, destination) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current === destination) return true;

    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }

  return false;
};

hasPath(graph, 'a', 'f'); // true
hasPath(undirected_graph, 'v', 'z'); // false
