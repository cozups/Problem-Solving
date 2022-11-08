function solution(clothes) {
  var answer = 1;
  let items = {};

  clothes.map(([item, category]) => {
    items[category] = items[category] ? items[category] + 1 : 1;
  });
  for (const cate in items) {
    answer *= 1 + items[cate];
  }

  return answer - 1;
}
