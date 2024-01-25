function solution(bandage, health, attacks) {
  var answer = 0;
  let [hTime, amount, plus] = bandage;
  let maxHP = health;

  let t = 0;
  for (let attack of attacks) {
    let [aTime, damage] = attack;

    let s = 0;
    while (true) {
      ++t;
      if (t === aTime) {
        health -= damage;
        if (health <= 0) {
          return -1;
        }
        break;
      }
      health = health + amount > maxHP ? maxHP : health + amount;
      s++;
      if (s === hTime) {
        health = health + plus > maxHP ? maxHP : health + plus;
        s = 0;
      }
    }
  }
  answer = health;

  return answer;
}