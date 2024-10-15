const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [[n, x], visit] = input.map((s) => s.split(' ').map(Number));

let sum = 0;
let cnt = 1;
for (let i = 0; i < x; i++) {
  sum += visit[i];
}

let max = sum;
for (let i = x; i < n; i++) {
  sum += visit[i];
  sum -= visit[i - x];

  if (sum > max) {
    max = sum;
    cnt = 1;
  } else if (sum === max) {
    cnt++;
  }
}

if (max === 0) {
  console.log('SAD');
} else {
  console.log(`${max}\n${cnt}`);
}
