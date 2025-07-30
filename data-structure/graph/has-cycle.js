/**
 * ⏱️ Time: O(n^2) - 🚀 Space: O(n)
 *
 * @returns {boolean} true if the graph has a cycle, false otherwise.
 */
const hasCycle = (graph) => {
  const visited = new Set();
  const visiting = new Set();

  for (const node in graph) {
    if (cycleDetect(graph, node, visiting, visited)) return true;
  }

  return false;
};

const cycleDetect = (graph, node, visiting, visited) => {
  // Base case
  // [1.1] Visited has node
  if (visited.has(node)) return false;
  // [1.2] Visiting has node - meaning "cycle"
  if (visiting.has(node)) return true;

  // [2] 📍 Make the current node as in progress
  visiting.add(node);

  // [3] Traverse neighbors' node
  for (const neighbor of graph[node]) {
    if (cycleDetect(graph, neighbor, visiting, visited)) return true;
  }

  // [4] Mark it as visited
  visiting.delete(node);
  visited.add(node);

  return false;
};

hasCycle({
  a: ['b'],
  b: ['c'],
  c: ['a'],
}); // -> true
hasCycle({
  a: ['b', 'c'],
  b: ['c'],
  c: ['d'],
  d: [],
}); // -> false
hasCycle({
  q: ['r', 's'],
  r: ['t', 'u'],
  s: [],
  t: [],
  u: [],
  v: ['w'],
  w: [],
  x: ['w'],
}); // -> false
