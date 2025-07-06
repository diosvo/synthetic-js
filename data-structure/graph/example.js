// 👀 Represented as an ADJACENCY list (Hash map)

/* ==== DIRECTED ==== */

// a → c
// ↓   ↓
// b   e
// ↓
// d → f

const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

/* ==== UNDIRECTED ==== */

// v → x
// ↓
// w
//
// y → z

export const undirected_graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],
};

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
 *
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
