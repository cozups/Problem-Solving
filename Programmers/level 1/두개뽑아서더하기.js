function solution(numbers) {
  var answers = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (!answers.includes(numbers[i] + numbers[j])) {
        answers.push(numbers[i] + numbers[j]);
      }
    }
  }

  return answers.sort((a, b) => a - b);
}

console.log(solution([5, 0, 2, 7]));
