// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function (nums) {
//   const numSet = new Set(nums);

//   return nums.length !== numSet.size;
// };

// other solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hashSet = {};

  for (let num of nums) {
    if (hashSet[num]) {
      return true;
    }
    hashSet[num] = true;
  }

  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
