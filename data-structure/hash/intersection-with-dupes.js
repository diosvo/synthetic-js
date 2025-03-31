/**
 * - n = length of array a
 * - m = length of array b
 *
 * ⏱️ Time: O(n+m) - 🚀 Space: O(n+m)
 *
 * @returns {Array} a new array containing elements that are common to both input arrays
 */
const intersectionWithDupes = (a, b) => {
  const result = [];
  const counterA = elementCounter(a);
  const counterB = elementCounter(b);

  // 💡 Count values in both arrays, check for existence, and push the smaller value to the result array.

  for (const char in counterA) {
    if (char in counterB) {
      // Choose smaller value
      const min = Math.min(counterA[char], counterB[char]);
      for (let i = 0; i < min; i += 1) {
        result.push(char);
      }
    }
  }

  return result;
};

const elementCounter = (elements) => {
  const counter = {}; // <-- the hash map
  elements.forEach((element) => {
    counter[element] = (counter[element] || 0) + 1;
  });
  return counter;
};

intersectionWithDupes(['a', 'b', 'c', 'b'], ['x', 'y', 'b', 'b']);
// -> ["b", "b"]
intersectionWithDupes(['q', 'b', 'm', 's', 's', 's'], ['s', 'm', 's']);
// -> ["m", "s", "s"]
intersectionWithDupes(['p', 'r', 'r', 'r'], ['r']);
// -> ["r"]
intersectionWithDupes(['r'], ['p', 'r', 'r', 'r']);
// -> ["r"]
intersectionWithDupes(['t', 'v', 'u'], ['g', 'e', 'd', 'f']);
// -> [ ]
intersectionWithDupes(['a', 'a', 'a', 'a', 'a', 'a'], ['a', 'a', 'a', 'a']);
// -> ["a", "a", "a", "a"]
