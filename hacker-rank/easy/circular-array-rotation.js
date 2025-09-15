/**
 * @argument {Array<number>} a - An array of integers to rotate
 * @argument {number} k - The rotation count
 * @argument {Array<number>} queries - The indices to report
 *
 * ⏱️ Time: O(1) - 🚀 Space: O(n^2)
 */
function circularArrayRotation(a, k, queries) {
  const b = [];
  const result = [];

  for (let i = 0; i < a.length; i++) {
    const current = a[i];
    const location = (i + k) % a.length;
    // Put current element in its new location
    b.splice(location, 0, current);
  }

  for (let i = 0; i < queries.length; i++) {
    result.push(b[queries[i]]);
  }

  return result;
}

/**
 * ⏱️ Time: O(q) - 🚀 Space: O(1)
 */
const circularArrayRotation = (a, k, queries) => {
  const n = a.length;
  const result = [];
  k = k % n; // In case k > n

  for (let i = 0; i < queries.length; i++) {
    // Calculate original index before rotation
    const index = (queries[i] - k + n) % n;
    result.push(a[index]);
  }

  return result;
};

circularArrayRotation([3, 4, 5], 2, [1, 2]); // -> [5, 3]
circularArrayRotation([1, 2, 3], 0, [1]); // -> [2]
circularArrayRotation([1, 2, 3], 2, [0, 1, 2]); // -> [2, 3, 1]
circularArrayRotation(
  [
    39356, 87674, 16667, 54260, 43958, 70429, 53682, 6169, 87496, 66190, 90286,
    4912, 44792, 65142, 36183, 43856, 77633, 38902, 1407, 88185, 80399, 72940,
    97555, 23941, 96271, 49288, 27021, 32032, 75662, 69161, 33581, 15017, 56835,
    66599, 69277, 17144, 37027, 39310, 23312, 24523, 5499, 13597, 45786, 66642,
    95090, 98320, 26849, 72722, 37221, 28255, 60906,
  ],
  51,
  [47, 10, 12, 13, 6]
); // -> [72722, 90286, 44792, 65142, 53682]
