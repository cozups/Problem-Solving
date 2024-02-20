const fs = require('fs');
// 백준은 linux 환경임.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// 테스트 케이스 개수가 숫자로 주어지는 경우
const inputC = +input[0];

function solution(n, testCase) {
  // solution 작성
  let arr = new Array(n + 1).fill(Infinity);
  arr[0] = 0;
  arr[1] = 0;

  for (let i = 2; i <= n; i++) {
    if (i % 3 === 0) {
      arr[i] = Math.min(arr[i / 3] + 1, arr[i]);
    }
    if (i % 2 === 0) {
      arr[i] = Math.min(arr[i / 2] + 1, arr[i]);
    }
    arr[i] = Math.min(arr[i - 1] + 1, arr[i]);
  }

  console.log(arr[n]);
}

solution(inputC);
