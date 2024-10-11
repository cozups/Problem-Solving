const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
let ball = n - (k * (k + 1)) / 2;

if (ball < 0) {
  console.log(-1);
} else {
  if (ball % k === 0) {
    console.log(k - 1);
  } else {
    console.log(k);
  }
}
