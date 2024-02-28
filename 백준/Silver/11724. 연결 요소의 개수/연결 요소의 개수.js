const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [meta, ...input] = fs.readFileSync(file).toString().trim().split('\n');

let [n, m] = meta.split(' ').map(Number);
let adj = Array.from({ length: n + 1 }, () => []);
let visited = new Array(n + 1).fill(false);

for (let i = 0; i < m; i++) {
  let [u, v] = input[i].split(' ').map(Number);
  adj[u].push(v);
  adj[v].push(u);
}

function dfs(v) {
  visited[v] = true;

  for (let u of adj[v]) {
    if (!visited[u]) {
      dfs(u);
    }
  }
}

let ans = 0;
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    ans++;
    dfs(i);
  }
}

console.log(ans);
