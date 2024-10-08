const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = +input[0];
const nums = input.slice(1).map(Number);

console.log(nums.sort((a, b) => a - b).join('\n'));
