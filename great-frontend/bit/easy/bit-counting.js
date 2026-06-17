/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {number[]} - An array where the value at each index i represents the number of set bits (1s) in the binary representation of i
 */
function bitCounting(n) {
  // Initialize the counting result vector with 0s for all values from 0 to n
  const counts = new Array(n + 1).fill(0);

  // Build the table using dynamic programming
  for (let i = 1; i <= n; i++) {
    // Least significant bit (LSB) can be obtained using bitwise AND with 1
    const leastSignificantBit = i & 1;
    // Inherit the count from the previous even number (i / 2)
    counts[i] = counts[Math.floor(i / 2)] + leastSignificantBit;
  }

  return counts;
}
