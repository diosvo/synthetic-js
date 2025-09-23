/**
 * @description p(p(y)) = x
 *
 * ⏱️ Time: O(n²) - 🚀 Space: O(n)
 */
function permutationEquation(p) {
  let mapping = {};
  let result = [];

  for (let x = 1; x <= p.length; x++) {
    const index = p.findIndex((element) => element === x);
    mapping[x] = index + 1;
  }

  for (const [key, value] of Object.entries(mapping)) {
    result.push(mapping[value]);
  }

  return result;
}

/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
const permutationEquation = (p) => {
  // Build a lookup array: value -> index
  const pos = [];
  for (let i = 0; i < p.length; i++) {
    pos[p[i]] = i + 1;
  }

  // For each x, find y such that p(p(y)) = x
  const result = [];
  for (let x = 1; x <= p.length; x++) {
    const y = pos[pos[x]];
    result.push(y);
  }

  return pos;
};

permutationEquation([5, 2, 1, 3, 4]); // -> [4, 2, 5, 1, 3]
permutationEquation([4, 3, 5, 1, 2]); // -> [1, 3, 5, 4, 2]
