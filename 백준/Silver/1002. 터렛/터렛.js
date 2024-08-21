const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let n = +input[0];

for (let i = 1; i <= n; i++) {
  let [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(Number);

  const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  const difference = Math.abs(r1 - r2);

  let answer = 0;
  // 외접, 내접 고려
  // 1. 개수가 무한개 - 완전 일치
  if (distance === 0 && difference === 0) {
    answer = -1;
  }
  // 2. 한 곳에서 만날 때 - r1 + r2 === 두 점 사이 거리 or 두 점 사이 거리가 r1, r2의 차
  else if (distance === r1 + r2 || distance === difference) {
    answer = 1;
    // 3. 두 곳에서 만날 때 - 두 점 사이 거리 < r1 + r2 and 두 점 사이 거리 > r1, r2의 차
  } else if (difference < distance && distance < r1 + r2) {
    answer = 2;
  } else {
    answer = 0;
  }

  console.log(answer);
}
