const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const a = +input[0];
const b = +input[1];
const c = +input[2];

let n = a * b * c;
let arr = new Array(10).fill(0);
while (n) {
  let num = n % 10;
  arr[num]++;

  n = Math.floor(n / 10);
}

console.log(arr.join('\n'));
