/**
 * ⏱️ Time: ~O(2^n) - 🚀 Space: ~O(2^n)
 *
 * @returns All possible ways to purchase items without spending more than the given budget.
 */
const groceryBudget = (groceryList, budget) => {
  // End of grocery list - 2D Array → Array inside means "buying nothing"
  if (groceryList.length === 0 && budget >= 0) return [[]];
  // There's no way to spend the budget
  if (budget < 0) return [];

  const [name, price] = groceryList[0];
  const remainingItems = groceryList.slice(1);

  // Include the first item
  const includeFirst = groceryBudget(remainingItems, budget - price);
  const groceryWithFirst = includeFirst.reduce((acc, curr) => {
    acc.push([name, ...curr]);
    return acc;
  }, []);

  // Exclude the first item → Budget stays the same
  const groceryWithoutFirst = groceryBudget(remainingItems, budget);

  return [...groceryWithFirst, ...groceryWithoutFirst];
};

groceryBudget(
  [
    ['eggs', 5],
    ['milk', 3],
    ['butter', 3],
  ],
  7,
); // ->
// [
//   [ 'eggs' ],
//   [ 'butter', 'milk' ],
//   [ 'milk' ],
//   [ 'butter' ],
//   []
// ]

groceryBudget(
  [
    ['eggs', 5],
    ['milk', 3],
    ['butter', 3],
  ],
  20,
); // ->
// [
//   [ 'butter', 'milk', 'eggs' ],
//   [ 'milk', 'eggs' ],
//   [ 'butter', 'eggs' ],
//   [ 'eggs' ],
//   [ 'butter', 'milk' ],
//   [ 'milk' ],
//   [ 'butter' ],
//   []
// ]

groceryBudget(
  [
    ['eggs', 5],
    ['milk', 3],
    ['butter', 3],
    ['garlic', 1],
  ],
  7,
); // ->
// [
//   [ 'garlic', 'eggs' ],
//   [ 'eggs' ],
//   [ 'garlic', 'butter', 'milk' ],
//   [ 'butter', 'milk' ],
//   [ 'garlic', 'milk' ],
//   [ 'milk' ],
//   [ 'garlic', 'butter' ],
//   [ 'butter' ],
//   [ 'garlic' ],
//   []
// ]

groceryBudget(
  [
    ['salt', 1],
    ['apples', 5],
    ['tofu', 7],
    ['chicken', 4],
    ['salmon', 10],
  ],
  9,
); // ->
// [
//   [ 'salt', 'apples' ],
//   [ 'chicken', 'apples' ],
//   [ 'apples' ],
//   [ 'salt', 'tofu' ],
//   [ 'tofu' ],
//   [ 'chicken', 'salt' ],
//   [ 'salt' ],
//   [ 'chicken' ],
//   []
// ]

groceryBudget(
  [
    ['apples', 5],
    ['tofu', 7],
    ['salt', 1],
    ['chicken', 4],
    ['salmon', 10],
    ['thyme', 2],
  ],
  12,
); // ->
// [
//   [ 'tofu', 'apples' ],
//   [ 'thyme', 'chicken', 'salt', 'apples' ],
//   [ 'chicken', 'salt', 'apples' ],
//   [ 'thyme', 'salt', 'apples' ],
//   [ 'salt', 'apples' ],
//   [ 'thyme', 'chicken', 'apples' ],
//   [ 'chicken', 'apples' ],
//   [ 'thyme', 'apples' ],
//   [ 'apples' ],
//   [ 'chicken', 'salt', 'tofu' ],
//   [ 'thyme', 'salt', 'tofu' ],
//   [ 'salt', 'tofu' ],
//   [ 'chicken', 'tofu' ],
//   [ 'thyme', 'tofu' ],
//   [ 'tofu' ],
//   [ 'thyme', 'chicken', 'salt' ],
//   [ 'chicken', 'salt' ],
//   [ 'salmon', 'salt' ],
//   [ 'thyme', 'salt' ],
//   [ 'salt' ],
//   [ 'thyme', 'chicken' ],
//   [ 'chicken' ],
//   [ 'thyme', 'salmon' ],
//   [ 'salmon' ],
//   [ 'thyme' ],
//   []
// ]
