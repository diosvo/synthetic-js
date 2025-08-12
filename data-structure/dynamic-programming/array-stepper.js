/**
 * ⏱️ Time: O(n^2) - 🚀 Space: O(n)
 *
 * @returns {boolean} true if it is possible to reach the end of the array, false otherwise.
 */
const arrayStepper = (nums, index = 0, memo = {}) => {
  if (index in memo) return memo[index];
  // Base case: A bound check to see if we can reach the end of the array
  if (index >= nums.length - 1) return true;

  for (let step = 1; step <= nums[index]; step++) {
    if (arrayStepper(nums, index + step, memo)) {
      return (memo[index] = true);
    }
  }

  return (memo[index] = false);
};

// index:     0, 1, 2, 3, 4, 5
arrayStepper([2, 4, 2, 0, 0, 1]); // -> true
//               0
//             /   \
//            1     2
//           / \   / \
//          2...5 3   4 (💀 dead end, value = 0)
//             🔺
arrayStepper([2, 3, 2, 0, 0, 1]); // -> false
arrayStepper([
  31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13,
  12, 11, 10, 9, 8, 7, 6, 5, 3, 2, 1, 0, 0, 0,
]); // -> false - 💥
