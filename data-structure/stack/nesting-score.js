/**
 * - `[]` - 1 point
 * - `XY` - X + Y points where X, Y are substrings of well-formed brackets
 * - `[S]` - S * 2 points where S is a substring of well-formed brackets
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {string} Return the nesting score of the input string.
 */
function nestingScore(str) {
  if (str.length === 0) return 0;

  const stack = [0];

  for (const char of str) {
    if (char === '[') {
      stack.push(0);
    } else {
      const popped = stack.pop();

      // If it's equal to 0 -> matches with open bracket
      if (popped === 0) {
        // Plus 1 to the last one
        stack[stack.length - 1] += 1;
      } else {
        stack[stack.length - 1] += popped * 2;
      }
    }
  }

  return stack[0];
}

nestingScore('[]'); // -> 1
nestingScore('[][][]'); // -> 3
nestingScore('[[]]'); // -> 2
nestingScore('[[][]]'); // -> 4
nestingScore('[[][][]]'); // -> 6
nestingScore('[[][]][]'); // -> 5
nestingScore('[][[][]][[]]'); // -> 7
nestingScore('[[[[[[[][]]]]]]][]'); // -> 129
nestingScore(''); // -> 0
