const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [[k, n], ...lan] = input.map((s, i) =>
  i === 0 ? s.split(' ').map(Number) : +s
);

lan.sort((a, b) => a - b);
let max = lan[lan.length - 1];

function solve() {
  let s = 1;
  let e = max;

  while (s <= e) {
    let m = Math.floor((s + e) / 2);

    let cnt = lan.reduce((acc, cur) => acc + Math.floor(cur / m), 0);
    if (cnt < n) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }

  return e;
}

console.log(solve());
