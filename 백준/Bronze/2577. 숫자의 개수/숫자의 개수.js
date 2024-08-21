const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [a, b, c] = input.map(Number);
let n = a * b * c;
let arr = n.toString().split('').map(Number);
let ans = new Array(10).fill(0);
arr.forEach((a) => {
  ans[a]++;
});

console.log(ans.join('\n'));
