const fs = require('fs');

const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split('\n')
  .map(Number)
  .filter((n) => n % 2 === 1)
  .sort();

function solution(arr) {
  let answer = 0;

  if (arr.length === 0) {
    console.log(-1);
  } else {
    answer = arr.reduce((acc, cur) => acc + cur, 0);
    console.log(`${answer}\n${arr[0]}`);
  }
}

solution(input);
