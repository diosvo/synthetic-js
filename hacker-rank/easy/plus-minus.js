/**
 * ⏱️ Time: O(n) - 🚀 Space: O(1)
 *
 * @returns {void} - Prints the ratios of positive, negative, and zero elements in the array
 */
const plusMinus = (arr) => {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  const fixed = 6;
  const size = arr.length;

  for (let i = 0; i < size; i++) {
    const value = arr[i];

    if (value > 0) {
      positiveCount++;
    } else if (value < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  return {
    positive: (positiveCount / size).toFixed(fixed),
    negative: (negativeCount / size).toFixed(fixed),
    zero: (zeroCount / size).toFixed(fixed),
  };
};

plusMinus([1, 1, 0, -1, -1]); // -> { positive: '0.400000', negative: '0.400000', zero: '0.200000' }
