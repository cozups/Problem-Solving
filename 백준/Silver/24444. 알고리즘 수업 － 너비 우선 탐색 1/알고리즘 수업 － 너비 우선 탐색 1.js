// 입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 입력값 가공
let [[n, m, r], ...rest] = input.map((line) => line.split(" ").map(Number));

// 풀이
function solution() {
  let adj = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < m; i++) {
    let [u, v] = rest[i];
    adj[u].push(v);
    adj[v].push(u);
  }

  adj = adj.map((list) => list.sort((a, b) => a - b));

  let queue = [r];
  let visited = Array.from({ length: n + 1 }, () => 0);
  let count = 1;
  function bfs() {
    while (queue.length) {
      let curr = queue.shift();
      if (visited[curr]) continue;
      visited[curr] = count++;

      for (let next of adj[curr]) {
        if (!visited[next]) {
          queue.push(next);
        }
      }
    }
  }

  bfs();

  console.log(visited.slice(1).join("\n"));
}

solution();
