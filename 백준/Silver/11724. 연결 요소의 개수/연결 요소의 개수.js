const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [nm, ...input] = fs.readFileSync(file).toString().trim().split('\n');

let [n, m] = nm.split(' ').map(Number);
let list = Array.from({ length: n + 1 }, () => []);
let visited = new Array(n + 1).fill(false);

for (let i = 0; i < m; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  list[a].push(b);
  list[b].push(a);
}

function dfs(x) {
  visited[x] = true;

  for (let node of list[x]) {
    if (!visited[node]) {
      dfs(node);
    }
  }
}

let cnt = 0;
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    cnt++;
    dfs(i);
  }
}

console.log(cnt);
