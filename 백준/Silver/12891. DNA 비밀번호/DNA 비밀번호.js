const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [[s, p], str, ACGT] = input.map((s, i) =>
  i === 1 ? s : s.split(' ').map(Number)
);

let map = { A: 0, C: 0, G: 0, T: 0 };

for (let i = 0; i < p; i++) {
  let char = str.charAt(i);
  map[char]++;
}

function check() {
  let arr = [map['A'], map['C'], map['G'], map['T']];
  for (let i = 0; i < 4; i++) {
    if (arr[i] < ACGT[i]) {
      return false;
    }
  }
  return true;
}

let cnt = check() ? 1 : 0;
for (let i = p; i < s; i++) {
  map[str.charAt(i)]++;
  map[str.charAt(i - p)]--;
  if (check()) {
    cnt++;
  }
}

console.log(cnt);
