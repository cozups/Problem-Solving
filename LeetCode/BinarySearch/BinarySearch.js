/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let s = 0;
  let e = nums.length - 1;
  let answer = -1;

  while (s <= e) {
    let m = parseInt((s + e) / 2);

    if (nums[m] < target) {
      s = m + 1;
    } else if (nums[m] === target) {
      answer = m;
      break;
    } else {
      e = m - 1;
    }
  }

  return answer;
};
