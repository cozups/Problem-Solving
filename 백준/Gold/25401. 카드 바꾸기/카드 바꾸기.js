const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, cards] = input.map((s, i) =>
  i === 0 ? +s : s.split(' ').map(Number)
);

function check(start, diff) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (cards[i] !== start + i * diff) {
      cnt++;
    }
  }

  return cnt;
}

let ans = n - 2;
for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    let diff = (cards[j] - cards[i]) / (j - i);

    if (diff - Math.floor(diff) !== 0) {
      continue;
    }

    ans = Math.min(ans, check(cards[i] - diff * i, diff));
  }
}

console.log(ans);
