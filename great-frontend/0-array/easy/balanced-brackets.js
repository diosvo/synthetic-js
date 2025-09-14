/**
 * ⏱️ Time:O(n) - 🚀 Space: O(n)
 *
 * @returns {boolean} - Returns true if the brackets are balanced, false otherwise
 */
function isBalancedBrackets(str) {
  //A mapping from closing parentheses to their corresponding opening parentheses
  const mappings = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  // Keep track of opening parentheses
  const stack = [];

  // Iterate through each character in the string
  for (const c of str) {
    // If the current character is a closing parenthesis
    if (mappings[c]) {
      // Pop the top element from the stack
      // Use '#' if the stack is empty
      const topElement = stack.length ? stack.pop() : '#';

      // The popped element does not match the corresponding opening parenthesis
      if (topElement !== mappings[c]) return false;
    } else {
      // The current character is an opening parenthesis, push it onto the stack
      stack.push(c);
    }
  }

  // After processing all characters, the stack should be empty for the string to be valid
  return stack.length === 0;
}

isBalancedBrackets('[]'); // -> true
isBalancedBrackets('([)]'); // -> false / Correctly paired but incorrectly ordered parentheses
isBalancedBrackets('([]){}'); // -> true / Correctly paired and ordered parentheses.
