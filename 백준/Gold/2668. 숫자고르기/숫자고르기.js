const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [k, ...input] = fs.readFileSync(file).toString().trim().split('\n');

let n = Number(k);
let adj = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= n; i++) {
  adj[i].push(+input[i - 1]);
}

let result = [];
let visited = null;
for (let i = 1; i <= n; i++) {
  visited = new Array(n + 1).fill(false);
  dfs(i, i);
}

function dfs(start, v) {
  visited[v] = true;

  for (let u of adj[v]) {
    if (u === start) {
      result.push(start);
      return;
    }
    if (!visited[u]) {
      dfs(start, u);
    }
  }
}

console.log(result.length);
result.forEach((n) => console.log(n));
