/**
 * @description
 * - ⁉️ Problem: In `min-change`, 7 zeros mean 7 ways to make the amount, but some are duplicates (e.g., 1+2+1 = 2+1+1) (depth)
 * - 💡 Idea: Make a decision for a single coin (breath)
 *
 * ⏱️ Time: O(amount*coin) - 🚀 Space: O(amount*coin)
 *
 * @returns {number} - The number of ways to make change for the given amount
 */
const countingChange = (amount, coins, index = 0, memo = {}) => {
  const key = amount + ',' + index;
  if (key in memo) return memo[key];

  // Base case
  if (amount === 0) return 1;

  // Count the different quanity for current coin
  let total = 0;
  const coin = coins[index];

  for (let quanity = 0; quanity * coin <= amount; quanity++) {
    const remainder = amount - quanity * coin;
    total += countingChange(remainder, coins, index + 1, memo);
  }

  return (memo[key] = total);
};

countingChange(4, [1, 2, 3]); // -> 4
countingChange(8, [1, 2, 3]); // -> 10
countingChange(1000, [1, 5, 10, 25]); // -> 142511  - 💥
