/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let [l, r] = [0, nums.length - 1];
  k %= nums.length;

  reverse(nums, l, r);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

const reverse = (nums, l, r) => {
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l += 1;
    r -= 1;
  }
};
