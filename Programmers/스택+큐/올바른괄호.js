function solution(s) {
  let temp = [];

  for (let i = 0; i < s.length; i++) {
    let a = s.charAt(i);
    if (a === '(') {
      temp.push(a);
    } else {
      if (temp.length === 0) {
        return false;
      } else {
        temp.pop();
      }
    }
  }

  return temp.length === 0;
}
