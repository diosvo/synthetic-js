/**
 * Anagrams are strings that contain the same characters, but in any order.
 *
 * s1 = string 1
 * s2 = string 2
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(k) - k is the size of the character set
 */
const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  // MY SOLUTION
  // ⏱️ Time: O(n log n) - 🚀 Space: O(n)
  // const arr1 = s1.split('').sort();
  // const arr2 = s2.split('').sort();

  // return arr1.every((item, index) => arr2[index] === item);

  const charCount = {};

  // Count characters in s1
  for (let char of s1) {
    charCount[char] = charCount[char] + 1 || 1;
  }

  // Decrement counts for s2
  for (let char of s2) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
};

anagrams('hello', 'llohe'); // -> true
anagrams('night', 'thing'); // -> true
anagrams('taxi', 'tax'); // -> false
anagrams('po', 'popp'); // -> false
anagrams('pp', 'oo'); // -> false
