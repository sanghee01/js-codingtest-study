// 우선순위 큐 구현
class PriorityQueue {
  constructor(comparator = (a, b) => a - b) {
    this._heap = [];
    this._comparator = comparator;
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  enq(value) {
    this._heap.push(value);
    this._bubbleUp();
  }

  deq() {
    const top = this._heap[0];
    const bottom = this._heap.pop();
    if (!this.isEmpty()) {
      this._heap[0] = bottom;
      this._bubbleDown();
    }
    return top;
  }

  _bubbleUp() {
    let index = this._heap.length - 1;
    const element = this._heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this._heap[parentIndex];
      if (this._comparator(element, parent) >= 0) break;
      this._heap[index] = parent;
      index = parentIndex;
    }
    this._heap[index] = element;
  }

  _bubbleDown() {
    let index = 0;
    const length = this._heap.length;
    const element = this._heap[index];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let swapIndex = null;

      if (leftChildIndex < length) {
        const leftChild = this._heap[leftChildIndex];
        if (this._comparator(leftChild, element) < 0) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        const rightChild = this._heap[rightChildIndex];
        if (
          (swapIndex === null && this._comparator(rightChild, element) < 0) ||
          (swapIndex !== null &&
            this._comparator(rightChild, this._heap[swapIndex]) < 0)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;
      this._heap[index] = this._heap[swapIndex];
      index = swapIndex;
    }
    this._heap[index] = element;
  }
}

const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .split("\n");

const INF = Number.MAX_SAFE_INTEGER;
const [N, M, K] = input[0].split(" ").map(Number); // 노드 개수, 간선 개수, 포장할 수 있는 최대 횟수

const graph = Array.from({ length: N + 1 }, () => []);

// 간선 정보
for (let i = 1; i <= M; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

const distance = Array.from({ length: N + 1 }, () => Array(K + 1).fill(INF));

function dijkstra(start) {
  const pq = new PriorityQueue((a, b) => a[0] - b[0]); // 최소힙
  pq.enq([0, start, 0]); // 비용, 노드 번호, 포장 횟수
  distance[start][0] = 0;

  while (!pq.isEmpty()) {
    const [dist, now, paved] = pq.deq();

    // 현재 노드에 이미 더 적은 비용으로 도달했다면 무시
    if (distance[now][paved] < dist) continue;

    // 현재 노드와 연결된 다른 노드 탐색
    //  도로 포장을 하지 않고 이동하는 경우
    for (const [next, weight] of graph[now]) {
      const cost = dist + weight;
      if (cost < distance[next][paved]) {
        distance[next][paved] = cost;
        pq.enq([cost, next, paved]);
      }

      // 도로 포장을 하는 경우(포장 횟수가 남아 있는 경우)
      if (paved < K && dist < distance[next][paved + 1]) {
        distance[next][paved + 1] = dist;
        pq.enq([dist, next, paved + 1]);
      }
    }
  }
}

dijkstra(1); // 1번 노드에서 시작

// n번 노드에 도달할 때의 최소 비용을 찾기
let result = INF;
for (let i = 0; i <= K; i++) {
  result = Math.min(result, distance[N][i]);
}

console.log(result);
