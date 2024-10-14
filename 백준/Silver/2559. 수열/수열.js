const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [[n, k], num] = input.map((s) => s.split(' ').map(Number));

let sum = new Array(n - k + 2).fill(0);
for (let i = 1; i <= n; i++) {
  sum[i] = sum[i - 1] + num[i - 1];
}

let max = -Infinity;
for (let i = k; i <= n; i++) {
  max = Math.max(max, sum[i] - sum[i - k]);
}

console.log(max);
