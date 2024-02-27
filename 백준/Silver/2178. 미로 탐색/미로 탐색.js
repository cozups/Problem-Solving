const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [meta, ...input] = fs.readFileSync(file).toString().trim().split('\n');

let [n, m] = meta.split(' ').map(Number);
let map = [];
for (let i = 0; i < n; i++) {
  map.push(input[i].split('').map(Number));
}

let dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let visited = Array.from({ length: n }, () => new Array(m).fill(-1));

function bfs() {
  let q = [[0, 0]];
  visited[0][0] = 1;
  while (q.length > 0) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nextX = x + dir[i][0];
      let nextY = y + dir[i][1];
      if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) continue;
      if (map[nextX][nextY] === 1 && visited[nextX][nextY] === -1) {
        q.push([nextX, nextY]);
        visited[nextX][nextY] = visited[x][y] + 1;
      }
    }
  }
}

bfs();
console.log(visited[n - 1][m - 1]);
