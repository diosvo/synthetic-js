/**
 * @description Most obvious solution. Use two pointers with original array.
 *
 * ⏱️ Time: O(n^3) - 🚀 Space: O(1)
 */
function bruceForce(numbers, target) {
  for (let start = 0; start < numbers.length; start++) {
    for (let end = start + 1; end <= numbers.length; end++) {
      let sum = 0;

      for (let i = start; i < end; i++) {
        sum += numbers[i];
        if (sum === target) return true;
      }
    }
  }

  return false;
}

/**
 * @description Second solution. Use two pointers with Prefix Sum technique.
 *
 * ⏱️ Time: O(n^2) - 🚀 Space: O(1)
 */
const prefixSum = (numbers, target) => {
  let sum = 0;
  let prefixSum = [0];

  for (let num of numbers) {
    sum += num;
    prefixSum.push(sum);
  }

  for (let start = 0; start < prefixSum.length; start++) {
    for (let end = start + 1; end < prefixSum.length; end++) {
      if (prefixSum[end] - prefixSum[start] === target) {
        return true;
      }
    }
  }

  return false;
};

/**
 * @description The best optimized solution. Check if whether the complement is exists in hash-map or not.
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
const prefixSumWithHashMap = (numbers, target) => {
  let sum = 0;
  const prefixSum = new Map();

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

    if (sum === target) {
      return true;
    }

    if (prefixSum.has(sum - target)) {
      return true;
    }

    prefixSum.set(sum, i);
  }

  return false;
};

const hasSubArraySum = (numbers, target) => {
  if (numbers.length < 2) {
    return false;
  }

  return (
    bruceForce(numbers, target) ||
    prefixSum(numbers, target) ||
    prefixSumWithHashMap(numbers, target)
  );
};

hasSubArraySum([1, 2, 3, 4, 5], 9); // true
hasSubArraySum([1, 2, 3, 4, 5], 15); // false
