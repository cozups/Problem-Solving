/**
 * @param {number[]} stones 돌의 무게가 담긴 배열
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    // 가장 무거운 두 개의 돌을 꺼내서 부딪힌다
    // 무게가 같으면 둘다 부서진다.
    // 무게가 같지 않으면 x는 부서지고 y는 y-x 무게가 된다.
    // 마지막 하나가 남을때까지 게임을 한다. 최종 무게를 구하기
    const q = new MaxPriorityQueue();

    for (let stone of stones) {
        q.enqueue(stone);
    }

    while (q.size() > 1) {
        let y = q.dequeue();
        let x = q.dequeue();
        if (y - x > 0) {
            q.enqueue(y - x);
        }
    }

    return q.size() === 1 ? q.front() : 0;
};