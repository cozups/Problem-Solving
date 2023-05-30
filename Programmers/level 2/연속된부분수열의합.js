function solution(sequence, k) {
  var answer = [];

  let len = Infinity;

  let l = 0;
  let r = 0;
  let sum = sequence[0];

  while (r < sequence.length && l <= r) {
    if (sum < k) {
      r++;
      sum += sequence[r];
    } else if (sum > k) {
      sum -= sequence[l];
      l++;
    } else {
      // sum === k
      if (len > r - l + 1) {
        len = r - l + 1;
        answer[0] = l;
        answer[1] = r;
      }
      r++;
      sum += sequence[r];
    }
  }

  return answer;
}

console.log(solution([2, 2, 2, 2, 2], 6));
