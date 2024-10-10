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

const set = getCombination(
  Array.from({ length: n }, (_, i) => i),
  k
);

let ans = Infinity;
for (let s of set) {
  let dists = [];
  house.forEach((h, i) => {
    if (s.indexOf(i) < 0) {
      // 대피소가 아님
      let dist = Infinity;
      for (let j of s) {
        // 대피소들과의 거리 중 가장 짧은 거리 구하기
        dist = Math.min(dist, getDistance(h, house[j]));
      }
      dists.push(dist);
    }
  });
  ans = Math.min(ans, Math.max(...dists));
}

console.log(ans);
