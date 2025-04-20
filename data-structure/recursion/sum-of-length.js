/** 🔄 Recursive
 *
 * @description Calculate the sum of the lengths of all strings in an array
 *
 * ⏱️ Time: O(n²) - 🚀 Space: O(n²)
 */
const sumOfLengths = (strings) => {
  if (strings.length === 0) return 0;

  const firstElement = strings.shift();
  return firstElement.length + sumOfLengths(strings);
};

sumOfLengths(['one', 'two', 'three']); // -> 11

// sumOfLengths(['one', 'two', 'three']); --> 11
//        sumOfLengths(['two', 'three']); --> 8
//               sumOfLengths(['three']); --> 5
//                      sumOfLengths([]); --> 0 (base case)
