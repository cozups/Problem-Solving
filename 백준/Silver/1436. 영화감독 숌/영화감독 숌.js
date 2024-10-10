const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = +input[0];
let cnt = 0;
let num = 666;

while (cnt < n) {
  if (num.toString().includes('666')) {
    cnt++;
  }
  num++;
}

console.log(num - 1);
