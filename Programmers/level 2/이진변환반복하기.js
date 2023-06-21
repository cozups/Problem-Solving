function solution(s) {
  var answer = [0, 0];

  while (s !== '1') {
    let sLength = s.length;
    let temp = '';
    // 1. 0 제거하기
    temp = s.match(/[1]/g).join('');
    answer[1] += sLength - temp.length;

    // 2. 문자열의 길이 2진법 변환
    s = temp.length.toString(2);
    answer[0]++;
  }

  return answer;
}

console.log(solution('1111111'));
