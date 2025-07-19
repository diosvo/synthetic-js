/**
 *
 * @description `X` - Wall
 * @description `O` - Open Spaces
 * @description `C` - Carrot
 *
 * ⏱️ Time: O(rc) - 🚀 Space: O(rc)
 *
 * @returns {number} The number representing the length of the shortest path from the starting position to a carrot.
 */
const closestCarrot = (grid, startRow, startColumn) => {
  //             [row, column, distance]
  const queue = [[startRow, startColumn, 0]];
  const visited = new Set(startRow + ',' + startColumn);

  while (queue.length > 0) {
    const current = queue.shift();
    const [row, column, distance] = current;

    // [1] Determine when the condition is reached -> the distance of the current position is C (carrot)
    if (grid[row][column] === 'C') return distance;

    // [2] The neighbors' positions
    const deltas = [
      [1, 0], // bottom
      [-1, 0], // up
      [0, 1], // right
      [0, -1], // left
    ];

    // [3] Ensure that they are inbound and the current position is not X (wall)
    for (const delta of deltas) {
      const [deltaRow, deltaColumn] = delta;

      const neighborRow = row + deltaRow;
      const neighborColumn = column + deltaColumn;

      const rowInbounds = 0 <= neighborRow && neighborRow < grid.length;
      const columnInbounds =
        0 <= neighborColumn && neighborColumn < grid[0].length;
      const position = neighborRow + ',' + neighborColumn;

      if (
        rowInbounds &&
        columnInbounds &&
        !visited.has(position) &&
        grid[neighborRow][neighborColumn] !== 'X'
      ) {
        queue.push([neighborRow, neighborColumn, distance + 1]);
      }

      visited.add(position);
    }
  }

  return -1;
};

closestCarrot(
  [
    ['O', 'O', 'X', 'O', 'O'],
    ['O', 'X', 'X', 'X', 'O'],
    ['O', 'X', 'C', 'C', 'O'],
  ],
  1,
  4
); // -> 2
closestCarrot(
  [
    ['O', 'O', 'X', 'O', 'O'],
    ['O', 'X', 'X', 'X', 'O'],
    ['O', 'X', 'C', 'C', 'O'],
  ],
  2,
  0
); // -> -1
