/**
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @example https://www.hackerrank.com/challenges/the-hurdle-race
 */
function hurdleRace(dose, height) {
  const max = Math.max(...height);
  return Math.max(max - dose, 0);
}

hurdleRace(1, [1, 2, 3, 3, 2]); // -> 2
hurdleRace(4, [1, 6, 3, 5, 2]); // -> 2
hurdleRace(5, [2, 5, 4, 5, 2]); // -> 0
