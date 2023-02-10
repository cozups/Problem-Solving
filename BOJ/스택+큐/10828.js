const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const n = +input.shift();

let stack = [];
let answer = [];
for (let i = 0; i < n; i++) {
  let cmd = null;
  let num = null;
  if (input[i] === 'pop') {
    stack.length > 0 ? answer.push(stack.pop()) : answer.push(-1);
  } else if (input[i] === 'size') {
    answer.push(stack.length);
  } else if (input[i] === 'empty') {
    stack.length > 0 ? answer.push(0) : answer.push(1);
  } else if (input[i] === 'top') {
    stack.length > 0 ? answer.push(stack[stack.length - 1]) : answer.push(-1);
  } else {
    // push
    [cmd, num] = input[i].split(' ');
    stack.push(+num);
  }
}

console.log(answer.join('\n'));
// 그때그때 콘솔 출력하면 시간 초과 뜸...
