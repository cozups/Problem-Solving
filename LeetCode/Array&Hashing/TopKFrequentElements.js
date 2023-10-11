/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};

  for (let num of nums) {
    map[num] ? (map[num] += 1) : (map[num] = 1);
  }

  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .map((e) => +e[0])
    .slice(0, k);
};

console.log(topKFrequent([1], 1));
