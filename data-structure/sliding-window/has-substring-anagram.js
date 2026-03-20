/**
 * @param {string} s - String to search
 * @param {string} anagram - String that contain the same characters, but in any order.
 *
 * ⏱️ Time: O(nk) - 🚀 Space: O(k) - k is the size of the character set
 */
function hasSubstringAnagram(s, anagram) {
  const k = anagram.length;
  let windowSet = new Set(s.slice(0, k));
  const anagramSet = new Set(anagram);

  // Check the first window before sliding
  if (areSetsEqual(windowSet, anagramSet)) return true;

  for (let i = 0; i < s.length - k; i++) {
    windowSet.delete(s[i]);
    windowSet.add(s[i + k]);

    if (areSetsEqual(windowSet, anagramSet)) return true;
  }
}

function areSetsEqual(setA, setB) {
  if (setA.size !== setB.size) return false;

  for (const element of setA) {
    if (!setB.has(element)) return false;
  }

  return true;
}

hasSubstringAnagram('greyhounds', 'hoy'); // -> true
// the substring "yho" is an anagram of "hoy"
hasSubstringAnagram('gruyheonds', 'hoy'); // -> false
hasSubstringAnagram('breakdowns', 'snow'); // -> true
hasSubstringAnagram('dermatoglyphics', 'red'); // -> true / First window
hasSubstringAnagram('southernly', 'thorny'); // -> false
hasSubstringAnagram('southernly', 'nerlysouth'); // -> true
