/**
 * ⏱️ Time: O(1) - 🚀 Space: O(1)
 *
 * @returns {number} - The number of set bits (1s) present in the binary representation
 */
function countOnes(num) {
  // Count the number of set bits using Brian Kernighan's algorithm
  let count = 0;

  while (num !== 0) {
    // Check the rightmost bit (e.g, 1000 - 0 ; 1001 - 1)
    // & - bitwise AND
    count += num & 1;
    // >>> - unsigned right shift
    num >>>= 1;
  }

  return count;
}

countOnes(8); // -> 1
countOnes(9); // -> 2
countOnes(123); // -> 6
