/**
 * @param d1 {number} - Returned day
 * @param m1 {number} - Returned month
 * @param y1 {number} - Returned year
 * @param d2 {number} - Due day
 * @param m2 {number} - Due month
 * @param y2 {number} - Due year
 *
 * ⏱️ Time: O(1) - 🚀 Space: O(1)
 *
 * @returns {number} The library fine calculated based on the return date
 */
function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Different year
  if (y1 > y2) return 10000;
  // Same year, different month
  if (y1 === y2 && m1 > m2) return (m1 - m2) * 500;
  // Same year, same month, different day
  if (y1 === y2 && m1 === m2 && d1 > d2) return (d1 - d2) * 15;
  // On time
  return 0;
}

libraryFine(14, 7, 2018, 5, 7, 2018); // -> 135
libraryFine(9, 6, 2015, 6, 6, 2015); // -> 45
libraryFine(1, 1, 2018, 1, 1, 2017); // -> 10000
libraryFine(1, 1, 2018, 31, 12, 2017); // -> 10000
libraryFine(2, 5, 2015, 30, 5, 2015); // -> 0
libraryFine(2, 7, 2015, 1, 2, 2014); // -> 1000
