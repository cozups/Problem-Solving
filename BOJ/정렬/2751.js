const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0];
const testCase = [];

for (let i = 1; i <= n; i++) {
  testCase.push(+input[i]);
}

// JS sort는 O(nlogn)이므로 가능
console.log(testCase.sort((a, b) => a - b).join('\n'));
