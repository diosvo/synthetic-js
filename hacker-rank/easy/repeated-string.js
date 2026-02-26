/**
 * @argument {string} s - The string to repeat
 * @argument {number} n - The number of characters to consider
 *
 * @return The number of letter `a`'s in the first `n` letters of the infinite string.
 */
function repeatedString(s, n) {
  const countAs = (str) =>
    str.split('').reduce((acc, curr) => (acc += curr === 'a'), 0);

  const len = s.length;

  // Number of full repeats of the string within the first `n` characters
  const fullRepeats = Math.floor(n / len);
  // Number of characters remaining after accounting for full repeats
  const remainderLength = n % len;

  // Calculate total 'a's from full repeats and the remaining substring
  const totalAs = countAs(s) * fullRepeats;
  const remainingAs = countAs(s.slice(0, remainderLength));

  return totalAs + remainingAs;
}

repeatedString('abcac', 10); // -> 4
repeatedString('aba', 10); // -> 7
repeatedString('a', 1000000); // -> 1000000
repeatedString('aab', 882787); // -> 588525
