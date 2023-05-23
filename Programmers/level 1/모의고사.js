function solution(answers) {
  var answer = [];

  let p1 = [1, 2, 3, 4, 5];
  let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score = {
    1: 0,
    2: 0,
    3: 0,
  };

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % p1.length]) {
      score['1']++;
    }
    if (answers[i] === p2[i % p2.length]) {
      score['2']++;
    }
    if (answers[i] === p3[i % p3.length]) {
      score['3']++;
    }
  }

  scoreEntries = Object.entries(score).sort((a, b) => b[1] - a[1]);
  let maxScore = scoreEntries[0][1];
  for (let entry of scoreEntries) {
    if (entry[1] === maxScore) {
      answer.push(+entry[0]);
    }
  }

  return answer;
}

console.log(solution([1, 3, 2, 4, 2]));

/*  filter를 사용한 답 (다른 사람 풀이)
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}
*/
