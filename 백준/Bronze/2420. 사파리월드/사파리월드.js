// 입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// 입력값 가공
let [n, m] = input[0].split(" ").map(Number);
// 풀이
function solution() {
  console.log(n < m ? m - n : n - m);
}

solution();
