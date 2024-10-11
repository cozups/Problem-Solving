const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [a, b, n] = input[0].split(' ').map(Number);

let ans = 0;
for (let i = 0; i < n; i++) {
  a = (a % b) * 10;
  ans = Math.floor(a / b);
}

console.log(ans);
