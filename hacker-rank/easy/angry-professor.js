/**
 * @param k - The threshold number of students
 * @param a - Array of arrival times
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @returns "YES" if the class is cancelled, or "NO" otherwise.
 */
function angryProfessor(k, a) {
  let count = 0;

  for (const time of a) {
    // Arrival times go from on time
    if (time <= 0) count++;
  }

  return count < k ? 'YES' : 'NO';
}

angryProfessor(3, [-1, -3, 4, 2]); // -> YES
angryProfessor(2, [0, -1, 2, 1]); // -> NO
angryProfessor(4, [-93, -86, 49, -62, -90, -63, 40, 72, 11, 67]); // -> NO
angryProfessor(10, [23, -35, -2, 58, -67, -56, -42, -73, -19, 37]); // -> YES
