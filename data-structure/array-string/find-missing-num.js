/**
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @param {number[]} numbers An array of integers
 * @return {number} Missing number in the sequence array
 */
function findMissingNumber(numbers) {
  const length = numbers.length;
  // Expected sum of 0 to length
  const expected = (length * (length + 1)) / 2;
  // Actual sum of the array
  const actual = numbers.reduce((acc, num) => acc + num, 0);
  // Missing number
  return expected - actual;
}

findMissingNumber([1, 3, 0]); // -> 2
findMissingNumber([1]); // -> 0
findMissingNumber([3, 0, 4, 2, 1]); // -> 5
