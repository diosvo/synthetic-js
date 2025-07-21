/**
 * @argument {Object} graph - An adjacency list of an undirected graph.
 *
 * ⏱️ Time: O(e) - 🚀 Space: O(n)
 *
 * @returns {number} The size of the largest connected component in the graph.
 */
const largestComponent = (graph) => {
  let longest = 0;
  const visited = new Set();

  for (const node in graph) {
    const size = exploreSize(graph, node, visited);
    longest = Math.max(longest, size);
  }

  return longest;
};

const exploreSize = (graph, current, visited) => {
  const node = current.toString();

  // Base case: avoid a cycle
  if (visited.has(node)) return 0;
  visited.add(node);

  // Add it over time b/c it represents the current node.
  let size = 1;

  for (const neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited);
  }

  return size;
};

largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2'],
}); // -> 4
largestComponent({}); // -> 0
