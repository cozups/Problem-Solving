const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [[n, m], nums] = input.map((s) => s.split(' ').map(Number));

let [start, end] = [0, 0];
let sum = nums[start];
let ans = n + 1;
while (true) {
  if (sum >= m) {
    ans = Math.min(ans, end - start + 1);
    sum -= nums[start];
    start++;
  } else {
    if (end === n) {
      break;
    }
    sum += nums[end + 1];
    end++;
  }
}

console.log(ans === n + 1 ? 0 : ans);
