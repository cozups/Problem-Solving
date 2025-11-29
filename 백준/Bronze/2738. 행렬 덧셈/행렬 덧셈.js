// 입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// 입력값 가공
input = input.map((line) => line.split(" ").map(Number));
let [n, m] = input.shift();
let a = input.slice(0, n).flat();
let b = input.slice(n).flat();

// 풀이
function solution() {
  // 덧셈
  for (let i = 0; i < n * m; i++) {
    a[i] += b[i];
  }

  // 출력
  for (let i = 0; i < n; i++) {
    console.log(a.slice(i * m, (i + 1) * m).join(" "));
  }
}

solution();
