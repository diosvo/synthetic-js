/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
const compress = (s) => {
  let i = 0;
  let j = 0;
  let result = [];

  while (j <= s.length) {
    if (s[j] === s[i]) {
      j++;
    } else {
      const counter = j - i;

      if (counter > 1) {
        result.push(counter, s[i]);
      } else {
        result.push(s[i]);
      }

      i = j;
    }
  }

  return result.join('');
};

compress('ccaaat'); // -> '2c3a1t'

// ccaaat
// i
// j
// --- Step {n}
//    j - not the same as i → count = j - i
//    i - reset to the next character after the counted character
