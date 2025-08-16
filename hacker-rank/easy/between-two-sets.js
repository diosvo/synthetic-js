/**
 * @param a {Array<number>}
 * @param b {Array<number>}
 *
 * @description Determine how many such numbers that are between the sets:
 * 1. All elements of the first array (a) are factors of the integer.
 * 2. The integer is a factor of all elements of the second array (b).
 *
 * ⏱️ Time: O(R × (lengthA + lengthB)), where R=range - 🚀 Space: O(1)
 */
function getTotalX(a, b) {
  let count = 0;
  // Limit the factors
  // a -> factors -- [NUMBERS] -- factors -> b
  const maxA = Math.max(...a); // start
  const minB = Math.min(...b); // end

  for (let i = maxA; i <= minB; i++) {
    // Check if all elements in 'a' are factors of 'i'
    const isFactorOfA = a.every((num) => i % num === 0);
    // Check if 'i' is a factor of all elements in 'b'
    const isFactorOfB = b.every((num) => num % i === 0);

    if (isFactorOfA && isFactorOfB) count++;
  }

  return count;
}

getTotalX([2, 6], [24, 36]); // -> [6, 12] -> 2
getTotalX([2, 4], [16, 32, 96]); // -> [4, 8, 16] -> 3
