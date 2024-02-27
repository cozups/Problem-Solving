const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [t, ...input] = fs.readFileSync(file).toString().trim().split('\n');

let dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
let x = 0;
for (let i = 0; i < Number(t); i++) {
  let [m, n, k] = input[x++].split(' ').map(Number);
  let cabbage = input.slice(x, x + k).map((s) => s.split(' ').map(Number));
  x += k;

  let farm = Array.from({ length: n }, () => new Array(m).fill(0));
  let visited = Array.from({ length: n }, () => new Array(m).fill(false));
  for (let j = 0; j < k; j++) {
    let [a, b] = cabbage[j];
    farm[b][a] = 1;
  }

  function dfs(a, b) {
    visited[a][b] = true;

    for (let i = 0; i < 4; i++) {
      let nextA = a + dir[i][0];
      let nextB = b + dir[i][1];
      if (nextA < 0 || nextA >= n || nextB < 0 || nextB >= m) continue;
      if (farm[nextA][nextB] === 1 && !visited[nextA][nextB]) {
        dfs(nextA, nextB);
      }
    }
  }

  let ans = 0;
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < m; b++) {
      if (farm[a][b] === 1 && !visited[a][b]) {
        ans += 1;
        dfs(a, b);
      }
    }
  }

  console.log(ans);
}
