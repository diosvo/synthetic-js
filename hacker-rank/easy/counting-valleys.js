/**
 * @description D - uphill, U - down-hill
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @description A valley - A sequence consecutive steps below the sea level (D)
 * @returns {number} - The number of valleys traversed
 */
function countingValleys(steps, path) {
  let valleys = 0;
  let elevation = 0;

  for (let i = 0; i < steps; i++) {
    const currentHill = path[i];

    if (currentHill === 'D') {
      elevation--;
    } else {
      // 'U'
      if (elevation === -1) {
        // Start from step down - End from step up
        valleys++;
      }
      elevation++;
    }
  }

  return valleys;
}

// _/\      _
//    \    /
//     \/\/
countingValleys(['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U'], 8); // -> 1
