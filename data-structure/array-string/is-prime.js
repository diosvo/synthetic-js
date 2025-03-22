/** 🔁 Iterative
 *
 * Tests if a number is prime by checking divisibility up to square root
 * A prime number is only divisible by 1 and itself
 *
 * n = input number
 *
 * ⏱️ Time: O(sqrt(n)) - 🚀 Space: O(1)
 */
const isPrime = (n) => {
  if (n < 2) return false;

  for (let index = 2; index <= Math.sqrt(n); index++) {
    if (n % index === 0) return false;
  }

  return true;
};

isPrime(7); // -> true
isPrime(10); // -> false
