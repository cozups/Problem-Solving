function solution(N, stages) {
  var answer = [];

  let fail = [];
  let users = stages.length;

  for (let i = 1; i <= N; i++) {
    let n = stages.filter((s) => s === i).length;
    fail.push([i, n / users]);
    users -= n;
  }

  answer = fail.sort((a, b) => b[1] - a[1]).map((e) => e[0]);

  return answer;
}

console.log(solution(4, [4, 4, 4, 4, 4]));
