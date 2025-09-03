/**
 * @argument {number} x - Cat A's position
 * @argument {number} y - Cat B's position
 * @argument {number} z - Mouse C's position
 *
 * ⏱️ Time: O(1) - 🚀 Space: O(1)
 *
 * @example https://www.hackerrank.com/challenges/cats-and-a-mouse
 */
function catAndMouse(x, y, z) {
  const distanceA = Math.abs(z - x);
  const distanceB = Math.abs(z - y);

  if (distanceA > distanceB) {
    return 'Cat B';
  } else if (distanceA < distanceB) {
    return 'Cat A';
  } else {
    return 'Mouse C';
  }
}

catAndMouse(1, 2, 3); // -> Cat B
catAndMouse(1, 3, 2); // -> Mouse C
catAndMouse(2, 5, 4); // -> Cat B
