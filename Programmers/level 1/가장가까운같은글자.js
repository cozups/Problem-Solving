function solution(s) {
  let answer = [];
  let letters = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (letters[char] === undefined) {
      answer.push(-1);
      letters[char] = i;
    } else {
      answer.push(i - letters[char]);
      letters[char] = i;
    }
  }

  return answer;
}

console.log(solution('abcda'));
