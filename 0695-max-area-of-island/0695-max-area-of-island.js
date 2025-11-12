/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  // 섬의 최대 너비 구하기
  let ans = 0;
  const ROWS = grid.length;
  const COLS = grid[0].length;

  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(row, col, area) {
    if (row < 0 || col < 0 || row >= ROWS || col >= COLS || grid[row][col] === 0) {
      return 0;
    }

    grid[row][col] = 0;
    let res = 1;

    for (let i = 0; i < 4; i++) {
      res += dfs(row + dir[i][0], col + dir[i][1], area);
    }

    return res;
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c]) {
        ans = Math.max(ans, dfs(r, c, 0));
      }
    }
  }

  return ans;
};