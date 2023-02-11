function solution(t, p) {
  let answer = 0;
  let pNum = +p;
  let [l, r] = [0, p.length];

  while (r <= t.length) {
    let subStr = t.substring(l, r);
    let subStrToNumber = +subStr;

    if (subStrToNumber <= pNum) {
      answer++;
    }
    l++;
    r++;
  }

  return answer;
}

console.log(solution('10203', '15'));
