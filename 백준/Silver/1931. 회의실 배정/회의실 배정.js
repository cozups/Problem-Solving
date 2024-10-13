const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, ...meet] = input.map((s, i) =>
  i === 0 ? +s : s.split(' ').map(Number)
);

meet.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[1];
  }
  return a[1] - b[1];
});

let cnt = 1;
let prev = meet[0][1];
for (let i = 1; i < n; i++) {
  let [s, e] = meet[i];
  if (s < prev) {
    continue;
  }
  prev = e;
  cnt++;
}

console.log(cnt);
