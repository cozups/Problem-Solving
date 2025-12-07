// 입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 입력값 가공
let [[n, m], ...rest] = input.map((line) => line.split(" ").map(Number));

// 풀이
function solution() {
  let edges = [];

  for (let i = 0; i < m; i++) {
    let [s, e, w] = rest[i];
    edges.push([s, e, w]);
  }

  let dist = Array.from({ length: n + 1 }, () => Infinity);

  function bf(start) {
    dist[start] = 0;

    // n번의 과정동안
    for (let i = 0; i < n; i++) {
      // 각 간선을 체크
      for (let j = 0; j < m; j++) {
        let [curr, next, weight] = edges[j];

        let prev = dist[next];
        dist[next] = Math.min(dist[next], dist[curr] + weight);

        // n번째 시도에도 거리 갱신이 되면 음의 사이클 존재
        if (i === n - 1 && prev !== dist[next]) {
          return true;
        }
      }
    }
    return false;
  }

  const negativeCycle = bf(1);
  if (negativeCycle) {
    console.log(-1);
  } else {
    for (let i = 2; i < dist.length; i++) {
      if (dist[i] === Infinity) {
        console.log(-1);
      } else {
        console.log(dist[i]);
      }
    }
  }
}

solution();
