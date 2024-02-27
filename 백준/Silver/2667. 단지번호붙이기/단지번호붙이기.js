const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = fs.readFileSync(file).toString().trim().split('\n');

let k = Number(n);
let map = [];
for (let i = 0; i < k; i++) {
  map.push(input[i].split('').map(Number));
}

let dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let cnt = 0;
let visited = Array.from({ length: k }, () => new Array(k).fill(false));
let ans = [];
for (let i = 0; i < k; i++) {
  for (let j = 0; j < k; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      cnt++;
      let result = dfs(i, j, 1);
      ans.push(result);
    }
  }
}

function dfs(x, y, cnt) {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    let nextX = x + dir[i][0];
    let nextY = y + dir[i][1];
    if (nextX < 0 || nextX >= k || nextY < 0 || nextX >= k) continue;
    if (map[nextX][nextY] === 1 && !visited[nextX][nextY]) {
      cnt = dfs(nextX, nextY, cnt + 1);
    }
  }

  return cnt;
}

console.log(cnt);
ans = ans.sort((a, b) => a - b);
for (let n of ans) {
  console.log(n);
}
