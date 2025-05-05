/**
 * ⏱️ Time: O(n²) - 🚀 Space: O(n²)
 *
 * Creates n(n-1)/2 pairs in worst case
 */
const pairs = (elements) => {
  const result = [];
  const len = elements.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      result.push([elements[i], elements[j]]);
    }
  }

  return result;
};

pairs([1, 2, 3]); // -> [[1, 2], [1, 3], [2, 3]]
