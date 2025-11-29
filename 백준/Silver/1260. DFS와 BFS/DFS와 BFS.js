// 입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// 입력값 가공
input = input.map((line) => line.split(" ").map(Number));

// 풀이
function solution() {
  let [n, m, v] = input[0];
  let adj = Array.from({ length: n + 1 }, () => []);

  // 인접 리스트 생성
  for (let i = 1; i <= m; i++) {
    let [s, e] = input[i];
    adj[s].push(e);
    adj[e].push(s);
  }

  // 인접 노드 정렬
  for (let i = 1; i <= n; i++) {
    adj[i].sort((a, b) => a - b);
  }

  // DFS
  let visited = Array.from({ length: n + 1 }, () => false);
  let answer = [];
  function dfs(node) {
    if (visited[node]) return;

    visited[node] = true;
    answer.push(node);
    for (let next of adj[node]) {
      dfs(next);
    }
  }

  dfs(v);
  console.log(answer.join(" "));

  // BFS
  visited = Array.from({ length: n + 1 }, () => false);
  answer = [];
  function bfs(node) {
    let queue = [node];

    while (queue.length) {
      let current = queue.shift();
      if (visited[current]) continue;

      visited[current] = true;
      answer.push(current);

      for (let next of adj[current]) {
        if (!visited[next]) {
          queue.push(next);
        }
      }
    }
  }

  bfs(v);
  console.log(answer.join(" "));
}

solution();
