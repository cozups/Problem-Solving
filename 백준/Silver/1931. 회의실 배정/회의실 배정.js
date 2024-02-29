const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

let n = +inputs[0];
let meetings = inputs
  .slice(1)
  .map((s) => s.split(' ').map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else return a[1] - b[1];
  });

let possible = [];
let prevE = 0;
meetings.forEach(([s, e]) => {
  if (possible.length === 0) {
    possible.push([s, e]);
    prevE = e;
  } else {
    if (s >= prevE) {
      possible.push([s, e]);
      prevE = e;
    }
  }
});

console.log(possible.length);
