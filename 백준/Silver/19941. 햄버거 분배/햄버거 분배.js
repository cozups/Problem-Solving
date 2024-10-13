const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [[n, k], arr] = [input[0].split(' ').map(Number), input[1].split('')];
let cnt = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] !== 'P') {
    continue;
  }

  let flag = false;
  for (let j = k; j > 0; j--) {
    if (i - j >= 0 && arr[i - j] === 'H') {
      cnt++;
      arr[i - j] = 'X';
      flag = true;
      break;
    }
  }
  if (!flag) {
    for (let j = 1; j <= k; j++) {
      if (i + j < n && arr[i + j] === 'H') {
        cnt++;
        arr[i + j] = 'X';
        break;
      }
    }
  }
}

console.log(cnt);
