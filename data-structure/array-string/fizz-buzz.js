// n = input number

// ⏱️ Time: O(n)
// 🚀 Space: O(n)

/**
 * @param {number} n input number
 * @returns {array} Returns an array containing numbers from 1 to `n`, replacing certain numbers according to the following rules:

- if the number is divisible by 3, make the element "fizz"
- if the number is divisible by 5, make the element "buzz"
- if the number is divisible by 3 and 5, make the element "fizzbuzz"
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
