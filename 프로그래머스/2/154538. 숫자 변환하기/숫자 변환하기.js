function solution(x, y, n) {
  let dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x; i < y + 1; i++) {
    if (i !== x && dp[i] === 0) {
      dp[i] = -1;
    }
    if (i * 2 <= y) {
      dp[i * 2] = Math.min(dp[i] + 1, dp[i * 2]);
    }
    if (i * 3 <= y) {
      dp[i * 3] = Math.min(dp[i] + 1, dp[i * 3]);
    }
    if (i + n <= y) {
      dp[i + n] = Math.min(dp[i] + 1, dp[i + n]);
    }
  }

  return dp[y] === Infinity ? -1 : dp[y];
}