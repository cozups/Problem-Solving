function solution(book_time) {
  var answer = 0;

  let calculatedBooktime = [];
  let booked = [];

  for (let b of book_time) {
    let [start, end] = b;

    let [sh, sm] = start.split(':');
    let [eh, em] = end.split(':');

    // 청소 시간 10분 포함
    calculatedBooktime.push([+sh * 60 + +sm, +eh * 60 + +em + 10]);
  }

  // 종료 시간 기준 정렬
  calculatedBooktime.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < calculatedBooktime.length; i++) {
    if (!booked.length) {
      booked.push([calculatedBooktime[i]]);
      continue;
    }

    let [s, e] = calculatedBooktime[i];
    let j = 0;
    for (j; j < booked.length; j++) {
      // 예약을 넣을 타임의 종료 시간이 예약된 시간의 시작 시간보다 작거나 같은 경우 예약 가능
      // 각 방(booked[j])에는 역순으로 예약된다. => 배열의 뒤로 갈 수록 이른 시간 예약
      if (e <= booked[j][booked[j].length - 1][0]) {
        booked[j].push([s, e]);
        break;
      }
    }
    // 예약을 넣을 수 있는 방이 없으면 새로 방 추가
    if (j === booked.length) {
      booked.push([[s, e]]);
    }
  }

  return booked.length;
}

console.log(
  solution([
    ['10:20', '12:30'],
    ['10:20', '12:30'],
    ['10:20', '12:30'],
  ])
);
