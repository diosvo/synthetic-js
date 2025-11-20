/**
 * ⏱️ Time: O(sw) - 🚀 Space: O(s)
 *
 * @description Words can be reused multiple times.
 * @returns {boolean} true if the string can be concatenated from the words, false otherwise.
 */
function canConcat(str, words, memo = {}) {
  if (str in memo) return memo[str];

  // Base case
  if (str === '') return true;

  for (const word of words) {
    // Match the start (prefix) of string
    if (str.startsWith(word)) {
      const suffix = str.slice(word.length);
      if (canConcat(suffix, words, memo)) {
        memo[str] = true;
        return true;
      }
    }
  }

  memo[str] = false;
  return false;
}

canConcat('foodisgood', ['is', 'g', 'f', 'odd', 'foo']); // -> true
//          foodisgood
//         /          \
//      oodisgood     disgood
//         |
//       isgood
//         |
//       good
//         |
//        ood
//         |
//        ''  <-- 📌 Base case = true 🫧
canConcat('oneisnone', ['one', 'none', 'is']); // -> true
canConcat('oneisnone', ['on', 'e', 'is']); // -> false
canConcat('oneisnone', ['on', 'e', 'is', 'n']); // -> true
canConcat('foodisgood', ['is', 'g', 'ood', 'f']); // -> true
canConcat('santahat', ['santah', 'hat']); // -> false
canConcat('santahat', ['santah', 'san', 'hat', 'tahat']); // -> true
canConcat('fooisgood', ['foo', 'is', 'g', 'ood', 'f']); // -> true
canConcat('rrrrrrrrrrrrrrrrrrrrrrrrrrx', [
  'r',
  'rr',
  'rrr',
  'rrrr',
  'rrrrr',
  'rrrrrr',
]); // -> false (case that will be timeout with brute-force)
