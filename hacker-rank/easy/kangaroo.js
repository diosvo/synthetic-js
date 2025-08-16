/**
 * @param x1 {number} - The first kangaroo starts at location
 * @param v1 {number} - Move at a rate of meters per jump
 * @param x2 {number} - The second kangaroo starts at location
 * @param v2 {number} - Move at a rate of meters per jump
 *
 * ⏱️ Time: O(1) - 🚀 Space: O(1)
 *
 * @returns {number} Returns "YES" whether both kangaroos at the same location at the same time, otherwise "NO"
 */
function kangaroo(x1, v1, x2, v2) {
  // Move faster
  if (x1 > x2 && v1 > v2) return 'NO';
  // Move slower
  if (x1 < x2 && v1 < v2) return 'NO';

  // ✅ Equation: after [x] jumps
  // x1 + n*v1 = x2 + n*v2
  // n * v1 - n * v2 = x2 - x1
  // n * (v1-v2) = x2 - x1
  // => n (below)
  const jumpsTimes = (x2 - x1) % (v1 - v2);

  return jumpsTimes === 0 ? 'YES' : 'NO';
}

kangaroo(2, 1, 1, 2); // -> YES - at 3 (after 1 jump)
kangaroo(0, 3, 4, 2); // -> YES - at 12 (after 4 jumps)
kangaroo(14, 4, 98, 2); // -> YES - at 182 (after 14 jumps)
kangaroo(0, 2, 5, 3); // -> NO - x2 move faster
