const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [meta, ...input] = fs.readFileSync(file).toString().trim().split('\n');

let [n, m] = meta.split(' ').map(Number);
let adj = Array.from({ length: n + 1 }, () => []);
let q = [];
let result = [];

for (let i = 0; i < m; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  adj[a].push(b);
  adj[b].push(a);
}

for (let i = 1; i <= n; i++) {
  result.push(bfs(i));
}

function bfs(v) {
  q.push(v);
  let visited = new Array(n + 1).fill(-1);
  visited[v] = 0;

  while (q.length > 0) {
    let u = q.shift();

    for (let x of adj[u]) {
      if (visited[x] === -1) {
        visited[x] = visited[u] + 1;
        q.push(x);
      }
    }
  }

  let sum = visited.slice(1).reduce((acc, cur) => acc + cur);
  return sum;
}

let ans = 0;
let min = Infinity;
for (let i = 0; i < result.length; i++) {
  if (min > result[i]) {
    min = result[i];
    ans = i;
  }
}
console.log(ans + 1);
