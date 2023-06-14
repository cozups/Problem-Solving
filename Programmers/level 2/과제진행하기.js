function solution(plans) {
  var answer = [];

  let stack = [];

  let plansSorted = plans
    .map((plan) => {
      let [h, m] = plan[1].split(':');
      let start = +h * 60 + +m;

      return {
        name: plan[0],
        start,
        playtime: +plan[2],
      };
    })
    .sort((a, b) => a.start - b.start);

  for (let i = 0; i < plansSorted.length - 1; i++) {
    let cur = plansSorted[i];
    let next = plansSorted[i + 1];

    let done = cur.start + cur.playtime;

    if (done <= next.start) {
      answer.push(cur.name);
      // 남은 시간
      let left = next.start - done;

      while (stack.length) {
        const [name, playtime] = stack.pop();
        if (playtime <= left) {
          // 남은 시간에 완료 가능하면
          left -= playtime;
          answer.push(name);
        } else {
          // 진행하다가 다시 집어넣기
          stack.push([name, playtime - left]);
          break;
        }
      }
    } else {
      // 중간에 끊길 때
      stack.push([cur.name, cur.playtime - (next.start - cur.start)]);
    }
  }

  answer.push(plansSorted[plansSorted.length - 1].name);

  while (stack.length) {
    let [name] = stack.pop();
    answer.push(name);
  }

  return answer;
}

console.log(
  solution([
    ['korean', '11:40', '30'],
    ['english', '12:10', '20'],
    ['math', '12:30', '40'],
  ])
);

// music computer science history
