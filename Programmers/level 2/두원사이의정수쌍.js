function solution(r1, r2) {
  var answer = 0;

  // x*x + y*y = r*r
  // y = Math.sqrt(r*r - x*x) (+, -)
  // Math.sqrt(r1*r1 - x*x) <= y <= Math.sqrt(r2*r2 - x*x)

  for (let i = -r2; i <= r2; i++) {
    const from = Math.ceil(Math.sqrt(r1 * r1 - i * i)) || 0;
    const to = Math.floor(Math.sqrt(r2 * r2 - i * i));
    answer += to - from + 1;
  }

  answer *= 2;
  answer -= (r2 - r1 + 1) * 2;

  return answer;
}

console.log(solution(2, 3));
