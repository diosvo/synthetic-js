/**
 * @param {number[]} h - Array of heights for each letter
 * @param {string} word - The word to highlight
 *
 * @description AREA = The tallest letter as height * the length of the word as width
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
function designerPdfViewer(h, word) {
  const mapping = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .reduce((acc, char, index) => {
      acc[char] = index;
      return acc;
    }, {});

  let height = 0;
  const width = word.length;

  for (let i = 0; i < width; i++) {
    const wordIndex = mapping[word[i]];
    height = Math.max(height, h[wordIndex]);
  }

  return height * width;
}

designerPdfViewer(
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5,
  ],
  'abc'
); // -> 9
designerPdfViewer(
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    7,
  ],
  'zaba'
); // 28
