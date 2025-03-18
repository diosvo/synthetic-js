/** 🔁 Iterative
 * Compare each element with elements that come after it to find maximum profit
 *
 * n = length of prices array
 *
 * ⏱️ Time: O(n²) - 🚀 Space: O(1)
 */
// function ON2(prices) {
//   let max = 0;

//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const profit = prices[j] - prices[i];
//       if (profit > max) max = profit;
//     }
//   }

//   return max;
// }

/** 🔁 Iterative
 * Track minimum price seen so far and calculate max profit at each step
 *
 * n = length of prices array
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
function ON(prices) {
  let max = 0;
  let min = Number.MAX_VALUE;

  for (const price of prices) {
    min = Math.min(min, price);
    max = Math.max(max, price - min);
  }

  return max;
}

function maxProfit(prices) {
  return ON(prices);
}

module.exports = maxProfit;
