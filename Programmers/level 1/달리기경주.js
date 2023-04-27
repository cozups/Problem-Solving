function solution(players, callings) {
  let playersIndex = {};

  players.forEach((call, index) => {
    playersIndex[call] = index;
  });

  for (let call of callings) {
    let playerToSwitch = players[playersIndex[call] - 1];
    [players[playersIndex[call]], players[playersIndex[playerToSwitch]]] = [
      players[playersIndex[playerToSwitch]],
      players[playersIndex[call]],
    ];
    playersIndex[call]--;
    playersIndex[playerToSwitch]++;
  }

  return players;
}

console.log(
  solution(
    ['mumu', 'soe', 'poe', 'kai', 'mine'],
    ['kai', 'kai', 'mine', 'mine']
  )
);
