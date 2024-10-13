const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [[n, k], ...coin] = input.map((s, i) =>
  i === 0 ? s.split(' ').map(Number) : +s
);

let cnt = 0;

for (let i = coin.length - 1; i >= 0; i--) {
  cnt += Math.floor(k / coin[i]);
  k = k % coin[i];
}

console.log(cnt);
