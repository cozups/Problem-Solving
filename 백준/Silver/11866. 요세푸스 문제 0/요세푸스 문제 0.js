const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = Array.from({ length: n }, (_, i) => i + 1);
let ans = '<';
while (arr.length > 1) {
  for (let i = 0; i < k - 1; i++) {
    arr.push(arr[0]);
    arr.shift();
  }
  ans += `${arr.shift()}, `;
}
ans += `${arr[0]}>`;

console.log(ans);
