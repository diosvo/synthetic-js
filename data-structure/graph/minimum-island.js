/**
 * @description An island is a vertically or horizontally connected region of land.
 *
 * ⏱️ Time: O(rc) - 🚀 Space: O(rc)
 *
 * @returns {number} The size of the smallest island.
 */
const minimumIsland = (grid) => {
  let minSize = Infinity;
  // Prevent infinite cycles
  const visited = new Set();

  // Iterate each row and column
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = exploreSize(grid, r, c, visited);

      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }

  return minSize;
};

const exploreSize = (grid, row, column, visited) => {
  // Base case
  const rowInbound = 0 <= row && row < grid.length;
  const columnInbound = 0 <= column && column < grid[0].length;

  // [2.1] Invalid position - check before using index
  if (!rowInbound || !columnInbound) return 0;

  // [2.2] Check if it is water
  if (grid[row][column] === 'W') return 0;

  // [1] Graph problem - use visited set.
  const position = row + ',' + column; // Different bound
  if (visited.has(position)) return 0;
  visited.add(position);

  // [3] Explore 4 neighbors
  let size = 1;
  size += exploreSize(grid, row - 1, column, visited); // up
  size += exploreSize(grid, row + 1, column, visited); // down
  size += exploreSize(grid, row, column - 1, visited); // left
  size += exploreSize(grid, row, column + 1, visited); // right

  return size;
};

minimumIsland([
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]); // -> 3
minimumIsland([
  ['W', 'W'],
  ['L', 'L'],
  ['W', 'W'],
  ['W', 'L'],
]); // -> 1
minimumIsland([
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
]); // -> 9
