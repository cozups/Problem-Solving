function solution(nums) {
  var answer = 0;

  let temp = new Set(nums);

  if (temp.size < nums.length / 2) {
    answer = temp.size;
  } else {
    answer = nums.length / 2;
  }

  return answer;
}
