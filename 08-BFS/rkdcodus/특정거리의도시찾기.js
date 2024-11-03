// 18352 백준 실2
// 3번 실패.
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// 1. 단방향 인접리스트 만들기
// 2. 이미 방문한 도시는 무시. => 이미 방문한 거리가 최단거리임. 방문 리스트에 거리 저장.
// 주의) 방문 리스트는 -1로 표시하는 것이 중요. 0으로 설정해두면 이미 방문처리된 도시로 처리될 수 있음.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(item) {
    const node = new Node(item);

    if (!this.head) {
      this.tail = node;
      this.head = node;
      this.size += 1;
      return;
    }

    this.tail.next = node;
    this.tail = node;
    this.size += 1;
  }

  dequeue() {
    if (!this.head) return null;
    const node = this.head;
    this.head = node.next;

    if (!this.head) this.tail = null;
    this.size -= 1;

    return node.value;
  }

  peek() {
    return this.head ? this.head.value : null;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const [n, m, k, x] = input[0];
const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => -1);

// 인접리스트 구현.
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i];
  graph[a].push(b);
}

const bfs = (x) => {
  const queue = new Queue();
  queue.enqueue(x);
  visited[x] = 0;
  while (!queue.isEmpty()) {
    const city = queue.dequeue();

    for (let next of graph[city]) {
      if (visited[next] !== -1) continue;
      visited[next] = visited[city] + 1;
      queue.enqueue(next);
    }
  }
};

bfs(x);

const answer = [];
// k와 같은 거리인 도시 출력하기.
for (let i = 1; i <= n; i++) {
  if (visited[i] === k) answer.push(i);
}

if (answer.length) console.log(answer.join("\n"));
else console.log(-1);
