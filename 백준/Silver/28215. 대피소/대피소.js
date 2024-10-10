const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [[n, k], ...house] = input.map((s) => s.split(' ').map(Number));

function getDistance(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function getCombination(arr, k) {
  if (k === 1) {
    return arr.map((item) => [item]);
  }

  const set = [];

  arr.forEach((item, i) => {
    const next = getCombination(arr.slice(i + 1), k - 1);
    next.forEach((comb) => set.push([item, ...comb]));
  });

  return set;
}

function getMaxDist(comb) {
  let arr = [];
  for (let h of house) {
    let minDist = Infinity;
    for (let c of comb) {
      let dist = getDistance(c, h);
      minDist = Math.min(minDist, dist);
    }
    arr.push(minDist);
  }

  return Math.max(...arr);
}

const set = getCombination(house, k);
let ans = Infinity;
for (let comb of set) {
  ans = Math.min(ans, getMaxDist(comb));
}
console.log(ans);
