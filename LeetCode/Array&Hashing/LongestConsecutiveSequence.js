/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let num of nums) {
    if (!set.has(num - 1)) {
      let length = 0;
      while (set.has(num + length)) {
        length += 1;
      }
      longest = Math.max(longest, length);
    }
  }

  return longest;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
