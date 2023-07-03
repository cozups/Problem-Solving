function solution(a, b, n) {
  var answer = 0;

  let keep = 0;

  while (n >= a) {
    answer += Math.floor(n / a) * b;
    keep = n % a;

    n = Math.floor(n / a) * b + keep;
  }

  return answer;
}

console.log(solution(2, 1, 20));
