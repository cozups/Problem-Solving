const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [[n, m], num] = input.map((s) => s.split(' ').map(Number));

let [left, right] = [Math.max(...num), num.reduce((acc, cur) => acc + cur)];

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let cnt = 1;
  let total = 0;

  for (let d of num) {
    if (total + d <= mid) {
      total += d;
    } else {
      total = d;
      cnt++;
    }
  }

  if (m < cnt) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(left);
