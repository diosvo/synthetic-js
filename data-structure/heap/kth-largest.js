import Heap from './heap';

/**
 * ⏱️ Time: O(n*log(n)) - 🚀 Space: O(n)
 *
 * @returns The kth largest number in the given array.
 */
const kthLargest = (numbers, k) => {
  const sortedArr = numbers.sort((x, y) => x - y);
  return sortedArr.at(-k);
};

/**
 * ⏱️ Time: O(n*log(k)) - 🚀 Space: O(k)
 *
 * @returns The kth largest number in the given array.
 */
function kthLargest(numbers, k) {
  const heap = new Heap();

  for (number of numbers) {
    heap.insert(numbers);

    // If the heap size exceeds k, remove the minimum value (root)
    if (heap.size() > k) {
      heap.extractRoot();
    }
  }

  return heap.extractRoot();
}

kthLargest([9, 2, 6, 6, 1, 5, 8, 7], 3); // -> 7
kthLargest([9, 2, 6, 6, 1, 5, 8, 7], 4); // -> 6
kthLargest([9, 2, 6, 6, 1, 5, 8, 7], 5); // -> 6
kthLargest([10, 1, 8, 5, 2, 4], 2); // -> 8
kthLargest(
  [
    4, 5, 85, 77, 47, 80, 37, 42, 3, 6, 62, 33, 69, 68, 16, 20, 83, 39, 14, 58,
    75, 35, 72, 36, 19, 18, 66, 61, 41, 79, 28, 43, 7, 24, 40, 53, 32, 12,
  ],
  9,
); // -> 68
kthLargest(
  [
    4, 5, 85, 77, 47, 80, 37, 42, 3, 6, 62, 33, 69, 68, 16, 20, 83, 39, 14, 58,
    75, 35, 72, 36, 19, 18, 66, 61, 41, 79, 28, 43, 7, 24, 40, 53, 32, 12,
  ],
  9,
); // -> 68
