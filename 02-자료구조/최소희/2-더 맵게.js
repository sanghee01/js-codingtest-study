/**
 * 다시 풀기
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.getParentIndex(index) >= 0 &&
      this.heap[this.getParentIndex(index)] > this.heap[index]
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) break;
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  size() {
    return this.heap.length;
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();
  for (let num of scoville) {
    minHeap.push(num);
  }

  let mixCount = 0;

  while (minHeap.size() > 1 && minHeap.heap[0] < K) {
    let first = minHeap.pop();
    let second = minHeap.pop();
    let newScoville = first + second * 2;
    minHeap.push(newScoville);
    mixCount++;
  }

  return minHeap.heap[0] >= K ? mixCount : -1;
}
