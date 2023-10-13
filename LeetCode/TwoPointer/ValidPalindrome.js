// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function (s) {
//   let filtered = s.match(/[a-z0-9]/gi);

//   if (!filtered) return true;

//   if (filtered) {
//     filtered = filtered.join('').toLowerCase();
//   }

//   let l = 0;
//   let r = filtered.length - 1;
//   while (l < r) {
//     if (filtered[l] !== filtered[r]) {
//       return false;
//     }
//     l++;
//     r--;
//   }

//   return true;
// };

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  const isAlphanumeric = (c) => {
    const regExp = /[a-zA-Z0-9]/gi;
    return regExp.test(c);
  };

  while (l < r) {
    if (!isAlphanumeric(s[l])) {
      l++;
      continue;
    }

    if (!isAlphanumeric(s[r])) {
      r--;
      continue;
    }

    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }

    l++;
    r--;
  }

  return true;
};

console.log(isPalindrome('race a car'));
