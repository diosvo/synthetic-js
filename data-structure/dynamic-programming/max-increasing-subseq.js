/**
 * ⏱️ Time: O(n^2) - 🚀 Space: O(n^2)
 *
 * @returns {number} The length of the longest increasing subsequence.
 */
const maxIncreasingSubseq = (
  numbers,
  i = 0,
  previous = -Infinity,
  memo = {},
) => {
  const key = i + ',' + previous;
  if (key in memo) return memo[key];

  // Base case: The end of the array
  if (i === numbers.length) return 0;

  const current = numbers[i];
  const options = [];

  const dontTakeCurrent = maxIncreasingSubseq(numbers, i + 1, previous, memo);
  options.push(dontTakeCurrent);

  if (current > previous) {
    const takeCurrent = 1 + maxIncreasingSubseq(numbers, i + 1, current, memo);
    options.push(takeCurrent);
  }

  return (memo[key] = Math.max(...options));
};

maxIncreasingSubseq([4, 18, 20, 10, 12, 15, 19]); // -> 5
maxIncreasingSubseq([12, 9, 2, 5, 4, 32, 90, 20]); // -> 4
maxIncreasingSubseq([42, 50, 51, 60, 55, 70, 4, 5, 70]); // -> 5
maxIncreasingSubseq([7, 14, 10, 12]); // -> 3
maxIncreasingSubseq([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
]); // -> 21
maxIncreasingSubseq([
  1, 2, 3, 4, 5, 12, 6, 30, 7, 8, 9, 10, 11, 12, 13, 10, 18, 14, 15, 16, 17, 18,
  19, 20, 21, 100, 104,
]); // -> 23
maxIncreasingSubseq([
  1, 2, 300, 3, 4, 305, 5, 12, 6, 30, 7, 8, 9, 10, 10, 10, 15, 11, 12, 13, 10,
  18, 14, 15, 16, 17, 18, 19, 20, 21, 100, 101, 102, 103, 104, 105,
]); // -> 27
maxIncreasingSubSeq([
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]); // -> 1
maxIncreasingSubseq([
  1, 2, 300, 3, 4, 305, 5, 10, 7, 10, 6, 12, 6, 30, 7, 8, 9, 10, 10, 16, 14, 9,
  10, 15, 11, 12, 13, 10, 18, 14, 15, 16, 17, 18, 19, 20, 21, 100, 101, 102,
  103, 104, 105,
]); // -> 27
