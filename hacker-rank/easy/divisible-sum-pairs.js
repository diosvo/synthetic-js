/**
 * @param arr {Array<number>}
 * @param k {number} The integer divisor
 *
 * @description Determine the number of (i,j) pairs where:
 * - i < j
 * - arr[i] + arr[j] is divisible by `k`
 *
 * ⏱️ Time: O(n^2) - 🚀 Space: O(1)
 */
function divisibleSumPairs(arr, k) {
  let count = 0;
  const size = arr.length;

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if ((arr[i] + arr[j]) % k === 0) count++;
    }
  }

  return count;
}

divisibleSumPairs([1, 2, 3, 4, 5, 6], 5); // -> [1,4], [2,3] and [4,6] => 3
