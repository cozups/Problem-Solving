const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [a, b, c] = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

if (a + b <= c) {
  c = a + b - 1;
}

console.log(a + b + c);
