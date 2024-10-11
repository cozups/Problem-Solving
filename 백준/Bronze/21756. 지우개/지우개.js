const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = +input[0];
let num = 1;

while (num <= n) {
  num *= 2;
}

console.log(num / 2);
