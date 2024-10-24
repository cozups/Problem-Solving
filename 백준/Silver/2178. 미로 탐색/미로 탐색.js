const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [[n, m], ...map] = input.map((s, i) =>
  i === 0 ? s.split(' ').map(Number) : s.split('').map(Number)
);
let visited = Array.from({ length: n }, () => new Array(m).fill(-1));

function bfs() {
  let q = [[0, 0]];
  visited[0][0] = 1;

  let dy = [-1, 1, 0, 0];
  let dx = [0, 0, -1, 1];

  while (q.length) {
    let [y, x] = q.shift();
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
        continue;
      }
      if (map[ny][nx] === 1 && visited[ny][nx] === -1) {
        visited[ny][nx] = visited[y][x] + 1;
        q.push([ny, nx]);
      }
    }
  }

  console.log(visited[n - 1][m - 1]);
}

bfs();
