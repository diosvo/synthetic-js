/** 🔄 Recursive
 *
 * Whether or not the string is the same forwards and backwards.
 * n = string length
 *
 * ⏱️ Time: O(n²) - 🚀 Space: O(n²)
 */
const palindrome = (s) => {
  if (s.length <= 1) return true;
  if (s.at(0) !== s.at(-1)) return false;

  return palindrome(s.slice(1, -1));
};

palindrome('racecar');  // -> true
palindrome('hello');    // -> false
palindrome('');         // -> true
palindrome('a');        // -> true
