/**
 * @description Whether or not the string is the same forwards and backwards.
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }

  return true;
}

isPalindrome('kayak'); // -> true

// kayak
// i   j
//  i j
//   i
//   j
