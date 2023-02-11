function solution(s) {
  let answer = '';
  let wordIdx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer += ' ';
      wordIdx = 0;
      continue;
    }
    wordIdx % 2 === 0
      ? (answer += s[i].toUpperCase())
      : (answer += s[i].toLowerCase());
    wordIdx++;
  }

  return answer;
}

console.log(solution('try hello world'));
