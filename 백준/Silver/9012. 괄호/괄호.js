const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, ...cases] = input;
const ans = [];

for (let i = 0; i < Number(n); i++) {
  let s = [];
  let j = 0;
  for (j = 0; j < cases[i].length; j++) {
    let c = cases[i][j];
    if (c === '(') {
      s.push(c);
    } else {
      if (s.length === 0) {
        ans.push('NO');
        break;
      }

      const p = s.pop();
    }
  }

  if (j === cases[i].length) {
    if (s.length === 0) {
      ans.push('YES');
    } else {
      ans.push('NO');
    }
  }
}

console.log(ans.join('\n'));
