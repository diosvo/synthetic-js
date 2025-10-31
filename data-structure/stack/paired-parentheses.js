/**
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @description Assume the string contains only alphabetic characters, '(', or ')'.
 * @returns {boolean} Return a boolean indicating whether or not the string has well-formed parentheses.
 */
function pairedParentheses(str) {
  let count = 0;

  for (const char of str) {
    // Open
    if (char === '(') {
      count += 1;
    } else if (char === ')') {
      // Actual close
      if (count === 0) {
        return false;
      }
      count -= 1;
    }
  }

  return count === 0;
}

pairedParentheses('(david)((abby))'); // -> true
pairedParentheses('()rose(jeff'); // -> false
pairedParentheses(')('); // -> false
pairedParentheses('()'); // -> true
pairedParentheses('(((potato())))'); // -> true
pairedParentheses('(())(water)()'); // -> true
pairedParentheses('(())(water()()'); // -> false
pairedParentheses(''); // -> true
pairedParentheses('))()'); // -> false
