const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const nums = input[1].split(' ').map(Number);

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < Math.abs(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

const result = nums.reduce((acc, cur) => (isPrime(cur) ? acc + 1 : acc), 0);
console.log(result);
