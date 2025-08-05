/**
 * @description Only move down or right and cannot pass through walls ('X').
 *
 * ⏱️ Time: O(row*column) - 🚀 Space: O(row*column)
 *
 * @returns {number} The number ways possible to travel from the top-left (Start) to the bottom-right (End) corner of the grid.
 */
const countPaths = (grid, row = 0, column = 0, memo = {}) => {
  // Base cases:
  // [1.1] Row and column are out bound
  // [1.2] The cell is a wall
  if (
    row === grid.length ||
    column === grid[0].length ||
    grid[row][column] === 'X'
  )
    return 0;

  // [1.3] Hit the target (the last cell of grid - 1 count is bubble from here)
  if (row === grid.length - 1 && column === grid[0].length - 1) return 1;

  // [3] Memoize the position to avoid recomputation
  const position = row + ',' + column;
  if (position in memo) return memo[position];

  // [2] Count paths down and right
  const downCount = countPaths(grid, row + 1, column, memo);
  const rightCount = countPaths(grid, row, column + 1, memo);

  return (memo[position] = downCount + rightCount);
};

countPaths([
  ['O', 'O'],
  ['O', 'O'],
]); // -> 2

countPaths([
  ['O', 'O', 'X'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
]); // -> 5
//               0,0 (Start)
//             /     \
//            1,0     0,1
//           /   \     |
//          2,0  1,1  1,1 (do the same for 1,1)
//         /     /  \
//        2,1   2,1  1,2
//         |     |    |
//        2,2   2,2  2,2 (End) <-- 📌 Base case = 1 🫧
countPaths([
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
]); // -> 40116600 (case that will be timeout with brute-force)
