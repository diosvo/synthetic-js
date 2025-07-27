// 👀 Represented as an ADJACENCY list (Hash map)

/* ==== DIRECTED ==== */

// a → c
// ↓   ↓
// b   e
// ↓
// d → f

export const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

/* ==== UNDIRECTED ==== */

export const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

/* ==== 🔺 WORST CASE 🔻 ==== */

// a  ↔  b
//  ↔   ↔
//    c
const worst_case_graph = {
  a: ['b', 'c'],
  b: ['a', 'c'],
  c: ['a', 'b'],
};

/**
 * @description Build an undirected graph from a list of edges.
 */
export function buildGraph(edges) {
  const result = {};

  for (const edge of edges) {
    const [nodeA, nodeB] = edge;

    // Initialize the nodes in the graph if they don't exist
    if (!(nodeA in result)) result[nodeA] = [];
    if (!(nodeB in result)) result[nodeB] = [];

    // 2-dimensional
    result[nodeA].push(nodeB);
    result[nodeB].push(nodeA);
  }

  return result;
}

/**
 * @example refer longestPath function
 *
 * @description Find the longest path in a directed acyclic graph (DAG).
 */
export function traverseDistance(graph, node, distance) {
  // Base case: Hit the terminal node
  if (node in distance) return distance[node];

  // It would be the distance from neighbor to some far ending point
  let maxDistance = 0;
  // Traverse the neighbors
  for (const neighbor of graph[node]) {
    // Find max value among neighbor attempts
    const neighborDistance = traverseDistance(graph, neighbor, distance);
    if (neighborDistance > maxDistance) maxDistance = neighborDistance;
  }

  // 1 - one edge from the current node to that neighbor
  distance[node] = 1 + maxDistance;
  return distance[node];
}
