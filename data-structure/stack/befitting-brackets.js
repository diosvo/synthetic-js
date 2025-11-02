/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @description Assume the string contains only characters, ( ) [ ] { }
 * @returns {boolean} Return a boolean indicating whether or not the string contains correctly matched brackets
 */
function befittingBrackets(str) {
  const stack = [];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (const char of str) {
    // Check if the bracket is open
    // => Push its corresponding closing bracket.
    if (char in brackets) {
      stack.push(brackets[char]);
    } else {
      // Check if it matches the last opening bracket
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

befittingBrackets('(){}[](())'); // -> true
befittingBrackets('({[]})'); // -> true
befittingBrackets('[][}'); // -> false
befittingBrackets('{[]}({}'); // -> false
befittingBrackets('[]{}(}[]'); // -> false
befittingBrackets('[]{}()[]'); // -> true
befittingBrackets(']{}'); // -> false / Case "return false" directly
befittingBrackets(''); // -> true
befittingBrackets('{[(}])'); // -> false
