/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  let sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) continue;
    let l = i + 1;
    let r = sorted.length - 1;

    let target = -sorted[i];
    while (l < r) {
      if (sorted[l] + sorted[r] === target) {
        result.push([sorted[i], sorted[l], sorted[r]]);
        while (sorted[l + 1] === sorted[l]) {
          l++;
        }
        l++;
      }
      if (sorted[l] + sorted[r] < target) {
        l++;
        continue;
      }
      if (sorted[l] + sorted[r] > target) {
        r--;
        continue;
      }
    }
  }

  return result;
};

console.log(threeSum([0, 0, 0]));
