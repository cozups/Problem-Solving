const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let n = +input[0];
let liq = input[1].split(' ').map(Number);

let [start, end] = [0, n - 1];
let min = Infinity;
let [a, b] = [0, n - 1];

while (start < end) {
  let sum = liq[start] + liq[end];
  if (Math.abs(sum) < min) {
    min = Math.abs(sum);
    a = start;
    b = end;
  }
  if (sum < 0) {
    start++;
  } else {
    end--;
  }
}

console.log(liq[a], liq[b]);
