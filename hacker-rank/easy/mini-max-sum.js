/**
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @returns {string} - Returns a string with the minimum and maximum sums of four elements in the array
 */
const miniMaxSum = (arr) => {
  const maxValue = Math.max(...arr); // O(n)
  const minValue = Math.min(...arr); // O(n)
  const total = arr.reduce((acc, curr) => acc + curr, 0); // O(n)

  const minSum = total - maxValue; // O(1)
  const maxSum = total - minValue; // O(1)

  return minSum + ' ' + maxSum;
};

miniMaxSum([1, 3, 5, 7, 9]); // -> '16 24'
