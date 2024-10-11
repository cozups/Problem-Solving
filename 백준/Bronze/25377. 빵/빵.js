const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, ...inputs] = input.map((s, i) =>
  i === 0 ? +s : s.split(' ').map(Number)
);

let min = Infinity;
for (let i = 0; i < n; i++) {
  let [a, b] = inputs[i];
  if (a <= b) {
    min = Math.min(min, b);
  }
}

min === Infinity ? console.log(-1) : console.log(min);
