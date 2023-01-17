function solution(s) {
  var answer = 0;
  let x = null;
  let xCount = 0;
  let other = 0;
  for (let i = 0; i < s.length; i++) {
    if (x === null) {
      x = s[i];
      xCount++;
    } else {
      if (x !== s[i]) {
        other++;
        if (xCount === other) {
          answer++;
          x = null;
          xCount = 0;
          other = 0;
        }
      } else {
        xCount++;
      }
    }
  }
  if (xCount !== 0 || other !== 0) {
    answer++;
  }
  return answer;
}

console.log(solution('aaabbaccccabba'));
