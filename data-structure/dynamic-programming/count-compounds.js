/**
 * @description A compound is made by concatenating one or more elements together.
 *
 * @name c is length of compound
 * @name e is # of elements
 *
 * ⏱️ Time: O(ce) - 🚀 Space: O(c)
 *
 * @returns {number} The number of ways we can make the compound with the given elements.
 */
const countCompounds = (compound, elements, index = 0, memo = {}) => {
  // Base case
  if (compound === '') return 1;
  // Total count of sub-string
  if (index in memo) return memo[index];

  let count = 0;
  for (const element of elements) {
    if (compound.startsWith(element.toLowerCase())) {
      const size = element.length;
      const suffix = compound.slice(size);
      count += countCompounds(suffix, elements, index + size, memo);
    }
  }

  return (memo[index] = count);
};

countCompounds('neco', [
  'Ne',
  'O',
  'Be',
  'I',
  'N',
  'Os',
  'Si',
  'S',
  'Co',
  'C',
  'Ir',
]); // -> 2
countCompounds('nerco', [
  'Ne',
  'O',
  'Be',
  'I',
  'N',
  'Os',
  'Si',
  'S',
  'Co',
  'C',
  'Ir',
]); // -> 0
countCompounds('sir', [
  'Ne',
  'O',
  'Be',
  'I',
  'N',
  'Os',
  'Si',
  'S',
  'Co',
  'C',
  'Ir',
]); // -> 1
countCompounds('hocli', ['C', 'Cl', 'I', 'Ho', 'Li', 'La', 'H', 'O']); // -> 4
countCompounds('noses', [
  'Ne',
  'O',
  'Be',
  'I',
  'N',
  'Os',
  'Si',
  'S',
  'Co',
  'C',
  'Ir',
]); // -> 0
countCompounds('onbeinos', [
  'Ne',
  'O',
  'Be',
  'I',
  'N',
  'Os',
  'Si',
  'S',
  'Co',
  'C',
  'Ir',
]); // -> 2
countCompounds('necoonbeinos', [
  'Ne',
  'O',
  'Be',
  'I',
  'N',
  'Os',
  'Si',
  'S',
  'Co',
  'C',
  'Ir',
]); // -> 4
countCompounds(
  'cocococococococococococococococococococococococococococococox',
  ['Ne', 'O', 'Be', 'I', 'N', 'Os', 'Si', 'S', 'Co', 'C', 'Ir'],
); // -> 0
