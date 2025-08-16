/**
 * @param s {number} - Start point
 * @param t {number} - Endpoint
 * @param a {number} - Location of Apple tree
 * @param b {number} - Location of Orange tree
 * @param apples {Array<number>} - Distances at which each apple falls from the tree
 * @param oranges {Array<number>} - Distances at which each oranges falls from the tree
 *
 * ⏱️ Time: O(apples+oranges) - 🚀 Space: O(1)
 *
 * @example https://www.hackerrank.com/challenges/apple-and-orange/problem
 *
 * @returns {number} Determine the number of apples and oranges that land on the house.
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const countFruits = (treePosition, fruits) =>
    fruits.reduce(
      (count, fruitDistance) =>
        count +
        (treePosition + fruitDistance >= s && treePosition + fruitDistance <= t
          ? 1
          : 0),
      0
    );

  const countApples = countFruits(a, apples);
  const countOranges = countFruits(b, oranges);

  return {
    countApples,
    countOranges,
  };
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]); // -> { countApples: 1, countOranges: 2 }
