/**
 * - n = length of array a
 * - m = length of array b
 *
 * ⏱️ Time: O(n*m) - 🚀 Space: O(n)
 *
 * Too slow, we need to cutdown the time complexity
 */
const intersectionLinear = (a, b) => {
  return a.filter((num) => b.includes(num));
};

/**
 * - n = length of array a
 * - m = length of array b
 *
 * ⏱️ Time: O(n+m) - 🚀 Space: O(n)
 */
const intersection = (a, b) => {
  const result = [];
  const dataset = new Set(a);

  b.forEach((num) => {
    if (dataset.has(num)) {
      result.push(num);
    }
  });

  return result;
};

intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]); // -> [2,6]
intersection([2, 4, 6], [4, 2]); // -> [2,4]
intersection([0, 1, 2], [10, 11]); // -> []

const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
  a.push(i);
  b.push(i);
}
intersection(a, b); // -> [0,1,2,3,..., 49999]
