/**
 * @param {number} n - Number of prisoners
 * @param {number} m - Number of sweets
 * @param {number} s - Starting chair number
 *
 * ⏱️ Time: O(1) - 🚀 Space: O(1)
 *
 * @return {number} The chair number of the prisoner to warn
 */
function saveThePrisoner(n, m, s) {
  // Calculate the total "steps" taken from a 0-indexed starting point.
  // steps = (s - 1 + m - 1)
  return ((s - 1 + m - 1) % n) + 1;
}

saveThePrisoner(4, 6, 2); //  -> 3
// candy: 1, 2, 3, 4, 5, 6
// chair: 2, 3, 4, 1, 2, 3
saveThePrisoner(5, 2, 1); //  -> 2
saveThePrisoner(7, 19, 2); //  -> 6
saveThePrisoner(3, 7, 3); // -> 3
