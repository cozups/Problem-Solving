const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let idx = 0;

while (true) {
  let cnt = 0;
  let [w, h] = input[idx++].split(' ').map(Number);
  if (w === 0 && h === 0) {
    break;
  }
  let map = [];
  for (let i = 0; i < h; i++) {
    map.push(input[idx + i].split(' ').map(Number));
  }
  let visited = [];
  for (let i = 0; i < h; i++) {
    visited.push(new Array(w).fill(false));
  }

  function dfs(y, x) {
    let dy = [-1, 1, 0, 0, -1, -1, 1, 1];
    let dx = [0, 0, -1, 1, -1, 1, -1, 1];

    visited[y][x] = true;
    for (let i = 0; i < 8; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (ny < 0 || ny >= h || nx < 0 || nx >= w) {
        continue;
      }
      if (map[ny][nx] === 0) {
        continue;
      }
      if (!visited[ny][nx]) {
        dfs(ny, nx);
      }
    }
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (map[i][j] !== 0 && !visited[i][j]) {
        cnt++;
        dfs(i, j);
      }
    }
  }

  console.log(cnt);
  idx += h;
}
