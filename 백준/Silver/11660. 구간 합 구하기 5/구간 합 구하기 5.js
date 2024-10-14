const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let num = [];
for (let i = 0; i < n; i++) {
  num.push(input[1 + i].split(' ').map(Number));
}
let range = [];
for (let i = 0; i < m; i++) {
  range.push(input[1 + n + i].split(' ').map(Number));
}

let sum = [];
for (let i = 0; i < n + 1; i++) {
  sum.push(new Array(n + 1).fill(0));
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    sum[i][j] =
      sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1] + num[i - 1][j - 1];
  }
}

let ans = [];
for (let i = 0; i < m; i++) {
  let [x1, y1, x2, y2] = range[i];

  ans.push(
    sum[x2][y2] - sum[x2][y1 - 1] - sum[x1 - 1][y2] + sum[x1 - 1][y1 - 1]
  );
}

console.log(ans.join('\n'));
