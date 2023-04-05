function solution(name, yearning, photo) {
  let answer = [];

  let scoreMap = {};

  for (let i = 0; i < name.length; i++) {
    scoreMap[name[i]] = yearning[i];
  }

  answer = photo.map((arr) => {
    let score = 0;
    arr.forEach((name) => {
      score += scoreMap[name] || 0;
    });
    return score;
  });

  return answer;
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
  )
);
