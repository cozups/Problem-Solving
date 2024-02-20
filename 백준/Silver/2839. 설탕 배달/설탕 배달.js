const fs = require('fs');
// 백준은 linux 환경임.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const inputC = +input[0];

function solution(n) {
  // solution 작성
  let arr = new Array(n + 1).fill(Infinity);
  for (let i = 3; i <= n; i++) {
    if (i === 3 || i === 5) {
      arr[i] = 1;
    }
    if (i + 3 <= n) arr[i + 3] = Math.min(arr[i + 3], arr[i] + 1);
    if (i + 5 <= n) arr[i + 5] = Math.min(arr[i + 5], arr[i] + 1);
  }

  arr[n] === Infinity ? console.log(-1) : console.log(arr[n]);
}

solution(inputC);
