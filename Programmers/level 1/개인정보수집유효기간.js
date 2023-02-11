const input = [
  [
    '2022.05.19',
    ['A 6', 'B 12', 'C 3'],
    ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'],
  ],
  [
    '2020.01.01',
    ['Z 3', 'D 5'],
    [
      '2019.01.01 D',
      '2019.11.15 Z',
      '2019.08.02 D',
      '2019.07.01 D',
      '2018.12.28 Z',
    ],
  ],
];

function solution(today, terms, privacies) {
  var answer = [];

  const todayArr = today.split('.').map((e) => +e);

  const termsObj = {};
  terms.forEach((term) => {
    const [termKey, due] = term.split(' ');
    termsObj[termKey] = +due;
  });

  const privaciesArr = [];
  privacies.forEach((privacy) => {
    const [from, term] = privacy.split(' ');
    privaciesArr.push({ term, from: from.split('.').map((e) => +e) });
  });

  // calculate diff
  privaciesArr.forEach(({ term, from }, index) => {
    let [year, month, day] = from;
    let yearDiff = todayArr[0] - year;
    let monthDiff = todayArr[1] - month;
    let dayDiff = todayArr[2] - day;

    let totalDiff = (yearDiff * 12 + monthDiff) * 28 + dayDiff;

    if (totalDiff >= termsObj[term] * 28) answer.push(index + 1);
  });

  return answer;
}

input.forEach(([today, terms, privacies]) =>
  console.log(solution(today, terms, privacies))
);
