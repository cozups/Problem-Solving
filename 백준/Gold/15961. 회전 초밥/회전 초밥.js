const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [[n, d, k, c], ...sushi] = input.map((s, i) =>
  i === 0 ? s.split(' ').map(Number) : +s
);
let check = new Array(d + 1).fill(0);
check[c] = 1;
let cnt = 1;

for (let i = 0; i < k; i++) {
  let dish = sushi[i % n];

  if (!check[dish]) {
    cnt++;
  }

  check[dish]++;
}
let max = cnt;

for (let i = 0; i < n; i++) {
  let start = sushi[i % n];
  let end = sushi[(i + k) % n];

  check[start]--;
  if (!check[start]) {
    cnt--;
  }

  if (!check[end]) {
    cnt++;
  }
  check[end]++;
  max = Math.max(max, cnt);
}

console.log(max);
