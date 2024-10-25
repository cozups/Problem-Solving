const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [[m, n], ...map] = input.map((s) => s.split(' ').map(Number));

let q = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 1) {
      q.push([i, j]);
    }
  }
}

function bfs() {
  let dy = [-1, 1, 0, 0];
  let dx = [0, 0, -1, 1];
  let idx = 0;
  while (idx < q.length) {
    let [y, x] = q[idx++];

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
        continue;
      }
      if (map[ny][nx] === 0) {
        map[ny][nx] = map[y][x] + 1;
        q.push([ny, nx]);
      }
    }
  }
}

function getDay() {
  let max = -1;
  for (let arr of map) {
    if (arr.includes(0)) {
      return -1;
    }
    max = Math.max(max, ...arr);
  }
  return max - 1;
}

bfs();
console.log(getDay());
