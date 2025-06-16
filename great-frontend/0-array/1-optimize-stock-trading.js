const optimizeStockTrading = (prices) => {
  let maxProfit = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;

  for (const price of prices) {
    minPrice = Math.min(price, minPrice);
    const potentialProfit = price - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
  }
};

optimizeStockTrading([7, 1, 5, 3, 6, 4]); // -> 5 (Buy at 1, Sell at 6)
optimizeStockTrading([7, 6, 4, 3, 1]); // -> 0 (No profit possible)
