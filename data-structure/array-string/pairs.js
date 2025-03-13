// n = length of array

// ⏱️ Time: O(n^2)
// 🚀 Space: O(n^2)

/**
 * @param {number} elements An array
 * @returns {array} Returns an array contain all unique pairs of elements.
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
