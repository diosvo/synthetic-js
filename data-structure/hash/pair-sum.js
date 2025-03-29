/**
 * Linear solution - Not good for large data sets
 *
 * ⏱️ Time: O(n^2) - 🚀 Space: O(1)
 */
const pairSumLinear = (numbers, targetSum) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === targetSum) {
        return [i, j];
      }
    }
  }
};

// 💡
// [1, 2, 3, 4, 5]
// complement = 6 - 1 = 5
// 5 not in store
// -> store[1] = 0 (index of 1)

/**
 * Hash table solution
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * Trade off for space time
 */
const pairSum = (numbers, targetSum) => {
  const store = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetSum - num;

    if (complement in store) {
      return [store[complement], i];
    }

    store[num] = i;
  }
};

// Reduce from > 1s to ~60ms
const numbers = [];
for (let i = 0; i <= 30000; i += 1) {
  numbers.push(i);
}
pairSum(numbers, 59999); // -> [ 29999, 30000 ]

pairSum([1, 2, 3, 4, 5], 6); // -> [1, 3]
pairSum([1, 2, 3, 4, 5], 10); // -> null
