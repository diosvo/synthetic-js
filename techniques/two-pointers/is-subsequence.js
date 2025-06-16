/**
 * @description whether or not string1 is a subsequence of string2.
 *
 * ⏱️ Time: O(m) - 🚀 Space: O(1)
 */
const isSubsequence = (string1, string2) => {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < string1.length && pointer2 < string2.length) {
    if (string1[pointer1] === string2[pointer2]) {
      // Match character
      pointer1++;
    }
    pointer2++;
  }

  // return true if pointer1 has traversed all characters in string1
  return pointer1 === string1.length;
};
