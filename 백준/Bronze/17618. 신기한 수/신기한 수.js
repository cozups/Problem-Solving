const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let n = +input[0];
let ans = 0;

for (let i = 1; i <= n; i++) {
  let a = i;
  let temp = 0;
  while (a > 0) {
    temp += a % 10;
    a = Math.floor(a / 10);
  }

  if (i % temp === 0) {
    ans++;
  }
}

console.log(ans);
