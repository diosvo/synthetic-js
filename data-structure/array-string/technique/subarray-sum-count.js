/**
 * @description A basic understanding of the prefix sum technique.
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
function basic(numbers, target) {
  let sum = 0;
  let prefixSum = [0];

  for (const num of numbers) {
    sum += num;
    prefixSum.push(sum);
  }

  let count = 0;
  const seen = {};
  for (const current of prefixSum) {
    const complement = current - target;

    if (complement in seen) {
      count += seen[complement];
    }

    seen[current] = (seen[current] || 0) + 1;
  }

  return count;
}

/**
 * @description The best optimized solution.
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
function optimized(numbers, target) {
  let sum = 0;
  let count = 0;
  // Initialize with 0 sum rather than pushing it to `prefixSum` array
  const seen = { 0: 1 };

  for (const num of numbers) {
    sum += num;
    const complement = sum - target;

    if (complement in seen) {
      count += seen[complement];
    }

    seen[sum] = (seen[sum] || 0) + 1;
  }

  return count;
}

const subarraySumCount = (numbers, target) => {
  return basic(numbers, target) || optimized(numbers, target);
};

subarraySumCount([1, 3, 1, 4, -2, 3], 5); // -> 3
subarraySumCount([1, 3, 1, 4, 3], 5); // -> 2
subarraySumCount([1, 3, 1, 4, 3], 2); // -> 0
