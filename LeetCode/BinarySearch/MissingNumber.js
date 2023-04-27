/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  let arr = [];

  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }

  for (let num of nums) {
    if (!binarySearch(arr, num)) {
      return num;
    } else {
      let idx = arr.findIndex((e) => e === num);
      arr.splice(idx, 1);
    }
  }

  function binarySearch(arr, x) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
      let m = Math.floor((l + r) / 2);

      if (arr[m] === x) {
        return true;
      } else if (arr[m] < x) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }

    return false;
  }

  return arr[0];
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
