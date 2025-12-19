/**
 * ⏱️ Time: O(sw) - 🚀 Space: O(s)
 *
 * @description Similar to canConcat, but checks if a compound string can be formed
 */
function validCompound(compound, elements, memo = {}) {
  if (compound in memo) return memo[compound];
  if (compound === '') return true;

  for (const element of elements) {
    if (compound.startsWith(element.toLowerCase())) {
      {
        const suffix = compound.slice(element.length);
        if (validCompound(suffix, elements, memo)) {
          memo[compound] = true;
          return true;
        }
      }
    }
  }

  memo[compound] = false;
  return false;
}

validCompound('neco', [
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
]); // -> true
validCompound('nerco', [
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
]); // -> false
validCompound('noses', [
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
]); // -> false
validCompound('onbeinos', [
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
]); // -> true
validCompound('cocococococococococococococococococococococococococococococox', [
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
]); // -> false
