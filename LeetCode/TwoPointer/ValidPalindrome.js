/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let filtered = s.match(/[a-z0-9]/gi);

  filtered = filtered ? filtered.join('').toLowerCase() : '';

  let start = 0;
  let end = filtered.length - 1;

  while (start < end) {
    if (filtered.charAt(start) === filtered.charAt(end)) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
};
