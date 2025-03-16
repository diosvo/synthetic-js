// n = array numbers

// ⏱️ Time: O(n^2)
// 🚀 Space: O(n^2)

/**
 * @param {Array} numbers A number.
 * @returns {number} Returns true if number is a prime (only divisible by two distinct numbers 1 and itself). Otherwise, returns false.
 */
const sumRecursive = (numbers) => {
  if (numbers.length === 0) return 0;

  return numbers[0] + sumRecursive(numbers.slice(1));
};

const sum = (numbers) => {
  let result = 0;

  for (index = 0; index < numbers.length; index++) {
    result += numbers[index];
  }

  return result;
};
