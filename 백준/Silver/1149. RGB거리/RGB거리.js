const fs = require('fs');
// 백준은 linux 환경임.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// 테스트 케이스 개수가 숫자로 주어지는 경우
const inputC = +input[0];
const inputTestCase = [[0, 0, 0]];

for (let i = 1; i <= inputC; i++) {
  inputTestCase.push(input[i].split(' ').map((o) => +o));
}

function solution(n, testCase) {
  // solution 작성
  let d = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      d.push([0, 0, 0]);
    } else {
      d.push([Infinity, Infinity, Infinity]);
    }
  }

  for (let i = 1; i <= n; i++) {
    d[i][0] = Math.min(
      d[i - 1][1] + testCase[i][0],
      d[i - 1][2] + testCase[i][0]
    );
    d[i][1] = Math.min(
      d[i - 1][0] + testCase[i][1],
      d[i - 1][2] + testCase[i][1]
    );
    d[i][2] = Math.min(
      d[i - 1][0] + testCase[i][2],
      d[i - 1][1] + testCase[i][2]
    );
  }

  console.log(Math.min(...d[n]));
}

solution(inputC, inputTestCase);
