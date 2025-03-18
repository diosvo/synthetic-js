/** 🔁 Iterative
 * Creates all possible unique pairs of elements from the array
 *
 * n = length of array
 *
 * ⏱️ Time: O(n²) - 🚀 Space: O(n²)
 * (Creates n(n-1)/2 pairs in worst case)
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
