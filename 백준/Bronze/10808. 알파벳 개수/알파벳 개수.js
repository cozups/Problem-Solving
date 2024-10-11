const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let s = input[0];
let arr = new Array(26).fill(0);

for (let c of s) {
  arr[c.charCodeAt() - 'a'.charCodeAt()]++;
}

console.log(arr.join(' '));
