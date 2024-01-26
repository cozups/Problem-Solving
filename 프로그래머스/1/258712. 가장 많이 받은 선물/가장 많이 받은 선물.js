function solution(friends, gifts) {
  var answer = 0;
  const g = {};
  const gn = {};
  const a = {};
  for (const f of friends) {
    g[f] = {};
    gn[f] = 0;
    a[f] = 0;
  }

  for (const gift of gifts) {
    let [a, b] = gift.split(' ');

    gn[a]++;
    gn[b]--;
    if (!g[a][b]) {
      g[a][b] = 1;
      g[b][a] = -1;
    } else {
      g[a][b]++;
      g[b][a]--;
    }
  }

  for (let x = 0; x < friends.length; x++) {
    for (let y = x + 1; y < friends.length; y++) {
      let i = friends[x];
      let j = friends[y];
      if (g[i][j]) {
        // 주고 받음
        if (g[i][j] > 0) {
          a[i]++;
        } else if (g[i][j] < 0) {
          a[j]++;
        } else {
          if (gn[i] > gn[j]) {
            a[i]++;
          } else if (gn[i] < gn[j]) {
            a[j]++;
          }
        }
      } else {
        // 주고 받지 않음
        if (gn[i] > gn[j]) {
          a[i]++;
        } else if (gn[i] < gn[j]) {
          a[j]++;
        }
      }
    }
  }

  answer = Math.max(...Object.values(a));

  return answer;
}