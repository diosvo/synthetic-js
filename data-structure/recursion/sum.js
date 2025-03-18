/** 🔄 Recursive
 * Recursively adds first element to sum of remaining elements
 *
 * n = # of elements
 *
 * ⏱️ Time: O(n²) - 🚀 Space: O(n²)
 * (Quadratic due to array slicing operation in each recursive call)
 */
const sumRecursive = (numbers) => {
  if (numbers.length === 0) return 0;

  return numbers[0] + sumRecursive(numbers.slice(1));
};

/** 🔁 Iterative
 * Adds each element in a loop
 *
 * n = # of elements
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
const sum = (numbers) => {
  let result = 0;

  for (index = 0; index < numbers.length; index++) {
    result += numbers[index];
  }

  return result;
};
