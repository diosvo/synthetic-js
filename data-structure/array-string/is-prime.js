// n = input number

// ⏱️ Time: O(sqrt(n))
// 🚀 Space: O(1)

/**
 * @param {number} n A number.
 * @returns {boolean} Returns true if number is a prime (only divisible by two distinct numbers 1 and itself). Otherwise, returns false.
 */
const isPrime = (n) => {
  if (n < 2) return false;

  for (let index = 2; index <= Math.sqrt(n); index++) {
    if (n % index === 0) return false;
  }

  return true;
};
