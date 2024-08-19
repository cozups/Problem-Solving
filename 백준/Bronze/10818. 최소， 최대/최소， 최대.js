const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const nums = input[1].split(' ').map(Number);
console.log(Math.min(...nums), Math.max(...nums));
