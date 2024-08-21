let n = 1;
let arr = new Array(10001).fill(true);
arr[0] = false;

for (let i = 1; i <= 10000; i++) {
  let next = i
    .toString()
    .split('')
    .reduce((acc, cur) => acc + +cur, i);
  arr[next] = false;
}

let ans = [];
arr.forEach((a, i) => {
  if (a) {
    ans.push(i);
  }
});

console.log(ans.join('\n'));