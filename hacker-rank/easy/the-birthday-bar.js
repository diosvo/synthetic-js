/**
 * @param s {Array<number>} The numbers on each of the squares of cholates
 * @param d {number} Birth day - The sum of integers on the squares is equal to `m`
 * @param m {number} Birth month - The length of contiguous segment
 *
 * @example https://www.hackerrank.com/challenges/the-birthday-bar
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @returns {number} The number of ways the bar can be divided
 */
function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i <= s.length - m; i++) {
    const segment = s.slice(i, i + m);
    const segmentSum = segment.reduce((acc, curr) => acc + curr, 0);

    if (segmentSum === d) count++;
  }

  return count;
}

birthday([2, 2, 1, 3, 2], 4, 2); // -> 2
birthday([1, 2, 1, 3, 2], 3, 2); // -> 2
birthday([1, 1, 1, 1, 1, 1], 3, 2); // -> 0
birthday([4], 4, 1); // -> 1
