// 제출한 답
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let [l, r] = [0, nums.length - 1];
  let m = 0;
  while (l < r) {
    m = Math.floor((l + r) / 2);

    if (nums[m] > nums[r]) {
      l = m + 1;
    } else if (nums[m] < nums[r]) {
      r = m;
    }
  }

  return nums[l];
};

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMin = function (nums) {
//   let res = nums[0];
//   let [l, r] = [0, nums.length - 1];

//   while (l <= r) {
//     if (nums[l] <= nums[r]) {
//       res = Math.min(res, nums[l]);
//       break;
//     }

//     m = Math.floor((l + r) / 2);
//     res = Math.min(res, nums[m]);
//     if (nums[m] >= nums[l]) {
//       l = m + 1;
//     } else {
//       r = m - 1;
//     }
//   }

//   return res;
// };

console.log(findMin([2, 1]));
