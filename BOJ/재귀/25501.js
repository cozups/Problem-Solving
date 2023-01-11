let fs = require('fs');

let filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

let times = +input[0];
let testCase = input.slice(1);
var count = 0;

function recursion(s, l, r) {
  count++;
  if (l >= r) return 1;
  else if (s[l] != s[r]) return 0;
  else return recursion(s, l + 1, r - 1);
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1);
}

function solution(times, testCase) {
  for (let i = 0; i < times; i++) {
    count = 0;
    console.log(isPalindrome(testCase[i]), count);
  }
}

solution(times, testCase);
