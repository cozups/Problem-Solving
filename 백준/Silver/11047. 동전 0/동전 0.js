const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

let [n, k] = inputs[0].split(' ').map(Number);
let coins = inputs.slice(1).map(Number);

let ans = 0;
for (let i = coins.length - 1; i >= 0; i--) {
  ans += Math.floor(k / coins[i]);
  k %= coins[i];
}

console.log(ans);
