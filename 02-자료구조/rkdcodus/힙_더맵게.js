class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftChildIdx(idx) {
    return idx * 2 + 1;
  }

  getRightChildIdx(idx) {
    return idx * 2 + 2;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  // heap에 추가
  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parentIdx = this.getParentIdx(idx);
      if (this.heap[parentIdx] <= this.heap[idx]) break;
      this.swap(parentIdx, idx);
      idx = parentIdx;
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyDown() {
    let idx = 0;
    while (this.getLeftChildIdx(idx) < this.heap.length) {
      let smallerChildIdx = this.getLeftChildIdx(idx);
      const rightChildIdx = this.getRightChildIdx(idx);
      if (
        rightChildIdx < this.heap.length &&
        this.heap[smallerChildIdx] > this.heap[rightChildIdx]
      ) {
        smallerChildIdx = rightChildIdx;
      }

      if (this.heap[smallerChildIdx] >= this.heap[idx]) break;
      this.swap(smallerChildIdx, idx);
      idx = smallerChildIdx;
    }
  }

  getRoot() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  let answer = 0;

  scoville.forEach((value) => {
    heap.push(value);
  });

  while (heap.getRoot() < K) {
    answer += 1;

    if (heap.size() === 1) {
      answer = -1;
      break;
    }

    const low1 = heap.pop();
    const low2 = heap.pop();
    heap.push(low1 + low2 * 2);
  }

  return answer;
}
