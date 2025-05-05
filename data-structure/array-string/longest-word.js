/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 * (Space needed for storing the split words)
 *
 * @returns The longest word in the sentence. In case of tie, returns the word that appears later
 */
const longestWord = (sentence) => {
  let word = '';

  for (const item of sentence.split(' ')) {
    if (item.length >= word.length) word = item;
  }

  return word;
};

longestWord('The quick brown fox'); // -> 'quick'
