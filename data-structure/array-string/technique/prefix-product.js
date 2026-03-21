/**
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
const prefixProduct = (numbers) => {
  let total = 1;
  const result = [];

  for (const num of numbers) {
    total *= num;
    result.push(total);
  }

  return result;
};

prefixProduct([4, 2, 1, 6, 3, 6]); // -> [4, 8, 8, 48, 144, 864]
prefixProduct([10, 5, -2, 1, 1]); // -> [10, 50, -100, -100, -100]
prefixProduct([2, 5]); // -> [2, 10]
prefixProduct([12, 88, 0, -50, 30, 2]); // -> [12, 1056, 0, 0, 0, 0]
prefixProduct([2]); // ->  [2]
