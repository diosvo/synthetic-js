/**
 * ⏱️ Time:O(n) - 🚀 Space: O(1)
 *
 * @returns {number} - Returns the missing number in the sequence
 */
export default function findMissingNumberInSequence(numbers) {
  const length = numbers.length;
  // Expected sum of 0 to length
  const expected = (length * (length + 1)) / 2;
  // Actual sum of the array
  const actual = numbers.reduce((acc, num) => acc + num, 0);

  // Missing number
  return expected - actual;
}

findMissingNumberInSequence([3, 0, 1]); // -> 2
findMissingNumberInSequence([0, 1]); // -> 2
findMissingNumberInSequence([9, 6, 4, 2, 3, 5, 7, 0, 1]); // -> 8
