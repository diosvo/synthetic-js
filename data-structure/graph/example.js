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

const undirected_graph = {
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
