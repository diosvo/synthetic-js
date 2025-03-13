// n = length of sentence

// ⏱️ Time: O(n)
// 🚀 Space: O(n)

/**
 * @param {string} sentence A sentence string
 * @returns {string} Returns the longest word (tie -> later) in the sentence
 */
const longestWord = (sentence) => {
  let word = '';

  for (const item of sentence.split(' ')) {
    if (item.length >= word.length) word = item;
  }

  return word;
};
