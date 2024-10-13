const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, num] = [+input[0], input[1].split(' ').map(Number)];

let oddLeft = 0; // 현재 수의 왼쪽에 있는 홀수 개수
let odd = 0;
let evenLeft = 0; // 현재 수의 왼쪽에 있는 짝수 개수
let even = 0;
let ans = 0;
for (let i = 0; i < n; i++) {
  if (num[i] % 2 === 1) {
    odd++;
    evenLeft += even;
  } else {
    even++;
    oddLeft += odd;
  }
}

ans = Math.min(evenLeft, oddLeft);
console.log(ans);
