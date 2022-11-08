function solution(sizes) {
  var answer = 0;

  const converted = sizes.map((size) =>
    size[0] < size[1] ? [size[1], size[0]] : size
  );

  let maxX = 0;
  let maxY = 0;

  converted.forEach(([x, y]) => {
    maxX = maxX < x ? x : maxX;
    maxY = maxY < y ? y : maxY;
  });

  answer = maxX * maxY;

  return answer;
}
