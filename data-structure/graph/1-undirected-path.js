import { buildGraph, edges } from './example';

/**
 * ⏱️ Time: O(e) - 🚀 Space: O(e)
 *
 * @returns {boolean} True if there is an undirected path between nodeA and nodeB, otherwise false.
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

undirectedPath(edges, 'j', 'm'); // -> true
undirectedPath(edges, 'k', 'o'); // -> false
