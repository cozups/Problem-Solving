/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let l = 0;
  let r = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[l] === 0) {
      nums.splice(r, 0, nums[l]);
      nums.splice(l, 1);
    } else {
      l++;
    }
  }

  return nums;
};
