const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0];
const A = input[1].split(' ').map((elem) => +elem);
const m = +input[2];
const B = input[3].split(' ').map((elem) => +elem);

function binarySearch(target, A) {
  let l = 0;
  let r = A.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (target < A[m]) {
      // left side
      r = m - 1;
    } else if (target > A[m]) {
      // right side
      l = m + 1;
    } else {
      // found => return 1
      return 1;
    }
  }

  return 0;
}

function solution(n, A, m, B) {
  let result = [];
  // 정렬할 때 식을 꼭 쓰자 ...
  A.sort((a, b) => a - b);

  for (let num of B) {
    result.push(binarySearch(num, A));
  }

  console.log(result.join('\n'));
}

solution(n, A, m, B);
