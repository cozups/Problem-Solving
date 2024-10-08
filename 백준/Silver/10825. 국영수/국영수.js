const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = +input[0];
const students = input.slice(1).map((str) => str.split(' '));

students.sort((a, b) => {
  return b[1] - a[1] || a[2] - b[2] || b[3] - a[3] || (a[0] > b[0] ? 1 : -1);
});

let ans = '';
students.forEach((a) => {
  ans += a[0] + '\n';
});

console.log(ans.trim());
