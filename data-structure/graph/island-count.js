/**
 * ⏱️ Time: O(rc) - 🚀 Space: O(rc)
 */
const islandCount = (grid) => {
  let count = 0;
  // Prevent infinite cycles
  const visited = new Set();

  // Iterate each row and column
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      count += explore(grid, r, c, visited);
    }
  }

  return count;
};

const explore = (grid, row, column, visited) => {
  // 2. Base case: Invalid position - check before using index
  const rowInbound = 0 <= row && row < grid.length;
  const columnInbound = 0 <= column && column < grid[0].length;
  if (!rowInbound || !columnInbound) return false;

  // 3. Check if it is water
  if (grid[row][column] === 'W') return false;

  // 1. Graph problem - use visited set.
  const position = row + ',' + column; // different bound
  if (visited.has(position)) return false;
  visited.add(position);

  // 4. Explore neighbors
  explore(grid, row - 1, column, visited); // up
  explore(grid, row + 1, column, visited); // down
  explore(grid, row, column - 1, visited); // left
  explore(grid, row, column + 1, visited); // right

  // 5. Finish the new island
  return true;
};

islandCount([
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]); // -> 3
islandCount(['W', 'W'], ['W', 'W'], ['W', 'W']); // -> 0
