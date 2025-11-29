// 입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// 입력값 가공
input = input.map(Number);
// 풀이
function solution() {
  let students = Array.from({ length: 31 }, () => false);

  for (let i = 0; i < input.length; i++) {
    students[input[i]] = true;
  }

  let absence = [];
  students.forEach((v, i) => {
    if (!v && i !== 0) {
      absence.push(i);
    }
  });

  console.log(absence.join("\n"));
}

solution();
