function PriorityQueue(comparator = (a, b) => a - b) {
  this._heap = [];
  this._comparator = comparator;
}

PriorityQueue.prototype.isEmpty = function () {
  return this._heap.length === 0;
};

PriorityQueue.prototype.enq = function (value) {
  this._heap.push(value);
  this._bubbleUp();
};

PriorityQueue.prototype.deq = function () {
  const top = this.peek();
  const bottom = this._heap.pop();
  if (!this.isEmpty()) {
    this._heap[0] = bottom;
    this._bubbleDown();
  }
  return top;
};

PriorityQueue.prototype.peek = function () {
  return this._heap[0];
};

PriorityQueue.prototype._bubbleUp = function () {
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
};

PriorityQueue.prototype._bubbleDown = function () {
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
};

const input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, E] = input[0].split(" ").map(Number);
const INF = Number.MAX_SAFE_INTEGER;
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= E; i++) {
  const [u, v, w] = input[i].split(" ").map(Number);
  graph[u].push([v, w]);
  graph[v].push([u, w]);
}

const [v1, v2] = input[E + 1].split(" ").map(Number);

function dijkstra(start) {
  const distance = Array(N + 1).fill(INF);
  const pq = new PriorityQueue((a, b) => a[0] - b[0]); // 최소힙
  distance[start] = 0;
  pq.enq([0, start]);

  while (!pq.isEmpty()) {
    const [dist, now] = pq.deq();
    if (distance[now] < dist) continue;

    for (const [next, weight] of graph[now]) {
      const cost = dist + weight;
      if (cost < distance[next]) {
        distance[next] = cost;
        pq.enq([cost, next]);
      }
    }
  }
  return distance;
}

// 다익스트라를 통해 각 지점 간의 최단 거리 구하기
const distFrom1 = dijkstra(1);
const distFromV1 = dijkstra(v1);
const distFromV2 = dijkstra(v2);

const route1 = distFrom1[v1] + distFromV1[v2] + distFromV2[N];
const route2 = distFrom1[v2] + distFromV2[v1] + distFromV1[N];

// 최단 경로 계산
const answer = Math.min(route1, route2);
console.log(answer >= INF ? -1 : answer);
