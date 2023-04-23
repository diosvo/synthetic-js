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