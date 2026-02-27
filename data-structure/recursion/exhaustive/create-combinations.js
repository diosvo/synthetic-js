/**
 * @description Given an array of unique elements (n) & 1 <= k <= items.length
 *
 * ⏱️ Time: ~O(n choose k) - 🚀 Space: ~O(n choose k)
 *
 * @description `n choose k` refers to the binomial coefficient.
 *
 * @returns A 2D array where each subarray represents all of the combinations of the specified length (n! / (k! * (n-k)!))
 */
const createCombinations = (items, k) => {
  if (k > items.length) return [];
  if (k === 0) return [[]];

  const first = items[0];
  const itemsWithoutFirst = items.slice(1);

  const partialCombos = createCombinations(itemsWithoutFirst, k - 1);
  const combosWithFirst = partialCombos.reduce((acc, curr) => {
    // Add first item to the front of each
    acc.push([first, ...curr]);
    return acc;
  }, []);

  const combosWithoutFirst = createCombinations(itemsWithoutFirst, k);

  return [...combosWithFirst, ...combosWithoutFirst];
};

createCombinations(['a', 'b', 'c'], 2); // ->
// [
//   [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'b', 'c' ]
// ]

// createCombinations(["a", "b", "c"], 2)
// │
// ├─ WITH "a": Get combos of size 1 from ["b", "c"]
// │   │
// │   └─ createCombinations(["b", "c"], 1)
// │       ├─ WITH "b": Get combos of size 0 from ["c"]
// │       │   └─ returns [[]] → add "b" → [["b"]]
// │       │
// │       └─ WITHOUT "b": Get combos of size 1 from ["c"]
// │           └─ createCombinations(["c"], 1)
// │               └─ WITH "c": returns [[]] → add "c" → [["c"]]
// │
// │   Result: [["b"], ["c"]] → add "a" to each → [["a","b"], ["a","c"]]
// │
// └─ WITHOUT "a": Get combos of size 2 from ["b", "c"]
//     │
//     └─ createCombinations(["b", "c"], 2)
//         └─ WITH "b": Get combos of size 1 from ["c"]
//             └─ returns [["c"]] → add "b" → [["b","c"]]

createCombinations(['q', 'r', 's', 't'], 2); // ->
// [
//   [ 'q', 'r' ],
//   [ 'q', 's' ],
//   [ 'q', 't' ],
//   [ 'r', 's' ],
//   [ 'r', 't' ],
//   [ 's', 't' ]
// ]
createCombinations(['q', 'r', 's', 't'], 3); // ->
// [
//   [ 'q', 'r', 's' ],
//   [ 'q', 'r', 't' ],
//   [ 'q', 's', 't' ],
//   [ 'r', 's', 't' ]
// ]
createCombinations([1, 28, 94], 3); // ->
// [
//   [ 1, 28, 94 ]
// ]
