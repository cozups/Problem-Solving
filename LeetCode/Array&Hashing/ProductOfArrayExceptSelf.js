/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = new Array(nums.length).fill(1);
  let pre = 1;
  let post = 1;

  // calculate prefix
  for (let i = 0; i < nums.length; i++) {
    result[i] *= pre;
    pre *= nums[i];
  }

  // calculate postfix
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= post;
    post *= nums[i];
  }

  return result;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
