/**
 * ⏱️ Time: O(nlogn) - 🚀 Space: O(n)
 *
 * @returns {Array} Returns array containing the combined intervals.
 */
function combineIntervals(intervals) {
  // Sort intervals by start time
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  const combined = [intervals[0]];

  // Iterate remaining intervals
  for (const current of sorted.slice(1)) {
    const [currentStart, currentEnd] = current;
    const lastCombined = combined[combined.length - 1];

    // If the current interval overlaps with the last combined interval
    // -> merge them
    if (currentStart <= lastCombined[1]) {
      lastCombined[1] = Math.max(lastCombined[1], currentEnd);
    } else {
      combined.push(current);
    }
  }

  return combined;
}

combineIntervals([
  [1, 4],
  [12, 15],
  [3, 7],
  [8, 13],
]); // -> [[1, 7], [8, 15]]
combineIntervals([
  [6, 8],
  [2, 9],
  [10, 12],
  [20, 24],
]);
// -> [[2, 9], [10, 12], [20, 24]]
