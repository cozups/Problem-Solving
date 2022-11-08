function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let on = [];
  let rest = weight;

  while (truck_weights.length > 0 || on.length > 0) {
    // 앞으로 감
    on = on.map(([truck, len]) => {
      return [truck, len + 1];
    });
    answer++;

    if (on[0] && on[0][1] > bridge_length) {
      // 트럭 내림
      let done = on.shift();
      rest += done[0];
    }

    if (truck_weights[0] && rest >= truck_weights[0]) {
      // 트럭 올라갈 수 있으면
      let truck = truck_weights.shift();
      rest -= truck;
      on.push([truck, 1]);
    }
  }

  return answer;
}
