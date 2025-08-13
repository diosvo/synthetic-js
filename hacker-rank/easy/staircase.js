/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
const staircase = (n) => {
  for (let i = 0; i < n; i++) {
    const step = i + 1;
    const space = n - step;

    console.log(' '.repeat(space) + '#'.repeat(step));
  }
};

staircase(4);
//    #
//   ##
//  ###
// ####
