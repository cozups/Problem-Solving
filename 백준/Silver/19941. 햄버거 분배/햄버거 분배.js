const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

let [n, k] = inputs[0].split(' ').map(Number);
let table = inputs[1].split('');
let ans = 0;

for (let i = 0; i < n; i++) {
  if (table[i] === 'P') {
    for (let j = i - k; j <= i + k; j++) {
      if (j >= 0 && j < n && table[j] === 'H') {
        table[j] = '-';
        ans++;
        break;
      }
    }
  }
}

console.log(ans);
