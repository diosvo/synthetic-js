/** 🔁 Iterative
 * Iterates through array once to find the largest number
 *
 * n = length of array
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
const maxValue = (nums) => {
  let max = -Infinity;

  for (const number of nums) {
    if (number > max) max = number;
  }

  return max;
};
