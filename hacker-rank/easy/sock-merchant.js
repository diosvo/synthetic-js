/**
 * @param n {number} - The number of socks
 * @param arr {Array<number>} - The colors of the socks
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {number} The number of pairs of socks with matching colors
 */
function sockMerchant(n, arr) {
  let pairs = 0;
  let counter = {};

  for (const color of arr) {
    counter[color] = (counter[color] || 0) + 1;
  }

  for (const color in counter) {
    pairs += Math.floor(counter[color] / 2);
  }

  return pairs;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); // -> 3
sockMerchant(10, [1, 2, 1, 2, 1, 3, 2, 1, 3, 3]); // -> 4
