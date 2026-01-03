/**
 * @param {number} a - Lower bound
 * @param {number} b - Upper bound
 *
 * ⏱️ Time: O(1) - 🚀 Space: O(1)
 *
 * @return {number} The count of perfect squares in the range [a, b]
 */
function squares(a, b) {
  // Smallest integer which squares >= a
  const sqrtA = Math.ceil(Math.sqrt(a));
  // Largest integer which squares <= b
  const sqrtB = Math.floor(Math.sqrt(b));

  return sqrtB - sqrtA + 1;
}

squares(24, 49); // 3
squares(3, 9); // 2
squares(17, 24); // 0
