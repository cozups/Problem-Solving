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

    function bfs(row, col) {
        const q = new Queue();
        q.push([row, col]);
        grid[row][col] = 0;
        let res = 1;

        while (!q.isEmpty()) {
            let [r, c] = q.pop();

            for (let i = 0; i < 4; i++) {
                const nextRow = r + dir[i][0];
                const nextCol = c + dir[i][1];

                if (0 <= nextRow && nextRow < ROWS && 0 <= nextCol && nextCol < COLS && grid[nextRow][nextCol]) {
                    q.push([nextRow, nextCol]);
                    grid[nextRow][nextCol] = 0;
                    res++;
                }
            }
        }
        return res;
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c]) {
                ans = Math.max(ans, bfs(r, c));
            }
        }
    }

    return ans;
};