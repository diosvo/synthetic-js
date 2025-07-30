import { buildGraphWithPrereqs, traverseDistance } from './example';

/**
 * @argument {Object} graph - An adjacency list for a directed acyclic graph
 *
 * @name p is prereqs
 * @name c is courses
 *
 * ⏱️ Time: O(p) - 🚀 Space: O(c)
 *
 * @returns {number} The length (number of edges) of the longest path.
 */
const semestersRequired = (numCourses, prereqs) => {
  // [1] Transform to a graph
  const graph = buildGraphWithPrereqs(numCourses, prereqs);

  // [2] Calculate the distance: {[node]: max_distance}
  const distance = {};

  for (const course in graph) {
    // ☢️ Terminal node
    if (graph[course].length === 0) distance[course] = 1;

    // 👀 Edge case:
    // numCourses = 12 ; prereqs = []
    // ? How many semesters would it take -> 1 | Starting with 1 rather than 0
  }

  for (const course in graph) {
    traverseDistance(graph, course, distance);
  }

  // [3] Find the maximum value
  return Math.max(...Object.values(distance));
};

semestersRequired(6, []); // -> 1
