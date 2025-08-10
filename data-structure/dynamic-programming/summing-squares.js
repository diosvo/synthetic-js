/**
 * ⏱️ Time: O(n * sqrt(n)) - 🚀 Space: O(n)
 *
 * @returns {number} The minimum number of perfect squares that sum to the target.
 */
const summingSquares = (num, memo = {}) => {
  if (num in memo) return memo[num];

  // Base cases
  if (num === 0) return 0;
  if (num === 1) return 1;

  let min = Infinity;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    const squares = i * i;
    // 1 - counting path logic
    const numSquares = 1 + summingSquares(num - squares, memo);
    min = Math.min(min, numSquares);
  }

  return (memo[num] = min);
};

summingSquares(8); // -> 2
summingSquares(9); // -> 1
summingSquares(12); // -> 3
summingSquares(68); // -> 2 - 💥
