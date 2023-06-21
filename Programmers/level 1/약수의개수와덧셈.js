function helper(num) {
  let cnt = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (i === Math.sqrt(num)) {
      cnt += 1;
      break;
    }
    if (num % i === 0) {
      cnt += 2;
    }
  }
  return cnt % 2 === 0 ? true : false;
}

function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    answer += helper(i) ? i : -i;
  }

  return answer;
}

console.log(solution(24, 27));

// 다른 풀이: 제곱근이 정수면 약수의 개수는 홀수다.
