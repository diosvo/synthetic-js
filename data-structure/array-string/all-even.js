/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns Whether all numbers in the array are even.
 */
const allEven = (nums) => {
  return nums.every((num) => num % 2 === 0);
};

allEven([4, 90, 68, 6, -2]); // -> true
allEven([14, 40, 36, 3]); // -> false
allEven([30, 24, 2048, 0, 12, 50]); // -> true
allEven([7, 7, 7, 7]); // -> false
allEven([100]); // -> true
allEven([1, 2, 4, 6, 8]); // -> false
allEven([42, 18, 96, 4, 70, 12, 58, 30, 84, 26]); // -> true
