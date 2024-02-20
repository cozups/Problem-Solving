const fs = require('fs');
// 백준은 linux 환경임.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// 테스트 케이스 개수가 숫자로 주어지는 경우
const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; i++) {
  // 테스트 케이스 입력받고 가공 후 inputTestCase에 넣는 과정
  inputTestCase.push([+input[2 * i - 1], +input[2 * i]]);
}

function solution(n, testCase) {
  // solution 작성
  for (let i = 0; i < n; i++) {
    let [k, n] = testCase[i];
    let arr = [];
    for (let j = 0; j <= k; j++) {
      arr.push(new Array(n + 1).fill(0));
    }
    for (let j = 0; j <= n; j++) {
      arr[0][j] = j;
    }

    for (let j = 1; j <= k; j++) {
      for (let x = 1; x <= n; x++) {
        arr[j][x] = arr[j][x - 1] + arr[j - 1][x];
      }
    }

    console.log(arr[k][n]);
  }
}

solution(inputC, inputTestCase);
