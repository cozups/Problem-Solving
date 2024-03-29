/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let s = 1;
    let e = n;

    while (s < e) {
      let m = parseInt((s + e) / 2);

      if (isBadVersion(m)) {
        e = m;
      } else {
        s = m + 1;
      }
    }

    return s;
  };
};
