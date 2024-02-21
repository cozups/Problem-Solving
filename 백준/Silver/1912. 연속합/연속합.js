const fs = require('fs');
// 백준은 linux 환경임.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// 테스트 케이스 개수가 숫자로 주어지는 경우
const inputC = +input[0];
const inputTestCase = input[1].split(' ').map((i) => +i);

function solution(n, testCase) {
  // solution 작성
  let a = [...testCase];
  let d = new Array(n).fill(0);
  d[0] = a[0];

  for (let i = 1; i < n; i++) {
    d[i] = Math.max(d[i - 1] + a[i], a[i]);
  }

  console.log(Math.max(...d));
}

solution(inputC, inputTestCase);
