// 입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// 입력값 가공
input = input.map((line) => line.split(" ").map(Number));
let n = input[0][0];
let m = input[1][0];
let rest = input.slice(2);

// 풀이
function solution() {
  // 인접 행렬 생성
  let adj = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < m; i++) {
    let [s, e] = rest[i];
    adj[s].push(e);
    adj[e].push(s);
  }

  // dfs
  let visited = Array(n + 1).fill(false);
  let count = 0;
  function dfs(v) {
    if (visited[v]) return;

    visited[v] = true;
    count++;

    for (let next of adj[v]) {
      dfs(next);
    }
  }

  dfs(1);

  console.log(count - 1);
}

solution();
