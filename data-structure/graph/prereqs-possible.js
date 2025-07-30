import { buildGraphWithPrereqs } from './example';

/**
 * @name p is prereqs
 * @name c is courses
 *
 * ⏱️ Time: O(n + p) - 🚀 Space: O(n)
 *
 * @returns {boolean} a boolean indicating whether or not it is possible to complete all courses.
 */
const prereqsPossible = (numCourses, prereqs) => {
  const visited = new Set();
  const visiting = new Set();
  const graph = buildGraphWithPrereqs(numCourses, prereqs);

  for (const node in graph) {
    // ⭕️ Cyclic grpah = IMPOSSIBLE
    if (hasCycle(graph, node, visiting, visited)) return false;
  }

  return true;
};

const hasCycle = (graph, node, visiting, visited) => {
  // Base case
  // [1] Visiting has node - detect "cycle"
  if (visiting.has(node)) return true;

  // [2] 📍 Make the current node as in progress
  visiting.add(node);

  for (const neighbor of graph[node]) {
    if (hasCycle(graph, neighbor, visiting, visited)) return true;
  }

  // [4] Mark it as visited
  visiting.delete(node);
  visited.add(node);

  return false;
};

const numCourses = 6;
prereqsPossible(numCourses, [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
]); // -> true
prereqsPossible(numCourses, [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
  [3, 0],
]); // -> false
