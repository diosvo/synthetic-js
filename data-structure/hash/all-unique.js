/**
 * - n = # elements
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
const allUnique = (items) => {
  const stored = new Set(items);
  return stored.size === items.length;
};

// Time O(n) due to traversing the original list to set elements

allUnique(['q', 'r', 's', 'a']); // -> true
allUnique(['q', 'r', 's', 'a', 'r', 'z']); // -> false
allUnique(['a', 'u', 't', 'u', 'm', 'n']); // -> false
allUnique(['red', 'blue', 'yellow', 'green', 'orange']); // -> true
