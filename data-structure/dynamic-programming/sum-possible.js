/**
 * @description Given an amount and a list of numbers, determine if the amount can be made up using the numbers.
 *
 * @name a is amount
 * @name n is length of numbers
 *
 * ⏱️ Time: O(a*n) - 🚀 Space: O(n)
 */
const sumPossible = (amount, numbers, memo = {}) => {
  // Base cases
  // [1.1] The lowest amount in the tree visualization
  if (amount === 0) return true;
  // [1.2] In case the amount is negative, it cannot be made up
  if (amount < 0) return false;

  // Check if the result is already computed
  if (amount in memo) return memo[amount];

  for (const number of numbers) {
    if (sumPossible(amount - number, numbers, memo)) {
      memo[amount] = true;
      return true;
    }
  }

  memo[amount] = false;
  return false;
};

sumPossible(4, [1, 2, 3]); // -> true
//               4
//             / | \
//            3  2  1
//           /|  |\  \
//          2 1  1 0  0
//         /| |  |
//        1 0 0  0
//       /|
//      0 0 <-- 📌 Base case = true
sumPossible(15, [6, 2, 10, 19]); // -> false
sumPossible(15, [6, 2, 10, 19]); // -> false
sumPossible(0, []); // -> true
sumPossible(16, [7, 6, 3]); // -> true (case that will be timeout with brute-force)
