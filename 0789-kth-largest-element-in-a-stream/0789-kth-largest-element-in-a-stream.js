/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
  // 생성자
  // k: k번째 큰 수, nums: 숫자 배열 -> 초기화 시, 오름차순으로
  // 최소 힙
  constructor(k, nums) {
    this.k = k;
    this.heap = [];

    for (let num of nums) {
      this.add(num);
    }
  }

  heapifyUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.heap[p] > this.heap[i]) {
        [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
        i = p;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let i = 0;
    while (i * 2 + 1 < this.heap.length) {
      let l = 2 * i + 1;
      let r = 2 * i + 2;

      let smallest = l;
      if (r < this.heap.length && this.heap[r] < this.heap[l]) {
        smallest = r;
      }
      if (this.heap[i] > this.heap[smallest]) {
        [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
        i = smallest;
      } else {
        break;
      }
    }
  }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.push(val);
  this.heapifyUp();

  if (this.heap.length > this.k) {
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
  }

  return this.heap[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */