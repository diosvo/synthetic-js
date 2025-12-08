function quickestConcat(s, words) {
  // 1. Brute-force first
  // 2. Check if the answer is Infinity
  // 3. Add memo
  const answer = _execution(s, words);
  return answer === Infinity ? -1 : answer;
}

function _execution(s, words, memo = {}) {
  if (s in memo) return memo[s];

  // Base case: Empty
  if (s.length === 0) return 0;

  let min = Infinity;
  for (const word of words) {
    if (s.startsWith(word)) {
      const suffix = s.slice(word.length);
      const attempt = 1 + _execution(suffix, words, memo);
      min = Math.min(min, attempt);
    }
  }

  return (memo[s] = min);
}

quickestConcat('caution', ['ca', 'ion', 'caut', 'ut']); // -> 2
//          caution
//         /       \
//       ution     ion
//         |
//        ion
//         |
//        ''  <-- 📌 Base case = 0 🫧
quickestConcat('caution', ['ion', 'caut', 'caution']); // -> 1
quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond']); // -> 4
quickestConcat('simchacindy', ['sim', 'simcha', 'acindy', 'ch']); // -> 3
quickestConcat('simchacindy', ['sim', 'simcha', 'acindy']); // -> -1
quickestConcat('uuuuuu', ['u', 'uu', 'uuu', 'uuuu']); // -> 2
quickestConcat('rongbetty', ['wrong', 'bet']); // -> -1
quickestConcat('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', [
  'u',
  'uu',
  'uuu',
  'uuuu',
  'uuuuu',
]); // -> 7
