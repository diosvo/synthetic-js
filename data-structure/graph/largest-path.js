import { traverseDistance } from './example';

/**
 * @argument {Object} graph - An adjacency list for a directed acyclic graph
 *
 * ⏱️ Time: O(e) - 🚀 Space: O(n)
 *
 * @returns {number} The length (number of edges) of the longest path.
 */
const longestPath = (graph) => {
  // Get the max length of each node
  let distance = {};

  // Find terminal nodes - nodes will no outgoing edges
  for (const node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }

  // No worries! Time and Space will be also O(e) and O(n)
  for (const node in graph) {
    traverseDistance(graph, node, distance);
  }

  return Math.max(...Object.values(distance));
};

longestPath({
  a: ['c', 'b'],
  b: ['c'],
  c: [],
}); // -> 2
/* ✌🏻
Find terminal nodes -> "c"

Calculate distances for each node:

Call 1: traverseDistance(graph, 'a', distance)
- 'a' is not in distance, so continue
- Initialize maxLength = 0
- Loop through neighbors of 'a': ['c', 'b']

Neighbor 'c':
- Call `traverseDistance(graph, 'c', distance)`
- 'c' is in distance (value is 0), return 0
- attempt = 0, maxLength remains 0

Neighbor 'b':
- Call `traverseDistance(graph, 'b', distance)`
- 'b' is not in distance, so continue
- Loop through neighbors of 'b': ['c']
- Call `traverseDistance(graph, 'c', distance)` → returns 0
- distance['b'] = 1 + 0 = 1
- Return 1
- attempt = 1 (attempt > maxLength = 0) → maxLength = 1
- distance['a'] = 1 + 1 = 2
- Return 2
*/
longestPath({
  a: ['c', 'b'],
  b: ['c'],
  c: [],
  q: ['r'],
  r: ['s', 'u', 't'],
  s: ['t'],
  t: ['u'],
  u: [],
}); // -> 4
