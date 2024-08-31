// 다시 풀기. 해결하지 못해서 일단 GPT 코드 올립니다.

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= lastInsertedNode) break;

      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }

    this.heap[index] = lastInsertedNode;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const root = this.heap[0];

    while (true) {
      const leftChildIdx = 2 * index + 1;
      const rightChildIdx = 2 * index + 2;
      let smallerChildIdx = leftChildIdx;

      if (leftChildIdx >= length) break;

      if (
        rightChildIdx < length &&
        this.heap[rightChildIdx] < this.heap[leftChildIdx]
      ) {
        smallerChildIdx = rightChildIdx;
      }

      if (this.heap[smallerChildIdx] >= root) break;

      this.heap[index] = this.heap[smallerChildIdx];
      index = smallerChildIdx;
    }

    this.heap[index] = root;
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();
  scoville.forEach((s) => minHeap.push(s));

  let count = 0;

  while (minHeap.peek() < K) {
    if (minHeap.size() < 2) return -1;

    const first = minHeap.pop();
    const second = minHeap.pop();

    const newScoville = first + second * 2;
    minHeap.push(newScoville);
    count++;
  }

  return count;
}
