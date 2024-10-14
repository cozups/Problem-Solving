const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [[n, m], num, ...range] = input.map((s) => s.split(' ').map(Number));

let sum = new Array(6).fill(0);
for (let i = 1; i <= n; i++) {
  sum[i] = sum[i - 1] + num[i - 1];
}

let ans = [];
for (let i = 0; i < m; i++) {
  let [a, b] = range[i];

  ans.push(sum[b] - sum[a - 1]);
}

console.log(ans.join('\n'));
