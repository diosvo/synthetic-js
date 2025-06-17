/**
 * 👀 Divide and conquer approach
 *
 * ⏱️ Time: O(n log n) - 🚀 Space: O(n)
 */
function mergeSort(list) {
  const length = list.length;
  // Base case
  if (length <= 1) return list;

  // [1] Divide the array into two halves
  const mid = Math.floor(length / 2);

  // [2] Recursively sort both halves
  const left = mergeSort(list.slice(0, mid));
  const right = mergeSort(list.slice(mid));

  // [3] Merge the sorted halves back together
  return merge(left, right);
}

function merge(left, right) {
  const output = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      output.push(left[i]);
      i++;
    } else {
      output.push(right[j]);
      j++;
    }
  }

  // Add remaining elements from left array
  output.push(...left.slice(i));
  // Add remaining elements from right array
  output.push(...right.slice(j));

  return output;
}

mergeSort([3, 1]); // -> [1, 3]
mergeSort([64, 34, 25, 12, 22, 11, 90]); // -> [11, 12, 22, 25, 34, 64, 90]
