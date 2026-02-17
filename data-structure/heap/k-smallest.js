import Heap from './heap';

/**
 * ⏱️ Time: O(n*log(n)) - 🚀 Space: O(n)
 *
 * @returns The k smallest numbers in the given array.
 */
const kSmallest = (numbers, k) => {
  const sortedArr = numbers.sort((x, y) => x - y);
  return sortedArr.slice(0, k);
};

/**
 * ⏱️ Time: O(n*log(k)) - 🚀 Space: O(k)
 *
 * @returns The k smallest numbers in the given array.
 */
function kSmallest(numbers, k) {
  const maxHeap = new Heap();

  for (const num of numbers) {
    maxHeap.insert(num);

    if (maxHeap.size() > k) {
      maxHeap.extractRoot();
    }
  }

  const result = [];

  while (!maxHeap.isEmpty()) {
    result.push(maxHeap.extractRoot());
  }

  return result.reverse();
}

kSmallest([8, 2, 7, -3, 5, 10], 3); // -> [-3, 2, 5]
kSmallest([84, 22, 52, 69, 71, 22, 88, 100, 13, 89, 79], 4); // -> [13, 22, 22, 52]
kSmallest(
  [
    43, 35, 62, 31, 86, 81, 58, 80, 91, 13, 54, 78, 75, 69, 60, 8, 22, 12, 30,
    79, 100, 2, 64, 57, 11, 55, 7, 68, 66, 14, 45, 26, 83, 24, 28, 76, 34, 89,
    37, 32, 41, 88, 20, 82, 59, 4, 40, 9, 74, 23,
  ],
  5,
); // -> [2, 4, 7, 8, 9]
