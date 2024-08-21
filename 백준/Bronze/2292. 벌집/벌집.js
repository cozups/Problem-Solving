const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let n = +input[0];

let t = 1;
let ans = 1;

while (t < n) {
  t += ans * 6;
  ans++;
}

console.log(ans);
