/**
 * ⏱️ Time: O(n²) - 🚀 Space: O(n²)
 * (Quadratic due to array slicing operation in each recursive call)
 */
function sum(numbers) {
  if (numbers.length === 0) return 0;

  return numbers[0] + sumRecursive(numbers.slice(1));
}

sumRecursive([1, 2, 3, 4, 5]); // -> 15
