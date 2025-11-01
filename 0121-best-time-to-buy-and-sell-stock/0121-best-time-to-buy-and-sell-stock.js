/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 주식 수익 최고값을 얻는 문제. 수익이 없으면 0 반환
    let l = 0;
    let r = 1;
    let maxP = 0;

    while(r < prices.length) {
        if(prices[l] < prices[r]) {
            maxP = Math.max(maxP, prices[r] - prices[l]);
        } else {
            l = r;
        }
        r++;
    }

    return maxP;
};