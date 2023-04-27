/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0;
  let r = x;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (m ** 2 < x) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return l ** 2 !== x ? l - 1 : l;
};

console.log(mySqrt(8));
