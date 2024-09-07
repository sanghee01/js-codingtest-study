class MinHeap {
  constructor() {
    this.heap = []; // 힙을 저장할 배열 초기화
  }

  // 새로운 값을 힙에 삽입하는 메서드
  insert(value) {
    this.heap.push(value); // 새로운 값을 힙의 마지막에 추가
    this.bubbleUp(); // 힙 속성을 유지하기 위해 상향식 힙화 수행
  }

  // 힙에서 최솟값을 제거하고 반환하는 메서드
  extractMin() {
    if (this.size() === 0) {
      throw new Error("Heap is empty"); // 힙이 비어 있을 경우 에러 발생
    }
    const min = this.heap[0]; // 루트 노드(최솟값)를 저장
    const end = this.heap.pop(); // 힙의 마지막 요소를 제거

    if (this.size() > 0) {
      this.heap[0] = end; // 마지막 요소를 루트로 이동
      this.bubbleDown(); // 힙 속성을 유지하기 위해 하향식 힙화 수행
    }
    return min; // 제거된 최솟값 반환
  }

  // 힙의 루트 노드(최솟값)를 반환하는 메서드
  peek() {
    return this.heap[0]; // 힙의 최상단 요소(최솟값)를 반환
  }

  // 힙의 크기를 반환하는 메서드
  size() {
    return this.heap.length; // 현재 힙에 저장된 요소의 개수를 반환
  }

  // 상향식 힙화 (Bubble Up) - 새로운 요소가 추가되었을 때 호출
  bubbleUp() {
    let index = this.heap.length - 1; // 새로 삽입된 요소의 인덱스
    const element = this.heap[index]; // 삽입된 요소의 값

    // 루트에 도달할 때까지 반복
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2); // 부모 노드의 인덱스 계산
      const parent = this.heap[parentIndex]; // 부모 노드의 값

      if (element >= parent) break; // 부모가 더 작거나 같으면 힙 속성 유지됨, 종료

      // 자식과 부모를 교환하여 힙 속성 복구
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex; // 부모 인덱스로 이동하여 반복
    }
  }

  // 하향식 힙화 (Bubble Down) - 루트에서 최솟값이 제거된 후 호출
  bubbleDown() {
    let index = 0; // 루트 노드에서 시작
    const length = this.heap.length; // 힙의 크기
    const element = this.heap[0]; // 현재 루트 노드의 값

    // 자식이 존재하는 동안 반복
    while (true) {
      let leftChildIndex = 2 * index + 1; // 왼쪽 자식 노드의 인덱스
      let rightChildIndex = 2 * index + 2; // 오른쪽 자식 노드의 인덱스
      let leftChild, rightChild;
      let swap = null; // 교환할 자식 노드의 인덱스

      // 왼쪽 자식이 있는지 확인
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex]; // 왼쪽 자식의 값
        if (leftChild < element) {
          // 왼쪽 자식이 더 작으면
          swap = leftChildIndex; // 교환할 인덱스로 설정
        }
      }

      // 오른쪽 자식이 있는지 확인
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex]; // 오른쪽 자식의 값
        if (
          (swap === null && rightChild < element) || // 교환할 인덱스가 없고, 오른쪽 자식이 작거나
          (swap !== null && rightChild < leftChild)
        ) {
          // 오른쪽 자식이 왼쪽 자식보다 작으면
          swap = rightChildIndex; // 교환할 인덱스로 설정
        }
      }

      if (swap === null) break; // 교환할 자식이 없으면 종료

      // 자식과 현재 요소를 교환하여 힙 속성 복구
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap; // 교환된 위치로 이동하여 반복
    }
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();

  for (const s of scoville) {
    heap.insert(s);
  }

  let mixCount = 0;

  while (heap.size() > 0) {
    const min1 = heap.extractMin();

    if (min1 >= K) {
      return mixCount;
    }

    if (heap.size() === 0) {
      return -1;
    }

    const min2 = heap.extractMin();
    const newScoville = min1 + min2 * 2;
    heap.insert(newScoville);
  }

  return -1;
}
