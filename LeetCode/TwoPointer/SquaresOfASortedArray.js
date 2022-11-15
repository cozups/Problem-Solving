/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = [];
  let l = 0;
  let r = nums.length - 1;
  let i = r;

  while (l <= r) {
    if (nums[l] ** 2 < nums[r] ** 2) {
      result[i--] = nums[r--] ** 2;
    } else {
      result[i--] = nums[l++] ** 2;
    }
  }

  return result;
};
