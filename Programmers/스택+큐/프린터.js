function solution(priorities, location) {
  var answer = 0;

  priorities = priorities.map((elem, idx) => {
    if (idx === location) {
      return [elem, 1];
    }
    return [elem, 0];
  });

  while (priorities.length > 0) {
    const now = priorities.shift();
    let print = true;
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i][0] > now[0]) {
        print = false;
        priorities.push(now);
        break;
      }
    }
    if (print) {
      answer++;
      if (now[1]) {
        break;
      }
    }
  }

  return answer;
}
