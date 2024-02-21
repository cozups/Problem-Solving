const fs = require('fs');
// 백준은 linux 환경임.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// 테스트 케이스 개수가 숫자로 주어지는 경우
const inputC = +input[0];

function solution(n, testCase) {
  // solution 작성
  let a = new Array(n + 1);
  a[1] = 1;
  a[2] = 3;

  for (let i = 3; i <= n; i++) {
    a[i] = a[i - 1] + 2 * a[i - 2];
    a[i] %= 10007;
  }

  console.log(a[n]);
}

solution(inputC);
