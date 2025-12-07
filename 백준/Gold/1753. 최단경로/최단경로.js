// 입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 입력값 가공
let [[v, e], [k], ...rest] = input.map((line) => line.split(" ").map(Number));

// 풀이
function solution() {
  let adj = Array.from({ length: v + 1 }, () => []);

  for (let i = 0; i < e; i++) {
    let [u, v, w] = rest[i];

    adj[u].push([v, w]);
  }

  let dist = new Array(v + 1).fill(Infinity);
  let visited = new Array(v + 1).fill(false);
  visited[0] = true;

  function getSmallestIndex() {
    let min = Infinity;
    let index = -1;
    dist.forEach((val, i) => {
      if (val < min && !visited[i]) {
        index = i;
        min = val;
      }
    });

    return index;
  }

  function dijkstra() {
    dist[k] = 0;

    for (let i = 0; i < v; i++) {
      let current = getSmallestIndex();

      if (current === -1) break;

      visited[current] = true;

      for (let edge of adj[current]) {
        const [next, weight] = edge;

        if (!visited[next]) {
          dist[next] = Math.min(dist[next], dist[current] + weight);
        }
      }
    }
  }

  dijkstra();
  dist.forEach((val, index) => {
    if (index === 0) return;
    if (val === Infinity) {
      console.log("INF");
    } else {
      console.log(val);
    }
  });
}

solution();
