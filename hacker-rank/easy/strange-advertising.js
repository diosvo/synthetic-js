/**
 * @param {number} n - number of days
 *
 * @example https://www.hackerrank.com/challenges/strange-advertising/
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @return {number} Cumulative likes after n days
 */
function viralAdvertising(n) {
  let shared = 5;
  let result = 0;

  for (let i = 1; i <= n; i++) {
    const liked = Math.floor(shared / 2);
    shared = liked * 3;
    result += liked;
  }

  return result;
}

viralAdvertising(3); // -> 9
viralAdvertising(5); // -> 24
