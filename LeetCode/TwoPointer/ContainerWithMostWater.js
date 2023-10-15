/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0;
  let [l, r] = [0, height.length - 1];

  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }

    res = Math.max(res, area);
  }

  return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
