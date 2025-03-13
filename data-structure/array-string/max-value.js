// n = length of array

// ⏱️ Time: O(n)
// 🚀 Space: O(1)

/**
 * @param {array} nums Array of numbers
 * @returns {number} Returns the largest number in the array.
 */
const maxValue = (nums) => {
  let max = -Infinity;

  for (const number of nums) {
    if (number > max) max = number;
  }

  return max;
};
