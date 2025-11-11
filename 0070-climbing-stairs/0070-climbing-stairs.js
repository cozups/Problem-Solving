/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // n step을 올라갈 수 있는 방법의 수 구하기
    // 한 번에 1 or 2 step 올라갈 수 있다.
    const d = new Array(n + 1).fill(0);
    d[0] = 0;
    d[1] = 1; // only 1 step

    for (let i = 2; i <= n; i++) {
        d[i] = Math.max(d[i - 1] + 1, d[i - 2] + 1, d[i - 1] + d[i - 2]);
    }

    return d[n];
};