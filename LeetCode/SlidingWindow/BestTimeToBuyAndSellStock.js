/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let [l, r] = [0, 1];
  let res = 0;

  while (l < prices.length && r < prices.length) {
    let profit = prices[r] - prices[l];

    if (prices[l] > prices[r]) {
      l = r;
      r++;
    } else {
      r++;
    }

    res = Math.max(res, profit);
  }

  return res;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
