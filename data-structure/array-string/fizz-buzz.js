/** 🔁 Iterative
 * Generates array 1 to n with replacements:
 * - "fizz" for multiples of 3
 * - "buzz" for multiples of 5
 * - "fizzbuzz" for multiples of both 3 and 5
 *
 * n = input number
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 * (Space for storing the result array)
 */
const fizzBuzz = (n) => {
  // if else 3 & 5 = 15 -> 3 -> 5
  const result = [];

  for (let index = 1; index <= n; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      result.push('fizzbuzz');
    } else if (index % 3 === 0) {
      result.push('fizz');
    } else if (index % 5 === 0) {
      result.push('buzz');
    } else {
      result.push(index);
    }
  }

  return result;
};
