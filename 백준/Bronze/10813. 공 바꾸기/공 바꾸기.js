const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const basket = Array.from({ length: n + 1 }, (_, i) => i);

for (let i = 0; i < m; i++) {
  let [a, b] = input[1 + i].split(' ').map(Number);
  [basket[a], basket[b]] = [basket[b], basket[a]];
}

console.log(basket.slice(1).join(' ').trim());
