/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let s = 0;
  let e = nums.length;

  while (s < e) {
    let m = parseInt((s + e) / 2);

    if (nums[m] <= target) {
      s = m + 1;
      if (nums[m] === target) {
        return m;
      }
    } else {
      e = m;
    }
  }

  return s;
};
