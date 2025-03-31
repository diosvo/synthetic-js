/**
 * - n = length of array
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
const pairProduct = (numbers, targetProduct) => {
  const store = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetProduct / numbers[i];

    // 💡 If the complement is not in the hash map,
    // store the current number with its index
    if (complement in store) {
      return [i, store[complement]];
    }

    store[num] = i;
  }
};

const numbers = [];
for (let i = 0; i <= 30000; i += 1) {
  numbers.push(i);
}
pairProduct(numbers, 899970000); // -> [ 29999, 30000 ]

pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
