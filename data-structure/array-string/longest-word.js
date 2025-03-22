/** 🔁 Iterative
 *
 * Splits sentence and compares each word's length to find the longest
 * In case of tie, returns the word that appears later
 *
 * n = length of sentence
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 * (Space needed for storing the split words)
 */
const longestWord = (sentence) => {
  let word = '';

  for (const item of sentence.split(' ')) {
    if (item.length >= word.length) word = item;
  }

  return word;
};

longestWord('The quick brown fox'); // -> 'quick'
