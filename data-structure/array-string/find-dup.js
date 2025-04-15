/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @param {number[]} numbers An array of integers
 * @return {boolean} True if there are duplicates, false otherwise
 */
function findDuplicates(numbers) {
  return numbers.length !== new Set(numbers).size;
}

findDuplicates([5, 7, 1, 3]); // -> false
findDuplicates([10, 7, 0, 0, 9]); // -> true
findDuplicates([3, 2, 6, 5, 0, 3, 10, 3, 10, 5]); // -> true
