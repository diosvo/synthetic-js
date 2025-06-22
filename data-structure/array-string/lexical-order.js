/**
 * ⏱️ Time: O(sqrt(n)) - 🚀 Space: O(1)
 *
 * @returns {boolean} Returns true if word1 comes before word2 in the given alphabet order
 */
export default function lexicalOrder(word1, word2, alphabet) {
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    const char1 = word1[i];
    const char2 = word2[i];
    // Find the index in the alphabet
    const value1 = alphabet.indexOf(char1);
    const value2 = alphabet.indexOf(char2);

    if (value1 < value2) {
      return true;
    } else if (value2 < value1) {
      // In case word1 is prefix of word2
      return false;
    }
  }

  return true;
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

lexicalOrder('apple', 'dock', alphabet); // -> true
lexicalOrder('app', 'application', alphabet); // -> true

lexicalOrder('apple', 'ample', alphabet); // -> false
lexicalOrder('zoo', 'tick', alphabet); // -> false
// 25
// z o o
// 19
// t i c k
// -> 19 < 25 -> false
