/**
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @returns The maximum product of a subarray of size k
 */
const maxSubarrayProductSizeK = (nums, k) => {
  // Initialize the max size
  let currentProduct = nums.slice(0, k).reduce((a, b) => a * b, 1);
  let maxProduct = currentProduct;

  // Number of subarrays = n - k;
  for (let i = 0; i < nums.length - k; i++) {
    currentProduct /= nums[i];
    currentProduct *= nums[i + k];

    maxProduct = Math.max(maxProduct, currentProduct);
  }

  return maxProduct;
};

maxSubarrayProductSizeK([4, 2, 1, -9, 8, 2, 3], 3); // -> 48
// [8,2,3] is the subarray of size 3 with the maximal product
maxSubarrayProductSizeK([-9, 1, -8, 2, 3, 7], 3); // -> 72
maxSubarrayProductSizeK([7, 4, -5, -7, 8, -10, -1], 2); // -> 35
maxSubarrayProductSizeK([60, 20, 10, 90, 50], 1); // -> 90
maxSubarrayProductSizeK([1, 2, 3, 4], 4); // -> 24
let nums = [];
for (let i = 0; i < 50000; i += 1) {
  nums.push(1);
}
// [1,1,1,...]
maxSubarrayProductSizeK(nums, 2000); // -> 1
nums = [];
for (let i = 0; i < 120000; i += 1) {
  nums.push(1);
}
// [1,1,1,...]
maxSubarrayProductSizeK(nums, 10000); // -> 1
