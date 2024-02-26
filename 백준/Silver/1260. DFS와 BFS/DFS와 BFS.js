const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [meta, ...input] = fs.readFileSync(file).toString().trim().split('\n');

let [n, m, s] = meta.split(' ').map(Number);
let edges = input.map((e) => e.split(' ').map(Number));

let adj = Array.from({ length: n + 1 }, () => []);

for (let [s, e] of edges) {
  adj[s].push(e);
  adj[e].push(s);
}

for (let list of adj) {
  list = list.sort((a, b) => a - b);
}

let dfsResult = [];
let dfsVisited = new Array(n + 1).fill(false);
function dfs(v) {
  dfsVisited[v] = true;
  dfsResult.push(v);
  for (let n of adj[v]) {
    if (!dfsVisited[n]) {
      dfs(n);
    }
  }
}

let bfsResult = [];
let bfsVisited = new Array(n + 1).fill(false);
function bfs(v) {
  let q = [v];
  bfsVisited[v] = true;

  while (q.length > 0) {
    let v = q.shift();
    bfsResult.push(v);
    for (let n of adj[v]) {
      if (!bfsVisited[n]) {
        bfsVisited[n] = true;
        q.push(n);
      }
    }
  }
}

dfs(s);
console.log(dfsResult.join(' '));

bfs(s);
console.log(bfsResult.join(' '));
