function solution(targets) {
  var answer = 0;

  targets.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let point = -1;

  for (let target of targets) {
    let [left, right] = target;

    if (left >= point) {
      answer++;
      point = right;
    }
  }

  return answer;
}

console.log(
  solution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ])
);
