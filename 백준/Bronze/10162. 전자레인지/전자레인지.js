const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let t = +input[0];
const arr = [300, 60, 10];
const cnt = [0, 0, 0];

for (let i = 0; i < 3; i++) {
  cnt[i] += Math.floor(t / arr[i]);
  t %= arr[i];
}

if (t !== 0) {
  console.log(-1);
} else {
  console.log(cnt.join(' '));
}
