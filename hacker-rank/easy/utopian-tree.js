/**
 * @param n - Number of growth cycles
 *
 * @description
 * - spring: x2 height
 * - summer: +1 height
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 */
function utopianTree(n) {
  // First case n=0, the initial height=1, remains unchanged.
  let height = 1;

  for (let period = 1; period <= n; period++) {
    height = period % 2 === 1 ? height * 2 : height + 1;
  }

  return height;
}

utopianTree(0); // 1
utopianTree(1); // 2
utopianTree(4); // 7
utopianTree(5); // 14
