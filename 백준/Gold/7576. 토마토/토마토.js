const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [meta, ...input] = fs.readFileSync(file).toString().trim().split('\n');

let [m, n] = meta.split(' ').map(Number);
let box = [];
let q = [];
input.forEach((s, i) => {
  let row = s.split(' ').map(Number);
  box.push(row);
  row.forEach((n, j) => {
    if (n === 1) {
      q.push([i, j]);
    }
  });
});

let dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function bfs() {
  let idx = 0;
  // shift 메서드가 시간 초과의 원인이 됨 
  while (idx < q.length) {
    let [a, b] = q[idx++];
    for (let i = 0; i < 4; i++) {
      let nextA = a + dir[i][0];
      let nextB = b + dir[i][1];
      if (nextA < 0 || nextA >= n || nextB < 0 || nextB >= m) continue;
      if (box[nextA][nextB] === 0) {
        q.push([nextA, nextB]);
        box[nextA][nextB] = box[a][b] + 1;
      }
    }
  }
}

bfs();
let ans = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (box[i][j] === 0) {
      console.log(-1);
      return;
    }
    ans = Math.max(ans, box[i][j]);
  }
}
console.log(ans - 1);
