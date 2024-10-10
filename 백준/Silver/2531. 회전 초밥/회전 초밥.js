const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [[n, d, k, c], ...dish] = input.map((s) => {
  const splitted = s.split(' ');
  return splitted.length === 1 ? +splitted[0] : splitted.map(Number);
});

let maxSushi = 0;
for (let i = 0; i < n; i++) {
  let cnt = 1;
  const check = new Array(d + 1).fill(0);
  check[c] = 1;
  for (j = i; j < i + k; j++) {
    let sushi = dish[j % n];

    if (!check[sushi]) {
      cnt++;
    }
    check[sushi]++;
  }
  maxSushi = Math.max(maxSushi, cnt);
}

console.log(maxSushi);
