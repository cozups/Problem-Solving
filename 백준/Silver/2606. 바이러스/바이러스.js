const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

// 테스트 케이스 개수가 숫자로 주어지는 경우
const n = +input[0];
const m = +input[1];
const inputTestCase = input.slice(2).map((s) => s.split(' ').map(Number));
const visited = new Array(n + 1).fill(false);
let graph = Array.from({ length: n + 1 }, () => []);

// input 가공
for (let [s, e] of inputTestCase) {
  graph[s].push(e);
  graph[e].push(s);
}

// solution 작성
let ans = -1;
function solution(v) {
  if (visited[v]) return;

  visited[v] = true;
  ans++;

  for (let t of graph[v]) {
    if (!visited[t]) {
      solution(t);
    }
  }
}

solution(1);
console.log(ans);
