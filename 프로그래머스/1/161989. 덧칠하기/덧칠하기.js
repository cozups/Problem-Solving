function solution(n, m, section) {
  var answer = 0;

  let arr = new Array(n + 1).fill(1);

  for (const s of section) {
    arr[s] = 0;
  }

  let cursor = 1;

  while (cursor < arr.length) {
    if (!arr[cursor]) {
      answer++;
      cursor += m;
    } else {
      cursor++;
    }
  }

  return answer;
}