const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);

function gcd(a, b) {
  while (a > 0) {
    [b, a] = [a, b % a];
  }

  return b;
}

const n = gcd(a, b);
console.log(n * (a / n) * (b / n));
