// 5214 백준 골2

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

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

// 각 역마다 어떤 하이퍼튜브가 연결되어있는지 리스트를 짠다..
// 1번 역에서 출발할 수 잇는 하이퍼튜브는 몇번 몇번 있는지 확인.
// 들르는 역을 큐에 저장(count 세기 )
// 역 배열을 만들어두고 해당 역에 도달했을 때 최소 count를 저장.
// 이미 들른 역은 최소값 계산이 끝났단 소리로 방문 처리하여 방문한 역은 다시 들르지 않는다.

const [n, k, m] = input[0];
// 갈 수 없는 역은 -1을 출력하기 위해 초깃값 -1 설정.
const visited = Array.from({ length: n + 1 }, () => -1);
const station = Array.from({ length: n + 1 }, () => []);
const hypertubes = input.slice(1);

for (let i = 0; i < m; i++) {
  for (let j = 0; j < k; j++) {
    station[hypertubes[i][j]].push(i);
  }
}

const bfs = (x) => {
  const queue = new Queue();
  queue.enqueue([x, 1]);
  visited[x] = 1;

  while (!queue.isEmpty()) {
    const [x, count] = queue.dequeue();

    // 역에서 환승할 수 있는 하이퍼튜브
    for (let i of station[x]) {
      // 하이퍼튜브에서 갈 수 있는 역
      for (let j of hypertubes[i]) {
        // 방문하지 않은 역이라면
        if (visited[j] === -1) {
          // 방문처리.
          visited[j] = count + 1;
          // 큐에 넣기
          queue.enqueue([j, count + 1]);
        }
      }
    }
  }
};

bfs(1);
console.log(visited[n]);
