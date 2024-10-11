const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [[n, k, p], bread] = input.map((s) => s.split(' ').map(Number));

let ans = 0;
for (let i = 0; i < n; i++) {
  let sum = bread.slice(i * k, i * k + k).reduce((acc, cur) => acc + cur);
  let cnt = k - sum;
  if (cnt < p) ans++;
}

console.log(ans);
