function solution(number, limit, power) {
  let answer = 0;

  const countDivisors = (num) => {
    let temp = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        if (i !== num / i) temp.push(num / i);
        temp.push(i);
      }
    }
    return temp.length;
  };

  for (let i = 1; i <= number; i++) {
    let count = countDivisors(i);
    if (count > limit) {
      answer += power;
    } else {
      answer += count;
    }
  }

  return answer;
}

console.log(solution(5, 3, 2));
