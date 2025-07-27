/**
 * @description There is exactly two islands in the grid.
 *
 * ⏱️ Time: O(rc) - 🚀 Space: O(rc)
 *
 * @returns {number} The minimum number of bridges to connect the two islands.
 */
const bestBridge = (grid) => {
  let mainIsland;

  // Phase 1️⃣: DFS - Find islands
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      const potentialIsland = traverseIsland(grid, row, column, new Set());

      if (potentialIsland.size > 0) mainIsland = potentialIsland;
    }
  }

  // Phase 2️⃣: BFS
  const visited = new Set(mainIsland);
  const queue = [];

  // Initialize queue with counting 0
  for (let position of mainIsland) {
    const [row, column] = position.split(',').map(Number);
    queue.push([row, column, 0]);
  }

  while (queue.length > 0) {
    const [row, column, distance] = queue.shift();
    const position = row + ',' + column;

    // Base case: the current position is Land AND not part of main island
    // -> Find out another land.
    if (grid[row][column] === 'L' && !mainIsland.has(position)) {
      // Return the previous count before the Land
      return distance - 1;
    }

    // Traverse neighbors
    const deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (const delta of deltas) {
      const [deltaRow, deltaColumn] = delta;
      const neighborRow = row + deltaRow;
      const neighborColumn = column + deltaColumn;
      const neighborPosition = neighborRow + ',' + neighborColumn;

      if (
        isInbounds(grid, neighborRow, neighborColumn) &&
        !visited.has(neighborPosition)
      ) {
        visited.add(neighborPosition);
        queue.push([neighborRow, neighborColumn, distance + 1]);
      }
    }
  }

  return queue;
};

// [1.1] Make sure rows and columns are inbound
const isInbounds = (grid, row, column) => {
  const rowInbound = 0 <= row && row < grid.length;
  const columnInbound = 0 <= column && column < grid[0].length;

  return rowInbound && columnInbound;
};

// [1.2] Determine islands
const traverseIsland = (grid, row, column, visited) => {
  // Base case: not inbound and is Water
  if (!isInbounds(grid, row, column) || grid[row][column] === 'W')
    return visited;

  // Make visited
  const position = row + ',' + column;
  if (visited.has(position)) return visited;
  visited.add(position);

  // Traverse 4 directions
  traverseIsland(grid, row - 1, column, visited); // up
  traverseIsland(grid, row + 1, column, visited); // down
  traverseIsland(grid, row, column - 1, visited); // left
  traverseIsland(grid, row, column + 1, visited); // right

  return visited;
};

bestBridge([
  ['W', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'L'],
  ['L', 'L', 'L', 'W', 'L'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
]); // -> 1
bestBridge([
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'W', 'W'],
]); // -> 3
