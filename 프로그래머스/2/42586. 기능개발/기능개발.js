function solution(progresses, speeds) {
  var answer = [];
  const arr = [];

  progresses.forEach((value, index) => {
    const timeToFinish = Math.ceil((100 - value) / speeds[index]);
    arr.push(timeToFinish);
  });

  let count = 0;
  let day = arr[0];
  arr.forEach((current) => {
    if (current > day) {
      answer.push(count);
      day = current;
      count = 1;
    } else {
      count += 1;
    }
  });

  answer.push(count);

  return answer;
}