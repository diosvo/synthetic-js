/**
 * ⏱️ Time: O(n^2) - 🚀 Space: O(1)
 */
// WIP: take note - https://www.greatfrontend.com/questions/algo/selection-sort?format=algo
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      // Find the smallest number
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    // Swap the found smallest element with the first element (i) in the unsorted portion
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }

  return arr;
}

selectionSort([2, 3, 5, 9, 8, 4, 7]);
//         sorted |  i        j
//         sorted |  j=minIndex
// minIndex !== i -> swap it
