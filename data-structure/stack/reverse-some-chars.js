/**
 * ⏱️ Time: O(n+m) - 🚀 Space: O(n+m)
 *
 * @returns {string} Return the string with the order of the given characters in reverse.
 */
const reverseSomeChars = (str, chars) => {
  const targetChars = new Set(chars); // m
  const stack = [];

  for (const char of str) {
    if (targetChars.has(char)) {
      stack.push(char);
    }
  }

  const result = [];
  for (const char of str) {
    if (targetChars.has(char)) {
      result.push(stack.pop());
    } else {
      result.push(char);
    }
  }

  return result.join('');
};

reverseSomeChars('computer', ['a', 'e', 'i', 'o', 'u']); // -> 'cemputor'
reverseSomeChars('skateboard', ['a', 'e', 'i', 'o', 'u']); // -> 'skatobeard'
reverseSomeChars('airplane', ['m', 'n', 'r']); // -> 'ainplare'
reverseSomeChars('airplane', ['m', 'n', 'r']); // -> 'ainplare'
