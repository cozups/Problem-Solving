const inputs = [
  [3, [10, 100, 20, 150, 1, 100, 200]],
  [4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]],
];

function solution(k, score) {
  let answer = [];
  let temp = [];

  for (let sc of score) {
    temp.push(sc);
    temp = temp.sort((a, b) => b - a).slice(0, k);
    answer.push(temp[temp.length - 1]);
  }

  return answer;
}

inputs.forEach(([k, score]) => console.log(solution(k, score)));
