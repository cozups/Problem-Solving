function solution(numbers) {
  var answer = new Array(numbers.length).fill(-1);

  let idxs = [];

  for (let i = 0; i < numbers.length; i++) {
    while (idxs.length && numbers[idxs[idxs.length - 1]] < numbers[i]) {
      answer[idxs.pop()] = numbers[i];
    }
    idxs.push(i);
  }

  return answer;
}

console.log(solution([2, 3, 3, 5]));
