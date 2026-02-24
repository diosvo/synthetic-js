/**
 * @description Given an array of unique elements (n)
 *
 * ⏱️ Time: ~O(n!) - 🚀 Space: ~O(n!)
 *
 * @returns A 2D array where each subarray represents one of the possible permutations of the array (n!)
 */
const permutations = (items) => {
  if (items.length === 0) return [[]];

  const first = items[0];
  const perms = permutations(items.slice(1));

  const result = [];

  for (const perm of perms) {
    for (let i = 0; i <= perm.length; i++) {
      //          front                middle  end
      result.push([...perm.slice(0, i), first, ...perm.slice(i)]);
    }
  }

  return result;
};

permutations([]); // ->
// [
//  [ ]
// ]

permutations(['red', 'blue']); // ->
// [
//   [ 'red', 'blue' ],
//   [ 'blue', 'red' ]
// ]

permutations(['a', 'b', 'c']); // ->
// [
//   [ 'a', 'b', 'c' ],
//   [ 'a', 'c', 'b' ],
//   [ 'b', 'a', 'c' ],
//   [ 'b', 'c', 'a' ],
//   [ 'c', 'a', 'b' ],
//   [ 'c', 'b', 'a' ]
// ]

permutations([8, 2, 1, 4]); // ->
// [
//   [ 8, 2, 1, 4 ], [ 2, 8, 1, 4 ],
//   [ 2, 1, 8, 4 ], [ 2, 1, 4, 8 ],
//   [ 8, 1, 2, 4 ], [ 1, 8, 2, 4 ],
//   [ 1, 2, 8, 4 ], [ 1, 2, 4, 8 ],
//   [ 8, 1, 4, 2 ], [ 1, 8, 4, 2 ],
//   [ 1, 4, 8, 2 ], [ 1, 4, 2, 8 ],
//   [ 8, 2, 4, 1 ], [ 2, 8, 4, 1 ],
//   [ 2, 4, 8, 1 ], [ 2, 4, 1, 8 ],
//   [ 8, 4, 2, 1 ], [ 4, 8, 2, 1 ],
//   [ 4, 2, 8, 1 ], [ 4, 2, 1, 8 ],
//   [ 8, 4, 1, 2 ], [ 4, 8, 1, 2 ],
//   [ 4, 1, 8, 2 ], [ 4, 1, 2, 8 ]
// ]
