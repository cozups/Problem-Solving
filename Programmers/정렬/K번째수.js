function solution(array, commands) {
  var answer = [];

  answer = commands.map(([i, j, k]) => {
    return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
  });

  return answer;
}
