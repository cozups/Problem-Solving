// 입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 입력값 가공
let n = +input[0];

// 인접 리스트 생성
let adj = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < input.length; i++) {
  let [s, e] = input[i].split(" ").map(Number);
  adj[s].push(e);
  adj[e].push(s);
}

// 풀이
function solution() {
  // bfs 사용
  const visited = new Array(n + 1).fill(0);
  let queue = [1];
  visited[1] = 1;
  let parents = [];

  while (queue.length) {
    let node = queue.shift();

    for (let child of adj[node]) {
      if (!visited[child]) {
        visited[child] = 1;
        queue.push(child);
        parents[child] = node;
      }
    }
  }

  console.log(parents.slice(2).join("\n"));
}

solution();
