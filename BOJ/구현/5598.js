const fs = require('fs');

const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

function solution(input) {
  let answer = '';

  input = input.split('');
  answer = input
    .map((c) => {
      let charCode = c.charCodeAt(0) - 3;
      if (charCode < 'A'.charCodeAt(0)) {
        charCode += 26;
      }
      c = String.fromCharCode(charCode);
      return c;
    })
    .join('');

  console.log(answer);
}

solution(input[0]);
