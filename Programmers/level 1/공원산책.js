/* 제출한 답
function isAvailable(cur, w, h) {
  return cur[0] >= 0 && cur[0] <= h - 1 && cur[1] >= 0 && cur[1] <= w - 1;
}

function solution(park, routes) {
  var answer = [];
  let direction = {
    E: [0, 1],
    S: [1, 0],
    W: [0, -1],
    N: [-1, 0],
  };
  let start = [0, 0];
  let no = [];

  for (let i = 0; i < park.length; i++) {
    let s = park[i].indexOf('S');
    if (s >= 0) {
      start = [i, s];
    }

    let idx = park[i].indexOf('X');
    while (idx > -1) {
      no.push([i, idx]);
      idx = park[i].indexOf('X', idx + 1);
    }
  }

  for (let i = 0; i < routes.length; i++) {
    let [d, count] = routes[i].split(' ');

    let cur = start.slice();
    let possible = true;

    for (let i = 0; i < count; i++) {
      cur[0] += direction[d][0];
      cur[1] += direction[d][1];

      for (let n of no) {
        if (cur[0] === n[0] && cur[1] === n[1]) {
          possible = false;
          break;
        }
      }
    }

    if (possible && isAvailable(cur, park[0].length, park.length)) {
      start = cur.slice();
    }
  }

  answer = start;

  return answer;
} */

// 다른 풀이
function solution(park, routes) {
  var answer = [];

  let direction = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };
  let [sx, sy] = [0, 0];

  for (let i = 0; i < park.length; i++) {
    let s = park[i].indexOf('S');
    if (s > -1) {
      [sx, sy] = [i, s];
      break;
    }
  }

  for (let route of routes) {
    const [d, n] = route.split(' ');
    let [nx, ny] = [sx, sy];
    let cnt = 0;
    while (cnt < +n) {
      [nx, ny] = [nx + direction[d][0], ny + direction[d][1]];
      if (!park[nx] || !park[nx][ny] || park[nx][ny] === 'X') {
        break;
      }
      cnt++;
    }

    if (cnt === +n) {
      [sx, sy] = [nx, ny];
    }
  }

  return [sx, sy];
}

console.log(solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']));
