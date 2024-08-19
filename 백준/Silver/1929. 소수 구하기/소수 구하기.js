const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [m, n] = input[0].split(' ').map(Number);

const arr = new Array(n + 1).fill(true);
arr[0] = false;
arr[1] = false;

for (let i = 2; i * i <= n; i++) {
  if (arr[i]) {
    for (let j = i * 2; j <= n; j += i) {
      arr[j] = false;
    }
  }
}

const answer = [];
for (let i = m; i <= n; i++) {
  if (arr[i]) {
    answer.push(i);
  }
}

console.log(answer.join('\n'));
