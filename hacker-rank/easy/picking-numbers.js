/**
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @param {number[]} array - An array of integers
 * @returns {string} - Returns a string with the minimum and maximum sums of four elements in the array
 */
function pickingNumbers(array) {
  let maxLength = 0;
  const frequency = Array(100).fill(0);

  // Count the frequency of each number
  for (const num of array) {
    frequency[num]++;
  }

  // Check pairs of adjacent numbers
  for (let i = 1; i < frequency.length; i++) {
    const currentLength = frequency[i] + frequency[i - 1];
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

pickingNumbers([1, 2, 2, 3, 1, 2]); // -> 5
pickingNumbers([4, 6, 5, 3, 3, 1]); // -> 3
pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]); // -> 5
