/**
 * ⏱️ Time: O(n^2) - 🚀 Space: O(n^2)
 *
 * @argument {string} i - start index (from the left)
 * @argument {string} j - end index (from the right)
 *
 * @returns {number} The length of the longest palindromic subsequence in the input string.
 */
function maxPalinSubsequence(str, i = 0, j = str.length - 1, memo = {}) {
  const key = i + ',' + j;
  if (key in memo) return memo[key];

  // Base cases
  // [1.1] Just one character -> it's palindrome itself
  if (i === j) return 1;
  // [1.2] Outbound (empty)
  if (i > j) return 0;

  if (str[i] === str[j]) {
    // 2 means the number of matched characters
    memo[key] = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo);
  } else {
    // Choose the max number in sub-cases
    const left = maxPalinSubsequence(str, i + 1, j, memo);
    const right = maxPalinSubsequence(str, i, j - 1, memo);
    memo[key] = Math.max(left, right);
  }

  return memo[key];
}

maxPalinSubsequence('sosd'); // -> 3
//    sosd
//    / \
//  osd  sos
//  / \   | = 2
// sd  os o
// /\  /\
// d s s d -> All = 1 📌 Base case 🫧
maxPalinSubsequence('luwxult'); // -> 5
maxPalinSubsequence('xyzaxxzy'); // -> 6
maxPalinSubsequence('lol'); // -> 3
maxPalinSubsequence('boabcdefop'); // -> 3
maxPalinSubsequence('chartreusepugvicefree'); // -> 7
maxPalinSubsequence('qwueoiuahsdjnweuueueunasdnmnqweuzqwerty'); // -> 15
maxPalinSubsequence(
  'enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe'
); // -> 31 (case that will be timeout with brute-force)
