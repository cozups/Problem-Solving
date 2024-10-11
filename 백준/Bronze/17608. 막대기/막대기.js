const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, ...bar] = input.map(Number);

let ans = 1;
let max = bar[n - 1];
for (let i = n - 2; i >= 0; i--) {
  if (bar[i] > max) {
    ans++;
    max = bar[i];
  }
}

console.log(ans);
