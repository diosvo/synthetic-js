/**
 * @param arr {Array<number>} - The types of birds sighted
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(k) where k is number of unique bird types
 *
 * @returns {number} The type of the most frequently sighted bird
 */
function migratoryBirds(arr) {
  const result = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  const max = Math.max(...Object.values(result));

  return Object.keys(result).find((key) => result[key] === max);
}

migratoryBirds([1, 4, 4, 4, 5, 3]); // -> 4;
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]); // -> 3
