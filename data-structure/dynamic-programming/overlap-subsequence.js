/**
 * ⏱️ Time: O(nm) - 🚀 Space: O(nm)
 *
 * @returns {number} The length of the longest overlapping subsequence.
 */
function overlapSubsequence(str1, str2, i = 0, j = 0, memo = {}) {
  const key = i + ',' + j;
  if (key in memo) return memo[key];

  // Base case: if we reach the end of either string
  if (i === str1.length || j === str2.length) return 0;

  // Check matching characters in the front
  if (str1[i] === str2[j]) {
    memo[key] = 1 + overlapSubsequence(str1, str2, i + 1, j + 1, memo);
  } else {
    const sub1 = overlapSubsequence(str1, str2, i + 1, j, memo);
    const sub2 = overlapSubsequence(str1, str2, i, j + 1, memo);

    memo[key] = Math.max(sub1, sub2);
  }

  return memo[key];
}

overlapSubsequence('cat', 'aot'); // -> 2 ('at')
//        cat
//        aot
//       /   \
//    at      cat
//    aot     ot
//     |=1
//     t
//     ot
//    /  \
//   <>   t
//   ot   t
//        |=1
//        <> 📌 Base case
overlapSubsequence('dogs', 'daogt'); // -> 3 ('dog')
overlapSubsequence('xcyats', 'criaotsi'); // -> 4 ('cats')
overlapSubsequence('xfeqortsver', 'feeeuavoeqr'); // -> 5 ('feoqr')
overlapSubsequence('kinfolklivemustache', 'bespokekinfolksnackwave'); // -> 11 ('kinfolklive')
overlapSubsequence(
  'mumblecorebeardleggingsauthenticunicorn',
  'succulentspughumblemeditationlocavore'
); // -> 15 ('umblecorebeardlegingsuo') (case that will be timeout with brute-force)
