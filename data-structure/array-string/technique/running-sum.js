/**
 * @description Use Prefix Sum technique.
 * @example i-th result should be the sum of all elements 0 to i:
 *
 * ```result[i] = numbers[0] + numbers[1] + numbers[2] + ... + numbers[i]```
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
const runningSum = (numbers) => {
  let sum = 0;
  const result = [];

  for (const num of numbers) {
    sum += num;
    result.push(sum);
  }

  return result;
};

runningSum([1, 2, 3, 4]); // -> [1, 3, 6, 10]
