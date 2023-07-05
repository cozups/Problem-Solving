/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let answer = dp.reduce((acc, cur) => (cur > acc ? cur : acc));

  return answer;
};

console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
