const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

/**
 * 1504 골4 혼자 풀기 실패
 * 한 지점에서 출발해 모든 최단 경로 구하기. 다익스트라, 우선순위큐 or 최단거리테이블 갱신.
 * 총 3번의 다익스트라를 진행하면 됨.
 *
 */

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

const [n, e] = input[0];
const [a, b] = input.at(-1);
let graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= e; i++) {
  const [a, b, cost] = input[i];
  graph[a].push([b, cost]);
  graph[b].push([a, cost]);
}

const dijkstra = (start) => {
  // 우선순위 큐 최소힙 사용.
  let pq = new MinHeap();
  // 시작노드의 최단거리는 0, 큐에 삽입.
  pq.push([0, start]);
  distance[start] = 0;

  while (pq.size()) {
    let [dist, now] = pq.pop();
    // 이미 처리된 적이 있으면 무시.
    if (distance[now] < dist) continue;
    // 다른 인접한 노드 탐색
    for (let i of graph[now]) {
      let cost = dist + i[1];
      // 현재 최단거리테이블에 저장된 비용보다 작다면 갱신.
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        pq.push([cost, i[0]]);
      }
    }
  }
};

let distance = new Array(n + 1).fill(Infinity);
dijkstra(1);
let cost_1_to_a = distance[a];
let cost_1_to_b = distance[b];

distance = new Array(n + 1).fill(Infinity);
dijkstra(a);
let cost_a_to_b = distance[b];
let cost_a_to_n = distance[n];

distance = new Array(n + 1).fill(Infinity);
dijkstra(b);
let cost_b_to_a = distance[a];
let cost_b_to_n = distance[n];

const route1 = cost_1_to_a + cost_a_to_b + cost_b_to_n;
const route2 = cost_1_to_b + cost_b_to_a + cost_a_to_n;

let result = Math.min(route1, route2);
if (result >= Infinity) return console.log(-1);
console.log(result);
