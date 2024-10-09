const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, ...cases] = input.map(Number);

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  insert(x) {
    this.heap.push(x);
    this.bubbleUp();
  }

  bubbleUp() {
    let currIdx = this.heap.length - 1;

    while (currIdx > 0) {
      let parentIdx = Math.floor((currIdx - 1) / 2);

      if (this.heap[parentIdx] < this.heap[currIdx]) {
        [this.heap[parentIdx], this.heap[currIdx]] = [
          this.heap[currIdx],
          this.heap[parentIdx],
        ];
      } else {
        break;
      }

      currIdx = parentIdx;
    }
  }

  getMax() {
    if (this.isEmpty()) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkdown(0);

    return max;
  }

  sinkdown(index) {
    let leftChild = 2 * index + 1;
    let rightChild = 2 * index + 2;
    const length = this.heap.length;
    let largest = index;
    if (leftChild < length && this.heap[leftChild] > this.heap[largest]) {
      largest = leftChild;
    }
    if (rightChild < length && this.heap[rightChild] > this.heap[largest]) {
      largest = rightChild;
    }
    if (largest !== index) {
      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest],
      ];
      this.sinkdown(largest);
    }
  }
}

const answer = [];
const heap = new MaxHeap();

for (let i = 0; i < n; i++) {
  let x = cases[i];

  if (x === 0) {
    answer.push(heap.getMax());
  } else {
    heap.insert(x);
  }
}

console.log(answer.join('\n'));
