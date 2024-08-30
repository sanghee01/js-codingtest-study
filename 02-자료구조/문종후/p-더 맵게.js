function solution(scoville, K) {
  function MinHeap() {
    this.heap = [];

    this.push = function (value) {
      this.heap.push(value);
      let currentIndex = this.heap.length - 1;
      while (currentIndex > 0) {
        let parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.heap[parentIndex] <= this.heap[currentIndex]) break;

        [this.heap[parentIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[parentIndex],
        ];
        currentIndex = parentIndex;
      }
    };

    this.pop = function () {
      if (this.heap.length === 0) return null;
      let minValue = this.heap[0];
      let endValue = this.heap.pop();

      if (this.heap.length > 0) {
        this.heap[0] = endValue;
        let currentIndex = 0;

        while (true) {
          let leftChildIndex = currentIndex * 2 + 1;
          let rightChildIndex = currentIndex * 2 + 2;
          let swapIndex = null;

          if (
            leftChildIndex < this.heap.length &&
            this.heap[leftChildIndex] < this.heap[currentIndex]
          ) {
            swapIndex = leftChildIndex;
          }
          if (
            rightChildIndex < this.heap.length &&
            this.heap[rightChildIndex] <
              (swapIndex === null
                ? this.heap[currentIndex]
                : this.heap[leftChildIndex])
          ) {
            swapIndex = rightChildIndex;
          }
          if (swapIndex === null) break;

          [this.heap[currentIndex], this.heap[swapIndex]] = [
            this.heap[swapIndex],
            this.heap[currentIndex],
          ];
          currentIndex = swapIndex;
        }
      }

      return minValue;
    };
  }

  let minHeap = new MinHeap();
  scoville.forEach((spicy) => minHeap.push(spicy));

  let mixCount = 0;

  while (minHeap.heap.length > 1 && minHeap.heap[0] < K) {
    let firstMin = minHeap.pop();
    let secondMin = minHeap.pop();
    let newScoville = firstMin + secondMin * 2;
    minHeap.push(newScoville);
    mixCount++;
  }

  if (minHeap.heap[0] < K) {
    return -1;
  }

  return mixCount;
}
