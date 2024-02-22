const fs = require('fs');
// 백준은 linux 환경임.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// 테스트 케이스 개수가 숫자로 주어지는 경우
const [n, k] = input[0].split(' ').map((n) => +n);
const inputTestCase = [[0, 0]];

for (let i = 1; i <= n; i++) {
  inputTestCase.push(input[i].split(' ').map((o) => +o));
}

function solution(n, testCase) {
  // solution 작성
  let d = [];
  for (let i = 0; i <= n; i++) {
    d.push(new Array(k + 1).fill(0));
  }

  for (let i = 1; i <= n; i++) {
    let [w, v] = testCase[i];
    for (let j = 1; j <= k; j++) {
      if (j - w >= 0) {
        d[i][j] = Math.max(d[i - 1][j], d[i - 1][j - w] + v);
      } else {
        d[i][j] = d[i - 1][j];
      }
    }
  }

  console.log(d[n][k]);
}

solution(n, inputTestCase);
