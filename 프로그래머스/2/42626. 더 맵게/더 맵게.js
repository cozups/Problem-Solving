class MinHeap {
  constructor(arr) {
    this.arr = [];

    arr.forEach((val) => this.add(val));
  }

  add(val) {
    this.arr.push(val);
    this.heapifyUp();
  }

  remove() {
    [this.arr[0], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[0]];
    const val = this.arr.pop();
    this.heapifyDown();
    return val;
  }

  heapifyUp() {
    let i = this.arr.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.arr[parent] > this.arr[i]) {
        [this.arr[parent], this.arr[i]] = [this.arr[i], this.arr[parent]];
        i = parent;
      } else break;
    }
  }

  heapifyDown() {
    let i = 0;
    while (2 * i + 1 < this.arr.length) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = left;
      if (right < this.arr.length && this.arr[right] < this.arr[left]) smallest = right;
      if (this.arr[smallest] < this.arr[i]) {
        [this.arr[smallest], this.arr[i]] = [this.arr[i], this.arr[smallest]];
        i = smallest;
      } else break;
    }
  }
}

function solution(scoville, K) {
  var answer = 0;
  let heap = new MinHeap(scoville);
  while (heap.arr[0] < K) {
    if (heap.arr.length === 1) return -1;
    let first = heap.remove();
    let second = heap.remove();
    let mixed = first + second * 2;
    heap.add(mixed);
    answer++;
  }

  return answer;
}