// a → c
// ↓   ↓
// b   e
// ↓
// d → f

// A simple directed graph represented as an ADJACENCY list (hash map).
const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};
