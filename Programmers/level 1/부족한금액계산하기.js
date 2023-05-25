function solution(price, money, count) {
  var answer = -1;

  let totalCount = 0;
  for (let i = 1; i <= count; i++) {
    totalCount += i;
  }

  answer = totalCount * price - money;

  return answer >= 0 ? answer : 0;
}

console.log(solution(3, 20, 4));
