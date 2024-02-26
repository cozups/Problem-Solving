const fs = require('fs');
// 백준은 linux 환경임.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// 테스트 케이스 개수가 숫자로 주어지는 경우
const t = +input.splice(0, 1);
const inputTestCase = [];

// input 가공
let i = 0;
while (i < input.length) {
  let [n, m] = input[i].split(' ').map(Number);
  i++;
  let temp = input.slice(i, i + m).map((s) => s.split(' ').map(Number));
  inputTestCase.push([[n, m], temp]);
  i += m;
}

// solution 작성
function solution(t, testCase) {
  for (let i = 0; i < t; i++) {
    let [[n, m], edges] = testCase[i];
    let adj = {};
    for (let [s, e] of edges) {
      if (!adj[s]) {
        adj[s] = [e];
      } else {
        adj[s].push(e);
      }
      if (!adj[e]) {
        adj[e] = [s];
      } else {
        adj[e].push(s);
      }
    }

    let ans = -1;
    let visited = new Array(n + 1).fill(0);
    let stack = [1];

    while (stack.length > 0) {
      let v = stack.pop();
      if (visited[v]) continue;

      visited[v] = 1;
      ans++;

      for (let e of adj[v]) {
        if (!visited[e]) {
          stack.push(e);
        }
      }
    }

    console.log(ans);
  }
}

solution(t, inputTestCase);
