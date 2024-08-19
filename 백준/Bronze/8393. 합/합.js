const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n')[0];

const n = +input;
console.log(Math.floor((n * (n + 1)) / 2));
