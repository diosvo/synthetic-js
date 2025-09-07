/**
 * @argument {ranked} - Array of ranked scores
 * @argument {player} - Array of player scores
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
function climbingLeaderboard(ranked, player) {
  const uniqueRanked = [...new Set(ranked)];
  const results = [];
  // Start from the lowest rank
  let index = uniqueRanked.length - 1;

  for (const score of player) {
    while (index >= 0 && score >= uniqueRanked[index]) {
      index--;
    }
    // Rank is 1-based index
    // Expect the rank after the current index
    // => index + 2
    results.push(index + 2);
  }

  return results;
}

climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]); // -> [4,3,1]
climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]); // -> [6,4,2,1]
