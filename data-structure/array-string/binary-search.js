/**
 * @description 💡 Idea: Divide the search interval in half.
 * Must implement the `binary search algorithm`
 *
 * ⏱️ Time: O(log n) - 🚀 Space: O(1)
 *
 * @returns {number} Returns the index of the target number in the sorted array, or -1 if not found.
 */
const binarySearch = (numbers, target) => {
  let low = 0;
  let high = numbers.length - 1;

  while (low <= high) {
    const middle = Math.floor((high + low) / 2);

    if (target < numbers[middle]) {
      high = middle - 1;
    } else if (target > numbers[middle]) {
      low = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
};

binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 6); // -> 6
// Step 1     L           M     |     H
//                        M  L  |     H
// Step 2                    L [M]    H
