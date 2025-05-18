const boyerMoore = function (nums) {
  let count = 0;
  let result = null;

  for (const num of nums) {
    if (count === 0) {
      result = num;
    }

    count += num === result ? 1 : -1;
  }

  return result;
};

const hashMap = function (nums) {
  let count = 0;
  let result = 0;
  const collection = {};

  for (const num of nums) {
    collection[num] = (collection[num] || 0) + 1;

    if (collection[num] > count) {
      result = num;
      count = collection[num];
    }
  }

  return result;
};

/**
 * @description Majority element that appears more than ⌊n / 2⌋ times
 */
function majorityElement(nums) {
  return hashMap(nums) || boyerMoore(nums);
}

majorityElement([3, 2, 3]); // -> 3
majorityElement([2, 2, 1, 1, 1, 2, 2]); // -> 2
