/**
 * @param i - Starting day
 * @param j - Ending day
 * @param k - Divisor
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @returns {number} The number of beautiful days in the range [i, j].
 */
function beautifulDays(i, j, k) {
  let count = 0;

  for (let start = i; start <= j; start++) {
    const isBeautifulDay = Math.abs(start - reverseNum(start)) % k === 0;
    if (isBeautifulDay) count++;
  }

  return count;
}

function reverseNum(n) {
  let result = 0;

  // Only check positive number
  while (n > 0) {
    result = result * 10 + (n % 10);
    n = parseInt(n / 10);
  }

  return result;
}

beautifulDays(20, 23, 6); // -> 2
