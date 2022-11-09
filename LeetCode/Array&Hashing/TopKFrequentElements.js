// My solution
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const obj = {};

  for (const num of nums) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }

  const sorted = Object.entries(obj).sort(([, a], [, b]) => b - a);

  const answer = [];

  for (let i = 0; i < k; i++) {
    answer.push(+sorted[i][0]);
  }

  return answer;
};

// other solution using bucket sort
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const answer = [];
  const bucket = [];
  const map = new Map();

  for (let i = 0; i <= nums.length; i++) {
    bucket.push([]);
  }

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [num, freq] of map) {
    bucket[freq].push(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      answer.push(...bucket[i]);
    }

    if (answer.length >= k) {
      break;
    }
  }

  return answer;
};
