const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [a, b, c] = input[0].split(' ').map(BigInt);

function solve(power) {
  if (power === 1n) {
    return a % c;
  }

  let half = solve(power / 2n) % c;

  if (power % 2n) {
    return (half * half * (a % c)) % c;
  }

  return (half * half) % c;
}

console.log(solve(b).toString());
