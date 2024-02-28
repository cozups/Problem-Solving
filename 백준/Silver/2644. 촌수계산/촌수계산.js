const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

let n = +inputs[0];
let [s, e] = inputs[1].split(' ').map(Number);
let m = +inputs[2];

let adj = Array.from({ length: n + 1 }, () => []);
let visited = new Array(n + 1).fill(-1);

for (let i = 0; i < m; i++) {
  let [a, b] = inputs[3 + i].split(' ').map(Number);
  adj[a].push(b);
  adj[b].push(a);
}

function bfs() {
  let q = [s];
  visited[s] = 0;
  while (q.length > 0) {
    let v = q.shift();

    for (let n of adj[v]) {
      if (visited[n] === -1) {
        visited[n] = visited[v] + 1;
        q.push(n);
      }
    }
  }
}

bfs();
console.log(visited[e]);
