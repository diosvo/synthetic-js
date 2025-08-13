/**
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @returns {number} - Returns the number of candles that are tallest
 */
const birthdayCakeCandles = (candles) => {
  let count = 0;
  const maxValue = Math.max(...candles);

  for (let i = 0; i < candles.length; i++) {
    const value = candles[i];
    if (value === maxValue) count += 1;
  }

  return count;
};

birthdayCakeCandles([3, 2, 1, 3]); // -> 2
