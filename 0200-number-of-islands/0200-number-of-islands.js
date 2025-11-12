/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    // 섬의 개수
    // 4면이 바다 -> 섬
    let ans = 0;
    const dir = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ]; // 북 동 남 서
    const visited = Array.from({ length: grid.length }, () => Array.from({ length: grid[0].length }, () => 0));

    function dfs(row, col) {
        if (grid[row][col] !== "1" || visited[row][col] !== 0) return;

        visited[row][col] = 1;

        for (let k = 0; k < 4; k++) {
            let nextRow = row + dir[k][0];
            let nextCol = col + dir[k][1];
            if (0 <= nextRow && nextRow < grid.length && 0 <= nextCol && nextCol < grid[0].length) {
                dfs(nextRow, nextCol);
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const elem = grid[i][j];
            if (elem === "1" && visited[i][j] === 0) {
                dfs(i, j);
                ans++;
            }
        }
    }

    return ans;
};