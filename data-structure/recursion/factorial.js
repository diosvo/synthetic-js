/**
 * @description n! = n * (n - 1) * (n - 2) * ... * 1
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
const factorial = (n) => {
  if (n === 0) return 1;

  return n * factorial(n - 1);
};

factorial(5); // -> 120

// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
// factorial(4) = 4 * 3 * 2 * 1 = 24
// factorial(3) = 3 * 2 * 1 = 6
// factorial(2) = 2 * 1 = 2
// factorial(1) = 1
