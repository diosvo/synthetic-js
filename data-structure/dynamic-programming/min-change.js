/**
 * @description Seeking the shortest path length in a tree.
 *
 * @name a is amount
 * @name c is length of coins
 *
 * ⏱️ Time: O(a*c) - 🚀 Space: O(n)
 *
 * @returns {number} the minimum number of coins required to create the amount.
 */
const minChange = (amount, coins) => {
  const answer = _minChange(amount, coins);
  // Returns -1 if it is not possible to make the amount
  return answer === Infinity ? -1 : answer;
};

const _minChange = (amount, coins, memo = {}) => {
  if (amount in memo) return memo[amount];

  // Base cases
  // [1.1] The lowest amount in the tree visualization
  if (amount === 0) return 0;
  // [1.2] In case the amount is negative
  if (amount < 0) return Infinity;

  let min = Infinity;
  for (const coin of coins) {
    // 1 means the number of coins used to make the amount (like each level in the tree), affecting the counting everytime.
    const numCoins = 1 + _minChange(amount - coin, coins, memo);
    min = Math.min(min, numCoins);
  }

  return (memo[amount] = min);
};

minChange(4, [1, 2, 3]); // -> 2
//               4
//             / | \
//            3  2  1
//           /|  |\  \
//          2 1  1 0  0 (min at level 2)
//         /| |  |
//        1 0 0  0
//       /|
//      0 0 <-- 📌 Base case = true
minChange(8, [1, 5, 4, 12]); // -> 2, because 4+4 is the minimum coins possible
minChange(13, [1, 9, 5, 14, 30]); // -> 5, 5+5+1+1+1
minChange(23, [2, 5, 7]); // -> 4, 7+7+7+2
minChange(2017, [4, 2, 10]); // -> -1 (case that will be timeout with brute-force)
minChange(0, []); // -> 0
