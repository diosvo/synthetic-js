/**
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
const maxValue = (nums) => {
  let max = -Infinity;

  for (const number of nums) {
    if (number > max) max = number;
  }

  return max;
};

maxValue([1, 2, 3, 4, 5]); // -> 5
