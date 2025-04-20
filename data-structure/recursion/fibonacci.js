/** 🔄 Recursive
 *
 * @description Fibonacci sequence using recursion
 *
 * ⏱️ Time: O(2^n) - 🚀 Space: O(n)
 */
const fibonacci = (n) => {
  if (n === 0 || n === 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Steps:
// fibonacci(n) -> fibonacci(n - 1) + fibonacci(n - 2)
fibonacci(6); // -> 8
