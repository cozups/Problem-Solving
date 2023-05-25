function solution(n) {
  var answer = 0;
  let str = '';

  while (n) {
    str += n % 3;
    n = Math.floor(n / 3);
  }

  for (let c of str) {
    answer = answer * 3 + Number(c);
  }

  return answer;
}

console.log(solution(125));

// toString() 메서드를 쓰면 진법 변환이 가능
// parseInt도 문자열을 해당 진법에 맞는 수로 변환
