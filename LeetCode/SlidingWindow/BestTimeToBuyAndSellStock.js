/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let s = 0;
  let e = 0;
  let maxProfit = 0;

  while (s !== prices.length && e !== prices.length) {
    if (s === e) {
      e++;
      continue;
    }

    const profit = prices[e] - prices[s];
    if (profit >= 0) {
      maxProfit = Math.max(maxProfit, profit);
      if (e === prices.length - 1) {
        s++;
      } else {
        e++;
      }
    } else {
      s++;
    }
  }

  return maxProfit;
};
