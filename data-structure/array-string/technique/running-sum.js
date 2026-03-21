/**
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
