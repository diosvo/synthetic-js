/**
 * @description Given a directed acyclic graph, a source node, and a destination node,
 * @returns All possible paths from the source to the destination.
 *
 * ⏱️ Time: O(n * 2^n) - 🚀 Space: O(2^n)
 */
const possiblePaths = (graph, src, dst) => {
  if (src === dst) return [[src]]; // Contains current node

  const paths = [];

  for (const neighbor of graph[src]) {
    for (const neighborPath of possiblePaths(graph, neighbor, dst)) {
      neighborPath.unshift(src);
      paths.push(neighborPath);
    }
  }

  return paths;
};

// a---b
// |\  |
// |  \|
// c---d

// possiblePaths(a, d)
//        possiblePaths(b, d)
//            -> [
//                  [a, b, d]
//               ]
//        possiblePaths(c, d)
//            -> [
//                  [a, c, d]
//               ]
//        possiblePaths(d, d) -- Base case
//            -> [
//                  [a, d]
//               ]
possiblePaths(
  {
    a: ['b', 'c', 'd'],
    b: ['d'],
    c: ['d'],
    d: [],
  },
  'a',
  'd',
); // ->
// [
//   ["a", "b", "d"],
//   ["a", "c", "d"],
//   ["a", "d"]
// ]
possiblePaths(
  {
    a: ['b', 'c', 'd'],
    b: ['d'],
    c: ['d'],
    d: [],
  },
  'c',
  'b',
); // -> []
possiblePaths(
  {
    a: ['b', 'd'],
    b: ['c', 'e'],
    c: ['e'],
    d: ['b', 'f'],
    e: ['f'],
    f: [],
  },
  'a',
  'c',
); // ->
// [
//   ["a", "b", "c"],
//   ["a", "d", "b", "c"]
// ]
possiblePaths(
  {
    a: ['b', 'd'],
    b: ['c', 'e'],
    c: ['e'],
    d: ['b', 'f'],
    e: ['f'],
    f: [],
  },
  'a',
  'c',
); // ->
// [
//   ["a", "b", "c"],
//   ["a", "d", "b", "c"]
// ]
