/**
 * @param s - The initial string
 * @param t - The desired string
 * @param k - The exact number of operations that must be performed
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 *
 * @returns {number} Whether it's possible to convert s to t in exactly k operations
 */
function appendAndDelete(s, t, k) {
  if (s.length + t.length < k) return 'Yes';
  let same = Math.min(s.length, t.length);

  for (let i = 0; i < same; i++) {
    // Find a common prefix
    if (s[i] !== t[i]) {
      same = i;
      break;
    }
  }

  // Must delete:
  k -= s.length - same;
  // Need to append:
  k -= t.length - same;

  return k >= 0 && k % 2 === 0 ? 'Yes' : 'No';
}

appendAndDelete('hackerhappy', 'hackerrank', 9); // Yes
appendAndDelete('aba', 'aba', 7); // Yes
appendAndDelete('ashley', 'ash', 2); // No
// k % 2 === 0
appendAndDelete('abc', 'ab', 2); // Yes (delete 'c', k=2, even)
