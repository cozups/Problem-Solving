const numbers = [5, 25, 75];
const target = 100;

const solution = (numbers, target) => {
  let l = 0;
  let r = numbers.length - 1;

  while (numbers[l] + numbers[r] !== target) {
    if (numbers[l] + numbers[r] > target) {
      r--;
    } else {
      l++;
    }
  }

  return [l + 1, r + 1];
};

console.log(solution(numbers, target));
