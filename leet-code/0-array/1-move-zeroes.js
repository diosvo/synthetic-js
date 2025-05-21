/**
 * @description Move all 0's to the end of it while maintaining the relative order of the non-zero elements
 */
function moveZeroes(nums) {
  let left = 0;

  for (const right in nums) {
    if (nums[right] !== 0) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
      left++;
    }
  }

  return nums;
}

moveZeroes([0, 1, 0, 3, 12]); // -> [1,3,12,0,0]
moveZeroes([0]); // -> [0]
