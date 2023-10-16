/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let [l, r] = [0, nums.length - 1];

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (target === nums[m]) {
      return m;
    }

    // left sorted portion
    if (nums[l] <= nums[m]) {
      if (target > nums[m] || target < nums[l]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else {
      // right sorted portion
      if (target < nums[m] || target > nums[r]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }

  return -1;
};

console.log(search([5, 1, 3], 3));
