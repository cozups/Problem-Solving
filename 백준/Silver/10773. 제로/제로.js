const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [k, ...cases] = input.map(Number);
const arr = [];

for (let i = 0; i < k; i++) {
  let x = cases[i];

  if (x === 0) {
    arr.pop();
  } else {
    arr.push(x);
  }
}

console.log(arr.reduce((acc, cur) => acc + cur, 0));
