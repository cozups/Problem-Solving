/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let count = {};
  let l = 0;
  let res = 0;

  for (let r = 0; r < s.length; r++) {
    count[s[r]] = (count[s[r]] || 0) + 1;

    while (r - l + 1 - Math.max(...Object.values(count)) > k) {
      count[s[l]] -= 1;
      l++;
    }
    res = Math.max(res, r - l + 1);
  }

  return res;
};

console.log(characterReplacement('AABABBA', 1));
