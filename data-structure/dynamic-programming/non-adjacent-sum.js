/**
 * @description Do with brute force first -> optimize `slice` with index -> add to memoization
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {number} The maximum sum of non-adjacent elements in the array (no limit how many elements can be taken)
 */
function nonAdjacentSum(nums, index = 0, memo = {}) {
  // Base case
  // In case the current index + 1|2 is greater than nums.length
  if (index >= nums.length) return 0;

  if (index in memo) return memo[index];

  const include = nums[index] + nonAdjacentSum(nums, index + 2, memo);
  const exclude = nonAdjacentSum(nums, index + 1, memo);

  return (memo[index] = Math.max(include, exclude));
}

const bruceForce = (nums) => {
  // Base case
  if (nums.length === 0) return 0;

  // Shrink the array untit it met a base case ^
  // 2 means skip the next value (non-adjacent)
  const include = nums[0] + nonAdjacentSum(nums.slice(2)); // left
  const exclude = nonAdjacentSum(nums.slice(1)); // right

  return Math.max(include, exclude);
};

nonAdjacentSum([2, 4, 5, 12, 7]); // -> 16
nonAdjacentSum([7, 5, 5, 12]); // -> 19
nonAdjacentSum([
  72, 62, 10, 6, 20, 19, 42, 46, 24, 78, 30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
  83, 80, 56, 68, 6, 22, 56, 96, 77, 98, 61, 20, 0, 76, 53, 74, 8, 22, 92, 37,
  30, 41, 75, 38, 23, 28, 66, 55, 12, 17, 72, 62, 10, 6, 20, 19, 42, 46, 24, 78,
  42,
]); // -> 1465 (case that will be timeout with brute-force)
