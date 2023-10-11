/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};

  const helper = (str) => {
    return str.split('').sort().join('');
  };

  for (let str of strs) {
    const sortedStr = helper(str);
    if (!map[sortedStr]) {
      map[sortedStr] = [str];
    } else {
      map[sortedStr].push(str);
    }
  }

  return Object.values(map);
};

console.log(groupAnagrams(['A']));
