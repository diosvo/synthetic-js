/**
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @returns {number} The farthest distance between two '1's in the string
 */
function farthestDistance(text) {
  let maxDistance = 0;
  let lastOne = -1;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '1') {
      if (lastOne !== -1) {
        maxDistance = Math.max(maxDistance, i - lastOne);
      }
      lastOne = i;
    }
  }

  return maxDistance;
}

farthestDistance('11'); // -> 1
farthestDistance('100001001000001'); // -> 6
