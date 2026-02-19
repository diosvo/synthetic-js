/**
 * @description Given an array of unique elements (n)
 * @returns An array of all possible subsets (2^n)
 *
 * ⏱️ Time: O(2^n) - 🚀 Space: O(2^n)
 */
const subsets = (elements) => {
  if (elements.length === 0) return [[]];

  const first = elements[0]; // 'x'
  const subsetsWithoutFirst = subsets(elements.slice(1)); // [ [] ]

  const subsetsWithFirst = subsetsWithoutFirst.map((sub) => [first, ...sub]); // [ [ 'x' ] ]

  return [...subsetsWithoutFirst, ...subsetsWithFirst];
};

subsets([]); // ->
// [
//   []
// ]
subsets(['x']); // ->
// [
//   [],
//   [ 'x' ]
// ]
subsets(['a', 'b']); // ->
// [
//   [],
//   [ 'b' ],
//   [ 'a' ],
//   [ 'a', 'b' ]
// ]
subsets(['a', 'b', 'c']); // ->
// [
//   [],
//   [ 'c' ],
//   [ 'b' ],
//   [ 'b', 'c' ],
//   [ 'a' ],
//   [ 'a', 'c' ],
//   [ 'a', 'b' ],
//   [ 'a', 'b', 'c' ]
// ]
subsets(['q', 'r', 's', 't']); // ->
// [
//   [],
//   [ 't' ],
//   [ 's' ],
//   [ 's', 't' ],
//   [ 'r' ],
//   [ 'r', 't' ],
//   [ 'r', 's' ],
//   [ 'r', 's', 't' ],
//   [ 'q' ],
//   [ 'q', 't' ],
//   [ 'q', 's' ],
//   [ 'q', 's', 't' ],
//   [ 'q', 'r' ],
//   [ 'q', 'r', 't' ],
//   [ 'q', 'r', 's' ],
//   [ 'q', 'r', 's', 't' ]
// ]
