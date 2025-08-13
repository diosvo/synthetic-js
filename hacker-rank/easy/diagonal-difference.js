/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {number} - The absolute difference between the sums of the diagonals.
 */
const diagonalDifference = (arr) => {
  let primary = 0;
  let secondary = 0;

  const size = arr.length;

  for (let i = 0; i < size; i++) {
    // top-left > bottom-right
    // [0, 0], [1, 1], [2, 2], ...
    // [i, i]
    primary += arr[i][i];

    // top-right > bottom-left
    // [0, 2], [1, 1], [2, 0], ...
    // [i, size - 1 - i]
    secondary += arr[i][size - 1 - i];
  }

  return Math.abs(primary - secondary);
};

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]); // -> 15

diagonalDifference([
  [-1, 1, -7, -8],
  [-10, -8, -5, -2],
  [0, 9, 7, -1],
  [4, 4, -2, 1],
]); // -> 1
