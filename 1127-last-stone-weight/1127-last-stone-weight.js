class H {
    constructor(stones) {
        this.length = 0;
        this.arr = [];
        for (let stone of stones) {
            this.add(stone);
        }
    }

    add(val) {
        this.arr.push(val);
        this.heapifyUp()
        this.length++;
    }

    remove() {
        if (this.arr.length === 0) return 0;
        if (this.arr.length === 1) {
            this.length--;
            return this.arr.pop();
        }
        const result = this.arr[0];
        this.arr[0] = this.arr.pop();
        this.heapifyDown();
        this.length--;
        return result;
    }

    heapifyUp() {
        let i = this.arr.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);

            if (this.arr[p] < this.arr[i]) {
                [this.arr[p], this.arr[i]] = [this.arr[i], this.arr[p]];
            }
            i = p;
        }
    }

    heapifyDown() {
        let i = 0;
        while (true) {
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            let largest = left;

            if (left < this.arr.length && this.arr[left] < this.arr[right]) {
                largest = right;
            }
            if (this.arr[i] < this.arr[largest]) {
                [this.arr[i], this.arr[largest]] = [this.arr[largest], this.arr[i]];
                i = largest;
            } else {
                break;
            }
        }
    }
}

/**
 * @param {number[]} stones 돌의 무게가 담긴 배열
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    // 가장 무거운 두 개의 돌을 꺼내서 부딪힌다
    // 무게가 같으면 둘다 부서진다.
    // 무게가 같지 않으면 x는 부서지고 y는 y-x 무게가 된다.
    // 마지막 하나가 남을때까지 게임을 한다. 최종 무게를 구하기
    const q = new H(stones);

    while (q.length > 1) {
        let y = q.remove();
        let x = q.remove();
        if (y - x > 0) {
            q.add(y - x);
        }
    }

    return q.remove();
};