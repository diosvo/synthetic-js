/**
 * @description Only move down or right / all numbers are non-negative
 *
 * ⏱️ Time: O(row*column) - 🚀 Space: O(row*column)
 *
 * @returns {number} The maximum sum possible by traveling a path from the top-left corner to the bottom-right corner.
 */
const maxPathSum = (grid, row = 0, column = 0, memo = {}) => {
  const position = row + ',' + column;
  if (position in memo) return memo[position];

  // Base case: Never choose outbound value
  if (row === grid.length || column === grid[0].length) return -Infinity;

  const currentValue = grid[row][column];

  // Hit the target (the last cell of grid - value count is bubble from here)
  if (row === grid.length - 1 && column === grid[0].length - 1)
    return currentValue;

  const down = maxPathSum(grid, row + 1, column, memo);
  const right = maxPathSum(grid, row, column + 1, memo);

  // Cache it in memo and choose the larger number between down and right value
  return (memo[position] = currentValue + Math.max(down, right));
};

maxPathSum([
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1],
]); // -> 18
const grid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
maxPathSum(grid); // -> 27
