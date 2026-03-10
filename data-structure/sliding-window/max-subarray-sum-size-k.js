const maxSubarraySumSizeK = (nums, k) => {
  let currentSum = 0;
  for (let i = 0; i < k; i += 1) {
    currentSum += nums[i];
  }
  let maxSum = currentSum;

  for (let i = 0; i < nums.length - k; i += 1) {
    currentSum -= nums[i];
    currentSum += nums[i + k];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
};
