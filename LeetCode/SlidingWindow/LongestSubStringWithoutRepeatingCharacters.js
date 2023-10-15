/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;

  let map = new Set();
  let l = 0;
  let res = 1;
  for (let r = 0; r < s.length; r++) {
    while (map.has(s[r])) {
      map.delete(s[l]);
      l++;
    }
    map.add(s[r]);
    res = Math.max(res, r - l + 1);
  }
  return res;
};
