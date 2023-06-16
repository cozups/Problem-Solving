function solution(picks, minerals) {
  var answer = 0;

  const tiredness = [
    { diamond: 1, iron: 1, stone: 1 },
    { diamond: 5, iron: 1, stone: 1 },
    { diamond: 25, iron: 5, stone: 1 },
  ];

  let countedTiredness = [];
  let totalPicks = picks.reduce((acc, cur) => acc + cur, 0);
  for (let i = 0; i < minerals.length; i += 5) {
    if (!totalPicks) break;

    let t = { diamond: 0, iron: 0, stone: 0 };
    for (let j = i; j < i + 5; j++) {
      if (j === minerals.length) break;

      t['diamond'] += tiredness[0][minerals[j]];
      t['iron'] += tiredness[1][minerals[j]];
      t['stone'] += tiredness[2][minerals[j]];
    }

    countedTiredness.push(t);
    totalPicks--;
  }

  countedTiredness.sort((a, b) => b.stone - a.stone);

  for (let m of countedTiredness) {
    if (picks[0]) {
      answer += m['diamond'];
      picks[0]--;
      continue;
    }
    if (picks[1]) {
      answer += m['iron'];
      picks[1]--;
      continue;
    }
    if (picks[2]) {
      answer += m['stone'];
      picks[2]--;
      continue;
    }
  }

  return answer;
}

console.log(
  solution(
    [1, 3, 2],
    [
      'diamond',
      'diamond',
      'diamond',
      'iron',
      'iron',
      'diamond',
      'iron',
      'stone',
    ]
  )
);
