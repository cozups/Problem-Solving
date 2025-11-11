/**
 * @param {number[]} cost 계단을 오르는데 드는 비용
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    // 최고 층을 오르는데 드는 최소 비용 -> 최고 층 index: cost.length
    // 0이나 1 인덱스부터 시작할 수 있음
    const dp = new Array(cost.length + 1).fill(0);

    /* 어떤 층을 올라올 땐, i - 1층까지의 비용을 내고 올라오는 방법과
        i - 2층까지의 비용을 내고 올라오는 방법이 있음
    */
    for (let i = 2; i < cost.length + 1; i++) {
        dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
    }

    return dp.pop();
};