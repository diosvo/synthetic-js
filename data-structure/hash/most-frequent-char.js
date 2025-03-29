/**
 * Most frequent character of the string. If there are ties, returns the character that appears first earlier.
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(k) - k is the size of the character set
 */
const mostFrequentChar = (s) => {
  if (s.length === 0) return null;

  // First, count all characters
  const count = {};
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  // Then find the most frequent character
  // This ensures we consider all character counts before making a decision
  let best = s[0];

  // By iterating through the string again, we naturally handle the tie-breaking
  // by selecting the first occurrence of any character with the max count
  for (let char of s) {
    if (count[char] > count[best]) {
      best = char;
    }
  }

  return best;
};

mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('mississippi'); // -> 'i'
mostFrequentChar('potato'); // -> 'o'
mostFrequentChar('eleventennine'); // -> 'e'
mostFrequentChar('riverbed'); // -> 'r'
