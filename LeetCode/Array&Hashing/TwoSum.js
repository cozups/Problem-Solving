/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const maps = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (maps[diff] >= 0) {
      return [maps[diff], i];
    }
    maps[nums[i]] = i;
  }
};

console.log(twoSum([3, 3], 6));
