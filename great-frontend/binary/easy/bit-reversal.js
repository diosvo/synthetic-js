/**
 * ⏱️ Time: O(1) - 🚀 Space: O(n1)
 *
 * @returns {number[]} - An array where the value at each index i represents the number of set bits (1s) in the binary representation of i
 */
function bitReversal(n) {
  // Swap the left and right halves
  n = (n >>> 16) | (n << 16);
  // Swap consecutive bytes
  n = ((n & 0xff00ff00) >>> 8) | ((n & 0x00ff00ff) << 8);
  // Swap consecutive 4-bit groups
  n = ((n & 0xf0f0f0f0) >>> 4) | ((n & 0x0f0f0f0f) << 4);
  // Swap consecutive pairs of bits
  n = ((n & 0xcccccccc) >>> 2) | ((n & 0x33333333) << 2);
  // Swap individual bits
  n = ((n & 0xaaaaaaaa) >>> 1) | ((n & 0x55555555) << 1);

  return n >>> 0; // Ensure unsigned 32-bit result
}
