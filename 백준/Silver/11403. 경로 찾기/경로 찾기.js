// 입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 입력값 가공
let [n, ...rest] = input.map((line) => line.split(" ").map(Number));
n = Number(n);

// 풀이
function solution() {
  // dfs로 순회
  let answer = Array.from({ length: n }, () => new Array(n).fill(0));
  function dfs(curr, start, visited) {
    for (let i = 0; i < n; i++) {
      // 해당 노드를 방문한 적이 없고 갈 수 있으면
      if (!visited[i] && rest[curr][i] === 1) {
        visited[i] = 1; // 방문 표시
        answer[start][i] = 1; // 갈 수 있음 표시
        dfs(i, start, visited); // 계속 순회
      }
    }
  }

  for (let i = 0; i < n; i++) {
    let visited = new Array(n).fill(0);
    dfs(i, i, visited);
    console.log(answer[i].join(" "));
  }
}

solution();
