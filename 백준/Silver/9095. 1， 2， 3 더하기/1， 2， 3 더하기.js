const fs = require('fs');
// 백준은 linux 환경임.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// 테스트 케이스 개수가 숫자로 주어지는 경우
const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; i++) {
  // 테스트 케이스 입력받고 가공 후 inputTestCase에 넣는 과정
  inputTestCase.push(+input[i]);
}

function solution(n, testCase) {
  // solution 작성
  for (let t = 0; t < n; t++) {
    let k = testCase[t];
    let arr = new Array(k + 1).fill(0);
    arr[1] = 1;
    arr[2] = 2;
    arr[3] = 4;

    for (let x = 4; x <= k; x++) {
      arr[x] = arr[x - 1] + arr[x - 2] + arr[x - 3];
    }
    console.log(arr[k]);
  }
}

solution(inputC, inputTestCase);
