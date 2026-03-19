/**
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @returns The number of subarrays of size k whose sum is equal to target
 */
const subarrayTargetSumSizeK = (nums, target, k) => {
  let currentSum = nums.slice(0, k).reduce((a, b) => a + b, 0);

  // 1 - iterated over the first size k subarray, 0 - otherwise
  let count = Number(currentSum === target);

  for (let i = 0; i < nums.length - k; i++) {
    currentSum -= nums[i];
    currentSum += nums[i + k];

    if (currentSum === target) count++;
  }

  return count;
};

subarrayTargetSumSizeK([2, 3, 2, 2, 3, 1, 3, 8, 5, 0, 2, 4], 7, 3); // -> 5
// The 5 subarrays of size 3 whose sum is 7 are:
//   [2,3,2]
//   [3,2,2]
//   [2,2,3]
//   [3,1,3]
//   [5,0,2]
subarrayTargetSumSizeK([2, 3, 2], 7, 3); // -> 1
subarrayTargetSumSizeK([1, 2, 2, 2, 2, 4, 6, 5, 1, 2, 0, 10, -2, 7], 8, 4); // -> 2
const nums = [];
for (let i = 0; i < 50000; i += 1) {
  nums.push(0);
}
// [0,0,0,...]
subarrayTargetSumSizeK(nums, 1, 5000); // -> 0
