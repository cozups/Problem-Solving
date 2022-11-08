/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numsSet = new Set(nums);

  return nums.length !== numsSet.size;
};

// 중복 요소가 있으면 true, 없으면 false 출력하는 문제
// 중복을 포함하지 않는 Set을 이용하면 간단하게 풀 수 있다..(생각 못했음)
