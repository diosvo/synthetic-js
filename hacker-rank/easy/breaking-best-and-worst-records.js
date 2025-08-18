/**
 * @param scores {Array<number>}
 * @param b {Array<number>}
 *
 * @description Determine the number of times the person breaks records for most and least points scored during the season.
 *
 * ⏱️ Time: O(n)- 🚀 Space: O(1)
 *
 * @example https://www.hackerrank.com/challenges/breaking-best-and-worst-records (refer Example)
 */
function breakingRecords(scores) {
  let min = 0;
  let max = 0;

  let minScore = scores[0];
  let maxScore = scores[0];

  for (const score of scores) {
    if (score < minScore) {
      minScore = score;
      min++;
    }

    if (score > maxScore) {
      maxScore = score;
      max++;
    }
  }

  return [max, min];
}

breakingRecords([12, 24, 10, 24]); // -> { max: 1, min: 1 }
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]); // -> { max: 2, min: 4 }
