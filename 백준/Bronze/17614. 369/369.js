const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = +input[0];

let cnt = 0;
let num = 1;

while (num <= n) {
  let temp = num;
  while (temp) {
    if (temp % 10 !== 0 && (temp % 10) % 3 === 0) {
      cnt++;
    }
    temp = Math.floor(temp / 10);
  }
  num++;
}

console.log(cnt);
