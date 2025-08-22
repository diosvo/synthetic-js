/**
 * @param n {number} - The number of pages in the book
 * @param p {number} - The page number to turn to
 *
 * @description Can either turn from the front (page 1 is always on the right side) or the back of the book.
 *
 * ⏱️ Time: O(1) - 🚀 Space: O(1)
 *
 * @returns {number} The minimum number of pages to turn to reach page `p`
 */
function pageCount(n, p) {
  // Front
  const front = Math.floor(p / 2);

  // Back
  // If n is even, plus 1 (condition check) for consistent pairing
  const back = Math.floor((n - p + (n % 2 === 0)) / 2);

  return Math.min(front, back);
}

pageCount(5, 3); // -> 1
pageCount(6, 2); // -> 1
pageCount(5, 4); // -> 0
