function PriorityQueue(comparator) {
  this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR; // 큐의 정렬 기준을 정의하는 함수
  this._elements = []; // 큐의 데이터를 저장하는 배열
}

// 숫자와 문자열을 비교하는 기본 함수
// a > b이면 양수를, a < b이면 음수를 반환 -> 우선순위가 낮은 숫자가 큐에서 먼저 나올 수 있음
PriorityQueue.DEFAULT_COMPARATOR = function (a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    a = a.toString();
    b = b.toString();

    if (a == b) return 0;

    return a > b ? 1 : -1;
  }
};

// 큐가 비어 있는지 확인
PriorityQueue.prototype.isEmpty = function () {
  return this.size() === 0;
};

// 큐에서 가장 높은 우선순위를 가진 요소(최상위 요소)를 반환
PriorityQueue.prototype.peek = function () {
  if (this.isEmpty()) throw new Error("PriorityQueue is empty");

  return this._elements[0];
};

// 큐에서 가장 높은 우선순위를 가진 요소를 제거하고 반환
PriorityQueue.prototype.deq = function () {
  var first = this.peek();
  var last = this._elements.pop();
  var size = this.size();

  if (size === 0) return first;

  this._elements[0] = last;
  var current = 0;

  while (current < size) {
    var largest = current;
    var left = 2 * current + 1;
    var right = 2 * current + 2;

    if (left < size && this._compare(left, largest) >= 0) {
      largest = left;
    }

    if (right < size && this._compare(right, largest) >= 0) {
      largest = right;
    }

    if (largest === current) break;

    this._swap(largest, current);
    current = largest;
  }

  return first;
};

// 우선순위 큐에 새로운 요소를 추가
PriorityQueue.prototype.enq = function (element) {
  var size = this._elements.push(element);
  var current = size - 1;

  while (current > 0) {
    var parent = Math.floor((current - 1) / 2);

    if (this._compare(current, parent) <= 0) break;

    this._swap(parent, current);
    current = parent;
  }

  return size;
};

// 큐에 있는 요소의 개수를 반환
PriorityQueue.prototype.size = function () {
  return this._elements.length;
};

// 대기열 요소를 반복
PriorityQueue.prototype.forEach = function (fn) {
  return this._elements.forEach(fn);
};

// a와 b 인덱스에 있는 요소를 comparator 함수를 사용해 비교
PriorityQueue.prototype._compare = function (a, b) {
  return this._comparator(this._elements[a], this._elements[b]);
};

// a와 b 인덱스에 있는 요소를 서로 교환
PriorityQueue.prototype._swap = function (a, b) {
  var aux = this._elements[a];
  this._elements[a] = this._elements[b];
  this._elements[b] = aux;
};

// 다익스트라 함수
function dijkstra() {
  const pq = new PriorityQueue((a, b) => b[0] - a[0]); // 최소힙

  pq.enq([0, START]);
  distance[START] = 0;
  while (pq.size() != 0) {
    let [dist, now] = pq.deq();
    if (distance[now] < dist) continue;
    for (let i of graph[now]) {
      let cost = dist + i[1];
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        pq.enq([cost, i[0]]);
      }
    }
  }
}

let input = require("fs")
  .readFileSync("../../input.txt")
  .toString()
  .trim()
  .split("\n");

const [V, E] = input[0].split(" ").map(Number); // 노드 개수, 간선 개수
const START = Number(input[1]);
const INF = Number.MAX_SAFE_INTEGER;

const graph = []; // 각 노드에 연결되어 있는 노드에 대한 정보
for (let i = 0; i <= V; i++) graph.push([]);

// 모든 간선 정보를 입력받기
for (let i = 2; i < E + 2; i++) {
  let [a, b, c] = input[i].split(" ").map(Number); // a번 노드 -> b번 노드, 비용 c
  graph[a].push([b, c]);
}
console.log("graph", graph);

// 최단 거리 테이블을 모두 무한으로 초기화
const distance = new Array(V + 1).fill(INF);

dijkstra();

// 모든 노드로 가기 위한 최단 거리를 출력
for (let i = 1; i <= V; i++) {
  if (distance[i] == INF) console.log("INF");
  else console.log(distance[i]);
}
