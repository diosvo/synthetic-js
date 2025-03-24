/** 🔄 Recursive
 *
 * Reverse a string using recursion
 *
 * s = a string
 *
 * ⏱️ Time: O(n²) - 🚀 Space: O(n²)
 */
const reverseString = (s) => {
  if (s.length === 0) return '';

  // MY SOLUTION
  // return s.slice(-1) + reverseString(s.slice(0, s.length - 1));

  // 💡 First character comes to the end.
  return reverseString(s.slice(1)) + s[0];
};

reverseString('hello'); // -> 'olleh'

// reverseString(hello); --> ello       + h
//  reverseString(ello); --> oll      + e
//  reverseString(llo);  --> ol     + l
//   reverseString(lo);  --> o    + l
//    reverseString(o);  --> '' + o
//     reverseString();  --> '' (base case)
