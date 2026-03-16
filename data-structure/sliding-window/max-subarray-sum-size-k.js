/**
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @returns The maximum sum of a subarray of size k
 */
const maxSubarraySumSizeK = (nums, k) => {
  // Start with the sum of the first k elements
  let currentSum = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = currentSum;

  // Number of subarrays = n - k
  for (let i = 0; i < nums.length - k; i += 1) {
    // Subtract the trailing element
    currentSum -= nums[i];
    // Add the leading element of the next subarray
    currentSum += nums[i + k];

    if (currentSum > maxSum) maxSum = currentSum;
  }

  return maxSum;
};

maxSubarraySumSizeK([4, 2, 1, -9, 8, 4, 3], 3); // -> 15
// [8,4,3] is the subarray of size 3 with the maximal sum
maxSubarraySumSizeK([2, 1, 5, -4, 6], 3); // -> 8
maxSubarraySumSizeK([1, 4, 1, 10, 25, 3, 1, 0, 20], 4); // -> 40
maxSubarraySumSizeK([20, 50, 10, 60, 80, 70], 1); // -> 80
maxSubarraySumSizeK([20, 50, 10, 60, 80, 70], 1); // -> 80
maxSubarraySumSizeK([-4, -18, -2, -5, -9], 2); // -> -7
let nums = [];
for (let i = 0; i < 50000; i += 1) {
  nums.push(1);
}
// [1,1,1,...]
maxSubarraySumSizeK(nums, 2000); // -> 2000

nums = [];
for (let i = 0; i < 120000; i += 1) {
  nums.push(1);
}
// [1,1,1,...]
maxSubarraySumSizeK(nums, 10000); // -> 10000
