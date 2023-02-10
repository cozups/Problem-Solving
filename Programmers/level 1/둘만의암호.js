function solution(s, skip, index) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    for (let j = 1; j <= index; j++) {
      let next = curr.charCodeAt(0) + 1;
      if (next > 'z'.charCodeAt(0)) {
        next = next - 26;
      }

      while (skip.includes(String.fromCharCode(next))) {
        next = next + 1;
        if (next > 'z'.charCodeAt(0)) {
          next = next - 26;
        }
      }
      curr = String.fromCharCode(next);
    }
    answer += curr;
  }

  return answer;
}

console.log(solution('ybcde', 'az', 1));
