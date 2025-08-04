/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {number} The n-th Fibonacci number sequence.
 */
function fib(n, memo = {}) {
  // Check if the result is already computed
  if (n in memo) return memo[n];

  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Not in memo, compute it
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

fib(0); // -> 0
fib(1); // -> 1
fib(2); // -> 1
fib(3); // -> 2
fib(4); // -> 3
fib(5); // -> 5
fib(35); // -> 9227465
fib(46); // -> 1836311903
