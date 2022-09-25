function solution(progresses, speeds) {
  var answer = [];
  while (progresses.length > 0) {
    let cnt = 0;
    progresses = progresses.map((elem, idx) => {
      return (elem += speeds[idx]);
    });

    while (progresses[0] >= 100) {
      cnt++;
      progresses.shift();
      speeds.shift();
    }

    if (cnt > 0) {
      answer.push(cnt);
    }
  }
  return answer;
}
