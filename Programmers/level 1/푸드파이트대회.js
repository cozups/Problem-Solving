function solution(food) {
  var answer = '';

  let f = food.map((e) => Math.floor(e / 2));
  f[0] = 1;

  for (let i = 1; i < f.length; i++) {
    for (let j = 0; j < f[i]; j++) {
      answer += i;
    }
  }

  answer += '0';

  for (let i = f.length - 1; i > 0; i--) {
    for (let j = 0; j < f[i]; j++) {
      answer += i;
    }
  }

  return answer;
}

console.log(solution([1, 7, 1, 2]));
