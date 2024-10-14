const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [n, arr, m, arr2] = input.map((s) => s.split(' ').map(Number));
[n, m] = [n[0], m[0]];

arr.sort((a, b) => a - b);
let ans = [];

function binarySearch(num) {
  let s = 0;
  let e = n - 1;

  while (s <= e) {
    let m = Math.floor((s + e) / 2);

    if (arr[m] === num) {
      return 1;
    } else if (arr[m] < num) {
      s = m + 1;
    } else {
      e = m - 1;
    }
  }

  return 0;
}

for (let num of arr2) {
  ans.push(binarySearch(num));
}

console.log(ans.join('\n'));
