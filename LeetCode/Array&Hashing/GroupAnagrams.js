// solution 1
// O(mnlogn)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const obj = {};

  for (let str of strs) {
    const sorted = [...str].sort().join('');

    obj[sorted] = obj[sorted] ? [...obj[sorted], str] : [str];
  }

  return Object.values(obj);
};

// solution 2
// O(mn)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const obj = {};

  for (let str of strs) {
    const count = new Array(26).fill(0);

    for (let c of str) {
      count[c.charCodeAt() - 97]++;
    }

    const key = count.join('#');

    obj[key] ? obj[key].push(str) : (obj[key] = [str]);
  }

  return Object.values(obj);
};
